(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_articles_page_tsx_f77f0805._.js", {

"[project]/app/articles/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// 'use client';
// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { getArticles, deleteArticle } from '@/lib/api';
// export default function ArticlesPage() {
//   const [articles, setArticles] = useState<Article[]>([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const data = await getArticles();
//         setArticles(data);
//       } catch (error) {
//         console.error('Error loading articles:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadData();
//   }, []);
//   const handleDelete = async (id: string) => {
//     if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
//       try {
//         await deleteArticle(id);
//         setArticles(prev => prev.filter(article => article._id !== id));
//       } catch (error) {
//         console.error('Error deleting article:', error);
//       }
//     }
//   };
//   if (loading) return <div className="text-center p-8">Chargement...</div>;
//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold">Liste des Articles</h1>
//         <Link
//           href="/articles/new"
//           className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
//         >
//           Nouvel article
//         </Link>
//       </div>
//       <div className="grid gap-6">
//         {articles.map(article => (
//           <div key={article._id} className="border rounded-lg p-6 shadow-sm">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h2 className="text-xl font-semibold">{article.title}</h2>
//                 <p className="text-gray-600 mt-2">{article.author}</p>
//                 <p className="text-gray-500 text-sm mt-1">
//                   {new Date(article.createdAt).toLocaleDateString()}
//                 </p>
//               </div>
//               <div className="flex gap-2">
//                 <Link
//                   href={`/articles/${article._id}`}
//                   className="text-blue-600 hover:text-blue-800 px-3 py-1"
//                 >
//                   Voir
//                 </Link>
//                 <Link
//                   href={`/articles/edit/${article._id}`}
//                   className="text-green-600 hover:text-green-800 px-3 py-1"
//                 >
//                   Éditer
//                 </Link>
//                 <button
//                   onClick={() => handleDelete(article._id)}
//                   className="text-red-600 hover:text-red-800 px-3 py-1"
//                 >
//                   Supprimer
//                 </button>
//               </div>
//             </div>
//             <p className="mt-4 text-gray-700">{article.content.slice(0, 100)}...</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
__turbopack_context__.s({
    "default": (()=>ArticlesPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ArticlesPage() {
    _s();
    const [articles, setArticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Charger les articles au montage du composant
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticlesPage.useEffect": ()=>{
            fetchArticles();
        }
    }["ArticlesPage.useEffect"], []);
    // Fonction pour récupérer les articles
    const fetchArticles = async ()=>{
        const res = await fetch('/api/articles');
        const data = await res.json();
        setArticles(data);
    };
    const createArticle = async (article)=>{
        const res = await fetch('/api/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(article)
        });
        const data = await res.json();
        return data;
    };
    const updateArticle = async (id, article)=>{
        const res = await fetch('/api/articles', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id,
                ...article
            })
        });
        const data = await res.json();
        return data;
    };
    const deleteArticle = async (id)=>{
        const res = await fetch('/api/articles', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id
            })
        });
        const data = await res.json();
        return data;
    };
    // export default function ArticleTable({ articles }: ArticleTableProps) {
    //   const handleDelete = async (id: string) => {
    //     const confirmDelete = confirm('Êtes-vous sûr de vouloir supprimer cet article ?');
    //     if (confirmDelete) {
    //       const res = await fetch(`http://localhost:3003/api/articles/${id}`, {
    //         method: 'DELETE',
    //       });
    //       if (res.ok) {
    //         alert('Article supprimé avec succès');
    //         window.location.reload(); // Recharger la page pour mettre à jour la liste
    //       }
    //     }
    //   };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
        className: "min-b-full bg-black border border-gray-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            className: "py-2 px-4 border-b",
                            children: "Titre"
                        }, void 0, false, {
                            fileName: "[project]/app/articles/page.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            className: "py-2 px-4 border-b",
                            children: "Contenu"
                        }, void 0, false, {
                            fileName: "[project]/app/articles/page.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            className: "py-2 px-4 border-b",
                            children: "Auteur"
                        }, void 0, false, {
                            fileName: "[project]/app/articles/page.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            className: "py-2 px-4 border-b",
                            children: "Actions"
                        }, void 0, false, {
                            fileName: "[project]/app/articles/page.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/articles/page.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/articles/page.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                children: articles.map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        className: "hover:bg-gray-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "py-2 px-4 border-b",
                                children: article.title
                            }, void 0, false, {
                                fileName: "[project]/app/articles/page.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "py-2 px-4 border-b",
                                children: article.content
                            }, void 0, false, {
                                fileName: "[project]/app/articles/page.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "py-2 px-4 border-b",
                                children: article.author
                            }, void 0, false, {
                                fileName: "[project]/app/articles/page.tsx",
                                lineNumber: 188,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "py-2 px-4 border-b",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/articles/edit/${article._id}`,
                                        className: "text-blue-500 hover:text-blue-700 mr-2",
                                        children: "Modifier"
                                    }, void 0, false, {
                                        fileName: "[project]/app/articles/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleDelete(article._id),
                                        className: "text-red-500 hover:text-red-700",
                                        children: "Supprimer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/articles/page.tsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/articles/page.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this)
                        ]
                    }, article._id, true, {
                        fileName: "[project]/app/articles/page.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/articles/page.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/articles/page.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
_s(ArticlesPage, "XsOpLvUbTkfx79dw07TVNsBviNQ=");
_c = ArticlesPage;
var _c;
__turbopack_context__.k.register(_c, "ArticlesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_articles_page_tsx_f77f0805._.js.map