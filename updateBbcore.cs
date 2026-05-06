#!/usr/bin/env dotnet

var sourceDir = new DirectoryInfo(Path.Combine(Environment.CurrentDirectory, "Njsast"));
var targetDir = new DirectoryInfo(Path.Combine(Environment.CurrentDirectory, "..", "bbcore", "Njsast"));

if (!sourceDir.Exists)
{
    Console.Error.WriteLine($"ERROR: Source directory not found: {sourceDir.FullName}");
    Environment.Exit(1);
}

if (!targetDir.Exists)
{
    Console.Error.WriteLine($"ERROR: Target directory not found: {targetDir.FullName}");
    Environment.Exit(1);
}

Console.WriteLine($"Source: {sourceDir.FullName}");
Console.WriteLine($"Target: {targetDir.FullName}");
Console.WriteLine();

var extensions = new HashSet<string>(StringComparer.OrdinalIgnoreCase) { ".cs", ".js", ".csproj" };

static bool IsExcludedDir(string? dir)
{
    if (dir is null) return false;
    var sep = Path.DirectorySeparatorChar;
    return dir.Contains($"{sep}bin{sep}") || dir.Contains($"{sep}obj{sep}")
        || dir.EndsWith($"{sep}bin") || dir.EndsWith($"{sep}obj");
}

static bool FileContentEqual(string path1, string path2)
{
    var a = File.ReadAllBytes(path1);
    var b = File.ReadAllBytes(path2);
    return a.AsSpan().SequenceEqual(b);
}

var sourceFiles = sourceDir.EnumerateFiles("*", SearchOption.AllDirectories)
    .Where(f => !IsExcludedDir(f.DirectoryName))
    .Where(f => extensions.Contains(f.Extension))
    .OrderBy(f => f.FullName)
    .ToList();

var different = new List<string>();
var same = new List<string>();
var newFiles = new List<string>();

foreach (var src in sourceFiles)
{
    var relative = Path.GetRelativePath(sourceDir.FullName, src.FullName);
    var targetPath = Path.Combine(targetDir.FullName, relative);
    if (File.Exists(targetPath))
    {
        if (FileContentEqual(src.FullName, targetPath))
            same.Add(relative);
        else
            different.Add(relative);
    }
    else
    {
        newFiles.Add(relative);
    }
}

Console.WriteLine($"Files to copy: {sourceFiles.Count}");
Console.WriteLine($"  Different:   {different.Count}");
Console.WriteLine($"  Same:        {same.Count}");
Console.WriteLine($"  New:         {newFiles.Count}");
Console.WriteLine();

if (newFiles.Count > 0)
{
    Console.WriteLine("New files:");
    foreach (var f in newFiles)
        Console.WriteLine($"  + {f}");
    Console.WriteLine();
}

if (different.Count > 0)
{
    Console.WriteLine("Changed files:");
    foreach (var f in different)
        Console.WriteLine($"  * {f}");
    Console.WriteLine();
}

var overwriteRatio = sourceFiles.Count > 0 ? (double)(different.Count + newFiles.Count) / sourceFiles.Count * 100 : 0;
Console.WriteLine($"Files actually modified: {different.Count + newFiles.Count} / {sourceFiles.Count} ({overwriteRatio:F0}%)");
Console.WriteLine();

var targetFiles = targetDir.EnumerateFiles("*", SearchOption.AllDirectories)
    .Where(f => extensions.Contains(f.Extension) && !IsExcludedDir(f.DirectoryName))
    .ToList();

var targetRelativeSet = targetFiles
    .Select(f => Path.GetRelativePath(targetDir.FullName, f.FullName))
    .ToHashSet(StringComparer.OrdinalIgnoreCase);

var sourceRelativeSet = sourceFiles
    .Select(f => Path.GetRelativePath(sourceDir.FullName, f.FullName))
    .ToHashSet(StringComparer.OrdinalIgnoreCase);

var removed = targetRelativeSet.Except(sourceRelativeSet).ToList();
if (removed.Count > 0)
{
    Console.WriteLine($"Files in target but NOT in source (will remain): {removed.Count}");
    foreach (var f in removed)
        Console.WriteLine($"  ~ {f}");
    Console.WriteLine();
}

Console.WriteLine("Copying...");
var errors = 0;
foreach (var src in sourceFiles)
{
    var relative = Path.GetRelativePath(sourceDir.FullName, src.FullName);
    var targetPath = Path.Combine(targetDir.FullName, relative);
    try
    {
        var targetParent = Path.GetDirectoryName(targetPath);
        if (targetParent is not null)
            Directory.CreateDirectory(targetParent);
        File.Copy(src.FullName, targetPath, overwrite: true);
    }
    catch (Exception ex)
    {
        Console.Error.WriteLine($"ERROR copying {relative}: {ex.Message}");
        errors++;
    }
}

Console.WriteLine();
Console.WriteLine(errors == 0 ? "Done. All files copied successfully." : $"Done with {errors} errors.");
