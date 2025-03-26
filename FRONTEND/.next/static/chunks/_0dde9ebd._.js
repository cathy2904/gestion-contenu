(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_0dde9ebd._.js", {

"[project]/lib/api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "api": (()=>api)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:3000") || 'http://localhost:3000';
const api = {
    async fetchArticles () {
        return this.handleRequest('/articles');
    },
    async fetchArticle (id) {
        return this.handleRequest(`/articles/${id}`);
    },
    async createArticle (data) {
        return this.handleRequest('/articles', {
            method: 'POST',
            body: JSON.stringify(data)
        });
    },
    async updateArticle (id, data) {
        return this.handleRequest(`/articles/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    },
    async deleteArticle (id) {
        return this.handleRequest(`/articles/${id}`, {
            method: 'DELETE'
        });
    },
    async handleRequest (endpoint, options) {
        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                ...options
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw {
                    message: errorData.message || 'Erreur API',
                    status: response.status
                };
            }
            return await response.json();
        } catch (error) {
            throw {
                message: error.message || 'Erreur réseau',
                status: error.status || 500
            };
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ArticleForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ArticleForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ArticleForm({ initialData, onSubmit, isSubmitting, error }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: initialData?.title || '',
        content: initialData?.content || '',
        author: initialData?.author || ''
    });
    const handleSubmit = async (e)=>{
        e.preventDefault();
        await onSubmit(formData);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-6",
        children: [
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 mb-4 text-red-700 bg-red-100 rounded-lg",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/ArticleForm.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-gray-700 mb-1",
                        children: "Titre"
                    }, void 0, false, {
                        fileName: "[project]/components/ArticleForm.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: formData.title,
                        onChange: (e)=>setFormData({
                                ...formData,
                                title: e.target.value
                            }),
                        className: "w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/components/ArticleForm.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ArticleForm.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-gray-700 mb-1",
                        children: "Contenu"
                    }, void 0, false, {
                        fileName: "[project]/components/ArticleForm.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: formData.content,
                        onChange: (e)=>setFormData({
                                ...formData,
                                content: e.target.value
                            }),
                        className: "w-full p-2 border rounded-md h-32 focus:ring-2 focus:ring-blue-500",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/components/ArticleForm.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ArticleForm.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-gray-700 mb-1",
                        children: "Auteur"
                    }, void 0, false, {
                        fileName: "[project]/components/ArticleForm.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: formData.author,
                        onChange: (e)=>setFormData({
                                ...formData,
                                author: e.target.value
                            }),
                        className: "w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/components/ArticleForm.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ArticleForm.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: isSubmitting,
                className: `w-full py-2 px-4 rounded-md text-white ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`,
                children: isSubmitting ? 'Envoi en cours...' : 'Valider'
            }, void 0, false, {
                fileName: "[project]/components/ArticleForm.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ArticleForm.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(ArticleForm, "m4sx5vaGI6uKcTYG6DslrDTYFMY=");
_c = ArticleForm;
var _c;
__turbopack_context__.k.register(_c, "ArticleForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/articles/edit/[id]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EditArticlePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ArticleForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ArticleForm.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function EditArticlePage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const [article, setArticle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditArticlePage.useEffect": ()=>{
            const loadArticle = {
                "EditArticlePage.useEffect.loadArticle": async ()=>{
                    try {
                        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].fetchArticle(id);
                        setArticle(data);
                    } catch (err) {
                        setError('Article non trouvé');
                        router.push('/articles');
                    }
                }
            }["EditArticlePage.useEffect.loadArticle"];
            loadArticle();
        }
    }["EditArticlePage.useEffect"], [
        id,
        router
    ]);
    const handleSubmit = async (formData)=>{
        setIsSubmitting(true);
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].updateArticle(id, formData);
            router.push('/articles');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erreur lors de la mise à jour');
        } finally{
            setIsSubmitting(false);
        }
    };
    if (!article) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl mx-auto p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-pulse space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-8 bg-gray-200 rounded w-1/2 mb-6"
                    }, void 0, false, {
                        fileName: "[project]/app/articles/edit/[id]/page.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 bg-gray-200 rounded w-full"
                    }, void 0, false, {
                        fileName: "[project]/app/articles/edit/[id]/page.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 bg-gray-200 rounded w-3/4"
                    }, void 0, false, {
                        fileName: "[project]/app/articles/edit/[id]/page.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 bg-gray-200 rounded w-2/3"
                    }, void 0, false, {
                        fileName: "[project]/app/articles/edit/[id]/page.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/articles/edit/[id]/page.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/articles/edit/[id]/page.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-2xl mx-auto p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-6",
                children: "Modifier l'article"
            }, void 0, false, {
                fileName: "[project]/app/articles/edit/[id]/page.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ArticleForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                initialData: article,
                onSubmit: handleSubmit,
                isSubmitting: isSubmitting,
                error: error || undefined
            }, void 0, false, {
                fileName: "[project]/app/articles/edit/[id]/page.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/articles/edit/[id]/page.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
} // 'use client'; // Ce composant utilise des hooks, donc il doit être côté client
 // import { useEffect, useState } from 'react';
 // import { useRouter, useParams } from 'next/navigation';
 // export default function EditArticlePage() {
 //   const router = useRouter();
 //   const { id } = useParams();
 //   const [formData, setFormData] = useState({
 //     title: '',
 //     content: '',
 //     author: '',
 //   });
 //   const [isLoading, setIsLoading] = useState(true);
 //   const [error, setError] = useState<string | null>(null);
 //   // Récupère les données de l'article à modifier
 //   useEffect(() => {
 //     const fetchArticle = async () => {
 //       try {
 //         const res = await fetch(`api/articles/edit/${id}`);
 //         if (!res.ok) {
 //           throw new Error('Échec de la récupération de l\'article');
 //         }
 //         const data = await res.json();
 //         if (data) {
 //           setFormData({
 //             title: data.title || '',
 //             content: data.content || '',
 //             author: data.author || '',
 //           });
 //         }
 //       } catch (error) {
 //         console.error('Erreur lors de la récupération de l\'article :', error);
 //         setError('Erreur lors du chargement de l\'article');
 //       } finally {
 //         setIsLoading(false);
 //       }
 //     };
 //     fetchArticle();
 //   }, [id]);
 //   // Gère la soumission du formulaire
 //   const handleSubmit = async (e: React.FormEvent) => {
 //     e.preventDefault();
 //     try {
 //       const res = await fetch(`api/articles/edit/${id}`, {
 //         method: 'PUT',
 //         headers: {
 //           'Content-Type': 'application/json',
 //         },
 //         body: JSON.stringify(formData),
 //       });
 //       if (!res.ok) {
 //         throw new Error('Échec de la mise à jour de l\'article');
 //       }
 //       router.push('/articles'); // Redirige vers la liste des articles après la mise à jour
 //     } catch (error) {
 //       console.error('Erreur lors de la mise à jour de l\'article :', error);
 //       setError('Erreur lors de la mise à jour de l\'article');
 //     }
 //   };
 //   if (isLoading) {
 //     return <div className="p-6"><span>Chargement en cours...</span></div>;
 //   }
 //   if (error) {
 //     return <div className="p-6"><span className="text-red-500">{error}</span></div>;
 //   }
 //   return (
 //     <div className="p-6">
 //       <h1 className="text-2xl font-bold mb-4">Modifier l'article</h1>
 //       <form onSubmit={handleSubmit} className="space-y-4">
 //         <div>
 //           <label className="block text-sm font-medium text-gray-700">Titre</label>
 //           <input
 //             type="text"
 //             value={formData.title}
 //             onChange={(e) => setFormData({ ...formData, title: e.target.value })}
 //             className="mt-1 block w-full border border-gray-300 rounded-md p-2"
 //           />
 //         </div>
 //         <div>
 //           <label className="block text-sm font-medium text-gray-700">Contenu</label>
 //           <textarea
 //             value={formData.content}
 //             onChange={(e) => setFormData({ ...formData, content: e.target.value })}
 //             className="mt-1 block w-full border border-gray-300 rounded-md p-2"
 //           />
 //         </div>
 //         <div>
 //           <label className="block text-sm font-medium text-gray-700">Auteur</label>
 //           <input
 //             type="text"
 //             value={formData.author}
 //             onChange={(e) => setFormData({ ...formData, author: e.target.value })}
 //             className="mt-1 block w-full border border-gray-300 rounded-md p-2"
 //           />
 //         </div>
 //         <button
 //           type="submit"
 //           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
 //         >
 //           Enregistrer
 //         </button>
 //       </form>
 //     </div>
 //   );
 // }
_s(EditArticlePage, "037M+yVusc2/tFCU8k3h2+TzH/g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = EditArticlePage;
var _c;
__turbopack_context__.k.register(_c, "EditArticlePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_0dde9ebd._.js.map