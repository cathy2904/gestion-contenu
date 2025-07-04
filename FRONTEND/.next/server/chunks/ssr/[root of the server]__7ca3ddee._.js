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
"[project]/app/connect/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
'use client';
;
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
    const fetchStatus = async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('http://localhost:3000/auth/social-status', {
            withCredentials: true
        });
        setStatus(res.data);
    };
    const disconnect = async (platform)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`http://localhost:3000/auth/disconnect/${platform}`, {
            withCredentials: true
        });
        fetchStatus();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchStatus();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Réseaux connectés :"
            }, void 0, false, {
                fileName: "[project]/app/connect/page.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            [
                'facebook',
                'instagram',
                'linkedin'
            ].map((platform)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: status[platform] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "✅ ",
                            platform,
                            " connecté — ",
                            status.displayNames[platform],
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>disconnect(platform),
                                children: "Déconnecter"
                            }, void 0, false, {
                                fileName: "[project]/app/connect/page.tsx",
                                lineNumber: 136,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/connect/page.tsx",
                        lineNumber: 134,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `http://localhost:3000/auth/${platform}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            children: [
                                "Connecter ",
                                platform
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/connect/page.tsx",
                            lineNumber: 140,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/connect/page.tsx",
                        lineNumber: 139,
                        columnNumber: 13
                    }, this)
                }, platform, false, {
                    fileName: "[project]/app/connect/page.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/app/connect/page.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__7ca3ddee._.js.map