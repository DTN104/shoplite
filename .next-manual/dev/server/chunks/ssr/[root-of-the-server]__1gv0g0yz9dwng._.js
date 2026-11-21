module.exports = [
(()=>{"use strict";return[
"[project]/src/app/admin/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$admin$2f$components$2f$admin$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/admin/components/admin-header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$admin$2f$admin$2d$guard$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/admin/admin-guard.ts [app-rsc] (ecmascript)");
;
;
;
async function AdminLayout({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$admin$2f$admin$2d$guard$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertAdminEnabled"])();
    const loggedIn = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$admin$2f$admin$2d$guard$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdminSession"])() === "valid";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$admin$2f$components$2f$admin$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AdminHeader"], {
                loggedIn: loggedIn
            }, void 0, false, {
                fileName: "[project]/src/app/admin/layout.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/admin/layout.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/layout.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/admin/admin-guard.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminGate",
    ()=>adminGate,
    "assertAdminEnabled",
    ()=>assertAdminEnabled,
    "checkAdminPassword",
    ()=>checkAdminPassword,
    "clearSessionCookie",
    ()=>clearSessionCookie,
    "createSessionCookie",
    ()=>createSessionCookie,
    "getAdminSession",
    ()=>getAdminSession,
    "isAdminEnabled",
    ()=>isAdminEnabled,
    "requireAdmin",
    ()=>requireAdmin,
    "requireAdminApi",
    ()=>requireAdminApi
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/http.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$signed$2d$token$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/signed-token.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const COOKIE_NAME = "shoplite_admin";
const SESSION_TTL_MS = 12 * 60 * 60 * 1000;
const SESSION_PURPOSE = "admin-session";
const KEY_SALT = "shoplite/admin-session/v1";
const adminContext = {};
function isAdminEnabled() {
    return (process.env.ADMIN_PASSWORD ?? "") !== "";
}
function assertAdminEnabled() {
    if (!isAdminEnabled()) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
}
function adminGate() {
    return isAdminEnabled() ? null : new Response(null, {
        status: 404
    });
}
let cachedKey;
/** Khóa phiên dẫn xuất từ mật khẩu (tính lười, cache theo giá trị); đổi mật khẩu thì phiên cũ vô hiệu. */ function sessionKey() {
    const password = process.env.ADMIN_PASSWORD ?? "";
    if (cachedKey?.password !== password) {
        cachedKey = {
            password,
            key: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["scryptSync"])(password, KEY_SALT, 32)
        };
    }
    return cachedKey.key;
}
function isValidSession(token) {
    return token !== undefined && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$signed$2d$token$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyToken"])(token, {
        key: sessionKey(),
        purpose: SESSION_PURPOSE
    }) !== null;
}
function readCookie(request, name) {
    for (const part of (request.headers.get("cookie") ?? "").split(";")){
        const index = part.indexOf("=");
        if (index > 0 && part.slice(0, index).trim() === name) return part.slice(index + 1).trim();
    }
    return undefined;
}
async function getAdminSession() {
    if (!isAdminEnabled()) return "none"; // khóa rỗng ký được token, không được coi là phiên
    const token = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).get(COOKIE_NAME)?.value;
    if (token === undefined) return "none";
    return isValidSession(token) ? "valid" : "invalid";
}
async function requireAdmin(currentPath) {
    assertAdminEnabled();
    if (await getAdminSession() !== "valid") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/admin/login?next=${encodeURIComponent(currentPath)}`);
    }
    return adminContext;
}
async function requireAdminApi(request) {
    const gate = adminGate();
    if (gate) return gate;
    if (!isValidSession(readCookie(request, COOKIE_NAME))) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsonError"])(401, "UNAUTHORIZED", "Bạn cần đăng nhập để thực hiện thao tác này");
    }
    return adminContext;
}
function checkAdminPassword(candidate) {
    if (!isAdminEnabled()) return false;
    const hash = (value)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHash"])("sha256").update(value).digest();
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["timingSafeEqual"])(hash(candidate), hash(process.env.ADMIN_PASSWORD ?? ""));
}
// shortcut: tin phần tử đầu của x-forwarded-proto, chỉ đúng khi sau reverse proxy tin cậy
function isSecure(request) {
    const forwarded = request.headers.get("x-forwarded-proto")?.split(",")[0].trim().toLowerCase();
    return forwarded === "https" || new URL(request.url).protocol === "https:";
}
function cookieHeader(value, maxAgeSeconds, request) {
    const expires = new Date(maxAgeSeconds === 0 ? 0 : Date.now() + maxAgeSeconds * 1000);
    return [
        `${COOKIE_NAME}=${value}`,
        "Path=/",
        `Expires=${expires.toUTCString()}`,
        `Max-Age=${maxAgeSeconds}`,
        "HttpOnly",
        "SameSite=Lax",
        ...isSecure(request) ? [
            "Secure"
        ] : []
    ].join("; ");
}
function createSessionCookie(request) {
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$signed$2d$token$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signToken"])({
        sub: "admin"
    }, {
        key: sessionKey(),
        purpose: SESSION_PURPOSE,
        ttlMs: SESSION_TTL_MS
    });
    return cookieHeader(token, SESSION_TTL_MS / 1000, request);
}
function clearSessionCookie(request) {
    return cookieHeader("", 0, request);
}
}),
"[project]/src/features/admin/components/admin-header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminHeader",
    ()=>AdminHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/store.mjs [app-rsc] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$admin$2f$components$2f$logout$2d$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/admin/components/logout-button.tsx [app-rsc] (ecmascript)");
;
;
;
function AdminHeader({ loggedIn }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex h-16 max-w-6xl items-center gap-2 px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex size-8 items-center justify-center rounded-lg bg-indigo-600 text-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
                        className: "size-5"
                    }, void 0, false, {
                        fileName: "[project]/src/features/admin/components/admin-header.tsx",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/admin/components/admin-header.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-lg font-bold text-slate-900",
                    children: "Quản trị"
                }, void 0, false, {
                    fileName: "[project]/src/features/admin/components/admin-header.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                loggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ml-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$admin$2f$components$2f$logout$2d$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LogoutButton"], {}, void 0, false, {
                        fileName: "[project]/src/features/admin/components/admin-header.tsx",
                        lineNumber: 15,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/admin/components/admin-header.tsx",
                    lineNumber: 14,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/admin/components/admin-header.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/admin/components/admin-header.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/admin/components/logout-button.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogoutButton",
    ()=>LogoutButton
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const LogoutButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LogoutButton() from the server but LogoutButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/admin/components/logout-button.tsx", "LogoutButton");
}),
"[project]/src/features/admin/components/logout-button.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$admin$2f$components$2f$logout$2d$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/features/admin/components/logout-button.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$admin$2f$components$2f$logout$2d$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
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
"[project]/src/lib/http.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleRouteError",
    ()=>handleRouteError,
    "jsonError",
    ()=>jsonError,
    "readJsonBody",
    ()=>readJsonBody
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$order$2d$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/orders/order-errors.ts [app-rsc] (ecmascript)");
;
;
function jsonError(status, code, message, details) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: {
            code,
            message,
            details
        }
    }, {
        status
    });
}
function handleRouteError(error) {
    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$order$2d$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OrderError"]) {
        const response = jsonError(error.httpStatus, error.code, error.message, error.details);
        const retryAfter = error.details?.retryAfterSeconds;
        if (retryAfter) response.headers.set("Retry-After", retryAfter);
        return response;
    }
    console.error(error);
    return jsonError(500, "INTERNAL_ERROR", "Đã có lỗi xảy ra, vui lòng thử lại sau");
}
async function readJsonBody(request) {
    try {
        return await request.json();
    } catch  {
        return undefined;
    }
}
}),
"[project]/src/lib/signed-token.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "signToken",
    ()=>signToken,
    "verifyToken",
    ()=>verifyToken
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
function mac(key, purpose, body) {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHmac"])("sha256", key).update(`${purpose}.${body}`).digest();
}
function signToken(payload, { key, purpose, now = Date.now, ttlMs }) {
    const body = Buffer.from(JSON.stringify({
        ...payload,
        exp: now() + ttlMs
    })).toString("base64url");
    return `${body}.${mac(key, purpose, body).toString("base64url")}`;
}
function verifyToken(token, { key, purpose, now = Date.now }) {
    try {
        const parts = token.split(".");
        if (parts.length !== 2) return null;
        const [body, signature] = parts;
        const given = Buffer.from(signature, "base64url");
        const expected = mac(key, purpose, body);
        if (given.length !== expected.length || !(0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["timingSafeEqual"])(given, expected)) return null;
        const payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
        if (typeof payload !== "object" || payload === null || Array.isArray(payload)) return null;
        const { exp } = payload;
        if (typeof exp !== "number" || exp <= now()) return null;
        return payload;
    } catch  {
        return null;
    }
}
}),
]})(),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/src/app/admin/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/admin/layout.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1gv0g0yz9dwng._.js.map