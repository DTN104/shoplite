module.exports = [
(()=>{"use strict";return[
"[project]/src/app/(shop)/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-rsc] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$percent$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgePercent$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/badge-percent.mjs [app-rsc] (ecmascript) <export default as BadgePercent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$product$2d$grid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/catalog/components/product-grid.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$catalog$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/catalog/catalog-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$checkout$2f$pricing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/checkout/pricing.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
function HomePage() {
    const featured = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$catalog$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFeaturedProducts"])(4);
    const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$catalog$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCategories"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto flex max-w-6xl flex-col gap-12 px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 px-8 py-14 text-white sm:px-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$percent$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgePercent$3e$__["BadgePercent"], {
                                        className: "size-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(shop)/page.tsx",
                                        lineNumber: 23,
                                        columnNumber: 13
                                    }, this),
                                    "Miễn phí giao hàng cho đơn từ ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatCurrency"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$checkout$2f$pricing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FREE_SHIPPING_THRESHOLD"])
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(shop)/page.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-4 text-4xl font-bold tracking-tight sm:text-5xl",
                                children: "Đồ công nghệ chất lượng, giá tốt mỗi ngày"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(shop)/page.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-lg text-indigo-100",
                                children: "Tai nghe, bàn phím, phụ kiện và thiết bị nhà thông minh chính hãng - giao nhanh toàn quốc."
                            }, void 0, false, {
                                fileName: "[project]/src/app/(shop)/page.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/products",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buttonStyles"])({
                                    size: "lg",
                                    variant: "secondary",
                                    className: "mt-8 ring-0"
                                }),
                                children: [
                                    "Mua sắm ngay",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "size-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(shop)/page.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(shop)/page.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(shop)/page.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute -right-6 -bottom-10 text-[180px] leading-none opacity-30 select-none sm:text-[240px]",
                        "aria-hidden": true,
                        children: "🎧"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(shop)/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(shop)/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-4 text-xl font-bold",
                        children: "Danh mục"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(shop)/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5",
                        children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$catalog$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildCatalogHref"])({
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$catalog$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_CATALOG_QUERY"],
                                    category: category.slug
                                }),
                                className: "flex flex-col gap-2 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl",
                                        "aria-hidden": true,
                                        children: category.emoji
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(shop)/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: category.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(shop)/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "line-clamp-2 text-xs text-slate-500",
                                        children: category.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(shop)/page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, category.slug, true, {
                                fileName: "[project]/src/app/(shop)/page.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(shop)/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(shop)/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex items-end justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold",
                                children: "Sản phẩm nổi bật"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(shop)/page.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/products",
                                className: "flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:underline",
                                children: [
                                    "Xem tất cả ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "size-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(shop)/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 24
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(shop)/page.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(shop)/page.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$product$2d$grid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductGrid"], {
                        products: featured
                    }, void 0, false, {
                        fileName: "[project]/src/app/(shop)/page.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(shop)/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(shop)/page.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 48,
    height: 48
};
}),
"[project]/src/components/ui/price-tag.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PriceTag",
    ()=>PriceTag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-rsc] (ecmascript)");
;
;
;
function PriceTag({ price, originalPrice, size = "sm", className }) {
    const hasDiscount = originalPrice !== undefined && originalPrice > price;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex flex-wrap items-baseline gap-x-2", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("font-bold text-slate-900", size === "lg" ? "text-3xl" : "text-base"),
                "data-testid": "price",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatCurrency"])(price)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/price-tag.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            hasDiscount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-slate-400 line-through", size === "lg" ? "text-lg" : "text-sm"),
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatCurrency"])(originalPrice)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/price-tag.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/price-tag.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/rating-stars.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RatingStars",
    ()=>RatingStars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-rsc] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-rsc] (ecmascript)");
