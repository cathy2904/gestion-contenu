module.exports = {

"[project]/app/drafts/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DraftsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function DraftsPage() {
    const [documents, setDocuments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch('http://localhost:3003/api/documents') // Assure-toi d’avoir une route GET
        .then((res)=>res.json()).then((data)=>setDocuments(data));
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Documents enregistrés"
            }, void 0, false, {
                fileName: "[project]/app/drafts/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            documents.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Aucun document trouvé."
            }, void 0, false, {
                fileName: "[project]/app/drafts/page.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-4",
                children: documents.map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "border p-4 rounded shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold",
                                children: doc.title
                            }, void 0, false, {
                                fileName: "[project]/app/drafts/page.tsx",
                                lineNumber: 22,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600",
                                children: doc.createdAt
                            }, void 0, false, {
                                fileName: "[project]/app/drafts/page.tsx",
                                lineNumber: 23,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2",
                                title: doc.summary,
                                children: [
                                    doc.summary?.slice(0, 250),
                                    "..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/drafts/page.tsx",
                                lineNumber: 24,
                                columnNumber: 15
                            }, this)
                        ]
                    }, doc._id, true, {
                        fileName: "[project]/app/drafts/page.tsx",
                        lineNumber: 21,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/drafts/page.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/drafts/page.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
} // 'use client';
 // import { useEffect, useState } from 'react';
 // export default function DraftsPage() {
 //   const [docs, setDocs] = useState<any[]>([]);
 //   const [loading, setLoading] = useState(true);
 //   const fetchDocs = async () => {
 //     const res = await fetch('http://localhost:3001/documents');
 //     const data = await res.json();
 //     setDocs(data);
 //     setLoading(false);
 //   };
 //   const handleDelete = async (id: string) => {
 //     await fetch(`http://localhost:3001/documents/${id}`, { method: 'DELETE' });
 //     fetchDocs();
 //   };
 //   useEffect(() => {
 //     fetchDocs();
 //   }, []);
 //   return (
 //     <div className="p-4">
 //       <h1 className="text-xl font-bold mb-4">Tous les documents</h1>
 //       {loading ? <p>Chargement...</p> : (
 //         <ul className="space-y-4">
 //           {docs.map(doc => (
 //             <li key={doc._id} className="border p-4 rounded shadow">
 //               <h2 className="font-bold">{doc.title}</h2>
 //               <p className="text-sm text-gray-500">Résumé : {doc.summary?.slice(0, 200)}...</p>
 //               <div className="mt-2 flex gap-2">
 //                 <button onClick={() => handleDelete(doc._id)} className="bg-red-500 text-white px-2 py-1 rounded">Supprimer</button>
 //               </div>
 //             </li>
 //           ))}
 //         </ul>
 //       )}
 //     </div>
 //   );
 // }
}}),

};

//# sourceMappingURL=app_drafts_page_tsx_80f5630a._.js.map