module.exports = [
(()=>{"use strict";return[
"[project]/src/app/(shop)/orders/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrdersPage,
    "dynamic",
    ()=>dynamic,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-rsc] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$empty$2d$state$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/empty-state.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$components$2f$order$2d$status$2d$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/orders/components/order-status-badge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/orders/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const metadata = {
    title: "Đơn hàng"
};
const dynamic = "force-dynamic";
async function OrdersPage() {
    const orders = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["orderService"].listOrders();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-4xl px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mb-6 text-2xl font-bold",
                children: "Đơn hàng của bạn"
            }, void 0, false, {
                fileName: "[project]/src/app/(shop)/orders/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            orders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$empty$2d$state$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EmptyState"], {
                emoji: "📦",
                title: "Bạn chưa có đơn hàng nào",
                description: "Các đơn hàng sau khi đặt sẽ hiển thị tại đây.",
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/products",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buttonStyles"])(),
                    children: "Bắt đầu mua sắm"
                }, void 0, false, {
                    fileName: "[project]/src/app/(shop)/orders/page.tsx",
                    lineNumber: 28,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(shop)/orders/page.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "flex flex-col gap-3",
                children: orders.map((order)=>{
                    const itemCount = order.items.reduce((sum, item)=>sum + item.quantity, 0);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `/orders/${order.id}`,
                            className: "flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md",
                            "data-testid": "order-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex -space-x-3",
                                    children: order.items.slice(0, 3).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex size-11 items-center justify-center rounded-full text-xl ring-2 ring-white",
                                            style: {
                                                backgroundImage: `linear-gradient(135deg, ${item.image.from}, ${item.image.to})`
                                            },
                                            "aria-hidden": true,
                                            children: item.image.emoji
                                        }, item.productId, false, {
                                            fileName: "[project]/src/app/(shop)/orders/page.tsx",
                                            lineNumber: 46,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(shop)/orders/page.tsx",
                                    lineNumber: 44,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-1 flex-col gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: order.id
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(shop)/orders/page.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$components$2f$order$2d$status$2d$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OrderStatusBadge"], {
                                                    status: order.status
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(shop)/orders/page.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(shop)/orders/page.tsx",
                                            lineNumber: 59,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-slate-500",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDateTime"])(order.createdAt),
                                                " · ",
                                                itemCount,
                                                " sản phẩm"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(shop)/orders/page.tsx",
                                            lineNumber: 63,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(shop)/orders/page.tsx",
                                    lineNumber: 58,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-slate-900",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatCurrency"])(order.total)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(shop)/orders/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "size-5 text-slate-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(shop)/orders/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(shop)/orders/page.tsx",
                            lineNumber: 39,
                            columnNumber: 17
                        }, this)
                    }, order.id, false, {
                        fileName: "[project]/src/app/(shop)/orders/page.tsx",
                        lineNumber: 38,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/(shop)/orders/page.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(shop)/orders/page.tsx",
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
"[project]/src/data/coupons.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COUPONS",
    ()=>COUPONS
]);
const COUPONS = [
    {
        code: "SHOPLITE10",
        type: "percent",
        percent: 10,
        maxDiscount: 100_000,
        minSubtotal: 300_000
    },
    {
        code: "GIAM50K",
        type: "fixed",
        amount: 50_000,
        minSubtotal: 500_000
    },
    // Đã hết hạn - dùng để kiểm thử mã hết hạn
    {
        code: "TET2026",
        type: "percent",
        percent: 15,
        maxDiscount: 200_000,
        expiresOn: "2026-02-28"
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
"[project]/src/features/cart/cart-reducer.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EMPTY_CART",
    ()=>EMPTY_CART,
    "MAX_QUANTITY_PER_ITEM",
    ()=>MAX_QUANTITY_PER_ITEM,
    "cartReducer",
    ()=>cartReducer,
    "getCartItemCount",
    ()=>getCartItemCount,
    "getCartSubtotal",
    ()=>getCartSubtotal,
    "getMaxQuantity",
    ()=>getMaxQuantity,
    "toCartItem",
    ()=>toCartItem
]);
const MAX_QUANTITY_PER_ITEM = 10;
const EMPTY_CART = {
    items: []
};
function getMaxQuantity(stock) {
    return Math.max(0, Math.min(stock, MAX_QUANTITY_PER_ITEM));
}
function clampQuantity(quantity, stock) {
    const max = getMaxQuantity(stock);
    const whole = Math.floor(quantity);
    if (!Number.isFinite(whole)) return 1;
    return Math.min(Math.max(1, whole), max);
}
function toCartItem(product) {
    return {
        productId: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        image: product.image,
        stock: product.stock
    };
}
function cartReducer(state, action) {
    switch(action.type){
        case "add":
            {
                const { item, quantity } = action;
                if (getMaxQuantity(item.stock) === 0 || quantity < 1) return state;
                const existing = state.items.find((line)=>line.productId === item.productId);
                if (!existing) {
                    return {
                        items: [
                            ...state.items,
                            {
                                ...item,
                                quantity: clampQuantity(quantity, item.stock)
                            }
                        ]
                    };
                }
                return {
                    items: state.items.map((line)=>line.productId === item.productId ? {
                            ...line,
                            ...item,
                            quantity: clampQuantity(line.quantity + quantity, item.stock)
                        } : line)
                };
            }
        case "update-quantity":
            return {
                items: state.items.map((line)=>line.productId === action.productId ? {
                        ...line,
                        quantity: clampQuantity(action.quantity, line.stock)
                    } : line)
            };
        case "remove":
            return {
                items: state.items.filter((line)=>line.productId !== action.productId)
            };
        case "clear":
            return EMPTY_CART;
    }
}
function getCartItemCount(state) {
    return state.items.reduce((sum, line)=>sum + line.quantity, 0);
}
function getCartSubtotal(state) {
    return state.items.reduce((sum, line)=>sum + line.price * line.quantity, 0);
}
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
"[project]/src/features/checkout/checkout-schema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAX_COUPON_CODE_LENGTH",
    ()=>MAX_COUPON_CODE_LENGTH,
    "PAYMENT_METHODS",
    ()=>PAYMENT_METHODS,
    "PAYMENT_OPTIONS",
    ()=>PAYMENT_OPTIONS,
    "VN_PHONE_REGEX",
    ()=>VN_PHONE_REGEX,
    "checkoutFormSchema",
    ()=>checkoutFormSchema,
    "customerSchema",
    ()=>customerSchema,
    "orderItemsSchema",
    ()=>orderItemsSchema,
    "placeOrderSchema",
    ()=>placeOrderSchema,
    "toFieldErrors",
    ()=>toFieldErrors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$email$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .email>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .enum>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .array>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .number>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$reducer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/cart/cart-reducer.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$checkout$2f$pricing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/checkout/pricing.ts [app-rsc] (ecmascript)");
