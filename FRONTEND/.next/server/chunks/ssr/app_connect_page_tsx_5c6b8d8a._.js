module.exports = {

"[project]/app/connect/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// 'use client';
// import { useEffect, useState } from 'react';
// export default function ConnectSocial() {
//   const [status, setStatus] = useState({
//     facebook: false,
//     instagram: false,
//     linkedin: false,
//   });
//   useEffect(() => {
//     const fetchStatus = async () => {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/social-status`, {
//           credentials: 'include',
//         });
//         if (res.ok) {
//           const data = await res.json();
//           setStatus(data);
//         }
//       } catch (err) {
//         console.error('Erreur status:', err);
//       }
//     };
//     fetchStatus();
//   }, []);
//   const connect = (platform: string) => {
//     window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${platform}`;
//   };
//   return (
//     <div className="p-8 space-y-4">
//       <h2 className="text-2xl font-bold mb-4">Connexion Réseaux Sociaux</h2>
//       {['facebook', 'instagram', 'linkedin'].map((platform) => (
//         <div key={platform} className="flex items-center justify-between">
//           <span className="capitalize">{platform}</span>
//           {status[platform as keyof typeof status] ? (
//             <span className="text-green-600">Connecté</span>
//           ) : (
//             <button
//               onClick={() => connect(platform)}
//               className="px-4 py-1 bg-blue-600 text-white rounded"
//             >
//               Connecter
//             </button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
__turbopack_context__.s({
    "default": (()=>ConnectSocial)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function ConnectSocial() {
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        facebook: false,
        instagram: false,
        linkedin: false,
        displayNames: {
            facebook: null,
            instagram: null,
            linkedin: null
        }
    });
    // 🔁 Récupération du statut de connexion des réseaux
    const fetchStatus = async ()=>{
        try {
            const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:3000")}/api/auth/social-status`, {
                credentials: 'include'
            });
            if (res.ok) {
                const data = await res.json();
                setStatus(data);
            }
        } catch (err) {
            console.error('Erreur lors de la récupération du statut social:', err);
        }
    };
    // 🔗 Redirection vers la page d'auth du réseau
    const connect = (platform)=>{
        window.location.href = `${"TURBOPACK compile-time value", "http://localhost:3000"}/api/auth/${platform}`;
    };
    // ❌ Déconnexion du réseau
    const disconnect = async (platform)=>{
        try {
            const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:3000")}/api/auth/disconnect/${platform}`, {
                method: 'GET',
                credentials: 'include'
            });
            if (res.ok) {
                fetchStatus();
            }
        } catch (err) {
            console.error(`Erreur lors de la déconnexion de ${platform}:`, err);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchStatus();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 space-y-6 max-w-xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4",
                children: "Connexion aux Réseaux Sociaux"
            }, void 0, false, {
                fileName: "[project]/app/connect/page.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            [
                'facebook',
                'instagram',
                'linkedin'
            ].map((platform)=>{
                const isConnected = status[platform];
                const displayName = status.displayNames[platform];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b pb-3 pt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "capitalize font-medium",
                                    children: platform
                                }, void 0, false, {
                                    fileName: "[project]/app/connect/page.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this),
                                isConnected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-gray-500",
                                    children: [
                                        "Connecté en tant que ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: displayName ?? 'Utilisateur'
                                        }, void 0, false, {
                                            fileName: "[project]/app/connect/page.tsx",
                                            lineNumber: 150,
                                            columnNumber: 40
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/connect/page.tsx",
                                    lineNumber: 149,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/connect/page.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this),
                        isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>disconnect(platform),
                            className: "px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700",
                            children: "Déconnecter"
                        }, void 0, false, {
                            fileName: "[project]/app/connect/page.tsx",
                            lineNumber: 156,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>connect(platform),
                            className: "px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700",
                            children: "Connecter"
                        }, void 0, false, {
                            fileName: "[project]/app/connect/page.tsx",
                            lineNumber: 163,
                            columnNumber: 15
                        }, this)
                    ]
                }, platform, true, {
                    fileName: "[project]/app/connect/page.tsx",
                    lineNumber: 142,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/app/connect/page.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=app_connect_page_tsx_5c6b8d8a._.js.map