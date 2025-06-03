module.exports = {

"[project]/app/content/schedule/[id]/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ScheduleContentPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function ScheduleContentPage() {
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [publicationDate, setPublicationDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchContent = async ()=>{
            const res = await fetch(`http://localhost:3003/api/content/${id}`);
            const data = await res.json();
            setTitle(data.title);
            setContent(data.content);
        };
        if (id) fetchContent();
    }, [
        id
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        await fetch(`http://localhost:3003/api/content/schedule/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                content,
                publicationDate
            })
        });
        router.push('/content');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 max-w-xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-xl font-semibold mb-4",
                children: "Planifier la publication"
            }, void 0, false, {
                fileName: "[project]/app/content/schedule/[id]/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: title,
                        onChange: (e)=>setTitle(e.target.value),
                        className: "w-full border px-3 py-2 rounded",
                        placeholder: "Titre",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/content/schedule/[id]/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: content,
                        onChange: (e)=>setContent(e.target.value),
                        className: "w-full border px-3 py-2 rounded",
                        placeholder: "Contenu",
                        rows: 5,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/content/schedule/[id]/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "datetime-local",
                        value: publicationDate,
                        onChange: (e)=>setPublicationDate(e.target.value),
                        className: "w-full border px-3 py-2 rounded",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/content/schedule/[id]/page.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700",
                        children: "Planifier"
                    }, void 0, false, {
                        fileName: "[project]/app/content/schedule/[id]/page.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/content/schedule/[id]/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/content/schedule/[id]/page.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
} // "use client";
 // import { useEffect, useState } from "react";
 // import { useParams, useRouter } from "next/navigation";
 // import { Eye, Pencil, Calendar, Trash2 } from 'lucide-react';
 // export interface Content {
 //   _id: string;
 //   title: string;
 //   content: string;
 //   user: string;
 //   publicationDate: Date;
 //   statut: 'brouillon' | 'programmé' | 'publié';
 // }
 // export default function ScheduleContentPage() {
 //   const { id } = useParams();
 //   const router = useRouter();
 //   const [title, setTitle] = useState("");
 //   const [content, setContent] = useState("");
 //   const [publicationDate, setPublicationDate] = useState("");
 //   useEffect(() => {
 //     fetch(`http://localhost:3003/api/content/${id}`)
 //       .then((res) => res.json())
 //       .then((data) => {
 //         setTitle(data.title);
 //         setContent(data.content);
 //         if (data.publicationDate) {
 //           setPublicationDate(new Date(data.publicationDate).toISOString().slice(0, 16));
 //         }
 //       });
 //   }, [id]);
 //   const handleSubmit = async (e: any) => {
 //     e.preventDefault();
 //     await fetch(`http://localhost:3003/api/content/schedule/${id}`, {
 //       method: "PUT",
 //       headers: {
 //         "Content-Type": "application/json",
 //       },
 //       body: JSON.stringify({ 
 //         title,
 //         content,
 //         publicationDate }),
 //     });
 //     router.push("/content");
 //   };
 //   return (
 //     <form onSubmit={handleSubmit} className="p-6">
 //       <h1 className="text-2xl font-bold mb-4">Planifier la publication</h1>
 //       <p className="mb-2 font-semibold">{title}</p>
 //       <input
 //         type="datetime-local"
 //         value={publicationDate}
 //         onChange={(e) => setPublicationDate(e.target.value)}
 //         className="block w-full p-2 border mb-4"
 //       />
 //       <input
 //         type="text"
 //         value={title}
 //         onChange={(e) => setTitle(e.target.value)}
 //         className="block w-full p-2 border mb-4"
 //         placeholder="Titre"
 //       />
 //       <textarea
 //         value={content}
 //         onChange={(e) => setContent(e.target.value)}
 //         className="block w-full p-2 border mb-4"
 //         rows={6}
 //         placeholder="Contenu"
 //       ></textarea>
 //       <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
 //         Planifier
 //       </button>
 //     </form>
 //   );
 // }
}}),

};

//# sourceMappingURL=app_content_schedule_%5Bid%5D_page_tsx_f576d21b._.js.map