;
;
;
const PAYMENT_METHODS = [
    "cod",
    "bank_transfer"
];
const PAYMENT_OPTIONS = {
    cod: {
        label: "Thanh toán khi nhận hàng (COD)",
        description: "Trả tiền mặt cho shipper"
    },
    bank_transfer: {
        label: "Chuyển khoản ngân hàng",
        description: "Thông tin chuyển khoản hiển thị sau khi đặt hàng"
    }
};
const VN_PHONE_REGEX = /^(0|\+84)(3|5|7|8|9)\d{8}$/;
const customerSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    fullName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(2, "Họ tên phải có ít nhất 2 ký tự").max(50, "Họ tên tối đa 50 ký tự"),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().regex(VN_PHONE_REGEX, "Số điện thoại không hợp lệ (ví dụ: 0912345678)"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().refine((value)=>value === "" || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$email$3e$__["z"].email().safeParse(value).success, "Email không hợp lệ").optional(),
    address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(10, "Địa chỉ phải có ít nhất 10 ký tự").max(200, "Địa chỉ tối đa 200 ký tự"),
    note: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().max(200, "Ghi chú tối đa 200 ký tự").optional()
});
const checkoutFormSchema = customerSchema.extend({
    shippingMethod: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$checkout$2f$pricing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHIPPING_METHODS"], "Vui lòng chọn phương thức giao hàng"),
    paymentMethod: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum(PAYMENT_METHODS, "Vui lòng chọn phương thức thanh toán")
});
const orderItemsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    productId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1),
    quantity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().min(1).max(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$reducer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MAX_QUANTITY_PER_ITEM"])
})).min(1, "Giỏ hàng đang trống");
const MAX_COUPON_CODE_LENGTH = 32;
const placeOrderSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    customer: customerSchema,
    shippingMethod: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$checkout$2f$pricing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHIPPING_METHODS"]),
    paymentMethod: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum(PAYMENT_METHODS),
    items: orderItemsSchema,
    couponCode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string("Mã giảm giá không hợp lệ").trim().max(MAX_COUPON_CODE_LENGTH, `Mã giảm giá tối đa ${MAX_COUPON_CODE_LENGTH} ký tự`)// Chuỗi rỗng sau khi trim coi như không dùng mã
    .transform((code)=>code === "" ? undefined : code.toUpperCase()).optional()
});
function toFieldErrors(error) {
    const fieldErrors = {};
    for (const issue of error.issues){
        const key = issue.path.join(".") || "_form";
        fieldErrors[key] ??= issue.message;
    }
    return fieldErrors;
}
}),
"[project]/src/features/coupons/coupon-errors.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toCouponOrderError",
    ()=>toCouponOrderError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$order$2d$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/orders/order-errors.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$coupons$2f$coupon$2d$rules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/coupons/coupon-rules.ts [app-rsc] (ecmascript)");
