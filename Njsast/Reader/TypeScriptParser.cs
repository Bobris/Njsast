using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;
using System.Text.RegularExpressions;
using Njsast;
using Njsast.Ast;

namespace Njsast.Reader;

public static class TypeScriptParser
{
    public static string ConvertToJavaScript(string input)
    {
        return TypeScriptToJavaScript.Convert(input);
    }

    public static AstToplevel Parse(string input, Options? options = null)
    {
        options ??= new Options();
        options.ParseTypeScript = true;
        input = TypeScriptConstEnumLowering.Convert(input);
        if (!NeedsLegacySourceConversion(input, options.ParseJSX))
            return EraseTypeScriptOnly(Parser.Parse(input, options));
        var javaScript = TypeScriptToJavaScript.Convert(input);
        return Parser.Parse(javaScript, options);
    }

    public static AstToplevel ParseTsx(string input, Options? options = null)
    {
        options ??= new Options();
        options.ParseTypeScript = true;
        options.ParseJSX = true;
        input = TypeScriptConstEnumLowering.Convert(input);
        if (!NeedsLegacySourceConversion(input, options.ParseJSX))
            return EraseTypeScriptOnly(Parser.Parse(input, options));
        var javaScript = TypeScriptToJavaScript.Convert(input);
        return Parser.Parse(javaScript, options);
    }

    static bool NeedsLegacySourceConversion(string input, bool parseJsx)
    {
        var decoratorPositions = Regex.Matches(input, @"@");
        foreach (Match m in decoratorPositions)
        {
            var remaining = input.AsSpan(m.Index);
            var isClassDecorator = Regex.IsMatch(remaining.ToString(),
                @"^@[^\n]*\n[ \t]*(?:export\s+)?(?:abstract\s+)?class\b");
            if (!isClassDecorator)
                return true;
        }
        return false;
    }

    static AstToplevel EraseTypeScriptOnly(AstToplevel ast)
    {
        return (AstToplevel)new TypeScriptEraseTransformer().Transform(ast);
    }

    sealed class TypeScriptEraseTransformer : TreeTransformer
    {
        protected override AstNode? Before(AstNode node, bool inList)
        {
            return node is AstTypeScriptOnly ? Remove : null;
        }

        protected override AstNode? After(AstNode node, bool inList)
        {
            return null;
        }
    }
}

static class TypeScriptConstEnumLowering
{
    sealed record EnumMember(string Name, string? Value);

    static readonly Regex ConstEnum = new(@"(?<![\w$])(export\s+)?const\s+enum\s+([A-Za-z_$][\w$]*)\s*\{([^}]*)\}",
        RegexOptions.Singleline | RegexOptions.Compiled);

    public static string Convert(string input)
    {
        var constEnums = new Dictionary<string, Dictionary<string, string>>(StringComparer.Ordinal);
        var output = ConstEnum.Replace(input, match =>
        {
            var isExport = match.Groups[1].Success;
            var name = match.Groups[2].Value;
            var members = ParseMembers(match.Groups[3].Value);
            if (TryEvaluate(members, out var values))
            {
                constEnums[name] = values;
                return "";
            }

            return EmitRuntimeEnum(name, isExport, members);
        });

        foreach (var enumPair in constEnums)
        foreach (var memberPair in enumPair.Value)
            output = Regex.Replace(output, $@"\b{Regex.Escape(enumPair.Key)}\.{Regex.Escape(memberPair.Key)}\b", memberPair.Value);
        return output;
    }

    static List<EnumMember> ParseMembers(string body)
    {
        var result = new List<EnumMember>();
        foreach (var raw in body.Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries))
        {
            var parts = raw.Split('=', 2, StringSplitOptions.TrimEntries);
            if (parts[0].Length == 0) continue;
            result.Add(new EnumMember(parts[0], parts.Length == 2 ? parts[1] : null));
        }

