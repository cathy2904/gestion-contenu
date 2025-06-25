(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_a1fc3385._.js", {

"[project]/app/utils/cropImage.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>getCroppedImg)
});
function getCroppedImg(imageSrc, pixelCrop) {
    return new Promise((resolve, reject)=>{
        const image = new Image();
        image.crossOrigin = 'anonymous'; // important pour éviter les problèmes CORS avec des blobs
        image.onload = ()=>{
            const canvas = document.createElement('canvas');
            canvas.width = pixelCrop.width;
            canvas.height = pixelCrop.height;
            const ctx = canvas.getContext('2d');
            if (!ctx) return reject('Contexte canvas introuvable');
            ctx.drawImage(image, pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height, 0, 0, pixelCrop.width, pixelCrop.height);
            canvas.toBlob((blob)=>{
                if (!blob) {
                    return reject('Erreur de conversion en Blob');
                }
                const croppedUrl = URL.createObjectURL(blob);
                resolve(croppedUrl);
            }, 'image/jpeg');
        };
        image.onerror = ()=>reject('Impossible de charger l’image');
        image.src = imageSrc;
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/content/edit/[id]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EditContentPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$easy$2d$crop$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-easy-crop/index.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/rc-slider/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/rc-slider/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$cropImage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/cropImage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function EditContentPage() {
    _s();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [media, setMedia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [previews, setPreviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedNetworks, setSelectedNetworks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [crop, setCrop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentEditIndex, setCurrentEditIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditContentPage.useEffect": ()=>{
            const fetchContent = {
                "EditContentPage.useEffect.fetchContent": async ()=>{
                    const res = await fetch(`http://localhost:3000/api/content/${id}`);
                    const data = await res.json();
                    setTitle(data.title);
                    setContent(data.content);
                // Optionnel : set media depuis l’API si déjà uploadé
                }
            }["EditContentPage.useEffect.fetchContent"];
            if (id) fetchContent();
        }
    }["EditContentPage.useEffect"], [
        id
    ]);
    const handleMediaChange = (e)=>{
        if (!e.target.files) return;
        const files = Array.from(e.target.files);
        const urls = files.map((file)=>URL.createObjectURL(file));
        setMedia((prev)=>[
                ...prev,
                ...files
            ]);
        setPreviews((prev)=>[
                ...prev,
                ...urls
            ]);
    };
    const handleDeleteMedia = (index)=>{
        setMedia((prev)=>prev.filter((_, i)=>i !== index));
        setPreviews((prev)=>prev.filter((_, i)=>i !== index));
    };
    const onCropComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditContentPage.useCallback[onCropComplete]": (_croppedArea, croppedPixels)=>{
            setCroppedAreaPixels(croppedPixels);
        }
    }["EditContentPage.useCallback[onCropComplete]"], []);
    const showCroppedImage = async ()=>{
        if (currentEditIndex === null || !previews[currentEditIndex]) return;
        const croppedImageUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$cropImage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(previews[currentEditIndex], croppedAreaPixels);
        const response = await fetch(croppedImageUrl);
        const blob = await response.blob();
        const newFile = new File([
            blob
        ], media[currentEditIndex].name, {
            type: blob.type
        });
        const updatedMedia = [
            ...media
        ];
        const updatedPreviews = [
            ...previews
        ];
        updatedMedia[currentEditIndex] = newFile;
        updatedPreviews[currentEditIndex] = URL.createObjectURL(newFile);
        setMedia(updatedMedia);
        setPreviews(updatedPreviews);
        setCurrentEditIndex(null);
        setZoom(1);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        selectedNetworks.forEach((network)=>formData.append('networks', network));
        media.forEach((file)=>formData.append('media', file));
        await fetch(`http://localhost:3000/api/content/${id}`, {
            method: 'PUT',
            body: formData
        });
        router.push('/content');
    };
    const toggleNetwork = (network)=>{
        setSelectedNetworks((prev)=>prev.includes(network) ? prev.filter((n)=>n !== network) : [
                ...prev,
                network
            ]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 max-w-xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-xl font-semibold mb-4",
                children: "Modifier le contenu"
            }, void 0, false, {
                fileName: "[project]/app/content/edit/[id]/page.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-4",
                encType: "multipart/form-data",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: title,
                        onChange: (e)=>setTitle(e.target.value),
                        className: "w-full border px-3 py-2 rounded",
                        placeholder: "Titre",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/content/edit/[id]/page.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: content,
                        onChange: (e)=>setContent(e.target.value),
                        className: "w-full border px-3 py-2 rounded",
                        placeholder: "Contenu",
                        rows: 6,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/content/edit/[id]/page.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        accept: "image/*,video/*",
                        multiple: true,
                        onChange: handleMediaChange,
                        className: "w-full"
                    }, void 0, false, {
                        fileName: "[project]/app/content/edit/[id]/page.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mt-2",
                        children: previews.map((url, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group",
                                children: [
                                    url.match(/video/) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        src: url,
                                        controls: true,
                                        className: "w-32 h-32 object-cover rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/app/content/edit/[id]/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: url,
                                                alt: `media-${i}`,
                                                className: "w-32 h-32 object-cover rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/app/content/edit/[id]/page.tsx",
                                                lineNumber: 134,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setCurrentEditIndex(i),
                                                className: "absolute top-1 left-1 bg-black bg-opacity-50 text-white px-1 text-xs rounded",
                                                children: "Recadrer"
                                            }, void 0, false, {
                                                fileName: "[project]/app/content/edit/[id]/page.tsx",
                                                lineNumber: 135,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleDeleteMedia(i),
                                        className: "absolute top-1 right-1 bg-red-600 text-white px-1 text-xs rounded",
                                        children: "✕"
                                    }, void 0, false, {
                                        fileName: "[project]/app/content/edit/[id]/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/app/content/edit/[id]/page.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/content/edit/[id]/page.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 mt-4 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-1 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: selectedNetworks.includes('facebook'),
                                        onChange: ()=>toggleNetwork('facebook')
                                    }, void 0, false, {
                                        fileName: "[project]/app/content/edit/[id]/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFacebook"], {
                                        className: "text-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/app/content/edit/[id]/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this),
                                    " Facebook"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/content/edit/[id]/page.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-1 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: selectedNetworks.includes('instagram'),
                                        onChange: ()=>toggleNetwork('instagram')
                                    }, void 0, false, {
                                        fileName: "[project]/app/content/edit/[id]/page.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"], {
                                        className: "text-pink-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/content/edit/[id]/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this),
                                    " Instagram"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/content/edit/[id]/page.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-1 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: selectedNetworks.includes('linkedin'),
                                        onChange: ()=>toggleNetwork('linkedin')
                                    }, void 0, false, {
                                        fileName: "[project]/app/content/edit/[id]/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedin"], {
                                        className: "text-blue-700"
                                    }, void 0, false, {
                                        fileName: "[project]/app/content/edit/[id]/page.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this),
                                    " LinkedIn"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/content/edit/[id]/page.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/content/edit/[id]/page.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4",
                        children: "Enregistrer"
                    }, void 0, false, {
                        fileName: "[project]/app/content/edit/[id]/page.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/content/edit/[id]/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            currentEditIndex !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-4 w-[90%] h-[90%] relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$easy$2d$crop$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            image: previews[currentEditIndex],
                            crop: crop,
                            zoom: zoom,
                            aspect: 1,
                            onCropChange: setCrop,
                            onCropComplete: onCropComplete,
                            onZoomChange: setZoom
                        }, void 0, false, {
                            fileName: "[project]/app/content/edit/[id]/page.tsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block mb-2 text-sm font-medium",
                                    children: "Zoom"
                                }, void 0, false, {
                                    fileName: "[project]/app/content/edit/[id]/page.tsx",
                                    lineNumber: 204,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$slider$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                                    min: 1,
                                    max: 3,
                                    step: 0.1,
                                    value: zoom,
                                    onChange: (val)=>setZoom(val)
                                }, void 0, false, {
                                    fileName: "[project]/app/content/edit/[id]/page.tsx",
                                    lineNumber: 205,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/content/edit/[id]/page.tsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "px-4 py-2 bg-green-600 text-white rounded",
                                    onClick: showCroppedImage,
                                    children: "Appliquer"
                                }, void 0, false, {
                                    fileName: "[project]/app/content/edit/[id]/page.tsx",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "px-4 py-2 bg-red-600 text-white rounded",
                                    onClick: ()=>setCurrentEditIndex(null),
                                    children: "Annuler"
                                }, void 0, false, {
                                    fileName: "[project]/app/content/edit/[id]/page.tsx",
                                    lineNumber: 221,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/content/edit/[id]/page.tsx",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/content/edit/[id]/page.tsx",
                    lineNumber: 193,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/content/edit/[id]/page.tsx",
                lineNumber: 192,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/content/edit/[id]/page.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
} // 'use client';
 // import { useEffect, useState, useCallback } from 'react';
 // import { useRouter, useParams } from 'next/navigation';
 // import Cropper from 'react-easy-crop';
 // import Slider from 'rc-slider';
 // import 'rc-slider/assets/index.css';
 // import getCroppedImg from '@/app/utils/cropImage';
 // import type { Area } from 'react-easy-crop';
 // import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
 // export default function EditContentPage() {
 //   const { id } = useParams();
 //   const router = useRouter();
 //   const [title, setTitle] = useState('');
 //   const [content, setContent] = useState('');
 //   const [media, setMedia] = useState<FileList | null>(null);
 //   const [previews, setPreviews] = useState<string[]>([]);
 //   const [crop, setCrop] = useState({ x: 0, y: 0 });
 //   const [zoom, setZoom] = useState(1);
 //   const [croppedAreaPixels, setCroppedAreaPixels] = useState();
 //   const [currentEditIndex, setCurrentEditIndex] = useState<number | null>(null);
 //   useEffect(() => {
 //     const fetchContent = async () => {
 //       const res = await fetch(`http://localhost:3000/api/content/${id}`);
 //       const data = await res.json();
 //       setTitle(data.title);
 //       setContent(data.content);
 //     };
 //     if (id) fetchContent();
 //   }, [id]);
 //   useEffect(() => {
 //     if (!media) return;
 //     const urls = Array.from(media).map((file) => URL.createObjectURL(file));
 //     setPreviews(urls);
 //     return () => urls.forEach((url) => URL.revokeObjectURL(url));
 //   }, [media]);
 //   const handleSubmit = async (e: React.FormEvent) => {
 //     e.preventDefault();
 //     const formData = new FormData();
 //     formData.append('title', title);
 //     formData.append('content', content);
 //     if (media) {
 //       Array.from(media).forEach((file) => {
 //         formData.append('media', file);
 //       });
 //     }
 //     await fetch(`http://localhost:3000/api/content/${id}`, {
 //       method: 'PUT',
 //       body: formData,
 //     });
 //     router.push('/content');
 //   };
 //   const onCropComplete = useCallback(
 //   (_croppedArea: Area, croppedAreaPixels: Area) => {
 //     setCroppedAreaPixels(croppedAreaPixels);
 //   },
 //   []
 // );
 //   const showCroppedImage = async () => {
 //     if (currentEditIndex === null || !previews[currentEditIndex]) return;
 //     const croppedImage = await getCroppedImg(previews[currentEditIndex], croppedAreaPixels);
 //     const updatedPreviews = [...previews];
 //     updatedPreviews[currentEditIndex] = croppedImage;
 //     setPreviews(updatedPreviews);
 //     setCurrentEditIndex(null);
 //   };
 //   return (
 //     <div className="p-6 max-w-xl mx-auto">
 //       <h1 className="text-xl font-semibold mb-4">Modifier le contenu</h1>
 //       <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
 //         <input
 //           type="text"
 //           value={title}
 //           onChange={(e) => setTitle(e.target.value)}
 //           className="w-full border px-3 py-2 rounded"
 //           placeholder="Titre"
 //           required
 //         />
 //         <textarea
 //           value={content}
 //           onChange={(e) => setContent(e.target.value)}
 //           className="w-full border px-3 py-2 rounded"
 //           placeholder="Contenu"
 //           rows={6}
 //           required
 //         />
 //         <input
 //           type="file"
 //           accept="image/*,video/*"
 //           multiple
 //           onChange={(e) => setMedia(e.target.files)}
 //           className="w-full"
 //         />
 //         <div className="flex flex-wrap gap-2 mt-2">
 //           {previews.map((url, i) => (
 //             <div key={i} className="relative">
 //               {url.match(/video/) ? (
 //                 <video src={url} controls className="w-32 h-32 object-cover rounded" />
 //               ) : (
 //                 <>
 //                   <img src={url} className="w-32 h-32 object-cover rounded" alt={`preview-${i}`} />
 //                   <button
 //                     type="button"
 //                     className="absolute top-0 right-0 bg-black bg-opacity-50 text-white p-1 text-xs"
 //                     onClick={() => setCurrentEditIndex(i)}
 //                   >
 //                     Recadrer
 //                   </button>
 //                 </>
 //               )}
 //             </div>
 //           ))}
 //         </div>
 //         {currentEditIndex !== null && (
 //           <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50">
 //             <div className="bg-white p-4 w-[90%] h-[90%] relative">
 //               <Cropper
 //                 image={previews[currentEditIndex]}
 //                 crop={crop}
 //                 zoom={zoom}
 //                 aspect={1}
 //                 onCropChange={setCrop}
 //                 onCropComplete={onCropComplete}
 //                 onZoomChange={setZoom}
 //               />
 //               <div className="mt-4">
 //                 <label className="block mb-2 text-sm font-medium">Zoom</label>
 //                 <Slider
 //                   min={1}
 //                   max={3}
 //                   step={0.1}
 //                   value={zoom}
 //                   onChange={(val) => setZoom(val as number)}
 //                 />
 //               </div>
 //               <div className="flex justify-between mt-4">
 //                 <button
 //                   type="button"
 //                   className="px-4 py-2 bg-green-600 text-white rounded"
 //                   onClick={showCroppedImage}
 //                 >
 //                   Appliquer
 //                 </button>
 //                 <button
 //                   type="button"
 //                   className="px-4 py-2 bg-red-600 text-white rounded"
 //                   onClick={() => setCurrentEditIndex(null)}
 //                 >
 //                   Annuler
 //                 </button>
 //               </div>
 //             </div>
 //           </div>
 //         )}
 //         <button
 //           type="submit"
 //           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
 //         >
 //           Enregistrer
 //         </button>
 //       </form>
 //     </div>
 //   );
 // }
 // 'use client';
 // import { useEffect, useState } from 'react';
 // import { useRouter, useParams } from 'next/navigation';
 // export default function EditContentPage() {
 //   const { id } = useParams();
 //   const router = useRouter();
 //   const [title, setTitle] = useState('');
 //   const [content, setContent] = useState('');
 //   const [media, setMedia] = useState<FileList | null>(null);
 //   useEffect(() => {
 //     const fetchContent = async () => {
 //       const res = await fetch(`http://localhost:3000/api/content/${id}`);
 //       const data = await res.json();
 //       setTitle(data.title);
 //       setContent(data.content);
 //     };
 //     if (id) fetchContent();
 //   }, [id]);
 //   const handleSubmit = async (e: React.FormEvent) => {
 //     e.preventDefault();
 //     await fetch(`http://localhost:3000/api/content/${id}`, {
 //       method: 'PUT',
 //       headers: { 'Content-Type': 'application/json' },
 //       body: JSON.stringify({ title, content }),
 //     });
 //     router.push('/content');
 //   };
 //   return (
 //     <div className="p-6 max-w-xl mx-auto">
 //       <h1 className="text-xl font-semibold mb-4">Modifier le contenu</h1>
 //       <form onSubmit={handleSubmit} className="space-y-4">
 //         <input
 //           type="text"
 //           value={title}
 //           onChange={(e) => setTitle(e.target.value)}
 //           className="w-full border px-3 py-2 rounded"
 //           placeholder="Titre"
 //           required
 //         />
 //         <textarea
 //           value={content}
 //           onChange={(e) => setContent(e.target.value)}
 //           className="w-full border px-3 py-2 rounded"
 //           placeholder="Contenu"
 //           rows={6}
 //           required
 //         />
 //         <button
 //           type="submit"
 //           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
 //         >
 //           Enregistrer
 //         </button>
 //       </form>
 //     </div>
 //   );
 // }
_s(EditContentPage, "iFqyXij2Ag7ye2gHTteJzLWgR0s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = EditContentPage;
var _c;
__turbopack_context__.k.register(_c, "EditContentPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_a1fc3385._.js.map