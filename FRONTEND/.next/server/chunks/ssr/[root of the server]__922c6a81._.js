module.exports = {

"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/app/generate-image/create/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ImageGeneratorPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function ImageGeneratorPage() {
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [style, setStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('digital painting');
    const [format, setFormat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('png');
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('1024x1024');
    const [n, setN] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    //const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const generateImage = async ()=>{
        setLoading(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('http://localhost:3003/api/images/generate', {
                prompt,
                style,
                format,
                size,
                n
            });
            setImages(res.data);
        } catch (error) {
            console.error('Erreur de génération :', error);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Générateur d'image avec GPT"
            }, void 0, false, {
                fileName: "[project]/app/generate-image/create/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Titre / Prompt",
                value: prompt,
                onChange: (e)=>setPrompt(e.target.value),
                className: "border px-4 py-2 mb-4 w-full"
            }, void 0, false, {
                fileName: "[project]/app/generate-image/create/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: style,
                onChange: (e)=>setStyle(e.target.value),
                className: "border px-4 py-2 mb-4 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "digital painting",
                        children: "Digital Painting"
                    }, void 0, false, {
                        fileName: "[project]/app/generate-image/create/page.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "photorealistic",
                        children: "Photorealistic"
                    }, void 0, false, {
                        fileName: "[project]/app/generate-image/create/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "cartoon",
                        children: "Cartoon"
                    }, void 0, false, {
                        fileName: "[project]/app/generate-image/create/page.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "fantasy art",
                        children: "Fantasy Art"
                    }, void 0, false, {
                        fileName: "[project]/app/generate-image/create/page.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/generate-image/create/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: size,
                onChange: (e)=>setSize(e.target.value),
                className: "border px-4 py-2 mb-4 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "512x512",
                        children: "512x512"
                    }, void 0, false, {
                        fileName: "[project]/app/generate-image/create/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "1024x1024",
                        children: "1024x1024"
                    }, void 0, false, {
                        fileName: "[project]/app/generate-image/create/page.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "1792x1024",
                        children: "1792x1024"
                    }, void 0, false, {
                        fileName: "[project]/app/generate-image/create/page.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "1024x1792",
                        children: "1024x1792"
                    }, void 0, false, {
                        fileName: "[project]/app/generate-image/create/page.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/generate-image/create/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: format,
                onChange: (e)=>setFormat(e.target.value),
                className: "border px-4 py-2 mb-4 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "png",
                        children: "PNG"
                    }, void 0, false, {
                        fileName: "[project]/app/generate-image/create/page.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "jpg",
                        children: "JPG"
                    }, void 0, false, {
                        fileName: "[project]/app/generate-image/create/page.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "jpeg",
                        children: "JPEG"
                    }, void 0, false, {
                        fileName: "[project]/app/generate-image/create/page.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/generate-image/create/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "number",
                min: 1,
                max: 5,
                value: n,
                onChange: (e)=>setN(parseInt(e.target.value)),
                className: "border px-4 py-2 mb-4 w-full"
            }, void 0, false, {
                fileName: "[project]/app/generate-image/create/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: generateImage,
                className: "bg-blue-600 text-white px-4 py-2 rounded",
                disabled: loading,
                children: loading ? 'Chargement...' : 'Générer'
            }, void 0, false, {
                fileName: "[project]/app/generate-image/create/page.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
                children: images.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border p-2 rounded",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: img.url,
                                alt: img.prompt,
                                className: "w-full rounded"
                            }, void 0, false, {
                                fileName: "[project]/app/generate-image/create/page.tsx",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: img.url,
                                download: `image_${i}.${format}`,
                                className: "mt-2 block text-blue-500 underline text-sm",
                                children: "Télécharger"
                            }, void 0, false, {
                                fileName: "[project]/app/generate-image/create/page.tsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs mt-1 text-gray-600",
                                children: [
                                    img.prompt,
                                    " (",
                                    img.style,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/generate-image/create/page.tsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/generate-image/create/page.tsx",
                        lineNumber: 100,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/generate-image/create/page.tsx",
                lineNumber: 98,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/generate-image/create/page.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
} // 'use client';
 // import { useState } from 'react';
 // import RequireAuth from '@/components/RequireAuth';
 // export default function GenerateImagePage() {
 //   const [prompt, setPrompt] = useState('');
 //   const [style, setStyle] = useState('');
 //   const [provider, setProvider] = useState<'openai' | 'deepseek'>('openai');
 //   const [size, setSize] = useState('512x512');
 //   const [n, setN] = useState(1);
 //   const [images, setImages] = useState<string[]>([]);
 //   const [loading, setLoading] = useState(false);
 //   const [error, setError] = useState('');
 //   const [isSaved, setIsSaved] = useState(false);
 //   const handleSubmit = async (e: React.FormEvent) => {
 //     e.preventDefault();
 //     setLoading(true);
 //     setError('');
 //     setImages([]);
 //     try {
 //       const response = await fetch('http://localhost:3003/api/images/generate', {
 //         method: 'POST',
 //         headers: {
 //           'Content-Type': 'application/json',
 //         },
 //         body: JSON.stringify({
 //           prompt,
 //           style,
 //           provider,
 //           size,
 //           n,
 //           // userId, // Remplace par un vrai userId si besoin
 //         }),
 //       });
 //       if (!response.ok) {
 //         throw new Error('Erreur lors de la génération des images');
 //       }
 //       const data = await response.json();
 //       const urls = data.map((img: any) => img.url);
 //       setImages(urls);
 //     } catch (err: any) {
 //       setError(err.message || 'Erreur inconnue');
 //     } finally {
 //       setLoading(false);
 //     }
 //   };
 //   const handleSave = async () => {
 //   if (images.length === 0) return;
 //   try {
 //     const response = await fetch('http://localhost:3003/api/images/save', {
 //       method: 'POST',
 //       headers: {
 //         'Content-Type': 'application/json',
 //       },
 //       body: JSON.stringify({
 //         prompt,
 //         style,
 //         provider,
 //         size,
 //         n,
 //         // userId, // Remplace par l'user ID réel
 //         url: images, // envoyer les URLs générées
 //       }),
 //     });
 //     if (!response.ok) throw new Error('Erreur lors de l’enregistrement');
 //     setIsSaved(true);
 //   } catch (err: any) {
 //     console.error(err);
 //     setError(err.message || 'Erreur lors de l’enregistrement');
 //   }
 // };
 // const handleCancel = () => {
 //   setPrompt('');
 //   setStyle('');
 //   setImages([]);
 //   setError('');
 //   setIsSaved(false);
 // };
 //   return (
 //      <RequireAuth>
 //     <div className="max-w-3xl mx-auto py-10 px-4">
 //       <h1 className="text-3xl font-bold mb-6">Générateur d’Images IA</h1>
 //       <form onSubmit={handleSubmit} className="space-y-4 mb-8">
 //         <div>
 //           <label className="block font-semibold">Prompt</label>
 //           <input
 //             type="text"
 //             className="w-full border p-2 rounded"
 //             value={prompt}
 //             onChange={(e) => setPrompt(e.target.value)}
 //             required
 //           />
 //         </div>
 //         <div>
 //           <label className="block font-semibold">Style (optionnel)</label>
 //           <input
 //             type="text"
 //             className="w-full border p-2 rounded"
 //             value={style}
 //             onChange={(e) => setStyle(e.target.value)}
 //           />
 //         </div>
 //         <div>
 //           <label className="block font-semibold">Fournisseur</label>
 //           <select
 //             className="w-full border p-2 rounded"
 //             value={provider}
 //             onChange={(e) => setProvider(e.target.value as 'openai' | 'deepseek')}
 //           >
 //             <option value="openai">OpenAI</option>
 //             <option value="deepseek">DeepSeek</option>
 //           </select>
 //         </div>
 //         <div>
 //           <label className="block font-semibold">Taille</label>
 //           <select
 //             className="w-full border p-2 rounded"
 //             value={size}
 //             onChange={(e) => setSize(e.target.value)}
 //           >
 //             <option value="256x256">256x256</option>
 //             <option value="512x512">512x512</option>
 //             <option value="1024x1024">1024x1024</option>
 //           </select>
 //         </div>
 //         <div>
 //           <label className="block font-semibold">Nombre d’images</label>
 //           <input
 //             type="number"
 //             className="w-full border p-2 rounded"
 //             value={n}
 //             onChange={(e) => setN(parseInt(e.target.value))}
 //             min={1}
 //             max={10}
 //           />
 //         </div>
 //         <button
 //           type="submit"
 //           disabled={loading}
 //           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
 //         >
 //           {loading ? 'Génération...' : 'Générer'}
 //         </button>
 //       </form>
 //       {error && <p className="text-red-600">{error}</p>}
 //       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
 //         {images.map((url, index) => (
 //           <img
 //             key={index}
 //             src={url}
 //             alt={`Generated ${index}`}
 //             className="rounded shadow"
 //           />
 //         ))}
 //         {images.length > 0 && !isSaved && (
 //   <div className="mt-6 flex gap-4">
 //     <button
 //       onClick={handleSave}
 //       className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
 //     >
 //       Enregistrer
 //     </button>
 //     <button
 //       onClick={handleCancel}
 //       className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
 //     >
 //       Annuler
 //     </button>
 //   </div>
 // )}
 // {isSaved && <p className="text-green-600 mt-4">Image enregistrée avec succès </p>}
 //       </div>
 //     </div>
 //     </RequireAuth>
 //   );
 // }
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__922c6a81._.js.map