;
;
const ERROR_CODE_BY_REASON = {
    not_found: "COUPON_NOT_FOUND",
    expired: "COUPON_EXPIRED",
    min_subtotal_not_met: "COUPON_MIN_SUBTOTAL_NOT_MET"
};
function toCouponOrderError(evaluation) {
    const message = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$coupons$2f$coupon$2d$rules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCouponErrorMessage"])(evaluation);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$order$2d$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OrderError"](ERROR_CODE_BY_REASON[evaluation.reason], message, {
        couponCode: message
    });
}
}),
"[project]/src/features/coupons/coupon-rules.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateDiscount",
    ()=>calculateDiscount,
    "evaluateCoupon",
    ()=>evaluateCoupon,
    "getCouponErrorMessage",
    ()=>getCouponErrorMessage,
    "isCouponExpired",
    ()=>isCouponExpired,
    "normalizeCouponCode",
    ()=>normalizeCouponCode,
    "toPublicCoupon",
    ()=>toPublicCoupon
]);
/**
 * Quy tắc mã giảm giá - hàm thuần, dùng chung cho client (hiển thị) và server (tính lại khi đặt hàng).
 * KHÔNG import `@/data/coupons` ở đây: file này được dùng trong Client Component, import dữ liệu sẽ
 * làm lộ toàn bộ danh sách mã ra trình duyệt. Tra mã chỉ làm ở `coupon-service.ts` (server).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-rsc] (ecmascript)");
;
const ONE_DAY_MS = 24 * 60 * 60 * 1000;
function normalizeCouponCode(code) {
    return code.trim().toUpperCase();
}
function isCouponExpired(coupon, now) {
    if (coupon.expiresOn === undefined) return false;
    const endOfLastDay = Date.parse(`${coupon.expiresOn}T00:00:00+07:00`) + ONE_DAY_MS;
    return now.getTime() >= endOfLastDay;
}
function calculateDiscount(coupon, subtotal) {
    const raw = coupon.type === "percent" ? Math.min(Math.floor(subtotal * coupon.percent / 100), coupon.maxDiscount) : coupon.amount;
    return Math.max(0, Math.min(raw, subtotal));
}
function evaluateCoupon(coupon, subtotal, now) {
    if (!coupon) return {
        status: "invalid",
        reason: "not_found"
    };
    if (isCouponExpired(coupon, now)) return {
        status: "invalid",
        reason: "expired"
    };
    if (coupon.minSubtotal !== undefined && subtotal < coupon.minSubtotal) {
        return {
            status: "invalid",
            reason: "min_subtotal_not_met",
            minSubtotal: coupon.minSubtotal,
            shortfall: coupon.minSubtotal - subtotal
        };
    }
    return {
        status: "valid",
        discount: calculateDiscount(coupon, subtotal)
    };
}
function getCouponErrorMessage(evaluation) {
    switch(evaluation.reason){
        case "not_found":
            return "Mã giảm giá không tồn tại";
        case "expired":
            return "Mã giảm giá đã hết hạn";
        case "min_subtotal_not_met":
            return `Đơn hàng chưa đạt giá trị tối thiểu ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatCurrency"])(evaluation.minSubtotal)} để dùng mã này. ` + `Mua thêm ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatCurrency"])(evaluation.shortfall)} để được giảm giá.`;
    }
}
function toPublicCoupon(coupon) {
    return {
        ...coupon
    };
}
}),
"[project]/src/features/coupons/coupon-schema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkCouponSchema",
    ()=>checkCouponSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$checkout$2f$checkout$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/checkout/checkout-schema.ts [app-rsc] (ecmascript)");
;
;
const EMPTY_CODE_MESSAGE = "Vui lòng nhập mã giảm giá";
const checkCouponSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    couponCode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(EMPTY_CODE_MESSAGE).trim().min(1, EMPTY_CODE_MESSAGE).max(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$checkout$2f$checkout$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MAX_COUPON_CODE_LENGTH"], `Mã giảm giá tối đa ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$checkout$2f$checkout$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MAX_COUPON_CODE_LENGTH"]} ký tự`),
    items: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$checkout$2f$checkout$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["orderItemsSchema"]
});
}),
"[project]/src/features/coupons/coupon-service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "couponService",
    ()=>couponService,
    "createCouponService",
    ()=>createCouponService,
    "findCouponByCode",
    ()=>findCouponByCode
]);
/**
 * Tra cứu và kiểm tra mã giảm giá phía SERVER.
 * Chỉ import từ route handler / Server Component / order-service - file này đọc `@/data/coupons`,
 * import vào Client Component sẽ làm lộ toàn bộ danh sách mã ra trình duyệt.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$coupons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/coupons.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$catalog$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/catalog/catalog-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$checkout$2f$checkout$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/checkout/checkout-schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$checkout$2f$pricing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/checkout/pricing.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$order$2d$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/orders/order-errors.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$coupons$2f$coupon$2d$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/coupons/coupon-errors.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$coupons$2f$coupon$2d$rules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/coupons/coupon-rules.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$coupons$2f$coupon$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/coupons/coupon-schema.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
function findCouponByCode(code) {
    const normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$coupons$2f$coupon$2d$rules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeCouponCode"])(code);
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$coupons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COUPONS"].find((coupon)=>coupon.code === normalized);
}
function createCouponService({ findCoupon = findCouponByCode, findProduct = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$catalog$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductById"], now = ()=>new Date() } = {}) {
    return {
        /**
     * Kiểm tra mã cho giỏ hàng để hiển thị ở trang thanh toán. Tạm tính luôn tính từ giá catalog,
     * bỏ qua mọi số tiền client gửi lên. Kết quả chỉ để hiển thị - khi đặt hàng server kiểm tra lại.
     */ check (input) {
            const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$coupons$2f$coupon$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkCouponSchema"].safeParse(input);
            if (!parsed.success) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$order$2d$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OrderError"]("VALIDATION_ERROR", "Thông tin mã giảm giá không hợp lệ", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$checkout$2f$checkout$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toFieldErrors"])(parsed.error));
            }
            const { couponCode, items } = parsed.data;
            const lines = items.map(({ productId, quantity })=>{
                const product = findProduct(productId);
                if (!product) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$order$2d$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OrderError"]("PRODUCT_NOT_FOUND", `Không tìm thấy sản phẩm "${productId}"`);
                }
                return {
                    unitPrice: product.price,
                    quantity
                };
            });
            const subtotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$checkout$2f$pricing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateSubtotal"])(lines);
            const coupon = findCoupon(couponCode);
            const evaluation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$coupons$2f$coupon$2d$rules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["evaluateCoupon"])(coupon, subtotal, now());
            if (evaluation.status === "invalid") throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$coupons$2f$coupon$2d$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toCouponOrderError"])(evaluation);
            return {
                coupon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$coupons$2f$coupon$2d$rules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toPublicCoupon"])(coupon),
                subtotal,
                discount: evaluation.discount
            };
        }
    };
}
const couponService = createCouponService();
}),
"[project]/src/features/orders/components/order-status-badge.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderStatusBadge",
    ()=>OrderStatusBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/orders/types.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-rsc] (ecmascript)");
