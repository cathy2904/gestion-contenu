(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_4b0c4b9d._.js", {

"[project]/app/post/service/api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createPost": (()=>createPost),
    "deletePost": (()=>deletePost),
    "getPost": (()=>getPost),
    "getPosts": (()=>getPosts),
    "updatePost": (()=>updatePost)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: 'http://localhost:3003/api'
});
const getPosts = ()=>api.get('/posts');
const getPost = (id)=>api.get(`/posts/${id}`);
const createPost = (postData)=>api.post('/posts', postData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
const updatePost = (id, postData)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`http://localhost:3003/api/posts/${id}`, postData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
const deletePost = (id)=>api.delete(`/posts/${id}`); // export const getPosts = () => api.get('/posts');
 // export const getPost = (id: string) => api.get(`/posts/${id}`);
 // export const createPost = (postData: any) => api.post('/posts', postData);
 // export const updatePost = (id: string, postData: any) => api.put(`/posts/${id}`, postData);
 // export const deletePost = (id: string) => api.delete(`/posts/${id}`);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/PostForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PostForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function PostForm({ onSubmit, initialData = {}, isSubmitting = false }) {
    _s();
    const { register, handleSubmit, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            ...initialData,
            image: null
        }
    });
    const [previewImage, setPreviewImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleFormSubmit = async (data)=>{
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('content', data.content);
        formData.append('author', data.author);
        if (data.image && data.image[0]) {
            // Append the new image if it exists
            formData.append('image', data.image[0]);
        } else if (initialData.imagePath) {
            // Retain the existing image path if no new image is uploaded
            formData.append('imagePath', initialData.imagePath);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit(handleFormSubmit),
        className: "space-y-4 max-w-2xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-gray-700",
                        children: "Titre *"
                    }, void 0, false, {
                        fileName: "[project]/app/components/PostForm.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ...register('title', {
                            required: 'Le titre est requis'
                        }),
                        className: `mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.title ? 'border-red-500' : 'border'} p-2`
                    }, void 0, false, {
                        fileName: "[project]/app/components/PostForm.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    errors.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-red-600",
                        children: errors.title.message
                    }, void 0, false, {
                        fileName: "[project]/app/components/PostForm.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/PostForm.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-gray-700",
                        children: "Contenu *"
                    }, void 0, false, {
                        fileName: "[project]/app/components/PostForm.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        ...register('content', {
                            required: 'Le contenu est requis'
                        }),
                        rows: 4,
                        className: `mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.content ? 'border-red-500' : 'border'} p-2`
                    }, void 0, false, {
                        fileName: "[project]/app/components/PostForm.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    errors.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-red-600",
                        children: errors.content.message
                    }, void 0, false, {
                        fileName: "[project]/app/components/PostForm.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/PostForm.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-gray-700",
                        children: "Auteur *"
                    }, void 0, false, {
                        fileName: "[project]/app/components/PostForm.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ...register('author', {
                            required: "L'auteur est requis"
                        }),
                        className: `mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.author ? 'border-red-500' : 'border'} p-2`
                    }, void 0, false, {
                        fileName: "[project]/app/components/PostForm.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    errors.author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-red-600",
                        children: errors.author.message
                    }, void 0, false, {
                        fileName: "[project]/app/components/PostForm.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/PostForm.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-gray-700",
                        children: "Image"
                    }, void 0, false, {
                        fileName: "[project]/app/components/PostForm.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        id: "image",
                        ...register('image'),
                        accept: "image/*",
                        onChange: handleImageChange,
                        className: "mt-1 block w-full text-sm text-gray-500   file:mr-4 file:py-2 file:px-4   file:rounded-md file:border-0   file:text-sm file:font-semibold   file:bg-blue-50 file:text-blue-700   hover:file:bg-blue-100"
                    }, void 0, false, {
                        fileName: "[project]/app/components/PostForm.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    previewImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: previewImage,
                            alt: "Preview",
                            className: "h-32 object-cover rounded"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PostForm.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/PostForm.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this) : initialData?.imagePath ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: `http://localhost:3000${initialData.imagePath}`,
                            alt: "Current",
                            className: "h-32 object-cover rounded"
                        }, void 0, false, {
                            fileName: "[project]/app/components/PostForm.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/PostForm.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/PostForm.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    disabled: isSubmitting,
                    className: "inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50",
                    children: isSubmitting ? 'Enregistrement...' : 'Enregistrer'
                }, void 0, false, {
                    fileName: "[project]/app/components/PostForm.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/PostForm.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/PostForm.tsx",
        lineNumber: 51,
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
_s(PostForm, "p2lvc03G9B+guRi+OFEIrlByw4s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = PostForm;
var _c;
__turbopack_context__.k.register(_c, "PostForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/post/create/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreatePostPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// import { useRouter } from 'next/router';
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$post$2f$service$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/post/service/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$PostForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/PostForm.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function CreatePostPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const onSubmit = async (formData)=>{
        try {
            setIsSubmitting(true);
            setError(null);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$post$2f$service$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPost"])(formData);
            router.push('/post');
        } catch (err) {
            setError('Erreur lors de la création du post');
            console.error(err);
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-gray-800",
                        children: "Créer un nouveau Post"
                    }, void 0, false, {
                        fileName: "[project]/app/post/create/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mt-2",
                        children: "Remplissez le formulaire pour créer un nouveau post"
                    }, void 0, false, {
                        fileName: "[project]/app/post/create/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/post/create/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6",
                children: error
            }, void 0, false, {
                fileName: "[project]/app/post/create/page.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$PostForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onSubmit: onSubmit,
                isSubmitting: isSubmitting
            }, void 0, false, {
                fileName: "[project]/app/post/create/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/post/create/page.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
} // "use client"
 // import React, {useState } from 'react'
 // import { useRouter } from 'next/navigation'
 // export default function PostCreate() {
 //   const router = useRouter()
 //   const [title, setTitle] =useState<string>('');
 //   const [body, setBody] = useState<string>('');
 //   const addPost = async (e: any) => {
 //     e.preventDefault()
 //     if (title!="" && body!="") {
 //       const formData = {
 //           title: title,
 //           content: body
 //       }
 //       const add = await fetch('/api/posts', {
 //         method: 'POST',
 //         headers: {
 //           'Content-Type': 'application/json'
 //         },
 //         body: JSON.stringify(formData)
 //       });
 //       const content = await add.json();
 //       if(content.success>0)
 //       {
 //         router.push('/post');
 //       }
 //     }
 //   };
 //   return (
 //     <form className='w-full' onSubmit={addPost}>
 //         <span className='font-bold text-yellow-500 py-2 block underline text-2xl'>ajout</span>
 //         <div className='w-full py-2'>
 //              <label htmlFor="" className='text-sm font-bold py-2 block'>Titre</label>
 //              <input type='text' name='title' className='w-full border-[1px] border-gray-200 p-2 rounded-sm'  onChange={(e:any)=>setTitle(e.target.value)}/>
 //         </div>
 //         <div className='w-full py-2'>
 //              <label htmlFor="" className='text-sm font-bold py-2 block'>Content</label>
 //              <textarea name='content' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' onChange={(e:any)=>setBody(e.target.value)} />
 //         </div>
 //         <div className='w-full py-2'>
 //              <label htmlFor="" className='text-sm font-bold py-2 block'>auteur</label>
 //              <textarea name='author' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' onChange={(e:any)=>setBody(e.target.value)} />
 //         </div>
 //         <div className='w-full py-2'>
 //           <button className="w-20 p-2 text-white border-gray-200 border-[1px] rounded-sm bg-green-400">Submit</button>
 //         </div>
 //     </form>
 //   )
 // }
_s(CreatePostPage, "2Dv4nO8fEd0FkHio2AV5rG3oQ2c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CreatePostPage;
var _c;
__turbopack_context__.k.register(_c, "CreatePostPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_4b0c4b9d._.js.map