(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_generate-image_create_page_tsx_392e9702._.js", {

"[project]/app/generate-image/create/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// 'use client';
// import { useState } from 'react';
// import axios from 'axios';
// interface GeneratedImage {
//   _id: string;
//   url: string;
//   style: string;
//   prompt: string;
//   createdAt: string;
// }
// export default function ImageGeneratorPage() {
//   const [images, setImages] = useState<GeneratedImage[]>([]);
//   const [prompt, setPrompt] = useState('');
//   const [style, setStyle] = useState('digital painting');
//   const [format, setFormat] = useState<'png' | 'jpg' | 'jpeg'>('png');
//   const [size, setSize] = useState('1024x1024');
//   const [n, setN] = useState(1);
//   //const [images, setImages] = useState<string[]>([]);
//   const [loading, setLoading] = useState(false);
//   const generateImage = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.post('http://localhost:3003/api/images/generate', {
//         prompt,
//         style,
//         format,
//         size,
//         n,
//         // userId: '1234',
//       });
//       setImages(res.data);
//     } catch (error) {
//       console.error('Erreur de génération :', error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Générateur d'image avec GPT</h1>
//       <input
//         type="text"
//         placeholder="Titre / Prompt"
//         value={prompt}
//         onChange={(e) => setPrompt(e.target.value)}
//         className="border px-4 py-2 mb-4 w-full"
//       />
//       <select
//         value={style}
//         onChange={(e) => setStyle(e.target.value)}
//         className="border px-4 py-2 mb-4 w-full"
//       >
//         <option value="digital painting">Digital Painting</option>
//         <option value="photorealistic">Photorealistic</option>
//         <option value="cartoon">Cartoon</option>
//         <option value="fantasy art">Fantasy Art</option>
//       </select>
//       <select
//         value={size}
//         onChange={(e) => setSize(e.target.value)}
//         className="border px-4 py-2 mb-4 w-full"
//       >
//         <option value="512x512">512x512</option>
//         <option value="1024x1024">1024x1024</option>
//         <option value="1792x1024">1792x1024</option>
//         <option value="1024x1792">1024x1792</option>
//       </select>
//       <select
//         value={format}
//         onChange={(e) => setFormat(e.target.value as any)}
//         className="border px-4 py-2 mb-4 w-full"
//       >
//         <option value="png">PNG</option>
//         <option value="jpg">JPG</option>
//         <option value="jpeg">JPEG</option>
//       </select>
//       <input
//         type="number"
//         min={1}
//         max={5}
//         value={n}
//         onChange={(e) => setN(parseInt(e.target.value))}
//         className="border px-4 py-2 mb-4 w-full"
//       />
//       <button
//         onClick={generateImage}
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//         disabled={loading}
//       >
//         {loading ? 'Chargement...' : 'Générer'}
//       </button>
//       {images.length > 0 && (
//         <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {images.map((img, i) => (
//             <div key={i} className="border p-2 rounded">
//               <img src={img.url} alt={img.prompt} className="w-full rounded" />
//               <a
//                 href={img.url}
//                 download={`image_${i}.${format}`}
//                 className="mt-2 block text-blue-500 underline text-sm"
//               >
//                 Télécharger
//               </a>
//               <p className="text-xs mt-1 text-gray-600">{img.prompt} ({img.style})</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
__turbopack_context__.s({
    "default": (()=>GenerateImagePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function GenerateImagePage() {
    _s();
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [style, setStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [provider, setProvider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('openai');
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('512x512');
    const [n, setN] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSaved, setIsSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError('');
        setImages([]);
        try {
            const response = await fetch('http://localhost:3003/api/images/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt,
                    style,
                    provider,
                    size,
                    n
                })
            });
            if (!response.ok) {
                throw new Error('Erreur lors de la génération des images');
            }
            const data = await response.json();
            const urls = data.map((img)=>img.url);
            setImages(urls);
        } catch (err) {
            setError(err.message || 'Erreur inconnue');
        } finally{
            setLoading(false);
        }
    };
    const handleSave = async ()=>{
        if (images.length === 0) return;
        try {
            const response = await fetch('http://localhost:3003/api/images/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt,
                    style,
                    provider,
                    size,
                    n,
                    // userId, // Remplace par l'user ID réel
                    url: images
                })
            });
            if (!response.ok) throw new Error('Erreur lors de l’enregistrement');
            setIsSaved(true);
        } catch (err) {
            console.error(err);
            setError(err.message || 'Erreur lors de l’enregistrement');
        }
    };
    const handleCancel = ()=>{
        setPrompt('');
        setStyle('');
        setImages([]);
        setError('');
        setIsSaved(false);
    };
    return(//  <RequireAuth>
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-3xl mx-auto py-10 px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-6",
                children: "Générateur d’Images IA"
            }, void 0, false, {
                fileName: "[project]/app/generate-image/create/page.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-4 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block font-semibold",
                                children: "Prompt"
                            }, void 0, false, {
                                fileName: "[project]/app/generate-image/create/page.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: "w-full border p-2 rounded",
                                value: prompt,
                                onChange: (e)=>setPrompt(e.target.value),
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/app/generate-image/create/page.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/generate-image/create/page.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block font-semibold",
                                children: "Style (optionnel)"
                            }, void 0, false, {
                                fileName: "[project]/app/generate-image/create/page.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: "w-full border p-2 rounded",
                                value: style,
                                onChange: (e)=>setStyle(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/app/generate-image/create/page.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/generate-image/create/page.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block font-semibold",
                                children: "Fournisseur"
                            }, void 0, false, {
                                fileName: "[project]/app/generate-image/create/page.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "w-full border p-2 rounded",
                                value: provider,
                                onChange: (e)=>setProvider(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "openai",
                                        children: "OpenAI"
                                    }, void 0, false, {
                                        fileName: "[project]/app/generate-image/create/page.tsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "deepseek",
                                        children: "DeepSeek"
                                    }, void 0, false, {
                                        fileName: "[project]/app/generate-image/create/page.tsx",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/generate-image/create/page.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/generate-image/create/page.tsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block font-semibold",
                                children: "Taille"
                            }, void 0, false, {
                                fileName: "[project]/app/generate-image/create/page.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "w-full border p-2 rounded",
                                value: size,
                                onChange: (e)=>setSize(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "256x256",
                                        children: "256x256"
                                    }, void 0, false, {
                                        fileName: "[project]/app/generate-image/create/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "512x512",
                                        children: "512x512"
                                    }, void 0, false, {
                                        fileName: "[project]/app/generate-image/create/page.tsx",
                                        lineNumber: 258,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "1024x1024",
                                        children: "1024x1024"
                                    }, void 0, false, {
                                        fileName: "[project]/app/generate-image/create/page.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/generate-image/create/page.tsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/generate-image/create/page.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block font-semibold",
                                children: "Nombre d’images"
                            }, void 0, false, {
                                fileName: "[project]/app/generate-image/create/page.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                className: "w-full border p-2 rounded",
                                value: n,
                                onChange: (e)=>setN(parseInt(e.target.value)),
                                min: 1,
                                max: 10
                            }, void 0, false, {
                                fileName: "[project]/app/generate-image/create/page.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/generate-image/create/page.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: loading,
                        className: "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50",
                        children: loading ? 'Génération...' : 'Générer'
                    }, void 0, false, {
                        fileName: "[project]/app/generate-image/create/page.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/generate-image/create/page.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/app/generate-image/create/page.tsx",
                lineNumber: 284,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                children: [
                    images.map((url, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: url,
                            alt: `Generated ${index}`,
                            className: "rounded shadow"
                        }, index, false, {
                            fileName: "[project]/app/generate-image/create/page.tsx",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this)),
                    images.length > 0 && !isSaved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSave,
                                className: "bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700",
                                children: "Enregistrer"
                            }, void 0, false, {
                                fileName: "[project]/app/generate-image/create/page.tsx",
                                lineNumber: 297,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCancel,
                                className: "bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600",
                                children: "Annuler"
                            }, void 0, false, {
                                fileName: "[project]/app/generate-image/create/page.tsx",
                                lineNumber: 303,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/generate-image/create/page.tsx",
                        lineNumber: 296,
                        columnNumber: 3
                    }, this),
                    isSaved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-green-600 mt-4",
                        children: "Image enregistrée avec succès "
                    }, void 0, false, {
                        fileName: "[project]/app/generate-image/create/page.tsx",
                        lineNumber: 312,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/generate-image/create/page.tsx",
                lineNumber: 286,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/generate-image/create/page.tsx",
        lineNumber: 213,
        columnNumber: 5
    }, this));
}
_s(GenerateImagePage, "Zsk0hwC2VCpr3Z+qbrQTneTm0z4=");
_c = GenerateImagePage;
var _c;
__turbopack_context__.k.register(_c, "GenerateImagePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_generate-image_create_page_tsx_392e9702._.js.map