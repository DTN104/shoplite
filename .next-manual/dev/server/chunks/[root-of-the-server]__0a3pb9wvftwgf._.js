module.exports = [
(()=>{"use strict";return[
"[project]/src/app/api/admin/login/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$admin$2f$admin$2d$guard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/admin/admin-guard.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$admin$2f$admin$2d$messages$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/admin/admin-messages.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$admin$2f$login$2d$limiter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/admin/login-limiter.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$order$2d$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/orders/order-errors.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2d$key$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/client-key.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/http.ts [app-route] (ecmascript)");
;
;
;
;
;
;
async function POST(request) {
    const gate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$admin$2f$admin$2d$guard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["adminGate"])();
    if (gate) return gate;
    const clientKey = `login:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2d$key$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getClientKey"])(request)}`;
    const assertNotLocked = ()=>{
        const limit = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$admin$2f$login$2d$limiter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loginLimiter"].check(clientKey);
        if (!limit.allowed) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$order$2d$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderError"]("TOO_MANY_ATTEMPTS", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$admin$2f$admin$2d$messages$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LOGIN_LOCKED_MESSAGE"], {
                retryAfterSeconds: String(limit.retryAfterSeconds)
            });
        }
    };
    try {
        assertNotLocked();
        const body = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readJsonBody"])(request);
        const password = body?.password;
        if (typeof password !== "string") {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonError"])(400, "VALIDATION_ERROR", "Body phải là JSON có trường password dạng chuỗi");
        }
        // Kiểm lại sau await: các request song song đã qua lần kiểm đầu; không được có await từ đây đến recordFailure
        assertNotLocked();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$admin$2f$admin$2d$guard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkAdminPassword"])(password)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$admin$2f$login$2d$limiter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loginLimiter"].recordFailure(clientKey);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonError"])(401, "UNAUTHORIZED", "Mật khẩu không đúng");
        }
        return new Response(null, {
            status: 204,
            headers: {
                "Set-Cookie": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$admin$2f$admin$2d$guard$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSessionCookie"])(request)
            }
        });
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleRouteError"])(error);
    }
}
}),
"[project]/src/features/admin/admin-guard.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/http.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$signed$2d$token$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/signed-token.ts [app-route] (ecmascript)");
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
    if (!isAdminEnabled()) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["notFound"])();
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
    return token !== undefined && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$signed$2d$token$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyToken"])(token, {
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
    const token = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])()).get(COOKIE_NAME)?.value;
    if (token === undefined) return "none";
    return isValidSession(token) ? "valid" : "invalid";
}
async function requireAdmin(currentPath) {
    assertAdminEnabled();
    if (await getAdminSession() !== "valid") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redirect"])(`/admin/login?next=${encodeURIComponent(currentPath)}`);
    }
    return adminContext;
}
async function requireAdminApi(request) {
    const gate = adminGate();
    if (gate) return gate;
    if (!isValidSession(readCookie(request, COOKIE_NAME))) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonError"])(401, "UNAUTHORIZED", "Bạn cần đăng nhập để thực hiện thao tác này");
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
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$signed$2d$token$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signToken"])({
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
"[project]/src/features/admin/admin-messages.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Message 429 khi đăng nhập sai quá nhiều lần; thuần để LoginForm (client) dùng chung. */ __turbopack_context__.s([
    "LOGIN_LOCKED_MESSAGE",
    ()=>LOGIN_LOCKED_MESSAGE
]);
const LOGIN_LOCKED_MESSAGE = "Bạn thử sai quá nhiều lần, vui lòng thử lại sau 15 phút. Trong thời gian này, mọi lần đăng nhập đều bị từ chối.";
}),
"[project]/src/features/admin/login-limiter.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loginLimiter",
    ()=>loginLimiter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$process$2d$singleton$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/process-singleton.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rate$2d$limit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/rate-limit.ts [app-route] (ecmascript)");
