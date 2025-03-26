(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_chart_355d6b4b._.js", {

"[project]/components/chart/Chart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$auto$2f$auto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/auto/auto.js [app-client] (ecmascript) <module evaluation>");
;
"use client";
;
;
;
const Bar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i).then((mod)=>mod.Bar), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = Bar;
const data = {
    labels: [
        'j',
        'f',
        'm',
        'a'
    ],
    datasets: [
        {
            label: "",
            data: [
                45,
                55,
                75,
                85
            ],
            backgroundColor: [
                "rgba(19,46,34,255)",
                "rgba(19,46,34,255)",
                "rgba(19,46,34,255)",
                "rgba(19,46,34,255)"
            ],
            borderColor: [
                "rgba(19,46,34,255)",
                "rgba(19,46,34,255)",
                "rgba(19,46,34,255)",
                "rgba(19,46,34,255)"
            ],
            borderWidth: 1
        },
        {
            label: "",
            data: [
                80,
                75,
                85,
                85
            ],
            backgroundColor: [
                "rgba(30,72,54,255)",
                "rgba(30,72,54,255)",
                "rgba(30,72,54,255)",
                "rgba(30,72,54,255)"
            ],
            borderColor: [
                "rgba(30,72,54,255)",
                "rgba(30,72,54,255)",
                "rgba(30,72,54,255)",
                "rgba(30,72,54,255)"
            ],
            borderWidth: 1
        },
        {
            label: "",
            data: [
                55,
                95,
                40,
                45
            ],
            backgroundColor: [
                "rgba(40,97,73,255)",
                "rgba(40,97,73,255)",
                "rgba(40,97,73,255)",
                "rgba(40,97,73,255)"
            ],
            borderColor: [
                "rgba(40,97,73,255)",
                "rgba(40,97,73,255)",
                "rgba(40,97,73,255)",
                "rgba(40,97,73,255)"
            ],
            borderWidth: 1
        },
        {
            label: "",
            data: [
                85,
                35,
                55,
                100
            ],
            backgroundColor: [
                "rgba(56,133,101,255)",
                "rgba(56,133,101,255)",
                "rgba(56,133,101,255)",
                "rgba(56,133,101,255)"
            ],
            borderColor: [
                "rgba(56,133,101,255)",
                "rgba(56,133,101,255)",
                "rgba(56,133,101,255)",
                "rgba(56,133,101,255)"
            ],
            borderWidth: 1
        }
    ]
};
const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false,
            text: "Ventes"
        }
    },
    scales: {
        x: {
            barPercentage: 1.0,
            categoryPercentage: 1.0,
            title: {
                display: false,
                text: "Categories"
            },
            grid: {
                display: true
            },
            ticks: {
                display: true
            }
        },
        y: {
            beginAtZero: true,
            title: {
                display: false,
                text: "Values"
            },
            grid: {
                display: true,
                color: 'rgba(53,53,53,255)'
            },
            ticks: {
                display: true
            }
        }
    }
};
const BarChart = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-[350px] h-[350px] md:w-[700px] md:h-[700px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Bar, {
            data: data,
            options: options
        }, void 0, false, {
            fileName: "[project]/components/chart/Chart.tsx",
            lineNumber: 138,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/chart/Chart.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
};
_c1 = BarChart;
const __TURBOPACK__default__export__ = BarChart;
var _c, _c1;
__turbopack_context__.k.register(_c, "Bar");
__turbopack_context__.k.register(_c1, "BarChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/chart/Line.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$auto$2f$auto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/auto/auto.js [app-client] (ecmascript) <module evaluation>");
;
"use client";
;
;
;
const Line = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i).then((mod)=>mod.Line), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = Line;
const LineChart = ({ graph })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "-ml-3",
        style: {
            width: '200px',
            height: '200px'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
            data: graph.data,
            options: graph.options
        }, void 0, false, {
            fileName: "[project]/components/chart/Line.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/chart/Line.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
};
_c1 = LineChart;
const __TURBOPACK__default__export__ = LineChart;
var _c, _c1;
__turbopack_context__.k.register(_c, "Line");
__turbopack_context__.k.register(_c1, "LineChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_chart_355d6b4b._.js.map