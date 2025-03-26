module.exports = {

"[project]/lib/api.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "api": (()=>api)
});
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
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
}}),
"[project]/app/articles/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"404b3586585788deb79ddbda380583cd80d7f10267":"$$RSC_SERVER_ACTION_0"} */ __turbopack_context__.s({
    "$$RSC_SERVER_ACTION_0": (()=>$$RSC_SERVER_ACTION_0),
    "default": (()=>ArticlesPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
;
;
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ $$RSC_SERVER_ACTION_0 = async function action($$ACTION_CLOSURE_BOUND) {
    var [$$ACTION_ARG_0] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decryptActionBoundArgs"])("404b3586585788deb79ddbda380583cd80d7f10267", $$ACTION_CLOSURE_BOUND);
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].deleteArticle($$ACTION_ARG_0);
};
async function ArticlesPage() {
    const { data: articles } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].getArticles();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Liste des articles"
            }, void 0, false, {
                fileName: "[project]/app/articles/page.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/articles/create",
                className: "bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block",
                children: "Créer un article"
            }, void 0, false, {
                fileName: "[project]/app/articles/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: articles.map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border p-4 rounded",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold",
                                children: article.title
                            }, void 0, false, {
                                fileName: "[project]/app/articles/page.tsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mt-2",
                                children: article.content
                            }, void 0, false, {
                                fileName: "[project]/app/articles/page.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex gap-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/articles/edit/${article.id}`,
                                        className: "text-blue-500 hover:text-blue-700",
                                        children: "Modifier"
                                    }, void 0, false, {
                                        fileName: "[project]/app/articles/page.tsx",
                                        lineNumber: 20,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        action: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_0, "404b3586585788deb79ddbda380583cd80d7f10267", null).bind(null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encryptActionBoundArgs"])("404b3586585788deb79ddbda380583cd80d7f10267", article.id)),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "text-red-500 hover:text-red-700",
                                            children: "Supprimer"
                                        }, void 0, false, {
                                            fileName: "[project]/app/articles/page.tsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/articles/page.tsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/articles/page.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this)
                        ]
                    }, article.id, true, {
                        fileName: "[project]/app/articles/page.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/articles/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/articles/page.tsx",
        lineNumber: 8,
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
 //     <table className="min-w-full bg-black border border-gray-300">
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
 //                 href={`/articles/edit/${article._id}`}
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
}}),
"[project]/.next-internal/server/app/articles/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/articles/page.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/.next-internal/server/app/articles/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/articles/page.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$articles$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/articles/page.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$articles$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$articles$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/articles/page/actions.js { ACTIONS_MODULE0 => "[project]/app/articles/page.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/articles/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/articles/page.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "404b3586585788deb79ddbda380583cd80d7f10267": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$articles$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_0"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$articles$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/articles/page.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$articles$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$articles$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/articles/page/actions.js { ACTIONS_MODULE0 => "[project]/app/articles/page.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/articles/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/articles/page.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "404b3586585788deb79ddbda380583cd80d7f10267": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$articles$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$articles$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["404b3586585788deb79ddbda380583cd80d7f10267"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$articles$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$articles$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/articles/page/actions.js { ACTIONS_MODULE0 => "[project]/app/articles/page.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$articles$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$articles$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/articles/page/actions.js { ACTIONS_MODULE0 => "[project]/app/articles/page.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/articles/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/articles/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_10ee49b6._.js.map