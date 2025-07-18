(undefined => {
    var __extendStatics = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    var __extends = function(d, b) {
        __extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    var __rest = function(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
        return t;
    };
    var __decorate = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __param = function(paramIndex, decorator) {
        return function(target, key) {
            decorator(target, key, paramIndex);
        };
    };
    var __esDecorate = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
        function accept(f) {
            if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
            return f;
        }
        var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
        var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
        var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
        var _, done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
            for (var p in contextIn.access) context.access[p] = contextIn.access[p];
            context.addInitializer = function(f) {
                if (done) throw new TypeError("Cannot add initializers after decoration has completed");
                extraInitializers.push(accept(f || null));
            };
            var result = (0, decorators[i])(kind === "accessor" ? {
                get: descriptor.get,
                set: descriptor.set
            } : descriptor[key], context);
            if (kind === "accessor") {
                if (result === void 0) continue;
                if (result === null || typeof result !== "object") throw new TypeError("Object expected");
                if (_ = accept(result.get)) descriptor.get = _;
                if (_ = accept(result.set)) descriptor.set = _;
                if (_ = accept(result.init)) initializers.unshift(_);
            } else if (_ = accept(result)) {
                if (kind === "field") initializers.unshift(_); else descriptor[key] = _;
            }
        }
        if (target) Object.defineProperty(target, contextIn.name, descriptor);
        done = true;
    };
    var __runInitializers = function(thisArg, initializers, value) {
        var useValue = arguments.length > 2;
        for (var i = 0; i < initializers.length; i++) {
            value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
        }
        return useValue ? value : void 0;
    };
    var __propKey = function(x) {
        return typeof x === "symbol" ? x : "".concat(x);
    };
    var __setFunctionName = function(f, name, prefix) {
        if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
        return Object.defineProperty(f, "name", {
            configurable: true,
            value: prefix ? "".concat(prefix, " ", name) : name
        });
    };
    var __metadata = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };
    var __awaiter = function(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : new P(function(resolve) {
                    resolve(result.value);
                }).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = function(thisArg, body) {
        var _ = {
            label: 0,
            sent: function() {
                if (t[0] & 1) throw t[1];
                return t[1];
            },
            trys: [],
            ops: []
        }, f, y, t, g;
        return g = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
        }), g;
        function verb(n) {
            return function(v) {
                return step([ n, v ]);
            };
        }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [ 0, t.value ];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;

                  case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };

                  case 5:
                    _.label++;
                    y = op[1];
                    op = [ 0 ];
                    continue;

                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;

                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [ 6, e ];
                y = 0;
            } finally {
                f = t = 0;
            }
            if (op[0] & 5) throw op[1];
            return {
                value: op[0] ? op[1] : void 0,
                done: true
            };
        }
    };
    var __exportStar = function(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    };
    var __createBinding = function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
            enumerable: true,
            get: function() {
                return m[k];
            },
            set: function(v) {
                m[k] = v;
            }
        });
    };
    var __values = function(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function() {
                if (o && i >= o.length) o = void 0;
                return {
                    value: o && o[i++],
                    done: !o
                };
            }
        };
    };
    var __read = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        } catch (error) {
            e = {
                error
            };
        } finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            } finally {
                if (e) throw e.error;
            }
        }
        return ar;
    };
    var __spread = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
        return r;
    };
    var __spreadArrays = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
        return r;
    };
    var __spreadArray = function(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
        return to;
    };
    var __await = function(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };
    var __asyncGenerator = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
        }, i;
        function verb(n) {
            if (g[n]) i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([ n, v, a, b ]) > 1 || resume(n, v);
                });
            };
        }
        function resume(n, v) {
            try {
                step(g[n](v));
            } catch (e) {
                settle(q[0][3], e);
            }
        }
        function step(r) {
            r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
            resume("next", value);
        }
        function reject(value) {
            resume("throw", value);
        }
        function settle(f, v) {
            if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
    };
    var __asyncDelegator = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
            throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
            return this;
        }, i;
        function verb(n, f) {
            if (o[n]) i[n] = function(v) {
                return (p = !p) ? {
                    value: __await(o[n](v)),
                    done: n === "return"
                } : f ? f(v) : v;
            };
        }
    };
    var __asyncValues = function(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator];
        return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
    };
    var __makeTemplateObject = function(cooked, raw) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
        return cooked;
    };
    var __setModuleDefault = function(o, v) {
        Object.defineProperty(o, "default", {
            enumerable: true,
            value: v
        });
    };
    var __importStar = function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };
    var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
            default: mod
        };
    };
    var __classPrivateFieldGet = function(receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldIn = function(state, receiver) {
        if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    };
    var __addDisposableResource = function(env, value, async) {
        if (value !== null && value !== void 0) {
            if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
            var dispose, inner;
            if (async) {
                if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
                dispose = value[Symbol.asyncDispose];
            }
            if (dispose === void 0) {
                if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
                dispose = value[Symbol.dispose];
                if (async) inner = dispose;
            }
            if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
            if (inner) dispose = function() {
                try {
                    inner.call(this);
                } catch (e) {
                    return Promise.reject(e);
                }
            };
            env.stack.push({
                value,
                dispose,
                async
            });
        } else if (async) {
            env.stack.push({
                async: true
            });
        }
        return value;
    };
    var __disposeResources = function(env) {
        function fail(e) {
            var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
                var e = new Error(message);
                return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
            };
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        function next() {
            while (env.stack.length) {
                var rec = env.stack.pop();
                try {
                    var result = rec.dispose && rec.dispose.call(rec.value);
                    if (rec.async) return Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } catch (e) {
                    fail(e);
                }
            }
            if (env.hasError) throw env.error;
        }
        return next();
    };
    var DEBUG = false;
    var __export_RenderPhase;
    var __export_asap;
    var __export_invalidate;
    var __export_BobrilDeviceCategory;
    var __export_BobrilPointerType;
    var __export_ignoreClick;
    var __export_DndOp;
    var __export_DndEnabledOps;
    var __export_RouteTransitionType;
    var __export_EventResult;
    var hasPostInitDom = 1;
    var hasPostUpdateDom = 2;
    var hasPostUpdateDomEverytime = 4;
    var hasEvents = 8;
    var hasCaptureEvents = 16;
    var MediaRuleBuilder_bobril = function() {
        function MediaRuleBuilder() {
            this.tokens = [];
        }
        MediaRuleBuilder.prototype.pushOptionalTokens = function(behaviour, mediaType) {
            !!behaviour && this.tokens.push({
                type: behaviour
            });
            !!mediaType && this.tokens.push({
                type: mediaType
            });
        };
        MediaRuleBuilder.prototype.rule = function(behaviour, mediaType) {
            if (mediaType === void 0) {
                mediaType = "all";
            }
            this.pushOptionalTokens(behaviour, mediaType);
            return this;
        };
        MediaRuleBuilder.prototype.and = function(mediaRule) {
            this.tokens.push({
                type: "and"
            });
            this.tokens.push(mediaRule);
            return this;
        };
        MediaRuleBuilder.prototype.or = function() {
            this.tokens.push({
                type: "or"
            });
            return this;
        };
        MediaRuleBuilder.prototype.build = function() {
            return this.tokens.reduce(toRule, "");
        };
        return MediaRuleBuilder;
    }();
    function toRule(buffer, token) {
        var str = "";
        switch (token.type) {
          case "aspect-ratio":
            str = "(" + token.type + ": " + token.width + "/" + token.height + ")";
            break;

          case "all":
          case "and":
          case "not":
          case "only":
          case "print":
          case "screen":
          case "speech":
            str = "" + token.type;
            break;

          case "or":
            str = ",";
            break;

          case "color":
            str = "(" + token.type + ")";
            break;

          case "max-height":
          case "max-width":
          case "min-height":
          case "min-width":
            str = "(" + token.type + ": " + token.value + token.unit + ")";
            break;

          case "min-color":
          case "orientation":
            str = "(" + token.type + ": " + token.value + ")";
            break;

          default:
            str = emptyQuery(token);
        }
        return buffer + str + " ";
    }
    function emptyQuery(_token) {
        return "";
    }
    function createMediaQuery() {
        return new MediaRuleBuilder_bobril();
    }
    var BobrilCtx_bobril = function() {
        function BobrilCtx(data, me) {
            this.data = data;
            this.me = me;
            this.cfg = undefined;
            this.refs = undefined;
            this.disposables = undefined;
            this.$bobxCtx = undefined;
        }
        return BobrilCtx;
    }();
    function assert(shouldBeTrue, messageIfFalse) {
        if (DEBUG && !shouldBeTrue) throw Error(messageIfFalse || "assertion failed");
    }
    var __export_isArray = Array.isArray;
    var isArrayVdom = __export_isArray;
    function setIsArrayVdom(isArrayFnc) {
        isArrayVdom = isArrayFnc;
    }
    var emptyComponent = {};
    function createTextNode(content) {
        return document.createTextNode(content);
    }
    function createEl(name) {
        return document.createElement(name);
    }
    function null2undefined(value) {
        return value === null ? undefined : value;
    }
    function isNumber(val) {
        return typeof val == "number";
    }
    function isString(val) {
        return typeof val == "string";
    }
    function isBoolean(val) {
        return typeof val == "boolean";
    }
    function isFunction(val) {
        return typeof val == "function";
    }
    function isObject(val) {
        return typeof val === "object";
    }
    function assertNever(switchValue) {
        throw new Error("Switch is not exhaustive for value: " + JSON.stringify(switchValue));
    }
    if (Object.assign == undefined) {
        Object.assign = function assign(target) {
            var _sources = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                _sources[_i - 1] = arguments[_i];
            }
            if (target == undefined) throw new TypeError("Target in assign cannot be undefined or null");
            var totalArgs = arguments.length;
            for (var i_1 = 1; i_1 < totalArgs; i_1++) {
                var source = arguments[i_1];
                if (source == undefined) continue;
                var keys = Object.keys(source);
                var totalKeys = keys.length;
                for (var j_1 = 0; j_1 < totalKeys; j_1++) {
                    var key = keys[j_1];
                    target[key] = source[key];
                }
            }
            return target;
        };
    }
    if (!Object.is) {
        Object.is = function(x, y) {
            if (x === y) {
                return x !== 0 || 1 / x === 1 / y;
            } else {
                return x !== x && y !== y;
            }
        };
    }
    var is = Object.is;
    var hOP = Object.prototype.hasOwnProperty;
    var __export_assign = Object.assign;
    function polyfill(prototype, method, value) {
        if (!prototype[method]) {
            Object.defineProperty(prototype, method, {
                value,
                configurable: true,
                writable: true
            });
        }
    }
    polyfill(Array.prototype, "find", function(pred) {
        var o = Object(this);
        var len = o.length >>> 0;
        var thisArg = arguments[1];
        for (var k = 0; k < len; k++) {
            var kValue = o[k];
            if (pred.call(thisArg, kValue, k, o)) {
                return kValue;
            }
        }
        return;
    });
    polyfill(Array.prototype, "findIndex", function(pred) {
        var o = Object(this);
        var len = o.length >>> 0;
        var thisArg = arguments[1];
        for (var k = 0; k < len; k++) {
            var kValue = o[k];
            if (pred.call(thisArg, kValue, k, o)) {
                return k;
            }
        }
        return -1;
    });
    polyfill(Array.prototype, "some", function(pred) {
        var o = Object(this);
        var len = o.length >>> 0;
        var thisArg = arguments[1];
        for (var i = 0; i < len; i++) {
            if (i in o && pred.call(thisArg, o[i], i, o)) {
                return true;
            }
        }
        return false;
    });
    polyfill(String.prototype, "includes", function(search, start) {
        if (!isNumber(start)) start = 0;
        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    });
    polyfill(String.prototype, "startsWith", function(search, pos) {
        return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
    });
    polyfill(String.prototype, "endsWith", function(search, pos) {
        var s = this.toString();
        if (!isNumber(pos) || !isFinite(pos) || Math.floor(pos) !== pos || pos > s.length) {
            pos = s.length;
        }
        pos -= search.length;
        var lastIndex = s.indexOf(search, pos);
        return lastIndex !== -1 && lastIndex === pos;
    });
    function flatten(a) {
        if (!isArrayVdom(a)) {
            if (a == undefined || a === false || a === true) return [];
            return [ a ];
        }
        a = a.slice(0);
        var aLen = a.length;
        for (var i_2 = 0; i_2 < aLen; ) {
            var item = a[i_2];
            if (isArrayVdom(item)) {
                a.splice.apply(a, [ i_2, 1 ].concat(item));
                aLen = a.length;
                continue;
            }
            if (item == undefined || item === false || item === true) {
                a.splice(i_2, 1);
                aLen--;
                continue;
            }
            i_2++;
        }
        return a;
    }
    function swallowPromise(promise) {
        promise.catch(function(reason) {
            console.error("Uncaught exception from swallowPromise", reason);
        });
    }
    var inSvg = false;
    var inNotFocusable = false;
    var updateCall = [];
    var updateInstance = [];
    var setValueCallback = function(el, _node, newValue, oldValue) {
        if (newValue !== oldValue) el[tValue] = newValue;
    };
    function setSetValue(callback) {
        var prev = setValueCallback;
        setValueCallback = callback;
        return prev;
    }
    function newHashObj() {
        return Object.create(null);
    }
    var vendors = [ "Webkit", "Moz", "ms", "O" ];
    var testingDivStyle = document.createElement("div").style;
    function testPropExistence(name) {
        return isString(testingDivStyle[name]);
    }
    var mapping = new Map();
    var isUnitlessNumber = {
        boxFlex: true,
        boxFlexGroup: true,
        columnCount: true,
        flex: true,
        flexGrow: true,
        flexNegative: true,
        flexPositive: true,
        flexShrink: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        strokeDashoffset: true,
        widows: true,
        zIndex: true,
        zoom: true
    };
    function renamer(newName) {
        return function(style, value, oldName) {
            style[newName] = value;
            style[oldName] = undefined;
        };
    }
    function renamerPx(newName) {
        return function(style, value, oldName) {
            if (isNumber(value)) {
                style[newName] = value + "px";
            } else {
                style[newName] = value;
            }
            style[oldName] = undefined;
        };
    }
    function pxAdder(style, value, name) {
        if (isNumber(value)) style[name] = value + "px";
    }
    function ieVersion() {
        return document.documentMode;
    }
    function shimStyle(newValue) {
        var k = Object.keys(newValue);
        for (var i = 0, l = k.length; i < l; i++) {
            var ki = k[i];
            var mi = mapping.get(ki);
            var vi = newValue[ki];
            if (vi === undefined) continue;
            if (mi === undefined) {
                if (DEBUG) {
                    if (/-/.test(ki) && window.console && console.warn) console.warn("Style property " + ki + " contains dash (must use JS props instead of css names)");
                }
                if (testPropExistence(ki)) {
                    mi = isUnitlessNumber[ki] === true ? noop : pxAdder;
                } else {
                    var titleCaseKi = ki.replace(/^\w/, function(match) {
                        return match.toUpperCase();
                    });
                    for (var j = 0; j < vendors.length; j++) {
                        if (testPropExistence(vendors[j] + titleCaseKi)) {
                            mi = (isUnitlessNumber[ki] === true ? renamer : renamerPx)(vendors[j] + titleCaseKi);
                            break;
                        }
                    }
                    if (mi === undefined) {
                        mi = isUnitlessNumber[ki] === true ? noop : pxAdder;
                        if (DEBUG && window.console && console.warn && [ "overflowScrolling", "touchCallout" ].indexOf(ki) < 0) console.warn("Style property " + ki + " is not supported in this browser");
                    }
                }
                mapping.set(ki, mi);
            }
            mi(newValue, vi, ki);
        }
    }
    function removeProperty(s, name) {
        s[name] = "";
    }
    function setStyleProperty(s, name, value) {
        if (isString(value)) {
            var len = value.length;
            if (len > 11 && value.substr(len - 11, 11) === " !important") {
                s.setProperty(hyphenateStyle(name), value.substr(0, len - 11), "important");
                return;
            }
        }
        s[name] = value;
    }
    function updateStyle(el, newStyle, oldStyle) {
        var s = el.style;
        if (isObject(newStyle)) {
            shimStyle(newStyle);
            var rule;
            if (isObject(oldStyle)) {
                for (rule in oldStyle) {
                    if (oldStyle[rule] === undefined) continue;
                    if (newStyle[rule] === undefined) removeProperty(s, rule);
                }
                for (rule in newStyle) {
                    var v = newStyle[rule];
                    if (v !== undefined) {
                        if (oldStyle[rule] !== v) setStyleProperty(s, rule, v);
                    } else if (oldStyle[rule] !== undefined) {
                        removeProperty(s, rule);
                    }
                }
            } else {
                if (oldStyle) s.cssText = "";
                for (rule in newStyle) {
                    var v = newStyle[rule];
                    if (v !== undefined) setStyleProperty(s, rule, v);
                }
            }
        } else if (newStyle) {
            s.cssText = newStyle;
        } else {
            if (isObject(oldStyle)) {
                for (rule in oldStyle) {
                    removeProperty(s, rule);
                }
            } else if (oldStyle) {
                s.cssText = "";
            }
        }
    }
    function setClassName(el, className) {
        if (inSvg) el.setAttribute("class", className); else el.className = className;
    }
    var focusableTag = /^input$|^select$|^textarea$|^button$/;
    var tabindexStr = "tabindex";
    function isNaturallyFocusable(tag, attrs) {
        if (tag == undefined) return false;
        if (focusableTag.test(tag)) return true;
        if (tag === "a" && attrs != null && attrs.href != null) return true;
        return false;
    }
    function updateElement(n, el, newAttrs, oldAttrs, notFocusable) {
        var attrName, newAttr, oldAttr, valueOldAttr, valueNewAttr;
        var wasTabindex = false;
        if (newAttrs != null) for (attrName in newAttrs) {
            newAttr = newAttrs[attrName];
            oldAttr = oldAttrs[attrName];
            if (notFocusable && attrName === tabindexStr) {
                newAttr = -1;
                wasTabindex = true;
            } else if (attrName === tValue && !inSvg) {
                if (isFunction(newAttr)) {
                    oldAttrs[bValue] = newAttr;
                    newAttr = newAttr();
                }
                valueOldAttr = oldAttr;
                valueNewAttr = newAttr;
                oldAttrs[attrName] = newAttr;
                continue;
            }
            if (oldAttr !== newAttr) {
                oldAttrs[attrName] = newAttr;
                if (inSvg) {
                    if (attrName === "href") el.setAttributeNS("http://www.w3.org/1999/xlink", "href", newAttr); else el.setAttribute(attrName, newAttr);
                } else if (attrName in el && !(attrName === "list" || attrName === "form")) {
                    el[attrName] = newAttr;
                } else el.setAttribute(attrName, newAttr);
            }
        }
        if (notFocusable && !wasTabindex && isNaturallyFocusable(n.tag, newAttrs)) {
            el.setAttribute(tabindexStr, "-1");
            oldAttrs[tabindexStr] = -1;
        }
        if (newAttrs == undefined) {
            for (attrName in oldAttrs) {
                if (oldAttrs[attrName] !== undefined) {
                    if (notFocusable && attrName === tabindexStr) continue;
                    if (attrName === bValue) continue;
                    oldAttrs[attrName] = undefined;
                    el.removeAttribute(attrName);
                }
            }
        } else {
            for (attrName in oldAttrs) {
                if (oldAttrs[attrName] !== undefined && !(attrName in newAttrs)) {
                    if (notFocusable && attrName === tabindexStr) continue;
                    if (attrName === bValue) continue;
                    oldAttrs[attrName] = undefined;
                    el.removeAttribute(attrName);
                }
            }
        }
        if (valueNewAttr !== undefined) {
            setValueCallback(el, n, valueNewAttr, valueOldAttr);
        }
        return oldAttrs;
    }
    function pushInitCallback(c) {
        var cc = c.component;
        if (cc) {
            var fn = cc.postInitDom;
            if (fn) {
                updateCall.push(fn);
                updateInstance.push(c);
            }
            if ((c.ctx.$hookFlags || 0) & hasPostInitDom) {
                updateCall.push(hookPostInitDom);
                updateInstance.push(c);
            }
        }
    }
    function pushUpdateCallback(c) {
        var cc = c.component;
        if (cc) {
            var fn = cc.postUpdateDom;
            if (fn) {
                updateCall.push(fn);
                updateInstance.push(c);
            }
            var flags = c.ctx.$hookFlags || 0;
            if (flags & hasPostUpdateDom) {
                updateCall.push(hookPostUpdateDom);
                updateInstance.push(c);
            }
            fn = cc.postUpdateDomEverytime;
            if (fn) {
                updateCall.push(fn);
                updateInstance.push(c);
            }
            if (flags & hasPostUpdateDomEverytime) {
                updateCall.push(hookPostUpdateDomEverytime);
                updateInstance.push(c);
            }
        }
    }
    function pushUpdateEverytimeCallback(c) {
        var cc = c.component;
        if (cc) {
            var fn = cc.postUpdateDomEverytime;
            if (fn) {
                updateCall.push(fn);
                updateInstance.push(c);
            }
            if ((c.ctx.$hookFlags || 0) & hasPostUpdateDomEverytime) {
                updateCall.push(hookPostUpdateDomEverytime);
                updateInstance.push(c);
            }
        }
    }
    function findCfg(parent) {
        var cfg;
        while (parent) {
            cfg = parent.cfg;
            if (cfg !== undefined) break;
            if (parent.ctx !== undefined && parent.component !== emptyComponent) {
                cfg = parent.ctx.cfg;
                break;
            }
            parent = parent.parent;
        }
        return cfg;
    }
    function setRef(ref, value) {
        if (ref === undefined) return;
        if ("current" in ref) {
            ref.current = value;
        } else if (isFunction(ref)) {
            ref(value);
        } else if (__export_isArray(ref)) {
            var ctx = ref[0];
            var refs = ctx.refs;
            if (refs === undefined) {
                refs = newHashObj();
                ctx.refs = refs;
            }
            refs[ref[1]] = value;
        }
    }
    var focusRootStack = [];
    var focusRootTop = null;
    function registerFocusRoot(ctx) {
        focusRootStack.push(ctx.me);
        addDisposable(ctx, unregisterFocusRoot);
        ignoreShouldChange();
    }
    function unregisterFocusRoot(ctx) {
        var idx = focusRootStack.indexOf(ctx.me);
        if (idx !== -1) {
            focusRootStack.splice(idx, 1);
            ignoreShouldChange();
        }
    }
    var currentCtx;
    var hookId = -1;
    function getCurrentCtx() {
        return currentCtx;
    }
    function setCurrentCtx(ctx) {
        currentCtx = ctx;
    }
    function createNode(n, parentNode, createInto, createBefore) {
        var c = {
            tag: n.tag,
            key: n.key,
            ref: n.ref,
            className: n.className,
            style: n.style,
            attrs: n.attrs,
            children: n.children,
            component: n.component,
            data: n.data,
            cfg: undefined,
            parent: parentNode,
            element: undefined,
            ctx: undefined,
            orig: n
        };
        var backupInSvg = inSvg;
        var backupInNotFocusable = inNotFocusable;
        var component = c.component;
        var el;
        setRef(c.ref, c);
        if (component) {
            var ctx;
            if (component.ctxClass) {
                ctx = new component.ctxClass(c.data || {}, c);
                if (ctx.data === undefined) ctx.data = c.data || {};
                if (ctx.me === undefined) ctx.me = c;
            } else {
                ctx = {
                    data: c.data || {},
                    me: c,
                    cfg: undefined
                };
            }
            ctx.cfg = n.cfg === undefined ? findCfg(parentNode) : n.cfg;
            c.ctx = ctx;
            currentCtx = ctx;
            if (component.init) {
                component.init(ctx, c);
            }
            if (beforeRenderCallback !== emptyBeforeRenderCallback) beforeRenderCallback(n, RenderPhase_bobril.Create);
            if (component.render) {
                hookId = 0;
                component.render(ctx, c);
                hookId = -1;
            }
            currentCtx = undefined;
        } else {
            if (DEBUG) Object.freeze(n);
        }
        var tag = c.tag;
        if (tag === "-") {
            c.tag = undefined;
            c.children = undefined;
            return c;
        } else if (tag === "@") {
            createInto = c.data;
            portalMap.set(createInto, c);
            createBefore = null;
            tag = undefined;
        }
        var children = c.children;
        var inSvgForeignObject = false;
        if (isNumber(children)) {
            children = "" + children;
            c.children = children;
        }
        if (tag === undefined) {
            if (isString(children)) {
                el = createTextNode(children);
                c.element = el;
                createInto.insertBefore(el, createBefore);
            } else {
                createChildren(c, createInto, createBefore);
            }
            if (component) {
                if (component.postRender) {
                    component.postRender(c.ctx, c);
                }
                pushInitCallback(c);
            }
            return c;
        }
        if (tag === "/") {
            var htmlText = children;
            if (htmlText === "") {} else if (createBefore == undefined) {
                var before = createInto.lastChild;
                createInto.insertAdjacentHTML("beforeend", htmlText);
                c.element = [];
                if (before) {
                    before = before.nextSibling;
                } else {
                    before = createInto.firstChild;
                }
                while (before) {
                    c.element.push(before);
                    before = before.nextSibling;
                }
            } else {
                el = createBefore;
                var elPrev = createBefore.previousSibling;
                var removeEl = false;
                var parent = createInto;
                if (!el.insertAdjacentHTML) {
                    el = parent.insertBefore(createEl("i"), el);
                    removeEl = true;
                }
                el.insertAdjacentHTML("beforebegin", htmlText);
                if (elPrev) {
                    elPrev = elPrev.nextSibling;
                } else {
                    elPrev = parent.firstChild;
                }
                var newElements = [];
                while (elPrev !== el) {
                    newElements.push(elPrev);
                    elPrev = elPrev.nextSibling;
                }
                c.element = newElements;
                if (removeEl) {
                    parent.removeChild(el);
                }
            }
            if (component) {
                if (component.postRender) {
                    component.postRender(c.ctx, c);
                }
                pushInitCallback(c);
            }
            return c;
        }
        if (inSvg || tag === "svg") {
            el = document.createElementNS("http://www.w3.org/2000/svg", tag);
            inSvgForeignObject = tag === "foreignObject";
            inSvg = !inSvgForeignObject;
        } else {
            el = createEl(tag);
        }
        createInto.insertBefore(el, createBefore);
        c.element = el;
        createChildren(c, el, null);
        if (component) {
            if (component.postRender) {
                component.postRender(c.ctx, c);
            }
        }
        if (inNotFocusable && focusRootTop === c) inNotFocusable = false;
        if (inSvgForeignObject) inSvg = true;
        if (c.attrs || inNotFocusable) c.attrs = updateElement(c, el, c.attrs, {}, inNotFocusable);
        if (c.style) updateStyle(el, c.style, undefined);
        var className = c.className;
        if (className) setClassName(el, className);
        inSvg = backupInSvg;
        inNotFocusable = backupInNotFocusable;
        pushInitCallback(c);
        return c;
    }
    function normalizeNode(n) {
        if (n === false || n === true || n === null) return undefined;
        if (isString(n)) {
            return {
                children: n
            };
        }
        if (isNumber(n)) {
            return {
                children: "" + n
            };
        }
        return n;
    }
    function createChildren(c, createInto, createBefore) {
        var ch = c.children;
        if (isString(ch)) {
            createInto.textContent = ch;
            return;
        }
        var res = [];
        flattenVdomChildren(res, ch);
        for (var i_3 = 0; i_3 < res.length; i_3++) {
            res[i_3] = createNode(res[i_3], c, createInto, createBefore);
        }
        c.children = res;
    }
    function destroyNode(c) {
        setRef(c.ref, undefined);
        var ch = c.children;
        if (__export_isArray(ch)) {
            for (var i_4 = 0, l = ch.length; i_4 < l; i_4++) {
                destroyNode(ch[i_4]);
            }
        }
        var component = c.component;
        if (component) {
            var ctx = c.ctx;
            currentCtx = ctx;
            if (beforeRenderCallback !== emptyBeforeRenderCallback) beforeRenderCallback(c, RenderPhase_bobril.Destroy);
            if (component.destroy) component.destroy(ctx, c, c.element);
            var disposables = ctx.disposables;
            if (__export_isArray(disposables)) {
                for (var i_5 = disposables.length; i_5-- > 0; ) {
                    var d = disposables[i_5];
                    if (isFunction(d)) d(ctx); else d.dispose();
                }
            }
            currentCtx = undefined;
        }
        if (c.tag === "@") {
            portalMap.delete(c.data);
            removeNodeRecursive(c);
        }
    }
    function addDisposable(ctx, disposable) {
        var disposables = ctx.disposables;
        if (disposables == undefined) {
            disposables = [];
            ctx.disposables = disposables;
        }
        disposables.push(disposable);
    }
    function isDisposable(val) {
        return isObject(val) && val.dispose;
    }
    function removeNodeRecursive(c) {
        var el = c.element;
        if (__export_isArray(el)) {
            var pa = el[0].parentNode;
            if (pa) {
                for (var i_6 = 0; i_6 < el.length; i_6++) {
                    pa.removeChild(el[i_6]);
                }
            }
        } else if (el != null) {
            var p = el.parentNode;
            if (p) p.removeChild(el);
        } else {
            var ch = c.children;
            if (__export_isArray(ch)) {
                for (var i = 0, l = ch.length; i < l; i++) {
                    removeNodeRecursive(ch[i]);
                }
            }
        }
    }
    function removeNode(c) {
        destroyNode(c);
        removeNodeRecursive(c);
    }
    var roots = newHashObj();
    var portalMap = new Map();
    function nodeContainsNode(c, n, resIndex, res) {
        var el = c.element;
        var ch = c.children;
        if (__export_isArray(el)) {
            for (var ii = 0; ii < el.length; ii++) {
                if (el[ii] === n) {
                    res.push(c);
                    if (__export_isArray(ch)) {
                        return ch;
                    }
                    return null;
                }
            }
        } else if (el == undefined) {
            if (__export_isArray(ch)) {
                for (var i = 0; i < ch.length; i++) {
                    var result = nodeContainsNode(ch[i], n, resIndex, res);
                    if (result !== undefined) {
                        res.splice(resIndex, 0, c);
                        return result;
                    }
                }
            }
        } else if (el === n) {
            res.push(c);
            if (__export_isArray(ch)) {
                return ch;
            }
            return null;
        }
        return undefined;
    }
    function vdomPath(n) {
        var res = [];
        if (n == undefined) return res;
        var rootIds = Object.keys(roots);
        var rootElements = rootIds.map(function(i) {
            return roots[i].e || document.body;
        });
        var rootNodes = rootIds.map(function(i) {
            return roots[i].n;
        });
        portalMap.forEach(function(v, k) {
            rootElements.push(k);
            rootNodes.push(v);
        });
        var nodeStack = [];
        rootReallyFound: while (true) {
            rootFound: while (n) {
                for (var j = 0; j < rootElements.length; j++) {
                    if (n === rootElements[j]) break rootFound;
                }
                nodeStack.push(n);
                n = n.parentNode;
            }
            if (!n || nodeStack.length === 0) return res;
            var currentCacheArray = null;
            var currentNode = nodeStack.pop();
            for (j = 0; j < rootElements.length; j++) {
                if (n === rootElements[j]) {
                    var rn = rootNodes[j];
                    if (rn === undefined) continue;
                    res = [];
                    if (rn.parent !== undefined) {
                        var rnp = rn;
                        while (rnp = rnp.parent) {
                            res.push(rnp);
                        }
                        res.reverse();
                    }
                    var findResult = nodeContainsNode(rn, currentNode, res.length, res);
                    if (findResult !== undefined) {
                        currentCacheArray = findResult;
                        break rootReallyFound;
                    }
                }
            }
            nodeStack.push(currentNode);
            nodeStack.push(n);
            n = n.parentNode;
        }
        subtreeSearch: while (nodeStack.length) {
            currentNode = nodeStack.pop();
            if (currentCacheArray && currentCacheArray.length) for (var i = 0, l = currentCacheArray.length; i < l; i++) {
                var bn = currentCacheArray[i];
                var findResult = nodeContainsNode(bn, currentNode, res.length, res);
                if (findResult !== undefined) {
                    currentCacheArray = findResult;
                    continue subtreeSearch;
                }
            }
            res.push(null);
            break;
        }
        return res;
    }
    function deref(n) {
        var p = vdomPath(n);
        var currentNode = null;
        while (currentNode === null) {
            currentNode = p.pop();
        }
        return currentNode;
    }
    function finishUpdateNode(n, c, component) {
        if (component) {
            if (component.postRender) {
                currentCtx = c.ctx;
                component.postRender(currentCtx, n, c);
                currentCtx = undefined;
            }
        }
        c.data = n.data;
        pushUpdateCallback(c);
    }
    function finishUpdateNodeWithoutChange(c, createInto, createBefore) {
        currentCtx = undefined;
        if (__export_isArray(c.children)) {
            var backupInSvg = inSvg;
            var backupInNotFocusable = inNotFocusable;
            if (c.tag === "svg") {
                inSvg = true;
            } else if (inSvg && c.tag === "foreignObject") inSvg = false;
            if (inNotFocusable && focusRootTop === c) inNotFocusable = false;
            selectedUpdate(c.children, c.element || createInto, c.element != null ? null : createBefore);
            inSvg = backupInSvg;
            inNotFocusable = backupInNotFocusable;
        }
        pushUpdateEverytimeCallback(c);
    }
    function updateNode(n, c, createInto, createBefore, deepness, inSelectedUpdate) {
        var component = n.component;
        var bigChange = false;
        var ctx = c.ctx;
        if (component != null && ctx != null) {
            var locallyInvalidated = false;
            if (ctx[ctxInvalidated] >= frameCounter) {
                deepness = Math.max(deepness, ctx[ctxDeepness]);
                locallyInvalidated = true;
            }
            if (component.id !== c.component.id) {
                bigChange = true;
            } else {
                currentCtx = ctx;
                if (n.cfg !== undefined) ctx.cfg = n.cfg; else ctx.cfg = findCfg(c.parent);
                if (component.shouldChange) if (!component.shouldChange(ctx, n, c) && !ignoringShouldChange && !locallyInvalidated) {
                    finishUpdateNodeWithoutChange(c, createInto, createBefore);
                    return c;
                }
                ctx.data = n.data || {};
                c.component = component;
                if (beforeRenderCallback !== emptyBeforeRenderCallback) beforeRenderCallback(n, inSelectedUpdate ? RenderPhase_bobril.LocalUpdate : RenderPhase_bobril.Update);
                if (component.render) {
                    c.orig = n;
                    n = __export_assign({}, n);
                    c.cfg = undefined;
                    if (n.cfg !== undefined) n.cfg = undefined;
                    hookId = 0;
                    component.render(ctx, n, c);
                    hookId = -1;
                    if (n.cfg !== undefined) {
                        if (c.cfg === undefined) c.cfg = n.cfg; else __export_assign(c.cfg, n.cfg);
                    }
                }
                currentCtx = undefined;
            }
        } else {
            if (c.orig === n && !ignoringShouldChange) {
                finishUpdateNodeWithoutChange(c, createInto, createBefore);
                return c;
            }
            c.orig = n;
            if (DEBUG) Object.freeze(n);
        }
        var newChildren = n.children;
        var cachedChildren = c.children;
        var tag = n.tag;
        if (tag === "-") {
            finishUpdateNodeWithoutChange(c, createInto, createBefore);
            return c;
        }
        var backupInSvg = inSvg;
        var backupInNotFocusable = inNotFocusable;
        if (isNumber(newChildren)) {
            newChildren = "" + newChildren;
        }
        if (bigChange || component != undefined && ctx == undefined || component == undefined && ctx != undefined && ctx.me.component !== emptyComponent) {} else if (tag === "/") {
            if (c.tag === "/" && cachedChildren === newChildren) {
                finishUpdateNode(n, c, component);
                return c;
            }
        } else if (tag === c.tag) {
            if (tag === "@") {
                if (n.data !== c.data) {
                    var r = createNode(n, c.parent, n.data, null);
                    removeNode(c);
                    return r;
                }
                createInto = n.data;
                createBefore = getLastDomNode(c);
                if (createBefore != null) createBefore = createBefore.nextSibling;
                tag = undefined;
            }
            if (tag === undefined) {
                if (isString(newChildren) && isString(cachedChildren)) {
                    if (newChildren !== cachedChildren) {
                        var el = c.element;
                        el.textContent = newChildren;
                        c.children = newChildren;
                    }
                } else {
                    if (inNotFocusable && focusRootTop === c) inNotFocusable = false;
                    if (deepness <= 0) {
                        if (__export_isArray(cachedChildren)) selectedUpdate(c.children, createInto, createBefore);
                    } else {
                        c.children = updateChildren(createInto, newChildren, cachedChildren, c, createBefore, deepness - 1);
                    }
                    inSvg = backupInSvg;
                    inNotFocusable = backupInNotFocusable;
                }
                finishUpdateNode(n, c, component);
                return c;
            } else {
                var inSvgForeignObject = false;
                if (tag === "svg") {
                    inSvg = true;
                } else if (inSvg && tag === "foreignObject") {
                    inSvgForeignObject = true;
                    inSvg = false;
                }
                if (inNotFocusable && focusRootTop === c) inNotFocusable = false;
                var el = c.element;
                if (isString(newChildren) && !__export_isArray(cachedChildren)) {
                    if (newChildren !== cachedChildren) {
                        el.textContent = newChildren;
                        cachedChildren = newChildren;
                    }
                } else {
                    if (deepness <= 0) {
                        if (__export_isArray(cachedChildren)) selectedUpdate(c.children, el, null);
                    } else {
                        cachedChildren = updateChildren(el, newChildren, cachedChildren, c, null, deepness - 1);
                    }
                }
                c.children = cachedChildren;
                if (inSvgForeignObject) inSvg = true;
                finishUpdateNode(n, c, component);
                if (c.attrs || n.attrs || inNotFocusable) c.attrs = updateElement(c, el, n.attrs, c.attrs || {}, inNotFocusable);
                updateStyle(el, n.style, c.style);
                c.style = n.style;
                var className = n.className;
                if (className !== c.className) {
                    setClassName(el, className || "");
                    c.className = className;
                }
                inSvg = backupInSvg;
                inNotFocusable = backupInNotFocusable;
                return c;
            }
        }
        var parEl = c.element;
        if (__export_isArray(parEl)) parEl = parEl[0];
        if (parEl == undefined) parEl = createInto; else parEl = parEl.parentNode;
        var r = createNode(n, c.parent, parEl, getDomNode(c));
        removeNode(c);
        return r;
    }
    function getDomNode(c) {
        if (c === undefined) return null;
        var el = c.element;
        if (el != null) {
            if (__export_isArray(el)) return el[0];
            return el;
        }
        var ch = c.children;
        if (!__export_isArray(ch)) return null;
        for (var i = 0; i < ch.length; i++) {
            el = getDomNode(ch[i]);
            if (el) return el;
        }
        return null;
    }
    function getLastDomNode(c) {
        if (c === undefined) return null;
        var el = c.element;
        if (el != null) {
            if (__export_isArray(el)) return el[el.length - 1];
            return el;
        }
        var ch = c.children;
        if (!__export_isArray(ch)) return null;
        for (var i = ch.length; i-- > 0; ) {
            el = getLastDomNode(ch[i]);
            if (el) return el;
        }
        return null;
    }
    function findNextNode(a, i, len, def) {
        while (++i < len) {
            var ai = a[i];
            if (ai == undefined) continue;
            var n = getDomNode(ai);
            if (n != null) return n;
        }
        return def;
    }
    function callPostCallbacks() {
        var count = updateInstance.length;
        for (var i = 0; i < count; i++) {
            var n = updateInstance[i];
            currentCtx = n.ctx;
            updateCall[i].call(n.component, currentCtx, n, n.element);
        }
        currentCtx = undefined;
        updateCall = [];
        updateInstance = [];
    }
    function updateNodeInUpdateChildren(newNode, cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness) {
        cachedChildren[cachedIndex] = updateNode(newNode, cachedChildren[cachedIndex], element, findNextNode(cachedChildren, cachedIndex, cachedLength, createBefore), deepness);
    }
    function reorderInUpdateChildrenRec(c, element, before) {
        var el = c.element;
        if (el != null) {
            if (__export_isArray(el)) {
                for (var i = 0; i < el.length; i++) {
                    element.insertBefore(el[i], before);
                }
            } else element.insertBefore(el, before);
            return;
        }
        var ch = c.children;
        if (!__export_isArray(ch)) return;
        for (var i = 0; i < ch.length; i++) {
            reorderInUpdateChildrenRec(ch[i], element, before);
        }
    }
    function reorderInUpdateChildren(cachedChildren, cachedIndex, cachedLength, createBefore, element) {
        var before = findNextNode(cachedChildren, cachedIndex, cachedLength, createBefore);
        var cur = cachedChildren[cachedIndex];
        var what = getDomNode(cur);
        if (what != null && what !== before) {
            reorderInUpdateChildrenRec(cur, element, before);
        }
    }
    function reorderAndUpdateNodeInUpdateChildren(newNode, cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness) {
        var before = findNextNode(cachedChildren, cachedIndex, cachedLength, createBefore);
        var cur = cachedChildren[cachedIndex];
        var what = getDomNode(cur);
        if (what != null && what !== before) {
            reorderInUpdateChildrenRec(cur, element, before);
        }
        cachedChildren[cachedIndex] = updateNode(newNode, cur, element, before, deepness);
    }
    function recursiveFlattenVdomChildren(res, children) {
        if (children == undefined) return;
        if (isArrayVdom(children)) {
            for (var i_7 = 0; i_7 < children.length; i_7++) {
                recursiveFlattenVdomChildren(res, children[i_7]);
            }
        } else {
            var item = normalizeNode(children);
            if (item !== undefined) res.push(item);
        }
    }
    function flattenVdomChildren(res, children) {
        recursiveFlattenVdomChildren(res, children);
        if (DEBUG) {
            var set = new Set();
            for (var i_8 = 0; i_8 < res.length; i_8++) {
                var key = res[i_8].key;
                if (key == undefined) continue;
                if (set.has(key)) {
                    console.warn("Duplicate Bobril node key " + key);
                }
                set.add(key);
            }
        }
    }
    function updateChildren(element, newChildren, cachedChildren, parentNode, createBefore, deepness) {
        if (cachedChildren == undefined) cachedChildren = [];
        if (!__export_isArray(cachedChildren)) {
            if (element.firstChild) element.removeChild(element.firstChild);
            cachedChildren = [];
        }
        var newCh = [];
        flattenVdomChildren(newCh, newChildren);
        return updateChildrenCore(element, newCh, cachedChildren, parentNode, createBefore, deepness);
    }
    function updateChildrenCore(element, newChildren, cachedChildren, parentNode, createBefore, deepness) {
        var newEnd = newChildren.length;
        var cachedLength = cachedChildren.length;
        var cachedEnd = cachedLength;
        var newIndex = 0;
        var cachedIndex = 0;
        while (newIndex < newEnd && cachedIndex < cachedEnd) {
            if (newChildren[newIndex].key === cachedChildren[cachedIndex].key) {
                updateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness);
                newIndex++;
                cachedIndex++;
                continue;
            }
            while (true) {
                if (newChildren[newEnd - 1].key === cachedChildren[cachedEnd - 1].key) {
                    newEnd--;
                    cachedEnd--;
                    updateNodeInUpdateChildren(newChildren[newEnd], cachedChildren, cachedEnd, cachedLength, createBefore, element, deepness);
                    if (newIndex < newEnd && cachedIndex < cachedEnd) continue;
                }
                break;
            }
            if (newIndex < newEnd && cachedIndex < cachedEnd) {
                if (newChildren[newIndex].key === cachedChildren[cachedEnd - 1].key) {
                    cachedChildren.splice(cachedIndex, 0, cachedChildren[cachedEnd - 1]);
                    cachedChildren.splice(cachedEnd, 1);
                    reorderAndUpdateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness);
                    newIndex++;
                    cachedIndex++;
                    continue;
                }
                if (newChildren[newEnd - 1].key === cachedChildren[cachedIndex].key) {
                    cachedChildren.splice(cachedEnd, 0, cachedChildren[cachedIndex]);
                    cachedChildren.splice(cachedIndex, 1);
                    cachedEnd--;
                    newEnd--;
                    reorderAndUpdateNodeInUpdateChildren(newChildren[newEnd], cachedChildren, cachedEnd, cachedLength, createBefore, element, deepness);
                    continue;
                }
            }
            break;
        }
        if (cachedIndex === cachedEnd) {
            if (newIndex === newEnd) {
                return cachedChildren;
            }
            while (newIndex < newEnd) {
                cachedChildren.splice(cachedIndex, 0, createNode(newChildren[newIndex], parentNode, element, findNextNode(cachedChildren, cachedIndex - 1, cachedLength, createBefore)));
                cachedIndex++;
                cachedEnd++;
                cachedLength++;
                newIndex++;
            }
            return cachedChildren;
        }
        if (newIndex === newEnd) {
            while (cachedIndex < cachedEnd) {
                cachedEnd--;
                removeNode(cachedChildren[cachedEnd]);
                cachedChildren.splice(cachedEnd, 1);
            }
            return cachedChildren;
        }
        var cachedKeys = newHashObj();
        var newKeys = newHashObj();
        var key;
        var node;
        var backupNewIndex = newIndex;
        var backupCachedIndex = cachedIndex;
        var deltaKeyless = 0;
        for (;cachedIndex < cachedEnd; cachedIndex++) {
            node = cachedChildren[cachedIndex];
            key = node.key;
            if (key != null) {
                assert(!(key in cachedKeys));
                cachedKeys[key] = cachedIndex;
            } else deltaKeyless--;
        }
        var keyLess = -deltaKeyless - deltaKeyless;
        for (;newIndex < newEnd; newIndex++) {
            node = newChildren[newIndex];
            key = node.key;
            if (key != null) {
                assert(!(key in newKeys));
                newKeys[key] = newIndex;
            } else deltaKeyless++;
        }
        keyLess += deltaKeyless;
        var delta = 0;
        newIndex = backupNewIndex;
        cachedIndex = backupCachedIndex;
        var cachedKey;
        while (cachedIndex < cachedEnd && newIndex < newEnd) {
            if (cachedChildren[cachedIndex] === null) {
                cachedChildren.splice(cachedIndex, 1);
                cachedEnd--;
                cachedLength--;
                delta--;
                continue;
            }
            cachedKey = cachedChildren[cachedIndex].key;
            if (cachedKey == undefined) {
                cachedIndex++;
                continue;
            }
            key = newChildren[newIndex].key;
            if (key == undefined) {
                newIndex++;
                while (newIndex < newEnd) {
                    key = newChildren[newIndex].key;
                    if (key != undefined) break;
                    newIndex++;
                }
                if (key == undefined) break;
            }
            var akPos = cachedKeys[key];
            if (akPos === undefined) {
                cachedChildren.splice(cachedIndex, 0, createNode(newChildren[newIndex], parentNode, element, findNextNode(cachedChildren, cachedIndex - 1, cachedLength, createBefore)));
                delta++;
                newIndex++;
                cachedIndex++;
                cachedEnd++;
                cachedLength++;
                continue;
            }
            if (!(cachedKey in newKeys)) {
                removeNode(cachedChildren[cachedIndex]);
                cachedChildren.splice(cachedIndex, 1);
                delta--;
                cachedEnd--;
                cachedLength--;
                continue;
            }
            if (cachedIndex === akPos + delta) {
                updateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness);
                newIndex++;
                cachedIndex++;
            } else {
                cachedChildren.splice(cachedIndex, 0, cachedChildren[akPos + delta]);
                delta++;
                cachedChildren[akPos + delta] = null;
                reorderAndUpdateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness);
                cachedIndex++;
                cachedEnd++;
                cachedLength++;
                newIndex++;
            }
        }
        while (cachedIndex < cachedEnd) {
            if (cachedChildren[cachedIndex] === null) {
                cachedChildren.splice(cachedIndex, 1);
                cachedEnd--;
                cachedLength--;
                continue;
            }
            if (cachedChildren[cachedIndex].key != null) {
                removeNode(cachedChildren[cachedIndex]);
                cachedChildren.splice(cachedIndex, 1);
                cachedEnd--;
                cachedLength--;
                continue;
            }
            cachedIndex++;
        }
        while (newIndex < newEnd) {
            key = newChildren[newIndex].key;
            if (key != null) {
                cachedChildren.splice(cachedIndex, 0, createNode(newChildren[newIndex], parentNode, element, findNextNode(cachedChildren, cachedIndex - 1, cachedLength, createBefore)));
                cachedEnd++;
                cachedLength++;
                delta++;
                cachedIndex++;
            }
            newIndex++;
        }
        if (!keyLess) return cachedChildren;
        keyLess = keyLess - Math.abs(deltaKeyless) >> 1;
        newIndex = backupNewIndex;
        cachedIndex = backupCachedIndex;
        while (newIndex < newEnd) {
            if (cachedIndex < cachedEnd) {
                cachedKey = cachedChildren[cachedIndex].key;
                if (cachedKey != null) {
                    cachedIndex++;
                    continue;
                }
            }
            key = newChildren[newIndex].key;
            if (newIndex < cachedEnd && key === cachedChildren[newIndex].key) {
                if (key != null) {
                    newIndex++;
                    continue;
                }
                updateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, newIndex, cachedLength, createBefore, element, deepness);
                keyLess--;
                newIndex++;
                cachedIndex = newIndex;
                continue;
            }
            if (key != null) {
                assert(newIndex === cachedIndex);
                if (keyLess === 0 && deltaKeyless < 0) {
                    while (true) {
                        removeNode(cachedChildren[cachedIndex]);
                        cachedChildren.splice(cachedIndex, 1);
                        cachedEnd--;
                        cachedLength--;
                        deltaKeyless++;
                        assert(cachedIndex !== cachedEnd, "there still need to exist key node");
                        if (cachedChildren[cachedIndex].key != null) break;
                    }
                    continue;
                }
                while (cachedChildren[cachedIndex].key == undefined) cachedIndex++;
                assert(key === cachedChildren[cachedIndex].key);
                cachedChildren.splice(newIndex, 0, cachedChildren[cachedIndex]);
                cachedChildren.splice(cachedIndex + 1, 1);
                reorderInUpdateChildren(cachedChildren, newIndex, cachedLength, createBefore, element);
                newIndex++;
                cachedIndex = newIndex;
                continue;
            }
            if (cachedIndex < cachedEnd) {
                cachedChildren.splice(newIndex, 0, cachedChildren[cachedIndex]);
                cachedChildren.splice(cachedIndex + 1, 1);
                reorderAndUpdateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, newIndex, cachedLength, createBefore, element, deepness);
                keyLess--;
                newIndex++;
                cachedIndex++;
            } else {
                cachedChildren.splice(newIndex, 0, createNode(newChildren[newIndex], parentNode, element, findNextNode(cachedChildren, newIndex - 1, cachedLength, createBefore)));
                cachedEnd++;
                cachedLength++;
                newIndex++;
                cachedIndex++;
            }
        }
        while (cachedEnd > newIndex) {
            cachedEnd--;
            removeNode(cachedChildren[cachedEnd]);
            cachedChildren.splice(cachedEnd, 1);
        }
        return cachedChildren;
    }
    var hasNativeRaf = false;
    var nativeRaf = window.requestAnimationFrame;
    if (nativeRaf) {
        nativeRaf(function(param) {
            if (param === +param) hasNativeRaf = true;
        });
    }
    var setTimeout = window.setTimeout;
    var __export_now = Date.now || function() {
        return new Date().getTime();
    };
    var startTime = __export_now();
    var lastTickTime = 0;
    function requestAnimationFrame(callback) {
        if (hasNativeRaf) {
            nativeRaf(callback);
        } else {
            var delay = 50 / 3 + lastTickTime - __export_now();
            if (delay < 0) delay = 0;
            setTimeout(function() {
                lastTickTime = __export_now();
                callback(lastTickTime - startTime);
            }, delay);
        }
    }
    var ctxInvalidated = "$invalidated";
    var ctxDeepness = "$deepness";
    var fullRecreateRequested = true;
    var scheduled = false;
    var isInvalidated = true;
    var initializing = true;
    var uptimeMs = 0;
    var frameCounter = 0;
    var lastFrameDurationMs = 0;
    var renderFrameBegin = 0;
    var regEvents = {};
    var registryEvents;
    function addEvent(name, priority, callback) {
        if (registryEvents == undefined) registryEvents = {};
        var list = registryEvents[name] || [];
        list.push({
            priority,
            callback
        });
        registryEvents[name] = list;
    }
    function emitEvent(name, ev, target, node) {
        var events = regEvents[name];
        if (events) for (var i = 0; i < events.length; i++) {
            if (events[i](ev, target, node)) return true;
        }
        return false;
    }
    var isPassiveEventHandlerSupported = false;
    try {
        var options_bobril = Object.defineProperty({}, "passive", {
            get: function() {
                isPassiveEventHandlerSupported = true;
            }
        });
        window.addEventListener("test", options_bobril, options_bobril);
        window.removeEventListener("test", options_bobril, options_bobril);
    } catch (err) {
        isPassiveEventHandlerSupported = false;
    }
    var listeningEventDeepness = 0;
    function addListener(el, name) {
        if (name[0] == "!") return;
        var capture = name[0] == "^";
        var eventName = name;
        if (name[0] == "@") {
            eventName = name.slice(1);
            el = document;
        }
        if (capture) {
            eventName = name.slice(1);
        }
        function enhanceEvent(ev) {
            ev = ev || window.event;
            var t = ev.target || ev.srcElement || el;
            var n = deref(t);
            listeningEventDeepness++;
            emitEvent(name, ev, t, n);
            listeningEventDeepness--;
            if (listeningEventDeepness == 0 && deferSyncUpdateRequested) syncUpdate();
        }
        if ("on" + eventName in window) el = window;
        el.addEventListener(eventName, enhanceEvent, isPassiveEventHandlerSupported ? {
            capture,
            passive: false
        } : capture);
    }
    function initEvents() {
        if (registryEvents === undefined) return;
        var eventNames = Object.keys(registryEvents);
        for (var j = 0; j < eventNames.length; j++) {
            var eventName = eventNames[j];
            var arr = registryEvents[eventName];
            arr = arr.sort(function(a, b) {
                return a.priority - b.priority;
            });
            regEvents[eventName] = arr.map(function(v) {
                return v.callback;
            });
        }
        registryEvents = undefined;
        var body = document.body;
        for (var i = 0; i < eventNames.length; i++) {
            addListener(body, eventNames[i]);
        }
    }
    function selectedUpdate(cache, element, createBefore) {
        var len = cache.length;
        for (var i = 0; i < len; i++) {
            var node = cache[i];
            var ctx = node.ctx;
            if (ctx != null && ctx[ctxInvalidated] >= frameCounter) {
                cache[i] = updateNode(node.orig, node, element, findNextNode(cache, i, len, createBefore), ctx[ctxDeepness], true);
            } else if (__export_isArray(node.children)) {
                var backupInSvg = inSvg;
                var backupInNotFocusable = inNotFocusable;
                if (inNotFocusable && focusRootTop === node) inNotFocusable = false;
                if (node.tag === "svg") inSvg = true; else if (inSvg && node.tag === "foreignObject") inSvg = false;
                var thisElement = node.element;
                if (thisElement != undefined) {
                    selectedUpdate(node.children, thisElement, null);
                } else {
                    selectedUpdate(node.children, element, findNextNode(cache, i, len, createBefore));
                }
                pushUpdateEverytimeCallback(node);
                inSvg = backupInSvg;
                inNotFocusable = backupInNotFocusable;
            }
        }
    }
    var RenderPhase_bobril;
    (function(RenderPhase) {
        RenderPhase[RenderPhase["Create"] = 0] = "Create";
        RenderPhase[RenderPhase["Update"] = 1] = "Update";
        RenderPhase[RenderPhase["LocalUpdate"] = 2] = "LocalUpdate";
        RenderPhase[RenderPhase["Destroy"] = 3] = "Destroy";
    })(RenderPhase_bobril = __export_RenderPhase || (__export_RenderPhase = {}));
    var emptyBeforeRenderCallback = function() {};
    var beforeRenderCallback = emptyBeforeRenderCallback;
    var beforeFrameCallback = function() {};
    var reallyBeforeFrameCallback = function() {};
    var afterFrameCallback = function() {};
    function setBeforeRender(callback) {
        var res = beforeRenderCallback;
        beforeRenderCallback = callback;
        return res;
    }
    function setBeforeFrame(callback) {
        var res = beforeFrameCallback;
        beforeFrameCallback = callback;
        return res;
    }
    function setReallyBeforeFrame(callback) {
        var res = reallyBeforeFrameCallback;
        reallyBeforeFrameCallback = callback;
        return res;
    }
    function setAfterFrame(callback) {
        var res = afterFrameCallback;
        afterFrameCallback = callback;
        return res;
    }
    function isLogicalParent(parent, child, rootIds) {
        while (child != null) {
            if (parent === child) return true;
            var p = child.parent;
            if (p == undefined) {
                for (var i = 0; i < rootIds.length; i++) {
                    var r = roots[rootIds[i]];
                    if (!r) continue;
                    if (r.n === child) {
                        p = r.p;
                        break;
                    }
                }
            }
            child = p;
        }
        return false;
    }
    var deferSyncUpdateRequested = false;
    function syncUpdate() {
        deferSyncUpdateRequested = false;
        internalUpdate(__export_now() - startTime);
        executeEffectCallbacks();
    }
    function deferSyncUpdate() {
        if (listeningEventDeepness > 0) {
            deferSyncUpdateRequested = true;
            return;
        }
        syncUpdate();
    }
    function update(time) {
        scheduled = false;
        internalUpdate(time);
        __export_asap(executeEffectCallbacks);
    }
    var rootIds_bobril;
    var RootComponent = createVirtualComponent({
        render: function(ctx, me) {
            var r = ctx.data;
            var c = r.f(r);
            if (c === undefined) {
                me.tag = "-";
            } else {
                me.children = c;
            }
        }
    });
    function internalUpdate(time) {
        isInvalidated = false;
        renderFrameBegin = __export_now();
        initEvents();
        reallyBeforeFrameCallback();
        frameCounter++;
        ignoringShouldChange = nextIgnoreShouldChange;
        nextIgnoreShouldChange = false;
        uptimeMs = time;
        beforeFrameCallback();
        var fullRefresh = false;
        if (fullRecreateRequested) {
            fullRecreateRequested = false;
            fullRefresh = true;
        }
        listeningEventDeepness++;
        for (var repeat = 0; repeat < 2; repeat++) {
            focusRootTop = focusRootStack.length === 0 ? null : focusRootStack[focusRootStack.length - 1];
            inNotFocusable = false;
            rootIds_bobril = Object.keys(roots);
            for (var i = 0; i < rootIds_bobril.length; i++) {
                var r = roots[rootIds_bobril[i]];
                if (!r) continue;
                var rc = r.n;
                var insertBefore = null;
                for (var j = i + 1; j < rootIds_bobril.length; j++) {
                    var rafter = roots[rootIds_bobril[j]];
                    if (rafter === undefined) continue;
                    insertBefore = getDomNode(rafter.n);
                    if (insertBefore != null) break;
                }
                if (focusRootTop) inNotFocusable = !isLogicalParent(focusRootTop, r.p, rootIds_bobril);
                if (r.e === undefined) r.e = document.body;
                if (rc) {
                    if (fullRefresh || rc.ctx[ctxInvalidated] >= frameCounter) {
                        var node = RootComponent(r);
                        updateNode(node, rc, r.e, insertBefore, fullRefresh ? 1e6 : rc.ctx[ctxDeepness]);
                    } else {
                        if (__export_isArray(r.c)) selectedUpdate(r.c, r.e, insertBefore);
                    }
                } else {
                    var node = RootComponent(r);
                    rc = createNode(node, undefined, r.e, insertBefore);
                    r.n = rc;
                }
                r.c = rc.children;
            }
            rootIds_bobril = undefined;
            callPostCallbacks();
            if (!deferSyncUpdateRequested) break;
        }
        deferSyncUpdateRequested = false;
        listeningEventDeepness--;
        var r0 = roots["0"];
        afterFrameCallback(r0 ? r0.c : null);
        lastFrameDurationMs = __export_now() - renderFrameBegin;
    }
    var nextIgnoreShouldChange = false;
    var ignoringShouldChange = false;
    function ignoreShouldChange() {
        nextIgnoreShouldChange = true;
        __export_invalidate();
    }
    function setInvalidate(inv) {
        var prev = __export_invalidate;
        __export_invalidate = inv;
        return prev;
    }
    __export_invalidate = function(ctx, deepness) {
        if (ctx != null) {
            if (deepness == undefined) deepness = 1e6;
            if (ctx[ctxInvalidated] !== frameCounter + 1) {
                ctx[ctxInvalidated] = frameCounter + 1;
                ctx[ctxDeepness] = deepness;
            } else {
                if (deepness > ctx[ctxDeepness]) ctx[ctxDeepness] = deepness;
            }
        } else {
            fullRecreateRequested = true;
        }
        isInvalidated = true;
        if (scheduled || initializing) return;
        scheduled = true;
        requestAnimationFrame(update);
    };
    var lastRootId = 0;
    function addRoot(factory, element, parent) {
        lastRootId++;
        var rootId = "" + lastRootId;
        roots[rootId] = {
            f: factory,
            e: element,
            c: [],
            p: parent,
            n: undefined
        };
        if (rootIds_bobril != null) {
            rootIds_bobril.push(rootId);
        } else {
            firstInvalidate();
        }
        return rootId;
    }
    function removeRoot(id) {
        var root = roots[id];
        if (!root) return;
        if (root.n) removeNode(root.n);
        delete roots[id];
    }
    function updateRoot(id, factory) {
        assert(rootIds_bobril != null, "updateRoot could be called only from render");
        var root = roots[id];
        assert(root != null);
        if (factory != null) root.f = factory;
        var rootNode = root.n;
        if (rootNode == undefined) return;
        var ctx = rootNode.ctx;
        ctx[ctxInvalidated] = frameCounter;
        ctx[ctxDeepness] = 1e6;
    }
    function getRoots() {
        return roots;
    }
    function finishInitialize() {
        initializing = false;
        __export_invalidate();
    }
    var beforeInit = finishInitialize;
    function firstInvalidate() {
        initializing = true;
        beforeInit();
        beforeInit = finishInitialize;
    }
    function init(factory, element) {
        assert(rootIds_bobril == undefined, "init should not be called from render");
        removeRoot("0");
        roots["0"] = {
            f: factory,
            e: element,
            c: [],
            p: undefined,
            n: undefined
        };
        firstInvalidate();
    }
    function setBeforeInit(callback) {
        var prevBeforeInit = beforeInit;
        beforeInit = function() {
            callback(prevBeforeInit);
        };
    }
    var currentCtxWithEvents;
    function bubble(node, name, param) {
        if (param == undefined) {
            param = {
                target: node
            };
        } else if (isObject(param) && param.target == undefined) {
            param.target = node;
        }
        var res = captureBroadcast(name, param);
        if (res != undefined) return res;
        var prevCtx = currentCtxWithEvents;
        while (node) {
            var c = node.component;
            if (c) {
                var ctx = node.ctx;
                currentCtxWithEvents = ctx;
                if (((ctx.$hookFlags || 0) & hasEvents) === hasEvents) {
                    var hooks = ctx.$hooks;
                    for (var i = 0, l = hooks.length; i < l; i++) {
                        var h = hooks[i];
                        if (h instanceof EventsHook_bobril) {
                            var m = h.events[name];
                            if (m !== undefined) {
                                var eventResult = +m.call(ctx, param);
                                if (eventResult == EventResult_bobril.HandledPreventDefault) {
                                    currentCtxWithEvents = prevCtx;
                                    return ctx;
                                }
                                if (eventResult == EventResult_bobril.HandledButRunDefault) {
                                    currentCtxWithEvents = prevCtx;
                                    return undefined;
                                }
                                if (eventResult == EventResult_bobril.NotHandledPreventDefault) {
                                    res = ctx;
                                }
                            }
                        }
                    }
                }
                var m = c[name];
                if (m) {
                    var eventResult = +m.call(c, ctx, param);
                    if (eventResult == EventResult_bobril.HandledPreventDefault) {
                        currentCtxWithEvents = prevCtx;
                        return ctx;
                    }
                    if (eventResult == EventResult_bobril.HandledButRunDefault) {
                        currentCtxWithEvents = prevCtx;
                        return undefined;
                    }
                    if (eventResult == EventResult_bobril.NotHandledPreventDefault) {
                        res = ctx;
                    }
                }
                m = c.shouldStopBubble;
                if (m) {
                    if (m.call(c, ctx, name, param)) break;
                }
            }
            node = node.parent;
        }
        currentCtxWithEvents = prevCtx;
        return res;
    }
    function broadcastEventToNode(node, name, param) {
        if (!node) return undefined;
        var res;
        var c = node.component;
        if (c) {
            var ctx = node.ctx;
            var prevCtx = currentCtxWithEvents;
            currentCtxWithEvents = ctx;
            if (((ctx.$hookFlags || 0) & hasEvents) === hasEvents) {
                var hooks = ctx.$hooks;
                for (var i = 0, l = hooks.length; i < l; i++) {
                    var h = hooks[i];
                    if (h instanceof EventsHook_bobril) {
                        var m = h.events[name];
                        if (m !== undefined) {
                            var eventResult = +m.call(ctx, param);
                            if (eventResult == EventResult_bobril.HandledPreventDefault) {
                                currentCtxWithEvents = prevCtx;
                                return ctx;
                            }
                            if (eventResult == EventResult_bobril.HandledButRunDefault) {
                                currentCtxWithEvents = prevCtx;
                                return undefined;
                            }
                            if (eventResult == EventResult_bobril.NotHandledPreventDefault) {
                                res = ctx;
                            }
                        }
                    }
                }
            }
            var m = c[name];
            if (m) {
                var eventResult = +m.call(c, ctx, param);
                if (eventResult == EventResult_bobril.HandledPreventDefault) {
                    currentCtxWithEvents = prevCtx;
                    return ctx;
                }
                if (eventResult == EventResult_bobril.HandledButRunDefault) {
                    currentCtxWithEvents = prevCtx;
                    return undefined;
                }
                if (eventResult == EventResult_bobril.NotHandledPreventDefault) {
                    res = ctx;
                }
            }
            m = c.shouldStopBroadcast;
            if (m) {
                if (m.call(c, ctx, name, param)) {
                    currentCtxWithEvents = prevCtx;
                    return res;
                }
            }
            currentCtxWithEvents = prevCtx;
        }
        var ch = node.children;
        if (__export_isArray(ch)) {
            for (var i = 0; i < ch.length; i++) {
                var res2 = broadcastEventToNode(ch[i], name, param);
                if (res2 != undefined) return res2;
            }
        }
        return res;
    }
    function broadcastCapturedEventToNode(node, name, param) {
        if (!node) return undefined;
        var res;
        var c = node.component;
        if (c) {
            var ctx = node.ctx;
            if (((ctx.$hookFlags || 0) & hasCaptureEvents) === hasCaptureEvents) {
                var hooks = ctx.$hooks;
                var prevCtx = currentCtxWithEvents;
                currentCtxWithEvents = ctx;
                for (var i = 0, l = hooks.length; i < l; i++) {
                    var h = hooks[i];
                    if (h instanceof CaptureEventsHook_bobril) {
                        var m = h.events[name];
                        if (m !== undefined) {
                            var eventResult = +m.call(ctx, param);
                            if (eventResult == EventResult_bobril.HandledPreventDefault) {
                                currentCtxWithEvents = prevCtx;
                                return ctx;
                            }
                            if (eventResult == EventResult_bobril.HandledButRunDefault) {
                                currentCtxWithEvents = prevCtx;
                                return undefined;
                            }
                            if (eventResult == EventResult_bobril.NotHandledPreventDefault) {
                                res = ctx;
                            }
                        }
                    }
                }
                currentCtxWithEvents = prevCtx;
            }
        }
        var ch = node.children;
        if (__export_isArray(ch)) {
            for (var i = 0, l = ch.length; i < l; i++) {
                var res2 = broadcastCapturedEventToNode(ch[i], name, param);
                if (res2 != undefined) return res2;
            }
        }
        return res;
    }
    function captureBroadcast(name, param) {
        var k = Object.keys(roots);
        for (var i = 0; i < k.length; i++) {
            var ch = roots[k[i]].n;
            if (ch != null) {
                var res = broadcastCapturedEventToNode(ch, name, param);
                if (res != null) return res;
            }
        }
        return undefined;
    }
    function broadcast(name, param) {
        var res = captureBroadcast(name, param);
        if (res != null) return res;
        var k = Object.keys(roots);
        for (var i = 0; i < k.length; i++) {
            var ch = roots[k[i]].n;
            if (ch != null) {
                res = broadcastEventToNode(ch, name, param);
                if (res != null) return res;
            }
        }
        return undefined;
    }
    function runMethodFrom(ctx, methodId, param) {
        var done = false;
        if (DEBUG && ctx == undefined) throw new Error("runMethodFrom ctx is undefined");
        var currentRoot = ctx.me;
        var previousRoot;
        while (currentRoot != undefined) {
            var children = currentRoot.children;
            if (__export_isArray(children)) loopChildNodes(children);
            if (done) return true;
            var comp = currentRoot.component;
            if (comp && comp.runMethod) {
                var prevCtx = currentCtxWithEvents;
                currentCtxWithEvents = currentRoot.ctx;
                if (comp.runMethod(currentCtxWithEvents, methodId, param)) done = true;
                currentCtxWithEvents = prevCtx;
            }
            if (done) return true;
            previousRoot = currentRoot;
            currentRoot = currentRoot.parent;
        }
        function loopChildNodes(children) {
            for (var i = children.length - 1; i >= 0; i--) {
                var child = children[i];
                if (child === previousRoot) continue;
                __export_isArray(child.children) && loopChildNodes(child.children);
                if (done) return;
                var comp = child.component;
                if (comp && comp.runMethod) {
                    var prevCtx = currentCtxWithEvents;
                    currentCtxWithEvents = child.ctx;
                    if (comp.runMethod(currentCtxWithEvents, methodId, param)) {
                        currentCtxWithEvents = prevCtx;
                        done = true;
                        return;
                    }
                    currentCtxWithEvents = prevCtx;
                }
            }
        }
        return done;
    }
    function getCurrentCtxWithEvents() {
        if (currentCtxWithEvents != undefined) return currentCtxWithEvents;
        return currentCtx;
    }
    function tryRunMethod(methodId, param) {
        return runMethodFrom(getCurrentCtxWithEvents(), methodId, param);
    }
    function runMethod(methodId, param) {
        if (!runMethodFrom(getCurrentCtxWithEvents(), methodId, param)) throw Error("runMethod didn't found " + methodId);
    }
    var lastMethodId = 0;
    function allocateMethodId() {
        return lastMethodId++;
    }
    function merge(f1, f2) {
        return function() {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            var result = f1.apply(this, params);
            if (result) return result;
            return f2.apply(this, params);
        };
    }
    var emptyObject = {};
    function mergeComponents(c1, c2) {
        var res = Object.create(c1);
        res.super = c1;
        for (var i in c2) {
            if (!(i in emptyObject)) {
                var m = c2[i];
                var origM = c1[i];
                if (i === "id") {
                    res[i] = (origM != null ? origM : "") + "/" + m;
                } else if (isFunction(m) && origM != null && isFunction(origM)) {
                    res[i] = merge(origM, m);
                } else {
                    res[i] = m;
                }
            }
        }
        return res;
    }
    function overrideComponents(originalComponent, overridingComponent) {
        var res = Object.create(originalComponent);
        res.super = originalComponent;
        for (var i_9 in overridingComponent) {
            if (!(i_9 in emptyObject)) {
                var m = overridingComponent[i_9];
                var origM = originalComponent[i_9];
                if (i_9 === "id") {
                    res[i_9] = (origM != null ? origM : "") + "/" + m;
                } else {
                    res[i_9] = m;
                }
            }
        }
        return res;
    }
    function preEnhance(node, methods) {
        var comp = node.component;
        if (!comp) {
            node.component = methods;
            return node;
        }
        node.component = mergeComponents(methods, comp);
        return node;
    }
    function postEnhance(node, methods) {
        var comp = node.component;
        if (!comp) {
            node.component = methods;
            return node;
        }
        node.component = mergeComponents(comp, methods);
        return node;
    }
    function preventDefault(event) {
        var pd = event.preventDefault;
        if (pd) pd.call(event); else event.returnValue = false;
    }
    function cloneNodeArray(a) {
        a = a.slice(0);
        for (var i = 0; i < a.length; i++) {
            var n = a[i];
            if (__export_isArray(n)) {
                a[i] = cloneNodeArray(n);
            } else if (isObject(n)) {
                a[i] = cloneNode(n);
            }
        }
        return a;
    }
    function cloneNode(node) {
        var r = __export_assign({}, node);
        if (r.attrs) {
            r.attrs = __export_assign({}, r.attrs);
        }
        if (isObject(r.style)) {
            r.style = __export_assign({}, r.style);
        }
        var ch = r.children;
        if (ch) {
            if (__export_isArray(ch)) {
                r.children = cloneNodeArray(ch);
            } else if (isObject(ch)) {
                r.children = cloneNode(ch);
            }
        }
        return r;
    }
    function setStyleShim(name, action) {
        mapping.set(name, action);
    }
    setStyleShim("float", renamer("cssFloat"));
    function uptime() {
        return uptimeMs;
    }
    function lastFrameDuration() {
        return lastFrameDurationMs;
    }
    function frame() {
        return frameCounter;
    }
    function invalidated() {
        return isInvalidated;
    }
    var BobrilDeviceCategory_bobril;
    (function(BobrilDeviceCategory) {
        BobrilDeviceCategory[BobrilDeviceCategory["Mobile"] = 0] = "Mobile";
        BobrilDeviceCategory[BobrilDeviceCategory["Tablet"] = 1] = "Tablet";
        BobrilDeviceCategory[BobrilDeviceCategory["Desktop"] = 2] = "Desktop";
        BobrilDeviceCategory[BobrilDeviceCategory["LargeDesktop"] = 3] = "LargeDesktop";
    })(BobrilDeviceCategory_bobril = __export_BobrilDeviceCategory || (__export_BobrilDeviceCategory = {}));
    var media = null;
    var breaks = [ [ 414, 800, 900 ], [ 736, 1280, 1440 ] ];
    function emitOnMediaChange() {
        media = null;
        __export_invalidate();
        return false;
    }
    var events_bobril = [ "resize", "orientationchange" ];
    for (var i_bobril = 0; i_bobril < events_bobril.length; i_bobril++) addEvent(events_bobril[i_bobril], 10, emitOnMediaChange);
    function accDeviceBreaks(newBreaks) {
        if (newBreaks != null) {
            breaks = newBreaks;
            emitOnMediaChange();
        }
        return breaks;
    }
    var viewport = window.document.documentElement;
    var isAndroid = /Android/i.test(navigator.userAgent);
    var weirdPortrait;
    function getMedia() {
        if (media == undefined) {
            var w = viewport.clientWidth;
            var h = viewport.clientHeight;
            var o = window.orientation;
            var p = h >= w;
            if (o == undefined) o = p ? 0 : 90; else o = +o;
            if (isAndroid) {
                var op = Math.abs(o) % 180 === 90;
                if (weirdPortrait == undefined) {
                    weirdPortrait = op === p;
                } else {
                    p = op === weirdPortrait;
                }
            }
            var device = 0;
            while (w > breaks[+!p][device]) device++;
            media = {
                width: w,
                height: h,
                orientation: o,
                deviceCategory: device,
                portrait: p,
                dppx: window.devicePixelRatio
            };
        }
        return media;
    }
    __export_asap = function() {
        var callbacks = [];
        function executeCallbacks() {
            var cbList = callbacks;
            callbacks = [];
            for (var i = 0, len = cbList.length; i < len; i++) {
                cbList[i]();
            }
        }
        if (window.MutationObserver) {
            var hiddenDiv = document.createElement("div");
            new MutationObserver(executeCallbacks).observe(hiddenDiv, {
                attributes: true
            });
            return function(callback) {
                if (!callbacks.length) {
                    hiddenDiv.setAttribute("yes", "no");
                }
                callbacks.push(callback);
            };
        } else {
            var timeout;
            var timeoutFn = window.setImmediate || setTimeout;
            return function(callback) {
                callbacks.push(callback);
                if (!timeout) {
                    timeout = timeoutFn(function() {
                        timeout = undefined;
                        executeCallbacks();
                    }, 0);
                }
            };
        }
    }();
    if (!window.Promise) {
        (function() {
            function bind(fn, thisArg) {
                return function() {
                    fn.apply(thisArg, arguments);
                };
            }
            function handle(deferred) {
                var _this = this;
                if (this.s === null) {
                    this.d.push(deferred);
                    return;
                }
                __export_asap(function() {
                    var cb = _this.s ? deferred[0] : deferred[1];
                    if (cb == undefined) {
                        (_this.s ? deferred[2] : deferred[3])(_this.v);
                        return;
                    }
                    var ret;
                    try {
                        ret = cb(_this.v);
                    } catch (e) {
                        deferred[3](e);
                        return;
                    }
                    deferred[2](ret);
                });
            }
            function finale() {
                for (var i = 0, len = this.d.length; i < len; i++) {
                    handle.call(this, this.d[i]);
                }
                this.d = null;
            }
            function reject(newValue) {
                this.s = false;
                this.v = newValue;
                finale.call(this);
            }
            function doResolve(fn, onFulfilled, onRejected) {
                var done = false;
                try {
                    fn(function(value) {
                        if (done) return;
                        done = true;
                        onFulfilled(value);
                    }, function(reason) {
                        if (done) return;
                        done = true;
                        onRejected(reason);
                    });
                } catch (ex) {
                    if (done) return;
                    done = true;
                    onRejected(ex);
                }
            }
            function resolve(newValue) {
                try {
                    if (newValue === this) throw new TypeError("Promise self resolve");
                    if (Object(newValue) === newValue) {
                        var then = newValue.then;
                        if (typeof then === "function") {
                            doResolve(bind(then, newValue), bind(resolve, this), bind(reject, this));
                            return;
                        }
                    }
                    this.s = true;
                    this.v = newValue;
                    finale.call(this);
                } catch (e) {
                    reject.call(this, e);
                }
            }
            function Promise(fn) {
                this.s = null;
                this.v = null;
                this.d = [];
                doResolve(fn, bind(resolve, this), bind(reject, this));
            }
            Promise.prototype.then = function(onFulfilled, onRejected) {
                var me = this;
                return new Promise(function(resolve, reject) {
                    handle.call(me, [ onFulfilled, onRejected, resolve, reject ]);
                });
            };
            Promise.prototype["catch"] = function(onRejected) {
                return this.then(undefined, onRejected);
            };
            Promise.all = function() {
                var args = [].slice.call(arguments.length === 1 && __export_isArray(arguments[0]) ? arguments[0] : arguments);
                return new Promise(function(resolve, reject) {
                    if (args.length === 0) {
                        resolve(args);
                        return;
                    }
                    var remaining = args.length;
                    function res(i, val) {
                        try {
                            if (val && (typeof val === "object" || typeof val === "function")) {
                                var then = val.then;
                                if (typeof then === "function") {
                                    then.call(val, function(val) {
                                        res(i, val);
                                    }, reject);
                                    return;
                                }
                            }
                            args[i] = val;
                            if (--remaining === 0) {
                                resolve(args);
                            }
                        } catch (ex) {
                            reject(ex);
                        }
                    }
                    for (var i = 0; i < args.length; i++) {
                        res(i, args[i]);
                    }
                });
            };
            Promise.resolve = function(value) {
                if (value && typeof value === "object" && value.constructor === Promise) {
                    return value;
                }
                return new Promise(function(resolve) {
                    resolve(value);
                });
            };
            Promise.reject = function(value) {
                return new Promise(function(_resolve, reject) {
                    reject(value);
                });
            };
            Promise.race = function(values) {
                return new Promise(function(resolve, reject) {
                    for (var i = 0, len = values.length; i < len; i++) {
                        values[i].then(resolve, reject);
                    }
                });
            };
            window["Promise"] = Promise;
        })();
    }
    var bValue = "b$value";
    var bSelectionStart = "b$selStart";
    var bSelectionEnd = "b$selEnd";
    var tValue = "value";
    function isCheckboxLike(el) {
        var t = el.type;
        return t === "checkbox" || t === "radio";
    }
    function stringArrayEqual(a1, a2) {
        var l = a1.length;
        if (l !== a2.length) return false;
        for (var j = 0; j < l; j++) {
            if (a1[j] !== a2[j]) return false;
        }
        return true;
    }
    function stringArrayContains(a, v) {
        for (var j = 0; j < a.length; j++) {
            if (a[j] === v) return true;
        }
        return false;
    }
    function selectedArray(options) {
        var res = [];
        for (var j = 0; j < options.length; j++) {
            if (options[j].selected) res.push(options[j].value);
        }
        return res;
    }
    var prevSetValueCallback = setSetValue(function(el, node, newValue, oldValue) {
        var tagName = el.tagName;
        var isSelect = tagName === "SELECT";
        var isInput = tagName === "INPUT" || tagName === "TEXTAREA";
        if (!isInput && !isSelect) {
            prevSetValueCallback(el, node, newValue, oldValue);
            return;
        }
        if (node.ctx === undefined) {
            node.ctx = {
                data: undefined,
                me: node
            };
            node.component = emptyComponent;
        }
        if (oldValue === undefined) {
            node.ctx[bValue] = newValue;
        }
        var isMultiSelect = isSelect && el.multiple;
        var emitDiff = false;
        if (isMultiSelect) {
            var options = el.options;
            var currentMulti = selectedArray(options);
            if (!stringArrayEqual(newValue, currentMulti)) {
                if (oldValue === undefined || stringArrayEqual(currentMulti, oldValue) || !stringArrayEqual(newValue, node.ctx[bValue])) {
                    for (var j = 0; j < options.length; j++) {
                        options[j].selected = stringArrayContains(newValue, options[j].value);
                    }
                    currentMulti = selectedArray(options);
                    if (stringArrayEqual(currentMulti, newValue)) {
                        emitDiff = true;
                    }
                } else {
                    emitDiff = true;
                }
            }
        } else if (isInput || isSelect) {
            if (isInput && isCheckboxLike(el)) {
                var currentChecked = el.checked;
                if (newValue !== currentChecked) {
                    if (oldValue === undefined || currentChecked === oldValue || newValue !== node.ctx[bValue]) {
                        el.checked = newValue;
                    } else {
                        emitDiff = true;
                    }
                }
            } else {
                var isCombobox = isSelect && el.size < 2;
                var currentValue = el[tValue];
                if (newValue !== currentValue) {
                    if (oldValue === undefined || currentValue === oldValue || newValue !== node.ctx[bValue]) {
                        if (isSelect) {
                            if (newValue === "") {
                                el.selectedIndex = isCombobox ? 0 : -1;
                            } else {
                                el[tValue] = newValue;
                            }
                            if (newValue !== "" || isCombobox) {
                                currentValue = el[tValue];
                                if (newValue !== currentValue) {
                                    emitDiff = true;
                                }
                            }
                        } else {
                            el[tValue] = newValue;
                        }
                    } else {
                        emitDiff = true;
                    }
                }
            }
        }
        if (emitDiff) {
            emitOnChange(undefined, el, node);
        } else {
            node.ctx[bValue] = newValue;
        }
    });
    function emitOnChange(ev, target, node) {
        if (target && target.nodeName === "OPTION") {
            target = document.activeElement;
            node = deref(target);
        }
        if (!node) {
            return false;
        }
        if (node.ctx === undefined) {
            node.ctx = {
                data: undefined,
                me: node
            };
            node.component = emptyComponent;
        }
        var ctx = node.ctx;
        var tagName = target.tagName;
        var isSelect = tagName === "SELECT";
        var isMultiSelect = isSelect && target.multiple;
        if (isMultiSelect) {
            var vs = selectedArray(target.options);
            if (!stringArrayEqual(ctx[bValue], vs)) {
                ctx[bValue] = vs;
                emitOnInput(node, vs);
            }
        } else if (isCheckboxLike(target)) {
            if (ev && ev.type === "change") {
                setTimeout(function() {
                    emitOnChange(undefined, target, node);
                }, 10);
                return false;
            }
            if (target.type === "radio") {
                var radios = document.getElementsByName(target.name);
                for (var j = 0; j < radios.length; j++) {
                    var radio = radios[j];
                    var radioNode = deref(radio);
                    if (!radioNode) continue;
                    var radioCtx = radioNode.ctx;
                    var vrb = radio.checked;
                    if (radioCtx[bValue] !== vrb) {
                        radioCtx[bValue] = vrb;
                        emitOnInput(radioNode, vrb);
                    }
                }
            } else {
                var vb = target.checked;
                if (ctx[bValue] !== vb) {
                    ctx[bValue] = vb;
                    emitOnInput(node, vb);
                }
            }
        } else {
            var v = target.value;
            if (ctx[bValue] !== v) {
                ctx[bValue] = v;
                emitOnInput(node, v);
            }
            var sStart = target.selectionStart;
            var sEnd = target.selectionEnd;
            var sDir = target.selectionDirection;
            var swap = false;
            var oStart = ctx[bSelectionStart];
            if (sDir == undefined) {
                if (sEnd === oStart) swap = true;
            } else if (sDir === "backward") {
                swap = true;
            }
            if (swap) {
                var s = sStart;
                sStart = sEnd;
                sEnd = s;
            }
            emitOnSelectionChange(node, sStart, sEnd);
        }
        return false;
    }
    function emitOnInput(node, value) {
        var prevCtx = currentCtxWithEvents;
        var ctx = node.ctx;
        var component = node.component;
        currentCtxWithEvents = ctx;
        var hasProp = node.attrs && node.attrs[bValue];
        if (isFunction(hasProp)) hasProp(value);
        var hasOnChange = component && component.onChange;
        if (isFunction(hasOnChange)) hasOnChange(ctx, value);
        currentCtxWithEvents = prevCtx;
        bubble(node, "onInput", {
            target: node,
            value
        });
    }
    function emitOnSelectionChange(node, start, end) {
        var c = node.component;
        var ctx = node.ctx;
        if (c && (ctx[bSelectionStart] !== start || ctx[bSelectionEnd] !== end)) {
            ctx[bSelectionStart] = start;
            ctx[bSelectionEnd] = end;
            bubble(node, "onSelectionChange", {
                target: node,
                startPosition: start,
                endPosition: end
            });
        }
    }
    function select(node, start, end) {
        if (end === void 0) {
            end = start;
        }
        node.element.setSelectionRange(Math.min(start, end), Math.max(start, end), start > end ? "backward" : "forward");
        emitOnSelectionChange(node, start, end);
    }
    function emitOnMouseChange(ev, _target, _node) {
        var f = focused();
        if (f) emitOnChange(ev, f.element, f);
        return false;
    }
    var events_bobril = [ "input", "cut", "paste", "keydown", "keypress", "keyup", "click", "change" ];
    for (var i_bobril = 0; i_bobril < events_bobril.length; i_bobril++) addEvent(events_bobril[i_bobril], 10, emitOnChange);
    var mouseEvents = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel" ];
    for (var i_bobril = 0; i_bobril < mouseEvents.length; i_bobril++) addEvent(mouseEvents[i_bobril], 2, emitOnMouseChange);
    function buildParam(ev) {
        return {
            target: undefined,
            shift: ev.shiftKey,
            ctrl: ev.ctrlKey,
            alt: ev.altKey,
            meta: ev.metaKey || false,
            which: ev.which || ev.keyCode
        };
    }
    function emitOnKeyDown(ev, _target, node) {
        if (!node) return false;
        var param = buildParam(ev);
        if (bubble(node, "onKeyDown", param)) {
            preventDefault(ev);
            return true;
        }
        return false;
    }
    function emitOnKeyUp(ev, _target, node) {
        if (!node) return false;
        var param = buildParam(ev);
        if (bubble(node, "onKeyUp", param)) {
            preventDefault(ev);
            return true;
        }
        return false;
    }
    function emitOnKeyPress(ev, _target, node) {
        if (!node) return false;
        if (ev.which === 0 || ev.altKey) return false;
        var param = {
            charCode: ev.which || ev.keyCode
        };
        if (bubble(node, "onKeyPress", param)) {
            preventDefault(ev);
            return true;
        }
        return false;
    }
    addEvent("keydown", 50, emitOnKeyDown);
    addEvent("keyup", 50, emitOnKeyUp);
    addEvent("keypress", 50, emitOnKeyPress);
    var BobrilPointerType_bobril;
    (function(BobrilPointerType) {
        BobrilPointerType[BobrilPointerType["Mouse"] = 0] = "Mouse";
        BobrilPointerType[BobrilPointerType["Touch"] = 1] = "Touch";
        BobrilPointerType[BobrilPointerType["Pen"] = 2] = "Pen";
    })(BobrilPointerType_bobril = __export_BobrilPointerType || (__export_BobrilPointerType = {}));
    var MoveOverIsNotTap = 13;
    var TapShouldBeShorterThanMs = 750;
    var MaxBustDelay = 500;
    var MaxBustDelayForIE = 800;
    var BustDistance = 50;
    var ownerCtx = null;
    var invokingOwner;
    var onClickText = "onClick";
    var onDoubleClickText = "onDoubleClick";
    function isMouseOwner(ctx) {
        return ownerCtx === ctx;
    }
    function isMouseOwnerEvent() {
        return invokingOwner;
    }
    function registerMouseOwner(ctx) {
        ownerCtx = ctx;
    }
    function releaseMouseOwner() {
        ownerCtx = null;
    }
    function invokeMouseOwner(handlerName, param) {
        if (ownerCtx == undefined) {
            return false;
        }
        var c = ownerCtx.me.component;
        var handler = c[handlerName];
        if (!handler) {
            return false;
        }
        invokingOwner = true;
        var prevCtx = currentCtxWithEvents;
        currentCtxWithEvents = ownerCtx;
        var stop = handler.call(c, ownerCtx, param);
        currentCtxWithEvents = prevCtx;
        invokingOwner = false;
        return stop;
    }
    function hasPointerEventsNoneB(node) {
        while (node) {
            var s = node.style;
            if (s) {
                var e = s.pointerEvents;
                if (e !== undefined) {
                    if (e === "none") return true;
                    return false;
                }
            }
            node = node.parent;
        }
        return false;
    }
    function revertVisibilityChanges(hiddenEls) {
        if (hiddenEls.length) {
            for (var i = hiddenEls.length - 1; i >= 0; --i) {
                hiddenEls[i].t.style.visibility = hiddenEls[i].p;
            }
            return true;
        }
        return false;
    }
    function pushAndHide(hiddenEls, t) {
        hiddenEls.push({
            t,
            p: t.style.visibility
        });
        t.style.visibility = "hidden";
    }
    function addEvent5(name, callback) {
        addEvent(name, 5, callback);
    }
    var pointersEventNames = [ "PointerDown", "PointerMove", "PointerUp", "PointerCancel" ];
    var i_bobril;
    function type2Bobril(t) {
        if (t === "mouse" || t === 4) return BobrilPointerType_bobril.Mouse;
        if (t === "pen" || t === 3) return BobrilPointerType_bobril.Pen;
        return BobrilPointerType_bobril.Touch;
    }
    function pointerEventsNoneFix(x, y, target, node) {
        var hiddenEls = [];
        var t = target;
        while (hasPointerEventsNoneB(node)) {
            pushAndHide(hiddenEls, t);
            t = document.elementFromPoint(x, y);
            node = deref(t);
        }
        revertVisibilityChanges(hiddenEls);
        return [ t, node ];
    }
    function buildHandlerPointer(name) {
        return function handlePointerDown(ev, target, node) {
            target = document.elementFromPoint(ev.clientX, ev.clientY);
            node = deref(target);
            if (hasPointerEventsNoneB(node)) {
                var fixed = pointerEventsNoneFix(ev.clientX, ev.clientY, target, node);
                target = fixed[0];
                node = fixed[1];
            }
            var button = ev.button + 1;
            var type = type2Bobril(ev.pointerType);
            var buttons = ev.buttons;
            if (button === 0 && type === BobrilPointerType_bobril.Mouse && buttons) {
                button = 1;
                while (!(buttons & 1)) {
                    buttons = buttons >> 1;
                    button++;
                }
            }
            var param = {
                target: node,
                id: ev.pointerId,
                cancelable: normalizeCancelable(ev),
                type,
                x: ev.clientX,
                y: ev.clientY,
                button,
                shift: ev.shiftKey,
                ctrl: ev.ctrlKey,
                alt: ev.altKey,
                meta: ev.metaKey || false,
                count: ev.detail
            };
            if (emitEvent("!" + name, param, target, node)) {
                preventDefault(ev);
                return true;
            }
            return false;
        };
    }
    function buildHandlerTouch(name) {
        return function handlePointerDown(ev, target, node) {
            var preventDef = false;
            for (var i = 0; i < ev.changedTouches.length; i++) {
                var t = ev.changedTouches[i];
                target = document.elementFromPoint(t.clientX, t.clientY);
                node = deref(target);
                var param = {
                    target: node,
                    id: t.identifier + 2,
                    cancelable: normalizeCancelable(ev),
                    type: BobrilPointerType_bobril.Touch,
                    x: t.clientX,
                    y: t.clientY,
                    button: 1,
                    shift: ev.shiftKey,
                    ctrl: ev.ctrlKey,
                    alt: ev.altKey,
                    meta: ev.metaKey || false,
                    count: ev.detail
                };
                if (emitEvent("!" + name, param, target, node)) preventDef = true;
            }
            if (preventDef) {
                preventDefault(ev);
                return true;
            }
            return false;
        };
    }
    function buildHandlerMouse(name) {
        return function handlePointer(ev, target, node) {
            target = document.elementFromPoint(ev.clientX, ev.clientY);
            node = deref(target);
            if (hasPointerEventsNoneB(node)) {
                var fixed = pointerEventsNoneFix(ev.clientX, ev.clientY, target, node);
                target = fixed[0];
                node = fixed[1];
            }
            var param = {
                target: node,
                id: 1,
                type: BobrilPointerType_bobril.Mouse,
                cancelable: normalizeCancelable(ev),
                x: ev.clientX,
                y: ev.clientY,
                button: decodeButton(ev),
                shift: ev.shiftKey,
                ctrl: ev.ctrlKey,
                alt: ev.altKey,
                meta: ev.metaKey || false,
                count: ev.detail
            };
            if (emitEvent("!" + name, param, target, node)) {
                preventDefault(ev);
                return true;
            }
            return false;
        };
    }
    function listenMouse() {
        addEvent5("mousedown", buildHandlerMouse(pointersEventNames[0]));
        addEvent5("mousemove", buildHandlerMouse(pointersEventNames[1]));
        addEvent5("mouseup", buildHandlerMouse(pointersEventNames[2]));
    }
    if (window.ontouchstart !== undefined) {
        addEvent5("touchstart", buildHandlerTouch(pointersEventNames[0]));
        addEvent5("touchmove", buildHandlerTouch(pointersEventNames[1]));
        addEvent5("touchend", buildHandlerTouch(pointersEventNames[2]));
        addEvent5("touchcancel", buildHandlerTouch(pointersEventNames[3]));
        listenMouse();
    } else if (window.onpointerdown !== undefined) {
        for (i_bobril = 0; i_bobril < 4; i_bobril++) {
            var name_bobril = pointersEventNames[i_bobril];
            addEvent5(name_bobril.toLowerCase(), buildHandlerPointer(name_bobril));
        }
    } else if (window.onmspointerdown !== undefined) {
        for (i_bobril = 0; i_bobril < 4; i_bobril++) {
            var name_bobril = pointersEventNames[i_bobril];
            addEvent5("@MS" + name_bobril, buildHandlerPointer(name_bobril));
        }
    } else {
        listenMouse();
    }
    for (var j_bobril = 0; j_bobril < 4; j_bobril++) {
        (function(name) {
            var onName = "on" + name;
            addEvent("!" + name, 50, function(ev, _target, node) {
                return invokeMouseOwner(onName, ev) || bubble(node, onName, ev) != undefined;
            });
        })(pointersEventNames[j_bobril]);
    }
    var pointersDown = newHashObj();
    var toBust = [];
    var firstPointerDown = -1;
    var firstPointerDownTime = 0;
    var firstPointerDownX = 0;
    var firstPointerDownY = 0;
    var tapCanceled = false;
    var lastMouseEv;
    function diffLess(n1, n2, diff) {
        return Math.abs(n1 - n2) < diff;
    }
    var prevMousePath = [];
    function revalidateMouseIn() {
        if (lastMouseEv) {
            mouseEnterAndLeave(lastMouseEv);
            handlePointerMove(lastMouseEv, undefined, deref(document.elementFromPoint(lastMouseEv.x, lastMouseEv.y)));
        }
    }
    function mouseEnterAndLeave(ev) {
        lastMouseEv = ev;
        var t = document.elementFromPoint(ev.x, ev.y);
        var toPath = vdomPath(t);
        var node = toPath.length == 0 ? undefined : toPath[toPath.length - 1];
        if (hasPointerEventsNoneB(node)) {
            var fixed = pointerEventsNoneFix(ev.x, ev.y, t, node == undefined ? undefined : node);
            t = fixed[0];
            toPath = vdomPath(t);
        }
        bubble(node, "onMouseOver", ev);
        var common = 0;
        while (common < prevMousePath.length && common < toPath.length && prevMousePath[common] === toPath[common]) common++;
        var n;
        var c;
        var i = prevMousePath.length;
        if (i > 0 && (i > common || i != toPath.length)) {
            n = prevMousePath[i - 1];
            if (n) {
                c = n.component;
                if (c && c.onMouseOut) c.onMouseOut(n.ctx, ev);
            }
        }
        while (i > common) {
            i--;
            n = prevMousePath[i];
            if (n) {
                c = n.component;
                if (c && c.onMouseLeave) c.onMouseLeave(n.ctx, ev);
            }
        }
        while (i < toPath.length) {
            n = toPath[i];
            if (n) {
                c = n.component;
                if (c && c.onMouseEnter) c.onMouseEnter(n.ctx, ev);
            }
            i++;
        }
        prevMousePath = toPath;
        if (i > 0 && (i > common || i != prevMousePath.length)) {
            n = prevMousePath[i - 1];
            if (n) {
                c = n.component;
                if (c && c.onMouseIn) c.onMouseIn(n.ctx, ev);
            }
        }
        return false;
    }
    function noPointersDown() {
        return Object.keys(pointersDown).length === 0;
    }
    function bustingPointerDown(ev, _target, _node) {
        if (firstPointerDown === -1 && noPointersDown()) {
            firstPointerDown = ev.id;
            firstPointerDownTime = __export_now();
            firstPointerDownX = ev.x;
            firstPointerDownY = ev.y;
            tapCanceled = false;
            mouseEnterAndLeave(ev);
        }
        pointersDown[ev.id] = ev.type;
        if (firstPointerDown !== ev.id) {
            tapCanceled = true;
        }
        return false;
    }
    function bustingPointerMove(ev, target, node) {
        if (ev.type === BobrilPointerType_bobril.Mouse && ev.button === 0 && pointersDown[ev.id] != null) {
            ev.button = 1;
            emitEvent("!PointerUp", ev, target, node);
            ev.button = 0;
        }
        if (firstPointerDown === ev.id) {
            mouseEnterAndLeave(ev);
            if (!diffLess(firstPointerDownX, ev.x, MoveOverIsNotTap) || !diffLess(firstPointerDownY, ev.y, MoveOverIsNotTap)) tapCanceled = true;
        } else if (noPointersDown()) {
            mouseEnterAndLeave(ev);
        }
        return false;
    }
    var clickingSpreeStart = 0;
    var clickingSpreeCount = 0;
    function shouldPreventClickingSpree(clickCount) {
        if (clickingSpreeCount == 0) return false;
        var n = __export_now();
        if (n < clickingSpreeStart + 1e3 && clickCount >= clickingSpreeCount) {
            clickingSpreeStart = n;
            clickingSpreeCount = clickCount;
            return true;
        }
        clickingSpreeCount = 0;
        return false;
    }
    function preventClickingSpree() {
        clickingSpreeCount = 2;
        clickingSpreeStart = __export_now();
    }
    function bustingPointerUp(ev, target, node) {
        delete pointersDown[ev.id];
        if (firstPointerDown == ev.id) {
            mouseEnterAndLeave(ev);
            firstPointerDown = -1;
            if (ev.type == BobrilPointerType_bobril.Touch && !tapCanceled) {
                if (__export_now() - firstPointerDownTime < TapShouldBeShorterThanMs) {
                    emitEvent("!PointerCancel", ev, target, node);
                    shouldPreventClickingSpree(1);
                    var handled = invokeMouseOwner(onClickText, ev) || bubble(node, onClickText, ev) != null;
                    var delay = ieVersion() ? MaxBustDelayForIE : MaxBustDelay;
                    toBust.push([ ev.x, ev.y, __export_now() + delay, handled ? 1 : 0 ]);
                    return handled;
                }
            } else if (tapCanceled) {
                __export_ignoreClick(ev.x, ev.y);
            }
        }
        return false;
    }
    function bustingPointerCancel(ev, _target, _node) {
        delete pointersDown[ev.id];
        if (firstPointerDown == ev.id) {
            firstPointerDown = -1;
        }
        return false;
    }
    function bustingClick(ev, _target, _node) {
        var n = __export_now();
        for (var i = 0; i < toBust.length; i++) {
            var j = toBust[i];
            if (j[2] < n) {
                toBust.splice(i, 1);
                i--;
                continue;
            }
            if (diffLess(j[0], ev.clientX, BustDistance) && diffLess(j[1], ev.clientY, BustDistance)) {
                toBust.splice(i, 1);
                if (j[3]) preventDefault(ev);
                return true;
            }
        }
        return false;
    }
    var bustingEventNames = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel", "^click" ];
    var bustingEventHandlers = [ bustingPointerDown, bustingPointerMove, bustingPointerUp, bustingPointerCancel, bustingClick ];
    for (var i_bobril = 0; i_bobril < 5; i_bobril++) {
        addEvent(bustingEventNames[i_bobril], 3, bustingEventHandlers[i_bobril]);
    }
    function createHandlerMouse(handlerName) {
        return function(ev, _target, node) {
            if (firstPointerDown != ev.id && !noPointersDown()) return false;
            if (invokeMouseOwner(handlerName, ev) || bubble(node, handlerName, ev)) {
                return true;
            }
            return false;
        };
    }
    var mouseHandlerNames = [ "Down", "Move", "Up", "Up" ];
    for (var i_bobril = 0; i_bobril < 4; i_bobril++) {
        addEvent(bustingEventNames[i_bobril], 80, createHandlerMouse("onMouse" + mouseHandlerNames[i_bobril]));
    }
    function decodeButton(ev) {
        return ev.which || ev.button;
    }
    function normalizeCancelable(ev) {
        var c = ev.cancelable;
        return !isBoolean(c) || c;
    }
    function createHandler(handlerName, allButtons) {
        return function(ev, _target, node) {
            var button = decodeButton(ev) || 1;
            if (!allButtons && button !== 1) return false;
            var param = {
                target: node,
                x: ev.clientX,
                y: ev.clientY,
                button,
                cancelable: normalizeCancelable(ev),
                shift: ev.shiftKey,
                ctrl: ev.ctrlKey,
                alt: ev.altKey,
                meta: ev.metaKey || false,
                count: ev.detail || 1
            };
            if (handlerName == onDoubleClickText) param.count = 2;
            if (shouldPreventClickingSpree(param.count) || invokeMouseOwner(handlerName, param) || bubble(node, handlerName, param)) {
                preventDefault(ev);
                return true;
            }
            return false;
        };
    }
    function nodeOnPoint(x, y) {
        var target = document.elementFromPoint(x, y);
        var node = deref(target);
        if (hasPointerEventsNoneB(node)) {
            var fixed = pointerEventsNoneFix(x, y, target, node);
            node = fixed[1];
        }
        return node;
    }
    function handleSelectStart(ev, _target, node) {
        while (node) {
            var s = node.style;
            if (s) {
                var us = s.userSelect;
                if (us === "none") {
                    preventDefault(ev);
                    return true;
                }
                if (us) {
                    break;
                }
            }
            node = node.parent;
        }
        return false;
    }
    addEvent5("selectstart", handleSelectStart);
    addEvent5("^click", createHandler(onClickText));
    addEvent5("^dblclick", createHandler(onDoubleClickText));
    addEvent5("contextmenu", createHandler("onContextMenu", true));
    var wheelSupport = ("onwheel" in document.createElement("div") ? "" : "mouse") + "wheel";
    function handleMouseWheel(ev, target, node) {
        if (hasPointerEventsNoneB(node)) {
            var fixed = pointerEventsNoneFix(ev.x, ev.y, target, node);
            target = fixed[0];
            node = fixed[1];
        }
        var button = ev.button + 1;
        var buttons = ev.buttons;
        if (button === 0 && buttons) {
            button = 1;
            while (!(buttons & 1)) {
                buttons = buttons >> 1;
                button++;
            }
        }
        var dx = 0, dy;
        if (wheelSupport == "mousewheel") {
            dy = -1 / 40 * ev.wheelDelta;
            ev.wheelDeltaX && (dx = -1 / 40 * ev.wheelDeltaX);
        } else {
            dx = ev.deltaX;
            dy = ev.deltaY;
        }
        var param = {
            target: node,
            dx,
            dy,
            x: ev.clientX,
            y: ev.clientY,
            cancelable: normalizeCancelable(ev),
            button,
            shift: ev.shiftKey,
            ctrl: ev.ctrlKey,
            alt: ev.altKey,
            meta: ev.metaKey || false,
            count: ev.detail
        };
        if (invokeMouseOwner("onMouseWheel", param) || bubble(node, "onMouseWheel", param)) {
            preventDefault(ev);
            return true;
        }
        return false;
    }
    addEvent5(wheelSupport, handleMouseWheel);
    var __export_pointersDownCount = function() {
        return Object.keys(pointersDown).length;
    };
    var __export_firstPointerDownId = function() {
        return firstPointerDown;
    };
    __export_ignoreClick = function(x, y) {
        var delay = ieVersion() ? MaxBustDelayForIE : MaxBustDelay;
        toBust.push([ x, y, __export_now() + delay, 1 ]);
    };
    var currentActiveElement = undefined;
    var currentFocusedNode = undefined;
    var nodeStack_bobril = [];
    var focusChangeRunning = false;
    function emitOnFocusChange(inFocus) {
        if (focusChangeRunning) return false;
        focusChangeRunning = true;
        while (true) {
            var newActiveElement = document.hasFocus() || inFocus ? document.activeElement : undefined;
            if (newActiveElement === currentActiveElement) break;
            currentActiveElement = newActiveElement;
            var newStack = vdomPath(currentActiveElement);
            var common = 0;
            while (common < nodeStack_bobril.length && common < newStack.length && nodeStack_bobril[common] === newStack[common]) common++;
            var i = nodeStack_bobril.length - 1;
            var n;
            var c;
            if (i >= common) {
                n = nodeStack_bobril[i];
                bubble(n, "onBlur");
                i--;
            }
            while (i >= common) {
                n = nodeStack_bobril[i];
                if (n) {
                    c = n.component;
                    if (c && c.onFocusOut) c.onFocusOut(n.ctx);
                }
                i--;
            }
            i = common;
            while (i + 1 < newStack.length) {
                n = newStack[i];
                if (n) {
                    c = n.component;
                    if (c && c.onFocusIn) c.onFocusIn(n.ctx);
                }
                i++;
            }
            if (i < newStack.length) {
                n = newStack[i];
                bubble(n, "onFocus");
            }
            nodeStack_bobril = newStack;
            currentFocusedNode = nodeStack_bobril.length == 0 ? undefined : null2undefined(nodeStack_bobril[nodeStack_bobril.length - 1]);
        }
        focusChangeRunning = false;
        return false;
    }
    function emitOnFocusChangeDelayed() {
        setTimeout(function() {
            return emitOnFocusChange(false);
        }, 10);
        return false;
    }
    addEvent("^focus", 50, function() {
        return emitOnFocusChange(true);
    });
    addEvent("^blur", 50, emitOnFocusChangeDelayed);
    function focused() {
        return currentFocusedNode;
    }
    function focus(node, backwards) {
        if (node == undefined) return false;
        if (isString(node)) return false;
        var style = node.style;
        if (style != null) {
            if (style.visibility === "hidden") return false;
            if (style.display === "none") return false;
        }
        var attrs = node.attrs;
        if (attrs != null) {
            var ti = attrs.tabindex;
            if (ti !== undefined || isNaturallyFocusable(node.tag, attrs)) {
                var el = node.element;
                el.focus();
                emitOnFocusChange(false);
                return true;
            }
        }
        var children = node.children;
        if (__export_isArray(children)) {
            for (var i = 0; i < children.length; i++) {
                if (focus(children[backwards ? children.length - 1 - i : i], backwards)) return true;
            }
            return false;
        }
        return false;
    }
    var callbacks_bobril = [];
    function emitOnScroll(_ev, _target, node) {
        var info = {
            node
        };
        for (var i = 0; i < callbacks_bobril.length; i++) {
            callbacks_bobril[i](info);
        }
        captureBroadcast("onScroll", info);
        return false;
    }
    addEvent("^scroll", 10, emitOnScroll);
    function addOnScroll(callback) {
        callbacks_bobril.push(callback);
    }
    function removeOnScroll(callback) {
        for (var i = 0; i < callbacks_bobril.length; i++) {
            if (callbacks_bobril[i] === callback) {
                callbacks_bobril.splice(i, 1);
                return;
            }
        }
    }
    var isHtml = /^(?:html)$/i;
    var isScrollOrAuto = /^(?:auto)$|^(?:scroll)$/i;
    function isScrollable(el) {
        var styles = window.getComputedStyle(el);
        var res = [ true, true ];
        if (!isHtml.test(el.nodeName)) {
            res[0] = isScrollOrAuto.test(styles.overflowX);
            res[1] = isScrollOrAuto.test(styles.overflowY);
        }
        res[0] = res[0] && el.scrollWidth > el.clientWidth;
        res[1] = res[1] && el.scrollHeight > el.clientHeight;
        return res;
    }
    function getWindowScroll() {
        var left = window.pageXOffset;
        var top = window.pageYOffset;
        return [ left, top ];
    }
    function nodePagePos(node) {
        var rect = getDomNode(node).getBoundingClientRect();
        var res = getWindowScroll();
        res[0] += rect.left;
        res[1] += rect.top;
        return res;
    }
    var CSSMatrix_bobril = function() {
        function CSSMatrix(data) {
            this.data = data;
        }
        CSSMatrix.fromString = function(s) {
            var c = s.match(/matrix3?d?\(([^\)]+)\)/i)[1].split(",");
            if (c.length === 6) {
                c = [ c[0], c[1], "0", "0", c[2], c[3], "0", "0", "0", "0", "1", "0", c[4], c[5], "0", "1" ];
            }
            return new CSSMatrix([ parseFloat(c[0]), parseFloat(c[4]), parseFloat(c[8]), parseFloat(c[12]), parseFloat(c[1]), parseFloat(c[5]), parseFloat(c[9]), parseFloat(c[13]), parseFloat(c[2]), parseFloat(c[6]), parseFloat(c[10]), parseFloat(c[14]), parseFloat(c[3]), parseFloat(c[7]), parseFloat(c[11]), parseFloat(c[15]) ]);
        };
        CSSMatrix.identity = function() {
            return new CSSMatrix([ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ]);
        };
        CSSMatrix.prototype.multiply = function(m) {
            var a = this.data;
            var b = m.data;
            return new CSSMatrix([ a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12], a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13], a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14], a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3] * b[15], a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12], a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13], a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14], a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7] * b[15], a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12], a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13], a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14], a[8] * b[3] + a[9] * b[7] + a[10] * b[11] + a[11] * b[15], a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12], a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13], a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14], a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15] ]);
        };
        CSSMatrix.prototype.translate = function(tx, ty, tz) {
            var z = new CSSMatrix([ 1, 0, 0, tx, 0, 1, 0, ty, 0, 0, 1, tz, 0, 0, 0, 1 ]);
            return this.multiply(z);
        };
        CSSMatrix.prototype.inverse = function() {
            var m = this.data;
            var a = m[0];
            var b = m[1];
            var c = m[2];
            var d = m[4];
            var e = m[5];
            var f = m[6];
            var g = m[8];
            var h = m[9];
            var k = m[10];
            var A = e * k - f * h;
            var B = f * g - d * k;
            var C = d * h - e * g;
            var D = c * h - b * k;
            var E = a * k - c * g;
            var F = b * g - a * h;
            var G = b * f - c * e;
            var H = c * d - a * f;
            var K = a * e - b * d;
            var det = a * A + b * B + c * C;
            var X = new CSSMatrix([ A / det, D / det, G / det, 0, B / det, E / det, H / det, 0, C / det, F / det, K / det, 0, 0, 0, 0, 1 ]);
            var Y = new CSSMatrix([ 1, 0, 0, -m[3], 0, 1, 0, -m[7], 0, 0, 1, -m[11], 0, 0, 0, 1 ]);
            return X.multiply(Y);
        };
        CSSMatrix.prototype.transformPoint = function(x, y) {
            var m = this.data;
            return [ m[0] * x + m[1] * y + m[3], m[4] * x + m[5] * y + m[7] ];
        };
        return CSSMatrix;
    }();
    function getTransformationMatrix(element) {
        var identity = CSSMatrix_bobril.identity();
        var transformationMatrix = identity;
        var x = element;
        var doc = x.ownerDocument.documentElement;
        while (x != undefined && x !== doc && x.nodeType != 1) x = x.parentNode;
        while (x != undefined && x !== doc) {
            var computedStyle = window.getComputedStyle(x, undefined);
            var c = CSSMatrix_bobril.fromString((computedStyle.transform || computedStyle.OTransform || computedStyle.WebkitTransform || computedStyle.msTransform || computedStyle.MozTransform || "none").replace(/^none$/, "matrix(1,0,0,1,0,0)"));
            transformationMatrix = c.multiply(transformationMatrix);
            x = x.parentNode;
        }
        var w;
        var h;
        if ((element.nodeName + "").toLowerCase() === "svg") {
            var cs = getComputedStyle(element, undefined);
            w = parseFloat(cs.getPropertyValue("width")) || 0;
            h = parseFloat(cs.getPropertyValue("height")) || 0;
        } else {
            w = element.offsetWidth;
            h = element.offsetHeight;
        }
        var i = 4;
        var left = +Infinity;
        var top = +Infinity;
        while (--i >= 0) {
            var p = transformationMatrix.transformPoint(i === 0 || i === 1 ? 0 : w, i === 0 || i === 3 ? 0 : h);
            if (p[0] < left) {
                left = p[0];
            }
            if (p[1] < top) {
                top = p[1];
            }
        }
        var rect = element.getBoundingClientRect();
        transformationMatrix = identity.translate(rect.left - left, rect.top - top, 0).multiply(transformationMatrix);
        return transformationMatrix;
    }
    function convertPointFromClientToNode(node, pageX, pageY) {
        var element = getDomNode(node);
        if (element == undefined) element = document.body;
        return getTransformationMatrix(element).inverse().transformPoint(pageX, pageY);
    }
    var DndOp_bobril;
    (function(DndOp) {
        DndOp[DndOp["None"] = 0] = "None";
        DndOp[DndOp["Link"] = 1] = "Link";
        DndOp[DndOp["Copy"] = 2] = "Copy";
        DndOp[DndOp["Move"] = 3] = "Move";
    })(DndOp_bobril = __export_DndOp || (__export_DndOp = {}));
    var DndEnabledOps_bobril;
    (function(DndEnabledOps) {
        DndEnabledOps[DndEnabledOps["None"] = 0] = "None";
        DndEnabledOps[DndEnabledOps["Link"] = 1] = "Link";
        DndEnabledOps[DndEnabledOps["Copy"] = 2] = "Copy";
        DndEnabledOps[DndEnabledOps["LinkCopy"] = 3] = "LinkCopy";
        DndEnabledOps[DndEnabledOps["Move"] = 4] = "Move";
        DndEnabledOps[DndEnabledOps["MoveLink"] = 5] = "MoveLink";
        DndEnabledOps[DndEnabledOps["MoveCopy"] = 6] = "MoveCopy";
        DndEnabledOps[DndEnabledOps["MoveCopyLink"] = 7] = "MoveCopyLink";
    })(DndEnabledOps_bobril = __export_DndEnabledOps || (__export_DndEnabledOps = {}));
    var lastDndId = 0;
    var dnds = [];
    var systemDnd = null;
    var rootId_bobril = null;
    var DndCtx = function(pointerId) {
        this.id = ++lastDndId;
        this.pointerid = pointerId;
        this.enabledOperations = DndEnabledOps_bobril.MoveCopyLink;
        this.operation = DndOp_bobril.None;
        this.started = false;
        this.beforeDrag = true;
        this.local = true;
        this.system = false;
        this.ended = false;
        this.cursor = null;
        this.overNode = undefined;
        this.targetCtx = null;
        this.dragView = undefined;
        this.startX = 0;
        this.startY = 0;
        this.distanceToStart = 10;
        this.x = 0;
        this.y = 0;
        this.deltaX = 0;
        this.deltaY = 0;
        this.totalX = 0;
        this.totalY = 0;
        this.lastX = 0;
        this.lastY = 0;
        this.shift = false;
        this.ctrl = false;
        this.alt = false;
        this.meta = false;
        this.data = newHashObj();
        if (pointerId >= 0) pointer2Dnd[pointerId] = this;
        dnds.push(this);
    };
    var draggingStyle = "b-dragging";
    function lazyCreateRoot() {
        if (rootId_bobril == undefined) {
            var dd = document.documentElement;
            dd.classList.add(draggingStyle);
            rootId_bobril = addRoot(dndRootFactory);
        }
    }
    var DndComp = {
        render: function(ctx, me) {
            var dnd = ctx.data;
            me.tag = "div";
            me.style = {
                position: "absolute",
                left: dnd.x,
                top: dnd.y
            };
            me.children = dnd.dragView(dnd);
        }
    };
    function currentCursor() {
        var cursor = "no-drop";
        if (dnds.length !== 0) {
            var dnd = dnds[0];
            if (dnd.beforeDrag) return "";
            if (dnd.cursor != null) return dnd.cursor;
            if (dnd.system) return "";
            switch (dnd.operation) {
              case DndOp_bobril.Move:
                cursor = "move";
                break;

              case DndOp_bobril.Link:
                cursor = "alias";
                break;

              case DndOp_bobril.Copy:
                cursor = "copy";
                break;
            }
        }
        return cursor;
    }
    var DndRootComp = {
        render: function(_ctx, me) {
            var res = [];
            for (var i = 0; i < dnds.length; i++) {
                var dnd = dnds[i];
                if (dnd.beforeDrag) continue;
                if (dnd.dragView != null && (dnd.x != 0 || dnd.y != 0)) {
                    res.push({
                        key: "" + dnd.id,
                        data: dnd,
                        component: DndComp
                    });
                }
            }
            me.tag = "div";
            me.style = {
                position: "fixed",
                zIndex: 1e9,
                pointerEvents: "none",
                userSelect: "none",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            };
            var dds = document.documentElement.style;
            var cur = currentCursor();
            if (cur) {
                if (dds.cursor !== cur) dds.setProperty("cursor", cur, "important");
            } else {
                dds.setProperty("cursor", "");
            }
            me.children = res;
        },
        onDrag: function(ctx) {
            __export_invalidate(ctx);
            return false;
        }
    };
    function dndRootFactory() {
        return {
            component: DndRootComp
        };
    }
    var dndProto = DndCtx.prototype;
    dndProto.setOperation = function(operation) {
        this.operation = operation;
    };
    dndProto.setDragNodeView = function(view) {
        this.dragView = view;
    };
    dndProto.addData = function(type, data) {
        this.data[type] = data;
        return true;
    };
    dndProto.listData = function() {
        return Object.keys(this.data);
    };
    dndProto.hasData = function(type) {
        return this.data[type] !== undefined;
    };
    dndProto.getData = function(type) {
        return this.data[type];
    };
    dndProto.setEnabledOps = function(ops) {
        this.enabledOperations = ops;
    };
    dndProto.cancelDnd = function() {
        dndMoved(undefined, this);
        this.destroy();
    };
    dndProto.destroy = function() {
        this.ended = true;
        if (this.started) broadcast("onDragEnd", this);
        delete pointer2Dnd[this.pointerid];
        for (var i = 0; i < dnds.length; i++) {
            if (dnds[i] === this) {
                dnds.splice(i, 1);
                break;
            }
        }
        if (systemDnd === this) {
            systemDnd = null;
        }
        if (dnds.length === 0 && rootId_bobril != null) {
            removeRoot(rootId_bobril);
            rootId_bobril = null;
            var dd = document.documentElement;
            dd.classList.remove(draggingStyle);
            dd.style.setProperty("cursor", "");
        }
    };
    var pointer2Dnd = newHashObj();
    function handlePointerDown_bobril(ev, _target, node) {
        var dnd = pointer2Dnd[ev.id];
        if (dnd) {
            dnd.cancelDnd();
        }
        if (ev.button <= 1) {
            dnd = new DndCtx(ev.id);
            dnd.startX = ev.x;
            dnd.startY = ev.y;
            dnd.lastX = ev.x;
            dnd.lastY = ev.y;
            dnd.overNode = node;
            updateDndFromPointerEvent(dnd, ev);
            var sourceCtx = bubble(node, "onDragStart", dnd);
            if (sourceCtx) {
                var htmlNode = getDomNode(sourceCtx.me);
                if (htmlNode == undefined) {
                    dnd.destroy();
                    return false;
                }
                dnd.started = true;
                var boundFn = htmlNode.getBoundingClientRect;
                if (boundFn) {
                    var rect = boundFn.call(htmlNode);
                    dnd.deltaX = rect.left - ev.x;
                    dnd.deltaY = rect.top - ev.y;
                }
                if (dnd.distanceToStart <= 0) {
                    dnd.beforeDrag = false;
                    dndMoved(node, dnd);
                }
                lazyCreateRoot();
            } else {
                dnd.destroy();
            }
        }
        return false;
    }
    function dndMoved(node, dnd) {
        dnd.overNode = node;
        dnd.targetCtx = bubble(node, "onDragOver", dnd);
        if (dnd.targetCtx == undefined) {
            dnd.operation = DndOp_bobril.None;
        }
        broadcast("onDrag", dnd);
    }
    function updateDndFromPointerEvent(dnd, ev) {
        dnd.shift = ev.shift;
        dnd.ctrl = ev.ctrl;
        dnd.alt = ev.alt;
        dnd.meta = ev.meta;
        dnd.x = ev.x;
        dnd.y = ev.y;
    }
    function handlePointerMove(ev, _target, node) {
        var dnd = pointer2Dnd[ev.id];
        if (!dnd) return false;
        dnd.totalX += Math.abs(ev.x - dnd.lastX);
        dnd.totalY += Math.abs(ev.y - dnd.lastY);
        if (dnd.beforeDrag) {
            if (dnd.totalX + dnd.totalY <= dnd.distanceToStart) {
                dnd.lastX = ev.x;
                dnd.lastY = ev.y;
                return false;
            }
            dnd.beforeDrag = false;
        }
        updateDndFromPointerEvent(dnd, ev);
        dndMoved(node, dnd);
        dnd.lastX = ev.x;
        dnd.lastY = ev.y;
        return true;
    }
    function handlePointerUp(ev, _target, node) {
        var dnd = pointer2Dnd[ev.id];
        if (!dnd) return false;
        if (!dnd.beforeDrag) {
            updateDndFromPointerEvent(dnd, ev);
            dndMoved(node, dnd);
            var t = dnd.targetCtx;
            if (t && bubble(t.me, "onDrop", dnd)) {
                dnd.destroy();
            } else {
                dnd.cancelDnd();
            }
            __export_ignoreClick(ev.x, ev.y);
            return true;
        }
        dnd.destroy();
        return false;
    }
    function handlePointerCancel(ev, _target, _node) {
        var dnd = pointer2Dnd[ev.id];
        if (!dnd) return false;
        if (dnd.system) return false;
        if (!dnd.beforeDrag) {
            dnd.cancelDnd();
        } else {
            dnd.destroy();
        }
        return false;
    }
    function updateFromNative(dnd, ev) {
        dnd.shift = ev.shiftKey;
        dnd.ctrl = ev.ctrlKey;
        dnd.alt = ev.altKey;
        dnd.meta = ev.metaKey;
        dnd.x = ev.clientX;
        dnd.y = ev.clientY;
        dnd.totalX += Math.abs(dnd.x - dnd.lastX);
        dnd.totalY += Math.abs(dnd.y - dnd.lastY);
        var node = nodeOnPoint(dnd.x, dnd.y);
        dndMoved(node, dnd);
        dnd.lastX = dnd.x;
        dnd.lastY = dnd.y;
    }
    var effectAllowedTable = [ "none", "link", "copy", "copyLink", "move", "linkMove", "copyMove", "all" ];
    function handleDragStart(ev, _target, node) {
        var dnd = systemDnd;
        if (dnd != null) {
            dnd.destroy();
        }
        var activePointerIds = Object.keys(pointer2Dnd);
        if (activePointerIds.length > 0) {
            dnd = pointer2Dnd[activePointerIds[0]];
            dnd.system = true;
            systemDnd = dnd;
        } else {
            var startX = ev.clientX, startY = ev.clientY;
            dnd = new DndCtx(-1);
            dnd.system = true;
            systemDnd = dnd;
            dnd.x = startX;
            dnd.y = startY;
            dnd.lastX = startX;
            dnd.lastY = startY;
            dnd.startX = startX;
            dnd.startY = startY;
            var sourceCtx = bubble(node, "onDragStart", dnd);
            if (sourceCtx) {
                var htmlNode = getDomNode(sourceCtx.me);
                if (htmlNode == undefined) {
                    dnd.destroy();
                    return false;
                }
                dnd.started = true;
                var boundFn = htmlNode.getBoundingClientRect;
                if (boundFn) {
                    var rect = boundFn.call(htmlNode);
                    dnd.deltaX = rect.left - startX;
                    dnd.deltaY = rect.top - startY;
                }
                lazyCreateRoot();
            } else {
                dnd.destroy();
                return false;
            }
        }
        dnd.beforeDrag = false;
        var eff = effectAllowedTable[dnd.enabledOperations];
        var dt = ev.dataTransfer;
        dt.effectAllowed = eff;
        if (dt.setDragImage) {
            var div = document.createElement("div");
            div.style.pointerEvents = "none";
            dt.setDragImage(div, 0, 0);
        } else {
            var style = ev.target.style;
            var opacityBackup = style.opacity;
            var widthBackup = style.width;
            var heightBackup = style.height;
            var paddingBackup = style.padding;
            style.opacity = "0";
            style.width = "0";
            style.height = "0";
            style.padding = "0";
            setTimeout(function() {
                style.opacity = opacityBackup;
                style.width = widthBackup;
                style.height = heightBackup;
                style.padding = paddingBackup;
            }, 0);
        }
        var data = dnd.data;
        var dataKeys = Object.keys(data);
        for (var i = 0; i < dataKeys.length; i++) {
            try {
                var k = dataKeys[i];
                var d = data[k];
                if (!isString(d)) d = JSON.stringify(d);
                ev.dataTransfer.setData(k, d);
            } catch (e) {
                if (DEBUG) if (window.console) console.log("Cannot set dnd data to " + dataKeys[i]);
            }
        }
        updateFromNative(dnd, ev);
        return false;
    }
    function setDropEffect(ev, op) {
        ev.dataTransfer.dropEffect = [ "none", "link", "copy", "move" ][op];
    }
    function handleDragOver(ev, _target, _node) {
        var dnd = systemDnd;
        if (dnd == undefined) {
            dnd = new DndCtx(-1);
            dnd.system = true;
            systemDnd = dnd;
            dnd.x = ev.clientX;
            dnd.y = ev.clientY;
            dnd.startX = dnd.x;
            dnd.startY = dnd.y;
            dnd.local = false;
            var dt = ev.dataTransfer;
            var eff = 0;
            var effectAllowed = undefined;
            try {
                effectAllowed = dt.effectAllowed;
            } catch (e) {}
            for (;eff < 7; eff++) {
                if (effectAllowedTable[eff] === effectAllowed) break;
            }
            dnd.enabledOperations = eff;
            var dtTypes = dt.types;
            if (dtTypes) {
                for (var i = 0; i < dtTypes.length; i++) {
                    var tt = dtTypes[i];
                    if (tt === "text/plain") tt = "Text"; else if (tt === "text/uri-list") tt = "Url";
                    dnd.data[tt] = null;
                }
            } else {
                if (dt.getData("Text") !== undefined) dnd.data["Text"] = null;
            }
        }
        updateFromNative(dnd, ev);
        setDropEffect(ev, dnd.operation);
        if (dnd.operation != DndOp_bobril.None) {
            preventDefault(ev);
            return true;
        }
        return false;
    }
    function handleDrag(ev, _target, _node) {
        var x = ev.clientX;
        var y = ev.clientY;
        var m = getMedia();
        if (systemDnd != null && (x === 0 && y === 0 || x < 0 || y < 0 || x >= m.width || y >= m.height)) {
            systemDnd.x = 0;
            systemDnd.y = 0;
            systemDnd.operation = DndOp_bobril.None;
            broadcast("onDrag", systemDnd);
        }
        return true;
    }
    function handleDragEnd(_ev, _target, _node) {
        if (systemDnd != null) {
            systemDnd.destroy();
        }
        return false;
    }
    function handleDrop(ev, _target, _node) {
        var dnd = systemDnd;
        if (dnd == undefined) return false;
        dnd.x = ev.clientX;
        dnd.y = ev.clientY;
        if (!dnd.local) {
            var dataKeys = Object.keys(dnd.data);
            var dt = ev.dataTransfer;
            for (var i_10 = 0; i_10 < dataKeys.length; i_10++) {
                var k = dataKeys[i_10];
                var d;
                if (k === "Files") {
                    d = [].slice.call(dt.files, 0);
                } else {
                    d = dt.getData(k);
                }
                dnd.data[k] = d;
            }
        }
        updateFromNative(dnd, ev);
        var t = dnd.targetCtx;
        if (t && bubble(t.me, "onDrop", dnd)) {
            setDropEffect(ev, dnd.operation);
            dnd.destroy();
            preventDefault(ev);
        } else {
            dnd.cancelDnd();
        }
        return true;
    }
    function justPreventDefault(ev, _target, _node) {
        preventDefault(ev);
        return true;
    }
    function handleDndSelectStart(ev, _target, _node) {
        if (dnds.length === 0) return false;
        preventDefault(ev);
        return true;
    }
    function anyActiveDnd() {
        for (var i_11 = 0; i_11 < dnds.length; i_11++) {
            var dnd = dnds[i_11];
            if (dnd.beforeDrag) continue;
            return dnd;
        }
        return undefined;
    }
    addEvent("!PointerDown", 4, handlePointerDown_bobril);
    addEvent("!PointerMove", 4, handlePointerMove);
    addEvent("!PointerUp", 4, handlePointerUp);
    addEvent("!PointerCancel", 4, handlePointerCancel);
    addEvent("selectstart", 4, handleDndSelectStart);
    addEvent("dragstart", 5, handleDragStart);
    addEvent("dragover", 5, handleDragOver);
    addEvent("dragend", 5, handleDragEnd);
    addEvent("drag", 5, handleDrag);
    addEvent("drop", 5, handleDrop);
    addEvent("dragenter", 5, justPreventDefault);
    addEvent("dragleave", 5, justPreventDefault);
    var __export_getDnds = function() {
        return dnds;
    };
    var RouteTransitionType_bobril;
    (function(RouteTransitionType) {
        RouteTransitionType[RouteTransitionType["Push"] = 0] = "Push";
        RouteTransitionType[RouteTransitionType["Replace"] = 1] = "Replace";
        RouteTransitionType[RouteTransitionType["Pop"] = 2] = "Pop";
    })(RouteTransitionType_bobril = __export_RouteTransitionType || (__export_RouteTransitionType = {}));
    var waitingForPopHashChange = -1;
    function emitOnHashChange() {
        if (waitingForPopHashChange >= 0) clearTimeout(waitingForPopHashChange);
        waitingForPopHashChange = -1;
        __export_invalidate();
        return false;
    }
    addEvent("hashchange", 10, emitOnHashChange);
    var myAppHistoryDeepness = 0;
    var programPath = "";
    function push(path, inApp) {
        var l = window.location;
        if (inApp) {
            programPath = path;
            l.hash = path.substring(1);
            myAppHistoryDeepness++;
        } else {
            l.href = path;
        }
    }
    function replace(path, inApp) {
        var l = window.location;
        if (inApp) {
            programPath = path;
            l.replace(l.pathname + l.search + path);
        } else {
            l.replace(path);
        }
    }
    function pop(distance) {
        myAppHistoryDeepness -= distance;
        waitingForPopHashChange = setTimeout(emitOnHashChange, 50);
        window.history.go(-distance);
    }
    var rootRoutes;
    var nameRouteMap = {};
    function encodeUrl(url) {
        return encodeURIComponent(url).replace(/%20/g, "+");
    }
    function decodeUrl(url) {
        return decodeURIComponent(url.replace(/\+/g, " "));
    }
    function encodeUrlPath(path) {
        return String(path).split("/").map(encodeUrl).join("/");
    }
    var paramCompileMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|[*.()\[\]\\+|{}^$]/g;
    var paramInjectMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$?]*[?]?)|[*]/g;
    var compiledPatterns = {};
    function compilePattern(pattern) {
        if (!(pattern in compiledPatterns)) {
            var paramNames = [];
            var source = pattern.replace(paramCompileMatcher, function(match, paramName) {
                if (paramName) {
                    paramNames.push(paramName);
                    return "([^/]+)";
                } else if (match === "*") {
                    paramNames.push("splat");
                    return "(.*?)";
                } else {
                    return "\\" + match;
                }
            });
            compiledPatterns[pattern] = {
                matcher: new RegExp("^" + source + "$", "i"),
                paramNames
            };
        }
        return compiledPatterns[pattern];
    }
    function extractParams(pattern, path) {
        var object = compilePattern(pattern);
        var match = decodeUrl(path).match(object.matcher);
        if (!match) return null;
        var params = {};
        var pn = object.paramNames;
        var l = pn.length;
        for (var i = 0; i < l; i++) {
            params[pn[i]] = match[i + 1];
        }
        return params;
    }
    function injectParams(pattern, params) {
        params = params || {};
        var splatIndex = 0;
        return pattern.replace(paramInjectMatcher, function(_match, paramName) {
            paramName = paramName || "splat";
            if (paramName.slice(-1) !== "?") {
                if (params[paramName] == undefined) throw new Error('Missing "' + paramName + '" parameter for path "' + pattern + '"');
            } else {
                paramName = paramName.slice(0, -1);
                if (params[paramName] == undefined) {
                    return "";
                }
            }
            var segment;
            if (paramName === "splat" && Array.isArray(params[paramName])) {
                segment = params[paramName][splatIndex++];
                if (segment == undefined) throw new Error("Missing splat # " + splatIndex + ' for path "' + pattern + '"');
            } else {
                segment = params[paramName];
            }
            return encodeUrlPath(segment);
        });
    }
    function findMatch(path, rs, outParams) {
        var l = rs.length;
        var notFoundRoute;
        var defaultRoute;
        var params;
        for (var i = 0; i < l; i++) {
            var r = rs[i];
            if (r.isNotFound) {
                notFoundRoute = r;
                continue;
            }
            if (r.isDefault) {
                defaultRoute = r;
                continue;
            }
            if (r.children) {
                var res = findMatch(path, r.children, outParams);
                if (res) {
                    res.push(r);
                    return res;
                }
            }
            if (r.url) {
                params = extractParams(r.url, path);
                if (params) {
                    outParams.p = params;
                    return [ r ];
                }
            }
        }
        if (defaultRoute) {
            params = extractParams(defaultRoute.url || "", path);
            if (params) {
                outParams.p = params;
                return [ defaultRoute ];
            }
        }
        if (notFoundRoute) {
            params = extractParams(notFoundRoute.url || "", path);
            if (params) {
                outParams.p = params;
                return [ notFoundRoute ];
            }
        }
        return undefined;
    }
    var activeRoutes = [];
    var futureRoutes;
    var activeParams = newHashObj();
    var nodesArray = [];
    var setterOfNodesArray = [];
    var urlRegex = /.*(?:\:|\/).*/;
    function isInApp(name) {
        return !urlRegex.test(name);
    }
    function isAbsolute(url) {
        return url[0] === "/";
    }
    function noop() {
        return undefined;
    }
    function getSetterOfNodesArray(idx) {
        while (idx >= setterOfNodesArray.length) {
            setterOfNodesArray.push(function(a, i) {
                return function(n) {
                    if (n) a[i] = n;
                };
            }(nodesArray, setterOfNodesArray.length));
        }
        return setterOfNodesArray[idx];
    }
    var firstRouting = true;
    function rootNodeFactory() {
        if (waitingForPopHashChange >= 0) return undefined;
        var browserPath = window.location.hash;
        var path = browserPath.substr(1);
        if (!isAbsolute(path)) path = "/" + path;
        var out = {
            p: {}
        };
        var matches = findMatch(path, rootRoutes, out) || [];
        if (firstRouting) {
            firstRouting = false;
            currentTransition = {
                inApp: true,
                type: RouteTransitionType_bobril.Pop,
                name: undefined,
                params: undefined
            };
            transitionState = -1;
            programPath = browserPath;
        } else {
            if (!currentTransition && matches.length > 0 && browserPath != programPath) {
                runTransition(createRedirectPush(matches[0].name, out.p));
            }
        }
        if (currentTransition && currentTransition.type === RouteTransitionType_bobril.Pop && transitionState < 0) {
            programPath = browserPath;
            currentTransition.inApp = true;
            if (currentTransition.name == undefined && matches.length > 0) {
                currentTransition.name = matches[0].name;
                currentTransition.params = out.p;
                nextIteration();
                if (currentTransition != null) return undefined;
            } else return undefined;
        }
        if (currentTransition == undefined) {
            activeRoutes = matches;
            while (nodesArray.length > activeRoutes.length) nodesArray.shift();
            while (nodesArray.length < activeRoutes.length) nodesArray.unshift(undefined);
            activeParams = out.p;
        }
        var fn = noop;
        for (var i = 0; i < activeRoutes.length; i++) {
            (function(fnInner, r, routeParams, i) {
                fn = function(otherData) {
                    var data = r.data || {};
                    __export_assign(data, otherData);
                    data.activeRouteHandler = fnInner;
                    data.routeParams = routeParams;
                    var handler = r.handler;
                    var res;
                    if (isFunction(handler)) {
                        res = {
                            key: undefined,
                            ref: undefined,
                            children: handler(data)
                        };
                    } else {
                        res = {
                            key: undefined,
                            ref: undefined,
                            data,
                            component: handler
                        };
                    }
                    if (r.keyBuilder) res.key = r.keyBuilder(routeParams); else res.key = r.name;
                    res.ref = getSetterOfNodesArray(i);
                    return res;
                };
            })(fn, activeRoutes[i], activeParams, i);
        }
        return fn();
    }
    function joinPath(p1, p2) {
        if (isAbsolute(p2)) return p2;
        if (p1[p1.length - 1] === "/") return p1 + p2;
        return p1 + "/" + p2;
    }
    function registerRoutes(url, rs) {
        var l = rs.length;
        for (var i = 0; i < l; i++) {
            var r = rs[i];
            var u = url;
            var name = r.name;
            if (!name && url === "/") {
                name = "root";
                r.name = name;
                nameRouteMap[name] = r;
            } else if (name) {
                nameRouteMap[name] = r;
                u = joinPath(u, name);
            }
            if (r.isDefault) {
                u = url;
            } else if (r.isNotFound) {
                u = joinPath(url, "*");
            } else if (r.url) {
                u = joinPath(url, r.url);
            }
            r.url = u;
            if (r.children) registerRoutes(u, r.children);
        }
    }
    function routes(root) {
        if (!__export_isArray(root)) {
            root = [ root ];
        }
        registerRoutes("/", root);
        rootRoutes = root;
        init(rootNodeFactory);
    }
    function route(config, nestedRoutes) {
        return {
            name: config.name,
            url: config.url,
            data: config.data,
            handler: config.handler,
            keyBuilder: config.keyBuilder,
            children: nestedRoutes
        };
    }
    function routeDefault(config) {
        return {
            name: config.name,
            data: config.data,
            handler: config.handler,
            keyBuilder: config.keyBuilder,
            isDefault: true
        };
    }
    function routeNotFound(config) {
        return {
            name: config.name,
            data: config.data,
            handler: config.handler,
            keyBuilder: config.keyBuilder,
            isNotFound: true
        };
    }
    function isActive(name, params) {
        if (params) {
            for (var prop in params) {
                if (params.hasOwnProperty(prop)) {
                    if (activeParams[prop] !== params[prop]) return false;
                }
            }
        }
        for (var i = 0, l = activeRoutes.length; i < l; i++) {
            if (activeRoutes[i].name === name) {
                return true;
            }
        }
        return false;
    }
    function urlOfRoute(name, params) {
        if (isInApp(name)) {
            var r = nameRouteMap[name];
            if (DEBUG) {
                if (rootRoutes == undefined) throw Error("Cannot use urlOfRoute before defining routes");
                if (r == undefined) throw Error("Route with name " + name + " if not defined in urlOfRoute");
            }
            return "#" + injectParams(r.url, params);
        }
        return name;
    }
    function Link(data) {
        return style_bobril({
            tag: "a",
            component: {
                id: "link",
                onClick: function() {
                    runTransition((data.replace ? createRedirectReplace : createRedirectPush)(data.name, data.params));
                    return true;
                }
            },
            children: data.children,
            attrs: {
                href: urlOfRoute(data.name, data.params)
            }
        }, isActive(data.name, data.params) ? data.activeStyle != undefined ? data.activeStyle : [ data.style, "active" ] : data.style);
    }
    function link(node, name, params) {
        node.data = node.data || {};
        node.data.routeName = name;
        node.data.routeParams = params;
        postEnhance(node, {
            render: function(ctx, me) {
                var data = ctx.data;
                me.attrs = me.attrs || {};
                if (me.tag === "a") {
                    me.attrs.href = urlOfRoute(data.routeName, data.routeParams);
                }
                me.className = me.className || "";
                if (isActive(data.routeName, data.routeParams)) {
                    me.className += " active";
                }
            },
            onClick: function(ctx) {
                var data = ctx.data;
                runTransition(createRedirectPush(data.routeName, data.routeParams));
                return true;
            }
        });
        return node;
    }
    function createRedirectPush(name, params) {
        return {
            inApp: isInApp(name),
            type: RouteTransitionType_bobril.Push,
            name,
            params: params || {}
        };
    }
    function createRedirectReplace(name, params) {
        return {
            inApp: isInApp(name),
            type: RouteTransitionType_bobril.Replace,
            name,
            params: params || {}
        };
    }
    function createBackTransition(distance) {
        distance = distance || 1;
        return {
            inApp: myAppHistoryDeepness >= distance,
            type: RouteTransitionType_bobril.Pop,
            name: undefined,
            params: {},
            distance
        };
    }
    var currentTransition = null;
    var nextTransition = null;
    var transitionState = 0;
    function doAction(transition) {
        switch (transition.type) {
          case RouteTransitionType_bobril.Push:
            push(urlOfRoute(transition.name, transition.params), transition.inApp);
            break;

          case RouteTransitionType_bobril.Replace:
            replace(urlOfRoute(transition.name, transition.params), transition.inApp);
            break;

          case RouteTransitionType_bobril.Pop:
            pop(transition.distance);
            break;
        }
        __export_invalidate();
    }
    function nextIteration() {
        while (true) {
            if (transitionState >= 0 && transitionState < activeRoutes.length) {
                var node = nodesArray[transitionState];
                transitionState++;
                if (!node) continue;
                var comp = node.component;
                if (!comp && __export_isArray(node.children)) {
                    node = node.children[0];
                    if (!node) continue;
                    comp = node.component;
                }
                if (!comp) continue;
                var fn = comp.canDeactivate;
                if (!fn) continue;
                var res = fn.call(comp, node.ctx, currentTransition);
                if (res === true) continue;
                Promise.resolve(res).then(function(resp) {
                    if (resp === true) {} else if (resp === false) {
                        currentTransition = null;
                        nextTransition = null;
                        if (programPath) replace(programPath, true);
                        return;
                    } else {
                        nextTransition = resp;
                    }
                    nextIteration();
                }).catch(function(err) {
                    if (typeof console !== "undefined" && console.log) console.log(err);
                });
                return;
            } else if (transitionState == activeRoutes.length) {
                if (nextTransition) {
                    if (currentTransition && currentTransition.type == RouteTransitionType_bobril.Push) {
                        push(urlOfRoute(currentTransition.name, currentTransition.params), currentTransition.inApp);
                    }
                    currentTransition = nextTransition;
                    nextTransition = null;
                }
                transitionState = -1;
                if (!currentTransition.inApp || currentTransition.type === RouteTransitionType_bobril.Pop) {
                    var tr = currentTransition;
                    if (!currentTransition.inApp) currentTransition = null;
                    doAction(tr);
                    return;
                }
            } else if (transitionState === -1) {
                var out = {
                    p: {}
                };
                if (currentTransition.inApp) {
                    futureRoutes = findMatch(urlOfRoute(currentTransition.name, currentTransition.params).substring(1), rootRoutes, out) || [];
                } else {
                    futureRoutes = [];
                }
                transitionState = -2;
            } else if (transitionState === -2 - futureRoutes.length) {
                if (nextTransition) {
                    transitionState = activeRoutes.length;
                    continue;
                }
                if (currentTransition.type !== RouteTransitionType_bobril.Pop) {
                    var tr = currentTransition;
                    currentTransition = null;
                    doAction(tr);
                } else {
                    __export_invalidate();
                }
                currentTransition = null;
                return;
            } else {
                if (nextTransition) {
                    transitionState = activeRoutes.length;
                    continue;
                }
                var rr = futureRoutes[futureRoutes.length + 1 + transitionState];
                transitionState--;
                var handler = rr.handler;
                var comp = undefined;
                if (isFunction(handler)) {
                    var node = handler({
                        activeRouteHandler: function() {
                            return undefined;
                        },
                        routeParams: currentTransition.params
                    });
                    if (!node || !isObject(node) || __export_isArray(node)) continue;
                    comp = node.component;
                } else {
                    comp = handler;
                }
                if (!comp) continue;
                var fn = comp.canActivate;
                if (!fn) continue;
                var res = fn.call(comp, currentTransition);
                if (res === true) continue;
                Promise.resolve(res).then(function(resp) {
                    if (resp === true) {} else if (resp === false) {
                        currentTransition = null;
                        nextTransition = null;
                        return;
                    } else {
                        nextTransition = resp;
                    }
                    nextIteration();
                }).catch(function(err) {
                    if (typeof console !== "undefined" && console.log) console.log(err);
                });
                return;
            }
        }
    }
    var __export_transitionRunCount = 1;
    function runTransition(transition) {
        __export_transitionRunCount++;
        preventClickingSpree();
        if (currentTransition != null) {
            nextTransition = transition;
            return;
        }
        firstRouting = false;
        currentTransition = transition;
        transitionState = 0;
        nextIteration();
    }
    function anchor(children, name, params) {
        return {
            children,
            component: {
                id: "anchor",
                postUpdateDom: function(ctx, me) {
                    handleAnchorRoute(ctx, me, name, params);
                },
                postInitDom: function(ctx, me) {
                    handleAnchorRoute(ctx, me, name, params);
                }
            }
        };
    }
    function handleAnchorRoute(ctx, me, name, params) {
        var routeName;
        if (name) {
            routeName = name;
        } else {
            var firstChild = me.children && me.children[0];
            routeName = firstChild.attrs && firstChild.attrs.id;
        }
        if (!isActive(routeName, params)) {
            ctx.l = 0;
            return;
        }
        if (ctx.l === __export_transitionRunCount) return;
        getDomNode(me).scrollIntoView();
        ctx.l = __export_transitionRunCount;
    }
    function getRoutes() {
        return rootRoutes;
    }
    function getActiveRoutes() {
        return activeRoutes;
    }
    function getActiveParams() {
        return activeParams;
    }
    var allStyles = newHashObj();
    var allAnimations = newHashObj();
    var allMediaQueries = newHashObj();
    var allSprites = newHashObj();
    var bundledSprites = newHashObj();
    var allNameHints = newHashObj();
    var dynamicSprites = [];
    var bundledDynamicSprites = [];
    var imageCache = newHashObj();
    var injectedCss = "";
    var rebuildStyles = false;
    var htmlStyle = null;
    var globalCounter = 0;
    var chainedBeforeFrame = setBeforeFrame(beforeFrame);
    var cssSubRuleDelimiter = /\:|\ |\>/;
    function buildCssSubRule(parent) {
        var matchSplit = cssSubRuleDelimiter.exec(parent);
        if (!matchSplit) return allStyles[parent].name;
        var posSplit = matchSplit.index;
        return allStyles[parent.substring(0, posSplit)].name + parent.substring(posSplit);
    }
    function buildCssRule(parent, name) {
        var result = "";
        if (parent) {
            if (__export_isArray(parent)) {
                for (var i_12 = 0; i_12 < parent.length; i_12++) {
                    if (i_12 > 0) {
                        result += ",";
                    }
                    result += "." + buildCssSubRule(parent[i_12]) + "." + name;
                }
            } else {
                result = "." + buildCssSubRule(parent) + "." + name;
            }
        } else {
            result = "." + name;
        }
        return result;
    }
    function flattenStyle(cur, curPseudo, style, stylePseudo) {
        if (isString(style)) {
            var externalStyle = allStyles[style];
            if (externalStyle === undefined) {
                throw new Error("Unknown style " + style);
            }
            flattenStyle(cur, curPseudo, externalStyle.style, externalStyle.pseudo);
        } else if (isFunction(style)) {
            style(cur, curPseudo);
        } else if (__export_isArray(style)) {
            for (var i_13 = 0; i_13 < style.length; i_13++) {
                flattenStyle(cur, curPseudo, style[i_13], undefined);
            }
        } else if (typeof style === "object") {
            for (var key in style) {
                if (!hOP.call(style, key)) continue;
                var val = style[key];
                if (isFunction(val)) {
                    val = val(cur, key);
                }
                cur[key] = val;
            }
        }
        if (stylePseudo != undefined && curPseudo != undefined) {
            for (var pseudoKey in stylePseudo) {
                var curPseudoVal = curPseudo[pseudoKey];
                if (curPseudoVal === undefined) {
                    curPseudoVal = newHashObj();
                    curPseudo[pseudoKey] = curPseudoVal;
                }
                flattenStyle(curPseudoVal, undefined, stylePseudo[pseudoKey], undefined);
            }
        }
    }
    var lastDppx = 0;
    var lastSpriteUrl = "";
    var lastSpriteDppx = 1;
    var hasBundledSprites = false;
    var wasSpriteUrlChanged = true;
    function beforeFrame() {
        var _a, e_1, _b;
        if (hasBundledSprites && lastDppx != getMedia().dppx) {
            lastDppx = getMedia().dppx;
            var newSpriteUrl = bundlePath;
            var newSpriteDppx = 1;
            if (lastDppx > 1) {
                for (var i_14 = 0; i_14 < bundlePath2.length; i_14++) {
                    if (i_14 == bundlePath2.length - 1 || bundlePath2[i_14][1] >= lastDppx) {
                        newSpriteUrl = bundlePath2[i_14][0];
                        newSpriteDppx = bundlePath2[i_14][1];
                    } else break;
                }
            }
            if (lastSpriteUrl != newSpriteUrl) {
                lastSpriteUrl = newSpriteUrl;
                lastSpriteDppx = newSpriteDppx;
                rebuildStyles = true;
                wasSpriteUrlChanged = true;
            }
        }
        if (rebuildStyles) {
            if (hasBundledSprites) {
                var imageSprite = imageCache[lastSpriteUrl];
                if (imageSprite === undefined) {
                    imageSprite = null;
                    imageCache[lastSpriteUrl] = imageSprite;
                    loadImage(lastSpriteUrl, function(image) {
                        imageCache[lastSpriteUrl] = image;
                        invalidateStyles();
                    });
                }
                if (imageSprite != null) {
                    for (var i_15 = 0; i_15 < bundledDynamicSprites.length; i_15++) {
                        var dynSprite = bundledDynamicSprites[i_15];
                        var colorStr = dynSprite.color;
                        if (!isString(colorStr)) colorStr = colorStr();
                        if (wasSpriteUrlChanged || colorStr !== dynSprite.lastColor) {
                            dynSprite.lastColor = colorStr;
                            var mulWidth = dynSprite.width * lastSpriteDppx | 0;
                            var mulHeight = dynSprite.height * lastSpriteDppx | 0;
                            var lastUrl = recolorAndClip(imageSprite, colorStr, mulWidth, mulHeight, dynSprite.left * lastSpriteDppx | 0, dynSprite.top * lastSpriteDppx | 0);
                            var stDef = allStyles[dynSprite.styleId];
                            stDef.style = {
                                backgroundImage: "url(" + lastUrl + ")",
                                width: dynSprite.width,
                                height: dynSprite.height,
                                backgroundPosition: 0,
                                backgroundSize: "100%"
                            };
                        }
                    }
                    if (wasSpriteUrlChanged) {
                        var iWidth = imageSprite.width / lastSpriteDppx;
                        var iHeight = imageSprite.height / lastSpriteDppx;
                        for (var key_1 in bundledSprites) {
                            var sprite_1 = bundledSprites[key_1];
                            if (sprite_1.color !== undefined) continue;
                            var stDef = allStyles[sprite_1.styleId];
                            var width = sprite_1.width;
                            var height = sprite_1.height;
                            var percentWidth = 100 * iWidth / width;
                            var percentHeight = 100 * iHeight / height;
                            stDef.style = {
                                backgroundImage: "url(" + lastSpriteUrl + ")",
                                width,
                                height,
                                backgroundPosition: 100 * sprite_1.left / (iWidth - width) + "% " + 100 * sprite_1.top / (iHeight - height) + "%",
                                backgroundSize: percentWidth + "% " + percentHeight + "%"
                            };
                        }
                    }
                    wasSpriteUrlChanged = false;
                }
            }
            for (var i_16 = 0; i_16 < dynamicSprites.length; i_16++) {
                var dynSprite = dynamicSprites[i_16];
                var image = imageCache[dynSprite.url];
                if (image == undefined) continue;
                var colorStr = dynSprite.color();
                if (colorStr !== dynSprite.lastColor) {
                    dynSprite.lastColor = colorStr;
                    if (dynSprite.width == undefined) dynSprite.width = image.width;
                    if (dynSprite.height == undefined) dynSprite.height = image.height;
                    var lastUrl = recolorAndClip(image, colorStr, dynSprite.width, dynSprite.height, dynSprite.left, dynSprite.top);
                    var stDef = allStyles[dynSprite.styleId];
                    stDef.style = {
                        backgroundImage: "url(" + lastUrl + ")",
                        width: dynSprite.width,
                        height: dynSprite.height,
                        backgroundPosition: 0
                    };
                }
            }
            var styleStr = injectedCss;
            for (var key in allAnimations) {
                var anim = allAnimations[key];
                styleStr += "@keyframes " + anim.name + " {";
                for (var key2 in anim.def) {
                    var item = anim.def[key2];
                    var style_1 = newHashObj();
                    flattenStyle(style_1, undefined, item, undefined);
                    shimStyle(style_1);
                    styleStr += key2 + (key2 == "from" || key2 == "to" ? "" : "%") + " {" + inlineStyleToCssDeclaration(style_1) + "}\n";
                }
                styleStr += "}\n";
            }
            for (var key in allStyles) {
                var ss = allStyles[key];
                var parent_1 = ss.parent;
                var name_1 = ss.name;
                var ssPseudo = ss.pseudo;
                var ssStyle = ss.style;
                if (isFunction(ssStyle) && ssStyle.length === 0) {
                    _a = __read(ssStyle(), 2), ssStyle = _a[0], ssPseudo = _a[1];
                }
                if (isString(ssStyle) && ssPseudo == undefined) {
                    ss.realName = ssStyle;
                    assert(name_1 != undefined, "Cannot link existing class to selector");
                    continue;
                }
                ss.realName = name_1;
                var style_2 = newHashObj();
                var flattenPseudo = newHashObj();
                flattenStyle(undefined, flattenPseudo, undefined, ssPseudo);
                flattenStyle(style_2, flattenPseudo, ssStyle, undefined);
                var extractedInlStyle = null;
                if (style_2["pointerEvents"]) {
                    extractedInlStyle = newHashObj();
                    extractedInlStyle["pointerEvents"] = style_2["pointerEvents"];
                }
                ss.inlStyle = extractedInlStyle;
                shimStyle(style_2);
                var cssStyle = inlineStyleToCssDeclaration(style_2);
                if (cssStyle.length > 0) styleStr += (name_1 == undefined ? parent_1 : buildCssRule(parent_1, name_1)) + " {" + cssStyle + "}\n";
                for (var key2 in flattenPseudo) {
                    var item = flattenPseudo[key2];
                    shimStyle(item);
                    styleStr += (name_1 == undefined ? parent_1 + ":" + key2 : buildCssRule(parent_1, name_1 + ":" + key2)) + " {" + inlineStyleToCssDeclaration(item) + "}\n";
                }
            }
            for (var key in allMediaQueries) {
                var mediaQuery = allMediaQueries[key];
                styleStr += "@media " + key + "{";
                try {
                    for (var mediaQuery_1 = (e_1 = void 0, __values(mediaQuery)), mediaQuery_1_1 = mediaQuery_1.next(); !mediaQuery_1_1.done; mediaQuery_1_1 = mediaQuery_1.next()) {
                        var definition = mediaQuery_1_1.value;
                        for (var key2 in definition) {
                            var item = definition[key2];
                            var style_3 = newHashObj();
                            flattenStyle(style_3, undefined, item, undefined);
                            shimStyle(style_3);
                            styleStr += "." + key2 + " {" + inlineStyleToCssDeclaration(style_3) + "}\n";
                        }
                    }
                } catch (e_1_1) {
                    e_1 = {
                        error: e_1_1
                    };
                } finally {
                    try {
                        if (mediaQuery_1_1 && !mediaQuery_1_1.done && (_b = mediaQuery_1.return)) _b.call(mediaQuery_1);
                    } finally {
                        if (e_1) throw e_1.error;
                    }
                }
                styleStr += "}\n";
            }
            var styleElement = document.createElement("style");
            styleElement.type = "text/css";
            if (styleElement.styleSheet) {
                styleElement.styleSheet.cssText = styleStr;
            } else {
                styleElement.appendChild(document.createTextNode(styleStr));
            }
            var head = document.head || document.getElementsByTagName("head")[0];
            if (htmlStyle != null) {
                head.replaceChild(styleElement, htmlStyle);
            } else {
                head.appendChild(styleElement);
            }
            htmlStyle = styleElement;
            rebuildStyles = false;
        }
        chainedBeforeFrame();
    }
    function style_bobril(node) {
        var styles = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            styles[_i - 1] = arguments[_i];
        }
        var className = node.className;
        var inlineStyle = node.style;
        var stack = null;
        var i = 0;
        var ca = styles;
        while (true) {
            if (ca.length === i) {
                if (stack === null || stack.length === 0) break;
                ca = stack.pop();
                i = stack.pop() + 1;
                continue;
            }
            var s = ca[i];
            if (s == undefined || s === true || s === false || s === "" || s === 0) {} else if (isString(s)) {
                var sd = allStyles[s];
                if (sd != undefined) {
                    if (className == undefined) className = sd.realName; else className = className + " " + sd.realName;
                    var inlS = sd.inlStyle;
                    if (inlS) {
                        if (inlineStyle == undefined) inlineStyle = {};
                        inlineStyle = __export_assign(inlineStyle, inlS);
                    }
                } else {
                    if (className == undefined) className = s; else className = className + " " + s;
                }
            } else if (__export_isArray(s)) {
                if (ca.length > i + 1) {
                    if (stack == undefined) stack = [];
                    stack.push(i);
                    stack.push(ca);
                }
                ca = s;
                i = 0;
                continue;
            } else {
                if (inlineStyle == undefined) inlineStyle = {};
                for (var key in s) {
                    if (s.hasOwnProperty(key)) {
                        var val = s[key];
                        if (isFunction(val)) val = val();
                        inlineStyle[key] = val;
                    }
                }
            }
            i++;
        }
        node.className = className;
        node.style = inlineStyle;
        return node;
    }
    var uppercasePattern = /([A-Z])/g;
    var msPattern = /^ms-/;
    function hyphenateStyle(s) {
        if (s === "cssFloat") return "float";
        return s.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern, "-ms-");
    }
    function inlineStyleToCssDeclaration(style) {
        var res = "";
        for (var key in style) {
            var v = style[key];
            if (v === undefined) continue;
            res += hyphenateStyle(key) + ":" + (v === "" ? '""' : v) + ";";
        }
        res = res.slice(0, -1);
        return res;
    }
    function styleDef(style, pseudo, nameHint) {
        return styleDefEx(undefined, style, pseudo, nameHint);
    }
    function makeName(nameHint) {
        if (nameHint && nameHint !== "b-") {
            nameHint = nameHint.replace(/[^a-z0-9_-]/gi, "_").replace(/^[0-9]/, "_$&");
            if (allNameHints[nameHint]) {
                var counter = 1;
                while (allNameHints[nameHint + counter]) counter++;
                nameHint = nameHint + counter;
            }
            allNameHints[nameHint] = true;
        } else {
            nameHint = "b-" + globalCounter++;
        }
        return nameHint;
    }
    function keyframesDef(def, nameHint) {
        nameHint = makeName(nameHint);
        allAnimations[nameHint] = {
            name: nameHint,
            def
        };
        invalidateStyles();
        var res = function(params) {
            if (isString(params)) return params + " " + nameHint;
            return nameHint;
        };
        res.toString = res;
        return res;
    }
    function mediaQueryDef(def, mediaQueryDefinition) {
        var mediaQuery = allMediaQueries[def];
        if (!mediaQuery) {
            mediaQuery = [];
            allMediaQueries[def] = mediaQuery;
        }
        mediaQuery.push(mediaQueryDefinition);
        invalidateStyles();
    }
    function styleDefEx(parent, style, pseudo, nameHint) {
        nameHint = makeName(nameHint);
        allStyles[nameHint] = {
            name: nameHint,
            realName: nameHint,
            parent,
            style,
            inlStyle: undefined,
            pseudo
        };
        invalidateStyles();
        return nameHint;
    }
    function selectorStyleDef(selector, style, pseudo) {
        allStyles["b-" + globalCounter++] = {
            name: null,
            realName: null,
            parent: selector,
            style,
            inlStyle: undefined,
            pseudo
        };
        invalidateStyles();
    }
    function invalidateStyles() {
        rebuildStyles = true;
        __export_invalidate();
    }
    function updateSprite(spDef) {
        var stDef = allStyles[spDef.styleId];
        var style = {
            backgroundImage: "url(" + spDef.url + ")",
            width: spDef.width,
            height: spDef.height,
            backgroundPosition: -spDef.left + "px " + -spDef.top + "px",
            backgroundSize: spDef.width + "px " + spDef.height + "px"
        };
        stDef.style = style;
        invalidateStyles();
    }
    function emptyStyleDef(url) {
        return styleDef({
            width: 0,
            height: 0
        }, undefined, url);
    }
    var rgbaRegex = /\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+|\d*\.\d+)\s*\)\s*/;
    function recolorAndClip(image, colorStr, width, height, left, top) {
        var canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(image, -left, -top);
        var imgData = ctx.getImageData(0, 0, width, height);
        var imgDataData = imgData.data;
        var rgba = rgbaRegex.exec(colorStr);
        var cRed, cGreen, cBlue, cAlpha;
        if (rgba) {
            cRed = parseInt(rgba[1], 10);
            cGreen = parseInt(rgba[2], 10);
            cBlue = parseInt(rgba[3], 10);
            cAlpha = Math.round(parseFloat(rgba[4]) * 255);
        } else {
            cRed = parseInt(colorStr.substr(1, 2), 16);
            cGreen = parseInt(colorStr.substr(3, 2), 16);
            cBlue = parseInt(colorStr.substr(5, 2), 16);
            cAlpha = parseInt(colorStr.substr(7, 2), 16) || 255;
        }
        if (cAlpha === 255) {
            for (var i = 0; i < imgDataData.length; i += 4) {
                var red = imgDataData[i];
                if (red === imgDataData[i + 1] && red === imgDataData[i + 2] && (red === 128 || imgDataData[i + 3] < 255 && red > 112)) {
                    imgDataData[i] = cRed;
                    imgDataData[i + 1] = cGreen;
                    imgDataData[i + 2] = cBlue;
                }
            }
        } else {
            for (var i = 0; i < imgDataData.length; i += 4) {
                var red = imgDataData[i];
                var alpha = imgDataData[i + 3];
                if (red === imgDataData[i + 1] && red === imgDataData[i + 2] && (red === 128 || alpha < 255 && red > 112)) {
                    if (alpha === 255) {
                        imgDataData[i] = cRed;
                        imgDataData[i + 1] = cGreen;
                        imgDataData[i + 2] = cBlue;
                        imgDataData[i + 3] = cAlpha;
                    } else {
                        alpha = alpha * (1 / 255);
                        imgDataData[i] = Math.round(cRed * alpha);
                        imgDataData[i + 1] = Math.round(cGreen * alpha);
                        imgDataData[i + 2] = Math.round(cBlue * alpha);
                        imgDataData[i + 3] = Math.round(cAlpha * alpha);
                    }
                }
            }
        }
        ctx.putImageData(imgData, 0, 0);
        return canvas.toDataURL();
    }
    var lastFuncId = 0;
    var funcIdName = "b@funcId";
    var imagesWithCredentials = false;
    function loadImage(url, onload) {
        var image = new Image();
        image.crossOrigin = imagesWithCredentials ? "use-credentials" : "anonymous";
        image.addEventListener("load", function() {
            return onload(image);
        });
        image.src = url;
    }
    function setImagesWithCredentials(value) {
        imagesWithCredentials = value;
    }
    function sprite(url, color, width, height, left, top) {
        assert(allStyles[url] === undefined, "Wrong sprite url");
        left = left || 0;
        top = top || 0;
        var colorId = color || "";
        var isVarColor = false;
        if (isFunction(color)) {
            isVarColor = true;
            colorId = color[funcIdName];
            if (colorId == undefined) {
                colorId = "" + lastFuncId++;
                color[funcIdName] = colorId;
            }
        }
        var key = url + ":" + colorId + ":" + (width || 0) + ":" + (height || 0) + ":" + left + ":" + top;
        var spDef = allSprites[key];
        if (spDef) return spDef.styleId;
        var styleId = emptyStyleDef(url);
        spDef = {
            styleId,
            url,
            width,
            height,
            left,
            top
        };
        if (isVarColor) {
            spDef.color = color;
            spDef.lastColor = "";
            spDef.lastUrl = "";
            dynamicSprites.push(spDef);
            if (imageCache[url] === undefined) {
                imageCache[url] = null;
                loadImage(url, function(image) {
                    imageCache[url] = image;
                    invalidateStyles();
                });
            }
            invalidateStyles();
        } else if (width == undefined || height == undefined || color != undefined) {
            loadImage(url, function(image) {
                if (spDef.width == undefined) spDef.width = image.width;
                if (spDef.height == undefined) spDef.height = image.height;
                if (color != undefined) {
                    spDef.url = recolorAndClip(image, color, spDef.width, spDef.height, spDef.left, spDef.top);
                    spDef.left = 0;
                    spDef.top = 0;
                }
                updateSprite(spDef);
            });
        } else {
            updateSprite(spDef);
        }
        allSprites[key] = spDef;
        return styleId;
    }
    var bundlePath = window["bobrilBPath"] || "bundle.png";
    var bundlePath2 = window["bobrilBPath2"] || [];
    function setBundlePngPath(path) {
        bundlePath = path;
    }
    function getSpritePaths() {
        return [ bundlePath, bundlePath2 ];
    }
    function setSpritePaths(main, others) {
        bundlePath = main;
        bundlePath2 = others;
    }
    function spriteb(width, height, left, top) {
        var key = ":" + width + ":" + height + ":" + left + ":" + top;
        var spDef = bundledSprites[key];
        if (spDef) return spDef.styleId;
        hasBundledSprites = true;
        var styleId = styleDef({
            width,
            height
        });
        spDef = {
            styleId,
            width,
            height,
            left,
            top
        };
        bundledSprites[key] = spDef;
        wasSpriteUrlChanged = true;
        return styleId;
    }
    function spritebc(color, width, height, left, top) {
        if (color == undefined) {
            return spriteb(width, height, left, top);
        }
        var colorId;
        if (isString(color)) {
            colorId = color;
        } else {
            colorId = color[funcIdName];
            if (colorId == undefined) {
                colorId = "" + lastFuncId++;
                color[funcIdName] = colorId;
            }
        }
        var key = colorId + ":" + width + ":" + height + ":" + left + ":" + top;
        var spDef = bundledSprites[key];
        if (spDef) return spDef.styleId;
        hasBundledSprites = true;
        var styleId = styleDef({
            width,
            height
        });
        spDef = {
            styleId,
            width,
            height,
            left,
            top
        };
        spDef.color = color;
        spDef.lastColor = "";
        spDef.lastUrl = "";
        bundledDynamicSprites.push(spDef);
        bundledSprites[key] = spDef;
        return styleId;
    }
    function injectCss(css) {
        injectedCss += css;
        invalidateStyles();
    }
    function asset(path) {
        return path;
    }
    selectorStyleDef("html." + draggingStyle + " *", {
        cursor: "inherit !important",
        userSelect: "none !important"
    });
    function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        var angleInRadians = angleInDegrees * Math.PI / 180;
        return {
            x: centerX + radius * Math.sin(angleInRadians),
            y: centerY - radius * Math.cos(angleInRadians)
        };
    }
    function svgDescribeArc(x, y, radius, startAngle, endAngle, startWithLine) {
        var absDeltaAngle = Math.abs(endAngle - startAngle);
        var close = false;
        if (absDeltaAngle > 360 - .01) {
            if (endAngle > startAngle) endAngle = startAngle - 359.9; else endAngle = startAngle + 359.9;
            if (radius === 0) return "";
            close = true;
        } else {
            if (radius === 0) {
                return [ startWithLine ? "L" : "M", x, y ].join(" ");
            }
        }
        var start = polarToCartesian(x, y, radius, endAngle);
        var end = polarToCartesian(x, y, radius, startAngle);
        var arcSweep = absDeltaAngle <= 180 ? "0" : "1";
        var largeArg = endAngle > startAngle ? "0" : "1";
        var d = [ startWithLine ? "L" : "M", start.x, start.y, "A", radius, radius, 0, arcSweep, largeArg, end.x, end.y ].join(" ");
        if (close) d += "Z";
        return d;
    }
    function svgPie(x, y, radiusBig, radiusSmall, startAngle, endAngle) {
        var p = svgDescribeArc(x, y, radiusBig, startAngle, endAngle, false);
        var nextWithLine = true;
        if (p[p.length - 1] === "Z") nextWithLine = false;
        if (radiusSmall === 0) {
            if (!nextWithLine) return p;
        }
        return p + svgDescribeArc(x, y, radiusSmall, endAngle, startAngle, nextWithLine) + "Z";
    }
    function svgCircle(x, y, radius) {
        return svgDescribeArc(x, y, radius, 0, 360, false);
    }
    function svgRect(x, y, width, height) {
        return "M" + x + " " + y + "h" + width + "v" + height + "h" + -width + "Z";
    }
    function withKey(content, key) {
        if (isObject(content) && !__export_isArray(content)) {
            content.key = key;
            return content;
        }
        return {
            key,
            children: content
        };
    }
    function withRef(node, ctx, name) {
        node.ref = [ ctx, name ];
        return node;
    }
    function extendCfg(ctx, propertyName, value) {
        var c = ctx.me.cfg;
        if (c !== undefined) {
            c[propertyName] = value;
        } else {
            c = Object.assign({}, ctx.cfg);
            c[propertyName] = value;
            ctx.me.cfg = c;
        }
    }
    function styledDiv(children) {
        var styles = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            styles[_i - 1] = arguments[_i];
        }
        return style_bobril({
            tag: "div",
            children
        }, styles);
    }
    function createVirtualComponent(component) {
        return function(data, children) {
            if (children !== undefined) {
                if (data == undefined) data = {};
                data.children = children;
            }
            return {
                data,
                component
            };
        };
    }
    function createOverridingComponent(original, after) {
        var originalComponent = original().component;
        var overriding = overrideComponents(originalComponent, after);
        return createVirtualComponent(overriding);
    }
    function createComponent(component) {
        var originalRender = component.render;
        if (originalRender) {
            component.render = function(ctx, me, oldMe) {
                me.tag = "div";
                return originalRender.call(component, ctx, me, oldMe);
            };
        } else {
            component.render = function(_ctx, me) {
                me.tag = "div";
            };
        }
        return createVirtualComponent(component);
    }
    function createDerivedComponent(original, after) {
        var originalComponent = original().component;
        var merged = mergeComponents(originalComponent, after);
        return createVirtualComponent(merged);
    }
    function prop_bobril(value, onChange) {
        return function(val) {
            if (val !== undefined) {
                if (onChange !== undefined) onChange(val, value);
                value = val;
            }
            return value;
        };
    }
    function propi(value) {
        return function(val) {
            if (val !== undefined) {
                value = val;
                __export_invalidate();
            }
            return value;
        };
    }
    function propa(prop) {
        return function(val) {
            if (val !== undefined) {
                if (typeof val === "object" && isFunction(val.then)) {
                    val.then(function(v) {
                        prop(v);
                    }, function(err) {
                        if (window["console"] && console.error) console.error(err);
                    });
                } else {
                    return prop(val);
                }
            }
            return prop();
        };
    }
    function propim(value, ctx, onChange) {
        return function(val) {
            if (val !== undefined && !is(val, value)) {
                var oldVal = val;
                value = val;
                if (onChange !== undefined) onChange(val, oldVal);
                __export_invalidate(ctx);
            }
            return value;
        };
    }
    function debounceProp(from, delay) {
        if (delay === void 0) {
            delay = 500;
        }
        var current = from();
        var lastSet = current;
        var timer;
        function clearTimer() {
            if (timer !== undefined) {
                clearTimeout(timer);
                timer = undefined;
            }
        }
        return function(value) {
            if (value === undefined) {
                var origin_1 = from();
                if (origin_1 === lastSet) return current;
                current = origin_1;
                lastSet = origin_1;
                clearTimer();
                return origin_1;
            } else {
                clearTimer();
                if (current === value) {
                    lastSet = value;
                    from(value);
                } else {
                    current = value;
                    timer = setTimeout(function() {
                        lastSet = current;
                        from(current);
                        timer = undefined;
                    }, delay);
                }
                return value;
            }
        };
    }
    function getValue(value) {
        if (isFunction(value)) {
            return value();
        }
        return value;
    }
    function emitChange(data, value) {
        if (isFunction(data.value)) {
            data.value(value);
        }
        if (data.onChange !== undefined) {
            data.onChange(value);
        }
    }
    if (!window.b) window.b = {
        deref,
        getRoots,
        setInvalidate,
        invalidateStyles,
        ignoreShouldChange,
        setAfterFrame,
        setBeforeFrame,
        getDnds: __export_getDnds,
        setBeforeInit
    };
    function shallowEqual(a, b) {
        if (is(a, b)) {
            return true;
        }
        if (!isObject(a) || !isObject(b)) {
            return false;
        }
        var kA = Object.keys(a);
        var kB = Object.keys(b);
        if (kA.length !== kB.length) {
            return false;
        }
        for (var i_17 = 0; i_17 < kA.length; i_17++) {
            if (!hOP.call(b, kA[i_17]) || !is(a[kA[i_17]], b[kA[i_17]])) {
                return false;
            }
        }
        return true;
    }
    var jsxFactoryCache = new Map();
    function getStringPropertyDescriptors(obj) {
        var props = new Map();
        do {
            Object.getOwnPropertyNames(obj).forEach(function(prop) {
                if (!this.has(prop)) this.set(prop, Object.getOwnPropertyDescriptor(obj, prop));
            }, props);
        } while (obj = Object.getPrototypeOf(obj));
        return props;
    }
    function createElement(name, props) {
        var children;
        var argumentsCount = arguments.length - 2;
        if (argumentsCount === 0) {} else if (argumentsCount === 1) {
            children = arguments[2];
        } else {
            children = new Array(argumentsCount);
            for (var i_18 = 0; i_18 < argumentsCount; i_18++) {
                children[i_18] = arguments[i_18 + 2];
            }
        }
        if (isString(name)) {
            var res = argumentsCount === 0 ? {
                tag: name
            } : {
                tag: name,
                children
            };
            if (props == undefined) {
                return res;
            }
            var attrs;
            var component;
            for (var n in props) {
                if (!props.hasOwnProperty(n)) continue;
                var propValue = props[n];
                if (n === "style") {
                    style_bobril(res, propValue);
                    continue;
                }
                if (n === "ref") {
                    if (isString(propValue)) {
                        assert(getCurrentCtx() != undefined);
                        res.ref = [ getCurrentCtx(), propValue ];
                    } else res.ref = propValue;
                    continue;
                }
                if (n === "key" || n === "className" || n === "component" || n === "data" || n === "children") {
                    res[n] = propValue;
                    continue;
                }
                if (n.startsWith("on") && isFunction(propValue)) {
                    if (component == undefined) {
                        component = {};
                        res.component = component;
                    }
                    component[n] = propValue.call.bind(propValue);
                    continue;
                }
                if (attrs == undefined) {
                    attrs = {};
                    res.attrs = attrs;
                }
                attrs[n] = propValue;
            }
            return res;
        } else {
            var res_1;
            var factory = jsxFactoryCache.get(name);
            if (factory === undefined) {
                factory = createFactory(name);
                jsxFactoryCache.set(name, factory);
            }
            if (argumentsCount == 0) {
                res_1 = factory(props);
            } else {
                if (factory.length == 1) {
                    if (props == undefined) props = {
                        children
                    }; else props.children = children;
                    res_1 = factory(props);
                } else {
                    res_1 = factory(props, children);
                }
            }
            if (props != undefined) {
                if (props.key != undefined) res_1.key = props.key;
                if (props.ref != undefined) res_1.ref = props.ref;
            }
            return res_1;
        }
    }
    function Fragment(data) {
        return data;
    }
    function Portal(data) {
        var _a;
        return {
            tag: "@",
            data: (_a = data.element) !== null && _a !== void 0 ? _a : document.body,
            children: data.children,
            key: data.key,
            ref: data.ref
        };
    }
    var __export___spread = __export_assign;
    var EventResult_bobril;
    (function(EventResult) {
        EventResult[EventResult["NotHandled"] = 0] = "NotHandled";
        EventResult[EventResult["HandledPreventDefault"] = 1] = "HandledPreventDefault";
        EventResult[EventResult["HandledButRunDefault"] = 2] = "HandledButRunDefault";
        EventResult[EventResult["NotHandledPreventDefault"] = 3] = "NotHandledPreventDefault";
    })(EventResult_bobril = __export_EventResult || (__export_EventResult = {}));
    var Component_bobril = function() {
        function Component(data, me) {
            this.data = data;
            this.me = me;
            this.cfg = undefined;
            this.refs = undefined;
        }
        return Component;
    }();
    var PureComponent_bobril = function(_super) {
        __extends(PureComponent, _super);
        function PureComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PureComponent.prototype.shouldChange = function(newData, oldData) {
            return !shallowEqual(newData, oldData);
        };
        return PureComponent;
    }(Component_bobril);
    function forwardRender(m) {
        return function(ctx, me, _oldMe) {
            me.children = m.call(ctx, ctx.data);
        };
    }
    function forwardInit(m) {
        return function(ctx) {
            m.call(ctx, ctx.data);
        };
    }
    function forwardShouldChange(m) {
        return function(ctx, me, oldMe) {
            return m.call(ctx, me.data, oldMe.data);
        };
    }
    function forwardMe(m) {
        return m.call.bind(m);
    }
    function combineWithForwardMe(component, name, func) {
        var existing = component[name];
        if (existing != undefined) {
            component[name] = function(ctx, me) {
                existing(ctx, me);
                func.call(ctx, me);
            };
        } else {
            component[name] = forwardMe(func);
        }
    }
    var methodsWithMeParam = [ "destroy", "postInitDom", "postUpdateDom", "postUpdateDomEverytime" ];
    function component_bobril(component, name) {
        var bobrilComponent = {};
        if (component.prototype instanceof Component_bobril) {
            var proto = component.prototype;
            var protoStatic = proto.constructor;
            bobrilComponent.id = getId(name, protoStatic);
            var protoMap = getStringPropertyDescriptors(proto);
            protoMap.forEach(function(descriptor, key) {
                var value = descriptor.value;
                if (value == undefined) return;
                var set = undefined;
                if (key === "render") {
                    set = forwardRender(value);
                } else if (key === "init") {
                    set = forwardInit(value);
                } else if (key === "shouldChange") {
                    set = forwardShouldChange(value);
                } else if (methodsWithMeParam.indexOf(key) >= 0) {
                    combineWithForwardMe(bobrilComponent, key, value);
                } else if (key === "postRenderDom") {
                    combineWithForwardMe(bobrilComponent, methodsWithMeParam[1], value);
                    combineWithForwardMe(bobrilComponent, methodsWithMeParam[2], value);
                } else if (isFunction(value) && /^(?:canDeactivate$|on[A-Z])/.test(key)) {
                    set = forwardMe(value);
                }
                if (set !== undefined) {
                    bobrilComponent[key] = set;
                }
            });
            bobrilComponent.ctxClass = component;
            bobrilComponent.canActivate = protoStatic.canActivate;
        } else {
            bobrilComponent.id = getId(name, component);
            bobrilComponent.render = forwardRender(component);
        }
        return function(data) {
            return {
                data,
                component: bobrilComponent
            };
        };
    }
    function getId(name, classOrFunction) {
        return name || classOrFunction.id || classOrFunction.name + "_" + allocateMethodId();
    }
    function createFactory(comp) {
        if (comp.prototype instanceof Component_bobril) {
            return component_bobril(comp);
        } else if (comp.length == 2) {
            return comp;
        } else {
            return component_bobril(comp);
        }
    }
    function checkCurrentRenderCtx() {
        assert(currentCtx != undefined && hookId >= 0, "Hooks could be used only in Render method");
    }
    function _getHooks() {
        checkCurrentRenderCtx();
        var hooks = currentCtx.$hooks;
        if (hooks === undefined) {
            hooks = [];
            currentCtx.$hooks = hooks;
        }
        return hooks;
    }
    function _allocHook() {
        return hookId++;
    }
    function useState(initValue) {
        var myHookId = hookId++;
        var hooks = _getHooks();
        var ctx = currentCtx;
        var hook = hooks[myHookId];
        if (hook === undefined) {
            if (isFunction(initValue)) {
                initValue = initValue();
            }
            hook = function(value) {
                if (value !== undefined && !is(value, hook[0])) {
                    hook[0] = value;
                    __export_invalidate(ctx);
                }
                return hook[0];
            };
            hook[0] = initValue;
            hook[1] = function(value) {
                if (isFunction(value)) {
                    value = value(hook[0]);
                }
                if (!is(value, hook[0])) {
                    hook[0] = value;
                    __export_invalidate(ctx);
                }
            };
            hooks[myHookId] = hook;
        }
        return hook;
    }
    function createContext(defaultValue, id) {
        if (id === undefined) {
            id = "__b#" + allocateMethodId();
        }
        return {
            id,
            dv: defaultValue
        };
    }
    function context_bobril(key) {
        return function(target, propertyKey) {
            Object.defineProperty(target, propertyKey, {
                configurable: true,
                get: function() {
                    var cfg = this.me.cfg || this.cfg;
                    if (cfg == undefined || !(key.id in cfg)) return key.dv;
                    return cfg[key.id];
                },
                set: function(value) {
                    extendCfg(this, key.id, value);
                }
            });
        };
    }
    function useContext(key) {
        checkCurrentRenderCtx();
        var cfg = currentCtx.me.cfg || currentCtx.cfg;
        if (isString(key)) {
            if (cfg == undefined) return undefined;
            return cfg[key];
        } else {
            if (cfg == undefined || !(key.id in cfg)) return key.dv;
            return cfg[key.id];
        }
    }
    function useProvideContext(key, value) {
        checkCurrentRenderCtx();
        extendCfg(currentCtx, isString(key) ? key : key.id, value);
    }
    function useRef(initialValue) {
        var myHookId = hookId++;
        var hooks = _getHooks();
        var hook = hooks[myHookId];
        if (hook === undefined) {
            hook = function(value) {
                if (value !== undefined) {
                    hook.current = value;
                }
                return hook.current;
            };
            hook.current = initialValue;
            hooks[myHookId] = hook;
        }
        return hook;
    }
    function useStore(factory) {
        var myHookId = hookId++;
        var hooks = _getHooks();
        var hook = hooks[myHookId];
        if (hook === undefined) {
            hook = factory();
            if (isDisposable(hook)) {
                addDisposable(currentCtx, hook);
            }
            hooks[myHookId] = hook;
        }
        return hook;
    }
    function hookPostInitDom(ctx) {
        var hooks = ctx.$hooks;
        var len = hooks.length;
        for (var i_19 = 0; i_19 < len; i_19++) {
            var hook = hooks[i_19];
            var fn = hook.postInitDom;
            if (fn !== undefined) {
                fn.call(hook, ctx);
            }
        }
    }
    function hookPostUpdateDom(ctx) {
        var hooks = ctx.$hooks;
        var len = hooks.length;
        for (var i_20 = 0; i_20 < len; i_20++) {
            var hook = hooks[i_20];
            var fn = hook.postUpdateDom;
            if (fn !== undefined) {
                fn.call(hook, ctx);
            }
        }
    }
    function hookPostUpdateDomEverytime(ctx) {
        var hooks = ctx.$hooks;
        var len = hooks.length;
        for (var i_21 = 0; i_21 < len; i_21++) {
            var hook = hooks[i_21];
            var fn = hook.postUpdateDomEverytime;
            if (fn !== undefined) {
                fn.call(hook, ctx);
            }
        }
    }
    function bind_bobril(target, propertyKey, descriptor) {
        if (propertyKey != undefined && descriptor != undefined) {
            var fn_1 = descriptor.value;
            assert(isFunction(fn_1), "Only methods can be decorated with @bind. '" + propertyKey + "' is not a method!");
            var definingProperty_1 = false;
            return {
                configurable: true,
                get: function() {
                    if (definingProperty_1) {
                        return fn_1;
                    }
                    var value = fn_1.bind(this);
                    definingProperty_1 = true;
                    Object.defineProperty(this, propertyKey, {
                        value,
                        configurable: true,
                        writable: true
                    });
                    definingProperty_1 = false;
                    return value;
                }
            };
        }
        var proto = target.prototype;
        var keys = Object.getOwnPropertyNames(proto);
        keys.forEach(function(key) {
            if (key === "constructor") {
                return;
            }
            var descriptor = Object.getOwnPropertyDescriptor(proto, key);
            if (isFunction(descriptor.value)) {
                Object.defineProperty(proto, key, bind_bobril(target, key, descriptor));
            }
        });
        return target;
    }
    var DepsChangeDetector_bobril = function() {
        function DepsChangeDetector() {}
        DepsChangeDetector.prototype.detectChange = function(deps) {
            var changed = false;
            if (deps != undefined) {
                var lastDeps = this.deps;
                if (lastDeps == undefined) {
                    changed = true;
                } else {
                    var depsLen = deps.length;
                    if (depsLen != lastDeps.length) changed = true; else {
                        for (var i_22 = 0; i_22 < depsLen; i_22++) {
                            if (!is(deps[i_22], lastDeps[i_22])) {
                                changed = true;
                                break;
                            }
                        }
                    }
                }
            } else changed = true;
            this.deps = deps;
            return changed;
        };
        return DepsChangeDetector;
    }();
    var MemoHook_bobril = function(_super) {
        __extends(MemoHook, _super);
        function MemoHook() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MemoHook.prototype.memoize = function(factory, deps) {
            if (this.detectChange(deps)) {
                this.current = factory();
            }
            return this.current;
        };
        return MemoHook;
    }(DepsChangeDetector_bobril);
    function useMemo(factory, deps) {
        var myHookId = hookId++;
        var hooks = _getHooks();
        var hook = hooks[myHookId];
        if (hook === undefined) {
            hook = new MemoHook_bobril();
            hooks[myHookId] = hook;
        }
        return hook.memoize(factory, deps);
    }
    var effectCallbacks = [];
    function executeEffectCallbacks() {
        var cbList = effectCallbacks;
        effectCallbacks = [];
        for (var i = 0, len = cbList.length; i < len; i++) {
            cbList[i]();
        }
    }
    var EffectHook_bobril = function(_super) {
        __extends(EffectHook, _super);
        function EffectHook() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EffectHook.prototype.update = function(callback, deps) {
            this.callback = callback;
            if (this.detectChange(deps)) {
                this.doRun();
            }
        };
        EffectHook.prototype.doRun = function() {
            effectCallbacks.push(this.run);
        };
        EffectHook.prototype.run = function() {
            var c = this.callback;
            if (c != undefined) {
                this.dispose();
                this.lastDisposer = c();
            }
        };
        EffectHook.prototype.dispose = function() {
            this.callback = undefined;
            if (isFunction(this.lastDisposer)) this.lastDisposer();
            this.lastDisposer = undefined;
        };
        return EffectHook;
    }(DepsChangeDetector_bobril);
    function useEffect(callback, deps) {
        var myHookId = hookId++;
        var hooks = _getHooks();
        var hook = hooks[myHookId];
        if (hook === undefined) {
            hook = new EffectHook_bobril();
            hook.run = hook.run.bind(hook);
            addDisposable(currentCtx, hook);
            hooks[myHookId] = hook;
        }
        hook.update(callback, deps);
    }
    var LayoutEffectHook_bobril = function(_super) {
        __extends(LayoutEffectHook, _super);
        function LayoutEffectHook() {
            var _this = _super.call(this) || this;
            _this.shouldRun = false;
            return _this;
        }
        LayoutEffectHook.prototype.postInitDom = function(ctx) {
            this.postUpdateDomEverytime(ctx);
        };
        LayoutEffectHook.prototype.postUpdateDomEverytime = function(ctx) {
            if (this.shouldRun) {
                this.shouldRun = false;
                this.run();
                if (ctx[ctxInvalidated] > frameCounter) {
                    deferSyncUpdate();
                }
            }
        };
        LayoutEffectHook.prototype.doRun = function() {
            this.shouldRun = true;
        };
        return LayoutEffectHook;
    }(EffectHook_bobril);
    function useLayoutEffect(callback, deps) {
        var myHookId = hookId++;
        var hooks = _getHooks();
        var hook = hooks[myHookId];
        if (hook === undefined) {
            currentCtx.$hookFlags |= hasPostInitDom | hasPostUpdateDomEverytime;
            hook = new LayoutEffectHook_bobril();
            addDisposable(currentCtx, hook);
            hooks[myHookId] = hook;
        }
        hook.update(callback, deps);
    }
    var EventsHook_bobril = function() {
        function EventsHook() {}
        return EventsHook;
    }();
    function useEvents(events) {
        var myHookId = hookId++;
        var hooks = _getHooks();
        var hook = hooks[myHookId];
        if (hook === undefined) {
            currentCtx.$hookFlags |= hasEvents;
            hook = new EventsHook_bobril();
            hooks[myHookId] = hook;
        } else {
            assert(hook instanceof EventsHook_bobril);
        }
        hook.events = events;
    }
    var CaptureEventsHook_bobril = function() {
        function CaptureEventsHook() {}
        return CaptureEventsHook;
    }();
    function useCaptureEvents(events) {
        var myHookId = hookId++;
        var hooks = _getHooks();
        var hook = hooks[myHookId];
        if (hook === undefined) {
            currentCtx.$hookFlags |= hasCaptureEvents;
            hook = new CaptureEventsHook_bobril();
            hooks[myHookId] = hook;
        } else {
            assert(hook instanceof CaptureEventsHook_bobril);
        }
        hook.events = events;
    }
    init(function() {
        return "hello";
    });
})();

