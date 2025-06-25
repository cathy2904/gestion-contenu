(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_generate-image_page_tsx_d8008d93._.js", {

"[project]/app/generate-image/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// 'use client';
// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// interface GeneratedImage {
//   _id: string;
//   prompt: string;
//   style?: string;
//   provider: string;
//   n: number;
//   url: string[] | string; // Tu gères un tableau d'urls ou une url unique
//   createdAt: string;
// }
// export default function AdminImagesPage() {
//   const [images, setImages] = useState<GeneratedImage[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const res = await fetch('http://localhost:3003/api/images');
//         if (!res.ok) throw new Error('Erreur lors du chargement des images');
//         const data = await res.json();
//         setImages(data);
//       } catch (err: any) {
//         setError(err.message || 'Erreur inconnue');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchImages();
//   }, []);
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Toutes les Images Générées</h1>
//         <Link href="/generate-image/create" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//           + Créer une nouvelle image
//         </Link>
//       </div>
//       {loading && <p>Chargement...</p>}
//       {error && <p className="text-red-600">{error}</p>}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {images.map((img) => (
//           <div key={img._id} className="border rounded p-4 shadow bg-gray-800">
//             <div className="text-sm text-white space-y-1">
//               <p><strong>Prompt :</strong> {img.prompt}</p>
//               {img.style && <p><strong>Style :</strong> {img.style}</p>}
//               <p><strong>Fournisseur ia :</strong> {img.provider}</p>
//               <p><strong>Nombre :</strong> {img.n}</p>
//             </div>
//             <div className="grid grid-cols-2 gap-2 mt-3">
//               {Array.isArray(img.url) && img.url.length > 0 ? (
//                 img.url.map((url, index) => (
//                   <img
//                     key={index}
//                     src={url}
//                     alt={`Image générée ${index + 1}`}
//                     className="w-full h-auto rounded"
//                   />
//                 ))
//               ) : (
//                 <p className="text-sm text-gray-500">Aucune image disponible</p>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// 'use client';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// interface GeneratedImage {
//   _id: string;
//   url: string;
//   prompt: string;
//   createdAt: string;
// }
// export default function ImagesListPage() {
//   const [images, setImages] = useState<GeneratedImage[]>([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const res = await axios.get('http://localhost:3003/api/images');
//         setImages(res.data);
//       } catch (err) {
//         console.error('Erreur de chargement des images :', err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchImages();
//   }, []);
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Images générées</h1>
//       {loading ? (
//         <p>Chargement...</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {images.map((img) => (
//             <div key={img._id} className="border rounded p-4 shadow">
//               <img
//                 src={img.url}
//                 alt={img.prompt}
//                 className="w-full h-auto rounded mb-2"
//               />
//               <p className="text-sm text-gray-600 mb-1">
//                 <strong>Prompt :</strong> {img.prompt}
//               </p>
//               <p className="text-xs text-gray-500">
//                 Généré le : {new Date(img.createdAt).toLocaleString()}
//               </p>
//               <a
//                 href={img.url}
//                 download
//                 className="inline-block mt-2 text-blue-600 hover:underline text-sm"
//               >
//                 Télécharger
//               </a>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
__turbopack_context__.s({
    "default": (()=>AdminImagesPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function AdminImagesPage() {
    _s();
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminImagesPage.useEffect": ()=>{
            const fetchImages = {
                "AdminImagesPage.useEffect.fetchImages": async ()=>{
                    try {
                        const res = await fetch('http://localhost:3003/api/images');
                        if (!res.ok) throw new Error('Erreur lors du chargement des images');
                        const data = await res.json();
                        setImages(data);
                    } catch (err) {
                        setError(err.message || 'Erreur inconnue');
                    } finally{
                        setLoading(false);
                    }
                }
            }["AdminImagesPage.useEffect.fetchImages"];
            fetchImages();
        }
    }["AdminImagesPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-6xl mx-auto px-4 py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold",
                        children: "Toutes les Images Générées"
                    }, void 0, false, {
                        fileName: "[project]/app/generate-image/page.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/generate-image/create",
                        className: "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700",
                        children: "+ Créer une nouvelle image"
                    }, void 0, false, {
                        fileName: "[project]/app/generate-image/page.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/generate-image/page.tsx",
                lineNumber: 191,
                columnNumber: 9
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Chargement..."
            }, void 0, false, {
                fileName: "[project]/app/generate-image/page.tsx",
                lineNumber: 201,
                columnNumber: 21
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/app/generate-image/page.tsx",
                lineNumber: 202,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: images.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border rounded p-4 shadow bg-gray",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-white-700 space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Prompt :"
                                            }, void 0, false, {
                                                fileName: "[project]/app/generate-image/page.tsx",
                                                lineNumber: 209,
                                                columnNumber: 20
                                            }, this),
                                            " ",
                                            img.prompt
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/generate-image/page.tsx",
                                        lineNumber: 209,
                                        columnNumber: 17
                                    }, this),
                                    img.style && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Style :"
                                            }, void 0, false, {
                                                fileName: "[project]/app/generate-image/page.tsx",
                                                lineNumber: 210,
                                                columnNumber: 34
                                            }, this),
                                            " ",
                                            img.style
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/generate-image/page.tsx",
                                        lineNumber: 210,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Fournisseur ia :"
                                            }, void 0, false, {
                                                fileName: "[project]/app/generate-image/page.tsx",
                                                lineNumber: 212,
                                                columnNumber: 20
                                            }, this),
                                            " ",
                                            img.provider
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/generate-image/page.tsx",
                                        lineNumber: 212,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/generate-image/page.tsx",
                                lineNumber: 207,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-2 mt-3",
                                children: Array.isArray(img.url) && img.url.length > 0 ? img.url.map((url, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: url,
                                        alt: `Image générée ${index + 1}`,
                                        className: "w-full h-auto rounded"
                                    }, index, false, {
                                        fileName: "[project]/app/generate-image/page.tsx",
                                        lineNumber: 223,
                                        columnNumber: 25
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500",
                                    children: "Aucune image disponible"
                                }, void 0, false, {
                                    fileName: "[project]/app/generate-image/page.tsx",
                                    lineNumber: 231,
                                    columnNumber: 26
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/generate-image/page.tsx",
                                lineNumber: 220,
                                columnNumber: 21
                            }, this)
                        ]
                    }, img._id, true, {
                        fileName: "[project]/app/generate-image/page.tsx",
                        lineNumber: 206,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/generate-image/page.tsx",
                lineNumber: 204,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/generate-image/page.tsx",
        lineNumber: 190,
        columnNumber: 7
    }, this);
}
_s(AdminImagesPage, "SGYMHLW/ngJ/dX7fYKx5qnwA+98=");
_c = AdminImagesPage;
var _c;
__turbopack_context__.k.register(_c, "AdminImagesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_generate-image_page_tsx_d8008d93._.js.map