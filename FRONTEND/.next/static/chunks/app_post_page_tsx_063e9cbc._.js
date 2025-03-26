(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_post_page_tsx_063e9cbc._.js", {

"[project]/app/post/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// "use client";
// import React,{useEffect, useState} from "react";
// import useSWR from "swr";
// import Post from "../components/Post";
// import { PostModel } from "../types";
// import Link from "next/link";
// import { fetcher } from "../libs";
// export default function Posts() {
//   const [posts,setPosts] = useState<PostModel[]>([]);
//   const { data, error, isLoading } = useSWR<any>(`/api/posts`, fetcher);
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         console.log('Début du fetch...');
//         const response = await fetch('/api/posts');
//         console.log('Réponse reçue:', response);
//         const data = await response.json();
//         console.log('Données reçues:', data);
//         setPosts(data);
//       } catch (error) {
//         console.error('Erreur complète:', error);
//       }
//     };
//     fetchPosts();
//   }, []);
//   let delete_Post : PostModel['deletePost']= async (id:number) => {
//     const res = await fetch(`/api/posts/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//     });
//     const content = await res.json();
//     if(content.success>0)
//     {
//       setPosts(posts?.filter((post:PostModel)=>{  return post.id !== id  }));
//     }
//   }
//   // return (
//   //   <div className="w-full max-w-7xl m-auto">
//   //     <div>
//   //   <Link href={`/post/create`} className="bg-green-500 p-2 inline-block text-white">Créer</Link>
//   //   </div>
//   //     <table className="w-full border-collapse border border-slate-400">
//   //       {/* <caption className="caption-top py-5 font-bold text-green-500 text-2xl">
//   //         List Posts - Counter :
//   //         <span className="text-red-500 font-bold">{ posts?.length}</span>
//   //       </caption> */}
//   //       <thead>
//   //         <tr className="text-center">
//   //           <th className="border border-slate-300">Title</th>
//   //           <th className="border border-slate-300">contenu</th>
//   //           <th className="border border-slate-300">auteur</th>
//   //           <th className="border border-slate-300">Modify</th>
//   //         </tr>
//   //       </thead>
//   //       <tbody>
//   //          {/* <tr>
//   //             <td colSpan={5}>
//   //                <Link href={`/post/create`} className="bg-green-500 p-2 inline-block text-white">Créer</Link>
//   //             </td>
//   //          </tr> */}
//   //          {/* {
//   //             posts && posts.map((item : PostModel)=><Post key={item.id} {...item} deletePost = {delete_Post} />)
//   //          } */}
//   //           {posts.map((posts) => (
//   //                    <tr key={posts.id} className="hover:bg-gray-50">
//   //                      <td className="py-2 px-4 border-b">{posts.title}</td>
//   //                      <td className="py-2 px-4 border-b">{posts.content}</td>
//   //                      <td className="py-2 px-4 border-b">{posts.author}</td>
//   //                      <td className="py-2 px-4 border-b">
//   //                      <Link
//   //                          href={`/post/read/${posts.id}`}
//   //                          className="text-blue-500 hover:text-blue-700 mr-2"
//   //                        >
//   //                          voir
//   //                        </Link>
//   //                        <Link
//   //                          href={`/post/edit/${posts.id}`}
//   //                          className="text-blue-500 hover:text-blue-700 mr-2"
//   //                        >
//   //                          Modifier
//   //                        </Link>
//   //                        <button
//   //                          onClick={() => delete_Post(posts.id)}
//   //                          className="text-red-500 hover:text-red-700"
//   //                        >
//   //                          Supprimer
//   //                        </button>
//   //                      </td>
//   //                    </tr>
//   //                  ))}
//   //       </tbody>
//   //     </table>
//   //   </div>
//   // );
//   return (
//     <div className="w-full max-w-7xl m-auto">
//       <table className="w-full border-collapse border border-slate-400">
//         <caption className="caption-top py-5 font-bold text-green-500 text-2xl">
//           List Posts - Counter :
//           <span className="text-red-500 font-bold">{ posts?.length}</span>
//         </caption>
//         <thead>
//           <tr className="text-center">
//             <th className="border border-slate-300">ID</th>
//             <th className="border border-slate-300">Title</th>
//             <th className="border border-slate-300">contennu</th>
//             <th className="border border-slate-300">auteur</th>
//             <th className="border border-slate-300">Modif</th>
//           </tr>
//         </thead>
//         <tbody>
//            <tr>
//               <td colSpan={5}>
//                  <Link href={`/post/create`} className="bg-green-500 p-2 inline-block text-white">Create</Link>
//               </td>
//            </tr>
//            {
//               posts && posts.map((item : PostModel)=><Post key={item.id} {...item} deletePost = {delete_Post} />)
//            }
//         </tbody>
//       </table>
//     </div>
//   );
// }
__turbopack_context__.s({
    "default": (()=>PostList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function PostList() {
    _s();
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const fetchPosts = async ()=>{
        try {
            const res = await fetch('/api/posts');
            const data = await res.json();
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally{
            setLoading(false);
        }
    };
    const handleDelete = async (id)=>{
        if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
            try {
                await fetch(`/api/posts/${id}`, {
                    method: 'DELETE'
                });
                setPosts(posts.filter((post)=>post.id !== id));
            } catch (error) {
                console.error('Delete error:', error);
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PostList.useEffect": ()=>{
            fetchPosts();
        }
    }["PostList.useEffect"], []);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center p-8",
        children: "Chargement..."
    }, void 0, false, {
        fileName: "[project]/app/post/page.tsx",
        lineNumber: 184,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold",
                        children: "Liste des Articles"
                    }, void 0, false, {
                        fileName: "[project]/app/post/page.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/post/create",
                        className: "bg-blue-500 text-white px-4 py-2 rounded",
                        children: "Créer un article"
                    }, void 0, false, {
                        fileName: "[project]/app/post/page.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/post/page.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full border-collapse",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border p-2",
                                    children: "Titre"
                                }, void 0, false, {
                                    fileName: "[project]/app/post/page.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border p-2",
                                    children: "Auteur"
                                }, void 0, false, {
                                    fileName: "[project]/app/post/page.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border p-2",
                                    children: "Date"
                                }, void 0, false, {
                                    fileName: "[project]/app/post/page.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border p-2",
                                    children: "Actions"
                                }, void 0, false, {
                                    fileName: "[project]/app/post/page.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/post/page.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/post/page.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: posts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border p-2",
                                        children: post.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/post/page.tsx",
                                        lineNumber: 207,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border p-2",
                                        children: post.author
                                    }, void 0, false, {
                                        fileName: "[project]/app/post/page.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border p-2",
                                        children: new Date(post.created_at).toLocaleDateString()
                                    }, void 0, false, {
                                        fileName: "[project]/app/post/page.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border p-2 flex gap-2 justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/post/read/${post.id}`,
                                                className: "bg-green-500 text-white px-3 py-1 rounded",
                                                children: "Voir"
                                            }, void 0, false, {
                                                fileName: "[project]/app/post/page.tsx",
                                                lineNumber: 211,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/post/edit/${post.id}`,
                                                className: "bg-yellow-500 text-white px-3 py-1 rounded",
                                                children: "Modifier"
                                            }, void 0, false, {
                                                fileName: "[project]/app/post/page.tsx",
                                                lineNumber: 217,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleDelete(post.id),
                                                className: "bg-red-500 text-white px-3 py-1 rounded",
                                                children: "Supprimer"
                                            }, void 0, false, {
                                                fileName: "[project]/app/post/page.tsx",
                                                lineNumber: 223,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/post/page.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, post.id, true, {
                                fileName: "[project]/app/post/page.tsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/post/page.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/post/page.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/post/page.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, this);
}
_s(PostList, "v08aidtBiRrSVwXuG2u67cU5j/s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = PostList;
var _c;
__turbopack_context__.k.register(_c, "PostList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_post_page_tsx_063e9cbc._.js.map