module.exports = {

"[project]/app/content/create/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function Home() {
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [style, setStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('informatif');
    const [length, setLength] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('moyenne');
    const [provider, setProvider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('gpt-4');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [contents, setContents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const handleGenerate = async ()=>{
        setLoading(true);
        const response = await fetch('http://localhost:3003/api/content/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                style,
                length,
                provider
            })
        });
        const data = await response.json();
        setLoading(false);
        setTitle('');
        fetchContents(); // refresh list
    };
    const fetchContents = async ()=>{
        try {
            const res = await axios.get('http://localhost:3003/content');
            const data = res.data;
            if (Array.isArray(data)) {
                setContents(data);
            } else {
                console.error("Donnée inattendue :", data);
                setContents([]);
            }
        } catch (err) {
            console.error("Erreur lors du fetch des contenus :", err);
            setContents([]);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchContents();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "max-w-4xl mx-auto p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Générateur d' contenu"
            }, void 0, false, {
                fileName: "[project]/app/content/create/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 border p-4 rounded shadow mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Titre",
                        value: title,
                        onChange: (e)=>setTitle(e.target.value),
                        className: "w-full border px-3 py-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/content/create/page.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: style,
                                onChange: (e)=>setStyle(e.target.value),
                                className: "border p-2 rounded w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "informatif",
                                        children: "Informatif"
                                    }, void 0, false, {
                                        fileName: "[project]/app/content/create/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "créatif",
                                        children: "Créatif"
                                    }, void 0, false, {
                                        fileName: "[project]/app/content/create/page.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "persuasif",
                                        children: "Persuasif"
                                    }, void 0, false, {
                                        fileName: "[project]/app/content/create/page.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/content/create/page.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: length,
                                onChange: (e)=>setLength(e.target.value),
                                className: "border p-2 rounded w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "courte",
                                        children: "Courte"
                                    }, void 0, false, {
                                        fileName: "[project]/app/content/create/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "moyenne",
                                        children: "Moyenne"
                                    }, void 0, false, {
                                        fileName: "[project]/app/content/create/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "longue",
                                        children: "Longue"
                                    }, void 0, false, {
                                        fileName: "[project]/app/content/create/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/content/create/page.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: provider,
                                onChange: (e)=>setProvider(e.target.value),
                                className: "border p-2 rounded w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "gpt-4",
                                        children: "GPT-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/content/create/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "gpt-4o",
                                        children: "GPT-4o"
                                    }, void 0, false, {
                                        fileName: "[project]/app/content/create/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "deepseek",
                                        children: "DeepSeek"
                                    }, void 0, false, {
                                        fileName: "[project]/app/content/create/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/content/create/page.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/content/create/page.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleGenerate,
                        disabled: loading || !title,
                        className: "bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50",
                        children: loading ? 'Génération...' : 'Générer l’article'
                    }, void 0, false, {
                        fileName: "[project]/app/content/create/page.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/content/create/page.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-2",
                children: "Articles générés"
            }, void 0, false, {
                fileName: "[project]/app/content/create/page.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: contents.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border rounded p-4 shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: item.provider.toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/app/content/create/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this),
                                    " | ",
                                    item.style,
                                    " | ",
                                    item.length,
                                    " |",
                                    ' ',
                                    new Date(item.createdAt).toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/content/create/page.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold",
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/app/content/create/page.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 whitespace-pre-line",
                                children: item.content
                            }, void 0, false, {
                                fileName: "[project]/app/content/create/page.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item._id, true, {
                        fileName: "[project]/app/content/create/page.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/content/create/page.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/content/create/page.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
} // 'use client';
 // import { useEffect, useState } from 'react';
 // import axios from 'axios';
 // type ContentItem = {
 //   _id: string;
 //   title: string;
 //   style: string;
 //   length: string;
 //   provider: string;
 //   content: string;
 //   createdAt: string;
 // };
 // export default function ContentPage() {
 //   const [title, setTitle] = useState('');
 //   const [style, setStyle] = useState('informatif');
 //   const [length, setLength] = useState('moyenne');
 //   const [provider, setProvider] = useState('gpt-4');
 //   const [generated, setGenerated] = useState<ContentItem | null>(null);
 //   const [allContents, setAllContents] = useState<ContentItem[]>([]);
 //   const [loading, setLoading] = useState(false);
 //   const handleGenerate = async () => {
 //     setLoading(true);
 //     setGenerated(null);
 //     try {
 //       const response = await axios.post('http://localhost:3003/api/content/generate', {
 //         title,
 //         style,
 //         length,
 //         provider,
 //       });
 //       setGenerated(response.data);
 //       fetchContents(); // refresh list
 //     } catch (error) {
 //       alert('Erreur lors de la génération');
 //     } finally {
 //       setLoading(false);
 //     }
 //   };
 //   const fetchContents = async () => {
 //     const res = await axios.get('http://localhost:3003/api/content');
 //     setAllContents(res.data);
 //   };
 //   useEffect(() => {
 //     fetchContents();
 //   }, []);
 //   return (
 //     <div className="max-w-3xl mx-auto p-6">
 //       <h1 className="text-2xl font-bold mb-4">Génération d'article avec IA</h1>
 //       <div className="space-y-4 border p-4 rounded-lg shadow">
 //         <input
 //           type="text"
 //           placeholder="Titre de l'article"
 //           className="w-full border p-2 rounded"
 //           value={title}
 //           onChange={(e) => setTitle(e.target.value)}
 //         />
 //         <div className="flex gap-4">
 //           <select value={style} onChange={(e) => setStyle(e.target.value)} className="border p-2 rounded w-1/3">
 //             <option value="informatif">Informatif</option>
 //             <option value="créatif">Créatif</option>
 //             <option value="persuasif">Persuasif</option>
 //           </select>
 //           <select value={length} onChange={(e) => setLength(e.target.value)} className="border p-2 rounded w-1/3">
 //             <option value="courte">Courte</option>
 //             <option value="moyenne">Moyenne</option>
 //             <option value="longue">Longue</option>
 //           </select>
 //           <select value={provider} onChange={(e) => setProvider(e.target.value)} className="border p-2 rounded w-1/3">
 //             <option value="gpt-4">GPT-4</option>
 //             <option value="gpt-4o">GPT-4o</option>
 //             <option value="deepseek">DeepSeek</option>
 //           </select>
 //         </div>
 //         <button
 //           onClick={handleGenerate}
 //           disabled={loading || !title}
 //           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
 //         >
 //           {loading ? 'Génération en cours...' : 'Générer et Enregistrer'}
 //         </button>
 //       </div>
 //       {generated && (
 //         <div className="mt-6 border p-4 rounded shadow bg-green-50">
 //           <h2 className="font-semibold text-lg">Article généré</h2>
 //           <p className="mt-2 whitespace-pre-line">{generated.content}</p>
 //         </div>
 //       )}
 //       <div className="mt-10">
 //         <h2 className="text-xl font-semibold mb-2">Articles enregistrés</h2>
 //         {allContents.length === 0 ? (
 //           <p>Aucun article enregistré.</p>
 //         ) : (
 //           <ul className="space-y-4">
 //             {allContents.map((item) => (
 //               <li key={item._id} className="border p-4 rounded shadow">
 //                 <p><strong>Titre :</strong> {item.title}</p>
 //                 <p><strong>Style :</strong> {item.style}</p>
 //                 <p><strong>Longueur :</strong> {item.length}</p>
 //                 <p><strong>Fournisseur :</strong> {item.provider}</p>
 //                 <p className="mt-2 whitespace-pre-line"><strong>Contenu :</strong> {item.content}</p>
 //                 <p className="text-sm text-gray-500 mt-1">Créé le : {new Date(item.createdAt).toLocaleString()}</p>
 //               </li>
 //             ))}
 //           </ul>
 //         )}
 //       </div>
 //     </div>
 //   );
 // }
 // 'use client';
 // import { useState } from 'react';
 // import {
 //   generateContent,
 //   saveContent,
 //   fetchContents,
 // } from '../api/route';
 // export default function GeneratePage() {
 //   const [title, setTitle] = useState('');
 //   const [style, setStyle] = useState('neutre');
 //   const [length, setLength] = useState('court');
 //   const [provider, setProvider] = useState('deepseek');
 //   const [content, setContent] = useState('');
 //   const [loading, setLoading] = useState(false);
 //   const [savedContents, setSavedContents] = useState<any[]>([]);
 //   const generate = async () => {
 //     setLoading(true);
 //     try {
 //       const res = await generateContent({ title, style, length, provider });
 //       setContent(res.content);
 //     } catch {
 //       alert('Erreur lors de la génération');
 //     } finally {
 //       setLoading(false);
 //     }
 //   };
 //   const handleSave = async () => {
 //     try {
 //       await saveContent({
 //         title,
 //         content: content,
 //         style: style,
 //         length,
 //         provider: provider,
 //       });
 //       alert('content enregistré avec succès');
 //       loadSavedContents();
 //     } catch (err) {
 //       console.error(err);
 //       alert('Erreur enregistrement');
 //     }
 //   };
 //   const loadSavedContents = async () => {
 //     try {
 //       const data = await fetchContents();
 //       setSavedContents(data);
 //     } catch (err) {
 //       console.error(err);
 //     }
 //   };
 //   return (
 //     <div className="p-8 max-w-5xl mx-auto">
 //       <h1 className="text-3xl font-bold mb-6">Générer un conten</h1>
 //       <input
 //         value={title}
 //         onChange={(e) => setTitle(e.target.value)}
 //         placeholder="Titre"
 //         className="w-full border p-2 mb-4 rounded"
 //       />
 //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
 //         <select
 //           value={style}
 //           onChange={(e) => setStyle(e.target.value)}
 //           className=" shadow appearance-none border p-2 rounded leading-tight focus:outline-none focus:shadow-outline"
 //         >
 //            <option value="">Standard</option>
 //             <option value="formal">Formel</option>
 //             <option value="casual">Décontracté</option>
 //             <option value="professional">Professionnel</option>
 //             <option value="academic">Académique</option>
 //             <option value="creative">Créatif</option>
 //             <option value="persuasive">Persuasif</option>
 //             <option value="informative">Informatif</option>
 //         </select>
 //         <select
 //           value={length}
 //           onChange={(e) => setLength(e.target.value)}
 //           className="border p-2 rounded"
 //         >
 //           <option value="court">Court</option>
 //           <option value="moyen">Moyen</option>
 //           <option value="long">Long</option>
 //         </select>
 //         <select
 //           value={provider}
 //           onChange={(e) => setProvider(e.target.value)}
 //           className="border p-2 rounded"
 //         >
 //           <option value="deepseek">DeepSeek</option>
 //           <option value="gpt-4">GPT-4</option>
 //           <option value="mistral">Mistral</option>
 //         </select>
 //       </div>
 //       <div className="flex gap-4 mb-6">
 //         <button
 //           onClick={generate}
 //           className="bg-blue-600 text-white px-4 py-2 rounded"
 //         >
 //           {loading ? 'Génération...' : 'Générer'}
 //         </button>
 //         <button
 //           onClick={handleSave}
 //           className="bg-green-600 text-white px-4 py-2 rounded"
 //         >
 //           Enregistrer
 //         </button>
 //         <button
 //           onClick={loadSavedContents}
 //           className="bg-gray-600 text-white px-4 py-2 rounded"
 //         >
 //           Voir les contens enregistrés
 //         </button>
 //       </div>
 //       {content && (
 //         <div className="bg-gray-100 p-4 rounded mb-6">
 //           <h2 className="text-xl font-semibold mb-2">{title}</h2>
 //           <p className="whitespace-pre-line">{content}</p>
 //         </div>
 //       )}
 //       {savedContents.length > 0 && (
 //         <div className="mt-10">
 //           <h2 className="text-2xl font-bold mb-4">contenus enregistrés</h2>
 //           <div className="space-y-4">
 //             {savedContents.map((art) => (
 //               <div
 //                 key={art._id}
 //                 className="border p-4 rounded bg-white shadow"
 //               >
 //                 <h3 className="text-lg font-semibold">{art.title}</h3>
 //                 <p className="text-sm text-gray-600">
 //                   Style : {art.style} | Longueur : {art.length} | Provider :{' '}
 //                   {art.provider}
 //                 </p>
 //                 <p className="mt-2 whitespace-pre-line">{art.content}</p>
 //               </div>
 //             ))}
 //           </div>
 //         </div>
 //       )}
 //     </div>
 //   );
 // }
 // "use client";
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
}}),

};

//# sourceMappingURL=app_content_create_page_tsx_9eac38bc._.js.map