;
;
;
function RatingStars({ rating, reviewCount, className }) {
    const rounded = Math.round(rating);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1 text-sm text-slate-500", className),
        "aria-label": `Đánh giá ${rating} trên 5 sao`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex",
                "aria-hidden": true,
                children: [
                    1,
                    2,
                    3,
                    4,
                    5
                ].map((value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("size-4", value <= rounded ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200")
                    }, value, false, {
                        fileName: "[project]/src/components/ui/rating-stars.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/rating-stars.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-medium text-slate-700",
                children: rating.toFixed(1)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/rating-stars.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            reviewCount !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    "(",
                    reviewCount,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/rating-stars.tsx",
                lineNumber: 30,
                columnNumber: 37
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/rating-stars.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/categories.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories
]);
const categories = [
    {
        slug: "am-thanh",
        name: "Âm thanh",
        emoji: "🎧",
        description: "Tai nghe, loa và micro cho trải nghiệm âm thanh sống động."
    },
    {
        slug: "ban-phim-chuot",
        name: "Bàn phím & Chuột",
        emoji: "⌨️",
        description: "Bàn phím cơ, chuột không dây và phụ kiện bàn làm việc."
    },
    {
        slug: "phu-kien",
        name: "Phụ kiện",
        emoji: "🔌",
        description: "Sạc, cáp, pin dự phòng và giá đỡ cho thiết bị của bạn."
    },
    {
        slug: "thiet-bi-deo",
        name: "Thiết bị đeo",
        emoji: "⌚",
        description: "Đồng hồ thông minh, vòng đeo sức khỏe và kính thực tế ảo."
    },
    {
        slug: "nha-thong-minh",
        name: "Nhà thông minh",
        emoji: "💡",
        description: "Đèn, camera và robot giúp ngôi nhà tiện nghi hơn."
    }
];
}),
"[project]/src/data/products.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "products",
    ()=>products
]);
const products = [
    {
        id: "p001",
        slug: "tai-nghe-khong-day-soundmax-pro",
        name: "Tai nghe không dây SoundMax Pro",
        brand: "SoundMax",
        categorySlug: "am-thanh",
        price: 1_290_000,
        originalPrice: 1_590_000,
        rating: 4.6,
        reviewCount: 128,
        stock: 25,
        image: {
            emoji: "🎧",
            from: "#e0f2fe",
            to: "#c7d2fe"
        },
        shortDescription: "Chống ồn chủ động, pin 30 giờ, kết nối Bluetooth 5.3.",
        description: "SoundMax Pro mang lại âm bass sâu và chi tiết với driver 40mm. Chế độ chống ồn chủ động giúp bạn tập trung khi làm việc, còn chế độ xuyên âm giúp nghe rõ môi trường xung quanh khi cần.",
        specs: [
            {
                label: "Kết nối",
                value: "Bluetooth 5.3"
            },
            {
                label: "Thời lượng pin",
                value: "30 giờ (kèm hộp sạc)"
            },
            {
                label: "Chống nước",
                value: "IPX4"
            },
            {
                label: "Trọng lượng",
                value: "5,2 g mỗi bên"
            }
        ],
        tags: [
            "bluetooth",
            "chống ồn",
            "không dây"
        ],
        featured: true,
        createdAt: "2026-03-12T08:00:00.000Z"
    },
    {
        id: "p002",
        slug: "loa-bluetooth-beatbox-mini",
        name: "Loa Bluetooth BeatBox Mini",
        brand: "BeatBox",
        categorySlug: "am-thanh",
        price: 690_000,
        rating: 4.3,
        reviewCount: 86,
        stock: 40,
        image: {
            emoji: "🔊",
            from: "#fef3c7",
            to: "#fecaca"
        },
        shortDescription: "Nhỏ gọn bỏ túi, âm thanh 360°, chống nước IPX7.",
        description: "BeatBox Mini là người bạn đồng hành cho mọi chuyến đi. Thiết kế chống nước IPX7, dây đeo tiện lợi và khả năng ghép đôi hai loa để nghe stereo.",
        specs: [
            {
                label: "Công suất",
                value: "10 W"
            },
            {
                label: "Thời lượng pin",
                value: "12 giờ"
            },
            {
                label: "Chống nước",
                value: "IPX7"
            }
        ],
        tags: [
            "bluetooth",
            "du lịch",
            "chống nước"
        ],
        featured: false,
        createdAt: "2026-01-20T08:00:00.000Z"
    },
    {
        id: "p003",
        slug: "tai-nghe-chup-tai-studioone",
        name: "Tai nghe chụp tai StudioOne",
        brand: "StudioOne",
        categorySlug: "am-thanh",
        price: 2_450_000,
        rating: 4.8,
        reviewCount: 54,
        stock: 8,
        image: {
            emoji: "🎶",
            from: "#ede9fe",
            to: "#fbcfe8"
        },
        shortDescription: "Âm thanh studio, đệm tai memory foam, có dây và không dây.",
        description: "StudioOne được tinh chỉnh cho dân sáng tạo nội dung: dải tần cân bằng, đệm tai êm ái đeo cả ngày và có thể dùng cáp 3.5mm khi cần độ trễ thấp.",
        specs: [
            {
                label: "Driver",
                value: "50 mm"
            },
            {
                label: "Kết nối",
                value: "Bluetooth 5.2 / 3.5 mm"
            },
            {
                label: "Thời lượng pin",
                value: "40 giờ"
            },
            {
                label: "Trọng lượng",
                value: "250 g"
            }
        ],
        tags: [
            "studio",
            "chụp tai",
            "không dây"
        ],
        featured: true,
        createdAt: "2026-05-02T08:00:00.000Z"
    },
    {
        id: "p004",
        slug: "micro-thu-am-podcast-usb",
        name: "Micro thu âm PodCast USB",
        brand: "VoiceLab",
        categorySlug: "am-thanh",
        price: 1_150_000,
        rating: 4.5,
        reviewCount: 37,
        stock: 0,
        image: {
            emoji: "🎙️",
            from: "#f1f5f9",
            to: "#cbd5e1"
        },
        shortDescription: "Micro condenser cắm USB, phù hợp podcast và livestream.",
        description: "Micro PodCast USB cắm là chạy, không cần soundcard. Có núm chỉnh gain, nút tắt tiếng và cổng tai nghe để kiểm âm trực tiếp.",
        specs: [
            {
                label: "Loại",
                value: "Condenser, cardioid"
            },
            {
                label: "Kết nối",
                value: "USB-C"
            },
            {
                label: "Tần số lấy mẫu",
                value: "48 kHz / 24-bit"
            }
        ],
        tags: [
            "podcast",
            "livestream",
            "usb"
        ],
        featured: false,
        createdAt: "2025-11-15T08:00:00.000Z"
    },
    {
        id: "p005",
        slug: "ban-phim-co-keypro-75",
        name: "Bàn phím cơ KeyPro 75%",
        brand: "KeyPro",
        categorySlug: "ban-phim-chuot",
        price: 1_890_000,
        originalPrice: 2_190_000,
        rating: 4.7,
        reviewCount: 211,
        stock: 15,
        image: {
            emoji: "⌨️",
            from: "#dcfce7",
            to: "#a7f3d0"
        },
        shortDescription: "Layout 75%, hot-swap, kết nối 3 chế độ, LED RGB.",
        description: "KeyPro 75% có mạch hot-swap cho phép thay switch không cần hàn, kết nối có dây, Bluetooth và 2.4GHz. Keycap PBT double-shot bền màu theo thời gian.",
        specs: [
            {
                label: "Layout",
                value: "75% (84 phím)"
            },
            {
                label: "Switch",
                value: "Gateron Brown (hot-swap)"
            },
            {
                label: "Kết nối",
                value: "USB-C / Bluetooth / 2.4GHz"
            },
            {
                label: "Pin",
                value: "4.000 mAh"
            }
        ],
        tags: [
            "bàn phím cơ",
            "hot-swap",
            "rgb"
        ],
        featured: true,
        createdAt: "2026-04-18T08:00:00.000Z"
    },
    {
        id: "p006",
        slug: "chuot-khong-day-swiftclick",
        name: "Chuột không dây SwiftClick",
        brand: "SwiftClick",
        categorySlug: "ban-phim-chuot",
        price: 450_000,
        rating: 4.4,
        reviewCount: 302,
        stock: 60,
        image: {
            emoji: "🖱️",
            from: "#fae8ff",
            to: "#ddd6fe"
        },
        shortDescription: "Siêu nhẹ 60g, cảm biến 26.000 DPI, pin sạc 70 giờ.",
        description: "SwiftClick có thiết kế đối xứng phù hợp mọi kiểu cầm, cảm biến chính xác cho cả làm việc và chơi game, sạc nhanh qua cổng USB-C.",
        specs: [
            {
                label: "Trọng lượng",
                value: "60 g"
            },
            {
                label: "Cảm biến",
                value: "26.000 DPI"
            },
            {
                label: "Thời lượng pin",
                value: "70 giờ"
            }
        ],
        tags: [
            "chuột",
            "không dây",
            "gaming"
        ],
        featured: false,
        createdAt: "2026-02-10T08:00:00.000Z"
    },
    {
        id: "p007",
        slug: "ban-di-chuot-deskmat-xl",
        name: "Bàn di chuột cỡ lớn DeskMat XL",
        brand: "DeskMat",
        categorySlug: "ban-phim-chuot",
        price: 250_000,
        rating: 4.2,
        reviewCount: 98,
        stock: 100,
        image: {
            emoji: "🟪",
            from: "#e0e7ff",
            to: "#c4b5fd"
        },
        shortDescription: "Kích thước 90x40cm, đế cao su chống trượt, viền khâu chắc chắn.",
        description: "DeskMat XL phủ kín bàn làm việc, bề mặt vải mịn giúp chuột lướt êm, có thể giặt được và không bong viền sau thời gian dài sử dụng.",
        specs: [
            {
                label: "Kích thước",
                value: "900 x 400 x 4 mm"
            },
            {
                label: "Chất liệu",
                value: "Vải dệt, đế cao su"
            }
        ],
        tags: [
            "lót chuột",
            "bàn làm việc"
        ],
        featured: false,
        createdAt: "2025-12-01T08:00:00.000Z"
    },
    {
        id: "p008",
        slug: "sac-nhanh-gan-65w",
        name: "Sạc nhanh GaN 65W",
        brand: "VoltUp",
        categorySlug: "phu-kien",
        price: 590_000,
        rating: 4.6,
        reviewCount: 176,
        stock: 35,
        image: {
            emoji: "⚡",
            from: "#fef9c3",
            to: "#fde68a"
        },
        shortDescription: "3 cổng (2 USB-C, 1 USB-A), sạc được laptop, nhỏ gọn.",
        description: "Công nghệ GaN giúp củ sạc nhỏ hơn 40% so với sạc truyền thống. Một củ sạc cho cả laptop, điện thoại và tai nghe, hỗ trợ chuẩn PD 3.0 và QC 4+.",
        specs: [
            {
                label: "Công suất tối đa",
                value: "65 W"
            },
            {
                label: "Cổng",
                value: "2 x USB-C, 1 x USB-A"
            },
            {
                label: "Chuẩn sạc",
                value: "PD 3.0, QC 4+"
            }
        ],
        tags: [
            "sạc nhanh",
            "gan",
            "usb-c"
        ],
        featured: true,
        createdAt: "2026-06-05T08:00:00.000Z"
    },
    {
        id: "p009",
        slug: "pin-du-phong-powergo-20000",
        name: "Pin dự phòng PowerGo 20.000mAh",
        brand: "PowerGo",
        categorySlug: "phu-kien",
        price: 750_000,
        originalPrice: 890_000,
        rating: 4.5,
        reviewCount: 240,
        stock: 22,
        image: {
            emoji: "🔋",
            from: "#dcfce7",
            to: "#bbf7d0"
        },
        shortDescription: "Dung lượng 20.000mAh, sạc nhanh 22.5W, màn hình hiển thị %.",
        description: "PowerGo sạc đầy điện thoại 4–5 lần, có màn hình LED hiển thị phần trăm pin và đạt chuẩn mang lên máy bay.",
        specs: [
            {
                label: "Dung lượng",
                value: "20.000 mAh"
            },
            {
                label: "Công suất",
                value: "22,5 W"
            },
            {
                label: "Trọng lượng",
                value: "350 g"
            }
        ],
        tags: [
            "pin dự phòng",
            "sạc nhanh",
            "du lịch"
        ],
        featured: false,
        createdAt: "2026-03-28T08:00:00.000Z"
    },
    {
        id: "p010",
        slug: "cap-usb-c-ben-du-2m",
        name: "Cáp USB-C bện dù 2m",
        brand: "VoltUp",
        categorySlug: "phu-kien",
        price: 150_000,
        rating: 4.1,
        reviewCount: 412,
        stock: 200,
        image: {
            emoji: "🔗",
            from: "#f1f5f9",
            to: "#e2e8f0"
        },
        shortDescription: "Bện dù siêu bền, hỗ trợ sạc 100W và truyền dữ liệu 480Mbps.",
        description: "Lớp bện dù chịu được hơn 20.000 lần gập, đầu cáp bằng nhôm chắc chắn. Dài 2m thoải mái dùng trên giường hoặc sofa.",
        specs: [
            {
                label: "Chiều dài",
                value: "2 m"
            },
            {
                label: "Công suất",
                value: "100 W"
            }
        ],
        tags: [
            "cáp",
            "usb-c"
        ],
        featured: false,
        createdAt: "2025-10-08T08:00:00.000Z"
    },
    {
        id: "p011",
        slug: "gia-do-laptop-nhom",
        name: "Giá đỡ laptop nhôm",
        brand: "DeskMat",
        categorySlug: "phu-kien",
        price: 390_000,
        rating: 4.3,
        reviewCount: 67,
        stock: 3,
        image: {
            emoji: "💻",
            from: "#e2e8f0",
            to: "#bae6fd"
        },
        shortDescription: "Nhôm nguyên khối, gấp gọn, chỉnh 6 mức độ cao.",
        description: "Nâng màn hình laptop lên ngang tầm mắt giúp giảm mỏi cổ. Thiết kế tản nhiệt hở, đệm silicon chống trầy và gấp gọn bỏ balo.",
        specs: [
            {
                label: "Chất liệu",
                value: "Nhôm hợp kim"
            },
            {
                label: "Tương thích",
                value: "Laptop 10–17 inch"
            }
        ],
        tags: [
            "giá đỡ",
            "laptop",
            "công thái học"
        ],
        featured: false,
        createdAt: "2026-07-14T08:00:00.000Z"
    },
    {
        id: "p012",
        slug: "dong-ho-thong-minh-fitwatch-s2",
        name: "Đồng hồ thông minh FitWatch S2",
        brand: "FitLife",
        categorySlug: "thiet-bi-deo",
        price: 2_990_000,
        originalPrice: 3_490_000,
        rating: 4.6,
        reviewCount: 143,
        stock: 12,
        image: {
            emoji: "⌚",
            from: "#ffe4e6",
            to: "#fecdd3"
        },
        shortDescription: "Màn hình AMOLED, GPS, đo nhịp tim và SpO2, pin 10 ngày.",
        description: "FitWatch S2 theo dõi hơn 100 chế độ luyện tập, có GPS độc lập, nhận thông báo từ điện thoại và hỗ trợ thanh toán không chạm.",
        specs: [
            {
                label: "Màn hình",
                value: "AMOLED 1,43 inch"
            },
            {
                label: "Thời lượng pin",
                value: "10 ngày"
            },
            {
                label: "Chống nước",
                value: "5 ATM"
            }
        ],
        tags: [
            "đồng hồ",
            "sức khỏe",
            "gps"
        ],
        featured: true,
        createdAt: "2026-08-01T08:00:00.000Z"
    },
    {
        id: "p013",
        slug: "vong-deo-tay-fitband-5",
        name: "Vòng đeo tay sức khỏe FitBand 5",
        brand: "FitLife",
        categorySlug: "thiet-bi-deo",
        price: 890_000,
        rating: 4.2,
        reviewCount: 189,
        stock: 0,
        image: {
            emoji: "🏃",
            from: "#ccfbf1",
            to: "#99f6e4"
        },
        shortDescription: "Theo dõi giấc ngủ, bước chân, nhịp tim; pin 14 ngày.",
        description: "FitBand 5 mỏng nhẹ, đeo cả khi ngủ để phân tích chất lượng giấc ngủ. Đồng bộ dữ liệu với ứng dụng sức khỏe trên điện thoại.",
        specs: [
            {
                label: "Màn hình",
                value: "AMOLED 1,1 inch"
            },
            {
                label: "Thời lượng pin",
                value: "14 ngày"
            }
        ],
        tags: [
            "vòng đeo",
            "sức khỏe",
            "giấc ngủ"
        ],
        featured: false,
        createdAt: "2025-09-22T08:00:00.000Z"
    },
    {
        id: "p014",
        slug: "kinh-thuc-te-ao-visionlite",
        name: "Kính thực tế ảo VisionLite",
        brand: "VisionLite",
        categorySlug: "thiet-bi-deo",
        price: 7_990_000,
        rating: 4.4,
        reviewCount: 21,
        stock: 5,
        image: {
            emoji: "🥽",
            from: "#e0f2fe",
            to: "#a5f3fc"
        },
        shortDescription: "Kính VR độc lập, màn hình 4K, theo dõi chuyển động 6DoF.",
        description: "VisionLite không cần máy tính, chơi game và xem phim trực tiếp trên kính. Kho ứng dụng phong phú cho giải trí, học tập và luyện tập thể thao.",
        specs: [
            {
                label: "Độ phân giải",
                value: "4K (2064 x 2208 mỗi mắt)"
            },
            {
                label: "Bộ nhớ",
                value: "128 GB"
            },
            {
                label: "Theo dõi",
                value: "6DoF inside-out"
            }
        ],
        tags: [
            "vr",
            "giải trí",
            "gaming"
        ],
        featured: false,
        createdAt: "2026-09-10T08:00:00.000Z"
    },
    {
        id: "p015",
        slug: "camera-an-ninh-homecam-2k",
        name: "Camera an ninh HomeCam 2K",
        brand: "HomeCam",
        categorySlug: "nha-thong-minh",
        price: 990_000,
        originalPrice: 1_190_000,
        rating: 4.5,
        reviewCount: 91,
        stock: 18,
        image: {
            emoji: "📷",
            from: "#f5f5f4",
            to: "#d6d3d1"
        },
        shortDescription: "Độ phân giải 2K, xoay 360°, đàm thoại hai chiều, nhìn đêm.",
        description: "HomeCam 2K phát hiện chuyển động và gửi cảnh báo về điện thoại. Hỗ trợ lưu trữ thẻ nhớ và đám mây, đàm thoại hai chiều với người ở nhà.",
        specs: [
            {
                label: "Độ phân giải",
                value: "2K (2304 x 1296)"
            },
            {
                label: "Góc quay",
                value: "360° ngang, 110° dọc"
            },
            {
                label: "Lưu trữ",
                value: "Thẻ nhớ tối đa 256 GB"
            }
        ],
        tags: [
            "camera",
            "an ninh",
            "wifi"
        ],
        featured: true,
        createdAt: "2026-02-25T08:00:00.000Z"
    },
    {
        id: "p016",
        slug: "robot-hut-bui-cleanbot-x1",
        name: "Robot hút bụi CleanBot X1",
        brand: "CleanBot",
        categorySlug: "nha-thong-minh",
        price: 4_590_000,
        rating: 4.7,
        reviewCount: 64,
        stock: 7,
        image: {
            emoji: "🤖",
            from: "#ecfccb",
            to: "#d9f99d"
        },
        shortDescription: "Lực hút 4.000Pa, lau nhà, dẫn đường LiDAR, tự về sạc.",
        description: "CleanBot X1 quét bản đồ nhà bằng LiDAR, chia phòng thông minh và cho phép hẹn lịch dọn dẹp qua ứng dụng. Chế độ lau rung giúp sàn sạch hơn.",
        specs: [
            {
                label: "Lực hút",
                value: "4.000 Pa"
            },
            {
                label: "Dẫn đường",
                value: "LiDAR"
            },
            {
                label: "Thời lượng pin",
                value: "180 phút"
            }
        ],
        tags: [
            "robot",
            "hút bụi",
            "lau nhà"
        ],
        featured: true,
        createdAt: "2026-06-20T08:00:00.000Z"
    }
];
}),
"[project]/src/features/cart/components/add-to-cart-button.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddToCartButton",
    ()=>AddToCartButton
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const AddToCartButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AddToCartButton() from the server but AddToCartButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/cart/components/add-to-cart-button.tsx", "AddToCartButton");
}),
"[project]/src/features/cart/components/add-to-cart-button.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$components$2f$add$2d$to$2d$cart$2d$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/features/cart/components/add-to-cart-button.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$components$2f$add$2d$to$2d$cart$2d$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/features/catalog/catalog-service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_CATALOG_QUERY",
    ()=>DEFAULT_CATALOG_QUERY,
    "LOW_STOCK_THRESHOLD",
    ()=>LOW_STOCK_THRESHOLD,
    "PAGE_SIZE",
    ()=>PAGE_SIZE,
    "SORT_LABELS",
    ()=>SORT_LABELS,
    "buildCatalogHref",
    ()=>buildCatalogHref,
    "getAllProducts",
    ()=>getAllProducts,
    "getCategories",
    ()=>getCategories,
    "getCategoryBySlug",
    ()=>getCategoryBySlug,
    "getDiscountPercent",
    ()=>getDiscountPercent,
    "getFeaturedProducts",
    ()=>getFeaturedProducts,
    "getProductById",
    ()=>getProductById,
    "getProductBySlug",
    ()=>getProductBySlug,
    "getRelatedProducts",
    ()=>getRelatedProducts,
    "getStockStatus",
    ()=>getStockStatus,
    "parseCatalogQuery",
    ()=>parseCatalogQuery,
    "queryProducts",
    ()=>queryProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/categories.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/catalog/types.ts [app-rsc] (ecmascript)");