        return result;
    }

    static bool TryEvaluate(List<EnumMember> members, out Dictionary<string, string> values)
    {
        values = new Dictionary<string, string>(StringComparer.Ordinal);
        double next = 0;
        foreach (var member in members)
        {
            if (member.Value == null)
            {
                values[member.Name] = next.ToString(CultureInfo.InvariantCulture);
                next++;
                continue;
            }

            var expression = member.Value;
            foreach (var pair in values)
                expression = Regex.Replace(expression, $@"\b{Regex.Escape(pair.Key)}\b", pair.Value);
            if (expression.StartsWith("\"", StringComparison.Ordinal) || expression.StartsWith("'", StringComparison.Ordinal))
            {
                values[member.Name] = expression;
                continue;
            }

            if (!TryEvaluateNumericExpression(expression, out var numeric))
                return false;
            values[member.Name] = numeric.ToString(CultureInfo.InvariantCulture);
            next = numeric + 1;
        }

        return true;
    }

    static bool TryEvaluateNumericExpression(string expression, out double value)
    {
        value = 0;
        var parts = expression.Split('|', StringSplitOptions.TrimEntries);
        if (parts.Length > 1)
        {
            var aggregate = 0;
            foreach (var part in parts)
            {
                if (!int.TryParse(part, NumberStyles.Integer, CultureInfo.InvariantCulture, out var number))
                    return false;
                aggregate |= number;
            }

            value = aggregate;
            return true;
        }

        return double.TryParse(expression, NumberStyles.Float, CultureInfo.InvariantCulture, out value);
    }

    static string EmitRuntimeEnum(string name, bool isExport, List<EnumMember> members)
    {
        var normalizedMembers = new List<(string Name, string? Value)>();
        foreach (var member in members)
            normalizedMembers.Add((member.Name, member.Value));
        return Parser.TsEmitEnumJavaScript(name, isExport, normalizedMembers);
    }
}

static class TypeScriptToJavaScript
{
    static readonly Regex TypeOnlyImport = new(@"^\s*import\s+type\s+[^;]+;\s*$", RegexOptions.Multiline | RegexOptions.Compiled);
    static readonly Regex TypeOnlyExport = new(@"^\s*export\s+type\s+[^;]+;\s*$", RegexOptions.Multiline | RegexOptions.Compiled);
    static readonly Regex TypeAlias = new(@"^\s*(?:export\s+)?type\s+\w+[^;]*;\s*", RegexOptions.Multiline | RegexOptions.Compiled);
    static readonly Regex Interface = new(@"^\s*(?:export\s+)?interface\s+\w+[^{]*\{(?:[^{}]|\{[^{}]*\})*\}\s*", RegexOptions.Multiline | RegexOptions.Compiled);
    static readonly Regex ImportTypeSpecifier = new(@"(?<![\w$])type\s+([A-Za-z_$][\w$]*)(?:\s+as\s+[A-Za-z_$][\w$]*)?\s*,?\s*", RegexOptions.Compiled);
    static readonly Regex ExportTypeSpecifier = new(@"(?<![\w$])type\s+([A-Za-z_$][\w$]*)(?:\s+as\s+[A-Za-z_$][\w$]*)?\s*,?\s*", RegexOptions.Compiled);

    public static string Convert(string input)
    {
        var constEnums = new Dictionary<string, Dictionary<string, string>>(StringComparer.Ordinal);
        var output = input;
        output = LowerEnums(output, constEnums);
        output = InlineConstEnumReferences(output, constEnums);
        output = RemoveTypeOnlyImportsAndExports(output);
        output = RemoveTypeDeclarations(output);
        output = RemoveAmbientAndOverloadDeclarations(output);
        output = TypeAlias.Replace(output, "");
        output = Interface.Replace(output, "");
        output = LowerClassDecorators(output);
        output = LowerPropertyDecorators(output);
        output = LowerParameterDecorators(output);
        output = LowerMethodDecorators(output);
        output = LowerParameterProperties(output);
        output = StripClassSyntax(output);
        output = StripTypes(output);
        output = StripTypeScriptExpressionOperators(output);
        return output;
    }

