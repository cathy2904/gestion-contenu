(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_7f2f066c._.js", {

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
const API_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'http://localhost:3003';
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
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function EditArticlePage({ params }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        content: '',
        author: ''
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditArticlePage.useEffect": ()=>{
            const loadArticle = {
                "EditArticlePage.useEffect.loadArticle": async ()=>{
                    try {
                        const article = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArticle"])(params.id);
                        setFormData({
                            title: article.title,
                            content: article.content,
                            author: article.author
                        });
                    } catch (error) {
                        console.error('Error loading article:', error);
                        router.push('/articles');
                    }
                }
            }["EditArticlePage.useEffect.loadArticle"];
            loadArticle();
        }
    }["EditArticlePage.useEffect"], [
        params.id,
        router
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateArticle"])(params.id, formData);
            router.push('/articles');
        } catch (error) {
            console.error('Error updating article:', error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto p-4 max-w-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-6",
                children: "Modifier l'article"
            }, void 0, false, {
                fileName: "[project]/app/articles/edit/[id]/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-6"
            }, void 0, false, {
                fileName: "[project]/app/articles/edit/[id]/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/articles/edit/[id]/page.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
} // 'use client';
 // import { useEffect, useState } from 'react';
 // import { useRouter } from 'next/navigation';
 // interface Article {
 //   _id: string;
 //   title: string;
 //   content: string;
 //   author: string;
 // }
 // export default function EditArticlePage({ params }: { params: { id: string } }) {
 //   const router = useRouter();
 //   const [formData, setFormData] = useState<Article>({
 //     _id: '',
 //     title: '',
 //     content: '',
 //     author: ''
 //   });
 //   const [loading, setLoading] = useState(true);
 //   const [error, setError] = useState('');
 //   useEffect(() => {
 //     const fetchArticle = async () => {
 //       try {
 //         const res = await fetch(`/api/articles/${params.id}`);
 //         if (!res.ok) throw new Error('Article non trouvé');
 //         const data = await res.json();
 //         setFormData(data);
 //       } catch (err) {
 //         setError('Échec du chargement de l\'article');
 //         console.error(err);
 //       } finally {
 //         setLoading(false);
 //       }
 //     };
 //     fetchArticle();
 //   }, [params.id]);
 //   const handleSubmit = async (e: React.FormEvent) => {
 //     e.preventDefault();
 //     setError('');
 //     try {
 //       const res = await fetch(`/api/articles/${params.id}`, {
 //         method: 'PUT',
 //         headers: {
 //           'Content-Type': 'application/json',
 //         },
 //         body: JSON.stringify(formData),
 //       });
 //       if (!res.ok) throw new Error('Échec de la mise à jour');
 //       router.push('/articles');
 //     } catch (err) {
 //       setError('Erreur lors de la mise à jour');
 //       console.error(err);
 //     }
 //   };
 //   if (loading) {
 //     return (
 //       <div className="p-6 text-center">
 //         <p>Chargement...</p>
 //       </div>
 //     );
 //   }
 //   if (error) {
 //     return (
 //       <div className="p-6 text-red-500">
 //         <p>{error}</p>
 //       </div>
 //     );
 //   }
 //   return (
 //     <div className="p-6 max-w-2xl mx-auto">
 //       <h1 className="text-2xl font-bold mb-6">Modifier l'article</h1>
 //       <form onSubmit={handleSubmit} className="space-y-6">
 //         <div>
 //           <label className="block text-sm font-medium mb-2">Titre</label>
 //           <input
 //             type="text"
 //             value={formData.title}
 //             onChange={(e) => setFormData({ ...formData, title: e.target.value })}
 //             className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
 //             required
 //           />
 //         </div>
 //         <div>
 //           <label className="block text-sm font-medium mb-2">Contenu</label>
 //           <textarea
 //             value={formData.content}
 //             onChange={(e) => setFormData({ ...formData, content: e.target.value })}
 //             className="w-full p-2 border rounded h-48 focus:ring-2 focus:ring-blue-500"
 //             required
 //           />
 //         </div>
 //         <div>
 //           <label className="block text-sm font-medium mb-2">Auteur</label>
 //           <input
 //             type="text"
 //             value={formData.author}
 //             onChange={(e) => setFormData({ ...formData, author: e.target.value })}
 //             className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
 //             required
 //           />
 //         </div>
 //         {error && <p className="text-red-500">{error}</p>}
 //         <div className="flex gap-4">
 //           <button
 //             type="button"
 //             onClick={() => router.push('/articles')}
 //             className="px-4 py-2 border rounded hover:bg-gray-50"
 //           >
 //             Annuler
 //           </button>
 //           <button
 //             type="submit"
 //             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
 //           >
 //             Enregistrer
 //           </button>
 //         </div>
 //       </form>
 //     </div>
 //   );
 // }
_s(EditArticlePage, "KiOCsk9xfCjMN0wuaK+I3YUH+Lk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
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

//# sourceMappingURL=_7f2f066c._.js.map