;
;
;
const STATUS_CLASSES = {
    pending: "bg-amber-50 text-amber-700 ring-amber-200",
    confirmed: "bg-sky-50 text-sky-700 ring-sky-200",
    shipping: "bg-indigo-50 text-indigo-700 ring-indigo-200",
    delivered: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    cancelled: "bg-slate-100 text-slate-500 ring-slate-200"
};
function OrderStatusBadge({ status }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset", STATUS_CLASSES[status]),
        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ORDER_STATUS_LABELS"][status]
    }, void 0, false, {
        fileName: "[project]/src/features/orders/components/order-status-badge.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/orders/order-errors.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderError",
    ()=>OrderError
]);
const HTTP_STATUS_BY_CODE = {
    VALIDATION_ERROR: 400,
    PRODUCT_NOT_FOUND: 422,
    INSUFFICIENT_STOCK: 409,
    ORDER_NOT_FOUND: 404,
    INVALID_STATUS_TRANSITION: 409,
    COUPON_NOT_FOUND: 422,
    COUPON_EXPIRED: 422,
    COUPON_MIN_SUBTOTAL_NOT_MET: 422,
    UNAUTHORIZED: 401,
    TOO_MANY_ATTEMPTS: 429
};
class OrderError extends Error {
    code;
    details;
    constructor(code, message, details){
        super(message);
        this.name = "OrderError";
        this.code = code;
        this.details = details;
    }
    get httpStatus() {
        return HTTP_STATUS_BY_CODE[this.code];
    }
}
}),
"[project]/src/features/orders/order-repository.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_ORDERS_FILE",
    ()=>DEFAULT_ORDERS_FILE,
    "createInMemoryOrderRepository",
    ()=>createInMemoryOrderRepository,
    "createJsonFileOrderRepository",
    ()=>createJsonFileOrderRepository
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
;
;
const DEFAULT_ORDERS_FILE = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "storage", "orders.json");
function createJsonFileOrderRepository(filePath) {
    async function readAll() {
        try {
            const raw = await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["promises"].readFile(filePath, "utf8");
            const data = JSON.parse(raw);
            return Array.isArray(data) ? data : [];
        } catch (error) {
            if (error.code === "ENOENT") return [];
            throw error;
        }
    }
    async function writeAll(orders) {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["promises"].mkdir(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].dirname(filePath), {
            recursive: true
        });
        const tempFile = `${filePath}.tmp`;
        await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["promises"].writeFile(tempFile, JSON.stringify(orders, null, 2), "utf8");
        await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["promises"].rename(tempFile, filePath);
    }
    return {
        findAll: readAll,
        async findById (id) {
            const orders = await readAll();
            return orders.find((order)=>order.id === id) ?? null;
        },
        async save (order) {
            const orders = await readAll();
            const index = orders.findIndex((item)=>item.id === order.id);
            if (index >= 0) {
                orders[index] = order;
            } else {
                orders.push(order);
            }
            await writeAll(orders);
        }
    };
}
function createInMemoryOrderRepository(seed = []) {
    const orders = new Map(seed.map((order)=>[
            order.id,
            structuredClone(order)
        ]));
    return {
        async findAll () {
            return [
                ...orders.values()
            ].map((order)=>structuredClone(order));
        },
        async findById (id) {
            const order = orders.get(id);
            return order ? structuredClone(order) : null;
        },
        async save (order) {
            orders.set(order.id, structuredClone(order));
        }
    };
}
}),
"[project]/src/features/orders/order-service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOrderService",
    ()=>createOrderService,
    "generateOrderId",
    ()=>generateOrderId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$reducer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/cart/cart-reducer.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$catalog$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/catalog/catalog-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$checkout$2f$checkout$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/checkout/checkout-schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$checkout$2f$pricing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/checkout/pricing.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$coupons$2f$coupon$2d$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/coupons/coupon-errors.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$coupons$2f$coupon$2d$rules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/coupons/coupon-rules.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$coupons$2f$coupon$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/coupons/coupon-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$order$2d$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/orders/order-errors.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