;
;
;
;
const PAGE_SIZE = 8;
const LOW_STOCK_THRESHOLD = 5;
const SORT_LABELS = {
    featured: "Nổi bật",
    "price-asc": "Giá thấp → cao",
    "price-desc": "Giá cao → thấp",
    rating: "Đánh giá cao",
    newest: "Mới nhất"
};
const DEFAULT_CATALOG_QUERY = {
    sort: "featured",
    page: 1
};
function getCategories() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categories"];
}
function getCategoryBySlug(slug) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categories"].find((category)=>category.slug === slug);
}
function getAllProducts() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["products"];
}
function getProductBySlug(slug) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["products"].find((product)=>product.slug === slug);
}
function getProductById(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["products"].find((product)=>product.id === id);
}
function getFeaturedProducts(limit = 4) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["products"].filter((product)=>product.featured).sort((a, b)=>b.rating - a.rating).slice(0, limit);
}
function getRelatedProducts(product, limit = 4) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["products"].filter((item)=>item.categorySlug === product.categorySlug && item.id !== product.id).sort((a, b)=>b.rating - a.rating).slice(0, limit);
}
function getStockStatus(product) {
    if (product.stock <= 0) return "out-of-stock";
    if (product.stock <= LOW_STOCK_THRESHOLD) return "low-stock";
    return "in-stock";
}
function getDiscountPercent(product) {
    if (!product.originalPrice || product.originalPrice <= product.price) return 0;
    return Math.round((product.originalPrice - product.price) / product.originalPrice * 100);
}
// ---------------------------------------------------------------------------
// Tìm kiếm, lọc, sắp xếp, phân trang
// ---------------------------------------------------------------------------
function firstValue(value) {
    return Array.isArray(value) ? value[0] : value;
}
function parseNonNegativeInt(value) {
    if (value === undefined || value.trim() === "") return undefined;
    const parsed = Number(value);
    return Number.isInteger(parsed) && parsed >= 0 ? parsed : undefined;
}
function parseCatalogQuery(params) {
    const q = firstValue(params.q)?.trim().slice(0, 100);
    const category = firstValue(params.category);
    const sort = firstValue(params.sort);
    const inStock = firstValue(params.inStock);
    const page = parseNonNegativeInt(firstValue(params.page));
    return {
        q: q ? q : undefined,
        category: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CATEGORY_SLUGS"].includes(category) ? category : undefined,
        minPrice: parseNonNegativeInt(firstValue(params.minPrice)),
        maxPrice: parseNonNegativeInt(firstValue(params.maxPrice)),
        inStock: inStock === "1" || inStock === "true" ? true : undefined,
        sort: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SORT_OPTIONS"].includes(sort) ? sort : "featured",
        page: page && page >= 1 ? page : 1
    };
}
function matchesKeyword(product, keyword) {
    const categoryName = getCategoryBySlug(product.categorySlug)?.name ?? "";
    const haystack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeText"])([
        product.name,
        product.brand,
        product.shortDescription,
        categoryName,
        ...product.tags
    ].join(" "));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeText"])(keyword).split(" ").every((term)=>haystack.includes(term));
}
const comparators = {
    featured: (a, b)=>Number(b.featured) - Number(a.featured) || b.reviewCount - a.reviewCount,
    "price-asc": (a, b)=>a.price - b.price,
    "price-desc": (a, b)=>b.price - a.price,
    rating: (a, b)=>b.rating - a.rating || b.reviewCount - a.reviewCount,
    newest: (a, b)=>b.createdAt.localeCompare(a.createdAt)
};
function queryProducts(query, source = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["products"], pageSize = PAGE_SIZE) {
    const filtered = source.filter((product)=>{
        if (query.q && !matchesKeyword(product, query.q)) return false;
        if (query.category && product.categorySlug !== query.category) return false;
        if (query.minPrice !== undefined && product.price < query.minPrice) return false;
        if (query.maxPrice !== undefined && product.price > query.maxPrice) return false;
        if (query.inStock && product.stock <= 0) return false;
        return true;
    });
    const sorted = [
        ...filtered
    ].sort(comparators[query.sort]);
    const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
    const page = Math.min(Math.max(1, query.page), totalPages);
    const start = (page - 1) * pageSize;
    return {
        items: sorted.slice(start, start + pageSize),
        total: sorted.length,
        page,
        pageSize,
        totalPages
    };
}
function buildCatalogHref(query, overrides = {}) {
    const next = {
        ...query,
        ...overrides
    };
    const params = new URLSearchParams();
    if (next.q) params.set("q", next.q);
    if (next.category) params.set("category", next.category);
    if (next.minPrice !== undefined) params.set("minPrice", String(next.minPrice));
    if (next.maxPrice !== undefined) params.set("maxPrice", String(next.maxPrice));
    if (next.inStock) params.set("inStock", "1");
    if (next.sort !== "featured") params.set("sort", next.sort);
    if (next.page > 1) params.set("page", String(next.page));
    const search = params.toString();
    return search ? `/products?${search}` : "/products";
}
}),
"[project]/src/features/catalog/components/product-card.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$price$2d$tag$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/price-tag.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$rating$2d$stars$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/rating-stars.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$components$2f$add$2d$to$2d$cart$2d$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/cart/components/add-to-cart-button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$catalog$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/catalog/catalog-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$wishlist$2f$components$2f$wishlist$2d$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/wishlist/components/wishlist-button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$product$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/catalog/components/product-image.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$stock$2d$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/catalog/components/stock-badge.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
function ProductCard({ product }) {
    const discount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$catalog$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDiscountPercent"])(product);
    const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$catalog$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStockStatus"])(product);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "group relative flex flex-col rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md",
        "data-testid": "product-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: `/products/${product.slug}`,
                className: "relative block",
                tabIndex: -1,
                "aria-hidden": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$product$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductImage"], {
                        image: product.image,
                        alt: product.name,
                        className: "transition group-hover:scale-[1.02]"
                    }, void 0, false, {
                        fileName: "[project]/src/features/catalog/components/product-card.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    discount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute top-2 left-2 rounded-full bg-rose-600 px-2 py-0.5 text-xs font-bold text-white",
                        children: [
                            "-",
                            discount,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/catalog/components/product-card.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/catalog/components/product-card.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-5 right-5 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$wishlist$2f$components$2f$wishlist$2d$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WishlistButton"], {
                    productId: product.id,
                    productName: product.name
                }, void 0, false, {
                    fileName: "[project]/src/features/catalog/components/product-card.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/catalog/components/product-card.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex flex-1 flex-col gap-1.5 px-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-medium tracking-wide text-indigo-600 uppercase",
                        children: product.brand
                    }, void 0, false, {
                        fileName: "[project]/src/features/catalog/components/product-card.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "line-clamp-2 min-h-10 text-sm font-semibold text-slate-900",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `/products/${product.slug}`,
                            className: "hover:text-indigo-600",
                            children: product.name
                        }, void 0, false, {
                            fileName: "[project]/src/features/catalog/components/product-card.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/catalog/components/product-card.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$rating$2d$stars$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RatingStars"], {
                        rating: product.rating,
                        reviewCount: product.reviewCount
                    }, void 0, false, {
                        fileName: "[project]/src/features/catalog/components/product-card.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$price$2d$tag$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PriceTag"], {
                        price: product.price,
                        originalPrice: product.originalPrice
                    }, void 0, false, {
                        fileName: "[project]/src/features/catalog/components/product-card.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-auto flex items-center justify-between gap-2 pt-2",
                        children: [
                            status === "in-stock" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/src/features/catalog/components/product-card.tsx",
                                lineNumber: 50,
                                columnNumber: 36
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$stock$2d$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StockBadge"], {
                                product: product
                            }, void 0, false, {
                                fileName: "[project]/src/features/catalog/components/product-card.tsx",
                                lineNumber: 50,
                                columnNumber: 47
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$components$2f$add$2d$to$2d$cart$2d$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AddToCartButton"], {
                                product: product,
                                size: "sm"
                            }, void 0, false, {
                                fileName: "[project]/src/features/catalog/components/product-card.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/catalog/components/product-card.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/catalog/components/product-card.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/catalog/components/product-card.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/catalog/components/product-grid.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductGrid",
    ()=>ProductGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/catalog/components/product-card.tsx [app-rsc] (ecmascript)");
;
;
function ProductGrid({ products }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4",
        children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductCard"], {
                product: product
            }, product.id, false, {
                fileName: "[project]/src/features/catalog/components/product-grid.tsx",
                lineNumber: 8,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/features/catalog/components/product-grid.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/catalog/components/product-image.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductImage",
    ()=>ProductImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-rsc] (ecmascript)");
;
;
const EMOJI_SIZE = {
    sm: "text-2xl",
    md: "text-6xl",
    lg: "text-9xl"
};
function ProductImage({ image, alt, size = "md", className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "img",
        "aria-label": alt,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex aspect-square items-center justify-center rounded-xl", className),
        style: {
            backgroundImage: `linear-gradient(135deg, ${image.from}, ${image.to})`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("drop-shadow-sm select-none", EMOJI_SIZE[size]),
            "aria-hidden": true,
            children: image.emoji
        }, void 0, false, {
            fileName: "[project]/src/features/catalog/components/product-image.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/catalog/components/product-image.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/catalog/components/stock-badge.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StockBadge",
    ()=>StockBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$catalog$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/catalog/catalog-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-rsc] (ecmascript)");
;
;
;
function StockBadge({ product }) {
    const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$catalog$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStockStatus"])(product);
    const { label, className } = {
        "in-stock": {
            label: "Còn hàng",
            className: "bg-emerald-50 text-emerald-700"
        },
        "low-stock": {
            label: `Chỉ còn ${product.stock} sản phẩm`,
            className: "bg-amber-50 text-amber-700"
        },
        "out-of-stock": {
            label: "Hết hàng",
            className: "bg-slate-100 text-slate-500"
        }
    }[status];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold", className),
        children: label
    }, void 0, false, {
        fileName: "[project]/src/features/catalog/components/stock-badge.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/catalog/types.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORY_SLUGS",
    ()=>CATEGORY_SLUGS,
    "SORT_OPTIONS",
    ()=>SORT_OPTIONS
]);
const CATEGORY_SLUGS = [
    "am-thanh",
    "ban-phim-chuot",
    "phu-kien",
    "thiet-bi-deo",
    "nha-thong-minh"
];
const SORT_OPTIONS = [
    "featured",
    "price-asc",
    "price-desc",
    "rating",
    "newest"
];
}),
"[project]/src/features/wishlist/components/wishlist-button.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WISHLIST_FULL_MESSAGE",
    ()=>WISHLIST_FULL_MESSAGE,
    "WishlistButton",
    ()=>WishlistButton
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const WISHLIST_FULL_MESSAGE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call WISHLIST_FULL_MESSAGE() from the server but WISHLIST_FULL_MESSAGE is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/wishlist/components/wishlist-button.tsx", "WISHLIST_FULL_MESSAGE");
const WishlistButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call WishlistButton() from the server but WishlistButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/wishlist/components/wishlist-button.tsx", "WishlistButton");
}),
"[project]/src/features/wishlist/components/wishlist-button.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$wishlist$2f$components$2f$wishlist$2d$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/features/wishlist/components/wishlist-button.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$wishlist$2f$components$2f$wishlist$2d$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
]})(),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/(shop)/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(shop)/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.117ezoe8m31dk.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__13jgsicge34z9._.js.map