;
;
const FIFTEEN_MINUTES = 15 * 60 * 1000;
const loginLimiter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$process$2d$singleton$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["singleton"])("login-limiter", ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rate$2d$limit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createRateLimiter"])({
        max: 5,
        windowMs: FIFTEEN_MINUTES,
        lockMs: FIFTEEN_MINUTES,
        maxKeys: 10_000
    }));
}),
"[project]/src/features/orders/order-errors.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/lib/client-key.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Chỗ duy nhất đọc IP client: phần tử ngoài cùng bên phải của x-forwarded-for (do proxy tin cậy nối), thiếu thì "direct". */ __turbopack_context__.s([
    "getClientKey",
    ()=>getClientKey
]);
function getClientKey(request) {
    const last = request.headers.get("x-forwarded-for")?.split(",").at(-1)?.trim();
    return last || "direct";
}
}),
"[project]/src/lib/http.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleRouteError",
    ()=>handleRouteError,
    "jsonError",
    ()=>jsonError,
    "readJsonBody",
    ()=>readJsonBody
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$order$2d$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/orders/order-errors.ts [app-route] (ecmascript)");
;
;
function jsonError(status, code, message, details) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
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
    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$orders$2f$order$2d$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderError"]) {
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
"[project]/src/lib/process-singleton.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Giữ một instance duy nhất trên cả tiến trình, bền qua hot reload và các bundle của Next. */ __turbopack_context__.s([
    "singleton",
    ()=>singleton
]);
function singleton(key, init) {
    const store = globalThis;
    const id = Symbol.for(`shoplite:${key}`);
    store[id] ??= init();
    return store[id];
}
}),
"[project]/src/lib/rate-limit.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createRateLimiter",
    ()=>createRateLimiter
]);
function createRateLimiter(options) {
    const { max, windowMs, lockMs, maxKeys, now = Date.now } = options;
    const entries = new Map(); // Map giữ thứ tự chèn nên khóa đầu tiên là cũ nhất
    const isLocked = (e, t)=>e.lockedUntil > t;
    const isStale = (e, t)=>e.lockedUntil > 0 ? e.lockedUntil <= t : t - e.windowStart >= windowMs;
    const retryAfter = (until, t)=>Math.max(1, Math.ceil((until - t) / 1000));
    /** Chừa chỗ cho khóa mới: loại khóa hết hạn trước, rồi khóa cũ nhất chưa bị khóa. */ function makeRoom(t) {
        if (entries.size < maxKeys) return true;
        for (const [key, e] of entries)if (isStale(e, t)) entries.delete(key);
        if (entries.size < maxKeys) return true;
        for (const [key, e] of entries){
            if (!isLocked(e, t)) {
                entries.delete(key);
                return true;
            }
        }
        return false;
    }
    return {
        /** Không đổi bộ đếm. */ check (key) {
            const t = now();
            const entry = entries.get(key);
            if (entry && isLocked(entry, t)) {
                return {
                    allowed: false,
                    retryAfterSeconds: retryAfter(entry.lockedUntil, t)
                };
            }
            if (!entry && !makeRoom(t)) {
                // Mọi khóa đang bị khóa: từ chối khóa mới đến khi khóa sớm nhất hết hạn
                const soonest = Math.min(...[
                    ...entries.values()
                ].map((e)=>e.lockedUntil));
                return {
                    allowed: false,
                    retryAfterSeconds: retryAfter(soonest, t)
                };
            }
            return {
                allowed: true
            };
        },
        /** Ghi một lần sai; lần thứ `max` bắt đầu khóa. */ recordFailure (key) {
            const t = now();
            let entry = entries.get(key);
            if (entry && isStale(entry, t)) {
                entries.delete(key);
                entry = undefined;
            }
            if (entry && isLocked(entry, t)) return; // đang khóa thì không kéo dài thêm
            if (!entry) {
                if (!makeRoom(t)) return; // `check` đã chặn trường hợp này trước khi so mật khẩu
                entry = {
                    count: 0,
                    windowStart: t,
                    lockedUntil: 0
                };
                entries.set(key, entry);
            }
            entry.count += 1;
            if (entry.count >= max) entry.lockedUntil = t + lockMs;
        }
    };
}
}),
"[project]/src/lib/signed-token.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0a3pb9wvftwgf._.js.map