function generateOrderId(date) {
    const ymd = date.toISOString().slice(0, 10).replace(/-/g, "");
    const random = crypto.randomUUID().replace(/-/g, "").slice(0, 6).toUpperCase();
    return `SL-${ymd}-${random}`;
}
/** Gộp các dòng trùng productId: [{p1, 2}, {p1, 1}] -> [{p1, 3}] */ function mergeItems(items) {
    const merged = new Map();
    for (const item of items){
        merged.set(item.productId, (merged.get(item.productId) ?? 0) + item.quantity);
    }
    return [
        ...merged.entries()
    ].map(([productId, quantity])=>({
            productId,
            quantity
        }));
}
function createOrderService({ repository, findProduct = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$catalog$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductById"], findCoupon = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$coupons$2f$coupon$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findCouponByCode"], now = ()=>new Date(), generateId = generateOrderId }) {
    async function getOrder(id) {
        const order = await repository.findById(id);
        if (!order) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$order$2d$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OrderError"]("ORDER_NOT_FOUND", `Không tìm thấy đơn hàng "${id}"`);
        }
        return order;
    }
    return {
        /**
     * Tạo đơn hàng mới từ payload của client.
     * - Validate dữ liệu bằng placeOrderSchema
     * - Lấy giá từ catalog (bỏ qua mọi giá client gửi lên)
     * - Kiểm tra tồn kho
     * - Kiểm tra lại mã giảm giá và tự tính số tiền giảm (bỏ qua mọi số tiền client gửi lên)
     */ async placeOrder (input) {
            const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$checkout$2f$checkout$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["placeOrderSchema"].safeParse(input);
            if (!parsed.success) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$order$2d$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OrderError"]("VALIDATION_ERROR", "Thông tin đơn hàng không hợp lệ", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$checkout$2f$checkout$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toFieldErrors"])(parsed.error));
            }
            const { customer, items, shippingMethod, paymentMethod, couponCode } = parsed.data;
            const mergedItems = mergeItems(items);
            // Sau khi gộp dòng trùng vẫn phải tuân giới hạn mỗi sản phẩm (FR-023) - không thể dùng
            // dòng trùng để vượt giới hạn hay đẩy tạm tính lên mức tối thiểu của mã giảm giá.
            if (mergedItems.some((item)=>item.quantity > __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$reducer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MAX_QUANTITY_PER_ITEM"])) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$order$2d$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OrderError"]("VALIDATION_ERROR", "Thông tin đơn hàng không hợp lệ", {
                    items: `Mỗi sản phẩm tối đa ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$reducer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MAX_QUANTITY_PER_ITEM"]} sản phẩm`
                });
            }
            const orderItems = mergedItems.map(({ productId, quantity })=>{
                const product = findProduct(productId);
                if (!product) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$order$2d$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OrderError"]("PRODUCT_NOT_FOUND", `Không tìm thấy sản phẩm "${productId}"`);
                }
                if (quantity > product.stock) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$order$2d$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OrderError"]("INSUFFICIENT_STOCK", product.stock === 0 ? `Sản phẩm "${product.name}" đã hết hàng` : `Sản phẩm "${product.name}" chỉ còn ${product.stock} sản phẩm`);
                }
                return {
                    productId: product.id,
                    slug: product.slug,
                    name: product.name,
                    image: product.image,
                    unitPrice: product.price,
                    quantity,
                    lineTotal: product.price * quantity
                };
            });
            // Một thời điểm duy nhất (đồng hồ server) cho cả việc xét hạn mã và thời điểm tạo đơn
            const createdAt = now();
            let discount = 0;
            if (couponCode) {
                const evaluation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$coupons$2f$coupon$2d$rules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["evaluateCoupon"])(findCoupon(couponCode), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$checkout$2f$pricing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateSubtotal"])(orderItems), createdAt);
                // Mã không hợp lệ: từ chối đơn, KHÔNG tự tạo đơn không giảm giá (FR-019)
                if (evaluation.status === "invalid") throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$coupons$2f$coupon$2d$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toCouponOrderError"])(evaluation);
                discount = evaluation.discount;
            }
            const order = {
                id: generateId(createdAt),
                status: "pending",
                createdAt: createdAt.toISOString(),
                updatedAt: createdAt.toISOString(),
                customer: {
                    fullName: customer.fullName,
                    phone: customer.phone,
                    email: customer.email || undefined,
                    address: customer.address,
                    note: customer.note || undefined
                },
                shippingMethod,
                paymentMethod,
                items: orderItems,
                ...couponCode ? {
                    couponCode
                } : {},
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$checkout$2f$pricing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateOrderTotals"])(orderItems, shippingMethod, discount)
            };
            await repository.save(order);
            return order;
        },
        /** Danh sách đơn hàng, mới nhất trước. */ async listOrders () {
            const orders = await repository.findAll();
            return orders.sort((a, b)=>b.createdAt.localeCompare(a.createdAt));
        },
        getOrder,
        /** Khách hàng chỉ được hủy đơn khi đơn còn ở trạng thái "Chờ xác nhận". */ async cancelOrder (id) {
            const order = await getOrder(id);
            if (order.status !== "pending") {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$order$2d$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OrderError"]("INVALID_STATUS_TRANSITION", "Chỉ có thể hủy đơn hàng đang ở trạng thái Chờ xác nhận");
            }
            const cancelled = {
                ...order,
                status: "cancelled",
                updatedAt: now().toISOString()
            };
            await repository.save(cancelled);
            return cancelled;
        }
    };
}
}),
"[project]/src/features/orders/server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "orderService",
    ()=>orderService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$order$2d$repository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/orders/order-repository.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$order$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/orders/order-service.ts [app-rsc] (ecmascript)");
;
;
const orderService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$order$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOrderService"])({
    repository: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$order$2d$repository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createJsonFileOrderRepository"])(process.env.ORDERS_FILE || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$order$2d$repository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_ORDERS_FILE"])
});
}),
"[project]/src/features/orders/types.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ORDER_STATUSES",
    ()=>ORDER_STATUSES,
    "ORDER_STATUS_LABELS",
    ()=>ORDER_STATUS_LABELS
]);
const ORDER_STATUSES = [
    "pending",
    "confirmed",
    "shipping",
    "delivered",
    "cancelled"
];
const ORDER_STATUS_LABELS = {
    pending: "Chờ xác nhận",
    confirmed: "Đã xác nhận",
    shipping: "Đang giao",
    delivered: "Đã giao",
    cancelled: "Đã hủy"
};
}),
]})(),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/src/app/(shop)/orders/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(shop)/orders/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.117ezoe8m31dk.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__204ufi0o7vr0s._.js.map