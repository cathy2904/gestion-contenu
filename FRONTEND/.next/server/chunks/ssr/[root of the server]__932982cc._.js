module.exports = {

"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

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
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/app/post/service/api.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createPost": (()=>createPost),
    "deletePost": (()=>deletePost),
    "getPost": (()=>getPost),
    "getPosts": (()=>getPosts),
    "updatePost": (()=>updatePost)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: 'http://localhost:3003/api'
});
const getPosts = ()=>api.get('/posts');
const getPost = (id)=>api.get(`/posts/${id}`);
const createPost = (postData)=>api.post('/posts', postData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
const updatePost = (id, postData)=>api.put(`/posts/${id}`, postData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
const deletePost = (id)=>api.delete(`/posts/${id}`); // export const getPosts = () => api.get('/posts');
 // export const getPost = (id: string) => api.get(`/posts/${id}`);
 // export const createPost = (postData: any) => api.post('/posts', postData);
 // export const updatePost = (id: string, postData: any) => api.put(`/posts/${id}`, postData);
 // export const deletePost = (id: string) => api.delete(`/posts/${id}`);
}}),
"[project]/app/components/PostForm.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PostForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
function PostForm({ onSubmit, initialData = {}, isSubmitting = false }) {
    const { register, handleSubmit, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            ...initialData,
            image: null
        }
    });
    const [previewImage, setPreviewImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleFormSubmit = (data)=>{
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('content', data.content);
        formData.append('author', data.author);
        if (data.image && data.image[0]) {
            formData.append('image', data.image[0]);
        }
        onSubmit(formData);
    };
    const handleImageChange = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit(handleFormSubmit),
        className: "space-y-4 max-w-2xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-gray-700",
                        children: "Titre *"
                    }, void 0, false, {
                        fileName: "[project]/app/components/PostForm.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ...register('title', {
                            required: 'Le titre est requis'
                        }),
                        className: `mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.title ? 'border-red-500' : 'border'} p-2`
                    }, void 0, false, {
                        fileName: "[project]/app/components/PostForm.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    errors.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-red-600",
                        children: errors.title.message
                    }, void 0, false, {
                        fileName: "[project]/app/components/PostForm.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/PostForm.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-gray-700",
                        children: "Contenu *"
                    }, void 0, false, {
                        fileName: "[project]/app/components/PostForm.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        ...register('content', {
                            required: 'Le contenu est requis'
                        }),
                        rows: 4,
                        className: `mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.content ? 'border-red-500' : 'border'} p-2`
                    }, void 0, false, {
                        fileName: "[project]/app/components/PostForm.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    errors.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-red-600",
                        children: errors.content.message
                    }, void 0, false, {
                        fileName: "[project]/app/components/PostForm.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/PostForm.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-gray-700",
                        children: "Auteur *"
                    }, void 0, false, {
                        fileName: "[project]/app/components/PostForm.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ...register('author', {
                            required: "L'auteur est requis"
                        }),
                        className: `mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.author ? 'border-red-500' : 'border'} p-2`
                    }, void 0, false, {
                        fileName: "[project]/app/components/PostForm.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    errors.author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-red-600",
                        children: errors.author.message
                    }, void 0, false, {
                        fileName: "[project]/app/components/PostForm.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/PostForm.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-gray-700",
                        children: "Image"
                    }, void 0, false, {
                        fileName: "[project]/app/components/PostForm.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        id: "image",
                        ...register('image'),
                        accept: "image/*",
                        onChange: handleImageChange,
                        className: "mt-1 block w-full text-sm text-gray-500   file:mr-4 file:py-2 file:px-4   file:rounded-md file:border-0   file:text-sm file:font-semibold   file:bg-blue-50 file:text-blue-700   hover:file:bg-blue-100"
                    }, void 0, false, {
                        fileName: "[project]/app/components/PostForm.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    previewImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: previewImage,
                            alt: "Preview",
                            className: "h-32 object-cover rounded"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PostForm.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/PostForm.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this) : initialData?.imagePath ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: `http://localhost:3000${initialData.imagePath}`,
                            alt: "Current",
                            className: "h-32 object-cover rounded"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PostForm.tsx",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/PostForm.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/PostForm.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    disabled: isSubmitting,
                    className: "inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50",
                    children: isSubmitting ? 'Enregistrement...' : 'Enregistrer'
                }, void 0, false, {
                    fileName: "[project]/app/components/PostForm.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/PostForm.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/PostForm.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
} // import { useForm } from 'react-hook-form';
 // import { useState } from 'react';
 // export default function PostForm({ onSubmit, initialData = {}, isSubmitting = false }: {
 //   onSubmit: (data: FormData) => void;
 //   initialData?: any;
 //   isSubmitting?: boolean;
 // }) {
 //   const { register, handleSubmit, formState: { errors } } = useForm({
 //     defaultValues: initialData,
 //   });
 //   const [previewImage, setPreviewImage] = useState<string | null>(null);
 //   const handleFormSubmit = (data: any) => {
 //     const formData = new FormData();
 //     formData.append('title', data.title);
 //     formData.append('content', data.content);
 //     formData.append('author', data.author);
 //     if (data.image && data.image[0]) {
 //       formData.append('image', data.image[0]);
 //     }
 //     onSubmit(formData);
 //   };
 //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 //     const file = e.target.files?.[0];
 //     if (file) {
 //       const reader = new FileReader();
 //       reader.onloadend = () => {
 //         setPreviewImage(reader.result as string);
 //       };
 //       reader.readAsDataURL(file);
 //     }
 //   };
 //   return (
 //     <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
 //       {/* Champs texte restent inchangés */}
 //       <div>
 //         <label className="block text-sm font-medium text-gray-700">Image</label>
 //         <input
 //           type="file"
 //           id="image"
 //           {...register('image')}
 //           accept="image/*"
 //           onChange={handleImageChange}
 //           className="mt-1 block w-full text-sm text-gray-500
 //             file:mr-4 file:py-2 file:px-4
 //             file:rounded-md file:border-0
 //             file:text-sm file:font-semibold
 //             file:bg-blue-50 file:text-blue-700
 //             hover:file:bg-blue-100"
 //         />
 //         {previewImage && (
 //           <div className="mt-2">
 //             <img 
 //               src={previewImage} 
 //               alt="Preview" 
 //               className="h-32 object-cover rounded"
 //             />
 //           </div>
 //         )}
 //         {initialData?.image && !previewImage && (
 //           <div className="mt-2">
 //             <img 
 //               src={`http://localhost:3003${initialData.image}`} 
 //               alt="Current" 
 //               className="h-32 object-cover rounded"
 //             />
 //           </div>
 //         )}
 //       </div>
 //       <div>
 //          <button
 //             type="submit"
 //             disabled={isSubmitting}
 //              className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
 //            >
 //              {isSubmitting ? 'Enregistrement...' : 'Enregistrer'}
 //            </button>
 //           </div>
 //     </form>
 //   );
 // }
 // import { useForm } from 'react-hook-form';
 // import React from 'react';
 // export default function PostForm({ onSubmit, initialData = {}, isSubmitting = false }: {
 //   onSubmit: (data: any) => void;
 //   initialData?: any;
 //   isSubmitting?: boolean;
 // }) {
 //   const { register, handleSubmit, formState: { errors } } = useForm({
 //     defaultValues: initialData,
 //   });
 //   return (
 //     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
 //       <div>
 //         <label className="block text-sm font-medium text-gray-700">Titre *</label>
 //         <input
 //           {...register('title', { required: 'Le titre est requis' })}
 //           className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
 //             errors.title ? 'border-red-500' : 'border'
 //           }`}
 //         />
 //         {errors.title && (
 //           <p className="mt-1 text-sm text-red-600">{errors.title.message as string}</p>
 //         )}
 //       </div>
 //       <div>
 //         <label className="block text-sm font-medium text-gray-700">Contenu *</label>
 //         <textarea
 //           {...register('content', { required: 'Le contenu est requis' })}
 //           rows={4}
 //           className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
 //             errors.content ? 'border-red-500' : 'border'
 //           }`}
 //         />
 //         {errors.content && (
 //           <p className="mt-1 text-sm text-red-600">{errors.content.message as string}</p>
 //         )}
 //       </div>
 //       <div>
 //         <label className="block text-sm font-medium text-gray-700">Auteur *</label>
 //         <input
 //           {...register('author', { required: "L'auteur est requis" })}
 //           className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
 //             errors.author ? 'border-red-500' : 'border'
 //           }`}
 //         />
 //         {errors.author && (
 //           <p className="mt-1 text-sm text-red-600">{errors.author.message as string}</p>
 //         )}
 //       </div>
 //       <div>
 //         <label className="block text-sm font-medium text-gray-700">Image URL (optionnel)</label>
 //         <input
 //           {...register('image')}
 //           className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
 //           placeholder="https://example.com/image.jpg"
 //         />
 //       </div>
 //       <div>
 //         <button
 //           type="submit"
 //           disabled={isSubmitting}
 //           className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
 //         >
 //           {isSubmitting ? 'Enregistrement...' : 'Enregistrer'}
 //         </button>
 //       </div>
 //     </form>
 //   );
 // }
}}),
"[project]/app/post/edit/[id]/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EditPostPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$post$2f$service$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/post/service/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$PostForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/PostForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function EditPostPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { id } = router.query;
    const [post, setPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const fetchPost = async ()=>{
        if (!id) return;
        try {
            setIsLoading(true);
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$post$2f$service$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPost"])(id);
            setPost(response.data);
        } catch (err) {
            setError('Erreur lors du chargement du post');
            console.error(err);
        } finally{
            setIsLoading(false);
        }
    };
    const onSubmit = async (formData)=>{
        try {
            setIsSubmitting(true);
            setError(null);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$post$2f$service$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updatePost"])(id, formData);
            router.push('/post');
        } catch (err) {
            setError('Erreur lors de la mise à jour du post');
            console.error(err);
        } finally{
            setIsSubmitting(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchPost();
    }, [
        id
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center h-64",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"
            }, void 0, false, {
                fileName: "[project]/app/post/edit/[id]/page.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/post/edit/[id]/page.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",
            role: "alert",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    className: "font-bold",
                    children: "Erreur ! "
                }, void 0, false, {
                    fileName: "[project]/app/post/edit/[id]/page.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block sm:inline",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/app/post/edit/[id]/page.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/post/edit/[id]/page.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this);
    }
    if (!post) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-8 rounded-lg shadow text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500",
                    children: "Post non trouvé"
                }, void 0, false, {
                    fileName: "[project]/app/post/edit/[id]/page.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/posts",
                    className: "inline-block mt-4 text-blue-600 hover:text-blue-800",
                    children: "Retour à la liste"
                }, void 0, false, {
                    fileName: "[project]/app/post/edit/[id]/page.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/post/edit/[id]/page.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-gray-800",
                        children: "Modifier le Post"
                    }, void 0, false, {
                        fileName: "[project]/app/post/edit/[id]/page.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mt-2",
                        children: "Modifiez les champs nécessaires"
                    }, void 0, false, {
                        fileName: "[project]/app/post/edit/[id]/page.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/post/edit/[id]/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6",
                children: error
            }, void 0, false, {
                fileName: "[project]/app/post/edit/[id]/page.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$PostForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onSubmit: onSubmit,
                initialData: post,
                isSubmitting: isSubmitting
            }, void 0, false, {
                fileName: "[project]/app/post/edit/[id]/page.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/post/edit/[id]/page.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
} // import { useRouter } from 'next/router';
 // import { useState, useEffect } from 'react';
 // import { getPost, updatePost } from '../../service/api';
 // import PostForm from '@/app/components/PostForm';
 // export default function EditPostPage() {
 //   const router = useRouter();
 //   const { id } = router.query;
 //   const [post, setPost] = useState<any>(null);
 //   const [isSubmitting, setIsSubmitting] = useState(false);
 //   const [error, setError] = useState<string | null>(null);
 //   const [isLoading, setIsLoading] = useState(true);
 //   const fetchPost = async () => {
 //     if (!id) return;
 //     try {
 //       setIsLoading(true);
 //       const response = await getPost(id as string);
 //       setPost(response.data);
 //     } catch (err) {
 //       setError('Erreur lors du chargement du post');
 //       console.error(err);
 //     } finally {
 //       setIsLoading(false);
 //     }
 //   };
 //   const onSubmit = async (data: any) => {
 //     try {
 //       setIsSubmitting(true);
 //       setError(null);
 //       await updatePost(id as string, data);
 //       router.push('/posts');
 //     } catch (err) {
 //       setError('Erreur lors de la mise à jour du post');
 //       console.error(err);
 //     } finally {
 //       setIsSubmitting(false);
 //     }
 //   };
 //   useEffect(() => {
 //     fetchPost();
 //   }, [id]);
 //   if (isLoading) return <div className="text-center py-8">Chargement...</div>;
 //   if (error) return <div className="text-center py-8 text-red-500">{error}</div>;
 //   if (!post) return <div className="text-center py-8">Post non trouvé</div>;
 //   return (
 //     <div className="container mx-auto px-4 py-8">
 //       <div className="flex items-center mb-6">
 //         <h1 className="text-2xl font-bold">Modifier le Post</h1>
 //       </div>
 //       {error && (
 //         <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
 //           {error}
 //         </div>
 //       )}
 //       <PostForm onSubmit={onSubmit} initialData={post} isSubmitting={isSubmitting} />
 //     </div>
 //   );
 // }
 // "use client"
 // import React, {useState,useEffect } from 'react'
 // import { useRouter } from 'next/navigation'
 // import { fetcher } from '@/app/libs'
 // import useSWR from 'swr'
 // export default function PostEdit({params} :{params:{id:number}}) {
 //   const router = useRouter()
 //   const {data : post,isLoading, error} = useSWR(`/api/posts/${params.id}`,fetcher)
 //   const [title, setTitle] =useState<string>('');
 //   const [body, setBody] = useState<string>('');
 //   useEffect(()=>{
 //      if(post){
 //          setTitle(post.result.title)
 //          setBody(post.result.content)
 //      }
 //   },[post, isLoading])
 //   const updatePost = async (e: any) => {
 //     e.preventDefault()
 //     if (title!="" && body!="") {
 //       const formData = {
 //           title: title,
 //           content: body
 //       }
 //       const res = await fetch(`/api/posts/${params.id}`, {
 //         method: 'PUT',
 //         headers: {
 //           'Content-Type': 'application/json'
 //         },
 //         body: JSON.stringify(formData)
 //       });
 //       const content = await res.json();
 //       if(content.success>0)
 //       {
 //         router.push('/post');
 //       }
 //     }
 //   };
 //   if(isLoading) return <div><span>Loading...</span></div>
 //   if (!post) return null;
 //   return (
 //     <form className='w-full' onSubmit={updatePost}>
 //         <span className='font-bold text-yellow-500 py-2 block underline text-2xl'>Form Add</span>
 //         <div className='w-full py-2'>
 //              <label htmlFor="" className='text-sm font-bold py-2 block'>Title</label>
 //              <input type='text' name='title' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' value={title} onChange={(e:any)=>setTitle(e.target.value)}/>
 //         </div>
 //         <div className='w-full py-2'>
 //              <label htmlFor="" className='text-sm font-bold py-2 block'>Content</label>
 //              <textarea name='title' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' value={body} onChange={(e:any)=>setBody(e.target.value)} />
 //         </div>
 //         <div className='w-full py-2'>
 //           <button className="w-20 p-2 text-white border-gray-200 border-[1px] rounded-sm bg-green-400">Submit</button>
 //         </div>
 //     </form>
 //   )
 // }
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__932982cc._.js.map