module.exports = {

"[project]/.next-internal/server/app/content/read/[id]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
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
"[project]/app/content/read/[id]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// app/content/read/[id]/page.tsx
__turbopack_context__.s({
    "default": (()=>ContentReadPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
;
async function ContentReadPage({ params }) {
    const res = await fetch(`/content/${params.id}`, {
        cache: 'no-store'
    });
    if (!res.ok) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const content = await res.json();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold",
                children: content.title
            }, void 0, false, {
                fileName: "[project]/app/content/read/[id]/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-700 whitespace-pre-line",
                children: content.generatedContent
            }, void 0, false, {
                fileName: "[project]/app/content/read/[id]/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            content.media?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6",
                children: content.media.map((url, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: url,
                        alt: `Image ${index + 1}`,
                        width: 500,
                        height: 300,
                        className: "rounded-lg object-cover"
                    }, index, false, {
                        fileName: "[project]/app/content/read/[id]/page.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/content/read/[id]/page.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/content/read/[id]/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
} // 'use client';
 // import { useEffect, useState } from 'react';
 // import { useParams } from 'next/navigation';
 // import axios from 'axios';
 // export default function ReadContentPage() {
 //   const { id } = useParams();
 //   const [content, setContent] = useState<{
 //     title: string;
 //     content: string;
 //     publicationDate?: string;
 //     statut?: string;
 //   } | null>(null);
 //   const [loading, setLoading] = useState(true);
 //   useEffect(() => {
 //     if (!id) return;
 //     const fetchContent = async () => {
 //       try {
 //         const response = await axios.get(`http://localhost:3000/api/content/${id}`);
 //         setContent(response.data);
 //       } catch (error) {
 //         console.error('Erreur lors du chargement du contenu', error);
 //       } finally {
 //         setLoading(false);
 //       }
 //     };
 //     fetchContent();
 //   }, [id]);
 //   if (loading) return <p>Chargement...</p>;
 //   if (!content) return <p>Contenu non trouvé.</p>;
 //   return (
 //     <div className="max-w-2xl mx-auto p-6">
 //       <h1 className="text-2xl font-bold mb-4">{content.title}</h1>
 //       <p className="text-white-700 whitespace-pre-wrap">{content.content}</p>
 //       <div className="mt-6 text-sm text-white-500">
 //         <p><strong>Statut :</strong> {content.statut || 'non défini'}</p>
 //         {content.publicationDate && (
 //           <p><strong>Date de publication :</strong> {new Date(content.publicationDate).toLocaleString()}</p>
 //         )}
 //       </div>
 //     </div>
 //   );
 // }
}}),
"[project]/app/content/read/[id]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/content/read/[id]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_2f7570f6._.js.map