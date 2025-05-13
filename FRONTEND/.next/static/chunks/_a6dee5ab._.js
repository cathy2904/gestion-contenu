(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_a6dee5ab._.js", {

"[project]/components/Principal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Principal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Principal({ titre, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " w-full md:w-5/6 bg-[#121313] p-3 md:p-6  space-y-4 overflow-hidden h-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold",
                children: [
                    titre,
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/components/Principal.tsx",
                lineNumber: 4,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#121313] h-[90%]",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/Principal.tsx",
                lineNumber: 5,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Principal.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = Principal;
var _c;
__turbopack_context__.k.register(_c, "Principal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/contenu/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ContentPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Principal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Principal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ContentPage() {
    _s();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [generatedContent, setGeneratedContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [model, setModel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('openai');
    // Fonction pour générer un article
    async function handleGenerate() {
        try {
            setLoading(true);
            setError(null);
            const apiKey = model === 'openai' ? ("TURBOPACK compile-time value", "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") : ("TURBOPACK compile-time value", "sk-4a420159a11a4d30b3fa44d87d47c059");
            const url = model === 'openai' ? 'https://api.openai.com/v1/chat/completions' : 'https://api.deepseek.com/chat/completions';
            console.log("API Key utilisée:", apiKey);
            console.log("URL utilisée:", url);
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: model === 'openai' ? 'gpt-4o' : 'deepseek-chat',
                    messages: [
                        {
                            role: 'system',
                            content: 'Tu es un rédacteur professionnel.'
                        },
                        {
                            role: 'user',
                            content: `Écris un article sur : ${title}`
                        }
                    ],
                    max_tokens: 500
                })
            });
            const result = await response.json();
            const content = result?.choices?.[0]?.message?.content || '';
            setGeneratedContent(content);
        } catch (err) {
            console.error(err);
            setError("Une erreur est survenue lors de la génération de l'article.");
        } finally{
            setLoading(false);
        }
    }
    // Appel à l'API OpenAI pour générer un article
    //     const completion = await openai.chat.completions.create({
    //       messages: [
    //         { role: 'system', content: 'Vous êtes un rédacteur professionnel.' },
    //         { role: 'user', content: `Écris un article sur : ${title}` },
    //       ],
    //       model: 'gpt-4o',
    //       max_completion_tokens: 300,
    //     });
    //     const generatedText = completion.choices[0].message.content || '';
    //     setGeneratedContent(generatedText); // Afficher le contenu généré
    //   } catch (err) {
    //     console.error('Erreur lors de la génération du contenu:', err);
    //     setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    //   } finally {
    //     setLoading(false);
    //   }
    // }
    // Fonction pour enregistrer le contenu généré dans MongoDB
    async function handleSave() {
        try {
            setSaving(true);
            setError(null);
            if (!generatedContent) {
                throw new Error('Aucun contenu généré à enregistrer.');
            }
            // Envoyer le contenu généré au backend pour enregistrement
            const saveResponse = await fetch('/analyse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    content: generatedContent
                })
            });
            if (!saveResponse.ok) {
                throw new Error('Erreur lors de l\'enregistrement du contenu');
            }
            const data = await saveResponse.json();
            alert('Contenu enregistré avec succès !');
            console.log('Contenu enregistré:', data);
        } catch (err) {
            console.error('Erreur lors de l\'enregistrement:', err);
            setError(err instanceof Error ? err.message : 'Une erreur est survenue');
        } finally{
            setSaving(false);
        }
    }
    // Styles CSS internes
    const styles = {
        container: {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: 'dark',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        },
        title: {
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#333'
        },
        input: {
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '4px'
        },
        button: {
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px'
        },
        buttonDisabled: {
            backgroundColor: '#ccc',
            cursor: 'not-allowed'
        },
        error: {
            color: 'red',
            marginBottom: '20px'
        },
        generatedContent: {
            marginTop: '20px',
            padding: '20px',
            backgroundColor: 'black',
            border: '1px solid #ddd',
            borderRadius: '4px',
            color: 'white'
        },
        generatedContentTitle: {
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '10px',
            color: '#333'
        },
        generatedContentText: {
            fontSize: '16px',
            color: '#FFFFFF',
            lineHeight: '1.6'
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Principal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        titre: "Contents",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Content Home"
            }, void 0, false, {
                fileName: "[project]/app/contenu/page.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "contenu/analyze/",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors",
                    children: "Aller à la page d'analyse"
                }, void 0, false, {
                    fileName: "[project]/app/contenu/page.tsx",
                    lineNumber: 187,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/contenu/page.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "contenu/deepseek/",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors",
                    children: "Avancé"
                }, void 0, false, {
                    fileName: "[project]/app/contenu/page.tsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/contenu/page.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "model",
                        className: "mr-2 font-medium",
                        children: "Choisir le moteur :"
                    }, void 0, false, {
                        fileName: "[project]/app/contenu/page.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "model",
                        value: model,
                        onChange: (e)=>setModel(e.target.value),
                        className: "border rounded p-2 text-gray",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "openai",
                                children: "CHAT GPT"
                            }, void 0, false, {
                                fileName: "[project]/app/contenu/page.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "deepseek",
                                children: "DeepSeek"
                            }, void 0, false, {
                                fileName: "[project]/app/contenu/page.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/contenu/page.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/contenu/page.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Entre un sujet ou un titre",
                value: title,
                onChange: (e)=>setTitle(e.target.value),
                className: "border border-gray-300 rounded p-2 w-full mb-4"
            }, void 0, false, {
                fileName: "[project]/app/contenu/page.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleGenerate,
                disabled: loading,
                className: "bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-700",
                children: loading ? 'Génération...' : 'Générer l’article'
            }, void 0, false, {
                fileName: "[project]/app/contenu/page.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500 mt-4",
                children: error
            }, void 0, false, {
                fileName: "[project]/app/contenu/page.tsx",
                lineNumber: 226,
                columnNumber: 17
            }, this),
            generatedContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 p-4 border text-black rounded bg-gray-100 whitespace-pre-wrap",
                children: generatedContent
            }, void 0, false, {
                fileName: "[project]/app/contenu/page.tsx",
                lineNumber: 229,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/contenu/page.tsx",
        lineNumber: 183,
        columnNumber: 1
    }, this);
}
_s(ContentPage, "yIqtRxm1vBkEAF8Ja5hAbLWGaow=");
_c = ContentPage;
var _c;
__turbopack_context__.k.register(_c, "ContentPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_a6dee5ab._.js.map