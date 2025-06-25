(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_connect_page_tsx_890a15c4._.js", {

"[project]/app/connect/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// 'use client';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// type Account = { displayName: string };
// type Social = { facebook?: Account; instagram?: Account; linkedin?: Account };
// export default function ConnectSocialPage() {
//   const [social, setSocial] = useState<Social>({});
//   const fetchSocial = async () => {
//     const res = await axios.get('/social/me', { withCredentials: true });
//     setSocial(res.data.socialAccounts || {});
//   };
//   const connect = (provider: string) => (window.location.href = `/auth/${provider}`);
//   const disconnect = async (provider: string) => {
//     await axios.delete(`/social/${provider}`, { withCredentials: true });
//     fetchSocial();
//   };
//   useEffect(() => { fetchSocial(); }, []);
//   return (
//     <div className="p-6 space-y-4 max-w-md mx-auto">
//       <h2 className="text-xl font-bold">Gérer mes connexions</h2>
//       {['facebook', 'instagram', 'linkedin'].map((prov) => (
//         <div key={prov} className="flex justify-between items-center border p-4 rounded">
//           <span className="capitalize">{prov}</span>
//           {social[prov] ? (
//             <>
//               <span>Connecté ({social[prov]?.displayName})</span>
//               <button className="text-red-500" onClick={() => disconnect(prov)}>Déconnecter</button>
//             </>
//           ) : (
//             <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={() => connect(prov)}>Connecter</button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
// 'use client'
// import { useEffect, useState } from 'react'
// export default function ConnectSocial() {
//   const [status, setStatus] = useState({
//     facebook: false,
//     instagram: false,
//     linkedin: false,
//   });
//   useEffect(() => {
//     const fetchStatus = async () => {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/social-status`, {
//         credentials: 'include',
//       });
//       if (res.ok) {
//         const data = await res.json();
//         setStatus(data);
//       }
//     };
//     fetchStatus();
//   }, []);
//   const connect = (platform: string) => {
//     window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${platform}`;
//   };
//   return (
//     <div className="space-y-4">
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ConnectSocial() {
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        facebook: false,
        instagram: false,
        linkedin: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConnectSocial.useEffect": ()=>{
            const fetchStatus = {
                "ConnectSocial.useEffect.fetchStatus": async ()=>{
                    try {
                        const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:3000")}/api/auth/social-status`, {
                            credentials: 'include'
                        });
                        if (res.ok) {
                            const data = await res.json();
                            setStatus(data);
                        }
                    } catch (err) {
                        console.error('Erreur status:', err);
                    }
                }
            }["ConnectSocial.useEffect.fetchStatus"];
            fetchStatus();
        }
    }["ConnectSocial.useEffect"], []);
    const connect = (platform)=>{
        window.location.href = `${"TURBOPACK compile-time value", "http://localhost:3000"}/api/auth/${platform}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4",
                children: "Connexion Réseaux Sociaux"
            }, void 0, false, {
                fileName: "[project]/app/connect/page.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            [
                'facebook',
                'instagram',
                'linkedin'
            ].map((platform)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "capitalize",
                            children: platform
                        }, void 0, false, {
                            fileName: "[project]/app/connect/page.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        status[platform] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-green-600",
                            children: "Connecté"
                        }, void 0, false, {
                            fileName: "[project]/app/connect/page.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>connect(platform),
                            className: "px-4 py-1 bg-blue-600 text-white rounded",
                            children: "Connecter"
                        }, void 0, false, {
                            fileName: "[project]/app/connect/page.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this)
                    ]
                }, platform, true, {
                    fileName: "[project]/app/connect/page.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/app/connect/page.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_s(ConnectSocial, "vP9uhEIzggYdMPqPTXXPmrQquZU=");
_c = ConnectSocial;
var _c;
__turbopack_context__.k.register(_c, "ConnectSocial");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_connect_page_tsx_890a15c4._.js.map