    static string StripClassSyntax(string input)
    {
        var output = Regex.Replace(input, @"\babstract\s+(?=class\b)", "");
        output = Regex.Replace(output, @"\s+implements\s+[A-Za-z_$][\w$]*(?:\s*,\s*[A-Za-z_$][\w$]*)*(?=\s*\{)", "");
        output = Regex.Replace(output, @"^\s*(?:public|private|protected)\s+abstract\s+[A-Za-z_$][\w$]*[^;{]*;\s*$", "",
            RegexOptions.Multiline);
        output = Regex.Replace(output, @"^\s*abstract\s+[A-Za-z_$][\w$]*[^;{]*;\s*$", "", RegexOptions.Multiline);
        output = Regex.Replace(output, @"^\s*(?:(?:public|private|protected|readonly|override|abstract)\s+)*(?:public|private|protected|readonly)\s+[A-Za-z_$][\w$]*[!?]?\s*(?::[^=;]+)?;\s*$", "",
            RegexOptions.Multiline);
        output = Regex.Replace(output, @"\b(?:public|private|protected|readonly|override)\s+(?=[A-Za-z_$#])", "");
        return output;
    }

    static string LowerClassDecorators(string input)
    {
        return Regex.Replace(input,
            @"(?<decorators>(?:^\s*@[^\r\n]+\r?\n)+)\s*class\s+(?<name>[A-Za-z_$][\w$]*)(?<tail>[^{]*)\{(?<body>[^{}]*(?:\{[^{}]*\}[^{}]*)*)\}",
            match =>
            {
                var name = match.Groups["name"].Value;
                var decorators = new List<string>();
                foreach (Match decoratorMatch in Regex.Matches(match.Groups["decorators"].Value, @"@\s*([^\r\n]+)"))
                    decorators.Add(decoratorMatch.Groups[1].Value.Trim());
                var decoratorList = string.Join(", ", decorators);
                return $"var {name} = class {name}{match.Groups["tail"].Value}{{{match.Groups["body"].Value}}};{name} = __decorate([{decoratorList}], {name});";
            }, RegexOptions.Multiline);
    }

    static string LowerMethodDecorators(string input)
    {
        return Regex.Replace(input,
            @"class\s+(?<className>[A-Za-z_$][\w$]*)(?<tail>[^{]*)\{(?<body>[^{}]*(?:\{[^{}]*\}[^{}]*)*)\}",
            match =>
            {
                var className = match.Groups["className"].Value;
                var decoratorCalls = new List<string>();
                var body = Regex.Replace(match.Groups["body"].Value,
                    @"(?m)^\s*@(?<decorator>[^\r\n]+)\r?\n\s*(?<method>[A-Za-z_$][\w$]*)\s*\((?<parameters>[^)]*)\)\s*(?::[^{]+)?\{(?<methodBody>[^{}]*)\}",
                    methodMatch =>
                    {
                        var decorator = methodMatch.Groups["decorator"].Value.Trim();
                        var method = methodMatch.Groups["method"].Value;
                        decoratorCalls.Add($"__decorate([{decorator}], {className}.prototype, \"{method}\", null);");
                        return $"{method}({methodMatch.Groups["parameters"].Value}) {{{methodMatch.Groups["methodBody"].Value}}}";
                    });
                return $"class {className}{match.Groups["tail"].Value}{{{body}}}{string.Join("", decoratorCalls)}";
            }, RegexOptions.Singleline);
    }

    static string LowerPropertyDecorators(string input)
    {
        return Regex.Replace(input,
            @"class\s+(?<className>[A-Za-z_$][\w$]*)(?<tail>[^{]*)\{(?<body>[^{}]*(?:\{[^{}]*\}[^{}]*)*)\}",
            match =>
            {
                var className = match.Groups["className"].Value;
                var decoratorCalls = new List<string>();
                var body = Regex.Replace(match.Groups["body"].Value,
                    @"(?m)^\s*@(?<decorator>[^\r\n]+)\r?\n\s*(?:(?:public|private|protected|readonly)\s+)*(?<property>[A-Za-z_$][\w$]*)[!?]?\s*(?::[^=;]+)?;\s*",
                    propertyMatch =>
                    {
                        var decorator = propertyMatch.Groups["decorator"].Value.Trim();
                        var property = propertyMatch.Groups["property"].Value;
                        decoratorCalls.Add($"__decorate([{decorator}], {className}.prototype, \"{property}\", void 0);");
                        return "";
                    });
                return $"class {className}{match.Groups["tail"].Value}{{{body}}}{string.Join("", decoratorCalls)}";
            }, RegexOptions.Singleline);
    }

