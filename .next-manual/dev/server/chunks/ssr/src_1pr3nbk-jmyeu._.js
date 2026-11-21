(()=>{"use strict";module.exports = [
"[project]/src/components/layout/nav-links.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavLinks",
    ()=>NavLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const LINKS = [
    // Ẩn ở màn hình hẹp để header đủ chỗ cho icon yêu thích + giỏ hàng; logo vẫn dẫn về trang chủ.
    {
        href: "/",
        label: "Trang chủ",
        hideOnMobile: true
    },
    {
        href: "/products",
        label: "Sản phẩm"
    },
    {
        href: "/orders",
        label: "Đơn hàng"
    }
];
function isActive(pathname, href) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
}
function NavLinks() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "flex items-center gap-1 text-sm font-medium",
        children: LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: link.href,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-lg px-1.5 py-2 whitespace-nowrap transition-colors sm:px-3", link.hideOnMobile && "hidden sm:block", isActive(pathname, link.href) ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"),
                children: link.label
            }, link.href, false, {
                fileName: "[project]/src/components/layout/nav-links.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/layout/nav-links.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/cart/cart-reducer.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/features/cart/cart-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CART_STORAGE_KEY",
    ()=>CART_STORAGE_KEY,
    "cartStore",
    ()=>cartStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$reducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/cart/cart-reducer.ts [app-ssr] (ecmascript)");
;
const CART_STORAGE_KEY = "shoplite:cart";
let state = null;
const listeners = new Set();
function isCartState(value) {
    return typeof value === "object" && value !== null && Array.isArray(value.items) && value.items.every((item)=>typeof item?.productId === "string" && typeof item?.quantity === "number");
}
function readFromStorage() {
    if ("TURBOPACK compile-time truthy", 1) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$reducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY_CART"];
    //TURBOPACK unreachable
    ;
}
function writeToStorage(next) {
    try {
        window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(next));
    } catch  {
    // localStorage có thể bị chặn (chế độ ẩn danh) - giỏ hàng vẫn hoạt động trong phiên hiện tại.
    }
}
function getState() {
    if (state === null) state = readFromStorage();
    return state;
}
function emit() {
    for (const listener of listeners)listener();
}
/** Đồng bộ giỏ hàng giữa các tab trình duyệt. */ function handleStorageEvent(event) {
    if (event.key !== CART_STORAGE_KEY) return;
    state = readFromStorage();
    emit();
}
const cartStore = {
    getSnapshot () {
        return getState();
    },
    getServerSnapshot () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$reducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY_CART"];
    },
    subscribe (listener) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        listeners.add(listener);
        return ()=>{
            listeners.delete(listener);
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        };
    },
    dispatch (action) {
        const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$reducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cartReducer"])(getState(), action);
        if (next === state) return;
        state = next;
        writeToStorage(next);
        emit();
    },
    /** Chỉ dùng trong test: buộc đọc lại từ localStorage ở lần truy cập tiếp theo. */ reset () {
        state = null;
    }
};
}),
"[project]/src/features/cart/components/cart-badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartBadge",
    ()=>CartBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.mjs [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$use$2d$cart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/cart/use-cart.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function CartBadge() {
    const { itemCount, hydrated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$use$2d$cart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const showCount = hydrated && itemCount > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: "/cart",
        className: "relative flex size-10 items-center justify-center rounded-xl text-slate-700 hover:bg-slate-100",
        "aria-label": showCount ? `Giỏ hàng (${itemCount} sản phẩm)` : "Giỏ hàng",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                className: "size-5"
            }, void 0, false, {
                fileName: "[project]/src/features/cart/components/cart-badge.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            showCount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute -top-0.5 -right-0.5 flex min-w-5 items-center justify-center rounded-full bg-rose-600 px-1 text-xs font-bold text-white",
                "data-testid": "cart-count",
                children: itemCount > 99 ? "99+" : itemCount
            }, void 0, false, {
                fileName: "[project]/src/features/cart/components/cart-badge.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/cart/components/cart-badge.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/cart/use-cart.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getQuantityInCart",
    ()=>getQuantityInCart,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$hydrated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/use-hydrated.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$reducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/cart/cart-reducer.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/cart/cart-store.ts [app-ssr] (ecmascript)");
;
;
;
;
function useCart() {
    const cart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cartStore"].subscribe, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cartStore"].getSnapshot, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cartStore"].getServerSnapshot);
    const hydrated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$hydrated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHydrated"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            items: cart.items,
            itemCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$reducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCartItemCount"])(cart),
            subtotal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$reducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCartSubtotal"])(cart),
            /** false trong lần render đầu (chưa đọc localStorage) - dùng để hiển thị skeleton. */ hydrated,
            addItem: (product, quantity = 1)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cartStore"].dispatch({
                    type: "add",
                    item: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$reducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toCartItem"])(product),
                    quantity
                }),
            updateQuantity: (productId, quantity)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cartStore"].dispatch({
                    type: "update-quantity",
                    productId,
                    quantity
                }),
            removeItem: (productId)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cartStore"].dispatch({
                    type: "remove",
                    productId
                }),
            clear: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cartStore"].dispatch({
                    type: "clear"
                })
        }), [
        cart,
        hydrated
    ]);
}
function getQuantityInCart(items, productId) {
    return items.find((item)=>item.productId === productId)?.quantity ?? 0;
}
}),
"[project]/src/features/wishlist/components/wishlist-badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WishlistBadge",
    ()=>WishlistBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$wishlist$2f$use$2d$wishlist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/wishlist/use-wishlist.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function WishlistBadge() {
    const { count, hydrated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$wishlist$2f$use$2d$wishlist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWishlist"])();
    const showCount = hydrated && count > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: "/wishlist",
        className: "relative flex size-10 items-center justify-center rounded-xl text-slate-700 hover:bg-slate-100",
        "aria-label": showCount ? `Danh sách yêu thích (${count} sản phẩm)` : "Danh sách yêu thích",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                className: "size-5",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/features/wishlist/components/wishlist-badge.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            showCount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute -top-0.5 -right-0.5 flex min-w-5 items-center justify-center rounded-full bg-rose-600 px-1 text-xs font-bold text-white",
                "data-testid": "wishlist-count",
                children: count
            }, void 0, false, {
                fileName: "[project]/src/features/wishlist/components/wishlist-badge.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/wishlist/components/wishlist-badge.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/wishlist/use-wishlist.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWishlist",
    ()=>useWishlist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$hydrated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/use-hydrated.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$wishlist$2f$wishlist$2d$reducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/wishlist/wishlist-reducer.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$wishlist$2f$wishlist$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/wishlist/wishlist-store.ts [app-ssr] (ecmascript)");
;
;
;
;
function useWishlist() {
    const wishlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$wishlist$2f$wishlist$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wishlistStore"].subscribe, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$wishlist$2f$wishlist$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wishlistStore"].getSnapshot, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$wishlist$2f$wishlist$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wishlistStore"].getServerSnapshot);
    const hydrated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$hydrated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHydrated"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            productIds: wishlist.productIds,
            count: wishlist.productIds.length,
            /** false trong lần render đầu (chưa đọc localStorage) - dùng để hiển thị skeleton. */ hydrated,
            isLiked: (productId)=>wishlist.productIds.includes(productId),
            /** Bật/tắt yêu thích; trả về "full" (và không đổi gì) khi danh sách đã đầy. */ toggle: (productId)=>{
                const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$wishlist$2f$wishlist$2d$reducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getToggleResult"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$wishlist$2f$wishlist$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wishlistStore"].getSnapshot(), productId);
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$wishlist$2f$wishlist$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wishlistStore"].dispatch({
                    type: "toggle",
                    productId
                });
                return result;
            },
            remove: (productId)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$wishlist$2f$wishlist$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wishlistStore"].dispatch({
                    type: "remove",
                    productId
                }),
            /** Loại các mã không còn trong catalog. */ prune: (knownIds)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$wishlist$2f$wishlist$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wishlistStore"].dispatch({
                    type: "prune",
                    knownIds
                })
        }), [
        wishlist,
        hydrated
    ]);
}
}),
"[project]/src/features/wishlist/wishlist-reducer.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EMPTY_WISHLIST",
    ()=>EMPTY_WISHLIST,
    "MAX_WISHLIST_ITEMS",
    ()=>MAX_WISHLIST_ITEMS,
    "getToggleResult",
    ()=>getToggleResult,
    "normalizeWishlist",
    ()=>normalizeWishlist,
    "wishlistReducer",
    ()=>wishlistReducer
]);
const MAX_WISHLIST_ITEMS = 50;
const EMPTY_WISHLIST = {
    productIds: []
};
function normalizeWishlist(productIds) {
    const unique = [
        ...new Set(productIds)
    ].slice(0, MAX_WISHLIST_ITEMS);
    return {
        productIds: unique
    };
}
function getToggleResult(state, productId) {
    if (state.productIds.includes(productId)) return "removed";
    return state.productIds.length >= MAX_WISHLIST_ITEMS ? "full" : "added";
}
function wishlistReducer(state, action) {
    switch(action.type){
        case "toggle":
            {
                const result = getToggleResult(state, action.productId);
                if (result === "full") return state;
                if (result === "removed") {
                    return {
                        productIds: state.productIds.filter((id)=>id !== action.productId)
                    };
                }
                return {
                    productIds: [
                        action.productId,
                        ...state.productIds
                    ]
                };
            }
        case "remove":
            {
                if (!state.productIds.includes(action.productId)) return state;
                return {
                    productIds: state.productIds.filter((id)=>id !== action.productId)
                };
            }
        case "prune":
            {
                const known = new Set(action.knownIds);
                const kept = state.productIds.filter((id)=>known.has(id));
                return kept.length === state.productIds.length ? state : {
                    productIds: kept
                };
            }
        case "clear":
            return state.productIds.length === 0 ? state : EMPTY_WISHLIST;
    }
}
}),
"[project]/src/features/wishlist/wishlist-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WISHLIST_STORAGE_KEY",
    ()=>WISHLIST_STORAGE_KEY,
    "wishlistStore",
    ()=>wishlistStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$wishlist$2f$wishlist$2d$reducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/wishlist/wishlist-reducer.ts [app-ssr] (ecmascript)");
