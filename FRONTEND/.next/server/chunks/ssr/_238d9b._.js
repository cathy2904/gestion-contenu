module.exports = {

"[project]/components/chart/Chart.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$auto$2f$auto$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/chart.js/auto/auto.js [app-ssr] (ecmascript) <module evaluation>");
"use client";
;
;
;
const Bar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{
    typeof require.resolveWeak !== "undefined" && require.resolveWeak("react-chartjs-2");
}, {
    loadableGenerated: {
        modules: [
            "components/chart/Chart.tsx -> " + "react-chartjs-2"
        ]
    },
    ssr: false
});
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-[350px] h-[350px] md:w-[700px] md:h-[700px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Bar, {
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
const __TURBOPACK__default__export__ = BarChart;
}}),
"[project]/components/chart/Line.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$auto$2f$auto$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/chart.js/auto/auto.js [app-ssr] (ecmascript) <module evaluation>");
"use client";
;
;
;
const Line = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{
    typeof require.resolveWeak !== "undefined" && require.resolveWeak("react-chartjs-2");
}, {
    loadableGenerated: {
        modules: [
            "components/chart/Line.tsx -> " + "react-chartjs-2"
        ]
    },
    ssr: false
});
const LineChart = ({ graph })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "-ml-3",
        style: {
            width: '200px',
            height: '200px'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
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
const __TURBOPACK__default__export__ = LineChart;
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=_238d9b._.js.map