    static string LowerParameterDecorators(string input)
    {
        return Regex.Replace(input,
            @"class\s+(?<className>[A-Za-z_$][\w$]*)(?<tail>[^{]*)\{(?<body>[^{}]*(?:\{[^{}]*\}[^{}]*)*)\}",
            match =>
            {
                var className = match.Groups["className"].Value;
                var decoratorCalls = new List<string>();
                var body = Regex.Replace(match.Groups["body"].Value,
                    @"(?<method>[A-Za-z_$][\w$]*)\s*\((?<parameters>[^)]*@[^)]*)\)\s*(?::[^{]+)?\{(?<methodBody>[^{}]*)\}",
                    methodMatch =>
                    {
                        var method = methodMatch.Groups["method"].Value;
                        var parameters = methodMatch.Groups["parameters"].Value
                            .Split(',', StringSplitOptions.TrimEntries);
                        var decorators = new List<string>();
                        for (var i = 0; i < parameters.Length; i++)
                        {
                            parameters[i] = Regex.Replace(parameters[i],
                                @"^@(?<decorator>[A-Za-z_$][\w$]*(?:\([^)]*\))?)\s+(?<parameter>.*)$",
                                parameterMatch =>
                                {
                                    decorators.Add($"__param({i}, {parameterMatch.Groups["decorator"].Value})");
                                    return parameterMatch.Groups["parameter"].Value;
                                });
                        }

                        if (decorators.Count > 0)
                        {
                            decoratorCalls.Add(
                                $"__decorate([{string.Join(", ", decorators)}], {className}.prototype, \"{method}\", null);");
                        }

                        return $"{method}({string.Join(", ", parameters)}) {{{methodMatch.Groups["methodBody"].Value}}}";
                    });
                return $"class {className}{match.Groups["tail"].Value}{{{body}}}{string.Join("", decoratorCalls)}";
            }, RegexOptions.Singleline);
    }

    static string LowerParameterProperties(string input)
    {
        return Regex.Replace(input, @"constructor\s*\((?<params>[^)]*)\)\s*\{", match =>
        {
            var parameters = match.Groups["params"].Value.Split(',', StringSplitOptions.TrimEntries);
            var assignments = new List<string>();
            for (var i = 0; i < parameters.Length; i++)
            {
                var parameter = parameters[i];
                var lowered = Regex.Replace(parameter,
                    @"^(?:(?:public|private|protected|readonly)\s+)+(?<name>[A-Za-z_$][\w$]*)(?<rest>.*)$",
                    m =>
                    {
                        var name = m.Groups["name"].Value;
                        assignments.Add($"this.{name} = {name};");
                        return name + m.Groups["rest"].Value;
                    });
                parameters[i] = lowered;
            }

            var bodyPrefix = assignments.Count == 0 ? "" : string.Join("", assignments);
            return $"constructor({string.Join(", ", parameters)}) {{{bodyPrefix}";
        });
    }

    static string RemoveTypeOnlyImportsAndExports(string input)
    {
        var output = TypeOnlyImport.Replace(input, "");
        output = TypeOnlyExport.Replace(output, "");
        output = Regex.Replace(output, @"import\s*\{([^}]*)\}\s*from\s*([^;]+);", match =>
        {
            var kept = CleanupSpecifiers(ImportTypeSpecifier.Replace(match.Groups[1].Value, ""));
            return kept.Length == 0 ? "" : $"import {{ {kept} }} from {match.Groups[2].Value.Trim()};";
        });
        output = Regex.Replace(output, @"export\s*\{([^}]*)\}\s*from\s*([^;]+);", match =>
        {
            var kept = CleanupSpecifiers(ExportTypeSpecifier.Replace(match.Groups[1].Value, ""));
            return kept.Length == 0 ? "" : $"export {{ {kept} }} from {match.Groups[2].Value.Trim()};";
        });
        output = Regex.Replace(output, @"export\s*\{([^}]*)\};", match =>
        {
            var kept = CleanupSpecifiers(ExportTypeSpecifier.Replace(match.Groups[1].Value, ""));
            return kept.Length == 0 ? "" : $"export {{ {kept} }};";
        });
        return output;
    }

