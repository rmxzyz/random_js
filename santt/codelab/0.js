import {s as sceneApi} from "../../_05dc81ea.js";
import "../../_940e5e94.js";
var _globalExport;
(function() {
    var b = b || {};
    b.scope = {};
    var e = e || {};
    e.global = this || self,
    e.isDef = function(e) {
        return void 0 !== e
    }
    ,
    e.isString = function(e) {
        return "string" == typeof e
    }
    ,
    e.isBoolean = function(e) {
        return "boolean" == typeof e
    }
    ,
    e.isNumber = function(e) {
        return "number" == typeof e
    }
    ,
    e.exportPath_ = function(t, n, o) {
        t = t.split("."),
        o = o || e.global,
        t[0]in o || void 0 === o.execScript || o.execScript("var " + t[0]);
        for (var r; t.length && (r = t.shift()); )
            !t.length && e.isDef(n) ? o[r] = n : o = o[r] && o[r] !== Object.prototype[r] ? o[r] : o[r] = {}
    }
    ,
    e.define = function(e, t) {
        return t
    }
    ,
    e.FEATURESET_YEAR = 2012,
    e.DEBUG = !0,
    e.LOCALE = "en",
    e.TRUSTED_SITE = !0,
    e.STRICT_MODE_COMPATIBLE = !1,
    e.DISALLOW_TEST_ONLY_CODE = !e.DEBUG,
    e.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1,
    e.provide = function(t) {
        if (e.isInModuleLoader_())
            throw Error("goog.provide cannot be used within a module.");
        e.constructNamespace_(t)
    }
    ,
    e.constructNamespace_ = function(t, n) {
        e.exportPath_(t, n)
    }
    ,
    e.getScriptNonce = function(t) {
        return t && t != e.global ? e.getScriptNonce_(t.document) : (null === e.cspNonce_ && (e.cspNonce_ = e.getScriptNonce_(e.global.document)),
        e.cspNonce_)
    }
    ,
    e.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/,
    e.cspNonce_ = null,
    e.getScriptNonce_ = function(t) {
        return (t = t.querySelector && t.querySelector("script[nonce]")) && (t = t.nonce || t.getAttribute("nonce")) && e.NONCE_PATTERN_.test(t) ? t : ""
    }
    ,
    e.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/,
    e.module = function(t) {
        if (!e.isString(t) || !t || -1 == t.search(e.VALID_MODULE_RE_))
            throw Error("Invalid module identifier");
        if (!e.isInGoogModuleLoader_())
            throw Error("Module " + t + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
        if (e.moduleLoaderState_.moduleName)
            throw Error("goog.module may only be called once per module.");
        e.moduleLoaderState_.moduleName = t
    }
    ,
    e.module.get = function(t) {
        return e.module.getInternal_(t)
    }
    ,
    e.module.getInternal_ = function() {
        return null
    }
    ,
    e.ModuleType = {
        ES6: "es6",
        GOOG: "goog"
    },
    e.moduleLoaderState_ = null,
    e.isInModuleLoader_ = function() {
        return e.isInGoogModuleLoader_() || e.isInEs6ModuleLoader_()
    }
    ,
    e.isInGoogModuleLoader_ = function() {
        return !!e.moduleLoaderState_ && e.moduleLoaderState_.type == e.ModuleType.GOOG
    }
    ,
    e.isInEs6ModuleLoader_ = function() {
        if (e.moduleLoaderState_ && e.moduleLoaderState_.type == e.ModuleType.ES6)
            return !0;
        var t = e.global.$jscomp;
        return !!t && ("function" == typeof t.getCurrentModulePath && !!t.getCurrentModulePath())
    }
    ,
    e.module.declareLegacyNamespace = function() {
        e.moduleLoaderState_.declareLegacyNamespace = !0
    }
    ,
    e.declareModuleId = function(t) {
        if (e.moduleLoaderState_)
            e.moduleLoaderState_.moduleName = t;
        else {
            var n = e.global.$jscomp;
            if (!n || "function" != typeof n.getCurrentModulePath)
                throw Error('Module with namespace "' + t + '" has been loaded incorrectly.');
            n = n.require(n.getCurrentModulePath()),
            e.loadedModules_[t] = {
                exports: n,
                type: e.ModuleType.ES6,
                moduleId: t
            }
        }
    }
    ,
    e.setTestOnly = function(t) {
        if (e.DISALLOW_TEST_ONLY_CODE)
            throw t = t || "",
            Error("Importing test-only code into non-debug environment" + (t ? ": " + t : "."))
    }
    ,
    e.forwardDeclare = function() {}
    ,
    e.getObjectByName = function(t, n) {
        t = t.split("."),
        n = n || e.global;
        for (var o = 0; o < t.length; o++)
            if (n = n[t[o]],
            !e.isDefAndNotNull(n))
                return null;
        return n
    }
    ,
    e.globalize = function(t, n) {
        for (var o in n = n || e.global,
        t)
            n[o] = t[o]
    }
    ,
    e.addDependency = function() {}
    ,
    e.ENABLE_DEBUG_LOADER = !0,
    e.logToConsole_ = function(t) {
        e.global.console && e.global.console.error(t)
    }
    ,
    e.require = function() {}
    ,
    e.requireType = function() {
        return {}
    }
    ,
    e.basePath = "",
    e.nullFunction = function() {}
    ,
    e.abstractMethod = function() {
        throw Error("unimplemented abstract method")
    }
    ,
    e.addSingletonGetter = function(t) {
        t.instance_ = void 0,
        t.getInstance = function() {
            return t.instance_ ? t.instance_ : (e.DEBUG && (e.instantiatedSingletons_[e.instantiatedSingletons_.length] = t),
            t.instance_ = new t)
        }
    }
    ,
    e.instantiatedSingletons_ = [],
    e.LOAD_MODULE_USING_EVAL = !0,
    e.SEAL_MODULE_EXPORTS = e.DEBUG,
    e.loadedModules_ = {},
    e.DEPENDENCIES_ENABLED = !1,
    e.TRANSPILE = "detect",
    e.ASSUME_ES_MODULES_TRANSPILED = !1,
    e.TRANSPILE_TO_LANGUAGE = "",
    e.TRANSPILER = "transpile.js",
    e.hasBadLetScoping = null,
    e.useSafari10Workaround = function() {
        if (null == e.hasBadLetScoping) {
            try {
                var a = !eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";')
            } catch (e) {
                a = !1
            }
            e.hasBadLetScoping = a
        }
        return e.hasBadLetScoping
    }
    ,
    e.workaroundSafari10EvalBug = function(e) {
        return "(function(){" + e + "\n;})();\n"
    }
    ,
    e.loadModule = function(t) {
        var n = e.moduleLoaderState_;
        try {
            if (e.moduleLoaderState_ = {
                moduleName: "",
                declareLegacyNamespace: !1,
                type: e.ModuleType.GOOG
            },
            e.isFunction(t))
                var o = t.call(void 0, {});
            else {
                if (!e.isString(t))
                    throw Error("Invalid module definition");
                e.useSafari10Workaround() && (t = e.workaroundSafari10EvalBug(t)),
                o = e.loadModuleFromSource_.call(void 0, t)
            }
            var r = e.moduleLoaderState_.moduleName;
            if (!e.isString(r) || !r)
                throw Error('Invalid module name "' + r + '"');
            e.moduleLoaderState_.declareLegacyNamespace ? e.constructNamespace_(r, o) : e.SEAL_MODULE_EXPORTS && Object.seal && "object" == typeof o && null != o && Object.seal(o),
            e.loadedModules_[r] = {
                exports: o,
                type: e.ModuleType.GOOG,
                moduleId: e.moduleLoaderState_.moduleName
            }
        } finally {
            e.moduleLoaderState_ = n
        }
    }
    ,
    e.loadModuleFromSource_ = function(a) {
        return eval(a),
        {}
    }
    ,
    e.normalizePath_ = function(e) {
        e = e.split("/");
        for (var t = 0; t < e.length; )
            "." == e[t] ? e.splice(t, 1) : t && ".." == e[t] && e[t - 1] && ".." != e[t - 1] ? e.splice(--t, 2) : t++;
        return e.join("/")
    }
    ,
    e.loadFileSync_ = function(t) {
        if (e.global.CLOSURE_LOAD_FILE_SYNC)
            return e.global.CLOSURE_LOAD_FILE_SYNC(t);
        try {
            var n = new e.global.XMLHttpRequest;
            return n.open("get", t, !1),
            n.send(),
            0 == n.status || 200 == n.status ? n.responseText : null
        } catch (e) {
            return null
        }
    }
    ,
    e.transpile_ = function(t, n, o) {
        var r = e.global.$jscomp;
        r || (e.global.$jscomp = r = {});
        var i = r.transpile;
        if (!i) {
            var s = e.basePath + e.TRANSPILER
              , a = e.loadFileSync_(s);
            if (a) {
                if (function() {
                    (0,
                    eval)(a + "\n//# sourceURL=" + s)
                }
                .call(e.global),
                e.global.$gwtExport && e.global.$gwtExport.$jscomp && !e.global.$gwtExport.$jscomp.transpile)
                    throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(e.global.$gwtExport));
                e.global.$jscomp.transpile = e.global.$gwtExport.$jscomp.transpile,
                i = (r = e.global.$jscomp).transpile
            }
        }
        return i || (i = r.transpile = function(t, n) {
            return e.logToConsole_(n + " requires transpilation but no transpiler was found."),
            t
        }
        ),
        i(t, n, o)
    }
    ,
    e.typeOf = function(e) {
        var t = typeof e;
        if ("object" == t) {
            if (!e)
                return "null";
            if (e instanceof Array)
                return "array";
            if (e instanceof Object)
                return t;
            var n = Object.prototype.toString.call(e);
            if ("[object Window]" == n)
                return "object";
            if ("[object Array]" == n || "number" == typeof e.length && void 0 !== e.splice && void 0 !== e.propertyIsEnumerable && !e.propertyIsEnumerable("splice"))
                return "array";
            if ("[object Function]" == n || void 0 !== e.call && void 0 !== e.propertyIsEnumerable && !e.propertyIsEnumerable("call"))
                return "function"
        } else if ("function" == t && void 0 === e.call)
            return "object";
        return t
    }
    ,
    e.isNull = function(e) {
        return null === e
    }
    ,
    e.isDefAndNotNull = function(e) {
        return null != e
    }
    ,
    e.isArray = function(t) {
        return "array" == e.typeOf(t)
    }
    ,
    e.isArrayLike = function(t) {
        var n = e.typeOf(t);
        return "array" == n || "object" == n && "number" == typeof t.length
    }
    ,
    e.isDateLike = function(t) {
        return e.isObject(t) && "function" == typeof t.getFullYear
    }
    ,
    e.isFunction = function(t) {
        return "function" == e.typeOf(t)
    }
    ,
    e.isObject = function(e) {
        var t = typeof e;
        return "object" == t && null != e || "function" == t
    }
    ,
    e.getUid = function(t) {
        return t[e.UID_PROPERTY_] || (t[e.UID_PROPERTY_] = ++e.uidCounter_)
    }
    ,
    e.hasUid = function(t) {
        return !!t[e.UID_PROPERTY_]
    }
    ,
    e.removeUid = function(t) {
        null !== t && "removeAttribute"in t && t.removeAttribute(e.UID_PROPERTY_);
        try {
            delete t[e.UID_PROPERTY_]
        } catch (e) {}
    }
    ,
    e.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0),
    e.uidCounter_ = 0,
    e.getHashCode = e.getUid,
    e.removeHashCode = e.removeUid,
    e.cloneObject = function(t) {
        var n = e.typeOf(t);
        if ("object" == n || "array" == n) {
            if ("function" == typeof t.clone)
                return t.clone();
            for (var o in n = "array" == n ? [] : {},
            t)
                n[o] = e.cloneObject(t[o]);
            return n
        }
        return t
    }
    ,
    e.bindNative_ = function(e, t, n) {
        return e.call.apply(e.bind, arguments)
    }
    ,
    e.bindJs_ = function(e, t, n) {
        if (!e)
            throw Error();
        if (2 < arguments.length) {
            var o = Array.prototype.slice.call(arguments, 2);
            return function() {
                var n = Array.prototype.slice.call(arguments);
                return Array.prototype.unshift.apply(n, o),
                e.apply(t, n)
            }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
    ,
    e.bind = function(t, n, o) {
        return Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? e.bind = e.bindNative_ : e.bind = e.bindJs_,
        e.bind.apply(null, arguments)
    }
    ,
    e.partial = function(e, t) {
        var n = Array.prototype.slice.call(arguments, 1);
        return function() {
            var t = n.slice();
            return t.push.apply(t, arguments),
            e.apply(this, t)
        }
    }
    ,
    e.mixin = function(e, t) {
        for (var n in t)
            e[n] = t[n]
    }
    ,
    e.now = e.TRUSTED_SITE && Date.now || function() {
        return +new Date
    }
    ,
    e.globalEval = function(t) {
        if (e.global.execScript)
            e.global.execScript(t, "JavaScript");
        else {
            if (!e.global.eval)
                throw Error("goog.globalEval not available");
            if (null == e.evalWorksForGlobals_) {
                try {
                    e.global.eval("var _evalTest_ = 1;")
                } catch (e) {}
                if (void 0 !== e.global._evalTest_) {
                    try {
                        delete e.global._evalTest_
                    } catch (e) {}
                    e.evalWorksForGlobals_ = !0
                } else
                    e.evalWorksForGlobals_ = !1
            }
            if (e.evalWorksForGlobals_)
                e.global.eval(t);
            else {
                var n = e.global.document
                  , o = n.createElement("SCRIPT");
                o.type = "text/javascript",
                o.defer = !1,
                o.appendChild(n.createTextNode(t)),
                n.head.appendChild(o),
                n.head.removeChild(o)
            }
        }
    }
    ,
    e.evalWorksForGlobals_ = null,
    e.getCssName = function(t, n) {
        function o(t) {
            return e.cssNameMapping_[t] || t
        }
        if ("." == String(t).charAt(0))
            throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + t);
        var r = e.cssNameMapping_ ? "BY_WHOLE" == e.cssNameMappingStyle_ ? o : function(e) {
            e = e.split("-");
            for (var t = [], n = 0; n < e.length; n++)
                t.push(o(e[n]));
            return t.join("-")
        }
        : function(e) {
            return e
        }
        ;
        return t = n ? t + "-" + r(n) : r(t),
        e.global.CLOSURE_CSS_NAME_MAP_FN ? e.global.CLOSURE_CSS_NAME_MAP_FN(t) : t
    }
    ,
    e.setCssNameMapping = function(t, n) {
        e.cssNameMapping_ = t,
        e.cssNameMappingStyle_ = n
    }
    ,
    e.getMsg = function(e, t, n) {
        return n && n.html && (e = e.replace(/</g, "&lt;")),
        t && (e = e.replace(/\{\$([^}]+)}/g, function(e, n) {
            return null != t && n in t ? t[n] : e
        })),
        e
    }
    ,
    e.getMsgWithFallback = function(e) {
        return e
    }
    ,
    e.exportSymbol = function(t, n, o) {
        e.exportPath_(t, n, o)
    }
    ,
    e.exportProperty = function(e, t, n) {
        e[t] = n
    }
    ,
    e.inherits = function(e, t) {
        function n() {}
        n.prototype = t.prototype,
        e.superClass_ = t.prototype,
        e.prototype = new n,
        e.prototype.constructor = e,
        e.base = function(e, n, o) {
            for (var r = Array(arguments.length - 2), i = 2; i < arguments.length; i++)
                r[i - 2] = arguments[i];
            return t.prototype[n].apply(e, r)
        }
    }
    ,
    e.base = function(t, n, o) {
        var r = arguments.callee.caller;
        if (e.STRICT_MODE_COMPATIBLE || e.DEBUG && !r)
            throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
        if (void 0 !== r.superClass_) {
            for (var i = Array(arguments.length - 1), s = 1; s < arguments.length; s++)
                i[s - 1] = arguments[s];
            return r.superClass_.constructor.apply(t, i)
        }
        if ("string" != typeof n && "symbol" != typeof n)
            throw Error("method names provided to goog.base must be a string or a symbol");
        for (i = Array(arguments.length - 2),
        s = 2; s < arguments.length; s++)
            i[s - 2] = arguments[s];
        s = !1;
        for (var a = t.constructor.prototype; a; a = Object.getPrototypeOf(a))
            if (a[n] === r)
                s = !0;
            else if (s)
                return a[n].apply(t, i);
        if (t[n] === r)
            return t.constructor.prototype[n].apply(t, i);
        throw Error("goog.base called from a method of one name to a method of a different name")
    }
    ,
    e.scope = function(t) {
        if (e.isInModuleLoader_())
            throw Error("goog.scope is not supported within a module.");
        t.call(e.global)
    }
    ,
    e.defineClass = function(t, n) {
        var o = n.constructor
          , r = n.statics;
        return o && o != Object.prototype.constructor || (o = function() {
            throw Error("cannot instantiate an interface (no constructor defined).")
        }
        ),
        o = e.defineClass.createSealingConstructor_(o, t),
        t && e.inherits(o, t),
        delete n.constructor,
        delete n.statics,
        e.defineClass.applyProperties_(o.prototype, n),
        null != r && (r instanceof Function ? r(o) : e.defineClass.applyProperties_(o, r)),
        o
    }
    ,
    e.defineClass.SEAL_CLASS_INSTANCES = e.DEBUG,
    e.defineClass.createSealingConstructor_ = function(t, n) {
        if (!e.defineClass.SEAL_CLASS_INSTANCES)
            return t;
        var o = !e.defineClass.isUnsealable_(n);
        return function n() {
            var r = t.apply(this, arguments) || this;
            return r[e.UID_PROPERTY_] = r[e.UID_PROPERTY_],
            this.constructor === n && o && Object.seal instanceof Function && Object.seal(r),
            r
        }
    }
    ,
    e.defineClass.isUnsealable_ = function(t) {
        return t && t.prototype && t.prototype[e.UNSEALABLE_CONSTRUCTOR_PROPERTY_]
    }
    ,
    e.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
    e.defineClass.applyProperties_ = function(t, n) {
        for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        for (var r = 0; r < e.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; r++)
            o = e.defineClass.OBJECT_PROTOTYPE_FIELDS_[r],
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
    }
    ,
    e.tagUnsealableClass = function() {}
    ,
    e.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable",
    e.TRUSTED_TYPES_POLICY_NAME = "",
    e.identity_ = function(e) {
        return e
    }
    ,
    e.createTrustedTypesPolicy = function(t) {
        var n = null
          , o = e.global.trustedTypes || e.global.TrustedTypes;
        if (!o || !o.createPolicy)
            return n;
        try {
            n = o.createPolicy(t, {
                createHTML: e.identity_,
                createScript: e.identity_,
                createScriptURL: e.identity_,
                createURL: e.identity_
            })
        } catch (t) {
            e.logToConsole_(t.message)
        }
        return n
    }
    ,
    e.TRUSTED_TYPES_POLICY_ = e.TRUSTED_TYPES_POLICY_NAME ? e.createTrustedTypesPolicy(e.TRUSTED_TYPES_POLICY_NAME + "#base") : null;
    var k = {
        triggerEvent: function(...e) {
            window.santaApp.fire("sound-trigger", ...e)
        }
    };
    e.debug = {},
    e.debug.Error = function(t) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, e.debug.Error);
        else {
            const e = Error().stack;
            e && (this.stack = e)
        }
        t && (this.message = String(t)),
        this.reportErrorToServer = !0
    }
    ,
    e.inherits(e.debug.Error, Error),
    e.debug.Error.prototype.name = "CustomError",
    e.dom = {},
    e.dom.NodeType = {
        ELEMENT: 1,
        ATTRIBUTE: 2,
        TEXT: 3,
        CDATA_SECTION: 4,
        ENTITY_REFERENCE: 5,
        ENTITY: 6,
        PROCESSING_INSTRUCTION: 7,
        COMMENT: 8,
        DOCUMENT: 9,
        DOCUMENT_TYPE: 10,
        DOCUMENT_FRAGMENT: 11,
        NOTATION: 12
    },
    e.asserts = {},
    e.asserts.ENABLE_ASSERTS = e.DEBUG,
    e.asserts.AssertionError = function(t, n) {
        e.debug.Error.call(this, e.asserts.subs_(t, n)),
        this.messagePattern = t
    }
    ,
    e.inherits(e.asserts.AssertionError, e.debug.Error),
    e.asserts.AssertionError.prototype.name = "AssertionError",
    e.asserts.DEFAULT_ERROR_HANDLER = function(e) {
        throw e
    }
    ,
    e.asserts.errorHandler_ = e.asserts.DEFAULT_ERROR_HANDLER,
    e.asserts.subs_ = function(e, t) {
        for (var n = "", o = (e = e.split("%s")).length - 1, r = 0; r < o; r++)
            n += e[r] + (r < t.length ? t[r] : "%s");
        return n + e[o]
    }
    ,
    e.asserts.doAssertFailure_ = function(t, n, o, r) {
        var i = "Assertion failed";
        if (o) {
            i += ": " + o;
            var s = r
        } else
            t && (i += ": " + t,
            s = n);
        t = new e.asserts.AssertionError("" + i,s || []),
        e.asserts.errorHandler_(t)
    }
    ,
    e.asserts.setErrorHandler = function(t) {
        e.asserts.ENABLE_ASSERTS && (e.asserts.errorHandler_ = t)
    }
    ,
    e.asserts.assert = function(t, n, o) {
        return e.asserts.ENABLE_ASSERTS && !t && e.asserts.doAssertFailure_("", null, n, Array.prototype.slice.call(arguments, 2)),
        t
    }
    ,
    e.asserts.assertExists = function(t, n, o) {
        return e.asserts.ENABLE_ASSERTS && null == t && e.asserts.doAssertFailure_("Expected to exist: %s.", [t], n, Array.prototype.slice.call(arguments, 2)),
        t
    }
    ,
    e.asserts.fail = function(t, n) {
        e.asserts.ENABLE_ASSERTS && e.asserts.errorHandler_(new e.asserts.AssertionError("Failure" + (t ? ": " + t : ""),Array.prototype.slice.call(arguments, 1)))
    }
    ,
    e.asserts.assertNumber = function(t, n, o) {
        return e.asserts.ENABLE_ASSERTS && !e.isNumber(t) && e.asserts.doAssertFailure_("Expected number but got %s: %s.", [e.typeOf(t), t], n, Array.prototype.slice.call(arguments, 2)),
        t
    }
    ,
    e.asserts.assertString = function(t, n, o) {
        return e.asserts.ENABLE_ASSERTS && !e.isString(t) && e.asserts.doAssertFailure_("Expected string but got %s: %s.", [e.typeOf(t), t], n, Array.prototype.slice.call(arguments, 2)),
        t
    }
    ,
    e.asserts.assertFunction = function(t, n, o) {
        return e.asserts.ENABLE_ASSERTS && !e.isFunction(t) && e.asserts.doAssertFailure_("Expected function but got %s: %s.", [e.typeOf(t), t], n, Array.prototype.slice.call(arguments, 2)),
        t
    }
    ,
    e.asserts.assertObject = function(t, n, o) {
        return e.asserts.ENABLE_ASSERTS && !e.isObject(t) && e.asserts.doAssertFailure_("Expected object but got %s: %s.", [e.typeOf(t), t], n, Array.prototype.slice.call(arguments, 2)),
        t
    }
    ,
    e.asserts.assertArray = function(t, n, o) {
        return e.asserts.ENABLE_ASSERTS && !e.isArray(t) && e.asserts.doAssertFailure_("Expected array but got %s: %s.", [e.typeOf(t), t], n, Array.prototype.slice.call(arguments, 2)),
        t
    }
    ,
    e.asserts.assertBoolean = function(t, n, o) {
        return e.asserts.ENABLE_ASSERTS && !e.isBoolean(t) && e.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [e.typeOf(t), t], n, Array.prototype.slice.call(arguments, 2)),
        t
    }
    ,
    e.asserts.assertElement = function(t, n, o) {
        return !e.asserts.ENABLE_ASSERTS || e.isObject(t) && t.nodeType == e.dom.NodeType.ELEMENT || e.asserts.doAssertFailure_("Expected Element but got %s: %s.", [e.typeOf(t), t], n, Array.prototype.slice.call(arguments, 2)),
        t
    }
    ,
    e.asserts.assertInstanceof = function(t, n, o, r) {
        return !e.asserts.ENABLE_ASSERTS || t instanceof n || e.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [e.asserts.getType_(n), e.asserts.getType_(t)], o, Array.prototype.slice.call(arguments, 3)),
        t
    }
    ,
    e.asserts.assertFinite = function(t, n, o) {
        return !e.asserts.ENABLE_ASSERTS || "number" == typeof t && isFinite(t) || e.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.", [t], n, Array.prototype.slice.call(arguments, 2)),
        t
    }
    ,
    e.asserts.assertObjectPrototypeIsIntact = function() {
        for (var t in Object.prototype)
            e.asserts.fail(t + " should not be enumerable in Object.prototype.")
    }
    ,
    e.asserts.getType_ = function(e) {
        return e instanceof Function ? e.displayName || e.name || "unknown type name" : e instanceof Object ? e.constructor.displayName || e.constructor.name || Object.prototype.toString.call(e) : null === e ? "null" : typeof e
    }
    ,
    e.array = {},
    e.NATIVE_ARRAY_PROTOTYPES = e.TRUSTED_SITE,
    e.array.ASSUME_NATIVE_FUNCTIONS = 2012 < e.FEATURESET_YEAR,
    e.array.peek = function(e) {
        return e[e.length - 1]
    }
    ,
    e.array.last = e.array.peek,
    e.array.indexOf = e.NATIVE_ARRAY_PROTOTYPES && (e.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function(t, n, o) {
        return e.asserts.assert(null != t.length),
        Array.prototype.indexOf.call(t, n, o)
    }
    : function(t, n, o) {
        if (o = null == o ? 0 : 0 > o ? Math.max(0, t.length + o) : o,
        e.isString(t))
            return e.isString(n) && 1 == n.length ? t.indexOf(n, o) : -1;
        for (; o < t.length; o++)
            if (o in t && t[o] === n)
                return o;
        return -1
    }
    ,
    e.array.lastIndexOf = e.NATIVE_ARRAY_PROTOTYPES && (e.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function(t, n, o) {
        return e.asserts.assert(null != t.length),
        Array.prototype.lastIndexOf.call(t, n, null == o ? t.length - 1 : o)
    }
    : function(t, n, o) {
        if (0 > (o = null == o ? t.length - 1 : o) && (o = Math.max(0, t.length + o)),
        e.isString(t))
            return e.isString(n) && 1 == n.length ? t.lastIndexOf(n, o) : -1;
        for (; 0 <= o; o--)
            if (o in t && t[o] === n)
                return o;
        return -1
    }
    ,
    e.array.forEach = e.NATIVE_ARRAY_PROTOTYPES && (e.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function(t, n, o) {
        e.asserts.assert(null != t.length),
        Array.prototype.forEach.call(t, n, o)
    }
    : function(t, n, o) {
        for (var r = t.length, i = e.isString(t) ? t.split("") : t, s = 0; s < r; s++)
            s in i && n.call(o, i[s], s, t)
    }
    ,
    e.array.forEachRight = function(t, n, o) {
        var r = t.length
          , i = e.isString(t) ? t.split("") : t;
        for (--r; 0 <= r; --r)
            r in i && n.call(o, i[r], r, t)
    }
    ,
    e.array.filter = e.NATIVE_ARRAY_PROTOTYPES && (e.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function(t, n, o) {
        return e.asserts.assert(null != t.length),
        Array.prototype.filter.call(t, n, o)
    }
    : function(t, n, o) {
        for (var r = t.length, i = [], s = 0, a = e.isString(t) ? t.split("") : t, l = 0; l < r; l++)
            if (l in a) {
                var u = a[l];
                n.call(o, u, l, t) && (i[s++] = u)
            }
        return i
    }
    ,
    e.array.map = e.NATIVE_ARRAY_PROTOTYPES && (e.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function(t, n, o) {
        return e.asserts.assert(null != t.length),
        Array.prototype.map.call(t, n, o)
    }
    : function(t, n, o) {
        for (var r = t.length, i = Array(r), s = e.isString(t) ? t.split("") : t, a = 0; a < r; a++)
            a in s && (i[a] = n.call(o, s[a], a, t));
        return i
    }
    ,
    e.array.reduce = e.NATIVE_ARRAY_PROTOTYPES && (e.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function(t, n, o, r) {
        return e.asserts.assert(null != t.length),
        r && (n = e.bind(n, r)),
        Array.prototype.reduce.call(t, n, o)
    }
    : function(t, n, o, r) {
        var i = o;
        return e.array.forEach(t, function(e, o) {
            i = n.call(r, i, e, o, t)
        }),
        i
    }
    ,
    e.array.reduceRight = e.NATIVE_ARRAY_PROTOTYPES && (e.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function(t, n, o, r) {
        return e.asserts.assert(null != t.length),
        e.asserts.assert(null != n),
        r && (n = e.bind(n, r)),
        Array.prototype.reduceRight.call(t, n, o)
    }
    : function(t, n, o, r) {
        var i = o;
        return e.array.forEachRight(t, function(e, o) {
            i = n.call(r, i, e, o, t)
        }),
        i
    }
    ,
    e.array.some = e.NATIVE_ARRAY_PROTOTYPES && (e.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function(t, n, o) {
        return e.asserts.assert(null != t.length),
        Array.prototype.some.call(t, n, o)
    }
    : function(t, n, o) {
        for (var r = t.length, i = e.isString(t) ? t.split("") : t, s = 0; s < r; s++)
            if (s in i && n.call(o, i[s], s, t))
                return !0;
        return !1
    }
    ,
    e.array.every = e.NATIVE_ARRAY_PROTOTYPES && (e.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function(t, n, o) {
        return e.asserts.assert(null != t.length),
        Array.prototype.every.call(t, n, o)
    }
    : function(t, n, o) {
        for (var r = t.length, i = e.isString(t) ? t.split("") : t, s = 0; s < r; s++)
            if (s in i && !n.call(o, i[s], s, t))
                return !1;
        return !0
    }
    ,
    e.array.count = function(t, n, o) {
        var r = 0;
        return e.array.forEach(t, function(e, t, i) {
            n.call(o, e, t, i) && ++r
        }, o),
        r
    }
    ,
    e.array.find = function(t, n, o) {
        return 0 > (n = e.array.findIndex(t, n, o)) ? null : e.isString(t) ? t.charAt(n) : t[n]
    }
    ,
    e.array.findIndex = function(t, n, o) {
        for (var r = t.length, i = e.isString(t) ? t.split("") : t, s = 0; s < r; s++)
            if (s in i && n.call(o, i[s], s, t))
                return s;
        return -1
    }
    ,
    e.array.findRight = function(t, n, o) {
        return 0 > (n = e.array.findIndexRight(t, n, o)) ? null : e.isString(t) ? t.charAt(n) : t[n]
    }
    ,
    e.array.findIndexRight = function(t, n, o) {
        var r = t.length
          , i = e.isString(t) ? t.split("") : t;
        for (--r; 0 <= r; r--)
            if (r in i && n.call(o, i[r], r, t))
                return r;
        return -1
    }
    ,
    e.array.contains = function(t, n) {
        return 0 <= e.array.indexOf(t, n)
    }
    ,
    e.array.isEmpty = function(e) {
        return 0 == e.length
    }
    ,
    e.array.clear = function(t) {
        if (!e.isArray(t))
            for (var n = t.length - 1; 0 <= n; n--)
                delete t[n];
        t.length = 0
    }
    ,
    e.array.insert = function(t, n) {
        e.array.contains(t, n) || t.push(n)
    }
    ,
    e.array.insertAt = function(t, n, o) {
        e.array.splice(t, o, 0, n)
    }
    ,
    e.array.insertArrayAt = function(t, n, o) {
        e.partial(e.array.splice, t, o, 0).apply(null, n)
    }
    ,
    e.array.insertBefore = function(t, n, o) {
        var r;
        2 == arguments.length || 0 > (r = e.array.indexOf(t, o)) ? t.push(n) : e.array.insertAt(t, n, r)
    }
    ,
    e.array.remove = function(t, n) {
        var o;
        return (o = 0 <= (n = e.array.indexOf(t, n))) && e.array.removeAt(t, n),
        o
    }
    ,
    e.array.removeLast = function(t, n) {
        return 0 <= (n = e.array.lastIndexOf(t, n)) && (e.array.removeAt(t, n),
        !0)
    }
    ,
    e.array.removeAt = function(t, n) {
        return e.asserts.assert(null != t.length),
        1 == Array.prototype.splice.call(t, n, 1).length
    }
    ,
    e.array.removeIf = function(t, n, o) {
        return 0 <= (n = e.array.findIndex(t, n, o)) && (e.array.removeAt(t, n),
        !0)
    }
    ,
    e.array.removeAllIf = function(t, n, o) {
        var r = 0;
        return e.array.forEachRight(t, function(i, s) {
            n.call(o, i, s, t) && e.array.removeAt(t, s) && r++
        }),
        r
    }
    ,
    e.array.concat = function(e) {
        return Array.prototype.concat.apply([], arguments)
    }
    ,
    e.array.join = function(e) {
        return Array.prototype.concat.apply([], arguments)
    }
    ,
    e.array.toArray = function(e) {
        var t = e.length;
        if (0 < t) {
            for (var n = Array(t), o = 0; o < t; o++)
                n[o] = e[o];
            return n
        }
        return []
    }
    ,
    e.array.clone = e.array.toArray,
    e.array.extend = function(t, n) {
        for (var o = 1; o < arguments.length; o++) {
            var r = arguments[o];
            if (e.isArrayLike(r)) {
                var i = t.length || 0
                  , s = r.length || 0;
                t.length = i + s;
                for (var a = 0; a < s; a++)
                    t[i + a] = r[a]
            } else
                t.push(r)
        }
    }
    ,
    e.array.splice = function(t, n, o, r) {
        return e.asserts.assert(null != t.length),
        Array.prototype.splice.apply(t, e.array.slice(arguments, 1))
    }
    ,
    e.array.slice = function(t, n, o) {
        return e.asserts.assert(null != t.length),
        2 >= arguments.length ? Array.prototype.slice.call(t, n) : Array.prototype.slice.call(t, n, o)
    }
    ,
    e.array.removeDuplicates = function(t, n, o) {
        n = n || t,
        o = o || function(t) {
            return e.isObject(t) ? "o" + e.getUid(t) : (typeof t).charAt(0) + t
        }
        ;
        for (var r = {}, i = 0, s = 0; s < t.length; ) {
            var a = t[s++]
              , l = o(a);
            Object.prototype.hasOwnProperty.call(r, l) || (r[l] = !0,
            n[i++] = a)
        }
        n.length = i
    }
    ,
    e.array.binarySearch = function(t, n, o) {
        return e.array.binarySearch_(t, o || e.array.defaultCompare, !1, n)
    }
    ,
    e.array.binarySelect = function(t, n, o) {
        return e.array.binarySearch_(t, n, !0, void 0, o)
    }
    ,
    e.array.binarySearch_ = function(e, t, n, o, r) {
        for (var i, s = 0, a = e.length; s < a; ) {
            var l = s + a >> 1
              , u = n ? t.call(r, e[l], l, e) : t(o, e[l]);
            0 < u ? s = l + 1 : (a = l,
            i = !u)
        }
        return i ? s : ~s
    }
    ,
    e.array.sort = function(t, n) {
        t.sort(n || e.array.defaultCompare)
    }
    ,
    e.array.stableSort = function(t, n) {
        for (var o = Array(t.length), r = 0; r < t.length; r++)
            o[r] = {
                index: r,
                value: t[r]
            };
        var i = n || e.array.defaultCompare;
        for (e.array.sort(o, function(e, t) {
            return i(e.value, t.value) || e.index - t.index
        }),
        r = 0; r < t.length; r++)
            t[r] = o[r].value
    }
    ,
    e.array.sortByKey = function(t, n, o) {
        var r = o || e.array.defaultCompare;
        e.array.sort(t, function(e, t) {
            return r(n(e), n(t))
        })
    }
    ,
    e.array.sortObjectsByKey = function(t, n, o) {
        e.array.sortByKey(t, function(e) {
            return e[n]
        }, o)
    }
    ,
    e.array.isSorted = function(t, n, o) {
        n = n || e.array.defaultCompare;
        for (var r = 1; r < t.length; r++) {
            var i = n(t[r - 1], t[r]);
            if (0 < i || 0 == i && o)
                return !1
        }
        return !0
    }
    ,
    e.array.equals = function(t, n, o) {
        if (!e.isArrayLike(t) || !e.isArrayLike(n) || t.length != n.length)
            return !1;
        var r = t.length;
        o = o || e.array.defaultCompareEquality;
        for (var i = 0; i < r; i++)
            if (!o(t[i], n[i]))
                return !1;
        return !0
    }
    ,
    e.array.compare3 = function(t, n, o) {
        o = o || e.array.defaultCompare;
        for (var r = Math.min(t.length, n.length), i = 0; i < r; i++) {
            var s = o(t[i], n[i]);
            if (0 != s)
                return s
        }
        return e.array.defaultCompare(t.length, n.length)
    }
    ,
    e.array.defaultCompare = function(e, t) {
        return e > t ? 1 : e < t ? -1 : 0
    }
    ,
    e.array.inverseDefaultCompare = function(t, n) {
        return -e.array.defaultCompare(t, n)
    }
    ,
    e.array.defaultCompareEquality = function(e, t) {
        return e === t
    }
    ,
    e.array.binaryInsert = function(t, n, o) {
        return 0 > (o = e.array.binarySearch(t, n, o)) && (e.array.insertAt(t, n, -(o + 1)),
        !0)
    }
    ,
    e.array.binaryRemove = function(t, n, o) {
        return 0 <= (n = e.array.binarySearch(t, n, o)) && e.array.removeAt(t, n)
    }
    ,
    e.array.bucket = function(t, n, o) {
        for (var r = {}, i = 0; i < t.length; i++) {
            var s = t[i]
              , a = n.call(o, s, i, t);
            e.isDef(a) && (r[a] || (r[a] = [])).push(s)
        }
        return r
    }
    ,
    e.array.toObject = function(t, n, o) {
        var r = {};
        return e.array.forEach(t, function(e, i) {
            r[n.call(o, e, i, t)] = e
        }),
        r
    }
    ,
    e.array.range = function(e, t, n) {
        var o = []
          , r = 0
          , i = e;
        if (void 0 !== t && (r = e,
        i = t),
        0 > (n = n || 1) * (i - r))
            return [];
        if (0 < n)
            for (e = r; e < i; e += n)
                o.push(e);
        else
            for (e = r; e > i; e += n)
                o.push(e);
        return o
    }
    ,
    e.array.repeat = function(e, t) {
        for (var n = [], o = 0; o < t; o++)
            n[o] = e;
        return n
    }
    ,
    e.array.flatten = function(t) {
        for (var n = [], o = 0; o < arguments.length; o++) {
            var r = arguments[o];
            if (e.isArray(r))
                for (var i = 0; i < r.length; i += 8192) {
                    var s = e.array.slice(r, i, i + 8192);
                    s = e.array.flatten.apply(null, s);
                    for (var a = 0; a < s.length; a++)
                        n.push(s[a])
                }
            else
                n.push(r)
        }
        return n
    }
    ,
    e.array.rotate = function(t, n) {
        return e.asserts.assert(null != t.length),
        t.length && (0 < (n %= t.length) ? Array.prototype.unshift.apply(t, t.splice(-n, n)) : 0 > n && Array.prototype.push.apply(t, t.splice(0, -n))),
        t
    }
    ,
    e.array.moveItem = function(t, n, o) {
        e.asserts.assert(0 <= n && n < t.length),
        e.asserts.assert(0 <= o && o < t.length),
        n = Array.prototype.splice.call(t, n, 1),
        Array.prototype.splice.call(t, o, 0, n[0])
    }
    ,
    e.array.zip = function(e) {
        if (!arguments.length)
            return [];
        for (var t = [], n = arguments[0].length, o = 1; o < arguments.length; o++)
            arguments[o].length < n && (n = arguments[o].length);
        for (o = 0; o < n; o++) {
            for (var r = [], i = 0; i < arguments.length; i++)
                r.push(arguments[i][o]);
            t.push(r)
        }
        return t
    }
    ,
    e.array.shuffle = function(e, t) {
        t = t || Math.random;
        for (var n = e.length - 1; 0 < n; n--) {
            var o = Math.floor(t() * (n + 1))
              , r = e[n];
            e[n] = e[o],
            e[o] = r
        }
    }
    ,
    e.array.copyByIndex = function(t, n) {
        var o = [];
        return e.array.forEach(n, function(e) {
            o.push(t[e])
        }),
        o
    }
    ,
    e.array.concatMap = function(t, n, o) {
        return e.array.concat.apply([], e.array.map(t, n, o))
    }
    ,
    e.string = {},
    e.string.internal = {},
    e.string.internal.startsWith = function(e, t) {
        return 0 == e.lastIndexOf(t, 0)
    }
    ,
    e.string.internal.endsWith = function(e, t) {
        const n = e.length - t.length;
        return 0 <= n && e.indexOf(t, n) == n
    }
    ,
    e.string.internal.caseInsensitiveStartsWith = function(t, n) {
        return 0 == e.string.internal.caseInsensitiveCompare(n, t.substr(0, n.length))
    }
    ,
    e.string.internal.caseInsensitiveEndsWith = function(t, n) {
        return 0 == e.string.internal.caseInsensitiveCompare(n, t.substr(t.length - n.length, n.length))
    }
    ,
    e.string.internal.caseInsensitiveEquals = function(e, t) {
        return e.toLowerCase() == t.toLowerCase()
    }
    ,
    e.string.internal.isEmptyOrWhitespace = function(e) {
        return /^[\s\xa0]*$/.test(e)
    }
    ,
    e.string.internal.trim = e.TRUSTED_SITE && String.prototype.trim ? function(e) {
        return e.trim()
    }
    : function(e) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]
    }
    ,
    e.string.internal.caseInsensitiveCompare = function(e, t) {
        return (e = String(e).toLowerCase()) < (t = String(t).toLowerCase()) ? -1 : e == t ? 0 : 1
    }
    ,
    e.string.internal.newLineToBr = function(e, t) {
        return e.replace(/(\r\n|\r|\n)/g, t ? "<br />" : "<br>")
    }
    ,
    e.string.internal.htmlEscape = function(t, n) {
        if (n)
            t = t.replace(e.string.internal.AMP_RE_, "&amp;").replace(e.string.internal.LT_RE_, "&lt;").replace(e.string.internal.GT_RE_, "&gt;").replace(e.string.internal.QUOT_RE_, "&quot;").replace(e.string.internal.SINGLE_QUOTE_RE_, "&#39;").replace(e.string.internal.NULL_RE_, "&#0;");
        else {
            if (!e.string.internal.ALL_RE_.test(t))
                return t;
            -1 != t.indexOf("&") && (t = t.replace(e.string.internal.AMP_RE_, "&amp;")),
            -1 != t.indexOf("<") && (t = t.replace(e.string.internal.LT_RE_, "&lt;")),
            -1 != t.indexOf(">") && (t = t.replace(e.string.internal.GT_RE_, "&gt;")),
            -1 != t.indexOf('"') && (t = t.replace(e.string.internal.QUOT_RE_, "&quot;")),
            -1 != t.indexOf("'") && (t = t.replace(e.string.internal.SINGLE_QUOTE_RE_, "&#39;")),
            -1 != t.indexOf("\0") && (t = t.replace(e.string.internal.NULL_RE_, "&#0;"))
        }
        return t
    }
    ,
    e.string.internal.AMP_RE_ = /&/g,
    e.string.internal.LT_RE_ = /</g,
    e.string.internal.GT_RE_ = />/g,
    e.string.internal.QUOT_RE_ = /"/g,
    e.string.internal.SINGLE_QUOTE_RE_ = /'/g,
    e.string.internal.NULL_RE_ = /\x00/g,
    e.string.internal.ALL_RE_ = /[\x00&<>"']/,
    e.string.internal.whitespaceEscape = function(t, n) {
        return e.string.internal.newLineToBr(t.replace(/  /g, " &#160;"), n)
    }
    ,
    e.string.internal.contains = function(e, t) {
        return -1 != e.indexOf(t)
    }
    ,
    e.string.internal.caseInsensitiveContains = function(t, n) {
        return e.string.internal.contains(t.toLowerCase(), n.toLowerCase())
    }
    ,
    e.string.internal.compareVersions = function(t, n) {
        var o = 0;
        t = e.string.internal.trim(String(t)).split("."),
        n = e.string.internal.trim(String(n)).split(".");
        const r = Math.max(t.length, n.length);
        for (let a = 0; 0 == o && a < r; a++) {
            var i = t[a] || ""
              , s = n[a] || "";
            do {
                if (i = /(\d*)(\D*)(.*)/.exec(i) || ["", "", "", ""],
                s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""],
                0 == i[0].length && 0 == s[0].length)
                    break;
                o = 0 == i[1].length ? 0 : parseInt(i[1], 10);
                const t = 0 == s[1].length ? 0 : parseInt(s[1], 10);
                o = e.string.internal.compareElements_(o, t) || e.string.internal.compareElements_(0 == i[2].length, 0 == s[2].length) || e.string.internal.compareElements_(i[2], s[2]),
                i = i[3],
                s = s[3]
            } while (0 == o)
        }
        return o
    }
    ,
    e.string.internal.compareElements_ = function(e, t) {
        return e < t ? -1 : e > t ? 1 : 0
    }
    ,
    e.labs = {},
    e.labs.userAgent = {},
    e.labs.userAgent.util = {},
    e.labs.userAgent.util.getNativeUserAgentString_ = function() {
        var t = e.labs.userAgent.util.getNavigator_();
        return t && (t = t.userAgent) ? t : ""
    }
    ,
    e.labs.userAgent.util.getNavigator_ = function() {
        return e.global.navigator
    }
    ,
    e.labs.userAgent.util.userAgent_ = e.labs.userAgent.util.getNativeUserAgentString_(),
    e.labs.userAgent.util.setUserAgent = function(t) {
        e.labs.userAgent.util.userAgent_ = t || e.labs.userAgent.util.getNativeUserAgentString_()
    }
    ,
    e.labs.userAgent.util.getUserAgent = function() {
        return e.labs.userAgent.util.userAgent_
    }
    ,
    e.labs.userAgent.util.matchUserAgent = function(t) {
        var n = e.labs.userAgent.util.getUserAgent();
        return e.string.internal.contains(n, t)
    }
    ,
    e.labs.userAgent.util.matchUserAgentIgnoreCase = function(t) {
        var n = e.labs.userAgent.util.getUserAgent();
        return e.string.internal.caseInsensitiveContains(n, t)
    }
    ,
    e.labs.userAgent.util.extractVersionTuples = function(e) {
        for (var t, n = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, o = []; t = n.exec(e); )
            o.push([t[1], t[2], t[3] || void 0]);
        return o
    }
    ,
    e.object = {},
    e.object.is = function(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    }
    ,
    e.object.forEach = function(e, t, n) {
        for (const o in e)
            t.call(n, e[o], o, e)
    }
    ,
    e.object.filter = function(e, t, n) {
        const o = {};
        for (const r in e)
            t.call(n, e[r], r, e) && (o[r] = e[r]);
        return o
    }
    ,
    e.object.map = function(e, t, n) {
        const o = {};
        for (const r in e)
            o[r] = t.call(n, e[r], r, e);
        return o
    }
    ,
    e.object.some = function(e, t, n) {
        for (const o in e)
            if (t.call(n, e[o], o, e))
                return !0;
        return !1
    }
    ,
    e.object.every = function(e, t, n) {
        for (const o in e)
            if (!t.call(n, e[o], o, e))
                return !1;
        return !0
    }
    ,
    e.object.getCount = function(e) {
        let t = 0;
        for (const n in e)
            t++;
        return t
    }
    ,
    e.object.getAnyKey = function(e) {
        for (const t in e)
            return t
    }
    ,
    e.object.getAnyValue = function(e) {
        for (const t in e)
            return e[t]
    }
    ,
    e.object.contains = function(t, n) {
        return e.object.containsValue(t, n)
    }
    ,
    e.object.getValues = function(e) {
        const t = [];
        let n = 0;
        for (const o in e)
            t[n++] = e[o];
        return t
    }
    ,
    e.object.getKeys = function(e) {
        const t = [];
        let n = 0;
        for (const o in e)
            t[n++] = o;
        return t
    }
    ,
    e.object.getValueByKeys = function(t, n) {
        var o = e.isArrayLike(n);
        const r = o ? n : arguments;
        for (o = o ? 0 : 1; o < r.length; o++) {
            if (null == t)
                return;
            t = t[r[o]]
        }
        return t
    }
    ,
    e.object.containsKey = function(e, t) {
        return null !== e && t in e
    }
    ,
    e.object.containsValue = function(e, t) {
        for (const n in e)
            if (e[n] == t)
                return !0;
        return !1
    }
    ,
    e.object.findKey = function(e, t, n) {
        for (const o in e)
            if (t.call(n, e[o], o, e))
                return o
    }
    ,
    e.object.findValue = function(t, n, o) {
        return (n = e.object.findKey(t, n, o)) && t[n]
    }
    ,
    e.object.isEmpty = function(e) {
        for (const t in e)
            return !1;
        return !0
    }
    ,
    e.object.clear = function(e) {
        for (const t in e)
            delete e[t]
    }
    ,
    e.object.remove = function(e, t) {
        let n;
        return (n = t in e) && delete e[t],
        n
    }
    ,
    e.object.add = function(t, n, o) {
        if (null !== t && n in t)
            throw Error('The object already contains the key "' + n + '"');
        e.object.set(t, n, o)
    }
    ,
    e.object.get = function(e, t, n) {
        return null !== e && t in e ? e[t] : n
    }
    ,
    e.object.set = function(e, t, n) {
        e[t] = n
    }
    ,
    e.object.setIfUndefined = function(e, t, n) {
        return t in e ? e[t] : e[t] = n
    }
    ,
    e.object.setWithReturnValueIfNotSet = function(e, t, n) {
        return t in e ? e[t] : (n = n(),
        e[t] = n)
    }
    ,
    e.object.equals = function(e, t) {
        for (const n in e)
            if (!(n in t) || e[n] !== t[n])
                return !1;
        for (const n in t)
            if (!(n in e))
                return !1;
        return !0
    }
    ,
    e.object.clone = function(e) {
        const t = {};
        for (const n in e)
            t[n] = e[n];
        return t
    }
    ,
    e.object.unsafeClone = function(t) {
        var n = e.typeOf(t);
        if ("object" == n || "array" == n) {
            if (e.isFunction(t.clone))
                return t.clone();
            n = "array" == n ? [] : {};
            for (const o in t)
                n[o] = e.object.unsafeClone(t[o]);
            return n
        }
        return t
    }
    ,
    e.object.transpose = function(e) {
        const t = {};
        for (const n in e)
            t[e[n]] = n;
        return t
    }
    ,
    e.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
    e.object.extend = function(t, n) {
        let o, r;
        for (let n = 1; n < arguments.length; n++) {
            for (o in r = arguments[n])
                t[o] = r[o];
            for (let n = 0; n < e.object.PROTOTYPE_FIELDS_.length; n++)
                o = e.object.PROTOTYPE_FIELDS_[n],
                Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o])
        }
    }
    ,
    e.object.create = function(t) {
        const n = arguments.length;
        if (1 == n && e.isArray(arguments[0]))
            return e.object.create.apply(null, arguments[0]);
        if (n % 2)
            throw Error("Uneven number of arguments");
        const o = {};
        for (let e = 0; e < n; e += 2)
            o[arguments[e]] = arguments[e + 1];
        return o
    }
    ,
    e.object.createSet = function(t) {
        const n = arguments.length;
        if (1 == n && e.isArray(arguments[0]))
            return e.object.createSet.apply(null, arguments[0]);
        const o = {};
        for (let e = 0; e < n; e++)
            o[arguments[e]] = !0;
        return o
    }
    ,
    e.object.createImmutableView = function(e) {
        let t = e;
        return Object.isFrozen && !Object.isFrozen(e) && (t = Object.create(e),
        Object.freeze(t)),
        t
    }
    ,
    e.object.isImmutableView = function(e) {
        return !!Object.isFrozen && Object.isFrozen(e)
    }
    ,
    e.object.getAllPropertyNames = function(t, n, o) {
        if (!t)
            return [];
        if (!Object.getOwnPropertyNames || !Object.getPrototypeOf)
            return e.object.getKeys(t);
        const r = {};
        for (; t && (t !== Object.prototype || n) && (t !== Function.prototype || o); ) {
            const e = Object.getOwnPropertyNames(t);
            for (let t = 0; t < e.length; t++)
                r[e[t]] = !0;
            t = Object.getPrototypeOf(t)
        }
        return e.object.getKeys(r)
    }
    ,
    e.object.getSuperClass = function(e) {
        return (e = Object.getPrototypeOf(e.prototype)) && e.constructor
    }
    ,
    e.labs.userAgent.browser = {},
    e.labs.userAgent.browser.matchOpera_ = function() {
        return e.labs.userAgent.util.matchUserAgent("Opera")
    }
    ,
    e.labs.userAgent.browser.matchIE_ = function() {
        return e.labs.userAgent.util.matchUserAgent("Trident") || e.labs.userAgent.util.matchUserAgent("MSIE")
    }
    ,
    e.labs.userAgent.browser.matchEdgeHtml_ = function() {
        return e.labs.userAgent.util.matchUserAgent("Edge")
    }
    ,
    e.labs.userAgent.browser.matchEdgeChromium_ = function() {
        return e.labs.userAgent.util.matchUserAgent("Edg/")
    }
    ,
    e.labs.userAgent.browser.matchOperaChromium_ = function() {
        return e.labs.userAgent.util.matchUserAgent("OPR")
    }
    ,
    e.labs.userAgent.browser.matchFirefox_ = function() {
        return e.labs.userAgent.util.matchUserAgent("Firefox") || e.labs.userAgent.util.matchUserAgent("FxiOS")
    }
    ,
    e.labs.userAgent.browser.matchSafari_ = function() {
        return e.labs.userAgent.util.matchUserAgent("Safari") && !(e.labs.userAgent.browser.matchChrome_() || e.labs.userAgent.browser.matchCoast_() || e.labs.userAgent.browser.matchOpera_() || e.labs.userAgent.browser.matchEdgeHtml_() || e.labs.userAgent.browser.matchEdgeChromium_() || e.labs.userAgent.browser.matchOperaChromium_() || e.labs.userAgent.browser.matchFirefox_() || e.labs.userAgent.browser.isSilk() || e.labs.userAgent.util.matchUserAgent("Android"))
    }
    ,
    e.labs.userAgent.browser.matchCoast_ = function() {
        return e.labs.userAgent.util.matchUserAgent("Coast")
    }
    ,
    e.labs.userAgent.browser.matchIosWebview_ = function() {
        return (e.labs.userAgent.util.matchUserAgent("iPad") || e.labs.userAgent.util.matchUserAgent("iPhone")) && !e.labs.userAgent.browser.matchSafari_() && !e.labs.userAgent.browser.matchChrome_() && !e.labs.userAgent.browser.matchCoast_() && !e.labs.userAgent.browser.matchFirefox_() && e.labs.userAgent.util.matchUserAgent("AppleWebKit")
    }
    ,
    e.labs.userAgent.browser.matchChrome_ = function() {
        return (e.labs.userAgent.util.matchUserAgent("Chrome") || e.labs.userAgent.util.matchUserAgent("CriOS")) && !e.labs.userAgent.browser.matchEdgeHtml_()
    }
    ,
    e.labs.userAgent.browser.matchAndroidBrowser_ = function() {
        return e.labs.userAgent.util.matchUserAgent("Android") && !(e.labs.userAgent.browser.isChrome() || e.labs.userAgent.browser.isFirefox() || e.labs.userAgent.browser.isOpera() || e.labs.userAgent.browser.isSilk())
    }
    ,
    e.labs.userAgent.browser.isOpera = e.labs.userAgent.browser.matchOpera_,
    e.labs.userAgent.browser.isIE = e.labs.userAgent.browser.matchIE_,
    e.labs.userAgent.browser.isEdge = e.labs.userAgent.browser.matchEdgeHtml_,
    e.labs.userAgent.browser.isEdgeChromium = e.labs.userAgent.browser.matchEdgeChromium_,
    e.labs.userAgent.browser.isOperaChromium = e.labs.userAgent.browser.matchOperaChromium_,
    e.labs.userAgent.browser.isFirefox = e.labs.userAgent.browser.matchFirefox_,
    e.labs.userAgent.browser.isSafari = e.labs.userAgent.browser.matchSafari_,
    e.labs.userAgent.browser.isCoast = e.labs.userAgent.browser.matchCoast_,
    e.labs.userAgent.browser.isIosWebview = e.labs.userAgent.browser.matchIosWebview_,
    e.labs.userAgent.browser.isChrome = e.labs.userAgent.browser.matchChrome_,
    e.labs.userAgent.browser.isAndroidBrowser = e.labs.userAgent.browser.matchAndroidBrowser_,
    e.labs.userAgent.browser.isSilk = function() {
        return e.labs.userAgent.util.matchUserAgent("Silk")
    }
    ,
    e.labs.userAgent.browser.getVersion = function() {
        function t(t) {
            return t = e.array.find(t, r),
            o[t] || ""
        }
        var n = e.labs.userAgent.util.getUserAgent();
        if (e.labs.userAgent.browser.isIE())
            return e.labs.userAgent.browser.getIEVersion_(n);
        n = e.labs.userAgent.util.extractVersionTuples(n);
        var o = {};
        e.array.forEach(n, function(e) {
            o[e[0]] = e[1]
        });
        var r = e.partial(e.object.containsKey, o);
        return e.labs.userAgent.browser.isOpera() ? t(["Version", "Opera"]) : e.labs.userAgent.browser.isEdge() ? t(["Edge"]) : e.labs.userAgent.browser.isEdgeChromium() ? t(["Edg"]) : e.labs.userAgent.browser.isChrome() ? t(["Chrome", "CriOS"]) : (n = n[2]) && n[1] || ""
    }
    ,
    e.labs.userAgent.browser.isVersionOrHigher = function(t) {
        return 0 <= e.string.internal.compareVersions(e.labs.userAgent.browser.getVersion(), t)
    }
    ,
    e.labs.userAgent.browser.getIEVersion_ = function(e) {
        var t = /rv: *([\d\.]*)/.exec(e);
        if (t && t[1])
            return t[1];
        t = "";
        var n = /MSIE +([\d\.]+)/.exec(e);
        if (n && n[1])
            if (e = /Trident\/(\d.\d)/.exec(e),
            "7.0" == n[1])
                if (e && e[1])
                    switch (e[1]) {
                    case "4.0":
                        t = "8.0";
                        break;
                    case "5.0":
                        t = "9.0";
                        break;
                    case "6.0":
                        t = "10.0";
                        break;
                    case "7.0":
                        t = "11.0"
                    }
                else
                    t = "7.0";
            else
                t = n[1];
        return t
    }
    ,
    e.dom.asserts = {},
    e.dom.asserts.assertIsLocation = function(t) {
        if (e.asserts.ENABLE_ASSERTS) {
            var n = e.dom.asserts.getWindow_(t);
            n && (!t || !(t instanceof n.Location) && t instanceof n.Element) && e.asserts.fail("Argument is not a Location (or a non-Element mock); got: %s", e.dom.asserts.debugStringForType_(t))
        }
        return t
    }
    ,
    e.dom.asserts.assertIsElementType_ = function(t, n) {
        if (e.asserts.ENABLE_ASSERTS) {
            var o = e.dom.asserts.getWindow_(t);
            o && void 0 !== o[n] && (t && (t instanceof o[n] || !(t instanceof o.Location || t instanceof o.Element)) || e.asserts.fail("Argument is not a %s (or a non-Element, non-Location mock); got: %s", n, e.dom.asserts.debugStringForType_(t)))
        }
        return t
    }
    ,
    e.dom.asserts.assertIsHTMLAnchorElement = function(t) {
        return e.dom.asserts.assertIsElementType_(t, "HTMLAnchorElement")
    }
    ,
    e.dom.asserts.assertIsHTMLButtonElement = function(t) {
        return e.dom.asserts.assertIsElementType_(t, "HTMLButtonElement")
    }
    ,
    e.dom.asserts.assertIsHTMLLinkElement = function(t) {
        return e.dom.asserts.assertIsElementType_(t, "HTMLLinkElement")
    }
    ,
    e.dom.asserts.assertIsHTMLImageElement = function(t) {
        return e.dom.asserts.assertIsElementType_(t, "HTMLImageElement")
    }
    ,
    e.dom.asserts.assertIsHTMLAudioElement = function(t) {
        return e.dom.asserts.assertIsElementType_(t, "HTMLAudioElement")
    }
    ,
    e.dom.asserts.assertIsHTMLVideoElement = function(t) {
        return e.dom.asserts.assertIsElementType_(t, "HTMLVideoElement")
    }
    ,
    e.dom.asserts.assertIsHTMLInputElement = function(t) {
        return e.dom.asserts.assertIsElementType_(t, "HTMLInputElement")
    }
    ,
    e.dom.asserts.assertIsHTMLTextAreaElement = function(t) {
        return e.dom.asserts.assertIsElementType_(t, "HTMLTextAreaElement")
    }
    ,
    e.dom.asserts.assertIsHTMLCanvasElement = function(t) {
        return e.dom.asserts.assertIsElementType_(t, "HTMLCanvasElement")
    }
    ,
    e.dom.asserts.assertIsHTMLEmbedElement = function(t) {
        return e.dom.asserts.assertIsElementType_(t, "HTMLEmbedElement")
    }
    ,
    e.dom.asserts.assertIsHTMLFormElement = function(t) {
        return e.dom.asserts.assertIsElementType_(t, "HTMLFormElement")
    }
    ,
    e.dom.asserts.assertIsHTMLFrameElement = function(t) {
        return e.dom.asserts.assertIsElementType_(t, "HTMLFrameElement")
    }
    ,
    e.dom.asserts.assertIsHTMLIFrameElement = function(t) {
        return e.dom.asserts.assertIsElementType_(t, "HTMLIFrameElement")
    }
    ,
    e.dom.asserts.assertIsHTMLObjectElement = function(t) {
        return e.dom.asserts.assertIsElementType_(t, "HTMLObjectElement")
    }
    ,
    e.dom.asserts.assertIsHTMLScriptElement = function(t) {
        return e.dom.asserts.assertIsElementType_(t, "HTMLScriptElement")
    }
    ,
    e.dom.asserts.debugStringForType_ = function(t) {
        if (!e.isObject(t))
            return void 0 === t ? "undefined" : null === t ? "null" : typeof t;
        try {
            return t.constructor.displayName || t.constructor.name || Object.prototype.toString.call(t)
        } catch (e) {
            return "<object could not be stringified>"
        }
    }
    ,
    e.dom.asserts.getWindow_ = function(t) {
        try {
            var n = t && t.ownerDocument
              , o = n && (n.defaultView || n.parentWindow);
            if ((o = o || e.global).Element && o.Location)
                return o
        } catch (e) {}
        return null
    }
    ,
    e.functions = {},
    e.functions.constant = function(e) {
        return function() {
            return e
        }
    }
    ,
    e.functions.FALSE = function() {
        return !1
    }
    ,
    e.functions.TRUE = function() {
        return !0
    }
    ,
    e.functions.NULL = function() {
        return null
    }
    ,
    e.functions.identity = function(e) {
        return e
    }
    ,
    e.functions.error = function(e) {
        return function() {
            throw Error(e)
        }
    }
    ,
    e.functions.fail = function(e) {
        return function() {
            throw e
        }
    }
    ,
    e.functions.lock = function(e, t) {
        return t = t || 0,
        function() {
            return e.apply(this, Array.prototype.slice.call(arguments, 0, t))
        }
    }
    ,
    e.functions.nth = function(e) {
        return function() {
            return arguments[e]
        }
    }
    ,
    e.functions.partialRight = function(e, t) {
        const n = Array.prototype.slice.call(arguments, 1);
        return function() {
            const t = Array.prototype.slice.call(arguments);
            return t.push.apply(t, n),
            e.apply(this, t)
        }
    }
    ,
    e.functions.withReturnValue = function(t, n) {
        return e.functions.sequence(t, e.functions.constant(n))
    }
    ,
    e.functions.equalTo = function(e, t) {
        return function(n) {
            return t ? e == n : e === n
        }
    }
    ,
    e.functions.compose = function(e, t) {
        const n = arguments
          , o = n.length;
        return function() {
            let e;
            o && (e = n[o - 1].apply(this, arguments));
            for (let t = o - 2; 0 <= t; t--)
                e = n[t].call(this, e);
            return e
        }
    }
    ,
    e.functions.sequence = function(e) {
        const t = arguments
          , n = t.length;
        return function() {
            let e;
            for (let o = 0; o < n; o++)
                e = t[o].apply(this, arguments);
            return e
        }
    }
    ,
    e.functions.and = function(e) {
        const t = arguments
          , n = t.length;
        return function() {
            for (let e = 0; e < n; e++)
                if (!t[e].apply(this, arguments))
                    return !1;
            return !0
        }
    }
    ,
    e.functions.or = function(e) {
        const t = arguments
          , n = t.length;
        return function() {
            for (let e = 0; e < n; e++)
                if (t[e].apply(this, arguments))
                    return !0;
            return !1
        }
    }
    ,
    e.functions.not = function(e) {
        return function() {
            return !e.apply(this, arguments)
        }
    }
    ,
    e.functions.create = function(e, t) {
        function n() {}
        n.prototype = e.prototype;
        const o = new n;
        return e.apply(o, Array.prototype.slice.call(arguments, 1)),
        o
    }
    ,
    e.functions.CACHE_RETURN_VALUE = !0,
    e.functions.cacheReturnValue = function(t) {
        let n, o = !1;
        return function() {
            return e.functions.CACHE_RETURN_VALUE ? (o || (n = t(),
            o = !0),
            n) : t()
        }
    }
    ,
    e.functions.once = function(e) {
        let t = e;
        return function() {
            if (t) {
                const e = t;
                t = null,
                e()
            }
        }
    }
    ,
    e.functions.debounce = function(t, n, o) {
        let r = 0;
        return function(i) {
            e.global.clearTimeout(r);
            const s = arguments;
            r = e.global.setTimeout(function() {
                t.apply(o, s)
            }, n)
        }
    }
    ,
    e.functions.throttle = function(t, n, o) {
        function r() {
            s = e.global.setTimeout(i, n),
            t.apply(o, l)
        }
        function i() {
            s = 0,
            a && (a = !1,
            r())
        }
        let s = 0
          , a = !1
          , l = [];
        return function(e) {
            l = arguments,
            s ? a = !0 : r()
        }
    }
    ,
    e.functions.rateLimit = function(t, n, o) {
        function r() {
            i = 0
        }
        let i = 0;
        return function(s) {
            i || (i = e.global.setTimeout(r, n),
            t.apply(o, arguments))
        }
    }
    ,
    e.dom.HtmlElement = function() {}
    ,
    e.dom.TagName = function(e) {
        this.tagName_ = e
    }
    ,
    e.dom.TagName.prototype.toString = function() {
        return this.tagName_
    }
    ,
    e.dom.TagName.A = new e.dom.TagName("A"),
    e.dom.TagName.ABBR = new e.dom.TagName("ABBR"),
    e.dom.TagName.ACRONYM = new e.dom.TagName("ACRONYM"),
    e.dom.TagName.ADDRESS = new e.dom.TagName("ADDRESS"),
    e.dom.TagName.APPLET = new e.dom.TagName("APPLET"),
    e.dom.TagName.AREA = new e.dom.TagName("AREA"),
    e.dom.TagName.ARTICLE = new e.dom.TagName("ARTICLE"),
    e.dom.TagName.ASIDE = new e.dom.TagName("ASIDE"),
    e.dom.TagName.AUDIO = new e.dom.TagName("AUDIO"),
    e.dom.TagName.B = new e.dom.TagName("B"),
    e.dom.TagName.BASE = new e.dom.TagName("BASE"),
    e.dom.TagName.BASEFONT = new e.dom.TagName("BASEFONT"),
    e.dom.TagName.BDI = new e.dom.TagName("BDI"),
    e.dom.TagName.BDO = new e.dom.TagName("BDO"),
    e.dom.TagName.BIG = new e.dom.TagName("BIG"),
    e.dom.TagName.BLOCKQUOTE = new e.dom.TagName("BLOCKQUOTE"),
    e.dom.TagName.BODY = new e.dom.TagName("BODY"),
    e.dom.TagName.BR = new e.dom.TagName("BR"),
    e.dom.TagName.BUTTON = new e.dom.TagName("BUTTON"),
    e.dom.TagName.CANVAS = new e.dom.TagName("CANVAS"),
    e.dom.TagName.CAPTION = new e.dom.TagName("CAPTION"),
    e.dom.TagName.CENTER = new e.dom.TagName("CENTER"),
    e.dom.TagName.CITE = new e.dom.TagName("CITE"),
    e.dom.TagName.CODE = new e.dom.TagName("CODE"),
    e.dom.TagName.COL = new e.dom.TagName("COL"),
    e.dom.TagName.COLGROUP = new e.dom.TagName("COLGROUP"),
    e.dom.TagName.COMMAND = new e.dom.TagName("COMMAND"),
    e.dom.TagName.DATA = new e.dom.TagName("DATA"),
    e.dom.TagName.DATALIST = new e.dom.TagName("DATALIST"),
    e.dom.TagName.DD = new e.dom.TagName("DD"),
    e.dom.TagName.DEL = new e.dom.TagName("DEL"),
    e.dom.TagName.DETAILS = new e.dom.TagName("DETAILS"),
    e.dom.TagName.DFN = new e.dom.TagName("DFN"),
    e.dom.TagName.DIALOG = new e.dom.TagName("DIALOG"),
    e.dom.TagName.DIR = new e.dom.TagName("DIR"),
    e.dom.TagName.DIV = new e.dom.TagName("DIV"),
    e.dom.TagName.DL = new e.dom.TagName("DL"),
    e.dom.TagName.DT = new e.dom.TagName("DT"),
    e.dom.TagName.EM = new e.dom.TagName("EM"),
    e.dom.TagName.EMBED = new e.dom.TagName("EMBED"),
    e.dom.TagName.FIELDSET = new e.dom.TagName("FIELDSET"),
    e.dom.TagName.FIGCAPTION = new e.dom.TagName("FIGCAPTION"),
    e.dom.TagName.FIGURE = new e.dom.TagName("FIGURE"),
    e.dom.TagName.FONT = new e.dom.TagName("FONT"),
    e.dom.TagName.FOOTER = new e.dom.TagName("FOOTER"),
    e.dom.TagName.FORM = new e.dom.TagName("FORM"),
    e.dom.TagName.FRAME = new e.dom.TagName("FRAME"),
    e.dom.TagName.FRAMESET = new e.dom.TagName("FRAMESET"),
    e.dom.TagName.H1 = new e.dom.TagName("H1"),
    e.dom.TagName.H2 = new e.dom.TagName("H2"),
    e.dom.TagName.H3 = new e.dom.TagName("H3"),
    e.dom.TagName.H4 = new e.dom.TagName("H4"),
    e.dom.TagName.H5 = new e.dom.TagName("H5"),
    e.dom.TagName.H6 = new e.dom.TagName("H6"),
    e.dom.TagName.HEAD = new e.dom.TagName("HEAD"),
    e.dom.TagName.HEADER = new e.dom.TagName("HEADER"),
    e.dom.TagName.HGROUP = new e.dom.TagName("HGROUP"),
    e.dom.TagName.HR = new e.dom.TagName("HR"),
    e.dom.TagName.HTML = new e.dom.TagName("HTML"),
    e.dom.TagName.I = new e.dom.TagName("I"),
    e.dom.TagName.IFRAME = new e.dom.TagName("IFRAME"),
    e.dom.TagName.IMG = new e.dom.TagName("IMG"),
    e.dom.TagName.INPUT = new e.dom.TagName("INPUT"),
    e.dom.TagName.INS = new e.dom.TagName("INS"),
    e.dom.TagName.ISINDEX = new e.dom.TagName("ISINDEX"),
    e.dom.TagName.KBD = new e.dom.TagName("KBD"),
    e.dom.TagName.KEYGEN = new e.dom.TagName("KEYGEN"),
    e.dom.TagName.LABEL = new e.dom.TagName("LABEL"),
    e.dom.TagName.LEGEND = new e.dom.TagName("LEGEND"),
    e.dom.TagName.LI = new e.dom.TagName("LI"),
    e.dom.TagName.LINK = new e.dom.TagName("LINK"),
    e.dom.TagName.MAIN = new e.dom.TagName("MAIN"),
    e.dom.TagName.MAP = new e.dom.TagName("MAP"),
    e.dom.TagName.MARK = new e.dom.TagName("MARK"),
    e.dom.TagName.MATH = new e.dom.TagName("MATH"),
    e.dom.TagName.MENU = new e.dom.TagName("MENU"),
    e.dom.TagName.MENUITEM = new e.dom.TagName("MENUITEM"),
    e.dom.TagName.META = new e.dom.TagName("META"),
    e.dom.TagName.METER = new e.dom.TagName("METER"),
    e.dom.TagName.NAV = new e.dom.TagName("NAV"),
    e.dom.TagName.NOFRAMES = new e.dom.TagName("NOFRAMES"),
    e.dom.TagName.NOSCRIPT = new e.dom.TagName("NOSCRIPT"),
    e.dom.TagName.OBJECT = new e.dom.TagName("OBJECT"),
    e.dom.TagName.OL = new e.dom.TagName("OL"),
    e.dom.TagName.OPTGROUP = new e.dom.TagName("OPTGROUP"),
    e.dom.TagName.OPTION = new e.dom.TagName("OPTION"),
    e.dom.TagName.OUTPUT = new e.dom.TagName("OUTPUT"),
    e.dom.TagName.P = new e.dom.TagName("P"),
    e.dom.TagName.PARAM = new e.dom.TagName("PARAM"),
    e.dom.TagName.PICTURE = new e.dom.TagName("PICTURE"),
    e.dom.TagName.PRE = new e.dom.TagName("PRE"),
    e.dom.TagName.PROGRESS = new e.dom.TagName("PROGRESS"),
    e.dom.TagName.Q = new e.dom.TagName("Q"),
    e.dom.TagName.RP = new e.dom.TagName("RP"),
    e.dom.TagName.RT = new e.dom.TagName("RT"),
    e.dom.TagName.RTC = new e.dom.TagName("RTC"),
    e.dom.TagName.RUBY = new e.dom.TagName("RUBY"),
    e.dom.TagName.S = new e.dom.TagName("S"),
    e.dom.TagName.SAMP = new e.dom.TagName("SAMP"),
    e.dom.TagName.SCRIPT = new e.dom.TagName("SCRIPT"),
    e.dom.TagName.SECTION = new e.dom.TagName("SECTION"),
    e.dom.TagName.SELECT = new e.dom.TagName("SELECT"),
    e.dom.TagName.SMALL = new e.dom.TagName("SMALL"),
    e.dom.TagName.SOURCE = new e.dom.TagName("SOURCE"),
    e.dom.TagName.SPAN = new e.dom.TagName("SPAN"),
    e.dom.TagName.STRIKE = new e.dom.TagName("STRIKE"),
    e.dom.TagName.STRONG = new e.dom.TagName("STRONG"),
    e.dom.TagName.STYLE = new e.dom.TagName("STYLE"),
    e.dom.TagName.SUB = new e.dom.TagName("SUB"),
    e.dom.TagName.SUMMARY = new e.dom.TagName("SUMMARY"),
    e.dom.TagName.SUP = new e.dom.TagName("SUP"),
    e.dom.TagName.SVG = new e.dom.TagName("SVG"),
    e.dom.TagName.TABLE = new e.dom.TagName("TABLE"),
    e.dom.TagName.TBODY = new e.dom.TagName("TBODY"),
    e.dom.TagName.TD = new e.dom.TagName("TD"),
    e.dom.TagName.TEMPLATE = new e.dom.TagName("TEMPLATE"),
    e.dom.TagName.TEXTAREA = new e.dom.TagName("TEXTAREA"),
    e.dom.TagName.TFOOT = new e.dom.TagName("TFOOT"),
    e.dom.TagName.TH = new e.dom.TagName("TH"),
    e.dom.TagName.THEAD = new e.dom.TagName("THEAD"),
    e.dom.TagName.TIME = new e.dom.TagName("TIME"),
    e.dom.TagName.TITLE = new e.dom.TagName("TITLE"),
    e.dom.TagName.TR = new e.dom.TagName("TR"),
    e.dom.TagName.TRACK = new e.dom.TagName("TRACK"),
    e.dom.TagName.TT = new e.dom.TagName("TT"),
    e.dom.TagName.U = new e.dom.TagName("U"),
    e.dom.TagName.UL = new e.dom.TagName("UL"),
    e.dom.TagName.VAR = new e.dom.TagName("VAR"),
    e.dom.TagName.VIDEO = new e.dom.TagName("VIDEO"),
    e.dom.TagName.WBR = new e.dom.TagName("WBR"),
    e.dom.tags = {},
    e.dom.tags.VOID_TAGS_ = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    },
    e.dom.tags.isVoidTag = function(t) {
        return !0 === e.dom.tags.VOID_TAGS_[t]
    }
    ,
    e.html = {},
    e.html.trustedtypes = {},
    e.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY = e.TRUSTED_TYPES_POLICY_NAME ? e.createTrustedTypesPolicy(e.TRUSTED_TYPES_POLICY_NAME + "#html") : null,
    e.string.TypedString = function() {}
    ,
    e.string.Const = function(t, n) {
        this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = t === e.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ && n || "",
        this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = e.string.Const.TYPE_MARKER_
    }
    ,
    e.string.Const.prototype.implementsGoogStringTypedString = !0,
    e.string.Const.prototype.getTypedStringValue = function() {
        return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_
    }
    ,
    e.DEBUG && (e.string.Const.prototype.toString = function() {
        return "Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}"
    }
    ),
    e.string.Const.unwrap = function(t) {
        return t instanceof e.string.Const && t.constructor === e.string.Const && t.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === e.string.Const.TYPE_MARKER_ ? t.stringConstValueWithSecurityContract__googStringSecurityPrivate_ : (e.asserts.fail("expected object of type Const, got '" + t + "'"),
        "type_error:Const")
    }
    ,
    e.string.Const.from = function(t) {
        return new e.string.Const(e.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_,t)
    }
    ,
    e.string.Const.TYPE_MARKER_ = {},
    e.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {},
    e.string.Const.EMPTY = e.string.Const.from(""),
    e.html.SafeScript = function() {
        this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = "",
        this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = e.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
    }
    ,
    e.html.SafeScript.prototype.implementsGoogStringTypedString = !0,
    e.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {},
    e.html.SafeScript.fromConstant = function(t) {
        return 0 === (t = e.string.Const.unwrap(t)).length ? e.html.SafeScript.EMPTY : e.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(t)
    }
    ,
    e.html.SafeScript.fromConstantAndArgs = function(t, n) {
        for (var o = [], r = 1; r < arguments.length; r++)
            o.push(e.html.SafeScript.stringify_(arguments[r]));
        return e.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("(" + e.string.Const.unwrap(t) + ")(" + o.join(", ") + ");")
    }
    ,
    e.html.SafeScript.fromJson = function(t) {
        return e.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(e.html.SafeScript.stringify_(t))
    }
    ,
    e.html.SafeScript.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString()
    }
    ,
    e.DEBUG && (e.html.SafeScript.prototype.toString = function() {
        return "SafeScript{" + this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + "}"
    }
    ),
    e.html.SafeScript.unwrap = function(t) {
        return e.html.SafeScript.unwrapTrustedScript(t).toString()
    }
    ,
    e.html.SafeScript.unwrapTrustedScript = function(t) {
        return t instanceof e.html.SafeScript && t.constructor === e.html.SafeScript && t.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === e.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? t.privateDoNotAccessOrElseSafeScriptWrappedValue_ : (e.asserts.fail("expected object of type SafeScript, got '" + t + "' of type " + e.typeOf(t)),
        "type_error:SafeScript")
    }
    ,
    e.html.SafeScript.stringify_ = function(e) {
        return JSON.stringify(e).replace(/</g, "\\x3c")
    }
    ,
    e.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse = function(t) {
        return (new e.html.SafeScript).initSecurityPrivateDoNotAccessOrElse_(t)
    }
    ,
    e.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(t) {
        return this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = e.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? e.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(t) : t,
        this
    }
    ,
    e.html.SafeScript.EMPTY = e.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(""),
    e.fs = {},
    e.fs.url = {},
    e.fs.url.createObjectUrl = function(t) {
        return e.fs.url.getUrlObject_().createObjectURL(t)
    }
    ,
    e.fs.url.revokeObjectUrl = function(t) {
        e.fs.url.getUrlObject_().revokeObjectURL(t)
    }
    ,
    e.fs.url.getUrlObject_ = function() {
        const t = e.fs.url.findUrlObject_();
        if (null != t)
            return t;
        throw Error("This browser doesn't seem to support blob URLs")
    }
    ,
    e.fs.url.findUrlObject_ = function() {
        return e.isDef(e.global.URL) && e.isDef(e.global.URL.createObjectURL) ? e.global.URL : e.isDef(e.global.webkitURL) && e.isDef(e.global.webkitURL.createObjectURL) ? e.global.webkitURL : e.isDef(e.global.createObjectURL) ? e.global : null
    }
    ,
    e.fs.url.browserSupportsObjectUrls = function() {
        return null != e.fs.url.findUrlObject_()
    }
    ,
    e.i18n = {},
    e.i18n.bidi = {},
    e.i18n.bidi.FORCE_RTL = !1,
    e.i18n.bidi.IS_RTL = e.i18n.bidi.FORCE_RTL || ("ar" == e.LOCALE.substring(0, 2).toLowerCase() || "fa" == e.LOCALE.substring(0, 2).toLowerCase() || "he" == e.LOCALE.substring(0, 2).toLowerCase() || "iw" == e.LOCALE.substring(0, 2).toLowerCase() || "ps" == e.LOCALE.substring(0, 2).toLowerCase() || "sd" == e.LOCALE.substring(0, 2).toLowerCase() || "ug" == e.LOCALE.substring(0, 2).toLowerCase() || "ur" == e.LOCALE.substring(0, 2).toLowerCase() || "yi" == e.LOCALE.substring(0, 2).toLowerCase()) && (2 == e.LOCALE.length || "-" == e.LOCALE.substring(2, 3) || "_" == e.LOCALE.substring(2, 3)) || 3 <= e.LOCALE.length && "ckb" == e.LOCALE.substring(0, 3).toLowerCase() && (3 == e.LOCALE.length || "-" == e.LOCALE.substring(3, 4) || "_" == e.LOCALE.substring(3, 4)) || 7 <= e.LOCALE.length && ("-" == e.LOCALE.substring(2, 3) || "_" == e.LOCALE.substring(2, 3)) && ("adlm" == e.LOCALE.substring(3, 7).toLowerCase() || "arab" == e.LOCALE.substring(3, 7).toLowerCase() || "hebr" == e.LOCALE.substring(3, 7).toLowerCase() || "nkoo" == e.LOCALE.substring(3, 7).toLowerCase() || "rohg" == e.LOCALE.substring(3, 7).toLowerCase() || "thaa" == e.LOCALE.substring(3, 7).toLowerCase()) || 8 <= e.LOCALE.length && ("-" == e.LOCALE.substring(3, 4) || "_" == e.LOCALE.substring(3, 4)) && ("adlm" == e.LOCALE.substring(4, 8).toLowerCase() || "arab" == e.LOCALE.substring(4, 8).toLowerCase() || "hebr" == e.LOCALE.substring(4, 8).toLowerCase() || "nkoo" == e.LOCALE.substring(4, 8).toLowerCase() || "rohg" == e.LOCALE.substring(4, 8).toLowerCase() || "thaa" == e.LOCALE.substring(4, 8).toLowerCase()),
    e.i18n.bidi.Format = {
        LRE: "‪",
        RLE: "‫",
        PDF: "‬",
        LRM: "‎",
        RLM: "‏"
    },
    e.i18n.bidi.Dir = {
        LTR: 1,
        RTL: -1,
        NEUTRAL: 0
    },
    e.i18n.bidi.RIGHT = "right",
    e.i18n.bidi.LEFT = "left",
    e.i18n.bidi.I18N_RIGHT = e.i18n.bidi.IS_RTL ? e.i18n.bidi.LEFT : e.i18n.bidi.RIGHT,
    e.i18n.bidi.I18N_LEFT = e.i18n.bidi.IS_RTL ? e.i18n.bidi.RIGHT : e.i18n.bidi.LEFT,
    e.i18n.bidi.toDir = function(t, n) {
        return "number" == typeof t ? 0 < t ? e.i18n.bidi.Dir.LTR : 0 > t ? e.i18n.bidi.Dir.RTL : n ? null : e.i18n.bidi.Dir.NEUTRAL : null == t ? null : t ? e.i18n.bidi.Dir.RTL : e.i18n.bidi.Dir.LTR
    }
    ,
    e.i18n.bidi.ltrChars_ = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ऀ-῿‎Ⰰ-\ud801\ud804-\ud839\ud83c-\udbff豈-﬜︀-﹯﻽-￿",
    e.i18n.bidi.rtlChars_ = "֑-ۯۺ-ࣿ‏\ud802-\ud803\ud83a-\ud83bיִ-﷿ﹰ-ﻼ",
    e.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g,
    e.i18n.bidi.stripHtmlIfNeeded_ = function(t, n) {
        return n ? t.replace(e.i18n.bidi.htmlSkipReg_, "") : t
    }
    ,
    e.i18n.bidi.rtlCharReg_ = new RegExp("[" + e.i18n.bidi.rtlChars_ + "]"),
    e.i18n.bidi.ltrCharReg_ = new RegExp("[" + e.i18n.bidi.ltrChars_ + "]"),
    e.i18n.bidi.hasAnyRtl = function(t, n) {
        return e.i18n.bidi.rtlCharReg_.test(e.i18n.bidi.stripHtmlIfNeeded_(t, n))
    }
    ,
    e.i18n.bidi.hasRtlChar = e.i18n.bidi.hasAnyRtl,
    e.i18n.bidi.hasAnyLtr = function(t, n) {
        return e.i18n.bidi.ltrCharReg_.test(e.i18n.bidi.stripHtmlIfNeeded_(t, n))
    }
    ,
    e.i18n.bidi.ltrRe_ = new RegExp("^[" + e.i18n.bidi.ltrChars_ + "]"),
    e.i18n.bidi.rtlRe_ = new RegExp("^[" + e.i18n.bidi.rtlChars_ + "]"),
    e.i18n.bidi.isRtlChar = function(t) {
        return e.i18n.bidi.rtlRe_.test(t)
    }
    ,
    e.i18n.bidi.isLtrChar = function(t) {
        return e.i18n.bidi.ltrRe_.test(t)
    }
    ,
    e.i18n.bidi.isNeutralChar = function(t) {
        return !e.i18n.bidi.isLtrChar(t) && !e.i18n.bidi.isRtlChar(t)
    }
    ,
    e.i18n.bidi.ltrDirCheckRe_ = new RegExp("^[^" + e.i18n.bidi.rtlChars_ + "]*[" + e.i18n.bidi.ltrChars_ + "]"),
    e.i18n.bidi.rtlDirCheckRe_ = new RegExp("^[^" + e.i18n.bidi.ltrChars_ + "]*[" + e.i18n.bidi.rtlChars_ + "]"),
    e.i18n.bidi.startsWithRtl = function(t, n) {
        return e.i18n.bidi.rtlDirCheckRe_.test(e.i18n.bidi.stripHtmlIfNeeded_(t, n))
    }
    ,
    e.i18n.bidi.isRtlText = e.i18n.bidi.startsWithRtl,
    e.i18n.bidi.startsWithLtr = function(t, n) {
        return e.i18n.bidi.ltrDirCheckRe_.test(e.i18n.bidi.stripHtmlIfNeeded_(t, n))
    }
    ,
    e.i18n.bidi.isLtrText = e.i18n.bidi.startsWithLtr,
    e.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/,
    e.i18n.bidi.isNeutralText = function(t, n) {
        return t = e.i18n.bidi.stripHtmlIfNeeded_(t, n),
        e.i18n.bidi.isRequiredLtrRe_.test(t) || !e.i18n.bidi.hasAnyLtr(t) && !e.i18n.bidi.hasAnyRtl(t)
    }
    ,
    e.i18n.bidi.ltrExitDirCheckRe_ = new RegExp("[" + e.i18n.bidi.ltrChars_ + "][^" + e.i18n.bidi.rtlChars_ + "]*$"),
    e.i18n.bidi.rtlExitDirCheckRe_ = new RegExp("[" + e.i18n.bidi.rtlChars_ + "][^" + e.i18n.bidi.ltrChars_ + "]*$"),
    e.i18n.bidi.endsWithLtr = function(t, n) {
        return e.i18n.bidi.ltrExitDirCheckRe_.test(e.i18n.bidi.stripHtmlIfNeeded_(t, n))
    }
    ,
    e.i18n.bidi.isLtrExitText = e.i18n.bidi.endsWithLtr,
    e.i18n.bidi.endsWithRtl = function(t, n) {
        return e.i18n.bidi.rtlExitDirCheckRe_.test(e.i18n.bidi.stripHtmlIfNeeded_(t, n))
    }
    ,
    e.i18n.bidi.isRtlExitText = e.i18n.bidi.endsWithRtl,
    e.i18n.bidi.rtlLocalesRe_ = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i,
    e.i18n.bidi.isRtlLanguage = function(t) {
        return e.i18n.bidi.rtlLocalesRe_.test(t)
    }
    ,
    e.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g,
    e.i18n.bidi.guardBracketInText = function(t, n) {
        return n = (void 0 === n ? e.i18n.bidi.hasAnyRtl(t) : n) ? e.i18n.bidi.Format.RLM : e.i18n.bidi.Format.LRM,
        t.replace(e.i18n.bidi.bracketGuardTextRe_, n + "$&" + n)
    }
    ,
    e.i18n.bidi.enforceRtlInHtml = function(e) {
        return "<" == e.charAt(0) ? e.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + e + "</span>"
    }
    ,
    e.i18n.bidi.enforceRtlInText = function(t) {
        return e.i18n.bidi.Format.RLE + t + e.i18n.bidi.Format.PDF
    }
    ,
    e.i18n.bidi.enforceLtrInHtml = function(e) {
        return "<" == e.charAt(0) ? e.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + e + "</span>"
    }
    ,
    e.i18n.bidi.enforceLtrInText = function(t) {
        return e.i18n.bidi.Format.LRE + t + e.i18n.bidi.Format.PDF
    }
    ,
    e.i18n.bidi.dimensionsRe_ = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g,
    e.i18n.bidi.leftRe_ = /left/gi,
    e.i18n.bidi.rightRe_ = /right/gi,
    e.i18n.bidi.tempRe_ = /%%%%/g,
    e.i18n.bidi.mirrorCSS = function(t) {
        return t.replace(e.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2").replace(e.i18n.bidi.leftRe_, "%%%%").replace(e.i18n.bidi.rightRe_, e.i18n.bidi.LEFT).replace(e.i18n.bidi.tempRe_, e.i18n.bidi.RIGHT)
    }
    ,
    e.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g,
    e.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g,
    e.i18n.bidi.normalizeHebrewQuote = function(t) {
        return t.replace(e.i18n.bidi.doubleQuoteSubstituteRe_, "$1״").replace(e.i18n.bidi.singleQuoteSubstituteRe_, "$1׳")
    }
    ,
    e.i18n.bidi.wordSeparatorRe_ = /\s+/,
    e.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/,
    e.i18n.bidi.rtlDetectionThreshold_ = .4,
    e.i18n.bidi.estimateDirection = function(t, n) {
        let o = 0
          , r = 0
          , i = !1;
        for (t = e.i18n.bidi.stripHtmlIfNeeded_(t, n).split(e.i18n.bidi.wordSeparatorRe_),
        n = 0; n < t.length; n++) {
            const s = t[n];
            e.i18n.bidi.startsWithRtl(s) ? (o++,
            r++) : e.i18n.bidi.isRequiredLtrRe_.test(s) ? i = !0 : e.i18n.bidi.hasAnyLtr(s) ? r++ : e.i18n.bidi.hasNumeralsRe_.test(s) && (i = !0)
        }
        return 0 == r ? i ? e.i18n.bidi.Dir.LTR : e.i18n.bidi.Dir.NEUTRAL : o / r > e.i18n.bidi.rtlDetectionThreshold_ ? e.i18n.bidi.Dir.RTL : e.i18n.bidi.Dir.LTR
    }
    ,
    e.i18n.bidi.detectRtlDirectionality = function(t, n) {
        return e.i18n.bidi.estimateDirection(t, n) == e.i18n.bidi.Dir.RTL
    }
    ,
    e.i18n.bidi.setElementDirAndAlign = function(t, n) {
        t && (n = e.i18n.bidi.toDir(n)) && (t.style.textAlign = n == e.i18n.bidi.Dir.RTL ? e.i18n.bidi.RIGHT : e.i18n.bidi.LEFT,
        t.dir = n == e.i18n.bidi.Dir.RTL ? "rtl" : "ltr")
    }
    ,
    e.i18n.bidi.setElementDirByTextDirectionality = function(t, n) {
        switch (e.i18n.bidi.estimateDirection(n)) {
        case e.i18n.bidi.Dir.LTR:
            t.dir = "ltr";
            break;
        case e.i18n.bidi.Dir.RTL:
            t.dir = "rtl";
            break;
        default:
            t.removeAttribute("dir")
        }
    }
    ,
    e.i18n.bidi.DirectionalString = function() {}
    ,
    e.html.TrustedResourceUrl = function(t, n, o) {
        this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = t === e.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ && n || "",
        this.trustedURL_ = t === e.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ && o || null,
        this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = e.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
    }
    ,
    e.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = !0,
    e.html.TrustedResourceUrl.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString()
    }
    ,
    e.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString = !0,
    e.html.TrustedResourceUrl.prototype.getDirection = function() {
        return e.i18n.bidi.Dir.LTR
    }
    ,
    e.html.TrustedResourceUrl.prototype.cloneWithParams = function(t, n) {
        var o = e.html.TrustedResourceUrl.unwrap(this)
          , r = (o = e.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(o))[3] || "";
        return e.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(o[1] + e.html.TrustedResourceUrl.stringifyParams_("?", o[2] || "", t) + e.html.TrustedResourceUrl.stringifyParams_("#", r, n))
    }
    ,
    e.DEBUG && (e.html.TrustedResourceUrl.prototype.toString = function() {
        return "TrustedResourceUrl{" + this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + "}"
    }
    ),
    e.html.TrustedResourceUrl.unwrap = function(t) {
        return e.html.TrustedResourceUrl.unwrapTrustedScriptURL(t).toString()
    }
    ,
    e.html.TrustedResourceUrl.unwrapTrustedScriptURL = function(t) {
        return t instanceof e.html.TrustedResourceUrl && t.constructor === e.html.TrustedResourceUrl && t.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === e.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? t.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ : (e.asserts.fail("expected object of type TrustedResourceUrl, got '" + t + "' of type " + e.typeOf(t)),
        "type_error:TrustedResourceUrl")
    }
    ,
    e.html.TrustedResourceUrl.unwrapTrustedURL = function(t) {
        return t.trustedURL_ ? t.trustedURL_ : e.html.TrustedResourceUrl.unwrap(t)
    }
    ,
    e.html.TrustedResourceUrl.format = function(t, n) {
        var o = e.string.Const.unwrap(t);
        if (!e.html.TrustedResourceUrl.BASE_URL_.test(o))
            throw Error("Invalid TrustedResourceUrl format: " + o);
        return t = o.replace(e.html.TrustedResourceUrl.FORMAT_MARKER_, function(t, r) {
            if (!Object.prototype.hasOwnProperty.call(n, r))
                throw Error('Found marker, "' + r + '", in format string, "' + o + '", but no valid label mapping found in args: ' + JSON.stringify(n));
            return (t = n[r])instanceof e.string.Const ? e.string.Const.unwrap(t) : encodeURIComponent(String(t))
        }),
        e.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(t)
    }
    ,
    e.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g,
    e.html.TrustedResourceUrl.BASE_URL_ = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
    e.html.TrustedResourceUrl.URL_PARAM_PARSER_ = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
    e.html.TrustedResourceUrl.formatWithParams = function(t, n, o, r) {
        return e.html.TrustedResourceUrl.format(t, n).cloneWithParams(o, r)
    }
    ,
    e.html.TrustedResourceUrl.fromConstant = function(t) {
        return e.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(e.string.Const.unwrap(t))
    }
    ,
    e.html.TrustedResourceUrl.fromConstants = function(t) {
        for (var n = "", o = 0; o < t.length; o++)
            n += e.string.Const.unwrap(t[o]);
        return e.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(n)
    }
    ,
    e.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {},
    e.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse = function(t) {
        var n = e.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? e.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(t) : t;
        return t = e.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? e.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createURL(t) : null,
        new e.html.TrustedResourceUrl(e.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_,n,t)
    }
    ,
    e.html.TrustedResourceUrl.stringifyParams_ = function(t, n, o) {
        if (null == o)
            return n;
        if (e.isString(o))
            return o ? t + encodeURIComponent(o) : "";
        for (var r in o) {
            var i = o[r];
            i = e.isArray(i) ? i : [i];
            for (var s = 0; s < i.length; s++) {
                var a = i[s];
                null != a && (n || (n = t),
                n += (n.length > t.length ? "&" : "") + encodeURIComponent(r) + "=" + encodeURIComponent(String(a)))
            }
        }
        return n
    }
    ,
    e.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {},
    e.html.SafeUrl = function(t, n) {
        this.privateDoNotAccessOrElseSafeUrlWrappedValue_ = t === e.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ && n || "",
        this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = e.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
    }
    ,
    e.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez",
    e.html.SafeUrl.prototype.implementsGoogStringTypedString = !0,
    e.html.SafeUrl.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString()
    }
    ,
    e.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString = !0,
    e.html.SafeUrl.prototype.getDirection = function() {
        return e.i18n.bidi.Dir.LTR
    }
    ,
    e.DEBUG && (e.html.SafeUrl.prototype.toString = function() {
        return "SafeUrl{" + this.privateDoNotAccessOrElseSafeUrlWrappedValue_ + "}"
    }
    ),
    e.html.SafeUrl.unwrap = function(t) {
        return e.html.SafeUrl.unwrapTrustedURL(t).toString()
    }
    ,
    e.html.SafeUrl.unwrapTrustedURL = function(t) {
        return t instanceof e.html.SafeUrl && t.constructor === e.html.SafeUrl && t.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === e.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? t.privateDoNotAccessOrElseSafeUrlWrappedValue_ : (e.asserts.fail("expected object of type SafeUrl, got '" + t + "' of type " + e.typeOf(t)),
        "type_error:SafeUrl")
    }
    ,
    e.html.SafeUrl.fromConstant = function(t) {
        return e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e.string.Const.unwrap(t))
    }
    ,
    e.html.SAFE_MIME_TYPE_PATTERN_ = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i,
    e.html.SafeUrl.isSafeMimeType = function(t) {
        return e.html.SAFE_MIME_TYPE_PATTERN_.test(t)
    }
    ,
    e.html.SafeUrl.fromBlob = function(t) {
        return t = e.html.SAFE_MIME_TYPE_PATTERN_.test(t.type) ? e.fs.url.createObjectUrl(t) : e.html.SafeUrl.INNOCUOUS_STRING,
        e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
    }
    ,
    e.html.DATA_URL_PATTERN_ = /^data:([^,]*);base64,[a-z0-9+\/]+=*$/i,
    e.html.SafeUrl.fromDataUrl = function(t) {
        var n = (t = t.replace(/(%0A|%0D)/g, "")).match(e.html.DATA_URL_PATTERN_);
        return n = n && e.html.SAFE_MIME_TYPE_PATTERN_.test(n[1]),
        e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(n ? t : e.html.SafeUrl.INNOCUOUS_STRING)
    }
    ,
    e.html.SafeUrl.fromTelUrl = function(t) {
        return e.string.internal.caseInsensitiveStartsWith(t, "tel:") || (t = e.html.SafeUrl.INNOCUOUS_STRING),
        e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
    }
    ,
    e.html.SIP_URL_PATTERN_ = /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i,
    e.html.SafeUrl.fromSipUrl = function(t) {
        return e.html.SIP_URL_PATTERN_.test(decodeURIComponent(t)) || (t = e.html.SafeUrl.INNOCUOUS_STRING),
        e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
    }
    ,
    e.html.SafeUrl.fromFacebookMessengerUrl = function(t) {
        return e.string.internal.caseInsensitiveStartsWith(t, "fb-messenger://share") || (t = e.html.SafeUrl.INNOCUOUS_STRING),
        e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
    }
    ,
    e.html.SafeUrl.fromWhatsAppUrl = function(t) {
        return e.string.internal.caseInsensitiveStartsWith(t, "whatsapp://send") || (t = e.html.SafeUrl.INNOCUOUS_STRING),
        e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
    }
    ,
    e.html.SafeUrl.fromSmsUrl = function(t) {
        return e.string.internal.caseInsensitiveStartsWith(t, "sms:") && e.html.SafeUrl.isSmsUrlBodyValid_(t) || (t = e.html.SafeUrl.INNOCUOUS_STRING),
        e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
    }
    ,
    e.html.SafeUrl.isSmsUrlBodyValid_ = function(e) {
        var t = e.indexOf("#");
        if (0 < t && (e = e.substring(0, t)),
        !(t = e.match(/[?&]body=/gi)))
            return !0;
        if (1 < t.length)
            return !1;
        if (!(e = e.match(/[?&]body=([^&]*)/)[1]))
            return !0;
        try {
            decodeURIComponent(e)
        } catch (e) {
            return !1
        }
        return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(e)
    }
    ,
    e.html.SafeUrl.fromSshUrl = function(t) {
        return e.string.internal.caseInsensitiveStartsWith(t, "ssh://") || (t = e.html.SafeUrl.INNOCUOUS_STRING),
        e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
    }
    ,
    e.html.SafeUrl.sanitizeChromeExtensionUrl = function(t, n) {
        return e.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//, t, n)
    }
    ,
    e.html.SafeUrl.sanitizeFirefoxExtensionUrl = function(t, n) {
        return e.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//, t, n)
    }
    ,
    e.html.SafeUrl.sanitizeEdgeExtensionUrl = function(t, n) {
        return e.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//, t, n)
    }
    ,
    e.html.SafeUrl.sanitizeExtensionUrl_ = function(t, n, o) {
        return (t = t.exec(n)) ? (t = t[1],
        -1 == (o instanceof e.string.Const ? [e.string.Const.unwrap(o)] : o.map(function(t) {
            return e.string.Const.unwrap(t)
        })).indexOf(t) && (n = e.html.SafeUrl.INNOCUOUS_STRING)) : n = e.html.SafeUrl.INNOCUOUS_STRING,
        e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(n)
    }
    ,
    e.html.SafeUrl.fromTrustedResourceUrl = function(t) {
        return e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e.html.TrustedResourceUrl.unwrap(t))
    }
    ,
    e.html.SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    e.html.SafeUrl.SAFE_URL_PATTERN = e.html.SAFE_URL_PATTERN_,
    e.html.SafeUrl.sanitize = function(t) {
        return t instanceof e.html.SafeUrl ? t : (t = "object" == typeof t && t.implementsGoogStringTypedString ? t.getTypedStringValue() : String(t),
        e.html.SAFE_URL_PATTERN_.test(t) || (t = e.html.SafeUrl.INNOCUOUS_STRING),
        e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t))
    }
    ,
    e.html.SafeUrl.sanitizeAssertUnchanged = function(t, n) {
        return t instanceof e.html.SafeUrl ? t : (t = "object" == typeof t && t.implementsGoogStringTypedString ? t.getTypedStringValue() : String(t),
        n && /^data:/i.test(t) && (n = e.html.SafeUrl.fromDataUrl(t)).getTypedStringValue() == t ? n : (e.asserts.assert(e.html.SAFE_URL_PATTERN_.test(t), "%s does not match the safe URL pattern", t) || (t = e.html.SafeUrl.INNOCUOUS_STRING),
        e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)))
    }
    ,
    e.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {},
    e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function(t) {
        return new e.html.SafeUrl(e.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_,e.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? e.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createURL(t) : t)
    }
    ,
    e.html.SafeUrl.ABOUT_BLANK = e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank"),
    e.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {},
    e.html.SafeStyle = function() {
        this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = "",
        this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = e.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
    }
    ,
    e.html.SafeStyle.prototype.implementsGoogStringTypedString = !0,
    e.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {},
    e.html.SafeStyle.fromConstant = function(t) {
        return 0 === (t = e.string.Const.unwrap(t)).length ? e.html.SafeStyle.EMPTY : (e.asserts.assert(e.string.internal.endsWith(t, ";"), "Last character of style string is not ';': " + t),
        e.asserts.assert(e.string.internal.contains(t, ":"), "Style string must contain at least one ':', to specify a \"name: value\" pair: " + t),
        e.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(t))
    }
    ,
    e.html.SafeStyle.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeStyleWrappedValue_
    }
    ,
    e.DEBUG && (e.html.SafeStyle.prototype.toString = function() {
        return "SafeStyle{" + this.privateDoNotAccessOrElseSafeStyleWrappedValue_ + "}"
    }
    ),
    e.html.SafeStyle.unwrap = function(t) {
        return t instanceof e.html.SafeStyle && t.constructor === e.html.SafeStyle && t.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === e.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? t.privateDoNotAccessOrElseSafeStyleWrappedValue_ : (e.asserts.fail("expected object of type SafeStyle, got '" + t + "' of type " + e.typeOf(t)),
        "type_error:SafeStyle")
    }
    ,
    e.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse = function(t) {
        return (new e.html.SafeStyle).initSecurityPrivateDoNotAccessOrElse_(t)
    }
    ,
    e.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(e) {
        return this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = e,
        this
    }
    ,
    e.html.SafeStyle.EMPTY = e.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(""),
    e.html.SafeStyle.INNOCUOUS_STRING = "zClosurez",
    e.html.SafeStyle.create = function(t) {
        var n, o = "";
        for (n in t) {
            if (!/^[-_a-zA-Z0-9]+$/.test(n))
                throw Error("Name allows only [-_a-zA-Z0-9], got: " + n);
            var r = t[n];
            null != r && (o += n + ":" + (r = e.isArray(r) ? e.array.map(r, e.html.SafeStyle.sanitizePropertyValue_).join(" ") : e.html.SafeStyle.sanitizePropertyValue_(r)) + ";")
        }
        return o ? e.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(o) : e.html.SafeStyle.EMPTY
    }
    ,
    e.html.SafeStyle.sanitizePropertyValue_ = function(t) {
        if (t instanceof e.html.SafeUrl)
            return 'url("' + e.html.SafeUrl.unwrap(t).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (t = t instanceof e.string.Const ? e.string.Const.unwrap(t) : e.html.SafeStyle.sanitizePropertyValueString_(String(t)),
        /[{;}]/.test(t))
            throw new e.asserts.AssertionError("Value does not allow [{;}], got: %s.",[t]);
        return t
    }
    ,
    e.html.SafeStyle.sanitizePropertyValueString_ = function(t) {
        var n = t.replace(e.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(e.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(e.html.SafeStyle.URL_RE_, "url");
        return e.html.SafeStyle.VALUE_RE_.test(n) ? e.html.SafeStyle.COMMENT_RE_.test(t) ? (e.asserts.fail("String value disallows comments, got: " + t),
        e.html.SafeStyle.INNOCUOUS_STRING) : e.html.SafeStyle.hasBalancedQuotes_(t) ? e.html.SafeStyle.hasBalancedSquareBrackets_(t) ? e.html.SafeStyle.sanitizeUrl_(t) : (e.asserts.fail("String value requires balanced square brackets and one identifier per pair of brackets, got: " + t),
        e.html.SafeStyle.INNOCUOUS_STRING) : (e.asserts.fail("String value requires balanced quotes, got: " + t),
        e.html.SafeStyle.INNOCUOUS_STRING) : (e.asserts.fail("String value allows only " + e.html.SafeStyle.VALUE_ALLOWED_CHARS_ + " and simple functions, got: " + t),
        e.html.SafeStyle.INNOCUOUS_STRING)
    }
    ,
    e.html.SafeStyle.hasBalancedQuotes_ = function(e) {
        for (var t = !0, n = !0, o = 0; o < e.length; o++) {
            var r = e.charAt(o);
            "'" == r && n ? t = !t : '"' == r && t && (n = !n)
        }
        return t && n
    }
    ,
    e.html.SafeStyle.hasBalancedSquareBrackets_ = function(e) {
        for (var t = !0, n = /^[-_a-zA-Z0-9]$/, o = 0; o < e.length; o++) {
            var r = e.charAt(o);
            if ("]" == r) {
                if (t)
                    return !1;
                t = !0
            } else if ("[" == r) {
                if (!t)
                    return !1;
                t = !1
            } else if (!t && !n.test(r))
                return !1
        }
        return t
    }
    ,
    e.html.SafeStyle.VALUE_ALLOWED_CHARS_ = "[-,.\"'%_!# a-zA-Z0-9\\[\\]]",
    e.html.SafeStyle.VALUE_RE_ = new RegExp("^" + e.html.SafeStyle.VALUE_ALLOWED_CHARS_ + "+$"),
    e.html.SafeStyle.URL_RE_ = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
    e.html.SafeStyle.FUNCTIONS_RE_ = /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
    e.html.SafeStyle.COMMENT_RE_ = /\/\*/,
    e.html.SafeStyle.sanitizeUrl_ = function(t) {
        return t.replace(e.html.SafeStyle.URL_RE_, function(t, n, o, r) {
            var i = "";
            return o = o.replace(/^(['"])(.*)\1$/, function(e, t, n) {
                return i = t,
                n
            }),
            t = e.html.SafeUrl.sanitize(o).getTypedStringValue(),
            n + i + t + i + r
        })
    }
    ,
    e.html.SafeStyle.concat = function(t) {
        var n = "";
        return e.array.forEach(arguments, function t(o) {
            e.isArray(o) ? e.array.forEach(o, t) : n += e.html.SafeStyle.unwrap(o)
        }),
        n ? e.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(n) : e.html.SafeStyle.EMPTY
    }
    ,
    e.html.SafeStyleSheet = function() {
        this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = "",
        this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = e.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
    }
    ,
    e.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = !0,
    e.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {},
    e.html.SafeStyleSheet.createRule = function(t, n) {
        if (e.string.internal.contains(t, "<"))
            throw Error("Selector does not allow '<', got: " + t);
        var o = t.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
        if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(o))
            throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + t);
        if (!e.html.SafeStyleSheet.hasBalancedBrackets_(o))
            throw Error("() and [] in selector must be balanced, got: " + t);
        return n instanceof e.html.SafeStyle || (n = e.html.SafeStyle.create(n)),
        t = t + "{" + e.html.SafeStyle.unwrap(n).replace(/</g, "\\3C ") + "}",
        e.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(t)
    }
    ,
    e.html.SafeStyleSheet.hasBalancedBrackets_ = function(t) {
        for (var n = {
            "(": ")",
            "[": "]"
        }, o = [], r = 0; r < t.length; r++) {
            var i = t[r];
            if (n[i])
                o.push(n[i]);
            else if (e.object.contains(n, i) && o.pop() != i)
                return !1
        }
        return 0 == o.length
    }
    ,
    e.html.SafeStyleSheet.concat = function(t) {
        var n = "";
        return e.array.forEach(arguments, function t(o) {
            e.isArray(o) ? e.array.forEach(o, t) : n += e.html.SafeStyleSheet.unwrap(o)
        }),
        e.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(n)
    }
    ,
    e.html.SafeStyleSheet.fromConstant = function(t) {
        return 0 === (t = e.string.Const.unwrap(t)).length ? e.html.SafeStyleSheet.EMPTY : (e.asserts.assert(!e.string.internal.contains(t, "<"), "Forbidden '<' character in style sheet string: " + t),
        e.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(t))
    }
    ,
    e.html.SafeStyleSheet.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_
    }
    ,
    e.DEBUG && (e.html.SafeStyleSheet.prototype.toString = function() {
        return "SafeStyleSheet{" + this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ + "}"
    }
    ),
    e.html.SafeStyleSheet.unwrap = function(t) {
        return t instanceof e.html.SafeStyleSheet && t.constructor === e.html.SafeStyleSheet && t.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === e.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? t.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ : (e.asserts.fail("expected object of type SafeStyleSheet, got '" + t + "' of type " + e.typeOf(t)),
        "type_error:SafeStyleSheet")
    }
    ,
    e.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function(t) {
        return (new e.html.SafeStyleSheet).initSecurityPrivateDoNotAccessOrElse_(t)
    }
    ,
    e.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(e) {
        return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = e,
        this
    }
    ,
    e.html.SafeStyleSheet.EMPTY = e.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(""),
    e.html.SafeHtml = function() {
        this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "",
        this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = e.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_,
        this.dir_ = null
    }
    ,
    e.html.SafeHtml.ENABLE_ERROR_MESSAGES = e.DEBUG,
    e.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE = !0,
    e.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString = !0,
    e.html.SafeHtml.prototype.getDirection = function() {
        return this.dir_
    }
    ,
    e.html.SafeHtml.prototype.implementsGoogStringTypedString = !0,
    e.html.SafeHtml.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString()
    }
    ,
    e.DEBUG && (e.html.SafeHtml.prototype.toString = function() {
        return "SafeHtml{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}"
    }
    ),
    e.html.SafeHtml.unwrap = function(t) {
        return e.html.SafeHtml.unwrapTrustedHTML(t).toString()
    }
    ,
    e.html.SafeHtml.unwrapTrustedHTML = function(t) {
        return t instanceof e.html.SafeHtml && t.constructor === e.html.SafeHtml && t.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === e.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? t.privateDoNotAccessOrElseSafeHtmlWrappedValue_ : (e.asserts.fail("expected object of type SafeHtml, got '" + t + "' of type " + e.typeOf(t)),
        "type_error:SafeHtml")
    }
    ,
    e.html.SafeHtml.htmlEscape = function(t) {
        if (t instanceof e.html.SafeHtml)
            return t;
        var n = "object" == typeof t
          , o = null;
        return n && t.implementsGoogI18nBidiDirectionalString && (o = t.getDirection()),
        t = n && t.implementsGoogStringTypedString ? t.getTypedStringValue() : String(t),
        e.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(e.string.internal.htmlEscape(t), o)
    }
    ,
    e.html.SafeHtml.htmlEscapePreservingNewlines = function(t) {
        return t instanceof e.html.SafeHtml ? t : (t = e.html.SafeHtml.htmlEscape(t),
        e.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(e.string.internal.newLineToBr(e.html.SafeHtml.unwrap(t)), t.getDirection()))
    }
    ,
    e.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function(t) {
        return t instanceof e.html.SafeHtml ? t : (t = e.html.SafeHtml.htmlEscape(t),
        e.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(e.string.internal.whitespaceEscape(e.html.SafeHtml.unwrap(t)), t.getDirection()))
    }
    ,
    e.html.SafeHtml.from = e.html.SafeHtml.htmlEscape,
    e.html.SafeHtml.VALID_NAMES_IN_TAG_ = /^[a-zA-Z0-9-]+$/,
    e.html.SafeHtml.URL_ATTRIBUTES_ = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    },
    e.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_ = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    },
    e.html.SafeHtml.create = function(t, n, o) {
        return e.html.SafeHtml.verifyTagName(String(t)),
        e.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(t), n, o)
    }
    ,
    e.html.SafeHtml.verifyTagName = function(t) {
        if (!e.html.SafeHtml.VALID_NAMES_IN_TAG_.test(t))
            throw Error(e.html.SafeHtml.ENABLE_ERROR_MESSAGES ? "Invalid tag name <" + t + ">." : "");
        if (t.toUpperCase()in e.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_)
            throw Error(e.html.SafeHtml.ENABLE_ERROR_MESSAGES ? "Tag name <" + t + "> is not allowed for SafeHtml." : "")
    }
    ,
    e.html.SafeHtml.createIframe = function(t, n, o, r) {
        t && e.html.TrustedResourceUrl.unwrap(t);
        var i = {};
        return i.src = t || null,
        i.srcdoc = n && e.html.SafeHtml.unwrap(n),
        t = e.html.SafeHtml.combineAttributes(i, {
            sandbox: ""
        }, o),
        e.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", t, r)
    }
    ,
    e.html.SafeHtml.createSandboxIframe = function(t, n, o, r) {
        if (!e.html.SafeHtml.canUseSandboxIframe())
            throw Error(e.html.SafeHtml.ENABLE_ERROR_MESSAGES ? "The browser does not support sandboxed iframes." : "");
        var i = {};
        return i.src = t ? e.html.SafeUrl.unwrap(e.html.SafeUrl.sanitize(t)) : null,
        i.srcdoc = n || null,
        i.sandbox = "",
        t = e.html.SafeHtml.combineAttributes(i, {}, o),
        e.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", t, r)
    }
    ,
    e.html.SafeHtml.canUseSandboxIframe = function() {
        return e.global.HTMLIFrameElement && "sandbox"in e.global.HTMLIFrameElement.prototype
    }
    ,
    e.html.SafeHtml.createScriptSrc = function(t, n) {
        return e.html.TrustedResourceUrl.unwrap(t),
        t = e.html.SafeHtml.combineAttributes({
            src: t
        }, {}, n),
        e.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", t)
    }
    ,
    e.html.SafeHtml.createScript = function(t, n) {
        for (var o in n) {
            var r = o.toLowerCase();
            if ("language" == r || "src" == r || "text" == r || "type" == r)
                throw Error(e.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Cannot set "' + r + '" attribute' : "")
        }
        for (o = "",
        t = e.array.concat(t),
        r = 0; r < t.length; r++)
            o += e.html.SafeScript.unwrap(t[r]);
        return t = e.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(o, e.i18n.bidi.Dir.NEUTRAL),
        e.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", n, t)
    }
    ,
    e.html.SafeHtml.createStyle = function(t, n) {
        n = e.html.SafeHtml.combineAttributes({
            type: "text/css"
        }, {}, n);
        var o = "";
        t = e.array.concat(t);
        for (var r = 0; r < t.length; r++)
            o += e.html.SafeStyleSheet.unwrap(t[r]);
        return t = e.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(o, e.i18n.bidi.Dir.NEUTRAL),
        e.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style", n, t)
    }
    ,
    e.html.SafeHtml.createMetaRefresh = function(t, n) {
        return t = e.html.SafeUrl.unwrap(e.html.SafeUrl.sanitize(t)),
        (e.labs.userAgent.browser.isIE() || e.labs.userAgent.browser.isEdge()) && e.string.internal.contains(t, ";") && (t = "'" + t.replace(/'/g, "%27") + "'"),
        e.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta", {
            "http-equiv": "refresh",
            content: (n || 0) + "; url=" + t
        })
    }
    ,
    e.html.SafeHtml.getAttrNameAndValue_ = function(t, n, o) {
        if (o instanceof e.string.Const)
            o = e.string.Const.unwrap(o);
        else if ("style" == n.toLowerCase()) {
            if (!e.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE)
                throw Error(e.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "style" not supported.' : "");
            o = e.html.SafeHtml.getStyleValue_(o)
        } else {
            if (/^on/i.test(n))
                throw Error(e.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "' + n + '" requires goog.string.Const value, "' + o + '" given.' : "");
            if (n.toLowerCase()in e.html.SafeHtml.URL_ATTRIBUTES_)
                if (o instanceof e.html.TrustedResourceUrl)
                    o = e.html.TrustedResourceUrl.unwrap(o);
                else if (o instanceof e.html.SafeUrl)
                    o = e.html.SafeUrl.unwrap(o);
                else {
                    if (!e.isString(o))
                        throw Error(e.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "' + n + '" on tag "' + t + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + o + '" given.' : "");
                    o = e.html.SafeUrl.sanitize(o).getTypedStringValue()
                }
        }
        return o.implementsGoogStringTypedString && (o = o.getTypedStringValue()),
        e.asserts.assert(e.isString(o) || e.isNumber(o), "String or number value expected, got " + typeof o + " with value: " + o),
        n + '="' + e.string.internal.htmlEscape(String(o)) + '"'
    }
    ,
    e.html.SafeHtml.getStyleValue_ = function(t) {
        if (!e.isObject(t))
            throw Error(e.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof t + " given: " + t : "");
        return t instanceof e.html.SafeStyle || (t = e.html.SafeStyle.create(t)),
        e.html.SafeStyle.unwrap(t)
    }
    ,
    e.html.SafeHtml.createWithDir = function(t, n, o, r) {
        return (n = e.html.SafeHtml.create(n, o, r)).dir_ = t,
        n
    }
    ,
    e.html.SafeHtml.join = function(t, n) {
        var o = (t = e.html.SafeHtml.htmlEscape(t)).getDirection()
          , r = [];
        return e.array.forEach(n, function t(n) {
            e.isArray(n) ? e.array.forEach(n, t) : (n = e.html.SafeHtml.htmlEscape(n),
            r.push(e.html.SafeHtml.unwrap(n)),
            n = n.getDirection(),
            o == e.i18n.bidi.Dir.NEUTRAL ? o = n : n != e.i18n.bidi.Dir.NEUTRAL && o != n && (o = null))
        }),
        e.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(r.join(e.html.SafeHtml.unwrap(t)), o)
    }
    ,
    e.html.SafeHtml.concat = function(t) {
        return e.html.SafeHtml.join(e.html.SafeHtml.EMPTY, Array.prototype.slice.call(arguments))
    }
    ,
    e.html.SafeHtml.concatWithDir = function(t, n) {
        var o = e.html.SafeHtml.concat(e.array.slice(arguments, 1));
        return o.dir_ = t,
        o
    }
    ,
    e.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {},
    e.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function(t, n) {
        return (new e.html.SafeHtml).initSecurityPrivateDoNotAccessOrElse_(t, n)
    }
    ,
    e.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(t, n) {
        return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = e.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? e.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(t) : t,
        this.dir_ = n,
        this
    }
    ,
    e.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse = function(t, n, o) {
        var r = null
          , i = "<" + t + e.html.SafeHtml.stringifyAttributes(t, n);
        return e.isDefAndNotNull(o) ? e.isArray(o) || (o = [o]) : o = [],
        e.dom.tags.isVoidTag(t.toLowerCase()) ? (e.asserts.assert(!o.length, "Void tag <" + t + "> does not allow content."),
        i += ">") : (r = e.html.SafeHtml.concat(o),
        i += ">" + e.html.SafeHtml.unwrap(r) + "</" + t + ">",
        r = r.getDirection()),
        (t = n && n.dir) && (r = /^(ltr|rtl|auto)$/i.test(t) ? e.i18n.bidi.Dir.NEUTRAL : null),
        e.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(i, r)
    }
    ,
    e.html.SafeHtml.stringifyAttributes = function(t, n) {
        var o = "";
        if (n)
            for (var r in n) {
                if (!e.html.SafeHtml.VALID_NAMES_IN_TAG_.test(r))
                    throw Error(e.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Invalid attribute name "' + r + '".' : "");
                var i = n[r];
                e.isDefAndNotNull(i) && (o += " " + e.html.SafeHtml.getAttrNameAndValue_(t, r, i))
            }
        return o
    }
    ,
    e.html.SafeHtml.combineAttributes = function(t, n, o) {
        var r, i = {};
        for (r in t)
            e.asserts.assert(r.toLowerCase() == r, "Must be lower case"),
            i[r] = t[r];
        for (r in n)
            e.asserts.assert(r.toLowerCase() == r, "Must be lower case"),
            i[r] = n[r];
        if (o)
            for (r in o) {
                var s = r.toLowerCase();
                if (s in t)
                    throw Error(e.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Cannot override "' + s + '" attribute, got "' + r + '" with value "' + o[r] + '"' : "");
                s in n && delete i[s],
                i[r] = o[r]
            }
        return i
    }
    ,
    e.html.SafeHtml.DOCTYPE_HTML = e.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!DOCTYPE html>", e.i18n.bidi.Dir.NEUTRAL),
    e.html.SafeHtml.EMPTY = e.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("", e.i18n.bidi.Dir.NEUTRAL),
    e.html.SafeHtml.BR = e.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<br>", e.i18n.bidi.Dir.NEUTRAL),
    e.html.uncheckedconversions = {},
    e.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function(t, n, o) {
        return e.asserts.assertString(e.string.Const.unwrap(t), "must provide justification"),
        e.asserts.assert(!e.string.internal.isEmptyOrWhitespace(e.string.Const.unwrap(t)), "must provide non-empty justification"),
        e.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(n, o || null)
    }
    ,
    e.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function(t, n) {
        return e.asserts.assertString(e.string.Const.unwrap(t), "must provide justification"),
        e.asserts.assert(!e.string.internal.isEmptyOrWhitespace(e.string.Const.unwrap(t)), "must provide non-empty justification"),
        e.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(n)
    }
    ,
    e.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function(t, n) {
        return e.asserts.assertString(e.string.Const.unwrap(t), "must provide justification"),
        e.asserts.assert(!e.string.internal.isEmptyOrWhitespace(e.string.Const.unwrap(t)), "must provide non-empty justification"),
        e.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(n)
    }
    ,
    e.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function(t, n) {
        return e.asserts.assertString(e.string.Const.unwrap(t), "must provide justification"),
        e.asserts.assert(!e.string.internal.isEmptyOrWhitespace(e.string.Const.unwrap(t)), "must provide non-empty justification"),
        e.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(n)
    }
    ,
    e.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function(t, n) {
        return e.asserts.assertString(e.string.Const.unwrap(t), "must provide justification"),
        e.asserts.assert(!e.string.internal.isEmptyOrWhitespace(e.string.Const.unwrap(t)), "must provide non-empty justification"),
        e.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(n)
    }
    ,
    e.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function(t, n) {
        return e.asserts.assertString(e.string.Const.unwrap(t), "must provide justification"),
        e.asserts.assert(!e.string.internal.isEmptyOrWhitespace(e.string.Const.unwrap(t)), "must provide non-empty justification"),
        e.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(n)
    }
    ,
    e.dom.safe = {},
    e.dom.safe.InsertAdjacentHtmlPosition = {
        AFTERBEGIN: "afterbegin",
        AFTEREND: "afterend",
        BEFOREBEGIN: "beforebegin",
        BEFOREEND: "beforeend"
    },
    e.dom.safe.insertAdjacentHtml = function(t, n, o) {
        t.insertAdjacentHTML(n, e.html.SafeHtml.unwrapTrustedHTML(o))
    }
    ,
    e.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = {
        MATH: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    },
    e.dom.safe.isInnerHtmlCleanupRecursive_ = e.functions.cacheReturnValue(function() {
        if (e.DEBUG && "undefined" == typeof document)
            return !1;
        var t = document.createElement("div")
          , n = document.createElement("div");
        return n.appendChild(document.createElement("div")),
        t.appendChild(n),
        !(e.DEBUG && !t.firstChild) && (n = t.firstChild.firstChild,
        t.innerHTML = e.html.SafeHtml.unwrapTrustedHTML(e.html.SafeHtml.EMPTY),
        !n.parentElement)
    }),
    e.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function(t, n) {
        if (e.dom.safe.isInnerHtmlCleanupRecursive_())
            for (; t.lastChild; )
                t.removeChild(t.lastChild);
        t.innerHTML = e.html.SafeHtml.unwrapTrustedHTML(n)
    }
    ,
    e.dom.safe.setInnerHtml = function(t, n) {
        if (e.asserts.ENABLE_ASSERTS) {
            var o = t.tagName.toUpperCase();
            if (e.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[o])
                throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + t.tagName + ".")
        }
        e.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(t, n)
    }
    ,
    e.dom.safe.setOuterHtml = function(t, n) {
        t.outerHTML = e.html.SafeHtml.unwrapTrustedHTML(n)
    }
    ,
    e.dom.safe.setFormElementAction = function(t, n) {
        n = n instanceof e.html.SafeUrl ? n : e.html.SafeUrl.sanitizeAssertUnchanged(n),
        e.dom.asserts.assertIsHTMLFormElement(t).action = e.html.SafeUrl.unwrapTrustedURL(n)
    }
    ,
    e.dom.safe.setButtonFormAction = function(t, n) {
        n = n instanceof e.html.SafeUrl ? n : e.html.SafeUrl.sanitizeAssertUnchanged(n),
        e.dom.asserts.assertIsHTMLButtonElement(t).formAction = e.html.SafeUrl.unwrapTrustedURL(n)
    }
    ,
    e.dom.safe.setInputFormAction = function(t, n) {
        n = n instanceof e.html.SafeUrl ? n : e.html.SafeUrl.sanitizeAssertUnchanged(n),
        e.dom.asserts.assertIsHTMLInputElement(t).formAction = e.html.SafeUrl.unwrapTrustedURL(n)
    }
    ,
    e.dom.safe.setStyle = function(t, n) {
        t.style.cssText = e.html.SafeStyle.unwrap(n)
    }
    ,
    e.dom.safe.documentWrite = function(t, n) {
        t.write(e.html.SafeHtml.unwrapTrustedHTML(n))
    }
    ,
    e.dom.safe.setAnchorHref = function(t, n) {
        e.dom.asserts.assertIsHTMLAnchorElement(t),
        n = n instanceof e.html.SafeUrl ? n : e.html.SafeUrl.sanitizeAssertUnchanged(n),
        t.href = e.html.SafeUrl.unwrapTrustedURL(n)
    }
    ,
    e.dom.safe.setImageSrc = function(t, n) {
        if (e.dom.asserts.assertIsHTMLImageElement(t),
        !(n instanceof e.html.SafeUrl)) {
            var o = /^data:image\//i.test(n);
            n = e.html.SafeUrl.sanitizeAssertUnchanged(n, o)
        }
        t.src = e.html.SafeUrl.unwrapTrustedURL(n)
    }
    ,
    e.dom.safe.setAudioSrc = function(t, n) {
        if (e.dom.asserts.assertIsHTMLAudioElement(t),
        !(n instanceof e.html.SafeUrl)) {
            var o = /^data:audio\//i.test(n);
            n = e.html.SafeUrl.sanitizeAssertUnchanged(n, o)
        }
        t.src = e.html.SafeUrl.unwrapTrustedURL(n)
    }
    ,
    e.dom.safe.setVideoSrc = function(t, n) {
        if (e.dom.asserts.assertIsHTMLVideoElement(t),
        !(n instanceof e.html.SafeUrl)) {
            var o = /^data:video\//i.test(n);
            n = e.html.SafeUrl.sanitizeAssertUnchanged(n, o)
        }
        t.src = e.html.SafeUrl.unwrapTrustedURL(n)
    }
    ,
    e.dom.safe.setEmbedSrc = function(t, n) {
        e.dom.asserts.assertIsHTMLEmbedElement(t),
        t.src = e.html.TrustedResourceUrl.unwrapTrustedScriptURL(n)
    }
    ,
    e.dom.safe.setFrameSrc = function(t, n) {
        e.dom.asserts.assertIsHTMLFrameElement(t),
        t.src = e.html.TrustedResourceUrl.unwrapTrustedURL(n)
    }
    ,
    e.dom.safe.setIframeSrc = function(t, n) {
        e.dom.asserts.assertIsHTMLIFrameElement(t),
        t.src = e.html.TrustedResourceUrl.unwrapTrustedURL(n)
    }
    ,
    e.dom.safe.setIframeSrcdoc = function(t, n) {
        e.dom.asserts.assertIsHTMLIFrameElement(t),
        t.srcdoc = e.html.SafeHtml.unwrapTrustedHTML(n)
    }
    ,
    e.dom.safe.setLinkHrefAndRel = function(t, n, o) {
        e.dom.asserts.assertIsHTMLLinkElement(t),
        t.rel = o,
        e.string.internal.caseInsensitiveContains(o, "stylesheet") ? (e.asserts.assert(n instanceof e.html.TrustedResourceUrl, 'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'),
        t.href = e.html.TrustedResourceUrl.unwrapTrustedURL(n)) : t.href = n instanceof e.html.TrustedResourceUrl ? e.html.TrustedResourceUrl.unwrapTrustedURL(n) : n instanceof e.html.SafeUrl ? e.html.SafeUrl.unwrapTrustedURL(n) : e.html.SafeUrl.unwrapTrustedURL(e.html.SafeUrl.sanitizeAssertUnchanged(n))
    }
    ,
    e.dom.safe.setObjectData = function(t, n) {
        e.dom.asserts.assertIsHTMLObjectElement(t),
        t.data = e.html.TrustedResourceUrl.unwrapTrustedScriptURL(n)
    }
    ,
    e.dom.safe.setScriptSrc = function(t, n) {
        e.dom.asserts.assertIsHTMLScriptElement(t),
        t.src = e.html.TrustedResourceUrl.unwrapTrustedScriptURL(n),
        (n = e.getScriptNonce()) && t.setAttribute("nonce", n)
    }
    ,
    e.dom.safe.setScriptContent = function(t, n) {
        e.dom.asserts.assertIsHTMLScriptElement(t),
        t.text = e.html.SafeScript.unwrapTrustedScript(n),
        (n = e.getScriptNonce()) && t.setAttribute("nonce", n)
    }
    ,
    e.dom.safe.setLocationHref = function(t, n) {
        e.dom.asserts.assertIsLocation(t),
        n = n instanceof e.html.SafeUrl ? n : e.html.SafeUrl.sanitizeAssertUnchanged(n),
        t.href = e.html.SafeUrl.unwrapTrustedURL(n)
    }
    ,
    e.dom.safe.assignLocation = function(t, n) {
        e.dom.asserts.assertIsLocation(t),
        n = n instanceof e.html.SafeUrl ? n : e.html.SafeUrl.sanitizeAssertUnchanged(n),
        t.assign(e.html.SafeUrl.unwrapTrustedURL(n))
    }
    ,
    e.dom.safe.replaceLocation = function(t, n) {
        e.dom.asserts.assertIsLocation(t),
        n = n instanceof e.html.SafeUrl ? n : e.html.SafeUrl.sanitizeAssertUnchanged(n),
        t.replace(e.html.SafeUrl.unwrapTrustedURL(n))
    }
    ,
    e.dom.safe.openInWindow = function(t, n, o, r, i) {
        return t = t instanceof e.html.SafeUrl ? t : e.html.SafeUrl.sanitizeAssertUnchanged(t),
        (n || e.global).open(e.html.SafeUrl.unwrapTrustedURL(t), o ? e.string.Const.unwrap(o) : "", r, i)
    }
    ,
    e.dom.safe.parseFromStringHtml = function(t, n) {
        return e.dom.safe.parseFromString(t, n, "text/html")
    }
    ,
    e.dom.safe.parseFromString = function(t, n, o) {
        return t.parseFromString(e.html.SafeHtml.unwrapTrustedHTML(n), o)
    }
    ,
    e.dom.safe.createImageFromBlob = function(t) {
        if (!/^image\/.*/g.test(t.type))
            throw Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.");
        var n = e.global.URL.createObjectURL(t);
        return (t = new e.global.Image).onload = function() {
            e.global.URL.revokeObjectURL(n)
        }
        ,
        e.dom.safe.setImageSrc(t, e.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(e.string.Const.from("Image blob URL."), n)),
        t
    }
    ,
    e.string.DETECT_DOUBLE_ESCAPING = !1,
    e.string.FORCE_NON_DOM_HTML_UNESCAPING = !1,
    e.string.Unicode = {
        NBSP: " "
    },
    e.string.startsWith = e.string.internal.startsWith,
    e.string.endsWith = e.string.internal.endsWith,
    e.string.caseInsensitiveStartsWith = e.string.internal.caseInsensitiveStartsWith,
    e.string.caseInsensitiveEndsWith = e.string.internal.caseInsensitiveEndsWith,
    e.string.caseInsensitiveEquals = e.string.internal.caseInsensitiveEquals,
    e.string.subs = function(e, t) {
        for (var n = e.split("%s"), o = "", r = Array.prototype.slice.call(arguments, 1); r.length && 1 < n.length; )
            o += n.shift() + r.shift();
        return o + n.join("%s")
    }
    ,
    e.string.collapseWhitespace = function(e) {
        return e.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
    }
    ,
    e.string.isEmptyOrWhitespace = e.string.internal.isEmptyOrWhitespace,
    e.string.isEmptyString = function(e) {
        return 0 == e.length
    }
    ,
    e.string.isEmpty = e.string.isEmptyOrWhitespace,
    e.string.isEmptyOrWhitespaceSafe = function(t) {
        return e.string.isEmptyOrWhitespace(e.string.makeSafe(t))
    }
    ,
    e.string.isEmptySafe = e.string.isEmptyOrWhitespaceSafe,
    e.string.isBreakingWhitespace = function(e) {
        return !/[^\t\n\r ]/.test(e)
    }
    ,
    e.string.isAlpha = function(e) {
        return !/[^a-zA-Z]/.test(e)
    }
    ,
    e.string.isNumeric = function(e) {
        return !/[^0-9]/.test(e)
    }
    ,
    e.string.isAlphaNumeric = function(e) {
        return !/[^a-zA-Z0-9]/.test(e)
    }
    ,
    e.string.isSpace = function(e) {
        return " " == e
    }
    ,
    e.string.isUnicodeChar = function(e) {
        return 1 == e.length && " " <= e && "~" >= e || "" <= e && "�" >= e
    }
    ,
    e.string.stripNewlines = function(e) {
        return e.replace(/(\r\n|\r|\n)+/g, " ")
    }
    ,
    e.string.canonicalizeNewlines = function(e) {
        return e.replace(/(\r\n|\r|\n)/g, "\n")
    }
    ,
    e.string.normalizeWhitespace = function(e) {
        return e.replace(/\xa0|\s/g, " ")
    }
    ,
    e.string.normalizeSpaces = function(e) {
        return e.replace(/\xa0|[ \t]+/g, " ")
    }
    ,
    e.string.collapseBreakingSpaces = function(e) {
        return e.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    }
    ,
    e.string.trim = e.string.internal.trim,
    e.string.trimLeft = function(e) {
        return e.replace(/^[\s\xa0]+/, "")
    }
    ,
    e.string.trimRight = function(e) {
        return e.replace(/[\s\xa0]+$/, "")
    }
    ,
    e.string.caseInsensitiveCompare = e.string.internal.caseInsensitiveCompare,
    e.string.numberAwareCompare_ = function(e, t, n) {
        if (e == t)
            return 0;
        if (!e)
            return -1;
        if (!t)
            return 1;
        for (var o = e.toLowerCase().match(n), r = t.toLowerCase().match(n), i = Math.min(o.length, r.length), s = 0; s < i; s++) {
            n = o[s];
            var a = r[s];
            if (n != a)
                return e = parseInt(n, 10),
                !isNaN(e) && (t = parseInt(a, 10),
                !isNaN(t) && e - t) ? e - t : n < a ? -1 : 1
        }
        return o.length != r.length ? o.length - r.length : e < t ? -1 : 1
    }
    ,
    e.string.intAwareCompare = function(t, n) {
        return e.string.numberAwareCompare_(t, n, /\d+|\D+/g)
    }
    ,
    e.string.floatAwareCompare = function(t, n) {
        return e.string.numberAwareCompare_(t, n, /\d+|\.\d+|\D+/g)
    }
    ,
    e.string.numerateCompare = e.string.floatAwareCompare,
    e.string.urlEncode = function(e) {
        return encodeURIComponent(String(e))
    }
    ,
    e.string.urlDecode = function(e) {
        return decodeURIComponent(e.replace(/\+/g, " "))
    }
    ,
    e.string.newLineToBr = e.string.internal.newLineToBr,
    e.string.htmlEscape = function(t, n) {
        return t = e.string.internal.htmlEscape(t, n),
        e.string.DETECT_DOUBLE_ESCAPING && (t = t.replace(e.string.E_RE_, "&#101;")),
        t
    }
    ,
    e.string.E_RE_ = /e/g,
    e.string.unescapeEntities = function(t) {
        return e.string.contains(t, "&") ? !e.string.FORCE_NON_DOM_HTML_UNESCAPING && "document"in e.global ? e.string.unescapeEntitiesUsingDom_(t) : e.string.unescapePureXmlEntities_(t) : t
    }
    ,
    e.string.unescapeEntitiesWithDocument = function(t, n) {
        return e.string.contains(t, "&") ? e.string.unescapeEntitiesUsingDom_(t, n) : t
    }
    ,
    e.string.unescapeEntitiesUsingDom_ = function(t, n) {
        var o = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        }
          , r = n ? n.createElement("div") : e.global.document.createElement("div");
        return t.replace(e.string.HTML_ENTITY_PATTERN_, function(t, n) {
            var i = o[t];
            return i || ("#" == n.charAt(0) && (n = Number("0" + n.substr(1)),
            isNaN(n) || (i = String.fromCharCode(n))),
            i || (e.dom.safe.setInnerHtml(r, e.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(e.string.Const.from("Single HTML entity."), t + " ")),
            i = r.firstChild.nodeValue.slice(0, -1)),
            o[t] = i)
        })
    }
    ,
    e.string.unescapePureXmlEntities_ = function(e) {
        return e.replace(/&([^;]+);/g, function(e, t) {
            switch (t) {
            case "amp":
                return "&";
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "quot":
                return '"';
            default:
                return "#" != t.charAt(0) || (t = Number("0" + t.substr(1)),
                isNaN(t)) ? e : String.fromCharCode(t)
            }
        })
    }
    ,
    e.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g,
    e.string.whitespaceEscape = function(t, n) {
        return e.string.newLineToBr(t.replace(/  /g, " &#160;"), n)
    }
    ,
    e.string.preserveSpaces = function(t) {
        return t.replace(/(^|[\n ]) /g, "$1" + e.string.Unicode.NBSP)
    }
    ,
    e.string.stripQuotes = function(e, t) {
        for (var n = t.length, o = 0; o < n; o++) {
            var r = 1 == n ? t : t.charAt(o);
            if (e.charAt(0) == r && e.charAt(e.length - 1) == r)
                return e.substring(1, e.length - 1)
        }
        return e
    }
    ,
    e.string.truncate = function(t, n, o) {
        return o && (t = e.string.unescapeEntities(t)),
        t.length > n && (t = t.substring(0, n - 3) + "..."),
        o && (t = e.string.htmlEscape(t)),
        t
    }
    ,
    e.string.truncateMiddle = function(t, n, o, r) {
        if (o && (t = e.string.unescapeEntities(t)),
        r && t.length > n) {
            r > n && (r = n);
            var i = t.length - r;
            t = t.substring(0, n - r) + "..." + t.substring(i)
        } else
            t.length > n && (r = Math.floor(n / 2),
            i = t.length - r,
            t = t.substring(0, r + n % 2) + "..." + t.substring(i));
        return o && (t = e.string.htmlEscape(t)),
        t
    }
    ,
    e.string.specialEscapeChars_ = {
        "\0": "\\0",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\v": "\\x0B",
        '"': '\\"',
        "\\": "\\\\",
        "<": "\\u003C"
    },
    e.string.jsEscapeCache_ = {
        "'": "\\'"
    },
    e.string.quote = function(t) {
        t = String(t);
        for (var n = ['"'], o = 0; o < t.length; o++) {
            var r = t.charAt(o)
              , i = r.charCodeAt(0);
            n[o + 1] = e.string.specialEscapeChars_[r] || (31 < i && 127 > i ? r : e.string.escapeChar(r))
        }
        return n.push('"'),
        n.join("")
    }
    ,
    e.string.escapeString = function(t) {
        for (var n = [], o = 0; o < t.length; o++)
            n[o] = e.string.escapeChar(t.charAt(o));
        return n.join("")
    }
    ,
    e.string.escapeChar = function(t) {
        if (t in e.string.jsEscapeCache_)
            return e.string.jsEscapeCache_[t];
        if (t in e.string.specialEscapeChars_)
            return e.string.jsEscapeCache_[t] = e.string.specialEscapeChars_[t];
        var n = t.charCodeAt(0);
        if (31 < n && 127 > n)
            var o = t;
        else
            256 > n ? (o = "\\x",
            (16 > n || 256 < n) && (o += "0")) : (o = "\\u",
            4096 > n && (o += "0")),
            o += n.toString(16).toUpperCase();
        return e.string.jsEscapeCache_[t] = o
    }
    ,
    e.string.contains = e.string.internal.contains,
    e.string.caseInsensitiveContains = e.string.internal.caseInsensitiveContains,
    e.string.countOf = function(e, t) {
        return e && t ? e.split(t).length - 1 : 0
    }
    ,
    e.string.removeAt = function(e, t, n) {
        var o = e;
        return 0 <= t && t < e.length && 0 < n && (o = e.substr(0, t) + e.substr(t + n, e.length - t - n)),
        o
    }
    ,
    e.string.remove = function(e, t) {
        return e.replace(t, "")
    }
    ,
    e.string.removeAll = function(t, n) {
        return n = new RegExp(e.string.regExpEscape(n),"g"),
        t.replace(n, "")
    }
    ,
    e.string.replaceAll = function(t, n, o) {
        return n = new RegExp(e.string.regExpEscape(n),"g"),
        t.replace(n, o.replace(/\$/g, "$$$$"))
    }
    ,
    e.string.regExpEscape = function(e) {
        return String(e).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }
    ,
    e.string.repeat = String.prototype.repeat ? function(e, t) {
        return e.repeat(t)
    }
    : function(e, t) {
        return Array(t + 1).join(e)
    }
    ,
    e.string.padNumber = function(t, n, o) {
        return -1 == (o = (t = e.isDef(o) ? t.toFixed(o) : String(t)).indexOf(".")) && (o = t.length),
        e.string.repeat("0", Math.max(0, n - o)) + t
    }
    ,
    e.string.makeSafe = function(e) {
        return null == e ? "" : String(e)
    }
    ,
    e.string.buildString = function(e) {
        return Array.prototype.join.call(arguments, "")
    }
    ,
    e.string.getRandomString = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ e.now()).toString(36)
    }
    ,
    e.string.compareVersions = e.string.internal.compareVersions,
    e.string.hashCode = function(e) {
        for (var t = 0, n = 0; n < e.length; ++n)
            t = 31 * t + e.charCodeAt(n) >>> 0;
        return t
    }
    ,
    e.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0,
    e.string.createUniqueString = function() {
        return "goog_" + e.string.uniqueStringCounter_++
    }
    ,
    e.string.toNumber = function(t) {
        var n = Number(t);
        return 0 == n && e.string.isEmptyOrWhitespace(t) ? NaN : n
    }
    ,
    e.string.isLowerCamelCase = function(e) {
        return /^[a-z]+([A-Z][a-z]*)*$/.test(e)
    }
    ,
    e.string.isUpperCamelCase = function(e) {
        return /^([A-Z][a-z]*)+$/.test(e)
    }
    ,
    e.string.toCamelCase = function(e) {
        return String(e).replace(/\-([a-z])/g, function(e, t) {
            return t.toUpperCase()
        })
    }
    ,
    e.string.toSelectorCase = function(e) {
        return String(e).replace(/([A-Z])/g, "-$1").toLowerCase()
    }
    ,
    e.string.toTitleCase = function(t, n) {
        return n = e.isString(n) ? e.string.regExpEscape(n) : "\\s",
        t.replace(new RegExp("(^" + (n ? "|[" + n + "]+" : "") + ")([a-z])","g"), function(e, t, n) {
            return t + n.toUpperCase()
        })
    }
    ,
    e.string.capitalize = function(e) {
        return String(e.charAt(0)).toUpperCase() + String(e.substr(1)).toLowerCase()
    }
    ,
    e.string.parseInt = function(t) {
        return isFinite(t) && (t = String(t)),
        e.isString(t) ? /^\s*-?0x/i.test(t) ? parseInt(t, 16) : parseInt(t, 10) : NaN
    }
    ,
    e.string.splitLimit = function(e, t, n) {
        e = e.split(t);
        for (var o = []; 0 < n && e.length; )
            o.push(e.shift()),
            n--;
        return e.length && o.push(e.join(t)),
        o
    }
    ,
    e.string.lastComponent = function(e, t) {
        if (!t)
            return e;
        "string" == typeof t && (t = [t]);
        for (var n = -1, o = 0; o < t.length; o++)
            if ("" != t[o]) {
                var r = e.lastIndexOf(t[o]);
                r > n && (n = r)
            }
        return -1 == n ? e : e.slice(n + 1)
    }
    ,
    e.string.editDistance = function(e, t) {
        var n = []
          , o = [];
        if (e == t)
            return 0;
        if (!e.length || !t.length)
            return Math.max(e.length, t.length);
        for (var r = 0; r < t.length + 1; r++)
            n[r] = r;
        for (r = 0; r < e.length; r++) {
            o[0] = r + 1;
            for (var i = 0; i < t.length; i++)
                o[i + 1] = Math.min(o[i] + 1, n[i + 1] + 1, n[i] + Number(e[r] != t[i]));
            for (i = 0; i < n.length; i++)
                n[i] = o[i]
        }
        return o[t.length]
    }
    ,
    e.labs.userAgent.engine = {},
    e.labs.userAgent.engine.isPresto = function() {
        return e.labs.userAgent.util.matchUserAgent("Presto")
    }
    ,
    e.labs.userAgent.engine.isTrident = function() {
        return e.labs.userAgent.util.matchUserAgent("Trident") || e.labs.userAgent.util.matchUserAgent("MSIE")
    }
    ,
    e.labs.userAgent.engine.isEdge = function() {
        return e.labs.userAgent.util.matchUserAgent("Edge")
    }
    ,
    e.labs.userAgent.engine.isWebKit = function() {
        return e.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") && !e.labs.userAgent.engine.isEdge()
    }
    ,
    e.labs.userAgent.engine.isGecko = function() {
        return e.labs.userAgent.util.matchUserAgent("Gecko") && !e.labs.userAgent.engine.isWebKit() && !e.labs.userAgent.engine.isTrident() && !e.labs.userAgent.engine.isEdge()
    }
    ,
    e.labs.userAgent.engine.getVersion = function() {
        var t = e.labs.userAgent.util.getUserAgent();
        if (t) {
            t = e.labs.userAgent.util.extractVersionTuples(t);
            var n, o = e.labs.userAgent.engine.getEngineTuple_(t);
            if (o)
                return "Gecko" == o[0] ? e.labs.userAgent.engine.getVersionForKey_(t, "Firefox") : o[1];
            if ((t = t[0]) && (n = t[2]) && (n = /Trident\/([^\s;]+)/.exec(n)))
                return n[1]
        }
        return ""
    }
    ,
    e.labs.userAgent.engine.getEngineTuple_ = function(t) {
        if (!e.labs.userAgent.engine.isEdge())
            return t[1];
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            if ("Edge" == o[0])
                return o
        }
    }
    ,
    e.labs.userAgent.engine.isVersionOrHigher = function(t) {
        return 0 <= e.string.compareVersions(e.labs.userAgent.engine.getVersion(), t)
    }
    ,
    e.labs.userAgent.engine.getVersionForKey_ = function(t, n) {
        return (t = e.array.find(t, function(e) {
            return n == e[0]
        })) && t[1] || ""
    }
    ,
    e.labs.userAgent.platform = {},
    e.labs.userAgent.platform.isAndroid = function() {
        return e.labs.userAgent.util.matchUserAgent("Android")
    }
    ,
    e.labs.userAgent.platform.isIpod = function() {
        return e.labs.userAgent.util.matchUserAgent("iPod")
    }
    ,
    e.labs.userAgent.platform.isIphone = function() {
        return e.labs.userAgent.util.matchUserAgent("iPhone") && !e.labs.userAgent.util.matchUserAgent("iPod") && !e.labs.userAgent.util.matchUserAgent("iPad")
    }
    ,
    e.labs.userAgent.platform.isIpad = function() {
        return e.labs.userAgent.util.matchUserAgent("iPad")
    }
    ,
    e.labs.userAgent.platform.isIos = function() {
        return e.labs.userAgent.platform.isIphone() || e.labs.userAgent.platform.isIpad() || e.labs.userAgent.platform.isIpod()
    }
    ,
    e.labs.userAgent.platform.isMacintosh = function() {
        return e.labs.userAgent.util.matchUserAgent("Macintosh")
    }
    ,
    e.labs.userAgent.platform.isLinux = function() {
        return e.labs.userAgent.util.matchUserAgent("Linux")
    }
    ,
    e.labs.userAgent.platform.isWindows = function() {
        return e.labs.userAgent.util.matchUserAgent("Windows")
    }
    ,
    e.labs.userAgent.platform.isChromeOS = function() {
        return e.labs.userAgent.util.matchUserAgent("CrOS")
    }
    ,
    e.labs.userAgent.platform.isChromecast = function() {
        return e.labs.userAgent.util.matchUserAgent("CrKey")
    }
    ,
    e.labs.userAgent.platform.isKaiOS = function() {
        return e.labs.userAgent.util.matchUserAgentIgnoreCase("KaiOS")
    }
    ,
    e.labs.userAgent.platform.isGo2Phone = function() {
        return e.labs.userAgent.util.matchUserAgentIgnoreCase("GAFP")
    }
    ,
    e.labs.userAgent.platform.getVersion = function() {
        var t = e.labs.userAgent.util.getUserAgent()
          , n = "";
        return e.labs.userAgent.platform.isWindows() ? n = (t = (n = /Windows (?:NT|Phone) ([0-9.]+)/).exec(t)) ? t[1] : "0.0" : e.labs.userAgent.platform.isIos() ? n = (t = (n = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/).exec(t)) && t[1].replace(/_/g, ".") : e.labs.userAgent.platform.isMacintosh() ? n = (t = (n = /Mac OS X ([0-9_.]+)/).exec(t)) ? t[1].replace(/_/g, ".") : "10" : e.labs.userAgent.platform.isKaiOS() ? n = (t = (n = /(?:KaiOS)\/(\S+)/i).exec(t)) && t[1] : e.labs.userAgent.platform.isAndroid() ? n = (t = (n = /Android\s+([^\);]+)(\)|;)/).exec(t)) && t[1] : e.labs.userAgent.platform.isChromeOS() && (n = (t = (n = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/).exec(t)) && t[1]),
        n || ""
    }
    ,
    e.labs.userAgent.platform.isVersionOrHigher = function(t) {
        return 0 <= e.string.compareVersions(e.labs.userAgent.platform.getVersion(), t)
    }
    ,
    e.reflect = {},
    e.reflect.object = function(e, t) {
        return t
    }
    ,
    e.reflect.objectProperty = function(e) {
        return e
    }
    ,
    e.reflect.sinkValue = function(t) {
        return e.reflect.sinkValue[" "](t),
        t
    }
    ,
    e.reflect.sinkValue[" "] = e.nullFunction,
    e.reflect.canAccessProperty = function(t, n) {
        try {
            return e.reflect.sinkValue(t[n]),
            !0
        } catch (e) {}
        return !1
    }
    ,
    e.reflect.cache = function(e, t, n, o) {
        return o = o ? o(t) : t,
        Object.prototype.hasOwnProperty.call(e, o) ? e[o] : e[o] = n(t)
    }
    ,
    e.userAgent = {},
    e.userAgent.ASSUME_IE = !1,
    e.userAgent.ASSUME_EDGE = !1,
    e.userAgent.ASSUME_GECKO = !1,
    e.userAgent.ASSUME_WEBKIT = !1,
    e.userAgent.ASSUME_MOBILE_WEBKIT = !1,
    e.userAgent.ASSUME_OPERA = !1,
    e.userAgent.ASSUME_ANY_VERSION = !1,
    e.userAgent.BROWSER_KNOWN_ = e.userAgent.ASSUME_IE || e.userAgent.ASSUME_EDGE || e.userAgent.ASSUME_GECKO || e.userAgent.ASSUME_MOBILE_WEBKIT || e.userAgent.ASSUME_WEBKIT || e.userAgent.ASSUME_OPERA,
    e.userAgent.getUserAgentString = function() {
        return e.labs.userAgent.util.getUserAgent()
    }
    ,
    e.userAgent.getNavigatorTyped = function() {
        return e.global.navigator || null
    }
    ,
    e.userAgent.getNavigator = function() {
        return e.userAgent.getNavigatorTyped()
    }
    ,
    e.userAgent.OPERA = e.userAgent.BROWSER_KNOWN_ ? e.userAgent.ASSUME_OPERA : e.labs.userAgent.browser.isOpera(),
    e.userAgent.IE = e.userAgent.BROWSER_KNOWN_ ? e.userAgent.ASSUME_IE : e.labs.userAgent.browser.isIE(),
    e.userAgent.EDGE = e.userAgent.BROWSER_KNOWN_ ? e.userAgent.ASSUME_EDGE : e.labs.userAgent.engine.isEdge(),
    e.userAgent.EDGE_OR_IE = e.userAgent.EDGE || e.userAgent.IE,
    e.userAgent.GECKO = e.userAgent.BROWSER_KNOWN_ ? e.userAgent.ASSUME_GECKO : e.labs.userAgent.engine.isGecko(),
    e.userAgent.WEBKIT = e.userAgent.BROWSER_KNOWN_ ? e.userAgent.ASSUME_WEBKIT || e.userAgent.ASSUME_MOBILE_WEBKIT : e.labs.userAgent.engine.isWebKit(),
    e.userAgent.isMobile_ = function() {
        return e.userAgent.WEBKIT && e.labs.userAgent.util.matchUserAgent("Mobile")
    }
    ,
    e.userAgent.MOBILE = e.userAgent.ASSUME_MOBILE_WEBKIT || e.userAgent.isMobile_(),
    e.userAgent.SAFARI = e.userAgent.WEBKIT,
    e.userAgent.determinePlatform_ = function() {
        var t = e.userAgent.getNavigatorTyped();
        return t && t.platform || ""
    }
    ,
    e.userAgent.PLATFORM = e.userAgent.determinePlatform_(),
    e.userAgent.ASSUME_MAC = !1,
    e.userAgent.ASSUME_WINDOWS = !1,
    e.userAgent.ASSUME_LINUX = !1,
    e.userAgent.ASSUME_X11 = !1,
    e.userAgent.ASSUME_ANDROID = !1,
    e.userAgent.ASSUME_IPHONE = !1,
    e.userAgent.ASSUME_IPAD = !1,
    e.userAgent.ASSUME_IPOD = !1,
    e.userAgent.ASSUME_KAIOS = !1,
    e.userAgent.ASSUME_GO2PHONE = !1,
    e.userAgent.PLATFORM_KNOWN_ = e.userAgent.ASSUME_MAC || e.userAgent.ASSUME_WINDOWS || e.userAgent.ASSUME_LINUX || e.userAgent.ASSUME_X11 || e.userAgent.ASSUME_ANDROID || e.userAgent.ASSUME_IPHONE || e.userAgent.ASSUME_IPAD || e.userAgent.ASSUME_IPOD,
    e.userAgent.MAC = e.userAgent.PLATFORM_KNOWN_ ? e.userAgent.ASSUME_MAC : e.labs.userAgent.platform.isMacintosh(),
    e.userAgent.WINDOWS = e.userAgent.PLATFORM_KNOWN_ ? e.userAgent.ASSUME_WINDOWS : e.labs.userAgent.platform.isWindows(),
    e.userAgent.isLegacyLinux_ = function() {
        return e.labs.userAgent.platform.isLinux() || e.labs.userAgent.platform.isChromeOS()
    }
    ,
    e.userAgent.LINUX = e.userAgent.PLATFORM_KNOWN_ ? e.userAgent.ASSUME_LINUX : e.userAgent.isLegacyLinux_(),
    e.userAgent.isX11_ = function() {
        var t = e.userAgent.getNavigatorTyped();
        return !!t && e.string.contains(t.appVersion || "", "X11")
    }
    ;
    e.userAgent.X11 = e.userAgent.PLATFORM_KNOWN_ ? e.userAgent.ASSUME_X11 : e.userAgent.isX11_(),
    e.userAgent.ANDROID = e.userAgent.PLATFORM_KNOWN_ ? e.userAgent.ASSUME_ANDROID : e.labs.userAgent.platform.isAndroid(),
    e.userAgent.IPHONE = e.userAgent.PLATFORM_KNOWN_ ? e.userAgent.ASSUME_IPHONE : e.labs.userAgent.platform.isIphone(),
    e.userAgent.IPAD = e.userAgent.PLATFORM_KNOWN_ ? e.userAgent.ASSUME_IPAD : e.labs.userAgent.platform.isIpad(),
    e.userAgent.IPOD = e.userAgent.PLATFORM_KNOWN_ ? e.userAgent.ASSUME_IPOD : e.labs.userAgent.platform.isIpod(),
    e.userAgent.IOS = e.userAgent.PLATFORM_KNOWN_ ? e.userAgent.ASSUME_IPHONE || e.userAgent.ASSUME_IPAD || e.userAgent.ASSUME_IPOD : e.labs.userAgent.platform.isIos(),
    e.userAgent.KAIOS = e.userAgent.PLATFORM_KNOWN_ ? e.userAgent.ASSUME_KAIOS : e.labs.userAgent.platform.isKaiOS(),
    e.userAgent.GO2PHONE = e.userAgent.PLATFORM_KNOWN_ ? e.userAgent.ASSUME_GO2PHONE : e.labs.userAgent.platform.isGo2Phone(),
    e.userAgent.determineVersion_ = function() {
        var t = ""
          , n = e.userAgent.getVersionRegexResult_();
        return n && (t = n ? n[1] : ""),
        e.userAgent.IE && (null != (n = e.userAgent.getDocumentMode_()) && n > parseFloat(t)) ? String(n) : t
    }
    ,
    e.userAgent.getVersionRegexResult_ = function() {
        var t = e.userAgent.getUserAgentString();
        return e.userAgent.GECKO ? /rv:([^\);]+)(\)|;)/.exec(t) : e.userAgent.EDGE ? /Edge\/([\d\.]+)/.exec(t) : e.userAgent.IE ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t) : e.userAgent.WEBKIT ? /WebKit\/(\S+)/.exec(t) : e.userAgent.OPERA ? /(?:Version)[ \/]?(\S+)/.exec(t) : void 0
    }
    ,
    e.userAgent.getDocumentMode_ = function() {
        var t = e.global.document;
        return t ? t.documentMode : void 0
    }
    ,
    e.userAgent.VERSION = e.userAgent.determineVersion_(),
    e.userAgent.compare = function(t, n) {
        return e.string.compareVersions(t, n)
    }
    ,
    e.userAgent.isVersionOrHigherCache_ = {},
    e.userAgent.isVersionOrHigher = function(t) {
        return e.userAgent.ASSUME_ANY_VERSION || e.reflect.cache(e.userAgent.isVersionOrHigherCache_, t, function() {
            return 0 <= e.string.compareVersions(e.userAgent.VERSION, t)
        })
    }
    ,
    e.userAgent.isVersion = e.userAgent.isVersionOrHigher,
    e.userAgent.isDocumentModeOrHigher = function(t) {
        return Number(e.userAgent.DOCUMENT_MODE) >= t
    }
    ,
    e.userAgent.isDocumentMode = e.userAgent.isDocumentModeOrHigher;
    var u = e.userAgent, x;
    x = e.global.document && e.userAgent.IE ? e.userAgent.getDocumentMode_() : void 0,
    u.DOCUMENT_MODE = x;
    var z = {
        BlockSvg: function(e) {
            this.block_ = e,
            this.svgGroup_ = z.createSvgElement("g", {}, null),
            this.svgPathDark_ = z.createSvgElement("path", {
                class: "blocklyPathDark",
                transform: "translate(0, 5)"
            }, this.svgGroup_),
            this.svgPath_ = z.createSvgElement("path", {
                class: "blocklyPath"
            }, this.svgGroup_),
            this.block_.getFillPattern() && (this.svgPathFill_ = z.createSvgElement("path", {
                class: "blocklyPath"
            }, this.svgGroup_)),
            this.svgPathLight_ = z.createSvgElement("path", {
                class: "blocklyPathLight"
            }, this.svgGroup_),
            this.svgPathTouch_ = z.createSvgElement("path", {
                class: "blocklyPathTouch",
                transform: "translate(8, 14)",
                d: z.BlockSvg.TOUCH_PATH
            }, this.svgGroup_),
            this.svgPath_.tooltip = this.block_,
            z.Tooltip.bindMouseEvents(this.svgPath_),
            this.updateMovable()
        }
    };
    z.BlockSvg.prototype.height = 0,
    z.BlockSvg.prototype.width = 0,
    z.BlockSvg.INLINE = -1,
    z.BlockSvg.prototype.init = function() {
        var e = this.block_;
        this.updateColour();
        for (var t, n = 0; t = e.inputList[n]; n++)
            t.init();
        e.mutator && e.mutator.createIcon()
    }
    ,
    z.BlockSvg.prototype.updateMovable = function() {
        this.block_.isMovable() ? z.addClass_(this.svgGroup_, "blocklyDraggable") : z.removeClass_(this.svgGroup_, "blocklyDraggable")
    }
    ,
    z.BlockSvg.prototype.getRootElement = function() {
        return this.svgGroup_
    }
    ,
    z.BlockSvg.SEP_SPACE_X = 12,
    z.BlockSvg.SEP_SPACE_Y = 20,
    z.BlockSvg.INLINE_PADDING_Y = 5,
    z.BlockSvg.MIN_BLOCK_Y = 42,
    z.BlockSvg.TAB_HEIGHT = 20,
    z.BlockSvg.TAB_WIDTH = 8,
    z.BlockSvg.NOTCH_WIDTH = 40,
    z.BlockSvg.NOTCH_RADIUS = 8,
    z.BlockSvg.CORNER_RADIUS = 8,
    z.BlockSvg.FIELD_HEIGHT = 26,
    z.BlockSvg.DISTANCE_45_INSIDE = (1 - Math.SQRT1_2) * (z.BlockSvg.CORNER_RADIUS - 1) + 1,
    z.BlockSvg.DISTANCE_45_OUTSIDE = (1 - Math.SQRT1_2) * (z.BlockSvg.CORNER_RADIUS + 1) - 1,
    z.BlockSvg.NOTCH_PATH_LEFT = "a " + z.BlockSvg.NOTCH_RADIUS + "," + z.BlockSvg.NOTCH_RADIUS + " 0 0,1 " + 2 * z.BlockSvg.NOTCH_RADIUS + ",0",
    z.BlockSvg.NOTCH_PATH_LEFT_HIGHLIGHT = "a " + z.BlockSvg.NOTCH_RADIUS + "," + z.BlockSvg.NOTCH_RADIUS + " 0 0,1 " + 2 * z.BlockSvg.NOTCH_RADIUS + ",0",
    z.BlockSvg.NOTCH_PATH_RIGHT = "a " + z.BlockSvg.NOTCH_RADIUS + "," + z.BlockSvg.NOTCH_RADIUS + " 0 1,0 " + 2 * -z.BlockSvg.NOTCH_RADIUS + ",0",
    z.BlockSvg.NOTCH_HIGHLIGHT = "m " + (2 * -z.BlockSvg.NOTCH_RADIUS - 5) + ",0 h 5 " + z.BlockSvg.NOTCH_PATH_LEFT + " h 5",
    z.BlockSvg.NOTCH_HIGHLIGHT_RTL = "m -5,0 h 5 " + z.BlockSvg.NOTCH_PATH_LEFT + " h 5",
    z.BlockSvg.JAGGED_TEETH = "l 8,0 0,4 8,4 -16,8 8,4",
    z.BlockSvg.JAGGED_TEETH_HEIGHT = 20,
    z.BlockSvg.JAGGED_TEETH_WIDTH = 15,
    z.BlockSvg.TAB_PATH_DOWN = "v 5 c 0,10 -" + z.BlockSvg.TAB_WIDTH + ",-8 -" + z.BlockSvg.TAB_WIDTH + ",7.5 s " + z.BlockSvg.TAB_WIDTH + ",-2.5 " + z.BlockSvg.TAB_WIDTH + ",7.5",
    z.BlockSvg.TAB_PATH_DOWN_HIGHLIGHT_RTL = "v 6.5 m -" + .98 * z.BlockSvg.TAB_WIDTH + ",2.5 q -" + .05 * z.BlockSvg.TAB_WIDTH + ",10 " + .27 * z.BlockSvg.TAB_WIDTH + ",10 m " + .71 * z.BlockSvg.TAB_WIDTH + ",-2.5 v 1.5",
    z.BlockSvg.TOP_LEFT_CORNER_START = "m 0," + z.BlockSvg.CORNER_RADIUS,
    z.BlockSvg.TOP_LEFT_CORNER_START_HIGHLIGHT_RTL = "m " + z.BlockSvg.DISTANCE_45_INSIDE + "," + z.BlockSvg.DISTANCE_45_INSIDE,
    z.BlockSvg.TOP_LEFT_CORNER_START_HIGHLIGHT_LTR = "m 1," + (z.BlockSvg.CORNER_RADIUS - 1),
    z.BlockSvg.TOP_LEFT_CORNER = "A " + z.BlockSvg.CORNER_RADIUS + "," + z.BlockSvg.CORNER_RADIUS + " 0 0,1 " + z.BlockSvg.CORNER_RADIUS + ",0",
    z.BlockSvg.TOP_LEFT_CORNER_HIGHLIGHT = "A " + (z.BlockSvg.CORNER_RADIUS - 1) + "," + (z.BlockSvg.CORNER_RADIUS - 1) + " 0 0,1 " + z.BlockSvg.CORNER_RADIUS + ",1",
    z.BlockSvg.TOP_RIGHT_CORNER = "a " + z.BlockSvg.CORNER_RADIUS + "," + z.BlockSvg.CORNER_RADIUS + " 0 0,1 " + z.BlockSvg.CORNER_RADIUS + "," + z.BlockSvg.CORNER_RADIUS,
    z.BlockSvg.TOP_RIGHT_CORNER_HIGHLIGHT = "a " + (z.BlockSvg.CORNER_RADIUS - 1) + "," + (z.BlockSvg.CORNER_RADIUS - 1) + " 0 0,1 " + z.BlockSvg.CORNER_RADIUS + "," + (z.BlockSvg.CORNER_RADIUS + 1),
    z.BlockSvg.BOTTOM_RIGHT_CORNER = "a " + z.BlockSvg.CORNER_RADIUS + "," + z.BlockSvg.CORNER_RADIUS + " 0 0,1 " + -z.BlockSvg.CORNER_RADIUS + "," + z.BlockSvg.CORNER_RADIUS,
    z.BlockSvg.INNER_TOP_LEFT_CORNER = z.BlockSvg.NOTCH_PATH_RIGHT + " h -" + (z.BlockSvg.NOTCH_WIDTH - 2 * z.BlockSvg.NOTCH_RADIUS - z.BlockSvg.CORNER_RADIUS) + " a " + z.BlockSvg.CORNER_RADIUS + "," + z.BlockSvg.CORNER_RADIUS + " 0 0,0 -" + z.BlockSvg.CORNER_RADIUS + "," + z.BlockSvg.CORNER_RADIUS,
    z.BlockSvg.INNER_BOTTOM_LEFT_CORNER = "a " + z.BlockSvg.CORNER_RADIUS + "," + z.BlockSvg.CORNER_RADIUS + " 0 0,0 " + z.BlockSvg.CORNER_RADIUS + "," + z.BlockSvg.CORNER_RADIUS,
    z.BlockSvg.INNER_TOP_LEFT_CORNER_HIGHLIGHT_RTL = "a " + (z.BlockSvg.CORNER_RADIUS + 1) + "," + (z.BlockSvg.CORNER_RADIUS + 1) + " 0 0,0 " + (-z.BlockSvg.DISTANCE_45_OUTSIDE - 1) + "," + (z.BlockSvg.CORNER_RADIUS - z.BlockSvg.DISTANCE_45_OUTSIDE),
    z.BlockSvg.INNER_BOTTOM_LEFT_CORNER_HIGHLIGHT_RTL = "a " + (z.BlockSvg.CORNER_RADIUS + 1) + "," + (z.BlockSvg.CORNER_RADIUS + 1) + " 0 0,0 " + (z.BlockSvg.CORNER_RADIUS + 1) + "," + (z.BlockSvg.CORNER_RADIUS + 1),
    z.BlockSvg.INNER_BOTTOM_LEFT_CORNER_HIGHLIGHT_LTR = "a " + (z.BlockSvg.CORNER_RADIUS + 1) + "," + (z.BlockSvg.CORNER_RADIUS + 1) + " 0 0,0 " + (z.BlockSvg.CORNER_RADIUS - z.BlockSvg.DISTANCE_45_OUTSIDE) + "," + (z.BlockSvg.DISTANCE_45_OUTSIDE + 1),
    z.BlockSvg.TOUCH_PATH = "M13.5,3h-12C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0h12C14.3,0,15,0.7,15,1.5S14.3,3,13.5,3zM15,7.5C15,6.7,14.3,6,13.5,6h-12C0.7,6,0,6.7,0,7.5C0,8.3,0.7,9,1.5,9h12C14.3,9,15,8.3,15,7.5zM15,13.5c0-0.8-0.7-1.5-1.5-1.5h-12C0.7,12,0,12.7,0,13.5S0.7,15,1.5,15h12C14.3,15,15,14.3,15,13.5z",
    z.BlockSvg.prototype.dispose = function() {
        e.dom.removeNode(this.svgGroup_),
        this.block_ = this.svgPathTouch_ = this.svgPathDark_ = this.svgPathLight_ = this.svgPath_ = this.svgGroup_ = null
    }
    ,
    z.BlockSvg.prototype.disposeUiEffect = function() {
        z.playAudio("delete"),
        k.triggerEvent("computer_trash");
        var e = z.getSvgXY_(this.svgGroup_)
          , t = this.svgGroup_.cloneNode(!0);
        t.translateX_ = e.x,
        t.translateY_ = e.y,
        t.setAttribute("transform", "translate(" + t.translateX_ + "," + t.translateY_ + ")"),
        z.svg.appendChild(t),
        t.bBox_ = t.getBBox(),
        t.startDate_ = new Date,
        z.BlockSvg.disposeUiStep_(t)
    }
    ,
    z.BlockSvg.disposeUiStep_ = function(t) {
        var n = (new Date - t.startDate_) / 150;
        1 < n ? e.dom.removeNode(t) : (t.setAttribute("transform", "translate(" + (t.translateX_ + (z.RTL ? -1 : 1) * t.bBox_.width / 2 * n) + ", " + (t.translateY_ + t.bBox_.height * n) + ") scale(" + (1 - n) + ")"),
        window.setTimeout(function() {
            z.BlockSvg.disposeUiStep_(t)
        }, 10))
    }
    ,
    z.BlockSvg.prototype.connectionUiEffect = function() {
        z.playAudio("click"),
        k.triggerEvent("computer_connect");
        var e = z.getSvgXY_(this.svgGroup_);
        this.block_.outputConnection ? (e.x += z.RTL ? 3 : -3,
        e.y += 13) : this.block_.previousConnection && (e.x += z.RTL ? -23 : 23,
        e.y += 3),
        (e = z.createSvgElement("circle", {
            cx: e.x,
            cy: e.y,
            r: 0,
            fill: "none",
            stroke: "#888",
            "stroke-width": 10
        }, z.svg)).startDate_ = new Date,
        z.BlockSvg.connectionUiStep_(e)
    }
    ,
    z.BlockSvg.connectionUiStep_ = function(t) {
        var n = (new Date - t.startDate_) / 150;
        1 < n ? e.dom.removeNode(t) : (t.setAttribute("r", 25 * n),
        t.style.opacity = 1 - n,
        window.setTimeout(function() {
            z.BlockSvg.connectionUiStep_(t)
        }, 10))
    }
    ,
    z.BlockSvg.prototype.updateColour = function() {
        if (!this.block_.disabled) {
            var t = this.block_.getHexColour()
              , n = e.color.hexToRgb(t);
            n = e.color.darken(n, .2),
            this.svgPathDark_.setAttribute("fill", e.color.rgbArrayToHex(n)),
            this.svgPath_.setAttribute("fill", t),
            this.svgPathTouch_.setAttribute("fill", e.color.rgbArrayToHex(n)),
            (t = this.block_.getFillPattern()) && this.svgPathFill_.setAttribute("fill", "url(#" + t + ")")
        }
    }
    ,
    z.BlockSvg.prototype.updateDisabled = function() {
        this.block_.disabled || this.block_.getInheritedDisabled() ? (z.addClass_(this.svgGroup_, "blocklyDisabled"),
        this.svgPath_.setAttribute("fill", "url(#blocklyDisabledPattern)")) : (z.removeClass_(this.svgGroup_, "blocklyDisabled"),
        this.updateColour());
        for (var e, t = this.block_.getChildren(), n = 0; e = t[n]; n++)
            e.svg_.updateDisabled()
    }
    ,
    z.BlockSvg.prototype.addSelect = function() {
        z.addClass_(this.svgGroup_, "blocklySelected"),
        this.svgGroup_.parentNode.appendChild(this.svgGroup_)
    }
    ,
    z.BlockSvg.prototype.removeSelect = function() {
        z.removeClass_(this.svgGroup_, "blocklySelected")
    }
    ,
    z.BlockSvg.prototype.addDragging = function() {
        z.addClass_(this.svgGroup_, "blocklyDragging")
    }
    ,
    z.BlockSvg.prototype.removeDragging = function() {
        z.removeClass_(this.svgGroup_, "blocklyDragging")
    }
    ,
    z.BlockSvg.prototype.rowIndent = function() {
        return z.touch && !this.block_.mini ? 3.5 * z.BlockSvg.SEP_SPACE_X : z.BlockSvg.SEP_SPACE_X
    }
    ,
    z.BlockSvg.prototype.render = function() {
        this.block_.rendered = !0;
        var e = z.BlockSvg.SEP_SPACE_X;
        z.RTL && (e = -e);
        for (var t = this.block_.getIcons(), n = 0; n < t.length; n++)
            e = t[n].renderIcon(e);
        e += z.RTL ? z.BlockSvg.SEP_SPACE_X : -z.BlockSvg.SEP_SPACE_X,
        t = this.renderCompute_(e),
        this.renderDraw_(e, t),
        (e = this.block_.getParent()) ? e.render() : z.fireUiEvent(window, "resize")
    }
    ,
    z.BlockSvg.prototype.renderFields_ = function(e, t, n) {
        z.RTL && (t = -t);
        for (var o, r = 0; o = e[r]; r++)
            z.RTL ? (t -= o.renderSep + o.renderWidth,
            o.getRootElement().setAttribute("transform", "translate(" + t + ", " + n + ")"),
            o.renderWidth && (t -= z.BlockSvg.SEP_SPACE_X)) : (o.getRootElement().setAttribute("transform", "translate(" + (t + o.renderSep) + ", " + n + ")"),
            o.renderWidth && (t += o.renderSep + o.renderWidth + z.BlockSvg.SEP_SPACE_X));
        return z.RTL ? -t : t
    }
    ,
    z.BlockSvg.prototype.renderCompute_ = function(e) {
        var t = this.block_.inputList
          , n = [];
        n.rightEdge = e + 2 * z.BlockSvg.SEP_SPACE_X,
        (this.block_.previousConnection || this.block_.nextConnection) && (n.rightEdge = Math.max(n.rightEdge, z.BlockSvg.NOTCH_WIDTH + z.BlockSvg.SEP_SPACE_X));
        for (var o, r = 0, i = 0, s = !1, a = !1, l = !1, u = void 0, c = this.block_.inputsInline && !this.block_.isCollapsed(), h = 0; o = t[h]; h++)
            if (o.isVisible()) {
                if (c && u && u != z.NEXT_STATEMENT && o.type != z.NEXT_STATEMENT)
                    var d = n[n.length - 1];
                else
                    u = o.type,
                    (d = []).type = c && o.type != z.NEXT_STATEMENT ? z.BlockSvg.INLINE : o.type,
                    d.height = 0,
                    n.push(d);
                if (d.push(o),
                o.renderHeight = z.BlockSvg.MIN_BLOCK_Y,
                o.renderWidth = c && o.type == z.INPUT_VALUE ? z.BlockSvg.TAB_WIDTH + 1.25 * z.BlockSvg.SEP_SPACE_X : 0,
                o.connection && o.connection.targetConnection) {
                    var p = o.connection.targetBlock().getHeightWidth();
                    o.renderHeight = Math.max(o.renderHeight, p.height + 4 + 3),
                    o.renderWidth = Math.max(o.renderWidth, p.width)
                }
                h == t.length - 1 && o.renderHeight--,
                d.height = Math.max(d.height, o.renderHeight),
                o.fieldWidth = 0,
                1 == n.length && (o.fieldWidth += z.RTL ? -e : e),
                p = !1;
                for (var g, m = 0; g = o.fieldRow[m]; m++) {
                    0 != m && (o.fieldWidth += z.BlockSvg.SEP_SPACE_X);
                    var f = g.getSize();
                    g.renderWidth = f.width,
                    g.renderSep = p && g.EDITABLE ? z.BlockSvg.SEP_SPACE_X : 0,
                    o.fieldWidth += g.renderWidth + g.renderSep,
                    d.height = Math.max(d.height, f.height),
                    p = g.EDITABLE
                }
                d.type != z.BlockSvg.INLINE && (d.type == z.NEXT_STATEMENT ? (a = !0,
                i = Math.max(i, o.fieldWidth)) : (d.type == z.INPUT_VALUE ? s = !0 : d.type == z.DUMMY_INPUT && (l = !0),
                r = Math.max(r, o.fieldWidth)))
            }
        for (e = 0; d = n[e]; e++)
            if (d.thicker = !1,
            d.type == z.BlockSvg.INLINE)
                for (t = 0; o = d[t]; t++)
                    if (o.type == z.INPUT_VALUE) {
                        d.height += 2 * z.BlockSvg.INLINE_PADDING_Y,
                        d.thicker = !0;
                        break
                    }
        return n.statementEdge = 2 * z.BlockSvg.SEP_SPACE_X + i,
        a && (n.rightEdge = Math.max(n.rightEdge, n.statementEdge + z.BlockSvg.NOTCH_WIDTH)),
        s ? n.rightEdge = Math.max(n.rightEdge, r + this.rowIndent() + z.BlockSvg.SEP_SPACE_X + z.BlockSvg.TAB_WIDTH) : l && (n.rightEdge = Math.max(n.rightEdge, r + this.rowIndent() + z.BlockSvg.SEP_SPACE_X)),
        n.hasValue = s,
        n.hasStatement = a,
        n.hasDummy = l,
        n
    }
    ,
    z.BlockSvg.prototype.renderDraw_ = function(e, t) {
        if (this.block_.outputConnection)
            this.squareBottomLeftCorner_ = this.squareTopLeftCorner_ = !0;
        else if (this.squareBottomLeftCorner_ = this.squareTopLeftCorner_ = !1,
        this.block_.previousConnection) {
            var n = this.block_.previousConnection.targetBlock();
            n && n.getNextBlock()
        }
        var o = this.block_.getRelativeToSurfaceXY()
          , r = []
          , i = [];
        n = [];
        var s = [];
        this.renderDrawTop_(r, n, o, t.rightEdge),
        e = this.renderDrawRight_(r, n, i, s, o, t, e),
        this.renderDrawBottom_(r, n, o, e),
        this.renderDrawLeft_(r, n, o, e),
        e = r.join(" ") + "\n" + i.join(" "),
        this.svgPath_.setAttribute("d", e),
        this.svgPathFill_ && this.svgPathFill_.setAttribute("d", e),
        this.svgPathDark_.setAttribute("d", e),
        e = n.join(" ") + "\n" + s.join(" "),
        this.svgPathLight_.setAttribute("d", e),
        this.svgPathTouch_.setAttribute("display", z.touch && !this.block_.mini ? "" : "none"),
        z.RTL && (this.svgPath_.setAttribute("transform", "scale(-1 1)"),
        this.svgPathLight_.setAttribute("transform", "scale(-1 1)"),
        this.svgPathDark_.setAttribute("transform", "translate(0,5) scale(-1 1)"),
        this.svgPathTouch_.setAttribute("transform", "translate(-8,14) scale(-1 1)"))
    }
    ,
    z.BlockSvg.prototype.renderDrawTop_ = function(e, t, n, o) {
        this.squareTopLeftCorner_ ? (e.push("m 0,0"),
        t.push("m 1,1")) : (e.push(z.BlockSvg.TOP_LEFT_CORNER_START),
        t.push(z.RTL ? z.BlockSvg.TOP_LEFT_CORNER_START_HIGHLIGHT_RTL : z.BlockSvg.TOP_LEFT_CORNER_START_HIGHLIGHT_LTR),
        e.push(z.BlockSvg.TOP_LEFT_CORNER),
        t.push(z.BlockSvg.TOP_LEFT_CORNER_HIGHLIGHT)),
        this.block_.previousConnection && (e.push("H", z.BlockSvg.NOTCH_WIDTH - 2 * z.BlockSvg.NOTCH_RADIUS),
        t.push("H", z.BlockSvg.NOTCH_WIDTH - 2 * z.BlockSvg.NOTCH_RADIUS),
        e.push(z.BlockSvg.NOTCH_PATH_LEFT),
        t.push(z.BlockSvg.NOTCH_PATH_LEFT_HIGHLIGHT),
        this.block_.previousConnection.moveTo(n.x + (z.RTL ? -z.BlockSvg.NOTCH_WIDTH : z.BlockSvg.NOTCH_WIDTH), n.y)),
        e.push("H", o - z.BlockSvg.CORNER_RADIUS),
        e.push(z.BlockSvg.TOP_RIGHT_CORNER),
        t.push("H", o - z.BlockSvg.CORNER_RADIUS + (z.RTL ? -1 : 0)),
        t.push(z.BlockSvg.TOP_RIGHT_CORNER_HIGHLIGHT),
        this.width = o
    }
    ,
    z.BlockSvg.prototype.renderDrawRight_ = function(e, t, n, o, r, i, s) {
        for (var a, l, u, c, h = 0, d = 0; c = i[d]; d++) {
            if (a = this.rowIndent(),
            0 == d && (a += z.RTL ? -s : s),
            t.push("M", i.rightEdge - 1 + "," + (h + 1)),
            this.block_.isCollapsed()) {
                var p = c[0];
                l = h + z.BlockSvg.FIELD_HEIGHT,
                this.renderFields_(p.fieldRow, a, l),
                e.push(z.BlockSvg.JAGGED_TEETH),
                z.RTL ? t.push("l 8,0 0,3.8 7,3.2 m -14.5,9 l 8,4") : t.push("h 8"),
                this.renderDrawRightEdge_(e, t, h + (c.height - z.BlockSvg.JAGGED_TEETH_HEIGHT), d === i.length - 1),
                this.width += z.BlockSvg.JAGGED_TEETH_WIDTH
            } else if (c.type == z.BlockSvg.INLINE) {
                for (var g = 0; p = c[g]; g++)
                    l = h + z.BlockSvg.FIELD_HEIGHT,
                    c.thicker && (l += z.BlockSvg.INLINE_PADDING_Y),
                    a = this.renderFields_(p.fieldRow, a, l),
                    p.type != z.DUMMY_INPUT && (a += p.renderWidth + z.BlockSvg.SEP_SPACE_X),
                    p.type == z.INPUT_VALUE && (n.push("M", a - z.BlockSvg.SEP_SPACE_X + "," + (h + z.BlockSvg.INLINE_PADDING_Y)),
                    n.push("h", z.BlockSvg.TAB_WIDTH - 2 - p.renderWidth),
                    n.push(z.BlockSvg.TAB_PATH_DOWN),
                    n.push("v", p.renderHeight + 1 - z.BlockSvg.TAB_HEIGHT),
                    n.push("h", p.renderWidth + 2 - z.BlockSvg.TAB_WIDTH),
                    n.push("z"),
                    z.RTL ? (o.push("M", a - z.BlockSvg.SEP_SPACE_X - 3 + z.BlockSvg.TAB_WIDTH - p.renderWidth + "," + (h + z.BlockSvg.INLINE_PADDING_Y + 1)),
                    o.push(z.BlockSvg.TAB_PATH_DOWN_HIGHLIGHT_RTL),
                    o.push("v", p.renderHeight - z.BlockSvg.TAB_HEIGHT + 3),
                    o.push("h", p.renderWidth - z.BlockSvg.TAB_WIDTH + 1)) : (o.push("M", a - z.BlockSvg.SEP_SPACE_X + 1 + "," + (h + z.BlockSvg.INLINE_PADDING_Y + 1)),
                    o.push("v", p.renderHeight + 1),
                    o.push("h", z.BlockSvg.TAB_WIDTH - 2 - p.renderWidth),
                    o.push("M", a - p.renderWidth - z.BlockSvg.SEP_SPACE_X + .8 + "," + (h + z.BlockSvg.INLINE_PADDING_Y + z.BlockSvg.TAB_HEIGHT - .4)),
                    o.push("l", .42 * z.BlockSvg.TAB_WIDTH + ",-1.8")),
                    l = z.RTL ? r.x - a - z.BlockSvg.TAB_WIDTH + z.BlockSvg.SEP_SPACE_X + p.renderWidth + 1 : r.x + a + z.BlockSvg.TAB_WIDTH - z.BlockSvg.SEP_SPACE_X - p.renderWidth - 1,
                    u = r.y + h + z.BlockSvg.INLINE_PADDING_Y + 1,
                    p.connection.moveTo(l, u),
                    p.connection.targetConnection && p.connection.tighten_());
                a = Math.max(a, i.rightEdge),
                this.width = Math.max(this.width, a),
                e.push("H", a),
                t.push("H", a + (z.RTL ? -1 : 0)),
                this.renderDrawRightEdge_(h + c.height, !1)
            } else
                c.type == z.INPUT_VALUE ? (p = c[0],
                l = h + z.BlockSvg.FIELD_HEIGHT,
                p.align != z.ALIGN_LEFT && (g = i.rightEdge - p.fieldWidth - z.BlockSvg.TAB_WIDTH - 2 * z.BlockSvg.SEP_SPACE_X,
                p.align == z.ALIGN_RIGHT ? a += g : p.align == z.ALIGN_CENTRE && (a += (g + a) / 2)),
                this.renderFields_(p.fieldRow, a, l),
                e.push(z.BlockSvg.TAB_PATH_DOWN),
                g = c.height - z.BlockSvg.TAB_HEIGHT,
                e.push("v", g),
                z.RTL ? (t.push(z.BlockSvg.TAB_PATH_DOWN_HIGHLIGHT_RTL),
                t.push("v", g)) : (t.push("M", i.rightEdge - 4.2 + "," + (h + z.BlockSvg.TAB_HEIGHT - .4)),
                t.push("l", .42 * z.BlockSvg.TAB_WIDTH + ",-1.8")),
                l = r.x + (z.RTL ? -i.rightEdge - 1 : i.rightEdge + 1),
                u = r.y + h,
                p.connection.moveTo(l, u),
                p.connection.targetConnection && (p.connection.tighten_(),
                this.width = Math.max(this.width, i.rightEdge + p.connection.targetBlock().getHeightWidth().width - z.BlockSvg.TAB_WIDTH + 1))) : c.type == z.DUMMY_INPUT ? (p = c[0],
                l = h + z.BlockSvg.FIELD_HEIGHT,
                p.align != z.ALIGN_LEFT && (g = i.rightEdge - p.fieldWidth - 2 * z.BlockSvg.SEP_SPACE_X,
                i.hasValue && (g -= z.BlockSvg.TAB_WIDTH),
                p.align == z.ALIGN_RIGHT ? a += g : p.align == z.ALIGN_CENTRE && (a += (g + a) / 2)),
                this.renderFields_(p.fieldRow, a, l),
                this.renderDrawRightEdge_(e, t, h + c.height, d === i.length - 1)) : c.type == z.NEXT_STATEMENT && (p = c[0],
                0 == d && (e.push("v", z.BlockSvg.SEP_SPACE_Y),
                z.RTL && t.push("v", z.BlockSvg.SEP_SPACE_Y - 1),
                h += z.BlockSvg.SEP_SPACE_Y),
                l = h + z.BlockSvg.FIELD_HEIGHT,
                p.align != z.ALIGN_LEFT && (g = i.statementEdge - p.fieldWidth - 2 * z.BlockSvg.SEP_SPACE_X,
                p.align == z.ALIGN_RIGHT ? a += g : p.align == z.ALIGN_CENTRE && (a += (g + a) / 2)),
                this.renderFields_(p.fieldRow, a, l),
                a = i.statementEdge + z.BlockSvg.NOTCH_WIDTH,
                e.push("H", a),
                e.push(z.BlockSvg.INNER_TOP_LEFT_CORNER),
                e.push("v", c.height - 2 * z.BlockSvg.CORNER_RADIUS),
                e.push(z.BlockSvg.INNER_BOTTOM_LEFT_CORNER),
                e.push("H", i.rightEdge),
                z.RTL ? (t.push("M", a - z.BlockSvg.NOTCH_WIDTH + z.BlockSvg.DISTANCE_45_OUTSIDE + "," + (h + z.BlockSvg.DISTANCE_45_OUTSIDE)),
                t.push(z.BlockSvg.INNER_TOP_LEFT_CORNER_HIGHLIGHT_RTL),
                t.push("v", c.height - 2 * z.BlockSvg.CORNER_RADIUS),
                t.push(z.BlockSvg.INNER_BOTTOM_LEFT_CORNER_HIGHLIGHT_RTL),
                t.push("H", i.rightEdge - 1)) : (t.push("M", a - z.BlockSvg.NOTCH_WIDTH + z.BlockSvg.DISTANCE_45_OUTSIDE + "," + (h + c.height - z.BlockSvg.DISTANCE_45_OUTSIDE)),
                t.push(z.BlockSvg.INNER_BOTTOM_LEFT_CORNER_HIGHLIGHT_LTR),
                t.push("H", i.rightEdge)),
                l = r.x + (z.RTL ? -a : a),
                u = r.y + h + 1,
                p.connection.moveTo(l, u),
                p.connection.targetConnection && (p.connection.tighten_(),
                this.width = Math.max(this.width, i.statementEdge + p.connection.targetBlock().getHeightWidth().width)),
                d == i.length - 1 || i[d + 1].type == z.NEXT_STATEMENT) && (this.renderDrawRightEdge_(e, t, h + c.height + z.BlockSvg.SEP_SPACE_Y, d === i.length - 1),
                h += z.BlockSvg.SEP_SPACE_Y);
            h += c.height
        }
        return i.length || (h = z.BlockSvg.MIN_BLOCK_Y,
        this.renderDrawRightEdge_(e, t, h, !0)),
        h
    }
    ,
    z.BlockSvg.prototype.renderDrawRightEdge_ = function(e, t, n, o) {
        o ? (e.push("V", n - z.BlockSvg.CORNER_RADIUS),
        e.push(z.BlockSvg.BOTTOM_RIGHT_CORNER),
        z.RTL && t.push("V", n - z.BlockSvg.CORNER_RADIUS - 1)) : (e.push("V", n),
        z.RTL && t.push("V", n - 1))
    }
    ,
    z.BlockSvg.prototype.renderDrawBottom_ = function(e, t, n, o) {
        this.height = o + 1,
        this.block_.nextConnection && (e.push("H", z.BlockSvg.NOTCH_WIDTH + " " + z.BlockSvg.NOTCH_PATH_RIGHT),
        this.block_.nextConnection.moveTo(z.RTL ? n.x - z.BlockSvg.NOTCH_WIDTH : n.x + z.BlockSvg.NOTCH_WIDTH, n.y + o + 1),
        this.block_.nextConnection.targetConnection && this.block_.nextConnection.tighten_(),
        this.height += 4),
        this.squareBottomLeftCorner_ ? (e.push("H 0"),
        z.RTL || t.push("M", "1," + o)) : (e.push("H", z.BlockSvg.CORNER_RADIUS),
        e.push("a", z.BlockSvg.CORNER_RADIUS + "," + z.BlockSvg.CORNER_RADIUS + " 0 0,1 -" + z.BlockSvg.CORNER_RADIUS + ",-" + z.BlockSvg.CORNER_RADIUS),
        z.RTL || (t.push("M", z.BlockSvg.DISTANCE_45_INSIDE + "," + (o - z.BlockSvg.DISTANCE_45_INSIDE)),
        t.push("A", z.BlockSvg.CORNER_RADIUS - 1 + "," + (z.BlockSvg.CORNER_RADIUS - 1) + " 0 0,1 1," + (o - z.BlockSvg.CORNER_RADIUS))))
    }
    ,
    z.BlockSvg.prototype.renderDrawLeft_ = function(e, t, n) {
        this.block_.outputConnection ? (this.block_.outputConnection.moveTo(n.x, n.y),
        e.push("V", z.BlockSvg.TAB_HEIGHT),
        e.push("c 0,-10 -" + z.BlockSvg.TAB_WIDTH + ",8 -" + z.BlockSvg.TAB_WIDTH + ",-7.5 s " + z.BlockSvg.TAB_WIDTH + ",2.5 " + z.BlockSvg.TAB_WIDTH + ",-7.5"),
        z.RTL ? (t.push("M", -.3 * z.BlockSvg.TAB_WIDTH + ",8.9"),
        t.push("l", -.45 * z.BlockSvg.TAB_WIDTH + ",-2.1")) : (t.push("V", z.BlockSvg.TAB_HEIGHT - 1),
        t.push("m", -.92 * z.BlockSvg.TAB_WIDTH + ",-1 q " + -.19 * z.BlockSvg.TAB_WIDTH + ",-5.5 0,-11"),
        t.push("m", .92 * z.BlockSvg.TAB_WIDTH + ",1 V 1 H 2")),
        this.width += z.BlockSvg.TAB_WIDTH) : z.RTL || (this.squareTopLeftCorner_ ? t.push("V", 1) : t.push("V", z.BlockSvg.CORNER_RADIUS)),
        e.push("z")
    }
    ,
    z.Blocks = {},
    z.Blocks.addTemplate = function(t) {
        e.asserts.assert(t.blockName),
        e.asserts.assert(z.Blocks[t.blockName], "Blockly.Blocks already has a field named ", t.blockName),
        e.asserts.assert(t.message),
        e.asserts.assert(t.colour && "number" == typeof t.colour && 0 <= t.colour && 360 > t.colour, "details.colour must be a number from 0 to 360 (exclusive)"),
        "undefined" != t.output && (e.asserts.assert(!t.previousStatement, "When details.output is defined, details.previousStatement must not be true."),
        e.asserts.assert(!t.nextStatement, "When details.output is defined, details.nextStatement must not be true."));
        var n = {
            init: function() {
                var n = this;
                this.setColour(t.colour),
                this.setHelpUrl(t.helpUrl),
                "string" == typeof t.tooltip ? this.setTooltip(t.tooltip) : "function" == typeof t.tooltip && this.setTooltip(function() {
                    return t.tooltip(n)
                }),
                "undefined" != t.output ? this.setOutput(!0, t.output) : (this.setPreviousStatement(void 0 === t.previousStatement || t.previousStatement),
                this.setNextStatement(void 0 === t.nextStatement || t.nextStatement));
                var o = [];
                o.push(t.text),
                t.args && t.args.forEach(function(t) {
                    e.asserts.assert(t.name),
                    e.asserts.assert("undefined" != t.check),
                    "undefined" == t.type || t.type == z.INPUT_VALUE ? o.push([t.name, t.check, void 0 === t.align ? z.ALIGN_RIGHT : t.align]) : e.asserts.fail("addTemplate() can only handle value inputs.")
                }),
                o.push(z.ALIGN_RIGHT),
                t.inline && this.setInlineInputs(t.inline),
                z.Block.prototype.interpolateMsg.apply(this, o)
            }
        };
        n.mutationToDom = t.switchable ? function() {
            var e = t.mutationToDomFunc ? t.mutatationToDomFunc() : document.createElement("mutation");
            return e.setAttribute("is_statement", this.isStatement || !1),
            e
        }
        : t.mutationToDomFunc,
        z.Blocks[t.blockName] = n
    }
    ,
    z.ScrollbarPair = function(e) {
        this.workspace_ = e,
        this.oldHostMetrics_ = null,
        this.hScroll = new z.Scrollbar(e,!0,!0),
        this.vScroll = new z.Scrollbar(e,!1,!0),
        this.corner_ = z.createSvgElement("rect", {
            height: z.Scrollbar.scrollbarThickness,
            width: z.Scrollbar.scrollbarThickness,
            style: "fill: #fff"
        }, null),
        z.Scrollbar.insertAfter_(this.corner_, e.getBubbleCanvas())
    }
    ,
    z.ScrollbarPair.prototype.dispose = function() {
        z.unbindEvent_(this.onResizeWrapper_),
        this.onResizeWrapper_ = null,
        e.dom.removeNode(this.corner_),
        this.oldHostMetrics_ = this.workspace_ = this.corner_ = null,
        this.hScroll.dispose(),
        this.hScroll = null,
        this.vScroll.dispose(),
        this.vScroll = null
    }
    ,
    z.ScrollbarPair.prototype.resize = function() {
        var e = this.workspace_.getMetrics();
        if (e) {
            var t = !1
              , n = !1;
            this.oldHostMetrics_ && this.oldHostMetrics_.viewWidth == e.viewWidth && this.oldHostMetrics_.viewHeight == e.viewHeight && this.oldHostMetrics_.absoluteTop == e.absoluteTop && this.oldHostMetrics_.absoluteLeft == e.absoluteLeft ? (this.oldHostMetrics_ && this.oldHostMetrics_.contentWidth == e.contentWidth && this.oldHostMetrics_.viewLeft == e.viewLeft && this.oldHostMetrics_.contentLeft == e.contentLeft || (t = !0),
            this.oldHostMetrics_ && this.oldHostMetrics_.contentHeight == e.contentHeight && this.oldHostMetrics_.viewTop == e.viewTop && this.oldHostMetrics_.contentTop == e.contentTop || (n = !0)) : n = t = !0,
            t && this.hScroll.resize(e),
            n && this.vScroll.resize(e),
            this.oldHostMetrics_ && this.oldHostMetrics_.viewWidth == e.viewWidth && this.oldHostMetrics_.absoluteLeft == e.absoluteLeft || this.corner_.setAttribute("x", this.vScroll.xCoordinate),
            this.oldHostMetrics_ && this.oldHostMetrics_.viewHeight == e.viewHeight && this.oldHostMetrics_.absoluteTop == e.absoluteTop || this.corner_.setAttribute("y", this.hScroll.yCoordinate),
            this.oldHostMetrics_ = e
        }
    }
    ,
    z.ScrollbarPair.prototype.set = function(e, t) {
        this.hScroll.set(e),
        this.vScroll.set(t)
    }
    ,
    z.Scrollbar = function(e, t, n) {
        this.workspace_ = e,
        this.pair_ = n || !1,
        this.horizontal_ = t,
        this.createDom_(),
        t ? (this.svgBackground_.setAttribute("height", z.Scrollbar.scrollbarThickness),
        this.svgKnob_.setAttribute("height", z.Scrollbar.scrollbarThickness - 6),
        this.svgKnob_.setAttribute("y", 3)) : (this.svgBackground_.setAttribute("width", z.Scrollbar.scrollbarThickness),
        this.svgKnob_.setAttribute("width", z.Scrollbar.scrollbarThickness - 6),
        this.svgKnob_.setAttribute("x", 3)),
        this.onMouseDownBarWrapper_ = z.bindEvent_(this.svgBackground_, "mousedown", this, this.onMouseDownBar_),
        this.onMouseDownKnobWrapper_ = z.bindEvent_(this.svgKnob_, "mousedown", this, this.onMouseDownKnob_)
    }
    ,
    z.Scrollbar.scrollbarThickness = "ontouchstart"in document.documentElement ? 25 : 15,
    z.Scrollbar.prototype.dispose = function() {
        this.onMouseUpKnob_(),
        this.onResizeWrapper_ && (z.unbindEvent_(this.onResizeWrapper_),
        this.onResizeWrapper_ = null),
        z.unbindEvent_(this.onMouseDownBarWrapper_),
        this.onMouseDownBarWrapper_ = null,
        z.unbindEvent_(this.onMouseDownKnobWrapper_),
        this.onMouseDownKnobWrapper_ = null,
        e.dom.removeNode(this.svgGroup_),
        this.workspace_ = this.svgKnob_ = this.svgBackground_ = this.svgGroup_ = null
    }
    ,
    z.Scrollbar.prototype.resize = function(e) {
        if (e || (e = this.workspace_.getMetrics())) {
            if (this.horizontal_) {
                var t = e.viewWidth;
                this.pair_ ? t -= z.Scrollbar.scrollbarThickness : this.setVisible(t < e.contentHeight),
                this.ratio_ = t / e.contentWidth,
                (-1 / 0 === this.ratio_ || 1 / 0 === this.ratio_ || isNaN(this.ratio_)) && (this.ratio_ = 0);
                var n = e.viewWidth * this.ratio_
                  , o = (e.viewLeft - e.contentLeft) * this.ratio_;
                this.svgKnob_.setAttribute("width", Math.max(0, n)),
                this.xCoordinate = e.absoluteLeft,
                this.pair_ && z.RTL && (this.xCoordinate += e.absoluteLeft + z.Scrollbar.scrollbarThickness),
                this.yCoordinate = e.absoluteTop + e.viewHeight - z.Scrollbar.scrollbarThickness,
                this.svgGroup_.setAttribute("transform", "translate(" + this.xCoordinate + ", " + this.yCoordinate + ")"),
                this.svgBackground_.setAttribute("width", Math.max(0, t)),
                this.svgKnob_.setAttribute("x", this.constrainKnob_(o))
            } else
                t = e.viewHeight,
                this.pair_ ? t -= z.Scrollbar.scrollbarThickness : this.setVisible(t < e.contentHeight),
                this.ratio_ = t / e.contentHeight,
                (-1 / 0 === this.ratio_ || 1 / 0 === this.ratio_ || isNaN(this.ratio_)) && (this.ratio_ = 0),
                n = e.viewHeight * this.ratio_,
                o = (e.viewTop - e.contentTop) * this.ratio_,
                this.svgKnob_.setAttribute("height", Math.max(0, n)),
                this.xCoordinate = e.absoluteLeft,
                z.RTL || (this.xCoordinate += e.viewWidth - z.Scrollbar.scrollbarThickness),
                this.yCoordinate = e.absoluteTop,
                this.svgGroup_.setAttribute("transform", "translate(" + this.xCoordinate + ", " + this.yCoordinate + ")"),
                this.svgBackground_.setAttribute("height", Math.max(0, t)),
                this.svgKnob_.setAttribute("y", this.constrainKnob_(o));
            this.onScroll_()
        }
    }
    ,
    z.Scrollbar.prototype.createDom_ = function() {
        this.svgGroup_ = z.createSvgElement("g", {}, null),
        this.svgBackground_ = z.createSvgElement("rect", {
            class: "blocklyScrollbarBackground"
        }, this.svgGroup_);
        var e = Math.floor((z.Scrollbar.scrollbarThickness - 6) / 2);
        this.svgKnob_ = z.createSvgElement("rect", {
            class: "blocklyScrollbarKnob",
            rx: e,
            ry: e
        }, this.svgGroup_),
        z.Scrollbar.insertAfter_(this.svgGroup_, this.workspace_.getBubbleCanvas())
    }
    ,
    z.Scrollbar.prototype.isVisible = function() {
        return "none" != this.svgGroup_.getAttribute("display")
    }
    ,
    z.Scrollbar.prototype.setVisible = function(e) {
        if (e != this.isVisible()) {
            if (this.pair_)
                throw "Unable to toggle visibility of paired scrollbars.";
            e ? this.svgGroup_.setAttribute("display", "block") : (this.workspace_.setMetrics({
                x: 0,
                y: 0
            }),
            this.svgGroup_.setAttribute("display", "none"))
        }
    }
    ,
    z.Scrollbar.prototype.onMouseDownBar_ = function(e) {
        if (this.onMouseUpKnob_(),
        !z.isRightButton(e)) {
            var t = z.mouseToSvg(e);
            t = this.horizontal_ ? t.x : t.y;
            var n = z.getSvgXY_(this.svgKnob_);
            n = this.horizontal_ ? n.x : n.y;
            var o = parseFloat(this.svgKnob_.getAttribute(this.horizontal_ ? "width" : "height"))
              , r = parseFloat(this.svgKnob_.getAttribute(this.horizontal_ ? "x" : "y"))
              , i = .95 * o;
            t <= n ? r -= i : t >= n + o && (r += i),
            this.svgKnob_.setAttribute(this.horizontal_ ? "x" : "y", this.constrainKnob_(r)),
            this.onScroll_()
        }
        e.stopPropagation()
    }
    ,
    z.Scrollbar.prototype.onMouseDownKnob_ = function(e) {
        this.onMouseUpKnob_(),
        z.isRightButton(e) || (this.startDragKnob = parseFloat(this.svgKnob_.getAttribute(this.horizontal_ ? "x" : "y")),
        this.startDragMouse = this.horizontal_ ? e.clientX : e.clientY,
        z.Scrollbar.onMouseUpWrapper_ = z.bindEvent_(document, "mouseup", this, this.onMouseUpKnob_),
        z.Scrollbar.onMouseMoveWrapper_ = z.bindEvent_(document, "mousemove", this, this.onMouseMoveKnob_)),
        e.stopPropagation()
    }
    ,
    z.Scrollbar.prototype.onMouseMoveKnob_ = function(e) {
        this.svgKnob_.setAttribute(this.horizontal_ ? "x" : "y", this.constrainKnob_(this.startDragKnob + ((this.horizontal_ ? e.clientX : e.clientY) - this.startDragMouse))),
        this.onScroll_()
    }
    ,
    z.Scrollbar.prototype.onMouseUpKnob_ = function() {
        z.removeAllRanges(),
        z.hideChaff(!0),
        z.Scrollbar.onMouseUpWrapper_ && (z.unbindEvent_(z.Scrollbar.onMouseUpWrapper_),
        z.Scrollbar.onMouseUpWrapper_ = null),
        z.Scrollbar.onMouseMoveWrapper_ && (z.unbindEvent_(z.Scrollbar.onMouseMoveWrapper_),
        z.Scrollbar.onMouseMoveWrapper_ = null)
    }
    ,
    z.Scrollbar.prototype.constrainKnob_ = function(e) {
        if (0 >= e || isNaN(e))
            e = 0;
        else {
            var t = this.horizontal_ ? "width" : "height"
              , n = parseFloat(this.svgBackground_.getAttribute(t));
            t = parseFloat(this.svgKnob_.getAttribute(t)),
            e = Math.min(e, n - t)
        }
        return e
    }
    ,
    z.Scrollbar.prototype.onScroll_ = function() {
        var e = parseFloat(this.svgKnob_.getAttribute(this.horizontal_ ? "x" : "y"))
          , t = parseFloat(this.svgBackground_.getAttribute(this.horizontal_ ? "width" : "height"));
        e /= t,
        isNaN(e) && (e = 0),
        t = {},
        this.horizontal_ ? t.x = e : t.y = e,
        this.workspace_.setMetrics(t)
    }
    ,
    z.Scrollbar.prototype.set = function(e) {
        this.svgKnob_.setAttribute(this.horizontal_ ? "x" : "y", e * this.ratio_),
        this.onScroll_()
    }
    ,
    z.Scrollbar.insertAfter_ = function(e, t) {
        var n = t.nextSibling;
        if (!(t = t.parentNode))
            throw "Reference node has no parent.";
        n ? t.insertBefore(e, n) : t.appendChild(e)
    }
    ,
    e.Thenable = function() {}
    ,
    e.Thenable.prototype.then = function() {}
    ,
    e.Thenable.IMPLEMENTED_BY_PROP = "$goog_Thenable",
    e.Thenable.addImplementation = function(t) {
        t.prototype[e.Thenable.IMPLEMENTED_BY_PROP] = !0
    }
    ,
    e.Thenable.isImplementedBy = function(t) {
        if (!t)
            return !1;
        try {
            return !!t[e.Thenable.IMPLEMENTED_BY_PROP]
        } catch (e) {
            return !1
        }
    }
    ,
    e.async = {},
    e.async.FreeList = class {
        constructor(e, t, n) {
            this.limit_ = n,
            this.create_ = e,
            this.reset_ = t,
            this.occupants_ = 0,
            this.head_ = null
        }
        get() {
            let e;
            return 0 < this.occupants_ ? (this.occupants_--,
            e = this.head_,
            this.head_ = e.next,
            e.next = null) : e = this.create_(),
            e
        }
        put(e) {
            this.reset_(e),
            this.occupants_ < this.limit_ && (this.occupants_++,
            e.next = this.head_,
            this.head_ = e)
        }
        occupants() {
            return this.occupants_
        }
    }
    ,
    e.async.WorkQueue = function() {
        this.workTail_ = this.workHead_ = null
    }
    ,
    e.async.WorkQueue.DEFAULT_MAX_UNUSED = 100,
    e.async.WorkQueue.freelist_ = new e.async.FreeList(function() {
        return new e.async.WorkItem
    }
    ,function(e) {
        e.reset()
    }
    ,e.async.WorkQueue.DEFAULT_MAX_UNUSED),
    e.async.WorkQueue.prototype.add = function(t, n) {
        var o = this.getUnusedItem_();
        o.set(t, n),
        this.workTail_ ? this.workTail_.next = o : (e.asserts.assert(!this.workHead_),
        this.workHead_ = o),
        this.workTail_ = o
    }
    ,
    e.async.WorkQueue.prototype.remove = function() {
        var e = null;
        return this.workHead_ && (e = this.workHead_,
        this.workHead_ = this.workHead_.next,
        this.workHead_ || (this.workTail_ = null),
        e.next = null),
        e
    }
    ,
    e.async.WorkQueue.prototype.returnUnused = function(t) {
        e.async.WorkQueue.freelist_.put(t)
    }
    ,
    e.async.WorkQueue.prototype.getUnusedItem_ = function() {
        return e.async.WorkQueue.freelist_.get()
    }
    ,
    e.async.WorkItem = function() {
        this.next = this.scope = this.fn = null
    }
    ,
    e.async.WorkItem.prototype.set = function(e, t) {
        this.fn = e,
        this.scope = t,
        this.next = null
    }
    ,
    e.async.WorkItem.prototype.reset = function() {
        this.next = this.scope = this.fn = null
    }
    ,
    e.debug.entryPointRegistry = {},
    e.debug.EntryPointMonitor = function() {}
    ,
    e.debug.entryPointRegistry.refList_ = [],
    e.debug.entryPointRegistry.monitors_ = [],
    e.debug.entryPointRegistry.monitorsMayExist_ = !1,
    e.debug.entryPointRegistry.register = function(t) {
        if (e.debug.entryPointRegistry.refList_[e.debug.entryPointRegistry.refList_.length] = t,
        e.debug.entryPointRegistry.monitorsMayExist_)
            for (var n = e.debug.entryPointRegistry.monitors_, o = 0; o < n.length; o++)
                t(e.bind(n[o].wrap, n[o]))
    }
    ,
    e.debug.entryPointRegistry.monitorAll = function(t) {
        e.debug.entryPointRegistry.monitorsMayExist_ = !0;
        for (var n = e.bind(t.wrap, t), o = 0; o < e.debug.entryPointRegistry.refList_.length; o++)
            e.debug.entryPointRegistry.refList_[o](n);
        e.debug.entryPointRegistry.monitors_.push(t)
    }
    ,
    e.debug.entryPointRegistry.unmonitorAllIfPossible = function(t) {
        var n = e.debug.entryPointRegistry.monitors_;
        e.asserts.assert(t == n[n.length - 1], "Only the most recent monitor can be unwrapped."),
        t = e.bind(t.unwrap, t);
        for (var o = 0; o < e.debug.entryPointRegistry.refList_.length; o++)
            e.debug.entryPointRegistry.refList_[o](t);
        n.length--
    }
    ,
    e.async.throwException = function(t) {
        e.global.setTimeout(function() {
            throw t
        }, 0)
    }
    ,
    e.async.nextTick = function(t, n, o) {
        var r = t;
        n && (r = e.bind(t, n)),
        r = e.async.nextTick.wrapCallback_(r),
        e.isFunction(e.global.setImmediate) && (o || e.async.nextTick.useSetImmediate_()) ? e.global.setImmediate(r) : (e.async.nextTick.setImmediate_ || (e.async.nextTick.setImmediate_ = e.async.nextTick.getSetImmediateEmulator_()),
        e.async.nextTick.setImmediate_(r))
    }
    ,
    e.async.nextTick.useSetImmediate_ = function() {
        return !(e.global.Window && e.global.Window.prototype && !e.labs.userAgent.browser.isEdge() && e.global.Window.prototype.setImmediate == e.global.setImmediate)
    }
    ,
    e.async.nextTick.getSetImmediateEmulator_ = function() {
        var t = e.global.MessageChannel;
        if (void 0 === t && "undefined" != typeof window && window.postMessage && window.addEventListener && !e.labs.userAgent.engine.isPresto() && (t = function() {
            var t = document.createElement("IFRAME");
            t.style.display = "none",
            e.dom.safe.setIframeSrc(t, e.html.TrustedResourceUrl.fromConstant(e.string.Const.EMPTY)),
            document.documentElement.appendChild(t);
            var n = t.contentWindow;
            (t = n.document).open(),
            e.dom.safe.documentWrite(t, e.html.SafeHtml.EMPTY),
            t.close();
            var o = "callImmediate" + Math.random()
              , r = "file:" == n.location.protocol ? "*" : n.location.protocol + "//" + n.location.host;
            t = e.bind(function(e) {
                "*" != r && e.origin != r || e.data != o || this.port1.onmessage()
            }, this),
            n.addEventListener("message", t, !1),
            this.port1 = {},
            this.port2 = {
                postMessage: function() {
                    n.postMessage(o, r)
                }
            }
        }
        ),
        void 0 !== t && !e.labs.userAgent.browser.isIE()) {
            var n = new t
              , o = {}
              , r = o;
            return n.port1.onmessage = function() {
                if (e.isDef(o.next)) {
                    var t = (o = o.next).cb;
                    o.cb = null,
                    t()
                }
            }
            ,
            function(e) {
                r.next = {
                    cb: e
                },
                r = r.next,
                n.port2.postMessage(0)
            }
        }
        return "undefined" != typeof document && "onreadystatechange"in document.createElement("SCRIPT") ? function(e) {
            var t = document.createElement("SCRIPT");
            t.onreadystatechange = function() {
                t.onreadystatechange = null,
                t.parentNode.removeChild(t),
                t = null,
                e(),
                e = null
            }
            ,
            document.documentElement.appendChild(t)
        }
        : function(t) {
            e.global.setTimeout(t, 0)
        }
    }
    ,
    e.async.nextTick.wrapCallback_ = e.functions.identity,
    e.debug.entryPointRegistry.register(function(t) {
        e.async.nextTick.wrapCallback_ = t
    }),
    e.ASSUME_NATIVE_PROMISE = !1,
    e.async.run = function(t, n) {
        e.async.run.schedule_ || e.async.run.initializeRunner_(),
        e.async.run.workQueueScheduled_ || (e.async.run.schedule_(),
        e.async.run.workQueueScheduled_ = !0),
        e.async.run.workQueue_.add(t, n)
    }
    ,
    e.async.run.initializeRunner_ = function() {
        if (e.ASSUME_NATIVE_PROMISE || e.global.Promise && e.global.Promise.resolve) {
            var t = e.global.Promise.resolve(void 0);
            e.async.run.schedule_ = function() {
                t.then(e.async.run.processWorkQueue)
            }
        } else
            e.async.run.schedule_ = function() {
                e.async.nextTick(e.async.run.processWorkQueue)
            }
    }
    ,
    e.async.run.forceNextTick = function(t) {
        e.async.run.schedule_ = function() {
            e.async.nextTick(e.async.run.processWorkQueue),
            t && t(e.async.run.processWorkQueue)
        }
    }
    ,
    e.async.run.workQueueScheduled_ = !1,
    e.async.run.workQueue_ = new e.async.WorkQueue,
    e.DEBUG && (e.async.run.resetQueue = function() {
        e.async.run.workQueueScheduled_ = !1,
        e.async.run.workQueue_ = new e.async.WorkQueue
    }
    ),
    e.async.run.processWorkQueue = function() {
        for (var t; t = e.async.run.workQueue_.remove(); ) {
            try {
                t.fn.call(t.scope)
            } catch (t) {
                e.async.throwException(t)
            }
            e.async.run.workQueue_.returnUnused(t)
        }
        e.async.run.workQueueScheduled_ = !1
    }
    ,
    e.promise = {},
    e.promise.Resolver = function() {}
    ,
    e.Promise = function(t, n) {
        if (this.state_ = e.Promise.State_.PENDING,
        this.result_ = void 0,
        this.callbackEntriesTail_ = this.callbackEntries_ = this.parent_ = null,
        this.executing_ = !1,
        0 < e.Promise.UNHANDLED_REJECTION_DELAY ? this.unhandledRejectionId_ = 0 : 0 == e.Promise.UNHANDLED_REJECTION_DELAY && (this.hadUnhandledRejection_ = !1),
        e.Promise.LONG_STACK_TRACES && (this.stack_ = [],
        this.addStackTrace_(Error("created")),
        this.currentStep_ = 0),
        t != e.nullFunction)
            try {
                var o = this;
                t.call(n, function(t) {
                    o.resolve_(e.Promise.State_.FULFILLED, t)
                }, function(t) {
                    if (e.DEBUG && !(t instanceof e.Promise.CancellationError))
                        try {
                            if (t instanceof Error)
                                throw t;
                            throw Error("Promise rejected.")
                        } catch (e) {}
                    o.resolve_(e.Promise.State_.REJECTED, t)
                })
            } catch (t) {
                this.resolve_(e.Promise.State_.REJECTED, t)
            }
    }
    ,
    e.Promise.LONG_STACK_TRACES = !1,
    e.Promise.UNHANDLED_REJECTION_DELAY = 0,
    e.Promise.State_ = {
        PENDING: 0,
        BLOCKED: 1,
        FULFILLED: 2,
        REJECTED: 3
    },
    e.Promise.CallbackEntry_ = function() {
        this.next = this.context = this.onRejected = this.onFulfilled = this.child = null,
        this.always = !1
    }
    ,
    e.Promise.CallbackEntry_.prototype.reset = function() {
        this.context = this.onRejected = this.onFulfilled = this.child = null,
        this.always = !1
    }
    ,
    e.Promise.DEFAULT_MAX_UNUSED = 100,
    e.Promise.freelist_ = new e.async.FreeList(function() {
        return new e.Promise.CallbackEntry_
    }
    ,function(e) {
        e.reset()
    }
    ,e.Promise.DEFAULT_MAX_UNUSED),
    e.Promise.getCallbackEntry_ = function(t, n, o) {
        var r = e.Promise.freelist_.get();
        return r.onFulfilled = t,
        r.onRejected = n,
        r.context = o,
        r
    }
    ,
    e.Promise.returnEntry_ = function(t) {
        e.Promise.freelist_.put(t)
    }
    ,
    e.Promise.resolve = function(t) {
        if (t instanceof e.Promise)
            return t;
        var n = new e.Promise(e.nullFunction);
        return n.resolve_(e.Promise.State_.FULFILLED, t),
        n
    }
    ,
    e.Promise.reject = function(t) {
        return new e.Promise(function(e, n) {
            n(t)
        }
        )
    }
    ,
    e.Promise.resolveThen_ = function(t, n, o) {
        e.Promise.maybeThen_(t, n, o, null) || e.async.run(e.partial(n, t))
    }
    ,
    e.Promise.race = function(t) {
        return new e.Promise(function(n, o) {
            t.length || n(void 0);
            for (var r, i = 0; i < t.length; i++)
                r = t[i],
                e.Promise.resolveThen_(r, n, o)
        }
        )
    }
    ,
    e.Promise.all = function(t) {
        return new e.Promise(function(n, o) {
            var r = t.length
              , i = [];
            if (r)
                for (var s, a = function(e, t) {
                    r--,
                    i[e] = t,
                    0 == r && n(i)
                }, l = function(e) {
                    o(e)
                }, u = 0; u < t.length; u++)
                    s = t[u],
                    e.Promise.resolveThen_(s, e.partial(a, u), l);
            else
                n(i)
        }
        )
    }
    ,
    e.Promise.allSettled = function(t) {
        return new e.Promise(function(n) {
            var o = t.length
              , r = [];
            if (o)
                for (var i, s = function(e, t, i) {
                    o--,
                    r[e] = t ? {
                        fulfilled: !0,
                        value: i
                    } : {
                        fulfilled: !1,
                        reason: i
                    },
                    0 == o && n(r)
                }, a = 0; a < t.length; a++)
                    i = t[a],
                    e.Promise.resolveThen_(i, e.partial(s, a, !0), e.partial(s, a, !1));
            else
                n(r)
        }
        )
    }
    ,
    e.Promise.firstFulfilled = function(t) {
        return new e.Promise(function(n, o) {
            var r = t.length
              , i = [];
            if (r)
                for (var s, a = function(e) {
                    n(e)
                }, l = function(e, t) {
                    r--,
                    i[e] = t,
                    0 == r && o(i)
                }, u = 0; u < t.length; u++)
                    s = t[u],
                    e.Promise.resolveThen_(s, a, e.partial(l, u));
            else
                n(void 0)
        }
        )
    }
    ,
    e.Promise.withResolver = function() {
        var t, n, o = new e.Promise(function(e, o) {
            t = e,
            n = o
        }
        );
        return new e.Promise.Resolver_(o,t,n)
    }
    ,
    e.Promise.prototype.then = function(t, n, o) {
        return null != t && e.asserts.assertFunction(t, "opt_onFulfilled should be a function."),
        null != n && e.asserts.assertFunction(n, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),
        e.Promise.LONG_STACK_TRACES && this.addStackTrace_(Error("then")),
        this.addChildPromise_(e.isFunction(t) ? t : null, e.isFunction(n) ? n : null, o)
    }
    ,
    e.Thenable.addImplementation(e.Promise),
    e.Promise.prototype.thenVoid = function(t, n, o) {
        null != t && e.asserts.assertFunction(t, "opt_onFulfilled should be a function."),
        null != n && e.asserts.assertFunction(n, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),
        e.Promise.LONG_STACK_TRACES && this.addStackTrace_(Error("then")),
        this.addCallbackEntry_(e.Promise.getCallbackEntry_(t || e.nullFunction, n || null, o))
    }
    ,
    e.Promise.prototype.thenAlways = function(t, n) {
        return e.Promise.LONG_STACK_TRACES && this.addStackTrace_(Error("thenAlways")),
        (t = e.Promise.getCallbackEntry_(t, t, n)).always = !0,
        this.addCallbackEntry_(t),
        this
    }
    ,
    e.Promise.prototype.thenCatch = function(t, n) {
        return e.Promise.LONG_STACK_TRACES && this.addStackTrace_(Error("thenCatch")),
        this.addChildPromise_(null, t, n)
    }
    ,
    e.Promise.prototype.cancel = function(t) {
        this.state_ == e.Promise.State_.PENDING && e.async.run(function() {
            var n = new e.Promise.CancellationError(t);
            this.cancelInternal_(n)
        }, this)
    }
    ,
    e.Promise.prototype.cancelInternal_ = function(t) {
        this.state_ == e.Promise.State_.PENDING && (this.parent_ ? (this.parent_.cancelChild_(this, t),
        this.parent_ = null) : this.resolve_(e.Promise.State_.REJECTED, t))
    }
    ,
    e.Promise.prototype.cancelChild_ = function(t, n) {
        if (this.callbackEntries_) {
            for (var o = 0, r = null, i = null, s = this.callbackEntries_; s && (s.always || (o++,
            s.child == t && (r = s),
            !(r && 1 < o))); s = s.next)
                r || (i = s);
            r && (this.state_ == e.Promise.State_.PENDING && 1 == o ? this.cancelInternal_(n) : (i ? this.removeEntryAfter_(i) : this.popEntry_(),
            this.executeCallback_(r, e.Promise.State_.REJECTED, n)))
        }
    }
    ,
    e.Promise.prototype.addCallbackEntry_ = function(t) {
        this.hasEntry_() || this.state_ != e.Promise.State_.FULFILLED && this.state_ != e.Promise.State_.REJECTED || this.scheduleCallbacks_(),
        this.queueEntry_(t)
    }
    ,
    e.Promise.prototype.addChildPromise_ = function(t, n, o) {
        var r = e.Promise.getCallbackEntry_(null, null, null);
        return r.child = new e.Promise(function(i, s) {
            r.onFulfilled = t ? function(e) {
                try {
                    var n = t.call(o, e);
                    i(n)
                } catch (e) {
                    s(e)
                }
            }
            : i,
            r.onRejected = n ? function(t) {
                try {
                    var r = n.call(o, t);
                    !e.isDef(r) && t instanceof e.Promise.CancellationError ? s(t) : i(r)
                } catch (e) {
                    s(e)
                }
            }
            : s
        }
        ),
        r.child.parent_ = this,
        this.addCallbackEntry_(r),
        r.child
    }
    ,
    e.Promise.prototype.unblockAndFulfill_ = function(t) {
        e.asserts.assert(this.state_ == e.Promise.State_.BLOCKED),
        this.state_ = e.Promise.State_.PENDING,
        this.resolve_(e.Promise.State_.FULFILLED, t)
    }
    ,
    e.Promise.prototype.unblockAndReject_ = function(t) {
        e.asserts.assert(this.state_ == e.Promise.State_.BLOCKED),
        this.state_ = e.Promise.State_.PENDING,
        this.resolve_(e.Promise.State_.REJECTED, t)
    }
    ,
    e.Promise.prototype.resolve_ = function(t, n) {
        this.state_ == e.Promise.State_.PENDING && (this === n && (t = e.Promise.State_.REJECTED,
        n = new TypeError("Promise cannot resolve to itself")),
        this.state_ = e.Promise.State_.BLOCKED,
        e.Promise.maybeThen_(n, this.unblockAndFulfill_, this.unblockAndReject_, this) || (this.result_ = n,
        this.state_ = t,
        this.parent_ = null,
        this.scheduleCallbacks_(),
        t != e.Promise.State_.REJECTED || n instanceof e.Promise.CancellationError || e.Promise.addUnhandledRejection_(this, n)))
    }
    ,
    e.Promise.maybeThen_ = function(t, n, o, r) {
        if (t instanceof e.Promise)
            return t.thenVoid(n, o, r),
            !0;
        if (e.Thenable.isImplementedBy(t))
            return t.then(n, o, r),
            !0;
        if (e.isObject(t))
            try {
                var i = t.then;
                if (e.isFunction(i))
                    return e.Promise.tryThen_(t, i, n, o, r),
                    !0
            } catch (e) {
                return o.call(r, e),
                !0
            }
        return !1
    }
    ,
    e.Promise.tryThen_ = function(e, t, n, o, r) {
        function i(e) {
            s || (s = !0,
            o.call(r, e))
        }
        var s = !1;
        try {
            t.call(e, function(e) {
                s || (s = !0,
                n.call(r, e))
            }, i)
        } catch (e) {
            i(e)
        }
    }
    ,
    e.Promise.prototype.scheduleCallbacks_ = function() {
        this.executing_ || (this.executing_ = !0,
        e.async.run(this.executeCallbacks_, this))
    }
    ,
    e.Promise.prototype.hasEntry_ = function() {
        return !!this.callbackEntries_
    }
    ,
    e.Promise.prototype.queueEntry_ = function(t) {
        e.asserts.assert(null != t.onFulfilled),
        this.callbackEntriesTail_ ? this.callbackEntriesTail_.next = t : this.callbackEntries_ = t,
        this.callbackEntriesTail_ = t
    }
    ,
    e.Promise.prototype.popEntry_ = function() {
        var t = null;
        return this.callbackEntries_ && (t = this.callbackEntries_,
        this.callbackEntries_ = t.next,
        t.next = null),
        this.callbackEntries_ || (this.callbackEntriesTail_ = null),
        null != t && e.asserts.assert(null != t.onFulfilled),
        t
    }
    ,
    e.Promise.prototype.removeEntryAfter_ = function(t) {
        e.asserts.assert(this.callbackEntries_),
        e.asserts.assert(null != t),
        t.next == this.callbackEntriesTail_ && (this.callbackEntriesTail_ = t),
        t.next = t.next.next
    }
    ,
    e.Promise.prototype.executeCallbacks_ = function() {
        for (var t; t = this.popEntry_(); )
            e.Promise.LONG_STACK_TRACES && this.currentStep_++,
            this.executeCallback_(t, this.state_, this.result_);
        this.executing_ = !1
    }
    ,
    e.Promise.prototype.executeCallback_ = function(t, n, o) {
        if (n == e.Promise.State_.REJECTED && t.onRejected && !t.always && this.removeUnhandledRejection_(),
        t.child)
            t.child.parent_ = null,
            e.Promise.invokeCallback_(t, n, o);
        else
            try {
                t.always ? t.onFulfilled.call(t.context) : e.Promise.invokeCallback_(t, n, o)
            } catch (t) {
                e.Promise.handleRejection_.call(null, t)
            }
        e.Promise.returnEntry_(t)
    }
    ,
    e.Promise.invokeCallback_ = function(t, n, o) {
        n == e.Promise.State_.FULFILLED ? t.onFulfilled.call(t.context, o) : t.onRejected && t.onRejected.call(t.context, o)
    }
    ,
    e.Promise.prototype.addStackTrace_ = function(t) {
        if (e.Promise.LONG_STACK_TRACES && e.isString(t.stack)) {
            var n = t.stack.split("\n", 4)[3];
            t = t.message,
            t += Array(11 - t.length).join(" "),
            this.stack_.push(t + n)
        }
    }
    ,
    e.Promise.prototype.appendLongStack_ = function(t) {
        if (e.Promise.LONG_STACK_TRACES && t && e.isString(t.stack) && this.stack_.length) {
            for (var n = ["Promise trace:"], o = this; o; o = o.parent_) {
                for (var r = this.currentStep_; 0 <= r; r--)
                    n.push(o.stack_[r]);
                n.push("Value: [" + (o.state_ == e.Promise.State_.REJECTED ? "REJECTED" : "FULFILLED") + "] <" + String(o.result_) + ">")
            }
            t.stack += "\n\n" + n.join("\n")
        }
    }
    ,
    e.Promise.prototype.removeUnhandledRejection_ = function() {
        if (0 < e.Promise.UNHANDLED_REJECTION_DELAY)
            for (var t = this; t && t.unhandledRejectionId_; t = t.parent_)
                e.global.clearTimeout(t.unhandledRejectionId_),
                t.unhandledRejectionId_ = 0;
        else if (0 == e.Promise.UNHANDLED_REJECTION_DELAY)
            for (t = this; t && t.hadUnhandledRejection_; t = t.parent_)
                t.hadUnhandledRejection_ = !1
    }
    ,
    e.Promise.addUnhandledRejection_ = function(t, n) {
        0 < e.Promise.UNHANDLED_REJECTION_DELAY ? t.unhandledRejectionId_ = e.global.setTimeout(function() {
            t.appendLongStack_(n),
            e.Promise.handleRejection_.call(null, n)
        }, e.Promise.UNHANDLED_REJECTION_DELAY) : 0 == e.Promise.UNHANDLED_REJECTION_DELAY && (t.hadUnhandledRejection_ = !0,
        e.async.run(function() {
            t.hadUnhandledRejection_ && (t.appendLongStack_(n),
            e.Promise.handleRejection_.call(null, n))
        }))
    }
    ,
    e.Promise.handleRejection_ = e.async.throwException,
    e.Promise.setUnhandledRejectionHandler = function(t) {
        e.Promise.handleRejection_ = t
    }
    ,
    e.Promise.CancellationError = function(t) {
        e.debug.Error.call(this, t)
    }
    ,
    e.inherits(e.Promise.CancellationError, e.debug.Error),
    e.Promise.CancellationError.prototype.name = "cancel",
    e.Promise.Resolver_ = function(e, t, n) {
        this.promise = e,
        this.resolve = t,
        this.reject = n
    }
    ,
    e.disposable = {},
    e.disposable.IDisposable = function() {}
    ,
    e.disposable.IDisposable.prototype.dispose = e.abstractMethod,
    e.disposable.IDisposable.prototype.isDisposed = e.abstractMethod,
    e.Disposable = function() {
        e.Disposable.MONITORING_MODE != e.Disposable.MonitoringMode.OFF && (e.Disposable.INCLUDE_STACK_ON_CREATION && (this.creationStack = Error().stack),
        e.Disposable.instances_[e.getUid(this)] = this),
        this.disposed_ = this.disposed_,
        this.onDisposeCallbacks_ = this.onDisposeCallbacks_
    }
    ,
    e.Disposable.MonitoringMode = {
        OFF: 0,
        PERMANENT: 1,
        INTERACTIVE: 2
    },
    e.Disposable.MONITORING_MODE = 0,
    e.Disposable.INCLUDE_STACK_ON_CREATION = !0,
    e.Disposable.instances_ = {},
    e.Disposable.getUndisposedObjects = function() {
        var t, n = [];
        for (t in e.Disposable.instances_)
            e.Disposable.instances_.hasOwnProperty(t) && n.push(e.Disposable.instances_[Number(t)]);
        return n
    }
    ,
    e.Disposable.clearUndisposedObjects = function() {
        e.Disposable.instances_ = {}
    }
    ,
    e.Disposable.prototype.disposed_ = !1,
    e.Disposable.prototype.isDisposed = function() {
        return this.disposed_
    }
    ,
    e.Disposable.prototype.getDisposed = e.Disposable.prototype.isDisposed,
    e.Disposable.prototype.dispose = function() {
        if (!this.disposed_ && (this.disposed_ = !0,
        this.disposeInternal(),
        e.Disposable.MONITORING_MODE != e.Disposable.MonitoringMode.OFF)) {
            var t = e.getUid(this);
            if (e.Disposable.MONITORING_MODE == e.Disposable.MonitoringMode.PERMANENT && !e.Disposable.instances_.hasOwnProperty(t))
                throw Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
            if (e.Disposable.MONITORING_MODE != e.Disposable.MonitoringMode.OFF && this.onDisposeCallbacks_ && 0 < this.onDisposeCallbacks_.length)
                throw Error(this + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
            delete e.Disposable.instances_[t]
        }
    }
    ,
    e.Disposable.prototype.registerDisposable = function(t) {
        this.addOnDisposeCallback(e.partial(e.dispose, t))
    }
    ,
    e.Disposable.prototype.addOnDisposeCallback = function(t, n) {
        this.disposed_ ? e.isDef(n) ? t.call(n) : t() : (this.onDisposeCallbacks_ || (this.onDisposeCallbacks_ = []),
        this.onDisposeCallbacks_.push(e.isDef(n) ? e.bind(t, n) : t))
    }
    ,
    e.Disposable.prototype.disposeInternal = function() {
        if (this.onDisposeCallbacks_)
            for (; this.onDisposeCallbacks_.length; )
                this.onDisposeCallbacks_.shift()()
    }
    ,
    e.Disposable.isDisposed = function(e) {
        return !(!e || "function" != typeof e.isDisposed) && e.isDisposed()
    }
    ,
    e.dispose = function(e) {
        e && "function" == typeof e.dispose && e.dispose()
    }
    ,
    e.disposeAll = function(t) {
        for (var n = 0, o = arguments.length; n < o; ++n) {
            var r = arguments[n];
            e.isArrayLike(r) ? e.disposeAll.apply(null, r) : e.dispose(r)
        }
    }
    ,
    e.debug.errorcontext = {},
    e.debug.errorcontext.addErrorContext = function(t, n, o) {
        t[e.debug.errorcontext.CONTEXT_KEY_] || (t[e.debug.errorcontext.CONTEXT_KEY_] = {}),
        t[e.debug.errorcontext.CONTEXT_KEY_][n] = o
    }
    ,
    e.debug.errorcontext.getErrorContext = function(t) {
        return t[e.debug.errorcontext.CONTEXT_KEY_] || {}
    }
    ,
    e.debug.errorcontext.CONTEXT_KEY_ = "__closure__error__context__984382",
    e.debug.LOGGING_ENABLED = e.DEBUG,
    e.debug.FORCE_SLOPPY_STACKS = !1,
    e.debug.catchErrors = function(t, n, o) {
        var r = (o = o || e.global).onerror
          , i = !!n;
        e.userAgent.WEBKIT && !e.userAgent.isVersionOrHigher("535.3") && (i = !i),
        o.onerror = function(e, n, o, s, a) {
            return r && r(e, n, o, s, a),
            t({
                message: e,
                fileName: n,
                line: o,
                lineNumber: o,
                col: s,
                error: a
            }),
            i
        }
    }
    ,
    e.debug.expose = function(t, n) {
        if (void 0 === t)
            return "undefined";
        if (null == t)
            return "NULL";
        var o, r = [];
        for (o in t)
            if (n || !e.isFunction(t[o])) {
                var i = o + " = ";
                try {
                    i += t[o]
                } catch (e) {
                    i += "*** " + e + " ***"
                }
                r.push(i)
            }
        return r.join("\n")
    }
    ,
    e.debug.deepExpose = function(t, n) {
        var o = []
          , r = []
          , i = {};
        for (function t(s, a) {
            var l = a + "  ";
            try {
                if (e.isDef(s))
                    if (e.isNull(s))
                        o.push("NULL");
                    else if (e.isString(s))
                        o.push('"' + s.replace(/\n/g, "\n" + a) + '"');
                    else if (e.isFunction(s))
                        o.push(String(s).replace(/\n/g, "\n" + a));
                    else if (e.isObject(s)) {
                        e.hasUid(s) || r.push(s);
                        var u = e.getUid(s);
                        if (i[u])
                            o.push("*** reference loop detected (id=" + u + ") ***");
                        else {
                            for (var c in i[u] = !0,
                            o.push("{"),
                            s)
                                !n && e.isFunction(s[c]) || (o.push("\n"),
                                o.push(l),
                                o.push(c + " = "),
                                t(s[c], l));
                            o.push("\n" + a + "}"),
                            delete i[u]
                        }
                    } else
                        o.push(s);
                else
                    o.push("undefined")
            } catch (e) {
                o.push("*** " + e + " ***")
            }
        }(t, ""),
        t = 0; t < r.length; t++)
            e.removeUid(r[t]);
        return o.join("")
    }
    ,
    e.debug.exposeArray = function(t) {
        for (var n = [], o = 0; o < t.length; o++)
            e.isArray(t[o]) ? n.push(e.debug.exposeArray(t[o])) : n.push(t[o]);
        return "[ " + n.join(", ") + " ]"
    }
    ,
    e.debug.normalizeErrorObject = function(t) {
        var n = e.getObjectByName("window.location.href");
        if (null == t && (t = 'Unknown Error of type "null/undefined"'),
        e.isString(t))
            return {
                message: t,
                name: "Unknown error",
                lineNumber: "Not available",
                fileName: n,
                stack: "Not available"
            };
        var o = !1;
        try {
            var r = t.lineNumber || t.line || "Not available"
        } catch (e) {
            r = "Not available",
            o = !0
        }
        try {
            var i = t.fileName || t.filename || t.sourceURL || e.global.$googDebugFname || n
        } catch (e) {
            i = "Not available",
            o = !0
        }
        return !o && t.lineNumber && t.fileName && t.stack && t.message && t.name ? t : (null == (n = t.message) && (n = t.constructor && t.constructor instanceof Function ? 'Unknown Error of type "' + (t.constructor.name ? t.constructor.name : e.debug.getFunctionName(t.constructor)) + '"' : "Unknown Error of unknown type"),
        {
            message: n,
            name: t.name || "UnknownError",
            lineNumber: r,
            fileName: i,
            stack: t.stack || "Not available"
        })
    }
    ,
    e.debug.enhanceError = function(t, n) {
        if (t instanceof Error || (t = Error(t),
        Error.captureStackTrace && Error.captureStackTrace(t, e.debug.enhanceError)),
        t.stack || (t.stack = e.debug.getStacktrace(e.debug.enhanceError)),
        n) {
            for (var o = 0; t["message" + o]; )
                ++o;
            t["message" + o] = String(n)
        }
        return t
    }
    ,
    e.debug.enhanceErrorWithContext = function(t, n) {
        if (t = e.debug.enhanceError(t),
        n)
            for (var o in n)
                e.debug.errorcontext.addErrorContext(t, o, n[o]);
        return t
    }
    ,
    e.debug.getStacktraceSimple = function(t) {
        if (!e.debug.FORCE_SLOPPY_STACKS) {
            var n = e.debug.getNativeStackTrace_(e.debug.getStacktraceSimple);
            if (n)
                return n
        }
        n = [];
        for (var o = arguments.callee.caller, r = 0; o && (!t || r < t); ) {
            n.push(e.debug.getFunctionName(o)),
            n.push("()\n");
            try {
                o = o.caller
            } catch (e) {
                n.push("[exception trying to get caller]\n");
                break
            }
            if (++r >= e.debug.MAX_STACK_DEPTH) {
                n.push("[...long stack...]");
                break
            }
        }
        return t && r >= t ? n.push("[...reached max depth limit...]") : n.push("[end]"),
        n.join("")
    }
    ,
    e.debug.MAX_STACK_DEPTH = 50,
    e.debug.getNativeStackTrace_ = function(e) {
        var t = Error();
        if (Error.captureStackTrace)
            return Error.captureStackTrace(t, e),
            String(t.stack);
        try {
            throw t
        } catch (e) {
            t = e
        }
        return (e = t.stack) ? String(e) : null
    }
    ,
    e.debug.getStacktrace = function(t) {
        var n;
        return e.debug.FORCE_SLOPPY_STACKS || (n = e.debug.getNativeStackTrace_(t || e.debug.getStacktrace)),
        n || (n = e.debug.getStacktraceHelper_(t || arguments.callee.caller, [])),
        n
    }
    ,
    e.debug.getStacktraceHelper_ = function(t, n) {
        var o = [];
        if (e.array.contains(n, t))
            o.push("[...circular reference...]");
        else if (t && n.length < e.debug.MAX_STACK_DEPTH) {
            o.push(e.debug.getFunctionName(t) + "(");
            for (var r = t.arguments, i = 0; r && i < r.length; i++) {
                0 < i && o.push(", ");
                var s = r[i];
                switch (typeof s) {
                case "object":
                    s = s ? "object" : "null";
                    break;
                case "string":
                    break;
                case "number":
                    s = String(s);
                    break;
                case "boolean":
                    s = s ? "true" : "false";
                    break;
                case "function":
                    s = (s = e.debug.getFunctionName(s)) ? s : "[fn]";
                    break;
                default:
                    s = typeof s
                }
                40 < s.length && (s = s.substr(0, 40) + "..."),
                o.push(s)
            }
            n.push(t),
            o.push(")\n");
            try {
                o.push(e.debug.getStacktraceHelper_(t.caller, n))
            } catch (e) {
                o.push("[exception trying to get caller]\n")
            }
        } else
            t ? o.push("[...long stack...]") : o.push("[end]");
        return o.join("")
    }
    ,
    e.debug.getFunctionName = function(t) {
        if (e.debug.fnNameCache_[t])
            return e.debug.fnNameCache_[t];
        if (t = String(t),
        !e.debug.fnNameCache_[t]) {
            var n = /function\s+([^\(]+)/m.exec(t);
            e.debug.fnNameCache_[t] = n ? n[1] : "[Anonymous]"
        }
        return e.debug.fnNameCache_[t]
    }
    ,
    e.debug.makeWhitespaceVisible = function(e) {
        return e.replace(/ /g, "[_]").replace(/\f/g, "[f]").replace(/\n/g, "[n]\n").replace(/\r/g, "[r]").replace(/\t/g, "[t]")
    }
    ,
    e.debug.runtimeType = function(e) {
        return e instanceof Function ? e.displayName || e.name || "unknown type name" : e instanceof Object ? e.constructor.displayName || e.constructor.name || Object.prototype.toString.call(e) : null === e ? "null" : typeof e
    }
    ,
    e.debug.fnNameCache_ = {},
    e.debug.freezeInternal_ = e.DEBUG && Object.freeze || function(e) {
        return e
    }
    ,
    e.debug.freeze = function(t) {
        return e.debug.freezeInternal_(t)
    }
    ,
    e.events = {},
    b.scope.purify = function(e) {
        return {
            valueOf: e
        }.valueOf()
    }
    ,
    e.events.BrowserFeature = {
        HAS_W3C_BUTTON: !e.userAgent.IE || e.userAgent.isDocumentModeOrHigher(9),
        HAS_W3C_EVENT_SUPPORT: !e.userAgent.IE || e.userAgent.isDocumentModeOrHigher(9),
        SET_KEY_CODE_TO_PREVENT_DEFAULT: e.userAgent.IE && !e.userAgent.isVersionOrHigher("9"),
        HAS_NAVIGATOR_ONLINE_PROPERTY: !e.userAgent.WEBKIT || e.userAgent.isVersionOrHigher("528"),
        HAS_HTML5_NETWORK_EVENT_SUPPORT: e.userAgent.GECKO && e.userAgent.isVersionOrHigher("1.9b") || e.userAgent.IE && e.userAgent.isVersionOrHigher("8") || e.userAgent.OPERA && e.userAgent.isVersionOrHigher("9.5") || e.userAgent.WEBKIT && e.userAgent.isVersionOrHigher("528"),
        HTML5_NETWORK_EVENTS_FIRE_ON_BODY: e.userAgent.GECKO && !e.userAgent.isVersionOrHigher("8") || e.userAgent.IE && !e.userAgent.isVersionOrHigher("9"),
        TOUCH_ENABLED: "ontouchstart"in e.global || !!(e.global.document && document.documentElement && "ontouchstart"in document.documentElement) || !(!e.global.navigator || !e.global.navigator.maxTouchPoints && !e.global.navigator.msMaxTouchPoints),
        POINTER_EVENTS: "PointerEvent"in e.global,
        MSPOINTER_EVENTS: "MSPointerEvent"in e.global && !(!e.global.navigator || !e.global.navigator.msPointerEnabled),
        PASSIVE_EVENTS: (0,
        b.scope.purify)(function() {
            if (!e.global.addEventListener || !Object.defineProperty)
                return !1;
            var t = !1
              , n = Object.defineProperty({}, "passive", {
                get: function() {
                    t = !0
                }
            });
            try {
                e.global.addEventListener("test", e.nullFunction, n),
                e.global.removeEventListener("test", e.nullFunction, n)
            } catch (e) {}
            return t
        })
    },
    e.events.EventId = function(e) {
        this.id = e
    }
    ,
    e.events.EventId.prototype.toString = function() {
        return this.id
    }
    ,
    e.events.Event = function(t, n) {
        this.type = t instanceof e.events.EventId ? String(t) : t,
        this.currentTarget = this.target = n,
        this.defaultPrevented = this.propagationStopped_ = !1,
        this.returnValue_ = !0
    }
    ,
    e.events.Event.prototype.stopPropagation = function() {
        this.propagationStopped_ = !0
    }
    ,
    e.events.Event.prototype.preventDefault = function() {
        this.defaultPrevented = !0,
        this.returnValue_ = !1
    }
    ,
    e.events.Event.stopPropagation = function(e) {
        e.stopPropagation()
    }
    ,
    e.events.Event.preventDefault = function(e) {
        e.preventDefault()
    }
    ,
    e.events.getVendorPrefixedName_ = function(t) {
        return e.userAgent.WEBKIT ? "webkit" + t : e.userAgent.OPERA ? "o" + t.toLowerCase() : t.toLowerCase()
    }
    ,
    e.events.EventType = {
        CLICK: "click",
        RIGHTCLICK: "rightclick",
        DBLCLICK: "dblclick",
        AUXCLICK: "auxclick",
        MOUSEDOWN: "mousedown",
        MOUSEUP: "mouseup",
        MOUSEOVER: "mouseover",
        MOUSEOUT: "mouseout",
        MOUSEMOVE: "mousemove",
        MOUSEENTER: "mouseenter",
        MOUSELEAVE: "mouseleave",
        MOUSECANCEL: "mousecancel",
        SELECTIONCHANGE: "selectionchange",
        SELECTSTART: "selectstart",
        WHEEL: "wheel",
        KEYPRESS: "keypress",
        KEYDOWN: "keydown",
        KEYUP: "keyup",
        BLUR: "blur",
        FOCUS: "focus",
        DEACTIVATE: "deactivate",
        FOCUSIN: "focusin",
        FOCUSOUT: "focusout",
        CHANGE: "change",
        RESET: "reset",
        SELECT: "select",
        SUBMIT: "submit",
        INPUT: "input",
        PROPERTYCHANGE: "propertychange",
        DRAGSTART: "dragstart",
        DRAG: "drag",
        DRAGENTER: "dragenter",
        DRAGOVER: "dragover",
        DRAGLEAVE: "dragleave",
        DROP: "drop",
        DRAGEND: "dragend",
        TOUCHSTART: "touchstart",
        TOUCHMOVE: "touchmove",
        TOUCHEND: "touchend",
        TOUCHCANCEL: "touchcancel",
        BEFOREUNLOAD: "beforeunload",
        CONSOLEMESSAGE: "consolemessage",
        CONTEXTMENU: "contextmenu",
        DEVICECHANGE: "devicechange",
        DEVICEMOTION: "devicemotion",
        DEVICEORIENTATION: "deviceorientation",
        DOMCONTENTLOADED: "DOMContentLoaded",
        ERROR: "error",
        HELP: "help",
        LOAD: "load",
        LOSECAPTURE: "losecapture",
        ORIENTATIONCHANGE: "orientationchange",
        READYSTATECHANGE: "readystatechange",
        RESIZE: "resize",
        SCROLL: "scroll",
        UNLOAD: "unload",
        CANPLAY: "canplay",
        CANPLAYTHROUGH: "canplaythrough",
        DURATIONCHANGE: "durationchange",
        EMPTIED: "emptied",
        ENDED: "ended",
        LOADEDDATA: "loadeddata",
        LOADEDMETADATA: "loadedmetadata",
        PAUSE: "pause",
        PLAY: "play",
        PLAYING: "playing",
        RATECHANGE: "ratechange",
        SEEKED: "seeked",
        SEEKING: "seeking",
        STALLED: "stalled",
        SUSPEND: "suspend",
        TIMEUPDATE: "timeupdate",
        VOLUMECHANGE: "volumechange",
        WAITING: "waiting",
        SOURCEOPEN: "sourceopen",
        SOURCEENDED: "sourceended",
        SOURCECLOSED: "sourceclosed",
        ABORT: "abort",
        UPDATE: "update",
        UPDATESTART: "updatestart",
        UPDATEEND: "updateend",
        HASHCHANGE: "hashchange",
        PAGEHIDE: "pagehide",
        PAGESHOW: "pageshow",
        POPSTATE: "popstate",
        COPY: "copy",
        PASTE: "paste",
        CUT: "cut",
        BEFORECOPY: "beforecopy",
        BEFORECUT: "beforecut",
        BEFOREPASTE: "beforepaste",
        ONLINE: "online",
        OFFLINE: "offline",
        MESSAGE: "message",
        CONNECT: "connect",
        INSTALL: "install",
        ACTIVATE: "activate",
        FETCH: "fetch",
        FOREIGNFETCH: "foreignfetch",
        MESSAGEERROR: "messageerror",
        STATECHANGE: "statechange",
        UPDATEFOUND: "updatefound",
        CONTROLLERCHANGE: "controllerchange",
        ANIMATIONSTART: e.events.getVendorPrefixedName_("AnimationStart"),
        ANIMATIONEND: e.events.getVendorPrefixedName_("AnimationEnd"),
        ANIMATIONITERATION: e.events.getVendorPrefixedName_("AnimationIteration"),
        TRANSITIONEND: e.events.getVendorPrefixedName_("TransitionEnd"),
        POINTERDOWN: "pointerdown",
        POINTERUP: "pointerup",
        POINTERCANCEL: "pointercancel",
        POINTERMOVE: "pointermove",
        POINTEROVER: "pointerover",
        POINTEROUT: "pointerout",
        POINTERENTER: "pointerenter",
        POINTERLEAVE: "pointerleave",
        GOTPOINTERCAPTURE: "gotpointercapture",
        LOSTPOINTERCAPTURE: "lostpointercapture",
        MSGESTURECHANGE: "MSGestureChange",
        MSGESTUREEND: "MSGestureEnd",
        MSGESTUREHOLD: "MSGestureHold",
        MSGESTURESTART: "MSGestureStart",
        MSGESTURETAP: "MSGestureTap",
        MSGOTPOINTERCAPTURE: "MSGotPointerCapture",
        MSINERTIASTART: "MSInertiaStart",
        MSLOSTPOINTERCAPTURE: "MSLostPointerCapture",
        MSPOINTERCANCEL: "MSPointerCancel",
        MSPOINTERDOWN: "MSPointerDown",
        MSPOINTERENTER: "MSPointerEnter",
        MSPOINTERHOVER: "MSPointerHover",
        MSPOINTERLEAVE: "MSPointerLeave",
        MSPOINTERMOVE: "MSPointerMove",
        MSPOINTEROUT: "MSPointerOut",
        MSPOINTEROVER: "MSPointerOver",
        MSPOINTERUP: "MSPointerUp",
        TEXT: "text",
        TEXTINPUT: e.userAgent.IE ? "textinput" : "textInput",
        COMPOSITIONSTART: "compositionstart",
        COMPOSITIONUPDATE: "compositionupdate",
        COMPOSITIONEND: "compositionend",
        BEFOREINPUT: "beforeinput",
        EXIT: "exit",
        LOADABORT: "loadabort",
        LOADCOMMIT: "loadcommit",
        LOADREDIRECT: "loadredirect",
        LOADSTART: "loadstart",
        LOADSTOP: "loadstop",
        RESPONSIVE: "responsive",
        SIZECHANGED: "sizechanged",
        UNRESPONSIVE: "unresponsive",
        VISIBILITYCHANGE: "visibilitychange",
        STORAGE: "storage",
        DOMSUBTREEMODIFIED: "DOMSubtreeModified",
        DOMNODEINSERTED: "DOMNodeInserted",
        DOMNODEREMOVED: "DOMNodeRemoved",
        DOMNODEREMOVEDFROMDOCUMENT: "DOMNodeRemovedFromDocument",
        DOMNODEINSERTEDINTODOCUMENT: "DOMNodeInsertedIntoDocument",
        DOMATTRMODIFIED: "DOMAttrModified",
        DOMCHARACTERDATAMODIFIED: "DOMCharacterDataModified",
        BEFOREPRINT: "beforeprint",
        AFTERPRINT: "afterprint",
        BEFOREINSTALLPROMPT: "beforeinstallprompt",
        APPINSTALLED: "appinstalled"
    },
    e.events.getPointerFallbackEventName_ = function(t, n, o) {
        return e.events.BrowserFeature.POINTER_EVENTS ? t : e.events.BrowserFeature.MSPOINTER_EVENTS ? n : o
    }
    ,
    e.events.PointerFallbackEventType = {
        POINTERDOWN: e.events.getPointerFallbackEventName_(e.events.EventType.POINTERDOWN, e.events.EventType.MSPOINTERDOWN, e.events.EventType.MOUSEDOWN),
        POINTERUP: e.events.getPointerFallbackEventName_(e.events.EventType.POINTERUP, e.events.EventType.MSPOINTERUP, e.events.EventType.MOUSEUP),
        POINTERCANCEL: e.events.getPointerFallbackEventName_(e.events.EventType.POINTERCANCEL, e.events.EventType.MSPOINTERCANCEL, e.events.EventType.MOUSECANCEL),
        POINTERMOVE: e.events.getPointerFallbackEventName_(e.events.EventType.POINTERMOVE, e.events.EventType.MSPOINTERMOVE, e.events.EventType.MOUSEMOVE),
        POINTEROVER: e.events.getPointerFallbackEventName_(e.events.EventType.POINTEROVER, e.events.EventType.MSPOINTEROVER, e.events.EventType.MOUSEOVER),
        POINTEROUT: e.events.getPointerFallbackEventName_(e.events.EventType.POINTEROUT, e.events.EventType.MSPOINTEROUT, e.events.EventType.MOUSEOUT),
        POINTERENTER: e.events.getPointerFallbackEventName_(e.events.EventType.POINTERENTER, e.events.EventType.MSPOINTERENTER, e.events.EventType.MOUSEENTER),
        POINTERLEAVE: e.events.getPointerFallbackEventName_(e.events.EventType.POINTERLEAVE, e.events.EventType.MSPOINTERLEAVE, e.events.EventType.MOUSELEAVE)
    },
    e.events.PointerTouchFallbackEventType = {
        POINTERDOWN: e.events.getPointerFallbackEventName_(e.events.EventType.POINTERDOWN, e.events.EventType.MSPOINTERDOWN, e.events.EventType.TOUCHSTART),
        POINTERUP: e.events.getPointerFallbackEventName_(e.events.EventType.POINTERUP, e.events.EventType.MSPOINTERUP, e.events.EventType.TOUCHEND),
        POINTERCANCEL: e.events.getPointerFallbackEventName_(e.events.EventType.POINTERCANCEL, e.events.EventType.MSPOINTERCANCEL, e.events.EventType.TOUCHCANCEL),
        POINTERMOVE: e.events.getPointerFallbackEventName_(e.events.EventType.POINTERMOVE, e.events.EventType.MSPOINTERMOVE, e.events.EventType.TOUCHMOVE)
    },
    e.events.PointerAsMouseEventType = {
        MOUSEDOWN: e.events.PointerFallbackEventType.POINTERDOWN,
        MOUSEUP: e.events.PointerFallbackEventType.POINTERUP,
        MOUSECANCEL: e.events.PointerFallbackEventType.POINTERCANCEL,
        MOUSEMOVE: e.events.PointerFallbackEventType.POINTERMOVE,
        MOUSEOVER: e.events.PointerFallbackEventType.POINTEROVER,
        MOUSEOUT: e.events.PointerFallbackEventType.POINTEROUT,
        MOUSEENTER: e.events.PointerFallbackEventType.POINTERENTER,
        MOUSELEAVE: e.events.PointerFallbackEventType.POINTERLEAVE
    },
    e.events.MouseAsMouseEventType = {
        MOUSEDOWN: e.events.EventType.MOUSEDOWN,
        MOUSEUP: e.events.EventType.MOUSEUP,
        MOUSECANCEL: e.events.EventType.MOUSECANCEL,
        MOUSEMOVE: e.events.EventType.MOUSEMOVE,
        MOUSEOVER: e.events.EventType.MOUSEOVER,
        MOUSEOUT: e.events.EventType.MOUSEOUT,
        MOUSEENTER: e.events.EventType.MOUSEENTER,
        MOUSELEAVE: e.events.EventType.MOUSELEAVE
    },
    e.events.PointerAsTouchEventType = {
        TOUCHCANCEL: e.events.PointerTouchFallbackEventType.POINTERCANCEL,
        TOUCHEND: e.events.PointerTouchFallbackEventType.POINTERUP,
        TOUCHMOVE: e.events.PointerTouchFallbackEventType.POINTERMOVE,
        TOUCHSTART: e.events.PointerTouchFallbackEventType.POINTERDOWN
    },
    e.events.USE_LAYER_XY_AS_OFFSET_XY = !1,
    e.events.BrowserEvent = function(t, n) {
        e.events.Event.call(this, t ? t.type : ""),
        this.relatedTarget = this.currentTarget = this.target = null,
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0,
        this.key = "",
        this.charCode = this.keyCode = 0,
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1,
        this.state = null,
        this.platformModifierKey = !1,
        this.pointerId = 0,
        this.pointerType = "",
        this.event_ = null,
        t && this.init(t, n)
    }
    ,
    e.inherits(e.events.BrowserEvent, e.events.Event),
    e.events.BrowserEvent.MouseButton = {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2
    },
    e.events.BrowserEvent.PointerType = {
        MOUSE: "mouse",
        PEN: "pen",
        TOUCH: "touch"
    },
    e.events.BrowserEvent.IEButtonMap = e.debug.freeze([1, 4, 2]),
    e.events.BrowserEvent.IE_BUTTON_MAP = e.events.BrowserEvent.IEButtonMap,
    e.events.BrowserEvent.IE_POINTER_TYPE_MAP = e.debug.freeze({
        2: e.events.BrowserEvent.PointerType.TOUCH,
        3: e.events.BrowserEvent.PointerType.PEN,
        4: e.events.BrowserEvent.PointerType.MOUSE
    }),
    e.events.BrowserEvent.prototype.init = function(t, n) {
        var o = this.type = t.type
          , r = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null;
        this.target = t.target || t.srcElement,
        this.currentTarget = n,
        (n = t.relatedTarget) ? e.userAgent.GECKO && (e.reflect.canAccessProperty(n, "nodeName") || (n = null)) : o == e.events.EventType.MOUSEOVER ? n = t.fromElement : o == e.events.EventType.MOUSEOUT && (n = t.toElement),
        this.relatedTarget = n,
        r ? (this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX,
        this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY,
        this.screenX = r.screenX || 0,
        this.screenY = r.screenY || 0) : (e.events.USE_LAYER_XY_AS_OFFSET_XY ? (this.offsetX = void 0 !== t.layerX ? t.layerX : t.offsetX,
        this.offsetY = void 0 !== t.layerY ? t.layerY : t.offsetY) : (this.offsetX = e.userAgent.WEBKIT || void 0 !== t.offsetX ? t.offsetX : t.layerX,
        this.offsetY = e.userAgent.WEBKIT || void 0 !== t.offsetY ? t.offsetY : t.layerY),
        this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX,
        this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY,
        this.screenX = t.screenX || 0,
        this.screenY = t.screenY || 0),
        this.button = t.button,
        this.keyCode = t.keyCode || 0,
        this.key = t.key || "",
        this.charCode = t.charCode || ("keypress" == o ? t.keyCode : 0),
        this.ctrlKey = t.ctrlKey,
        this.altKey = t.altKey,
        this.shiftKey = t.shiftKey,
        this.metaKey = t.metaKey,
        this.platformModifierKey = e.userAgent.MAC ? t.metaKey : t.ctrlKey,
        this.pointerId = t.pointerId || 0,
        this.pointerType = e.events.BrowserEvent.getPointerType_(t),
        this.state = t.state,
        this.event_ = t,
        t.defaultPrevented && this.preventDefault()
    }
    ,
    e.events.BrowserEvent.prototype.isButton = function(t) {
        return e.events.BrowserFeature.HAS_W3C_BUTTON ? this.event_.button == t : "click" == this.type ? t == e.events.BrowserEvent.MouseButton.LEFT : !!(this.event_.button & e.events.BrowserEvent.IE_BUTTON_MAP[t])
    }
    ,
    e.events.BrowserEvent.prototype.isMouseActionButton = function() {
        return this.isButton(e.events.BrowserEvent.MouseButton.LEFT) && !(e.userAgent.WEBKIT && e.userAgent.MAC && this.ctrlKey)
    }
    ,
    e.events.BrowserEvent.prototype.stopPropagation = function() {
        e.events.BrowserEvent.superClass_.stopPropagation.call(this),
        this.event_.stopPropagation ? this.event_.stopPropagation() : this.event_.cancelBubble = !0
    }
    ,
    e.events.BrowserEvent.prototype.preventDefault = function() {
        e.events.BrowserEvent.superClass_.preventDefault.call(this);
        var t = this.event_;
        if (t.preventDefault)
            t.preventDefault();
        else if (t.returnValue = !1,
        e.events.BrowserFeature.SET_KEY_CODE_TO_PREVENT_DEFAULT)
            try {
                (t.ctrlKey || 112 <= t.keyCode && 123 >= t.keyCode) && (t.keyCode = -1)
            } catch (e) {}
    }
    ,
    e.events.BrowserEvent.prototype.getBrowserEvent = function() {
        return this.event_
    }
    ,
    e.events.BrowserEvent.getPointerType_ = function(t) {
        return e.isString(t.pointerType) ? t.pointerType : e.events.BrowserEvent.IE_POINTER_TYPE_MAP[t.pointerType] || ""
    }
    ,
    e.events.Listenable = function() {}
    ,
    e.events.Listenable.IMPLEMENTED_BY_PROP = "closure_listenable_" + (1e6 * Math.random() | 0),
    e.events.Listenable.addImplementation = function(t) {
        t.prototype[e.events.Listenable.IMPLEMENTED_BY_PROP] = !0
    }
    ,
    e.events.Listenable.isImplementedBy = function(t) {
        return !(!t || !t[e.events.Listenable.IMPLEMENTED_BY_PROP])
    }
    ,
    e.events.ListenableKey = function() {}
    ,
    e.events.ListenableKey.counter_ = 0,
    e.events.ListenableKey.reserveKey = function() {
        return ++e.events.ListenableKey.counter_
    }
    ,
    e.events.Listener = function(t, n, o, r, i, s) {
        e.events.Listener.ENABLE_MONITORING && (this.creationStack = Error().stack),
        this.listener = t,
        this.proxy = n,
        this.src = o,
        this.type = r,
        this.capture = !!i,
        this.handler = s,
        this.key = e.events.ListenableKey.reserveKey(),
        this.removed = this.callOnce = !1
    }
    ,
    e.events.Listener.ENABLE_MONITORING = !1,
    e.events.Listener.prototype.markAsRemoved = function() {
        this.removed = !0,
        this.handler = this.src = this.proxy = this.listener = null
    }
    ,
    e.events.ListenerMap = function(e) {
        this.src = e,
        this.listeners = {},
        this.typeCount_ = 0
    }
    ,
    e.events.ListenerMap.prototype.getTypeCount = function() {
        return this.typeCount_
    }
    ,
    e.events.ListenerMap.prototype.getListenerCount = function() {
        var e, t = 0;
        for (e in this.listeners)
            t += this.listeners[e].length;
        return t
    }
    ,
    e.events.ListenerMap.prototype.add = function(t, n, o, r, i) {
        var s = t.toString();
        (t = this.listeners[s]) || (t = this.listeners[s] = [],
        this.typeCount_++);
        var a = e.events.ListenerMap.findListenerIndex_(t, n, r, i);
        return -1 < a ? (n = t[a],
        o || (n.callOnce = !1)) : ((n = new e.events.Listener(n,null,this.src,s,!!r,i)).callOnce = o,
        t.push(n)),
        n
    }
    ,
    e.events.ListenerMap.prototype.remove = function(t, n, o, r) {
        if (!((t = t.toString())in this.listeners))
            return !1;
        var i = this.listeners[t];
        return -1 < (n = e.events.ListenerMap.findListenerIndex_(i, n, o, r)) && (i[n].markAsRemoved(),
        e.array.removeAt(i, n),
        0 == i.length && (delete this.listeners[t],
        this.typeCount_--),
        !0)
    }
    ,
    e.events.ListenerMap.prototype.removeByKey = function(t) {
        var n = t.type;
        if (!(n in this.listeners))
            return !1;
        var o = e.array.remove(this.listeners[n], t);
        return o && (t.markAsRemoved(),
        0 == this.listeners[n].length && (delete this.listeners[n],
        this.typeCount_--)),
        o
    }
    ,
    e.events.ListenerMap.prototype.removeAll = function(e) {
        e = e && e.toString();
        var t, n = 0;
        for (t in this.listeners)
            if (!e || t == e) {
                for (var o = this.listeners[t], r = 0; r < o.length; r++)
                    ++n,
                    o[r].markAsRemoved();
                delete this.listeners[t],
                this.typeCount_--
            }
        return n
    }
    ,
    e.events.ListenerMap.prototype.getListeners = function(e, t) {
        var n = [];
        if (e = this.listeners[e.toString()])
            for (var o = 0; o < e.length; ++o) {
                var r = e[o];
                r.capture == t && n.push(r)
            }
        return n
    }
    ,
    e.events.ListenerMap.prototype.getListener = function(t, n, o, r) {
        var i = -1;
        return (t = this.listeners[t.toString()]) && (i = e.events.ListenerMap.findListenerIndex_(t, n, o, r)),
        -1 < i ? t[i] : null
    }
    ,
    e.events.ListenerMap.prototype.hasListener = function(t, n) {
        var o = e.isDef(t)
          , r = o ? t.toString() : ""
          , i = e.isDef(n);
        return e.object.some(this.listeners, function(e) {
            for (var t = 0; t < e.length; ++t)
                if (!(o && e[t].type != r || i && e[t].capture != n))
                    return !0;
            return !1
        })
    }
    ,
    e.events.ListenerMap.findListenerIndex_ = function(e, t, n, o) {
        for (var r = 0; r < e.length; ++r) {
            var i = e[r];
            if (!i.removed && i.listener == t && i.capture == !!n && i.handler == o)
                return r
        }
        return -1
    }
    ,
    e.events.LISTENER_MAP_PROP_ = "closure_lm_" + (1e6 * Math.random() | 0),
    e.events.onString_ = "on",
    e.events.onStringMap_ = {},
    e.events.CaptureSimulationMode = {
        OFF_AND_FAIL: 0,
        OFF_AND_SILENT: 1,
        ON: 2
    },
    e.events.CAPTURE_SIMULATION_MODE = 2,
    e.events.listenerCountEstimate_ = 0,
    e.events.listen = function(t, n, o, r, i) {
        if (r && r.once)
            return e.events.listenOnce(t, n, o, r, i);
        if (e.isArray(n)) {
            for (var s = 0; s < n.length; s++)
                e.events.listen(t, n[s], o, r, i);
            return null
        }
        return o = e.events.wrapListener(o),
        e.events.Listenable.isImplementedBy(t) ? (r = e.isObject(r) ? !!r.capture : !!r,
        t.listen(n, o, r, i)) : e.events.listen_(t, n, o, !1, r, i)
    }
    ,
    e.events.listen_ = function(t, n, o, r, i, s) {
        if (!n)
            throw Error("Invalid event type");
        var a = e.isObject(i) ? !!i.capture : !!i;
        if (a && !e.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT) {
            if (e.events.CAPTURE_SIMULATION_MODE == e.events.CaptureSimulationMode.OFF_AND_FAIL)
                return e.asserts.fail("Can not register capture listener in IE8-."),
                null;
            if (e.events.CAPTURE_SIMULATION_MODE == e.events.CaptureSimulationMode.OFF_AND_SILENT)
                return null
        }
        var l = e.events.getListenerMap_(t);
        if (l || (t[e.events.LISTENER_MAP_PROP_] = l = new e.events.ListenerMap(t)),
        (o = l.add(n, o, r, a, s)).proxy)
            return o;
        if (r = e.events.getProxy(),
        o.proxy = r,
        r.src = t,
        r.listener = o,
        t.addEventListener)
            e.events.BrowserFeature.PASSIVE_EVENTS || (i = a),
            void 0 === i && (i = !1),
            t.addEventListener(n.toString(), r, i);
        else if (t.attachEvent)
            t.attachEvent(e.events.getOnString_(n.toString()), r);
        else {
            if (!t.addListener || !t.removeListener)
                throw Error("addEventListener and attachEvent are unavailable.");
            e.asserts.assert("change" === n, "MediaQueryList only has a change event"),
            t.addListener(r)
        }
        return e.events.listenerCountEstimate_++,
        o
    }
    ,
    e.events.getProxy = function() {
        var t = e.events.handleBrowserEvent_
          , n = e.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT ? function(e) {
            return t.call(n.src, n.listener, e)
        }
        : function(e) {
            if (!(e = t.call(n.src, n.listener, e)))
                return e
        }
        ;
        return n
    }
    ,
    e.events.listenOnce = function(t, n, o, r, i) {
        if (e.isArray(n)) {
            for (var s = 0; s < n.length; s++)
                e.events.listenOnce(t, n[s], o, r, i);
            return null
        }
        return o = e.events.wrapListener(o),
        e.events.Listenable.isImplementedBy(t) ? (r = e.isObject(r) ? !!r.capture : !!r,
        t.listenOnce(n, o, r, i)) : e.events.listen_(t, n, o, !0, r, i)
    }
    ,
    e.events.listenWithWrapper = function(e, t, n, o, r) {
        t.listen(e, n, o, r)
    }
    ,
    e.events.unlisten = function(t, n, o, r, i) {
        if (e.isArray(n)) {
            for (var s = 0; s < n.length; s++)
                e.events.unlisten(t, n[s], o, r, i);
            return null
        }
        return r = e.isObject(r) ? !!r.capture : !!r,
        o = e.events.wrapListener(o),
        e.events.Listenable.isImplementedBy(t) ? t.unlisten(n, o, r, i) : !!t && (!(!(t = e.events.getListenerMap_(t)) || !(n = t.getListener(n, o, r, i))) && e.events.unlistenByKey(n))
    }
    ,
    e.events.unlistenByKey = function(t) {
        if (e.isNumber(t) || !t || t.removed)
            return !1;
        var n = t.src;
        if (e.events.Listenable.isImplementedBy(n))
            return n.unlistenByKey(t);
        var o = t.type
          , r = t.proxy;
        return n.removeEventListener ? n.removeEventListener(o, r, t.capture) : n.detachEvent ? n.detachEvent(e.events.getOnString_(o), r) : n.addListener && n.removeListener && n.removeListener(r),
        e.events.listenerCountEstimate_--,
        (o = e.events.getListenerMap_(n)) ? (o.removeByKey(t),
        0 == o.getTypeCount() && (o.src = null,
        n[e.events.LISTENER_MAP_PROP_] = null)) : t.markAsRemoved(),
        !0
    }
    ,
    e.events.unlistenWithWrapper = function(e, t, n, o, r) {
        t.unlisten(e, n, o, r)
    }
    ,
    e.events.removeAll = function(t, n) {
        if (!t)
            return 0;
        if (e.events.Listenable.isImplementedBy(t))
            return t.removeAllListeners(n);
        if (!(t = e.events.getListenerMap_(t)))
            return 0;
        var o = 0;
        for (var r in n = n && n.toString(),
        t.listeners)
            if (!n || r == n)
                for (var i = t.listeners[r].concat(), s = 0; s < i.length; ++s)
                    e.events.unlistenByKey(i[s]) && ++o;
        return o
    }
    ,
    e.events.getListeners = function(t, n, o) {
        return e.events.Listenable.isImplementedBy(t) ? t.getListeners(n, o) : t && (t = e.events.getListenerMap_(t)) ? t.getListeners(n, o) : []
    }
    ,
    e.events.getListener = function(t, n, o, r, i) {
        return o = e.events.wrapListener(o),
        r = !!r,
        e.events.Listenable.isImplementedBy(t) ? t.getListener(n, o, r, i) : t && (t = e.events.getListenerMap_(t)) ? t.getListener(n, o, r, i) : null
    }
    ,
    e.events.hasListener = function(t, n, o) {
        return e.events.Listenable.isImplementedBy(t) ? t.hasListener(n, o) : !!(t = e.events.getListenerMap_(t)) && t.hasListener(n, o)
    }
    ,
    e.events.expose = function(e) {
        var t, n = [];
        for (t in e)
            e[t] && e[t].id ? n.push(t + " = " + e[t] + " (" + e[t].id + ")") : n.push(t + " = " + e[t]);
        return n.join("\n")
    }
    ,
    e.events.getOnString_ = function(t) {
        return t in e.events.onStringMap_ ? e.events.onStringMap_[t] : e.events.onStringMap_[t] = e.events.onString_ + t
    }
    ,
    e.events.fireListeners = function(t, n, o, r) {
        return e.events.Listenable.isImplementedBy(t) ? t.fireListeners(n, o, r) : e.events.fireListeners_(t, n, o, r)
    }
    ,
    e.events.fireListeners_ = function(t, n, o, r) {
        var i = !0;
        if ((t = e.events.getListenerMap_(t)) && (n = t.listeners[n.toString()]))
            for (n = n.concat(),
            t = 0; t < n.length; t++) {
                var s = n[t];
                s && s.capture == o && !s.removed && (s = e.events.fireListener(s, r),
                i = i && !1 !== s)
            }
        return i
    }
    ,
    e.events.fireListener = function(t, n) {
        var o = t.listener
          , r = t.handler || t.src;
        return t.callOnce && e.events.unlistenByKey(t),
        o.call(r, n)
    }
    ,
    e.events.getTotalListenerCount = function() {
        return e.events.listenerCountEstimate_
    }
    ,
    e.events.dispatchEvent = function(t, n) {
        return e.asserts.assert(e.events.Listenable.isImplementedBy(t), "Can not use goog.events.dispatchEvent with non-goog.events.Listenable instance."),
        t.dispatchEvent(n)
    }
    ,
    e.events.protectBrowserEventEntryPoint = function(t) {
        e.events.handleBrowserEvent_ = t.protectEntryPoint(e.events.handleBrowserEvent_)
    }
    ,
    e.events.handleBrowserEvent_ = function(t, n) {
        if (t.removed)
            return !0;
        if (!e.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT) {
            var o = n || e.getObjectByName("window.event");
            n = new e.events.BrowserEvent(o,this);
            var r = !0;
            if (e.events.CAPTURE_SIMULATION_MODE == e.events.CaptureSimulationMode.ON) {
                if (!e.events.isMarkedIeEvent_(o)) {
                    e.events.markIeEvent_(o),
                    o = [];
                    for (var i = n.currentTarget; i; i = i.parentNode)
                        o.push(i);
                    for (t = t.type,
                    i = o.length - 1; !n.propagationStopped_ && 0 <= i; i--) {
                        n.currentTarget = o[i];
                        var s = e.events.fireListeners_(o[i], t, !0, n);
                        r = r && s
                    }
                    for (i = 0; !n.propagationStopped_ && i < o.length; i++)
                        n.currentTarget = o[i],
                        s = e.events.fireListeners_(o[i], t, !1, n),
                        r = r && s
                }
            } else
                r = e.events.fireListener(t, n);
            return r
        }
        return e.events.fireListener(t, new e.events.BrowserEvent(n,this))
    }
    ,
    e.events.markIeEvent_ = function(e) {
        var t = !1;
        if (0 == e.keyCode)
            try {
                return void (e.keyCode = -1)
            } catch (e) {
                t = !0
            }
        (t || null == e.returnValue) && (e.returnValue = !0)
    }
    ,
    e.events.isMarkedIeEvent_ = function(e) {
        return 0 > e.keyCode || null != e.returnValue
    }
    ,
    e.events.uniqueIdCounter_ = 0,
    e.events.getUniqueId = function(t) {
        return t + "_" + e.events.uniqueIdCounter_++
    }
    ,
    e.events.getListenerMap_ = function(t) {
        return (t = t[e.events.LISTENER_MAP_PROP_])instanceof e.events.ListenerMap ? t : null
    }
    ,
    e.events.LISTENER_WRAPPER_PROP_ = "__closure_events_fn_" + (1e9 * Math.random() >>> 0),
    e.events.wrapListener = function(t) {
        return e.asserts.assert(t, "Listener can not be null."),
        e.isFunction(t) ? t : (e.asserts.assert(t.handleEvent, "An object listener must have handleEvent method."),
        t[e.events.LISTENER_WRAPPER_PROP_] || (t[e.events.LISTENER_WRAPPER_PROP_] = function(e) {
            return t.handleEvent(e)
        }
        ),
        t[e.events.LISTENER_WRAPPER_PROP_])
    }
    ,
    e.debug.entryPointRegistry.register(function(t) {
        e.events.handleBrowserEvent_ = t(e.events.handleBrowserEvent_)
    }),
    e.events.EventTarget = function() {
        e.Disposable.call(this),
        this.eventTargetListeners_ = new e.events.ListenerMap(this),
        this.actualEventTarget_ = this,
        this.parentEventTarget_ = null
    }
    ,
    e.inherits(e.events.EventTarget, e.Disposable),
    e.events.Listenable.addImplementation(e.events.EventTarget),
    e.events.EventTarget.MAX_ANCESTORS_ = 1e3,
    e.events.EventTarget.prototype.getParentEventTarget = function() {
        return this.parentEventTarget_
    }
    ,
    e.events.EventTarget.prototype.setParentEventTarget = function(e) {
        this.parentEventTarget_ = e
    }
    ,
    e.events.EventTarget.prototype.addEventListener = function(t, n, o, r) {
        e.events.listen(this, t, n, o, r)
    }
    ,
    e.events.EventTarget.prototype.removeEventListener = function(t, n, o, r) {
        e.events.unlisten(this, t, n, o, r)
    }
    ,
    e.events.EventTarget.prototype.dispatchEvent = function(t) {
        this.assertInitialized_();
        var n = this.getParentEventTarget();
        if (n)
            for (var o = [], r = 1; n; n = n.getParentEventTarget())
                o.push(n),
                e.asserts.assert(++r < e.events.EventTarget.MAX_ANCESTORS_, "infinite loop");
        return e.events.EventTarget.dispatchEventInternal_(this.actualEventTarget_, t, o)
    }
    ,
    e.events.EventTarget.prototype.disposeInternal = function() {
        e.events.EventTarget.superClass_.disposeInternal.call(this),
        this.removeAllListeners(),
        this.parentEventTarget_ = null
    }
    ,
    e.events.EventTarget.prototype.listen = function(e, t, n, o) {
        return this.assertInitialized_(),
        this.eventTargetListeners_.add(String(e), t, !1, n, o)
    }
    ,
    e.events.EventTarget.prototype.listenOnce = function(e, t, n, o) {
        return this.eventTargetListeners_.add(String(e), t, !0, n, o)
    }
    ,
    e.events.EventTarget.prototype.unlisten = function(e, t, n, o) {
        return this.eventTargetListeners_.remove(String(e), t, n, o)
    }
    ,
    e.events.EventTarget.prototype.unlistenByKey = function(e) {
        return this.eventTargetListeners_.removeByKey(e)
    }
    ,
    e.events.EventTarget.prototype.removeAllListeners = function(e) {
        return this.eventTargetListeners_ ? this.eventTargetListeners_.removeAll(e) : 0
    }
    ,
    e.events.EventTarget.prototype.fireListeners = function(e, t, n) {
        if (!(e = this.eventTargetListeners_.listeners[String(e)]))
            return !0;
        e = e.concat();
        for (var o = !0, r = 0; r < e.length; ++r) {
            var i = e[r];
            if (i && !i.removed && i.capture == t) {
                var s = i.listener
                  , a = i.handler || i.src;
                i.callOnce && this.unlistenByKey(i),
                o = !1 !== s.call(a, n) && o
            }
        }
        return o && 0 != n.returnValue_
    }
    ,
    e.events.EventTarget.prototype.getListeners = function(e, t) {
        return this.eventTargetListeners_.getListeners(String(e), t)
    }
    ,
    e.events.EventTarget.prototype.getListener = function(e, t, n, o) {
        return this.eventTargetListeners_.getListener(String(e), t, n, o)
    }
    ,
    e.events.EventTarget.prototype.hasListener = function(t, n) {
        return t = e.isDef(t) ? String(t) : void 0,
        this.eventTargetListeners_.hasListener(t, n)
    }
    ,
    e.events.EventTarget.prototype.setTargetForTesting = function(e) {
        this.actualEventTarget_ = e
    }
    ,
    e.events.EventTarget.prototype.assertInitialized_ = function() {
        e.asserts.assert(this.eventTargetListeners_, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
    }
    ,
    e.events.EventTarget.dispatchEventInternal_ = function(t, n, o) {
        var r = n.type || n;
        if (e.isString(n))
            n = new e.events.Event(n,t);
        else if (n instanceof e.events.Event)
            n.target = n.target || t;
        else {
            var i = n;
            n = new e.events.Event(r,t),
            e.object.extend(n, i)
        }
        if (i = !0,
        o)
            for (var s = o.length - 1; !n.propagationStopped_ && 0 <= s; s--) {
                var a = n.currentTarget = o[s];
                i = a.fireListeners(r, !0, n) && i
            }
        if (n.propagationStopped_ || (i = (a = n.currentTarget = t).fireListeners(r, !0, n) && i,
        n.propagationStopped_ || (i = a.fireListeners(r, !1, n) && i)),
        o)
            for (s = 0; !n.propagationStopped_ && s < o.length; s++)
                i = (a = n.currentTarget = o[s]).fireListeners(r, !1, n) && i;
        return i
    }
    ,
    e.Timer = function(t, n) {
        e.events.EventTarget.call(this),
        this.interval_ = t || 1,
        this.timerObject_ = n || e.Timer.defaultTimerObject,
        this.boundTick_ = e.bind(this.tick_, this),
        this.last_ = e.now()
    }
    ,
    e.inherits(e.Timer, e.events.EventTarget),
    e.Timer.MAX_TIMEOUT_ = 2147483647,
    e.Timer.INVALID_TIMEOUT_ID_ = -1,
    e.Timer.prototype.enabled = !1,
    e.Timer.defaultTimerObject = e.global,
    e.Timer.intervalScale = .8,
    e.Timer.prototype.timer_ = null,
    e.Timer.prototype.getInterval = function() {
        return this.interval_
    }
    ,
    e.Timer.prototype.setInterval = function(e) {
        this.interval_ = e,
        this.timer_ && this.enabled ? (this.stop(),
        this.start()) : this.timer_ && this.stop()
    }
    ,
    e.Timer.prototype.tick_ = function() {
        if (this.enabled) {
            var t = e.now() - this.last_;
            0 < t && t < this.interval_ * e.Timer.intervalScale ? this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_ - t) : (this.timer_ && (this.timerObject_.clearTimeout(this.timer_),
            this.timer_ = null),
            this.dispatchTick(),
            this.enabled && (this.stop(),
            this.start()))
        }
    }
    ,
    e.Timer.prototype.dispatchTick = function() {
        this.dispatchEvent(e.Timer.TICK)
    }
    ,
    e.Timer.prototype.start = function() {
        this.enabled = !0,
        this.timer_ || (this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_),
        this.last_ = e.now())
    }
    ,
    e.Timer.prototype.stop = function() {
        this.enabled = !1,
        this.timer_ && (this.timerObject_.clearTimeout(this.timer_),
        this.timer_ = null)
    }
    ,
    e.Timer.prototype.disposeInternal = function() {
        e.Timer.superClass_.disposeInternal.call(this),
        this.stop(),
        delete this.timerObject_
    }
    ,
    e.Timer.TICK = "tick",
    e.Timer.callOnce = function(t, n, o) {
        if (e.isFunction(t))
            o && (t = e.bind(t, o));
        else {
            if (!t || "function" != typeof t.handleEvent)
                throw Error("Invalid listener argument");
            t = e.bind(t.handleEvent, t)
        }
        return Number(n) > e.Timer.MAX_TIMEOUT_ ? e.Timer.INVALID_TIMEOUT_ID_ : e.Timer.defaultTimerObject.setTimeout(t, n || 0)
    }
    ,
    e.Timer.clear = function(t) {
        e.Timer.defaultTimerObject.clearTimeout(t)
    }
    ,
    e.Timer.promise = function(t, n) {
        var o = null;
        return new e.Promise(function(r, i) {
            (o = e.Timer.callOnce(function() {
                r(n)
            }, t)) == e.Timer.INVALID_TIMEOUT_ID_ && i(Error("Failed to schedule timer."))
        }
        ).thenCatch(function(t) {
            throw e.Timer.clear(o),
            t
        })
    }
    ,
    z.Trashcan = function(e) {
        this.workspace_ = e
    }
    ,
    z.Trashcan.prototype.SPRITE_URL_ = "media/sprites.png",
    z.Trashcan.prototype.LID_URL_ = "media/trashlid.png",
    z.Trashcan.prototype.WIDTH_ = 47,
    z.Trashcan.prototype.BODY_HEIGHT_ = 45,
    z.Trashcan.prototype.LID_HEIGHT_ = 15,
    z.Trashcan.prototype.MARGIN_BOTTOM_ = 35,
    z.Trashcan.prototype.MARGIN_SIDE_ = 35,
    z.Trashcan.prototype.MARGIN_HOTSPOT_ = 25,
    z.Trashcan.prototype.isOpen = !1,
    z.Trashcan.prototype.svgGroup_ = null,
    z.Trashcan.prototype.svgLid_ = null,
    z.Trashcan.prototype.lidTask_ = 0,
    z.Trashcan.prototype.lidAngle_ = 0,
    z.Trashcan.prototype.left_ = 0,
    z.Trashcan.prototype.top_ = 0,
    z.Trashcan.prototype.createDom = function() {
        this.svgGroup_ = z.createSvgElement("g", {
            filter: "url(#blocklyTrashcanShadowFilter)"
        }, null);
        var e = z.createSvgElement("clipPath", {
            id: "blocklyTrashBodyClipPath"
        }, this.svgGroup_);
        return z.createSvgElement("rect", {
            width: this.WIDTH_,
            height: this.BODY_HEIGHT_,
            y: this.LID_HEIGHT_
        }, e),
        z.createSvgElement("image", {
            width: z.SPRITE.width,
            height: z.SPRITE.height,
            y: -32,
            "clip-path": "url(#blocklyTrashBodyClipPath)"
        }, this.svgGroup_).setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", z.pathToBlockly + z.SPRITE.url),
        e = z.createSvgElement("clipPath", {
            id: "blocklyTrashLidClipPath"
        }, this.svgGroup_),
        z.createSvgElement("rect", {
            width: this.WIDTH_,
            height: this.LID_HEIGHT_
        }, e),
        this.svgLid_ = z.createSvgElement("image", {
            width: z.SPRITE.width,
            height: z.SPRITE.height,
            y: -32,
            "clip-path": "url(#blocklyTrashLidClipPath)"
        }, this.svgGroup_),
        this.svgLid_.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", z.pathToBlockly + z.SPRITE.url),
        this.svgGroup_
    }
    ,
    z.Trashcan.prototype.init = function() {
        this.setOpen_(!1),
        this.position_(),
        z.bindEvent_(window, "resize", this, this.position_)
    }
    ,
    z.Trashcan.prototype.dispose = function() {
        this.svgGroup_ && (e.dom.removeNode(this.svgGroup_),
        this.svgGroup_ = null),
        this.workspace_ = this.svgLid_ = null,
        e.Timer.clear(this.lidTask_)
    }
    ,
    z.Trashcan.prototype.position_ = function() {
        var e = this.workspace_.getMetrics();
        e && (this.left_ = z.RTL ? this.MARGIN_SIDE_ : e.viewWidth + e.absoluteLeft - this.WIDTH_ - this.MARGIN_SIDE_,
        this.top_ = e.viewHeight + e.absoluteTop - (this.BODY_HEIGHT_ + this.LID_HEIGHT_) - this.MARGIN_BOTTOM_,
        this.svgGroup_.setAttribute("transform", "translate(" + this.left_ + "," + this.top_ + ")"))
    }
    ,
    z.Trashcan.prototype.onMouseMove = function(e) {
        if (this.svgGroup_) {
            e = z.mouseToSvg(e);
            var t = z.getSvgXY_(this.svgGroup_);
            e = e.x > t.x - this.MARGIN_HOTSPOT_ && e.x < t.x + this.WIDTH_ + this.MARGIN_HOTSPOT_ && e.y > t.y - this.MARGIN_HOTSPOT_ && e.y < t.y + this.BODY_HEIGHT_ + this.LID_HEIGHT_ + this.MARGIN_HOTSPOT_,
            this.isOpen != e && this.setOpen_(e)
        }
    }
    ,
    z.Trashcan.prototype.setOpen_ = function(t) {
        this.isOpen != t && (e.Timer.clear(this.lidTask_),
        this.isOpen = t,
        this.animateLid_())
    }
    ,
    z.Trashcan.prototype.animateLid_ = function() {
        this.lidAngle_ += this.isOpen ? 10 : -10,
        this.lidAngle_ = Math.max(0, this.lidAngle_),
        this.svgLid_.setAttribute("transform", "rotate(" + (z.RTL ? -this.lidAngle_ : this.lidAngle_) + ", " + (z.RTL ? 4 : this.WIDTH_ - 4) + ", " + (this.LID_HEIGHT_ - 2) + ")"),
        (this.isOpen ? 45 > this.lidAngle_ : 0 < this.lidAngle_) && (this.lidTask_ = e.Timer.callOnce(this.animateLid_, 5, this))
    }
    ,
    z.Trashcan.prototype.close = function() {
        this.setOpen_(!1)
    }
    ,
    z.Xml = {},
    z.Xml.workspaceToDom = function(t) {
        if (z.RTL)
            var n = t.getMetrics().viewWidth;
        var o = e.dom.createDom("xml");
        t = t.getTopBlocks(!0);
        for (var r, i = 0; r = t[i]; i++) {
            var s = z.Xml.blockToDom_(r);
            r = r.getRelativeToSurfaceXY(),
            s.setAttribute("x", z.RTL ? n - r.x : r.x),
            s.setAttribute("y", r.y),
            o.appendChild(s)
        }
        return o
    }
    ,
    z.Xml.blockToDom_ = function(t) {
        var n = e.dom.createDom("block");
        if (n.setAttribute("type", t.type),
        n.setAttribute("id", t.id),
        t.mutationToDom) {
            var o = t.mutationToDom();
            o && n.appendChild(o)
        }
        for (var r = 0; o = t.inputList[r]; r++)
            for (var i, s = 0; i = o.fieldRow[s]; s++)
                if (i.name && i.EDITABLE) {
                    var a = e.dom.createDom("field", null, i.getValue());
                    a.setAttribute("name", i.name),
                    n.appendChild(a)
                }
        for (t.comment && ((o = e.dom.createDom("comment", null, t.comment.getText())).setAttribute("pinned", t.comment.isVisible()),
        r = t.comment.getBubbleSize(),
        o.setAttribute("h", r.height),
        o.setAttribute("w", r.width),
        n.appendChild(o)),
        r = !1,
        s = 0; o = t.inputList[s]; s++)
            if (i = !0,
            o.type != z.DUMMY_INPUT) {
                if (a = o.connection.targetBlock(),
                o.type == z.INPUT_VALUE) {
                    var l = e.dom.createDom("value");
                    r = !0
                } else
                    o.type == z.NEXT_STATEMENT && (l = e.dom.createDom("statement"));
                a && (l.appendChild(z.Xml.blockToDom_(a)),
                i = !1),
                l.setAttribute("name", o.name),
                i || n.appendChild(l)
            }
        return r && n.setAttribute("inline", t.inputsInline),
        t.isCollapsed() && n.setAttribute("collapsed", !0),
        t.disabled && n.setAttribute("disabled", !0),
        t.isDeletable() || n.setAttribute("deletable", !1),
        t.isMovable() || n.setAttribute("movable", !1),
        t.isEditable() || n.setAttribute("editable", !1),
        (t = t.getNextBlock()) && (l = e.dom.createDom("next", null, z.Xml.blockToDom_(t)),
        n.appendChild(l)),
        n
    }
    ,
    z.Xml.domToText = function(e) {
        return (new XMLSerializer).serializeToString(e)
    }
    ,
    z.Xml.domToPrettyText = function(e) {
        e = z.Xml.domToText(e).split("<");
        for (var t = "", n = 1; n < e.length; n++) {
            var o = e[n];
            "/" == o[0] && (t = t.substring(2)),
            e[n] = t + "<" + o,
            "/" != o[0] && "/>" != o.slice(-2) && (t += "  ")
        }
        return (e = (e = e.join("\n")).replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, "$1</$2>")).replace(/^\n/, "")
    }
    ,
    z.Xml.textToDom = function(e) {
        if (!(e = (new DOMParser).parseFromString(e, "text/xml")) || !e.firstChild || "xml" != e.firstChild.nodeName.toLowerCase() || e.firstChild !== e.lastChild)
            throw "Blockly.Xml.textToDom did not obtain a valid XML tree.";
        return e.firstChild
    }
    ,
    z.Xml.domToWorkspace = function(e, t) {
        if (z.RTL)
            var n = e.getMetrics().viewWidth;
        for (var o, r = 0; o = t.childNodes[r]; r++)
            if ("block" == o.nodeName.toLowerCase()) {
                var i = z.Xml.domToBlock(e, o)
                  , s = parseInt(o.getAttribute("x"), 10);
                o = parseInt(o.getAttribute("y"), 10),
                isNaN(s) || isNaN(o) || i.moveBy(z.RTL ? n - s : s, o)
            }
    }
    ,
    z.Xml.domToBlock = function(e, t, n) {
        var o = null
          , r = t.getAttribute("type");
        if (!r)
            throw "Block type unspecified: \n" + t.outerHTML;
        var i = t.getAttribute("id");
        if (n && i) {
            if (!(o = z.Block.getById(i, e)))
                throw "Couldn't get Block with id: " + i;
            i = o.getParent(),
            o.workspace && o.dispose(!0, !1, !0),
            o.fill(e, r),
            o.parent_ = i
        } else
            o = z.Block.obtain(e, r);
        o.svg_ || o.initSvg(),
        (i = t.getAttribute("inline")) && o.setInputsInline("true" == i),
        (i = t.getAttribute("disabled")) && o.setDisabled("true" == i),
        (i = t.getAttribute("deletable")) && o.setDeletable("true" == i),
        (i = t.getAttribute("movable")) && o.setMovable("true" == i),
        (i = t.getAttribute("editable")) && o.setEditable("true" == i);
        var s, a = null;
        for (i = 0; s = t.childNodes[i]; i++)
            if (3 != s.nodeType || !s.data.match(/^\s*$/)) {
                a = null;
                for (var l, u = 0; l = s.childNodes[u]; u++)
                    3 == l.nodeType && l.data.match(/^\s*$/) || (a = l);
                switch (u = s.getAttribute("name"),
                s.nodeName.toLowerCase()) {
                case "mutation":
                    o.domToMutation && o.domToMutation(s);
                    break;
                case "comment":
                    o.setCommentText(s.textContent);
                    var c = s.getAttribute("pinned");
                    c && setTimeout(function() {
                        o.comment.setVisible("true" == c)
                    }, 1),
                    a = parseInt(s.getAttribute("w"), 10),
                    s = parseInt(s.getAttribute("h"), 10),
                    isNaN(a) || isNaN(s) || o.comment.setBubbleSize(a, s);
                    break;
                case "title":
                case "field":
                    o.setFieldValue(s.textContent, u);
                    break;
                case "value":
                case "statement":
                    if (!(s = o.getInput(u)))
                        throw "Input " + u + " does not exist in block " + r;
                    if (a && "block" == a.nodeName.toLowerCase())
                        if ((a = z.Xml.domToBlock(e, a, n)).outputConnection)
                            s.connection.connect(a.outputConnection);
                        else {
                            if (!a.previousConnection)
                                throw "Child block does not have output or previous statement.";
                            s.connection.connect(a.previousConnection)
                        }
                    break;
                case "next":
                    if (a && "block" == a.nodeName.toLowerCase()) {
                        if (!o.nextConnection)
                            throw "Next statement does not exist.";
                        if (o.nextConnection.targetConnection)
                            throw "Next statement is already connected.";
                        if (!(a = z.Xml.domToBlock(e, a, n)).previousConnection)
                            throw "Next block does not have previous statement.";
                        o.nextConnection.connect(a.previousConnection)
                    }
                    break;
                case "clone":
                    a && "block" == a.nodeName.toLowerCase() && o.setCloneBlock(a)
                }
            }
        return (e = t.getAttribute("collapsed")) && o.setCollapsed("true" == e),
        (e = o.getNextBlock()) ? e.render() : o.render(),
        o
    }
    ,
    z.Xml.deleteNext = function(e) {
        for (var t, n = 0; t = e.childNodes[n]; n++)
            if ("next" == t.nodeName.toLowerCase()) {
                e.removeChild(t);
                break
            }
    }
    ,
    window.Blockly || (window.Blockly = {}),
    window.Blockly.Xml || (window.Blockly.Xml = {}),
    window.Blockly.Xml.domToText = z.Xml.domToText,
    window.Blockly.Xml.domToWorkspace = z.Xml.domToWorkspace,
    window.Blockly.Xml.textToDom = z.Xml.textToDom,
    window.Blockly.Xml.workspaceToDom = z.Xml.workspaceToDom,
    z.Workspace = function(e, t) {
        this.getMetrics = e,
        this.setMetrics = t,
        this.isFlyout = !1,
        this.topBlocks_ = [],
        this.maxBlocks = 1 / 0,
        z.ConnectionDB.init(this)
    }
    ,
    z.Workspace.SCAN_ANGLE = 3,
    z.Workspace.prototype.dragMode = !1,
    z.Workspace.prototype.scrollX = 0,
    z.Workspace.prototype.scrollY = 0,
    z.Workspace.prototype.trashcan = null,
    z.Workspace.prototype.fireChangeEventPid_ = null,
    z.Workspace.prototype.scrollbar = null,
    z.Workspace.prototype.createDom = function() {
        return this.svgGroup_ = z.createSvgElement("g", {}, null),
        this.svgBlockCanvas_ = z.createSvgElement("g", {}, this.svgGroup_),
        this.svgBubbleCanvas_ = z.createSvgElement("g", {}, this.svgGroup_),
        this.fireChangeEvent(),
        this.svgGroup_
    }
    ,
    z.Workspace.prototype.dispose = function() {
        this.svgGroup_ && (e.dom.removeNode(this.svgGroup_),
        this.svgGroup_ = null),
        this.svgBubbleCanvas_ = this.svgBlockCanvas_ = null,
        this.trashcan && (this.trashcan.dispose(),
        this.trashcan = null)
    }
    ,
    z.Workspace.prototype.addTrashcan = function() {
        if (z.hasTrashcan && !z.readOnly) {
            this.trashcan = new z.Trashcan(this);
            var e = this.trashcan.createDom();
            this.svgGroup_.insertBefore(e, this.svgBlockCanvas_),
            this.trashcan.init()
        }
    }
    ,
    z.Workspace.prototype.getCanvas = function() {
        return this.svgBlockCanvas_
    }
    ,
    z.Workspace.prototype.getBubbleCanvas = function() {
        return this.svgBubbleCanvas_
    }
    ,
    z.Workspace.prototype.addTopBlock = function(e) {
        this.topBlocks_.push(e),
        z.Realtime.isEnabled() && this == z.mainWorkspace && z.Realtime.addTopBlock(e),
        this.fireChangeEvent()
    }
    ,
    z.Workspace.prototype.removeTopBlock = function(e) {
        for (var t, n = !1, o = 0; t = this.topBlocks_[o]; o++)
            if (t == e) {
                this.topBlocks_.splice(o, 1),
                n = !0;
                break
            }
        if (!n)
            throw "Block not present in workspace's list of top-most blocks.";
        z.Realtime.isEnabled() && this == z.mainWorkspace && z.Realtime.removeTopBlock(e),
        this.fireChangeEvent()
    }
    ,
    z.Workspace.prototype.getTopBlocks = function(e) {
        var t = [].concat(this.topBlocks_);
        if (e && 1 < t.length) {
            var n = Math.sin(z.Workspace.SCAN_ANGLE / 180 * Math.PI);
            z.RTL && (n *= -1),
            t.sort(function(e, t) {
                return e = e.getRelativeToSurfaceXY(),
                t = t.getRelativeToSurfaceXY(),
                e.y + n * e.x - (t.y + n * t.x)
            })
        }
        return t
    }
    ,
    z.Workspace.prototype.getAllBlocks = function() {
        for (var e = this.getTopBlocks(!1), t = 0; t < e.length; t++)
            e.push.apply(e, e[t].getChildren());
        return e
    }
    ,
    z.Workspace.prototype.clear = function() {
        for (z.hideChaff(); this.topBlocks_.length; )
            this.topBlocks_[0].dispose()
    }
    ,
    z.Workspace.prototype.render = function() {
        for (var e, t = this.getAllBlocks(), n = 0; e = t[n]; n++)
            e.getChildren().length || e.render()
    }
    ,
    z.Workspace.prototype.getBlockById = function(e) {
        for (var t, n = this.getAllBlocks(), o = 0; t = n[o]; o++)
            if (t.id == e)
                return t;
        return null
    }
    ,
    z.Workspace.prototype.traceOn = function(e) {
        this.traceOn_ = e,
        this.traceWrapper_ && (z.unbindEvent_(this.traceWrapper_),
        this.traceWrapper_ = null),
        e && (this.traceWrapper_ = z.bindEvent_(this.svgBlockCanvas_, "blocklySelectChange", this, function() {
            this.traceOn_ = !1
        }))
    }
    ,
    z.Workspace.prototype.highlightBlock = function(e) {
        if (this.traceOn_ && 0 != z.Block.dragMode_ && this.traceOn(!1),
        this.traceOn_) {
            var t = null;
            if (e && !(t = this.getBlockById(e)))
                return;
            this.traceOn(!1),
            t ? t.select() : z.selected && z.selected.unselect();
            var n = this;
            setTimeout(function() {
                n.traceOn(!0)
            }, 1)
        }
    }
    ,
    z.Workspace.prototype.fireChangeEvent = function() {
        this.fireChangeEventPid_ && window.clearTimeout(this.fireChangeEventPid_);
        var e = this.svgBlockCanvas_;
        e && (this.fireChangeEventPid_ = window.setTimeout(function() {
            z.fireUiEvent(e, "blocklyWorkspaceChange")
        }, 0))
    }
    ,
    z.Workspace.prototype.paste = function(e) {
        if (!(e.getElementsByTagName("block").length >= this.remainingCapacity())) {
            var t = z.Xml.domToBlock(this, e)
              , n = parseInt(e.getAttribute("x"), 10);
            if (e = parseInt(e.getAttribute("y"), 10),
            !isNaN(n) && !isNaN(e)) {
                z.RTL && (n = -n);
                do {
                    for (var o, r = !1, i = this.getAllBlocks(), s = 0; o = i[s]; s++)
                        o = o.getRelativeToSurfaceXY(),
                        1 >= Math.abs(n - o.x) && 1 >= Math.abs(e - o.y) && (n = z.RTL ? n - z.SNAP_RADIUS : n + z.SNAP_RADIUS,
                        e += 2 * z.SNAP_RADIUS,
                        r = !0)
                } while (r);
                t.moveBy(n, e)
            }
            t.select()
        }
    }
    ,
    z.Workspace.prototype.remainingCapacity = function() {
        return 1 / 0 == this.maxBlocks ? 1 / 0 : this.maxBlocks - this.getAllBlocks().length
    }
    ,
    z.Workspace.prototype.clear = z.Workspace.prototype.clear,
    z.Bubble = function(e, t, n, o, r, i, s) {
        var a = z.Bubble.ARROW_ANGLE;
        z.RTL && (a = -a),
        this.arrow_radians_ = a / 360 * Math.PI * 2,
        this.workspace_ = e,
        this.content_ = t,
        this.shape_ = n,
        e.getBubbleCanvas().appendChild(this.createDom_(t, !(!i || !s))),
        this.setAnchorLocation(o, r),
        i && s || (i = (e = this.content_.getBBox()).width + 2 * z.Bubble.BORDER_WIDTH,
        s = e.height + 2 * z.Bubble.BORDER_WIDTH),
        this.setBubbleSize(i, s),
        this.positionBubble_(),
        this.renderArrow_(),
        this.rendered_ = !0,
        z.readOnly || (z.bindEvent_(this.bubbleBack_, "mousedown", this, this.bubbleMouseDown_),
        this.resizeGroup_ && z.bindEvent_(this.resizeGroup_, "mousedown", this, this.resizeMouseDown_))
    }
    ,
    z.Bubble.BORDER_WIDTH = 6,
    z.Bubble.ARROW_THICKNESS = 10,
    z.Bubble.ARROW_ANGLE = 20,
    z.Bubble.ARROW_BEND = 4,
    z.Bubble.ANCHOR_RADIUS = 8,
    z.Bubble.onMouseUpWrapper_ = null,
    z.Bubble.onMouseMoveWrapper_ = null,
    z.Bubble.unbindDragEvents_ = function() {
        z.Bubble.onMouseUpWrapper_ && (z.unbindEvent_(z.Bubble.onMouseUpWrapper_),
        z.Bubble.onMouseUpWrapper_ = null),
        z.Bubble.onMouseMoveWrapper_ && (z.unbindEvent_(z.Bubble.onMouseMoveWrapper_),
        z.Bubble.onMouseMoveWrapper_ = null)
    }
    ,
    z.Bubble.prototype.rendered_ = !1,
    z.Bubble.prototype.anchorX_ = 0,
    z.Bubble.prototype.anchorY_ = 0,
    z.Bubble.prototype.relativeLeft_ = 0,
    z.Bubble.prototype.relativeTop_ = 0,
    z.Bubble.prototype.width_ = 0,
    z.Bubble.prototype.height_ = 0,
    z.Bubble.prototype.autoLayout_ = !0,
    z.Bubble.prototype.createDom_ = function(e, t) {
        this.bubbleGroup_ = z.createSvgElement("g", {}, null);
        var n = z.createSvgElement("g", {
            filter: "url(#blocklyEmboss)"
        }, this.bubbleGroup_);
        return this.bubbleArrow_ = z.createSvgElement("path", {}, n),
        this.bubbleBack_ = z.createSvgElement("rect", {
            class: "blocklyDraggable",
            x: 0,
            y: 0,
            rx: z.Bubble.BORDER_WIDTH,
            ry: z.Bubble.BORDER_WIDTH
        }, n),
        t ? (this.resizeGroup_ = z.createSvgElement("g", {
            class: z.RTL ? "blocklyResizeSW" : "blocklyResizeSE"
        }, this.bubbleGroup_),
        t = 2 * z.Bubble.BORDER_WIDTH,
        z.createSvgElement("polygon", {
            points: "0,x x,x x,0".replace(/x/g, t.toString())
        }, this.resizeGroup_),
        z.createSvgElement("line", {
            class: "blocklyResizeLine",
            x1: t / 3,
            y1: t - 1,
            x2: t - 1,
            y2: t / 3
        }, this.resizeGroup_),
        z.createSvgElement("line", {
            class: "blocklyResizeLine",
            x1: 2 * t / 3,
            y1: t - 1,
            x2: t - 1,
            y2: 2 * t / 3
        }, this.resizeGroup_)) : this.resizeGroup_ = null,
        this.bubbleGroup_.appendChild(e),
        this.bubbleGroup_
    }
    ,
    z.Bubble.prototype.bubbleMouseDown_ = function(e) {
        this.promote_(),
        z.Bubble.unbindDragEvents_(),
        z.isRightButton(e) || z.isTargetInput_(e) || (z.setCursorHand_(!0),
        this.dragDeltaX = z.RTL ? this.relativeLeft_ + e.clientX : this.relativeLeft_ - e.clientX,
        this.dragDeltaY = this.relativeTop_ - e.clientY,
        z.Bubble.onMouseUpWrapper_ = z.bindEvent_(document, "mouseup", this, z.Bubble.unbindDragEvents_),
        z.Bubble.onMouseMoveWrapper_ = z.bindEvent_(document, "mousemove", this, this.bubbleMouseMove_),
        z.hideChaff(),
        e.stopPropagation())
    }
    ,
    z.Bubble.prototype.bubbleMouseMove_ = function(e) {
        this.autoLayout_ = !1,
        this.relativeLeft_ = z.RTL ? this.dragDeltaX - e.clientX : this.dragDeltaX + e.clientX,
        this.relativeTop_ = this.dragDeltaY + e.clientY,
        this.positionBubble_(),
        this.renderArrow_()
    }
    ,
    z.Bubble.prototype.resizeMouseDown_ = function(e) {
        this.promote_(),
        z.Bubble.unbindDragEvents_(),
        z.isRightButton(e) || (z.setCursorHand_(!0),
        this.resizeDeltaWidth = z.RTL ? this.width_ + e.clientX : this.width_ - e.clientX,
        this.resizeDeltaHeight = this.height_ - e.clientY,
        z.Bubble.onMouseUpWrapper_ = z.bindEvent_(document, "mouseup", this, z.Bubble.unbindDragEvents_),
        z.Bubble.onMouseMoveWrapper_ = z.bindEvent_(document, "mousemove", this, this.resizeMouseMove_),
        z.hideChaff(),
        e.stopPropagation())
    }
    ,
    z.Bubble.prototype.resizeMouseMove_ = function(e) {
        this.autoLayout_ = !1;
        var t = this.resizeDeltaWidth
          , n = this.resizeDeltaHeight + e.clientY;
        t = z.RTL ? t - e.clientX : t + e.clientX,
        this.setBubbleSize(t, n),
        z.RTL && this.positionBubble_()
    }
    ,
    z.Bubble.prototype.registerResizeEvent = function(e, t) {
        z.bindEvent_(this.bubbleGroup_, "resize", e, t)
    }
    ,
    z.Bubble.prototype.promote_ = function() {
        this.bubbleGroup_.parentNode.appendChild(this.bubbleGroup_)
    }
    ,
    z.Bubble.prototype.setAnchorLocation = function(e, t) {
        this.anchorX_ = e,
        this.anchorY_ = t,
        this.rendered_ && this.positionBubble_()
    }
    ,
    z.Bubble.prototype.layoutBubble_ = function() {
        var e = -this.width_ / 4
          , t = -this.height_ - z.BlockSvg.MIN_BLOCK_Y
          , n = this.workspace_.getMetrics();
        z.RTL ? this.anchorX_ - n.viewLeft - e - this.width_ < z.Scrollbar.scrollbarThickness ? e = this.anchorX_ - n.viewLeft - this.width_ - z.Scrollbar.scrollbarThickness : this.anchorX_ - n.viewLeft - e > n.viewWidth && (e = this.anchorX_ - n.viewLeft - n.viewWidth) : this.anchorX_ + e < n.viewLeft ? e = n.viewLeft - this.anchorX_ : n.viewLeft + n.viewWidth < this.anchorX_ + e + this.width_ + z.BlockSvg.SEP_SPACE_X + z.Scrollbar.scrollbarThickness && (e = n.viewLeft + n.viewWidth - this.anchorX_ - this.width_ - z.Scrollbar.scrollbarThickness),
        this.anchorY_ + t < n.viewTop && (t = this.shape_.getBBox().height),
        this.relativeLeft_ = e,
        this.relativeTop_ = t
    }
    ,
    z.Bubble.prototype.positionBubble_ = function() {
        this.bubbleGroup_.setAttribute("transform", "translate(" + (z.RTL ? this.anchorX_ - this.relativeLeft_ - this.width_ : this.anchorX_ + this.relativeLeft_) + ", " + (this.relativeTop_ + this.anchorY_) + ")")
    }
    ,
    z.Bubble.prototype.getBubbleSize = function() {
        return {
            width: this.width_,
            height: this.height_
        }
    }
    ,
    z.Bubble.prototype.setBubbleSize = function(e, t) {
        var n = 2 * z.Bubble.BORDER_WIDTH;
        e = Math.max(e, n + 45),
        t = Math.max(t, n + z.BlockSvg.FIELD_HEIGHT),
        this.width_ = e,
        this.height_ = t,
        this.bubbleBack_.setAttribute("width", e),
        this.bubbleBack_.setAttribute("height", t),
        this.resizeGroup_ && (z.RTL ? this.resizeGroup_.setAttribute("transform", "translate(" + 2 * z.Bubble.BORDER_WIDTH + ", " + (t - n) + ") scale(-1 1)") : this.resizeGroup_.setAttribute("transform", "translate(" + (e - n) + ", " + (t - n) + ")")),
        this.rendered_ && (this.autoLayout_ && this.layoutBubble_(),
        this.positionBubble_(),
        this.renderArrow_()),
        z.fireUiEvent(this.bubbleGroup_, "resize")
    }
    ,
    z.Bubble.prototype.renderArrow_ = function() {
        var e = []
          , t = this.width_ / 2
          , n = this.height_ / 2
          , o = -this.relativeLeft_
          , r = -this.relativeTop_;
        if (t == o && n == r)
            e.push("M " + t + "," + n);
        else {
            r -= n,
            o -= t,
            z.RTL && (o *= -1);
            var i = Math.sqrt(r * r + o * o)
              , s = Math.acos(o / i);
            0 > r && (s = 2 * Math.PI - s);
            var a = s + Math.PI / 2;
            a > 2 * Math.PI && (a -= 2 * Math.PI);
            var l = Math.sin(a)
              , u = Math.cos(a)
              , c = this.getBubbleSize();
            a = (c.width + c.height) / z.Bubble.ARROW_THICKNESS,
            a = Math.min(a, c.width, c.height) / 2,
            o = t + (c = 1 - z.Bubble.ANCHOR_RADIUS / i) * o,
            r = n + c * r,
            c = t + a * u;
            var h = n + a * l;
            t -= a * u,
            n -= a * l,
            (l = s + this.arrow_radians_) > 2 * Math.PI && (l -= 2 * Math.PI),
            s = Math.sin(l) * i / z.Bubble.ARROW_BEND,
            i = Math.cos(l) * i / z.Bubble.ARROW_BEND,
            e.push("M" + c + "," + h),
            e.push("C" + (c + i) + "," + (h + s) + " " + o + "," + r + " " + o + "," + r),
            e.push("C" + o + "," + r + " " + (t + i) + "," + (n + s) + " " + t + "," + n)
        }
        e.push("z"),
        this.bubbleArrow_.setAttribute("d", e.join(" "))
    }
    ,
    z.Bubble.prototype.setColour = function(e) {
        this.bubbleBack_.setAttribute("fill", e),
        this.bubbleArrow_.setAttribute("fill", e)
    }
    ,
    z.Bubble.prototype.dispose = function() {
        z.Bubble.unbindDragEvents_(),
        e.dom.removeNode(this.bubbleGroup_),
        this.shape_ = this.content_ = this.workspace_ = this.bubbleGroup_ = null
    }
    ,
    z.Icon = function(e) {
        this.block_ = e
    }
    ,
    z.Icon.RADIUS = 8,
    z.Icon.prototype.bubble_ = null,
    z.Icon.prototype.iconX_ = 0,
    z.Icon.prototype.iconY_ = 0,
    z.Icon.prototype.createIcon_ = function() {
        this.iconGroup_ = z.createSvgElement("g", {}, null),
        this.block_.getSvgRoot().appendChild(this.iconGroup_),
        z.bindEvent_(this.iconGroup_, "mouseup", this, this.iconClick_),
        this.updateEditable()
    }
    ,
    z.Icon.prototype.dispose = function() {
        e.dom.removeNode(this.iconGroup_),
        this.iconGroup_ = null,
        this.setVisible(!1),
        this.block_ = null
    }
    ,
    z.Icon.prototype.updateEditable = function() {
        this.block_.isInFlyout ? z.removeClass_(this.iconGroup_, "blocklyIconGroup") : z.addClass_(this.iconGroup_, "blocklyIconGroup")
    }
    ,
    z.Icon.prototype.isVisible = function() {
        return !!this.bubble_
    }
    ,
    z.Icon.prototype.iconClick_ = function() {
        this.block_.isInFlyout || this.setVisible(!this.isVisible())
    }
    ,
    z.Icon.prototype.updateColour = function() {
        if (this.isVisible()) {
            var e = z.makeColour(this.block_.getColour());
            this.bubble_.setColour(e)
        }
    }
    ,
    z.Icon.prototype.renderIcon = function(e) {
        if (this.block_.isCollapsed())
            return this.iconGroup_.setAttribute("display", "none"),
            e;
        this.iconGroup_.setAttribute("display", "block");
        var t = 2 * z.Icon.RADIUS;
        return z.RTL && (e -= t),
        this.iconGroup_.setAttribute("transform", "translate(" + e + ", 5)"),
        this.computeIconLocation(),
        z.RTL ? e - z.BlockSvg.SEP_SPACE_X : e + (t + z.BlockSvg.SEP_SPACE_X)
    }
    ,
    z.Icon.prototype.setIconLocation = function(e, t) {
        this.iconX_ = e,
        this.iconY_ = t,
        this.isVisible() && this.bubble_.setAnchorLocation(e, t)
    }
    ,
    z.Icon.prototype.computeIconLocation = function() {
        var e = this.block_.getRelativeToSurfaceXY()
          , t = z.getRelativeXY_(this.iconGroup_)
          , n = e.x + t.x + z.Icon.RADIUS;
        e = e.y + t.y + z.Icon.RADIUS,
        n === this.iconX_ && e === this.iconY_ || this.setIconLocation(n, e)
    }
    ,
    z.Icon.prototype.getIconLocation = function() {
        return {
            x: this.iconX_,
            y: this.iconY_
        }
    }
    ,
    z.Comment = function(e) {
        z.Comment.superClass_.constructor.call(this, e),
        this.createIcon_()
    }
    ,
    e.inherits(z.Comment, z.Icon),
    z.Comment.prototype.text_ = "",
    z.Comment.prototype.width_ = 160,
    z.Comment.prototype.height_ = 80,
    z.Comment.prototype.createIcon_ = function() {
        z.Icon.prototype.createIcon_.call(this),
        z.createSvgElement("circle", {
            class: "blocklyIconShield",
            r: z.Icon.RADIUS,
            cx: z.Icon.RADIUS,
            cy: z.Icon.RADIUS
        }, this.iconGroup_),
        this.iconMark_ = z.createSvgElement("text", {
            class: "blocklyIconMark",
            x: z.Icon.RADIUS,
            y: 2 * z.Icon.RADIUS - 3
        }, this.iconGroup_),
        this.iconMark_.appendChild(document.createTextNode("?"))
    }
    ,
    z.Comment.prototype.createEditor_ = function() {
        this.foreignObject_ = z.createSvgElement("foreignObject", {
            x: z.Bubble.BORDER_WIDTH,
            y: z.Bubble.BORDER_WIDTH
        }, null);
        var e = document.createElementNS(z.HTML_NS, "body");
        return e.setAttribute("xmlns", z.HTML_NS),
        e.className = "blocklyMinimalBody",
        this.textarea_ = document.createElementNS(z.HTML_NS, "textarea"),
        this.textarea_.className = "blocklyCommentTextarea",
        this.textarea_.setAttribute("dir", z.RTL ? "RTL" : "LTR"),
        e.appendChild(this.textarea_),
        this.foreignObject_.appendChild(e),
        z.bindEvent_(this.textarea_, "mouseup", this, this.textareaFocus_),
        this.foreignObject_
    }
    ,
    z.Comment.prototype.updateEditable = function() {
        this.isVisible() && (this.setVisible(!1),
        this.setVisible(!0)),
        z.Icon.prototype.updateEditable.call(this)
    }
    ,
    z.Comment.prototype.resizeBubble_ = function() {
        var e = this.bubble_.getBubbleSize()
          , t = 2 * z.Bubble.BORDER_WIDTH;
        this.foreignObject_.setAttribute("width", e.width - t),
        this.foreignObject_.setAttribute("height", e.height - t),
        this.textarea_.style.width = e.width - t - 4 + "px",
        this.textarea_.style.height = e.height - t - 4 + "px"
    }
    ,
    z.Comment.prototype.setVisible = function(t) {
        if (t != this.isVisible())
            if (!this.block_.isEditable() && !this.textarea_ || e.userAgent.IE)
                z.Warning.prototype.setVisible.call(this, t);
            else {
                var n = this.getText()
                  , o = this.getBubbleSize();
                t ? (this.bubble_ = new z.Bubble(this.block_.workspace,this.createEditor_(),this.block_.svg_.svgPath_,this.iconX_,this.iconY_,this.width_,this.height_),
                this.bubble_.registerResizeEvent(this, this.resizeBubble_),
                this.updateColour(),
                this.text_ = null) : (this.bubble_.dispose(),
                this.foreignObject_ = this.textarea_ = this.bubble_ = null),
                this.setText(n),
                this.setBubbleSize(o.width, o.height)
            }
    }
    ,
    z.Comment.prototype.textareaFocus_ = function() {
        this.bubble_.promote_(),
        this.textarea_.focus()
    }
    ,
    z.Comment.prototype.getBubbleSize = function() {
        return this.isVisible() ? this.bubble_.getBubbleSize() : {
            width: this.width_,
            height: this.height_
        }
    }
    ,
    z.Comment.prototype.setBubbleSize = function(e, t) {
        this.textarea_ ? this.bubble_.setBubbleSize(e, t) : (this.width_ = e,
        this.height_ = t)
    }
    ,
    z.Comment.prototype.getText = function() {
        return this.textarea_ ? this.textarea_.value : this.text_
    }
    ,
    z.Comment.prototype.setText = function(e) {
        this.textarea_ ? this.textarea_.value = e : this.text_ = e
    }
    ,
    z.Comment.prototype.dispose = function() {
        this.block_.comment = null,
        z.Icon.prototype.dispose.call(this)
    }
    ,
    z.Connection = function(e, t) {
        this.sourceBlock_ = e,
        this.targetConnection = null,
        this.type = t,
        this.y_ = this.x_ = 0,
        this.inDB_ = !1,
        this.dbList_ = this.sourceBlock_.workspace.connectionDBList
    }
    ,
    z.Connection.prototype.dispose = function() {
        if (this.targetConnection)
            throw "Disconnect connection before disposing of it.";
        this.inDB_ && this.dbList_[this.type].removeConnection_(this),
        this.inDB_ = !1,
        z.highlightedConnection_ == this && (z.highlightedConnection_ = null),
        z.localConnection_ == this && (z.localConnection_ = null)
    }
    ,
    z.Connection.prototype.isSuperior = function() {
        return this.type == z.INPUT_VALUE || this.type == z.NEXT_STATEMENT
    }
    ,
    z.Connection.prototype.connect = function(e) {
        if (this.sourceBlock_ == e.sourceBlock_)
            throw "Attempted to connect a block to itself.";
        if (this.sourceBlock_.workspace !== e.sourceBlock_.workspace)
            throw "Blocks are on different workspaces.";
        if (z.OPPOSITE_TYPE[this.type] != e.type)
            throw "Attempt to connect incompatible types.";
        if (this.type == z.INPUT_VALUE || this.type == z.OUTPUT_VALUE) {
            if (this.targetConnection)
                throw "Source connection already connected (value).";
            if (e.targetConnection) {
                var t = e.targetBlock();
                if (t.setParent(null),
                !t.outputConnection)
                    throw "Orphan block does not have an output connection.";
                for (var n = this.sourceBlock_; n = z.Connection.singleConnection_(n, t); ) {
                    if (!n.targetBlock()) {
                        n.connect(t.outputConnection),
                        t = null;
                        break
                    }
                    n = n.targetBlock()
                }
                t && window.setTimeout(function() {
                    t.outputConnection.bumpAwayFrom_(e)
                }, z.BUMP_DELAY)
            }
        } else {
            if (this.targetConnection)
                throw "Source connection already connected (block).";
            if (e.targetConnection) {
                if (this.type != z.PREVIOUS_STATEMENT)
                    throw "Can only do a mid-stack connection with the top of a block.";
                if ((t = e.targetBlock()).setParent(null),
                !t.previousConnection)
                    throw "Orphan block does not have a previous connection.";
                for (n = this.sourceBlock_; n.nextConnection; ) {
                    if (!n.nextConnection.targetConnection) {
                        n.nextConnection.connect(t.previousConnection),
                        t = null;
                        break
                    }
                    n = n.getNextBlock()
                }
                t && window.setTimeout(function() {
                    t.previousConnection.bumpAwayFrom_(e)
                }, z.BUMP_DELAY)
            }
        }
        if (this.isSuperior()) {
            n = this.sourceBlock_;
            var o = e.sourceBlock_
        } else
            n = e.sourceBlock_,
            o = this.sourceBlock_;
        this.targetConnection = e,
        e.targetConnection = this,
        o.setParent(n),
        n.rendered && n.svg_.updateDisabled(),
        o.rendered && o.svg_.updateDisabled(),
        n.rendered && o.rendered && (this.type == z.NEXT_STATEMENT || this.type == z.PREVIOUS_STATEMENT ? o.render() : n.render())
    }
    ,
    z.Connection.singleConnection_ = function(e, t) {
        for (var n = !1, o = 0; o < e.inputList.length; o++) {
            var r = e.inputList[o].connection;
            if (r && r.type == z.INPUT_VALUE && t.outputConnection.checkType_(r)) {
                if (n)
                    return null;
                n = r
            }
        }
        return n
    }
    ,
    z.Connection.prototype.disconnect = function() {
        var e = this.targetConnection;
        if (!e)
            throw "Source connection not connected.";
        if (e.targetConnection != this)
            throw "Target connection not connected to source connection.";
        if (this.targetConnection = e.targetConnection = null,
        this.isSuperior()) {
            var t = this.sourceBlock_;
            e = e.sourceBlock_
        } else
            t = e.sourceBlock_,
            e = this.sourceBlock_;
        t.rendered && t.render(),
        e.rendered && (e.svg_.updateDisabled(),
        e.render())
    }
    ,
    z.Connection.prototype.targetBlock = function() {
        return this.targetConnection ? this.targetConnection.sourceBlock_ : null
    }
    ,
    z.Connection.prototype.bumpAwayFrom_ = function(e) {
        if (0 == z.Block.dragMode_) {
            var t = this.sourceBlock_.getRootBlock();
            if (!t.isInFlyout) {
                var n = !1;
                if (!t.isMovable()) {
                    if (!(t = e.sourceBlock_.getRootBlock()).isMovable())
                        return;
                    e = this,
                    n = !0
                }
                t.getSvgRoot().parentNode.appendChild(t.getSvgRoot());
                var o = e.x_ + z.SNAP_RADIUS - this.x_;
                e = e.y_ + z.SNAP_RADIUS - this.y_,
                n && (e = -e),
                z.RTL && (o = -o),
                t.moveBy(o, e)
            }
        }
    }
    ,
    z.Connection.prototype.moveTo = function(e, t) {
        this.inDB_ && this.dbList_[this.type].removeConnection_(this),
        this.x_ = e,
        this.y_ = t,
        this.dbList_[this.type].addConnection_(this)
    }
    ,
    z.Connection.prototype.moveBy = function(e, t) {
        this.moveTo(this.x_ + e, this.y_ + t)
    }
    ,
    z.Connection.prototype.highlight = function() {
        if (this.type == z.INPUT_VALUE || this.type == z.OUTPUT_VALUE) {
            var e = z.RTL ? -z.BlockSvg.TAB_WIDTH : z.BlockSvg.TAB_WIDTH;
            e = "m 0,0 v 5 c 0,10 " + -e + ",-8 " + -e + ",7.5 s " + e + ",-2.5 " + e + ",7.5 v 5"
        } else
            e = z.RTL ? z.BlockSvg.NOTCH_HIGHLIGHT_RTL : z.BlockSvg.NOTCH_HIGHLIGHT;
        var t = this.sourceBlock_.getRelativeToSurfaceXY();
        z.Connection.highlightedPath_ = z.createSvgElement("path", {
            class: "blocklyHighlightedConnectionPath",
            d: e,
            transform: "translate(" + (this.x_ - t.x) + ", " + (this.y_ - t.y) + ")"
        }, this.sourceBlock_.getSvgRoot())
    }
    ,
    z.Connection.prototype.unhighlight = function() {
        e.dom.removeNode(z.Connection.highlightedPath_),
        delete z.Connection.highlightedPath_
    }
    ,
    z.Connection.prototype.tighten_ = function() {
        var e = Math.round(this.targetConnection.x_ - this.x_)
          , t = Math.round(this.targetConnection.y_ - this.y_);
        if (0 != e || 0 != t) {
            var n = this.targetBlock()
              , o = n.getSvgRoot();
            if (!o)
                throw "block is not rendered.";
            o = z.getRelativeXY_(o),
            n.getSvgRoot().setAttribute("transform", "translate(" + (o.x - e) + ", " + (o.y - t) + ")"),
            n.moveConnections_(-e, -t)
        }
    }
    ,
    z.Connection.prototype.closest = function(e, t, n) {
        function o(t) {
            var n = r[t];
            if ((n.type == z.OUTPUT_VALUE || n.type == z.PREVIOUS_STATEMENT) && n.targetConnection || n.type == z.INPUT_VALUE && n.targetConnection && !n.targetBlock().isMovable() || !c.checkType_(n))
                return !0;
            n = n.sourceBlock_;
            do {
                if (u == n)
                    return !0;
                n = n.getParent()
            } while (n);
            var o = i - r[t].x_;
            return n = s - r[t].y_,
            (o = Math.sqrt(o * o + n * n)) <= e && (l = r[t],
            e = o),
            n < e
        }
        if (this.targetConnection)
            return {
                connection: null,
                radius: e
            };
        var r = this.dbList_[z.OPPOSITE_TYPE[this.type]]
          , i = this.x_ + t
          , s = this.y_ + n;
        t = 0;
        for (var a = n = r.length - 2; t < a; )
            r[a].y_ < s ? t = a : n = a,
            a = Math.floor((t + n) / 2);
        n = t = a;
        var l = null
          , u = this.sourceBlock_
          , c = this;
        if (r.length) {
            for (; 0 <= t && o(t); )
                t--;
            do {
                n++
            } while (n < r.length && o(n))
        }
        return {
            connection: l,
            radius: e
        }
    }
    ,
    z.Connection.prototype.checkType_ = function(e) {
        if (!this.check_ || !e.check_)
            return !0;
        for (var t = 0; t < this.check_.length; t++)
            if (-1 != e.check_.indexOf(this.check_[t]))
                return !0;
        return !1
    }
    ,
    z.Connection.prototype.setCheck = function(t) {
        return t ? (e.isArray(t) || (t = [t]),
        this.check_ = t,
        this.targetConnection && !this.checkType_(this.targetConnection) && (this.isSuperior() ? this.targetBlock().setParent(null) : this.sourceBlock_.setParent(null),
        this.sourceBlock_.bumpNeighbours_())) : this.check_ = null,
        this
    }
    ,
    z.Connection.prototype.neighbours_ = function(e) {
        function t(t) {
            var i = o - n[t].x_
              , s = r - n[t].y_;
            return Math.sqrt(i * i + s * s) <= e && l.push(n[t]),
            s < e
        }
        for (var n = this.dbList_[z.OPPOSITE_TYPE[this.type]], o = this.x_, r = this.y_, i = 0, s = n.length - 2, a = s; i < a; )
            n[a].y_ < r ? i = a : s = a,
            a = Math.floor((i + s) / 2);
        s = i = a;
        var l = [];
        if (n.length) {
            for (; 0 <= i && t(i); )
                i--;
            do {
                s++
            } while (s < n.length && t(s))
        }
        return l
    }
    ,
    z.Connection.prototype.hideAll = function() {
        if (this.inDB_ && this.dbList_[this.type].removeConnection_(this),
        this.targetConnection)
            for (var e = this.targetBlock().getDescendants(), t = 0; t < e.length; t++) {
                for (var n = e[t], o = n.getConnections_(!0), r = 0; r < o.length; r++) {
                    var i = o[r];
                    i.inDB_ && this.dbList_[i.type].removeConnection_(i)
                }
                for (n = n.getIcons(),
                o = 0; o < n.length; o++)
                    n[o].setVisible(!1)
            }
    }
    ,
    z.Connection.prototype.unhideAll = function() {
        this.inDB_ || this.dbList_[this.type].addConnection_(this);
        var e = [];
        if (this.type != z.INPUT_VALUE && this.type != z.NEXT_STATEMENT)
            return e;
        var t = this.targetBlock();
        if (t) {
            if (t.isCollapsed()) {
                var n = [];
                t.outputConnection && n.push(t.outputConnection),
                t.nextConnection && n.push(t.nextConnection),
                t.previousConnection && n.push(t.previousConnection)
            } else
                n = t.getConnections_(!0);
            for (var o = 0; o < n.length; o++)
                e.push.apply(e, n[o].unhideAll());
            0 == e.length && (e[0] = t)
        }
        return e
    }
    ,
    z.ConnectionDB = function() {}
    ,
    z.ConnectionDB.prototype = [],
    z.ConnectionDB.constructor = z.ConnectionDB,
    z.ConnectionDB.prototype.addConnection_ = function(e) {
        if (e.inDB_)
            throw "Connection already in database.";
        for (var t = 0, n = this.length; t < n; ) {
            var o = Math.floor((t + n) / 2);
            if (this[o].y_ < e.y_)
                t = o + 1;
            else {
                if (!(this[o].y_ > e.y_)) {
                    t = o;
                    break
                }
                n = o
            }
        }
        this.splice(t, 0, e),
        e.inDB_ = !0
    }
    ,
    z.ConnectionDB.prototype.removeConnection_ = function(e) {
        if (!e.inDB_)
            throw "Connection not in database.";
        e.inDB_ = !1;
        for (var t = 0, n = this.length - 2, o = n; t < o; )
            this[o].y_ < e.y_ ? t = o : n = o,
            o = Math.floor((t + n) / 2);
        for (n = t = o; 0 <= t && this[t].y_ == e.y_; ) {
            if (this[t] == e)
                return void this.splice(t, 1);
            t--
        }
        do {
            if (this[n] == e)
                return void this.splice(n, 1);
            n++
        } while (n < this.length && this[n].y_ == e.y_);
        throw "Unable to find connection in connectionDB."
    }
    ,
    z.ConnectionDB.init = function(e) {
        var t = [];
        t[z.INPUT_VALUE] = new z.ConnectionDB,
        t[z.OUTPUT_VALUE] = new z.ConnectionDB,
        t[z.NEXT_STATEMENT] = new z.ConnectionDB,
        t[z.PREVIOUS_STATEMENT] = new z.ConnectionDB,
        e.connectionDBList = t
    }
    ,
    e.dom.BrowserFeature = {},
    e.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS = !1,
    e.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS = !1,
    e.dom.BrowserFeature.detectOffscreenCanvas_ = function(e) {
        try {
            return !!new self.OffscreenCanvas(0,0).getContext(e)
        } catch (e) {}
        return !1
    }
    ,
    e.dom.BrowserFeature.OFFSCREEN_CANVAS_2D = !e.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS && (e.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS || e.dom.BrowserFeature.detectOffscreenCanvas_("2d")),
    e.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES = !e.userAgent.IE || e.userAgent.isDocumentModeOrHigher(9),
    e.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE = !e.userAgent.GECKO && !e.userAgent.IE || e.userAgent.IE && e.userAgent.isDocumentModeOrHigher(9) || e.userAgent.GECKO && e.userAgent.isVersionOrHigher("1.9.1"),
    e.dom.BrowserFeature.CAN_USE_INNER_TEXT = e.userAgent.IE && !e.userAgent.isVersionOrHigher("9"),
    e.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY = e.userAgent.IE || e.userAgent.OPERA || e.userAgent.WEBKIT,
    e.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT = e.userAgent.IE,
    e.dom.BrowserFeature.LEGACY_IE_RANGES = e.userAgent.IE && !e.userAgent.isDocumentModeOrHigher(9),
    e.math = {},
    e.math.randomInt = function(e) {
        return Math.floor(Math.random() * e)
    }
    ,
    e.math.uniformRandom = function(e, t) {
        return e + Math.random() * (t - e)
    }
    ,
    e.math.clamp = function(e, t, n) {
        return Math.min(Math.max(e, t), n)
    }
    ,
    e.math.modulo = function(e, t) {
        return 0 > (e %= t) * t ? e + t : e
    }
    ,
    e.math.lerp = function(e, t, n) {
        return e + n * (t - e)
    }
    ,
    e.math.nearlyEquals = function(e, t, n) {
        return Math.abs(e - t) <= (n || 1e-6)
    }
    ,
    e.math.standardAngle = function(t) {
        return e.math.modulo(t, 360)
    }
    ,
    e.math.standardAngleInRadians = function(t) {
        return e.math.modulo(t, 2 * Math.PI)
    }
    ,
    e.math.toRadians = function(e) {
        return e * Math.PI / 180
    }
    ,
    e.math.toDegrees = function(e) {
        return 180 * e / Math.PI
    }
    ,
    e.math.angleDx = function(t, n) {
        return n * Math.cos(e.math.toRadians(t))
    }
    ,
    e.math.angleDy = function(t, n) {
        return n * Math.sin(e.math.toRadians(t))
    }
    ,
    e.math.angle = function(t, n, o, r) {
        return e.math.standardAngle(e.math.toDegrees(Math.atan2(r - n, o - t)))
    }
    ,
    e.math.angleDifference = function(t, n) {
        return 180 < (t = e.math.standardAngle(n) - e.math.standardAngle(t)) ? t -= 360 : -180 >= t && (t = 360 + t),
        t
    }
    ,
    e.math.sign = function(e) {
        return 0 < e ? 1 : 0 > e ? -1 : e
    }
    ,
    e.math.longestCommonSubsequence = function(e, t, n, o) {
        n = n || function(e, t) {
            return e == t
        }
        ,
        o = o || function(t) {
            return e[t]
        }
        ;
        for (var r = e.length, i = t.length, s = [], a = 0; a < r + 1; a++)
            s[a] = [],
            s[a][0] = 0;
        for (var l = 0; l < i + 1; l++)
            s[0][l] = 0;
        for (a = 1; a <= r; a++)
            for (l = 1; l <= i; l++)
                n(e[a - 1], t[l - 1]) ? s[a][l] = s[a - 1][l - 1] + 1 : s[a][l] = Math.max(s[a - 1][l], s[a][l - 1]);
        var u = [];
        for (a = r,
        l = i; 0 < a && 0 < l; )
            n(e[a - 1], t[l - 1]) ? (u.unshift(o(a - 1, l - 1)),
            a--,
            l--) : s[a - 1][l] > s[a][l - 1] ? a-- : l--;
        return u
    }
    ,
    e.math.sum = function(t) {
        return e.array.reduce(arguments, function(e, t) {
            return e + t
        }, 0)
    }
    ,
    e.math.average = function(t) {
        return e.math.sum.apply(null, arguments) / arguments.length
    }
    ,
    e.math.sampleVariance = function(t) {
        var n = arguments.length;
        if (2 > n)
            return 0;
        var o = e.math.average.apply(null, arguments);
        return e.math.sum.apply(null, e.array.map(arguments, function(e) {
            return Math.pow(e - o, 2)
        })) / (n - 1)
    }
    ,
    e.math.standardDeviation = function(t) {
        return Math.sqrt(e.math.sampleVariance.apply(null, arguments))
    }
    ,
    e.math.isInt = function(e) {
        return isFinite(e) && 0 == e % 1
    }
    ,
    e.math.isFiniteNumber = function(e) {
        return isFinite(e)
    }
    ,
    e.math.isNegativeZero = function(e) {
        return 0 == e && 0 > 1 / e
    }
    ,
    e.math.log10Floor = function(e) {
        if (0 < e) {
            var t = Math.round(Math.log(e) * Math.LOG10E);
            return t - (parseFloat("1e" + t) > e ? 1 : 0)
        }
        return 0 == e ? -1 / 0 : NaN
    }
    ,
    e.math.safeFloor = function(t, n) {
        return e.asserts.assert(!e.isDef(n) || 0 < n),
        Math.floor(t + (n || 2e-15))
    }
    ,
    e.math.safeCeil = function(t, n) {
        return e.asserts.assert(!e.isDef(n) || 0 < n),
        Math.ceil(t - (n || 2e-15))
    }
    ,
    e.math.Coordinate = function(t, n) {
        this.x = e.isDef(t) ? t : 0,
        this.y = e.isDef(n) ? n : 0
    }
    ,
    e.math.Coordinate.prototype.clone = function() {
        return new e.math.Coordinate(this.x,this.y)
    }
    ,
    e.DEBUG && (e.math.Coordinate.prototype.toString = function() {
        return "(" + this.x + ", " + this.y + ")"
    }
    ),
    e.math.Coordinate.prototype.equals = function(t) {
        return t instanceof e.math.Coordinate && e.math.Coordinate.equals(this, t)
    }
    ,
    e.math.Coordinate.equals = function(e, t) {
        return e == t || !(!e || !t) && (e.x == t.x && e.y == t.y)
    }
    ,
    e.math.Coordinate.distance = function(e, t) {
        var n = e.x - t.x;
        return e = e.y - t.y,
        Math.sqrt(n * n + e * e)
    }
    ,
    e.math.Coordinate.magnitude = function(e) {
        return Math.sqrt(e.x * e.x + e.y * e.y)
    }
    ,
    e.math.Coordinate.azimuth = function(t) {
        return e.math.angle(0, 0, t.x, t.y)
    }
    ,
    e.math.Coordinate.squaredDistance = function(e, t) {
        var n = e.x - t.x;
        return n * n + (e = e.y - t.y) * e
    }
    ,
    e.math.Coordinate.difference = function(t, n) {
        return new e.math.Coordinate(t.x - n.x,t.y - n.y)
    }
    ,
    e.math.Coordinate.sum = function(t, n) {
        return new e.math.Coordinate(t.x + n.x,t.y + n.y)
    }
    ,
    e.math.Coordinate.prototype.ceil = function() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this
    }
    ,
    e.math.Coordinate.prototype.floor = function() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this
    }
    ,
    e.math.Coordinate.prototype.round = function() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this
    }
    ,
    e.math.Coordinate.prototype.translate = function(t, n) {
        return t instanceof e.math.Coordinate ? (this.x += t.x,
        this.y += t.y) : (this.x += Number(t),
        e.isNumber(n) && (this.y += n)),
        this
    }
    ,
    e.math.Coordinate.prototype.scale = function(t, n) {
        return n = e.isNumber(n) ? n : t,
        this.x *= t,
        this.y *= n,
        this
    }
    ,
    e.math.Coordinate.prototype.rotateRadians = function(t, n) {
        n = n || new e.math.Coordinate(0,0);
        var o = this.x
          , r = this.y
          , i = Math.cos(t);
        t = Math.sin(t),
        this.x = (o - n.x) * i - (r - n.y) * t + n.x,
        this.y = (o - n.x) * t + (r - n.y) * i + n.y
    }
    ,
    e.math.Coordinate.prototype.rotateDegrees = function(t, n) {
        this.rotateRadians(e.math.toRadians(t), n)
    }
    ,
    e.math.Size = function(e, t) {
        this.width = e,
        this.height = t
    }
    ,
    e.math.Size.equals = function(e, t) {
        return e == t || !(!e || !t) && (e.width == t.width && e.height == t.height)
    }
    ,
    e.math.Size.prototype.clone = function() {
        return new e.math.Size(this.width,this.height)
    }
    ,
    e.DEBUG && (e.math.Size.prototype.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    }
    ),
    e.math.Size.prototype.getLongest = function() {
        return Math.max(this.width, this.height)
    }
    ,
    e.math.Size.prototype.getShortest = function() {
        return Math.min(this.width, this.height)
    }
    ,
    e.math.Size.prototype.area = function() {
        return this.width * this.height
    }
    ,
    e.math.Size.prototype.perimeter = function() {
        return 2 * (this.width + this.height)
    }
    ,
    e.math.Size.prototype.aspectRatio = function() {
        return this.width / this.height
    }
    ,
    e.math.Size.prototype.isEmpty = function() {
        return !this.area()
    }
    ,
    e.math.Size.prototype.ceil = function() {
        return this.width = Math.ceil(this.width),
        this.height = Math.ceil(this.height),
        this
    }
    ,
    e.math.Size.prototype.fitsInside = function(e) {
        return this.width <= e.width && this.height <= e.height
    }
    ,
    e.math.Size.prototype.floor = function() {
        return this.width = Math.floor(this.width),
        this.height = Math.floor(this.height),
        this
    }
    ,
    e.math.Size.prototype.round = function() {
        return this.width = Math.round(this.width),
        this.height = Math.round(this.height),
        this
    }
    ,
    e.math.Size.prototype.scale = function(t, n) {
        return n = e.isNumber(n) ? n : t,
        this.width *= t,
        this.height *= n,
        this
    }
    ,
    e.math.Size.prototype.scaleToCover = function(e) {
        return e = this.aspectRatio() <= e.aspectRatio() ? e.width / this.width : e.height / this.height,
        this.scale(e)
    }
    ,
    e.math.Size.prototype.scaleToFit = function(e) {
        return e = this.aspectRatio() > e.aspectRatio() ? e.width / this.width : e.height / this.height,
        this.scale(e)
    }
    ,
    e.dom.ASSUME_QUIRKS_MODE = !1,
    e.dom.ASSUME_STANDARDS_MODE = !1,
    e.dom.COMPAT_MODE_KNOWN_ = e.dom.ASSUME_QUIRKS_MODE || e.dom.ASSUME_STANDARDS_MODE,
    e.dom.getDomHelper = function(t) {
        return t ? new e.dom.DomHelper(e.dom.getOwnerDocument(t)) : e.dom.defaultDomHelper_ || (e.dom.defaultDomHelper_ = new e.dom.DomHelper)
    }
    ,
    e.dom.getDocument = function() {
        return document
    }
    ,
    e.dom.getElement = function(t) {
        return e.dom.getElementHelper_(document, t)
    }
    ,
    e.dom.getElementHelper_ = function(t, n) {
        return e.isString(n) ? t.getElementById(n) : n
    }
    ,
    e.dom.getRequiredElement = function(t) {
        return e.dom.getRequiredElementHelper_(document, t)
    }
    ,
    e.dom.getRequiredElementHelper_ = function(t, n) {
        return e.asserts.assertString(n),
        t = e.dom.getElementHelper_(t, n),
        e.asserts.assertElement(t, "No element found with id: " + n)
    }
    ,
    e.dom.$ = e.dom.getElement,
    e.dom.getElementsByTagName = function(e, t) {
        return (t || document).getElementsByTagName(String(e))
    }
    ,
    e.dom.getElementsByTagNameAndClass = function(t, n, o) {
        return e.dom.getElementsByTagNameAndClass_(document, t, n, o)
    }
    ,
    e.dom.getElementByTagNameAndClass = function(t, n, o) {
        return e.dom.getElementByTagNameAndClass_(document, t, n, o)
    }
    ,
    e.dom.getElementsByClass = function(t, n) {
        var o = n || document;
        return e.dom.canUseQuerySelector_(o) ? o.querySelectorAll("." + t) : e.dom.getElementsByTagNameAndClass_(document, "*", t, n)
    }
    ,
    e.dom.getElementByClass = function(t, n) {
        var o = n || document;
        return (o.getElementsByClassName ? o.getElementsByClassName(t)[0] : e.dom.getElementByTagNameAndClass_(document, "*", t, n)) || null
    }
    ,
    e.dom.getRequiredElementByClass = function(t, n) {
        return n = e.dom.getElementByClass(t, n),
        e.asserts.assert(n, "No element found with className: " + t)
    }
    ,
    e.dom.canUseQuerySelector_ = function(e) {
        return !(!e.querySelectorAll || !e.querySelector)
    }
    ,
    e.dom.getElementsByTagNameAndClass_ = function(t, n, o, r) {
        if (t = r || t,
        n = n && "*" != n ? String(n).toUpperCase() : "",
        e.dom.canUseQuerySelector_(t) && (n || o))
            return t.querySelectorAll(n + (o ? "." + o : ""));
        if (o && t.getElementsByClassName) {
            if (t = t.getElementsByClassName(o),
            n) {
                r = {};
                for (var i, s = 0, a = 0; i = t[a]; a++)
                    n == i.nodeName && (r[s++] = i);
                return r.length = s,
                r
            }
            return t
        }
        if (t = t.getElementsByTagName(n || "*"),
        o) {
            for (r = {},
            a = s = 0; i = t[a]; a++)
                "function" == typeof (n = i.className).split && e.array.contains(n.split(/\s+/), o) && (r[s++] = i);
            return r.length = s,
            r
        }
        return t
    }
    ,
    e.dom.getElementByTagNameAndClass_ = function(t, n, o, r) {
        var i = r || t
          , s = n && "*" != n ? String(n).toUpperCase() : "";
        return e.dom.canUseQuerySelector_(i) && (s || o) ? i.querySelector(s + (o ? "." + o : "")) : e.dom.getElementsByTagNameAndClass_(t, n, o, r)[0] || null
    }
    ,
    e.dom.$$ = e.dom.getElementsByTagNameAndClass,
    e.dom.setProperties = function(t, n) {
        e.object.forEach(n, function(n, o) {
            n && "object" == typeof n && n.implementsGoogStringTypedString && (n = n.getTypedStringValue()),
            "style" == o ? t.style.cssText = n : "class" == o ? t.className = n : "for" == o ? t.htmlFor = n : e.dom.DIRECT_ATTRIBUTE_MAP_.hasOwnProperty(o) ? t.setAttribute(e.dom.DIRECT_ATTRIBUTE_MAP_[o], n) : e.string.startsWith(o, "aria-") || e.string.startsWith(o, "data-") ? t.setAttribute(o, n) : t[o] = n
        })
    }
    ,
    e.dom.DIRECT_ATTRIBUTE_MAP_ = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    },
    e.dom.getViewportSize = function(t) {
        return e.dom.getViewportSize_(t || window)
    }
    ,
    e.dom.getViewportSize_ = function(t) {
        return t = t.document,
        t = e.dom.isCss1CompatMode_(t) ? t.documentElement : t.body,
        new e.math.Size(t.clientWidth,t.clientHeight)
    }
    ,
    e.dom.getDocumentHeight = function() {
        return e.dom.getDocumentHeight_(window)
    }
    ,
    e.dom.getDocumentHeightForWindow = function(t) {
        return e.dom.getDocumentHeight_(t)
    }
    ,
    e.dom.getDocumentHeight_ = function(t) {
        var n = t.document
          , o = 0;
        if (n) {
            o = n.body;
            var r = n.documentElement;
            if (!r || !o)
                return 0;
            if (t = e.dom.getViewportSize_(t).height,
            e.dom.isCss1CompatMode_(n) && r.scrollHeight)
                o = r.scrollHeight != t ? r.scrollHeight : r.offsetHeight;
            else {
                n = r.scrollHeight;
                var i = r.offsetHeight;
                r.clientHeight != i && (n = o.scrollHeight,
                i = o.offsetHeight),
                o = n > t ? n > i ? n : i : n < i ? n : i
            }
        }
        return o
    }
    ,
    e.dom.getPageScroll = function(t) {
        return e.dom.getDomHelper((t || e.global || window).document).getDocumentScroll()
    }
    ,
    e.dom.getDocumentScroll = function() {
        return e.dom.getDocumentScroll_(document)
    }
    ,
    e.dom.getDocumentScroll_ = function(t) {
        var n = e.dom.getDocumentScrollElement_(t);
        return t = e.dom.getWindow_(t),
        e.userAgent.IE && e.userAgent.isVersionOrHigher("10") && t.pageYOffset != n.scrollTop ? new e.math.Coordinate(n.scrollLeft,n.scrollTop) : new e.math.Coordinate(t.pageXOffset || n.scrollLeft,t.pageYOffset || n.scrollTop)
    }
    ,
    e.dom.getDocumentScrollElement = function() {
        return e.dom.getDocumentScrollElement_(document)
    }
    ,
    e.dom.getDocumentScrollElement_ = function(t) {
        return t.scrollingElement ? t.scrollingElement : !e.userAgent.WEBKIT && e.dom.isCss1CompatMode_(t) ? t.documentElement : t.body || t.documentElement
    }
    ,
    e.dom.getWindow = function(t) {
        return t ? e.dom.getWindow_(t) : window
    }
    ,
    e.dom.getWindow_ = function(e) {
        return e.parentWindow || e.defaultView
    }
    ,
    e.dom.createDom = function(t, n, o) {
        return e.dom.createDom_(document, arguments)
    }
    ,
    e.dom.createDom_ = function(t, n) {
        var o = String(n[0])
          , r = n[1];
        if (!e.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES && r && (r.name || r.type)) {
            if (o = ["<", o],
            r.name && o.push(' name="', e.string.htmlEscape(r.name), '"'),
            r.type) {
                o.push(' type="', e.string.htmlEscape(r.type), '"');
                var i = {};
                e.object.extend(i, r),
                delete i.type,
                r = i
            }
            o.push(">"),
            o = o.join("")
        }
        return o = t.createElement(o),
        r && (e.isString(r) ? o.className = r : e.isArray(r) ? o.className = r.join(" ") : e.dom.setProperties(o, r)),
        2 < n.length && e.dom.append_(t, o, n, 2),
        o
    }
    ,
    e.dom.append_ = function(t, n, o, r) {
        function i(o) {
            o && n.appendChild(e.isString(o) ? t.createTextNode(o) : o)
        }
        for (; r < o.length; r++) {
            var s = o[r];
            e.isArrayLike(s) && !e.dom.isNodeLike(s) ? e.array.forEach(e.dom.isNodeList(s) ? e.array.toArray(s) : s, i) : i(s)
        }
    }
    ,
    e.dom.$dom = e.dom.createDom,
    e.dom.createElement = function(t) {
        return e.dom.createElement_(document, t)
    }
    ,
    e.dom.createElement_ = function(e, t) {
        return e.createElement(String(t))
    }
    ,
    e.dom.createTextNode = function(e) {
        return document.createTextNode(String(e))
    }
    ,
    e.dom.createTable = function(t, n, o) {
        return e.dom.createTable_(document, t, n, !!o)
    }
    ,
    e.dom.createTable_ = function(t, n, o, r) {
        for (var i = e.dom.createElement_(t, "TABLE"), s = i.appendChild(e.dom.createElement_(t, "TBODY")), a = 0; a < n; a++) {
            for (var l = e.dom.createElement_(t, "TR"), u = 0; u < o; u++) {
                var c = e.dom.createElement_(t, "TD");
                r && e.dom.setTextContent(c, e.string.Unicode.NBSP),
                l.appendChild(c)
            }
            s.appendChild(l)
        }
        return i
    }
    ,
    e.dom.constHtmlToNode = function(t) {
        var n = e.array.map(arguments, e.string.Const.unwrap);
        return n = e.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(e.string.Const.from("Constant HTML string, that gets turned into a Node later, so it will be automatically balanced."), n.join("")),
        e.dom.safeHtmlToNode(n)
    }
    ,
    e.dom.safeHtmlToNode = function(t) {
        return e.dom.safeHtmlToNode_(document, t)
    }
    ,
    e.dom.safeHtmlToNode_ = function(t, n) {
        var o = e.dom.createElement_(t, "DIV");
        return e.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT ? (e.dom.safe.setInnerHtml(o, e.html.SafeHtml.concat(e.html.SafeHtml.BR, n)),
        o.removeChild(e.asserts.assert(o.firstChild))) : e.dom.safe.setInnerHtml(o, n),
        e.dom.childrenToNode_(t, o)
    }
    ,
    e.dom.childrenToNode_ = function(t, n) {
        if (1 == n.childNodes.length)
            return n.removeChild(e.asserts.assert(n.firstChild));
        for (t = t.createDocumentFragment(); n.firstChild; )
            t.appendChild(n.firstChild);
        return t
    }
    ,
    e.dom.isCss1CompatMode = function() {
        return e.dom.isCss1CompatMode_(document)
    }
    ,
    e.dom.isCss1CompatMode_ = function(t) {
        return e.dom.COMPAT_MODE_KNOWN_ ? e.dom.ASSUME_STANDARDS_MODE : "CSS1Compat" == t.compatMode
    }
    ,
    e.dom.canHaveChildren = function(t) {
        if (t.nodeType != e.dom.NodeType.ELEMENT)
            return !1;
        switch (t.tagName) {
        case "APPLET":
        case "AREA":
        case "BASE":
        case "BR":
        case "COL":
        case "COMMAND":
        case "EMBED":
        case "FRAME":
        case "HR":
        case "IMG":
        case "INPUT":
        case "IFRAME":
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case "OBJECT":
        case "PARAM":
        case "SCRIPT":
        case "SOURCE":
        case "STYLE":
        case "TRACK":
        case "WBR":
            return !1
        }
        return !0
    }
    ,
    e.dom.appendChild = function(t, n) {
        e.asserts.assert(null != t && null != n, "goog.dom.appendChild expects non-null arguments"),
        t.appendChild(n)
    }
    ,
    e.dom.append = function(t, n) {
        e.dom.append_(e.dom.getOwnerDocument(t), t, arguments, 1)
    }
    ,
    e.dom.removeChildren = function(e) {
        for (var t; t = e.firstChild; )
            e.removeChild(t)
    }
    ,
    e.dom.insertSiblingBefore = function(t, n) {
        e.asserts.assert(null != t && null != n, "goog.dom.insertSiblingBefore expects non-null arguments"),
        n.parentNode && n.parentNode.insertBefore(t, n)
    }
    ,
    e.dom.insertSiblingAfter = function(t, n) {
        e.asserts.assert(null != t && null != n, "goog.dom.insertSiblingAfter expects non-null arguments"),
        n.parentNode && n.parentNode.insertBefore(t, n.nextSibling)
    }
    ,
    e.dom.insertChildAt = function(t, n, o) {
        e.asserts.assert(null != t, "goog.dom.insertChildAt expects a non-null parent"),
        t.insertBefore(n, t.childNodes[o] || null)
    }
    ,
    e.dom.removeNode = function(e) {
        return e && e.parentNode ? e.parentNode.removeChild(e) : null
    }
    ,
    e.dom.replaceNode = function(t, n) {
        e.asserts.assert(null != t && null != n, "goog.dom.replaceNode expects non-null arguments");
        var o = n.parentNode;
        o && o.replaceChild(t, n)
    }
    ,
    e.dom.flattenElement = function(t) {
        var n, o = t.parentNode;
        if (o && o.nodeType != e.dom.NodeType.DOCUMENT_FRAGMENT) {
            if (t.removeNode)
                return t.removeNode(!1);
            for (; n = t.firstChild; )
                o.insertBefore(n, t);
            return e.dom.removeNode(t)
        }
    }
    ,
    e.dom.getChildren = function(t) {
        return e.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE && null != t.children ? t.children : e.array.filter(t.childNodes, function(t) {
            return t.nodeType == e.dom.NodeType.ELEMENT
        })
    }
    ,
    e.dom.getFirstElementChild = function(t) {
        return e.isDef(t.firstElementChild) ? t.firstElementChild : e.dom.getNextElementNode_(t.firstChild, !0)
    }
    ,
    e.dom.getLastElementChild = function(t) {
        return e.isDef(t.lastElementChild) ? t.lastElementChild : e.dom.getNextElementNode_(t.lastChild, !1)
    }
    ,
    e.dom.getNextElementSibling = function(t) {
        return e.isDef(t.nextElementSibling) ? t.nextElementSibling : e.dom.getNextElementNode_(t.nextSibling, !0)
    }
    ,
    e.dom.getPreviousElementSibling = function(t) {
        return e.isDef(t.previousElementSibling) ? t.previousElementSibling : e.dom.getNextElementNode_(t.previousSibling, !1)
    }
    ,
    e.dom.getNextElementNode_ = function(t, n) {
        for (; t && t.nodeType != e.dom.NodeType.ELEMENT; )
            t = n ? t.nextSibling : t.previousSibling;
        return t
    }
    ,
    e.dom.getNextNode = function(e) {
        if (!e)
            return null;
        if (e.firstChild)
            return e.firstChild;
        for (; e && !e.nextSibling; )
            e = e.parentNode;
        return e ? e.nextSibling : null
    }
    ,
    e.dom.getPreviousNode = function(e) {
        if (!e)
            return null;
        if (!e.previousSibling)
            return e.parentNode;
        for (e = e.previousSibling; e && e.lastChild; )
            e = e.lastChild;
        return e
    }
    ,
    e.dom.isNodeLike = function(t) {
        return e.isObject(t) && 0 < t.nodeType
    }
    ,
    e.dom.isElement = function(t) {
        return e.isObject(t) && t.nodeType == e.dom.NodeType.ELEMENT
    }
    ,
    e.dom.isWindow = function(t) {
        return e.isObject(t) && t.window == t
    }
    ,
    e.dom.getParentElement = function(t) {
        var n;
        return !e.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY || e.userAgent.IE && e.userAgent.isVersionOrHigher("9") && !e.userAgent.isVersionOrHigher("10") && e.global.SVGElement && t instanceof e.global.SVGElement || !(n = t.parentElement) ? (n = t.parentNode,
        e.dom.isElement(n) ? n : null) : n
    }
    ,
    e.dom.contains = function(t, n) {
        if (!t || !n)
            return !1;
        if (t.contains && n.nodeType == e.dom.NodeType.ELEMENT)
            return t == n || t.contains(n);
        if (void 0 !== t.compareDocumentPosition)
            return t == n || !!(16 & t.compareDocumentPosition(n));
        for (; n && t != n; )
            n = n.parentNode;
        return n == t
    }
    ,
    e.dom.compareNodeOrder = function(t, n) {
        if (t == n)
            return 0;
        if (t.compareDocumentPosition)
            return 2 & t.compareDocumentPosition(n) ? 1 : -1;
        if (e.userAgent.IE && !e.userAgent.isDocumentModeOrHigher(9)) {
            if (t.nodeType == e.dom.NodeType.DOCUMENT)
                return -1;
            if (n.nodeType == e.dom.NodeType.DOCUMENT)
                return 1
        }
        if ("sourceIndex"in t || t.parentNode && "sourceIndex"in t.parentNode) {
            var o = t.nodeType == e.dom.NodeType.ELEMENT
              , r = n.nodeType == e.dom.NodeType.ELEMENT;
            if (o && r)
                return t.sourceIndex - n.sourceIndex;
            var i = t.parentNode
              , s = n.parentNode;
            return i == s ? e.dom.compareSiblingOrder_(t, n) : !o && e.dom.contains(i, n) ? -1 * e.dom.compareParentsDescendantNodeIe_(t, n) : !r && e.dom.contains(s, t) ? e.dom.compareParentsDescendantNodeIe_(n, t) : (o ? t.sourceIndex : i.sourceIndex) - (r ? n.sourceIndex : s.sourceIndex)
        }
        return (o = (r = e.dom.getOwnerDocument(t)).createRange()).selectNode(t),
        o.collapse(!0),
        (t = r.createRange()).selectNode(n),
        t.collapse(!0),
        o.compareBoundaryPoints(e.global.Range.START_TO_END, t)
    }
    ,
    e.dom.compareParentsDescendantNodeIe_ = function(t, n) {
        var o = t.parentNode;
        if (o == n)
            return -1;
        for (; n.parentNode != o; )
            n = n.parentNode;
        return e.dom.compareSiblingOrder_(n, t)
    }
    ,
    e.dom.compareSiblingOrder_ = function(e, t) {
        for (; t = t.previousSibling; )
            if (t == e)
                return -1;
        return 1
    }
    ,
    e.dom.findCommonAncestor = function(e) {
        var t, n = arguments.length;
        if (!n)
            return null;
        if (1 == n)
            return arguments[0];
        var o = []
          , r = 1 / 0;
        for (t = 0; t < n; t++) {
            for (var i = [], s = arguments[t]; s; )
                i.unshift(s),
                s = s.parentNode;
            o.push(i),
            r = Math.min(r, i.length)
        }
        for (i = null,
        t = 0; t < r; t++) {
            s = o[0][t];
            for (var a = 1; a < n; a++)
                if (s != o[a][t])
                    return i;
            i = s
        }
        return i
    }
    ,
    e.dom.isInDocument = function(e) {
        return 16 == (16 & e.ownerDocument.compareDocumentPosition(e))
    }
    ,
    e.dom.getOwnerDocument = function(t) {
        return e.asserts.assert(t, "Node cannot be null or undefined."),
        t.nodeType == e.dom.NodeType.DOCUMENT ? t : t.ownerDocument || t.document
    }
    ,
    e.dom.getFrameContentDocument = function(e) {
        return e.contentDocument || e.contentWindow.document
    }
    ,
    e.dom.getFrameContentWindow = function(t) {
        try {
            return t.contentWindow || (t.contentDocument ? e.dom.getWindow(t.contentDocument) : null)
        } catch (e) {}
        return null
    }
    ,
    e.dom.setTextContent = function(t, n) {
        if (e.asserts.assert(null != t, "goog.dom.setTextContent expects a non-null value for node"),
        "textContent"in t)
            t.textContent = n;
        else if (t.nodeType == e.dom.NodeType.TEXT)
            t.data = String(n);
        else if (t.firstChild && t.firstChild.nodeType == e.dom.NodeType.TEXT) {
            for (; t.lastChild != t.firstChild; )
                t.removeChild(e.asserts.assert(t.lastChild));
            t.firstChild.data = String(n)
        } else {
            e.dom.removeChildren(t);
            var o = e.dom.getOwnerDocument(t);
            t.appendChild(o.createTextNode(String(n)))
        }
    }
    ,
    e.dom.getOuterHtml = function(t) {
        if (e.asserts.assert(null !== t, "goog.dom.getOuterHtml expects a non-null value for element"),
        "outerHTML"in t)
            return t.outerHTML;
        var n = e.dom.getOwnerDocument(t);
        return (n = e.dom.createElement_(n, "DIV")).appendChild(t.cloneNode(!0)),
        n.innerHTML
    }
    ,
    e.dom.findNode = function(t, n) {
        var o = [];
        return e.dom.findNodes_(t, n, o, !0) ? o[0] : void 0
    }
    ,
    e.dom.findNodes = function(t, n) {
        var o = [];
        return e.dom.findNodes_(t, n, o, !1),
        o
    }
    ,
    e.dom.findNodes_ = function(t, n, o, r) {
        if (null != t)
            for (t = t.firstChild; t; ) {
                if (n(t) && (o.push(t),
                r) || e.dom.findNodes_(t, n, o, r))
                    return !0;
                t = t.nextSibling
            }
        return !1
    }
    ,
    e.dom.findElement = function(t, n) {
        for (t = e.dom.getChildrenReverse_(t); 0 < t.length; ) {
            var o = t.pop();
            if (n(o))
                return o;
            for (o = o.lastElementChild; o; o = o.previousElementSibling)
                t.push(o)
        }
        return null
    }
    ,
    e.dom.findElements = function(t, n) {
        var o = [];
        for (t = e.dom.getChildrenReverse_(t); 0 < t.length; ) {
            var r = t.pop();
            for (n(r) && o.push(r),
            r = r.lastElementChild; r; r = r.previousElementSibling)
                t.push(r)
        }
        return o
    }
    ,
    e.dom.getChildrenReverse_ = function(t) {
        if (t.nodeType == e.dom.NodeType.DOCUMENT)
            return [t.documentElement];
        var n = [];
        for (t = t.lastElementChild; t; t = t.previousElementSibling)
            n.push(t);
        return n
    }
    ,
    e.dom.TAGS_TO_IGNORE_ = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    },
    e.dom.PREDEFINED_TAG_VALUES_ = {
        IMG: " ",
        BR: "\n"
    },
    e.dom.isFocusableTabIndex = function(t) {
        return e.dom.hasSpecifiedTabIndex_(t) && e.dom.isTabIndexFocusable_(t)
    }
    ,
    e.dom.setFocusableTabIndex = function(e, t) {
        t ? e.tabIndex = 0 : (e.tabIndex = -1,
        e.removeAttribute("tabIndex"))
    }
    ,
    e.dom.isFocusable = function(t) {
        var n;
        return (n = e.dom.nativelySupportsFocus_(t) ? !t.disabled && (!e.dom.hasSpecifiedTabIndex_(t) || e.dom.isTabIndexFocusable_(t)) : e.dom.isFocusableTabIndex(t)) && e.userAgent.IE ? e.dom.hasNonZeroBoundingRect_(t) : n
    }
    ,
    e.dom.hasSpecifiedTabIndex_ = function(t) {
        return e.userAgent.IE && !e.userAgent.isVersionOrHigher("9") ? (t = t.getAttributeNode("tabindex"),
        e.isDefAndNotNull(t) && t.specified) : t.hasAttribute("tabindex")
    }
    ,
    e.dom.isTabIndexFocusable_ = function(t) {
        return t = t.tabIndex,
        e.isNumber(t) && 0 <= t && 32768 > t
    }
    ,
    e.dom.nativelySupportsFocus_ = function(e) {
        return "A" == e.tagName && e.hasAttribute("href") || "INPUT" == e.tagName || "TEXTAREA" == e.tagName || "SELECT" == e.tagName || "BUTTON" == e.tagName
    }
    ,
    e.dom.hasNonZeroBoundingRect_ = function(t) {
        return t = !e.isFunction(t.getBoundingClientRect) || e.userAgent.IE && null == t.parentElement ? {
            height: t.offsetHeight,
            width: t.offsetWidth
        } : t.getBoundingClientRect(),
        e.isDefAndNotNull(t) && 0 < t.height && 0 < t.width
    }
    ,
    e.dom.getTextContent = function(t) {
        if (e.dom.BrowserFeature.CAN_USE_INNER_TEXT && null !== t && "innerText"in t)
            t = e.string.canonicalizeNewlines(t.innerText);
        else {
            var n = [];
            e.dom.getTextContent_(t, n, !0),
            t = n.join("")
        }
        return t = (t = t.replace(/ \xAD /g, " ").replace(/\xAD/g, "")).replace(/\u200B/g, ""),
        e.dom.BrowserFeature.CAN_USE_INNER_TEXT || (t = t.replace(/ +/g, " ")),
        " " != t && (t = t.replace(/^\s*/, "")),
        t
    }
    ,
    e.dom.getRawTextContent = function(t) {
        var n = [];
        return e.dom.getTextContent_(t, n, !1),
        n.join("")
    }
    ,
    e.dom.getTextContent_ = function(t, n, o) {
        if (!(t.nodeName in e.dom.TAGS_TO_IGNORE_))
            if (t.nodeType == e.dom.NodeType.TEXT)
                o ? n.push(String(t.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : n.push(t.nodeValue);
            else if (t.nodeName in e.dom.PREDEFINED_TAG_VALUES_)
                n.push(e.dom.PREDEFINED_TAG_VALUES_[t.nodeName]);
            else
                for (t = t.firstChild; t; )
                    e.dom.getTextContent_(t, n, o),
                    t = t.nextSibling
    }
    ,
    e.dom.getNodeTextLength = function(t) {
        return e.dom.getTextContent(t).length
    }
    ,
    e.dom.getNodeTextOffset = function(t, n) {
        n = n || e.dom.getOwnerDocument(t).body;
        for (var o = []; t && t != n; ) {
            for (var r = t; r = r.previousSibling; )
                o.unshift(e.dom.getTextContent(r));
            t = t.parentNode
        }
        return e.string.trimLeft(o.join("")).replace(/ +/g, " ").length
    }
    ,
    e.dom.getNodeAtOffset = function(t, n, o) {
        t = [t];
        for (var r = 0, i = null; 0 < t.length && r < n; )
            if (!((i = t.pop()).nodeName in e.dom.TAGS_TO_IGNORE_))
                if (i.nodeType == e.dom.NodeType.TEXT) {
                    var s = i.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " ");
                    r += s.length
                } else if (i.nodeName in e.dom.PREDEFINED_TAG_VALUES_)
                    r += e.dom.PREDEFINED_TAG_VALUES_[i.nodeName].length;
                else
                    for (s = i.childNodes.length - 1; 0 <= s; s--)
                        t.push(i.childNodes[s]);
        return e.isObject(o) && (o.remainder = i ? i.nodeValue.length + n - r - 1 : 0,
        o.node = i),
        i
    }
    ,
    e.dom.isNodeList = function(t) {
        if (t && "number" == typeof t.length) {
            if (e.isObject(t))
                return "function" == typeof t.item || "string" == typeof t.item;
            if (e.isFunction(t))
                return "function" == typeof t.item
        }
        return !1
    }
    ,
    e.dom.getAncestorByTagNameAndClass = function(t, n, o, r) {
        if (!n && !o)
            return null;
        var i = n ? String(n).toUpperCase() : null;
        return e.dom.getAncestor(t, function(t) {
            return (!i || t.nodeName == i) && (!o || e.isString(t.className) && e.array.contains(t.className.split(/\s+/), o))
        }, !0, r)
    }
    ,
    e.dom.getAncestorByClass = function(t, n, o) {
        return e.dom.getAncestorByTagNameAndClass(t, null, n, o)
    }
    ,
    e.dom.getAncestor = function(t, n, o, r) {
        for (t && !o && (t = t.parentNode),
        o = 0; t && (null == r || o <= r); ) {
            if (e.asserts.assert("parentNode" != t.name),
            n(t))
                return t;
            t = t.parentNode,
            o++
        }
        return null
    }
    ,
    e.dom.getActiveElement = function(e) {
        try {
            var t = e && e.activeElement;
            return t && t.nodeName ? t : null
        } catch (e) {
            return null
        }
    }
    ,
    e.dom.getPixelRatio = function() {
        var t = e.dom.getWindow();
        return e.isDef(t.devicePixelRatio) ? t.devicePixelRatio : t.matchMedia ? e.dom.matchesPixelRatio_(3) || e.dom.matchesPixelRatio_(2) || e.dom.matchesPixelRatio_(1.5) || e.dom.matchesPixelRatio_(1) || .75 : 1
    }
    ,
    e.dom.matchesPixelRatio_ = function(t) {
        return e.dom.getWindow().matchMedia("(min-resolution: " + t + "dppx),(min--moz-device-pixel-ratio: " + t + "),(min-resolution: " + 96 * t + "dpi)").matches ? t : 0
    }
    ,
    e.dom.getCanvasContext2D = function(e) {
        return e.getContext("2d")
    }
    ,
    e.dom.DomHelper = function(t) {
        this.document_ = t || e.global.document || document
    }
    ,
    e.dom.DomHelper.prototype.getDomHelper = e.dom.getDomHelper,
    e.dom.DomHelper.prototype.setDocument = function(e) {
        this.document_ = e
    }
    ,
    e.dom.DomHelper.prototype.getDocument = function() {
        return this.document_
    }
    ,
    e.dom.DomHelper.prototype.getElement = function(t) {
        return e.dom.getElementHelper_(this.document_, t)
    }
    ,
    e.dom.DomHelper.prototype.getRequiredElement = function(t) {
        return e.dom.getRequiredElementHelper_(this.document_, t)
    }
    ,
    e.dom.DomHelper.prototype.$ = e.dom.DomHelper.prototype.getElement,
    e.dom.DomHelper.prototype.getElementsByTagName = function(e, t) {
        return (t || this.document_).getElementsByTagName(String(e))
    }
    ,
    e.dom.DomHelper.prototype.getElementsByTagNameAndClass = function(t, n, o) {
        return e.dom.getElementsByTagNameAndClass_(this.document_, t, n, o)
    }
    ,
    e.dom.DomHelper.prototype.getElementByTagNameAndClass = function(t, n, o) {
        return e.dom.getElementByTagNameAndClass_(this.document_, t, n, o)
    }
    ,
    e.dom.DomHelper.prototype.getElementsByClass = function(t, n) {
        return e.dom.getElementsByClass(t, n || this.document_)
    }
    ,
    e.dom.DomHelper.prototype.getElementByClass = function(t, n) {
        return e.dom.getElementByClass(t, n || this.document_)
    }
    ,
    e.dom.DomHelper.prototype.getRequiredElementByClass = function(t, n) {
        return e.dom.getRequiredElementByClass(t, n || this.document_)
    }
    ,
    e.dom.DomHelper.prototype.$$ = e.dom.DomHelper.prototype.getElementsByTagNameAndClass,
    e.dom.DomHelper.prototype.setProperties = e.dom.setProperties,
    e.dom.DomHelper.prototype.getViewportSize = function(t) {
        return e.dom.getViewportSize(t || this.getWindow())
    }
    ,
    e.dom.DomHelper.prototype.getDocumentHeight = function() {
        return e.dom.getDocumentHeight_(this.getWindow())
    }
    ,
    e.dom.DomHelper.prototype.createDom = function(t, n, o) {
        return e.dom.createDom_(this.document_, arguments)
    }
    ,
    e.dom.DomHelper.prototype.$dom = e.dom.DomHelper.prototype.createDom,
    e.dom.DomHelper.prototype.createElement = function(t) {
        return e.dom.createElement_(this.document_, t)
    }
    ,
    e.dom.DomHelper.prototype.createTextNode = function(e) {
        return this.document_.createTextNode(String(e))
    }
    ,
    e.dom.DomHelper.prototype.createTable = function(t, n, o) {
        return e.dom.createTable_(this.document_, t, n, !!o)
    }
    ,
    e.dom.DomHelper.prototype.safeHtmlToNode = function(t) {
        return e.dom.safeHtmlToNode_(this.document_, t)
    }
    ,
    e.dom.DomHelper.prototype.isCss1CompatMode = function() {
        return e.dom.isCss1CompatMode_(this.document_)
    }
    ,
    e.dom.DomHelper.prototype.getWindow = function() {
        return e.dom.getWindow_(this.document_)
    }
    ,
    e.dom.DomHelper.prototype.getDocumentScrollElement = function() {
        return e.dom.getDocumentScrollElement_(this.document_)
    }
    ,
    e.dom.DomHelper.prototype.getDocumentScroll = function() {
        return e.dom.getDocumentScroll_(this.document_)
    }
    ,
    e.dom.DomHelper.prototype.getActiveElement = function(t) {
        return e.dom.getActiveElement(t || this.document_)
    }
    ,
    e.dom.DomHelper.prototype.appendChild = e.dom.appendChild,
    e.dom.DomHelper.prototype.append = e.dom.append,
    e.dom.DomHelper.prototype.canHaveChildren = e.dom.canHaveChildren,
    e.dom.DomHelper.prototype.removeChildren = e.dom.removeChildren,
    e.dom.DomHelper.prototype.insertSiblingBefore = e.dom.insertSiblingBefore,
    e.dom.DomHelper.prototype.insertSiblingAfter = e.dom.insertSiblingAfter,
    e.dom.DomHelper.prototype.insertChildAt = e.dom.insertChildAt,
    e.dom.DomHelper.prototype.removeNode = e.dom.removeNode,
    e.dom.DomHelper.prototype.replaceNode = e.dom.replaceNode,
    e.dom.DomHelper.prototype.flattenElement = e.dom.flattenElement,
    e.dom.DomHelper.prototype.getChildren = e.dom.getChildren,
    e.dom.DomHelper.prototype.getFirstElementChild = e.dom.getFirstElementChild,
    e.dom.DomHelper.prototype.getLastElementChild = e.dom.getLastElementChild,
    e.dom.DomHelper.prototype.getNextElementSibling = e.dom.getNextElementSibling,
    e.dom.DomHelper.prototype.getPreviousElementSibling = e.dom.getPreviousElementSibling,
    e.dom.DomHelper.prototype.getNextNode = e.dom.getNextNode,
    e.dom.DomHelper.prototype.getPreviousNode = e.dom.getPreviousNode,
    e.dom.DomHelper.prototype.isNodeLike = e.dom.isNodeLike,
    e.dom.DomHelper.prototype.isElement = e.dom.isElement,
    e.dom.DomHelper.prototype.isWindow = e.dom.isWindow,
    e.dom.DomHelper.prototype.getParentElement = e.dom.getParentElement,
    e.dom.DomHelper.prototype.contains = e.dom.contains,
    e.dom.DomHelper.prototype.compareNodeOrder = e.dom.compareNodeOrder,
    e.dom.DomHelper.prototype.findCommonAncestor = e.dom.findCommonAncestor,
    e.dom.DomHelper.prototype.getOwnerDocument = e.dom.getOwnerDocument,
    e.dom.DomHelper.prototype.getFrameContentDocument = e.dom.getFrameContentDocument,
    e.dom.DomHelper.prototype.getFrameContentWindow = e.dom.getFrameContentWindow,
    e.dom.DomHelper.prototype.setTextContent = e.dom.setTextContent,
    e.dom.DomHelper.prototype.getOuterHtml = e.dom.getOuterHtml,
    e.dom.DomHelper.prototype.findNode = e.dom.findNode,
    e.dom.DomHelper.prototype.findNodes = e.dom.findNodes,
    e.dom.DomHelper.prototype.isFocusableTabIndex = e.dom.isFocusableTabIndex,
    e.dom.DomHelper.prototype.setFocusableTabIndex = e.dom.setFocusableTabIndex,
    e.dom.DomHelper.prototype.isFocusable = e.dom.isFocusable,
    e.dom.DomHelper.prototype.getTextContent = e.dom.getTextContent,
    e.dom.DomHelper.prototype.getNodeTextLength = e.dom.getNodeTextLength,
    e.dom.DomHelper.prototype.getNodeTextOffset = e.dom.getNodeTextOffset,
    e.dom.DomHelper.prototype.getNodeAtOffset = e.dom.getNodeAtOffset,
    e.dom.DomHelper.prototype.isNodeList = e.dom.isNodeList,
    e.dom.DomHelper.prototype.getAncestorByTagNameAndClass = e.dom.getAncestorByTagNameAndClass,
    e.dom.DomHelper.prototype.getAncestorByClass = e.dom.getAncestorByClass,
    e.dom.DomHelper.prototype.getAncestor = e.dom.getAncestor,
    e.dom.DomHelper.prototype.getCanvasContext2D = e.dom.getCanvasContext2D,
    e.dom.vendor = {},
    e.dom.vendor.getVendorJsPrefix = function() {
        return e.userAgent.WEBKIT ? "Webkit" : e.userAgent.GECKO ? "Moz" : e.userAgent.IE ? "ms" : e.userAgent.OPERA ? "O" : null
    }
    ,
    e.dom.vendor.getVendorPrefix = function() {
        return e.userAgent.WEBKIT ? "-webkit" : e.userAgent.GECKO ? "-moz" : e.userAgent.IE ? "-ms" : e.userAgent.OPERA ? "-o" : null
    }
    ,
    e.dom.vendor.getPrefixedPropertyName = function(t, n) {
        if (n && t in n)
            return t;
        var o = e.dom.vendor.getVendorJsPrefix();
        return o ? (t = (o = o.toLowerCase()) + e.string.toTitleCase(t),
        !e.isDef(n) || t in n ? t : null) : null
    }
    ,
    e.dom.vendor.getPrefixedEventType = function(t) {
        return ((e.dom.vendor.getVendorJsPrefix() || "") + t).toLowerCase()
    }
    ,
    e.math.Box = function(e, t, n, o) {
        this.top = e,
        this.right = t,
        this.bottom = n,
        this.left = o
    }
    ,
    e.math.Box.boundingBox = function(t) {
        for (var n = new e.math.Box(arguments[0].y,arguments[0].x,arguments[0].y,arguments[0].x), o = 1; o < arguments.length; o++)
            n.expandToIncludeCoordinate(arguments[o]);
        return n
    }
    ,
    e.math.Box.prototype.getWidth = function() {
        return this.right - this.left
    }
    ,
    e.math.Box.prototype.getHeight = function() {
        return this.bottom - this.top
    }
    ,
    e.math.Box.prototype.clone = function() {
        return new e.math.Box(this.top,this.right,this.bottom,this.left)
    }
    ,
    e.DEBUG && (e.math.Box.prototype.toString = function() {
        return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
    }
    ),
    e.math.Box.prototype.contains = function(t) {
        return e.math.Box.contains(this, t)
    }
    ,
    e.math.Box.prototype.expand = function(t, n, o, r) {
        return e.isObject(t) ? (this.top -= t.top,
        this.right += t.right,
        this.bottom += t.bottom,
        this.left -= t.left) : (this.top -= t,
        this.right += Number(n),
        this.bottom += Number(o),
        this.left -= Number(r)),
        this
    }
    ,
    e.math.Box.prototype.expandToInclude = function(e) {
        this.left = Math.min(this.left, e.left),
        this.top = Math.min(this.top, e.top),
        this.right = Math.max(this.right, e.right),
        this.bottom = Math.max(this.bottom, e.bottom)
    }
    ,
    e.math.Box.prototype.expandToIncludeCoordinate = function(e) {
        this.top = Math.min(this.top, e.y),
        this.right = Math.max(this.right, e.x),
        this.bottom = Math.max(this.bottom, e.y),
        this.left = Math.min(this.left, e.x)
    }
    ,
    e.math.Box.equals = function(e, t) {
        return e == t || !(!e || !t) && (e.top == t.top && e.right == t.right && e.bottom == t.bottom && e.left == t.left)
    }
    ,
    e.math.Box.contains = function(t, n) {
        return !(!t || !n) && (n instanceof e.math.Box ? n.left >= t.left && n.right <= t.right && n.top >= t.top && n.bottom <= t.bottom : n.x >= t.left && n.x <= t.right && n.y >= t.top && n.y <= t.bottom)
    }
    ,
    e.math.Box.relativePositionX = function(e, t) {
        return t.x < e.left ? t.x - e.left : t.x > e.right ? t.x - e.right : 0
    }
    ,
    e.math.Box.relativePositionY = function(e, t) {
        return t.y < e.top ? t.y - e.top : t.y > e.bottom ? t.y - e.bottom : 0
    }
    ,
    e.math.Box.distance = function(t, n) {
        var o = e.math.Box.relativePositionX(t, n);
        return t = e.math.Box.relativePositionY(t, n),
        Math.sqrt(o * o + t * t)
    }
    ,
    e.math.Box.intersects = function(e, t) {
        return e.left <= t.right && t.left <= e.right && e.top <= t.bottom && t.top <= e.bottom
    }
    ,
    e.math.Box.intersectsWithPadding = function(e, t, n) {
        return e.left <= t.right + n && t.left <= e.right + n && e.top <= t.bottom + n && t.top <= e.bottom + n
    }
    ,
    e.math.Box.prototype.ceil = function() {
        return this.top = Math.ceil(this.top),
        this.right = Math.ceil(this.right),
        this.bottom = Math.ceil(this.bottom),
        this.left = Math.ceil(this.left),
        this
    }
    ,
    e.math.Box.prototype.floor = function() {
        return this.top = Math.floor(this.top),
        this.right = Math.floor(this.right),
        this.bottom = Math.floor(this.bottom),
        this.left = Math.floor(this.left),
        this
    }
    ,
    e.math.Box.prototype.round = function() {
        return this.top = Math.round(this.top),
        this.right = Math.round(this.right),
        this.bottom = Math.round(this.bottom),
        this.left = Math.round(this.left),
        this
    }
    ,
    e.math.Box.prototype.translate = function(t, n) {
        return t instanceof e.math.Coordinate ? (this.left += t.x,
        this.right += t.x,
        this.top += t.y,
        this.bottom += t.y) : (e.asserts.assertNumber(t),
        this.left += t,
        this.right += t,
        e.isNumber(n) && (this.top += n,
        this.bottom += n)),
        this
    }
    ,
    e.math.Box.prototype.scale = function(t, n) {
        return n = e.isNumber(n) ? n : t,
        this.left *= t,
        this.right *= t,
        this.top *= n,
        this.bottom *= n,
        this
    }
    ,
    e.math.IRect = function() {}
    ,
    e.math.Rect = function(e, t, n, o) {
        this.left = e,
        this.top = t,
        this.width = n,
        this.height = o
    }
    ,
    e.math.Rect.prototype.clone = function() {
        return new e.math.Rect(this.left,this.top,this.width,this.height)
    }
    ,
    e.math.Rect.prototype.toBox = function() {
        return new e.math.Box(this.top,this.left + this.width,this.top + this.height,this.left)
    }
    ,
    e.math.Rect.createFromPositionAndSize = function(t, n) {
        return new e.math.Rect(t.x,t.y,n.width,n.height)
    }
    ,
    e.math.Rect.createFromBox = function(t) {
        return new e.math.Rect(t.left,t.top,t.right - t.left,t.bottom - t.top)
    }
    ,
    e.DEBUG && (e.math.Rect.prototype.toString = function() {
        return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
    }
    ),
    e.math.Rect.equals = function(e, t) {
        return e == t || !(!e || !t) && (e.left == t.left && e.width == t.width && e.top == t.top && e.height == t.height)
    }
    ,
    e.math.Rect.prototype.intersection = function(e) {
        var t = Math.max(this.left, e.left)
          , n = Math.min(this.left + this.width, e.left + e.width);
        if (t <= n) {
            var o = Math.max(this.top, e.top);
            if (o <= (e = Math.min(this.top + this.height, e.top + e.height)))
                return this.left = t,
                this.top = o,
                this.width = n - t,
                this.height = e - o,
                !0
        }
        return !1
    }
    ,
    e.math.Rect.intersection = function(t, n) {
        var o = Math.max(t.left, n.left)
          , r = Math.min(t.left + t.width, n.left + n.width);
        if (o <= r) {
            var i = Math.max(t.top, n.top);
            if (i <= (t = Math.min(t.top + t.height, n.top + n.height)))
                return new e.math.Rect(o,i,r - o,t - i)
        }
        return null
    }
    ,
    e.math.Rect.intersects = function(e, t) {
        return e.left <= t.left + t.width && t.left <= e.left + e.width && e.top <= t.top + t.height && t.top <= e.top + e.height
    }
    ,
    e.math.Rect.prototype.intersects = function(t) {
        return e.math.Rect.intersects(this, t)
    }
    ,
    e.math.Rect.difference = function(t, n) {
        var o = e.math.Rect.intersection(t, n);
        if (!o || !o.height || !o.width)
            return [t.clone()];
        o = [];
        var r = t.top
          , i = t.height
          , s = t.left + t.width
          , a = t.top + t.height
          , l = n.left + n.width
          , u = n.top + n.height;
        return n.top > t.top && (o.push(new e.math.Rect(t.left,t.top,t.width,n.top - t.top)),
        r = n.top,
        i -= n.top - t.top),
        u < a && (o.push(new e.math.Rect(t.left,u,t.width,a - u)),
        i = u - r),
        n.left > t.left && o.push(new e.math.Rect(t.left,r,n.left - t.left,i)),
        l < s && o.push(new e.math.Rect(l,r,s - l,i)),
        o
    }
    ,
    e.math.Rect.prototype.difference = function(t) {
        return e.math.Rect.difference(this, t)
    }
    ;
    e.math.Rect.prototype.boundingRect = function(e) {
        var t = Math.max(this.left + this.width, e.left + e.width)
          , n = Math.max(this.top + this.height, e.top + e.height);
        this.left = Math.min(this.left, e.left),
        this.top = Math.min(this.top, e.top),
        this.width = t - this.left,
        this.height = n - this.top
    }
    ,
    e.math.Rect.boundingRect = function(t, n) {
        return t && n ? ((t = new e.math.Rect(t.left,t.top,t.width,t.height)).boundingRect(n),
        t) : null
    }
    ,
    e.math.Rect.prototype.contains = function(t) {
        return t instanceof e.math.Coordinate ? t.x >= this.left && t.x <= this.left + this.width && t.y >= this.top && t.y <= this.top + this.height : this.left <= t.left && this.left + this.width >= t.left + t.width && this.top <= t.top && this.top + this.height >= t.top + t.height
    }
    ,
    e.math.Rect.prototype.squaredDistance = function(e) {
        var t = e.x < this.left ? this.left - e.x : Math.max(e.x - (this.left + this.width), 0);
        return t * t + (e = e.y < this.top ? this.top - e.y : Math.max(e.y - (this.top + this.height), 0)) * e
    }
    ,
    e.math.Rect.prototype.distance = function(e) {
        return Math.sqrt(this.squaredDistance(e))
    }
    ,
    e.math.Rect.prototype.getSize = function() {
        return new e.math.Size(this.width,this.height)
    }
    ,
    e.math.Rect.prototype.getTopLeft = function() {
        return new e.math.Coordinate(this.left,this.top)
    }
    ,
    e.math.Rect.prototype.getCenter = function() {
        return new e.math.Coordinate(this.left + this.width / 2,this.top + this.height / 2)
    }
    ,
    e.math.Rect.prototype.getBottomRight = function() {
        return new e.math.Coordinate(this.left + this.width,this.top + this.height)
    }
    ,
    e.math.Rect.prototype.ceil = function() {
        return this.left = Math.ceil(this.left),
        this.top = Math.ceil(this.top),
        this.width = Math.ceil(this.width),
        this.height = Math.ceil(this.height),
        this
    }
    ,
    e.math.Rect.prototype.floor = function() {
        return this.left = Math.floor(this.left),
        this.top = Math.floor(this.top),
        this.width = Math.floor(this.width),
        this.height = Math.floor(this.height),
        this
    }
    ,
    e.math.Rect.prototype.round = function() {
        return this.left = Math.round(this.left),
        this.top = Math.round(this.top),
        this.width = Math.round(this.width),
        this.height = Math.round(this.height),
        this
    }
    ,
    e.math.Rect.prototype.translate = function(t, n) {
        return t instanceof e.math.Coordinate ? (this.left += t.x,
        this.top += t.y) : (this.left += e.asserts.assertNumber(t),
        e.isNumber(n) && (this.top += n)),
        this
    }
    ,
    e.math.Rect.prototype.scale = function(t, n) {
        return n = e.isNumber(n) ? n : t,
        this.left *= t,
        this.width *= t,
        this.top *= n,
        this.height *= n,
        this
    }
    ,
    e.style = {},
    e.style.setStyle = function(t, n, o) {
        if (e.isString(n))
            e.style.setStyle_(t, o, n);
        else
            for (var r in n)
                e.style.setStyle_(t, n[r], r)
    }
    ,
    e.style.setStyle_ = function(t, n, o) {
        (o = e.style.getVendorJsStyleName_(t, o)) && (t.style[o] = n)
    }
    ,
    e.style.styleNameCache_ = {},
    e.style.getVendorJsStyleName_ = function(t, n) {
        var o = e.style.styleNameCache_[n];
        if (!o) {
            var r = e.string.toCamelCase(n);
            o = r,
            void 0 === t.style[r] && (r = e.dom.vendor.getVendorJsPrefix() + e.string.toTitleCase(r),
            void 0 !== t.style[r] && (o = r)),
            e.style.styleNameCache_[n] = o
        }
        return o
    }
    ,
    e.style.getVendorStyleName_ = function(t, n) {
        var o = e.string.toCamelCase(n);
        return void 0 === t.style[o] && (o = e.dom.vendor.getVendorJsPrefix() + e.string.toTitleCase(o),
        void 0 !== t.style[o]) ? e.dom.vendor.getVendorPrefix() + "-" + n : n
    }
    ,
    e.style.getStyle = function(t, n) {
        var o = t.style[e.string.toCamelCase(n)];
        return void 0 !== o ? o : t.style[e.style.getVendorJsStyleName_(t, n)] || ""
    }
    ,
    e.style.getComputedStyle = function(t, n) {
        var o = e.dom.getOwnerDocument(t);
        return o.defaultView && o.defaultView.getComputedStyle && (t = o.defaultView.getComputedStyle(t, null)) && (t[n] || t.getPropertyValue(n)) || ""
    }
    ,
    e.style.getCascadedStyle = function(e, t) {
        return e.currentStyle ? e.currentStyle[t] : null
    }
    ,
    e.style.getStyle_ = function(t, n) {
        return e.style.getComputedStyle(t, n) || e.style.getCascadedStyle(t, n) || t.style && t.style[n]
    }
    ,
    e.style.getComputedBoxSizing = function(t) {
        return e.style.getStyle_(t, "boxSizing") || e.style.getStyle_(t, "MozBoxSizing") || e.style.getStyle_(t, "WebkitBoxSizing") || null
    }
    ,
    e.style.getComputedPosition = function(t) {
        return e.style.getStyle_(t, "position")
    }
    ,
    e.style.getBackgroundColor = function(t) {
        return e.style.getStyle_(t, "backgroundColor")
    }
    ,
    e.style.getComputedOverflowX = function(t) {
        return e.style.getStyle_(t, "overflowX")
    }
    ,
    e.style.getComputedOverflowY = function(t) {
        return e.style.getStyle_(t, "overflowY")
    }
    ,
    e.style.getComputedZIndex = function(t) {
        return e.style.getStyle_(t, "zIndex")
    }
    ,
    e.style.getComputedTextAlign = function(t) {
        return e.style.getStyle_(t, "textAlign")
    }
    ,
    e.style.getComputedCursor = function(t) {
        return e.style.getStyle_(t, "cursor")
    }
    ,
    e.style.getComputedTransform = function(t) {
        var n = e.style.getVendorStyleName_(t, "transform");
        return e.style.getStyle_(t, n) || e.style.getStyle_(t, "transform")
    }
    ,
    e.style.setPosition = function(t, n, o) {
        if (n instanceof e.math.Coordinate) {
            var r = n.x;
            n = n.y
        } else
            r = n,
            n = o;
        t.style.left = e.style.getPixelStyleValue_(r, !1),
        t.style.top = e.style.getPixelStyleValue_(n, !1)
    }
    ,
    e.style.getPosition = function(t) {
        return new e.math.Coordinate(t.offsetLeft,t.offsetTop)
    }
    ,
    e.style.getClientViewportElement = function(t) {
        return t = t ? e.dom.getOwnerDocument(t) : e.dom.getDocument(),
        !e.userAgent.IE || e.userAgent.isDocumentModeOrHigher(9) || e.dom.getDomHelper(t).isCss1CompatMode() ? t.documentElement : t.body
    }
    ,
    e.style.getViewportPageOffset = function(t) {
        var n = t.body;
        return t = t.documentElement,
        new e.math.Coordinate(n.scrollLeft || t.scrollLeft,n.scrollTop || t.scrollTop)
    }
    ,
    e.style.getBoundingClientRect_ = function(t) {
        try {
            var n = t.getBoundingClientRect()
        } catch (e) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        return e.userAgent.IE && t.ownerDocument.body && (t = t.ownerDocument,
        n.left -= t.documentElement.clientLeft + t.body.clientLeft,
        n.top -= t.documentElement.clientTop + t.body.clientTop),
        n
    }
    ,
    e.style.getOffsetParent = function(t) {
        if (e.userAgent.IE && !e.userAgent.isDocumentModeOrHigher(8))
            return e.asserts.assert(t && "offsetParent"in t),
            t.offsetParent;
        var n = e.dom.getOwnerDocument(t)
          , o = e.style.getStyle_(t, "position")
          , r = "fixed" == o || "absolute" == o;
        for (t = t.parentNode; t && t != n; t = t.parentNode)
            if (t.nodeType == e.dom.NodeType.DOCUMENT_FRAGMENT && t.host && (t = t.host),
            o = e.style.getStyle_(t, "position"),
            !(r = r && "static" == o && t != n.documentElement && t != n.body) && (t.scrollWidth > t.clientWidth || t.scrollHeight > t.clientHeight || "fixed" == o || "absolute" == o || "relative" == o))
                return t;
        return null
    }
    ,
    e.style.getVisibleRectForElement = function(t) {
        for (var n = new e.math.Box(0,1 / 0,1 / 0,0), o = e.dom.getDomHelper(t), r = o.getDocument().body, i = o.getDocument().documentElement, s = o.getDocumentScrollElement(); t = e.style.getOffsetParent(t); )
            if (!(e.userAgent.IE && 0 == t.clientWidth || e.userAgent.WEBKIT && 0 == t.clientHeight && t == r) && t != r && t != i && "visible" != e.style.getStyle_(t, "overflow")) {
                var a = e.style.getPageOffset(t)
                  , l = e.style.getClientLeftTop(t);
                a.x += l.x,
                a.y += l.y,
                n.top = Math.max(n.top, a.y),
                n.right = Math.min(n.right, a.x + t.clientWidth),
                n.bottom = Math.min(n.bottom, a.y + t.clientHeight),
                n.left = Math.max(n.left, a.x)
            }
        return r = s.scrollLeft,
        s = s.scrollTop,
        n.left = Math.max(n.left, r),
        n.top = Math.max(n.top, s),
        o = o.getViewportSize(),
        n.right = Math.min(n.right, r + o.width),
        n.bottom = Math.min(n.bottom, s + o.height),
        0 <= n.top && 0 <= n.left && n.bottom > n.top && n.right > n.left ? n : null
    }
    ,
    e.style.getContainerOffsetToScrollInto = function(t, n, o) {
        var r = n || e.dom.getDocumentScrollElement()
          , i = e.style.getPageOffset(t)
          , s = e.style.getPageOffset(r)
          , a = e.style.getBorderBox(r);
        return r == e.dom.getDocumentScrollElement() ? (n = i.x - r.scrollLeft,
        i = i.y - r.scrollTop,
        e.userAgent.IE && !e.userAgent.isDocumentModeOrHigher(10) && (n += a.left,
        i += a.top)) : (n = i.x - s.x - a.left,
        i = i.y - s.y - a.top),
        a = e.style.getSizeWithDisplay_(t),
        t = r.clientWidth - a.width,
        a = r.clientHeight - a.height,
        s = r.scrollLeft,
        r = r.scrollTop,
        o ? (s += n - t / 2,
        r += i - a / 2) : (s += Math.min(n, Math.max(n - t, 0)),
        r += Math.min(i, Math.max(i - a, 0))),
        new e.math.Coordinate(s,r)
    }
    ,
    e.style.scrollIntoContainerView = function(t, n, o) {
        n = n || e.dom.getDocumentScrollElement(),
        t = e.style.getContainerOffsetToScrollInto(t, n, o),
        n.scrollLeft = t.x,
        n.scrollTop = t.y
    }
    ,
    e.style.getClientLeftTop = function(t) {
        return new e.math.Coordinate(t.clientLeft,t.clientTop)
    }
    ,
    e.style.getPageOffset = function(t) {
        var n = e.dom.getOwnerDocument(t);
        e.asserts.assertObject(t, "Parameter is required");
        var o = new e.math.Coordinate(0,0);
        return t == e.style.getClientViewportElement(n) ? o : (t = e.style.getBoundingClientRect_(t),
        n = e.dom.getDomHelper(n).getDocumentScroll(),
        o.x = t.left + n.x,
        o.y = t.top + n.y,
        o)
    }
    ,
    e.style.getPageOffsetLeft = function(t) {
        return e.style.getPageOffset(t).x
    }
    ,
    e.style.getPageOffsetTop = function(t) {
        return e.style.getPageOffset(t).y
    }
    ,
    e.style.getFramedPageOffset = function(t, n) {
        var o = new e.math.Coordinate(0,0)
          , r = e.dom.getWindow(e.dom.getOwnerDocument(t));
        if (!e.reflect.canAccessProperty(r, "parent"))
            return o;
        do {
            var i = r == n ? e.style.getPageOffset(t) : e.style.getClientPositionForElement_(e.asserts.assert(t));
            o.x += i.x,
            o.y += i.y
        } while (r && r != n && r != r.parent && (t = r.frameElement) && (r = r.parent));
        return o
    }
    ,
    e.style.translateRectForAnotherFrame = function(t, n, o) {
        if (n.getDocument() != o.getDocument()) {
            var r = n.getDocument().body;
            o = e.style.getFramedPageOffset(r, o.getWindow()),
            o = e.math.Coordinate.difference(o, e.style.getPageOffset(r)),
            !e.userAgent.IE || e.userAgent.isDocumentModeOrHigher(9) || n.isCss1CompatMode() || (o = e.math.Coordinate.difference(o, n.getDocumentScroll())),
            t.left += o.x,
            t.top += o.y
        }
    }
    ,
    e.style.getRelativePosition = function(t, n) {
        return t = e.style.getClientPosition(t),
        n = e.style.getClientPosition(n),
        new e.math.Coordinate(t.x - n.x,t.y - n.y)
    }
    ,
    e.style.getClientPositionForElement_ = function(t) {
        return t = e.style.getBoundingClientRect_(t),
        new e.math.Coordinate(t.left,t.top)
    }
    ,
    e.style.getClientPosition = function(t) {
        return e.asserts.assert(t),
        t.nodeType == e.dom.NodeType.ELEMENT ? e.style.getClientPositionForElement_(t) : (t = t.changedTouches ? t.changedTouches[0] : t,
        new e.math.Coordinate(t.clientX,t.clientY))
    }
    ,
    e.style.setPageOffset = function(t, n, o) {
        var r = e.style.getPageOffset(t);
        n instanceof e.math.Coordinate && (o = n.y,
        n = n.x),
        n = e.asserts.assertNumber(n) - r.x,
        e.style.setPosition(t, t.offsetLeft + n, t.offsetTop + (Number(o) - r.y))
    }
    ,
    e.style.setSize = function(t, n, o) {
        if (n instanceof e.math.Size)
            o = n.height,
            n = n.width;
        else if (null == o)
            throw Error("missing height argument");
        e.style.setWidth(t, n),
        e.style.setHeight(t, o)
    }
    ,
    e.style.getPixelStyleValue_ = function(e, t) {
        return "number" == typeof e && (e = (t ? Math.round(e) : e) + "px"),
        e
    }
    ,
    e.style.setHeight = function(t, n) {
        t.style.height = e.style.getPixelStyleValue_(n, !0)
    }
    ,
    e.style.setWidth = function(t, n) {
        t.style.width = e.style.getPixelStyleValue_(n, !0)
    }
    ,
    e.style.getSize = function(t) {
        return e.style.evaluateWithTemporaryDisplay_(e.style.getSizeWithDisplay_, t)
    }
    ,
    e.style.evaluateWithTemporaryDisplay_ = function(t, n) {
        if ("none" != e.style.getStyle_(n, "display"))
            return t(n);
        var o = n.style
          , r = o.display
          , i = o.visibility
          , s = o.position;
        return o.visibility = "hidden",
        o.position = "absolute",
        o.display = "inline",
        t = t(n),
        o.display = r,
        o.position = s,
        o.visibility = i,
        t
    }
    ,
    e.style.getSizeWithDisplay_ = function(t) {
        var n = t.offsetWidth
          , o = t.offsetHeight
          , r = e.userAgent.WEBKIT && !n && !o;
        return e.isDef(n) && !r || !t.getBoundingClientRect ? new e.math.Size(n,o) : (t = e.style.getBoundingClientRect_(t),
        new e.math.Size(t.right - t.left,t.bottom - t.top))
    }
    ,
    e.style.getTransformedSize = function(t) {
        return t.getBoundingClientRect ? (t = e.style.evaluateWithTemporaryDisplay_(e.style.getBoundingClientRect_, t),
        new e.math.Size(t.right - t.left,t.bottom - t.top)) : null
    }
    ,
    e.style.getBounds = function(t) {
        var n = e.style.getPageOffset(t);
        return t = e.style.getSize(t),
        new e.math.Rect(n.x,n.y,t.width,t.height)
    }
    ,
    e.style.toCamelCase = function(t) {
        return e.string.toCamelCase(String(t))
    }
    ,
    e.style.toSelectorCase = function(t) {
        return e.string.toSelectorCase(t)
    }
    ,
    e.style.getOpacity = function(t) {
        e.asserts.assert(t);
        var n = t.style;
        return t = "",
        "opacity"in n ? t = n.opacity : "MozOpacity"in n ? t = n.MozOpacity : "filter"in n && (n = n.filter.match(/alpha\(opacity=([\d.]+)\)/)) && (t = String(n[1] / 100)),
        "" == t ? t : Number(t)
    }
    ,
    e.style.setOpacity = function(t, n) {
        e.asserts.assert(t),
        "opacity"in (t = t.style) ? t.opacity = n : "MozOpacity"in t ? t.MozOpacity = n : "filter"in t && (t.filter = "" === n ? "" : "alpha(opacity=" + 100 * Number(n) + ")")
    }
    ,
    e.style.setTransparentBackgroundImage = function(t, n) {
        t = t.style,
        e.userAgent.IE && !e.userAgent.isVersionOrHigher("8") ? t.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + n + '", sizingMethod="crop")' : (t.backgroundImage = "url(" + n + ")",
        t.backgroundPosition = "top left",
        t.backgroundRepeat = "no-repeat")
    }
    ,
    e.style.clearTransparentBackgroundImage = function(e) {
        "filter"in (e = e.style) ? e.filter = "" : e.backgroundImage = "none"
    }
    ,
    e.style.showElement = function(t, n) {
        e.style.setElementShown(t, n)
    }
    ,
    e.style.setElementShown = function(e, t) {
        e.style.display = t ? "" : "none"
    }
    ,
    e.style.isElementShown = function(e) {
        return "none" != e.style.display
    }
    ,
    e.style.installSafeStyleSheet = function(t, n) {
        var o = (n = e.dom.getDomHelper(n)).getDocument();
        if (e.userAgent.IE && o.createStyleSheet)
            return n = o.createStyleSheet(),
            e.style.setSafeStyleSheet(n, t),
            n;
        if (!(o = n.getElementsByTagNameAndClass("HEAD")[0])) {
            var r = n.getElementsByTagNameAndClass("BODY")[0];
            o = n.createDom("HEAD"),
            r.parentNode.insertBefore(o, r)
        }
        return r = n.createDom("STYLE"),
        e.style.setSafeStyleSheet(r, t),
        n.appendChild(o, r),
        r
    }
    ,
    e.style.uninstallStyles = function(t) {
        e.dom.removeNode(t.ownerNode || t.owningElement || t)
    }
    ,
    e.style.setSafeStyleSheet = function(t, n) {
        n = e.html.SafeStyleSheet.unwrap(n),
        e.userAgent.IE && e.isDef(t.cssText) ? t.cssText = n : t.innerHTML = n
    }
    ,
    e.style.setPreWrap = function(t) {
        t = t.style,
        e.userAgent.IE && !e.userAgent.isVersionOrHigher("8") ? (t.whiteSpace = "pre",
        t.wordWrap = "break-word") : t.whiteSpace = e.userAgent.GECKO ? "-moz-pre-wrap" : "pre-wrap"
    }
    ,
    e.style.setInlineBlock = function(t) {
        (t = t.style).position = "relative",
        e.userAgent.IE && !e.userAgent.isVersionOrHigher("8") ? (t.zoom = "1",
        t.display = "inline") : t.display = "inline-block"
    }
    ,
    e.style.isRightToLeft = function(t) {
        return "rtl" == e.style.getStyle_(t, "direction")
    }
    ,
    e.style.unselectableStyle_ = e.userAgent.GECKO ? "MozUserSelect" : e.userAgent.WEBKIT || e.userAgent.EDGE ? "WebkitUserSelect" : null,
    e.style.isUnselectable = function(t) {
        return e.style.unselectableStyle_ ? "none" == t.style[e.style.unselectableStyle_].toLowerCase() : !(!e.userAgent.IE && !e.userAgent.OPERA) && "on" == t.getAttribute("unselectable")
    }
    ,
    e.style.setUnselectable = function(t, n, o) {
        o = o ? null : t.getElementsByTagName("*");
        var r = e.style.unselectableStyle_;
        if (r) {
            if (n = n ? "none" : "",
            t.style && (t.style[r] = n),
            o) {
                t = 0;
                for (var i; i = o[t]; t++)
                    i.style && (i.style[r] = n)
            }
        } else if ((e.userAgent.IE || e.userAgent.OPERA) && (n = n ? "on" : "",
        t.setAttribute("unselectable", n),
        o))
            for (t = 0; i = o[t]; t++)
                i.setAttribute("unselectable", n)
    }
    ,
    e.style.getBorderBoxSize = function(t) {
        return new e.math.Size(t.offsetWidth,t.offsetHeight)
    }
    ,
    e.style.setBorderBoxSize = function(t, n) {
        var o = e.dom.getOwnerDocument(t)
          , r = e.dom.getDomHelper(o).isCss1CompatMode();
        !e.userAgent.IE || e.userAgent.isVersionOrHigher("10") || r && e.userAgent.isVersionOrHigher("8") ? e.style.setBoxSizingSize_(t, n, "border-box") : (o = t.style,
        r ? (r = e.style.getPaddingBox(t),
        t = e.style.getBorderBox(t),
        o.pixelWidth = n.width - t.left - r.left - r.right - t.right,
        o.pixelHeight = n.height - t.top - r.top - r.bottom - t.bottom) : (o.pixelWidth = n.width,
        o.pixelHeight = n.height))
    }
    ,
    e.style.getContentBoxSize = function(t) {
        var n = e.dom.getOwnerDocument(t)
          , o = e.userAgent.IE && t.currentStyle;
        return o && e.dom.getDomHelper(n).isCss1CompatMode() && "auto" != o.width && "auto" != o.height && !o.boxSizing ? (n = e.style.getIePixelValue_(t, o.width, "width", "pixelWidth"),
        t = e.style.getIePixelValue_(t, o.height, "height", "pixelHeight"),
        new e.math.Size(n,t)) : (o = e.style.getBorderBoxSize(t),
        n = e.style.getPaddingBox(t),
        t = e.style.getBorderBox(t),
        new e.math.Size(o.width - t.left - n.left - n.right - t.right,o.height - t.top - n.top - n.bottom - t.bottom))
    }
    ,
    e.style.setContentBoxSize = function(t, n) {
        var o = e.dom.getOwnerDocument(t)
          , r = e.dom.getDomHelper(o).isCss1CompatMode();
        !e.userAgent.IE || e.userAgent.isVersionOrHigher("10") || r && e.userAgent.isVersionOrHigher("8") ? e.style.setBoxSizingSize_(t, n, "content-box") : (o = t.style,
        r ? (o.pixelWidth = n.width,
        o.pixelHeight = n.height) : (r = e.style.getPaddingBox(t),
        t = e.style.getBorderBox(t),
        o.pixelWidth = n.width + t.left + r.left + r.right + t.right,
        o.pixelHeight = n.height + t.top + r.top + r.bottom + t.bottom))
    }
    ,
    e.style.setBoxSizingSize_ = function(t, n, o) {
        t = t.style,
        e.userAgent.GECKO ? t.MozBoxSizing = o : e.userAgent.WEBKIT ? t.WebkitBoxSizing = o : t.boxSizing = o,
        t.width = Math.max(n.width, 0) + "px",
        t.height = Math.max(n.height, 0) + "px"
    }
    ,
    e.style.getIePixelValue_ = function(e, t, n, o) {
        if (/^\d+px?$/.test(t))
            return parseInt(t, 10);
        var r = e.style[n]
          , i = e.runtimeStyle[n];
        return e.runtimeStyle[n] = e.currentStyle[n],
        e.style[n] = t,
        t = e.style[o],
        e.style[n] = r,
        e.runtimeStyle[n] = i,
        +t
    }
    ,
    e.style.getIePixelDistance_ = function(t, n) {
        return (n = e.style.getCascadedStyle(t, n)) ? e.style.getIePixelValue_(t, n, "left", "pixelLeft") : 0
    }
    ,
    e.style.getBox_ = function(t, n) {
        if (e.userAgent.IE) {
            var o = e.style.getIePixelDistance_(t, n + "Left")
              , r = e.style.getIePixelDistance_(t, n + "Right")
              , i = e.style.getIePixelDistance_(t, n + "Top");
            return t = e.style.getIePixelDistance_(t, n + "Bottom"),
            new e.math.Box(i,r,t,o)
        }
        return o = e.style.getComputedStyle(t, n + "Left"),
        r = e.style.getComputedStyle(t, n + "Right"),
        i = e.style.getComputedStyle(t, n + "Top"),
        t = e.style.getComputedStyle(t, n + "Bottom"),
        new e.math.Box(parseFloat(i),parseFloat(r),parseFloat(t),parseFloat(o))
    }
    ,
    e.style.getPaddingBox = function(t) {
        return e.style.getBox_(t, "padding")
    }
    ,
    e.style.getMarginBox = function(t) {
        return e.style.getBox_(t, "margin")
    }
    ,
    e.style.ieBorderWidthKeywords_ = {
        thin: 2,
        medium: 4,
        thick: 6
    },
    e.style.getIePixelBorder_ = function(t, n) {
        return "none" == e.style.getCascadedStyle(t, n + "Style") ? 0 : (n = e.style.getCascadedStyle(t, n + "Width"))in e.style.ieBorderWidthKeywords_ ? e.style.ieBorderWidthKeywords_[n] : e.style.getIePixelValue_(t, n, "left", "pixelLeft")
    }
    ,
    e.style.getBorderBox = function(t) {
        if (e.userAgent.IE && !e.userAgent.isDocumentModeOrHigher(9)) {
            var n = e.style.getIePixelBorder_(t, "borderLeft")
              , o = e.style.getIePixelBorder_(t, "borderRight")
              , r = e.style.getIePixelBorder_(t, "borderTop");
            return t = e.style.getIePixelBorder_(t, "borderBottom"),
            new e.math.Box(r,o,t,n)
        }
        return n = e.style.getComputedStyle(t, "borderLeftWidth"),
        o = e.style.getComputedStyle(t, "borderRightWidth"),
        r = e.style.getComputedStyle(t, "borderTopWidth"),
        t = e.style.getComputedStyle(t, "borderBottomWidth"),
        new e.math.Box(parseFloat(r),parseFloat(o),parseFloat(t),parseFloat(n))
    }
    ,
    e.style.getFontFamily = function(t) {
        var n = e.dom.getOwnerDocument(t)
          , o = "";
        if (n.body.createTextRange && e.dom.contains(n, t)) {
            (n = n.body.createTextRange()).moveToElementText(t);
            try {
                o = n.queryCommandValue("FontName")
            } catch (e) {
                o = ""
            }
        }
        return o || (o = e.style.getStyle_(t, "fontFamily")),
        1 < (t = o.split(",")).length && (o = t[0]),
        e.string.stripQuotes(o, "\"'")
    }
    ,
    e.style.lengthUnitRegex_ = /[^\d]+$/,
    e.style.getLengthUnits = function(t) {
        return (t = t.match(e.style.lengthUnitRegex_)) && t[0] || null
    }
    ,
    e.style.ABSOLUTE_CSS_LENGTH_UNITS_ = {
        cm: 1,
        in: 1,
        mm: 1,
        pc: 1,
        pt: 1
    },
    e.style.CONVERTIBLE_RELATIVE_CSS_UNITS_ = {
        em: 1,
        ex: 1
    },
    e.style.getFontSize = function(t) {
        var n = e.style.getStyle_(t, "fontSize")
          , o = e.style.getLengthUnits(n);
        if (n && "px" == o)
            return parseInt(n, 10);
        if (e.userAgent.IE) {
            if (String(o)in e.style.ABSOLUTE_CSS_LENGTH_UNITS_)
                return e.style.getIePixelValue_(t, n, "left", "pixelLeft");
            if (t.parentNode && t.parentNode.nodeType == e.dom.NodeType.ELEMENT && String(o)in e.style.CONVERTIBLE_RELATIVE_CSS_UNITS_)
                return t = t.parentNode,
                o = e.style.getStyle_(t, "fontSize"),
                e.style.getIePixelValue_(t, n == o ? "1em" : n, "left", "pixelLeft")
        }
        return o = e.dom.createDom("SPAN", {
            style: "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"
        }),
        e.dom.appendChild(t, o),
        n = o.offsetHeight,
        e.dom.removeNode(o),
        n
    }
    ,
    e.style.parseStyleAttribute = function(t) {
        var n = {};
        return e.array.forEach(t.split(/\s*;\s*/), function(t) {
            var o = t.match(/\s*([\w-]+)\s*:(.+)/);
            o && (t = o[1],
            o = e.string.trim(o[2]),
            n[e.string.toCamelCase(t.toLowerCase())] = o)
        }),
        n
    }
    ,
    e.style.toStyleAttribute = function(t) {
        var n = [];
        return e.object.forEach(t, function(t, o) {
            n.push(e.string.toSelectorCase(o), ":", t, ";")
        }),
        n.join("")
    }
    ,
    e.style.setFloat = function(t, n) {
        t.style[e.userAgent.IE ? "styleFloat" : "cssFloat"] = n
    }
    ,
    e.style.getFloat = function(t) {
        return t.style[e.userAgent.IE ? "styleFloat" : "cssFloat"] || ""
    }
    ,
    e.style.getScrollbarWidth = function(t) {
        var n = e.dom.createElement("DIV");
        return t && (n.className = t),
        n.style.cssText = "overflow:auto;position:absolute;top:0;width:100px;height:100px",
        t = e.dom.createElement("DIV"),
        e.style.setSize(t, "200px", "200px"),
        n.appendChild(t),
        e.dom.appendChild(e.dom.getDocument().body, n),
        t = n.offsetWidth - n.clientWidth,
        e.dom.removeNode(n),
        t
    }
    ,
    e.style.MATRIX_TRANSLATION_REGEX_ = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/,
    e.style.getCssTranslation = function(t) {
        return (t = e.style.getComputedTransform(t)) && (t = t.match(e.style.MATRIX_TRANSLATION_REGEX_)) ? new e.math.Coordinate(parseFloat(t[1]),parseFloat(t[2])) : new e.math.Coordinate(0,0)
    }
    ,
    e.events.EventHandler = function(t) {
        e.Disposable.call(this),
        this.handler_ = t,
        this.keys_ = {}
    }
    ,
    e.inherits(e.events.EventHandler, e.Disposable),
    e.events.EventHandler.typeArray_ = [],
    e.events.EventHandler.prototype.listen = function(e, t, n, o) {
        return this.listen_(e, t, n, o)
    }
    ,
    e.events.EventHandler.prototype.listenWithScope = function(e, t, n, o, r) {
        return this.listen_(e, t, n, o, r)
    }
    ,
    e.events.EventHandler.prototype.listen_ = function(t, n, o, r, i) {
        e.isArray(n) || (n && (e.events.EventHandler.typeArray_[0] = n.toString()),
        n = e.events.EventHandler.typeArray_);
        for (var s = 0; s < n.length; s++) {
            var a = e.events.listen(t, n[s], o || this.handleEvent, r || !1, i || this.handler_ || this);
            if (!a)
                break;
            this.keys_[a.key] = a
        }
        return this
    }
    ,
    e.events.EventHandler.prototype.listenOnce = function(e, t, n, o) {
        return this.listenOnce_(e, t, n, o)
    }
    ,
    e.events.EventHandler.prototype.listenOnceWithScope = function(e, t, n, o, r) {
        return this.listenOnce_(e, t, n, o, r)
    }
    ,
    e.events.EventHandler.prototype.listenOnce_ = function(t, n, o, r, i) {
        if (e.isArray(n))
            for (var s = 0; s < n.length; s++)
                this.listenOnce_(t, n[s], o, r, i);
        else {
            if (!(t = e.events.listenOnce(t, n, o || this.handleEvent, r, i || this.handler_ || this)))
                return this;
            this.keys_[t.key] = t
        }
        return this
    }
    ,
    e.events.EventHandler.prototype.listenWithWrapper = function(e, t, n, o) {
        return this.listenWithWrapper_(e, t, n, o)
    }
    ,
    e.events.EventHandler.prototype.listenWithWrapperAndScope = function(e, t, n, o, r) {
        return this.listenWithWrapper_(e, t, n, o, r)
    }
    ,
    e.events.EventHandler.prototype.listenWithWrapper_ = function(e, t, n, o, r) {
        return t.listen(e, n, o, r || this.handler_ || this, this),
        this
    }
    ,
    e.events.EventHandler.prototype.getListenerCount = function() {
        var e, t = 0;
        for (e in this.keys_)
            Object.prototype.hasOwnProperty.call(this.keys_, e) && t++;
        return t
    }
    ,
    e.events.EventHandler.prototype.unlisten = function(t, n, o, r, i) {
        if (e.isArray(n))
            for (var s = 0; s < n.length; s++)
                this.unlisten(t, n[s], o, r, i);
        else
            r = e.isObject(r) ? !!r.capture : !!r,
            (t = e.events.getListener(t, n, o || this.handleEvent, r, i || this.handler_ || this)) && (e.events.unlistenByKey(t),
            delete this.keys_[t.key]);
        return this
    }
    ,
    e.events.EventHandler.prototype.unlistenWithWrapper = function(e, t, n, o, r) {
        return t.unlisten(e, n, o, r || this.handler_ || this, this),
        this
    }
    ,
    e.events.EventHandler.prototype.removeAll = function() {
        e.object.forEach(this.keys_, function(t, n) {
            this.keys_.hasOwnProperty(n) && e.events.unlistenByKey(t)
        }, this),
        this.keys_ = {}
    }
    ,
    e.events.EventHandler.prototype.disposeInternal = function() {
        e.events.EventHandler.superClass_.disposeInternal.call(this),
        this.removeAll()
    }
    ,
    e.events.EventHandler.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented")
    }
    ,
    e.ui = {},
    e.ui.IdGenerator = function() {}
    ,
    e.addSingletonGetter(e.ui.IdGenerator),
    e.ui.IdGenerator.prototype.nextId_ = 0,
    e.ui.IdGenerator.prototype.idPrefix_ = "",
    e.ui.IdGenerator.prototype.setIdPrefix = function(e) {
        this.idPrefix_ = e
    }
    ,
    e.ui.IdGenerator.prototype.getNextUniqueId = function() {
        return this.idPrefix_ + ":" + (this.nextId_++).toString(36)
    }
    ,
    e.ui.Component = function(t) {
        e.events.EventTarget.call(this),
        this.dom_ = t || e.dom.getDomHelper(),
        this.rightToLeft_ = e.ui.Component.defaultRightToLeft_,
        this.id_ = null,
        this.inDocument_ = !1,
        this.element_ = null,
        this.googUiComponentHandler_ = void 0,
        this.childIndex_ = this.children_ = this.parent_ = this.model_ = null,
        this.pointerEventsEnabled_ = this.wasDecorated_ = !1
    }
    ,
    e.inherits(e.ui.Component, e.events.EventTarget),
    e.ui.Component.ALLOW_DETACHED_DECORATION = !1,
    e.ui.Component.prototype.idGenerator_ = e.ui.IdGenerator.getInstance(),
    e.ui.Component.DEFAULT_BIDI_DIR = 0,
    e.ui.Component.defaultRightToLeft_ = 1 != e.ui.Component.DEFAULT_BIDI_DIR && (-1 == e.ui.Component.DEFAULT_BIDI_DIR || null),
    e.ui.Component.EventType = {
        BEFORE_SHOW: "beforeshow",
        SHOW: "show",
        HIDE: "hide",
        DISABLE: "disable",
        ENABLE: "enable",
        HIGHLIGHT: "highlight",
        UNHIGHLIGHT: "unhighlight",
        ACTIVATE: "activate",
        DEACTIVATE: "deactivate",
        SELECT: "select",
        UNSELECT: "unselect",
        CHECK: "check",
        UNCHECK: "uncheck",
        FOCUS: "focus",
        BLUR: "blur",
        OPEN: "open",
        CLOSE: "close",
        ENTER: "enter",
        LEAVE: "leave",
        ACTION: "action",
        CHANGE: "change"
    },
    e.ui.Component.Error = {
        NOT_SUPPORTED: "Method not supported",
        DECORATE_INVALID: "Invalid element to decorate",
        ALREADY_RENDERED: "Component already rendered",
        PARENT_UNABLE_TO_BE_SET: "Unable to set parent component",
        CHILD_INDEX_OUT_OF_BOUNDS: "Child component index out of bounds",
        NOT_OUR_CHILD: "Child is not in parent component",
        NOT_IN_DOCUMENT: "Operation not supported while component is not in document",
        STATE_INVALID: "Invalid component state"
    },
    e.ui.Component.State = {
        ALL: 255,
        DISABLED: 1,
        HOVER: 2,
        ACTIVE: 4,
        SELECTED: 8,
        CHECKED: 16,
        FOCUSED: 32,
        OPENED: 64
    },
    e.ui.Component.getStateTransitionEvent = function(t, n) {
        switch (t) {
        case e.ui.Component.State.DISABLED:
            return n ? e.ui.Component.EventType.DISABLE : e.ui.Component.EventType.ENABLE;
        case e.ui.Component.State.HOVER:
            return n ? e.ui.Component.EventType.HIGHLIGHT : e.ui.Component.EventType.UNHIGHLIGHT;
        case e.ui.Component.State.ACTIVE:
            return n ? e.ui.Component.EventType.ACTIVATE : e.ui.Component.EventType.DEACTIVATE;
        case e.ui.Component.State.SELECTED:
            return n ? e.ui.Component.EventType.SELECT : e.ui.Component.EventType.UNSELECT;
        case e.ui.Component.State.CHECKED:
            return n ? e.ui.Component.EventType.CHECK : e.ui.Component.EventType.UNCHECK;
        case e.ui.Component.State.FOCUSED:
            return n ? e.ui.Component.EventType.FOCUS : e.ui.Component.EventType.BLUR;
        case e.ui.Component.State.OPENED:
            return n ? e.ui.Component.EventType.OPEN : e.ui.Component.EventType.CLOSE
        }
        throw Error(e.ui.Component.Error.STATE_INVALID)
    }
    ,
    e.ui.Component.setDefaultRightToLeft = function(t) {
        e.ui.Component.defaultRightToLeft_ = t
    }
    ,
    e.ui.Component.prototype.getId = function() {
        return this.id_ || (this.id_ = this.idGenerator_.getNextUniqueId())
    }
    ,
    e.ui.Component.prototype.setId = function(t) {
        this.parent_ && this.parent_.childIndex_ && (e.object.remove(this.parent_.childIndex_, this.id_),
        e.object.add(this.parent_.childIndex_, t, this)),
        this.id_ = t
    }
    ,
    e.ui.Component.prototype.getElement = function() {
        return this.element_
    }
    ,
    e.ui.Component.prototype.getElementStrict = function() {
        var t = this.element_;
        return e.asserts.assert(t, "Can not call getElementStrict before rendering/decorating."),
        t
    }
    ,
    e.ui.Component.prototype.setElementInternal = function(e) {
        this.element_ = e
    }
    ,
    e.ui.Component.prototype.getElementsByClass = function(e) {
        return this.element_ ? this.dom_.getElementsByClass(e, this.element_) : []
    }
    ,
    e.ui.Component.prototype.getElementByClass = function(e) {
        return this.element_ ? this.dom_.getElementByClass(e, this.element_) : null
    }
    ,
    e.ui.Component.prototype.getRequiredElementByClass = function(t) {
        var n = this.getElementByClass(t);
        return e.asserts.assert(n, "Expected element in component with class: %s", t),
        n
    }
    ,
    e.ui.Component.prototype.getHandler = function() {
        return this.googUiComponentHandler_ || (this.googUiComponentHandler_ = new e.events.EventHandler(this)),
        e.asserts.assert(this.googUiComponentHandler_)
    }
    ,
    e.ui.Component.prototype.setParent = function(t) {
        if (this == t)
            throw Error(e.ui.Component.Error.PARENT_UNABLE_TO_BE_SET);
        if (t && this.parent_ && this.id_ && this.parent_.getChild(this.id_) && this.parent_ != t)
            throw Error(e.ui.Component.Error.PARENT_UNABLE_TO_BE_SET);
        this.parent_ = t,
        e.ui.Component.superClass_.setParentEventTarget.call(this, t)
    }
    ,
    e.ui.Component.prototype.getParent = function() {
        return this.parent_
    }
    ,
    e.ui.Component.prototype.setParentEventTarget = function(t) {
        if (this.parent_ && this.parent_ != t)
            throw Error(e.ui.Component.Error.NOT_SUPPORTED);
        e.ui.Component.superClass_.setParentEventTarget.call(this, t)
    }
    ,
    e.ui.Component.prototype.getDomHelper = function() {
        return this.dom_
    }
    ,
    e.ui.Component.prototype.isInDocument = function() {
        return this.inDocument_
    }
    ,
    e.ui.Component.prototype.createDom = function() {
        this.element_ = this.dom_.createElement("DIV")
    }
    ,
    e.ui.Component.prototype.render = function(e) {
        this.render_(e)
    }
    ,
    e.ui.Component.prototype.renderBefore = function(e) {
        this.render_(e.parentNode, e)
    }
    ,
    e.ui.Component.prototype.render_ = function(t, n) {
        if (this.inDocument_)
            throw Error(e.ui.Component.Error.ALREADY_RENDERED);
        this.element_ || this.createDom(),
        t ? t.insertBefore(this.element_, n || null) : this.dom_.getDocument().body.appendChild(this.element_),
        this.parent_ && !this.parent_.isInDocument() || this.enterDocument()
    }
    ,
    e.ui.Component.prototype.decorate = function(t) {
        if (this.inDocument_)
            throw Error(e.ui.Component.Error.ALREADY_RENDERED);
        if (!t || !this.canDecorate(t))
            throw Error(e.ui.Component.Error.DECORATE_INVALID);
        this.wasDecorated_ = !0;
        var n = e.dom.getOwnerDocument(t);
        this.dom_ && this.dom_.getDocument() == n || (this.dom_ = e.dom.getDomHelper(t)),
        this.decorateInternal(t),
        e.ui.Component.ALLOW_DETACHED_DECORATION && !e.dom.contains(n, t) || this.enterDocument()
    }
    ,
    e.ui.Component.prototype.canDecorate = function() {
        return !0
    }
    ,
    e.ui.Component.prototype.wasDecorated = function() {
        return this.wasDecorated_
    }
    ,
    e.ui.Component.prototype.decorateInternal = function(e) {
        this.element_ = e
    }
    ,
    e.ui.Component.prototype.enterDocument = function() {
        this.inDocument_ = !0,
        this.forEachChild(function(e) {
            !e.isInDocument() && e.getElement() && e.enterDocument()
        })
    }
    ,
    e.ui.Component.prototype.exitDocument = function() {
        this.forEachChild(function(e) {
            e.isInDocument() && e.exitDocument()
        }),
        this.googUiComponentHandler_ && this.googUiComponentHandler_.removeAll(),
        this.inDocument_ = !1
    }
    ,
    e.ui.Component.prototype.disposeInternal = function() {
        this.inDocument_ && this.exitDocument(),
        this.googUiComponentHandler_ && (this.googUiComponentHandler_.dispose(),
        delete this.googUiComponentHandler_),
        this.forEachChild(function(e) {
            e.dispose()
        }),
        !this.wasDecorated_ && this.element_ && e.dom.removeNode(this.element_),
        this.parent_ = this.model_ = this.element_ = this.childIndex_ = this.children_ = null,
        e.ui.Component.superClass_.disposeInternal.call(this)
    }
    ,
    e.ui.Component.prototype.makeId = function(e) {
        return this.getId() + "." + e
    }
    ,
    e.ui.Component.prototype.makeIds = function(e) {
        var t, n = {};
        for (t in e)
            n[t] = this.makeId(e[t]);
        return n
    }
    ,
    e.ui.Component.prototype.getModel = function() {
        return this.model_
    }
    ,
    e.ui.Component.prototype.setModel = function(e) {
        this.model_ = e
    }
    ,
    e.ui.Component.prototype.getFragmentFromId = function(e) {
        return e.substring(this.getId().length + 1)
    }
    ,
    e.ui.Component.prototype.getElementByFragment = function(t) {
        if (!this.inDocument_)
            throw Error(e.ui.Component.Error.NOT_IN_DOCUMENT);
        return this.dom_.getElement(this.makeId(t))
    }
    ,
    e.ui.Component.prototype.addChild = function(e, t) {
        this.addChildAt(e, this.getChildCount(), t)
    }
    ,
    e.ui.Component.prototype.addChildAt = function(t, n, o) {
        if (e.asserts.assert(!!t, "Provided element must not be null."),
        t.inDocument_ && (o || !this.inDocument_))
            throw Error(e.ui.Component.Error.ALREADY_RENDERED);
        if (0 > n || n > this.getChildCount())
            throw Error(e.ui.Component.Error.CHILD_INDEX_OUT_OF_BOUNDS);
        this.childIndex_ && this.children_ || (this.childIndex_ = {},
        this.children_ = []),
        t.getParent() == this ? (e.object.set(this.childIndex_, t.getId(), t),
        e.array.remove(this.children_, t)) : e.object.add(this.childIndex_, t.getId(), t),
        t.setParent(this),
        e.array.insertAt(this.children_, t, n),
        t.inDocument_ && this.inDocument_ && t.getParent() == this ? (n = (o = this.getContentElement()).childNodes[n] || null) != t.getElement() && o.insertBefore(t.getElement(), n) : o ? (this.element_ || this.createDom(),
        n = this.getChildAt(n + 1),
        t.render_(this.getContentElement(), n ? n.element_ : null)) : this.inDocument_ && !t.inDocument_ && t.element_ && t.element_.parentNode && t.element_.parentNode.nodeType == e.dom.NodeType.ELEMENT && t.enterDocument()
    }
    ,
    e.ui.Component.prototype.getContentElement = function() {
        return this.element_
    }
    ,
    e.ui.Component.prototype.isRightToLeft = function() {
        return null == this.rightToLeft_ && (this.rightToLeft_ = e.style.isRightToLeft(this.inDocument_ ? this.element_ : this.dom_.getDocument().body)),
        this.rightToLeft_
    }
    ,
    e.ui.Component.prototype.setRightToLeft = function(t) {
        if (this.inDocument_)
            throw Error(e.ui.Component.Error.ALREADY_RENDERED);
        this.rightToLeft_ = t
    }
    ,
    e.ui.Component.prototype.hasChildren = function() {
        return !!this.children_ && 0 != this.children_.length
    }
    ,
    e.ui.Component.prototype.getChildCount = function() {
        return this.children_ ? this.children_.length : 0
    }
    ,
    e.ui.Component.prototype.getChildIds = function() {
        var e = [];
        return this.forEachChild(function(t) {
            e.push(t.getId())
        }),
        e
    }
    ,
    e.ui.Component.prototype.getChild = function(t) {
        return this.childIndex_ && t && e.object.get(this.childIndex_, t) || null
    }
    ,
    e.ui.Component.prototype.getChildAt = function(e) {
        return this.children_ && this.children_[e] || null
    }
    ,
    e.ui.Component.prototype.forEachChild = function(t, n) {
        this.children_ && e.array.forEach(this.children_, t, n)
    }
    ,
    e.ui.Component.prototype.indexOfChild = function(t) {
        return this.children_ && t ? e.array.indexOf(this.children_, t) : -1
    }
    ,
    e.ui.Component.prototype.removeChild = function(t, n) {
        if (t) {
            var o = e.isString(t) ? t : t.getId();
            t = this.getChild(o),
            o && t && (e.object.remove(this.childIndex_, o),
            e.array.remove(this.children_, t),
            n && (t.exitDocument(),
            t.element_ && e.dom.removeNode(t.element_)),
            t.setParent(null))
        }
        if (!t)
            throw Error(e.ui.Component.Error.NOT_OUR_CHILD);
        return t
    }
    ,
    e.ui.Component.prototype.removeChildAt = function(e, t) {
        return this.removeChild(this.getChildAt(e), t)
    }
    ,
    e.ui.Component.prototype.removeChildren = function(e) {
        for (var t = []; this.hasChildren(); )
            t.push(this.removeChildAt(0, e));
        return t
    }
    ,
    e.ui.Component.prototype.pointerEventsEnabled = function() {
        return this.pointerEventsEnabled_
    }
    ,
    e.ui.Component.prototype.setPointerEventsEnabled = function(t) {
        if (this.inDocument_)
            throw Error(e.ui.Component.Error.ALREADY_RENDERED);
        this.pointerEventsEnabled_ = t
    }
    ,
    e.a11y = {},
    e.a11y.aria = {},
    e.a11y.aria.Role = {
        ALERT: "alert",
        ALERTDIALOG: "alertdialog",
        APPLICATION: "application",
        ARTICLE: "article",
        BANNER: "banner",
        BUTTON: "button",
        CHECKBOX: "checkbox",
        COLUMNHEADER: "columnheader",
        COMBOBOX: "combobox",
        COMPLEMENTARY: "complementary",
        CONTENTINFO: "contentinfo",
        DEFINITION: "definition",
        DIALOG: "dialog",
        DIRECTORY: "directory",
        DOCUMENT: "document",
        FORM: "form",
        GRID: "grid",
        GRIDCELL: "gridcell",
        GROUP: "group",
        HEADING: "heading",
        IMG: "img",
        LINK: "link",
        LIST: "list",
        LISTBOX: "listbox",
        LISTITEM: "listitem",
        LOG: "log",
        MAIN: "main",
        MARQUEE: "marquee",
        MATH: "math",
        MENU: "menu",
        MENUBAR: "menubar",
        MENU_ITEM: "menuitem",
        MENU_ITEM_CHECKBOX: "menuitemcheckbox",
        MENU_ITEM_RADIO: "menuitemradio",
        NAVIGATION: "navigation",
        NOTE: "note",
        OPTION: "option",
        PRESENTATION: "presentation",
        PROGRESSBAR: "progressbar",
        RADIO: "radio",
        RADIOGROUP: "radiogroup",
        REGION: "region",
        ROW: "row",
        ROWGROUP: "rowgroup",
        ROWHEADER: "rowheader",
        SCROLLBAR: "scrollbar",
        SEARCH: "search",
        SEPARATOR: "separator",
        SLIDER: "slider",
        SPINBUTTON: "spinbutton",
        STATUS: "status",
        TAB: "tab",
        TAB_LIST: "tablist",
        TAB_PANEL: "tabpanel",
        TEXTBOX: "textbox",
        TEXTINFO: "textinfo",
        TIMER: "timer",
        TOOLBAR: "toolbar",
        TOOLTIP: "tooltip",
        TREE: "tree",
        TREEGRID: "treegrid",
        TREEITEM: "treeitem"
    },
    e.a11y.aria.State = {
        ACTIVEDESCENDANT: "activedescendant",
        ATOMIC: "atomic",
        AUTOCOMPLETE: "autocomplete",
        BUSY: "busy",
        CHECKED: "checked",
        COLINDEX: "colindex",
        CONTROLS: "controls",
        DESCRIBEDBY: "describedby",
        DISABLED: "disabled",
        DROPEFFECT: "dropeffect",
        EXPANDED: "expanded",
        FLOWTO: "flowto",
        GRABBED: "grabbed",
        HASPOPUP: "haspopup",
        HIDDEN: "hidden",
        INVALID: "invalid",
        LABEL: "label",
        LABELLEDBY: "labelledby",
        LEVEL: "level",
        LIVE: "live",
        MULTILINE: "multiline",
        MULTISELECTABLE: "multiselectable",
        ORIENTATION: "orientation",
        OWNS: "owns",
        POSINSET: "posinset",
        PRESSED: "pressed",
        READONLY: "readonly",
        RELEVANT: "relevant",
        REQUIRED: "required",
        ROWINDEX: "rowindex",
        SELECTED: "selected",
        SETSIZE: "setsize",
        SORT: "sort",
        VALUEMAX: "valuemax",
        VALUEMIN: "valuemin",
        VALUENOW: "valuenow",
        VALUETEXT: "valuetext"
    },
    e.a11y.aria.AutoCompleteValues = {
        INLINE: "inline",
        LIST: "list",
        BOTH: "both",
        NONE: "none"
    },
    e.a11y.aria.DropEffectValues = {
        COPY: "copy",
        MOVE: "move",
        LINK: "link",
        EXECUTE: "execute",
        POPUP: "popup",
        NONE: "none"
    },
    e.a11y.aria.LivePriority = {
        OFF: "off",
        POLITE: "polite",
        ASSERTIVE: "assertive"
    },
    e.a11y.aria.OrientationValues = {
        VERTICAL: "vertical",
        HORIZONTAL: "horizontal"
    },
    e.a11y.aria.RelevantValues = {
        ADDITIONS: "additions",
        REMOVALS: "removals",
        TEXT: "text",
        ALL: "all"
    },
    e.a11y.aria.SortValues = {
        ASCENDING: "ascending",
        DESCENDING: "descending",
        NONE: "none",
        OTHER: "other"
    },
    e.a11y.aria.CheckedValues = {
        TRUE: "true",
        FALSE: "false",
        MIXED: "mixed",
        UNDEFINED: "undefined"
    },
    e.a11y.aria.ExpandedValues = {
        TRUE: "true",
        FALSE: "false",
        UNDEFINED: "undefined"
    },
    e.a11y.aria.GrabbedValues = {
        TRUE: "true",
        FALSE: "false",
        UNDEFINED: "undefined"
    },
    e.a11y.aria.InvalidValues = {
        FALSE: "false",
        TRUE: "true",
        GRAMMAR: "grammar",
        SPELLING: "spelling"
    },
    e.a11y.aria.PressedValues = {
        TRUE: "true",
        FALSE: "false",
        MIXED: "mixed",
        UNDEFINED: "undefined"
    },
    e.a11y.aria.SelectedValues = {
        TRUE: "true",
        FALSE: "false",
        UNDEFINED: "undefined"
    },
    e.a11y.aria.datatables = {},
    e.a11y.aria.datatables.getDefaultValuesMap = function() {
        return e.a11y.aria.DefaultStateValueMap_ || (e.a11y.aria.DefaultStateValueMap_ = {
            [e.a11y.aria.State.ATOMIC]: !1,
            [e.a11y.aria.State.AUTOCOMPLETE]: "none",
            [e.a11y.aria.State.DROPEFFECT]: "none",
            [e.a11y.aria.State.HASPOPUP]: !1,
            [e.a11y.aria.State.LIVE]: "off",
            [e.a11y.aria.State.MULTILINE]: !1,
            [e.a11y.aria.State.MULTISELECTABLE]: !1,
            [e.a11y.aria.State.ORIENTATION]: "vertical",
            [e.a11y.aria.State.READONLY]: !1,
            [e.a11y.aria.State.RELEVANT]: "additions text",
            [e.a11y.aria.State.REQUIRED]: !1,
            [e.a11y.aria.State.SORT]: "none",
            [e.a11y.aria.State.BUSY]: !1,
            [e.a11y.aria.State.DISABLED]: !1,
            [e.a11y.aria.State.HIDDEN]: !1,
            [e.a11y.aria.State.INVALID]: "false"
        }),
        e.a11y.aria.DefaultStateValueMap_
    }
    ,
    e.a11y.aria.ARIA_PREFIX_ = "aria-",
    e.a11y.aria.ROLE_ATTRIBUTE_ = "role",
    e.a11y.aria.TAGS_WITH_ASSUMED_ROLES_ = e.object.createSet("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" ")),
    e.a11y.aria.CONTAINER_ROLES_ = [e.a11y.aria.Role.COMBOBOX, e.a11y.aria.Role.GRID, e.a11y.aria.Role.GROUP, e.a11y.aria.Role.LISTBOX, e.a11y.aria.Role.MENU, e.a11y.aria.Role.MENUBAR, e.a11y.aria.Role.RADIOGROUP, e.a11y.aria.Role.ROW, e.a11y.aria.Role.ROWGROUP, e.a11y.aria.Role.TAB_LIST, e.a11y.aria.Role.TEXTBOX, e.a11y.aria.Role.TOOLBAR, e.a11y.aria.Role.TREE, e.a11y.aria.Role.TREEGRID],
    e.a11y.aria.setRole = function(t, n) {
        n ? (e.asserts.ENABLE_ASSERTS && e.asserts.assert(e.object.containsValue(e.a11y.aria.Role, n), "No such ARIA role " + n),
        t.setAttribute(e.a11y.aria.ROLE_ATTRIBUTE_, n)) : e.a11y.aria.removeRole(t)
    }
    ,
    e.a11y.aria.getRole = function(t) {
        return t.getAttribute(e.a11y.aria.ROLE_ATTRIBUTE_) || null
    }
    ,
    e.a11y.aria.removeRole = function(t) {
        t.removeAttribute(e.a11y.aria.ROLE_ATTRIBUTE_)
    }
    ,
    e.a11y.aria.setState = function(t, n, o) {
        e.isArray(o) && (o = o.join(" "));
        var r = e.a11y.aria.getAriaAttributeName_(n);
        "" === o || null == o ? n in (o = e.a11y.aria.datatables.getDefaultValuesMap()) ? t.setAttribute(r, o[n]) : t.removeAttribute(r) : t.setAttribute(r, o)
    }
    ,
    e.a11y.aria.toggleState = function(t, n) {
        var o = e.a11y.aria.getState(t, n);
        e.string.isEmptyOrWhitespace(e.string.makeSafe(o)) || "true" == o || "false" == o ? e.a11y.aria.setState(t, n, "true" == o ? "false" : "true") : e.a11y.aria.removeState(t, n)
    }
    ,
    e.a11y.aria.removeState = function(t, n) {
        t.removeAttribute(e.a11y.aria.getAriaAttributeName_(n))
    }
    ,
    e.a11y.aria.getState = function(t, n) {
        return null == (t = t.getAttribute(e.a11y.aria.getAriaAttributeName_(n))) || null == t ? "" : String(t)
    }
    ,
    e.a11y.aria.getActiveDescendant = function(t) {
        var n = e.a11y.aria.getState(t, e.a11y.aria.State.ACTIVEDESCENDANT);
        return e.dom.getOwnerDocument(t).getElementById(n)
    }
    ,
    e.a11y.aria.setActiveDescendant = function(t, n) {
        var o = "";
        n && (o = n.id,
        e.asserts.assert(o, "The active element should have an id.")),
        e.a11y.aria.setState(t, e.a11y.aria.State.ACTIVEDESCENDANT, o)
    }
    ,
    e.a11y.aria.getLabel = function(t) {
        return e.a11y.aria.getState(t, e.a11y.aria.State.LABEL)
    }
    ,
    e.a11y.aria.setLabel = function(t, n) {
        e.a11y.aria.setState(t, e.a11y.aria.State.LABEL, n)
    }
    ,
    e.a11y.aria.assertRoleIsSetInternalUtil = function(t, n) {
        e.a11y.aria.TAGS_WITH_ASSUMED_ROLES_[t.tagName] || (t = e.a11y.aria.getRole(t),
        e.asserts.assert(null != t, "The element ARIA role cannot be null."),
        e.asserts.assert(e.array.contains(n, t), 'Non existing or incorrect role set for element.The role set is "' + t + '". The role should be any of "' + n + '". Check the ARIA specification for more details http://www.w3.org/TR/wai-aria/roles.'))
    }
    ,
    e.a11y.aria.getStateBoolean = function(t, n) {
        return t = t.getAttribute(e.a11y.aria.getAriaAttributeName_(n)),
        e.asserts.assert(e.isBoolean(t) || null == t || "true" == t || "false" == t),
        null == t ? t : e.isBoolean(t) ? t : "true" == t
    }
    ,
    e.a11y.aria.getStateNumber = function(t, n) {
        return t = t.getAttribute(e.a11y.aria.getAriaAttributeName_(n)),
        e.asserts.assert(!(null != t && isNaN(Number(t)) || e.isBoolean(t))),
        null == t ? null : Number(t)
    }
    ,
    e.a11y.aria.getStateString = function(t, n) {
        return t = t.getAttribute(e.a11y.aria.getAriaAttributeName_(n)),
        e.asserts.assert((null == t || e.isString(t)) && ("" == t || isNaN(Number(t))) && "true" != t && "false" != t),
        null == t || "" == t ? null : t
    }
    ,
    e.a11y.aria.getStringArrayStateInternalUtil = function(t, n) {
        return t = t.getAttribute(e.a11y.aria.getAriaAttributeName_(n)),
        e.a11y.aria.splitStringOnWhitespace_(t)
    }
    ,
    e.a11y.aria.hasState = function(t, n) {
        return t.hasAttribute(e.a11y.aria.getAriaAttributeName_(n))
    }
    ,
    e.a11y.aria.isContainerRole = function(t) {
        return t = e.a11y.aria.getRole(t),
        e.array.contains(e.a11y.aria.CONTAINER_ROLES_, t)
    }
    ,
    e.a11y.aria.splitStringOnWhitespace_ = function(e) {
        return e ? e.split(/\s+/) : []
    }
    ,
    e.a11y.aria.getAriaAttributeName_ = function(t) {
        return e.asserts.ENABLE_ASSERTS && (e.asserts.assert(t, "ARIA attribute cannot be empty."),
        e.asserts.assert(e.object.containsValue(e.a11y.aria.State, t), "No such ARIA attribute " + t)),
        e.a11y.aria.ARIA_PREFIX_ + t
    }
    ,
    e.events.KeyCodes = {
        WIN_KEY_FF_LINUX: 0,
        MAC_ENTER: 3,
        BACKSPACE: 8,
        TAB: 9,
        NUM_CENTER: 12,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        PLUS_SIGN: 43,
        PRINT_SCREEN: 44,
        INSERT: 45,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        FF_SEMICOLON: 59,
        FF_EQUALS: 61,
        FF_DASH: 173,
        FF_HASH: 163,
        QUESTION_MARK: 63,
        AT_SIGN: 64,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        META: 91,
        WIN_KEY_RIGHT: 92,
        CONTEXT_MENU: 93,
        NUM_ZERO: 96,
        NUM_ONE: 97,
        NUM_TWO: 98,
        NUM_THREE: 99,
        NUM_FOUR: 100,
        NUM_FIVE: 101,
        NUM_SIX: 102,
        NUM_SEVEN: 103,
        NUM_EIGHT: 104,
        NUM_NINE: 105,
        NUM_MULTIPLY: 106,
        NUM_PLUS: 107,
        NUM_MINUS: 109,
        NUM_PERIOD: 110,
        NUM_DIVISION: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUMLOCK: 144,
        SCROLL_LOCK: 145,
        FIRST_MEDIA_KEY: 166,
        LAST_MEDIA_KEY: 183,
        SEMICOLON: 186,
        DASH: 189,
        EQUALS: 187,
        COMMA: 188,
        PERIOD: 190,
        SLASH: 191,
        APOSTROPHE: 192,
        TILDE: 192,
        SINGLE_QUOTE: 222,
        OPEN_SQUARE_BRACKET: 219,
        BACKSLASH: 220,
        CLOSE_SQUARE_BRACKET: 221,
        WIN_KEY: 224,
        MAC_FF_META: 224,
        MAC_WK_CMD_LEFT: 91,
        MAC_WK_CMD_RIGHT: 93,
        WIN_IME: 229,
        VK_NONAME: 252,
        PHANTOM: 255
    },
    e.events.KeyCodes.isTextModifyingKeyEvent = function(t) {
        if (t.altKey && !t.ctrlKey || t.metaKey || t.keyCode >= e.events.KeyCodes.F1 && t.keyCode <= e.events.KeyCodes.F12)
            return !1;
        if (e.events.KeyCodes.isCharacterKey(t.keyCode))
            return !0;
        switch (t.keyCode) {
        case e.events.KeyCodes.ALT:
        case e.events.KeyCodes.CAPS_LOCK:
        case e.events.KeyCodes.CONTEXT_MENU:
        case e.events.KeyCodes.CTRL:
        case e.events.KeyCodes.DOWN:
        case e.events.KeyCodes.END:
        case e.events.KeyCodes.ESC:
        case e.events.KeyCodes.HOME:
        case e.events.KeyCodes.INSERT:
        case e.events.KeyCodes.LEFT:
        case e.events.KeyCodes.MAC_FF_META:
        case e.events.KeyCodes.META:
        case e.events.KeyCodes.NUMLOCK:
        case e.events.KeyCodes.NUM_CENTER:
        case e.events.KeyCodes.PAGE_DOWN:
        case e.events.KeyCodes.PAGE_UP:
        case e.events.KeyCodes.PAUSE:
        case e.events.KeyCodes.PHANTOM:
        case e.events.KeyCodes.PRINT_SCREEN:
        case e.events.KeyCodes.RIGHT:
        case e.events.KeyCodes.SCROLL_LOCK:
        case e.events.KeyCodes.SHIFT:
        case e.events.KeyCodes.UP:
        case e.events.KeyCodes.VK_NONAME:
        case e.events.KeyCodes.WIN_KEY:
        case e.events.KeyCodes.WIN_KEY_RIGHT:
            return !1;
        case e.events.KeyCodes.WIN_KEY_FF_LINUX:
            return !e.userAgent.GECKO;
        default:
            return t.keyCode < e.events.KeyCodes.FIRST_MEDIA_KEY || t.keyCode > e.events.KeyCodes.LAST_MEDIA_KEY
        }
    }
    ,
    e.events.KeyCodes.firesKeyPressEvent = function(t, n, o, r, i, s) {
        if (e.userAgent.WEBKIT && !e.userAgent.isVersionOrHigher("525"))
            return !0;
        if (e.userAgent.MAC && i)
            return e.events.KeyCodes.isCharacterKey(t);
        if (i && !r)
            return !1;
        if (!e.userAgent.GECKO) {
            e.isNumber(n) && (n = e.events.KeyCodes.normalizeKeyCode(n));
            var a = n == e.events.KeyCodes.CTRL || n == e.events.KeyCodes.ALT || e.userAgent.MAC && n == e.events.KeyCodes.META
              , l = n == e.events.KeyCodes.SHIFT && (r || s);
            if ((!o || e.userAgent.MAC) && a || e.userAgent.MAC && l)
                return !1
        }
        if ((e.userAgent.WEBKIT || e.userAgent.EDGE) && r && o)
            switch (t) {
            case e.events.KeyCodes.BACKSLASH:
            case e.events.KeyCodes.OPEN_SQUARE_BRACKET:
            case e.events.KeyCodes.CLOSE_SQUARE_BRACKET:
            case e.events.KeyCodes.TILDE:
            case e.events.KeyCodes.SEMICOLON:
            case e.events.KeyCodes.DASH:
            case e.events.KeyCodes.EQUALS:
            case e.events.KeyCodes.COMMA:
            case e.events.KeyCodes.PERIOD:
            case e.events.KeyCodes.SLASH:
            case e.events.KeyCodes.APOSTROPHE:
            case e.events.KeyCodes.SINGLE_QUOTE:
                return !1
            }
        if (e.userAgent.IE && r && n == t)
            return !1;
        switch (t) {
        case e.events.KeyCodes.ENTER:
            return !e.userAgent.GECKO || !s && !i && !(o && r);
        case e.events.KeyCodes.ESC:
            return !(e.userAgent.WEBKIT || e.userAgent.EDGE || e.userAgent.GECKO)
        }
        return (!e.userAgent.GECKO || !(r || i || s)) && e.events.KeyCodes.isCharacterKey(t)
    }
    ,
    e.events.KeyCodes.isCharacterKey = function(t) {
        if (t >= e.events.KeyCodes.ZERO && t <= e.events.KeyCodes.NINE || t >= e.events.KeyCodes.NUM_ZERO && t <= e.events.KeyCodes.NUM_MULTIPLY || t >= e.events.KeyCodes.A && t <= e.events.KeyCodes.Z || (e.userAgent.WEBKIT || e.userAgent.EDGE) && 0 == t)
            return !0;
        switch (t) {
        case e.events.KeyCodes.SPACE:
        case e.events.KeyCodes.PLUS_SIGN:
        case e.events.KeyCodes.QUESTION_MARK:
        case e.events.KeyCodes.AT_SIGN:
        case e.events.KeyCodes.NUM_PLUS:
        case e.events.KeyCodes.NUM_MINUS:
        case e.events.KeyCodes.NUM_PERIOD:
        case e.events.KeyCodes.NUM_DIVISION:
        case e.events.KeyCodes.SEMICOLON:
        case e.events.KeyCodes.FF_SEMICOLON:
        case e.events.KeyCodes.DASH:
        case e.events.KeyCodes.EQUALS:
        case e.events.KeyCodes.FF_EQUALS:
        case e.events.KeyCodes.COMMA:
        case e.events.KeyCodes.PERIOD:
        case e.events.KeyCodes.SLASH:
        case e.events.KeyCodes.APOSTROPHE:
        case e.events.KeyCodes.SINGLE_QUOTE:
        case e.events.KeyCodes.OPEN_SQUARE_BRACKET:
        case e.events.KeyCodes.BACKSLASH:
        case e.events.KeyCodes.CLOSE_SQUARE_BRACKET:
        case e.events.KeyCodes.FF_HASH:
            return !0;
        case e.events.KeyCodes.FF_DASH:
            return e.userAgent.GECKO;
        default:
            return !1
        }
    }
    ,
    e.events.KeyCodes.normalizeKeyCode = function(t) {
        return e.userAgent.GECKO ? e.events.KeyCodes.normalizeGeckoKeyCode(t) : e.userAgent.MAC && e.userAgent.WEBKIT ? e.events.KeyCodes.normalizeMacWebKitKeyCode(t) : t
    }
    ,
    e.events.KeyCodes.normalizeGeckoKeyCode = function(t) {
        switch (t) {
        case e.events.KeyCodes.FF_EQUALS:
            return e.events.KeyCodes.EQUALS;
        case e.events.KeyCodes.FF_SEMICOLON:
            return e.events.KeyCodes.SEMICOLON;
        case e.events.KeyCodes.FF_DASH:
            return e.events.KeyCodes.DASH;
        case e.events.KeyCodes.MAC_FF_META:
            return e.events.KeyCodes.META;
        case e.events.KeyCodes.WIN_KEY_FF_LINUX:
            return e.events.KeyCodes.WIN_KEY;
        default:
            return t
        }
    }
    ,
    e.events.KeyCodes.normalizeMacWebKitKeyCode = function(t) {
        switch (t) {
        case e.events.KeyCodes.MAC_WK_CMD_RIGHT:
            return e.events.KeyCodes.META;
        default:
            return t
        }
    }
    ,
    e.events.KeyHandler = function(t, n) {
        e.events.EventTarget.call(this),
        t && this.attach(t, n)
    }
    ,
    e.inherits(e.events.KeyHandler, e.events.EventTarget),
    e.events.KeyHandler.prototype.element_ = null,
    e.events.KeyHandler.prototype.keyPressKey_ = null,
    e.events.KeyHandler.prototype.keyDownKey_ = null,
    e.events.KeyHandler.prototype.keyUpKey_ = null,
    e.events.KeyHandler.prototype.lastKey_ = -1,
    e.events.KeyHandler.prototype.keyCode_ = -1,
    e.events.KeyHandler.prototype.altKey_ = !1,
    e.events.KeyHandler.EventType = {
        KEY: "key"
    },
    e.events.KeyHandler.safariKey_ = {
        3: e.events.KeyCodes.ENTER,
        12: e.events.KeyCodes.NUMLOCK,
        63232: e.events.KeyCodes.UP,
        63233: e.events.KeyCodes.DOWN,
        63234: e.events.KeyCodes.LEFT,
        63235: e.events.KeyCodes.RIGHT,
        63236: e.events.KeyCodes.F1,
        63237: e.events.KeyCodes.F2,
        63238: e.events.KeyCodes.F3,
        63239: e.events.KeyCodes.F4,
        63240: e.events.KeyCodes.F5,
        63241: e.events.KeyCodes.F6,
        63242: e.events.KeyCodes.F7,
        63243: e.events.KeyCodes.F8,
        63244: e.events.KeyCodes.F9,
        63245: e.events.KeyCodes.F10,
        63246: e.events.KeyCodes.F11,
        63247: e.events.KeyCodes.F12,
        63248: e.events.KeyCodes.PRINT_SCREEN,
        63272: e.events.KeyCodes.DELETE,
        63273: e.events.KeyCodes.HOME,
        63275: e.events.KeyCodes.END,
        63276: e.events.KeyCodes.PAGE_UP,
        63277: e.events.KeyCodes.PAGE_DOWN,
        63289: e.events.KeyCodes.NUMLOCK,
        63302: e.events.KeyCodes.INSERT
    },
    e.events.KeyHandler.keyIdentifier_ = {
        Up: e.events.KeyCodes.UP,
        Down: e.events.KeyCodes.DOWN,
        Left: e.events.KeyCodes.LEFT,
        Right: e.events.KeyCodes.RIGHT,
        Enter: e.events.KeyCodes.ENTER,
        F1: e.events.KeyCodes.F1,
        F2: e.events.KeyCodes.F2,
        F3: e.events.KeyCodes.F3,
        F4: e.events.KeyCodes.F4,
        F5: e.events.KeyCodes.F5,
        F6: e.events.KeyCodes.F6,
        F7: e.events.KeyCodes.F7,
        F8: e.events.KeyCodes.F8,
        F9: e.events.KeyCodes.F9,
        F10: e.events.KeyCodes.F10,
        F11: e.events.KeyCodes.F11,
        F12: e.events.KeyCodes.F12,
        "U+007F": e.events.KeyCodes.DELETE,
        Home: e.events.KeyCodes.HOME,
        End: e.events.KeyCodes.END,
        PageUp: e.events.KeyCodes.PAGE_UP,
        PageDown: e.events.KeyCodes.PAGE_DOWN,
        Insert: e.events.KeyCodes.INSERT
    },
    e.events.KeyHandler.USES_KEYDOWN_ = !e.userAgent.WEBKIT || e.userAgent.isVersionOrHigher("525"),
    e.events.KeyHandler.SAVE_ALT_FOR_KEYPRESS_ = e.userAgent.MAC && e.userAgent.GECKO,
    e.events.KeyHandler.prototype.handleKeyDown_ = function(t) {
        (e.userAgent.WEBKIT || e.userAgent.EDGE) && (this.lastKey_ == e.events.KeyCodes.CTRL && !t.ctrlKey || this.lastKey_ == e.events.KeyCodes.ALT && !t.altKey || e.userAgent.MAC && this.lastKey_ == e.events.KeyCodes.META && !t.metaKey) && this.resetState(),
        -1 == this.lastKey_ && (t.ctrlKey && t.keyCode != e.events.KeyCodes.CTRL ? this.lastKey_ = e.events.KeyCodes.CTRL : t.altKey && t.keyCode != e.events.KeyCodes.ALT ? this.lastKey_ = e.events.KeyCodes.ALT : t.metaKey && t.keyCode != e.events.KeyCodes.META && (this.lastKey_ = e.events.KeyCodes.META)),
        e.events.KeyHandler.USES_KEYDOWN_ && !e.events.KeyCodes.firesKeyPressEvent(t.keyCode, this.lastKey_, t.shiftKey, t.ctrlKey, t.altKey, t.metaKey) ? this.handleEvent(t) : (this.keyCode_ = e.events.KeyCodes.normalizeKeyCode(t.keyCode),
        e.events.KeyHandler.SAVE_ALT_FOR_KEYPRESS_ && (this.altKey_ = t.altKey))
    }
    ,
    e.events.KeyHandler.prototype.resetState = function() {
        this.keyCode_ = this.lastKey_ = -1
    }
    ,
    e.events.KeyHandler.prototype.handleKeyup_ = function(e) {
        this.resetState(),
        this.altKey_ = e.altKey
    }
    ,
    e.events.KeyHandler.prototype.handleEvent = function(t) {
        var n = t.getBrowserEvent()
          , o = n.altKey;
        if (e.userAgent.IE && t.type == e.events.EventType.KEYPRESS)
            var r = this.keyCode_
              , i = r != e.events.KeyCodes.ENTER && r != e.events.KeyCodes.ESC ? n.keyCode : 0;
        else
            (e.userAgent.WEBKIT || e.userAgent.EDGE) && t.type == e.events.EventType.KEYPRESS ? (r = this.keyCode_,
            i = 0 <= n.charCode && 63232 > n.charCode && e.events.KeyCodes.isCharacterKey(r) ? n.charCode : 0) : e.userAgent.OPERA && !e.userAgent.WEBKIT ? (r = this.keyCode_,
            i = e.events.KeyCodes.isCharacterKey(r) ? n.keyCode : 0) : (t.type == e.events.EventType.KEYPRESS ? (e.events.KeyHandler.SAVE_ALT_FOR_KEYPRESS_ && (o = this.altKey_),
            n.keyCode == n.charCode ? 32 > n.keyCode ? (r = n.keyCode,
            i = 0) : (r = this.keyCode_,
            i = n.charCode) : (r = n.keyCode || this.keyCode_,
            i = n.charCode || 0)) : (r = n.keyCode || this.keyCode_,
            i = n.charCode || 0),
            e.userAgent.MAC && i == e.events.KeyCodes.QUESTION_MARK && r == e.events.KeyCodes.WIN_KEY && (r = e.events.KeyCodes.SLASH));
        var s = r = e.events.KeyCodes.normalizeKeyCode(r);
        r ? 63232 <= r && r in e.events.KeyHandler.safariKey_ ? s = e.events.KeyHandler.safariKey_[r] : 25 == r && t.shiftKey && (s = 9) : n.keyIdentifier && n.keyIdentifier in e.events.KeyHandler.keyIdentifier_ && (s = e.events.KeyHandler.keyIdentifier_[n.keyIdentifier]),
        e.userAgent.GECKO && e.events.KeyHandler.USES_KEYDOWN_ && t.type == e.events.EventType.KEYPRESS && !e.events.KeyCodes.firesKeyPressEvent(s, this.lastKey_, t.shiftKey, t.ctrlKey, o, t.metaKey) || (t = s == this.lastKey_,
        this.lastKey_ = s,
        (n = new e.events.KeyEvent(s,i,t,n)).altKey = o,
        this.dispatchEvent(n))
    }
    ,
    e.events.KeyHandler.prototype.getElement = function() {
        return this.element_
    }
    ,
    e.events.KeyHandler.prototype.attach = function(t, n) {
        this.keyUpKey_ && this.detach(),
        this.element_ = t,
        this.keyPressKey_ = e.events.listen(this.element_, e.events.EventType.KEYPRESS, this, n),
        this.keyDownKey_ = e.events.listen(this.element_, e.events.EventType.KEYDOWN, this.handleKeyDown_, n, this),
        this.keyUpKey_ = e.events.listen(this.element_, e.events.EventType.KEYUP, this.handleKeyup_, n, this)
    }
    ,
    e.events.KeyHandler.prototype.detach = function() {
        this.keyPressKey_ && (e.events.unlistenByKey(this.keyPressKey_),
        e.events.unlistenByKey(this.keyDownKey_),
        e.events.unlistenByKey(this.keyUpKey_),
        this.keyUpKey_ = this.keyDownKey_ = this.keyPressKey_ = null),
        this.element_ = null,
        this.keyCode_ = this.lastKey_ = -1
    }
    ,
    e.events.KeyHandler.prototype.disposeInternal = function() {
        e.events.KeyHandler.superClass_.disposeInternal.call(this),
        this.detach()
    }
    ,
    e.events.KeyEvent = function(t, n, o, r) {
        e.events.BrowserEvent.call(this, r),
        this.type = e.events.KeyHandler.EventType.KEY,
        this.keyCode = t,
        this.charCode = n,
        this.repeat = o
    }
    ,
    e.inherits(e.events.KeyEvent, e.events.BrowserEvent),
    e.ui.ComponentUtil = {},
    e.ui.ComponentUtil.getMouseEventType = function(t) {
        return t.pointerEventsEnabled() ? e.events.PointerAsMouseEventType : e.events.MouseAsMouseEventType
    }
    ,
    e.dom.classlist = {},
    e.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST = !1,
    e.dom.classlist.get = function(t) {
        return e.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || t.classList ? t.classList : (t = t.className,
        e.isString(t) && t.match(/\S+/g) || [])
    }
    ,
    e.dom.classlist.set = function(e, t) {
        e.className = t
    }
    ,
    e.dom.classlist.contains = function(t, n) {
        return e.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || t.classList ? t.classList.contains(n) : e.array.contains(e.dom.classlist.get(t), n)
    }
    ,
    e.dom.classlist.add = function(t, n) {
        e.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || t.classList ? t.classList.add(n) : e.dom.classlist.contains(t, n) || (t.className += 0 < t.className.length ? " " + n : n)
    }
    ,
    e.dom.classlist.addAll = function(t, n) {
        if (e.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || t.classList)
            e.array.forEach(n, function(n) {
                e.dom.classlist.add(t, n)
            });
        else {
            var o = {};
            for (var r in e.array.forEach(e.dom.classlist.get(t), function(e) {
                o[e] = !0
            }),
            e.array.forEach(n, function(e) {
                o[e] = !0
            }),
            t.className = "",
            o)
                t.className += 0 < t.className.length ? " " + r : r
        }
    }
    ,
    e.dom.classlist.remove = function(t, n) {
        e.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || t.classList ? t.classList.remove(n) : e.dom.classlist.contains(t, n) && (t.className = e.array.filter(e.dom.classlist.get(t), function(e) {
            return e != n
        }).join(" "))
    }
    ,
    e.dom.classlist.removeAll = function(t, n) {
        e.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || t.classList ? e.array.forEach(n, function(n) {
            e.dom.classlist.remove(t, n)
        }) : t.className = e.array.filter(e.dom.classlist.get(t), function(t) {
            return !e.array.contains(n, t)
        }).join(" ")
    }
    ,
    e.dom.classlist.enable = function(t, n, o) {
        o ? e.dom.classlist.add(t, n) : e.dom.classlist.remove(t, n)
    }
    ,
    e.dom.classlist.enableAll = function(t, n, o) {
        (o ? e.dom.classlist.addAll : e.dom.classlist.removeAll)(t, n)
    }
    ,
    e.dom.classlist.swap = function(t, n, o) {
        return !!e.dom.classlist.contains(t, n) && (e.dom.classlist.remove(t, n),
        e.dom.classlist.add(t, o),
        !0)
    }
    ,
    e.dom.classlist.toggle = function(t, n) {
        var o = !e.dom.classlist.contains(t, n);
        return e.dom.classlist.enable(t, n, o),
        o
    }
    ,
    e.dom.classlist.addRemove = function(t, n, o) {
        e.dom.classlist.remove(t, n),
        e.dom.classlist.add(t, o)
    }
    ,
    e.ui.registry = {},
    e.ui.registry.getDefaultRenderer = function(t) {
        for (var n; t && (n = e.getUid(t),
        !(n = e.ui.registry.defaultRenderers_[n])); )
            t = t.superClass_ ? t.superClass_.constructor : null;
        return n ? e.isFunction(n.getInstance) ? n.getInstance() : new n : null
    }
    ,
    e.ui.registry.setDefaultRenderer = function(t, n) {
        if (!e.isFunction(t))
            throw Error("Invalid component class " + t);
        if (!e.isFunction(n))
            throw Error("Invalid renderer class " + n);
        t = e.getUid(t),
        e.ui.registry.defaultRenderers_[t] = n
    }
    ,
    e.ui.registry.getDecoratorByClassName = function(t) {
        return t in e.ui.registry.decoratorFunctions_ ? e.ui.registry.decoratorFunctions_[t]() : null
    }
    ,
    e.ui.registry.setDecoratorByClassName = function(t, n) {
        if (!t)
            throw Error("Invalid class name " + t);
        if (!e.isFunction(n))
            throw Error("Invalid decorator function " + n);
        e.ui.registry.decoratorFunctions_[t] = n
    }
    ,
    e.ui.registry.getDecorator = function(t) {
        e.asserts.assert(t);
        for (var n = e.dom.classlist.get(t), o = 0, r = n.length; o < r; o++)
            if (t = e.ui.registry.getDecoratorByClassName(n[o]))
                return t;
        return null
    }
    ,
    e.ui.registry.reset = function() {
        e.ui.registry.defaultRenderers_ = {},
        e.ui.registry.decoratorFunctions_ = {}
    }
    ,
    e.ui.registry.defaultRenderers_ = {},
    e.ui.registry.decoratorFunctions_ = {},
    e.ui.ContainerRenderer = function(e) {
        this.ariaRole_ = e
    }
    ,
    e.addSingletonGetter(e.ui.ContainerRenderer),
    e.ui.ContainerRenderer.getCustomRenderer = function(e, t) {
        return (e = new e).getCssClass = function() {
            return t
        }
        ,
        e
    }
    ,
    e.ui.ContainerRenderer.CSS_CLASS = "goog-container",
    e.ui.ContainerRenderer.prototype.getAriaRole = function() {
        return this.ariaRole_
    }
    ,
    e.ui.ContainerRenderer.prototype.enableTabIndex = function(e, t) {
        e && (e.tabIndex = t ? 0 : -1)
    }
    ,
    e.ui.ContainerRenderer.prototype.createDom = function(e) {
        return e.getDomHelper().createDom("DIV", this.getClassNames(e).join(" "))
    }
    ,
    e.ui.ContainerRenderer.prototype.getContentElement = function(e) {
        return e
    }
    ,
    e.ui.ContainerRenderer.prototype.canDecorate = function(e) {
        return "DIV" == e.tagName
    }
    ,
    e.ui.ContainerRenderer.prototype.decorate = function(t, n) {
        n.id && t.setId(n.id);
        var o = this.getCssClass()
          , r = !1
          , i = e.dom.classlist.get(n);
        return i && e.array.forEach(i, function(e) {
            e == o ? r = !0 : e && this.setStateFromClassName(t, e, o)
        }, this),
        r || e.dom.classlist.add(n, o),
        this.decorateChildren(t, this.getContentElement(n)),
        n
    }
    ,
    e.ui.ContainerRenderer.prototype.setStateFromClassName = function(t, n, o) {
        n == o + "-disabled" ? t.setEnabled(!1) : n == o + "-horizontal" ? t.setOrientation(e.ui.Container.Orientation.HORIZONTAL) : n == o + "-vertical" && t.setOrientation(e.ui.Container.Orientation.VERTICAL)
    }
    ,
    e.ui.ContainerRenderer.prototype.decorateChildren = function(t, n, o) {
        if (n) {
            o = o || n.firstChild;
            for (var r; o && o.parentNode == n; ) {
                if (r = o.nextSibling,
                o.nodeType == e.dom.NodeType.ELEMENT) {
                    var i = this.getDecoratorForChild(o);
                    i && (i.setElementInternal(o),
                    t.isEnabled() || i.setEnabled(!1),
                    t.addChild(i),
                    i.decorate(o))
                } else
                    o.nodeValue && "" != e.string.trim(o.nodeValue) || n.removeChild(o);
                o = r
            }
        }
    }
    ,
    e.ui.ContainerRenderer.prototype.getDecoratorForChild = function(t) {
        return e.ui.registry.getDecorator(t)
    }
    ,
    e.ui.ContainerRenderer.prototype.initializeDom = function(t) {
        t = t.getElement(),
        e.asserts.assert(t, "The container DOM element cannot be null."),
        e.style.setUnselectable(t, !0, e.userAgent.GECKO),
        e.userAgent.IE && (t.hideFocus = !0);
        var n = this.getAriaRole();
        n && e.a11y.aria.setRole(t, n)
    }
    ,
    e.ui.ContainerRenderer.prototype.getKeyEventTarget = function(e) {
        return e.getElement()
    }
    ,
    e.ui.ContainerRenderer.prototype.getCssClass = function() {
        return e.ui.ContainerRenderer.CSS_CLASS
    }
    ,
    e.ui.ContainerRenderer.prototype.getClassNames = function(t) {
        var n = this.getCssClass()
          , o = t.getOrientation() == e.ui.Container.Orientation.HORIZONTAL;
        return o = [n, o ? n + "-horizontal" : n + "-vertical"],
        t.isEnabled() || o.push(n + "-disabled"),
        o
    }
    ,
    e.ui.ContainerRenderer.prototype.getDefaultOrientation = function() {
        return e.ui.Container.Orientation.VERTICAL
    }
    ,
    e.ui.ControlRenderer = function() {}
    ,
    e.addSingletonGetter(e.ui.ControlRenderer),
    e.tagUnsealableClass(e.ui.ControlRenderer),
    e.ui.ControlRenderer.getCustomRenderer = function(e, t) {
        return (e = new e).getCssClass = function() {
            return t
        }
        ,
        e
    }
    ,
    e.ui.ControlRenderer.CSS_CLASS = "goog-control",
    e.ui.ControlRenderer.IE6_CLASS_COMBINATIONS = [],
    e.ui.ControlRenderer.TOGGLE_ARIA_STATE_MAP_ = {
        [e.a11y.aria.Role.BUTTON]: e.a11y.aria.State.PRESSED,
        [e.a11y.aria.Role.CHECKBOX]: e.a11y.aria.State.CHECKED,
        [e.a11y.aria.Role.MENU_ITEM]: e.a11y.aria.State.SELECTED,
        [e.a11y.aria.Role.MENU_ITEM_CHECKBOX]: e.a11y.aria.State.CHECKED,
        [e.a11y.aria.Role.MENU_ITEM_RADIO]: e.a11y.aria.State.CHECKED,
        [e.a11y.aria.Role.RADIO]: e.a11y.aria.State.CHECKED,
        [e.a11y.aria.Role.TAB]: e.a11y.aria.State.SELECTED,
        [e.a11y.aria.Role.TREEITEM]: e.a11y.aria.State.SELECTED
    },
    e.ui.ControlRenderer.prototype.getAriaRole = function() {}
    ,
    e.ui.ControlRenderer.prototype.createDom = function(e) {
        return e.getDomHelper().createDom("DIV", this.getClassNames(e).join(" "), e.getContent())
    }
    ,
    e.ui.ControlRenderer.prototype.getContentElement = function(e) {
        return e
    }
    ,
    e.ui.ControlRenderer.prototype.enableClassName = function(t, n, o) {
        if (t = t.getElement ? t.getElement() : t) {
            var r = [n];
            e.userAgent.IE && !e.userAgent.isVersionOrHigher("7") && (r = this.getAppliedCombinedClassNames_(e.dom.classlist.get(t), n)).push(n),
            e.dom.classlist.enableAll(t, r, o)
        }
    }
    ,
    e.ui.ControlRenderer.prototype.enableExtraClassName = function(e, t, n) {
        this.enableClassName(e, t, n)
    }
    ,
    e.ui.ControlRenderer.prototype.canDecorate = function() {
        return !0
    }
    ,
    e.ui.ControlRenderer.prototype.decorate = function(t, n) {
        n.id && t.setId(n.id);
        var o = this.getContentElement(n);
        o && o.firstChild ? t.setContentInternal(o.firstChild.nextSibling ? e.array.clone(o.childNodes) : o.firstChild) : t.setContentInternal(null);
        var r = 0
          , i = this.getCssClass()
          , s = this.getStructuralCssClass()
          , a = !1
          , l = !1
          , u = !1
          , c = e.array.toArray(e.dom.classlist.get(n));
        if (e.array.forEach(c, function(t) {
            a || t != i ? l || t != s ? r |= this.getStateFromClass(t) : l = !0 : (a = !0,
            s == i && (l = !0)),
            this.getStateFromClass(t) == e.ui.Component.State.DISABLED && (e.asserts.assertElement(o),
            e.dom.isFocusableTabIndex(o) && e.dom.setFocusableTabIndex(o, !1))
        }, this),
        t.setStateInternal(r),
        a || (c.push(i),
        s == i && (l = !0)),
        l || c.push(s),
        (t = t.getExtraClassNames()) && c.push.apply(c, t),
        e.userAgent.IE && !e.userAgent.isVersionOrHigher("7")) {
            var h = this.getAppliedCombinedClassNames_(c);
            0 < h.length && (c.push.apply(c, h),
            u = !0)
        }
        return a && l && !t && !u || e.dom.classlist.set(n, c.join(" ")),
        n
    }
    ,
    e.ui.ControlRenderer.prototype.initializeDom = function(e) {
        e.isRightToLeft() && this.setRightToLeft(e.getElement(), !0),
        e.isEnabled() && this.setFocusable(e, e.isVisible())
    }
    ,
    e.ui.ControlRenderer.prototype.setAriaRole = function(t, n) {
        (n = n || this.getAriaRole()) && (e.asserts.assert(t, "The element passed as a first parameter cannot be null."),
        n != e.a11y.aria.getRole(t) && e.a11y.aria.setRole(t, n))
    }
    ,
    e.ui.ControlRenderer.prototype.setAriaStates = function(t, n) {
        e.asserts.assert(t),
        e.asserts.assert(n);
        var o = t.getAriaLabel();
        e.isDefAndNotNull(o) && this.setAriaLabel(n, o),
        t.isVisible() || e.a11y.aria.setState(n, e.a11y.aria.State.HIDDEN, !t.isVisible()),
        t.isEnabled() || this.updateAriaState(n, e.ui.Component.State.DISABLED, !t.isEnabled()),
        t.isSupportedState(e.ui.Component.State.SELECTED) && this.updateAriaState(n, e.ui.Component.State.SELECTED, t.isSelected()),
        t.isSupportedState(e.ui.Component.State.CHECKED) && this.updateAriaState(n, e.ui.Component.State.CHECKED, t.isChecked()),
        t.isSupportedState(e.ui.Component.State.OPENED) && this.updateAriaState(n, e.ui.Component.State.OPENED, t.isOpen())
    }
    ,
    e.ui.ControlRenderer.prototype.setAriaLabel = function(t, n) {
        e.a11y.aria.setLabel(t, n)
    }
    ,
    e.ui.ControlRenderer.prototype.setAllowTextSelection = function(t, n) {
        e.style.setUnselectable(t, !n, !e.userAgent.IE && !e.userAgent.OPERA)
    }
    ,
    e.ui.ControlRenderer.prototype.setRightToLeft = function(e, t) {
        this.enableClassName(e, this.getStructuralCssClass() + "-rtl", t)
    }
    ,
    e.ui.ControlRenderer.prototype.isFocusable = function(t) {
        var n;
        return !(!t.isSupportedState(e.ui.Component.State.FOCUSED) || !(n = t.getKeyEventTarget())) && e.dom.isFocusableTabIndex(n)
    }
    ,
    e.ui.ControlRenderer.prototype.setFocusable = function(t, n) {
        var o;
        if (t.isSupportedState(e.ui.Component.State.FOCUSED) && (o = t.getKeyEventTarget())) {
            if (!n && t.isFocused()) {
                try {
                    o.blur()
                } catch (e) {}
                t.isFocused() && t.handleBlur(null)
            }
            e.dom.isFocusableTabIndex(o) != n && e.dom.setFocusableTabIndex(o, n)
        }
    }
    ,
    e.ui.ControlRenderer.prototype.setVisible = function(t, n) {
        e.style.setElementShown(t, n),
        t && e.a11y.aria.setState(t, e.a11y.aria.State.HIDDEN, !n)
    }
    ,
    e.ui.ControlRenderer.prototype.setState = function(e, t, n) {
        var o = e.getElement();
        if (o) {
            var r = this.getClassForState(t);
            r && this.enableClassName(e, r, n),
            this.updateAriaState(o, t, n)
        }
    }
    ,
    e.ui.ControlRenderer.prototype.updateAriaState = function(t, n, o) {
        e.ui.ControlRenderer.ariaAttributeMap_ || (e.ui.ControlRenderer.ariaAttributeMap_ = {
            [e.ui.Component.State.DISABLED]: e.a11y.aria.State.DISABLED,
            [e.ui.Component.State.SELECTED]: e.a11y.aria.State.SELECTED,
            [e.ui.Component.State.CHECKED]: e.a11y.aria.State.CHECKED,
            [e.ui.Component.State.OPENED]: e.a11y.aria.State.EXPANDED
        }),
        e.asserts.assert(t, "The element passed as a first parameter cannot be null."),
        (n = e.ui.ControlRenderer.getAriaStateForAriaRole_(t, e.ui.ControlRenderer.ariaAttributeMap_[n])) && e.a11y.aria.setState(t, n, o)
    }
    ,
    e.ui.ControlRenderer.getAriaStateForAriaRole_ = function(t, n) {
        return (t = e.a11y.aria.getRole(t)) ? (t = e.ui.ControlRenderer.TOGGLE_ARIA_STATE_MAP_[t] || n,
        e.ui.ControlRenderer.isAriaState_(n) ? t : n) : n
    }
    ,
    e.ui.ControlRenderer.isAriaState_ = function(t) {
        return t == e.a11y.aria.State.CHECKED || t == e.a11y.aria.State.SELECTED
    }
    ,
    e.ui.ControlRenderer.prototype.setContent = function(t, n) {
        var o = this.getContentElement(t);
        o && (e.dom.removeChildren(o),
        n && (e.isString(n) ? e.dom.setTextContent(o, n) : (t = function(t) {
            if (t) {
                var n = e.dom.getOwnerDocument(o);
                o.appendChild(e.isString(t) ? n.createTextNode(t) : t)
            }
        }
        ,
        e.isArray(n) ? e.array.forEach(n, t) : !e.isArrayLike(n) || "nodeType"in n ? t(n) : e.array.forEach(e.array.clone(n), t))))
    }
    ,
    e.ui.ControlRenderer.prototype.getKeyEventTarget = function(e) {
        return e.getElement()
    }
    ,
    e.ui.ControlRenderer.prototype.getCssClass = function() {
        return e.ui.ControlRenderer.CSS_CLASS
    }
    ,
    e.ui.ControlRenderer.prototype.getIe6ClassCombinations = function() {
        return []
    }
    ,
    e.ui.ControlRenderer.prototype.getStructuralCssClass = function() {
        return this.getCssClass()
    }
    ,
    e.ui.ControlRenderer.prototype.getClassNames = function(t) {
        var n = this.getCssClass()
          , o = [n]
          , r = this.getStructuralCssClass();
        return r != n && o.push(r),
        n = this.getClassNamesForState(t.getState()),
        o.push.apply(o, n),
        (t = t.getExtraClassNames()) && o.push.apply(o, t),
        e.userAgent.IE && !e.userAgent.isVersionOrHigher("7") && o.push.apply(o, this.getAppliedCombinedClassNames_(o)),
        o
    }
    ,
    e.ui.ControlRenderer.prototype.getAppliedCombinedClassNames_ = function(t, n) {
        var o = [];
        return n && (t = e.array.concat(t, [n])),
        e.array.forEach(this.getIe6ClassCombinations(), function(r) {
            !e.array.every(r, e.partial(e.array.contains, t)) || n && !e.array.contains(r, n) || o.push(r.join("_"))
        }),
        o
    }
    ,
    e.ui.ControlRenderer.prototype.getClassNamesForState = function(e) {
        for (var t = []; e; ) {
            var n = e & -e;
            t.push(this.getClassForState(n)),
            e &= ~n
        }
        return t
    }
    ,
    e.ui.ControlRenderer.prototype.getClassForState = function(e) {
        return this.classByState_ || this.createClassByStateMap_(),
        this.classByState_[e]
    }
    ,
    e.ui.ControlRenderer.prototype.getStateFromClass = function(e) {
        return this.stateByClass_ || this.createStateByClassMap_(),
        e = parseInt(this.stateByClass_[e], 10),
        isNaN(e) ? 0 : e
    }
    ,
    e.ui.ControlRenderer.prototype.createClassByStateMap_ = function() {
        var t = this.getStructuralCssClass()
          , n = !e.string.contains(e.string.normalizeWhitespace(t), " ");
        e.asserts.assert(n, "ControlRenderer has an invalid css class: '" + t + "'"),
        this.classByState_ = {
            [e.ui.Component.State.DISABLED]: t + "-disabled",
            [e.ui.Component.State.HOVER]: t + "-hover",
            [e.ui.Component.State.ACTIVE]: t + "-active",
            [e.ui.Component.State.SELECTED]: t + "-selected",
            [e.ui.Component.State.CHECKED]: t + "-checked",
            [e.ui.Component.State.FOCUSED]: t + "-focused",
            [e.ui.Component.State.OPENED]: t + "-open"
        }
    }
    ,
    e.ui.ControlRenderer.prototype.createStateByClassMap_ = function() {
        this.classByState_ || this.createClassByStateMap_(),
        this.stateByClass_ = e.object.transpose(this.classByState_)
    }
    ,
    e.ui.Control = function(t, n, o) {
        e.ui.Component.call(this, o),
        this.renderer_ = n || e.ui.registry.getDefaultRenderer(this.constructor),
        this.setContentInternal(e.isDef(t) ? t : null),
        this.ariaLabel_ = null
    }
    ,
    e.inherits(e.ui.Control, e.ui.Component),
    e.tagUnsealableClass(e.ui.Control),
    e.ui.Control.registerDecorator = e.ui.registry.setDecoratorByClassName,
    e.ui.Control.getDecorator = e.ui.registry.getDecorator,
    e.ui.Control.prototype.content_ = null,
    e.ui.Control.prototype.state_ = 0,
    e.ui.Control.prototype.supportedStates_ = e.ui.Component.State.DISABLED | e.ui.Component.State.HOVER | e.ui.Component.State.ACTIVE | e.ui.Component.State.FOCUSED,
    e.ui.Control.prototype.autoStates_ = e.ui.Component.State.ALL,
    e.ui.Control.prototype.statesWithTransitionEvents_ = 0,
    e.ui.Control.prototype.visible_ = !0,
    e.ui.Control.prototype.extraClassNames_ = null,
    e.ui.Control.prototype.handleMouseEvents_ = !0,
    e.ui.Control.prototype.allowTextSelection_ = !1,
    e.ui.Control.prototype.preferredAriaRole_ = null,
    e.ui.Control.prototype.isHandleMouseEvents = function() {
        return this.handleMouseEvents_
    }
    ,
    e.ui.Control.prototype.setHandleMouseEvents = function(e) {
        this.isInDocument() && e != this.handleMouseEvents_ && this.enableMouseEventHandling_(e),
        this.handleMouseEvents_ = e
    }
    ,
    e.ui.Control.prototype.getKeyEventTarget = function() {
        return this.renderer_.getKeyEventTarget(this)
    }
    ,
    e.ui.Control.prototype.getKeyHandler = function() {
        return this.keyHandler_ || (this.keyHandler_ = new e.events.KeyHandler)
    }
    ,
    e.ui.Control.prototype.getRenderer = function() {
        return this.renderer_
    }
    ,
    e.ui.Control.prototype.setRenderer = function(t) {
        if (this.isInDocument())
            throw Error(e.ui.Component.Error.ALREADY_RENDERED);
        this.getElement() && this.setElementInternal(null),
        this.renderer_ = t
    }
    ,
    e.ui.Control.prototype.getExtraClassNames = function() {
        return this.extraClassNames_
    }
    ,
    e.ui.Control.prototype.addClassName = function(t) {
        t && (this.extraClassNames_ ? e.array.contains(this.extraClassNames_, t) || this.extraClassNames_.push(t) : this.extraClassNames_ = [t],
        this.renderer_.enableExtraClassName(this, t, !0))
    }
    ,
    e.ui.Control.prototype.removeClassName = function(t) {
        t && this.extraClassNames_ && e.array.remove(this.extraClassNames_, t) && (0 == this.extraClassNames_.length && (this.extraClassNames_ = null),
        this.renderer_.enableExtraClassName(this, t, !1))
    }
    ,
    e.ui.Control.prototype.enableClassName = function(e, t) {
        t ? this.addClassName(e) : this.removeClassName(e)
    }
    ,
    e.ui.Control.prototype.createDom = function() {
        var e = this.renderer_.createDom(this);
        this.setElementInternal(e),
        this.renderer_.setAriaRole(e, this.getPreferredAriaRole()),
        this.isAllowTextSelection() || this.renderer_.setAllowTextSelection(e, !1),
        this.isVisible() || this.renderer_.setVisible(e, !1)
    }
    ,
    e.ui.Control.prototype.getPreferredAriaRole = function() {
        return this.preferredAriaRole_
    }
    ,
    e.ui.Control.prototype.setPreferredAriaRole = function(e) {
        this.preferredAriaRole_ = e
    }
    ,
    e.ui.Control.prototype.getAriaLabel = function() {
        return this.ariaLabel_
    }
    ,
    e.ui.Control.prototype.setAriaLabel = function(e) {
        this.ariaLabel_ = e;
        var t = this.getElement();
        t && this.renderer_.setAriaLabel(t, e)
    }
    ,
    e.ui.Control.prototype.getContentElement = function() {
        return this.renderer_.getContentElement(this.getElement())
    }
    ,
    e.ui.Control.prototype.canDecorate = function(e) {
        return this.renderer_.canDecorate(e)
    }
    ,
    e.ui.Control.prototype.decorateInternal = function(e) {
        e = this.renderer_.decorate(this, e),
        this.setElementInternal(e),
        this.renderer_.setAriaRole(e, this.getPreferredAriaRole()),
        this.isAllowTextSelection() || this.renderer_.setAllowTextSelection(e, !1),
        this.visible_ = "none" != e.style.display
    }
    ,
    e.ui.Control.prototype.enterDocument = function() {
        if (e.ui.Control.superClass_.enterDocument.call(this),
        this.renderer_.setAriaStates(this, this.getElementStrict()),
        this.renderer_.initializeDom(this),
        this.supportedStates_ & ~e.ui.Component.State.DISABLED && (this.isHandleMouseEvents() && this.enableMouseEventHandling_(!0),
        this.isSupportedState(e.ui.Component.State.FOCUSED))) {
            var t = this.getKeyEventTarget();
            if (t) {
                var n = this.getKeyHandler();
                n.attach(t),
                this.getHandler().listen(n, e.events.KeyHandler.EventType.KEY, this.handleKeyEvent).listen(t, e.events.EventType.FOCUS, this.handleFocus).listen(t, e.events.EventType.BLUR, this.handleBlur)
            }
        }
    }
    ,
    e.ui.Control.prototype.enableMouseEventHandling_ = function(t) {
        var n = e.ui.ComponentUtil.getMouseEventType(this)
          , o = this.getHandler()
          , r = this.getElement();
        t ? (o.listen(r, n.MOUSEDOWN, this.handleMouseDown).listen(r, [n.MOUSEUP, n.MOUSECANCEL], this.handleMouseUp).listen(r, e.events.EventType.MOUSEOVER, this.handleMouseOver).listen(r, e.events.EventType.MOUSEOUT, this.handleMouseOut),
        this.pointerEventsEnabled() && o.listen(r, e.events.EventType.GOTPOINTERCAPTURE, this.preventPointerCapture_),
        this.handleContextMenu != e.nullFunction && o.listen(r, e.events.EventType.CONTEXTMENU, this.handleContextMenu),
        e.userAgent.IE && (e.userAgent.isVersionOrHigher(9) || o.listen(r, e.events.EventType.DBLCLICK, this.handleDblClick),
        this.ieMouseEventSequenceSimulator_ || (this.ieMouseEventSequenceSimulator_ = new e.ui.Control.IeMouseEventSequenceSimulator_(this),
        this.registerDisposable(this.ieMouseEventSequenceSimulator_)))) : (o.unlisten(r, n.MOUSEDOWN, this.handleMouseDown).unlisten(r, [n.MOUSEUP, n.MOUSECANCEL], this.handleMouseUp).unlisten(r, e.events.EventType.MOUSEOVER, this.handleMouseOver).unlisten(r, e.events.EventType.MOUSEOUT, this.handleMouseOut),
        this.pointerEventsEnabled() && o.unlisten(r, e.events.EventType.GOTPOINTERCAPTURE, this.preventPointerCapture_),
        this.handleContextMenu != e.nullFunction && o.unlisten(r, e.events.EventType.CONTEXTMENU, this.handleContextMenu),
        e.userAgent.IE && (e.userAgent.isVersionOrHigher(9) || o.unlisten(r, e.events.EventType.DBLCLICK, this.handleDblClick),
        e.dispose(this.ieMouseEventSequenceSimulator_),
        this.ieMouseEventSequenceSimulator_ = null))
    }
    ,
    e.ui.Control.prototype.exitDocument = function() {
        e.ui.Control.superClass_.exitDocument.call(this),
        this.keyHandler_ && this.keyHandler_.detach(),
        this.isVisible() && this.isEnabled() && this.renderer_.setFocusable(this, !1)
    }
    ,
    e.ui.Control.prototype.disposeInternal = function() {
        e.ui.Control.superClass_.disposeInternal.call(this),
        this.keyHandler_ && (this.keyHandler_.dispose(),
        delete this.keyHandler_),
        delete this.renderer_,
        this.ieMouseEventSequenceSimulator_ = this.extraClassNames_ = this.content_ = null
    }
    ,
    e.ui.Control.prototype.getContent = function() {
        return this.content_
    }
    ,
    e.ui.Control.prototype.setContent = function(e) {
        this.renderer_.setContent(this.getElement(), e),
        this.setContentInternal(e)
    }
    ,
    e.ui.Control.prototype.setContentInternal = function(e) {
        this.content_ = e
    }
    ,
    e.ui.Control.prototype.getCaption = function() {
        var t = this.getContent();
        return t ? (t = e.isString(t) ? t : e.isArray(t) ? e.array.map(t, e.dom.getRawTextContent).join("") : e.dom.getTextContent(t),
        e.string.collapseBreakingSpaces(t)) : ""
    }
    ,
    e.ui.Control.prototype.setCaption = function(e) {
        this.setContent(e)
    }
    ,
    e.ui.Control.prototype.setRightToLeft = function(t) {
        e.ui.Control.superClass_.setRightToLeft.call(this, t);
        var n = this.getElement();
        n && this.renderer_.setRightToLeft(n, t)
    }
    ,
    e.ui.Control.prototype.isAllowTextSelection = function() {
        return this.allowTextSelection_
    }
    ,
    e.ui.Control.prototype.setAllowTextSelection = function(e) {
        this.allowTextSelection_ = e;
        var t = this.getElement();
        t && this.renderer_.setAllowTextSelection(t, e)
    }
    ,
    e.ui.Control.prototype.isVisible = function() {
        return this.visible_
    }
    ,
    e.ui.Control.prototype.setVisible = function(t, n) {
        return !!(n || this.visible_ != t && this.dispatchEvent(t ? e.ui.Component.EventType.SHOW : e.ui.Component.EventType.HIDE)) && ((n = this.getElement()) && this.renderer_.setVisible(n, t),
        this.isEnabled() && this.renderer_.setFocusable(this, t),
        this.visible_ = t,
        !0)
    }
    ,
    e.ui.Control.prototype.isEnabled = function() {
        return !this.hasState(e.ui.Component.State.DISABLED)
    }
    ,
    e.ui.Control.prototype.isParentDisabled_ = function() {
        var e = this.getParent();
        return !!e && "function" == typeof e.isEnabled && !e.isEnabled()
    }
    ,
    e.ui.Control.prototype.setEnabled = function(t) {
        !this.isParentDisabled_() && this.isTransitionAllowed(e.ui.Component.State.DISABLED, !t) && (t || (this.setActive(!1),
        this.setHighlighted(!1)),
        this.isVisible() && this.renderer_.setFocusable(this, t),
        this.setState(e.ui.Component.State.DISABLED, !t, !0))
    }
    ,
    e.ui.Control.prototype.isHighlighted = function() {
        return this.hasState(e.ui.Component.State.HOVER)
    }
    ,
    e.ui.Control.prototype.setHighlighted = function(t) {
        this.isTransitionAllowed(e.ui.Component.State.HOVER, t) && this.setState(e.ui.Component.State.HOVER, t)
    }
    ,
    e.ui.Control.prototype.isActive = function() {
        return this.hasState(e.ui.Component.State.ACTIVE)
    }
    ,
    e.ui.Control.prototype.setActive = function(t) {
        this.isTransitionAllowed(e.ui.Component.State.ACTIVE, t) && this.setState(e.ui.Component.State.ACTIVE, t)
    }
    ,
    e.ui.Control.prototype.isSelected = function() {
        return this.hasState(e.ui.Component.State.SELECTED)
    }
    ,
    e.ui.Control.prototype.setSelected = function(t) {
        this.isTransitionAllowed(e.ui.Component.State.SELECTED, t) && this.setState(e.ui.Component.State.SELECTED, t)
    }
    ,
    e.ui.Control.prototype.isChecked = function() {
        return this.hasState(e.ui.Component.State.CHECKED)
    }
    ,
    e.ui.Control.prototype.setChecked = function(t) {
        this.isTransitionAllowed(e.ui.Component.State.CHECKED, t) && this.setState(e.ui.Component.State.CHECKED, t)
    }
    ,
    e.ui.Control.prototype.isFocused = function() {
        return this.hasState(e.ui.Component.State.FOCUSED)
    }
    ,
    e.ui.Control.prototype.setFocused = function(t) {
        this.isTransitionAllowed(e.ui.Component.State.FOCUSED, t) && this.setState(e.ui.Component.State.FOCUSED, t)
    }
    ,
    e.ui.Control.prototype.isOpen = function() {
        return this.hasState(e.ui.Component.State.OPENED)
    }
    ,
    e.ui.Control.prototype.setOpen = function(t) {
        this.isTransitionAllowed(e.ui.Component.State.OPENED, t) && this.setState(e.ui.Component.State.OPENED, t)
    }
    ,
    e.ui.Control.prototype.getState = function() {
        return this.state_
    }
    ,
    e.ui.Control.prototype.hasState = function(e) {
        return !!(this.state_ & e)
    }
    ,
    e.ui.Control.prototype.setState = function(t, n, o) {
        o || t != e.ui.Component.State.DISABLED ? this.isSupportedState(t) && n != this.hasState(t) && (this.renderer_.setState(this, t, n),
        this.state_ = n ? this.state_ | t : this.state_ & ~t) : this.setEnabled(!n)
    }
    ,
    e.ui.Control.prototype.setStateInternal = function(e) {
        this.state_ = e
    }
    ,
    e.ui.Control.prototype.isSupportedState = function(e) {
        return !!(this.supportedStates_ & e)
    }
    ,
    e.ui.Control.prototype.setSupportedState = function(t, n) {
        if (this.isInDocument() && this.hasState(t) && !n)
            throw Error(e.ui.Component.Error.ALREADY_RENDERED);
        !n && this.hasState(t) && this.setState(t, !1),
        this.supportedStates_ = n ? this.supportedStates_ | t : this.supportedStates_ & ~t
    }
    ,
    e.ui.Control.prototype.isAutoState = function(e) {
        return !!(this.autoStates_ & e) && this.isSupportedState(e)
    }
    ,
    e.ui.Control.prototype.setAutoStates = function(e, t) {
        this.autoStates_ = t ? this.autoStates_ | e : this.autoStates_ & ~e
    }
    ,
    e.ui.Control.prototype.isDispatchTransitionEvents = function(e) {
        return !!(this.statesWithTransitionEvents_ & e) && this.isSupportedState(e)
    }
    ,
    e.ui.Control.prototype.setDispatchTransitionEvents = function(e, t) {
        this.statesWithTransitionEvents_ = t ? this.statesWithTransitionEvents_ | e : this.statesWithTransitionEvents_ & ~e
    }
    ,
    e.ui.Control.prototype.isTransitionAllowed = function(t, n) {
        return this.isSupportedState(t) && this.hasState(t) != n && (!(this.statesWithTransitionEvents_ & t) || this.dispatchEvent(e.ui.Component.getStateTransitionEvent(t, n))) && !this.isDisposed()
    }
    ,
    e.ui.Control.prototype.handleMouseOver = function(t) {
        !e.ui.Control.isMouseEventWithinElement_(t, this.getElement()) && this.dispatchEvent(e.ui.Component.EventType.ENTER) && this.isEnabled() && this.isAutoState(e.ui.Component.State.HOVER) && this.setHighlighted(!0)
    }
    ,
    e.ui.Control.prototype.handleMouseOut = function(t) {
        !e.ui.Control.isMouseEventWithinElement_(t, this.getElement()) && this.dispatchEvent(e.ui.Component.EventType.LEAVE) && (this.isAutoState(e.ui.Component.State.ACTIVE) && this.setActive(!1),
        this.isAutoState(e.ui.Component.State.HOVER) && this.setHighlighted(!1))
    }
    ,
    e.ui.Control.prototype.preventPointerCapture_ = function(e) {
        var t = e.target;
        t.releasePointerCapture && t.releasePointerCapture(e.pointerId)
    }
    ,
    e.ui.Control.prototype.handleContextMenu = e.nullFunction,
    e.ui.Control.isMouseEventWithinElement_ = function(t, n) {
        return !!t.relatedTarget && e.dom.contains(n, t.relatedTarget)
    }
    ,
    e.ui.Control.prototype.handleMouseDown = function(t) {
        this.isEnabled() && (this.isAutoState(e.ui.Component.State.HOVER) && this.setHighlighted(!0),
        t.isMouseActionButton() && (this.isAutoState(e.ui.Component.State.ACTIVE) && this.setActive(!0),
        this.renderer_ && this.renderer_.isFocusable(this) && this.getKeyEventTarget().focus())),
        !this.isAllowTextSelection() && t.isMouseActionButton() && t.preventDefault()
    }
    ,
    e.ui.Control.prototype.handleMouseUp = function(t) {
        this.isEnabled() && (this.isAutoState(e.ui.Component.State.HOVER) && this.setHighlighted(!0),
        this.isActive() && this.performActionInternal(t) && this.isAutoState(e.ui.Component.State.ACTIVE) && this.setActive(!1))
    }
    ,
    e.ui.Control.prototype.handleDblClick = function(e) {
        this.isEnabled() && this.performActionInternal(e)
    }
    ,
    e.ui.Control.prototype.performActionInternal = function(t) {
        this.isAutoState(e.ui.Component.State.CHECKED) && this.setChecked(!this.isChecked()),
        this.isAutoState(e.ui.Component.State.SELECTED) && this.setSelected(!0),
        this.isAutoState(e.ui.Component.State.OPENED) && this.setOpen(!this.isOpen());
        var n = new e.events.Event(e.ui.Component.EventType.ACTION,this);
        return t && (n.altKey = t.altKey,
        n.ctrlKey = t.ctrlKey,
        n.metaKey = t.metaKey,
        n.shiftKey = t.shiftKey,
        n.platformModifierKey = t.platformModifierKey),
        this.dispatchEvent(n)
    }
    ,
    e.ui.Control.prototype.handleFocus = function() {
        this.isAutoState(e.ui.Component.State.FOCUSED) && this.setFocused(!0)
    }
    ,
    e.ui.Control.prototype.handleBlur = function() {
        this.isAutoState(e.ui.Component.State.ACTIVE) && this.setActive(!1),
        this.isAutoState(e.ui.Component.State.FOCUSED) && this.setFocused(!1)
    }
    ,
    e.ui.Control.prototype.handleKeyEvent = function(e) {
        return !!(this.isVisible() && this.isEnabled() && this.handleKeyEventInternal(e)) && (e.preventDefault(),
        e.stopPropagation(),
        !0)
    }
    ,
    e.ui.Control.prototype.handleKeyEventInternal = function(t) {
        return t.keyCode == e.events.KeyCodes.ENTER && this.performActionInternal(t)
    }
    ,
    e.ui.registry.setDefaultRenderer(e.ui.Control, e.ui.ControlRenderer),
    e.ui.registry.setDecoratorByClassName(e.ui.ControlRenderer.CSS_CLASS, function() {
        return new e.ui.Control(null)
    }),
    e.ui.Control.IeMouseEventSequenceSimulator_ = function(t) {
        e.Disposable.call(this),
        this.control_ = t,
        this.clickExpected_ = !1,
        this.handler_ = new e.events.EventHandler(this),
        this.registerDisposable(this.handler_);
        var n = this.control_.getElementStrict();
        t = e.ui.ComponentUtil.getMouseEventType(t),
        this.handler_.listen(n, t.MOUSEDOWN, this.handleMouseDown_).listen(n, t.MOUSEUP, this.handleMouseUp_).listen(n, e.events.EventType.CLICK, this.handleClick_)
    }
    ,
    e.inherits(e.ui.Control.IeMouseEventSequenceSimulator_, e.Disposable),
    e.ui.Control.IeMouseEventSequenceSimulator_.SYNTHETIC_EVENTS_ = !e.userAgent.IE || e.userAgent.isDocumentModeOrHigher(9),
    e.ui.Control.IeMouseEventSequenceSimulator_.prototype.handleMouseDown_ = function() {
        this.clickExpected_ = !1
    }
    ,
    e.ui.Control.IeMouseEventSequenceSimulator_.prototype.handleMouseUp_ = function() {
        this.clickExpected_ = !0
    }
    ,
    e.ui.Control.IeMouseEventSequenceSimulator_.makeLeftMouseEvent_ = function(t, n) {
        if (!e.ui.Control.IeMouseEventSequenceSimulator_.SYNTHETIC_EVENTS_)
            return t.button = e.events.BrowserEvent.MouseButton.LEFT,
            t.type = n,
            t;
        var o = document.createEvent("MouseEvents");
        return o.initMouseEvent(n, t.bubbles, t.cancelable, t.view || null, t.detail, t.screenX, t.screenY, t.clientX, t.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, e.events.BrowserEvent.MouseButton.LEFT, t.relatedTarget || null),
        o
    }
    ,
    e.ui.Control.IeMouseEventSequenceSimulator_.prototype.handleClick_ = function(t) {
        if (this.clickExpected_)
            this.clickExpected_ = !1;
        else {
            var n = t.getBrowserEvent()
              , o = n.button
              , r = n.type
              , i = e.ui.Control.IeMouseEventSequenceSimulator_.makeLeftMouseEvent_(n, e.events.EventType.MOUSEDOWN);
            this.control_.handleMouseDown(new e.events.BrowserEvent(i,t.currentTarget)),
            i = e.ui.Control.IeMouseEventSequenceSimulator_.makeLeftMouseEvent_(n, e.events.EventType.MOUSEUP),
            this.control_.handleMouseUp(new e.events.BrowserEvent(i,t.currentTarget)),
            e.ui.Control.IeMouseEventSequenceSimulator_.SYNTHETIC_EVENTS_ || (n.button = o,
            n.type = r)
        }
    }
    ,
    e.ui.Control.IeMouseEventSequenceSimulator_.prototype.disposeInternal = function() {
        this.control_ = null,
        e.ui.Control.IeMouseEventSequenceSimulator_.superClass_.disposeInternal.call(this)
    }
    ,
    e.ui.Container = function(t, n, o) {
        e.ui.Component.call(this, o),
        this.renderer_ = n || e.ui.ContainerRenderer.getInstance(),
        this.orientation_ = t || this.renderer_.getDefaultOrientation()
    }
    ,
    e.inherits(e.ui.Container, e.ui.Component),
    e.tagUnsealableClass(e.ui.Container),
    e.ui.Container.EventType = {
        AFTER_SHOW: "aftershow",
        AFTER_HIDE: "afterhide"
    },
    e.ui.Container.Orientation = {
        HORIZONTAL: "horizontal",
        VERTICAL: "vertical"
    },
    e.ui.Container.prototype.keyEventTarget_ = null,
    e.ui.Container.prototype.keyHandler_ = null,
    e.ui.Container.prototype.renderer_ = null,
    e.ui.Container.prototype.orientation_ = null,
    e.ui.Container.prototype.visible_ = !0,
    e.ui.Container.prototype.enabled_ = !0,
    e.ui.Container.prototype.focusable_ = !0,
    e.ui.Container.prototype.highlightedIndex_ = -1,
    e.ui.Container.prototype.openItem_ = null,
    e.ui.Container.prototype.mouseButtonPressed_ = !1,
    e.ui.Container.prototype.allowFocusableChildren_ = !1,
    e.ui.Container.prototype.openFollowsHighlight_ = !0,
    e.ui.Container.prototype.childElementIdMap_ = null,
    e.ui.Container.prototype.getKeyEventTarget = function() {
        return this.keyEventTarget_ || this.renderer_.getKeyEventTarget(this)
    }
    ,
    e.ui.Container.prototype.setKeyEventTarget = function(e) {
        if (!this.focusable_)
            throw Error("Can't set key event target for container that doesn't support keyboard focus!");
        var t = this.getKeyEventTarget()
          , n = this.isInDocument();
        this.keyEventTarget_ = e;
        var o = this.getKeyEventTarget();
        n && (this.keyEventTarget_ = t,
        this.enableFocusHandling_(!1),
        this.keyEventTarget_ = e,
        this.getKeyHandler().attach(o),
        this.enableFocusHandling_(!0))
    }
    ,
    e.ui.Container.prototype.getKeyHandler = function() {
        return this.keyHandler_ || (this.keyHandler_ = new e.events.KeyHandler(this.getKeyEventTarget()))
    }
    ,
    e.ui.Container.prototype.getRenderer = function() {
        return this.renderer_
    }
    ,
    e.ui.Container.prototype.setRenderer = function(t) {
        if (this.getElement())
            throw Error(e.ui.Component.Error.ALREADY_RENDERED);
        this.renderer_ = t
    }
    ,
    e.ui.Container.prototype.createDom = function() {
        this.setElementInternal(this.renderer_.createDom(this))
    }
    ,
    e.ui.Container.prototype.getContentElement = function() {
        return this.renderer_.getContentElement(this.getElement())
    }
    ,
    e.ui.Container.prototype.canDecorate = function(e) {
        return this.renderer_.canDecorate(e)
    }
    ,
    e.ui.Container.prototype.decorateInternal = function(e) {
        this.setElementInternal(this.renderer_.decorate(this, e)),
        "none" == e.style.display && (this.visible_ = !1)
    }
    ,
    e.ui.Container.prototype.enterDocument = function() {
        e.ui.Container.superClass_.enterDocument.call(this),
        this.forEachChild(function(e) {
            e.isInDocument() && this.registerChildId_(e)
        }, this);
        var t = this.getElement();
        this.renderer_.initializeDom(this),
        this.setVisible(this.visible_, !0);
        var n = e.ui.ComponentUtil.getMouseEventType(this);
        this.getHandler().listen(this, e.ui.Component.EventType.ENTER, this.handleEnterItem).listen(this, e.ui.Component.EventType.HIGHLIGHT, this.handleHighlightItem).listen(this, e.ui.Component.EventType.UNHIGHLIGHT, this.handleUnHighlightItem).listen(this, e.ui.Component.EventType.OPEN, this.handleOpenItem).listen(this, e.ui.Component.EventType.CLOSE, this.handleCloseItem).listen(t, n.MOUSEDOWN, this.handleMouseDown).listen(e.dom.getOwnerDocument(t), [n.MOUSEUP, n.MOUSECANCEL], this.handleDocumentMouseUp).listen(t, [n.MOUSEDOWN, n.MOUSEUP, n.MOUSECANCEL, e.events.EventType.MOUSEOVER, e.events.EventType.MOUSEOUT, e.events.EventType.CONTEXTMENU], this.handleChildMouseEvents),
        this.pointerEventsEnabled() && this.getHandler().listen(t, e.events.EventType.GOTPOINTERCAPTURE, this.preventPointerCapture_),
        this.isFocusable() && this.enableFocusHandling_(!0)
    }
    ,
    e.ui.Container.prototype.preventPointerCapture_ = function(e) {
        var t = e.target;
        t.releasePointerCapture && t.releasePointerCapture(e.pointerId)
    }
    ,
    e.ui.Container.prototype.enableFocusHandling_ = function(t) {
        var n = this.getHandler()
          , o = this.getKeyEventTarget();
        t ? n.listen(o, e.events.EventType.FOCUS, this.handleFocus).listen(o, e.events.EventType.BLUR, this.handleBlur).listen(this.getKeyHandler(), e.events.KeyHandler.EventType.KEY, this.handleKeyEvent) : n.unlisten(o, e.events.EventType.FOCUS, this.handleFocus).unlisten(o, e.events.EventType.BLUR, this.handleBlur).unlisten(this.getKeyHandler(), e.events.KeyHandler.EventType.KEY, this.handleKeyEvent)
    }
    ,
    e.ui.Container.prototype.exitDocument = function() {
        this.setHighlightedIndex(-1),
        this.openItem_ && this.openItem_.setOpen(!1),
        this.mouseButtonPressed_ = !1,
        e.ui.Container.superClass_.exitDocument.call(this)
    }
    ,
    e.ui.Container.prototype.disposeInternal = function() {
        e.ui.Container.superClass_.disposeInternal.call(this),
        this.keyHandler_ && (this.keyHandler_.dispose(),
        this.keyHandler_ = null),
        this.renderer_ = this.openItem_ = this.childElementIdMap_ = this.keyEventTarget_ = null
    }
    ,
    e.ui.Container.prototype.handleEnterItem = function() {
        return !0
    }
    ,
    e.ui.Container.prototype.handleHighlightItem = function(t) {
        var n = this.indexOfChild(t.target);
        if (-1 < n && n != this.highlightedIndex_) {
            var o = this.getHighlighted();
            o && o.setHighlighted(!1),
            this.highlightedIndex_ = n,
            o = this.getHighlighted(),
            this.isMouseButtonPressed() && o.setActive(!0),
            this.openFollowsHighlight_ && this.openItem_ && o != this.openItem_ && (o.isSupportedState(e.ui.Component.State.OPENED) ? o.setOpen(!0) : this.openItem_.setOpen(!1))
        }
        n = this.getElement(),
        e.asserts.assert(n, "The DOM element for the container cannot be null."),
        null != t.target.getElement() && e.a11y.aria.setState(n, e.a11y.aria.State.ACTIVEDESCENDANT, t.target.getElement().id)
    }
    ,
    e.ui.Container.prototype.handleUnHighlightItem = function(t) {
        t.target == this.getHighlighted() && (this.highlightedIndex_ = -1),
        t = this.getElement(),
        e.asserts.assert(t, "The DOM element for the container cannot be null."),
        e.a11y.aria.removeState(t, e.a11y.aria.State.ACTIVEDESCENDANT)
    }
    ,
    e.ui.Container.prototype.handleOpenItem = function(e) {
        (e = e.target) && e != this.openItem_ && e.getParent() == this && (this.openItem_ && this.openItem_.setOpen(!1),
        this.openItem_ = e)
    }
    ,
    e.ui.Container.prototype.handleCloseItem = function(t) {
        t.target == this.openItem_ && (this.openItem_ = null);
        var n = this.getElement()
          , o = t.target.getElement();
        n && t.target.isHighlighted() && o && e.a11y.aria.setActiveDescendant(n, o)
    }
    ,
    e.ui.Container.prototype.handleMouseDown = function(t) {
        this.enabled_ && this.setMouseButtonPressed(!0);
        var n = this.getKeyEventTarget();
        n && e.dom.isFocusableTabIndex(n) ? n.focus() : t.preventDefault()
    }
    ,
    e.ui.Container.prototype.handleDocumentMouseUp = function() {
        this.setMouseButtonPressed(!1)
    }
    ,
    e.ui.Container.prototype.handleChildMouseEvents = function(t) {
        var n = e.ui.ComponentUtil.getMouseEventType(this)
          , o = this.getOwnerControl(t.target);
        if (o)
            switch (t.type) {
            case n.MOUSEDOWN:
                o.handleMouseDown(t);
                break;
            case n.MOUSEUP:
            case n.MOUSECANCEL:
                o.handleMouseUp(t);
                break;
            case e.events.EventType.MOUSEOVER:
                o.handleMouseOver(t);
                break;
            case e.events.EventType.MOUSEOUT:
                o.handleMouseOut(t);
                break;
            case e.events.EventType.CONTEXTMENU:
                o.handleContextMenu(t)
            }
    }
    ,
    e.ui.Container.prototype.getOwnerControl = function(e) {
        if (this.childElementIdMap_)
            for (var t = this.getElement(); e && e !== t; ) {
                var n = e.id;
                if (n in this.childElementIdMap_)
                    return this.childElementIdMap_[n];
                e = e.parentNode
            }
        return null
    }
    ,
    e.ui.Container.prototype.handleFocus = function() {}
    ,
    e.ui.Container.prototype.handleBlur = function() {
        this.setHighlightedIndex(-1),
        this.setMouseButtonPressed(!1),
        this.openItem_ && this.openItem_.setOpen(!1)
    }
    ,
    e.ui.Container.prototype.handleKeyEvent = function(e) {
        return !(!this.isEnabled() || !this.isVisible() || 0 == this.getChildCount() && !this.keyEventTarget_ || !this.handleKeyEventInternal(e)) && (e.preventDefault(),
        e.stopPropagation(),
        !0)
    }
    ,
    e.ui.Container.prototype.handleKeyEventInternal = function(t) {
        var n = this.getHighlighted();
        if (n && "function" == typeof n.handleKeyEvent && n.handleKeyEvent(t) || this.openItem_ && this.openItem_ != n && "function" == typeof this.openItem_.handleKeyEvent && this.openItem_.handleKeyEvent(t))
            return !0;
        if (t.shiftKey || t.ctrlKey || t.metaKey || t.altKey)
            return !1;
        switch (t.keyCode) {
        case e.events.KeyCodes.ESC:
            if (!this.isFocusable())
                return !1;
            this.getKeyEventTarget().blur();
            break;
        case e.events.KeyCodes.HOME:
            this.highlightFirst();
            break;
        case e.events.KeyCodes.END:
            this.highlightLast();
            break;
        case e.events.KeyCodes.UP:
            if (this.orientation_ != e.ui.Container.Orientation.VERTICAL)
                return !1;
            this.highlightPrevious();
            break;
        case e.events.KeyCodes.LEFT:
            if (this.orientation_ != e.ui.Container.Orientation.HORIZONTAL)
                return !1;
            this.isRightToLeft() ? this.highlightNext() : this.highlightPrevious();
            break;
        case e.events.KeyCodes.DOWN:
            if (this.orientation_ != e.ui.Container.Orientation.VERTICAL)
                return !1;
            this.highlightNext();
            break;
        case e.events.KeyCodes.RIGHT:
            if (this.orientation_ != e.ui.Container.Orientation.HORIZONTAL)
                return !1;
            this.isRightToLeft() ? this.highlightPrevious() : this.highlightNext();
            break;
        default:
            return !1
        }
        return !0
    }
    ,
    e.ui.Container.prototype.registerChildId_ = function(e) {
        var t = e.getElement();
        t = t.id || (t.id = e.getId()),
        this.childElementIdMap_ || (this.childElementIdMap_ = {}),
        this.childElementIdMap_[t] = e
    }
    ,
    e.ui.Container.prototype.addChild = function(t, n) {
        e.asserts.assertInstanceof(t, e.ui.Control, "The child of a container must be a control"),
        e.ui.Container.superClass_.addChild.call(this, t, n)
    }
    ,
    e.ui.Container.prototype.addChildAt = function(t, n, o) {
        e.asserts.assertInstanceof(t, e.ui.Control),
        t.setDispatchTransitionEvents(e.ui.Component.State.HOVER, !0),
        t.setDispatchTransitionEvents(e.ui.Component.State.OPENED, !0),
        !this.isFocusable() && this.isFocusableChildrenAllowed() || t.setSupportedState(e.ui.Component.State.FOCUSED, !1),
        t.setHandleMouseEvents(!1);
        var r = t.getParent() == this ? this.indexOfChild(t) : -1;
        e.ui.Container.superClass_.addChildAt.call(this, t, n, o),
        t.isInDocument() && this.isInDocument() && this.registerChildId_(t),
        this.updateHighlightedIndex_(r, n)
    }
    ,
    e.ui.Container.prototype.updateHighlightedIndex_ = function(e, t) {
        -1 == e && (e = this.getChildCount()),
        e == this.highlightedIndex_ ? this.highlightedIndex_ = Math.min(this.getChildCount() - 1, t) : e > this.highlightedIndex_ && t <= this.highlightedIndex_ ? this.highlightedIndex_++ : e < this.highlightedIndex_ && t > this.highlightedIndex_ && this.highlightedIndex_--
    }
    ,
    e.ui.Container.prototype.removeChild = function(t, n) {
        if (t = e.isString(t) ? this.getChild(t) : t,
        e.asserts.assertInstanceof(t, e.ui.Control),
        t) {
            var o = this.indexOfChild(t);
            -1 != o && (o == this.highlightedIndex_ ? (t.setHighlighted(!1),
            this.highlightedIndex_ = -1) : o < this.highlightedIndex_ && this.highlightedIndex_--),
            (o = t.getElement()) && o.id && this.childElementIdMap_ && e.object.remove(this.childElementIdMap_, o.id)
        }
        return (t = e.ui.Container.superClass_.removeChild.call(this, t, n)).setHandleMouseEvents(!0),
        t
    }
    ,
    e.ui.Container.prototype.getOrientation = function() {
        return this.orientation_
    }
    ,
    e.ui.Container.prototype.setOrientation = function(t) {
        if (this.getElement())
            throw Error(e.ui.Component.Error.ALREADY_RENDERED);
        this.orientation_ = t
    }
    ,
    e.ui.Container.prototype.isVisible = function() {
        return this.visible_
    }
    ,
    e.ui.Container.prototype.setVisible = function(t, n) {
        if (n || this.visible_ != t && this.dispatchEvent(t ? e.ui.Component.EventType.SHOW : e.ui.Component.EventType.HIDE)) {
            this.visible_ = t;
            var o = this.getElement();
            return o && (e.style.setElementShown(o, t),
            this.isFocusable() && this.renderer_.enableTabIndex(this.getKeyEventTarget(), this.enabled_ && this.visible_),
            n || this.dispatchEvent(this.visible_ ? e.ui.Container.EventType.AFTER_SHOW : e.ui.Container.EventType.AFTER_HIDE)),
            !0
        }
        return !1
    }
    ,
    e.ui.Container.prototype.isEnabled = function() {
        return this.enabled_
    }
    ,
    e.ui.Container.prototype.setEnabled = function(t) {
        this.enabled_ != t && this.dispatchEvent(t ? e.ui.Component.EventType.ENABLE : e.ui.Component.EventType.DISABLE) && (t ? (this.enabled_ = !0,
        this.forEachChild(function(e) {
            e.wasDisabled ? delete e.wasDisabled : e.setEnabled(!0)
        })) : (this.forEachChild(function(e) {
            e.isEnabled() ? e.setEnabled(!1) : e.wasDisabled = !0
        }),
        this.enabled_ = !1,
        this.setMouseButtonPressed(!1)),
        this.isFocusable() && this.renderer_.enableTabIndex(this.getKeyEventTarget(), t && this.visible_))
    }
    ,
    e.ui.Container.prototype.isFocusable = function() {
        return this.focusable_
    }
    ,
    e.ui.Container.prototype.setFocusable = function(e) {
        e != this.focusable_ && this.isInDocument() && this.enableFocusHandling_(e),
        this.focusable_ = e,
        this.enabled_ && this.visible_ && this.renderer_.enableTabIndex(this.getKeyEventTarget(), e)
    }
    ,
    e.ui.Container.prototype.isFocusableChildrenAllowed = function() {
        return this.allowFocusableChildren_
    }
    ,
    e.ui.Container.prototype.setFocusableChildrenAllowed = function(e) {
        this.allowFocusableChildren_ = e
    }
    ,
    e.ui.Container.prototype.isOpenFollowsHighlight = function() {
        return this.openFollowsHighlight_
    }
    ,
    e.ui.Container.prototype.setOpenFollowsHighlight = function(e) {
        this.openFollowsHighlight_ = e
    }
    ,
    e.ui.Container.prototype.getHighlightedIndex = function() {
        return this.highlightedIndex_
    }
    ,
    e.ui.Container.prototype.setHighlightedIndex = function(e) {
        (e = this.getChildAt(e)) ? e.setHighlighted(!0) : -1 < this.highlightedIndex_ && this.getHighlighted().setHighlighted(!1)
    }
    ,
    e.ui.Container.prototype.setHighlighted = function(e) {
        this.setHighlightedIndex(this.indexOfChild(e))
    }
    ,
    e.ui.Container.prototype.getHighlighted = function() {
        return this.getChildAt(this.highlightedIndex_)
    }
    ,
    e.ui.Container.prototype.highlightFirst = function() {
        this.highlightHelper(function(e, t) {
            return (e + 1) % t
        }, this.getChildCount() - 1)
    }
    ,
    e.ui.Container.prototype.highlightLast = function() {
        this.highlightHelper(function(e, t) {
            return 0 > --e ? t - 1 : e
        }, 0)
    }
    ,
    e.ui.Container.prototype.highlightNext = function() {
        this.highlightHelper(function(e, t) {
            return (e + 1) % t
        }, this.highlightedIndex_)
    }
    ,
    e.ui.Container.prototype.highlightPrevious = function() {
        this.highlightHelper(function(e, t) {
            return 0 > --e ? t - 1 : e
        }, this.highlightedIndex_)
    }
    ,
    e.ui.Container.prototype.highlightHelper = function(e, t) {
        t = 0 > t ? this.indexOfChild(this.openItem_) : t;
        var n = this.getChildCount();
        t = e.call(this, t, n);
        for (var o = 0; o <= n; ) {
            var r = this.getChildAt(t);
            if (r && this.canHighlightItem(r))
                return this.setHighlightedIndexFromKeyEvent(t),
                !0;
            o++,
            t = e.call(this, t, n)
        }
        return !1
    }
    ,
    e.ui.Container.prototype.canHighlightItem = function(t) {
        return t.isVisible() && t.isEnabled() && t.isSupportedState(e.ui.Component.State.HOVER)
    }
    ,
    e.ui.Container.prototype.setHighlightedIndexFromKeyEvent = function(e) {
        this.setHighlightedIndex(e)
    }
    ,
    e.ui.Container.prototype.getOpenItem = function() {
        return this.openItem_
    }
    ,
    e.ui.Container.prototype.isMouseButtonPressed = function() {
        return this.mouseButtonPressed_
    }
    ,
    e.ui.Container.prototype.setMouseButtonPressed = function(e) {
        this.mouseButtonPressed_ = e
    }
    ,
    e.ui.MenuHeaderRenderer = function() {
        e.ui.ControlRenderer.call(this)
    }
    ,
    e.inherits(e.ui.MenuHeaderRenderer, e.ui.ControlRenderer),
    e.addSingletonGetter(e.ui.MenuHeaderRenderer),
    e.ui.MenuHeaderRenderer.CSS_CLASS = "goog-menuheader",
    e.ui.MenuHeaderRenderer.prototype.getCssClass = function() {
        return e.ui.MenuHeaderRenderer.CSS_CLASS
    }
    ,
    e.ui.MenuHeader = function(t, n, o) {
        e.ui.Control.call(this, t, o || e.ui.MenuHeaderRenderer.getInstance(), n),
        this.setSupportedState(e.ui.Component.State.DISABLED, !1),
        this.setSupportedState(e.ui.Component.State.HOVER, !1),
        this.setSupportedState(e.ui.Component.State.ACTIVE, !1),
        this.setSupportedState(e.ui.Component.State.FOCUSED, !1),
        this.setStateInternal(e.ui.Component.State.DISABLED)
    }
    ,
    e.inherits(e.ui.MenuHeader, e.ui.Control),
    e.ui.registry.setDecoratorByClassName(e.ui.MenuHeaderRenderer.CSS_CLASS, function() {
        return new e.ui.MenuHeader(null)
    }),
    e.ui.MenuItemRenderer = function() {
        e.ui.ControlRenderer.call(this),
        this.classNameCache_ = []
    }
    ,
    e.inherits(e.ui.MenuItemRenderer, e.ui.ControlRenderer),
    e.addSingletonGetter(e.ui.MenuItemRenderer),
    e.ui.MenuItemRenderer.CSS_CLASS = "goog-menuitem",
    e.ui.MenuItemRenderer.CompositeCssClassIndex_ = {
        HOVER: 0,
        CHECKBOX: 1,
        CONTENT: 2
    },
    e.ui.MenuItemRenderer.prototype.getCompositeCssClass_ = function(t) {
        var n = this.classNameCache_[t];
        if (!n) {
            switch (t) {
            case e.ui.MenuItemRenderer.CompositeCssClassIndex_.HOVER:
                n = this.getStructuralCssClass() + "-highlight";
                break;
            case e.ui.MenuItemRenderer.CompositeCssClassIndex_.CHECKBOX:
                n = this.getStructuralCssClass() + "-checkbox";
                break;
            case e.ui.MenuItemRenderer.CompositeCssClassIndex_.CONTENT:
                n = this.getStructuralCssClass() + "-content"
            }
            this.classNameCache_[t] = n
        }
        return n
    }
    ,
    e.ui.MenuItemRenderer.prototype.getAriaRole = function() {
        return e.a11y.aria.Role.MENU_ITEM
    }
    ,
    e.ui.MenuItemRenderer.prototype.createDom = function(t) {
        var n = t.getDomHelper().createDom("DIV", this.getClassNames(t).join(" "), this.createContent(t.getContent(), t.getDomHelper()));
        return this.setEnableCheckBoxStructure(t, n, t.isSupportedState(e.ui.Component.State.SELECTED) || t.isSupportedState(e.ui.Component.State.CHECKED)),
        n
    }
    ,
    e.ui.MenuItemRenderer.prototype.getContentElement = function(e) {
        return e && e.firstChild
    }
    ,
    e.ui.MenuItemRenderer.prototype.decorate = function(t, n) {
        return e.asserts.assert(n),
        this.hasContentStructure(n) || n.appendChild(this.createContent(n.childNodes, t.getDomHelper())),
        e.dom.classlist.contains(n, "goog-option") && (t.setCheckable(!0),
        this.setCheckable(t, n, !0)),
        e.ui.MenuItemRenderer.superClass_.decorate.call(this, t, n)
    }
    ,
    e.ui.MenuItemRenderer.prototype.setContent = function(t, n) {
        var o = this.getContentElement(t)
          , r = this.hasCheckBoxStructure(t) ? o.firstChild : null;
        e.ui.MenuItemRenderer.superClass_.setContent.call(this, t, n),
        r && !this.hasCheckBoxStructure(t) && o.insertBefore(r, o.firstChild || null)
    }
    ,
    e.ui.MenuItemRenderer.prototype.hasContentStructure = function(t) {
        t = e.dom.getFirstElementChild(t);
        var n = this.getCompositeCssClass_(e.ui.MenuItemRenderer.CompositeCssClassIndex_.CONTENT);
        return !!t && e.dom.classlist.contains(t, n)
    }
    ,
    e.ui.MenuItemRenderer.prototype.createContent = function(t, n) {
        var o = this.getCompositeCssClass_(e.ui.MenuItemRenderer.CompositeCssClassIndex_.CONTENT);
        return n.createDom("DIV", o, t)
    }
    ,
    e.ui.MenuItemRenderer.prototype.setSelectable = function(e, t, n) {
        e && t && this.setEnableCheckBoxStructure(e, t, n)
    }
    ,
    e.ui.MenuItemRenderer.prototype.setCheckable = function(e, t, n) {
        e && t && this.setEnableCheckBoxStructure(e, t, n)
    }
    ,
    e.ui.MenuItemRenderer.prototype.hasCheckBoxStructure = function(t) {
        if (t = this.getContentElement(t)) {
            t = t.firstChild;
            var n = this.getCompositeCssClass_(e.ui.MenuItemRenderer.CompositeCssClassIndex_.CHECKBOX);
            return !!t && e.dom.isElement(t) && e.dom.classlist.contains(t, n)
        }
        return !1
    }
    ,
    e.ui.MenuItemRenderer.prototype.setEnableCheckBoxStructure = function(t, n, o) {
        this.setAriaRole(n, t.getPreferredAriaRole()),
        this.setAriaStates(t, n),
        o != this.hasCheckBoxStructure(n) && (e.dom.classlist.enable(n, "goog-option", o),
        n = this.getContentElement(n),
        o ? (o = this.getCompositeCssClass_(e.ui.MenuItemRenderer.CompositeCssClassIndex_.CHECKBOX),
        n.insertBefore(t.getDomHelper().createDom("DIV", o), n.firstChild || null)) : n.removeChild(n.firstChild))
    }
    ,
    e.ui.MenuItemRenderer.prototype.getClassForState = function(t) {
        switch (t) {
        case e.ui.Component.State.HOVER:
            return this.getCompositeCssClass_(e.ui.MenuItemRenderer.CompositeCssClassIndex_.HOVER);
        case e.ui.Component.State.CHECKED:
        case e.ui.Component.State.SELECTED:
            return "goog-option-selected";
        default:
            return e.ui.MenuItemRenderer.superClass_.getClassForState.call(this, t)
        }
    }
    ,
    e.ui.MenuItemRenderer.prototype.getStateFromClass = function(t) {
        var n = this.getCompositeCssClass_(e.ui.MenuItemRenderer.CompositeCssClassIndex_.HOVER);
        switch (t) {
        case "goog-option-selected":
            return e.ui.Component.State.CHECKED;
        case n:
            return e.ui.Component.State.HOVER;
        default:
            return e.ui.MenuItemRenderer.superClass_.getStateFromClass.call(this, t)
        }
    }
    ,
    e.ui.MenuItemRenderer.prototype.getCssClass = function() {
        return e.ui.MenuItemRenderer.CSS_CLASS
    }
    ,
    e.ui.MenuItem = function(t, n, o, r) {
        e.ui.Control.call(this, t, r || e.ui.MenuItemRenderer.getInstance(), o),
        this.setValue(n)
    }
    ,
    e.inherits(e.ui.MenuItem, e.ui.Control),
    e.tagUnsealableClass(e.ui.MenuItem),
    e.ui.MenuItem.MNEMONIC_WRAPPER_CLASS_ = "goog-menuitem-mnemonic-separator",
    e.ui.MenuItem.ACCELERATOR_CLASS = "goog-menuitem-accel",
    e.ui.MenuItem.prototype.getValue = function() {
        var e = this.getModel();
        return null != e ? e : this.getCaption()
    }
    ,
    e.ui.MenuItem.prototype.setValue = function(e) {
        this.setModel(e)
    }
    ,
    e.ui.MenuItem.prototype.setSupportedState = function(t, n) {
        switch (e.ui.MenuItem.superClass_.setSupportedState.call(this, t, n),
        t) {
        case e.ui.Component.State.SELECTED:
            this.setSelectableInternal_(n);
            break;
        case e.ui.Component.State.CHECKED:
            this.setCheckableInternal_(n)
        }
    }
    ,
    e.ui.MenuItem.prototype.setSelectable = function(t) {
        this.setSupportedState(e.ui.Component.State.SELECTED, t)
    }
    ,
    e.ui.MenuItem.prototype.setSelectableInternal_ = function(e) {
        this.isChecked() && !e && this.setChecked(!1);
        var t = this.getElement();
        t && this.getRenderer().setSelectable(this, t, e)
    }
    ,
    e.ui.MenuItem.prototype.setCheckable = function(t) {
        this.setSupportedState(e.ui.Component.State.CHECKED, t)
    }
    ,
    e.ui.MenuItem.prototype.setCheckableInternal_ = function(e) {
        var t = this.getElement();
        t && this.getRenderer().setCheckable(this, t, e)
    }
    ,
    e.ui.MenuItem.prototype.getCaption = function() {
        var t = this.getContent();
        if (e.isArray(t)) {
            var n = e.ui.MenuItem.ACCELERATOR_CLASS
              , o = e.ui.MenuItem.MNEMONIC_WRAPPER_CLASS_;
            return t = e.array.map(t, function(t) {
                return e.dom.isElement(t) && (e.dom.classlist.contains(t, n) || e.dom.classlist.contains(t, o)) ? "" : e.dom.getRawTextContent(t)
            }).join(""),
            e.string.collapseBreakingSpaces(t)
        }
        return e.ui.MenuItem.superClass_.getCaption.call(this)
    }
    ,
    e.ui.MenuItem.prototype.getAccelerator = function() {
        var t = this.getDomHelper()
          , n = this.getContent();
        return e.isArray(n) && (n = e.array.find(n, function(t) {
            return e.dom.classlist.contains(t, e.ui.MenuItem.ACCELERATOR_CLASS)
        })) ? t.getTextContent(n) : null
    }
    ,
    e.ui.MenuItem.prototype.handleMouseUp = function(t) {
        var n = this.getParent();
        if (n) {
            var o = n.openingCoords;
            if (n.openingCoords = null,
            o && e.isNumber(t.clientX) && (n = new e.math.Coordinate(t.clientX,t.clientY),
            e.math.Coordinate.equals(o, n)))
                return
        }
        e.ui.MenuItem.superClass_.handleMouseUp.call(this, t)
    }
    ,
    e.ui.MenuItem.prototype.handleKeyEventInternal = function(t) {
        return !(t.keyCode != this.getMnemonic() || !this.performActionInternal(t)) || e.ui.MenuItem.superClass_.handleKeyEventInternal.call(this, t)
    }
    ,
    e.ui.MenuItem.prototype.setMnemonic = function(e) {
        this.mnemonicKey_ = e
    }
    ,
    e.ui.MenuItem.prototype.getMnemonic = function() {
        return this.mnemonicKey_
    }
    ,
    e.ui.registry.setDecoratorByClassName(e.ui.MenuItemRenderer.CSS_CLASS, function() {
        return new e.ui.MenuItem(null)
    }),
    e.ui.MenuItem.prototype.getPreferredAriaRole = function() {
        return this.isSupportedState(e.ui.Component.State.CHECKED) ? e.a11y.aria.Role.MENU_ITEM_CHECKBOX : this.isSupportedState(e.ui.Component.State.SELECTED) ? e.a11y.aria.Role.MENU_ITEM_RADIO : e.ui.MenuItem.superClass_.getPreferredAriaRole.call(this)
    }
    ,
    e.ui.MenuItem.prototype.getParent = function() {
        return e.ui.Control.prototype.getParent.call(this)
    }
    ,
    e.ui.MenuItem.prototype.getParentEventTarget = function() {
        return e.ui.Control.prototype.getParentEventTarget.call(this)
    }
    ,
    e.ui.MenuSeparatorRenderer = function() {
        e.ui.ControlRenderer.call(this)
    }
    ,
    e.inherits(e.ui.MenuSeparatorRenderer, e.ui.ControlRenderer),
    e.addSingletonGetter(e.ui.MenuSeparatorRenderer),
    e.ui.MenuSeparatorRenderer.CSS_CLASS = "goog-menuseparator",
    e.ui.MenuSeparatorRenderer.prototype.createDom = function(e) {
        return e.getDomHelper().createDom("DIV", this.getCssClass())
    }
    ,
    e.ui.MenuSeparatorRenderer.prototype.decorate = function(t, n) {
        if (n.id && t.setId(n.id),
        "HR" == n.tagName) {
            var o = n;
            n = this.createDom(t),
            e.dom.insertSiblingBefore(n, o),
            e.dom.removeNode(o)
        } else
            e.dom.classlist.add(n, this.getCssClass());
        return n
    }
    ,
    e.ui.MenuSeparatorRenderer.prototype.setContent = function() {}
    ,
    e.ui.MenuSeparatorRenderer.prototype.getCssClass = function() {
        return e.ui.MenuSeparatorRenderer.CSS_CLASS
    }
    ,
    e.ui.Separator = function(t, n) {
        e.ui.Control.call(this, null, t || e.ui.MenuSeparatorRenderer.getInstance(), n),
        this.setSupportedState(e.ui.Component.State.DISABLED, !1),
        this.setSupportedState(e.ui.Component.State.HOVER, !1),
        this.setSupportedState(e.ui.Component.State.ACTIVE, !1),
        this.setSupportedState(e.ui.Component.State.FOCUSED, !1),
        this.setStateInternal(e.ui.Component.State.DISABLED)
    }
    ,
    e.inherits(e.ui.Separator, e.ui.Control),
    e.ui.Separator.prototype.enterDocument = function() {
        e.ui.Separator.superClass_.enterDocument.call(this);
        var t = this.getElement();
        e.asserts.assert(t, "The DOM element for the separator cannot be null."),
        e.a11y.aria.setRole(t, "separator")
    }
    ,
    e.ui.registry.setDecoratorByClassName(e.ui.MenuSeparatorRenderer.CSS_CLASS, function() {
        return new e.ui.Separator
    }),
    e.ui.MenuRenderer = function(t) {
        e.ui.ContainerRenderer.call(this, t || e.a11y.aria.Role.MENU)
    }
    ,
    e.inherits(e.ui.MenuRenderer, e.ui.ContainerRenderer),
    e.addSingletonGetter(e.ui.MenuRenderer),
    e.ui.MenuRenderer.CSS_CLASS = "goog-menu",
    e.ui.MenuRenderer.prototype.canDecorate = function(t) {
        return "UL" == t.tagName || e.ui.MenuRenderer.superClass_.canDecorate.call(this, t)
    }
    ,
    e.ui.MenuRenderer.prototype.getDecoratorForChild = function(t) {
        return "HR" == t.tagName ? new e.ui.Separator : e.ui.MenuRenderer.superClass_.getDecoratorForChild.call(this, t)
    }
    ,
    e.ui.MenuRenderer.prototype.containsElement = function(t, n) {
        return e.dom.contains(t.getElement(), n)
    }
    ,
    e.ui.MenuRenderer.prototype.getCssClass = function() {
        return e.ui.MenuRenderer.CSS_CLASS
    }
    ,
    e.ui.MenuRenderer.prototype.initializeDom = function(t) {
        e.ui.MenuRenderer.superClass_.initializeDom.call(this, t),
        t = t.getElement(),
        e.asserts.assert(t, "The menu DOM element cannot be null."),
        e.a11y.aria.setState(t, e.a11y.aria.State.HASPOPUP, "true")
    }
    ,
    e.ui.MenuSeparator = function(t) {
        e.ui.Separator.call(this, e.ui.MenuSeparatorRenderer.getInstance(), t)
    }
    ,
    e.inherits(e.ui.MenuSeparator, e.ui.Separator),
    e.ui.registry.setDecoratorByClassName(e.ui.MenuSeparatorRenderer.CSS_CLASS, function() {
        return new e.ui.Separator
    }),
    e.ui.Menu = function(t, n) {
        e.ui.Container.call(this, e.ui.Container.Orientation.VERTICAL, n || e.ui.MenuRenderer.getInstance(), t),
        this.setFocusable(!1)
    }
    ,
    e.inherits(e.ui.Menu, e.ui.Container),
    e.tagUnsealableClass(e.ui.Menu),
    e.ui.Menu.EventType = {
        BEFORE_SHOW: e.ui.Component.EventType.BEFORE_SHOW,
        SHOW: e.ui.Component.EventType.SHOW,
        BEFORE_HIDE: e.ui.Component.EventType.HIDE,
        HIDE: e.ui.Component.EventType.HIDE
    },
    e.ui.Menu.CSS_CLASS = e.ui.MenuRenderer.CSS_CLASS,
    e.ui.Menu.prototype.allowAutoFocus_ = !0,
    e.ui.Menu.prototype.allowHighlightDisabled_ = !1,
    e.ui.Menu.prototype.getCssClass = function() {
        return this.getRenderer().getCssClass()
    }
    ,
    e.ui.Menu.prototype.containsElement = function(e) {
        if (this.getRenderer().containsElement(this, e))
            return !0;
        for (var t = 0, n = this.getChildCount(); t < n; t++) {
            var o = this.getChildAt(t);
            if ("function" == typeof o.containsElement && o.containsElement(e))
                return !0
        }
        return !1
    }
    ,
    e.ui.Menu.prototype.addItem = function(e) {
        this.addChild(e, !0)
    }
    ,
    e.ui.Menu.prototype.addItemAt = function(e, t) {
        this.addChildAt(e, t, !0)
    }
    ,
    e.ui.Menu.prototype.removeItem = function(e) {
        (e = this.removeChild(e, !0)) && e.dispose()
    }
    ,
    e.ui.Menu.prototype.removeItemAt = function(e) {
        (e = this.removeChildAt(e, !0)) && e.dispose()
    }
    ,
    e.ui.Menu.prototype.getItemAt = function(e) {
        return this.getChildAt(e)
    }
    ,
    e.ui.Menu.prototype.getItemCount = function() {
        return this.getChildCount()
    }
    ,
    e.ui.Menu.prototype.getItems = function() {
        var e = [];
        return this.forEachChild(function(t) {
            e.push(t)
        }),
        e
    }
    ,
    e.ui.Menu.prototype.setPosition = function(t, n) {
        var o = this.isVisible();
        o || e.style.setElementShown(this.getElement(), !0),
        e.style.setPageOffset(this.getElement(), t, n),
        o || e.style.setElementShown(this.getElement(), !1)
    }
    ,
    e.ui.Menu.prototype.getPosition = function() {
        return this.isVisible() ? e.style.getPageOffset(this.getElement()) : null
    }
    ,
    e.ui.Menu.prototype.setAllowAutoFocus = function(e) {
        (this.allowAutoFocus_ = e) && this.setFocusable(!0)
    }
    ,
    e.ui.Menu.prototype.getAllowAutoFocus = function() {
        return this.allowAutoFocus_
    }
    ,
    e.ui.Menu.prototype.setAllowHighlightDisabled = function(e) {
        this.allowHighlightDisabled_ = e
    }
    ,
    e.ui.Menu.prototype.getAllowHighlightDisabled = function() {
        return this.allowHighlightDisabled_
    }
    ,
    e.ui.Menu.prototype.setVisible = function(t, n, o) {
        return (n = e.ui.Menu.superClass_.setVisible.call(this, t, n)) && t && this.isInDocument() && this.allowAutoFocus_ && this.getKeyEventTarget().focus(),
        t && o && e.isNumber(o.clientX) ? this.openingCoords = new e.math.Coordinate(o.clientX,o.clientY) : this.openingCoords = null,
        n
    }
    ,
    e.ui.Menu.prototype.handleEnterItem = function(t) {
        return this.allowAutoFocus_ && this.getKeyEventTarget().focus(),
        e.ui.Menu.superClass_.handleEnterItem.call(this, t)
    }
    ,
    e.ui.Menu.prototype.highlightNextPrefix = function(t) {
        var n = new RegExp("^" + e.string.regExpEscape(t),"i");
        return this.highlightHelper(function(e, t) {
            var o = 0 > e ? 0 : e
              , r = !1;
            do {
                ++e == t && (e = 0,
                r = !0);
                var i = this.getChildAt(e).getCaption();
                if (i && i.match(n))
                    return e
            } while (!r || e != o);
            return this.getHighlightedIndex()
        }, this.getHighlightedIndex())
    }
    ,
    e.ui.Menu.prototype.canHighlightItem = function(t) {
        return (this.allowHighlightDisabled_ || t.isEnabled()) && t.isVisible() && t.isSupportedState(e.ui.Component.State.HOVER)
    }
    ,
    e.ui.Menu.prototype.decorateInternal = function(t) {
        this.decorateContent(t),
        e.ui.Menu.superClass_.decorateInternal.call(this, t)
    }
    ,
    e.ui.Menu.prototype.handleKeyEventInternal = function(t) {
        var n = e.ui.Menu.superClass_.handleKeyEventInternal.call(this, t);
        return n || this.forEachChild(function(e) {
            !n && e.getMnemonic && e.getMnemonic() == t.keyCode && (this.isEnabled() && this.setHighlighted(e),
            n = e.handleKeyEvent(t))
        }, this),
        n
    }
    ,
    e.ui.Menu.prototype.setHighlightedIndex = function(t) {
        e.ui.Menu.superClass_.setHighlightedIndex.call(this, t),
        (t = this.getChildAt(t)) && e.style.scrollIntoContainerView(t.getElement(), this.getElement())
    }
    ,
    e.ui.Menu.prototype.decorateContent = function(e) {
        for (var t = this.getRenderer(), n = (e = this.getDomHelper().getElementsByTagNameAndClass("DIV", t.getCssClass() + "-content", e)).length, o = 0; o < n; o++)
            t.decorateChildren(this, e[o])
    }
    ,
    z.ContextMenu = {},
    z.ContextMenu.currentBlock = null,
    z.ContextMenu.show = function(t, n) {
        if (z.WidgetDiv.show(z.ContextMenu, null),
        n.length) {
            for (var o, r = new e.ui.Menu, i = 0; o = n[i]; i++) {
                var s = new e.ui.MenuItem(o.text);
                r.addChild(s, !0),
                s.setEnabled(o.enabled),
                o.enabled && e.events.listen(s, e.ui.Component.EventType.ACTION, function(e) {
                    return function() {
                        z.doCommand(e)
                    }
                }(o.callback))
            }
            e.events.listen(r, e.ui.Component.EventType.ACTION, z.ContextMenu.hide),
            n = e.dom.getViewportSize(),
            o = e.style.getViewportPageOffset(document),
            r.render(z.WidgetDiv.DIV);
            var a = r.getElement();
            z.addClass_(a, "blocklyContextMenu"),
            s = e.style.getSize(a),
            i = t.clientX + o.x;
            var l = t.clientY + o.y;
            t.clientY + s.height >= n.height && (l -= s.height),
            z.RTL ? s.width >= t.clientX && (i += s.width) : t.clientX + s.width >= n.width && (i -= s.width),
            z.WidgetDiv.position(i, l, n, o),
            r.setAllowAutoFocus(!0),
            setTimeout(function() {
                a.focus()
            }, 1),
            z.ContextMenu.currentBlock = null
        } else
            z.ContextMenu.hide()
    }
    ,
    z.ContextMenu.hide = function() {
        z.WidgetDiv.hideIfOwner(z.ContextMenu),
        z.ContextMenu.currentBlock = null
    }
    ,
    z.ContextMenu.callbackFactory = function(e, t) {
        return function() {
            var n = z.Xml.domToBlock(e.workspace, t)
              , o = e.getRelativeToSurfaceXY();
            o.x = z.RTL ? o.x - z.SNAP_RADIUS : o.x + z.SNAP_RADIUS,
            o.y += 2 * z.SNAP_RADIUS,
            n.moveBy(o.x, o.y),
            n.select()
        }
    }
    ,
    z.Field = function(e) {
        this.sourceBlock_ = null,
        this.fieldGroup_ = z.createSvgElement("g", {}, null),
        this.borderRect_ = z.createSvgElement("rect", {
            rx: 4,
            ry: 4,
            x: -z.BlockSvg.SEP_SPACE_X / 2,
            y: -16,
            height: 22
        }, this.fieldGroup_),
        this.textElement_ = z.createSvgElement("text", {
            class: "blocklyText"
        }, this.fieldGroup_),
        this.size_ = {
            height: 25,
            width: 0
        },
        this.setText(e),
        this.visible_ = !0
    }
    ,
    z.Field.prototype.clone = function() {
        e.asserts.fail("There should never be an instance of Field, only its derived classes.")
    }
    ,
    z.Field.NBSP = " ",
    z.Field.prototype.EDITABLE = !0,
    z.Field.prototype.init = function(e) {
        if (this.sourceBlock_)
            throw "Field has already been initialized once.";
        this.sourceBlock_ = e,
        this.updateEditable(),
        e.getSvgRoot().appendChild(this.fieldGroup_),
        this.mouseUpWrapper_ = z.bindEvent_(this.fieldGroup_, "mouseup", this, this.onMouseUp_),
        this.setText(null)
    }
    ,
    z.Field.prototype.dispose = function() {
        this.mouseUpWrapper_ && (z.unbindEvent_(this.mouseUpWrapper_),
        this.mouseUpWrapper_ = null),
        this.sourceBlock_ = null,
        e.dom.removeNode(this.fieldGroup_),
        this.borderRect_ = this.textElement_ = this.fieldGroup_ = null
    }
    ,
    z.Field.prototype.updateEditable = function() {
        this.EDITABLE && (this.sourceBlock_.isEditable() ? (z.addClass_(this.fieldGroup_, "blocklyEditableText"),
        z.removeClass_(this.fieldGroup_, "blocklyNoNEditableText"),
        this.fieldGroup_.style.cursor = this.CURSOR) : (z.addClass_(this.fieldGroup_, "blocklyNonEditableText"),
        z.removeClass_(this.fieldGroup_, "blocklyEditableText"),
        this.fieldGroup_.style.cursor = ""))
    }
    ,
    z.Field.prototype.isVisible = function() {
        return this.visible_
    }
    ,
    z.Field.prototype.setVisible = function(e) {
        this.visible_ = e,
        this.getRootElement().style.display = e ? "block" : "none",
        this.render_()
    }
    ,
    z.Field.prototype.getRootElement = function() {
        return this.fieldGroup_
    }
    ,
    z.Field.prototype.render_ = function() {
        try {
            var e = this.textElement_.getComputedTextLength()
        } catch (t) {
            e = 8 * this.textElement_.childNodes[0].length
        }
        this.borderRect_ && this.borderRect_.setAttribute("width", e + z.BlockSvg.SEP_SPACE_X),
        this.size_.width = e
    }
    ,
    z.Field.prototype.getSize = function() {
        return this.size_.width || this.render_(),
        this.size_
    }
    ,
    z.Field.prototype.getText = function() {
        return this.text_
    }
    ,
    z.Field.prototype.setText = function(e) {
        null !== e && e !== this.text_ && (this.text_ = e,
        this.updateTextNode_(),
        this.sourceBlock_ && this.sourceBlock_.rendered && (this.sourceBlock_.render(),
        this.sourceBlock_.bumpNeighbours_(),
        this.sourceBlock_.workspace.fireChangeEvent()))
    }
    ,
    z.Field.prototype.updateTextNode_ = function() {
        var t = this.text_;
        e.dom.removeChildren(this.textElement_),
        t = t.replace(/\s/g, z.Field.NBSP),
        z.RTL && t && (t += "‏"),
        t || (t = z.Field.NBSP),
        t = document.createTextNode(t),
        this.textElement_.appendChild(t),
        this.size_.width = 0
    }
    ,
    z.Field.prototype.getValue = function() {
        return this.getText()
    }
    ,
    z.Field.prototype.setValue = function(e) {
        this.setText(e)
    }
    ,
    z.Field.prototype.onMouseUp_ = function(e) {
        z.isRightButton(e) || 2 != z.Block.dragMode_ && this.sourceBlock_.isEditable() && this.showEditor_()
    }
    ,
    z.Field.prototype.setTooltip = function() {}
    ,
    z.Tooltip = {},
    z.Tooltip.visible = !1,
    z.Tooltip.LIMIT = 50,
    z.Tooltip.mouseOutPid_ = 0,
    z.Tooltip.showPid_ = 0,
    z.Tooltip.lastXY_ = {
        x: 0,
        y: 0
    },
    z.Tooltip.element_ = null,
    z.Tooltip.poisonedElement_ = null,
    z.Tooltip.svgGroup_ = null,
    z.Tooltip.svgText_ = null,
    z.Tooltip.svgBackground_ = null,
    z.Tooltip.svgShadow_ = null,
    z.Tooltip.OFFSET_X = 0,
    z.Tooltip.OFFSET_Y = 10,
    z.Tooltip.RADIUS_OK = 10,
    z.Tooltip.HOVER_MS = 1e3,
    z.Tooltip.MARGINS = 5,
    z.Tooltip.createDom = function() {
        var e = z.createSvgElement("g", {
            class: "blocklyHidden"
        }, null);
        return z.Tooltip.svgGroup_ = e,
        z.Tooltip.svgShadow_ = z.createSvgElement("rect", {
            class: "blocklyTooltipShadow",
            x: 2,
            y: 2
        }, e),
        z.Tooltip.svgBackground_ = z.createSvgElement("rect", {
            class: "blocklyTooltipBackground"
        }, e),
        z.Tooltip.svgText_ = z.createSvgElement("text", {
            class: "blocklyTooltipText"
        }, e),
        e
    }
    ,
    z.Tooltip.bindMouseEvents = function(e) {
        z.bindEvent_(e, "mouseover", null, z.Tooltip.onMouseOver_),
        z.bindEvent_(e, "mouseout", null, z.Tooltip.onMouseOut_),
        z.bindEvent_(e, "mousemove", null, z.Tooltip.onMouseMove_)
    }
    ,
    z.Tooltip.onMouseOver_ = function(t) {
        for (t = t.target; !e.isString(t.tooltip) && !e.isFunction(t.tooltip); )
            t = t.tooltip;
        z.Tooltip.element_ != t && (z.Tooltip.hide(),
        z.Tooltip.poisonedElement_ = null,
        z.Tooltip.element_ = t),
        window.clearTimeout(z.Tooltip.mouseOutPid_)
    }
    ,
    z.Tooltip.onMouseOut_ = function() {
        z.Tooltip.mouseOutPid_ = window.setTimeout(function() {
            z.Tooltip.element_ = null,
            z.Tooltip.poisonedElement_ = null,
            z.Tooltip.hide()
        }, 1),
        window.clearTimeout(z.Tooltip.showPid_)
    }
    ,
    z.Tooltip.onMouseMove_ = function(e) {
        z.Tooltip.element_ && z.Tooltip.element_.tooltip && 0 == z.Block.dragMode_ && !z.WidgetDiv.isVisible() && (z.Tooltip.visible ? (e = z.mouseToSvg(e),
        Math.sqrt(Math.pow(z.Tooltip.lastXY_.x - e.x, 2) + Math.pow(z.Tooltip.lastXY_.y - e.y, 2)) > z.Tooltip.RADIUS_OK && z.Tooltip.hide()) : z.Tooltip.poisonedElement_ != z.Tooltip.element_ && (window.clearTimeout(z.Tooltip.showPid_),
        z.Tooltip.lastXY_ = z.mouseToSvg(e),
        z.Tooltip.showPid_ = window.setTimeout(z.Tooltip.show_, z.Tooltip.HOVER_MS)))
    }
    ,
    z.Tooltip.hide = function() {
        z.Tooltip.visible && (z.Tooltip.visible = !1,
        z.Tooltip.svgGroup_ && (z.Tooltip.svgGroup_.style.display = "none")),
        window.clearTimeout(z.Tooltip.showPid_)
    }
    ,
    z.Tooltip.show_ = function() {
        if (z.Tooltip.poisonedElement_ = z.Tooltip.element_,
        z.Tooltip.svgGroup_) {
            e.dom.removeChildren(z.Tooltip.svgText_);
            var t = z.Tooltip.element_.tooltip;
            e.isFunction(t) && (t = t()),
            t = (t = z.Tooltip.wrap_(t, z.Tooltip.LIMIT)).split("\n");
            for (var n = 0; n < t.length; n++) {
                var o = z.createSvgElement("tspan", {
                    dy: "1em",
                    x: z.Tooltip.MARGINS
                }, z.Tooltip.svgText_)
                  , r = document.createTextNode(t[n]);
                o.appendChild(r)
            }
            if (z.Tooltip.visible = !0,
            z.Tooltip.svgGroup_.style.display = "block",
            t = z.Tooltip.svgText_.getBBox(),
            n = 2 * z.Tooltip.MARGINS + t.width,
            o = t.height,
            z.Tooltip.svgBackground_.setAttribute("width", n),
            z.Tooltip.svgBackground_.setAttribute("height", o),
            z.Tooltip.svgShadow_.setAttribute("width", n),
            z.Tooltip.svgShadow_.setAttribute("height", o),
            z.RTL) {
                o = t.width,
                r = 0;
                for (var i; i = z.Tooltip.svgText_.childNodes[r]; r++)
                    i.setAttribute("text-anchor", "end"),
                    i.setAttribute("x", o + z.Tooltip.MARGINS)
            }
            o = z.Tooltip.lastXY_.x,
            o = z.RTL ? o - (z.Tooltip.OFFSET_X + n) : o + z.Tooltip.OFFSET_X,
            n = z.Tooltip.lastXY_.y + z.Tooltip.OFFSET_Y,
            r = z.svgSize(),
            n + t.height > r.height && (n -= t.height + 2 * z.Tooltip.OFFSET_Y),
            z.RTL ? o = Math.max(z.Tooltip.MARGINS, o) : o + t.width > r.width - 2 * z.Tooltip.MARGINS && (o = r.width - t.width - 2 * z.Tooltip.MARGINS),
            z.Tooltip.svgGroup_.setAttribute("transform", "translate(" + o + "," + n + ")")
        }
    }
    ,
    z.Tooltip.wrap_ = function(e, t) {
        if (e.length <= t)
            return e;
        for (var n = e.trim().split(/\s+/), o = 0; o < n.length; o++)
            n[o].length > t && (t = n[o].length);
        o = -1 / 0;
        var r = 1;
        do {
            var i = o
              , s = e;
            e = [];
            var a = n.length / r
              , l = 1;
            for (o = 0; o < n.length - 1; o++)
                l < (o + 1.5) / a ? (l++,
                e[o] = !0) : e[o] = !1;
            e = z.Tooltip.wrapMutate_(n, e, t),
            o = z.Tooltip.wrapScore_(n, e, t),
            e = z.Tooltip.wrapToText_(n, e),
            r++
        } while (o > i);
        return s
    }
    ,
    z.Tooltip.wrapScore_ = function(e, t, n) {
        for (var o = [0], r = [], i = 0; i < e.length; i++)
            o[o.length - 1] += e[i].length,
            !0 === t[i] ? (o.push(0),
            r.push(e[i].charAt(e[i].length - 1))) : !1 === t[i] && o[o.length - 1]++;
        for (e = Math.max.apply(Math, o),
        i = t = 0; i < o.length; i++)
            t -= 2 * Math.pow(Math.abs(n - o[i]), 1.5),
            t -= Math.pow(e - o[i], 1.5),
            -1 != ".?!".indexOf(r[i]) ? t += n / 3 : -1 != ",;)]}".indexOf(r[i]) && (t += n / 4);
        return 1 < o.length && o[o.length - 1] <= o[o.length - 2] && (t += .5),
        t
    }
    ,
    z.Tooltip.wrapMutate_ = function(e, t, n) {
        for (var o, r = z.Tooltip.wrapScore_(e, t, n), i = 0; i < t.length - 1; i++)
            if (t[i] != t[i + 1]) {
                var s = [].concat(t);
                s[i] = !s[i],
                s[i + 1] = !s[i + 1];
                var a = z.Tooltip.wrapScore_(e, s, n);
                a > r && (r = a,
                o = s)
            }
        return o ? z.Tooltip.wrapMutate_(e, o, n) : t
    }
    ,
    z.Tooltip.wrapToText_ = function(e, t) {
        for (var n = [], o = 0; o < e.length; o++)
            n.push(e[o]),
            void 0 !== t[o] && n.push(t[o] ? "\n" : " ");
        return n.join("")
    }
    ,
    z.FieldLabel = function(e) {
        this.sourceBlock_ = null,
        this.textElement_ = z.createSvgElement("text", {
            class: "blocklyText"
        }, null),
        this.size_ = {
            height: 25,
            width: 0
        },
        this.setText(e)
    }
    ,
    e.inherits(z.FieldLabel, z.Field),
    z.FieldLabel.prototype.clone = function() {
        return new z.FieldLabel(this.getText())
    }
    ,
    z.FieldLabel.prototype.EDITABLE = !1,
    z.FieldLabel.prototype.init = function(e) {
        if (this.sourceBlock_)
            throw "Text has already been initialized once.";
        this.sourceBlock_ = e,
        e.getSvgRoot().appendChild(this.textElement_),
        this.textElement_.tooltip = this.sourceBlock_,
        z.Tooltip.bindMouseEvents(this.textElement_)
    }
    ,
    z.FieldLabel.prototype.dispose = function() {
        e.dom.removeNode(this.textElement_),
        this.textElement_ = null
    }
    ,
    z.FieldLabel.prototype.getRootElement = function() {
        return this.textElement_
    }
    ,
    z.FieldLabel.prototype.setTooltip = function(e) {
        this.textElement_.tooltip = e
    }
    ,
    z.Input = function(e, t, n, o) {
        this.type = e,
        this.name = t,
        this.sourceBlock_ = n,
        this.connection = o,
        this.fieldRow = [],
        this.align = z.ALIGN_LEFT,
        this.visible_ = !0
    }
    ,
    z.Input.prototype.appendField = function(t, n) {
        return t || n ? (e.isString(t) && (t = new z.FieldLabel(t)),
        this.sourceBlock_.svg_ && t.init(this.sourceBlock_),
        t.name = n,
        t.prefixField && this.appendField(t.prefixField),
        this.fieldRow.push(t),
        t.suffixField && this.appendField(t.suffixField),
        this.sourceBlock_.rendered && (this.sourceBlock_.render(),
        this.sourceBlock_.bumpNeighbours_()),
        this) : this
    }
    ,
    z.Input.prototype.appendTitle = function(e, t) {
        return console.log("Deprecated call to appendTitle, use appendField instead."),
        this.appendField(e, t)
    }
    ,
    z.Input.prototype.removeField = function(t) {
        for (var n, o = 0; n = this.fieldRow[o]; o++)
            if (n.name === t)
                return n.dispose(),
                this.fieldRow.splice(o, 1),
                void (this.sourceBlock_.rendered && (this.sourceBlock_.render(),
                this.sourceBlock_.bumpNeighbours_()));
        e.asserts.fail('Field "%s" not found.', t)
    }
    ,
    z.Input.prototype.isVisible = function() {
        return this.visible_
    }
    ,
    z.Input.prototype.setVisible = function(e) {
        var t = [];
        if (this.visible_ == e)
            return t;
        for (var n, o = (this.visible_ = e) ? "block" : "none", r = 0; n = this.fieldRow[r]; r++)
            n.setVisible(e);
        return this.connection && (e ? t = this.connection.unhideAll() : this.connection.hideAll(),
        r = this.connection.targetBlock()) && (r.svg_.getRootElement().style.display = o,
        e || (r.rendered = !1)),
        t
    }
    ,
    z.Input.prototype.setCheck = function(e) {
        if (!this.connection)
            throw "This input does not have a connection.";
        return this.connection.setCheck(e),
        this
    }
    ,
    z.Input.prototype.setAlign = function(e) {
        return this.align = e,
        this.sourceBlock_.rendered && this.sourceBlock_.render(),
        this
    }
    ,
    z.Input.prototype.init = function() {
        for (var e = 0; e < this.fieldRow.length; e++)
            this.fieldRow[e].init(this.sourceBlock_)
    }
    ,
    z.Input.prototype.dispose = function() {
        for (var e, t = 0; e = this.fieldRow[t]; t++)
            e.dispose();
        this.connection && this.connection.dispose(),
        this.sourceBlock_ = null
    }
    ,
    z.Msg = {},
    z.Mutator = function(t) {
        z.Mutator.superClass_.constructor.call(this, null),
        this.quarkXml_ = [];
        for (var n = 0; n < t.length; n++) {
            var o = e.dom.createDom("block", {
                type: t[n]
            });
            this.quarkXml_[n] = o
        }
    }
    ,
    e.inherits(z.Mutator, z.Icon),
    z.Mutator.prototype.workspaceWidth_ = 0,
    z.Mutator.prototype.workspaceHeight_ = 0,
    z.Mutator.prototype.createIcon = function() {
        z.Icon.prototype.createIcon_.call(this);
        var e = z.Icon.RADIUS / 2;
        z.createSvgElement("rect", {
            class: "blocklyIconShield",
            width: 4 * e,
            height: 4 * e,
            rx: e,
            ry: e
        }, this.iconGroup_),
        this.iconMark_ = z.createSvgElement("text", {
            class: "blocklyIconMark",
            x: z.Icon.RADIUS,
            y: 2 * z.Icon.RADIUS - 4
        }, this.iconGroup_),
        this.iconMark_.appendChild(document.createTextNode("★"))
    }
    ,
    z.Mutator.prototype.iconClick_ = function(e) {
        this.block_.isEditable() && z.Icon.prototype.iconClick_.call(this, e)
    }
    ,
    z.Mutator.prototype.createEditor_ = function() {
        this.svgDialog_ = z.createSvgElement("svg", {
            x: z.Bubble.BORDER_WIDTH,
            y: z.Bubble.BORDER_WIDTH
        }, null),
        z.createSvgElement("rect", {
            class: "blocklyMutatorBackground",
            height: "100%",
            width: "100%"
        }, this.svgDialog_);
        var e = this;
        return this.workspace_ = new z.Workspace(function() {
            return e.getFlyoutMetrics_()
        }
        ,null),
        this.flyout_ = new z.Flyout,
        this.flyout_.autoClose = !1,
        this.svgDialog_.appendChild(this.flyout_.createDom()),
        this.svgDialog_.appendChild(this.workspace_.createDom()),
        this.svgDialog_
    }
    ,
    z.Mutator.prototype.updateEditable = function() {
        this.block_.isEditable() ? z.Icon.prototype.updateEditable.call(this) : (this.setVisible(!1),
        z.removeClass_(this.iconGroup_, "blocklyIconGroup"))
    }
    ,
    z.Mutator.prototype.resizeBubble_ = function() {
        var e = 2 * z.Bubble.BORDER_WIDTH
          , t = this.workspace_.getCanvas().getBBox()
          , n = this.flyout_.getMetrics_()
          , o = z.RTL ? -t.x : t.width + t.x;
        t = Math.max(t.height + 3 * e, n.contentHeight + 20),
        o += 3 * e,
        (Math.abs(this.workspaceWidth_ - o) > e || Math.abs(this.workspaceHeight_ - t) > e) && (this.workspaceWidth_ = o,
        this.workspaceHeight_ = t,
        this.bubble_.setBubbleSize(o + e, t + e),
        this.svgDialog_.setAttribute("width", this.workspaceWidth_),
        this.svgDialog_.setAttribute("height", this.workspaceHeight_)),
        z.RTL && (e = "translate(" + this.workspaceWidth_ + ",0)",
        this.workspace_.getCanvas().setAttribute("transform", e))
    }
    ,
    z.Mutator.prototype.setVisible = function(e) {
        if (e != this.isVisible())
            if (e) {
                this.bubble_ = new z.Bubble(this.block_.workspace,this.createEditor_(),this.block_.svg_.svgPath_,this.iconX_,this.iconY_,null,null);
                var t = this;
                this.flyout_.init(this.workspace_),
                this.flyout_.show(this.quarkXml_),
                this.rootBlock_ = this.block_.decompose(this.workspace_),
                e = this.rootBlock_.getDescendants();
                for (var n, o = 0; n = e[o]; o++)
                    n.render();
                this.rootBlock_.setMovable(!1),
                this.rootBlock_.setDeletable(!1),
                e = 2 * this.flyout_.CORNER_RADIUS,
                o = this.flyout_.width_ + e,
                z.RTL && (o = -o),
                this.rootBlock_.moveBy(o, e),
                this.block_.saveConnections && (this.block_.saveConnections(this.rootBlock_),
                this.sourceListener_ = z.bindEvent_(this.block_.workspace.getCanvas(), "blocklyWorkspaceChange", this.block_, function() {
                    t.block_.saveConnections(t.rootBlock_)
                })),
                this.resizeBubble_(),
                z.bindEvent_(this.workspace_.getCanvas(), "blocklyWorkspaceChange", this.block_, function() {
                    t.workspaceChanged_()
                }),
                this.updateColour()
            } else
                this.svgDialog_ = null,
                this.flyout_.dispose(),
                this.flyout_ = null,
                this.workspace_.dispose(),
                this.rootBlock_ = this.workspace_ = null,
                this.bubble_.dispose(),
                this.bubble_ = null,
                this.workspaceHeight_ = this.workspaceWidth_ = 0,
                this.sourceListener_ && (z.unbindEvent_(this.sourceListener_),
                this.sourceListener_ = null)
    }
    ,
    z.Mutator.prototype.workspaceChanged_ = function() {
        if (0 == z.Block.dragMode_)
            for (var e, t = this.workspace_.getTopBlocks(!1), n = 0; e = t[n]; n++) {
                var o = e.getRelativeToSurfaceXY()
                  , r = e.getHeightWidth();
                e.isDeletable() && (z.RTL ? o.x > 20 - this.flyout_.width_ : o.x < this.flyout_.width_ - 20) ? e.dispose(!1, !0) : 20 > o.y + r.height && e.moveBy(0, 20 - r.height - o.y)
            }
        this.rootBlock_.workspace == this.workspace_ && (t = this.block_.rendered,
        this.block_.rendered = !1,
        this.block_.compose(this.rootBlock_),
        this.block_.rendered = t,
        this.block_.rendered && this.block_.render(),
        this.resizeBubble_(),
        this.block_.workspace.fireChangeEvent())
    }
    ,
    z.Mutator.prototype.getFlyoutMetrics_ = function() {
        var e = 0;
        return z.RTL && (e += this.workspaceWidth_),
        {
            viewHeight: this.workspaceHeight_,
            viewWidth: 0,
            absoluteTop: 0,
            absoluteLeft: e
        }
    }
    ,
    z.Mutator.prototype.dispose = function() {
        this.block_.mutator = null,
        z.Icon.prototype.dispose.call(this)
    }
    ,
    z.Warning = function(e) {
        z.Warning.superClass_.constructor.call(this, e),
        this.createIcon_()
    }
    ,
    e.inherits(z.Warning, z.Icon),
    z.Warning.textToDom_ = function(e) {
        var t = z.createSvgElement("text", {
            class: "blocklyText blocklyBubbleText",
            y: z.Bubble.BORDER_WIDTH
        }, null);
        e = e.split("\n");
        for (var n = 0; n < e.length; n++) {
            var o = z.createSvgElement("tspan", {
                dy: "1em",
                x: z.Bubble.BORDER_WIDTH
            }, t)
              , r = document.createTextNode(e[n]);
            o.appendChild(r)
        }
        return t
    }
    ,
    z.Warning.prototype.text_ = "",
    z.Warning.prototype.createIcon_ = function() {
        z.Icon.prototype.createIcon_.call(this),
        z.createSvgElement("path", {
            class: "blocklyIconShield",
            d: "M 2,15 Q -1,15 0.5,12 L 6.5,1.7 Q 8,-1 9.5,1.7 L 15.5,12 Q 17,15 14,15 z"
        }, this.iconGroup_),
        this.iconMark_ = z.createSvgElement("text", {
            class: "blocklyIconMark",
            x: z.Icon.RADIUS,
            y: 2 * z.Icon.RADIUS - 3
        }, this.iconGroup_),
        this.iconMark_.appendChild(document.createTextNode("!"))
    }
    ,
    z.Warning.prototype.setVisible = function(e) {
        if (e != this.isVisible())
            if (e) {
                if (e = z.Warning.textToDom_(this.text_),
                this.bubble_ = new z.Bubble(this.block_.workspace,e,this.block_.svg_.svgPath_,this.iconX_,this.iconY_,null,null),
                z.RTL)
                    for (var t, n = e.getBBox().width, o = 0; t = e.childNodes[o]; o++)
                        t.setAttribute("text-anchor", "end"),
                        t.setAttribute("x", n + z.Bubble.BORDER_WIDTH);
                this.updateColour(),
                e = this.bubble_.getBubbleSize(),
                this.bubble_.setBubbleSize(e.width, e.height)
            } else
                this.bubble_.dispose(),
                this.body_ = this.bubble_ = null
    }
    ,
    z.Warning.prototype.bodyFocus_ = function() {
        this.bubble_.promote_()
    }
    ,
    z.Warning.prototype.setText = function(e) {
        this.text_ != e && (this.text_ = e,
        this.isVisible() && (this.setVisible(!1),
        this.setVisible(!0)))
    }
    ,
    z.Warning.prototype.dispose = function() {
        this.block_.warning = null,
        z.Icon.prototype.dispose.call(this)
    }
    ,
    z.uidCounter_ = 0,
    z.getUidCounter = function() {
        return z.uidCounter_
    }
    ,
    z.setUidCounter = function(e) {
        z.uidCounter_ = e
    }
    ,
    z.genUid = function() {
        var e = (++z.uidCounter_).toString();
        return z.Realtime.isEnabled() ? z.Realtime.genUid(e) : e
    }
    ,
    z.Block = function() {
        e.asserts.assert(0 == arguments.length, "Please use Blockly.Block.obtain.")
    }
    ,
    z.Block.obtain = function(e, t) {
        if (z.Realtime.isEnabled())
            return z.Realtime.obtainBlock(e, t);
        var n = new z.Block;
        return n.initialize(e, t),
        n
    }
    ,
    z.Block.prototype.initialize = function(t, n) {
        this.id = z.genUid(),
        t.addTopBlock(this),
        this.fill(t, n),
        e.isFunction(this.onchange) && z.bindEvent_(t.getCanvas(), "blocklyWorkspaceChange", this, this.onchange)
    }
    ,
    z.Block.prototype.fill = function(t, n) {
        this.previousConnection = this.nextConnection = this.outputConnection = null,
        this.inputList = [],
        this.mini = this.disabled = this.rendered = this.inputsInline = !1,
        this.tooltip = "",
        this.contextMenu = !0,
        this.parentBlock_ = null,
        this.childBlocks_ = [],
        this.editable_ = this.movable_ = this.deletable_ = !0,
        this.collapsed_ = !1,
        this.cloneBlock_ = null,
        this.workspace = t,
        this.isInFlyout = t.isFlyout,
        this.colourSaturation_ = .45,
        this.colourValue_ = .65,
        this.fillPattern_ = null,
        n && (this.type = n,
        t = z.Blocks[n],
        e.asserts.assertObject(t, 'Error: "%s" is an unknown language block.', n),
        e.mixin(this, t)),
        e.isFunction(this.init) && this.init()
    }
    ,
    z.Block.getById = function(e, t) {
        return z.Realtime.isEnabled() ? z.Realtime.getBlockById(e) : t.getBlockById(e)
    }
    ,
    z.Block.prototype.svg_ = null,
    z.Block.prototype.mutator = null,
    z.Block.prototype.comment = null,
    z.Block.prototype.warning = null,
    z.Block.prototype.getIcons = function() {
        var e = [];
        return this.mutator && e.push(this.mutator),
        this.comment && e.push(this.comment),
        this.warning && e.push(this.warning),
        e
    }
    ,
    z.Block.prototype.initSvg = function() {
        this.svg_ = new z.BlockSvg(this),
        this.svg_.init(),
        z.readOnly || z.bindEvent_(this.svg_.getRootElement(), "mousedown", this, this.onMouseDown_),
        this.workspace.getCanvas().appendChild(this.svg_.getRootElement())
    }
    ,
    z.Block.prototype.getSvgRoot = function() {
        return this.svg_ && this.svg_.getRootElement()
    }
    ,
    z.Block.dragMode_ = 0,
    z.Block.onMouseUpWrapper_ = null,
    z.Block.onMouseMoveWrapper_ = null,
    z.Block.terminateDrag_ = function() {
        z.Block.onMouseUpWrapper_ && (z.unbindEvent_(z.Block.onMouseUpWrapper_),
        z.Block.onMouseUpWrapper_ = null),
        z.Block.onMouseMoveWrapper_ && (z.unbindEvent_(z.Block.onMouseMoveWrapper_),
        z.Block.onMouseMoveWrapper_ = null);
        var t = z.selected;
        if (2 == z.Block.dragMode_ && t) {
            var n = t.getRelativeToSurfaceXY();
            t.moveConnections_(n.x - t.startDragX, n.y - t.startDragY),
            delete t.draggedBubbles_,
            t.setDragging_(!1),
            t.render(),
            e.Timer.callOnce(t.bumpNeighbours_, z.BUMP_DELAY, t),
            z.fireUiEvent(window, "resize")
        }
        t && t.workspace.fireChangeEvent(),
        z.Block.dragMode_ = 0
    }
    ,
    z.Block.prototype.select = function() {
        e.asserts.assertObject(this.svg_, "Block is not rendered."),
        z.selected && z.selected.unselect(),
        z.selected = this,
        this.svg_.addSelect(),
        z.fireUiEvent(this.workspace.getCanvas(), "blocklySelectChange")
    }
    ,
    z.Block.prototype.unselect = function() {
        e.asserts.assertObject(this.svg_, "Block is not rendered."),
        z.selected = null,
        this.svg_.removeSelect(),
        z.fireUiEvent(this.workspace.getCanvas(), "blocklySelectChange")
    }
    ,
    z.Block.prototype.dispose = function(e, t, n) {
        for (this.rendered = !1,
        this.unplug(e, !1),
        t && this.svg_ && this.svg_.disposeUiEffect(),
        this.workspace && !n && (this.workspace.removeTopBlock(this),
        this.workspace = null),
        z.selected == this && (z.selected = null,
        z.terminateDrag_()),
        z.ContextMenu.currentBlock == this && z.ContextMenu.hide(),
        e = this.childBlocks_.length - 1; 0 <= e; e--)
            this.childBlocks_[e].dispose(!1);
        for (t = this.getIcons(),
        e = 0; e < t.length; e++)
            t[e].dispose();
        for (e = 0; t = this.inputList[e]; e++)
            t.dispose();
        for (this.inputList = [],
        t = this.getConnections_(!0),
        e = 0; e < t.length; e++)
            (n = t[e]).targetConnection && n.disconnect(),
            t[e].dispose();
        this.svg_ && (this.svg_.dispose(),
        this.svg_ = null),
        z.Realtime.isEnabled() && !z.Realtime.withinSync && z.Realtime.removeBlock(this)
    }
    ,
    z.Block.prototype.unplug = function(e, t) {
        if (t = t && !!this.getParent(),
        this.outputConnection)
            this.outputConnection.targetConnection && this.setParent(null);
        else {
            var n = null;
            this.previousConnection && this.previousConnection.targetConnection && (n = this.previousConnection.targetConnection,
            this.setParent(null));
            var o = this.getNextBlock();
            e && o && (e = this.nextConnection.targetConnection,
            o.setParent(null),
            n && n.connect(e))
        }
        t && this.moveBy(z.SNAP_RADIUS * (z.RTL ? -1 : 1), 2 * z.SNAP_RADIUS)
    }
    ,
    z.Block.prototype.getRelativeToSurfaceXY = function() {
        var e = 0
          , t = 0;
        if (this.svg_) {
            var n = this.svg_.getRootElement();
            do {
                var o = z.getRelativeXY_(n);
                e += o.x,
                t += o.y,
                n = n.parentNode
            } while (n && n != this.workspace.getCanvas())
        }
        return {
            x: e,
            y: t
        }
    }
    ,
    z.Block.prototype.moveBy = function(e, t) {
        var n = this.getRelativeToSurfaceXY();
        this.svg_.getRootElement().setAttribute("transform", "translate(" + (n.x + e) + ", " + (n.y + t) + ")"),
        this.moveConnections_(e, t),
        z.Realtime.blockChanged(this)
    }
    ,
    z.Block.prototype.getHeightWidth = function() {
        var e = this.svg_.height
          , t = this.svg_.width
          , n = this.getNextBlock();
        return n && (e += (n = n.getHeightWidth()).height - 4,
        t = Math.max(t, n.width)),
        {
            height: e,
            width: t
        }
    }
    ,
    z.Block.prototype.onMouseDown_ = function(e) {
        if (!this.isInFlyout) {
            if (z.svgResize(),
            z.terminateDrag_(),
            this.select(),
            z.hideChaff(),
            z.isRightButton(e))
                this.showContextMenu_(e);
            else {
                if (!this.isMovable())
                    return;
                z.removeAllRanges(),
                z.setCursorHand_(!0);
                var t = this.getRelativeToSurfaceXY();
                this.startDragX = t.x,
                this.startDragY = t.y,
                this.startDragMouseX = e.clientX,
                this.startDragMouseY = e.clientY,
                z.Block.dragMode_ = 1,
                z.Block.onMouseUpWrapper_ = z.bindEvent_(document, "mouseup", this, this.onMouseUp_),
                z.Block.onMouseMoveWrapper_ = z.bindEvent_(document, "mousemove", this, this.onMouseMove_),
                this.draggedBubbles_ = [],
                t = this.getDescendants();
                for (var n, o = 0; n = t[o]; o++) {
                    n = n.getIcons();
                    for (var r = 0; r < n.length; r++) {
                        var i = n[r].getIconLocation();
                        i.bubble = n[r],
                        this.draggedBubbles_.push(i)
                    }
                }
            }
            e.stopPropagation()
        }
    }
    ,
    z.Block.prototype.onMouseUp_ = function() {
        var t = this;
        z.doCommand(function() {
            if (z.terminateDrag_(),
            k.triggerEvent("computer_place"),
            z.selected && z.highlightedConnection_)
                z.localConnection_.connect(z.highlightedConnection_),
                t.svg_ && (z.localConnection_.isSuperior() ? z.highlightedConnection_ : z.localConnection_).sourceBlock_.svg_.connectionUiEffect(),
                t.workspace.trashcan && t.workspace.trashcan.isOpen && t.workspace.trashcan.close();
            else if (t.workspace.trashcan && t.workspace.trashcan.isOpen) {
                var n = t.workspace.trashcan;
                e.Timer.callOnce(n.close, 100, n),
                z.selected.dispose(!1, !0),
                z.fireUiEvent(window, "resize")
            }
            z.highlightedConnection_ && (z.highlightedConnection_.unhighlight(),
            z.highlightedConnection_ = null)
        })
    }
    ,
    z.Block.prototype.showHelp_ = function() {
        var t = e.isFunction(this.helpUrl) ? this.helpUrl() : this.helpUrl;
        t && window.open(t)
    }
    ,
    z.Block.prototype.duplicate_ = function() {
        var e = z.Xml.blockToDom_(this);
        z.Xml.deleteNext(e),
        e = z.Xml.domToBlock(this.workspace, e);
        var t = this.getRelativeToSurfaceXY();
        return t.x = z.RTL ? t.x - z.SNAP_RADIUS : t.x + z.SNAP_RADIUS,
        t.y += 2 * z.SNAP_RADIUS,
        e.moveBy(t.x, t.y),
        e.select(),
        e
    }
    ,
    z.Block.prototype.showContextMenu_ = function(t) {
        if (!z.readOnly && this.contextMenu) {
            var n = this
              , o = [];
            if (this.isDeletable() && this.isMovable() && !n.isInFlyout) {
                var r = {
                    text: z.Msg.DUPLICATE_BLOCK,
                    enabled: !0,
                    callback: function() {
                        n.duplicate_()
                    }
                };
                if (this.getDescendants().length > this.workspace.remainingCapacity() && (r.enabled = !1),
                o.push(r),
                this.isEditable() && !this.collapsed_ && z.comments && (r = {
                    enabled: !0
                },
                this.comment ? (r.text = z.Msg.REMOVE_COMMENT,
                r.callback = function() {
                    n.setCommentText(null)
                }
                ) : (r.text = z.Msg.ADD_COMMENT,
                r.callback = function() {
                    n.setCommentText("")
                }
                ),
                o.push(r)),
                !this.collapsed_)
                    for (r = 0; r < this.inputList.length; r++)
                        if (this.inputList[r].type == z.INPUT_VALUE) {
                            (r = {
                                enabled: !0
                            }).text = this.inputsInline ? z.Msg.EXTERNAL_INPUTS : z.Msg.INLINE_INPUTS,
                            r.callback = function() {
                                n.setInputsInline(!n.inputsInline)
                            }
                            ,
                            o.push(r);
                            break
                        }
                z.collapse && (this.collapsed_ ? ((r = {
                    enabled: !0
                }).text = z.Msg.EXPAND_BLOCK,
                r.callback = function() {
                    n.setCollapsed(!1)
                }
                ,
                o.push(r)) : ((r = {
                    enabled: !0
                }).text = z.Msg.COLLAPSE_BLOCK,
                r.callback = function() {
                    n.setCollapsed(!0)
                }
                ,
                o.push(r))),
                z.disable && (r = {
                    text: this.disabled ? z.Msg.ENABLE_BLOCK : z.Msg.DISABLE_BLOCK,
                    enabled: !this.getInheritedDisabled(),
                    callback: function() {
                        n.setDisabled(!n.disabled)
                    }
                },
                o.push(r)),
                r = this.getDescendants().length;
                var i = this.getNextBlock();
                i && (r -= i.getDescendants().length),
                r = {
                    text: 1 == r ? z.Msg.DELETE_BLOCK : z.Msg.DELETE_X_BLOCKS.replace("%1", String(r)),
                    enabled: !0,
                    callback: function() {
                        n.dispose(!0, !0)
                    }
                },
                o.push(r)
            }
            (r = {
                enabled: !(e.isFunction(this.helpUrl) ? !this.helpUrl() : !this.helpUrl)
            }).text = z.Msg.HELP,
            r.callback = function() {
                n.showHelp_()
            }
            ,
            o.push(r),
            this.customContextMenu && !n.isInFlyout && this.customContextMenu(o),
            z.ContextMenu.show(t, o),
            z.ContextMenu.currentBlock = this
        }
    }
    ,
    z.Block.prototype.getConnections_ = function(e) {
        var t = [];
        if ((e || this.rendered) && (this.outputConnection && t.push(this.outputConnection),
        this.nextConnection && t.push(this.nextConnection),
        this.previousConnection && t.push(this.previousConnection),
        e || !this.collapsed_)) {
            e = 0;
            for (var n; n = this.inputList[e]; e++)
                n.connection && t.push(n.connection)
        }
        return t
    }
    ,
    z.Block.prototype.moveConnections_ = function(e, t) {
        if (this.rendered) {
            for (var n = this.getConnections_(!1), o = 0; o < n.length; o++)
                n[o].moveBy(e, t);
            for (n = this.getIcons(),
            o = 0; o < n.length; o++)
                n[o].computeIconLocation();
            for (o = 0; o < this.childBlocks_.length; o++)
                this.childBlocks_[o].moveConnections_(e, t)
        }
    }
    ,
    z.Block.prototype.setDragging_ = function(e) {
        e ? this.svg_.addDragging() : this.svg_.removeDragging();
        for (var t = 0; t < this.childBlocks_.length; t++)
            this.childBlocks_[t].setDragging_(e)
    }
    ,
    z.Block.prototype.onMouseMove_ = function(e) {
        var t = this;
        z.doCommand(function() {
            if ("mousemove" == e.type && 1 >= e.clientX && 0 == e.clientY && 0 == e.button)
                e.stopPropagation();
            else {
                z.removeAllRanges();
                var n = e.clientX - t.startDragMouseX
                  , o = e.clientY - t.startDragMouseY;
                if (1 == z.Block.dragMode_ && Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2)) > z.DRAG_RADIUS && (z.Block.dragMode_ = 2,
                t.setParent(null),
                t.setDragging_(!0),
                z.fireUiEvent(t.workspace.getCanvas(), "blocklyDragBlock"),
                k.triggerEvent("computer_pickup")),
                2 == z.Block.dragMode_) {
                    var r = t.startDragX + n
                      , i = t.startDragY + o;
                    for (t.svg_.getRootElement().setAttribute("transform", "translate(" + r + ", " + i + ")"),
                    r = 0; r < t.draggedBubbles_.length; r++)
                        (i = t.draggedBubbles_[r]).bubble.setIconLocation(i.x + n, i.y + o);
                    i = t.getConnections_(!1);
                    var s = null
                      , a = null
                      , l = z.SNAP_RADIUS;
                    for (r = 0; r < i.length; r++) {
                        var u = i[r]
                          , c = u.closest(l, n, o);
                        c.connection && (s = c.connection,
                        a = u,
                        l = c.radius)
                    }
                    z.highlightedConnection_ && z.highlightedConnection_ != s && (z.highlightedConnection_.unhighlight(),
                    z.highlightedConnection_ = null,
                    z.localConnection_ = null),
                    s && s != z.highlightedConnection_ && (s.highlight(),
                    z.highlightedConnection_ = s,
                    z.localConnection_ = a),
                    t.workspace.trashcan && t.isDeletable() && t.workspace.trashcan.onMouseMove(e)
                }
                e.stopPropagation(),
                e.preventDefault()
            }
        })
    }
    ,
    z.Block.prototype.bumpNeighbours_ = function() {
        if (0 == z.Block.dragMode_) {
            var e = this.getRootBlock();
            if (!e.isInFlyout)
                for (var t = this.getConnections_(!1), n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.targetConnection && o.isSuperior() && o.targetBlock().bumpNeighbours_();
                    for (var r = o.neighbours_(z.SNAP_RADIUS), i = 0; i < r.length; i++) {
                        var s = r[i];
                        o.targetConnection && s.targetConnection || s.sourceBlock_.getRootBlock() != e && (o.isSuperior() ? s.bumpAwayFrom_(o) : o.bumpAwayFrom_(s))
                    }
                }
        }
    }
    ,
    z.Block.prototype.getParent = function() {
        return this.parentBlock_
    }
    ,
    z.Block.prototype.getSurroundParent = function() {
        for (var e = this; ; ) {
            do {
                var t = e;
                if (!(e = e.getParent()))
                    return null
            } while (e.getNextBlock() == t);
            return e
        }
    }
    ,
    z.Block.prototype.getNextBlock = function() {
        return this.nextConnection && this.nextConnection.targetBlock()
    }
    ,
    z.Block.prototype.getRootBlock = function() {
        var e = this;
        do {
            var t = e;
            e = t.parentBlock_
        } while (e);
        return t
    }
    ,
    z.Block.prototype.getChildren = function() {
        return this.childBlocks_
    }
    ,
    z.Block.prototype.setParent = function(t) {
        if (this.parentBlock_) {
            for (var n, o = this.parentBlock_.childBlocks_, r = 0; n = o[r]; r++)
                if (n == this) {
                    o.splice(r, 1);
                    break
                }
            o = this.getRelativeToSurfaceXY(),
            this.workspace.getCanvas().appendChild(this.svg_.getRootElement()),
            this.svg_.getRootElement().setAttribute("transform", "translate(" + o.x + ", " + o.y + ")"),
            this.parentBlock_ = null,
            this.previousConnection && this.previousConnection.targetConnection && this.previousConnection.disconnect(),
            this.outputConnection && this.outputConnection.targetConnection && this.outputConnection.disconnect()
        } else
            e.array.contains(this.workspace.getTopBlocks(!1), this) && this.workspace.removeTopBlock(this);
        (this.parentBlock_ = t) ? (t.childBlocks_.push(this),
        o = this.getRelativeToSurfaceXY(),
        t.svg_ && this.svg_ && t.svg_.getRootElement().appendChild(this.svg_.getRootElement()),
        t = this.getRelativeToSurfaceXY(),
        this.moveConnections_(t.x - o.x, t.y - o.y)) : this.workspace.addTopBlock(this)
    }
    ,
    z.Block.prototype.setCloneBlock = function(e) {
        this.cloneBlock_ = e
    }
    ,
    z.Block.prototype.getCloneBlock = function() {
        return this.cloneBlock_
    }
    ,
    z.Block.prototype.getDescendants = function() {
        for (var e, t = [this], n = 0; e = this.childBlocks_[n]; n++)
            t.push.apply(t, e.getDescendants());
        return t
    }
    ,
    z.Block.prototype.isDeletable = function() {
        return this.deletable_ && !z.readOnly
    }
    ,
    z.Block.prototype.setDeletable = function(e) {
        this.deletable_ = e,
        this.svg_ && this.svg_.updateMovable()
    }
    ,
    z.Block.prototype.isMovable = function() {
        return this.movable_ && !z.readOnly
    }
    ,
    z.Block.prototype.setMovable = function(e) {
        this.movable_ = e,
        this.svg_ && this.svg_.updateMovable()
    }
    ,
    z.Block.prototype.isEditable = function() {
        return this.editable_ && !z.readOnly
    }
    ,
    z.Block.prototype.setEditable = function(e) {
        this.editable_ = e,
        e = 0;
        for (var t; t = this.inputList[e]; e++)
            for (var n, o = 0; n = t.fieldRow[o]; o++)
                n.updateEditable();
        for (t = this.getIcons(),
        e = 0; e < t.length; e++)
            t[e].updateEditable()
    }
    ,
    z.Block.prototype.setHelpUrl = function(e) {
        this.helpUrl = e
    }
    ,
    z.Block.prototype.getHexColour = function() {
        return z.makeColour(this.getColour(), this.getSaturation(), this.getValue())
    }
    ,
    z.Block.prototype.getColour = function() {
        return this.colourHue_
    }
    ,
    z.Block.prototype.getSaturation = function() {
        return this.colourSaturation_
    }
    ,
    z.Block.prototype.getValue = function() {
        return this.colourValue_
    }
    ,
    z.Block.prototype.getFillPattern = function() {
        return this.fillPattern_
    }
    ,
    z.Block.prototype.setColour = function(e) {
        this.colourHue_ = e,
        this.svg_ && this.svg_.updateColour();
        var t = this.getIcons();
        for (e = 0; e < t.length; e++)
            t[e].updateColour();
        if (this.rendered) {
            for (e = 0; t = this.inputList[e]; e++)
                for (var n, o = 0; n = t.fieldRow[o]; o++)
                    n.setText(null);
            this.render()
        }
    }
    ,
    z.Block.prototype.setFillPattern = function(e) {
        this.fillPattern_ = e
    }
    ,
    z.Block.prototype.setHSV = function(e, t, n) {
        for (this.colourHue_ = e,
        this.colourSaturation_ = t,
        this.colourValue_ = n,
        this.svg_ && this.svg_.updateColour(),
        t = this.getIcons(),
        e = 0; e < t.length; e++)
            t[e].updateColour();
        if (this.rendered) {
            for (e = 0; t = this.inputList[e]; e++) {
                n = 0;
                for (var o; o = t.titleRow[n]; n++)
                    o.setText(null)
            }
            this.render()
        }
    }
    ,
    z.Block.prototype.getField_ = function(e) {
        for (var t, n = 0; t = this.inputList[n]; n++)
            for (var o, r = 0; o = t.fieldRow[r]; r++)
                if (o.name === e)
                    return o;
        return null
    }
    ,
    z.Block.prototype.getFieldValue = function(e) {
        return (e = this.getField_(e)) ? e.getValue() : null
    }
    ,
    z.Block.prototype.getTitleValue = function(e) {
        return console.log("Deprecated call to getTitleValue, use getFieldValue instead."),
        this.getFieldValue(e)
    }
    ,
    z.Block.prototype.setFieldValue = function(t, n) {
        var o = this.getField_(n);
        e.asserts.assertObject(o, 'Field "%s" not found.', n),
        o.setValue(t)
    }
    ,
    z.Block.prototype.setTitleValue = function(e, t) {
        console.log("Deprecated call to setTitleValue, use setFieldValue instead."),
        this.setFieldValue(e, t)
    }
    ,
    z.Block.prototype.setTooltip = function(e) {
        this.tooltip = e
    }
    ,
    z.Block.prototype.setPreviousStatement = function(t, n) {
        this.previousConnection && (e.asserts.assert(!this.previousConnection.targetConnection, "Must disconnect previous statement before removing connection."),
        this.previousConnection.dispose(),
        this.previousConnection = null),
        t && (e.asserts.assert(!this.outputConnection, "Remove output connection prior to adding previous connection."),
        void 0 === n && (n = null),
        this.previousConnection = new z.Connection(this,z.PREVIOUS_STATEMENT),
        this.previousConnection.setCheck(n)),
        this.rendered && (this.render(),
        this.bumpNeighbours_())
    }
    ,
    z.Block.prototype.setNextStatement = function(t, n) {
        this.nextConnection && (e.asserts.assert(!this.nextConnection.targetConnection, "Must disconnect next statement before removing connection."),
        this.nextConnection.dispose(),
        this.nextConnection = null),
        t && (void 0 === n && (n = null),
        this.nextConnection = new z.Connection(this,z.NEXT_STATEMENT),
        this.nextConnection.setCheck(n)),
        this.rendered && (this.render(),
        this.bumpNeighbours_())
    }
    ,
    z.Block.prototype.setOutput = function(t, n) {
        this.outputConnection && (e.asserts.assert(!this.outputConnection.targetConnection, "Must disconnect output value before removing connection."),
        this.outputConnection.dispose(),
        this.outputConnection = null),
        t && (e.asserts.assert(!this.previousConnection, "Remove previous connection prior to adding output connection."),
        void 0 === n && (n = null),
        this.outputConnection = new z.Connection(this,z.OUTPUT_VALUE),
        this.outputConnection.setCheck(n)),
        this.rendered && (this.render(),
        this.bumpNeighbours_())
    }
    ,
    z.Block.prototype.changeOutput = function(t) {
        e.asserts.assert(this.outputConnection, "Only use changeOutput() on blocks that already have an output."),
        this.outputConnection.setCheck(t)
    }
    ,
    z.Block.prototype.setInputsInline = function(e) {
        this.inputsInline = e,
        this.rendered && (this.render(),
        this.bumpNeighbours_(),
        this.workspace.fireChangeEvent())
    }
    ,
    z.Block.prototype.setMini = function(e) {
        this.mini = e,
        this.rendered && (this.render(),
        this.bumpNeighbours_(),
        this.workspace.fireChangeEvent())
    }
    ,
    z.Block.prototype.setDisabled = function(e) {
        this.disabled != e && (this.disabled = e,
        this.svg_.updateDisabled(),
        this.workspace.fireChangeEvent())
    }
    ,
    z.Block.prototype.getInheritedDisabled = function() {
        for (var e = this; ; ) {
            if (!(e = e.getSurroundParent()))
                return !1;
            if (e.disabled)
                return !0
        }
    }
    ,
    z.Block.prototype.isCollapsed = function() {
        return this.collapsed_
    }
    ,
    z.Block.prototype.setCollapsed = function(e) {
        if (this.collapsed_ != e) {
            this.collapsed_ = e;
            for (var t, n = [], o = 0; t = this.inputList[o]; o++)
                n.push.apply(n, t.setVisible(!e));
            if (e) {
                for (e = this.getIcons(),
                o = 0; o < e.length; o++)
                    e[o].setVisible(!1);
                o = this.toString(z.COLLAPSE_CHARS),
                this.appendDummyInput("_TEMP_COLLAPSED_INPUT").appendField(o)
            } else
                this.removeInput("_TEMP_COLLAPSED_INPUT");
            if (n.length || (n[0] = this),
            this.rendered) {
                for (o = 0; e = n[o]; o++)
                    e.render();
                this.bumpNeighbours_()
            }
        }
    }
    ,
    z.Block.prototype.toString = function(t) {
        for (var n, o = [], r = 0; n = this.inputList[r]; r++) {
            for (var i, s = 0; i = n.fieldRow[s]; s++)
                o.push(i.getText());
            n.connection && ((n = n.connection.targetBlock()) ? o.push(n.toString()) : o.push("?"))
        }
        return o = e.string.trim(o.join(" ")) || "???",
        t && (o = e.string.truncate(o, t)),
        o
    }
    ,
    z.Block.prototype.appendValueInput = function(e) {
        return this.appendInput_(z.INPUT_VALUE, e)
    }
    ,
    z.Block.prototype.appendStatementInput = function(e) {
        return this.appendInput_(z.NEXT_STATEMENT, e)
    }
    ,
    z.Block.prototype.appendDummyInput = function(e) {
        return this.appendInput_(z.DUMMY_INPUT, e || "")
    }
    ,
    z.Block.prototype.interpolateMsg = function(t, n) {
        function o(t) {
            t instanceof z.Field ? this.appendField(t) : (e.asserts.assert(e.isArray(t)),
            this.appendField(t[1], t[0]))
        }
        e.asserts.assertString(t);
        var r = arguments[arguments.length - 1];
        e.asserts.assert(r === z.ALIGN_LEFT || r === z.ALIGN_CENTRE || r === z.ALIGN_RIGHT, 'Illegal final argument "%d" is not an alignment.', r),
        --arguments.length;
        for (var i = t.split(this.interpolateMsg.SPLIT_REGEX_), s = [], a = 0; a < i.length; a += 2) {
            var l = e.string.trim(i[a])
              , u = void 0;
            if (l && s.push(new z.FieldLabel(l)),
            (l = i[a + 1]) && "%" == l.charAt(0)) {
                var c = parseInt(l.substring(1), 10)
                  , h = arguments[c];
                e.asserts.assertArray(h, 'Message symbol "%s" is out of range.', l),
                e.asserts.assertArray(h, 'Argument "%s" is not a tuple.', l),
                h[1]instanceof z.Field ? s.push([h[0], h[1]]) : u = this.appendValueInput(h[0]).setCheck(h[1]).setAlign(h[2]),
                arguments[c] = null
            } else
                "\n" == l && s.length && (u = this.appendDummyInput());
            u && s.length && (s.forEach(o, u),
            s = [])
        }
        for (s.length && (u = this.appendDummyInput().setAlign(r),
        s.forEach(o, u)),
        a = 1; a < arguments.length - 1; a++)
            e.asserts.assert(null === arguments[a], 'Input "%%s" not used in message: "%s"', a, t);
        this.setInputsInline(!t.match(this.interpolateMsg.INLINE_REGEX_))
    }
    ,
    z.Block.prototype.interpolateMsg.SPLIT_REGEX_ = /(%\d+|\n)/,
    z.Block.prototype.interpolateMsg.INLINE_REGEX_ = /%1\s*$/,
    z.Block.prototype.appendInput_ = function(e, t) {
        var n = null;
        return e != z.INPUT_VALUE && e != z.NEXT_STATEMENT || (n = new z.Connection(this,e)),
        e = new z.Input(e,t,this,n),
        this.inputList.push(e),
        this.rendered && (this.render(),
        this.bumpNeighbours_()),
        e
    }
    ,
    z.Block.prototype.moveInputBefore = function(t, n) {
        if (t != n) {
            for (var o, r = -1, i = n ? -1 : this.inputList.length, s = 0; o = this.inputList[s]; s++)
                if (o.name == t) {
                    if (r = s,
                    -1 != i)
                        break
                } else if (n && o.name == n && (i = s,
                -1 != r))
                    break;
            e.asserts.assert(-1 != r, 'Named input "%s" not found.', t),
            e.asserts.assert(-1 != i, 'Reference input "%s" not found.', n),
            this.moveNumberedInputBefore(r, i)
        }
    }
    ,
    z.Block.prototype.moveNumberedInputBefore = function(t, n) {
        e.asserts.assert(t != n, "Can't move input to itself."),
        e.asserts.assert(t < this.inputList.length, "Input index " + t + " out of bounds."),
        e.asserts.assert(n <= this.inputList.length, "Reference input " + n + " out of bounds.");
        var o = this.inputList[t];
        this.inputList.splice(t, 1),
        t < n && n--,
        this.inputList.splice(n, 0, o),
        this.rendered && (this.render(),
        this.bumpNeighbours_())
    }
    ;
    z.Block.prototype.removeInput = function(t, n) {
        for (var o, r = 0; o = this.inputList[r]; r++)
            if (o.name == t)
                return o.connection && o.connection.targetConnection && o.connection.targetBlock().setParent(null),
                o.dispose(),
                this.inputList.splice(r, 1),
                void (this.rendered && (this.render(),
                this.bumpNeighbours_()));
        n || e.asserts.fail('Input "%s" not found.', t)
    }
    ,
    z.Block.prototype.getInput = function(e) {
        for (var t, n = 0; t = this.inputList[n]; n++)
            if (t.name == e)
                return t;
        return null
    }
    ,
    z.Block.prototype.getInputTargetBlock = function(e) {
        return (e = this.getInput(e)) && e.connection && e.connection.targetBlock()
    }
    ,
    z.Block.prototype.setMutator = function(e) {
        this.mutator && this.mutator !== e && this.mutator.dispose(),
        e && (e.block_ = this,
        this.mutator = e,
        this.svg_ && e.createIcon())
    }
    ,
    z.Block.prototype.getCommentText = function() {
        return this.comment ? this.comment.getText().replace(/\s+$/, "").replace(/ +\n/g, "\n") : ""
    }
    ,
    z.Block.prototype.setCommentText = function(t) {
        var n = !1;
        e.isString(t) ? (this.comment || (this.comment = new z.Comment(this),
        n = !0),
        this.comment.setText(t)) : this.comment && (this.comment.dispose(),
        n = !0),
        this.rendered && (this.render(),
        n && this.bumpNeighbours_())
    }
    ,
    z.Block.prototype.setWarningText = function(t) {
        this.isInFlyout && (t = null);
        var n = !1;
        e.isString(t) ? (this.warning || (this.warning = new z.Warning(this),
        n = !0),
        this.warning.setText(t)) : this.warning && (this.warning.dispose(),
        n = !0),
        n && this.rendered && (this.render(),
        this.bumpNeighbours_())
    }
    ,
    z.Block.prototype.render = function() {
        e.asserts.assertObject(this.svg_, "Uninitialized block cannot be rendered.  Call block.initSvg()"),
        this.svg_.render(),
        z.Realtime.blockChanged(this)
    }
    ,
    z.FieldTextInput = function(e, t) {
        z.FieldTextInput.superClass_.constructor.call(this, e),
        this.changeHandler_ = t
    }
    ,
    e.inherits(z.FieldTextInput, z.Field),
    z.FieldTextInput.prototype.clone = function() {
        return new z.FieldTextInput(this.getText(),this.changeHandler_)
    }
    ,
    z.FieldTextInput.prototype.CURSOR = "text",
    z.FieldTextInput.prototype.dispose = function() {
        z.WidgetDiv.hideIfOwner(this),
        z.FieldTextInput.superClass_.dispose.call(this)
    }
    ,
    z.FieldTextInput.prototype.setText = function(e) {
        if (null !== e) {
            if (this.changeHandler_) {
                var t = this.changeHandler_(e);
                null != t && (e = t)
            }
            z.Field.prototype.setText.call(this, e)
        }
    }
    ,
    z.FieldTextInput.prototype.showEditor_ = function(t) {
        var n = t || !1;
        if (!n && (e.userAgent.MOBILE || e.userAgent.ANDROID || e.userAgent.IPAD))
            t = window.prompt(z.Msg.CHANGE_VALUE_TITLE, this.text_),
            this.changeHandler_ && (void 0 !== (n = this.changeHandler_(t)) && (t = n)),
            null !== t && this.setText(t);
        else {
            z.WidgetDiv.show(this, this.widgetDispose_());
            var o = z.WidgetDiv.DIV;
            t = e.dom.createDom("input", "blocklyHtmlInput"),
            z.FieldTextInput.htmlInput_ = t,
            o.appendChild(t),
            t.value = t.defaultValue = this.text_,
            t.oldValue_ = null,
            this.validate_(),
            this.resizeEditor_(),
            n || (t.focus(),
            t.select()),
            t.onKeyUpWrapper_ = z.bindEvent_(t, "keyup", this, this.onHtmlInputChange_),
            t.onKeyPressWrapper_ = z.bindEvent_(t, "keypress", this, this.onHtmlInputChange_),
            n = this.sourceBlock_.workspace.getCanvas(),
            t.onWorkspaceChangeWrapper_ = z.bindEvent_(n, "blocklyWorkspaceChange", this, this.resizeEditor_)
        }
    }
    ,
    z.FieldTextInput.prototype.onHtmlInputChange_ = function(t) {
        var n = z.FieldTextInput.htmlInput_;
        13 == t.keyCode ? z.WidgetDiv.hide() : 27 == t.keyCode ? (this.setText(n.defaultValue),
        z.WidgetDiv.hide()) : (t = n.value) !== n.oldValue_ ? (n.oldValue_ = t,
        this.setText(t),
        this.validate_()) : e.userAgent.WEBKIT && this.sourceBlock_.render()
    }
    ,
    z.FieldTextInput.prototype.validate_ = function() {
        var t = !0;
        e.asserts.assertObject(z.FieldTextInput.htmlInput_);
        var n = z.FieldTextInput.htmlInput_;
        this.changeHandler_ && (t = this.changeHandler_(n.value)),
        null === t ? z.addClass_(n, "blocklyInvalidInput") : z.removeClass_(n, "blocklyInvalidInput")
    }
    ,
    z.FieldTextInput.prototype.resizeEditor_ = function() {
        var t = z.WidgetDiv.DIV
          , n = this.fieldGroup_.getBBox();
        if (t.style.width = n.width + "px",
        n = z.getAbsoluteXY_(this.borderRect_),
        z.RTL) {
            var o = this.borderRect_.getBBox();
            n.x += o.width,
            n.x -= t.offsetWidth
        }
        n.y += 1,
        e.userAgent.WEBKIT && (n.y -= 3),
        t.style.left = n.x + "px",
        t.style.top = n.y + "px"
    }
    ,
    z.FieldTextInput.prototype.widgetDispose_ = function() {
        var e = this;
        return function() {
            var t = z.FieldTextInput.htmlInput_
              , n = t.value;
            e.changeHandler_ && (null === (n = e.changeHandler_(n)) && (n = t.defaultValue)),
            e.setText(n),
            e.sourceBlock_.rendered && e.sourceBlock_.render(),
            z.unbindEvent_(t.onKeyUpWrapper_),
            z.unbindEvent_(t.onKeyPressWrapper_),
            z.unbindEvent_(t.onWorkspaceChangeWrapper_),
            z.FieldTextInput.htmlInput_ = null,
            z.WidgetDiv.DIV.style.width = "auto"
        }
    }
    ,
    z.FieldTextInput.numberValidator = function(e) {
        return e = (e = e.replace(/O/gi, "0")).replace(/,/g, ""),
        e = parseFloat(e || 0),
        isNaN(e) ? null : String(e)
    }
    ,
    z.FieldTextInput.nonnegativeIntegerValidator = function(e) {
        return (e = z.FieldTextInput.numberValidator(e)) && (e = String(Math.max(0, Math.floor(e)))),
        e
    }
    ,
    z.FieldAngle = function(e, t) {
        if (t)
            var n = this
              , o = function(e) {
                return null !== (e = z.FieldAngle.angleValidator.call(n, e)) && t.call(n, e),
                e
            };
        else
            o = z.FieldAngle.angleValidator;
        this.symbol_ = z.createSvgElement("tspan", {}, null),
        this.symbol_.appendChild(document.createTextNode("°")),
        z.FieldAngle.superClass_.constructor.call(this, e, o)
    }
    ,
    e.inherits(z.FieldAngle, z.FieldTextInput),
    z.FieldAngle.prototype.clone = function() {
        return new z.FieldAngle(this.getText(),this.changeHandler_)
    }
    ,
    z.FieldAngle.ROUND = 15,
    z.FieldAngle.HALF = 50,
    z.FieldAngle.RADIUS = z.FieldAngle.HALF - 1,
    z.FieldAngle.prototype.dispose_ = function() {
        var e = this;
        return function() {
            z.FieldAngle.superClass_.dispose_.call(e)(),
            e.gauge_ = null,
            e.clickWrapper_ && z.unbindEvent_(e.clickWrapper_),
            e.moveWrapper1_ && z.unbindEvent_(e.moveWrapper1_),
            e.moveWrapper2_ && z.unbindEvent_(e.moveWrapper2_)
        }
    }
    ,
    z.FieldAngle.prototype.showEditor_ = function() {
        z.FieldAngle.superClass_.showEditor_.call(this, e.userAgent.MOBILE || e.userAgent.ANDROID || e.userAgent.IPAD);
        var t = z.WidgetDiv.DIV;
        if (t.firstChild) {
            t = z.createSvgElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:html": "http://www.w3.org/1999/xhtml",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                version: "1.1",
                height: 2 * z.FieldAngle.HALF + "px",
                width: 2 * z.FieldAngle.HALF + "px"
            }, t);
            var n = z.createSvgElement("circle", {
                cx: z.FieldAngle.HALF,
                cy: z.FieldAngle.HALF,
                r: z.FieldAngle.RADIUS,
                class: "blocklyAngleCircle"
            }, t);
            this.gauge_ = z.createSvgElement("path", {
                class: "blocklyAngleGauge"
            }, t),
            this.line_ = z.createSvgElement("line", {
                x1: z.FieldAngle.HALF,
                y1: z.FieldAngle.HALF,
                class: "blocklyAngleLine"
            }, t);
            for (var o = 0; 360 > o; o += 15)
                z.createSvgElement("line", {
                    x1: z.FieldAngle.HALF + z.FieldAngle.RADIUS,
                    y1: z.FieldAngle.HALF,
                    x2: z.FieldAngle.HALF + z.FieldAngle.RADIUS - (0 == o % 45 ? 10 : 5),
                    y2: z.FieldAngle.HALF,
                    class: "blocklyAngleMarks",
                    transform: "rotate(" + o + ", " + z.FieldAngle.HALF + ", " + z.FieldAngle.HALF + ")"
                }, t);
            t.style.marginLeft = "-35px",
            this.clickWrapper_ = z.bindEvent_(t, "click", this, z.WidgetDiv.hide),
            this.moveWrapper1_ = z.bindEvent_(n, "mousemove", this, this.onMouseMove),
            this.moveWrapper2_ = z.bindEvent_(this.gauge_, "mousemove", this, this.onMouseMove),
            this.updateGraph_()
        }
    }
    ,
    z.FieldAngle.prototype.onMouseMove = function(e) {
        var t = this.gauge_.ownerSVGElement.getBoundingClientRect()
          , n = e.clientX - t.left - z.FieldAngle.HALF;
        e = e.clientY - t.top - z.FieldAngle.HALF,
        t = Math.atan(-e / n),
        isNaN(t) || (t = t / Math.PI * 180,
        0 > n ? t += 180 : 0 < e && (t += 360),
        z.FieldAngle.ROUND && (t = Math.round(t / z.FieldAngle.ROUND) * z.FieldAngle.ROUND),
        360 <= t && (t -= 360),
        t = String(t),
        z.FieldTextInput.htmlInput_.value = t,
        this.setText(t))
    }
    ,
    z.FieldAngle.prototype.setText = function(e) {
        z.FieldAngle.superClass_.setText.call(this, e),
        this.updateGraph_(),
        z.RTL ? this.textElement_.insertBefore(this.symbol_, this.textElement_.firstChild) : this.textElement_.appendChild(this.symbol_),
        this.size_.width = 0
    }
    ,
    z.FieldAngle.prototype.updateGraph_ = function() {
        if (this.gauge_) {
            var e = Number(this.getText()) / 180 * Math.PI;
            if (isNaN(e))
                this.gauge_.setAttribute("d", "M " + z.FieldAngle.HALF + ", " + z.FieldAngle.HALF),
                this.line_.setAttribute("x2", z.FieldAngle.HALF),
                this.line_.setAttribute("y2", z.FieldAngle.HALF);
            else {
                var t = z.FieldAngle.HALF + Math.cos(e) * z.FieldAngle.RADIUS
                  , n = z.FieldAngle.HALF + Math.sin(e) * -z.FieldAngle.RADIUS;
                this.gauge_.setAttribute("d", "M " + z.FieldAngle.HALF + ", " + z.FieldAngle.HALF + " h " + z.FieldAngle.RADIUS + " A " + z.FieldAngle.RADIUS + "," + z.FieldAngle.RADIUS + " 0 " + (e > Math.PI ? 1 : 0) + " 0 " + t + "," + n + " z"),
                this.line_.setAttribute("x2", t),
                this.line_.setAttribute("y2", n)
            }
        }
    }
    ,
    z.FieldAngle.angleValidator = function(e) {
        return null !== (e = z.FieldTextInput.numberValidator(e)) && (0 > (e %= 360) && (e += 360),
        e = String(e)),
        e
    }
    ,
    z.FieldCheckbox = function(e, t) {
        z.FieldCheckbox.superClass_.constructor.call(this, ""),
        this.changeHandler_ = t,
        this.checkElement_ = z.createSvgElement("text", {
            class: "blocklyText",
            x: -3
        }, this.fieldGroup_),
        t = document.createTextNode("✓"),
        this.checkElement_.appendChild(t),
        this.setValue(e)
    }
    ,
    e.inherits(z.FieldCheckbox, z.Field),
    z.FieldCheckbox.prototype.clone = function() {
        return new z.FieldCheckbox(this.getValue(),this.changeHandler_)
    }
    ,
    z.FieldCheckbox.prototype.CURSOR = "default",
    z.FieldCheckbox.prototype.getValue = function() {
        return String(this.state_).toUpperCase()
    }
    ,
    z.FieldCheckbox.prototype.setValue = function(e) {
        e = "TRUE" == e,
        this.state_ !== e && (this.state_ = e,
        this.checkElement_.style.display = e ? "block" : "none",
        this.sourceBlock_ && this.sourceBlock_.rendered && this.sourceBlock_.workspace.fireChangeEvent())
    }
    ,
    z.FieldCheckbox.prototype.showEditor_ = function() {
        var e = !this.state_;
        if (this.changeHandler_) {
            var t = this.changeHandler_(e);
            void 0 !== t && (e = t)
        }
        null !== e && this.setValue(String(e).toUpperCase())
    }
    ,
    e.color = {},
    e.color.names = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    },
    e.color.parse = function(t) {
        var n = {};
        t = String(t);
        var o = e.color.prependHashIfNecessaryHelper(t);
        if (e.color.isValidHexColor_(o))
            return n.hex = e.color.normalizeHex(o),
            n.type = "hex",
            n;
        if ((o = e.color.isValidRgbColor_(t)).length)
            return n.hex = e.color.rgbArrayToHex(o),
            n.type = "rgb",
            n;
        if (e.color.names && (o = e.color.names[t.toLowerCase()]))
            return n.hex = o,
            n.type = "named",
            n;
        throw Error(t + " is not a valid color string")
    }
    ,
    e.color.isValidColor = function(t) {
        var n = e.color.prependHashIfNecessaryHelper(t);
        return !!(e.color.isValidHexColor_(n) || e.color.isValidRgbColor_(t).length || e.color.names && e.color.names[t.toLowerCase()])
    }
    ,
    e.color.parseRgb = function(t) {
        var n = e.color.isValidRgbColor_(t);
        if (!n.length)
            throw Error(t + " is not a valid RGB color");
        return n
    }
    ,
    e.color.hexToRgbStyle = function(t) {
        return e.color.rgbStyle_(e.color.hexToRgb(t))
    }
    ,
    e.color.hexTripletRe_ = /#(.)(.)(.)/,
    e.color.normalizeHex = function(t) {
        if (!e.color.isValidHexColor_(t))
            throw Error("'" + t + "' is not a valid hex color");
        return 4 == t.length && (t = t.replace(e.color.hexTripletRe_, "#$1$1$2$2$3$3")),
        t.toLowerCase()
    }
    ,
    e.color.hexToRgb = function(t) {
        return t = e.color.normalizeHex(t),
        [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t]
    }
    ,
    e.color.rgbToHex = function(e, t, n) {
        if (e = Number(e),
        t = Number(t),
        n = Number(n),
        e != (255 & e) || t != (255 & t) || n != (255 & n))
            throw Error('"(' + e + "," + t + "," + n + '") is not a valid RGB color');
        return t = e << 16 | t << 8 | n,
        16 > e ? "#" + (16777216 | t).toString(16).substr(1) : "#" + t.toString(16)
    }
    ,
    e.color.rgbArrayToHex = function(t) {
        return e.color.rgbToHex(t[0], t[1], t[2])
    }
    ,
    e.color.rgbToHsl = function(e, t, n) {
        e /= 255,
        t /= 255,
        n /= 255;
        var o = Math.max(e, t, n)
          , r = Math.min(e, t, n)
          , i = 0
          , s = 0
          , a = .5 * (o + r);
        return o != r && (o == e ? i = 60 * (t - n) / (o - r) : o == t ? i = 60 * (n - e) / (o - r) + 120 : o == n && (i = 60 * (e - t) / (o - r) + 240),
        s = 0 < a && .5 >= a ? (o - r) / (2 * a) : (o - r) / (2 - 2 * a)),
        [Math.round(i + 360) % 360, s, a]
    }
    ,
    e.color.rgbArrayToHsl = function(t) {
        return e.color.rgbToHsl(t[0], t[1], t[2])
    }
    ,
    e.color.hueToRgb_ = function(e, t, n) {
        return 0 > n ? n += 1 : 1 < n && --n,
        1 > 6 * n ? e + 6 * (t - e) * n : 1 > 2 * n ? t : 2 > 3 * n ? e + (t - e) * (2 / 3 - n) * 6 : e
    }
    ,
    e.color.hslToRgb = function(t, n, o) {
        if (t /= 360,
        0 == n)
            o = n = t = 255 * o;
        else {
            var r = .5 > o ? o * (1 + n) : o + n - n * o
              , i = 2 * o - r;
            o = 255 * e.color.hueToRgb_(i, r, t + 1 / 3),
            n = 255 * e.color.hueToRgb_(i, r, t),
            t = 255 * e.color.hueToRgb_(i, r, t - 1 / 3)
        }
        return [Math.round(o), Math.round(n), Math.round(t)]
    }
    ,
    e.color.hslArrayToRgb = function(t) {
        return e.color.hslToRgb(t[0], t[1], t[2])
    }
    ,
    e.color.validHexColorRe_ = /^#(?:[0-9a-f]{3}){1,2}$/i,
    e.color.isValidHexColor_ = function(t) {
        return e.color.validHexColorRe_.test(t)
    }
    ,
    e.color.rgbColorRe_ = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i,
    e.color.isValidRgbColor_ = function(t) {
        var n = t.match(e.color.rgbColorRe_);
        if (n) {
            t = Number(n[1]);
            var o = Number(n[2]);
            if (n = Number(n[3]),
            0 <= t && 255 >= t && 0 <= o && 255 >= o && 0 <= n && 255 >= n)
                return [t, o, n]
        }
        return []
    }
    ,
    e.color.prependZeroIfNecessaryHelper = function(e) {
        return 1 == e.length ? "0" + e : e
    }
    ,
    e.color.prependHashIfNecessaryHelper = function(e) {
        return "#" == e.charAt(0) ? e : "#" + e
    }
    ,
    e.color.rgbStyle_ = function(e) {
        return "rgb(" + e.join(",") + ")"
    }
    ,
    e.color.hsvToRgb = function(e, t, n) {
        var o = 0
          , r = 0
          , i = 0;
        if (0 == t)
            i = r = o = n;
        else {
            var s = Math.floor(e / 60)
              , a = e / 60 - s;
            e = n * (1 - t);
            var l = n * (1 - t * a);
            switch (t = n * (1 - t * (1 - a)),
            s) {
            case 1:
                o = l,
                r = n,
                i = e;
                break;
            case 2:
                o = e,
                r = n,
                i = t;
                break;
            case 3:
                o = e,
                r = l,
                i = n;
                break;
            case 4:
                o = t,
                r = e,
                i = n;
                break;
            case 5:
                o = n,
                r = e,
                i = l;
                break;
            case 6:
            case 0:
                o = n,
                r = t,
                i = e
            }
        }
        return [Math.round(o), Math.round(r), Math.round(i)]
    }
    ,
    e.color.rgbToHsv = function(e, t, n) {
        var o = Math.max(Math.max(e, t), n)
          , r = Math.min(Math.min(e, t), n);
        if (r == o)
            r = e = 0;
        else {
            var i = o - r;
            r = i / o,
            0 > (e = 60 * (e == o ? (t - n) / i : t == o ? 2 + (n - e) / i : 4 + (e - t) / i)) && (e += 360),
            360 < e && (e -= 360)
        }
        return [e, r, o]
    }
    ,
    e.color.rgbArrayToHsv = function(t) {
        return e.color.rgbToHsv(t[0], t[1], t[2])
    }
    ,
    e.color.hsvArrayToRgb = function(t) {
        return e.color.hsvToRgb(t[0], t[1], t[2])
    }
    ,
    e.color.hexToHsl = function(t) {
        return t = e.color.hexToRgb(t),
        e.color.rgbToHsl(t[0], t[1], t[2])
    }
    ,
    e.color.hslToHex = function(t, n, o) {
        return e.color.rgbArrayToHex(e.color.hslToRgb(t, n, o))
    }
    ,
    e.color.hslArrayToHex = function(t) {
        return e.color.rgbArrayToHex(e.color.hslToRgb(t[0], t[1], t[2]))
    }
    ,
    e.color.hexToHsv = function(t) {
        return e.color.rgbArrayToHsv(e.color.hexToRgb(t))
    }
    ,
    e.color.hsvToHex = function(t, n, o) {
        return e.color.rgbArrayToHex(e.color.hsvToRgb(t, n, o))
    }
    ,
    e.color.hsvArrayToHex = function(t) {
        return e.color.hsvToHex(t[0], t[1], t[2])
    }
    ,
    e.color.hslDistance = function(e, t) {
        var n = .5 >= e[2] ? e[1] * e[2] : e[1] * (1 - e[2])
          , o = .5 >= t[2] ? t[1] * t[2] : t[1] * (1 - t[2]);
        return (e[2] - t[2]) * (e[2] - t[2]) + n * n + o * o - 2 * n * o * Math.cos(2 * (e[0] / 360 - t[0] / 360) * Math.PI)
    }
    ,
    e.color.blend = function(t, n, o) {
        return o = e.math.clamp(o, 0, 1),
        [Math.round(n[0] + o * (t[0] - n[0])), Math.round(n[1] + o * (t[1] - n[1])), Math.round(n[2] + o * (t[2] - n[2]))]
    }
    ,
    e.color.darken = function(t, n) {
        return e.color.blend([0, 0, 0], t, n)
    }
    ,
    e.color.lighten = function(t, n) {
        return e.color.blend([255, 255, 255], t, n)
    }
    ,
    e.color.highContrast = function(t, n) {
        for (var o = [], r = 0; r < n.length; r++)
            o.push({
                color: n[r],
                diff: e.color.yiqBrightnessDiff_(n[r], t) + e.color.colorDiff_(n[r], t)
            });
        return o.sort(function(e, t) {
            return t.diff - e.diff
        }),
        o[0].color
    }
    ,
    e.color.yiqBrightness_ = function(e) {
        return Math.round((299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3)
    }
    ,
    e.color.yiqBrightnessDiff_ = function(t, n) {
        return Math.abs(e.color.yiqBrightness_(t) - e.color.yiqBrightness_(n))
    }
    ,
    e.color.colorDiff_ = function(e, t) {
        return Math.abs(e[0] - t[0]) + Math.abs(e[1] - t[1]) + Math.abs(e[2] - t[2])
    }
    ,
    e.iter = {},
    e.iter.StopIteration = "StopIteration"in e.global ? e.global.StopIteration : {
        message: "StopIteration",
        stack: ""
    },
    e.iter.Iterator = function() {}
    ,
    e.iter.Iterator.prototype.next = function() {
        throw e.iter.StopIteration
    }
    ,
    e.iter.Iterator.prototype.__iterator__ = function() {
        return this
    }
    ,
    e.iter.toIterator = function(t) {
        if (t instanceof e.iter.Iterator)
            return t;
        if ("function" == typeof t.__iterator__)
            return t.__iterator__(!1);
        if (e.isArrayLike(t)) {
            var n = 0
              , o = new e.iter.Iterator;
            return o.next = function() {
                for (; ; ) {
                    if (n >= t.length)
                        throw e.iter.StopIteration;
                    if (n in t)
                        return t[n++];
                    n++
                }
            }
            ,
            o
        }
        throw Error("Not implemented")
    }
    ,
    e.iter.forEach = function(t, n, o) {
        if (e.isArrayLike(t))
            try {
                e.array.forEach(t, n, o)
            } catch (t) {
                if (t !== e.iter.StopIteration)
                    throw t
            }
        else {
            t = e.iter.toIterator(t);
            try {
                for (; ; )
                    n.call(o, t.next(), void 0, t)
            } catch (t) {
                if (t !== e.iter.StopIteration)
                    throw t
            }
        }
    }
    ,
    e.iter.filter = function(t, n, o) {
        var r = e.iter.toIterator(t);
        return (t = new e.iter.Iterator).next = function() {
            for (; ; ) {
                var e = r.next();
                if (n.call(o, e, void 0, r))
                    return e
            }
        }
        ,
        t
    }
    ,
    e.iter.filterFalse = function(t, n, o) {
        return e.iter.filter(t, e.functions.not(n), o)
    }
    ,
    e.iter.range = function(t, n, o) {
        var r = 0
          , i = t
          , s = o || 1;
        if (1 < arguments.length && (r = t,
        i = +n),
        0 == s)
            throw Error("Range step argument must not be zero");
        var a = new e.iter.Iterator;
        return a.next = function() {
            if (0 < s && r >= i || 0 > s && r <= i)
                throw e.iter.StopIteration;
            var t = r;
            return r += s,
            t
        }
        ,
        a
    }
    ,
    e.iter.join = function(t, n) {
        return e.iter.toArray(t).join(n)
    }
    ,
    e.iter.map = function(t, n, o) {
        var r = e.iter.toIterator(t);
        return (t = new e.iter.Iterator).next = function() {
            var e = r.next();
            return n.call(o, e, void 0, r)
        }
        ,
        t
    }
    ,
    e.iter.reduce = function(t, n, o, r) {
        var i = o;
        return e.iter.forEach(t, function(e) {
            i = n.call(r, i, e)
        }),
        i
    }
    ,
    e.iter.some = function(t, n, o) {
        t = e.iter.toIterator(t);
        try {
            for (; ; )
                if (n.call(o, t.next(), void 0, t))
                    return !0
        } catch (t) {
            if (t !== e.iter.StopIteration)
                throw t
        }
        return !1
    }
    ,
    e.iter.every = function(t, n, o) {
        t = e.iter.toIterator(t);
        try {
            for (; ; )
                if (!n.call(o, t.next(), void 0, t))
                    return !1
        } catch (t) {
            if (t !== e.iter.StopIteration)
                throw t
        }
        return !0
    }
    ,
    e.iter.chain = function(t) {
        return e.iter.chainFromIterable(arguments)
    }
    ,
    e.iter.chainFromIterable = function(t) {
        var n = e.iter.toIterator(t);
        t = new e.iter.Iterator;
        var o = null;
        return t.next = function() {
            for (; ; ) {
                if (null == o) {
                    var t = n.next();
                    o = e.iter.toIterator(t)
                }
                try {
                    return o.next()
                } catch (t) {
                    if (t !== e.iter.StopIteration)
                        throw t;
                    o = null
                }
            }
        }
        ,
        t
    }
    ,
    e.iter.dropWhile = function(t, n, o) {
        var r = e.iter.toIterator(t);
        t = new e.iter.Iterator;
        var i = !0;
        return t.next = function() {
            for (; ; ) {
                var e = r.next();
                if (!i || !n.call(o, e, void 0, r))
                    return i = !1,
                    e
            }
        }
        ,
        t
    }
    ,
    e.iter.takeWhile = function(t, n, o) {
        var r = e.iter.toIterator(t);
        return (t = new e.iter.Iterator).next = function() {
            var t = r.next();
            if (n.call(o, t, void 0, r))
                return t;
            throw e.iter.StopIteration
        }
        ,
        t
    }
    ,
    e.iter.toArray = function(t) {
        if (e.isArrayLike(t))
            return e.array.toArray(t);
        t = e.iter.toIterator(t);
        var n = [];
        return e.iter.forEach(t, function(e) {
            n.push(e)
        }),
        n
    }
    ,
    e.iter.equals = function(t, n, o) {
        t = e.iter.zipLongest({}, t, n);
        var r = o || e.array.defaultCompareEquality;
        return e.iter.every(t, function(e) {
            return r(e[0], e[1])
        })
    }
    ,
    e.iter.nextOrValue = function(t, n) {
        try {
            return e.iter.toIterator(t).next()
        } catch (t) {
            if (t != e.iter.StopIteration)
                throw t;
            return n
        }
    }
    ,
    e.iter.product = function(t) {
        if (e.array.some(arguments, function(e) {
            return !e.length
        }) || !arguments.length)
            return new e.iter.Iterator;
        var n = new e.iter.Iterator
          , o = arguments
          , r = e.array.repeat(0, o.length);
        return n.next = function() {
            if (r) {
                for (var t = e.array.map(r, function(e, t) {
                    return o[t][e]
                }), n = r.length - 1; 0 <= n; n--) {
                    if (e.asserts.assert(r),
                    r[n] < o[n].length - 1) {
                        r[n]++;
                        break
                    }
                    if (0 == n) {
                        r = null;
                        break
                    }
                    r[n] = 0
                }
                return t
            }
            throw e.iter.StopIteration
        }
        ,
        n
    }
    ,
    e.iter.cycle = function(t) {
        var n = e.iter.toIterator(t)
          , o = []
          , r = 0;
        t = new e.iter.Iterator;
        var i = !1;
        return t.next = function() {
            var t = null;
            if (!i)
                try {
                    return t = n.next(),
                    o.push(t),
                    t
                } catch (t) {
                    if (t != e.iter.StopIteration || e.array.isEmpty(o))
                        throw t;
                    i = !0
                }
            return t = o[r],
            r = (r + 1) % o.length,
            t
        }
        ,
        t
    }
    ,
    e.iter.count = function(t, n) {
        var o = t || 0
          , r = e.isDef(n) ? n : 1;
        return (t = new e.iter.Iterator).next = function() {
            var e = o;
            return o += r,
            e
        }
        ,
        t
    }
    ,
    e.iter.repeat = function(t) {
        var n = new e.iter.Iterator;
        return n.next = e.functions.constant(t),
        n
    }
    ,
    e.iter.accumulate = function(t) {
        var n = e.iter.toIterator(t)
          , o = 0;
        return (t = new e.iter.Iterator).next = function() {
            return o += n.next()
        }
        ,
        t
    }
    ,
    e.iter.zip = function(t) {
        var n = arguments
          , o = new e.iter.Iterator;
        if (0 < n.length) {
            var r = e.array.map(n, e.iter.toIterator);
            o.next = function() {
                return e.array.map(r, function(e) {
                    return e.next()
                })
            }
        }
        return o
    }
    ,
    e.iter.zipLongest = function(t, n) {
        var o = e.array.slice(arguments, 1)
          , r = new e.iter.Iterator;
        if (0 < o.length) {
            var i = e.array.map(o, e.iter.toIterator);
            r.next = function() {
                var n = !1
                  , o = e.array.map(i, function(o) {
                    try {
                        var r = o.next();
                        n = !0
                    } catch (n) {
                        if (n !== e.iter.StopIteration)
                            throw n;
                        r = t
                    }
                    return r
                });
                if (!n)
                    throw e.iter.StopIteration;
                return o
            }
        }
        return r
    }
    ,
    e.iter.compress = function(t, n) {
        var o = e.iter.toIterator(n);
        return e.iter.filter(t, function() {
            return !!o.next()
        })
    }
    ,
    e.iter.GroupByIterator_ = function(t, n) {
        this.iterator = e.iter.toIterator(t),
        this.keyFunc = n || e.functions.identity
    }
    ,
    e.inherits(e.iter.GroupByIterator_, e.iter.Iterator),
    e.iter.GroupByIterator_.prototype.next = function() {
        for (; this.currentKey == this.targetKey; )
            this.currentValue = this.iterator.next(),
            this.currentKey = this.keyFunc(this.currentValue);
        return this.targetKey = this.currentKey,
        [this.currentKey, this.groupItems_(this.targetKey)]
    }
    ,
    e.iter.GroupByIterator_.prototype.groupItems_ = function(t) {
        for (var n = []; this.currentKey == t; ) {
            n.push(this.currentValue);
            try {
                this.currentValue = this.iterator.next()
            } catch (t) {
                if (t !== e.iter.StopIteration)
                    throw t;
                break
            }
            this.currentKey = this.keyFunc(this.currentValue)
        }
        return n
    }
    ,
    e.iter.groupBy = function(t, n) {
        return new e.iter.GroupByIterator_(t,n)
    }
    ,
    e.iter.starMap = function(t, n, o) {
        var r = e.iter.toIterator(t);
        return (t = new e.iter.Iterator).next = function() {
            var t = e.iter.toArray(r.next());
            return n.apply(o, e.array.concat(t, void 0, r))
        }
        ,
        t
    }
    ,
    e.iter.tee = function(t, n) {
        var o = e.iter.toIterator(t);
        t = e.isNumber(n) ? n : 2;
        var r = e.array.map(e.array.range(t), function() {
            return []
        });
        return e.array.map(r, function(t) {
            var n = new e.iter.Iterator;
            return n.next = function() {
                return e.array.isEmpty(t) && function() {
                    var t = o.next();
                    e.array.forEach(r, function(e) {
                        e.push(t)
                    })
                }(),
                e.asserts.assert(!e.array.isEmpty(t)),
                t.shift()
            }
            ,
            n
        })
    }
    ,
    e.iter.enumerate = function(t, n) {
        return e.iter.zip(e.iter.count(n), t)
    }
    ,
    e.iter.limit = function(t, n) {
        e.asserts.assert(e.math.isInt(n) && 0 <= n);
        var o = e.iter.toIterator(t);
        t = new e.iter.Iterator;
        var r = n;
        return t.next = function() {
            if (0 < r--)
                return o.next();
            throw e.iter.StopIteration
        }
        ,
        t
    }
    ,
    e.iter.consume = function(t, n) {
        for (e.asserts.assert(e.math.isInt(n) && 0 <= n),
        t = e.iter.toIterator(t); 0 < n--; )
            e.iter.nextOrValue(t, null);
        return t
    }
    ,
    e.iter.slice = function(t, n, o) {
        return e.asserts.assert(e.math.isInt(n) && 0 <= n),
        t = e.iter.consume(t, n),
        e.isNumber(o) && (e.asserts.assert(e.math.isInt(o) && o >= n),
        t = e.iter.limit(t, o - n)),
        t
    }
    ,
    e.iter.hasDuplicates_ = function(t) {
        var n = [];
        return e.array.removeDuplicates(t, n),
        t.length != n.length
    }
    ,
    e.iter.permutations = function(t, n) {
        return t = e.iter.toArray(t),
        n = e.isNumber(n) ? n : t.length,
        n = e.array.repeat(t, n),
        n = e.iter.product.apply(void 0, n),
        e.iter.filter(n, function(t) {
            return !e.iter.hasDuplicates_(t)
        })
    }
    ,
    e.iter.combinations = function(t, n) {
        function o(e) {
            return r[e]
        }
        var r = e.iter.toArray(t);
        t = e.iter.range(r.length),
        n = e.iter.permutations(t, n);
        var i = e.iter.filter(n, function(t) {
            return e.array.isSorted(t)
        });
        return (n = new e.iter.Iterator).next = function() {
            return e.array.map(i.next(), o)
        }
        ,
        n
    }
    ,
    e.iter.combinationsWithReplacement = function(t, n) {
        function o(e) {
            return r[e]
        }
        var r = e.iter.toArray(t);
        t = e.array.range(r.length),
        n = e.array.repeat(t, n),
        n = e.iter.product.apply(void 0, n);
        var i = e.iter.filter(n, function(t) {
            return e.array.isSorted(t)
        });
        return (n = new e.iter.Iterator).next = function() {
            return e.array.map(i.next(), o)
        }
        ,
        n
    }
    ,
    e.dom.TagWalkType = {
        START_TAG: 1,
        OTHER: 0,
        END_TAG: -1
    },
    e.dom.TagIterator = function(t, n, o, r, i) {
        this.reversed = !!n,
        this.node = null,
        this.tagType = e.dom.TagWalkType.OTHER,
        this.started_ = !1,
        this.constrained = !o,
        t && this.setPosition(t, r),
        this.depth = null != i ? i : this.tagType || 0,
        this.reversed && (this.depth *= -1)
    }
    ,
    e.inherits(e.dom.TagIterator, e.iter.Iterator),
    e.dom.TagIterator.prototype.setPosition = function(t, n, o) {
        (this.node = t) && (e.isNumber(n) ? this.tagType = n : this.tagType = this.node.nodeType != e.dom.NodeType.ELEMENT ? e.dom.TagWalkType.OTHER : this.reversed ? e.dom.TagWalkType.END_TAG : e.dom.TagWalkType.START_TAG),
        e.isNumber(o) && (this.depth = o)
    }
    ,
    e.dom.TagIterator.prototype.copyFrom = function(e) {
        this.node = e.node,
        this.tagType = e.tagType,
        this.depth = e.depth,
        this.reversed = e.reversed,
        this.constrained = e.constrained
    }
    ,
    e.dom.TagIterator.prototype.clone = function() {
        return new e.dom.TagIterator(this.node,this.reversed,!this.constrained,this.tagType,this.depth)
    }
    ,
    e.dom.TagIterator.prototype.skipTag = function() {
        var t = this.reversed ? e.dom.TagWalkType.END_TAG : e.dom.TagWalkType.START_TAG;
        this.tagType == t && (this.tagType = -1 * t,
        this.depth += this.tagType * (this.reversed ? -1 : 1))
    }
    ,
    e.dom.TagIterator.prototype.restartTag = function() {
        var t = this.reversed ? e.dom.TagWalkType.START_TAG : e.dom.TagWalkType.END_TAG;
        this.tagType == t && (this.tagType = -1 * t,
        this.depth += this.tagType * (this.reversed ? -1 : 1))
    }
    ,
    e.dom.TagIterator.prototype.next = function() {
        if (this.started_) {
            if (!this.node || this.constrained && 0 == this.depth)
                throw e.iter.StopIteration;
            var t = this.node
              , n = this.reversed ? e.dom.TagWalkType.END_TAG : e.dom.TagWalkType.START_TAG;
            if (this.tagType == n) {
                var o = this.reversed ? t.lastChild : t.firstChild;
                o ? this.setPosition(o) : this.setPosition(t, -1 * n)
            } else
                (o = this.reversed ? t.previousSibling : t.nextSibling) ? this.setPosition(o) : this.setPosition(t.parentNode, -1 * n);
            this.depth += this.tagType * (this.reversed ? -1 : 1)
        } else
            this.started_ = !0;
        if (t = this.node,
        !this.node)
            throw e.iter.StopIteration;
        return t
    }
    ,
    e.dom.TagIterator.prototype.isStarted = function() {
        return this.started_
    }
    ,
    e.dom.TagIterator.prototype.isStartTag = function() {
        return this.tagType == e.dom.TagWalkType.START_TAG
    }
    ,
    e.dom.TagIterator.prototype.isEndTag = function() {
        return this.tagType == e.dom.TagWalkType.END_TAG
    }
    ,
    e.dom.TagIterator.prototype.isNonElement = function() {
        return this.tagType == e.dom.TagWalkType.OTHER
    }
    ,
    e.dom.TagIterator.prototype.equals = function(e) {
        return e.node == this.node && (!this.node || e.tagType == this.tagType)
    }
    ,
    e.dom.TagIterator.prototype.splice = function(t) {
        var n = this.node;
        this.restartTag(),
        this.reversed = !this.reversed,
        e.dom.TagIterator.prototype.next.call(this),
        this.reversed = !this.reversed;
        for (var o = e.isArrayLike(arguments[0]) ? arguments[0] : arguments, r = o.length - 1; 0 <= r; r--)
            e.dom.insertSiblingAfter(o[r], n);
        e.dom.removeNode(n)
    }
    ,
    e.dom.NodeIterator = function(t, n, o, r) {
        e.dom.TagIterator.call(this, t, n, o, null, r)
    }
    ,
    e.inherits(e.dom.NodeIterator, e.dom.TagIterator),
    e.dom.NodeIterator.prototype.next = function() {
        do {
            e.dom.NodeIterator.superClass_.next.call(this)
        } while (this.isEndTag());
        return this.node
    }
    ,
    e.userAgent.product = {},
    e.userAgent.product.ASSUME_FIREFOX = !1,
    e.userAgent.product.ASSUME_IPHONE = !1,
    e.userAgent.product.ASSUME_IPAD = !1,
    e.userAgent.product.ASSUME_ANDROID = !1,
    e.userAgent.product.ASSUME_CHROME = !1,
    e.userAgent.product.ASSUME_SAFARI = !1,
    e.userAgent.product.PRODUCT_KNOWN_ = e.userAgent.ASSUME_IE || e.userAgent.ASSUME_EDGE || e.userAgent.ASSUME_OPERA || e.userAgent.product.ASSUME_FIREFOX || e.userAgent.product.ASSUME_IPHONE || e.userAgent.product.ASSUME_IPAD || e.userAgent.product.ASSUME_ANDROID || e.userAgent.product.ASSUME_CHROME || e.userAgent.product.ASSUME_SAFARI,
    e.userAgent.product.OPERA = e.userAgent.OPERA,
    e.userAgent.product.IE = e.userAgent.IE,
    e.userAgent.product.EDGE = e.userAgent.EDGE,
    e.userAgent.product.FIREFOX = e.userAgent.product.PRODUCT_KNOWN_ ? e.userAgent.product.ASSUME_FIREFOX : e.labs.userAgent.browser.isFirefox(),
    e.userAgent.product.isIphoneOrIpod_ = function() {
        return e.labs.userAgent.platform.isIphone() || e.labs.userAgent.platform.isIpod()
    }
    ,
    e.userAgent.product.IPHONE = e.userAgent.product.PRODUCT_KNOWN_ ? e.userAgent.product.ASSUME_IPHONE : e.userAgent.product.isIphoneOrIpod_(),
    e.userAgent.product.IPAD = e.userAgent.product.PRODUCT_KNOWN_ ? e.userAgent.product.ASSUME_IPAD : e.labs.userAgent.platform.isIpad(),
    e.userAgent.product.ANDROID = e.userAgent.product.PRODUCT_KNOWN_ ? e.userAgent.product.ASSUME_ANDROID : e.labs.userAgent.browser.isAndroidBrowser(),
    e.userAgent.product.CHROME = e.userAgent.product.PRODUCT_KNOWN_ ? e.userAgent.product.ASSUME_CHROME : e.labs.userAgent.browser.isChrome(),
    e.userAgent.product.isSafariDesktop_ = function() {
        return e.labs.userAgent.browser.isSafari() && !e.labs.userAgent.platform.isIos()
    }
    ,
    e.userAgent.product.SAFARI = e.userAgent.product.PRODUCT_KNOWN_ ? e.userAgent.product.ASSUME_SAFARI : e.userAgent.product.isSafariDesktop_(),
    e.dom.dataset = {},
    e.dom.dataset.ALLOWED_ = !e.userAgent.product.IE && !e.labs.userAgent.browser.isSafari(),
    e.dom.dataset.PREFIX_ = "data-",
    e.dom.dataset.isValidProperty_ = function(e) {
        return !/-[a-z]/.test(e)
    }
    ,
    e.dom.dataset.set = function(t, n, o) {
        if (e.dom.dataset.ALLOWED_ && t.dataset)
            t.dataset[n] = o;
        else {
            if (!e.dom.dataset.isValidProperty_(n))
                throw Error(e.DEBUG ? '"' + n + '" is not a valid dataset property name.' : "");
            t.setAttribute(e.dom.dataset.PREFIX_ + e.string.toSelectorCase(n), o)
        }
    }
    ,
    e.dom.dataset.get = function(t, n) {
        return e.dom.dataset.isValidProperty_(n) ? e.dom.dataset.ALLOWED_ && t.dataset ? !e.labs.userAgent.browser.isAndroidBrowser() || n in t.dataset ? void 0 === (t = t.dataset[n]) ? null : t : null : t.getAttribute(e.dom.dataset.PREFIX_ + e.string.toSelectorCase(n)) : null
    }
    ,
    e.dom.dataset.remove = function(t, n) {
        e.dom.dataset.isValidProperty_(n) && (e.dom.dataset.ALLOWED_ && t.dataset ? e.dom.dataset.has(t, n) && delete t.dataset[n] : t.removeAttribute(e.dom.dataset.PREFIX_ + e.string.toSelectorCase(n)))
    }
    ,
    e.dom.dataset.has = function(t, n) {
        return !!e.dom.dataset.isValidProperty_(n) && (e.dom.dataset.ALLOWED_ && t.dataset ? n in t.dataset : t.hasAttribute ? t.hasAttribute(e.dom.dataset.PREFIX_ + e.string.toSelectorCase(n)) : !!t.getAttribute(e.dom.dataset.PREFIX_ + e.string.toSelectorCase(n)))
    }
    ,
    e.dom.dataset.getAll = function(t) {
        if (e.dom.dataset.ALLOWED_ && t.dataset)
            return t.dataset;
        var n = {};
        t = t.attributes;
        for (var o = 0; o < t.length; ++o) {
            var r = t[o];
            if (e.string.startsWith(r.name, e.dom.dataset.PREFIX_))
                n[e.string.toCamelCase(r.name.substr(5))] = r.value
        }
        return n
    }
    ,
    e.ui.PaletteRenderer = function() {
        e.ui.ControlRenderer.call(this)
    }
    ,
    e.inherits(e.ui.PaletteRenderer, e.ui.ControlRenderer),
    e.addSingletonGetter(e.ui.PaletteRenderer),
    e.ui.PaletteRenderer.cellId_ = 0,
    e.ui.PaletteRenderer.CSS_CLASS = "goog-palette",
    e.ui.PaletteRenderer.GRID_WIDTH_ATTRIBUTE = "gridWidth",
    e.ui.PaletteRenderer.prototype.createDom = function(t) {
        var n = this.getClassNames(t);
        return n = t.getDomHelper().createDom("DIV", n, this.createGrid(t.getContent(), t.getSize(), t.getDomHelper())),
        e.a11y.aria.setRole(n, e.a11y.aria.Role.GRID),
        e.dom.dataset.set(n, e.ui.PaletteRenderer.GRID_WIDTH_ATTRIBUTE, t.getSize().width),
        n
    }
    ,
    e.ui.PaletteRenderer.prototype.createGrid = function(e, t, n) {
        for (var o = [], r = 0, i = 0; r < t.height; r++) {
            for (var s = [], a = 0; a < t.width; a++) {
                var l = e && e[i++];
                s.push(this.createCell(l, n))
            }
            o.push(this.createRow(s, n))
        }
        return this.createTable(o, n)
    }
    ,
    e.ui.PaletteRenderer.prototype.createTable = function(e, t) {
        return (e = t.createDom("TABLE", this.getCssClass() + "-table", t.createDom("TBODY", this.getCssClass() + "-body", e))).cellSpacing = "0",
        e.cellPadding = "0",
        e
    }
    ,
    e.ui.PaletteRenderer.prototype.createRow = function(t, n) {
        return t = n.createDom("TR", this.getCssClass() + "-row", t),
        e.a11y.aria.setRole(t, e.a11y.aria.Role.ROW),
        t
    }
    ,
    e.ui.PaletteRenderer.prototype.createCell = function(t, n) {
        return t = n.createDom("TD", {
            class: this.getCssClass() + "-cell",
            id: this.getCssClass() + "-cell-" + e.ui.PaletteRenderer.cellId_++
        }, t),
        e.a11y.aria.setRole(t, e.a11y.aria.Role.GRIDCELL),
        e.a11y.aria.setState(t, e.a11y.aria.State.SELECTED, !1),
        this.maybeUpdateAriaLabel_(t),
        t
    }
    ,
    e.ui.PaletteRenderer.prototype.maybeUpdateAriaLabel_ = function(t) {
        if (!e.dom.getTextContent(t) && !e.a11y.aria.getLabel(t)) {
            for (var n, o = new e.dom.NodeIterator(t), r = ""; !r && (n = e.iter.nextOrValue(o, null)); )
                n.nodeType == e.dom.NodeType.ELEMENT && (r = e.a11y.aria.getLabel(n) || n.title);
            r && e.a11y.aria.setLabel(t, r)
        }
    }
    ,
    e.ui.PaletteRenderer.prototype.canDecorate = function() {
        return !1
    }
    ,
    e.ui.PaletteRenderer.prototype.decorate = function() {
        return null
    }
    ,
    e.ui.PaletteRenderer.prototype.setContent = function(t, n) {
        if (t) {
            var o = e.dom.getElementsByTagNameAndClass("TBODY", this.getCssClass() + "-body", t)[0];
            if (o) {
                var r = 0;
                if (e.array.forEach(o.rows, function(t) {
                    e.array.forEach(t.cells, function(t) {
                        if (e.dom.removeChildren(t),
                        e.a11y.aria.removeState(t, e.a11y.aria.State.LABEL),
                        n) {
                            var o = n[r++];
                            o && (e.dom.appendChild(t, o),
                            this.maybeUpdateAriaLabel_(t))
                        }
                    }, this)
                }, this),
                r < n.length) {
                    for (var i = [], s = e.dom.getDomHelper(t), a = e.dom.dataset.get(t, e.ui.PaletteRenderer.GRID_WIDTH_ATTRIBUTE); r < n.length; ) {
                        var l = n[r++];
                        i.push(this.createCell(l, s)),
                        i.length == a && (l = this.createRow(i, s),
                        e.dom.appendChild(o, l),
                        i.length = 0)
                    }
                    if (0 < i.length) {
                        for (; i.length < a; )
                            i.push(this.createCell("", s));
                        l = this.createRow(i, s),
                        e.dom.appendChild(o, l)
                    }
                }
            }
            e.style.setUnselectable(t, !0, e.userAgent.GECKO)
        }
    }
    ,
    e.ui.PaletteRenderer.prototype.getContainingItem = function(t, n) {
        for (t = t.getElement(); n && n.nodeType == e.dom.NodeType.ELEMENT && n != t; ) {
            if ("TD" == n.tagName && e.dom.classlist.contains(n, this.getCssClass() + "-cell"))
                return n.firstChild;
            n = n.parentNode
        }
        return null
    }
    ,
    e.ui.PaletteRenderer.prototype.highlightCell = function(t, n, o) {
        n && (n = this.getCellForItem(n),
        e.asserts.assert(n),
        e.dom.classlist.enable(n, this.getCssClass() + "-cell-hover", o),
        o ? e.a11y.aria.setState(t.getElementStrict(), e.a11y.aria.State.ACTIVEDESCENDANT, n.id) : n.id == e.a11y.aria.getState(t.getElementStrict(), e.a11y.aria.State.ACTIVEDESCENDANT) && e.a11y.aria.removeState(t.getElementStrict(), e.a11y.aria.State.ACTIVEDESCENDANT))
    }
    ,
    e.ui.PaletteRenderer.prototype.getCellForItem = function(e) {
        return e ? e.parentNode : null
    }
    ,
    e.ui.PaletteRenderer.prototype.selectCell = function(t, n, o) {
        n && (t = n.parentNode,
        e.dom.classlist.enable(t, this.getCssClass() + "-cell-selected", o),
        e.a11y.aria.setState(t, e.a11y.aria.State.SELECTED, o))
    }
    ,
    e.ui.PaletteRenderer.prototype.getCssClass = function() {
        return e.ui.PaletteRenderer.CSS_CLASS
    }
    ,
    e.ui.SelectionModel = function(t) {
        e.events.EventTarget.call(this),
        this.items_ = [],
        this.addItems(t)
    }
    ,
    e.inherits(e.ui.SelectionModel, e.events.EventTarget),
    e.tagUnsealableClass(e.ui.SelectionModel),
    e.ui.SelectionModel.prototype.selectedItem_ = null,
    e.ui.SelectionModel.prototype.selectionHandler_ = null,
    e.ui.SelectionModel.prototype.getSelectionHandler = function() {
        return this.selectionHandler_
    }
    ,
    e.ui.SelectionModel.prototype.setSelectionHandler = function(e) {
        this.selectionHandler_ = e
    }
    ,
    e.ui.SelectionModel.prototype.getItemCount = function() {
        return this.items_.length
    }
    ,
    e.ui.SelectionModel.prototype.indexOfItem = function(t) {
        return t ? e.array.indexOf(this.items_, t) : -1
    }
    ,
    e.ui.SelectionModel.prototype.getFirst = function() {
        return this.items_[0]
    }
    ,
    e.ui.SelectionModel.prototype.getLast = function() {
        return this.items_[this.items_.length - 1]
    }
    ,
    e.ui.SelectionModel.prototype.getItemAt = function(e) {
        return this.items_[e] || null
    }
    ,
    e.ui.SelectionModel.prototype.addItems = function(t) {
        t && (e.array.forEach(t, function(e) {
            this.selectItem_(e, !1)
        }, this),
        e.array.extend(this.items_, t))
    }
    ,
    e.ui.SelectionModel.prototype.addItem = function(e) {
        this.addItemAt(e, this.getItemCount())
    }
    ,
    e.ui.SelectionModel.prototype.addItemAt = function(t, n) {
        t && (this.selectItem_(t, !1),
        e.array.insertAt(this.items_, t, n))
    }
    ,
    e.ui.SelectionModel.prototype.removeItem = function(t) {
        t && e.array.remove(this.items_, t) && t == this.selectedItem_ && (this.selectedItem_ = null,
        this.dispatchEvent(e.events.EventType.SELECT))
    }
    ,
    e.ui.SelectionModel.prototype.removeItemAt = function(e) {
        this.removeItem(this.getItemAt(e))
    }
    ,
    e.ui.SelectionModel.prototype.getSelectedItem = function() {
        return this.selectedItem_
    }
    ,
    e.ui.SelectionModel.prototype.getItems = function() {
        return e.array.clone(this.items_)
    }
    ,
    e.ui.SelectionModel.prototype.setSelectedItem = function(t) {
        t != this.selectedItem_ && (this.selectItem_(this.selectedItem_, !1),
        this.selectedItem_ = t,
        this.selectItem_(t, !0)),
        this.dispatchEvent(e.events.EventType.SELECT)
    }
    ,
    e.ui.SelectionModel.prototype.getSelectedIndex = function() {
        return this.indexOfItem(this.selectedItem_)
    }
    ,
    e.ui.SelectionModel.prototype.setSelectedIndex = function(e) {
        this.setSelectedItem(this.getItemAt(e))
    }
    ,
    e.ui.SelectionModel.prototype.clear = function() {
        e.array.clear(this.items_),
        this.selectedItem_ = null
    }
    ,
    e.ui.SelectionModel.prototype.disposeInternal = function() {
        e.ui.SelectionModel.superClass_.disposeInternal.call(this),
        delete this.items_,
        this.selectedItem_ = null
    }
    ,
    e.ui.SelectionModel.prototype.selectItem_ = function(e, t) {
        e && ("function" == typeof this.selectionHandler_ ? this.selectionHandler_(e, t) : "function" == typeof e.setSelected && e.setSelected(t))
    }
    ,
    e.ui.Palette = function(t, n, o) {
        e.ui.Control.call(this, t, n || e.ui.PaletteRenderer.getInstance(), o),
        this.setAutoStates(e.ui.Component.State.CHECKED | e.ui.Component.State.SELECTED | e.ui.Component.State.OPENED, !1),
        this.currentCellControl_ = new e.ui.Palette.CurrentCell_,
        this.currentCellControl_.setParentEventTarget(this),
        this.lastHighlightedIndex_ = -1
    }
    ,
    e.inherits(e.ui.Palette, e.ui.Control),
    e.tagUnsealableClass(e.ui.Palette),
    e.ui.Palette.EventType = {
        AFTER_HIGHLIGHT: e.events.getUniqueId("afterhighlight")
    },
    e.ui.Palette.prototype.size_ = null,
    e.ui.Palette.prototype.highlightedIndex_ = -1,
    e.ui.Palette.prototype.selectionModel_ = null,
    e.ui.Palette.prototype.disposeInternal = function() {
        e.ui.Palette.superClass_.disposeInternal.call(this),
        this.selectionModel_ && (this.selectionModel_.dispose(),
        this.selectionModel_ = null),
        this.size_ = null,
        this.currentCellControl_.dispose()
    }
    ,
    e.ui.Palette.prototype.setContentInternal = function(t) {
        e.ui.Palette.superClass_.setContentInternal.call(this, t),
        this.adjustSize_(),
        this.selectionModel_ ? (this.selectionModel_.clear(),
        this.selectionModel_.addItems(t)) : (this.selectionModel_ = new e.ui.SelectionModel(t),
        this.selectionModel_.setSelectionHandler(e.bind(this.selectItem_, this)),
        this.getHandler().listen(this.selectionModel_, e.events.EventType.SELECT, this.handleSelectionChange)),
        this.highlightedIndex_ = -1
    }
    ,
    e.ui.Palette.prototype.getCaption = function() {
        return ""
    }
    ,
    e.ui.Palette.prototype.setCaption = function() {}
    ,
    e.ui.Palette.prototype.handleMouseOver = function(t) {
        e.ui.Palette.superClass_.handleMouseOver.call(this, t);
        var n = this.getRenderer().getContainingItem(this, t.target);
        n && t.relatedTarget && e.dom.contains(n, t.relatedTarget) || n != this.getHighlightedItem() && this.setHighlightedItem(n)
    }
    ,
    e.ui.Palette.prototype.handleMouseDown = function(t) {
        e.ui.Palette.superClass_.handleMouseDown.call(this, t),
        this.isActive() && ((t = this.getRenderer().getContainingItem(this, t.target)) != this.getHighlightedItem() && this.setHighlightedItem(t))
    }
    ,
    e.ui.Palette.prototype.performActionInternal = function(t) {
        var n = this.getHighlightedItem();
        return !!n && (t && this.shouldSelectHighlightedItem_(t) && this.setSelectedItem(n),
        e.ui.Palette.superClass_.performActionInternal.call(this, t))
    }
    ,
    e.ui.Palette.prototype.shouldSelectHighlightedItem_ = function(e) {
        return !this.getSelectedItem() || ("mouseup" != e.type || !!this.getRenderer().getContainingItem(this, e.target))
    }
    ,
    e.ui.Palette.prototype.handleKeyEvent = function(t) {
        var n = this.getContent();
        n = n ? n.length : 0;
        var o = this.size_.width;
        if (0 == n || !this.isEnabled())
            return !1;
        if (t.keyCode == e.events.KeyCodes.ENTER || t.keyCode == e.events.KeyCodes.SPACE)
            return this.performActionInternal(t);
        if (t.keyCode == e.events.KeyCodes.HOME)
            return this.setHighlightedIndex(0),
            !0;
        if (t.keyCode == e.events.KeyCodes.END)
            return this.setHighlightedIndex(n - 1),
            !0;
        var r = 0 > this.highlightedIndex_ ? this.getSelectedIndex() : this.highlightedIndex_;
        switch (t.keyCode) {
        case e.events.KeyCodes.LEFT:
            return -1 != r && 0 != r || (r = n),
            this.setHighlightedIndex(r - 1),
            t.preventDefault(),
            !0;
        case e.events.KeyCodes.RIGHT:
            return r == n - 1 && (r = -1),
            this.setHighlightedIndex(r + 1),
            t.preventDefault(),
            !0;
        case e.events.KeyCodes.UP:
            if (-1 == r && (r = n + o - 1),
            r >= o)
                return this.setHighlightedIndex(r - o),
                t.preventDefault(),
                !0;
            break;
        case e.events.KeyCodes.DOWN:
            if (-1 == r && (r = -o),
            r < n - o)
                return this.setHighlightedIndex(r + o),
                t.preventDefault(),
                !0
        }
        return !1
    }
    ,
    e.ui.Palette.prototype.handleSelectionChange = function() {}
    ,
    e.ui.Palette.prototype.getSize = function() {
        return this.size_
    }
    ,
    e.ui.Palette.prototype.setSize = function(t, n) {
        if (this.getElement())
            throw Error(e.ui.Component.Error.ALREADY_RENDERED);
        this.size_ = e.isNumber(t) ? new e.math.Size(t,n) : t,
        this.adjustSize_()
    }
    ,
    e.ui.Palette.prototype.getHighlightedIndex = function() {
        return this.highlightedIndex_
    }
    ,
    e.ui.Palette.prototype.getHighlightedItem = function() {
        var e = this.getContent();
        return e && e[this.highlightedIndex_]
    }
    ,
    e.ui.Palette.prototype.getHighlightedCellElement_ = function() {
        return this.getRenderer().getCellForItem(this.getHighlightedItem())
    }
    ,
    e.ui.Palette.prototype.setHighlightedIndex = function(t) {
        t != this.highlightedIndex_ && (this.highlightIndex_(this.highlightedIndex_, !1),
        this.lastHighlightedIndex_ = this.highlightedIndex_,
        this.highlightedIndex_ = t,
        this.highlightIndex_(t, !0),
        this.dispatchEvent(e.ui.Palette.EventType.AFTER_HIGHLIGHT))
    }
    ,
    e.ui.Palette.prototype.setHighlightedItem = function(t) {
        var n = this.getContent();
        this.setHighlightedIndex(n && t ? e.array.indexOf(n, t) : -1)
    }
    ,
    e.ui.Palette.prototype.getSelectedIndex = function() {
        return this.selectionModel_ ? this.selectionModel_.getSelectedIndex() : -1
    }
    ,
    e.ui.Palette.prototype.getSelectedItem = function() {
        return this.selectionModel_ ? this.selectionModel_.getSelectedItem() : null
    }
    ,
    e.ui.Palette.prototype.setSelectedIndex = function(e) {
        this.selectionModel_ && this.selectionModel_.setSelectedIndex(e)
    }
    ,
    e.ui.Palette.prototype.setSelectedItem = function(e) {
        this.selectionModel_ && this.selectionModel_.setSelectedItem(e)
    }
    ,
    e.ui.Palette.prototype.highlightIndex_ = function(e, t) {
        if (this.getElement()) {
            var n = this.getContent();
            if (n && 0 <= e && e < n.length) {
                var o = this.getHighlightedCellElement_();
                this.currentCellControl_.getElement() != o && this.currentCellControl_.setElementInternal(o),
                this.currentCellControl_.tryHighlight(t) && this.getRenderer().highlightCell(this, n[e], t)
            }
        }
    }
    ,
    e.ui.Palette.prototype.setHighlighted = function(t) {
        t && -1 == this.highlightedIndex_ ? this.setHighlightedIndex(-1 < this.lastHighlightedIndex_ ? this.lastHighlightedIndex_ : 0) : t || this.setHighlightedIndex(-1),
        e.ui.Palette.superClass_.setHighlighted.call(this, t)
    }
    ,
    e.ui.Palette.prototype.selectItem_ = function(e, t) {
        this.getElement() && this.getRenderer().selectCell(this, e, t)
    }
    ,
    e.ui.Palette.prototype.adjustSize_ = function() {
        var t = this.getContent();
        t ? this.size_ && this.size_.width ? (t = Math.ceil(t.length / this.size_.width),
        (!e.isNumber(this.size_.height) || this.size_.height < t) && (this.size_.height = t)) : (t = Math.ceil(Math.sqrt(t.length)),
        this.size_ = new e.math.Size(t,t)) : this.size_ = new e.math.Size(0,0)
    }
    ,
    e.ui.Palette.CurrentCell_ = function() {
        e.ui.Control.call(this, null),
        this.setDispatchTransitionEvents(e.ui.Component.State.HOVER, !0)
    }
    ,
    e.inherits(e.ui.Palette.CurrentCell_, e.ui.Control),
    e.ui.Palette.CurrentCell_.prototype.tryHighlight = function(e) {
        return this.setHighlighted(e),
        this.isHighlighted() == e
    }
    ,
    e.ui.ColorPalette = function(t, n, o) {
        this.colors_ = t || [],
        e.ui.Palette.call(this, null, n || e.ui.PaletteRenderer.getInstance(), o),
        this.setColors(this.colors_)
    }
    ,
    e.inherits(e.ui.ColorPalette, e.ui.Palette),
    e.tagUnsealableClass(e.ui.ColorPalette),
    e.ui.ColorPalette.prototype.normalizedColors_ = null,
    e.ui.ColorPalette.prototype.labels_ = null,
    e.ui.ColorPalette.prototype.getColors = function() {
        return this.colors_
    }
    ,
    e.ui.ColorPalette.prototype.setColors = function(e, t) {
        this.colors_ = e,
        this.labels_ = t || null,
        this.normalizedColors_ = null,
        this.setContent(this.createColorNodes())
    }
    ,
    e.ui.ColorPalette.prototype.getSelectedColor = function() {
        var t = this.getSelectedItem();
        return t ? (t = e.style.getStyle(t, "background-color"),
        e.ui.ColorPalette.parseColor_(t)) : null
    }
    ,
    e.ui.ColorPalette.prototype.setSelectedColor = function(t) {
        t = e.ui.ColorPalette.parseColor_(t),
        this.normalizedColors_ || (this.normalizedColors_ = e.array.map(this.colors_, function(t) {
            return e.ui.ColorPalette.parseColor_(t)
        })),
        this.setSelectedIndex(t ? e.array.indexOf(this.normalizedColors_, t) : -1)
    }
    ,
    e.ui.ColorPalette.prototype.createColorNodes = function() {
        return e.array.map(this.colors_, function(t, n) {
            var o = this.getDomHelper().createDom("DIV", {
                class: this.getRenderer().getCssClass() + "-colorswatch",
                style: "background-color:" + t
            });
            return o.title = this.labels_ && this.labels_[n] ? this.labels_[n] : "#" == t.charAt(0) ? "RGB (" + e.color.hexToRgb(t).join(", ") + ")" : t,
            o
        }, this)
    }
    ,
    e.ui.ColorPalette.parseColor_ = function(t) {
        if (t)
            try {
                return e.color.parse(t).hex
            } catch (e) {}
        return null
    }
    ,
    e.ui.ColorPicker = function(t, n) {
        e.ui.Component.call(this, t),
        this.colorPalette_ = n || null,
        this.getHandler().listen(this, e.ui.Component.EventType.ACTION, this.onColorPaletteAction_)
    }
    ,
    e.inherits(e.ui.ColorPicker, e.ui.Component),
    e.ui.ColorPicker.DEFAULT_NUM_COLS = 5,
    e.ui.ColorPicker.EventType = {
        CHANGE: "change"
    },
    e.ui.ColorPicker.prototype.focusable_ = !0,
    e.ui.ColorPicker.prototype.getColors = function() {
        return this.colorPalette_ ? this.colorPalette_.getColors() : null
    }
    ,
    e.ui.ColorPicker.prototype.setColors = function(e) {
        this.colorPalette_ ? this.colorPalette_.setColors(e) : this.createColorPalette_(e)
    }
    ,
    e.ui.ColorPicker.prototype.addColors = function(e) {
        this.setColors(e)
    }
    ,
    e.ui.ColorPicker.prototype.setSize = function(e) {
        this.colorPalette_ || this.createColorPalette_([]),
        this.colorPalette_.setSize(e)
    }
    ,
    e.ui.ColorPicker.prototype.getSize = function() {
        return this.colorPalette_ ? this.colorPalette_.getSize() : null
    }
    ,
    e.ui.ColorPicker.prototype.setColumnCount = function(e) {
        this.setSize(e)
    }
    ,
    e.ui.ColorPicker.prototype.getSelectedIndex = function() {
        return this.colorPalette_ ? this.colorPalette_.getSelectedIndex() : -1
    }
    ,
    e.ui.ColorPicker.prototype.setSelectedIndex = function(e) {
        this.colorPalette_ && this.colorPalette_.setSelectedIndex(e)
    }
    ,
    e.ui.ColorPicker.prototype.getSelectedColor = function() {
        return this.colorPalette_ ? this.colorPalette_.getSelectedColor() : null
    }
    ,
    e.ui.ColorPicker.prototype.setSelectedColor = function(e) {
        this.colorPalette_ && this.colorPalette_.setSelectedColor(e)
    }
    ,
    e.ui.ColorPicker.prototype.isFocusable = function() {
        return this.focusable_
    }
    ,
    e.ui.ColorPicker.prototype.setFocusable = function(t) {
        this.focusable_ = t,
        this.colorPalette_ && this.colorPalette_.setSupportedState(e.ui.Component.State.FOCUSED, t)
    }
    ,
    e.ui.ColorPicker.prototype.canDecorate = function() {
        return !1
    }
    ,
    e.ui.ColorPicker.prototype.enterDocument = function() {
        e.ui.ColorPicker.superClass_.enterDocument.call(this),
        this.colorPalette_ && this.colorPalette_.render(this.getElement()),
        this.getElement().unselectable = "on"
    }
    ,
    e.ui.ColorPicker.prototype.disposeInternal = function() {
        e.ui.ColorPicker.superClass_.disposeInternal.call(this),
        this.colorPalette_ && (this.colorPalette_.dispose(),
        this.colorPalette_ = null)
    }
    ,
    e.ui.ColorPicker.prototype.focus = function() {
        this.colorPalette_ && this.colorPalette_.getElement().focus()
    }
    ,
    e.ui.ColorPicker.prototype.onColorPaletteAction_ = function(t) {
        t.stopPropagation(),
        this.dispatchEvent(e.ui.ColorPicker.EventType.CHANGE)
    }
    ,
    e.ui.ColorPicker.prototype.createColorPalette_ = function(t) {
        (t = new e.ui.ColorPalette(t,null,this.getDomHelper())).setSize(e.ui.ColorPicker.DEFAULT_NUM_COLS),
        t.setSupportedState(e.ui.Component.State.FOCUSED, this.focusable_),
        this.addChild(t),
        this.colorPalette_ = t,
        this.isInDocument() && this.colorPalette_.render(this.getElement())
    }
    ,
    e.ui.ColorPicker.createSimpleColorGrid = function(t) {
        return (t = new e.ui.ColorPicker(t)).setSize(7),
        t.setColors(e.ui.ColorPicker.SIMPLE_GRID_COLORS),
        t
    }
    ,
    e.ui.ColorPicker.SIMPLE_GRID_COLORS = "#ffffff #cccccc #c0c0c0 #999999 #666666 #333333 #000000 #ffcccc #ff6666 #ff0000 #cc0000 #990000 #660000 #330000 #ffcc99 #ff9966 #ff9900 #ff6600 #cc6600 #993300 #663300 #ffff99 #ffff66 #ffcc66 #ffcc33 #cc9933 #996633 #663333 #ffffcc #ffff33 #ffff00 #ffcc00 #999900 #666600 #333300 #99ff99 #66ff99 #33ff33 #33cc00 #009900 #006600 #003300 #99ffff #33ffff #66cccc #00cccc #339999 #336666 #003333 #ccffff #66ffff #33ccff #3366ff #3333ff #000099 #000066 #ccccff #9999ff #6666cc #6633ff #6600cc #333399 #330099 #ffccff #ff99ff #cc66cc #cc33cc #993399 #663366 #330033".split(" "),
    z.FieldColour = function(e, t) {
        z.FieldColour.superClass_.constructor.call(this, "   "),
        this.changeHandler_ = t,
        this.borderRect_.style.fillOpacity = 1,
        this.setValue(e)
    }
    ,
    e.inherits(z.FieldColour, z.Field),
    z.FieldColour.prototype.clone = function() {
        return new z.FieldColour(this.getValue(),this.changeHandler_)
    }
    ,
    z.FieldColour.prototype.CURSOR = "default",
    z.FieldColour.prototype.dispose = function() {
        z.WidgetDiv.hideIfOwner(this),
        z.FieldColour.superClass_.dispose.call(this)
    }
    ,
    z.FieldColour.prototype.getValue = function() {
        return this.colour_
    }
    ,
    z.FieldColour.prototype.setValue = function(e) {
        this.colour_ = e,
        this.borderRect_.style.fill = e,
        this.sourceBlock_ && this.sourceBlock_.rendered && (z.Realtime.blockChanged(this.sourceBlock_),
        this.sourceBlock_.workspace.fireChangeEvent())
    }
    ,
    z.FieldColour.COLOURS = e.ui.ColorPicker.SIMPLE_GRID_COLORS,
    z.FieldColour.COLUMNS = 7,
    z.FieldColour.prototype.showEditor_ = function() {
        z.WidgetDiv.show(this, z.FieldColour.widgetDispose_);
        var t = new e.ui.ColorPicker;
        t.setSize(z.FieldColour.COLUMNS),
        t.setColors(z.FieldColour.COLOURS);
        var n = e.dom.getViewportSize()
          , o = e.style.getViewportPageOffset(document)
          , r = z.getAbsoluteXY_(this.borderRect_)
          , i = this.borderRect_.getBBox();
        t.render(z.WidgetDiv.DIV),
        t.setSelectedColor(this.getValue());
        var s = e.style.getSize(t.getElement());
        r.y = r.y + s.height + i.height >= n.height + o.y ? r.y - (s.height - 1) : r.y + (i.height - 1),
        z.RTL ? (r.x += i.width,
        r.x -= s.width,
        r.x < o.x && (r.x = o.x)) : r.x > n.width + o.x - s.width && (r.x = n.width + o.x - s.width),
        z.WidgetDiv.position(r.x, r.y, n, o);
        var a = this;
        z.FieldColour.changeEventKey_ = e.events.listen(t, e.ui.ColorPicker.EventType.CHANGE, function(e) {
            if (e = e.target.getSelectedColor() || "#000000",
            z.WidgetDiv.hide(),
            a.changeHandler_) {
                var t = a.changeHandler_(e);
                void 0 !== t && (e = t)
            }
            null !== e && a.setValue(e)
        })
    }
    ,
    z.FieldColour.widgetDispose_ = function() {
        z.FieldColour.changeEventKey_ && e.events.unlistenByKey(z.FieldColour.changeEventKey_)
    }
    ,
    z.FieldDropdown = function(e, t) {
        this.menuGenerator_ = e,
        this.changeHandler_ = t,
        this.trimOptions_(),
        e = this.getOptions_()[0],
        this.value_ = e[1],
        this.arrow_ = z.createSvgElement("tspan", {}, null),
        this.arrow_.appendChild(document.createTextNode(z.RTL ? z.FieldDropdown.ARROW_CHAR + " " : " " + z.FieldDropdown.ARROW_CHAR)),
        z.FieldDropdown.superClass_.constructor.call(this, e[0])
    }
    ,
    e.inherits(z.FieldDropdown, z.Field),
    z.FieldDropdown.CHECKMARK_OVERHANG = 25,
    z.FieldDropdown.ARROW_CHAR = e.userAgent.ANDROID ? "▼" : "▾",
    z.FieldDropdown.prototype.clone = function() {
        return new z.FieldDropdown(this.menuGenerator_,this.changeHandler_)
    }
    ,
    z.FieldDropdown.prototype.CURSOR = "default",
    z.FieldDropdown.prototype.showEditor_ = function() {
        z.WidgetDiv.show(this, null);
        for (var t = this, n = new e.ui.Menu, o = this.getOptions_(), r = 0; r < o.length; r++) {
            var i = o[r][1]
              , s = new e.ui.MenuItem(o[r][0]);
            s.setValue(i),
            s.setCheckable(!0),
            n.addChild(s, !0),
            s.setChecked(i == this.value_)
        }
        e.events.listen(n, e.ui.Component.EventType.ACTION, function(e) {
            if (e = e.target) {
                if (e = e.getValue(),
                t.changeHandler_) {
                    var n = t.changeHandler_(e);
                    void 0 !== n && (e = n)
                }
                null !== e && t.setValue(e)
            }
            z.WidgetDiv.hideIfOwner(t)
        }),
        n.getHandler().listen(n.getElement(), e.events.EventType.TOUCHSTART, function(e) {
            this.getOwnerControl(e.target).handleMouseDown(e)
        }),
        n.getHandler().listen(n.getElement(), e.events.EventType.TOUCHEND, function(e) {
            this.getOwnerControl(e.target).performActionInternal(e)
        }),
        o = e.dom.getViewportSize(),
        r = e.style.getViewportPageOffset(document),
        i = z.getAbsoluteXY_(this.borderRect_),
        s = this.borderRect_.getBBox(),
        n.render(z.WidgetDiv.DIV);
        var a = n.getElement();
        z.addClass_(a, "blocklyDropdownMenu");
        var l = e.style.getSize(a);
        i.y = i.y + l.height + s.height >= o.height + r.y ? i.y - l.height : i.y + s.height,
        z.RTL ? (i.x += s.width,
        i.x += z.FieldDropdown.CHECKMARK_OVERHANG,
        i.x < r.x + l.width && (i.x = r.x + l.width)) : (i.x -= z.FieldDropdown.CHECKMARK_OVERHANG,
        i.x > o.width + r.x - l.width && (i.x = o.width + r.x - l.width)),
        z.WidgetDiv.position(i.x, i.y, o, r),
        n.setAllowAutoFocus(!0),
        a.focus()
    }
    ,
    z.FieldDropdown.prototype.trimOptions_ = function() {
        this.suffixField = this.prefixField = null;
        var t = this.menuGenerator_;
        if (e.isArray(t) && !(2 > t.length)) {
            var n = t.map(function(e) {
                return e[0]
            })
              , o = z.shortestStringLength(n)
              , r = z.commonWordPrefix(n, o)
              , i = z.commonWordSuffix(n, o);
            if ((r || i) && !(o <= r + i)) {
                for (r && (this.prefixField = n[0].substring(0, r - 1)),
                i && (this.suffixField = n[0].substr(1 - i)),
                n = [],
                o = 0; o < t.length; o++) {
                    var s = t[o][0]
                      , a = t[o][1];
                    s = s.substring(r, s.length - i),
                    n[o] = [s, a]
                }
                this.menuGenerator_ = n
            }
        }
    }
    ,
    z.FieldDropdown.prototype.getOptions_ = function() {
        return e.isFunction(this.menuGenerator_) ? this.menuGenerator_.call(this) : this.menuGenerator_
    }
    ,
    z.FieldDropdown.prototype.getValue = function() {
        return this.value_
    }
    ,
    z.FieldDropdown.prototype.setValue = function(e) {
        this.value_ = e;
        for (var t = this.getOptions_(), n = 0; n < t.length; n++)
            if (t[n][1] == e)
                return void this.setText(t[n][0]);
        this.setText(e)
    }
    ,
    z.FieldDropdown.prototype.setText = function(e) {
        this.sourceBlock_ && (this.arrow_.style.fill = this.sourceBlock_.getHexColour()),
        null !== e && e !== this.text_ && (this.text_ = e,
        this.updateTextNode_(),
        z.RTL ? this.textElement_.insertBefore(this.arrow_, this.textElement_.firstChild) : this.textElement_.appendChild(this.arrow_),
        this.sourceBlock_ && this.sourceBlock_.rendered && (this.sourceBlock_.render(),
        this.sourceBlock_.bumpNeighbours_(),
        this.sourceBlock_.workspace.fireChangeEvent()))
    }
    ,
    z.FieldDropdown.prototype.dispose = function() {
        z.WidgetDiv.hideIfOwner(this),
        z.FieldDropdown.superClass_.dispose.call(this)
    }
    ,
    z.FieldImage = function(t, n, o, r) {
        this.sourceBlock_ = null,
        this.height_ = Number(o),
        this.width_ = Number(n),
        this.size_ = {
            height: this.height_ + 10,
            width: this.width_
        },
        this.text_ = r || "",
        n = 6 - z.BlockSvg.FIELD_HEIGHT,
        this.fieldGroup_ = z.createSvgElement("g", {}, null),
        this.imageElement_ = z.createSvgElement("image", {
            height: this.height_ + "px",
            width: this.width_ + "px",
            y: n
        }, this.fieldGroup_),
        this.setValue(t),
        e.userAgent.GECKO && (this.rectElement_ = z.createSvgElement("rect", {
            height: this.height_ + "px",
            width: this.width_ + "px",
            y: n,
            "fill-opacity": 0
        }, this.fieldGroup_))
    }
    ,
    e.inherits(z.FieldImage, z.Field),
    z.FieldImage.prototype.clone = function() {
        return new z.FieldImage(this.getSrc(),this.width_,this.height_,this.getText())
    }
    ,
    z.FieldImage.prototype.rectElement_ = null,
    z.FieldImage.prototype.EDITABLE = !1,
    z.FieldImage.prototype.init = function(e) {
        if (this.sourceBlock_)
            throw "Image has already been initialized once.";
        this.sourceBlock_ = e,
        e.getSvgRoot().appendChild(this.fieldGroup_),
        (e = this.rectElement_ || this.imageElement_).tooltip = this.sourceBlock_,
        z.Tooltip.bindMouseEvents(e)
    }
    ,
    z.FieldImage.prototype.dispose = function() {
        e.dom.removeNode(this.fieldGroup_),
        this.rectElement_ = this.imageElement_ = this.fieldGroup_ = null
    }
    ,
    z.FieldImage.prototype.setTooltip = function(e) {
        (this.rectElement_ || this.imageElement_).tooltip = e
    }
    ,
    z.FieldImage.prototype.getValue = function() {
        return this.src_
    }
    ,
    z.FieldImage.prototype.setValue = function(t) {
        null !== t && (this.src_ = t,
        this.imageElement_.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e.isString(t) ? t : ""))
    }
    ,
    z.FieldImage.prototype.setText = function(e) {
        null !== e && (this.text_ = e)
    }
    ,
    z.Flyout = function() {
        var e = this;
        this.workspace_ = new z.Workspace(function() {
            return e.getMetrics_()
        }
        ,function(t) {
            return e.setMetrics_(t)
        }
        ),
        this.workspace_.isFlyout = !0,
        this.eventWrappers_ = [],
        this.height_ = this.width_ = 0,
        this.buttons_ = [],
        this.listeners_ = [],
        this.enabled_ = !0
    }
    ,
    z.Flyout.prototype.autoClose = !0,
    z.Flyout.prototype.layoutProvider = null,
    z.Flyout.prototype.CORNER_RADIUS = 0,
    z.Flyout.prototype.WHITESPACE = 8,
    z.Flyout.prototype.createDom = function() {
        return this.svgGroup_ = z.createSvgElement("g", {}, null),
        this.svgBackground_ = z.createSvgElement("path", {
            class: "blocklyFlyoutBackground"
        }, this.svgGroup_),
        this.svgGroup_.appendChild(this.workspace_.createDom()),
        this.svgGroup_
    }
    ,
    z.Flyout.prototype.dispose = function() {
        this.hide(),
        z.unbindEvent_(this.eventWrappers_),
        this.eventWrappers_.length = 0,
        this.scrollbar_ && (this.scrollbar_.dispose(),
        this.scrollbar_ = null),
        this.workspace_ = null,
        this.svgGroup_ && (e.dom.removeNode(this.svgGroup_),
        this.svgGroup_ = null),
        this.targetWorkspace_ = this.svgBackground_ = null
    }
    ,
    z.Flyout.prototype.getMetrics_ = function() {
        if (!this.isVisible())
            return null;
        var e = this.height_ - 2 * this.WHITESPACE
          , t = this.width_;
        try {
            var n = this.workspace_.getCanvas().getBBox()
        } catch (e) {
            n = {
                height: 0,
                y: 0
            }
        }
        return {
            viewHeight: e,
            viewWidth: t,
            contentHeight: n.height + n.y,
            viewTop: -this.workspace_.scrollY,
            contentTop: 0,
            absoluteTop: 0,
            absoluteLeft: 0
        }
    }
    ,
    z.Flyout.prototype.setMetrics_ = function(t) {
        var n = this.getMetrics_();
        n && (e.isNumber(t.y) && (this.workspace_.scrollY = -n.contentHeight * t.y - n.contentTop),
        t = this.workspace_.scrollY + n.absoluteTop,
        this.workspace_.getCanvas().setAttribute("transform", "translate(0," + t + ")"))
    }
    ,
    z.Flyout.prototype.init = function(t) {
        this.targetWorkspace_ = t,
        this.scrollbar_ = new z.Scrollbar(this.workspace_,!1,!1),
        this.hide(),
        this.eventWrappers_.concat(z.bindEvent_(window, e.events.EventType.RESIZE, this, this.position_)),
        this.position_(),
        this.eventWrappers_.concat(z.bindEvent_(this.svgGroup_, "wheel", this, this.wheel_)),
        this.eventWrappers_.concat(z.bindEvent_(this.svgGroup_, "mousewheel", this, this.wheel_)),
        this.eventWrappers_.concat(z.bindEvent_(this.targetWorkspace_.getCanvas(), "blocklyWorkspaceChange", this, this.filterForCapacity_)),
        this.eventWrappers_.concat(z.bindEvent_(this.svgGroup_, "mousedown", this, this.onMouseDown_))
    }
    ,
    z.Flyout.prototype.position_ = function() {
        if (this.isVisible()) {
            var e = this.targetWorkspace_.getMetrics();
            if (e) {
                var t = this.width_ - this.CORNER_RADIUS;
                z.RTL && (t *= -1);
                var n = ["M " + (z.RTL ? this.width_ : 0) + ",0"];
                n.push("h", t),
                n.push("a", this.CORNER_RADIUS, this.CORNER_RADIUS, 0, 0, z.RTL ? 0 : 1, z.RTL ? -this.CORNER_RADIUS : this.CORNER_RADIUS, this.CORNER_RADIUS),
                n.push("v", Math.max(0, e.viewHeight - 2 * this.CORNER_RADIUS)),
                n.push("a", this.CORNER_RADIUS, this.CORNER_RADIUS, 0, 0, z.RTL ? 0 : 1, z.RTL ? this.CORNER_RADIUS : -this.CORNER_RADIUS, this.CORNER_RADIUS),
                n.push("h", -t),
                n.push("z"),
                this.svgBackground_.setAttribute("d", n.join(" ")),
                t = e.absoluteLeft,
                z.RTL && (t += e.viewWidth,
                t -= this.width_),
                this.svgGroup_.setAttribute("transform", "translate(" + t + "," + e.absoluteTop + ")"),
                this.height_ = e.viewHeight,
                this.scrollbar_ && this.scrollbar_.resize()
            }
        }
    }
    ,
    z.Flyout.prototype.wheel_ = function(t) {
        var n = t.deltaY || -t.wheelDeltaY;
        if (n) {
            e.userAgent.GECKO && (n *= 10);
            var o = this.getMetrics_();
            n = o.viewTop + n,
            n = Math.min(n, o.contentHeight - o.viewHeight),
            n = Math.max(n, 0),
            this.scrollbar_.set(n),
            t.preventDefault()
        }
    }
    ,
    z.Flyout.prototype.isVisible = function() {
        return this.svgGroup_ && "block" == this.svgGroup_.style.display
    }
    ,
    z.Flyout.prototype.hide = function() {
        if (this.isVisible()) {
            this.svgGroup_.style.display = "none";
            for (var e, t = 0; e = this.listeners_[t]; t++)
                z.unbindEvent_(e);
            this.listeners_.length = 0,
            this.reflowWrapper_ && (z.unbindEvent_(this.reflowWrapper_),
            this.reflowWrapper_ = null)
        }
    }
    ,
    z.Flyout.prototype.show = function(t) {
        this.hide();
        for (var n, o = this.workspace_.getTopBlocks(!1), r = 0; n = o[r]; r++)
            n.workspace == this.workspace_ && n.dispose(!1, !1);
        r = 0;
        for (var i; i = this.buttons_[r]; r++)
            e.dom.removeNode(i);
        this.buttons_.length = 0;
        var s = this.WHITESPACE;
        this.svgGroup_.style.display = "block",
        o = [];
        var a = [];
        if (t == z.Variables.NAME_TYPE)
            z.Variables.flyoutCategory(o, a, s, this.workspace_);
        else if (t == z.Procedures.NAME_TYPE)
            z.Procedures.flyoutCategory(o, a, s, this.workspace_);
        else
            for (var l = 0; n = t[l]; l++)
                n.tagName && "BLOCK" == n.tagName.toUpperCase() && (n = z.Xml.domToBlock(this.workspace_, n),
                o.push(n),
                a.push(3 * s));
        for (t = 70,
        l = 0; n = o[l]; l++) {
            r = n.getDescendants(),
            i = 0;
            for (var u; u = r[i]; i++)
                u.isInFlyout = !0,
                u.setCommentText(null);
            n.render(),
            u = n.getSvgRoot(),
            i = n.getHeightWidth(),
            r = z.RTL ? 0 : s + z.BlockSvg.TAB_WIDTH,
            n.moveBy(r, t),
            t += i.height + a[l],
            i = z.createSvgElement("rect", {
                "fill-opacity": 0
            }, null),
            this.workspace_.getCanvas().insertBefore(i, n.getSvgRoot()),
            n.flyoutRect_ = i,
            this.buttons_[l] = i,
            this.autoClose ? this.listeners_.push(z.bindEvent_(u, "mousedown", null, this.createBlockFunc_(n))) : this.listeners_.push(z.bindEvent_(u, "mousedown", null, this.blockMouseDown_(n))),
            this.listeners_.push(z.bindEvent_(u, "mouseover", n.svg_, n.svg_.addSelect)),
            this.listeners_.push(z.bindEvent_(u, "mouseout", n.svg_, n.svg_.removeSelect)),
            this.listeners_.push(z.bindEvent_(i, "mousedown", null, this.createBlockFunc_(n))),
            this.listeners_.push(z.bindEvent_(i, "mouseover", n.svg_, n.svg_.addSelect)),
            this.listeners_.push(z.bindEvent_(i, "mouseout", n.svg_, n.svg_.removeSelect))
        }
        this.listeners_.push(z.bindEvent_(this.svgBackground_, "mouseover", this, function() {
            for (var e, t = this.workspace_.getTopBlocks(!1), n = 0; e = t[n]; n++)
                e.svg_.removeSelect()
        })),
        this.width_ = 0,
        this.reflow(),
        this.filterForCapacity_(),
        z.fireUiEventNow(window, "resize"),
        this.reflowWrapper_ = z.bindEvent_(this.workspace_.getCanvas(), "blocklyWorkspaceChange", this, this.reflow),
        this.workspace_.fireChangeEvent()
    }
    ,
    z.Flyout.prototype.reflow = function() {
        if (this.layoutProvider)
            this.externalReflow_();
        else {
            for (var e, t = 0, n = this.WHITESPACE, o = this.workspace_.getTopBlocks(!1), r = 0; e = o[r]; r++) {
                e.getSvgRoot();
                var i = e.getHeightWidth();
                t = Math.max(t, i.width)
            }
            if (0 < t && (t += n + z.BlockSvg.TAB_WIDTH + n / 2 + z.Scrollbar.scrollbarThickness),
            this.width_ != t) {
                for (r = 0; e = o[r]; r++) {
                    i = e.getHeightWidth();
                    var s = e.getRelativeToSurfaceXY();
                    if (z.RTL) {
                        var a = t - n - z.BlockSvg.TAB_WIDTH - s.x;
                        e.moveBy(a, 0),
                        s.x += a
                    }
                    e.flyoutRect_ && (e.flyoutRect_.setAttribute("width", i.width),
                    e.flyoutRect_.setAttribute("height", i.height),
                    e.flyoutRect_.setAttribute("x", z.RTL ? s.x - i.width : s.x),
                    e.flyoutRect_.setAttribute("y", s.y))
                }
                this.width_ = t,
                z.fireUiEvent(window, "resize")
            }
        }
    }
    ,
    z.Flyout.prototype.externalReflow_ = function() {
        for (var e, t = this.workspace_.getTopBlocks(!1), n = this.layoutProvider(t), o = 0; e = t[o]; o++) {
            var r = e.getHeightWidth()
              , i = e.getRelativeToSurfaceXY();
            e.flyoutRect_ && (e.flyoutRect_.setAttribute("width", r.width),
            e.flyoutRect_.setAttribute("height", r.height),
            e.flyoutRect_.setAttribute("x", z.RTL ? i.x - r.width : i.x),
            e.flyoutRect_.setAttribute("y", i.y))
        }
        this.width_ != n && (this.width_ = n,
        z.mainWorkspace.scrollX = this.width_,
        z.RTL && (z.mainWorkspace.scrollX *= -1),
        t = "translate(" + z.mainWorkspace.scrollX + ", 0)",
        z.mainWorkspace.getCanvas().setAttribute("transform", t),
        z.mainWorkspace.getBubbleCanvas().setAttribute("transform", t),
        z.fireUiEvent(window, "resize"))
    }
    ,
    z.Block.prototype.moveTo = function(e, t) {
        var n = this.getRelativeToSurfaceXY();
        this.svg_.getRootElement().setAttribute("transform", "translate(" + e + ", " + t + ")"),
        this.moveConnections_(e - n.x, t - n.y)
    }
    ,
    z.Flyout.prototype.blockMouseDown_ = function(e) {
        var t = this;
        return function(n) {
            t.enabled_ && (z.terminateDrag_(),
            z.hideChaff(),
            z.isRightButton(n) ? e.showContextMenu_(n) : (z.removeAllRanges(),
            z.setCursorHand_(!0),
            z.Flyout.startDownEvent_ = n,
            z.Flyout.startBlock_ = e,
            z.Flyout.startFlyout_ = t,
            z.Flyout.onMouseUpWrapper_ = z.bindEvent_(document, "mouseup", t, t.onMouseUpBlock_),
            z.Flyout.onMouseMoveBlockWrapper_ = z.bindEvent_(document, "mousemove", t, t.onMouseMoveBlock_)),
            n.stopPropagation())
        }
    }
    ,
    z.Flyout.prototype.onMouseDown_ = function(e) {
        z.isRightButton(e) || (z.hideChaff(!0),
        z.Flyout.terminateDrag_(),
        this.startDragMouseY_ = e.clientY,
        z.Flyout.onMouseMoveWrapper_ = z.bindEvent_(document, "mousemove", this, this.onMouseMove_),
        z.Flyout.onMouseUpWrapper_ = z.bindEvent_(document, "mouseup", this, z.Flyout.terminateDrag_),
        e.preventDefault(),
        e.stopPropagation())
    }
    ,
    z.Flyout.prototype.onMouseMove_ = function(e) {
        var t = e.clientY - this.startDragMouseY_;
        this.startDragMouseY_ = e.clientY,
        t = (e = this.getMetrics_()).viewTop - t,
        t = Math.min(t, e.contentHeight - e.viewHeight),
        t = Math.max(t, 0),
        this.scrollbar_.set(t)
    }
    ,
    z.Flyout.prototype.onMouseMoveBlock_ = function(e) {
        "mousemove" == e.type && 1 >= e.clientX && 0 == e.clientY && 0 == e.button ? e.stopPropagation() : (z.removeAllRanges(),
        Math.sqrt(Math.pow(e.clientX - z.Flyout.startDownEvent_.clientX, 2) + Math.pow(e.clientY - z.Flyout.startDownEvent_.clientY, 2)) > z.DRAG_RADIUS && z.Flyout.startFlyout_.createBlockFunc_(z.Flyout.startBlock_)(z.Flyout.startDownEvent_))
    }
    ,
    z.Flyout.prototype.onMouseUpBlock_ = function() {
        z.fireUiEvent(this.workspace_.getCanvas(), "blocklyClickFlyoutBlock"),
        z.terminateDrag_()
    }
    ,
    z.Flyout.prototype.createBlockFunc_ = function(e) {
        var t = this;
        return function(n) {
            if (t.enabled_ && !z.isRightButton(n) && !e.disabled) {
                var o = e.getCloneBlock();
                null == o && (o = z.Xml.blockToDom_(e)),
                o = z.Xml.domToBlock(t.targetWorkspace_, o);
                var r = e.getSvgRoot();
                if (!r)
                    throw "originBlock is not rendered.";
                r = z.getSvgXY_(r);
                var i = o.getSvgRoot();
                if (!i)
                    throw "block is not rendered.";
                i = z.getSvgXY_(i),
                o.moveBy(r.x - i.x, r.y - i.y),
                t.autoClose ? t.hide() : t.filterForCapacity_(),
                o.onMouseDown_(n)
            }
        }
    }
    ,
    z.Flyout.prototype.filterForCapacity_ = function() {
        for (var e, t = this.targetWorkspace_.remainingCapacity(), n = this.workspace_.getTopBlocks(!1), o = 0; e = n[o]; o++) {
            var r = e.getDescendants().length > t;
            e.setDisabled(r)
        }
    }
    ,
    z.Flyout.terminateDrag_ = function() {
        z.Flyout.onMouseUpWrapper_ && (z.unbindEvent_(z.Flyout.onMouseUpWrapper_),
        z.Flyout.onMouseUpWrapper_ = null),
        z.Flyout.onMouseMoveBlockWrapper_ && (z.unbindEvent_(z.Flyout.onMouseMoveBlockWrapper_),
        z.Flyout.onMouseMoveBlockWrapper_ = null),
        z.Flyout.onMouseMoveWrapper_ && (z.unbindEvent_(z.Flyout.onMouseMoveWrapper_),
        z.Flyout.onMouseMoveWrapper_ = null),
        z.Flyout.onMouseUpWrapper_ && (z.unbindEvent_(z.Flyout.onMouseUpWrapper_),
        z.Flyout.onMouseUpWrapper_ = null),
        z.Flyout.startDownEvent_ = null,
        z.Flyout.startBlock_ = null,
        z.Flyout.startFlyout_ = null
    }
    ,
    z.Flyout.prototype.setEnabled = function(e) {
        this.enabled_ = e
    }
    ,
    z.Flyout.prototype.getWidth = function() {
        return this.width_
    }
    ,
    e.events.FocusHandler = function(t) {
        e.events.EventTarget.call(this),
        this.element_ = t,
        t = e.userAgent.IE ? "focusout" : "blur",
        this.listenKeyIn_ = e.events.listen(this.element_, e.userAgent.IE ? "focusin" : "focus", this, !e.userAgent.IE),
        this.listenKeyOut_ = e.events.listen(this.element_, t, this, !e.userAgent.IE)
    }
    ,
    e.inherits(e.events.FocusHandler, e.events.EventTarget),
    e.events.FocusHandler.EventType = {
        FOCUSIN: "focusin",
        FOCUSOUT: "focusout"
    },
    e.events.FocusHandler.prototype.handleEvent = function(t) {
        var n = t.getBrowserEvent();
        (n = new e.events.BrowserEvent(n)).type = "focusin" == t.type || "focus" == t.type ? e.events.FocusHandler.EventType.FOCUSIN : e.events.FocusHandler.EventType.FOCUSOUT,
        this.dispatchEvent(n)
    }
    ,
    e.events.FocusHandler.prototype.disposeInternal = function() {
        e.events.FocusHandler.superClass_.disposeInternal.call(this),
        e.events.unlistenByKey(this.listenKeyIn_),
        e.events.unlistenByKey(this.listenKeyOut_),
        delete this.element_
    }
    ,
    e.debug.LogRecord = function(e, t, n, o, r) {
        this.reset(e, t, n, o, r)
    }
    ,
    e.debug.LogRecord.prototype.sequenceNumber_ = 0,
    e.debug.LogRecord.prototype.exception_ = null,
    e.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS = !0,
    e.debug.LogRecord.nextSequenceNumber_ = 0,
    e.debug.LogRecord.prototype.reset = function(t, n, o, r, i) {
        e.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS && (this.sequenceNumber_ = "number" == typeof i ? i : e.debug.LogRecord.nextSequenceNumber_++),
        this.time_ = r || e.now(),
        this.level_ = t,
        this.msg_ = n,
        this.loggerName_ = o,
        delete this.exception_
    }
    ,
    e.debug.LogRecord.prototype.getLoggerName = function() {
        return this.loggerName_
    }
    ,
    e.debug.LogRecord.prototype.getException = function() {
        return this.exception_
    }
    ,
    e.debug.LogRecord.prototype.setException = function(e) {
        this.exception_ = e
    }
    ,
    e.debug.LogRecord.prototype.setLoggerName = function(e) {
        this.loggerName_ = e
    }
    ,
    e.debug.LogRecord.prototype.getLevel = function() {
        return this.level_
    }
    ,
    e.debug.LogRecord.prototype.setLevel = function(e) {
        this.level_ = e
    }
    ,
    e.debug.LogRecord.prototype.getMessage = function() {
        return this.msg_
    }
    ,
    e.debug.LogRecord.prototype.setMessage = function(e) {
        this.msg_ = e
    }
    ,
    e.debug.LogRecord.prototype.getMillis = function() {
        return this.time_
    }
    ,
    e.debug.LogRecord.prototype.setMillis = function(e) {
        this.time_ = e
    }
    ,
    e.debug.LogRecord.prototype.getSequenceNumber = function() {
        return this.sequenceNumber_
    }
    ,
    e.debug.LogBuffer = function() {
        e.asserts.assert(e.debug.LogBuffer.isBufferingEnabled(), "Cannot use goog.debug.LogBuffer without defining goog.debug.LogBuffer.CAPACITY."),
        this.clear()
    }
    ,
    e.debug.LogBuffer.getInstance = function() {
        return e.debug.LogBuffer.instance_ || (e.debug.LogBuffer.instance_ = new e.debug.LogBuffer),
        e.debug.LogBuffer.instance_
    }
    ,
    e.debug.LogBuffer.CAPACITY = 0,
    e.debug.LogBuffer.prototype.addRecord = function(t, n, o) {
        var r = (this.curIndex_ + 1) % e.debug.LogBuffer.CAPACITY;
        return this.curIndex_ = r,
        this.isFull_ ? ((r = this.buffer_[r]).reset(t, n, o),
        r) : (this.isFull_ = r == e.debug.LogBuffer.CAPACITY - 1,
        this.buffer_[r] = new e.debug.LogRecord(t,n,o))
    }
    ,
    e.debug.LogBuffer.isBufferingEnabled = function() {
        return 0 < e.debug.LogBuffer.CAPACITY
    }
    ,
    e.debug.LogBuffer.prototype.clear = function() {
        this.buffer_ = Array(e.debug.LogBuffer.CAPACITY),
        this.curIndex_ = -1,
        this.isFull_ = !1
    }
    ,
    e.debug.LogBuffer.prototype.forEachRecord = function(t) {
        var n = this.buffer_;
        if (n[0]) {
            var o = this.curIndex_
              , r = this.isFull_ ? o : -1;
            do {
                t(n[r = (r + 1) % e.debug.LogBuffer.CAPACITY])
            } while (r != o)
        }
    }
    ,
    e.debug.Logger = function(e) {
        this.name_ = e,
        this.handlers_ = this.children_ = this.level_ = this.parent_ = null
    }
    ,
    e.debug.Logger.ROOT_LOGGER_NAME = "",
    e.debug.Logger.ENABLE_HIERARCHY = !0,
    e.debug.Logger.ENABLE_PROFILER_LOGGING = !1,
    e.debug.Logger.ENABLE_HIERARCHY || (e.debug.Logger.rootHandlers_ = []),
    e.debug.Logger.Level = function(e, t) {
        this.name = e,
        this.value = t
    }
    ,
    e.debug.Logger.Level.prototype.toString = function() {
        return this.name
    }
    ,
    e.debug.Logger.Level.OFF = new e.debug.Logger.Level("OFF",1 / 0),
    e.debug.Logger.Level.SHOUT = new e.debug.Logger.Level("SHOUT",1200),
    e.debug.Logger.Level.SEVERE = new e.debug.Logger.Level("SEVERE",1e3),
    e.debug.Logger.Level.WARNING = new e.debug.Logger.Level("WARNING",900),
    e.debug.Logger.Level.INFO = new e.debug.Logger.Level("INFO",800),
    e.debug.Logger.Level.CONFIG = new e.debug.Logger.Level("CONFIG",700),
    e.debug.Logger.Level.FINE = new e.debug.Logger.Level("FINE",500),
    e.debug.Logger.Level.FINER = new e.debug.Logger.Level("FINER",400),
    e.debug.Logger.Level.FINEST = new e.debug.Logger.Level("FINEST",300),
    e.debug.Logger.Level.ALL = new e.debug.Logger.Level("ALL",0),
    e.debug.Logger.Level.PREDEFINED_LEVELS = [e.debug.Logger.Level.OFF, e.debug.Logger.Level.SHOUT, e.debug.Logger.Level.SEVERE, e.debug.Logger.Level.WARNING, e.debug.Logger.Level.INFO, e.debug.Logger.Level.CONFIG, e.debug.Logger.Level.FINE, e.debug.Logger.Level.FINER, e.debug.Logger.Level.FINEST, e.debug.Logger.Level.ALL],
    e.debug.Logger.Level.predefinedLevelsCache_ = null,
    e.debug.Logger.Level.createPredefinedLevelsCache_ = function() {
        e.debug.Logger.Level.predefinedLevelsCache_ = {};
        for (var t, n = 0; t = e.debug.Logger.Level.PREDEFINED_LEVELS[n]; n++)
            e.debug.Logger.Level.predefinedLevelsCache_[t.value] = t,
            e.debug.Logger.Level.predefinedLevelsCache_[t.name] = t
    }
    ,
    e.debug.Logger.Level.getPredefinedLevel = function(t) {
        return e.debug.Logger.Level.predefinedLevelsCache_ || e.debug.Logger.Level.createPredefinedLevelsCache_(),
        e.debug.Logger.Level.predefinedLevelsCache_[t] || null
    }
    ,
    e.debug.Logger.Level.getPredefinedLevelByValue = function(t) {
        if (e.debug.Logger.Level.predefinedLevelsCache_ || e.debug.Logger.Level.createPredefinedLevelsCache_(),
        t in e.debug.Logger.Level.predefinedLevelsCache_)
            return e.debug.Logger.Level.predefinedLevelsCache_[t];
        for (var n = 0; n < e.debug.Logger.Level.PREDEFINED_LEVELS.length; ++n) {
            var o = e.debug.Logger.Level.PREDEFINED_LEVELS[n];
            if (o.value <= t)
                return o
        }
        return null
    }
    ,
    e.debug.Logger.getLogger = function(t) {
        return e.debug.LogManager.getLogger(t)
    }
    ,
    e.debug.Logger.logToProfilers = function(t) {
        if (e.debug.Logger.ENABLE_PROFILER_LOGGING) {
            var n = e.global.msWriteProfilerMark;
            n ? n(t) : (n = e.global.console) && n.timeStamp && n.timeStamp(t)
        }
    }
    ,
    e.debug.Logger.prototype.getName = function() {
        return this.name_
    }
    ,
    e.debug.Logger.prototype.addHandler = function(t) {
        e.debug.LOGGING_ENABLED && (e.debug.Logger.ENABLE_HIERARCHY ? (this.handlers_ || (this.handlers_ = []),
        this.handlers_.push(t)) : (e.asserts.assert(!this.name_, "Cannot call addHandler on a non-root logger when goog.debug.Logger.ENABLE_HIERARCHY is false."),
        e.debug.Logger.rootHandlers_.push(t)))
    }
    ,
    e.debug.Logger.prototype.removeHandler = function(t) {
        if (e.debug.LOGGING_ENABLED) {
            var n = e.debug.Logger.ENABLE_HIERARCHY ? this.handlers_ : e.debug.Logger.rootHandlers_;
            return !!n && e.array.remove(n, t)
        }
        return !1
    }
    ,
    e.debug.Logger.prototype.getParent = function() {
        return this.parent_
    }
    ,
    e.debug.Logger.prototype.getChildren = function() {
        return this.children_ || (this.children_ = {}),
        this.children_
    }
    ,
    e.debug.Logger.prototype.setLevel = function(t) {
        e.debug.LOGGING_ENABLED && (e.debug.Logger.ENABLE_HIERARCHY ? this.level_ = t : (e.asserts.assert(!this.name_, "Cannot call setLevel() on a non-root logger when goog.debug.Logger.ENABLE_HIERARCHY is false."),
        e.debug.Logger.rootLevel_ = t))
    }
    ,
    e.debug.Logger.prototype.getLevel = function() {
        return e.debug.LOGGING_ENABLED ? this.level_ : e.debug.Logger.Level.OFF
    }
    ,
    e.debug.Logger.prototype.getEffectiveLevel = function() {
        return e.debug.LOGGING_ENABLED ? e.debug.Logger.ENABLE_HIERARCHY ? this.level_ ? this.level_ : this.parent_ ? this.parent_.getEffectiveLevel() : (e.asserts.fail("Root logger has no level set."),
        null) : e.debug.Logger.rootLevel_ : e.debug.Logger.Level.OFF
    }
    ,
    e.debug.Logger.prototype.isLoggable = function(t) {
        return e.debug.LOGGING_ENABLED && t.value >= this.getEffectiveLevel().value
    }
    ,
    e.debug.Logger.prototype.log = function(t, n, o) {
        e.debug.LOGGING_ENABLED && this.isLoggable(t) && (e.isFunction(n) && (n = n()),
        this.doLogRecord_(this.getLogRecord(t, n, o)))
    }
    ,
    e.debug.Logger.prototype.getLogRecord = function(t, n, o) {
        return t = e.debug.LogBuffer.isBufferingEnabled() ? e.debug.LogBuffer.getInstance().addRecord(t, n, this.name_) : new e.debug.LogRecord(t,String(n),this.name_),
        o && t.setException(o),
        t
    }
    ,
    e.debug.Logger.prototype.shout = function(t, n) {
        e.debug.LOGGING_ENABLED && this.log(e.debug.Logger.Level.SHOUT, t, n)
    }
    ,
    e.debug.Logger.prototype.severe = function(t, n) {
        e.debug.LOGGING_ENABLED && this.log(e.debug.Logger.Level.SEVERE, t, n)
    }
    ,
    e.debug.Logger.prototype.warning = function(t, n) {
        e.debug.LOGGING_ENABLED && this.log(e.debug.Logger.Level.WARNING, t, n)
    }
    ,
    e.debug.Logger.prototype.info = function(t, n) {
        e.debug.LOGGING_ENABLED && this.log(e.debug.Logger.Level.INFO, t, n)
    }
    ,
    e.debug.Logger.prototype.config = function(t, n) {
        e.debug.LOGGING_ENABLED && this.log(e.debug.Logger.Level.CONFIG, t, n)
    }
    ,
    e.debug.Logger.prototype.fine = function(t, n) {
        e.debug.LOGGING_ENABLED && this.log(e.debug.Logger.Level.FINE, t, n)
    }
    ,
    e.debug.Logger.prototype.finer = function(t, n) {
        e.debug.LOGGING_ENABLED && this.log(e.debug.Logger.Level.FINER, t, n)
    }
    ,
    e.debug.Logger.prototype.finest = function(t, n) {
        e.debug.LOGGING_ENABLED && this.log(e.debug.Logger.Level.FINEST, t, n)
    }
    ,
    e.debug.Logger.prototype.logRecord = function(t) {
        e.debug.LOGGING_ENABLED && this.isLoggable(t.getLevel()) && this.doLogRecord_(t)
    }
    ,
    e.debug.Logger.prototype.doLogRecord_ = function(t) {
        if (e.debug.Logger.ENABLE_PROFILER_LOGGING && e.debug.Logger.logToProfilers("log:" + t.getMessage()),
        e.debug.Logger.ENABLE_HIERARCHY)
            for (var n = this; n; )
                n.callPublish_(t),
                n = n.getParent();
        else {
            n = 0;
            for (var o; o = e.debug.Logger.rootHandlers_[n++]; )
                o(t)
        }
    }
    ,
    e.debug.Logger.prototype.callPublish_ = function(e) {
        if (this.handlers_)
            for (var t, n = 0; t = this.handlers_[n]; n++)
                t(e)
    }
    ,
    e.debug.Logger.prototype.setParent_ = function(e) {
        this.parent_ = e
    }
    ,
    e.debug.Logger.prototype.addChild_ = function(e, t) {
        this.getChildren()[e] = t
    }
    ,
    e.debug.LogManager = {},
    e.debug.LogManager.loggers_ = {},
    e.debug.LogManager.rootLogger_ = null,
    e.debug.LogManager.initialize = function() {
        e.debug.LogManager.rootLogger_ || (e.debug.LogManager.rootLogger_ = new e.debug.Logger(e.debug.Logger.ROOT_LOGGER_NAME),
        e.debug.LogManager.loggers_[e.debug.Logger.ROOT_LOGGER_NAME] = e.debug.LogManager.rootLogger_,
        e.debug.LogManager.rootLogger_.setLevel(e.debug.Logger.Level.CONFIG))
    }
    ,
    e.debug.LogManager.getLoggers = function() {
        return e.debug.LogManager.loggers_
    }
    ,
    e.debug.LogManager.getRoot = function() {
        return e.debug.LogManager.initialize(),
        e.debug.LogManager.rootLogger_
    }
    ,
    e.debug.LogManager.getLogger = function(t) {
        return e.debug.LogManager.initialize(),
        e.debug.LogManager.loggers_[t] || e.debug.LogManager.createLogger_(t)
    }
    ,
    e.debug.LogManager.createFunctionForCatchErrors = function(t) {
        return function(n) {
            (t || e.debug.LogManager.getRoot()).severe("Error: " + n.message + " (" + n.fileName + " @ Line: " + n.line + ")")
        }
    }
    ,
    e.debug.LogManager.createLogger_ = function(t) {
        var n = new e.debug.Logger(t);
        if (e.debug.Logger.ENABLE_HIERARCHY) {
            var o = t.lastIndexOf(".")
              , r = t.substr(0, o);
            o = t.substr(o + 1),
            (r = e.debug.LogManager.getLogger(r)).addChild_(o, n),
            n.setParent_(r)
        }
        return e.debug.LogManager.loggers_[t] = n
    }
    ,
    e.log = {},
    e.log.ENABLED = e.debug.LOGGING_ENABLED,
    e.log.ROOT_LOGGER_NAME = e.debug.Logger.ROOT_LOGGER_NAME,
    e.log.Logger = e.debug.Logger,
    e.log.Level = e.debug.Logger.Level,
    e.log.LogRecord = e.debug.LogRecord,
    e.log.getLogger = function(t, n) {
        return e.log.ENABLED ? (t = e.debug.LogManager.getLogger(t),
        n && t && t.setLevel(n),
        t) : null
    }
    ,
    e.log.addHandler = function(t, n) {
        e.log.ENABLED && t && t.addHandler(n)
    }
    ,
    e.log.removeHandler = function(t, n) {
        return !(!e.log.ENABLED || !t) && t.removeHandler(n)
    }
    ,
    e.log.log = function(t, n, o, r) {
        e.log.ENABLED && t && t.log(n, o, r)
    }
    ,
    e.log.error = function(t, n, o) {
        e.log.ENABLED && t && t.severe(n, o)
    }
    ,
    e.log.warning = function(t, n, o) {
        e.log.ENABLED && t && t.warning(n, o)
    }
    ,
    e.log.info = function(t, n, o) {
        e.log.ENABLED && t && t.info(n, o)
    }
    ,
    e.log.fine = function(t, n, o) {
        e.log.ENABLED && t && t.fine(n, o)
    }
    ,
    e.string.StringBuffer = function(e, t) {
        null != e && this.append.apply(this, arguments)
    }
    ,
    e.string.StringBuffer.prototype.buffer_ = "",
    e.string.StringBuffer.prototype.set = function(e) {
        this.buffer_ = "" + e
    }
    ,
    e.string.StringBuffer.prototype.append = function(e, t, n) {
        if (this.buffer_ += String(e),
        null != t)
            for (let e = 1; e < arguments.length; e++)
                this.buffer_ += arguments[e];
        return this
    }
    ,
    e.string.StringBuffer.prototype.clear = function() {
        this.buffer_ = ""
    }
    ,
    e.string.StringBuffer.prototype.getLength = function() {
        return this.buffer_.length
    }
    ,
    e.string.StringBuffer.prototype.toString = function() {
        return this.buffer_
    }
    ,
    e.ui.tree = {},
    e.ui.tree.BaseNode = function(t, n, o) {
        e.ui.Component.call(this, o),
        this.config_ = n || e.ui.tree.BaseNode.defaultConfig,
        this.html_ = e.html.SafeHtml.htmlEscapePreservingNewlines(t),
        this.expanded_ = this.selected_ = !1,
        this.toolTip_ = null,
        this.afterLabelHtml_ = e.html.SafeHtml.EMPTY,
        this.isUserCollapsible_ = !0,
        this.depth_ = -1
    }
    ,
    e.inherits(e.ui.tree.BaseNode, e.ui.Component),
    e.ui.tree.BaseNode.EventType = {
        BEFORE_EXPAND: "beforeexpand",
        EXPAND: "expand",
        BEFORE_COLLAPSE: "beforecollapse",
        COLLAPSE: "collapse"
    },
    e.ui.tree.BaseNode.allNodes = {},
    e.ui.tree.BaseNode.prototype.disposeInternal = function() {
        e.ui.tree.BaseNode.superClass_.disposeInternal.call(this),
        this.tree && (this.tree.removeNode(this),
        this.tree = null),
        this.setElementInternal(null)
    }
    ,
    e.ui.tree.BaseNode.prototype.initAccessibility = function() {
        var t = this.getElement();
        if (t) {
            var n = this.getLabelElement();
            if (n && !n.id && (n.id = this.getId() + ".label"),
            e.a11y.aria.setRole(t, "treeitem"),
            e.a11y.aria.setState(t, "selected", !1),
            e.a11y.aria.setState(t, "level", this.getDepth()),
            n && e.a11y.aria.setState(t, "labelledby", n.id),
            (n = this.getIconElement()) && e.a11y.aria.setRole(n, "presentation"),
            (n = this.getExpandIconElement()) && e.a11y.aria.setRole(n, "presentation"),
            (n = this.getChildrenElement()) && (e.a11y.aria.setRole(n, "group"),
            n.hasChildNodes()))
                for (e.a11y.aria.setState(t, e.a11y.aria.State.EXPANDED, !1),
                t = this.getChildCount(),
                n = 1; n <= t; n++) {
                    var o = this.getChildAt(n - 1).getElement();
                    e.asserts.assert(o, "The child element cannot be null"),
                    e.a11y.aria.setState(o, "setsize", t),
                    e.a11y.aria.setState(o, "posinset", n)
                }
        }
    }
    ,
    e.ui.tree.BaseNode.prototype.createDom = function() {
        var e = this.getDomHelper().safeHtmlToNode(this.toSafeHtml());
        this.setElementInternal(e)
    }
    ,
    e.ui.tree.BaseNode.prototype.enterDocument = function() {
        e.ui.tree.BaseNode.superClass_.enterDocument.call(this),
        e.ui.tree.BaseNode.allNodes[this.getId()] = this,
        this.initAccessibility()
    }
    ,
    e.ui.tree.BaseNode.prototype.exitDocument = function() {
        e.ui.tree.BaseNode.superClass_.exitDocument.call(this),
        delete e.ui.tree.BaseNode.allNodes[this.getId()]
    }
    ,
    e.ui.tree.BaseNode.prototype.addChildAt = function(t, n) {
        e.asserts.assert(!t.getParent()),
        e.asserts.assertInstanceof(t, e.ui.tree.BaseNode);
        var o = this.getChildAt(n - 1)
          , r = this.getChildAt(n);
        if (e.ui.tree.BaseNode.superClass_.addChildAt.call(this, t, n),
        t.previousSibling_ = o,
        t.nextSibling_ = r,
        o ? o.nextSibling_ = t : this.firstChild_ = t,
        r ? r.previousSibling_ = t : this.lastChild_ = t,
        (n = this.getTree()) && t.setTreeInternal(n),
        t.setDepth_(this.getDepth() + 1),
        (n = this.getElement()) && (this.updateExpandIcon(),
        e.a11y.aria.setState(n, e.a11y.aria.State.EXPANDED, this.getExpanded()),
        this.getExpanded())) {
            n = this.getChildrenElement(),
            t.getElement() || t.createDom();
            var i = t.getElement()
              , s = r && r.getElement();
            n.insertBefore(i, s),
            this.isInDocument() && t.enterDocument(),
            r || (o ? o.updateExpandIcon() : (e.style.setElementShown(n, !0),
            this.setExpanded(this.getExpanded())))
        }
    }
    ,
    e.ui.tree.BaseNode.prototype.add = function(t, n) {
        return e.asserts.assert(!n || n.getParent() == this, "Can only add nodes before siblings"),
        t.getParent() && t.getParent().removeChild(t),
        this.addChildAt(t, n ? this.indexOfChild(n) : this.getChildCount()),
        t
    }
    ,
    e.ui.tree.BaseNode.prototype.removeChild = function(t) {
        var n = this.getTree()
          , o = n ? n.getSelectedItem() : null;
        if ((o == t || t.contains(o)) && (n.hasFocus() ? (this.select(),
        e.Timer.callOnce(this.onTimeoutSelect_, 10, this)) : this.select()),
        e.ui.tree.BaseNode.superClass_.removeChild.call(this, t),
        this.lastChild_ == t && (this.lastChild_ = t.previousSibling_),
        this.firstChild_ == t && (this.firstChild_ = t.nextSibling_),
        t.previousSibling_ && (t.previousSibling_.nextSibling_ = t.nextSibling_),
        t.nextSibling_ && (t.nextSibling_.previousSibling_ = t.previousSibling_),
        o = t.isLastSibling(),
        t.tree = null,
        t.depth_ = -1,
        n && (n.removeNode(t),
        this.isInDocument())) {
            if (n = this.getChildrenElement(),
            t.isInDocument()) {
                var r = t.getElement();
                n.removeChild(r),
                t.exitDocument()
            }
            o && (o = this.getLastChild()) && o.updateExpandIcon(),
            this.hasChildren() || (n.style.display = "none",
            this.updateExpandIcon(),
            this.updateIcon_(),
            (o = this.getElement()) && e.a11y.aria.removeState(o, e.a11y.aria.State.EXPANDED))
        }
        return t
    }
    ,
    e.ui.tree.BaseNode.prototype.remove = e.ui.tree.BaseNode.prototype.removeChild,
    e.ui.tree.BaseNode.prototype.onTimeoutSelect_ = function() {
        this.select()
    }
    ,
    e.ui.tree.BaseNode.prototype.getTree = e.abstractMethod,
    e.ui.tree.BaseNode.prototype.getDepth = function() {
        var e = this.depth_;
        return 0 > e && (e = this.computeDepth_(),
        this.setDepth_(e)),
        e
    }
    ,
    e.ui.tree.BaseNode.prototype.computeDepth_ = function() {
        var e = this.getParent();
        return e ? e.getDepth() + 1 : 0
    }
    ,
    e.ui.tree.BaseNode.prototype.setDepth_ = function(e) {
        if (e != this.depth_) {
            this.depth_ = e;
            var t = this.getRowElement();
            if (t) {
                var n = this.getPixelIndent_() + "px";
                this.isRightToLeft() ? t.style.paddingRight = n : t.style.paddingLeft = n
            }
            this.forEachChild(function(t) {
                t.setDepth_(e + 1)
            })
        }
    }
    ,
    e.ui.tree.BaseNode.prototype.contains = function(e) {
        for (; e; ) {
            if (e == this)
                return !0;
            e = e.getParent()
        }
        return !1
    }
    ,
    e.ui.tree.BaseNode.EMPTY_CHILDREN_ = [],
    e.ui.tree.BaseNode.prototype.getChildren = function() {
        var e = [];
        return this.forEachChild(function(t) {
            e.push(t)
        }),
        e
    }
    ,
    e.ui.tree.BaseNode.prototype.getFirstChild = function() {
        return this.getChildAt(0)
    }
    ,
    e.ui.tree.BaseNode.prototype.getLastChild = function() {
        return this.getChildAt(this.getChildCount() - 1)
    }
    ,
    e.ui.tree.BaseNode.prototype.getPreviousSibling = function() {
        return this.previousSibling_
    }
    ,
    e.ui.tree.BaseNode.prototype.getNextSibling = function() {
        return this.nextSibling_
    }
    ,
    e.ui.tree.BaseNode.prototype.isLastSibling = function() {
        return !this.nextSibling_
    }
    ,
    e.ui.tree.BaseNode.prototype.isSelected = function() {
        return this.selected_
    }
    ,
    e.ui.tree.BaseNode.prototype.select = function() {
        var e = this.getTree();
        e && e.setSelectedItem(this)
    }
    ,
    e.ui.tree.BaseNode.prototype.deselect = e.nullFunction,
    e.ui.tree.BaseNode.prototype.setSelectedInternal = function(t) {
        if (this.selected_ != t) {
            this.selected_ = t,
            this.updateRow();
            var n = this.getElement();
            n && (e.a11y.aria.setState(n, "selected", t),
            t && (t = this.getTree().getElement(),
            e.asserts.assert(t, "The DOM element for the tree cannot be null"),
            e.a11y.aria.setState(t, "activedescendant", this.getId())))
        }
    }
    ,
    e.ui.tree.BaseNode.prototype.getExpanded = function() {
        return this.expanded_
    }
    ,
    e.ui.tree.BaseNode.prototype.setExpandedInternal = function(e) {
        this.expanded_ = e
    }
    ,
    e.ui.tree.BaseNode.prototype.setExpanded = function(t) {
        var n = t != this.expanded_;
        if (!n || this.dispatchEvent(t ? e.ui.tree.BaseNode.EventType.BEFORE_EXPAND : e.ui.tree.BaseNode.EventType.BEFORE_COLLAPSE)) {
            this.expanded_ = t;
            var o = this.getTree()
              , r = this.getElement();
            if (this.hasChildren()) {
                if (!t && o && this.contains(o.getSelectedItem()) && this.select(),
                r) {
                    if ((o = this.getChildrenElement()) && (e.style.setElementShown(o, t),
                    e.a11y.aria.setState(r, e.a11y.aria.State.EXPANDED, t),
                    t && this.isInDocument() && !o.hasChildNodes())) {
                        var i = [];
                        this.forEachChild(function(e) {
                            i.push(e.toSafeHtml())
                        }),
                        e.dom.safe.setInnerHtml(o, e.html.SafeHtml.concat(i)),
                        this.forEachChild(function(e) {
                            e.enterDocument()
                        })
                    }
                    this.updateExpandIcon()
                }
            } else
                (o = this.getChildrenElement()) && e.style.setElementShown(o, !1);
            r && this.updateIcon_(),
            n && this.dispatchEvent(t ? e.ui.tree.BaseNode.EventType.EXPAND : e.ui.tree.BaseNode.EventType.COLLAPSE)
        }
    }
    ,
    e.ui.tree.BaseNode.prototype.toggle = function() {
        this.setExpanded(!this.getExpanded())
    }
    ,
    e.ui.tree.BaseNode.prototype.expand = function() {
        this.setExpanded(!0)
    }
    ,
    e.ui.tree.BaseNode.prototype.collapse = function() {
        this.setExpanded(!1)
    }
    ,
    e.ui.tree.BaseNode.prototype.collapseChildren = function() {
        this.forEachChild(function(e) {
            e.collapseAll()
        })
    }
    ,
    e.ui.tree.BaseNode.prototype.collapseAll = function() {
        this.collapseChildren(),
        this.collapse()
    }
    ,
    e.ui.tree.BaseNode.prototype.expandChildren = function() {
        this.forEachChild(function(e) {
            e.expandAll()
        })
    }
    ,
    e.ui.tree.BaseNode.prototype.expandAll = function() {
        this.expandChildren(),
        this.expand()
    }
    ,
    e.ui.tree.BaseNode.prototype.reveal = function() {
        var e = this.getParent();
        e && (e.setExpanded(!0),
        e.reveal())
    }
    ,
    e.ui.tree.BaseNode.prototype.setIsUserCollapsible = function(e) {
        (this.isUserCollapsible_ = e) || this.expand(),
        this.getElement() && this.updateExpandIcon()
    }
    ,
    e.ui.tree.BaseNode.prototype.isUserCollapsible = function() {
        return this.isUserCollapsible_
    }
    ,
    e.ui.tree.BaseNode.prototype.toSafeHtml = function() {
        var t = this.getTree()
          , n = !t.getShowLines() || t == this.getParent() && !t.getShowRootLines() ? this.config_.cssChildrenNoLines : this.config_.cssChildren;
        t = this.getExpanded() && this.hasChildren(),
        n = {
            class: n,
            style: this.getLineStyle()
        };
        var o = [];
        return t && this.forEachChild(function(e) {
            o.push(e.toSafeHtml())
        }),
        t = e.html.SafeHtml.create("div", n, o),
        e.html.SafeHtml.create("div", {
            class: this.config_.cssItem,
            id: this.getId()
        }, [this.getRowSafeHtml(), t])
    }
    ,
    e.ui.tree.BaseNode.prototype.getPixelIndent_ = function() {
        return Math.max(0, (this.getDepth() - 1) * this.config_.indentWidth)
    }
    ,
    e.ui.tree.BaseNode.prototype.getRowSafeHtml = function() {
        var t = {};
        t["padding-" + (this.isRightToLeft() ? "right" : "left")] = this.getPixelIndent_() + "px",
        t = {
            class: this.getRowClassName(),
            style: t
        };
        var n = [this.getExpandIconSafeHtml(), this.getIconSafeHtml(), this.getLabelSafeHtml()];
        return e.html.SafeHtml.create("div", t, n)
    }
    ,
    e.ui.tree.BaseNode.prototype.getRowClassName = function() {
        var e = this.isSelected() ? " " + this.config_.cssSelectedRow : "";
        return this.config_.cssTreeRow + e
    }
    ,
    e.ui.tree.BaseNode.prototype.getLabelSafeHtml = function() {
        var t = e.html.SafeHtml.create("span", {
            class: this.config_.cssItemLabel,
            title: this.getToolTip() || null
        }, this.getSafeHtml());
        return e.html.SafeHtml.concat(t, e.html.SafeHtml.create("span", {}, this.getAfterLabelSafeHtml()))
    }
    ,
    e.ui.tree.BaseNode.prototype.getAfterLabelHtml = function() {
        return e.html.SafeHtml.unwrap(this.getAfterLabelSafeHtml())
    }
    ,
    e.ui.tree.BaseNode.prototype.getAfterLabelSafeHtml = function() {
        return this.afterLabelHtml_
    }
    ,
    e.ui.tree.BaseNode.prototype.setAfterLabelSafeHtml = function(t) {
        this.afterLabelHtml_ = t;
        var n = this.getAfterLabelElement();
        n && e.dom.safe.setInnerHtml(n, t)
    }
    ,
    e.ui.tree.BaseNode.prototype.getIconSafeHtml = function() {
        return e.html.SafeHtml.create("span", {
            style: {
                display: "inline-block"
            },
            class: this.getCalculatedIconClass()
        })
    }
    ,
    e.ui.tree.BaseNode.prototype.getCalculatedIconClass = e.abstractMethod,
    e.ui.tree.BaseNode.prototype.getExpandIconSafeHtml = function() {
        return e.html.SafeHtml.create("span", {
            type: "expand",
            style: {
                display: "inline-block"
            },
            class: this.getExpandIconClass()
        })
    }
    ,
    e.ui.tree.BaseNode.prototype.getExpandIconClass = function() {
        var t = this.getTree()
          , n = !t.getShowLines() || t == this.getParent() && !t.getShowRootLines()
          , o = this.config_
          , r = new e.string.StringBuffer;
        if (r.append(o.cssTreeIcon, " ", o.cssExpandTreeIcon, " "),
        this.hasChildren()) {
            var i = 0;
            switch (t.getShowExpandIcons() && this.isUserCollapsible_ && (i = this.getExpanded() ? 2 : 1),
            n || (i = this.isLastSibling() ? i + 4 : i + 8),
            i) {
            case 1:
                r.append(o.cssExpandTreeIconPlus);
                break;
            case 2:
                r.append(o.cssExpandTreeIconMinus);
                break;
            case 4:
                r.append(o.cssExpandTreeIconL);
                break;
            case 5:
                r.append(o.cssExpandTreeIconLPlus);
                break;
            case 6:
                r.append(o.cssExpandTreeIconLMinus);
                break;
            case 8:
                r.append(o.cssExpandTreeIconT);
                break;
            case 9:
                r.append(o.cssExpandTreeIconTPlus);
                break;
            case 10:
                r.append(o.cssExpandTreeIconTMinus);
                break;
            default:
                r.append(o.cssExpandTreeIconBlank)
            }
        } else
            n ? r.append(o.cssExpandTreeIconBlank) : this.isLastSibling() ? r.append(o.cssExpandTreeIconL) : r.append(o.cssExpandTreeIconT);
        return r.toString()
    }
    ,
    e.ui.tree.BaseNode.prototype.getLineStyle = function() {
        var t = this.getExpanded() && this.hasChildren();
        return e.html.SafeStyle.create({
            "background-position": this.getBackgroundPosition(),
            display: t ? null : "none"
        })
    }
    ,
    e.ui.tree.BaseNode.prototype.getBackgroundPosition = function() {
        return (this.isLastSibling() ? "-100" : (this.getDepth() - 1) * this.config_.indentWidth) + "px 0"
    }
    ,
    e.ui.tree.BaseNode.prototype.getElement = function() {
        var t = e.ui.tree.BaseNode.superClass_.getElement.call(this);
        return t || (t = this.getDomHelper().getElement(this.getId()),
        this.setElementInternal(t)),
        t
    }
    ,
    e.ui.tree.BaseNode.prototype.getRowElement = function() {
        var e = this.getElement();
        return e ? e.firstChild : null
    }
    ,
    e.ui.tree.BaseNode.prototype.getExpandIconElement = function() {
        var e = this.getRowElement();
        return e ? e.firstChild : null
    }
    ,
    e.ui.tree.BaseNode.prototype.getIconElement = function() {
        var e = this.getRowElement();
        return e ? e.childNodes[1] : null
    }
    ,
    e.ui.tree.BaseNode.prototype.getLabelElement = function() {
        var e = this.getRowElement();
        return e && e.lastChild ? e.lastChild.previousSibling : null
    }
    ,
    e.ui.tree.BaseNode.prototype.getAfterLabelElement = function() {
        var e = this.getRowElement();
        return e ? e.lastChild : null
    }
    ,
    e.ui.tree.BaseNode.prototype.getChildrenElement = function() {
        var e = this.getElement();
        return e ? e.lastChild : null
    }
    ,
    e.ui.tree.BaseNode.prototype.setIconClass = function(e) {
        this.iconClass_ = e,
        this.isInDocument() && this.updateIcon_()
    }
    ,
    e.ui.tree.BaseNode.prototype.getIconClass = function() {
        return this.iconClass_
    }
    ,
    e.ui.tree.BaseNode.prototype.setExpandedIconClass = function(e) {
        this.expandedIconClass_ = e,
        this.isInDocument() && this.updateIcon_()
    }
    ,
    e.ui.tree.BaseNode.prototype.getExpandedIconClass = function() {
        return this.expandedIconClass_
    }
    ,
    e.ui.tree.BaseNode.prototype.setText = function(t) {
        this.setSafeHtml(e.html.SafeHtml.htmlEscape(t))
    }
    ,
    e.ui.tree.BaseNode.prototype.getText = function() {
        return e.string.unescapeEntities(e.html.SafeHtml.unwrap(this.html_))
    }
    ,
    e.ui.tree.BaseNode.prototype.setSafeHtml = function(t) {
        this.html_ = t;
        var n = this.getLabelElement();
        n && e.dom.safe.setInnerHtml(n, t),
        (t = this.getTree()) && t.setNode(this)
    }
    ,
    e.ui.tree.BaseNode.prototype.getHtml = function() {
        return e.html.SafeHtml.unwrap(this.getSafeHtml())
    }
    ,
    e.ui.tree.BaseNode.prototype.getSafeHtml = function() {
        return this.html_
    }
    ,
    e.ui.tree.BaseNode.prototype.setToolTip = function(e) {
        this.toolTip_ = e;
        var t = this.getLabelElement();
        t && (t.title = e)
    }
    ,
    e.ui.tree.BaseNode.prototype.getToolTip = function() {
        return this.toolTip_
    }
    ,
    e.ui.tree.BaseNode.prototype.updateRow = function() {
        var e = this.getRowElement();
        e && (e.className = this.getRowClassName())
    }
    ,
    e.ui.tree.BaseNode.prototype.updateExpandIcon = function() {
        var e = this.getExpandIconElement();
        e && (e.className = this.getExpandIconClass()),
        (e = this.getChildrenElement()) && (e.style.backgroundPosition = this.getBackgroundPosition())
    }
    ,
    e.ui.tree.BaseNode.prototype.updateIcon_ = function() {
        this.getIconElement().className = this.getCalculatedIconClass()
    }
    ,
    e.ui.tree.BaseNode.prototype.onMouseDown = function(e) {
        "expand" == e.target.getAttribute("type") && this.hasChildren() ? this.isUserCollapsible_ && this.toggle() : (this.select(),
        this.updateRow())
    }
    ,
    e.ui.tree.BaseNode.prototype.onClick_ = e.events.Event.preventDefault,
    e.ui.tree.BaseNode.prototype.onDoubleClick_ = function(e) {
        "expand" == e.target.getAttribute("type") && this.hasChildren() || this.isUserCollapsible_ && this.toggle()
    }
    ,
    e.ui.tree.BaseNode.prototype.onKeyDown = function(t) {
        var n = !0;
        switch (t.keyCode) {
        case e.events.KeyCodes.RIGHT:
            if (t.altKey)
                break;
            this.hasChildren() && (this.getExpanded() ? this.getFirstChild().select() : this.setExpanded(!0));
            break;
        case e.events.KeyCodes.LEFT:
            if (t.altKey)
                break;
            if (this.hasChildren() && this.getExpanded() && this.isUserCollapsible_)
                this.setExpanded(!1);
            else {
                var o = this.getParent()
                  , r = this.getTree();
                o && (r.getShowRootNode() || o != r) && o.select()
            }
            break;
        case e.events.KeyCodes.DOWN:
            (o = this.getNextShownNode()) && o.select();
            break;
        case e.events.KeyCodes.UP:
            (o = this.getPreviousShownNode()) && o.select();
            break;
        default:
            n = !1
        }
        return n && (t.preventDefault(),
        (r = this.getTree()) && r.clearTypeAhead()),
        n
    }
    ,
    e.ui.tree.BaseNode.prototype.getLastShownDescendant = function() {
        return this.getExpanded() && this.hasChildren() ? this.getLastChild().getLastShownDescendant() : this
    }
    ,
    e.ui.tree.BaseNode.prototype.getNextShownNode = function() {
        if (this.hasChildren() && this.getExpanded())
            return this.getFirstChild();
        for (var e, t = this; t != this.getTree(); ) {
            if (null != (e = t.getNextSibling()))
                return e;
            t = t.getParent()
        }
        return null
    }
    ,
    e.ui.tree.BaseNode.prototype.getPreviousShownNode = function() {
        var e = this.getPreviousSibling();
        if (null != e)
            return e.getLastShownDescendant();
        e = this.getParent();
        var t = this.getTree();
        return !t.getShowRootNode() && e == t || this == t ? null : e
    }
    ,
    e.ui.tree.BaseNode.prototype.getClientData = e.ui.tree.BaseNode.prototype.getModel,
    e.ui.tree.BaseNode.prototype.setClientData = e.ui.tree.BaseNode.prototype.setModel,
    e.ui.tree.BaseNode.prototype.getConfig = function() {
        return this.config_
    }
    ,
    e.ui.tree.BaseNode.prototype.setTreeInternal = function(e) {
        this.tree != e && (this.tree = e,
        e.setNode(this),
        this.forEachChild(function(t) {
            t.setTreeInternal(e)
        }))
    }
    ,
    e.ui.tree.BaseNode.defaultConfig = {
        indentWidth: 19,
        cssRoot: "goog-tree-root goog-tree-item",
        cssHideRoot: "goog-tree-hide-root",
        cssItem: "goog-tree-item",
        cssChildren: "goog-tree-children",
        cssChildrenNoLines: "goog-tree-children-nolines",
        cssTreeRow: "goog-tree-row",
        cssItemLabel: "goog-tree-item-label",
        cssTreeIcon: "goog-tree-icon",
        cssExpandTreeIcon: "goog-tree-expand-icon",
        cssExpandTreeIconPlus: "goog-tree-expand-icon-plus",
        cssExpandTreeIconMinus: "goog-tree-expand-icon-minus",
        cssExpandTreeIconTPlus: "goog-tree-expand-icon-tplus",
        cssExpandTreeIconTMinus: "goog-tree-expand-icon-tminus",
        cssExpandTreeIconLPlus: "goog-tree-expand-icon-lplus",
        cssExpandTreeIconLMinus: "goog-tree-expand-icon-lminus",
        cssExpandTreeIconT: "goog-tree-expand-icon-t",
        cssExpandTreeIconL: "goog-tree-expand-icon-l",
        cssExpandTreeIconBlank: "goog-tree-expand-icon-blank",
        cssExpandedFolderIcon: "goog-tree-expanded-folder-icon",
        cssCollapsedFolderIcon: "goog-tree-collapsed-folder-icon",
        cssFileIcon: "goog-tree-file-icon",
        cssExpandedRootIcon: "goog-tree-expanded-folder-icon",
        cssCollapsedRootIcon: "goog-tree-collapsed-folder-icon",
        cssSelectedRow: "selected"
    },
    e.ui.tree.TreeNode = function(t, n, o) {
        e.ui.tree.BaseNode.call(this, t, n, o)
    }
    ,
    e.inherits(e.ui.tree.TreeNode, e.ui.tree.BaseNode),
    e.ui.tree.TreeNode.prototype.getTree = function() {
        if (this.tree)
            return this.tree;
        var e = this.getParent();
        return e && (e = e.getTree()) ? (this.setTreeInternal(e),
        e) : null
    }
    ,
    e.ui.tree.TreeNode.prototype.getCalculatedIconClass = function() {
        var e = this.getExpanded()
          , t = this.getExpandedIconClass();
        if (e && t)
            return t;
        if (t = this.getIconClass(),
        !e && t)
            return t;
        if (t = this.getConfig(),
        this.hasChildren()) {
            if (e && t.cssExpandedFolderIcon)
                return t.cssTreeIcon + " " + t.cssExpandedFolderIcon;
            if (!e && t.cssCollapsedFolderIcon)
                return t.cssTreeIcon + " " + t.cssCollapsedFolderIcon
        } else if (t.cssFileIcon)
            return t.cssTreeIcon + " " + t.cssFileIcon;
        return ""
    }
    ,
    e.structs = {},
    e.structs.getCount = function(t) {
        return t.getCount && "function" == typeof t.getCount ? t.getCount() : e.isArrayLike(t) || e.isString(t) ? t.length : e.object.getCount(t)
    }
    ,
    e.structs.getValues = function(t) {
        if (t.getValues && "function" == typeof t.getValues)
            return t.getValues();
        if (e.isString(t))
            return t.split("");
        if (e.isArrayLike(t)) {
            for (var n = [], o = t.length, r = 0; r < o; r++)
                n.push(t[r]);
            return n
        }
        return e.object.getValues(t)
    }
    ,
    e.structs.getKeys = function(t) {
        if (t.getKeys && "function" == typeof t.getKeys)
            return t.getKeys();
        if (!t.getValues || "function" != typeof t.getValues) {
            if (e.isArrayLike(t) || e.isString(t)) {
                var n = [];
                t = t.length;
                for (var o = 0; o < t; o++)
                    n.push(o);
                return n
            }
            return e.object.getKeys(t)
        }
    }
    ,
    e.structs.contains = function(t, n) {
        return t.contains && "function" == typeof t.contains ? t.contains(n) : t.containsValue && "function" == typeof t.containsValue ? t.containsValue(n) : e.isArrayLike(t) || e.isString(t) ? e.array.contains(t, n) : e.object.containsValue(t, n)
    }
    ,
    e.structs.isEmpty = function(t) {
        return t.isEmpty && "function" == typeof t.isEmpty ? t.isEmpty() : e.isArrayLike(t) || e.isString(t) ? e.array.isEmpty(t) : e.object.isEmpty(t)
    }
    ,
    e.structs.clear = function(t) {
        t.clear && "function" == typeof t.clear ? t.clear() : e.isArrayLike(t) ? e.array.clear(t) : e.object.clear(t)
    }
    ,
    e.structs.forEach = function(t, n, o) {
        if (t.forEach && "function" == typeof t.forEach)
            t.forEach(n, o);
        else if (e.isArrayLike(t) || e.isString(t))
            e.array.forEach(t, n, o);
        else
            for (var r = e.structs.getKeys(t), i = e.structs.getValues(t), s = i.length, a = 0; a < s; a++)
                n.call(o, i[a], r && r[a], t)
    }
    ,
    e.structs.filter = function(t, n, o) {
        if ("function" == typeof t.filter)
            return t.filter(n, o);
        if (e.isArrayLike(t) || e.isString(t))
            return e.array.filter(t, n, o);
        var r = e.structs.getKeys(t)
          , i = e.structs.getValues(t)
          , s = i.length;
        if (r)
            for (var a = {}, l = 0; l < s; l++)
                n.call(o, i[l], r[l], t) && (a[r[l]] = i[l]);
        else
            for (a = [],
            l = 0; l < s; l++)
                n.call(o, i[l], void 0, t) && a.push(i[l]);
        return a
    }
    ,
    e.structs.map = function(t, n, o) {
        if ("function" == typeof t.map)
            return t.map(n, o);
        if (e.isArrayLike(t) || e.isString(t))
            return e.array.map(t, n, o);
        var r = e.structs.getKeys(t)
          , i = e.structs.getValues(t)
          , s = i.length;
        if (r)
            for (var a = {}, l = 0; l < s; l++)
                a[r[l]] = n.call(o, i[l], r[l], t);
        else
            for (a = [],
            l = 0; l < s; l++)
                a[l] = n.call(o, i[l], void 0, t);
        return a
    }
    ,
    e.structs.some = function(t, n, o) {
        if ("function" == typeof t.some)
            return t.some(n, o);
        if (e.isArrayLike(t) || e.isString(t))
            return e.array.some(t, n, o);
        for (var r = e.structs.getKeys(t), i = e.structs.getValues(t), s = i.length, a = 0; a < s; a++)
            if (n.call(o, i[a], r && r[a], t))
                return !0;
        return !1
    }
    ,
    e.structs.every = function(t, n, o) {
        if ("function" == typeof t.every)
            return t.every(n, o);
        if (e.isArrayLike(t) || e.isString(t))
            return e.array.every(t, n, o);
        for (var r = e.structs.getKeys(t), i = e.structs.getValues(t), s = i.length, a = 0; a < s; a++)
            if (!n.call(o, i[a], r && r[a], t))
                return !1;
        return !0
    }
    ,
    e.structs.Trie = function(e) {
        this.value_ = void 0,
        this.childNodes_ = {},
        e && this.setAll(e)
    }
    ,
    e.structs.Trie.prototype.set = function(e, t) {
        this.setOrAdd_(e, t, !1)
    }
    ,
    e.structs.Trie.prototype.add = function(e, t) {
        this.setOrAdd_(e, t, !0)
    }
    ,
    e.structs.Trie.prototype.setOrAdd_ = function(t, n, o) {
        for (var r = this, i = 0; i < t.length; i++) {
            var s = t.charAt(i);
            r.childNodes_[s] || (r.childNodes_[s] = new e.structs.Trie),
            r = r.childNodes_[s]
        }
        if (o && void 0 !== r.value_)
            throw Error('The collection already contains the key "' + t + '"');
        r.value_ = n
    }
    ,
    e.structs.Trie.prototype.setAll = function(t) {
        var n = e.structs.getKeys(t);
        t = e.structs.getValues(t);
        for (var o = 0; o < n.length; o++)
            this.set(n[o], t[o])
    }
    ,
    e.structs.Trie.prototype.getChildNode_ = function(e) {
        for (var t = this, n = 0; n < e.length; n++) {
            var o = e.charAt(n);
            if (!(t = t.childNodes_[o]))
                return
        }
        return t
    }
    ,
    e.structs.Trie.prototype.get = function(e) {
        return (e = this.getChildNode_(e)) ? e.value_ : void 0
    }
    ,
    e.structs.Trie.prototype.getKeyAndPrefixes = function(e, t) {
        var n = this
          , o = {};
        for (t = t || 0,
        void 0 !== n.value_ && (o[t] = n.value_); t < e.length; t++) {
            var r = e.charAt(t);
            if (!(r in n.childNodes_))
                break;
            void 0 !== (n = n.childNodes_[r]).value_ && (o[t] = n.value_)
        }
        return o
    }
    ,
    e.structs.Trie.prototype.getValues = function() {
        var e = [];
        return this.getValuesInternal_(e),
        e
    }
    ,
    e.structs.Trie.prototype.getValuesInternal_ = function(e) {
        for (var t in void 0 !== this.value_ && e.push(this.value_),
        this.childNodes_)
            this.childNodes_[t].getValuesInternal_(e)
    }
    ,
    e.structs.Trie.prototype.getKeys = function(e) {
        var t = [];
        if (e) {
            for (var n = this, o = 0; o < e.length; o++) {
                var r = e.charAt(o);
                if (!n.childNodes_[r])
                    return [];
                n = n.childNodes_[r]
            }
            n.getKeysInternal_(e, t)
        } else
            this.getKeysInternal_("", t);
        return t
    }
    ,
    e.structs.Trie.prototype.getKeysInternal_ = function(e, t) {
        for (var n in void 0 !== this.value_ && t.push(e),
        this.childNodes_)
            this.childNodes_[n].getKeysInternal_(e + n, t)
    }
    ,
    e.structs.Trie.prototype.containsKey = function(e) {
        return void 0 !== this.get(e)
    }
    ,
    e.structs.Trie.prototype.containsPrefix = function(e) {
        return 0 == e.length ? !this.isEmpty() : !!this.getChildNode_(e)
    }
    ,
    e.structs.Trie.prototype.containsValue = function(e) {
        if (this.value_ === e)
            return !0;
        for (var t in this.childNodes_)
            if (this.childNodes_[t].containsValue(e))
                return !0;
        return !1
    }
    ,
    e.structs.Trie.prototype.clear = function() {
        this.childNodes_ = {},
        this.value_ = void 0
    }
    ,
    e.structs.Trie.prototype.remove = function(e) {
        for (var t = this, n = [], o = 0; o < e.length; o++) {
            var r = e.charAt(o);
            if (!t.childNodes_[r])
                throw Error('The collection does not have the key "' + e + '"');
            n.push([t, r]),
            t = t.childNodes_[r]
        }
        for (e = t.value_,
        delete t.value_; 0 < n.length && (t = (r = n.pop())[0],
        r = r[1],
        t.childNodes_[r].isEmpty()); )
            delete t.childNodes_[r];
        return e
    }
    ,
    e.structs.Trie.prototype.clone = function() {
        return new e.structs.Trie(this)
    }
    ,
    e.structs.Trie.prototype.getCount = function() {
        return e.structs.getCount(this.getValues())
    }
    ,
    e.structs.Trie.prototype.isEmpty = function() {
        return void 0 === this.value_ && e.object.isEmpty(this.childNodes_)
    }
    ,
    e.ui.tree.TypeAhead = function() {
        this.nodeMap_ = new e.structs.Trie,
        this.buffer_ = "",
        this.matchingNodes_ = this.matchingLabels_ = null,
        this.matchingNodeIndex_ = this.matchingLabelIndex_ = 0
    }
    ,
    e.ui.tree.TypeAhead.Offset = {
        DOWN: 1,
        UP: -1
    },
    e.ui.tree.TypeAhead.prototype.handleNavigation = function(t) {
        var n = !1;
        switch (t.keyCode) {
        case e.events.KeyCodes.DOWN:
        case e.events.KeyCodes.UP:
            t.ctrlKey && (this.jumpTo_(t.keyCode == e.events.KeyCodes.DOWN ? e.ui.tree.TypeAhead.Offset.DOWN : e.ui.tree.TypeAhead.Offset.UP),
            n = !0);
            break;
        case e.events.KeyCodes.BACKSPACE:
            n = !0,
            0 < (t = this.buffer_.length - 1) ? (this.buffer_ = this.buffer_.substring(0, t),
            this.jumpToLabel_(this.buffer_)) : 0 == t ? this.buffer_ = "" : n = !1;
            break;
        case e.events.KeyCodes.ESC:
            this.buffer_ = "",
            n = !0
        }
        return n
    }
    ,
    e.ui.tree.TypeAhead.prototype.handleTypeAheadChar = function(t) {
        var n = !1;
        return t.ctrlKey || t.altKey || (t = String.fromCharCode(t.charCode || t.keyCode).toLowerCase(),
        e.string.isUnicodeChar(t) && (" " != t || this.buffer_) && (this.buffer_ += t,
        n = this.jumpToLabel_(this.buffer_))),
        n
    }
    ,
    e.ui.tree.TypeAhead.prototype.setNodeInMap = function(t) {
        var n = t.getText();
        if (n && !e.string.isEmptyOrWhitespace(e.string.makeSafe(n))) {
            n = n.toLowerCase();
            var o = this.nodeMap_.get(n);
            o ? o.push(t) : this.nodeMap_.set(n, [t])
        }
    }
    ,
    e.ui.tree.TypeAhead.prototype.removeNodeFromMap = function(t) {
        var n = t.getText();
        if (n && !e.string.isEmptyOrWhitespace(e.string.makeSafe(n))) {
            n = n.toLowerCase();
            var o = this.nodeMap_.get(n);
            if (o) {
                for (var r = t.getChildCount(), i = 0; i < r; i++)
                    this.removeNodeFromMap(t.getChildAt(i));
                e.array.remove(o, t),
                o.length || this.nodeMap_.remove(n)
            }
        }
    }
    ,
    e.ui.tree.TypeAhead.prototype.jumpToLabel_ = function(e) {
        var t = !1;
        return (e = this.nodeMap_.getKeys(e)) && e.length && (this.matchingLabelIndex_ = this.matchingNodeIndex_ = 0,
        t = this.nodeMap_.get(e[0]),
        t = this.selectMatchingNode_(t)) && (this.matchingLabels_ = e),
        t
    }
    ,
    e.ui.tree.TypeAhead.prototype.jumpTo_ = function(t) {
        var n = !1
          , o = this.matchingLabels_;
        if (o) {
            n = null;
            var r = !1;
            if (this.matchingNodes_) {
                var i = this.matchingNodeIndex_ + t;
                0 <= i && i < this.matchingNodes_.length ? (this.matchingNodeIndex_ = i,
                n = this.matchingNodes_) : r = !0
            }
            n || (0 <= (i = this.matchingLabelIndex_ + t) && i < o.length && (this.matchingLabelIndex_ = i),
            o.length > this.matchingLabelIndex_ && (n = this.nodeMap_.get(o[this.matchingLabelIndex_])),
            n && n.length && r && (this.matchingNodeIndex_ = t == e.ui.tree.TypeAhead.Offset.UP ? n.length - 1 : 0)),
            (n = this.selectMatchingNode_(n)) && (this.matchingLabels_ = o)
        }
        return n
    }
    ,
    e.ui.tree.TypeAhead.prototype.selectMatchingNode_ = function(e) {
        if (e) {
            if (this.matchingNodeIndex_ < e.length) {
                var t = e[this.matchingNodeIndex_];
                this.matchingNodes_ = e
            }
            t && (t.reveal(),
            t.select())
        }
        return !!t
    }
    ,
    e.ui.tree.TypeAhead.prototype.clear = function() {
        this.buffer_ = ""
    }
    ,
    e.ui.tree.TreeControl = function(t, n, o) {
        if (e.ui.tree.BaseNode.call(this, t, n, o),
        this.setExpandedInternal(!0),
        this.setSelectedInternal(!0),
        this.selectedItem_ = this,
        this.typeAhead_ = new e.ui.tree.TypeAhead,
        this.focusHandler_ = this.keyHandler_ = null,
        this.logger_ = e.log.getLogger("this"),
        this.focused_ = !1,
        this.focusedNode_ = null,
        this.showRootLines_ = this.showRootNode_ = this.showExpandIcons_ = this.showLines_ = !0,
        e.userAgent.IE)
            try {
                document.execCommand("BackgroundImageCache", !1, !0)
            } catch (t) {
                e.log.warning(this.logger_, "Failed to enable background image cache")
            }
    }
    ,
    e.inherits(e.ui.tree.TreeControl, e.ui.tree.BaseNode),
    e.ui.tree.TreeControl.prototype.getTree = function() {
        return this
    }
    ,
    e.ui.tree.TreeControl.prototype.getDepth = function() {
        return 0
    }
    ,
    e.ui.tree.TreeControl.prototype.reveal = function() {}
    ,
    e.ui.tree.TreeControl.prototype.handleFocus_ = function() {
        this.focused_ = !0,
        e.dom.classlist.add(e.asserts.assert(this.getElement()), "focused"),
        this.selectedItem_ && this.selectedItem_.select()
    }
    ,
    e.ui.tree.TreeControl.prototype.handleBlur_ = function() {
        this.focused_ = !1,
        e.dom.classlist.remove(e.asserts.assert(this.getElement()), "focused")
    }
    ,
    e.ui.tree.TreeControl.prototype.hasFocus = function() {
        return this.focused_
    }
    ,
    e.ui.tree.TreeControl.prototype.getExpanded = function() {
        return !this.showRootNode_ || e.ui.tree.TreeControl.superClass_.getExpanded.call(this)
    }
    ,
    e.ui.tree.TreeControl.prototype.setExpanded = function(t) {
        this.showRootNode_ ? e.ui.tree.TreeControl.superClass_.setExpanded.call(this, t) : this.setExpandedInternal(t)
    }
    ,
    e.ui.tree.TreeControl.prototype.getExpandIconSafeHtml = function() {
        return e.html.SafeHtml.EMPTY
    }
    ,
    e.ui.tree.TreeControl.prototype.getIconElement = function() {
        var e = this.getRowElement();
        return e ? e.firstChild : null
    }
    ,
    e.ui.tree.TreeControl.prototype.getExpandIconElement = function() {
        return null
    }
    ,
    e.ui.tree.TreeControl.prototype.updateExpandIcon = function() {}
    ,
    e.ui.tree.TreeControl.prototype.getRowClassName = function() {
        return e.ui.tree.TreeControl.superClass_.getRowClassName.call(this) + (this.showRootNode_ ? "" : " " + this.getConfig().cssHideRoot)
    }
    ,
    e.ui.tree.TreeControl.prototype.getCalculatedIconClass = function() {
        var e = this.getExpanded()
          , t = this.getExpandedIconClass();
        return e && t ? t : (t = this.getIconClass(),
        !e && t ? t : (t = this.getConfig(),
        e && t.cssExpandedRootIcon ? t.cssTreeIcon + " " + t.cssExpandedRootIcon : !e && t.cssCollapsedRootIcon ? t.cssTreeIcon + " " + t.cssCollapsedRootIcon : ""))
    }
    ,
    e.ui.tree.TreeControl.prototype.setSelectedItem = function(t) {
        if (this.selectedItem_ != t) {
            var n = !1;
            this.selectedItem_ && (n = this.selectedItem_ == this.focusedNode_,
            this.selectedItem_.setSelectedInternal(!1)),
            (this.selectedItem_ = t) && (t.setSelectedInternal(!0),
            n && t.select()),
            this.dispatchEvent(e.events.EventType.CHANGE)
        }
    }
    ,
    e.ui.tree.TreeControl.prototype.getSelectedItem = function() {
        return this.selectedItem_
    }
    ,
    e.ui.tree.TreeControl.prototype.setShowLines = function(e) {
        this.showLines_ != e && (this.showLines_ = e,
        this.isInDocument() && this.updateLinesAndExpandIcons_())
    }
    ,
    e.ui.tree.TreeControl.prototype.getShowLines = function() {
        return this.showLines_
    }
    ,
    e.ui.tree.TreeControl.prototype.updateLinesAndExpandIcons_ = function() {
        var e = this
          , t = e.getShowLines()
          , n = e.getShowRootLines();
        !function o(r) {
            var i = r.getChildrenElement();
            if (i) {
                var s = !t || e == r.getParent() && !n ? r.getConfig().cssChildrenNoLines : r.getConfig().cssChildren;
                i.className = s,
                (i = r.getExpandIconElement()) && (i.className = r.getExpandIconClass())
            }
            r.forEachChild(o)
        }(this)
    }
    ,
    e.ui.tree.TreeControl.prototype.setShowRootLines = function(e) {
        this.showRootLines_ != e && (this.showRootLines_ = e,
        this.isInDocument() && this.updateLinesAndExpandIcons_())
    }
    ,
    e.ui.tree.TreeControl.prototype.getShowRootLines = function() {
        return this.showRootLines_
    }
    ,
    e.ui.tree.TreeControl.prototype.setShowExpandIcons = function(e) {
        this.showExpandIcons_ != e && (this.showExpandIcons_ = e,
        this.isInDocument() && this.updateLinesAndExpandIcons_())
    }
    ,
    e.ui.tree.TreeControl.prototype.getShowExpandIcons = function() {
        return this.showExpandIcons_
    }
    ,
    e.ui.tree.TreeControl.prototype.setShowRootNode = function(e) {
        if (this.showRootNode_ != e) {
            if (this.showRootNode_ = e,
            this.isInDocument()) {
                var t = this.getRowElement();
                t && (t.className = this.getRowClassName())
            }
            !e && this.getSelectedItem() == this && this.getFirstChild() && this.setSelectedItem(this.getFirstChild())
        }
    }
    ,
    e.ui.tree.TreeControl.prototype.getShowRootNode = function() {
        return this.showRootNode_
    }
    ,
    e.ui.tree.TreeControl.prototype.initAccessibility = function() {
        e.ui.tree.TreeControl.superClass_.initAccessibility.call(this);
        var t = this.getElement();
        e.asserts.assert(t, "The DOM element for the tree cannot be null."),
        e.a11y.aria.setRole(t, "tree"),
        e.a11y.aria.setState(t, "labelledby", this.getLabelElement().id)
    }
    ,
    e.ui.tree.TreeControl.prototype.enterDocument = function() {
        e.ui.tree.TreeControl.superClass_.enterDocument.call(this);
        var t = this.getElement();
        t.className = this.getConfig().cssRoot,
        t.setAttribute("hideFocus", "true"),
        this.attachEvents_(),
        this.initAccessibility()
    }
    ,
    e.ui.tree.TreeControl.prototype.exitDocument = function() {
        e.ui.tree.TreeControl.superClass_.exitDocument.call(this),
        this.detachEvents_()
    }
    ,
    e.ui.tree.TreeControl.prototype.attachEvents_ = function() {
        var t = this.getElement();
        t.tabIndex = 0;
        var n = this.keyHandler_ = new e.events.KeyHandler(t)
          , o = this.focusHandler_ = new e.events.FocusHandler(t);
        this.getHandler().listen(o, e.events.FocusHandler.EventType.FOCUSOUT, this.handleBlur_).listen(o, e.events.FocusHandler.EventType.FOCUSIN, this.handleFocus_).listen(n, e.events.KeyHandler.EventType.KEY, this.handleKeyEvent).listen(t, e.events.EventType.MOUSEDOWN, this.handleMouseEvent_).listen(t, e.events.EventType.CLICK, this.handleMouseEvent_).listen(t, e.events.EventType.DBLCLICK, this.handleMouseEvent_)
    }
    ,
    e.ui.tree.TreeControl.prototype.detachEvents_ = function() {
        this.keyHandler_.dispose(),
        this.keyHandler_ = null,
        this.focusHandler_.dispose(),
        this.focusHandler_ = null
    }
    ,
    e.ui.tree.TreeControl.prototype.handleMouseEvent_ = function(t) {
        e.log.fine(this.logger_, "Received event " + t.type);
        var n = this.getNodeFromEvent_(t);
        if (n)
            switch (t.type) {
            case e.events.EventType.MOUSEDOWN:
                n.onMouseDown(t);
                break;
            case e.events.EventType.CLICK:
                n.onClick_(t);
                break;
            case e.events.EventType.DBLCLICK:
                n.onDoubleClick_(t)
            }
    }
    ,
    e.ui.tree.TreeControl.prototype.handleKeyEvent = function(e) {
        var t;
        return (t = this.typeAhead_.handleNavigation(e) || this.selectedItem_ && this.selectedItem_.onKeyDown(e) || this.typeAhead_.handleTypeAheadChar(e)) && e.preventDefault(),
        t
    }
    ,
    e.ui.tree.TreeControl.prototype.getNodeFromEvent_ = function(t) {
        for (var n = t.target; null != n; ) {
            if (t = e.ui.tree.BaseNode.allNodes[n.id])
                return t;
            if (n == this.getElement())
                break;
            n = n.parentNode
        }
        return null
    }
    ,
    e.ui.tree.TreeControl.prototype.createNode = function(t) {
        return new e.ui.tree.TreeNode(t || e.html.SafeHtml.EMPTY,this.getConfig(),this.getDomHelper())
    }
    ,
    e.ui.tree.TreeControl.prototype.setNode = function(e) {
        this.typeAhead_.setNodeInMap(e)
    }
    ,
    e.ui.tree.TreeControl.prototype.removeNode = function(e) {
        this.typeAhead_.removeNodeFromMap(e)
    }
    ,
    e.ui.tree.TreeControl.prototype.clearTypeAhead = function() {
        this.typeAhead_.clear()
    }
    ,
    e.ui.tree.TreeControl.defaultConfig = e.ui.tree.BaseNode.defaultConfig,
    z.Toolbox = {},
    z.Toolbox.width = 0,
    z.Toolbox.selectedOption_ = null,
    z.Toolbox.CONFIG_ = {
        indentWidth: 19,
        cssRoot: "blocklyTreeRoot",
        cssHideRoot: "blocklyHidden",
        cssItem: "",
        cssTreeRow: "blocklyTreeRow",
        cssItemLabel: "blocklyTreeLabel",
        cssTreeIcon: "blocklyTreeIcon",
        cssExpandedFolderIcon: "blocklyTreeIconOpen",
        cssFileIcon: "blocklyTreeIconNone",
        cssSelectedRow: "blocklyTreeSelected"
    },
    z.Toolbox.createDom = function(t, n) {
        z.Toolbox.HtmlDiv = e.dom.createDom("div", "blocklyToolboxDiv"),
        z.Toolbox.HtmlDiv.setAttribute("dir", z.RTL ? "RTL" : "LTR"),
        n.appendChild(z.Toolbox.HtmlDiv),
        z.Toolbox.flyout_ = new z.Flyout,
        t.appendChild(z.Toolbox.flyout_.createDom()),
        z.bindEvent_(z.Toolbox.HtmlDiv, "mousedown", null, function(e) {
            z.isRightButton(e) || e.target == z.Toolbox.HtmlDiv ? z.hideChaff(!1) : z.hideChaff(!0)
        })
    }
    ,
    z.Toolbox.init = function() {
        z.Toolbox.CONFIG_.cleardotPath = z.pathToBlockly + "media/1x1.gif",
        z.Toolbox.CONFIG_.cssCollapsedFolderIcon = "blocklyTreeIconClosed" + (z.RTL ? "Rtl" : "Ltr");
        var t = new z.Toolbox.TreeControl(e.html.SafeHtml.EMPTY,z.Toolbox.CONFIG_);
        z.Toolbox.tree_ = t,
        t.setShowRootNode(!1),
        t.setShowLines(!1),
        t.setShowExpandIcons(!1),
        t.setSelectedItem(null),
        z.Toolbox.HtmlDiv.style.display = "block",
        z.Toolbox.flyout_.init(z.mainWorkspace),
        z.Toolbox.populate_(),
        t.render(z.Toolbox.HtmlDiv),
        e.events.listen(window, e.events.EventType.RESIZE, z.Toolbox.position_),
        z.Toolbox.position_()
    }
    ,
    z.Toolbox.position_ = function() {
        var t = z.Toolbox.HtmlDiv
          , n = e.style.getBorderBox(z.svg)
          , o = z.svgSize();
        z.RTL ? (n = z.convertCoordinates(0, 0, !1),
        t.style.left = n.x + o.width - t.offsetWidth + "px") : t.style.marginLeft = n.left,
        t.style.height = o.height + 1 + "px",
        z.Toolbox.width = t.offsetWidth,
        z.RTL || --z.Toolbox.width
    }
    ,
    z.Toolbox.populate_ = function() {
        var e = z.Toolbox.tree_;
        if (e.removeChildren(),
        e.blocks = [],
        function t(n, o) {
            for (var r, i = 0; r = n.childNodes[i]; i++)
                if (r.tagName) {
                    var s = r.tagName.toUpperCase();
                    if ("CATEGORY" == s) {
                        (s = e.createNode(r.getAttribute("name"))).blocks = [],
                        o.add(s);
                        var a = r.getAttribute("custom");
                        a ? s.blocks = a : t(r, s)
                    } else
                        "BLOCK" == s && o.blocks.push(r)
                }
        }(z.languageTree, z.Toolbox.tree_),
        e.blocks.length)
            throw "Toolbox cannot have both blocks and categories in the root level.";
        z.fireUiEvent(window, "resize")
    }
    ,
    z.Toolbox.clearSelection = function() {
        z.Toolbox.tree_.setSelectedItem(null)
    }
    ,
    z.Toolbox.TreeControl = function(t, n, o) {
        e.ui.tree.TreeControl.call(this, t, n, o)
    }
    ,
    e.inherits(z.Toolbox.TreeControl, e.ui.tree.TreeControl),
    z.Toolbox.TreeControl.prototype.enterDocument = function() {
        if (z.Toolbox.TreeControl.superClass_.enterDocument.call(this),
        e.events.BrowserFeature.TOUCH_ENABLED) {
            var t = this.getElement();
            z.bindEvent_(t, e.events.EventType.TOUCHSTART, this, this.handleTouchEvent_)
        }
    }
    ,
    z.Toolbox.TreeControl.prototype.handleTouchEvent_ = function(t) {
        t.preventDefault();
        var n = this.getNodeFromEvent_(t);
        n && t.type === e.events.EventType.TOUCHSTART && window.setTimeout(function() {
            n.onMouseDown(t)
        }, 1)
    }
    ,
    z.Toolbox.TreeControl.prototype.createNode = function(t) {
        return new z.Toolbox.TreeNode(t ? e.html.SafeHtml.htmlEscape(t) : e.html.SafeHtml.EMPTY,this.getConfig(),this.getDomHelper())
    }
    ,
    z.Toolbox.TreeControl.prototype.setSelectedItem = function(t) {
        this.selectedItem_ != t && (e.ui.tree.TreeControl.prototype.setSelectedItem.call(this, t),
        t && t.blocks && t.blocks.length ? z.Toolbox.flyout_.show(t.blocks) : z.Toolbox.flyout_.hide())
    }
    ,
    z.Toolbox.TreeNode = function(t, n, o) {
        function r() {
            z.fireUiEvent(window, "resize")
        }
        e.ui.tree.TreeNode.call(this, t, n, o),
        e.events.listen(z.Toolbox.tree_, e.ui.tree.BaseNode.EventType.EXPAND, r),
        e.events.listen(z.Toolbox.tree_, e.ui.tree.BaseNode.EventType.COLLAPSE, r)
    }
    ,
    e.inherits(z.Toolbox.TreeNode, e.ui.tree.TreeNode),
    e.ui.tree.BaseNode.prototype.getExpandIconSafeHtml = function() {
        return e.html.SafeHtml.create("span")
    }
    ,
    z.Toolbox.TreeNode.prototype.onMouseDown = function() {
        this.hasChildren() && this.isUserCollapsible_ ? (this.toggle(),
        this.select()) : this.isSelected() ? this.getTree().setSelectedItem(null) : this.select(),
        this.updateRow()
    }
    ,
    z.Toolbox.TreeNode.prototype.onDoubleClick_ = function() {}
    ,
    z.Variables = {},
    z.Variables.NAME_TYPE = "VARIABLE",
    z.Variables.allVariables = function(e) {
        var t = e ? e.getDescendants() : z.mainWorkspace.getAllBlocks();
        e = Object.create(null);
        for (var n = 0; n < t.length; n++) {
            var o = t[n].getVars;
            if (o) {
                o = o.call(t[n]);
                for (var r = 0; r < o.length; r++) {
                    var i = o[r];
                    i && (e[i.toLowerCase()] = i)
                }
            }
        }
        for (var s in t = [],
        e)
            t.push(e[s]);
        return t
    }
    ,
    z.Variables.renameVariable = function(e, t) {
        for (var n = z.mainWorkspace.getAllBlocks(), o = 0; o < n.length; o++) {
            var r = n[o].renameVar;
            r && r.call(n[o], e, t)
        }
    }
    ,
    z.Variables.flyoutCategory = function(t, n, o, r) {
        var i = z.Variables.allVariables();
        i.sort(e.string.caseInsensitiveCompare),
        i.unshift(null);
        for (var s = void 0, a = 0; a < i.length; a++)
            if (i[a] !== s) {
                var l = z.Blocks.variables_get ? z.Block.obtain(r, "variables_get") : null;
                l && l.initSvg();
                var u = z.Blocks.variables_set ? z.Block.obtain(r, "variables_set") : null;
                u && u.initSvg(),
                null === i[a] ? s = (l || u).getVars()[0] : (l && l.setFieldValue(i[a], "VAR"),
                u && u.setFieldValue(i[a], "VAR")),
                u && t.push(u),
                l && t.push(l),
                l && u ? n.push(o, 3 * o) : n.push(2 * o)
            }
    }
    ,
    z.Variables.generateUniqueName = function() {
        var t = z.Variables.allVariables()
          , n = "";
        if (t.length) {
            t.sort(e.string.caseInsensitiveCompare);
            for (var o, r, i = 0, s = "i"; !n; ) {
                for (o = 0,
                r = !1; o < t.length && !r; )
                    t[o].toLowerCase() == s && (r = !0),
                    o++;
                r ? ("z" === s[0] ? (i++,
                s = "a") : "l" == (s = String.fromCharCode(s.charCodeAt(0) + 1))[0] && (s = String.fromCharCode(s.charCodeAt(0) + 1)),
                0 < i && (s += i)) : n = s
            }
        } else
            n = "i";
        return n
    }
    ,
    z.FieldVariable = function(e, t) {
        if (t)
            var n = this
              , o = function(e) {
                var o = z.FieldVariable.dropdownChange.call(n, e);
                return e = void 0 === o ? e : null === o ? n.getValue() : o,
                t.call(n, e),
                o
            };
        else
            o = z.FieldVariable.dropdownChange;
        z.FieldVariable.superClass_.constructor.call(this, z.FieldVariable.dropdownCreate, o),
        e ? this.setValue(e) : this.setValue(z.Variables.generateUniqueName())
    }
    ,
    e.inherits(z.FieldVariable, z.FieldDropdown),
    z.FieldVariable.prototype.clone = function() {
        return new z.FieldVariable(this.getValue(),this.changeHandler_)
    }
    ,
    z.FieldVariable.prototype.getValue = function() {
        return this.getText()
    }
    ,
    z.FieldVariable.prototype.setValue = function(e) {
        this.value_ = e,
        this.setText(e)
    }
    ,
    z.FieldVariable.dropdownCreate = function() {
        var t = z.Variables.allVariables()
          , n = this.getText();
        n && -1 == t.indexOf(n) && t.push(n),
        t.sort(e.string.caseInsensitiveCompare),
        t.push(z.Msg.RENAME_VARIABLE),
        t.push(z.Msg.NEW_VARIABLE),
        n = [];
        for (var o = 0; o < t.length; o++)
            n[o] = [t[o], t[o]];
        return n
    }
    ,
    z.FieldVariable.dropdownChange = function(e) {
        function t(e, t) {
            return z.hideChaff(),
            (e = window.prompt(e, t)) && e.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "")
        }
        if (e == z.Msg.RENAME_VARIABLE) {
            var n = this.getText();
            return (e = t(z.Msg.RENAME_VARIABLE_TITLE.replace("%1", n), n)) && z.Variables.renameVariable(n, e),
            null
        }
        if (e == z.Msg.NEW_VARIABLE)
            return (e = t(z.Msg.NEW_VARIABLE_TITLE, "")) ? (z.Variables.renameVariable(e, e),
            e) : null
    }
    ,
    z.Generator = function(e) {
        this.name_ = e,
        this.RESERVED_WORDS_ = "",
        this.FUNCTION_NAME_PLACEHOLDER_REGEXP_ = new RegExp(this.FUNCTION_NAME_PLACEHOLDER_,"g")
    }
    ,
    z.Generator.NAME_TYPE = "generated_function",
    z.Generator.prototype.INFINITE_LOOP_TRAP = null,
    z.Generator.prototype.STATEMENT_PREFIX = null,
    z.Generator.prototype.workspaceToCode = function() {
        var t = [];
        this.init();
        for (var n, o = z.mainWorkspace.getTopBlocks(!0), r = 0; n = o[r]; r++) {
            var i = this.blockToCode(n);
            e.isArray(i) && (i = i[0]),
            i && (n.outputConnection && this.scrubNakedValue && (i = this.scrubNakedValue(i)),
            t.push(i))
        }
        return t = t.join("\n"),
        (t = (t = (t = this.finish(t)).replace(/^\s+\n/, "")).replace(/\n\s+$/, "\n")).replace(/[ \t]+\n/g, "\n")
    }
    ,
    z.Generator.prototype.prefixLines = function(e, t) {
        return t + e.replace(/\n(.)/g, "\n" + t + "$1")
    }
    ,
    z.Generator.prototype.allNestedComments = function(e) {
        var t = [];
        e = e.getDescendants();
        for (var n = 0; n < e.length; n++) {
            var o = e[n].getCommentText();
            o && t.push(o)
        }
        return t.length && t.push(""),
        t.join("\n")
    }
    ,
    z.Generator.prototype.blockToCode = function(t) {
        if (!t)
            return "";
        if (t.disabled)
            return this.blockToCode(t.getNextBlock());
        var n = this[t.type];
        if (!n)
            throw 'Language "' + this.name_ + '" does not know how to generate code for block type "' + t.type + '".';
        if (n = n.call(t, t),
        e.isArray(n))
            return [this.scrub_(t, n[0]), n[1]];
        if (e.isString(n))
            return this.STATEMENT_PREFIX && (n = this.STATEMENT_PREFIX.replace(/%1/g, "'" + t.id + "'") + n),
            this.scrub_(t, n);
        if (null === n)
            return "";
        throw "Invalid code generated: " + n
    }
    ,
    z.Generator.prototype.valueToCode = function(t, n, o) {
        if (isNaN(o))
            throw 'Expecting valid order from block "' + t.type + '".';
        if (!(t = t.getInputTargetBlock(n)))
            return "";
        var r = this.blockToCode(t);
        if ("" === r)
            return "";
        if (!e.isArray(r))
            throw 'Expecting tuple from value block "' + t.type + '".';
        if (n = r[0],
        r = r[1],
        isNaN(r))
            throw 'Expecting valid order from value block "' + t.type + '".';
        return n && o <= r && o != r && 0 != o && 99 != o && (n = "(" + n + ")"),
        n
    }
    ,
    z.Generator.prototype.statementToCode = function(t, n) {
        if (t = t.getInputTargetBlock(n),
        n = this.blockToCode(t),
        !e.isString(n))
            throw 'Expecting code from statement block "' + t.type + '".';
        return n && (n = this.prefixLines(n, this.INDENT)),
        n
    }
    ,
    z.Generator.prototype.addLoopTrap = function(e, t) {
        return this.INFINITE_LOOP_TRAP && (e = this.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + t + "'") + e),
        this.STATEMENT_PREFIX && (e += this.prefixLines(this.STATEMENT_PREFIX.replace(/%1/g, "'" + t + "'"), this.INDENT)),
        e
    }
    ,
    z.Generator.prototype.INDENT = "  ",
    z.Generator.prototype.addReservedWords = function(e) {
        this.RESERVED_WORDS_ += e + ","
    }
    ,
    z.Generator.prototype.FUNCTION_NAME_PLACEHOLDER_ = "{leCUI8hutHZI4480Dc}",
    z.Generator.prototype.provideFunction_ = function(e, t) {
        if (!this.definitions_[e]) {
            var n = this.variableDB_.getDistinctName(e, this.NAME_TYPE);
            this.functionNames_[e] = n,
            this.definitions_[e] = t.join("\n").replace(this.FUNCTION_NAME_PLACEHOLDER_REGEXP_, n)
        }
        return this.functionNames_[e]
    }
    ,
    z.Names = function(e) {
        if (this.reservedDict_ = Object.create(null),
        e) {
            e = e.split(",");
            for (var t = 0; t < e.length; t++)
                this.reservedDict_[e[t]] = !0
        }
        this.reset()
    }
    ,
    z.Names.prototype.reset = function() {
        this.db_ = Object.create(null),
        this.dbReverse_ = Object.create(null)
    }
    ,
    z.Names.prototype.getName = function(e, t) {
        var n = e.toLowerCase() + "_" + t;
        return n in this.db_ ? this.db_[n] : (e = this.getDistinctName(e, t),
        this.db_[n] = e)
    }
    ,
    z.Names.prototype.getDistinctName = function(e) {
        e = this.safeName_(e);
        for (var t = ""; this.dbReverse_[e + t] || e + t in this.reservedDict_; )
            t = t ? t + 1 : 2;
        return e += t,
        this.dbReverse_[e] = !0,
        e
    }
    ,
    z.Names.prototype.safeName_ = function(e) {
        return e ? (e = encodeURI(e.replace(/ /g, "_")).replace(/[^\w]/g, "_"),
        -1 != "0123456789".indexOf(e[0]) && (e = "my_" + e)) : e = "unnamed",
        e
    }
    ,
    z.Names.equals = function(e, t) {
        return e.toLowerCase() == t.toLowerCase()
    }
    ,
    z.Procedures = {},
    z.Procedures.NAME_TYPE = "PROCEDURE",
    z.Procedures.allProcedures = function() {
        for (var e = z.mainWorkspace.getAllBlocks(), t = [], n = [], o = 0; o < e.length; o++) {
            var r = e[o].getProcedureDef;
            r && (r = r.call(e[o])) && (r[2] ? t.push(r) : n.push(r))
        }
        return n.sort(z.Procedures.procTupleComparator_),
        t.sort(z.Procedures.procTupleComparator_),
        [n, t]
    }
    ,
    z.Procedures.procTupleComparator_ = function(e, t) {
        return (e = e[0].toLowerCase()) > (t = t[0].toLowerCase()) ? 1 : e < t ? -1 : 0
    }
    ,
    z.Procedures.findLegalName = function(e, t) {
        if (t.isInFlyout)
            return e;
        for (; !z.Procedures.isLegalName(e, t.workspace, t); ) {
            var n = e.match(/^(.*?)(\d+)$/);
            e = n ? n[1] + (parseInt(n[2], 10) + 1) : e + "2"
        }
        return e
    }
    ,
    z.Procedures.isLegalName = function(e, t, n) {
        t = t.getAllBlocks();
        for (var o = 0; o < t.length; o++)
            if (t[o] != n) {
                var r = t[o].getProcedureDef;
                if (r && (r = r.call(t[o]),
                z.Names.equals(r[0], e)))
                    return !1
            }
        return !0
    }
    ,
    z.Procedures.rename = function(e) {
        e = e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""),
        e = z.Procedures.findLegalName(e, this.sourceBlock_);
        for (var t = this.sourceBlock_.workspace.getAllBlocks(), n = 0; n < t.length; n++) {
            var o = t[n].renameProcedure;
            o && o.call(t[n], this.text_, e)
        }
        return e
    }
    ,
    z.Procedures.flyoutCategory = function(e, t, n, o) {
        function r(r, i) {
            for (var s = 0; s < r.length; s++) {
                var a = z.Block.obtain(o, i);
                a.setFieldValue(r[s][0], "NAME");
                for (var l = [], u = 0; u < r[s][1].length; u++)
                    l[u] = "ARG" + u;
                a.setProcedureParameters(r[s][1], l),
                a.initSvg(),
                e.push(a),
                t.push(2 * n)
            }
        }
        if (z.Blocks.procedures_defnoreturn) {
            var i = z.Block.obtain(o, "procedures_defnoreturn");
            i.initSvg(),
            e.push(i),
            t.push(2 * n)
        }
        z.Blocks.procedures_defreturn && ((i = z.Block.obtain(o, "procedures_defreturn")).initSvg(),
        e.push(i),
        t.push(2 * n)),
        z.Blocks.procedures_ifreturn && ((i = z.Block.obtain(o, "procedures_ifreturn")).initSvg(),
        e.push(i),
        t.push(2 * n)),
        t.length && (t[t.length - 1] = 3 * n),
        r((i = z.Procedures.allProcedures())[0], "procedures_callnoreturn"),
        r(i[1], "procedures_callreturn")
    }
    ,
    z.Procedures.getCallers = function(e, t) {
        var n = [];
        t = t.getAllBlocks();
        for (var o = 0; o < t.length; o++) {
            var r = t[o].getProcedureCall;
            r && (r = r.call(t[o])) && z.Names.equals(r, e) && n.push(t[o])
        }
        return n
    }
    ,
    z.Procedures.disposeCallers = function(e, t) {
        for (e = z.Procedures.getCallers(e, t),
        t = 0; t < e.length; t++)
            e[t].dispose(!0, !1)
    }
    ,
    z.Procedures.mutateCallers = function(e, t, n, o) {
        for (e = z.Procedures.getCallers(e, t),
        t = 0; t < e.length; t++)
            e[t].setProcedureParameters(n, o)
    }
    ,
    z.Procedures.getDefinition = function(e, t) {
        t = t.getAllBlocks();
        for (var n = 0; n < t.length; n++) {
            var o = t[n].getProcedureDef;
            if (o && (o = o.call(t[n])) && z.Names.equals(o[0], e))
                return t[n]
        }
        return null
    }
    ;
    var A = {
        INSTALL_SCOPE: "https://www.googleapis.com/auth/drive.install",
        FILE_SCOPE: "https://www.googleapis.com/auth/drive.file",
        APPDATA_SCOPE: "https://www.googleapis.com/auth/drive.appdata",
        OPENID_SCOPE: "openid",
        REALTIME_MIMETYPE: "application/vnd.google-apps.drive-sdk",
        FOLDER_KEY: "folderId",
        getParams: function() {
            function e(e) {
                e = e.slice(1).split("&");
                for (var n = 0; n < e.length; n++) {
                    var o = e[n].split("=");
                    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1])
                }
            }
            var t = {}
              , n = window.location.hash;
            return n && e(n),
            (n = window.location.search) && e(n),
            t
        }
    };
    A.params = A.getParams(),
    A.getOption = function(e, t, n) {
        return e.hasOwnProperty(t) ? e[t] : (void 0 === n && console.error(t + " should be present in the options."),
        n)
    }
    ,
    A.Authorizer = function(e) {
        this.clientId = A.getOption(e, "clientId"),
        this.userId = A.params.userId,
        this.authButton = document.getElementById(A.getOption(e, "authButtonElementId")),
        this.authDiv = document.getElementById(A.getOption(e, "authDivElementId"))
    }
    ,
    A.Authorizer.prototype.start = function(e) {
        var t = this;
        gapi.load("auth:client,drive-realtime,drive-share", function() {
            t.authorize(e)
        })
    }
    ,
    A.Authorizer.prototype.authorize = function(e) {
        function t() {
            gapi.auth.authorize({
                client_id: o,
                scope: [A.INSTALL_SCOPE, A.FILE_SCOPE, A.OPENID_SCOPE, A.APPDATA_SCOPE],
                user_id: r,
                immediate: !1
            }, n)
        }
        function n(n) {
            n && !n.error ? (i.authButton.disabled = !0,
            i.fetchUserId(e),
            i.authDiv.style.display = "none") : (i.authButton.disabled = !1,
            i.authButton.onclick = t,
            i.authDiv.style.display = "block")
        }
        var o = this.clientId
          , r = this.userId
          , i = this;
        gapi.auth.authorize({
            client_id: o,
            scope: [A.INSTALL_SCOPE, A.FILE_SCOPE, A.OPENID_SCOPE, A.APPDATA_SCOPE],
            user_id: r,
            immediate: !0
        }, n)
    }
    ,
    A.Authorizer.prototype.fetchUserId = function(e) {
        var t = this;
        gapi.client.load("oauth2", "v2", function() {
            gapi.client.oauth2.userinfo.get().execute(function(n) {
                n.id && (t.userId = n.id),
                e && e()
            })
        })
    }
    ,
    A.createRealtimeFile = function(e, t, n, o) {
        function r(n) {
            gapi.client.drive.files.insert({
                resource: {
                    mimeType: t,
                    title: e,
                    parents: [{
                        id: n
                    }]
                }
            }).execute(o)
        }
        gapi.client.load("drive", "v2", function() {
            !function() {
                function e(e) {
                    gapi.client.drive.properties.insert({
                        fileId: "appdata",
                        resource: {
                            key: A.FOLDER_KEY,
                            value: e
                        }
                    }).execute(function() {
                        r(e)
                    })
                }
                function t() {
                    gapi.client.drive.files.insert({
                        resource: {
                            mimeType: "application/vnd.google-apps.folder",
                            title: n
                        }
                    }).execute(function(t) {
                        e(t.id)
                    })
                }
                gapi.client.drive.properties.get({
                    fileId: "appdata",
                    propertyKey: A.FOLDER_KEY
                }).execute(function(o) {
                    if (o.error)
                        n ? t() : e("root");
                    else {
                        var i = o.result.value;
                        gapi.client.drive.files.get({
                            fileId: i
                        }).execute(function(e) {
                            e.error || e.labels.trashed ? t() : r(i)
                        })
                    }
                })
            }()
        })
    }
    ,
    A.getFileMetadata = function(e, t) {
        gapi.client.load("drive", "v2", function() {
            gapi.client.drive.files.get({
                fileId: e
            }).execute(t)
        })
    }
    ,
    A.parseState = function(e) {
        try {
            return JSON.parse(e)
        } catch (e) {
            return null
        }
    }
    ,
    A.RealtimeLoader = function(e) {
        this.onFileLoaded = A.getOption(e, "onFileLoaded"),
        this.newFileMimeType = A.getOption(e, "newFileMimeType", A.REALTIME_MIMETYPE),
        this.initializeModel = A.getOption(e, "initializeModel"),
        this.registerTypes = A.getOption(e, "registerTypes", function() {}),
        this.afterAuth = A.getOption(e, "afterAuth", function() {}),
        this.autoCreate = A.getOption(e, "autoCreate", !1),
        this.defaultTitle = A.getOption(e, "defaultTitle", "New Realtime File"),
        this.defaultFolderTitle = A.getOption(e, "defaultFolderTitle", ""),
        this.afterCreate = A.getOption(e, "afterCreate", function() {}),
        this.authorizer = new A.Authorizer(e)
    }
    ,
    A.RealtimeLoader.prototype.redirectTo = function(e, t) {
        var n = [];
        for (var o in e && n.push("fileIds=" + e.join(",")),
        t && n.push("userId=" + t),
        t = 0 == n.length ? window.location.pathname : window.location.pathname + "#" + n.join("&"),
        window.history && window.history.replaceState ? window.history.replaceState("Google Drive Realtime API Playground", "Google Drive Realtime API Playground", t) : window.location.href = t,
        A.params = A.getParams(),
        e)
            gapi.drive.realtime.load(e[o], this.onFileLoaded, this.initializeModel, this.handleErrors)
    }
    ,
    A.RealtimeLoader.prototype.start = function() {
        var e = this;
        this.authorizer.start(function() {
            e.registerTypes && e.registerTypes(),
            e.afterAuth && e.afterAuth(),
            e.load()
        })
    }
    ,
    A.RealtimeLoader.prototype.handleErrors = function(e) {
        e.type == gapi.drive.realtime.ErrorType.TOKEN_REFRESH_REQUIRED ? this.authorizer.authorize() : e.type == gapi.drive.realtime.ErrorType.CLIENT_ERROR ? (alert("An Error happened: " + e.message),
        window.location.href = "/") : e.type == gapi.drive.realtime.ErrorType.NOT_FOUND && (alert("The file was not found. It does not exist or you do not have read access to the file."),
        window.location.href = "/")
    }
    ,
    A.RealtimeLoader.prototype.load = function() {
        var e = A.params.fileIds;
        e && (e = e.split(","));
        var t = A.params.state;
        if (e)
            for (var n in e)
                gapi.drive.realtime.load(e[n], this.onFileLoaded, this.initializeModel, this.handleErrors);
        else {
            if (t && "open" == (t = A.parseState(t)).action)
                return e = t.ids,
                t = t.userId,
                void this.redirectTo(e, t);
            this.autoCreate && this.createNewFileAndRedirect()
        }
    }
    ,
    A.RealtimeLoader.prototype.createNewFileAndRedirect = function() {
        var e = this;
        A.createRealtimeFile(this.defaultTitle, this.newFileMimeType, this.defaultFolderTitle, function(t) {
            t.id ? (e.afterCreate && e.afterCreate(t.id),
            e.redirectTo([t.id], e.authorizer.userId)) : (console.error("Error creating file."),
            console.error(t))
        })
    }
    ,
    z.Realtime = {},
    z.Realtime.PROGRESS_URL_ = "media/progress.gif",
    z.Realtime.enabled_ = !1,
    z.Realtime.document_ = null,
    z.Realtime.model_ = null,
    z.Realtime.sessionId_ = null,
    z.Realtime.initUi_ = null,
    z.Realtime.blocksMap_ = null,
    z.Realtime.withinSync = !1,
    z.Realtime.realtimeLoader_ = null,
    z.Realtime.chatBoxElementId_ = null,
    z.Realtime.chatBoxInitialText_ = null,
    z.Realtime.withinUndo_ = !1,
    z.Realtime.isEnabled = function() {
        return z.Realtime.enabled_
    }
    ,
    z.Realtime.undoElementId_ = null,
    z.Realtime.redoElementId_ = null,
    z.Realtime.PROGRESS_URL_ = "media/progress.gif",
    z.Realtime.ANONYMOUS_URL_ = "media/anon.jpeg",
    z.Realtime.initializeModel_ = function(e) {
        z.Realtime.model_ = e;
        var t = e.createMap();
        e.getRoot().set("blocks", t),
        t = e.createList(),
        e.getRoot().set("topBlocks", t),
        z.Realtime.chatBoxElementId_ && e.getRoot().set(z.Realtime.chatBoxElementId_, e.createString(z.Realtime.chatBoxInitialText_))
    }
    ,
    z.Realtime.removeBlock = function(e) {
        z.Realtime.blocksMap_.delete(e.id.toString())
    }
    ,
    z.Realtime.addTopBlock = function(e) {
        -1 == z.Realtime.topBlocks_.indexOf(e) && z.Realtime.topBlocks_.push(e)
    }
    ,
    z.Realtime.removeTopBlock = function(e) {
        z.Realtime.topBlocks_.removeValue(e)
    }
    ,
    z.Realtime.obtainBlock = function(e, t) {
        return z.Realtime.model_.create(z.Block, e, t)
    }
    ,
    z.Realtime.getBlockById = function(e) {
        return z.Realtime.blocksMap_.get(e)
    }
    ,
    z.Realtime.logEvent_ = function(e) {
        if (console.log("Object event:"),
        console.log("  id: " + e.target.id),
        console.log("  type: " + e.type),
        e = e.events)
            for (var t = e.length, n = 0; n < t; n++) {
                var o = e[n];
                console.log("  child event:"),
                console.log("    id: " + o.target.id),
                console.log("    type: " + o.type)
            }
    }
    ,
    z.Realtime.onObjectChange_ = function(e) {
        var t = e.events;
        e = e.events.length;
        for (var n = 0; n < e; n++) {
            var o = t[n];
            if (!o.isLocal || z.Realtime.withinUndo_) {
                var r = o.target;
                "value_changed" == o.type && ("xmlDom" == o.property ? z.Realtime.doWithinSync_(function() {
                    z.Realtime.placeBlockOnWorkspace_(r, !1),
                    z.Realtime.moveBlock_(r)
                }) : ("relativeX" == o.property || "relativeY" == o.property) && z.Realtime.doWithinSync_(function() {
                    r.svg_ || z.Realtime.placeBlockOnWorkspace_(r, !1),
                    z.Realtime.moveBlock_(r)
                }))
            }
        }
    }
    ,
    z.Realtime.onBlocksMapChange_ = function(e) {
        if (!e.isLocal || z.Realtime.withinUndo_) {
            var t = e.newValue;
            t ? z.Realtime.placeBlockOnWorkspace_(t, !e.oldValue) : (t = e.oldValue,
            z.Realtime.deleteBlock(t))
        }
    }
    ,
    z.Realtime.doWithinSync_ = function(e) {
        if (z.Realtime.withinSync)
            e();
        else
            try {
                z.Realtime.withinSync = !0,
                e()
            } finally {
                z.Realtime.withinSync = !1
            }
    }
    ,
    z.Realtime.placeBlockOnWorkspace_ = function(t, n) {
        z.Realtime.doWithinSync_(function() {
            var o = z.Xml.textToDom(t.xmlDom).firstChild;
            (o = z.Xml.domToBlock(z.mainWorkspace, o, !0)) && (n && o.workspace.addTopBlock(o),
            (n || e.array.contains(z.Realtime.topBlocks_, o)) && z.Realtime.moveBlock_(o))
        })
    }
    ,
    z.Realtime.moveBlock_ = function(e) {
        if (!isNaN(e.relativeX) && !isNaN(e.relativeY)) {
            var t = z.svgSize().width
              , n = e.getRelativeToSurfaceXY()
              , o = e.relativeX - n.x;
            e.moveBy(z.RTL ? t - o : o, e.relativeY - n.y)
        }
    }
    ,
    z.Realtime.deleteBlock = function(e) {
        z.Realtime.doWithinSync_(function() {
            e.dispose(!0, !0, !0)
        })
    }
    ,
    z.Realtime.loadBlocks_ = function() {
        for (var e = z.Realtime.topBlocks_, t = 0; t < e.length; t++) {
            var n = e.get(t);
            z.Realtime.placeBlockOnWorkspace_(n, !0)
        }
    }
    ,
    z.Realtime.blockChanged = function(t) {
        if (t.workspace == z.mainWorkspace && z.Realtime.isEnabled() && !z.Realtime.withinSync) {
            var n = (t = t.getRootBlock()).getRelativeToSurfaceXY()
              , o = !1
              , r = z.Xml.blockToDom_(t);
            r.setAttribute("id", t.id);
            var i = e.dom.createDom("xml");
            i.appendChild(r),
            (r = z.Xml.domToText(i)) != t.xmlDom && (o = !0,
            t.xmlDom = r),
            t.relativeX == n.x && t.relativeY == n.y || (t.relativeX = n.x,
            t.relativeY = n.y,
            o = !0),
            o && z.Realtime.blocksMap_.set(t.id.toString(), t)
        }
    }
    ,
    z.Realtime.onFileLoaded_ = function(e) {
        z.Realtime.document_ = e,
        z.Realtime.sessionId_ = z.Realtime.getSessionId_(e),
        z.Realtime.model_ = e.getModel(),
        z.Realtime.blocksMap_ = z.Realtime.model_.getRoot().get("blocks"),
        z.Realtime.topBlocks_ = z.Realtime.model_.getRoot().get("topBlocks"),
        z.Realtime.model_.getRoot().addEventListener(gapi.drive.realtime.EventType.OBJECT_CHANGED, z.Realtime.onObjectChange_),
        z.Realtime.blocksMap_.addEventListener(gapi.drive.realtime.EventType.VALUE_CHANGED, z.Realtime.onBlocksMapChange_),
        z.Realtime.initUi_(),
        e.addEventListener(gapi.drive.realtime.EventType.COLLABORATOR_JOINED, z.Realtime.onCollaboratorJoined_),
        e.addEventListener(gapi.drive.realtime.EventType.COLLABORATOR_LEFT, z.Realtime.onCollaboratorLeft_),
        z.Realtime.updateCollabUi_(),
        z.Realtime.loadBlocks_()
    }
    ,
    z.Realtime.getSessionId_ = function(e) {
        e = e.getCollaborators();
        for (var t = 0; t < e.length; t++) {
            var n = e[t];
            if (n.isMe)
                return n.sessionId
        }
    }
    ,
    z.Realtime.registerTypes_ = function() {
        var e = gapi.drive.realtime.custom;
        e.registerType(z.Block, "Block"),
        z.Block.prototype.id = e.collaborativeField("id"),
        z.Block.prototype.xmlDom = e.collaborativeField("xmlDom"),
        z.Block.prototype.relativeX = e.collaborativeField("relativeX"),
        z.Block.prototype.relativeY = e.collaborativeField("relativeY"),
        e.setInitializer(z.Block, z.Block.prototype.initialize)
    }
    ,
    z.Realtime.REAUTH_INTERVAL_IN_MILLISECONDS_ = 18e5,
    z.Realtime.afterAuth_ = function() {
        window.setTimeout(function() {
            z.Realtime.realtimeLoader_.authorizer.authorize(z.Realtime.afterAuth_)
        }, z.Realtime.REAUTH_INTERVAL_IN_MILLISECONDS_)
    }
    ,
    z.Realtime.afterCreate_ = function(e) {
        var t = gapi.client.drive.permissions.insert({
            fileId: e,
            resource: {
                type: "anyone",
                role: "writer",
                value: "default",
                withLink: !0
            }
        });
        t.execute(function(n) {
            n.error && z.Realtime.getUserDomain(e, function(n) {
                (t = gapi.client.drive.permissions.insert({
                    fileId: e,
                    resource: {
                        type: "domain",
                        role: "writer",
                        value: n,
                        withLink: !0
                    }
                })).execute(function() {})
            })
        })
    }
    ,
    z.Realtime.getUserDomain = function(e, t) {
        gapi.client.drive.permissions.list({
            fileId: e
        }).execute(function(e) {
            for (var n = 0; n < e.items.length; n++) {
                var o = e.items[n];
                if ("owner" == o.role) {
                    t(o.domain);
                    break
                }
            }
        })
    }
    ,
    z.Realtime.rtclientOptions_ = {
        clientId: null,
        authButtonElementId: "authorizeButton",
        authDivElementId: "authButtonDiv",
        initializeModel: z.Realtime.initializeModel_,
        autoCreate: !0,
        defaultTitle: "Realtime Blockly File",
        defaultFolderTitle: "Realtime Blockly Folder",
        newFileMimeType: null,
        onFileLoaded: z.Realtime.onFileLoaded_,
        registerTypes: z.Realtime.registerTypes_,
        afterAuth: z.Realtime.afterAuth_,
        afterCreate: z.Realtime.afterCreate_
    },
    z.Realtime.parseOptions_ = function(e) {
        var t = A.getOption(e, "chatbox");
        t && (z.Realtime.chatBoxElementId_ = A.getOption(t, "elementId"),
        z.Realtime.chatBoxInitialText_ = A.getOption(t, "initText", z.Msg.CHAT)),
        z.Realtime.rtclientOptions_.clientId = A.getOption(e, "clientId"),
        z.Realtime.collabElementId = A.getOption(e, "collabElementId")
    }
    ,
    z.Realtime.startRealtime = function(e, t, n) {
        z.Realtime.parseOptions_(n),
        z.Realtime.enabled_ = !0,
        z.Realtime.addAuthUi_(t),
        z.Realtime.initUi_ = function() {
            if (e(),
            z.Realtime.chatBoxElementId_) {
                var t = z.Realtime.model_.getRoot().get(z.Realtime.chatBoxElementId_)
                  , n = document.getElementById(z.Realtime.chatBoxElementId_);
                gapi.drive.realtime.databinding.bindString(t, n),
                n.disabled = !1
            }
        }
        ,
        z.Realtime.realtimeLoader_ = new A.RealtimeLoader(z.Realtime.rtclientOptions_),
        z.Realtime.realtimeLoader_.start()
    }
    ,
    z.Realtime.addAuthUi_ = function(t) {
        t.style.background = "url(" + z.pathToBlockly + z.Realtime.PROGRESS_URL_ + ") no-repeat center center";
        var n = e.style.getBounds(t)
          , o = e.dom.createDom("div");
        o.id = z.Realtime.rtclientOptions_.authDivElementId;
        var r = e.dom.createDom("p", null, z.Msg.AUTH);
        return o.appendChild(r),
        (r = e.dom.createDom("button", null, "Authorize")).id = z.Realtime.rtclientOptions_.authButtonElementId,
        o.appendChild(r),
        t.appendChild(o),
        o.style.display = "none",
        o.style.position = "relative",
        o.style.textAlign = "center",
        o.style.border = "1px solid",
        o.style.backgroundColor = "#f6f9ff",
        o.style.borderRadius = "15px",
        o.style.boxShadow = "10px 10px 5px #888",
        o.style.width = n.width / 3 + "px",
        t = e.style.getBounds(o),
        o.style.left = (n.width - t.width) / 3 + "px",
        o.style.top = (n.height - t.height) / 4 + "px",
        o
    }
    ,
    z.Realtime.updateCollabUi_ = function() {
        if (z.Realtime.collabElementId) {
            var t = e.dom.getElement(z.Realtime.collabElementId);
            e.dom.removeChildren(t);
            for (var n = z.Realtime.document_.getCollaborators(), o = 0; o < n.length; o++) {
                var r = n[o]
                  , i = e.dom.createDom("img", {
                    src: r.photoUrl || z.pathToBlockly + z.Realtime.ANONYMOUS_URL_,
                    alt: r.displayName,
                    title: r.displayName + (r.isMe ? " (" + z.Msg.ME + ")" : "")
                });
                i.style.backgroundColor = r.color,
                e.dom.appendChild(t, i)
            }
        }
    }
    ,
    z.Realtime.onCollaboratorJoined_ = function() {
        z.Realtime.updateCollabUi_()
    }
    ,
    z.Realtime.onCollaboratorLeft_ = function() {
        z.Realtime.updateCollabUi_()
    }
    ,
    z.Realtime.doCommand = function(e) {
        e()
    }
    ,
    z.Realtime.genUid = function(e) {
        var t = z.Realtime.sessionId_ + "-" + e;
        return z.Realtime.blocksMap_.has(t) ? z.Realtime.genUid("-" + e) : t
    }
    ,
    e.cssom = {},
    e.cssom.CssRuleType = {
        STYLE: 1,
        IMPORT: 3,
        MEDIA: 4,
        FONT_FACE: 5,
        PAGE: 6,
        NAMESPACE: 7
    },
    e.cssom.getAllCssText = function(t) {
        return e.cssom.getAllCss_(t || document.styleSheets, !0)
    }
    ,
    e.cssom.getAllCssStyleRules = function(t) {
        return e.cssom.getAllCss_(t || document.styleSheets, !1)
    }
    ,
    e.cssom.getCssRulesFromStyleSheet = function(e) {
        var t = null;
        try {
            t = e.cssRules || e.rules
        } catch (t) {
            if (15 == t.code)
                throw t.styleSheet = e,
                t
        }
        return t
    }
    ,
    e.cssom.getAllCssStyleSheets = function(t, n) {
        var o = [];
        if (t = t || document.styleSheets,
        n = !!e.isDef(n) && n,
        t.imports && t.imports.length)
            for (var r = 0, i = t.imports.length; r < i; r++)
                e.array.extend(o, e.cssom.getAllCssStyleSheets(t.imports[r]));
        else if (t.length)
            for (r = 0,
            i = t.length; r < i; r++)
                e.array.extend(o, e.cssom.getAllCssStyleSheets(t[r]));
        else {
            var s = e.cssom.getCssRulesFromStyleSheet(t);
            if (s && s.length) {
                r = 0,
                i = s.length;
                for (var a; r < i; r++)
                    (a = s[r]).styleSheet && e.array.extend(o, e.cssom.getAllCssStyleSheets(a.styleSheet))
            }
        }
        return !(t.type || t.rules || t.cssRules) || t.disabled && !n || o.push(t),
        o
    }
    ,
    e.cssom.getCssTextFromCssRule = function(e) {
        var t = "";
        try {
            t = e.cssText
        } catch (e) {
            return ""
        }
        return !t && e.style && e.style.cssText && e.selectorText && (t = e.style.cssText.replace(/\s*-closure-parent-stylesheet:\s*\[object\];?\s*/gi, "").replace(/\s*-closure-rule-index:\s*[\d]+;?\s*/gi, ""),
        t = e.selectorText + " { " + t + " }"),
        t
    }
    ,
    e.cssom.getCssRuleIndexInParentStyleSheet = function(t, n) {
        if (t.style && t.style["-closure-rule-index"])
            return t.style["-closure-rule-index"];
        if (!(n = n || e.cssom.getParentStyleSheet(t)))
            throw Error("Cannot find a parentStyleSheet.");
        if ((n = e.cssom.getCssRulesFromStyleSheet(n)) && n.length)
            for (var o = 0, r = n.length; o < r; o++)
                if (n[o] == t)
                    return o;
        return -1
    }
    ,
    e.cssom.getParentStyleSheet = function(e) {
        return e.parentStyleSheet || e.style && e.style["-closure-parent-stylesheet"]
    }
    ,
    e.cssom.replaceCssRule = function(t, n, o, r) {
        if (!(o = o || e.cssom.getParentStyleSheet(t)))
            throw Error("Cannot proceed without the parentStyleSheet.");
        if (!(0 <= (t = 0 <= Number(r) ? Number(r) : e.cssom.getCssRuleIndexInParentStyleSheet(t, o))))
            throw Error("Cannot proceed without the index of the cssRule.");
        e.cssom.removeCssRule(o, t),
        e.cssom.addCssRule(o, n, t)
    }
    ,
    e.cssom.addCssRule = function(t, n, o) {
        if ((null == o || 0 > o) && (o = e.cssom.getCssRulesFromStyleSheet(t).length),
        t.insertRule)
            t.insertRule(n, o);
        else {
            if (3 != (n = /^([^\{]+)\{([^\{]+)\}/.exec(n)).length)
                throw Error("Your CSSRule appears to be ill-formatted.");
            t.addRule(n[1], n[2], o)
        }
    }
    ,
    e.cssom.removeCssRule = function(e, t) {
        e.deleteRule ? e.deleteRule(t) : e.removeRule(t)
    }
    ,
    e.cssom.addCssText = function(t, n) {
        var o = n || e.dom.getDomHelper()
          , r = o.getDocument();
        return (n = o.createElement("STYLE")).type = "text/css",
        o.getElementsByTagName("HEAD")[0].appendChild(n),
        n.styleSheet ? n.styleSheet.cssText = t : (t = r.createTextNode(t),
        n.appendChild(t)),
        n
    }
    ,
    e.cssom.getFileNameFromStyleSheet = function(e) {
        return (e = e.href) ? /([^\/\?]+)[^\/]*$/.exec(e)[1] : null
    }
    ,
    e.cssom.getAllCss_ = function(t, n) {
        for (var o = [], r = e.cssom.getAllCssStyleSheets(t), i = 0; t = r[i]; i++) {
            var s = e.cssom.getCssRulesFromStyleSheet(t);
            if (s && s.length)
                for (var a, l = 0, u = 0, c = s.length; u < c; u++)
                    a = s[u],
                    n && !a.href ? (a = e.cssom.getCssTextFromCssRule(a),
                    o.push(a)) : a.href || (a.style && (a.parentStyleSheet || (a.style["-closure-parent-stylesheet"] = t),
                    a.style["-closure-rule-index"] = n ? void 0 : l),
                    o.push(a)),
                    n || l++
        }
        return n ? o.join(" ") : o
    }
    ,
    z.Css = {},
    z.Css.inject = function() {
        var t = z.Css.CONTENT.join("\n")
          , n = z.pathToBlockly.replace(/[\\\/]$/, "");
        t = t.replace(/<<<PATH>>>/g, n),
        e.cssom.addCssText(t)
    }
    ,
    z.Css.CONTENT = [".blocklySvg {", "  background-color: #fff;", "  border: 1px solid #ddd;", "  overflow: hidden;", "}", ".blocklyWidgetDiv {", "  position: absolute;", "  display: none;", "  z-index: 999;", "}", ".blocklyDraggable {", "  cursor: url(<<<PATH>>>/media/handopen.cur) 8 5, auto;", "}", ".blocklyResizeSE {", "  fill: #aaa;", "  cursor: se-resize;", "}", ".blocklyResizeSW {", "  fill: #aaa;", "  cursor: sw-resize;", "}", ".blocklyResizeLine {", "  stroke-width: 1;", "  stroke: #888;", "}", ".blocklyHighlightedConnectionPath {", "  stroke-width: 4px;", "  stroke: #fc3;", "  fill: none;", "}", ".blocklyPathLight {", "  fill: none;", "  stroke-width: 2;", "  stroke-linecap: round;", "}", ".blocklySelected>.blocklyPath {", "  stroke-width: 3px;", "  stroke: #fc3;", "}", ".blocklySelected>.blocklyPathLight {", "  display: none;", "}", ".blocklyDragging>.blocklyPath,", ".blocklyDragging>.blocklyPathLight {", "  fill-opacity: .8;", "  stroke-opacity: .8;", "}", ".blocklyDragging>.blocklyPathDark {", "  display: none;", "}", ".blocklyDisabled>.blocklyPath {", "  fill-opacity: .5;", "  stroke-opacity: .5;", "}", ".blocklyDisabled>.blocklyPathLight,", ".blocklyDisabled>.blocklyPathDark {", "  display: none;", "}", ".blocklyText {", "  cursor: default;", "  font-family: sans-serif;", "  font-size: 11pt;", "  fill: #fff;", "}", ".blocklyNonEditableText>text {", "  pointer-events: none;", "}", ".blocklyNonEditableText>rect,", ".blocklyEditableText>rect {", "  fill: #fff;", "  fill-opacity: .6;", "}", ".blocklyNonEditableText>text,", ".blocklyEditableText>text {", "  fill: #000;", "}", ".blocklyEditableText:hover>rect {", "  stroke-width: 2;", "  stroke: #fff;", "}", ".blocklyBubbleText {", "  fill: #000;", "}", ".blocklySvg text {", "  -moz-user-select: none;", "  -webkit-user-select: none;", "  user-select: none;", "  cursor: inherit;", "}", ".blocklyHidden {", "  display: none;", "}", ".blocklyFieldDropdown:not(.blocklyHidden) {", "  display: block;", "}", ".blocklyTooltipBackground {", "  fill: #ffffc7;", "  stroke-width: 1px;", "  stroke: #d8d8d8;", "}", ".blocklyTooltipShadow,", ".blocklyDropdownMenuShadow {", "  fill: #bbb;", "  filter: url(#blocklyShadowFilter);", "}", ".blocklyTooltipText {", "  font-family: sans-serif;", "  font-size: 9pt;", "  fill: #000;", "}", ".blocklyIconShield {", "  cursor: default;", "  fill: #00c;", "  stroke-width: 1px;", "  stroke: #ccc;", "}", ".blocklyIconGroup:hover>.blocklyIconShield {", "  fill: #00f;", "  stroke: #fff;", "}", ".blocklyIconGroup:hover>.blocklyIconMark {", "  fill: #fff;", "}", ".blocklyIconMark {", "  cursor: default !important;", "  font-family: sans-serif;", "  font-size: 9pt;", "  font-weight: bold;", "  fill: #ccc;", "  text-anchor: middle;", "}", ".blocklyWarningBody {", "}", ".blocklyMinimalBody {", "  margin: 0;", "  padding: 0;", "}", ".blocklyCommentTextarea {", "  margin: 0;", "  padding: 2px;", "  border: 0;", "  resize: none;", "  background-color: #ffc;", "}", ".blocklyHtmlInput {", "  font-family: sans-serif;", "  font-size: 11pt;", "  border: none;", "  outline: none;", "  width: 100%", "}", ".blocklyMutatorBackground {", "  fill: #fff;", "  stroke-width: 1;", "  stroke: #ddd;", "}", ".blocklyFlyoutBackground {", "  fill: #ddd;", "  fill-opacity: .8;", "}", ".blocklyColourBackground {", "  fill: #666;", "}", ".blocklyScrollbarBackground {", "  fill: #fff;", "  stroke-width: 1;", "  stroke: #e4e4e4;", "}", ".blocklyScrollbarKnob {", "  fill: #ccc;", "}", ".blocklyScrollbarBackground:hover+.blocklyScrollbarKnob,", ".blocklyScrollbarKnob:hover {", "  fill: #bbb;", "}", ".blocklyInvalidInput {", "  background: #faa;", "}", ".blocklyAngleCircle {", "  stroke: #444;", "  stroke-width: 1;", "  fill: #ddd;", "  fill-opacity: .8;", "}", ".blocklyAngleMarks {", "  stroke: #444;", "  stroke-width: 1;", "}", ".blocklyAngleGauge {", "  fill: #f88;", "  fill-opacity: .8;  ", "}", ".blocklyAngleLine {", "  stroke: #f00;", "  stroke-width: 2;", "  stroke-linecap: round;", "}", ".blocklyContextMenu {", "  border-radius: 4px;", "}", ".blocklyDropdownMenu {", "  padding: 0 !important;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {", "  background: url(<<<PATH>>>/media/sprites.png) no-repeat -48px -16px !important;", "}", ".blocklyToolboxDiv {", "  background-color: #ddd;", "  display: none;", "  overflow-x: visible;", "  overflow-y: auto;", "  position: absolute;", "}", ".blocklyTreeRoot {", "  padding: 4px 0;", "}", ".blocklyTreeRoot:focus {", "  outline: none;", "}", ".blocklyTreeRow {", "  line-height: 22px;", "  height: 22px;", "  padding-right: 1em;", "  white-space: nowrap;", "}", '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {', "  padding-right: 0;", "  padding-left: 1em !important;", "}", ".blocklyTreeRow:hover {", "  background-color: #e4e4e4;", "}", ".blocklyTreeIcon {", "  height: 16px;", "  width: 16px;", "  vertical-align: middle;", "  background-image: url(<<<PATH>>>/media/sprites.png);", "}", ".blocklyTreeIconClosedLtr {", "  background-position: -32px -1px;", "}", ".blocklyTreeIconClosedRtl {", "  background-position: 0px -1px;", "}", ".blocklyTreeIconOpen {", "  background-position: -16px -1px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedLtr {", "  background-position: -32px -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedRtl {", "  background-position: 0px -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconOpen {", "  background-position: -16px -17px;", "}", ".blocklyTreeIconNone,", ".blocklyTreeSelected>.blocklyTreeIconNone {", "  background-position: -48px -1px;", "}", ".blocklyTreeLabel {", "  cursor: default;", "  font-family: sans-serif;", "  font-size: 16px;", "  padding: 0 3px;", "  vertical-align: middle;", "}", ".blocklyTreeSelected  {", "  background-color: #57e !important;", "}", ".blocklyTreeSelected .blocklyTreeLabel {", "  color: #fff;", "}", ".blocklyWidgetDiv .goog-palette {", "  outline: none;", "  cursor: default;", "}", ".blocklyWidgetDiv .goog-palette-table {", "  border: 1px solid #666;", "  border-collapse: collapse;", "}", ".blocklyWidgetDiv .goog-palette-cell {", "  height: 13px;", "  width: 15px;", "  margin: 0;", "  border: 0;", "  text-align: center;", "  vertical-align: middle;", "  border-right: 1px solid #666;", "  font-size: 1px;", "}", ".blocklyWidgetDiv .goog-palette-colorswatch {", "  position: relative;", "  height: 13px;", "  width: 15px;", "  border: 1px solid #666;", "}", ".blocklyWidgetDiv .goog-palette-cell-hover .goog-palette-colorswatch {", "  border: 1px solid #FFF;", "}", ".blocklyWidgetDiv .goog-palette-cell-selected .goog-palette-colorswatch {", "  border: 1px solid #000;", "  color: #fff;", "}", ".blocklyWidgetDiv .goog-menu {", "  background: #fff;", "  border-color: #ccc #666 #666 #ccc;", "  border-style: solid;", "  border-width: 1px;", "  cursor: default;", "  font: normal 13px Arial, sans-serif;", "  margin: 0;", "  outline: none;", "  padding: 4px 0;", "  position: absolute;", "  z-index: 20000;", "}", ".blocklyWidgetDiv .goog-menuitem {", "  color: #000;", "  font: normal 13px Arial, sans-serif;", "  list-style: none;", "  margin: 0;", "  padding: 4px 7em 4px 28px;", "  white-space: nowrap;", "}", ".blocklyWidgetDiv .goog-menuitem.goog-menuitem-rtl {", "  padding-left: 7em;", "  padding-right: 28px;", "}", ".blocklyWidgetDiv .goog-menu-nocheckbox .goog-menuitem,", ".blocklyWidgetDiv .goog-menu-noicon .goog-menuitem {", "  padding-left: 12px;", "}", ".blocklyWidgetDiv .goog-menu-noaccel .goog-menuitem {", "  padding-right: 20px;", "}", ".blocklyWidgetDiv .goog-menuitem-content {", "  color: #000;", "  font: normal 13px Arial, sans-serif;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-accel,", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {", "  color: #ccc !important;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-icon {", "  opacity: 0.3;", "  -moz-opacity: 0.3;", "  filter: alpha(opacity=30);", "}", ".blocklyWidgetDiv .goog-menuitem-highlight,", ".blocklyWidgetDiv .goog-menuitem-hover {", "  background-color: #d6e9f8;", "  border-color: #d6e9f8;", "  border-style: dotted;", "  border-width: 1px 0;", "  padding-bottom: 3px;", "  padding-top: 3px;", "}", ".blocklyWidgetDiv .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-icon {", "  background-repeat: no-repeat;", "  height: 16px;", "  left: 6px;", "  position: absolute;", "  right: auto;", "  vertical-align: middle;", "  width: 16px;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon {", "  left: auto;", "  right: 6px;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {", "  background: url(//ssl.gstatic.com/editor/editortoolbar.png) no-repeat -512px 0;", "}", ".blocklyWidgetDiv .goog-menuitem-accel {", "  color: #999;", "  direction: ltr;", "  left: auto;", "  padding: 0 6px;", "  position: absolute;", "  right: 0;", "  text-align: right;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-accel {", "  left: 0;", "  right: auto;", "  text-align: left;", "}", ".blocklyWidgetDiv .goog-menuitem-mnemonic-hint {", "  text-decoration: underline;", "}", ".blocklyWidgetDiv .goog-menuitem-mnemonic-separator {", "  color: #999;", "  font-size: 12px;", "  padding-left: 4px;", "}", ".blocklyWidgetDiv .goog-menuseparator {", "  border-top: 1px solid #ccc;", "  margin: 4px 0;", "  padding: 0;", "}", ""],
    z.WidgetDiv = {},
    z.WidgetDiv.DIV = null,
    z.WidgetDiv.owner_ = null,
    z.WidgetDiv.dispose_ = null,
    z.WidgetDiv.show = function(e, t) {
        z.WidgetDiv.hide(),
        z.WidgetDiv.owner_ = e,
        z.WidgetDiv.dispose_ = t,
        z.WidgetDiv.DIV.style.display = "block"
    }
    ,
    z.WidgetDiv.hide = function() {
        z.WidgetDiv.owner_ && (z.WidgetDiv.DIV.style.display = "none",
        z.WidgetDiv.dispose_ && z.WidgetDiv.dispose_(),
        z.WidgetDiv.owner_ = null,
        z.WidgetDiv.dispose_ = null,
        e.dom.removeChildren(z.WidgetDiv.DIV))
    }
    ,
    z.WidgetDiv.isVisible = function() {
        return !!z.WidgetDiv.owner_
    }
    ,
    z.WidgetDiv.hideIfOwner = function(e) {
        z.WidgetDiv.owner_ == e && z.WidgetDiv.hide()
    }
    ,
    z.WidgetDiv.position = function(e, t, n, o) {
        t < o.y && (t = o.y),
        z.RTL ? e > n.width + o.x && (e = n.width + o.x) : e < o.x && (e = o.x),
        z.WidgetDiv.DIV.style.left = e + "px",
        z.WidgetDiv.DIV.style.top = t + "px"
    }
    ,
    z.inject = function(t, n) {
        function o() {
            z.createDom_(t),
            z.init_()
        }
        if (!e.dom.contains(document, t))
            throw "Error: container is not in current document.";
        n && z.parseOptions_(n),
        z.enableRealtime ? ((n = document.getElementById("realtime")) && (n.style.display = "block"),
        z.Realtime.startRealtime(o, t, z.realtimeOptions)) : o()
    }
    ,
    z.parseToolboxTree_ = function(e) {
        return e ? ("string" != typeof e && "undefined" == typeof XSLTProcessor && (e = e.outerHTML),
        "string" == typeof e && (e = z.Xml.textToDom(e))) : e = null,
        e
    }
    ,
    z.parseOptions_ = function(t) {
        var n = !!t.readOnly;
        if (n)
            var o = !1
              , r = !1
              , i = !1
              , s = !1
              , a = !1
              , l = null;
        else
            o = !(!(l = z.parseToolboxTree_(t.toolbox)) || !l.getElementsByTagName("category").length),
            void 0 === (r = t.trashcan) && (r = o),
            void 0 === (i = t.collapse) && (i = o),
            void 0 === (s = t.comments) && (s = o),
            void 0 === (a = t.disable) && (a = o);
        if (l && !o)
            var u = !1;
        else
            void 0 === (u = t.scrollbars) && (u = !0);
        var c = t.sounds;
        void 0 === c && (c = !0);
        var h = !!t.realtime
          , d = h ? t.realtimeOptions : void 0
          , p = t.touch;
        void 0 === p && (p = e.events.BrowserFeature.TOUCH_ENABLED);
        var g = t.toolboxLayout || null;
        z.RTL = !!t.rtl,
        z.touch = p,
        z.collapse = i,
        z.comments = s,
        z.disable = a,
        z.readOnly = n,
        z.maxBlocks = t.maxBlocks || 1 / 0,
        z.pathToBlockly = t.path || "./",
        z.hasCategories = o,
        z.hasScrollbars = u,
        z.hasTrashcan = r,
        z.hasSounds = c,
        z.languageTree = l,
        z.enableRealtime = h,
        z.realtimeOptions = d,
        z.toolboxLayout = g
    }
    ,
    z.createDom_ = function(t) {
        t.setAttribute("dir", "LTR"),
        e.ui.Component.setDefaultRightToLeft(z.RTL),
        z.Css.inject();
        var n = z.createSvgElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:html": "http://www.w3.org/1999/xhtml",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            version: "1.1",
            class: "blocklySvg"
        }, null)
          , o = z.createSvgElement("defs", {
            id: "blocklySvgDefs"
        }, n)
          , r = z.createSvgElement("filter", {
            id: "blocklyEmboss"
        }, o);
        z.createSvgElement("feGaussianBlur", {
            in: "SourceAlpha",
            stdDeviation: 1,
            result: "blur"
        }, r);
        var i = z.createSvgElement("feSpecularLighting", {
            in: "blur",
            surfaceScale: 1,
            specularConstant: .5,
            specularExponent: 10,
            "lighting-color": "white",
            result: "specOut"
        }, r);
        z.createSvgElement("fePointLight", {
            x: -5e3,
            y: -1e4,
            z: 2e4
        }, i),
        z.createSvgElement("feComposite", {
            in: "specOut",
            in2: "SourceAlpha",
            operator: "in",
            result: "specOut"
        }, r),
        z.createSvgElement("feComposite", {
            in: "SourceGraphic",
            in2: "specOut",
            operator: "arithmetic",
            k1: 0,
            k2: 1,
            k3: 1,
            k4: 0
        }, r),
        r = z.createSvgElement("filter", {
            id: "blocklyTrashcanShadowFilter"
        }, o),
        z.createSvgElement("feGaussianBlur", {
            in: "SourceAlpha",
            stdDeviation: 2,
            result: "blur"
        }, r),
        z.createSvgElement("feOffset", {
            in: "blur",
            dx: 1,
            dy: 1,
            result: "offsetBlur"
        }, r),
        r = z.createSvgElement("feMerge", {}, r),
        z.createSvgElement("feMergeNode", {
            in: "offsetBlur"
        }, r),
        z.createSvgElement("feMergeNode", {
            in: "SourceGraphic"
        }, r),
        r = z.createSvgElement("filter", {
            id: "blocklyShadowFilter"
        }, o),
        z.createSvgElement("feGaussianBlur", {
            stdDeviation: 2
        }, r),
        o = z.createSvgElement("pattern", {
            id: "blocklyDisabledPattern",
            patternUnits: "userSpaceOnUse",
            width: 10,
            height: 10
        }, o),
        z.createSvgElement("rect", {
            width: 10,
            height: 10,
            fill: "#aaa"
        }, o),
        z.createSvgElement("path", {
            d: "M 0 0 L 10 10 M 10 0 L 0 10",
            stroke: "#cc0"
        }, o),
        z.mainWorkspace = new z.Workspace(z.getMainWorkspaceMetrics_,z.setMainWorkspaceMetrics_),
        n.appendChild(z.mainWorkspace.createDom()),
        z.mainWorkspace.maxBlocks = z.maxBlocks,
        z.readOnly || (z.hasCategories ? z.Toolbox.createDom(n, t) : (z.mainWorkspace.flyout_ = new z.Flyout,
        r = (o = z.mainWorkspace.flyout_).createDom(),
        o.autoClose = !1,
        o.layoutProvider = z.toolboxLayout,
        e.dom.insertSiblingBefore(r, z.mainWorkspace.svgGroup_),
        z.addChangeListener(function() {
            if (0 == z.Block.dragMode_) {
                var e = z.mainWorkspace.getMetrics();
                if (0 > e.contentTop || e.contentTop + e.contentHeight > e.viewHeight + e.viewTop || e.contentLeft < (z.RTL ? e.viewLeft : 0) || e.contentLeft + e.contentWidth > (z.RTL ? e.viewWidth : e.viewWidth + e.viewLeft))
                    for (var t, n = z.mainWorkspace.getTopBlocks(!1), o = 0; t = n[o]; o++) {
                        var r = t.getRelativeToSurfaceXY()
                          , i = t.getHeightWidth()
                          , s = e.viewTop + 25 - i.height - r.y;
                        0 < s && t.moveBy(0, s),
                        0 > (s = e.viewTop + e.viewHeight - 25 - r.y) && t.moveBy(0, s),
                        0 < (s = 25 + e.viewLeft - r.x - (z.RTL ? 0 : i.width)) && t.moveBy(s, 0),
                        0 > (s = e.viewLeft + e.viewWidth - 25 - r.x + (z.RTL ? i.width : 0)) && t.moveBy(s, 0),
                        t.isDeletable() && 50 < (z.RTL ? r.x - e.viewWidth : -r.x) && t.dispose(!1, !0)
                    }
            }
        }))),
        z.mainWorkspace.setEnableToolbox = function(e) {
            z.mainWorkspace.flyout_ ? z.mainWorkspace.flyout_.setEnabled(e) : z.Toolbox.enabled = e
        }
        ,
        n.appendChild(z.Tooltip.createDom()),
        t.appendChild(n),
        z.svg = n,
        z.svgResize(),
        z.WidgetDiv.DIV = e.dom.createDom("div", "blocklyWidgetDiv"),
        z.WidgetDiv.DIV.style.direction = z.RTL ? "rtl" : "ltr",
        document.body.appendChild(z.WidgetDiv.DIV)
    }
    ,
    z.init_ = function() {
        if (z.bindEvent_(z.svg, "mousedown", null, z.onMouseDown_),
        z.bindEvent_(z.svg, "contextmenu", null, z.onContextMenu_),
        z.bindEvent_(z.WidgetDiv.DIV, "contextmenu", null, z.onContextMenu_),
        z.documentEventsBound_ || (z.bindEvent_(window, "resize", document, z.svgResize),
        z.bindEvent_(document, "keydown", null, z.onKeyDown_),
        document.addEventListener("mouseup", z.onMouseUp_, !1),
        e.userAgent.IPAD && z.bindEvent_(window, "orientationchange", document, function() {
            z.fireUiEvent(window, "resize")
        }),
        z.documentEventsBound_ = !0),
        z.languageTree)
            if (z.hasCategories)
                z.Toolbox.init();
            else {
                z.mainWorkspace.flyout_.init(z.mainWorkspace),
                z.mainWorkspace.flyout_.show(z.languageTree.childNodes),
                z.mainWorkspace.scrollX = z.mainWorkspace.flyout_.width_,
                z.RTL && (z.mainWorkspace.scrollX *= -1);
                var t = "translate(" + z.mainWorkspace.scrollX + ", 0)";
                z.mainWorkspace.getCanvas().setAttribute("transform", t),
                z.mainWorkspace.getBubbleCanvas().setAttribute("transform", t)
            }
        if (z.hasScrollbars && (z.mainWorkspace.scrollbar = new z.ScrollbarPair(z.mainWorkspace),
        z.mainWorkspace.scrollbar.resize()),
        z.mainWorkspace.addTrashcan(),
        z.hasSounds) {
            z.loadAudio_(["media/click.mp3", "media/click.wav", "media/click.ogg"], "click"),
            z.loadAudio_(["media/delete.mp3", "media/delete.ogg", "media/delete.wav"], "delete");
            var n = [];
            t = function() {
                for (; n.length; )
                    z.unbindEvent_(n.pop());
                z.preloadAudio_()
            }
            ,
            n.push(z.bindEvent_(document, "mousemove", null, t)),
            n.push(z.bindEvent_(document, "touchstart", null, t))
        }
    }
    ,
    z.updateToolbox = function(e) {
        if (e = z.parseToolboxTree_(e)) {
            if (!z.languageTree)
                throw "Existing toolbox is null.  Can't create new toolbox.";
            if (e.getElementsByTagName("category").length) {
                if (!z.hasCategories)
                    throw "Existing toolbox has no categories.  Can't change mode.";
                z.languageTree = e,
                z.Toolbox.populate_()
            } else {
                if (z.hasCategories)
                    throw "Existing toolbox has categories.  Can't change mode.";
                z.languageTree = e,
                z.mainWorkspace.flyout_.show(z.languageTree.childNodes)
            }
        } else if (z.languageTree)
            throw "Can't nullify an existing toolbox."
    }
    ,
    z.utils = {},
    z.addClass_ = function(e, t) {
        var n = e.getAttribute("class") || "";
        -1 == (" " + n + " ").indexOf(" " + t + " ") && (n && (n += " "),
        e.setAttribute("class", n + t))
    }
    ,
    z.removeClass_ = function(e, t) {
        var n = e.getAttribute("class");
        if (-1 != (" " + n + " ").indexOf(" " + t + " ")) {
            n = n.split(/\s+/);
            for (var o = 0; o < n.length; o++)
                n[o] && n[o] != t || (n.splice(o, 1),
                o--);
            n.length ? e.setAttribute("class", n.join(" ")) : e.removeAttribute("class")
        }
    }
    ,
    z.bindEvent_ = function(e, t, n, o) {
        function r(e) {
            o.apply(n, arguments)
        }
        e.addEventListener(t, r, !1);
        var i = [[e, t, r]];
        if (t in z.bindEvent_.TOUCH_MAP) {
            r = function(e) {
                if (1 == e.changedTouches.length) {
                    var t = e.changedTouches[0];
                    e.clientX = t.clientX,
                    e.clientY = t.clientY
                }
                o.apply(n, arguments),
                e.preventDefault()
            }
            ;
            for (var s, a = 0; s = z.bindEvent_.TOUCH_MAP[t][a]; a++)
                e.addEventListener(s, r, !1),
                i.push([e, s, r])
        }
        return i
    }
    ,
    z.bindEvent_.TOUCH_MAP = {},
    e.events.BrowserFeature.TOUCH_ENABLED && (z.bindEvent_.TOUCH_MAP = {
        mousedown: ["touchstart"],
        mousemove: ["touchmove"],
        mouseup: ["touchend", "touchcancel"]
    }),
    z.unbindEvent_ = function(e) {
        for (; e.length; ) {
            var t = e.pop()
              , n = t[2];
            t[0].removeEventListener(t[1], n, !1)
        }
        return n
    }
    ,
    z.fireUiEventNow = function(e, t) {
        var n = document;
        if (n.createEvent)
            (n = n.createEvent("UIEvents")).initEvent(t, !0, !0),
            e.dispatchEvent(n);
        else {
            if (!n.createEventObject)
                throw "FireEvent: No event creation mechanism.";
            n = n.createEventObject(),
            e.fireEvent("on" + t, n)
        }
    }
    ,
    z.fireUiEvent = function(e, t) {
        setTimeout(function() {
            z.fireUiEventNow(e, t)
        }, 0)
    }
    ,
    z.noEvent = function(e) {
        e.preventDefault(),
        e.stopPropagation()
    }
    ,
    z.getRelativeXY_ = function(e) {
        var t = {
            x: 0,
            y: 0
        }
          , n = e.getAttribute("x");
        return n && (t.x = parseInt(n, 10)),
        (n = e.getAttribute("y")) && (t.y = parseInt(n, 10)),
        (e = (e = e.getAttribute("transform")) && e.match(/translate\(\s*([-\d.]+)([ ,]\s*([-\d.]+)\s*\))?/)) && (t.x += parseInt(e[1], 10),
        e[3] && (t.y += parseInt(e[3], 10))),
        t
    }
    ,
    z.getSvgXY_ = function(e) {
        var t = 0
          , n = 0;
        do {
            var o = z.getRelativeXY_(e);
            t += o.x,
            n += o.y,
            e = e.parentNode
        } while (e && e != z.svg);
        return {
            x: t,
            y: n
        }
    }
    ,
    z.getAbsoluteXY_ = function(e) {
        return e = z.getSvgXY_(e),
        z.convertCoordinates(e.x, e.y, !1)
    }
    ,
    z.createSvgElement = function(e, t, n) {
        for (var o in e = document.createElementNS(z.SVG_NS, e),
        t)
            e.setAttribute(o, t[o]);
        return document.body.runtimeStyle && (e.runtimeStyle = e.currentStyle = e.style),
        n && n.appendChild(e),
        e
    }
    ,
    z.isRightButton = function(e) {
        return 2 == e.button || e.ctrlKey
    }
    ,
    z.convertCoordinates = function(e, t, n) {
        n && (e -= window.scrollX || window.pageXOffset,
        t -= window.scrollY || window.pageYOffset);
        var o = z.svg.createSVGPoint();
        return o.x = e,
        o.y = t,
        e = z.svg.getScreenCTM(),
        n && (e = e.inverse()),
        o = o.matrixTransform(e),
        n || (o.x += window.scrollX || window.pageXOffset,
        o.y += window.scrollY || window.pageYOffset),
        o
    }
    ,
    z.mouseToSvg = function(e) {
        return z.convertCoordinates(e.clientX + (window.scrollX || window.pageXOffset), e.clientY + (window.scrollY || window.pageYOffset), !0)
    }
    ,
    z.shortestStringLength = function(e) {
        if (!e.length)
            return 0;
        for (var t = e[0].length, n = 1; n < e.length; n++)
            t = Math.min(t, e[n].length);
        return t
    }
    ,
    z.commonWordPrefix = function(e, t) {
        if (!e.length)
            return 0;
        if (1 == e.length)
            return e[0].length;
        var n = 0;
        t = t || z.shortestStringLength(e);
        for (var o = 0; o < t; o++) {
            for (var r = e[0][o], i = 1; i < e.length; i++)
                if (r != e[i][o])
                    return n;
            " " == r && (n = o + 1)
        }
        for (i = 1; i < e.length; i++)
            if ((r = e[i][o]) && " " != r)
                return n;
        return t
    }
    ,
    z.commonWordSuffix = function(e, t) {
        if (!e.length)
            return 0;
        if (1 == e.length)
            return e[0].length;
        var n = 0;
        t = t || z.shortestStringLength(e);
        for (var o = 0; o < t; o++) {
            for (var r = e[0].substr(-o - 1, 1), i = 1; i < e.length; i++)
                if (r != e[i].substr(-o - 1, 1))
                    return n;
            " " == r && (n = o + 1)
        }
        for (i = 1; i < e.length; i++)
            if ((r = e[i].charAt(e[i].length - o - 1)) && " " != r)
                return n;
        return t
    }
    ,
    z.isNumber = function(e) {
        return !!e.match(/^\s*-?\d+(\.\d+)?\s*$/)
    }
    ,
    z.pathToBlockly = "./",
    z.SVG_NS = "http://www.w3.org/2000/svg",
    z.HTML_NS = "http://www.w3.org/1999/xhtml",
    z.HSV_SATURATION = .45,
    z.HSV_VALUE = .65,
    z.SPRITE = {
        width: 64,
        height: 92,
        url: "media/sprites.png"
    },
    z.makeColour = function(t, n, o) {
        return e.color.hsvToHex(t, n, 256 * o)
    }
    ,
    z.INPUT_VALUE = 1,
    z.OUTPUT_VALUE = 2,
    z.NEXT_STATEMENT = 3,
    z.PREVIOUS_STATEMENT = 4,
    z.DUMMY_INPUT = 5,
    z.ALIGN_LEFT = -1,
    z.ALIGN_CENTRE = 0,
    z.ALIGN_RIGHT = 1,
    z.OPPOSITE_TYPE = [],
    z.OPPOSITE_TYPE[z.INPUT_VALUE] = z.OUTPUT_VALUE,
    z.OPPOSITE_TYPE[z.OUTPUT_VALUE] = z.INPUT_VALUE,
    z.OPPOSITE_TYPE[z.NEXT_STATEMENT] = z.PREVIOUS_STATEMENT,
    z.OPPOSITE_TYPE[z.PREVIOUS_STATEMENT] = z.NEXT_STATEMENT,
    z.SOUNDS_ = Object.create(null),
    z.selected = null,
    z.readOnly = !1,
    z.highlightedConnection_ = null,
    z.localConnection_ = null,
    z.DRAG_RADIUS = 5,
    z.SNAP_RADIUS = 20,
    z.BUMP_DELAY = 250,
    z.COLLAPSE_CHARS = 30,
    z.mainWorkspace = null,
    z.clipboard_ = null,
    z.onTouchUpWrapper_ = null,
    z.svgSize = function() {
        return {
            width: z.svg.cachedWidth_,
            height: z.svg.cachedHeight_
        }
    }
    ,
    z.svgResize = function() {
        var e = z.svg
          , t = e.parentNode
          , n = t.offsetWidth;
        t = t.offsetHeight,
        e.cachedWidth_ != n && (e.setAttribute("width", n + "px"),
        e.cachedWidth_ = n),
        e.cachedHeight_ != t && (e.setAttribute("height", t + "px"),
        e.cachedHeight_ = t),
        z.mainWorkspace.scrollbar && z.mainWorkspace.scrollbar.resize()
    }
    ,
    z.onMouseDown_ = function(e) {
        z.svgResize(),
        z.terminateDrag_(),
        z.hideChaff();
        var t = e.target && e.target.nodeName && "svg" == e.target.nodeName.toLowerCase();
        !z.readOnly && z.selected && t && z.selected.unselect(),
        e.target == z.svg && z.isRightButton(e) ? z.showContextMenu_(e) : (z.readOnly || t) && z.mainWorkspace.scrollbar && (z.mainWorkspace.dragMode = !0,
        z.mainWorkspace.startDragMouseX = e.clientX,
        z.mainWorkspace.startDragMouseY = e.clientY,
        z.mainWorkspace.startDragMetrics = z.mainWorkspace.getMetrics(),
        z.mainWorkspace.startScrollX = z.mainWorkspace.scrollX,
        z.mainWorkspace.startScrollY = z.mainWorkspace.scrollY,
        "mouseup"in z.bindEvent_.TOUCH_MAP && (z.onTouchUpWrapper_ = z.bindEvent_(document, "mouseup", null, z.onMouseUp_)),
        z.onMouseMoveWrapper_ = z.bindEvent_(document, "mousemove", null, z.onMouseMove_))
    }
    ,
    z.onMouseUp_ = function() {
        z.setCursorHand_(!1),
        z.mainWorkspace.dragMode = !1,
        z.onTouchUpWrapper_ && (z.unbindEvent_(z.onTouchUpWrapper_),
        z.onTouchUpWrapper_ = null),
        z.onMouseMoveWrapper_ && (z.unbindEvent_(z.onMouseMoveWrapper_),
        z.onMouseMoveWrapper_ = null)
    }
    ,
    z.onMouseMove_ = function(e) {
        if (z.mainWorkspace.dragMode) {
            z.removeAllRanges();
            var t = z.mainWorkspace.startDragMetrics
              , n = z.mainWorkspace.startScrollX + (e.clientX - z.mainWorkspace.startDragMouseX)
              , o = z.mainWorkspace.startScrollY + (e.clientY - z.mainWorkspace.startDragMouseY);
            n = Math.min(n, -t.contentLeft),
            o = Math.min(o, -t.contentTop),
            n = Math.max(n, t.viewWidth - t.contentLeft - t.contentWidth),
            o = Math.max(o, t.viewHeight - t.contentTop - t.contentHeight),
            z.mainWorkspace.scrollbar.set(-n - t.contentLeft, -o - t.contentTop),
            e.stopPropagation()
        }
    }
    ,
    z.onKeyDown_ = function(e) {
        if (!z.isTargetInput_(e))
            if (27 == e.keyCode)
                z.hideChaff();
            else if (8 == e.keyCode || 46 == e.keyCode)
                try {
                    z.selected && z.selected.isDeletable() && (z.hideChaff(),
                    z.selected.dispose(!0, !0))
                } finally {
                    e.preventDefault()
                }
            else
                (e.altKey || e.ctrlKey || e.metaKey) && (z.selected && z.selected.isDeletable() && z.selected.isMovable() && z.selected.workspace == z.mainWorkspace && (z.hideChaff(),
                67 == e.keyCode ? z.copy_(z.selected) : 88 == e.keyCode && (z.copy_(z.selected),
                z.selected.dispose(!0, !0))),
                86 == e.keyCode && z.clipboard_ && z.mainWorkspace.paste(z.clipboard_))
    }
    ,
    z.terminateDrag_ = function() {
        z.Block.terminateDrag_(),
        z.Flyout.terminateDrag_()
    }
    ,
    z.copy_ = function(e) {
        var t = z.Xml.blockToDom_(e);
        z.Xml.deleteNext(t),
        e = e.getRelativeToSurfaceXY(),
        t.setAttribute("x", z.RTL ? -e.x : e.x),
        t.setAttribute("y", e.y),
        z.clipboard_ = t
    }
    ,
    z.showContextMenu_ = function(e) {
        if (!z.readOnly) {
            var t = [];
            if (z.collapse) {
                for (var n = !1, o = !1, r = z.mainWorkspace.getTopBlocks(!1), i = 0; i < r.length; i++)
                    for (var s = r[i]; s; )
                        s.isCollapsed() ? n = !0 : o = !0,
                        s = s.getNextBlock();
                (o = {
                    enabled: o
                }).text = z.Msg.COLLAPSE_ALL,
                o.callback = function() {
                    for (var e = 0, t = 0; t < r.length; t++)
                        for (var n = r[t]; n; )
                            setTimeout(n.setCollapsed.bind(n, !0), e),
                            n = n.getNextBlock(),
                            e += 10
                }
                ,
                t.push(o),
                (n = {
                    enabled: n
                }).text = z.Msg.EXPAND_ALL,
                n.callback = function() {
                    for (var e = 0, t = 0; t < r.length; t++)
                        for (var n = r[t]; n; )
                            setTimeout(n.setCollapsed.bind(n, !1), e),
                            n = n.getNextBlock(),
                            e += 10
                }
                ,
                t.push(n)
            }
            z.ContextMenu.show(e, t)
        }
    }
    ,
    z.onContextMenu_ = function(e) {
        z.isTargetInput_(e) || e.preventDefault()
    }
    ,
    z.hideChaff = function(e) {
        z.Tooltip.hide(),
        z.WidgetDiv.hide(),
        !e && z.Toolbox.flyout_ && z.Toolbox.flyout_.autoClose && z.Toolbox.clearSelection()
    }
    ,
    z.removeAllRanges = function() {
        if (window.getSelection) {
            var e = window.getSelection();
            e && e.removeAllRanges && (e.removeAllRanges(),
            window.setTimeout(function() {
                try {
                    window.getSelection().removeAllRanges()
                } catch (e) {}
            }, 0))
        }
    }
    ,
    z.isTargetInput_ = function(e) {
        return "textarea" == e.target.type || "text" == e.target.type
    }
    ,
    z.loadAudio_ = function(e, t) {
        if (window.Audio && e.length) {
            for (var n, o = new window.Audio, r = 0; r < e.length; r++) {
                var i = e[r]
                  , s = i.match(/\.(\w+)$/);
                if (s && o.canPlayType("audio/" + s[1])) {
                    n = new window.Audio(z.pathToBlockly + i);
                    break
                }
            }
            n && n.play && (z.SOUNDS_[t] = n)
        }
    }
    ,
    z.preloadAudio_ = function() {
        for (var t in z.SOUNDS_) {
            var n = z.SOUNDS_[t];
            if (n.volume = .01,
            n.play(),
            n.pause(),
            e.userAgent.IPAD || e.userAgent.IPHONE)
                break
        }
    }
    ,
    z.playAudio = function(t, n) {
        (t = z.SOUNDS_[t]) && ((t = e.userAgent.DOCUMENT_MODE && 9 === e.userAgent.DOCUMENT_MODE || e.userAgent.IPAD || e.userAgent.ANDROID ? t : t.cloneNode()).volume = void 0 === n ? 1 : n,
        t.play())
    }
    ,
    z.setCursorHand_ = function(e) {
        if (!z.readOnly) {
            var t = "";
            e && (t = "url(" + z.pathToBlockly + "media/handclosed.cur) 7 3, auto"),
            z.selected && (z.selected.getSvgRoot().style.cursor = t),
            z.svg.style.cursor = t
        }
    }
    ,
    z.getMainWorkspaceMetrics_ = function() {
        var e = z.svgSize();
        e.width -= z.Toolbox.width;
        var t = e.width - z.Scrollbar.scrollbarThickness
          , n = e.height - z.Scrollbar.scrollbarThickness;
        try {
            var o = z.mainWorkspace.getCanvas().getBBox()
        } catch (e) {
            return null
        }
        if (z.mainWorkspace.scrollbar) {
            var r = Math.min(o.x - t / 2, o.x + o.width - t);
            t = Math.max(o.x + o.width + t / 2, o.x + t);
            var i = Math.min(o.y - n / 2, o.y + o.height - n);
            n = Math.max(o.y + o.height + n / 2, o.y + n)
        } else
            t = (r = o.x) + o.width,
            n = (i = o.y) + o.height;
        return {
            viewHeight: e.height,
            viewWidth: e.width,
            contentHeight: n - i,
            contentWidth: t - r,
            viewTop: -z.mainWorkspace.scrollY,
            viewLeft: -z.mainWorkspace.scrollX,
            contentTop: i,
            contentLeft: r,
            absoluteTop: 0,
            absoluteLeft: z.RTL ? 0 : z.Toolbox.width
        }
    }
    ,
    z.setMainWorkspaceMetrics_ = function(t) {
        if (!z.mainWorkspace.scrollbar)
            throw "Attempt to set main workspace scroll without scrollbars.";
        var n = z.getMainWorkspaceMetrics_();
        e.isNumber(t.x) && (z.mainWorkspace.scrollX = -n.contentWidth * t.x - n.contentLeft),
        e.isNumber(t.y) && (z.mainWorkspace.scrollY = -n.contentHeight * t.y - n.contentTop),
        t = "translate(" + (z.mainWorkspace.scrollX + n.absoluteLeft) + "," + (z.mainWorkspace.scrollY + n.absoluteTop) + ")",
        z.mainWorkspace.getCanvas().setAttribute("transform", t),
        z.mainWorkspace.getBubbleCanvas().setAttribute("transform", t)
    }
    ,
    z.doCommand = function(e) {
        z.Realtime.isEnabled ? z.Realtime.doCommand(e) : e()
    }
    ,
    z.addChangeListener = function(e) {
        return z.bindEvent_(z.mainWorkspace.getCanvas(), "blocklyWorkspaceChange", null, e)
    }
    ,
    z.removeChangeListener = function(e) {
        z.unbindEvent_(e)
    }
    ,
    z.getMainWorkspace = function() {
        return z.mainWorkspace
    }
    ,
    window.Blockly || (window.Blockly = {}),
    window.Blockly.getMainWorkspace = z.getMainWorkspace,
    window.Blockly.addChangeListener = z.addChangeListener,
    window.Blockly.removeChangeListener = z.removeChangeListener;
    var C = {
        BlocklyLayout: function(e, t) {
            this.blockly_ = e,
            this.layoutRequest_ = null,
            this.game_ = t,
            this.windowHeight = window.innerHeight,
            this.windowWidth = window.innerWidth,
            window.addEventListener("resize", this.onResize_.bind(this), !1)
        }
    };
    C.BlocklyLayout.TOOLBOX_GAP = 24,
    C.BlocklyLayout.TOOLBOX_MD_GAP = 24,
    C.BlocklyLayout.TOOLBOX_MARGIN = 10,
    C.BlocklyLayout.TOOLBOX_SM_MARGIN = 24,
    C.BlocklyLayout.TOOLBOX_MD_MARGIN = 59,
    C.BlocklyLayout.TOOLBOX_TOP = 80,
    C.BlocklyLayout.TOOLBOX_SM_TOP = 105,
    C.BlocklyLayout.TOOLBOX_MD_TOP = 105,
    C.BlocklyLayout.WHENRUN_TOP = 80,
    C.BlocklyLayout.WHENRUN_SM_TOP = 105,
    C.BlocklyLayout.WHENRUN_MD_TOP = 105,
    C.BlocklyLayout.WHENRUN_LEFT = 10,
    C.BlocklyLayout.WHENRUN_SM_LEFT = 24,
    C.BlocklyLayout.WHENRUN_MD_LEFT = 32,
    C.BlocklyLayout.prototype.scheduleLayout = function() {
        null == this.layoutRequest_ && (this.layoutRequest_ = setTimeout(this.layoutWorkspace_.bind(this), 0))
    }
    ,
    C.BlocklyLayout.prototype.onResize_ = function() {
        this.windowHeight === window.innerHeight && this.windowWidth === window.innerWidth || (this.windowHeight = window.innerHeight,
        this.windowWidth = window.innerWidth,
        this.blockly_.reflowToolbar(),
        this.scheduleLayout())
    }
    ,
    C.BlocklyLayout.prototype.layoutToolbox = function(e) {
        return 0 === e.length ? 0 : 1024 < this.windowWidth ? this.layoutToolboxCardinal_(e) : this.layoutToolboxRow_(e)
    }
    ,
    C.BlocklyLayout.prototype.layoutToolboxRow_ = function(e) {
        var t = 0
          , n = C.BlocklyLayout.TOOLBOX_GAP
          , o = C.BlocklyLayout.TOOLBOX_MARGIN
          , r = C.BlocklyLayout.TOOLBOX_TOP;
        660 < this.windowWidth && (o = C.BlocklyLayout.TOOLBOX_SM_MARGIN,
        r = C.BlocklyLayout.TOOLBOX_SM_TOP);
        for (var i, s = 0; i = e[s]; s++) {
            i.getSvgRoot();
            var a = i.getHeightWidth();
            t = a.width,
            i.moveTo(o, r),
            r += a.height + n
        }
        return t + 2 * o
    }
    ,
    C.BlocklyLayout.prototype.layoutToolboxCardinal_ = function(e) {
        var t = C.BlocklyLayout.TOOLBOX_MD_TOP
          , n = C.BlocklyLayout.TOOLBOX_MD_MARGIN
          , o = C.BlocklyLayout.TOOLBOX_MD_GAP
          , r = e[0].getHeightWidth()
          , i = (n = 2 * (r.width + o) - o + 2 * n) / 2 - 1.5 * r.width - o + 5
          , s = n / 2 - r.width / 2
          , a = n / 2 + r.width / 2 + o - 5;
        return e[0].moveTo(s, t),
        t += r.height + o,
        e[2].moveTo(i, t),
        e[3].moveTo(a, t),
        e[1].moveTo(s, t),
        t += r.height + o,
        4 < e.length && (e[4].moveTo(s, t),
        t += r.height + o,
        e[5] && e[5].moveTo(s, t)),
        n
    }
    ,
    C.BlocklyLayout.prototype.layoutWorkspace_ = function() {
        this.layoutRequest_ = null,
        this.blockly_.getToolbarWidth();
        var e = this.windowWidth - this.game_.scene.getWidth();
        this.blockly_.el.style.width = e + "px",
        e = C.BlocklyLayout.WHENRUN_LEFT;
        var t = C.BlocklyLayout.WHENRUN_TOP;
        660 < this.windowWidth && (e = C.BlocklyLayout.WHENRUN_SM_LEFT,
        t = C.BlocklyLayout.WHENRUN_SM_TOP),
        1024 < this.windowWidth && (e = C.BlocklyLayout.WHENRUN_MD_LEFT,
        t = C.BlocklyLayout.WHENRUN_MD_TOP);
        for (var n, o = this.blockly_.getTopBlocks(), r = 0; n = o[r]; r++)
            "when_run" === n.type && n.moveTo(e, t)
    }
    ,
    C.Level = function(e) {
        this.startBlocks = e.startBlocks || "",
        this.startBlocks.match(/^<xml/) || (this.startBlocks = "<xml>" + this.startBlocks + "</xml>"),
        this.toolbox = e.toolbox || "",
        this.toolbox.match(/^<xml/) || (this.toolbox = "<xml>" + this.toolbox + "</xml>"),
        this.insertWhenRun = !1,
        this.id = C.Level.idCounter++,
        this.type = null
    }
    ,
    C.Level.idCounter = 0,
    C.PuzzleLevel = function(e) {
        C.Level.call(this, e),
        this.insertWhenRun = !1,
        this.type = "puzzle",
        this.notchedEnds = e.notchedEnds,
        this.numPieces = e.numPieces,
        this.puzzleColor = e.puzzleColor,
        this.puzzleHeight = e.puzzleHeight,
        this.puzzleImage = e.puzzleImage,
        this.puzzleWidth = e.puzzleWidth
    }
    ,
    e.inherits(C.PuzzleLevel, C.Level),
    C.PuzzleLevel.prototype.checkSuccess = function() {
        for (var e = this.id, t = this.numPieces, n = [], o = 1; o <= t; o++)
            n.push("puzzle_" + e + "-ABCDEFGHIJKLMNOPQRSTUVWXYZ"[o]);
        if (1 !== (o = z.mainWorkspace.getTopBlocks()).length)
            return !1;
        for (e = 0,
        o = o[0]; e < t; ) {
            if (!o || o.type !== n[e])
                return !1;
            if (1 < (o = o.getChildren()).length)
                return !1;
            o = o[0],
            e++
        }
        return void 0 === o
    }
    ,
    C.MazeLevel = function(e) {
        C.Level.call(this, e),
        this.insertWhenRun = !0,
        this.type = "maze",
        this.idealBlockCount = e.idealBlockCount || 1 / 0,
        this.minY = e.bounds,
        this.maxY = this.minY + C.Constants.LEVEL_USABLE_ROWS,
        this.playerX = e.playerX,
        this.playerY = this.minY + e.playerY,
        this.presents = (e.presents || []).map(function(t) {
            return {
                x: t.x,
                y: e.bounds + t.y
            }
        }),
        this.requiredBlocks = e.requiredBlocks || []
    }
    ,
    e.inherits(C.MazeLevel, C.Level),
    C.MazeLevel.prototype.isOutsideBounds = function(e, t) {
        return 0 > e || e >= C.Constants.LEVEL_USABLE_MAX_COLS || t < this.minY || t >= this.maxY
    }
    ,
    C.MazeLevel.prototype.processResult = function(e, t) {
        if (t.hasEmptyContainerBlocks())
            return new C.LevelResult(!1,C.I18n.getMsg("CL_resultEmptyBlockFail"),{
                doNotAnimate: !0
            });
        if (t.hasExtraTopBlocks())
            return new C.LevelResult(!1,C.I18n.getMsg("CL_resultExtraTopBlockFail"),{
                doNotAnimate: !0
            });
        var n = t.getUserCode()
          , o = t.getMissingBlocks(this.requiredBlocks);
        return o.length ? (t = e ? C.I18n.getMsg("CL_resultMissingBlockSuccess") : C.I18n.getMsg("CL_resultMissingBlockFail"),
        new C.LevelResult(e,t,{
            code: n,
            idealBlockCount: this.idealBlockCount,
            missingBlocks: o
        })) : (o = t.getCountableBlocks().length,
        e ? o > this.idealBlockCount ? new C.LevelResult(e,C.I18n.getMsg("CL_resultTooManyBlocksSuccess"),{
            code: n,
            idealBlockCount: this.idealBlockCount
        }) : new C.LevelResult(e,null,{
            allowRetry: !1,
            code: n
        }) : 1 / 0 !== this.idealBlockCount && o < this.idealBlockCount ? new C.LevelResult(e,C.I18n.getMsg("CL_resultTooFewBlocksFail"),{
            code: n,
            idealBlockCount: this.idealBlockCount
        }) : new C.LevelResult(e,C.I18n.getMsg("CL_resultGenericFail", {
            code: n
        })))
    }
    ,
    C.LevelResult = function(e, t, n) {
        n = n || {},
        this.allowRetry = null == n.allowRetry || n.allowRetry,
        this.code = n.code || null,
        this.doNotAnimate = n.doNotAnimate || !1,
        this.graphic = n.graphic || null,
        this.levelComplete = e,
        this.isFinalLevel = n.isFinalLevel || !1,
        this.message = t || "",
        this.missingBlocks = n.missingBlocks || [],
        n.idealBlockCount && (this.message = this.message.replace("{{ideal}}", n.idealBlockCount))
    }
    ,
    z.JavaScript = new z.Generator("JavaScript"),
    z.JavaScript.addReservedWords("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan"),
    z.JavaScript.ORDER_ATOMIC = 0,
    z.JavaScript.ORDER_MEMBER = 1,
    z.JavaScript.ORDER_NEW = 1,
    z.JavaScript.ORDER_FUNCTION_CALL = 2,
    z.JavaScript.ORDER_INCREMENT = 3,
    z.JavaScript.ORDER_DECREMENT = 3,
    z.JavaScript.ORDER_LOGICAL_NOT = 4,
    z.JavaScript.ORDER_BITWISE_NOT = 4,
    z.JavaScript.ORDER_UNARY_PLUS = 4,
    z.JavaScript.ORDER_UNARY_NEGATION = 4,
    z.JavaScript.ORDER_TYPEOF = 4,
    z.JavaScript.ORDER_VOID = 4,
    z.JavaScript.ORDER_DELETE = 4,
    z.JavaScript.ORDER_MULTIPLICATION = 5,
    z.JavaScript.ORDER_DIVISION = 5,
    z.JavaScript.ORDER_MODULUS = 5,
    z.JavaScript.ORDER_ADDITION = 6,
    z.JavaScript.ORDER_SUBTRACTION = 6,
    z.JavaScript.ORDER_BITWISE_SHIFT = 7,
    z.JavaScript.ORDER_RELATIONAL = 8,
    z.JavaScript.ORDER_IN = 8,
    z.JavaScript.ORDER_INSTANCEOF = 8,
    z.JavaScript.ORDER_EQUALITY = 9,
    z.JavaScript.ORDER_BITWISE_AND = 10,
    z.JavaScript.ORDER_BITWISE_XOR = 11,
    z.JavaScript.ORDER_BITWISE_OR = 12,
    z.JavaScript.ORDER_LOGICAL_AND = 13,
    z.JavaScript.ORDER_LOGICAL_OR = 14,
    z.JavaScript.ORDER_CONDITIONAL = 15,
    z.JavaScript.ORDER_ASSIGNMENT = 16,
    z.JavaScript.ORDER_COMMA = 17,
    z.JavaScript.ORDER_NONE = 99,
    z.JavaScript.init = function() {
        z.JavaScript.definitions_ = Object.create(null),
        z.JavaScript.functionNames_ = Object.create(null),
        z.JavaScript.variableDB_ ? z.JavaScript.variableDB_.reset() : z.JavaScript.variableDB_ = new z.Names(z.JavaScript.RESERVED_WORDS_);
        for (var e = [], t = z.Variables.allVariables(), n = 0; n < t.length; n++)
            e[n] = "var " + z.JavaScript.variableDB_.getName(t[n], z.Variables.NAME_TYPE) + ";";
        z.JavaScript.definitions_.variables = e.join("\n")
    }
    ,
    z.JavaScript.finish = function(e) {
        var t, n = [];
        for (t in z.JavaScript.definitions_)
            n.push(z.JavaScript.definitions_[t]);
        return n.join("\n\n") + "\n\n\n" + e
    }
    ,
    z.JavaScript.scrubNakedValue = function(e) {
        return e + ";\n"
    }
    ,
    z.JavaScript.quote_ = function(e) {
        return "'" + (e = e.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'")) + "'"
    }
    ,
    z.JavaScript.scrub_ = function(e, t) {
        var n = "";
        if (!e.outputConnection || !e.outputConnection.targetConnection) {
            var o = e.getCommentText();
            o && (n += z.JavaScript.prefixLines(o, "// ") + "\n");
            for (var r = 0; r < e.inputList.length; r++)
                e.inputList[r].type == z.INPUT_VALUE && (o = e.inputList[r].connection.targetBlock()) && (o = z.JavaScript.allNestedComments(o)) && (n += z.JavaScript.prefixLines(o, "// "))
        }
        return e = e.nextConnection && e.nextConnection.targetBlock(),
        n + t + (e = z.JavaScript.blockToCode(e))
    }
    ,
    C.I18n = {},
    C.I18n.CACHE_ = {},
    C.I18n.getMsg = function(e) {
        var t = C.I18n.getMsgOrNull(e);
        return null === t ? "[Unknown message: " + e + "]" : t
    }
    ,
    C.I18n.getMsgOrNull = function(e) {
        if (!(e in C.I18n.CACHE_)) {
            var t = document.getElementById(e);
            if (t)
                return t = (t = t.textContent).replace(/\\n/g, "\n"),
                C.I18n.CACHE_[e] = t
        }
        return C.I18n.CACHE_[e]
    }
    ,
    C.Patterns = function() {
        function e() {
            document.getElementById("blocklySvgDefs") ? (o = null,
            t.forEach(function(e) {
                C.Patterns(e.id, e.imagePath, e.width, e.height, e.offsetX, e.offsetY)
            }),
            t = []) : o = setTimeout(e, 100)
        }
        var t = []
          , n = {}
          , o = null;
        return {
            addPattern: function(r, i, s, a, l, u) {
                var c = {
                    id: r,
                    imagePath: i,
                    width: s,
                    height: a,
                    offsetX: l,
                    offsetY: u
                };
                if (document.getElementById("blocklySvgDefs")) {
                    if (!function(e) {
                        var t = !0
                          , o = n[e.id];
                        if (!o)
                            return !1;
                        if (Object.keys(e).forEach(function(n) {
                            e[n] !== o[n] && (t = !1)
                        }),
                        !t)
                            throw Error("Can't add attribute of same id with different attributes");
                        return !0
                    }(c)) {
                        if (l = "function" == typeof l ? -l() : -l,
                        u = "function" == typeof u ? -u() : -u,
                        u = z.createSvgElement("pattern", {
                            id: r,
                            patternUnits: "userSpaceOnUse",
                            width: "100%",
                            height: a,
                            x: l,
                            y: u
                        }, document.getElementById("blocklySvgDefs")),
                        (s = z.createSvgElement("image", {
                            width: s,
                            height: a
                        }, u)).setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", i),
                        n[c.id])
                            throw Error("Already have cached item with id: " + c.id);
                        n[c.id] = c
                    }
                } else
                    t.push(c),
                    o || e();
                return r
            }
        }
    }(),
    C.blocks = {},
    C.blocks.miniBlockXml = function(e) {
        return '<block type="' + e + '_mini"><clone>' + C.blocks.blockXml(e) + "</clone></block>"
    }
    ,
    C.blocks.blockXml = function(e, t, n, o) {
        if ("string" == typeof values && (o = values,
        values = null),
        e = '<block type="' + e + '"',
        t)
            for (var r in t)
                t.hasOwnProperty(r) && null != t[r] && (e += " " + r + '="' + t[r] + '"');
        if (e += ">",
        n)
            for (r in n)
                n.hasOwnProperty(r) && (e += '<field name="' + r + '">' + n[r] + "</field>");
        return o && (e += '<statement name="DO">' + o + "</statement>"),
        e + "</block>"
    }
    ,
    C.blocks.install = function() {
        function e(e, t) {
            for (var n = []; e <= t; e++)
                n.push([e.toString(), e]);
            return n
        }
        var t = {
            West: {
                letter: C.I18n.getMsg("CL_moveWest"),
                image: "img/block-west.svg",
                tooltip: C.I18n.getMsg("CL_moveWestTooltip"),
                symbol: "←",
                short: "west"
            },
            East: {
                letter: C.I18n.getMsg("CL_moveEast"),
                image: "img/block-east.svg",
                tooltip: C.I18n.getMsg("CL_moveEastTooltip"),
                symbol: "→",
                short: "east"
            },
            North: {
                letter: C.I18n.getMsg("CL_moveNorth"),
                image: "img/block-north.svg",
                tooltip: C.I18n.getMsg("CL_moveNorthTooltip"),
                symbol: "↑",
                short: "north"
            },
            South: {
                letter: C.I18n.getMsg("CL_moveSouth"),
                image: "img/block-south.svg",
                tooltip: C.I18n.getMsg("CL_moveSouthTooltip"),
                symbol: "↓",
                short: "south"
            }
        };
        !function() {
            function e(e) {
                var n = t[e];
                return {
                    helpUrl: "",
                    init: function() {
                        this.contextMenu = !1,
                        this.setHSV(296, .491, .624),
                        this.appendDummyInput().appendField(new z.FieldImage(n.image,23,32)),
                        this.setMini(!0),
                        this.setTooltip(n.tooltip)
                    }
                }
            }
            function n(e) {
                var n = t[e];
                return {
                    helpUrl: "",
                    init: function() {
                        this.contextMenu = !1,
                        this.setHSV(296, .491, .624),
                        this.appendDummyInput().appendField(new z.FieldImage(n.image,23,32)).appendField(new z.FieldLabel(n.letter)),
                        this.setPreviousStatement(!0),
                        this.setNextStatement(!0),
                        this.setTooltip(n.tooltip)
                    }
                }
            }
            function o(t) {
                z.Blocks["maze_move" + t] = n(t),
                z.Blocks["maze_move" + t + "_mini"] = e(t),
                z.JavaScript["maze_move" + t] = function(e) {
                    return function() {
                        return "api.move" + e + "('block_id_" + this.id + "');\n"
                    }
                }(t)
            }
            o("North"),
            o("South"),
            o("West"),
            o("East")
        }(),
        z.Blocks.when_run = {
            init: function() {
                this.contextMenu = !1,
                this.setHSV(26, .77, .96),
                this.appendDummyInput().appendField(C.I18n.getMsg("CL_whenRun")),
                this.setNextStatement(!0)
            }
        },
        z.JavaScript.when_run = function() {
            return "\n"
        }
        ,
        z.Blocks.controls_repeat = {
            init: function() {
                this.contextMenu = !1,
                this.setHSV(187, 1, .753),
                this.appendDummyInput().appendField(new z.FieldImage("img/block-repeat.svg",28,32)).appendField(new z.FieldDropdown(e(2, 6)), "TIMES").appendField(C.I18n.getMsg("CL_repeatTitleTimes")),
                this.appendStatementInput("DO"),
                this.setPreviousStatement(!0),
                this.setNextStatement(!0),
                this.setTooltip(C.I18n.getMsg("CL_repeatTooltip"))
            }
        },
        z.Blocks.controls_repeat_mini = {
            init: function() {
                this.contextMenu = !1,
                this.setHSV(187, 1, .753),
                this.appendDummyInput().appendField(new z.FieldImage("img/block-repeat.svg",23,32)),
                this.setMini(!0),
                this.setTooltip(C.I18n.getMsg("CL_repeatTooltip"))
            }
        },
        z.JavaScript.controls_repeat = function() {
            var e = Number(this.getFieldValue("TIMES"))
              , t = z.JavaScript.statementToCode(this, "DO");
            z.JavaScript.INFINITE_LOOP_TRAP && (t = z.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + this.id + "'") + t);
            var n = z.JavaScript.variableDB_.getDistinctName("count", z.Variables.NAME_TYPE);
            return "for (var " + n + " = 0; " + n + " < " + e + "; " + n + "++) {\n" + t + "}\n"
        }
        ,
        z.Blocks.controls_jump = {
            init: function() {
                this.contextMenu = !1,
                this.setHSV(187, 1, .753),
                this.appendDummyInput().appendField(new z.FieldImage("img/block-jump.svg",28,32)).appendField(C.I18n.getMsg("CL_jumpTitleLength")).appendField(new z.FieldDropdown(e(1, 3)), "LENGTH").appendField("to").appendField(new z.FieldDropdown(function(e) {
                    for (var n, o = Object.keys(t), r = [], i = 0; n = o[i]; i++)
                        n = t[n],
                        r.push([n.symbol, e ? n.short : n.letter]);
                    return r
                }(!0)), "DIRECTION"),
                this.setPreviousStatement(!0),
                this.setNextStatement(!0),
                this.setTooltip(C.I18n.getMsg("CL_jumpTooltip"))
            }
        },
        z.Blocks.controls_jump_mini = {
            init: function() {
                this.contextMenu = !1,
                this.setHSV(187, 1, .753),
                this.appendDummyInput().appendField(new z.FieldImage("img/block-jump.svg",23,32)),
                this.setMini(!0),
                this.setTooltip(C.I18n.getMsg("CL_jumpTooltip"))
            }
        },
        z.JavaScript.controls_jump = function() {
            var e = Number(this.getFieldValue("LENGTH"))
              , t = this.getFieldValue("DIRECTION");
            return "api.moveJump('block_id_" + this.id + "', " + e + ", '" + t + "');\n"
        }
        ,
        C.levels.forEach(function(e) {
            "puzzle" === e.type && function(e) {
                function t(e) {
                    var t = "pat_" + s + "-ABCDEFGHIJKLMNOPQRSTUVWXYZ"[e];
                    z.Blocks["puzzle_" + s + "-ABCDEFGHIJKLMNOPQRSTUVWXYZ"[e]] = {
                        helpUrl: "",
                        init: function() {
                            this.contextMenu = !1,
                            this.setHSV.apply(this, a),
                            this.appendDummyInput().appendField(new z.FieldImage("img/blank.png",c,h)),
                            this.setPreviousStatement(1 !== e || l),
                            this.setNextStatement(e !== i || l),
                            this.setFillPattern(C.Patterns.addPattern(t, n, o, r, 0, u * (e - 1)))
                        }
                    }
                }
                var n = e.image
                  , o = e.width
                  , r = e.height
                  , i = e.numBlocks
                  , s = e.level
                  , a = e.HSV
                  , l = e.notchedEnds
                  , u = r / i
                  , c = o - 54
                  , h = u - 10;
                for (e = 1; e <= i; e++)
                    t(e)
            }({
                image: e.puzzleImage,
                HSV: e.puzzleColor,
                width: e.puzzleWidth,
                height: e.puzzleHeight,
                numBlocks: e.numPieces,
                notchedEnds: e.notchedEnds,
                level: e.id
            })
        })
    }
    ,
    C.Blockly = function(e, t) {
        this.cachedBlockStates_ = [],
        this.currentLevel = this.changeListener_ = null,
        this.el = e,
        this.game = t,
        this.layout = new C.BlocklyLayout(this,t),
        this.checkGoalCondition_ = this.checkGoalCondition_.bind(this),
        this.initBlockly_()
    }
    ,
    C.Blockly.prototype = {
        initBlockly_: function() {
            C.blocks.install(),
            z.SNAP_RADIUS = 60,
            z.inject(this.el, {
                scrollbars: !1,
                path: "./img/",
                sounds: !1,
                toolbox: "<xml></xml>",
                toolboxLayout: this.layout.layoutToolbox.bind(this.layout),
                touch: !0
            })
        },
        setLevel: function(e) {
            this.changeListener_ && (z.removeChangeListener(this.changeListener_),
            this.changeListener_ = null),
            this.currentLevel = e,
            z.updateToolbox(this.currentLevel.toolbox),
            this.resetToolboxScroll_(),
            this.loadBlocks_(),
            this.layout.scheduleLayout(),
            this.currentLevel.checkSuccess && (this.changeListener_ = z.addChangeListener(this.checkGoalCondition_))
        },
        resetToolboxScroll_: function() {
            z.mainWorkspace.scrollX = z.mainWorkspace.flyout_.width_,
            z.RTL && (z.mainWorkspace.scrollX *= -1);
            var e = "translate(" + z.mainWorkspace.scrollX + ", 0)";
            z.mainWorkspace.getCanvas().setAttribute("transform", e),
            z.mainWorkspace.getBubbleCanvas().setAttribute("transform", e)
        },
        reflowToolbar: function() {
            z.mainWorkspace.flyout_.reflow()
        },
        getToolbarWidth: function() {
            return z.mainWorkspace.flyout_.width_
        },
        loadBlocks_: function() {
            var e = z.Xml.textToDom(this.currentLevel.startBlocks);
            this.currentLevel.insertWhenRun && this.insertWhenRunBlock_(e),
            this.arrangeBlockPosition_(e),
            z.mainWorkspace.clear(),
            z.Xml.domToWorkspace(z.mainWorkspace, e)
        },
        insertWhenRunBlock_: function(e) {
            var t = e.parentNode
              , n = t.createElement("block");
            n.setAttribute("type", "when_run"),
            n.setAttribute("movable", "false"),
            n.setAttribute("deletable", "false");
            for (var o = e.childNodes ? e.childNodes.length : 0, r = null, i = 0; i < o && null === r; ) {
                var s = e.childNodes[i];
                1 === s.nodeType && (r = e.removeChild(s),
                o--),
                i++
            }
            null !== r && ((t = t.createElement("next")).appendChild(r),
            n.appendChild(t)),
            0 < o ? e.insertBefore(n, e.childNodes[0]) : e.appendChild(n)
        },
        arrangeBlockPosition_: function(e) {
            for (var t, n = C.Constants.BLOCK_Y_COORDINATE, o = 0; e.childNodes && o < e.childNodes.length; o++)
                1 === (t = e.childNodes[o]).nodeType && (t.setAttribute("x", t.getAttribute("x") || C.Constants.BLOCK_X_COORDINATE),
                t.setAttribute("y", t.getAttribute("y") || n),
                n = t.getAttribute("height") ? n + (+t.getAttribute("height") + 20) : n + C.Constants.BLOCK_Y_COORDINATE_INTERVAL)
        },
        checkGoalCondition_: function() {
            this.currentLevel.checkSuccess() && (z.removeChangeListener(this.changeListener_),
            this.changeListener_ = null,
            this.game.successResult.show(new C.LevelResult(!0,null,{
                allowRetry: !1,
                graphic: "#result-puzzle"
            })))
        },
        highlightBlock: function(e) {
            if (e) {
                var t = e.match(/^block_id_(\d+)$/);
                t && (e = t[1])
            }
            z.mainWorkspace.highlightBlock(e)
        },
        toggleExecution: function(e) {
            e || this.highlightBlock(null),
            z.mainWorkspace.traceOn(e),
            z.mainWorkspace.setEnableToolbox(!e),
            z.readOnly = e
        },
        getCode: function() {
            return z.JavaScript.workspaceToCode()
        },
        getUserCode: function() {
            var e = this.getCode();
            return console.log(e),
            e.replace(/(,\s*)?'block_id_\d+'(,\s*)?/g, "").replace(/\s*api\.highlightLoop\('\d+'\);/gm, "").replace(/api\./g, "").replace(/\bcount2\b/g, "j").replace(/\bcount\b/g, "i").replace(/\s*$/gm, "")
        },
        getTopBlocks: function(e) {
            return z.mainWorkspace.getTopBlocks(e)
        },
        getUserBlocks: function() {
            return z.mainWorkspace.getAllBlocks().filter(function(e) {
                return !e.disabled && e.isEditable() && "when_run" !== e.type
            })
        },
        getCountableBlocks: function() {
            return z.mainWorkspace.getAllBlocks().filter(function(e) {
                return !e.disabled && "when_run" !== e.type
            })
        },
        hasEmptyContainerBlocks: function() {
            for (var e = z.mainWorkspace.getAllBlocks(), t = 0; t < e.length; t++)
                for (var n = e[t], o = 0; o < n.inputList.length; o++) {
                    var r = n.inputList[o];
                    if (r.type == z.NEXT_STATEMENT && !r.connection.targetConnection)
                        return !0
                }
            return !1
        },
        hasExtraTopBlocks: function() {
            for (var e = z.mainWorkspace.getTopBlocks(), t = 0; t < e.length; t++)
                if (!e[t].disabled && e[t].previousConnection)
                    return !0;
            return !1
        },
        getMissingBlocks: function(e) {
            var t = [];
            if (!e.length)
                return t;
            for (var n = this.getUserBlocks(), o = 0; o < e.length; o++) {
                for (var r = e[o], i = !1, s = 0; s < n.length; s++)
                    if (n[s].type === r) {
                        i = !0;
                        break
                    }
                i || t.push(r)
            }
            return t
        }
    },
    C.Constants = {
        BLOCK_X_COORDINATE: 20,
        BLOCK_Y_COORDINATE: 24,
        BLOCK_Y_COORDINATE_INTERVAL: 170,
        LEVEL_USABLE_ROWS: 12,
        LEVEL_USABLE_MAX_COLS: 7,
        LEVEL_USABLE_MIN_COLS: 5,
        BLOCKLY_MIN_WIDTH: 220,
        EDGE_MIN_WIDTH: 48,
        SCENE_TOGGLE_DURATION: 300,
        SCENE_TOGGLE_MIN_DRAG: 20
    },
    C.Result = function(e, t) {
        this.el = e,
        this.game = t,
        this.codeEl = e.querySelector(".result__code"),
        this.detailsEl = e.querySelector(".result__details"),
        this.graphicEl = e.querySelector(".result__graphic-type"),
        this.missingBlockEl = e.querySelector(".result__missing-block"),
        this.missingBlockImageEl = e.querySelector(".result__missing-block-image"),
        this.retryButtonEl = e.querySelector(".result__button--retry"),
        this.codeLinkEl = e.querySelector(".result__code-link"),
        this.continueText = (this.continueButtonEl = e.querySelector(".result__button--continue")) && this.continueButtonEl.textContent,
        this.finishText = C.I18n.getMsg("CL_finish"),
        this.defaultGraphic = this.graphicEl.getAttribute("xlink:href"),
        this.bindEvents_()
    }
    ,
    C.Result.prototype = {
        bindEvents_: function() {
            this.retryButtonEl && this.retryButtonEl.addEventListener("click", this.onRetry.bind(this), !1),
            this.continueButtonEl && this.continueButtonEl.addEventListener("click", this.onContinue.bind(this), !1),
            this.codeLinkEl && this.codeLinkEl.addEventListener("click", this.onShowCode.bind(this), !1)
        },
        show: function(e) {
            this.detailsEl.style.display = e.message ? "block" : "none",
            this.detailsEl.textContent = e.message || "",
            this.retryButtonEl && (this.retryButtonEl.style.display = e.allowRetry ? "inline-block" : "none");
            var t = e.missingBlocks[0];
            this.missingBlockEl.style.display = t ? "block" : "none",
            t && this.missingBlockImageEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#block-" + t),
            this.graphicEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e.graphic || this.defaultGraphic),
            this.continueButtonEl && (this.continueButtonEl.textContent = e.isFinalLevel ? this.finishText : this.continueText),
            this.codeEl && (this.codeLinkEl.hidden = !e.code,
            this.codeEl.value = e.code || ""),
            this.el.classList.remove("result--show-code"),
            this.el.classList.add("is-visible"),
            k.triggerEvent(e.levelComplete ? "computer_success" : "computer_fail")
        },
        hide: function() {
            this.el.classList.remove("is-visible")
        },
        onRetry: function() {
            this.hide(),
            this.game.restartLevel()
        },
        onContinue: function() {
            this.hide(),
            this.game.bumpLevel()
        },
        onShowCode: function() {
            this.el.classList.add("result--show-code")
        }
    },
    C.MapData = "T     TT;       T;  TTTT T;  TX T  ;  TTTT T;T T  T  ; TTTTT Y;  T  T  ;T TTTT  ;  TX T T;  TTTT  ;T      T;T TX  TT;TTTT  T ;T  TTT T;T X   T ;TTTT TT ;T X  T T;T   T TT; T    TT;T     T ;T     TT;T     TT;T     TT;T     TT;T  S   T; X     T;  T    T;T   T TT;TT T   T;T  TT  T;T T TTTT;T  T  TT;TT T  TT; X TT  T; T  TT T;  T  TTT;TTTT  TT;TY TTX T;T  T   T;TTTTT  T;  XTT  T;       T;T TTTT T; T     T;T XTTT T;   T T T;T    T T; T T   T;     TTT;TTX T  T; T   T T;    TY T; T  T  T;TT  T TT;T X  T T;  T T  T;TT X   T;T   A TT;TT X T T;       T;  T    T;   T   T;T TTTTTT;   TT  T;T T    T;TTT T TT; T     T;   T   T".split(";"),
    C.TileType = {
        TREE: "T",
        EMPTY: " ",
        POI: "X",
        SLED: "S",
        TUTORIAL_ARROW: "A",
        YETI: "Y"
    },
    C.Direction = {
        NORTH: 0,
        EAST: 90,
        SOUTH: 180,
        WEST: 270
    },
    C.Map = function() {
        this.rows_ = C.MapData.map(function(e) {
            return e.replace("X", " ")
        }),
        this.height = this.rows_.length,
        this.width = this.rows_[0].length
    }
    ,
    C.Map.prototype.iterateTiles = function(e, t, n) {
        for (e = Math.max(e, 0),
        t = Math.min(t, this.height); e < t; e++)
            for (var o = this.width - 1; 0 <= o; o--)
                n((this.rows_[e] || "")[o] || " ", o, e)
    }
    ,
    C.Map.prototype.getTile = function(e, t) {
        return 0 > e || e >= this.width || 0 > t || t >= this.height ? null : (this.rows_[t] || "")[e] || " "
    }
    ,
    C.Map.LEVEL_BOUNDS = [],
    C.Map.LEVEL_BOUNDS.unshift(1),
    C.Map.LEVEL_BOUNDS.unshift(C.Map.LEVEL_BOUNDS[0] + 6),
    C.Map.LEVEL_BOUNDS.unshift(C.Map.LEVEL_BOUNDS[0] + 3),
    C.Map.LEVEL_BOUNDS.unshift(C.Map.LEVEL_BOUNDS[0] + 2),
    C.Map.LEVEL_BOUNDS.unshift(C.Map.LEVEL_BOUNDS[0] + 14),
    C.Map.LEVEL_BOUNDS.unshift(C.Map.LEVEL_BOUNDS[0] + 6),
    C.Map.LEVEL_BOUNDS.unshift(C.Map.LEVEL_BOUNDS[0] + 5),
    C.Map.LEVEL_BOUNDS.unshift(C.Map.LEVEL_BOUNDS[0] + 4),
    C.Map.LEVEL_BOUNDS.unshift(C.Map.LEVEL_BOUNDS[0] + 3),
    C.Map.LEVEL_BOUNDS.unshift(C.Map.LEVEL_BOUNDS[0] + 6),
    C.Map.LEVEL_BOUNDS.unshift(C.Map.LEVEL_BOUNDS[0] + 3),
    C.Map.LEVEL_BOUNDS.unshift(C.Map.LEVEL_BOUNDS[0] + 3),
    C.shared = {},
    C.shared.utils = function() {
        return {
            animWithClass: function(e, t, n) {
                e.length || (e = [e]),
                (e = Array.prototype.slice.call(e)).forEach(e=>{
                    e.classList.add(t);
                    const o = ()=>{
                        e.classList.remove(t),
                        e.removeEventListener("animationend", o),
                        e.removeEventListener("transitionend", o),
                        n && (n(),
                        n = null)
                    }
                    ;
                    e.addEventListener("animationend", o),
                    e.addEventListener("transitionend", o)
                }
                )
            },
            unwrapElement: function(e) {
                return e instanceof Node ? e : e[0] || null
            },
            computedTransform: function(e) {
                const t = window.getComputedStyle(e);
                let n, o;
                if (["", "-webkit-", "-moz-", "-ms-", "-o-"].some(e=>!!(e = t.getPropertyValue(e + "transform")) && (n = e,
                !0)),
                "none" === n)
                    return {
                        x: 0,
                        y: 0,
                        rotate: 0
                    };
                try {
                    o = n.split("(")[1].split(")")[0].split(",").map(e=>+e)
                } catch (e) {
                    throw new TypeError("Couldn't split transform, expected matrix(...)")
                }
                return {
                    x: o[4],
                    y: o[5],
                    rotate: 180 / Math.PI * Math.atan2(o[1], o[0])
                }
            },
            onWebAnimationFinished: function(e, t) {
                const n = e.finished;
                n && n.then ? n.then(t) : e.addEventListener("finish", t, !1)
            },
            playerFinished: function(e) {
                return !e || "finished" === e.playState
            },
            get touchEnabled() {
                return !!("standalone"in navigator || window.matchMedia("(pointer: coarse)").matches) || !window.matchMedia("(pointer: fine)").matches && ("ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch)
            },
            SmartValue: class {
                constructor(e) {
                    this.value = e
                }
                change(e) {
                    const t = this.value !== e;
                    return this.value = e,
                    t
                }
                moveToTarget(e, t) {
                    let n = +this.value;
                    if (this.value !== n)
                        throw new TypeError("SmartValue does not contain a number");
                    return n < e ? n = Math.min(e, n + t) : n > e && (n = Math.max(e, n - t)),
                    this.value = n,
                    this
                }
            }
        }
    }(),
    C.ResultType = {
        UNSET: "UNSET",
        SUCCESS: "SUCCESS",
        TIMEOUT: "TIMEOUT",
        ERROR: "ERROR"
    },
    C.BlockRunnerState = {
        NOT_ANIMATING: "NOT_ANIMATING",
        ANIMATING: "ANIMATING",
        REWINDING: "REWINDING"
    },
    C.BlockRunner = function(e, t) {
        this.api = new C.BlockRunnerApi(e,this),
        this.blockly = t,
        t = new KeyframeEffect(document.body,[],0),
        this.player = document.timeline.play(t),
        this.scene = e,
        z.JavaScript.INFINITE_LOOP_TRAP = "  api.highlightLoop(%1);\n",
        this.reset_()
    }
    ,
    C.BlockRunner.HIGHLIGHT_SYMBOL = "CL_highlight",
    C.BlockRunner.INJECTED_HIGHLIGHT_DURATION = 150,
    C.BlockRunner.prototype = {
        reset_: function() {
            this.animationQueue_ = [],
            this.state_ = C.BlockRunnerState.NOT_ANIMATING,
            this.isTerminated_ = !1,
            this.executeResult = C.ResultType.UNSET,
            this.levelResult = this.lastBlockId_ = null,
            this.player.cancel(),
            this.ticks = 100
        },
        execute: function() {
            if (this.state_ === C.BlockRunnerState.NOT_ANIMATING) {
                this.reset_();
                var e = this.blockly.getCode();
                try {
                    this.evalWith_(e, {
                        api: this.api
                    })
                } catch (e) {
                    this.executeResult = C.ResultType.ERROR,
                    console.warn(e)
                }
                this.executeResult === C.ResultType.UNSET && (this.executeResult = C.ResultType.ERROR,
                this.queueAnimation(this.scene.player.lose())),
                this.levelResult = this.scene.level.processResult(this.executeResult === C.ResultType.SUCCESS, this.blockly),
                this.levelResult.doNotAnimate ? this.reportExecution_() : this.runAnimations_(),
                k.triggerEvent("computer_play")
            }
        },
        queueAnimation: function(e, t) {
            t && (t = this.highlightAnimation_(t, e.activeDuration),
            e = this.upgradeToGroup_(e, t)),
            this.animationQueue_.push(e)
        },
        upgradeToGroup_: function(e, t) {
            return t ? new GroupEffect([t, new SequenceEffect([e])]) : e
        },
        injectHighlight: function(e) {
            var t = C.BlockRunner.INJECTED_HIGHLIGHT_DURATION
              , n = this.animationQueue_[this.animationQueue_.length - 1];
            if (n instanceof GroupEffect) {
                var o = n.children
                  , r = n.children[n.children.length - 1];
                r[C.BlockRunner.HIGHLIGHT_SYMBOL] && (r = new GroupEffect([r],{
                    duration: r.activeDuration - t,
                    fill: "none"
                }),
                o[o.length - 1] = r),
                e = this.highlightAnimation_(e, {
                    duration: t,
                    delay: n.activeDuration - t
                }),
                o.push(e),
                n = new GroupEffect(o),
                this.animationQueue_[this.animationQueue_.length - 1] = n
            } else
                e = this.highlightAnimation_(e, t),
                this.animationQueue_.push(e)
        },
        highlightAnimation_: function(e, t) {
            return (t = new KeyframeEffect(null,[],t)).onsample = this.highlightEffect_.bind(this, e),
            t[C.BlockRunner.HIGHLIGHT_SYMBOL] = !0,
            t
        },
        highlightEffect_: function(e, t) {
            null != t && e !== this.lastBlockId_ && (this.lastBlockId_ = e,
            this.blockly.highlightBlock(e))
        },
        beforeAnimations_: function() {
            this.blockly.toggleExecution(!0)
        },
        onFinishAnimations_: function() {
            switch (this.state_) {
            case C.BlockRunnerState.NOT_ANIMATING:
                return;
            case C.BlockRunnerState.ANIMATING:
                this.reportExecution_();
                break;
            case C.BlockRunnerState.REWINDING:
                this.scene.portraitToggleScene(!1),
                k.triggerEvent("computer_rewind_stop")
            }
            C.PlayerSound.reset(),
            this.blockly.toggleExecution(!1),
            this.state_ = C.BlockRunnerState.NOT_ANIMATING,
            this.lastBlockId_ = null
        },
        runAnimations_: function() {
            this.beforeAnimations_();
            var e = new SequenceEffect(this.animationQueue_);
            this.player = document.timeline.play(e),
            C.shared.utils.onWebAnimationFinished(this.player, this.onFinishAnimations_.bind(this)),
            this.player.currentTime = 0,
            this.player.playbackRate = this.levelResult.levelComplete ? 1 : 1 / 1.5,
            this.player.play(),
            this.state_ = C.BlockRunnerState.ANIMATING
        },
        resetAnimation: function() {
            this.player.cancel()
        },
        reportExecution_: function() {
            this.scene.onFinishExecution(this.levelResult)
        },
        isTerminated: function() {
            return this.isTerminated_
        },
        terminateWithResult: function(e) {
            this.isTerminated_ || (this.executeResult = e,
            this.isTerminated_ = !0)
        },
        evalWith_: function(e, t) {
            function n() {
                return Function.apply(this, r)
            }
            var o, r = [], i = [];
            for (o in t)
                r.push(o),
                i.push(t[o]);
            return r.push(e),
            n.prototype = Function.prototype,
            (new n).apply(null, i)
        }
    },
    C.BlockRunnerApi = function(e, t) {
        this.scene = e,
        this.runner = t
    }
    ,
    C.BlockRunnerApi.createApiMethod = function(e) {
        return function() {
            this.runner.isTerminated() || e.apply(this, arguments)
        }
    }
    ,
    C.BlockRunnerApi.prototype = {
        moveNorth: C.BlockRunnerApi.createApiMethod(function(e) {
            this.move_(C.Direction.NORTH, e)
        }),
        moveWest: C.BlockRunnerApi.createApiMethod(function(e) {
            this.move_(C.Direction.WEST, e)
        }),
        moveSouth: C.BlockRunnerApi.createApiMethod(function(e) {
            this.move_(C.Direction.SOUTH, e)
        }),
        moveEast: C.BlockRunnerApi.createApiMethod(function(e) {
            this.move_(C.Direction.EAST, e)
        }),
        moveJump: C.BlockRunnerApi.createApiMethod(function(e, t, n) {
            this.jump_(C.Direction[n.toUpperCase()], e, t)
        }),
        highlightLoop: C.BlockRunnerApi.createApiMethod(function(e) {
            this.runner.injectHighlight(e)
        }),
        queueMoveAnimations_: function(e, t, n) {
            var o = this.scene.player;
            for (n ? this.runner.queueAnimation(n, t) : (this.runner.queueAnimation(o.lose(e), t),
            this.runner.terminateWithResult(C.ResultType.ERROR)),
            n = e = 0; t = this.scene.presents[n]; n++)
                t.x === o.x && t.y === o.y && (this.runner.queueAnimation(o.pickUp(t)),
                e++);
            e === this.scene.presents.length && this.runner.terminateWithResult(C.ResultType.SUCCESS)
        },
        move_: function(e, t) {
            this.queueMoveAnimations_(e, t, this.scene.player.move(e))
        },
        jump_: function(e, t, n) {
            this.queueMoveAnimations_(e, t, this.scene.player.jump(n, e))
        }
    },
    C.shared.pools = function() {
        const e = [];
        return {
            mixin(t, n) {
                function o(e) {
                    n.fixed || 0 !== t.pool_.length || t.pool(e)
                }
                function r(e, t) {
                    return e && e.onInit.apply(e, Array.prototype.slice.call(t, 1)),
                    e || null
                }
                n = n || {},
                t.pool_ = [],
                e.push(t),
                t.pop = function(e) {
                    return o(e),
                    r(t.pool_.shift(), arguments)
                }
                ,
                t.popRandom = function(e) {
                    o(e);
                    const n = Math.floor(Math.random() * t.pool_.length)
                      , i = t.pool_[n]
                      , s = t.pool_.pop();
                    return s && i !== s && (t.pool_[n] = s),
                    r(i, arguments)
                }
                ,
                t.pool = function(e) {
                    e = new t(e),
                    t.pool_.push(e)
                }
                ,
                t.push = function(e) {
                    e.onDispose && e.onDispose(),
                    t.pool_.push(e)
                }
                ,
                t.prototype.remove = function() {
                    t.push(this)
                }
                ,
                t.prototype.onInit = t.prototype.onInit || function() {}
                ,
                t.prototype.onDispose = t.prototype.onDispose || function() {}
            },
            empty() {
                for (let t = 0; t < e.length; t++)
                    e[t].pool_ = []
            }
        }
    }(),
    C.shared.pools.PoolType = function() {}
    ,
    C.shared.pools.PoolType.onInit = function() {}
    ,
    C.shared.pools.PoolType.onDispose = function() {}
    ,
    C.shared.pools.PoolType.remove = function() {}
    ,
    C.Square = function(e) {
        this.el = null,
        this.owner = e,
        this.y = this.x = null
    }
    ,
    C.Square.prototype.onInit = function(t, n) {
        this.x = t,
        this.y = n,
        t *= C.Scene.TILE_OUTER_SIZE,
        n *= C.Scene.TILE_OUTER_SIZE,
        e.style.setStyle(this.el, "transform", "translate(" + t + "em, " + n + "em)"),
        this.el.style.display = "block"
    }
    ,
    C.Square.prototype.onDispose = function() {
        this.el.style.display = "none"
    }
    ,
    C.EmptySquare = function(t) {
        C.Square.call(this, t),
        this.el = e.dom.createDom("div", "square square--empty"),
        t.bgEl.appendChild(this.el)
    }
    ,
    e.inherits(C.EmptySquare, C.Square),
    C.shared.pools.mixin(C.EmptySquare),
    C.TreeSquare = function(e) {
        C.Square.call(this, e),
        this.el = z.createSvgElement("svg", {
            class: "square square--tree"
        }, null),
        z.createSvgElement("use", null, this.el).setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#maze-tree"),
        e.bgEl.appendChild(this.el)
    }
    ,
    e.inherits(C.TreeSquare, C.Square),
    C.shared.pools.mixin(C.TreeSquare),
    C.DecoratedSquare = function(e) {
        C.Square.call(this, e),
        this.el = z.createSvgElement("svg", {
            class: "square square--decorated"
        }, null),
        this.useEl_ = z.createSvgElement("use", null, this.el),
        e.bgEl.appendChild(this.el)
    }
    ,
    e.inherits(C.DecoratedSquare, C.Square),
    C.shared.pools.mixin(C.DecoratedSquare),
    C.DecoratedSquare.DECORATIONS = {},
    C.DecoratedSquare.DECORATIONS[C.TileType.SLED] = "sled",
    C.DecoratedSquare.DECORATIONS[C.TileType.TUTORIAL_ARROW] = "arrow",
    C.DecoratedSquare.DECORATIONS[C.TileType.YETI] = "yeti",
    C.DecoratedSquare.prototype.onInit = function(e, t, n) {
        if (C.Square.prototype.onInit.call(this, e, t),
        this.decoration = C.DecoratedSquare.DECORATIONS[n],
        !this.decoration)
            throw Error("Unknown decoration: " + n);
        this.el.setAttribute("class", "square square--decorated square--" + this.decoration),
        this.useEl_.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#maze-" + this.decoration),
        this.el.style.display = "block"
    }
    ,
    C.InputEvent = {},
    function() {
        let e = "mousedown"
          , t = "mousemove"
          , n = "mouseup mouseout"
          , o = "mouseup";
        window.PointerEvent ? (e = "pointerdown",
        t = "pointermove",
        n = "pointerup pointerout",
        o = "pointerup") : C.shared.utils.touchEnabled && (e += " touchstart",
        t += " touchmove",
        n += " touchend touchleave touchcancel",
        o += " touchend"),
        C.InputEvent = {
            CANCEL: n,
            START: e,
            MOVE: t,
            END: o,
            normalize: e=>(e = e.originalEvent ? e.originalEvent : e).touches ? e.touches[0] : e
        }
    }(),
    C.PlayerSound = {
        isWalking_: !1,
        isLost_: !1,
        isJumping_: !1,
        disabled_: !1,
        reset: function() {
            C.PlayerSound.isLost_ = !1,
            C.PlayerSound.isJumping_ = !1,
            C.PlayerSound.disabled_ = !1,
            C.PlayerSound.stop_()
        },
        walk: function() {
            var e = new KeyframeEffect(null,[],100);
            return e.onsample = C.PlayerSound.walk_,
            e
        },
        jump: function() {
            var e = new KeyframeEffect(null,[],100);
            return e.onsample = C.PlayerSound.jump_,
            e
        },
        stop: function() {
            var e = new KeyframeEffect(null,[],100);
            return e.onsample = C.PlayerSound.stop_,
            e
        },
        lost: function() {
            var e = new KeyframeEffect(null,[],100);
            return e.onsample = C.PlayerSound.lost_,
            e
        },
        disable: function() {
            C.PlayerSound.disabled_ = !0
        },
        walk_: function() {
            C.PlayerSound.disabled_ || C.PlayerSound.isWalking_ || (C.PlayerSound.isWalking_ = !0,
            k.triggerEvent("computer_walk_start"))
        },
        jump_: function() {
            C.PlayerSound.disabled_ || C.PlayerSound.isJumping_ || (C.PlayerSound.isJumping_ = !0,
            C.PlayerSound.stop_(),
            k.triggerEvent("computer_success"))
        },
        stop_: function() {
            !C.PlayerSound.disabled_ && C.PlayerSound.isWalking_ && (C.PlayerSound.isWalking_ = !1,
            k.triggerEvent("computer_walk_stop"))
        },
        lost_: function() {
            C.PlayerSound.disabled_ || C.PlayerSound.isLost_ || (C.PlayerSound.isLost_ = !0,
            C.PlayerSound.stop_(),
            k.triggerEvent("computer_huh"))
        }
    },
    C.Player = function(e, t) {
        this.direction = 0,
        this.el = e,
        this.rotationEl = e.querySelector(".player__rotation"),
        this.elfEl = e.querySelector(".player__elf"),
        this.spriteEl = e.querySelector(".player__elf-sprite"),
        this.jumpEl = e.querySelector(".player__jump-sprite"),
        this.victoryEl = e.querySelector(".player__victory"),
        this.lostEl = e.querySelector(".player__lost"),
        this.isLost = !1,
        this.level = null,
        this.map = t,
        this.y = this.x = this.startDirection = 0,
        this.render_()
    }
    ,
    C.Player.MOVE_DURATION = 400,
    C.Player.JUMP_DURATION = 1e3,
    C.Player.ROTATE_DURATION = 200,
    C.Player.prototype = {
        setLevel: function(e) {
            this.startDirection = this.direction,
            this.level = e,
            this.restartLevel(),
            this.render_()
        },
        restartLevel: function() {
            this.direction = this.startDirection,
            this.x = this.level.playerX,
            this.y = this.level.playerY
        },
        render_: function() {
            e.style.setStyle(this.el, "transform", this.getTranslation_(this.x, this.y)),
            e.style.setStyle(this.rotationEl, "transform", "rotate(" + this.direction + "deg)")
        },
        move: function(e) {
            var t = this.direction
              , n = this.x
              , o = this.y
              , r = e / 180 * Math.PI
              , i = this.x + Math.round(Math.sin(r));
            if (r = this.y - Math.round(Math.cos(r)),
            this.map.getTile(i, r) !== C.TileType.TREE && !this.level.isOutsideBounds(i, r))
                return this.direction = e,
                this.x = i,
                this.y = r,
                e = new SequenceEffect([C.PlayerSound.walk(), new GroupEffect([new KeyframeEffect(this.spriteEl,[{
                    opacity: 0
                }, {
                    opacity: 1
                }],{
                    fill: "forwards"
                }), new KeyframeEffect(this.jumpEl,[{
                    opacity: 1
                }, {
                    opacity: 0
                }],{
                    fill: "forwards"
                }), this.walkAnimation_(), new KeyframeEffect(this.el,[{
                    transform: this.getTranslation_(n, o)
                }, {
                    transform: this.getTranslation_(this.x, this.y)
                }],{
                    duration: C.Player.MOVE_DURATION,
                    fill: "forwards"
                })],{
                    duration: C.Player.MOVE_DURATION
                })],{
                    duration: C.Player.MOVE_DURATION
                }),
                this.maybeRotateAnimation_(e, t)
        },
        jump: function(e, t) {
            e += 1;
            var n = this.direction
              , o = this.x
              , r = this.y
              , i = t / 180 * Math.PI
              , s = this.x + Math.round(Math.sin(i)) * e;
            if (e = this.y - Math.round(Math.cos(i)) * e,
            this.map.getTile(s, e) !== C.TileType.TREE && !this.level.isOutsideBounds(s, e))
                return this.direction = t,
                this.x = s,
                this.y = e,
                t = new SequenceEffect([new GroupEffect([C.PlayerSound.jump(), new KeyframeEffect(this.spriteEl,[{
                    opacity: 1
                }, {
                    opacity: 0
                }],{
                    fill: "forwards"
                }), new KeyframeEffect(this.jumpEl,[{
                    opacity: 0
                }, {
                    opacity: 1
                }],{
                    fill: "forwards"
                }), this.jumpAnimation_(), new KeyframeEffect(this.el,[{
                    transform: this.getTranslation_(o, r)
                }, {
                    transform: this.getTranslation_(this.x, this.y)
                }],{
                    duration: C.Player.MOVE_DURATION,
                    fill: "forwards"
                })],{
                    duration: C.Player.MOVE_DURATION
                })],{
                    duration: C.Player.MOVE_DURATION
                }),
                this.maybeRotateAnimation_(t, n)
        },
        lose: function(e) {
            var t = new GroupEffect([C.PlayerSound.lost(), new KeyframeEffect(this.lostEl,[{
                opacity: 0,
                transform: "scale(0.5)"
            }, {
                opacity: 1,
                transform: "scale(1)",
                offset: .3
            }, {
                opacity: 1,
                transform: "scale(1)"
            }],{
                duration: 800,
                fill: "forwards"
            })]);
            if (null != e) {
                var n = this.direction;
                this.direction = e;
                var o = e / 180 * Math.PI;
                e = this.x + .2 * Math.round(Math.sin(o)),
                o = this.y - .2 * Math.round(Math.cos(o)),
                t = new SequenceEffect([new KeyframeEffect(this.el,[{
                    transform: this.getTranslation_(this.x, this.y)
                }, {
                    transform: this.getTranslation_(e, o)
                }, {
                    transform: this.getTranslation_(this.x, this.y)
                }],{
                    duration: .4 * C.Player.MOVE_DURATION
                }), t]),
                t = this.maybeRotateAnimation_(t, n)
            }
            return t
        },
        maybeRotateAnimation_: function(e, t) {
            return t === this.direction ? e : (t < this.direction && 180 < this.direction - t ? t += 360 : t > this.direction && 180 < t - this.direction && (t -= 360),
            new SequenceEffect([new GroupEffect([C.PlayerSound.stop(), new KeyframeEffect(this.rotationEl,[{
                transform: "translateZ(0) rotate(" + t + "deg)"
            }, {
                transform: "translateZ(0) rotate(" + this.direction + "deg)"
            }],{
                duration: C.Player.ROTATE_DURATION,
                fill: "forwards"
            })]), e]))
        },
        pickUp: function(e) {
            return new GroupEffect([C.PlayerSound.stop(), new KeyframeEffect(e.el,[{
                opacity: 1
            }, {
                opacity: 0
            }],{
                fill: "forwards"
            }), new KeyframeEffect(this.victoryEl,[{
                opacity: 0
            }, {
                opacity: 1
            }],{
                fill: "forwards"
            }), new KeyframeEffect(this.spriteEl,[{
                opacity: 0
            }, {
                opacity: 1
            }],{
                fill: "forwards"
            })],{
                duration: 800
            })
        },
        walkAnimation_: function() {
            return new KeyframeEffect(this.spriteEl,[{
                transform: "translateZ(0) translate(0, 0em)"
            }, {
                transform: "translateZ(0) translate(0, -55.8em)"
            }],{
                duration: C.Player.MOVE_DURATION,
                easing: "steps(8, end)"
            })
        },
        jumpAnimation_: function() {
            return new KeyframeEffect(this.jumpEl,[{
                transform: "translateZ(0) translate(0, 0em)"
            }, {
                transform: "translateZ(0) translate(0, -133.56em)"
            }],{
                duration: C.Player.JUMP_DURATION,
                easing: "steps(15, end)"
            })
        },
        getTranslation_: function(e, t) {
            return "translateZ(0) translate(" + (e = e * C.Scene.TILE_OUTER_SIZE + 4) + "em, " + (t = t * C.Scene.TILE_OUTER_SIZE + 4) + "em)"
        }
    },
    C.Present = function(e) {
        this.el = z.createSvgElement("svg", {
            class: "present",
            viewBox: "0 0 61 40"
        }, null),
        z.createSvgElement("use", null, this.el).setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#maze-present"),
        e.presentsEl.appendChild(this.el)
    }
    ,
    C.shared.pools.mixin(C.Present),
    C.Present.prototype.onInit = function(t, n, o) {
        this.x = t,
        this.y = n,
        this.level = o,
        t *= C.Scene.TILE_OUTER_SIZE,
        n *= C.Scene.TILE_OUTER_SIZE,
        e.style.setStyle(this.el, "transform", "translate(" + t + "em, " + n + "em)"),
        this.el.style.display = "block"
    }
    ,
    C.Present.prototype.onDispose = function() {
        this.el.style.display = "none"
    }
    ,
    C.Scene = function(e, t, n) {
        this.active_ = !0,
        this.blockly_ = n,
        this.blockRunner_ = new C.BlockRunner(this,n),
        this.cachedWindowWidth_ = this.cachedWindowHeight_ = null,
        this.el_ = e,
        this.game = t,
        this.level = null,
        this.map_ = new C.Map,
        this.portraitMode_ = !1,
        this.player = new C.Player(e.querySelector(".player"),this.map_),
        this.presents = [],
        this.scaleRatio_ = 1,
        this.squares_ = [],
        this.svgEl_ = e.querySelector(".scene__svg"),
        this.tileProgress_ = 0,
        this.visible_ = !1,
        this.parentEl_ = e.parentNode,
        this.underlayEl_ = e.parentNode.querySelector(".scene-underlay"),
        this.worldEl_ = e.querySelector(".scene__world"),
        this.bgEl = e.querySelector(".scene__bg"),
        this.presentsEl = e.querySelector(".scene__presents"),
        this.buttonEl_ = e.querySelector(".scene__play"),
        this.calculateViewportHandler_ = this.calculateViewport_.bind(this, !0),
        this.onClickRun_ = this.onClickRun_.bind(this),
        this.onClickScene_ = this.onClickScene_.bind(this),
        this.onClickUnderlay_ = this.onClickUnderlay_.bind(this),
        this.createSquare_ = this.createSquare_.bind(this),
        this.cleanWorld_ = this.cleanWorld_.bind(this),
        window.addEventListener("resize", this.calculateViewportHandler_, !1),
        window.requestAnimationFrame(()=>this.calculateViewport_(!0)),
        this.calculateViewport_(),
        this.buttonEl_.addEventListener("click", this.onClickRun_, !1),
        this.el_.addEventListener("click", this.onClickScene_, !1),
        this.underlayEl_.addEventListener("click", this.onClickUnderlay_, !1)
    }
    ,
    C.Scene.VIEWPORT_TILE_MARGIN = .3,
    C.Scene.VIEWPORT_MAX_TILES_X = C.Constants.LEVEL_USABLE_MAX_COLS + 2 * C.Scene.VIEWPORT_TILE_MARGIN,
    C.Scene.VIEWPORT_MIN_TILES_X = C.Constants.LEVEL_USABLE_MIN_COLS + 1.5 * C.Scene.VIEWPORT_TILE_MARGIN,
    C.Scene.VIEWPORT_MAX_TILES_Y = C.Constants.LEVEL_USABLE_ROWS + 2 * C.Scene.VIEWPORT_TILE_MARGIN,
    C.Scene.VIEWPORT_MIN_TILES_Y = 9 + 2 * C.Scene.VIEWPORT_TILE_MARGIN,
    C.Scene.TILE_SIZE = 8,
    C.Scene.TILE_MARGIN = .4,
    C.Scene.TILE_OUTER_SIZE = C.Scene.TILE_SIZE + C.Scene.TILE_MARGIN,
    C.Scene.prototype.dispose = function() {
        window.removeEventListener("resize", this.calculateViewportHandler_, !1),
        this.buttonEl_.removeEventListener("click", this.onClickRun_, !1),
        this.el_.removeEventListener("click", this.onClickScene_, !1),
        this.underlayEl_.removeEventListener("click", this.onClickUnderlay_, !1)
    }
    ,
    C.Scene.prototype.reset = function() {
        this.level = null,
        this.cleanWorld_()
    }
    ,
    C.Scene.prototype.getPortraitMode = function() {
        return this.portraitMode_
    }
    ,
    C.Scene.prototype.createWorld_ = function() {
        for (var e, t = Number.MAX_VALUE, n = -1, o = 0; e = this.squares_[o]; o++)
            t > e.y && (t = e.y),
            n < e.y && (n = e.y);
        this.squares_.length ? (this.map_.iterateTiles(this.level.minY - 1, Math.min(t, this.level.maxY + 1), this.createSquare_),
        this.map_.iterateTiles(Math.max(n, this.level.minY - 1), this.level.maxY + 1, this.createSquare_)) : this.map_.iterateTiles(this.level.minY - 1, this.level.maxY + 1, this.createSquare_)
    }
    ,
    C.Scene.prototype.createSquare_ = function(e, t, n) {
        e === C.TileType.TREE ? this.squares_.push(C.TreeSquare.pop(this, t, n)) : e === C.TileType.EMPTY || e === C.TileType.POI ? this.squares_.push(C.EmptySquare.pop(this, t, n)) : (this.squares_.push(C.EmptySquare.pop(this, t, n)),
        this.squares_.push(C.DecoratedSquare.pop(this, t, n, e)))
    }
    ,
    C.Scene.prototype.cleanWorld_ = function() {
        this.squares_ = this.squares_.filter(function(e) {
            if (!(!this.level || e.y < this.level.minY - 1 || e.y > this.level.maxY))
                return !0;
            e.remove()
        }, this),
        this.presents = this.presents.filter(function(e) {
            if (this.level && this.level === e.level)
                return !0;
            e.remove()
        }, this)
    }
    ,
    C.Scene.prototype.setLevel = function(e) {
        var t = this.tileProgress_
          , n = !!this.level;
        this.level = e,
        this.tileProgress_ = this.map_.height - e.maxY,
        this.createWorld_(),
        this.createPresents_(),
        this.player.setLevel(e),
        this.blockRunner_.resetAnimation(),
        this.updateWorld_(),
        n && this.animateLevelTransition_(t),
        this.portraitToggleScene(!0),
        window.setTimeout(this.portraitToggleScene.bind(this, !1), 3e3)
    }
    ,
    C.Scene.prototype.restartLevel = function() {
        this.player.restartLevel(),
        this.blockRunner_.resetAnimation()
    }
    ,
    C.Scene.prototype.createPresents_ = function() {
        this.presents.forEach(function(e) {
            e.remove()
        }),
        this.presents = [],
        this.level.presents.forEach(function(e) {
            e = C.Present.pop(this, e.x, e.y, this.level),
            this.presents.push(e)
        }, this)
    }
    ,
    C.Scene.prototype.updateWorld_ = function() {
        var e = this.getWorldTransform_(this.tileProgress_);
        this.worldEl_.style.transform = e
    }
    ,
    C.Scene.prototype.animateLevelTransition_ = function(e) {
        e = this.worldEl_.animate([{
            transform: this.getWorldTransform_(e)
        }, {
            transform: this.getWorldTransform_(this.tileProgress_)
        }], {
            duration: 800,
            easing: "ease-in-out"
        }),
        C.shared.utils.onWebAnimationFinished(e, this.cleanWorld_)
    }
    ,
    C.Scene.prototype.getWorldTransform_ = function(e) {
        return `translate(0, ${-(this.map_.height - e + C.Scene.VIEWPORT_TILE_MARGIN) * C.Scene.TILE_OUTER_SIZE + C.Scene.VIEWPORT_MAX_TILES_Y * C.Scene.TILE_OUTER_SIZE}em)`
    }
    ,
    C.Scene.prototype.calculateViewport_ = function(e=!1) {
        const t = Math.max(320, window.innerWidth);
        var n = Math.max(320, window.innerHeight);
        if (e || n !== this.cachedWindowHeight_ || t !== this.cachedWindowWidth_) {
            this.cachedWindowHeight_ = n,
            this.cachedWindowWidth_ = t,
            e = n * Math.min(Math.max(t / 2 / n, C.Scene.VIEWPORT_MIN_TILES_X / C.Scene.VIEWPORT_MAX_TILES_Y), C.Scene.VIEWPORT_MAX_TILES_X / C.Scene.VIEWPORT_MIN_TILES_Y),
            n = Math.max(n / C.Scene.VIEWPORT_MAX_TILES_Y, e / C.Scene.VIEWPORT_MAX_TILES_X);
            var o = !1;
            t - this.blockly_.getToolbarWidth() - e < C.Constants.BLOCKLY_MIN_WIDTH && (o = !0,
            e = t - C.Constants.EDGE_MIN_WIDTH),
            this.portraitMode_ = o,
            this.parentEl_.classList.toggle("responsive", this.portraitMode_),
            this.width_ = e,
            this.scaleRatio_ = n / (10 * C.Scene.TILE_OUTER_SIZE),
            this.el_.style.fontSize = 10 * this.scaleRatio_ + "px",
            this.el_.style.width = e + "px"
        }
    }
    ,
    C.Scene.prototype.onClickScene_ = function() {
        this.portraitToggleScene(!0, !0)
    }
    ,
    C.Scene.prototype.onClickUnderlay_ = function() {
        this.portraitToggleScene(!1, !0)
    }
    ,
    C.Scene.prototype.portraitToggleScene = function(e, t=!1) {
        t && this.game.dismissTutorial("codelab_tray.mp4"),
        this.parentEl_.classList.toggle("show", !e)
    }
    ,
    C.Scene.prototype.onClickRun_ = function(e) {
        e.stopPropagation(),
        this.buttonEl_.blur(),
        this.portraitMode_ ? (this.portraitToggleScene(!0),
        window.setTimeout(this.blockRunner_.execute.bind(this.blockRunner_), C.Constants.SCENE_TOGGLE_DURATION)) : this.blockRunner_.execute()
    }
    ,
    C.Scene.prototype.onFinishExecution = function(e) {
        this.level === C.levels[C.levels.length - 1] && (e.graphic = e.levelComplete ? "#result-final" : null,
        e.isFinalLevel = !0),
        e.levelComplete ? this.game.successResult.show(e) : this.game.failureResult.show(e)
    }
    ,
    C.Scene.prototype.getWidth = function() {
        return this.visible_ ? this.portraitMode_ ? C.Constants.EDGE_MIN_WIDTH : this.width_ : 0
    }
    ,
    C.Scene.prototype.toggleVisibility = function(e) {
        this.visible_ = e,
        this.el_.hidden = !e,
        this.underlayEl_.hidden = !e
    }
    ,
    C.levels = [],
    C.levels.push(new C.PuzzleLevel({
        notchedEnds: !1,
        numPieces: 2,
        puzzleHeight: 300,
        puzzleColor: [296, .492, .626],
        puzzleImage: "img/puzzle-1.png",
        puzzleWidth: 200,
        startBlocks: C.blocks.blockXml("puzzle_0B", {
            height: 150
        }) + C.blocks.blockXml("puzzle_0A", {
            height: 150
        })
    })),
    C.levels.push(new C.PuzzleLevel({
        notchedEnds: !0,
        numPieces: 3,
        puzzleHeight: 300,
        puzzleColor: [171, .801, .728],
        puzzleImage: "img/puzzle-2.png",
        puzzleWidth: 200,
        startBlocks: C.blocks.blockXml("puzzle_1C", {
            height: 100
        }) + C.blocks.blockXml("puzzle_1B", {
            height: 100
        }) + C.blocks.blockXml("puzzle_1A", {
            height: 100
        })
    })),
    C.levels.push(new C.MazeLevel({
        bounds: C.Map.LEVEL_BOUNDS[0],
        idealBlockCount: 2,
        playerX: 3,
        playerY: 3,
        presents: [{
            x: 3,
            y: 1
        }],
        requiredBlocks: ["maze_moveNorth"],
        startBlocks: C.blocks.blockXml("maze_moveNorth", {
            deletable: !1
        }),
        toolbox: C.blocks.miniBlockXml("maze_moveNorth") + C.blocks.miniBlockXml("maze_moveSouth") + C.blocks.miniBlockXml("maze_moveWest") + C.blocks.miniBlockXml("maze_moveEast")
    })),
    C.levels.push(new C.MazeLevel({
        bounds: C.Map.LEVEL_BOUNDS[1],
        idealBlockCount: 3,
        playerX: 3,
        playerY: 4,
        presents: [{
            x: 2,
            y: 2
        }],
        requiredBlocks: ["maze_moveNorth", "maze_moveWest"],
        toolbox: C.blocks.miniBlockXml("maze_moveNorth") + C.blocks.miniBlockXml("maze_moveSouth") + C.blocks.miniBlockXml("maze_moveWest") + C.blocks.miniBlockXml("maze_moveEast")
    })),
    C.levels.push(new C.MazeLevel({
        bounds: C.Map.LEVEL_BOUNDS[2],
        idealBlockCount: 5,
        playerX: 2,
        playerY: 5,
        presents: [{
            x: 2,
            y: 0
        }],
        requiredBlocks: ["maze_moveNorth"],
        toolbox: C.blocks.miniBlockXml("maze_moveNorth") + C.blocks.miniBlockXml("maze_moveSouth") + C.blocks.miniBlockXml("maze_moveWest") + C.blocks.miniBlockXml("maze_moveEast")
    })),
    C.levels.push(new C.MazeLevel({
        bounds: C.Map.LEVEL_BOUNDS[3],
        idealBlockCount: 2,
        playerX: 2,
        playerY: 6,
        presents: [{
            x: 2,
            y: 1
        }],
        requiredBlocks: ["controls_repeat", "maze_moveNorth"],
        startBlocks: C.blocks.blockXml("controls_repeat", null, {
            TIMES: "1"
        }, C.blocks.blockXml("maze_moveNorth")),
        toolbox: C.blocks.miniBlockXml("maze_moveNorth") + C.blocks.miniBlockXml("maze_moveSouth") + C.blocks.miniBlockXml("maze_moveWest") + C.blocks.miniBlockXml("maze_moveEast") + C.blocks.miniBlockXml("controls_repeat")
    })),
    C.levels.push(new C.MazeLevel({
        bounds: C.Map.LEVEL_BOUNDS[4],
        idealBlockCount: 8,
        playerX: 2,
        playerY: 4,
        presents: [{
            x: 2,
            y: 0
        }],
        requiredBlocks: ["maze_moveWest", "maze_moveEast", "maze_moveNorth", "controls_repeat"],
        toolbox: C.blocks.miniBlockXml("maze_moveNorth") + C.blocks.miniBlockXml("maze_moveSouth") + C.blocks.miniBlockXml("maze_moveWest") + C.blocks.miniBlockXml("maze_moveEast") + C.blocks.miniBlockXml("controls_repeat")
    })),
    C.levels.push(new C.MazeLevel({
        bounds: C.Map.LEVEL_BOUNDS[5],
        idealBlockCount: 5,
        playerX: 2,
        playerY: 4,
        presents: [{
            x: 5,
            y: 1
        }],
        requiredBlocks: ["maze_moveSouth", "maze_moveEast", "maze_moveNorth", "controls_repeat"],
        toolbox: C.blocks.miniBlockXml("maze_moveNorth") + C.blocks.miniBlockXml("maze_moveSouth") + C.blocks.miniBlockXml("maze_moveWest") + C.blocks.miniBlockXml("maze_moveEast") + C.blocks.miniBlockXml("controls_repeat")
    })),
    C.levels.push(new C.MazeLevel({
        bounds: C.Map.LEVEL_BOUNDS[6],
        idealBlockCount: 3,
        playerX: 5,
        playerY: 6,
        presents: [{
            x: 1,
            y: 2
        }],
        requiredBlocks: ["maze_moveNorth", "maze_moveWest", "controls_repeat"],
        toolbox: C.blocks.miniBlockXml("maze_moveNorth") + C.blocks.miniBlockXml("maze_moveSouth") + C.blocks.miniBlockXml("maze_moveWest") + C.blocks.miniBlockXml("maze_moveEast") + C.blocks.miniBlockXml("controls_repeat")
    })),
    C.levels.push(new C.MazeLevel({
        bounds: C.Map.LEVEL_BOUNDS[7],
        idealBlockCount: 7,
        playerX: 1,
        playerY: 8,
        presents: [{
            x: 1,
            y: 0
        }],
        requiredBlocks: ["maze_moveNorth", "maze_moveWest", "maze_moveEast", "controls_repeat"],
        toolbox: C.blocks.miniBlockXml("maze_moveNorth") + C.blocks.miniBlockXml("maze_moveSouth") + C.blocks.miniBlockXml("maze_moveWest") + C.blocks.miniBlockXml("maze_moveEast") + C.blocks.miniBlockXml("controls_repeat")
    })),
    C.levels.push(new C.MazeLevel({
        bounds: C.Map.LEVEL_BOUNDS[8],
        idealBlockCount: 1,
        playerX: 2,
        playerY: 5,
        presents: [{
            x: 2,
            y: 3
        }],
        requiredBlocks: ["controls_jump"],
        toolbox: C.blocks.miniBlockXml("maze_moveNorth") + C.blocks.miniBlockXml("maze_moveSouth") + C.blocks.miniBlockXml("maze_moveWest") + C.blocks.miniBlockXml("maze_moveEast") + C.blocks.miniBlockXml("controls_jump")
    })),
    C.levels.push(new C.MazeLevel({
        bounds: C.Map.LEVEL_BOUNDS[9],
        idealBlockCount: 2,
        playerX: 2,
        playerY: 5,
        presents: [{
            x: 3,
            y: 2
        }],
        requiredBlocks: ["controls_jump", "maze_moveEast"],
        toolbox: C.blocks.miniBlockXml("maze_moveNorth") + C.blocks.miniBlockXml("maze_moveSouth") + C.blocks.miniBlockXml("maze_moveWest") + C.blocks.miniBlockXml("maze_moveEast") + C.blocks.miniBlockXml("controls_jump")
    })),
    C.levels.push(new C.MazeLevel({
        bounds: C.Map.LEVEL_BOUNDS[10],
        idealBlockCount: 1,
        playerX: 3,
        playerY: 5,
        presents: [{
            x: 3,
            y: 2
        }],
        requiredBlocks: ["controls_jump"],
        toolbox: C.blocks.miniBlockXml("maze_moveNorth") + C.blocks.miniBlockXml("maze_moveSouth") + C.blocks.miniBlockXml("maze_moveWest") + C.blocks.miniBlockXml("maze_moveEast") + C.blocks.miniBlockXml("controls_jump")
    })),
    C.levels.push(new C.MazeLevel({
        bounds: C.Map.LEVEL_BOUNDS[11],
        idealBlockCount: 2,
        playerX: 3,
        playerY: 8,
        presents: [{
            x: 3,
            y: 2
        }],
        requiredBlocks: ["controls_jump", "controls_repeat"],
        toolbox: C.blocks.miniBlockXml("maze_moveNorth") + C.blocks.miniBlockXml("maze_moveSouth") + C.blocks.miniBlockXml("maze_moveWest") + C.blocks.miniBlockXml("maze_moveEast") + C.blocks.miniBlockXml("controls_repeat") + C.blocks.miniBlockXml("controls_jump")
    })),
    C.monkeypatches = {},
    e.dom.vendor.getVendorJsPrefix = function() {
        return e.userAgent.WEBKIT ? "webkit" : e.userAgent.GECKO ? "moz" : e.userAgent.IE ? "ms" : e.userAgent.OPERA ? "O" : null
    }
    ,
    C.Game = function(e) {
        this.blockly = new C.Blockly(e.querySelector(".blockly"),this),
        this.elem = e,
        this.level = this.levelNumber = this.frameId = null,
        this.isPlaying = !1,
        this.successResult = new C.Result(e.querySelector(".result--success"),this),
        this.failureResult = new C.Result(e.querySelector(".result--failure"),this),
        this.scene = new C.Scene(e.querySelector(".scene"),this,this.blockly),
        this.dismissUnnamedTutorial = (()=>this.dismissTutorial()),
        document.body.addEventListener("blocklyDragBlock", this.dismissUnnamedTutorial, !1),
        this.onBlur = this.onBlur.bind(this),
        this.onFocus = this.onFocus.bind(this),
        window.addEventListener("blur", this.onBlur),
        window.addEventListener("focus", this.onFocus)
    }
    ,
    C.Game.prototype.tutorialForLevel_ = function(e) {
        return "codelab_" + (2 <= e ? "maze" : "puzzle") + ".mp4"
    }
    ,
    C.Game.prototype.dismissTutorial = function(e) {
        void 0 === e && (e = this.tutorialForLevel_(this.levelNumber)),
        window.santaApp.fire("tutorial-dismiss", [e])
    }
    ,
    C.Game.prototype.dispose_ = function() {
        document.body.removeEventListener("blocklyDragBlock", this.dismissUnnamedTutorial, !1),
        window.removeEventListener("blur", this.onBlur),
        window.removeEventListener("focus", this.onFocus),
        window.cancelAnimationFrame(this.frameId),
        this.scene.dispose()
    }
    ,
    C.Game.prototype.bumpLevel = function() {
        if (this.levelNumber++,
        this.level = C.levels[this.levelNumber]) {
            window.santaApp.fire("game-score", {
                level: this.levelNumber + 1,
                maxLevel: C.levels.length
            }),
            this.elem.className = "level--" + this.level.type + " level--" + this.level.id,
            this.blockly.setLevel(this.level);
            var e = "maze" === this.level.type;
            e && this.scene.setLevel(this.level),
            this.scene.toggleVisibility(e),
            e = [this.tutorialForLevel_(this.levelNumber)],
            2 === this.levelNumber && this.scene.getPortraitMode() && e.unshift("codelab_tray.mp4"),
            window.santaApp.fire("tutorial-queue", e)
        } else
            window.santaApp.fire("game-stop", {
                level: this.levelNumber + 1
            })
    }
    ,
    C.Game.prototype.onBlur = function() {}
    ,
    C.Game.prototype.onFocus = function() {}
    ,
    C.Game.prototype.restartLevel = function() {
        "maze" === this.level.type && this.scene.restartLevel(!0)
    }
    ,
    C.Game.prototype.start = function(e=1) {
        this.restart(e),
        k.triggerEvent("computer_start")
    }
    ,
    C.Game.prototype.restart = function(e=1) {
        this.levelNumber = e - 2,
        this.scene.reset(),
        this.bumpLevel()
    }
    ,
    _globalExport = C.Game;
    window.C = C;

}
).call(self);
var Game = _globalExport;
sceneApi.preload.sounds("computer_load_sounds"),
sceneApi.preload.images("img/blank.png", "img/block-east.svg", "img/block-jump.svg", "img/block-left.svg", "img/block-north.svg", "img/block-repeat.svg", "img/block-right.svg", "img/block-south.svg", "img/block-west.svg", "img/jigsaw.png", "img/jump.svg", "img/madewithcode.svg", "img/puzzle-1.png", "img/puzzle-2.png", "img/media/sprites.png");
const game = new Game(document.getElementById("module-codelab"));
sceneApi.addEventListener("restart", e=>game.restart()),
sceneApi.config({
    orientation: "portrait",
    sound: ["music_start_scene", "computer_start"]
}),
sceneApi.ready(async e=>{
    game.start(e && e.level || 1)
});
window.sceneApi = sceneApi;
window.Game = Game;

);