;
const WISHLIST_STORAGE_KEY = "shoplite:wishlist";
let state = null;
const listeners = new Set();
function isStoredWishlist(value) {
    return typeof value === "object" && value !== null && Array.isArray(value.productIds) && value.productIds.every((id)=>typeof id === "string");
}
function readFromStorage() {
    if ("TURBOPACK compile-time truthy", 1) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$wishlist$2f$wishlist$2d$reducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY_WISHLIST"];
    //TURBOPACK unreachable
    ;
}
function writeToStorage(next) {
    try {
        window.localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(next));
    } catch  {
    // localStorage có thể bị chặn (chế độ ẩn danh) - danh sách vẫn hoạt động trong phiên hiện tại.
    }
}
function getState() {
    if (state === null) state = readFromStorage();
    return state;
}
function emit() {
    for (const listener of listeners)listener();
}
/** Đồng bộ danh sách yêu thích giữa các tab trình duyệt. */ function handleStorageEvent(event) {
    // key === null: localStorage.clear() ở tab khác.
    if (event.key !== WISHLIST_STORAGE_KEY && event.key !== null) return;
    state = readFromStorage();
    emit();
}
const wishlistStore = {
    getSnapshot () {
        return getState();
    },
    getServerSnapshot () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$wishlist$2f$wishlist$2d$reducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY_WISHLIST"];
    },
    subscribe (listener) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        listeners.add(listener);
        return ()=>{
            listeners.delete(listener);
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        };
    },
    dispatch (action) {
        const current = getState();
        const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$wishlist$2f$wishlist$2d$reducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wishlistReducer"])(current, action);
        if (next === current) return;
        state = next;
        writeToStorage(next);
        emit();
    },
    /** Chỉ dùng trong test: buộc đọc lại từ localStorage ở lần truy cập tiếp theo. */ reset () {
        state = null;
    }
};
}),
"[project]/src/lib/cn.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs);
}
}),
"[project]/src/lib/use-hydrated.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHydrated",
    ()=>useHydrated
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const subscribe = ()=>()=>{};
function useHydrated() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, ()=>true, ()=>false);
}
}),
];})()

//# sourceMappingURL=src_1pr3nbk-jmyeu._.js.map