    static string RemoveTypeDeclarations(string input)
    {
        var sb = new StringBuilder(input.Length);
        for (var i = 0; i < input.Length;)
        {
            if (StartsExportedOrPlainKeyword(input, i, "type"))
            {
                i = SkipTypeAliasDeclaration(input, i);
                continue;
            }

            if (StartsExportedOrPlainKeyword(input, i, "interface"))
            {
                i = SkipInterfaceDeclaration(input, i);
                continue;
            }

            sb.Append(input[i]);
            i++;
        }

        return sb.ToString();
    }

    static int SkipTypeAliasDeclaration(string input, int index)
    {
        var i = index;
        var brace = 0;
        var bracket = 0;
        var paren = 0;
        while (i < input.Length)
        {
            var ch = input[i];
            if (IsStringStart(ch))
            {
                i = SkipString(input, i);
                continue;
            }

            switch (ch)
            {
                case '{': brace++; break;
                case '}': if (brace > 0) brace--; break;
                case '[': bracket++; break;
                case ']': if (bracket > 0) bracket--; break;
                case '(': paren++; break;
                case ')': if (paren > 0) paren--; break;
                case ';':
                    if (brace == 0 && bracket == 0 && paren == 0) return i + 1;
                    break;
            }

            i++;
        }

        return i;
    }

    static int SkipInterfaceDeclaration(string input, int index)
    {
        var open = input.IndexOf('{', index);
        if (open < 0) return SkipTypeAliasDeclaration(input, index);
        var close = FindMatching(input, open, '{', '}');
        return close < 0 ? input.Length : close + 1;
    }

    static string RemoveAmbientAndOverloadDeclarations(string input)
    {
        var output = Regex.Replace(input, @"^\s*declare\s+(?:const|let|var|function)\b[^;]*;\s*", "",
            RegexOptions.Multiline);
        output = Regex.Replace(output, @"^\s*declare\s+class\b[^{;]*(?:\{(?:[^{}]|\{[^{}]*\})*\}|;)\s*", "",
            RegexOptions.Multiline);
        output = Regex.Replace(output, @"^\s*(?:export\s+)?function\s+[A-Za-z_$][\w$]*\s*(?:<[^>\r\n]+>)?\([^;{}]*\)\s*(?::[^;{}]+)?;\s*",
            "", RegexOptions.Multiline);
        return output;
    }

