module.exports = {

"[project]/lib/api.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createArticle": (()=>createArticle),
    "deleteArticle": (()=>deleteArticle),
    "getArticle": (()=>getArticle),
    "getArticles": (()=>getArticles),
    "updateArticle": (()=>updateArticle)
});
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
}}),
"[project]/app/articles/[id]/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ArticleDetailPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ArticleDetailPage({ params }) {
    const [article, setArticle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadArticle = async ()=>{
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArticle"])(params.id);
                setArticle(data);
            } catch (error) {
                console.error('Error loading article:', error);
                router.push('/articles');
            }
        };
        loadArticle();
    }, [
        params.id,
        router
    ]);
    if (!article) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center p-8",
        children: "Chargement..."
    }, void 0, false, {
        fileName: "[project]/app/articles/[id]/page.tsx",
        lineNumber: 23,
        columnNumber: 24
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto p-4 max-w-3xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>router.back(),
                className: "mb-6 text-blue-600 hover:text-blue-800",
                children: "← Retour"
            }, void 0, false, {
                fileName: "[project]/app/articles/[id]/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-4",
                children: article.title
            }, void 0, false, {
                fileName: "[project]/app/articles/[id]/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 text-gray-500",
                children: [
                    "Par ",
                    article.author,
                    " • ",
                    new Date(article.createdAt).toLocaleDateString()
                ]
            }, void 0, true, {
                fileName: "[project]/app/articles/[id]/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "prose max-w-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "whitespace-pre-wrap",
                    children: article.content
                }, void 0, false, {
                    fileName: "[project]/app/articles/[id]/page.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/articles/[id]/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/articles/[id]/page.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=_a0106e12._.js.map