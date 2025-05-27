(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_content_892e2d50._.js", {

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
"[project]/app/content/create/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GeneratePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$api$2f$route$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/content/api/route.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function GeneratePage() {
    _s();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [style, setStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('neutre');
    const [length, setLength] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('court');
    const [provider, setProvider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('deepseek');
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [savedContents, setSavedContents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const generate = async ()=>{
        setLoading(true);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$api$2f$route$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateContent"])({
                title,
                style,
                length,
                provider
            });
            setContent(res.content);
        } catch  {
            alert('Erreur lors de la génération');
        } finally{
            setLoading(false);
        }
    };
    const handleSave = async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$api$2f$route$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveContent"])({
                title,
                content: content,
                style: style,
                length,
                provider: provider
            });
            alert('content enregistré avec succès');
            loadSavedContents();
        } catch (err) {
            console.error(err);
            alert('Erreur enregistrement');
        }
    };
    const loadSavedContents = async ()=>{
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$api$2f$route$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchContents"])();
            setSavedContents(data);
        } catch (err) {
            console.error(err);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 max-w-5xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-6",
                children: "Générer un conten"
            }, void 0, false, {
                fileName: "[project]/app/content/create/page.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: title,
                onChange: (e)=>setTitle(e.target.value),
                placeholder: "Titre",
                className: "w-full border p-2 mb-4 rounded"
            }, void 0, false, {
                fileName: "[project]/app/content/create/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: style,
                        onChange: (e)=>setStyle(e.target.value),
                        className: " shadow appearance-none border p-2 rounded leading-tight focus:outline-none focus:shadow-outline",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Standard"
                            }, void 0, false, {
                                fileName: "[project]/app/content/create/page.tsx",
                                lineNumber: 75,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "formal",
                                children: "Formel"
                            }, void 0, false, {
                                fileName: "[project]/app/content/create/page.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "casual",
                                children: "Décontracté"
                            }, void 0, false, {
                                fileName: "[project]/app/content/create/page.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "professional",
                                children: "Professionnel"
                            }, void 0, false, {
                                fileName: "[project]/app/content/create/page.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "academic",
                                children: "Académique"
                            }, void 0, false, {
                                fileName: "[project]/app/content/create/page.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "creative",
                                children: "Créatif"
                            }, void 0, false, {
                                fileName: "[project]/app/content/create/page.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "persuasive",
                                children: "Persuasif"
                            }, void 0, false, {
                                fileName: "[project]/app/content/create/page.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "informative",
                                children: "Informatif"
                            }, void 0, false, {
                                fileName: "[project]/app/content/create/page.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/content/create/page.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: length,
                        onChange: (e)=>setLength(e.target.value),
                        className: "border p-2 rounded",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "court",
                                children: "Court"
                            }, void 0, false, {
                                fileName: "[project]/app/content/create/page.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "moyen",
                                children: "Moyen"
                            }, void 0, false, {
                                fileName: "[project]/app/content/create/page.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "long",
                                children: "Long"
                            }, void 0, false, {
                                fileName: "[project]/app/content/create/page.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/content/create/page.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: provider,
                        onChange: (e)=>setProvider(e.target.value),
                        className: "border p-2 rounded",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "deepseek",
                                children: "DeepSeek"
                            }, void 0, false, {
                                fileName: "[project]/app/content/create/page.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "gpt-4",
                                children: "GPT-4"
                            }, void 0, false, {
                                fileName: "[project]/app/content/create/page.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "mistral",
                                children: "Mistral"
                            }, void 0, false, {
                                fileName: "[project]/app/content/create/page.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/content/create/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/content/create/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: generate,
                        className: "bg-blue-600 text-white px-4 py-2 rounded",
                        children: loading ? 'Génération...' : 'Générer'
                    }, void 0, false, {
                        fileName: "[project]/app/content/create/page.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSave,
                        className: "bg-green-600 text-white px-4 py-2 rounded",
                        children: "Enregistrer"
                    }, void 0, false, {
                        fileName: "[project]/app/content/create/page.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: loadSavedContents,
                        className: "bg-gray-600 text-white px-4 py-2 rounded",
                        children: "Voir les contens enregistrés"
                    }, void 0, false, {
                        fileName: "[project]/app/content/create/page.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/content/create/page.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-100 p-4 rounded mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold mb-2",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/app/content/create/page.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "whitespace-pre-line",
                        children: content
                    }, void 0, false, {
                        fileName: "[project]/app/content/create/page.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/content/create/page.tsx",
                lineNumber: 128,
                columnNumber: 9
            }, this),
            savedContents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-4",
                        children: "contenus enregistrés"
                    }, void 0, false, {
                        fileName: "[project]/app/content/create/page.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: savedContents.map((art)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border p-4 rounded bg-white shadow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold",
                                        children: art.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/content/create/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600",
                                        children: [
                                            "Style : ",
                                            art.style,
                                            " | Longueur : ",
                                            art.length,
                                            " | Provider :",
                                            ' ',
                                            art.provider
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/content/create/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 whitespace-pre-line",
                                        children: art.content
                                    }, void 0, false, {
                                        fileName: "[project]/app/content/create/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, art._id, true, {
                                fileName: "[project]/app/content/create/page.tsx",
                                lineNumber: 139,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/content/create/page.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/content/create/page.tsx",
                lineNumber: 135,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/content/create/page.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
} // "use client";
 // import { useState } from "react";
 // import { useRouter } from "next/navigation";
 // export default function CreateContentPage() {
 //   const router = useRouter();
 //   const [form, setForm] = useState({
 //     title: "",
 //     style: "neutre",
 //     length: "court",
 //     provider: "gpt",
 //     content: "",
 //   });
 //   const [loading, setLoading] = useState(false);
 //   const [saving, setSaving] = useState(false);
 //   const [error, setError] = useState("");
 //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
 //     setForm({ ...form, [e.target.name]: e.target.value });
 //   };
 //   const handleGenerate = async () => {
 //     setLoading(true);
 //     setError("");
 //     try {
 //       const res = await fetch("http://localhost:3003/api/content/generate", {
 //         method: "POST",
 //         headers: { "Content-Type": "application/json" },
 //         body: JSON.stringify({
 //           title: form.title,
 //           style: form.style,
 //           length: form.length,
 //           provider: form.provider,
 //         }),
 //       });
 //       if (!res.ok) {
 //         const message = await res.text();
 //         throw new Error(message);
 //       }
 //       const data = await res.json();
 //       setForm({ ...form, content: data.content });
 //     } catch (err: any) {
 //       setError(err.message || "Erreur lors de la génération.");
 //     } finally {
 //       setLoading(false);
 //     }
 //   };
 //   const handleSave = async () => {
 //     if (!form.content) return;
 //     setSaving(true);
 //     setError("");
 //     try {
 //       const res = await fetch("http://localhost:3003/api/content", {
 //         method: "POST",
 //         headers: { "Content-Type": "application/json" },
 //         body: JSON.stringify(form),
 //       });
 //       if (!res.ok) {
 //         const message = await res.text();
 //         throw new Error(message);
 //       }
 //       router.push("/content");
 //     } catch (err: any) {
 //       setError(err.message || "Erreur lors de l'enregistrement.");
 //     } finally {
 //       setSaving(false);
 //     }
 //   };
 //   return (
 //     <div className="max-w-3xl mx-auto py-10 px-4">
 //       <h1 className="text-2xl font-bold mb-6">Créer un nouveau contenu</h1>
 //       {error && <p className="text-red-500 mb-4">{error}</p>}
 //       <div className="mb-4">
 //         <label className="block font-medium">Titre</label>
 //         <input
 //           name="title"
 //           type="text"
 //           value={form.title}
 //           onChange={handleChange}
 //           className="w-full border p-2 rounded"
 //           required
 //         />
 //       </div>
 //       <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
 //         <div>
 //           <label className="block font-medium">Style</label>
 //           <select
 //             name="style"
 //             value={form.style}
 //             onChange={handleChange}
 //             className="w-full border p-2 rounded"
 //           >
 //             <option value="neutre">Neutre</option>
 //             <option value="persuasif">Persuasif</option>
 //             <option value="informatif">Informatif</option>
 //             <option value="humoristique">Humoristique</option>
 //           </select>
 //         </div>
 //         <div>
 //           <label className="block font-medium">Longueur</label>
 //           <select
 //             name="length"
 //             value={form.length}
 //             onChange={handleChange}
 //             className="w-full border p-2 rounded"
 //           >
 //             <option value="court">Court</option>
 //             <option value="moyen">Moyen</option>
 //             <option value="long">Long</option>
 //           </select>
 //         </div>
 //         <div>
 //           <label className="block font-medium">Fournisseur IA</label>
 //           <select
 //             name="provider"
 //             value={form.provider}
 //             onChange={handleChange}
 //             className="w-full border p-2 rounded"
 //           >
 //             <option value="gpt">GPT</option>
 //             <option value="deepseek">DeepSeek</option>
 //             <option value="claude">Claude</option>
 //           </select>
 //         </div>
 //       </div>
 //       <button
 //         onClick={handleGenerate}
 //         disabled={loading || !form.title}
 //         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
 //       >
 //         {loading ? "Génération..." : "Générer le contenu"}
 //       </button>
 //       {form.content && (
 //         <>
 //           <div className="mt-6">
 //             <label className="block font-medium mb-2">Contenu généré</label>
 //             <textarea
 //               value={form.content}
 //               readOnly
 //               rows={10}
 //               className="w-full border p-2 rounded"
 //             />
 //           </div>
 //           <button
 //             onClick={handleSave}
 //             disabled={saving}
 //             className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
 //           >
 //             {saving ? "Enregistrement..." : "Enregistrer dans la base"}
 //           </button>
 //         </>
 //       )}
 //     </div>
 //   );
 // }
 // 'use client';
 // import { useState } from 'react';
 // import { useRouter } from 'next/navigation';
 // import LoadingSpinner from '@/app/components/LoadingSpinner';
 // export default function CreateContentPage() {
 //   const router = useRouter();
 //   const [title, setTitle] = useState('');
 //   const [style, setStyle] = useState('professional');
 //   const [length, setLength] = useState('500'); // par défaut 500 mots
 //   const [provider, setProvider] = useState('OPENAI');
 //   const [loading, setLoading] = useState(false);
 //   const [error, setError] = useState('');
 //   const handleGenerate = async (e: React.FormEvent) => {
 //     e.preventDefault();
 //     setLoading(true);
 //     setError('');
 //     try {
 //       const res = await fetch('http://localhost:3003/api/content/generate', {
 //         method: 'POST',
 //         headers: { 'Content-Type': 'application/json' },
 //         body: JSON.stringify({
 //           title,
 //           style,
 //           length: Number(length), // conversion explicite
 //           provider: provider,
 //         }),
 //       });
 //       if (!res.ok) {
 //         const errorText = await res.text();
 //         throw new Error(errorText || 'Erreur lors de la génération du contenu');
 //       }
 //       const saved = await res.json();
 //       router.push(`/content/read/${saved._id}`);
 //     } catch (err: any) {
 //       setError(err.message || 'Erreur inconnue');
 //     } finally {
 //       setLoading(false);
 //     }
 //   };
 //   return (
 //     <div className="max-w-2xl mx-auto p-6">
 //       <h1 className="text-2xl font-bold mb-4">Créer un contenu</h1>
 //       <form onSubmit={handleGenerate} className="space-y-4">
 //         <div>
 //           <label className="block text-sm font-medium">Titre</label>
 //           <input
 //             type="text"
 //             value={title}
 //             onChange={(e) => setTitle(e.target.value)}
 //             required
 //             className="w-full border p-2 rounded"
 //           />
 //         </div>
 //         <div>
 //           <label className="block text-sm font-medium">Style</label>
 //           <select
 //             value={style}
 //             onChange={(e) => setStyle(e.target.value)}
 //             className="w-full border p-2 rounded"
 //           >
 //              <option value="">Standard</option>
 //             <option value="formal">Formel</option>
 //             <option value="casual">Décontracté</option>
 //             <option value="professional">Professionnel</option>
 //             <option value="academic">Académique</option>
 //             <option value="creative">Créatif</option>
 //             <option value="persuasive">Persuasif</option>
 //             <option value="informative">Informatif</option>
 //           </select>
 //         </div>
 //         <div>
 //           <label className="block text-sm font-medium">Longueur (en mots)</label>
 //           <select
 //             value={length}
 //             onChange={(e) => setLength(e.target.value)}
 //             className="w-full border p-2 rounded"
 //           >
 //             <option value="300">300 mots</option>
 //             <option value="500">500 mots</option>
 //             <option value="800">800 mots</option>
 //           </select>
 //         </div>
 //         <div>
 //           <label className="block text-sm font-medium">Modèle IA</label>
 //           <select
 //             value={provider}
 //             onChange={(e) => setProvider(e.target.value)}
 //             className="w-full border p-2 rounded"
 //           >
 //             <option value="OPENAI">OpenAI</option>
 //             <option value="DEEPSEEK">DeepSeek</option>
 //           </select>
 //         </div>
 //         <button
 //           type="submit"
 //           disabled={loading}
 //           className="bg-blue-600 text-white px-4 py-2 rounded"
 //         >
 //           {loading ? <LoadingSpinner /> : 'Générer le contenu'}
 //         </button>
 //         {error && <p className="text-red-500">❌ {error}</p>}
 //       </form>
 //     </div>
 //   );
 // }
_s(GeneratePage, "WFhgWxdOof47BtFj8mjhnAihrwM=");
_c = GeneratePage;
var _c;
__turbopack_context__.k.register(_c, "GeneratePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_content_892e2d50._.js.map