(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_0f91cd95._.js", {

"[project]/app/contexts/authProvider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthProvider": (()=>AuthProvider),
    "useAuth": (()=>useAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cookies$2d$next$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cookies-next/lib/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const checkAuth = {
                "AuthProvider.useEffect.checkAuth": async ()=>{
                    try {
                        const res = await fetch('http://localhost:3003/api/users/profile', {
                            credentials: 'include'
                        });
                        if (res.ok) setUser(await res.json());
                    } finally{
                        setLoading(false);
                    }
                }
            }["AuthProvider.useEffect.checkAuth"];
            checkAuth();
        }
    }["AuthProvider.useEffect"], []);
    const login = async (email, password)=>{
        const res = await fetch('http://localhost:3003/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email.trim(),
                password: password
            }),
            credentials: 'include'
        });
        if (!res.ok) throw new Error('Login failed');
        const data = await res.json();
        console.log('Login response:', data); // Vérifiez la structure
        setUser({
            id: data.user.id,
            username: data.user.username,
            email: data.user.email
        });
    };
    const register = async (username, email, password)=>{
        const res = await fetch('http://localhost:3003/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password
            }),
            credentials: 'include'
        });
        if (!res.ok) throw new Error('Registration failed');
        await login(email, password);
    };
    const logout = async ()=>{
        await fetch('http://localhost:3003/api/auth/logout', {
            method: 'POST',
            credentials: 'include'
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cookies$2d$next$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCookie"])('token');
        setUser(null);
        router.push('/auth/login');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            loading,
            login,
            register,
            logout
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/contexts/authProvider.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_s(AuthProvider, "J17Kp8z+0ojgAqGoY5o3BCjwWms=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) throw new Error('useAuth doit être utilisé à l\intérieur de AuthProvider');
    return context;
};
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/chakra-provider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ChakraProviders)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function ChakraProviders({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChakraProviders, {
        children: children
    }, void 0, false, {
        fileName: "[project]/app/chakra-provider.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_c = ChakraProviders;
var _c;
__turbopack_context__.k.register(_c, "ChakraProviders");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    }, specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, Error("react-stack-top-frame"), createTask(getTaskName(type)));
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/cookie/dist/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parse = parse;
exports.serialize = serialize;
/**
 * RegExp to match cookie-name in RFC 6265 sec 4.1.1
 * This refers out to the obsoleted definition of token in RFC 2616 sec 2.2
 * which has been replaced by the token definition in RFC 7230 appendix B.
 *
 * cookie-name       = token
 * token             = 1*tchar
 * tchar             = "!" / "#" / "$" / "%" / "&" / "'" /
 *                     "*" / "+" / "-" / "." / "^" / "_" /
 *                     "`" / "|" / "~" / DIGIT / ALPHA
 *
 * Note: Allowing more characters - https://github.com/jshttp/cookie/issues/191
 * Allow same range as cookie value, except `=`, which delimits end of name.
 */ const cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
/**
 * RegExp to match cookie-value in RFC 6265 sec 4.1.1
 *
 * cookie-value      = *cookie-octet / ( DQUOTE *cookie-octet DQUOTE )
 * cookie-octet      = %x21 / %x23-2B / %x2D-3A / %x3C-5B / %x5D-7E
 *                     ; US-ASCII characters excluding CTLs,
 *                     ; whitespace DQUOTE, comma, semicolon,
 *                     ; and backslash
 *
 * Allowing more characters: https://github.com/jshttp/cookie/issues/191
 * Comma, backslash, and DQUOTE are not part of the parsing algorithm.
 */ const cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
/**
 * RegExp to match domain-value in RFC 6265 sec 4.1.1
 *
 * domain-value      = <subdomain>
 *                     ; defined in [RFC1034], Section 3.5, as
 *                     ; enhanced by [RFC1123], Section 2.1
 * <subdomain>       = <label> | <subdomain> "." <label>
 * <label>           = <let-dig> [ [ <ldh-str> ] <let-dig> ]
 *                     Labels must be 63 characters or less.
 *                     'let-dig' not 'letter' in the first char, per RFC1123
 * <ldh-str>         = <let-dig-hyp> | <let-dig-hyp> <ldh-str>
 * <let-dig-hyp>     = <let-dig> | "-"
 * <let-dig>         = <letter> | <digit>
 * <letter>          = any one of the 52 alphabetic characters A through Z in
 *                     upper case and a through z in lower case
 * <digit>           = any one of the ten digits 0 through 9
 *
 * Keep support for leading dot: https://github.com/jshttp/cookie/issues/173
 *
 * > (Note that a leading %x2E ("."), if present, is ignored even though that
 * character is not permitted, but a trailing %x2E ("."), if present, will
 * cause the user agent to ignore the attribute.)
 */ const domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
/**
 * RegExp to match path-value in RFC 6265 sec 4.1.1
 *
 * path-value        = <any CHAR except CTLs or ";">
 * CHAR              = %x01-7F
 *                     ; defined in RFC 5234 appendix B.1
 */ const pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
const __toString = Object.prototype.toString;
const NullObject = /* @__PURE__ */ (()=>{
    const C = function() {};
    C.prototype = Object.create(null);
    return C;
})();
/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 */ function parse(str, options) {
    const obj = new NullObject();
    const len = str.length;
    // RFC 6265 sec 4.1.1, RFC 2616 2.2 defines a cookie name consists of one char minimum, plus '='.
    if (len < 2) return obj;
    const dec = options?.decode || decode;
    let index = 0;
    do {
        const eqIdx = str.indexOf("=", index);
        if (eqIdx === -1) break; // No more cookie pairs.
        const colonIdx = str.indexOf(";", index);
        const endIdx = colonIdx === -1 ? len : colonIdx;
        if (eqIdx > endIdx) {
            // backtrack on prior semicolon
            index = str.lastIndexOf(";", eqIdx - 1) + 1;
            continue;
        }
        const keyStartIdx = startIndex(str, index, eqIdx);
        const keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
        const key = str.slice(keyStartIdx, keyEndIdx);
        // only assign once
        if (obj[key] === undefined) {
            let valStartIdx = startIndex(str, eqIdx + 1, endIdx);
            let valEndIdx = endIndex(str, endIdx, valStartIdx);
            const value = dec(str.slice(valStartIdx, valEndIdx));
            obj[key] = value;
        }
        index = endIdx + 1;
    }while (index < len)
    return obj;
}
function startIndex(str, index, max) {
    do {
        const code = str.charCodeAt(index);
        if (code !== 0x20 /*   */  && code !== 0x09 /* \t */ ) return index;
    }while (++index < max)
    return max;
}
function endIndex(str, index, min) {
    while(index > min){
        const code = str.charCodeAt(--index);
        if (code !== 0x20 /*   */  && code !== 0x09 /* \t */ ) return index + 1;
    }
    return min;
}
/**
 * Serialize data into a cookie header.
 *
 * Serialize a name value pair into a cookie string suitable for
 * http headers. An optional options object specifies cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 */ function serialize(name, val, options) {
    const enc = options?.encode || encodeURIComponent;
    if (!cookieNameRegExp.test(name)) {
        throw new TypeError(`argument name is invalid: ${name}`);
    }
    const value = enc(val);
    if (!cookieValueRegExp.test(value)) {
        throw new TypeError(`argument val is invalid: ${val}`);
    }
    let str = name + "=" + value;
    if (!options) return str;
    if (options.maxAge !== undefined) {
        if (!Number.isInteger(options.maxAge)) {
            throw new TypeError(`option maxAge is invalid: ${options.maxAge}`);
        }
        str += "; Max-Age=" + options.maxAge;
    }
    if (options.domain) {
        if (!domainValueRegExp.test(options.domain)) {
            throw new TypeError(`option domain is invalid: ${options.domain}`);
        }
        str += "; Domain=" + options.domain;
    }
    if (options.path) {
        if (!pathValueRegExp.test(options.path)) {
            throw new TypeError(`option path is invalid: ${options.path}`);
        }
        str += "; Path=" + options.path;
    }
    if (options.expires) {
        if (!isDate(options.expires) || !Number.isFinite(options.expires.valueOf())) {
            throw new TypeError(`option expires is invalid: ${options.expires}`);
        }
        str += "; Expires=" + options.expires.toUTCString();
    }
    if (options.httpOnly) {
        str += "; HttpOnly";
    }
    if (options.secure) {
        str += "; Secure";
    }
    if (options.partitioned) {
        str += "; Partitioned";
    }
    if (options.priority) {
        const priority = typeof options.priority === "string" ? options.priority.toLowerCase() : undefined;
        switch(priority){
            case "low":
                str += "; Priority=Low";
                break;
            case "medium":
                str += "; Priority=Medium";
                break;
            case "high":
                str += "; Priority=High";
                break;
            default:
                throw new TypeError(`option priority is invalid: ${options.priority}`);
        }
    }
    if (options.sameSite) {
        const sameSite = typeof options.sameSite === "string" ? options.sameSite.toLowerCase() : options.sameSite;
        switch(sameSite){
            case true:
            case "strict":
                str += "; SameSite=Strict";
                break;
            case "lax":
                str += "; SameSite=Lax";
                break;
            case "none":
                str += "; SameSite=None";
                break;
            default:
                throw new TypeError(`option sameSite is invalid: ${options.sameSite}`);
        }
    }
    return str;
}
/**
 * URL-decode string value. Optimized to skip native call when no %.
 */ function decode(str) {
    if (str.indexOf("%") === -1) return str;
    try {
        return decodeURIComponent(str);
    } catch (e) {
        return str;
    }
}
/**
 * Determine if value is a Date.
 */ function isDate(val) {
    return __toString.call(val) === "[object Date]";
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/cookies-next/lib/common/utils.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getRenderPhase = exports.isClientSide = exports.decode = exports.stringify = void 0;
var stringify = function(value) {
    try {
        if (typeof value === 'string') {
            return value;
        }
        var stringifiedValue = JSON.stringify(value);
        return stringifiedValue;
    } catch (e) {
        return value;
    }
};
exports.stringify = stringify;
var decode = function(str) {
    if (!str) return str;
    return str.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
};
exports.decode = decode;
var isClientSide = function(options) {
    return !(options === null || options === void 0 ? void 0 : options.req) && !(options === null || options === void 0 ? void 0 : options.res) && !(options && 'cookies' in options && (options === null || options === void 0 ? void 0 : options.cookies));
};
exports.isClientSide = isClientSide;
var getRenderPhase = function() {
    return typeof window === 'undefined' ? 'server' : 'client';
};
exports.getRenderPhase = getRenderPhase;
}}),
"[project]/node_modules/cookies-next/lib/common/types.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
}}),
"[project]/node_modules/cookies-next/lib/client/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.useCookiesNext = exports.useDeleteCookie = exports.useGetCookie = exports.useSetCookie = exports.useHasCookie = exports.useGetCookies = exports.hasCookie = exports.deleteCookie = exports.setCookie = exports.getCookie = exports.getCookies = void 0;
var cookie_1 = __turbopack_context__.r("[project]/node_modules/cookie/dist/index.js [app-client] (ecmascript)");
var utils_1 = __turbopack_context__.r("[project]/node_modules/cookies-next/lib/common/utils.js [app-client] (ecmascript)");
var react_1 = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var ensureClientSide = function(options) {
    if (!(0, utils_1.isClientSide)(options)) {
        throw new Error('You are trying to access cookies on the server side. Please, use the server-side import with `cookies-next/server` instead.');
    }
};
var getCookies = function(_options) {
    ensureClientSide(_options);
    if ((0, utils_1.getRenderPhase)() === 'server') {
        return;
    }
    var cookies = {};
    var documentCookies = document.cookie ? document.cookie.split('; ') : [];
    for(var i = 0, len = documentCookies.length; i < len; i++){
        var cookieParts = documentCookies[i].split('=');
        var cookie = cookieParts.slice(1).join('=');
        var name_1 = cookieParts[0];
        cookies[name_1] = cookie;
    }
    return cookies;
};
exports.getCookies = getCookies;
var getCookie = function(key, options) {
    ensureClientSide(options);
    var _cookies = getCookies(options);
    var value = _cookies === null || _cookies === void 0 ? void 0 : _cookies[key];
    if (value === undefined) return undefined;
    return (0, utils_1.decode)(value);
};
exports.getCookie = getCookie;
var setCookie = function(key, data, options) {
    ensureClientSide(options);
    if ((0, utils_1.getRenderPhase)() === 'server') {
        return;
    }
    var _cookieOptions = options || {};
    var cookieStr = (0, cookie_1.serialize)(key, (0, utils_1.stringify)(data), __assign({
        path: '/'
    }, _cookieOptions));
    document.cookie = cookieStr;
};
exports.setCookie = setCookie;
var deleteCookie = function(key, options) {
    ensureClientSide(options);
    setCookie(key, '', __assign(__assign({}, options), {
        maxAge: -1
    }));
};
exports.deleteCookie = deleteCookie;
var hasCookie = function(key, options) {
    ensureClientSide(options);
    if (!key) return false;
    var cookies = getCookies(options);
    if (!cookies) {
        return false;
    }
    return Object.prototype.hasOwnProperty.call(cookies, key);
};
exports.hasCookie = hasCookie;
var useWrappedCookieFn = function(cookieFnCb) {
    var _a = (0, react_1.useState)(false), isMounted = _a[0], setIsMounted = _a[1];
    (0, react_1.useEffect)(function() {
        setIsMounted(true);
    }, []);
    return isMounted ? cookieFnCb : function() {};
};
var useGetCookies = function() {
    return useWrappedCookieFn(getCookies);
};
exports.useGetCookies = useGetCookies;
var useGetCookie = function() {
    return useWrappedCookieFn(getCookie);
};
exports.useGetCookie = useGetCookie;
var useHasCookie = function() {
    return useWrappedCookieFn(hasCookie);
};
exports.useHasCookie = useHasCookie;
var useSetCookie = function() {
    return useWrappedCookieFn(setCookie);
};
exports.useSetCookie = useSetCookie;
var useDeleteCookie = function() {
    return useWrappedCookieFn(deleteCookie);
};
exports.useDeleteCookie = useDeleteCookie;
var useCookiesNext = function() {
    return {
        getCookies: useGetCookies(),
        getCookie: useGetCookie(),
        hasCookie: useHasCookie(),
        setCookie: useSetCookie(),
        deleteCookie: useDeleteCookie()
    };
};
exports.useCookiesNext = useCookiesNext;
__exportStar(__turbopack_context__.r("[project]/node_modules/cookies-next/lib/common/types.js [app-client] (ecmascript)"), exports);
}}),
"[project]/node_modules/cookies-next/lib/server/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
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
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = this && this.__generator || function(thisArg, body) {
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
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    "TURBOPACK unreachable";
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
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
                    op = [
                        0
                    ];
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
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var __rest = this && this.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hasCookie = exports.deleteCookie = exports.setCookie = exports.getCookie = exports.getCookies = void 0;
var cookie_1 = __turbopack_context__.r("[project]/node_modules/cookie/dist/index.js [app-client] (ecmascript)");
var utils_1 = __turbopack_context__.r("[project]/node_modules/cookies-next/lib/common/utils.js [app-client] (ecmascript)");
var ensureServerSide = function(context) {
    if ((0, utils_1.isClientSide)(context)) {
        throw new Error('You are trying to access cookies on the client side. Please, use the client-side import with `cookies-next/client` instead.');
    }
};
var isCookiesFromNext = function(cookieStore) {
    if (!cookieStore) return false;
    return 'getAll' in cookieStore && 'set' in cookieStore && typeof cookieStore.getAll === 'function' && typeof cookieStore.set === 'function';
};
var isContextFromNext = function(context) {
    return !!(context === null || context === void 0 ? void 0 : context.req) && 'cookies' in context.req && isCookiesFromNext(context.req.cookies) || !!(context === null || context === void 0 ? void 0 : context.res) && 'cookies' in context.res && isCookiesFromNext(context.res.cookies) || !!context && 'cookies' in context && typeof context.cookies === 'function';
};
var transformAppRouterCookies = function(cookies) {
    var _cookies = {};
    cookies.getAll().forEach(function(_a) {
        var name = _a.name, value = _a.value;
        _cookies[name] = value;
    });
    return _cookies;
};
var getCookies = function(options) {
    return __awaiter(void 0, void 0, void 0, function() {
        var _a, httpRequest;
        return __generator(this, function(_b) {
            switch(_b.label){
                case 0:
                    ensureServerSide(options);
                    if (!isContextFromNext(options)) return [
                        3 /*break*/ ,
                        2
                    ];
                    if (options.req) {
                        return [
                            2 /*return*/ ,
                            transformAppRouterCookies(options.req.cookies)
                        ];
                    }
                    if (options.res) {
                        return [
                            2 /*return*/ ,
                            transformAppRouterCookies(options.res.cookies)
                        ];
                    }
                    if (!options.cookies) return [
                        3 /*break*/ ,
                        2
                    ];
                    _a = transformAppRouterCookies;
                    return [
                        4 /*yield*/ ,
                        options.cookies()
                    ];
                case 1:
                    return [
                        2 /*return*/ ,
                        _a.apply(void 0, [
                            _b.sent()
                        ])
                    ];
                case 2:
                    if (options === null || options === void 0 ? void 0 : options.req) {
                        httpRequest = options.req;
                    }
                    if (httpRequest === null || httpRequest === void 0 ? void 0 : httpRequest.cookies) {
                        return [
                            2 /*return*/ ,
                            httpRequest.cookies
                        ];
                    }
                    if (httpRequest === null || httpRequest === void 0 ? void 0 : httpRequest.headers.cookie) {
                        return [
                            2 /*return*/ ,
                            (0, cookie_1.parse)(httpRequest.headers.cookie)
                        ];
                    }
                    return [
                        2 /*return*/ ,
                        {}
                    ];
            }
        });
    });
};
exports.getCookies = getCookies;
var getCookie = function(key, options) {
    return __awaiter(void 0, void 0, void 0, function() {
        var cookies, value;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    ensureServerSide(options);
                    return [
                        4 /*yield*/ ,
                        getCookies(options)
                    ];
                case 1:
                    cookies = _a.sent();
                    value = cookies[key];
                    if (value === undefined) return [
                        2 /*return*/ ,
                        undefined
                    ];
                    return [
                        2 /*return*/ ,
                        (0, utils_1.decode)(value)
                    ];
            }
        });
    });
};
exports.getCookie = getCookie;
var setCookie = function(key, data, options) {
    return __awaiter(void 0, void 0, void 0, function() {
        var req_1, res_1, cookiesFn, restOptions, payload, cookieOptions, req, res, _a, _req, _res, rest, cookieStore, currentCookies, cookies, cookies;
        return __generator(this, function(_b) {
            switch(_b.label){
                case 0:
                    ensureServerSide(options);
                    if (!isContextFromNext(options)) return [
                        3 /*break*/ ,
                        3
                    ];
                    req_1 = options.req, res_1 = options.res, cookiesFn = options.cookies, restOptions = __rest(options, [
                        "req",
                        "res",
                        "cookies"
                    ]);
                    payload = __assign({
                        name: key,
                        value: (0, utils_1.stringify)(data)
                    }, restOptions);
                    if (req_1) {
                        req_1.cookies.set(payload);
                    }
                    if (res_1) {
                        res_1.cookies.set(payload);
                    }
                    if (!cookiesFn) return [
                        3 /*break*/ ,
                        2
                    ];
                    return [
                        4 /*yield*/ ,
                        cookiesFn()
                    ];
                case 1:
                    _b.sent().set(payload);
                    _b.label = 2;
                case 2:
                    return [
                        2 /*return*/ 
                    ];
                case 3:
                    cookieOptions = {};
                    if (options) {
                        _a = options, _req = _a.req, _res = _a.res, rest = __rest(_a, [
                            "req",
                            "res"
                        ]);
                        req = _req;
                        res = _res;
                        cookieOptions = rest;
                    }
                    cookieStore = (0, cookie_1.serialize)(key, (0, utils_1.stringify)(data), __assign({
                        path: '/'
                    }, cookieOptions));
                    if (res && req) {
                        currentCookies = res.getHeader('Set-Cookie');
                        if (!Array.isArray(currentCookies)) {
                            currentCookies = !currentCookies ? [] : [
                                String(currentCookies)
                            ];
                        }
                        res.setHeader('Set-Cookie', currentCookies.concat(cookieStore));
                        if (req && req.cookies) {
                            cookies = req.cookies;
                            data === '' ? delete cookies[key] : cookies[key] = (0, utils_1.stringify)(data);
                        }
                        if (req && req.headers && req.headers.cookie) {
                            cookies = (0, cookie_1.parse)(req.headers.cookie);
                            data === '' ? delete cookies[key] : cookies[key] = (0, utils_1.stringify)(data);
                            req.headers.cookie = Object.entries(cookies).reduce(function(accum, item) {
                                return accum.concat("".concat(item[0], "=").concat(item[1], ";"));
                            }, '');
                        }
                    }
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
};
exports.setCookie = setCookie;
var deleteCookie = function(key, options) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(_a) {
            ensureServerSide(options);
            return [
                2 /*return*/ ,
                setCookie(key, '', __assign(__assign({}, options), {
                    maxAge: -1
                }))
            ];
        });
    });
};
exports.deleteCookie = deleteCookie;
var hasCookie = function(key, options) {
    return __awaiter(void 0, void 0, void 0, function() {
        var cookie;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    ensureServerSide(options);
                    if (!key) return [
                        2 /*return*/ ,
                        false
                    ];
                    return [
                        4 /*yield*/ ,
                        getCookies(options)
                    ];
                case 1:
                    cookie = _a.sent();
                    return [
                        2 /*return*/ ,
                        cookie.hasOwnProperty(key)
                    ];
            }
        });
    });
};
exports.hasCookie = hasCookie;
__exportStar(__turbopack_context__.r("[project]/node_modules/cookies-next/lib/common/types.js [app-client] (ecmascript)"), exports);
}}),
"[project]/node_modules/cookies-next/lib/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.useCookiesNext = exports.useDeleteCookie = exports.useGetCookie = exports.useSetCookie = exports.useHasCookie = exports.useGetCookies = exports.hasCookie = exports.deleteCookie = exports.setCookie = exports.getCookie = exports.getCookies = void 0;
var clientCookies = __turbopack_context__.r("[project]/node_modules/cookies-next/lib/client/index.js [app-client] (ecmascript)");
var serverCookies = __turbopack_context__.r("[project]/node_modules/cookies-next/lib/server/index.js [app-client] (ecmascript)");
__exportStar(__turbopack_context__.r("[project]/node_modules/cookies-next/lib/common/types.js [app-client] (ecmascript)"), exports);
var utils_1 = __turbopack_context__.r("[project]/node_modules/cookies-next/lib/common/utils.js [app-client] (ecmascript)");
var getCookies = function(options) {
    return (0, utils_1.isClientSide)(options) ? clientCookies.getCookies(options) : serverCookies.getCookies(options);
};
exports.getCookies = getCookies;
var getCookie = function(key, options) {
    return (0, utils_1.isClientSide)(options) ? clientCookies.getCookie(key, options) : serverCookies.getCookie(key, options);
};
exports.getCookie = getCookie;
var setCookie = function(key, data, options) {
    return (0, utils_1.isClientSide)(options) ? clientCookies.setCookie(key, data, options) : serverCookies.setCookie(key, data, options);
};
exports.setCookie = setCookie;
var deleteCookie = function(key, options) {
    return (0, utils_1.isClientSide)(options) ? clientCookies.deleteCookie(key, options) : serverCookies.deleteCookie(key, options);
};
exports.deleteCookie = deleteCookie;
var hasCookie = function(key, options) {
    return (0, utils_1.isClientSide)(options) ? clientCookies.hasCookie(key, options) : serverCookies.hasCookie(key, options);
};
exports.hasCookie = hasCookie;
var client_1 = __turbopack_context__.r("[project]/node_modules/cookies-next/lib/client/index.js [app-client] (ecmascript)");
Object.defineProperty(exports, "useGetCookies", {
    enumerable: true,
    get: function() {
        return client_1.useGetCookies;
    }
});
Object.defineProperty(exports, "useHasCookie", {
    enumerable: true,
    get: function() {
        return client_1.useHasCookie;
    }
});
Object.defineProperty(exports, "useSetCookie", {
    enumerable: true,
    get: function() {
        return client_1.useSetCookie;
    }
});
Object.defineProperty(exports, "useGetCookie", {
    enumerable: true,
    get: function() {
        return client_1.useGetCookie;
    }
});
Object.defineProperty(exports, "useDeleteCookie", {
    enumerable: true,
    get: function() {
        return client_1.useDeleteCookie;
    }
});
Object.defineProperty(exports, "useCookiesNext", {
    enumerable: true,
    get: function() {
        return client_1.useCookiesNext;
    }
});
}}),
}]);

//# sourceMappingURL=_0f91cd95._.js.map