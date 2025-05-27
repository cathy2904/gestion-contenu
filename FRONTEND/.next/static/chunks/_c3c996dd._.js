(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_c3c996dd._.js", {

"[project]/components/Principal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Principal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Principal({ titre, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " w-full md:w-5/6 bg-[#121313] p-3 md:p-6  space-y-4 overflow-hidden h-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold",
                children: [
                    titre,
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/components/Principal.tsx",
                lineNumber: 4,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#121313] h-[90%]",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/Principal.tsx",
                lineNumber: 5,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Principal.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = Principal;
var _c;
__turbopack_context__.k.register(_c, "Principal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/content/api/route.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "fetchContents": (()=>fetchContents),
    "generateContent": (()=>generateContent),
    "saveContent": (()=>saveContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const generateContent = async (data)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('http://localhost:3003/api/content/generate', data);
    return res.data;
};
const saveContent = async (data)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/api/save', data);
    return res.data;
};
const fetchContents = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/api/contents');
    return res.data;
}; // import axios from 'axios';
 // import { Content, ContentFormData, GenerateContentData } from '../types/content';
 // const API_URL = process.env.NEXT_API_URL || 'http://localhost:3000';
 // const api = axios.create({
 //   baseURL: API_URL,
 //   headers: {
 //     'Content-Type': 'application/json',
 //   },
 // });
 // // export const getContents = async (): Promise<Content[]> => {
 // //   const response = await api.get('/content');
 // //   return response.data;
 // // };
 // export const fetchContents = async (): Promise<Content[]> => {
 //     const response = await axios.get(`${API_URL}/content`);
 //     return response.data;
 //   };
 // export const getContent = async (id: string): Promise<Content> => {
 //   const response = await api.get(`/content/${id}`);
 //   return response.data;
 // };
 // export const createContent = async (contentData: ContentFormData): Promise<Content> => {
 //   const response = await api.post('/content', contentData);
 //   return response.data;
 // };
 // export const fetchContentById = async (id: string): Promise<Content> => {
 //     const response = await axios.get(`${API_URL}/content/${id}`);
 //     return response.data;
 //   };
 // export const generateContentOnly = async (generateData: GenerateContentData): Promise<string> => {
 //   const response = await api.post('/content/generate', generateData);
 //   return response.data.content;
 // };
 // export const deleteContent = async (id: string): Promise<void> => {
 //   await api.delete(`/content/${id}`);
 // };
 // import axios from 'axios';
 // import { Content } from '../types/content';
 // const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
 // export const fetchContents = async (): Promise<Content[]> => {
 //   const response = await axios.get(`${API_BASE_URL}/content`);
 //   return response.data;
 // };
 // export const fetchContentById = async (id: string): Promise<Content> => {
 //   const response = await axios.get(`${API_BASE_URL}/content/${id}`);
 //   return response.data;
 // };
 // export const createContent = async (contentData: Partial<Content>): Promise<Content> => {
 //   const response = await axios.post(`${API_BASE_URL}/content`, contentData);
 //   return response.data;
 // };
 // export const updateContent = async (id: string, contentData: Partial<Content>): Promise<Content> => {
 //   const response = await axios.put(`${API_BASE_URL}/content/${id}`, contentData);
 //   return response.data;
 // };
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/ContentCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const ContentCard = ({ content })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: content.title
            }, void 0, false, {
                fileName: "[project]/app/components/ContentCard.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: content.body
            }, void 0, false, {
                fileName: "[project]/app/components/ContentCard.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ContentCard.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
};
_c = ContentCard;
const __TURBOPACK__default__export__ = ContentCard;
var _c;
__turbopack_context__.k.register(_c, "ContentCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/ContentList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ContentCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ContentCard.tsx [app-client] (ecmascript)");
;
;
const ContentList = ({ contents })=>{
    if (!Array.isArray(contents)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "⚠️ Aucune donnée trouvée ou mauvais format."
        }, void 0, false, {
            fileName: "[project]/app/components/ContentList.tsx",
            lineNumber: 11,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {}, void 0, false, {
                fileName: "[project]/app/components/ContentList.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this),
            contents.map((content)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ContentCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    content: content
                }, content._id, false, {
                    fileName: "[project]/app/components/ContentList.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ContentList.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
};
_c = ContentList;
const __TURBOPACK__default__export__ = ContentList;
var _c;
__turbopack_context__.k.register(_c, "ContentList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/content/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ContentPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Principal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Principal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$api$2f$route$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/content/api/route.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ContentList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ContentList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ContentPage() {
    _s();
    const [content, setContents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContentPage.useEffect": ()=>{
            const getContents = {
                "ContentPage.useEffect.getContents": async ()=>{
                    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$api$2f$route$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchContents"])();
                    setContents(data);
                }
            }["ContentPage.useEffect.getContents"];
            getContents();
        }
    }["ContentPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Principal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        titre: "Contents",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Content Home"
            }, void 0, false, {
                fileName: "[project]/app/content/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/content/create",
                        className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition",
                        children: "➕ Créer un contenu"
                    }, void 0, false, {
                        fileName: "[project]/app/content/page.tsx",
                        lineNumber: 26,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Liste des contenus"
                    }, void 0, false, {
                        fileName: "[project]/app/content/page.tsx",
                        lineNumber: 32,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ContentList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        contents: content
                    }, void 0, false, {
                        fileName: "[project]/app/content/page.tsx",
                        lineNumber: 33,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/content/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/content/page.tsx",
        lineNumber: 22,
        columnNumber: 1
    }, this);
}
_s(ContentPage, "HBjmZP9CwxhjWyU73Hq8uTO87uE=");
_c = ContentPage;
var _c;
__turbopack_context__.k.register(_c, "ContentPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_c3c996dd._.js.map