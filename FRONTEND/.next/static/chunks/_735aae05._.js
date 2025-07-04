(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_735aae05._.js", {

"[project]/app/content/schedule/[id]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ScheduleContentPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$os$2d$browserify$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/os-browserify/browser.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ScheduleContentPage() {
    _s();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [publicationDate, setPublicationDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScheduleContentPage.useEffect": ()=>{
            const fetchContent = {
                "ScheduleContentPage.useEffect.fetchContent": async ()=>{
                    const res = await fetch(`http://localhost:3000/api/content/${id}`);
                    const data = await res.json();
                    setTitle(data.title);
                    setContent(data.content);
                }
            }["ScheduleContentPage.useEffect.fetchContent"];
            if (id) fetchContent();
        }
    }["ScheduleContentPage.useEffect"], [
        id
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        await fetch(`http://localhost:3000/api/content/schedule/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                content,
                publicationDate
            })
        });
        router.push('/content');
    };
    const connectSocial = (platform)=>{
        const urls = {
            facebook: 'https://www.facebook.com/v18.0/dialog/oauth',
            instagram: 'https://api.instagram.com/oauth/authorize',
            linkedin: 'https://www.linkedin.com/oauth/v2/authorization'
        };
        window.open(urls[platform], '_blank');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 max-w-xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-xl font-semibold mb-4",
                children: "Planifier la publication"
            }, void 0, false, {
                fileName: "[project]/app/content/schedule/[id]/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: title,
                        onChange: (e)=>setTitle(e.target.value),
                        className: "w-full border px-3 py-2 rounded",
                        placeholder: "Titre",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/content/schedule/[id]/page.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: content,
                        onChange: (e)=>setContent(e.target.value),
                        className: "w-full border px-3 py-2 rounded",
                        placeholder: "Contenu",
                        rows: 5,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/content/schedule/[id]/page.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$os$2d$browserify$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["platform"],
                        onChange: (e)=>setTitle(e.target.value),
                        className: "w-full border px-3 py-2 rounded",
                        placeholder: "Titre",
                        disabled: true
                    }, void 0, false, {
                        fileName: "[project]/app/content/schedule/[id]/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "datetime-local",
                        value: publicationDate,
                        onChange: (e)=>setPublicationDate(e.target.value),
                        className: "w-full border px-3 py-2 rounded",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/content/schedule/[id]/page.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700",
                        children: "Planifier"
                    }, void 0, false, {
                        fileName: "[project]/app/content/schedule/[id]/page.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/content/schedule/[id]/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/content/schedule/[id]/page.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(ScheduleContentPage, "vR+dDgESRXuznQ0zE0EbattB4/o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ScheduleContentPage;
var _c;
__turbopack_context__.k.register(_c, "ScheduleContentPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/os-browserify/browser.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
(function() {
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var n = {};
    !function() {
        var e = n;
        e.endianness = function() {
            return "LE";
        };
        e.hostname = function() {
            if (typeof location !== "undefined") {
                return location.hostname;
            } else return "";
        };
        e.loadavg = function() {
            return [];
        };
        e.uptime = function() {
            return 0;
        };
        e.freemem = function() {
            return Number.MAX_VALUE;
        };
        e.totalmem = function() {
            return Number.MAX_VALUE;
        };
        e.cpus = function() {
            return [];
        };
        e.type = function() {
            return "Browser";
        };
        e.release = function() {
            if (typeof navigator !== "undefined") {
                return navigator.appVersion;
            }
            return "";
        };
        e.networkInterfaces = e.getNetworkInterfaces = function() {
            return {};
        };
        e.arch = function() {
            return "javascript";
        };
        e.platform = function() {
            return "browser";
        };
        e.tmpdir = e.tmpDir = function() {
            return "/tmp";
        };
        e.EOL = "\n";
        e.homedir = function() {
            return "/";
        };
    }();
    module.exports = n;
})();
}}),
}]);

//# sourceMappingURL=_735aae05._.js.map