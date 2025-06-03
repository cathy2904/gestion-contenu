(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_90934436._.js", {

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
// import { Content } from "./types/content";
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$api$2f$route$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/content/api/route.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
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
    const [contents, setContents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [totalPages, setTotalPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    // plannification
    const [statut, setStatut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('statut');
    // Filtres
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [style, setStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // const [selectedStyle, setSelectedStyle] = useState('');
    // const fetchContents = async (page: number) => {
    //   try {
    //     const response = await axios.get('http://localhost:3003/api/content?page=${page}&limit=10',  {
    //       params: {
    //         page,
    //         limit: 10,
    //         user: user || undefined,
    //         style: style || undefined,
    //         date: date || undefined,
    //          statut: statut || undefined,
    //       },
    //   })
    //     // setContents(response.data)
    //     const data = response.data
    //    if (Array.isArray(data.contents)) {
    //       setContents(data.contents);
    //       setTotalPages(data.totalPages);
    //     } else {
    //       setContents([]);
    //       console.error('❌ Données inattendues :', data);
    //     }
    //    } catch (error) {
    //     console.error('❌ Erreur lors du chargement des contenus :', error)
    //   } finally {
    //     setLoading(false)
    //   }
    // }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContentPage.useEffect": ()=>{
            const fetchContents = {
                "ContentPage.useEffect.fetchContents": async ()=>{
                    const res = await fetch('http://localhost:3003/api/content');
                    const data = await res.json();
                    setContents(data);
                }
            }["ContentPage.useEffect.fetchContents"];
            fetchContents();
        }
    }["ContentPage.useEffect"], []);
    const handlePublish = async (id)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`http://localhost:3003/api/content/${id}/publish`);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$api$2f$route$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchContents"])(page);
        } catch (error) {
            console.error("Erreur lors de la publication :", error);
        }
    };
    const handleDelete = async (id)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`http://localhost:3003/api/content/${id}`);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$api$2f$route$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchContents"])(page);
        } catch (error) {
            console.error("Erreur lors de la suppression :", error);
        }
    };
    // Gérer le changement de statut
    const handleStatusChange = async (e, id)=>{
        const newStatut = e.target.value;
        setLoading(true);
        try {
            await fetch(`http://localhost:3003/api/content/${id}/status`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    statut: newStatut
                })
            });
            // Mettre à jour l’état local
            setContents((prev)=>prev.map((content)=>content._id === id ? {
                        ...content,
                        statut: newStatut
                    } : content));
        } catch (err) {
            alert('Erreur lors de la mise à jour du statut');
        }
        setLoading(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContentPage.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$content$2f$api$2f$route$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchContents"])(page);
        }
    }["ContentPage.useEffect"], [
        page,
        user,
        style,
        date
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Principal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        titre: "Contents",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Content Home"
            }, void 0, false, {
                fileName: "[project]/app/content/page.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/content/create",
                        className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition",
                        children: "Créer un contenu"
                    }, void 0, false, {
                        fileName: "[project]/app/content/page.tsx",
                        lineNumber: 141,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold mb-4",
                                children: " Liste des Contenus Générés"
                            }, void 0, false, {
                                fileName: "[project]/app/content/page.tsx",
                                lineNumber: 150,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "ID utilisateur",
                                        value: user,
                                        onChange: (e)=>setUser(e.target.value),
                                        className: "border p-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/content/page.tsx",
                                        lineNumber: 153,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: style,
                                        onChange: (e)=>setStyle(e.target.value),
                                        className: "border p-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Tous les styles"
                                            }, void 0, false, {
                                                fileName: "[project]/app/content/page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "{{style}}"
                                            }, void 0, false, {
                                                fileName: "[project]/app/content/page.tsx",
                                                lineNumber: 166,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "standard",
                                                children: "Style standard"
                                            }, void 0, false, {
                                                fileName: "[project]/app/content/page.tsx",
                                                lineNumber: 167,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "humour",
                                                children: "Style humour"
                                            }, void 0, false, {
                                                fileName: "[project]/app/content/page.tsx",
                                                lineNumber: 168,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "marketing",
                                                children: "Style marketing"
                                            }, void 0, false, {
                                                fileName: "[project]/app/content/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "formal",
                                                children: "Formel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/content/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "casual",
                                                children: "Décontracté"
                                            }, void 0, false, {
                                                fileName: "[project]/app/content/page.tsx",
                                                lineNumber: 171,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "professional",
                                                children: "Professionnel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/content/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "academic",
                                                children: "Académique"
                                            }, void 0, false, {
                                                fileName: "[project]/app/content/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "creative",
                                                children: "Créatif"
                                            }, void 0, false, {
                                                fileName: "[project]/app/content/page.tsx",
                                                lineNumber: 174,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "persuasive",
                                                children: "Persuasif"
                                            }, void 0, false, {
                                                fileName: "[project]/app/content/page.tsx",
                                                lineNumber: 175,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "informative",
                                                children: "Informatif"
                                            }, void 0, false, {
                                                fileName: "[project]/app/content/page.tsx",
                                                lineNumber: 176,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/content/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        value: date,
                                        onChange: (e)=>setDate(e.target.value),
                                        className: "border p-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/content/page.tsx",
                                        lineNumber: 178,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/content/page.tsx",
                                lineNumber: 152,
                                columnNumber: 7
                            }, this),
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Chargement en cours..."
                            }, void 0, false, {
                                fileName: "[project]/app/content/page.tsx",
                                lineNumber: 188,
                                columnNumber: 9
                            }, this) : contents.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Aucun contenu trouvé."
                            }, void 0, false, {
                                fileName: "[project]/app/content/page.tsx",
                                lineNumber: 190,
                                columnNumber: 9
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full table-auto border border-gray-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "bg-black-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border px-2 py-2",
                                                    children: "Titre"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/content/page.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border px-2 py-2",
                                                    children: "Fournisseur"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/content/page.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border px-2 py-2",
                                                    children: "Style"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/content/page.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border px-2 py-2",
                                                    children: "Longueur"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/content/page.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border px-4 py-2",
                                                    children: "Contenu"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/content/page.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border px-4 py-2",
                                                    children: "Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/content/page.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border px-4 py-2",
                                                    children: "Actions"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/content/page.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/content/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/content/page.tsx",
                                        lineNumber: 193,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: contents.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "hover:bg-black-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border px-2 py-2",
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/content/page.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border px-2 py-2",
                                                        children: item.provider
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/content/page.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border px-2 py-2",
                                                        children: item.style
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/content/page.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border px-2 py-2",
                                                        children: item.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/content/page.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border px-4 py-2 max-w-sm overflow-hidden text-ellipsis whitespace-nowrap",
                                                        title: item.content,
                                                        children: [
                                                            item.content?.slice(0, 100),
                                                            "..."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/content/page.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 18
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border px-4 py-2",
                                                        children: item.statut
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/content/page.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: item.statut,
                                                            onChange: (e)=>handleStatusChange(e, item._id),
                                                            disabled: loading,
                                                            className: "border px-3 py-1 rounded",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "brouillon",
                                                                    children: "Brouillon"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/content/page.tsx",
                                                                    lineNumber: 223,
                                                                    columnNumber: 13
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "programmé",
                                                                    children: "Programmé"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/content/page.tsx",
                                                                    lineNumber: 224,
                                                                    columnNumber: 13
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "publié",
                                                                    children: "Publié"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/content/page.tsx",
                                                                    lineNumber: 225,
                                                                    columnNumber: 13
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/content/page.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/content/page.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border px-2 py-2 flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handlePublish(item._id),
                                                                className: "bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600",
                                                                children: "Publier"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/content/page.tsx",
                                                                lineNumber: 242,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleDelete(item._id),
                                                                className: "bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600",
                                                                children: "Supprimer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/content/page.tsx",
                                                                lineNumber: 248,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/content/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 18
                                                    }, this)
                                                ]
                                            }, item._id, true, {
                                                fileName: "[project]/app/content/page.tsx",
                                                lineNumber: 207,
                                                columnNumber: 15
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/content/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setPage((prev)=>Math.max(prev - 1, 1)),
                                        disabled: page === 1,
                                        className: "px-4 py-2 bg-gray-300 rounded disabled:opacity-50",
                                        children: "Précédent"
                                    }, void 0, false, {
                                        fileName: "[project]/app/content/page.tsx",
                                        lineNumber: 262,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-4 py-2",
                                        children: [
                                            "Page ",
                                            page,
                                            " / ",
                                            totalPages
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/content/page.tsx",
                                        lineNumber: 269,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setPage((prev)=>Math.min(prev + 1, totalPages)),
                                        disabled: page === totalPages,
                                        className: "px-4 py-2 bg-gray-300 rounded disabled:opacity-50",
                                        children: "Suivant"
                                    }, void 0, false, {
                                        fileName: "[project]/app/content/page.tsx",
                                        lineNumber: 270,
                                        columnNumber: 3
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/content/page.tsx",
                                lineNumber: 192,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/content/page.tsx",
                        lineNumber: 149,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/content/page.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/content/page.tsx",
        lineNumber: 137,
        columnNumber: 1
    }, this);
}
_s(ContentPage, "GcHUrtknKfIjGfkc6zBUspPHlcs=");
_c = ContentPage;
var _c;
__turbopack_context__.k.register(_c, "ContentPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_90934436._.js.map