    static string CleanupSpecifiers(string specifiers)
    {
        var parts = specifiers.Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries);
        return string.Join(", ", parts);
    }

    static string StripTypes(string input)
    {
        input = StripObjectLiteralArrowParameterTypes(input);
        input = StripParenthesizedArrowParameterTypes(input);
        var sb = new StringBuilder(input.Length);
        for (var i = 0; i < input.Length;)
        {
            var ch = input[i];
            if (IsStringStart(ch))
            {
                i = CopyString(input, i, sb);
                continue;
            }

            if (StartsIdentifier(input, i, "function"))
            {
                i = CopyWord(input, i, sb);
                i = CopyUntilFunctionBody(input, i, sb);
                continue;
            }

            if (ch == '<' && LooksLikeGenericPrefix(input, i))
            {
                i = SkipBalanced(input, i, '<', '>');
                continue;
            }

            if (ch == ':' && LooksLikeTypeAnnotation(input, i))
            {
                i = SkipType(input, i + 1);
                continue;
            }

            if (ch == '?' && IsDefiniteOrOptionalMarker(input, i))
            {
                i++;
                continue;
            }

            if (ch == '!' && IsDefiniteOrOptionalMarker(input, i))
            {
                i++;
                continue;
            }

            sb.Append(ch);
            i++;
        }

        return sb.ToString();
    }

    static string StripObjectLiteralArrowParameterTypes(string input)
    {
        return Regex.Replace(input,
            @"\((?<name>[A-Za-z_$][\w$]*)\s*:\s*\{(?<type>[^{}]*)\}\)(?<space>\s*)=>",
            "(${name})${space}=>",
            RegexOptions.Singleline);
    }

    static string StripParenthesizedArrowParameterTypes(string input)
    {
        return Regex.Replace(input,
            @"\((?<parameters>[^()]*:[^()]*)\)(?<space>\s*)=>",
            match =>
            {
                var parameters = match.Groups["parameters"].Value.Split(',', StringSplitOptions.TrimEntries);
                for (var i = 0; i < parameters.Length; i++)
                {
                    parameters[i] = Regex.Replace(parameters[i],
                        @"^([A-Za-z_$][\w$]*)(?:\??)\s*:\s*.*$",
                        "$1");
                }

                return $"({string.Join(", ", parameters)}){match.Groups["space"].Value}=>";
            });
    }

    static int CopyUntilFunctionBody(string input, int i, StringBuilder sb)
    {
        while (i < input.Length)
        {
            var ch = input[i];
            if (IsStringStart(ch))
            {
                i = CopyString(input, i, sb);
                continue;
            }

            if (ch == '<' && LooksLikeGenericPrefix(input, i))
            {
                i = SkipBalanced(input, i, '<', '>');
                continue;
            }

            if (ch == ':' && LooksLikeTypeAnnotation(input, i))
            {
                i = SkipType(input, i + 1);
                continue;
            }

            sb.Append(ch);
            i++;
            if (ch == '{') return i;
        }

        return i;
    }

    static string StripTypeScriptExpressionOperators(string input)
    {
        var output = Regex.Replace(input, @"^(?<prefix>\s*(?:export|import)\s*\{[^\n;]*)\s+as\s+(?<alias>[A-Za-z_$][\w$]*)",
            "${prefix} as ${alias}", RegexOptions.Multiline);
        output = StripAsExpressionsOutsideModuleSpecifiers(output);
        output = Regex.Replace(output, @"<\s*[A-Za-z_$][\w$]*(?:\s*<[^>]*>)?(?:\[\])?\s*>\s*([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)", "$1");
        output = RemoveSatisfiesExpressions(output);
        output = Regex.Replace(output, @"([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)!(?=\b|\.)", "$1");
        output = Regex.Replace(output, @"([A-Za-z_$][\w$]*)<[^>\n]+>\(", "$1(");
        return output;
    }

    static string StripAsExpressionsOutsideModuleSpecifiers(string input)
    {
        var lines = input.Split('\n');
        for (var i = 0; i < lines.Length; i++)
        {
            var trimmed = lines[i].TrimStart();
            if (trimmed.StartsWith("export {", StringComparison.Ordinal) ||
                trimmed.StartsWith("import {", StringComparison.Ordinal))
                continue;
            lines[i] = Regex.Replace(lines[i], @"\s+as\s+[A-Za-z_$][\w$]*(?:<[^>]*>)?(?:\[\])?", "");
        }

        return string.Join('\n', lines);
    }

    static string RemoveSatisfiesExpressions(string input)
    {
        var sb = new StringBuilder(input.Length);
        for (var i = 0; i < input.Length;)
        {
            if (StartsIdentifier(input, i, "satisfies"))
            {
                i = SkipType(input, i + "satisfies".Length);
                continue;
            }

            sb.Append(input[i]);
            i++;
        }

        return sb.ToString();
    }

    static string LowerEnums(string input, Dictionary<string, Dictionary<string, string>> constEnums)
    {
        return Regex.Replace(input, @"(?<export>export\s+)?(?<const>const\s+)?enum\s+(?<name>[A-Za-z_$][\w$]*)\s*\{(?<body>[^}]*)\}", match =>
        {
            var name = match.Groups["name"].Value;
            var isExport = match.Groups["export"].Success;
            var isConst = match.Groups["const"].Success;
            var members = ParseEnumMembers(match.Groups["body"].Value);
            if (isConst && TryEvaluateConstEnum(members, out var values))
            {
                constEnums[name] = values;
                return "";
            }

            return EmitEnum(name, isExport, members);
        }, RegexOptions.Singleline);
    }

    static List<EnumMember> ParseEnumMembers(string body)
    {
        var result = new List<EnumMember>();
        foreach (var raw in body.Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries))
        {
            var parts = raw.Split('=', 2, StringSplitOptions.TrimEntries);
            if (parts[0].Length == 0) continue;
            result.Add(new EnumMember(parts[0], parts.Length == 2 ? parts[1] : null));
        }

        return result;
    }

    static bool TryEvaluateConstEnum(List<EnumMember> members, out Dictionary<string, string> values)
    {
        values = new Dictionary<string, string>(StringComparer.Ordinal);
        double next = 0;
        foreach (var member in members)
        {
            if (member.Value == null)
            {
                values[member.Name] = next.ToString(CultureInfo.InvariantCulture);
                next++;
                continue;
            }

            var expression = member.Value;
            foreach (var pair in values)
                expression = Regex.Replace(expression, $@"\b{Regex.Escape(pair.Key)}\b", pair.Value);
            if (expression.StartsWith("\"", StringComparison.Ordinal) ||
                expression.StartsWith("'", StringComparison.Ordinal))
            {
                values[member.Name] = expression;
                continue;
            }

            if (!TryEvaluateNumericExpression(expression, out var numeric))
                return false;
            values[member.Name] = numeric.ToString(CultureInfo.InvariantCulture);
            next = numeric + 1;
        }

        return true;
    }

    static bool TryEvaluateNumericExpression(string expression, out double value)
    {
        value = 0;
        var parts = expression.Split('|', StringSplitOptions.TrimEntries);
        if (parts.Length > 1)
        {
            var aggregate = 0;
            foreach (var part in parts)
            {
                if (!int.TryParse(part, NumberStyles.Integer, CultureInfo.InvariantCulture, out var number))
                    return false;
                aggregate |= number;
            }

            value = aggregate;
            return true;
        }

        return double.TryParse(expression, NumberStyles.Float, CultureInfo.InvariantCulture, out value);
    }

    static string InlineConstEnumReferences(string input, Dictionary<string, Dictionary<string, string>> constEnums)
    {
        foreach (var enumPair in constEnums)
        foreach (var memberPair in enumPair.Value)
            input = Regex.Replace(input, $@"\b{Regex.Escape(enumPair.Key)}\.{Regex.Escape(memberPair.Key)}\b", memberPair.Value);
        return input;
    }

    static string EmitEnum(string name, bool isExport, List<EnumMember> members)
    {
        var sb = new StringBuilder();
        sb.Append(isExport ? "export var " : "var ").Append(name).AppendLine(";");
        sb.Append("(function (").Append(name).AppendLine(") {");
        double next = 0;
        var known = new Dictionary<string, double>(StringComparer.Ordinal);
        foreach (var member in members)
        {
            var value = member.Value;
            if (value == null)
            {
                value = next.ToString(CultureInfo.InvariantCulture);
            }
            else
            {
                foreach (var pair in known)
                    value = Regex.Replace(value, $@"\b{Regex.Escape(pair.Key)}\b", pair.Value.ToString(CultureInfo.InvariantCulture));
            }

            if (IsStringLiteral(value))
            {
                sb.Append("    ").Append(name).Append("[\"").Append(member.Name).Append("\"] = ").Append(value).AppendLine(";");
            }
            else
            {
                sb.Append("    ").Append(name).Append("[").Append(name).Append("[\"").Append(member.Name).Append("\"] = ")
                    .Append(value).Append("] = \"").Append(member.Name).AppendLine("\";");
                if (double.TryParse(value, NumberStyles.Float, CultureInfo.InvariantCulture, out var number))
                {
                    known[member.Name] = number;
                    next = number + 1;
                }
            }
        }

        sb.Append("})(").Append(name).Append(" || (").Append(name).Append(" = {}));");
        return sb.ToString();
    }

    static bool IsStringLiteral(string value)
    {
        value = value.TrimStart();
        return value.StartsWith("\"", StringComparison.Ordinal) || value.StartsWith("'", StringComparison.Ordinal);
    }

    static bool LooksLikeTypeAnnotation(string input, int colon)
    {
        var previous = PreviousNonSpace(input, colon - 1);
        return previous >= 0 && (IsIdentifierPart(input[previous]) || input[previous] == '?' ||
                                 input[previous] == ']' || input[previous] == ')');
    }

    static int SkipType(string input, int i)
    {
        var angle = 0;
        var paren = 0;
        var brace = 0;
        var bracket = 0;
        var seenTypeToken = false;
        while (i < input.Length)
        {
            var ch = input[i];
            if (IsStringStart(ch))
            {
                i = SkipString(input, i);
                seenTypeToken = true;
                continue;
            }

            switch (ch)
            {
                case '<': angle++; break;
                case '>': if (angle > 0) angle--; break;
                case '(': paren++; break;
                case ')':
                    if (paren == 0 && angle == 0 && brace == 0 && bracket == 0) return i;
                    paren--;
                    break;
                case '{':
                    if (brace == 0 && angle == 0 && paren == 0 && bracket == 0 && seenTypeToken) return i;
                    brace++;
                    break;
                case '}':
                    if (brace == 0 && angle == 0 && paren == 0 && bracket == 0) return i;
                    if (brace == 1 && angle == 0 && paren == 0 && bracket == 0) return i + 1;
                    brace--;
                    break;
                case '[': bracket++; break;
                case ']': if (bracket > 0) bracket--; break;
                case ',':
                case ';':
                case '=':
                    if (angle == 0 && paren == 0 && brace == 0 && bracket == 0) return i;
                    break;
            }

            if (angle == 0 && paren == 0 && brace == 0 && bracket == 0 && ch == '\n') return i;
            if (!char.IsWhiteSpace(ch)) seenTypeToken = true;
            i++;
        }

        return i;
    }

    static bool LooksLikeGenericPrefix(string input, int index)
    {
        var end = FindMatching(input, index, '<', '>');
        if (end < 0) return false;
        var next = NextNonSpace(input, end + 1);
        return next >= 0 && input[next] == '(';
    }

    static int SkipBalanced(string input, int index, char open, char close)
    {
        var end = FindMatching(input, index, open, close);
        return end < 0 ? index + 1 : end + 1;
    }

    static int FindMatching(string input, int index, char open, char close)
    {
        var depth = 0;
        for (var i = index; i < input.Length; i++)
        {
            if (IsStringStart(input[i]))
            {
                i = SkipString(input, i) - 1;
                continue;
            }
            if (input[i] == open) depth++;
            else if (input[i] == close && --depth == 0) return i;
        }

        return -1;
    }

    static int CopyString(string input, int i, StringBuilder sb)
    {
        var end = SkipString(input, i);
        sb.Append(input, i, end - i);
        return end;
    }

    static int SkipString(string input, int i)
    {
        var quote = input[i];
        i++;
        while (i < input.Length)
        {
            if (input[i] == '\\')
            {
                i += 2;
                continue;
            }
            if (input[i] == quote) return i + 1;
            i++;
        }

        return i;
    }

    static bool IsStringStart(char ch) => ch is '"' or '\'' or '`';

    static int CopyWord(string input, int i, StringBuilder sb)
    {
        while (i < input.Length && IsIdentifierPart(input[i]))
        {
            sb.Append(input[i]);
            i++;
        }

        return i;
    }

    static bool StartsIdentifier(string input, int index, string identifier)
    {
        return input.AsSpan(index).StartsWith(identifier.AsSpan(), StringComparison.Ordinal) &&
               (index == 0 || (!IsIdentifierPart(input[index - 1]) && input[index - 1] != '.')) &&
               (index + identifier.Length == input.Length || !IsIdentifierPart(input[index + identifier.Length]));
    }

    static bool StartsExportedOrPlainKeyword(string input, int index, string keyword)
    {
        if (StartsIdentifier(input, index, keyword)) return true;
        if (!StartsIdentifier(input, index, "export")) return false;
        var afterExport = NextNonSpace(input, index + "export".Length);
        return afterExport >= 0 && StartsIdentifier(input, afterExport, keyword);
    }

    static bool IsDefiniteOrOptionalMarker(string input, int index)
    {
        var previous = PreviousNonSpace(input, index - 1);
        var next = NextNonSpace(input, index + 1);
        return previous >= 0 && IsIdentifierPart(input[previous]) && next >= 0 &&
               (input[next] == ':' || input[next] == '=' || input[next] == ';' || input[next] == ')' ||
                input[next] == ',');
    }

    static int PreviousNonSpace(string input, int index)
    {
        while (index >= 0 && char.IsWhiteSpace(input[index])) index--;
        return index;
    }

    static int NextNonSpace(string input, int index)
    {
        while (index < input.Length && char.IsWhiteSpace(input[index])) index++;
        return index < input.Length ? index : -1;
    }

    static bool IsIdentifierStart(char ch) => ch == '_' || ch == '$' || char.IsLetter(ch);

    static bool IsIdentifierPart(char ch) => IsIdentifierStart(ch) || char.IsDigit(ch);

    readonly record struct EnumMember(string Name, string? Value);
}
