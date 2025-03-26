(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_8bc4927b._.js", {

"[project]/lib/api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createArticle": (()=>createArticle),
    "deleteArticle": (()=>deleteArticle),
    "getArticle": (()=>getArticle),
    "getArticles": (()=>getArticles),
    "updateArticle": (()=>updateArticle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:3000") || 'http://localhost:3000';
const getArticles = async ()=>{
    const response = await fetch(`${API_BASE_URL}/articles`);
    return response.json();
};
const getArticle = async (id)=>{
    const response = await fetch(`${API_BASE_URL}/articles/${id}`);
    return response.json();
};
const createArticle = async (article)=>{
    const response = await fetch(`${API_BASE_URL}/articles`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(article)
    });
    return response.json();
};
const updateArticle = async (id, article)=>{
    const response = await fetch(`${API_BASE_URL}/articles/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(article)
    });
    return response.json();
};
const deleteArticle = async (id)=>{
    await fetch(`${API_BASE_URL}/articles/${id}`, {
        method: 'DELETE'
    });
}; // export interface Article {
 //     _id: string;
 //     title: string;
 //     content: string;
 //     author: string;
 //     createdAt: string;
 //   }
 //   const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
 //   export const fetchArticles = async (): Promise<Article[]> => {
 //     const res = await fetch(`${API_URL}/articles`);
 //     return res.json();
 //   };
 //   export const fetchArticle = async (id: string): Promise<Article> => {
 //     const res = await fetch(`${API_URL}/articles/${id}`);
 //     return res.json();
 //   };
 //   export const createArticle = async (article: Omit<Article, '_id' | 'createdAt'>): Promise<Article> => {
 //     const res = await fetch(`${API_URL}/articles`, {
 //       method: 'POST',
 //       headers: { 'Content-Type': 'application/json' },
 //       body: JSON.stringify(article),
 //     });
 //     return res.json();
 //   };
 //   export const updateArticle = async (id: string, article: Partial<Article>): Promise<Article> => {
 //     const res = await fetch(`${API_URL}/articles/${id}`, {
 //       method: 'PUT',
 //       headers: { 'Content-Type': 'application/json' },
 //       body: JSON.stringify(article),
 //     });
 //     return res.json();
 //   };
 //   export const deleteArticle = async (id: string): Promise<void> => {
 //     await fetch(`${API_URL}/articles/${id}`, {
 //       method: 'DELETE',
 //     });
 //   };
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/articles/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ArticlesPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ArticlesPage() {
    _s();
    const [articles, setArticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticlesPage.useEffect": ()=>{
            const loadData = {
                "ArticlesPage.useEffect.loadData": async ()=>{
                    try {
                        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArticles"])();
                        setArticles(data);
                    } catch (error) {
                        console.error('Error loading articles:', error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["ArticlesPage.useEffect.loadData"];
            loadData();
        }
    }["ArticlesPage.useEffect"], []);
    const handleDelete = async (id)=>{
        if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteArticle"])(id);
                setArticles((prev)=>prev.filter((article)=>article._id !== id));
            } catch (error) {
                console.error('Error deleting article:', error);
            }
        }
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center p-8",
        children: "Chargement..."
    }, void 0, false, {
        fileName: "[project]/app/articles/page.tsx",
        lineNumber: 36,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold",
                        children: "Liste des Articles"
                    }, void 0, false, {
                        fileName: "[project]/app/articles/page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/articles/new",
                        className: "bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700",
                        children: "Nouvel article"
                    }, void 0, false, {
                        fileName: "[project]/app/articles/page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/articles/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6",
                children: articles.map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border rounded-lg p-6 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold",
                                                children: article.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/articles/page.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 mt-2",
                                                children: article.author
                                            }, void 0, false, {
                                                fileName: "[project]/app/articles/page.tsx",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 text-sm mt-1",
                                                children: new Date(article.createdAt).toLocaleDateString()
                                            }, void 0, false, {
                                                fileName: "[project]/app/articles/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/articles/page.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/articles/${article._id}`,
                                                className: "text-blue-600 hover:text-blue-800 px-3 py-1",
                                                children: "Voir"
                                            }, void 0, false, {
                                                fileName: "[project]/app/articles/page.tsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/articles/edit/${article._id}`,
                                                className: "text-green-600 hover:text-green-800 px-3 py-1",
                                                children: "Éditer"
                                            }, void 0, false, {
                                                fileName: "[project]/app/articles/page.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleDelete(article._id),
                                                className: "text-red-600 hover:text-red-800 px-3 py-1",
                                                children: "Supprimer"
                                            }, void 0, false, {
                                                fileName: "[project]/app/articles/page.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/articles/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/articles/page.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-gray-700",
                                children: [
                                    article.content.slice(0, 100),
                                    "..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/articles/page.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        ]
                    }, article._id, true, {
                        fileName: "[project]/app/articles/page.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/articles/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/articles/page.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
} // 'use client';
 //  import { useState , useEffect} from 'react';
 // import Link from 'next/link';
 // interface Article {
 //   _id: string;
 //   title: string;
 //   content: string;
 //   author: string;
 // }
 // interface ArticleTableProps {
 //   articles: Article[];
 // }
 // export default function ArticlesPage() {
 //   const [articles, setArticles] = useState<any[]>([]);
 //   // Charger les articles au montage du composant
 //   useEffect(() => {
 //     fetchArticles();
 //   }, []);
 //   // Fonction pour récupérer les articles
 //   const fetchArticles = async () => {
 //     const res = await fetch('/api/articles');
 //     const data = await res.json();
 //     setArticles(data);
 //   };
 // const createArticle = async (article: { title: string; content: string; author: string }) => {
 //   const res = await fetch('/api/articles', {
 //     method: 'POST',
 //     headers: {
 //       'Content-Type': 'application/json',
 //     },
 //     body: JSON.stringify(article),
 //   });
 //   const data = await res.json();
 //   return data;
 // };
 // const updateArticle = async (id: string, article: { title: string; content: string; author: string }) => {
 //   const res = await fetch('/api/articles', {
 //     method: 'PUT',
 //     headers: {
 //       'Content-Type': 'application/json',
 //     },
 //     body: JSON.stringify({ id, ...article }),
 //   });
 //   const data = await res.json();
 //   return data;
 // };
 // const deleteArticle = async (id: string) => {
 //   const res = await fetch('/api/articles', {
 //     method: 'DELETE',
 //     headers: {
 //       'Content-Type': 'application/json',
 //     },
 //     body: JSON.stringify({ id }),
 //   });
 //   const data = await res.json();
 //   return data;
 // };
 // // export default function ArticleTable({ articles }: ArticleTableProps) {
 // //   const handleDelete = async (id: string) => {
 // //     const confirmDelete = confirm('Êtes-vous sûr de vouloir supprimer cet article ?');
 // //     if (confirmDelete) {
 // //       const res = await fetch(`http://localhost:3003/api/articles/${id}`, {
 // //         method: 'DELETE',
 // //       });
 // //       if (res.ok) {
 // //         alert('Article supprimé avec succès');
 // //         window.location.reload(); // Recharger la page pour mettre à jour la liste
 // //       }
 // //     }
 // //   };
 //   return (
 //     <table className="min-b-full bg-black border border-gray-300">
 //       <thead>
 //         <tr>
 //           <th className="py-2 px-4 border-b">Titre</th>
 //           <th className="py-2 px-4 border-b">Contenu</th>
 //           <th className="py-2 px-4 border-b">Auteur</th>
 //           <th className="py-2 px-4 border-b">Actions</th>
 //         </tr>
 //       </thead>
 //       <tbody>
 //         {articles.map((article) => (
 //           <tr key={article._id} className="hover:bg-gray-50">
 //             <td className="py-2 px-4 border-b">{article.title}</td>
 //             <td className="py-2 px-4 border-b">{article.content}</td>
 //             <td className="py-2 px-4 border-b">{article.author}</td>
 //             <td className="py-2 px-4 border-b">
 //               <Link
 //                 href={`/articles/${article._id}/edit`}
 //                 className="text-blue-500 hover:text-blue-700 mr-2"
 //               >
 //                 Modifier
 //               </Link>
 //               <button
 //                 onClick={() => handleDelete(article._id)}
 //                 className="text-red-500 hover:text-red-700"
 //               >
 //                 Supprimer
 //               </button>
 //             </td>
 //           </tr>
 //         ))}
 //       </tbody>
 //     </table>
 //   );
 // }
_s(ArticlesPage, "ByfW2W02M1Fj4gKraM3ZQ6w4KbM=");
_c = ArticlesPage;
var _c;
__turbopack_context__.k.register(_c, "ArticlesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_8bc4927b._.js.map