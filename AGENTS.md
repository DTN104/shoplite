# AGENTS.md - shoplite

<!-- bmad:context -->
<!-- Verified 2026-11-20 against 5662e44. Managed by bmad-project-context; edits inside this block are replaced on refresh. Keep anything you want preserved outside the markers. -->

## shoplite

Cửa hàng đồ công nghệ mini, dự án mẫu cho bài lab; hướng dẫn này dành cho mọi AI coding agent làm việc trên repo. Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Zod 4; Vitest + Testing Library, Playwright; Node >= 22.12. Spec tính năng nằm ở `specs/<nnn-tên>/` (Spec Kit) và `openspec/changes/`; nguyên tắc dự án ở `.specify/memory/constitution.md`.

## Chính sách

### Quy tắc nghiệp vụ không được phá vỡ

- Giỏ hàng: mỗi sản phẩm tối đa `MAX_QUANTITY_PER_ITEM = 10` và không vượt `stock` (`getMaxQuantity`); sản phẩm `stock <= 0` không thêm được (reducer trả lại state cũ).
- Phí ship (`pricing.ts`): `standard` 30_000, `express` 60_000; `standard` miễn phí khi subtotal >= `FREE_SHIPPING_THRESHOLD = 500_000`; giỏ rỗng phí = 0. Client và server dùng chung các hàm này; không tính phí ở nơi khác.
- Giá do server tính: `placeOrder` lấy `unitPrice` từ catalog, `placeOrderSchema` chỉ nhận `productId` + `quantity` (và `couponCode` tùy chọn). Không tin giá, phí ship, số tiền giảm hay tổng tiền gửi từ client; không thêm trường tiền vào `placeOrderSchema`.
- Mã giảm giá: loại `percent` (có `maxDiscount`) hoặc `fixed`; số tiền giảm làm tròn xuống đồng nguyên và không vượt tạm tính; `minSubtotal` so với tạm tính trước giảm (≥ là đạt); `expiresOn` còn hiệu lực hết ngày theo giờ Việt Nam (UTC+7, theo đồng hồ server). Phí ship vẫn xét theo tạm tính trước giảm. Mỗi đơn tối đa một mã; mã không hợp lệ lúc đặt hàng thì từ chối đơn (422), không tự tạo đơn không giảm. Đơn lưu `couponCode` + `discount`; đơn cũ thiếu hai trường = giảm 0đ.
- Wishlist: tối đa `MAX_WISHLIST_ITEMS = 50` sản phẩm; khi đầy thì từ chối thêm và báo cho khách (`WISHLIST_FULL_MESSAGE`), không đẩy sản phẩm cũ ra. Sản phẩm hết hàng vẫn thích được. Tên, giá và tồn kho luôn lấy từ catalog hiện hành.
- Hủy đơn: `cancelOrder` chỉ cho phép khi `status === "pending"`, ngược lại `INVALID_STATUS_TRANSITION` (409). `PATCH /api/orders/:id` chỉ chấp nhận body `{ "status": "cancelled" }`.

### Definition of Done

- Sau khi sửa code, chạy `npm run check`; nếu fail thì sửa đến khi pass rồi mới báo cáo. Chạy thêm `npm run format:check`, vì `check` (lint + typecheck + test) không kiểm format.
- Logic mới có test đặt cạnh file nguồn; quy tắc nghiệp vụ ở trên có test bảo vệ nếu bị chạm tới.
- Đổi luồng mua hàng, đặt hàng hoặc UI có `data-testid`: chạy `npm run test:e2e`.
- Text mới bằng tiếng Việt; lỗi API mới có mã trong `OrderErrorCode` + `HTTP_STATUS_BY_CODE`.

## Nơi đặt code

- Sản phẩm, danh mục: dữ liệu tĩnh trong `src/data/products.ts`, `src/data/categories.ts`.
- Giỏ hàng: `localStorage` của trình duyệt, key `CART_STORAGE_KEY = "shoplite:cart"`.
- Đơn hàng: file JSON `ORDERS_FILE` (mặc định `DEFAULT_ORDERS_FILE` = `storage/orders.json`, đã gitignore, tự tạo khi ghi).
- Alias `@/*` trỏ tới `src/*`.

### Codemap

- Catalog, `src/features/catalog/`: `catalog-service.ts` (`parseCatalogQuery`, `queryProducts`, `buildCatalogHref`, `getProductById`, `PAGE_SIZE`, `LOW_STOCK_THRESHOLD`)
- Cart, `src/features/cart/`: `cart-reducer.ts` (`cartReducer`, `MAX_QUANTITY_PER_ITEM`, `getMaxQuantity`), `cart-store.ts` (`cartStore`), `use-cart.ts` (`useCart`)
- Checkout, `src/features/checkout/`: `pricing.ts` (`calculateOrderTotals`, `FREE_SHIPPING_THRESHOLD`, `SHIPPING_OPTIONS`), `checkout-schema.ts` (`checkoutFormSchema`, `placeOrderSchema`, `toFieldErrors`), `components/checkout-form.tsx`
- Orders, `src/features/orders/`: `order-service.ts` (`createOrderService`), `order-repository.ts`, `order-errors.ts` (`OrderError`), `server.ts` (`orderService`)
- Coupons, `src/features/coupons/` + `src/data/coupons.ts`: `coupon-rules.ts` (`evaluateCoupon`, `calculateDiscount`, `getCouponErrorMessage`; thuần, dùng được ở client), `coupon-schema.ts` (`checkCouponSchema`), `coupon-service.ts` (`couponService`, `findCouponByCode`; chỉ server), `coupon-errors.ts` (`toCouponOrderError`), `applied-coupon-store.ts` (`appliedCouponStore`, `useAppliedCouponStatus`), `types.ts` (`CouponInvalidReason`), `components/coupon-field.tsx`
- Wishlist, `src/features/wishlist/`: `wishlist-reducer.ts` (`wishlistReducer`, `MAX_WISHLIST_ITEMS`, `normalizeWishlist`), `wishlist-store.ts` (`wishlistStore`, `WISHLIST_STORAGE_KEY = "shoplite:wishlist"`), `use-wishlist.ts` (`useWishlist`), `components/wishlist-button.tsx`, `components/wishlist-view.tsx`
- API, `src/app/api/` + `src/lib/http.ts`: `products/route.ts`, `products/[slug]/route.ts`, `orders/route.ts`, `orders/[id]/route.ts`, `coupons/validate/route.ts`; `handleRouteError`, `jsonError`, `readJsonBody`

### Luồng thêm vào giỏ hàng (hoàn toàn phía client)

`ProductPurchasePanel` / `AddToCartButton` → `useCart().addItem(product, qty)` → `toCartItem(product)` → `cartStore.dispatch({ type: "add" })` → `cartReducer` (giới hạn bằng `getMaxQuantity`) → `writeToStorage` ghi `localStorage` → `emit()` cập nhật mọi component dùng `useSyncExternalStore` (kể cả tab khác qua sự kiện `storage`).

### Luồng áp dụng mã giảm giá

`CouponField` → `fetch("POST /api/coupons/validate")` gửi `{ couponCode, items }` → `couponService.check` (validate `checkCouponSchema`, tạm tính từ giá catalog, `evaluateCoupon`: tồn tại → còn hạn → đạt tối thiểu; lỗi qua `toCouponOrderError` với `details.couponCode`) → client lưu quy tắc mã vào `appliedCouponStore` (bộ nhớ, không `localStorage`) → `useAppliedCouponStatus(subtotal)` tính lại mỗi lần render: `active` / `suspended` (chưa đạt tối thiểu, tự hiệu lực lại) / `blocked` (server từ chối lúc đặt hàng hoặc mã hết hạn, chỉ thoát bằng "Gỡ mã"); `suspended`/`blocked` khóa nút "Đặt hàng". Mã bị từ chối ngay lúc áp dụng thì không được lưu, chỉ báo lỗi ở ô nhập.

### Luồng đặt hàng

`CheckoutForm` validate bằng `checkoutFormSchema` → `fetch("POST /api/orders")` chỉ gửi `{ productId, quantity }` (+ `couponCode` khi mã đang `active`) → `app/api/orders/route.ts` (`readJsonBody`) → `orderService.placeOrder` (validate `placeOrderSchema`, `mergeItems` (tổng sau gộp ≤ `MAX_QUANTITY_PER_ITEM`), lấy giá qua `findProduct` = `getProductById`, kiểm tồn kho, kiểm tra lại mã bằng `evaluateCoupon` với một lần `now()`, `calculateOrderTotals(items, method, discount)`, `generateOrderId` dạng `SL-YYYYMMDD-XXXXXX`) → `repository.save` → `createJsonFileOrderRepository` ghi file `.tmp` rồi `rename`. Thành công: client gọi `clear()` + `appliedCouponStore.clear()` và chuyển tới `/orders/{id}?placed=1`. Lỗi: `handleRouteError` trả `{ error: { code, message, details? } }`; lỗi `COUPON_*` → `appliedCouponStore.markServerError` (mã chuyển sang `blocked`).

## Chạy và kiểm tra

- Dùng `npm run typecheck` (`next typegen && tsc --noEmit`), không gọi `tsc` trực tiếp: kiểu `PageProps` và `RouteContext` do `next typegen` sinh ra.
- Khi đang sửa, chạy test một thư mục hoặc file: `npx vitest run src/features/orders`; lọc theo tên: `npx vitest run -t "tên test"`.
- `npm run test:e2e` tự chạy `npm run dev`, hoặc dùng lại server đang chạy trên cổng đó; lần đầu cần `npx playwright install chromium`. E2E mặc định ghi đơn vào `storage/orders.json`; muốn tách dữ liệu thì dùng cổng còn trống, vì server đang chạy sẵn sẽ không nhận `ORDERS_FILE`: `PORT=3457 ORDERS_FILE=/tmp/orders.json npm run test:e2e`.
- Vitest chỉ chạy `src/**/*.test.{ts,tsx}`, môi trường mặc định `jsdom`; `vitest.setup.ts` gọi `cleanup()` và xóa `localStorage` sau mỗi test.
- Test code dùng file hệ thống hoặc route handler: thêm dòng đầu `// @vitest-environment node`. Test repository JSON ghi vào thư mục tạm (`mkdtemp(tmpdir())`), xóa ở `afterEach`; xem `order-repository.test.ts`. Không để unit test ghi vào `storage/` thật.
- Test service dùng `createOrderService({ repository: createInMemoryOrderRepository(), now, generateId })` để cố định thời gian và mã đơn. Test route mock singleton bằng `vi.mock("@/features/orders/server", ...)` trả `orderService` dùng `createInMemoryOrderRepository()`; xem `src/app/api/orders/route.test.ts`.
- Test store: gọi `cartStore.reset()` hoặc `wishlistStore.reset()` để buộc đọc lại `localStorage`; test render `ProductCard` hoặc `WishlistView` cần `wishlistStore.reset()` trong `beforeEach`.
- E2E (`e2e/shopping-flow.spec.ts`, `e2e/wishlist.spec.ts`) tìm phần tử theo nhãn tiếng Việt (ô mã giảm giá theo nhãn "Mã giảm giá") và `data-testid` (`product-card`, `purchase-panel`, `cart-count`, `cart-total`, `order-row`, `discount-amount`, `checkout-total`, `order-discount`, `wishlist-button`, `wishlist-count`, `wishlist-item`, `wishlist-message`, `wishlist-empty`); đổi nhãn hoặc `data-testid` phải giữ đồng bộ.

## Quy ước khác mặc định

- `src/app/` chỉ chứa page, layout, route handler mỏng; không đặt logic nghiệp vụ ở đó. Logic, component, type và test nằm trong `src/features/<feature>/`. UI dùng chung ở `src/components/`, tiện ích ở `src/lib/`.
- Tên file kebab-case (`cart-reducer.ts`, `add-to-cart-button.tsx`); test đặt cạnh file nguồn: `*.test.ts(x)`. Component export dạng named function PascalCase.
- Mặc định là Server Component; chỉ thêm `"use client"` cho component cần state, hook hoặc trình duyệt (ví dụ `checkout-form.tsx`, `cart-view.tsx`, `cancel-order-button.tsx`). Trang đọc đơn hàng dùng `export const dynamic = "force-dynamic"`.
- Component hiển thị nội dung giỏ hoặc wishlist (số lượng, danh sách, tổng tiền, trạng thái đã thích) phải chờ `hydrated` (`useHydrated`) trước khi render để tránh lệch hydrate. Component chỉ dùng `items` để chặn thao tác (như `AddToCartButton`) thì không bắt buộc, vì `dispatch` đọc lại `localStorage` và `cartReducer` vẫn giới hạn số lượng.
- Zod chỉ nằm trong `checkout-schema.ts` và `coupon-schema.ts`; dùng `safeParse`, lỗi chuyển thành map phẳng `"customer.phone"` qua `toFieldErrors`. Type suy ra bằng `z.infer`.
- Lỗi nghiệp vụ ném `OrderError(code, message, details?)`; HTTP status lấy từ `HTTP_STATUS_BY_CODE`. Thêm mã lỗi mới thì thêm vào `OrderErrorCode` + `HTTP_STATUS_BY_CODE`. Lý do mã giảm giá không hợp lệ còn phải thêm vào `CouponInvalidReason`, `ERROR_CODE_BY_REASON` (`coupon-errors.ts`) và `getCouponErrorMessage`, và mã lỗi phải bắt đầu bằng `COUPON_` vì client nhận diện bằng tiền tố này.
- Route handler bọc `try/catch` rồi gọi `handleRouteError`; lỗi không xác định thành `500 INTERNAL_ERROR`. Không trả lỗi API ngoài định dạng `{ error: { code, message, details? } }`.
- Toàn bộ text UI, message lỗi, comment và tên test viết bằng tiếng Việt. Định dạng tiền, ngày qua `formatCurrency`, `formatDateTime` (`src/lib/format.ts`); tìm kiếm không dấu qua `normalizeText`.
- Ghép class Tailwind bằng `cn` (`src/lib/cn.ts`); nút dùng `Button` / `buttonStyles` (`src/components/ui/button.tsx`).
- Không import `@/features/orders/server`, `@/data/coupons`, `@/features/coupons/coupon-service` hay `node:*` vào Client Component, kể cả gián tiếp (ví dụ qua `order-service.ts`). `src/features/coupons/client-boundary.test.ts` chỉ bắt import trực tiếp ba module đầu từ file `"use client"`, nên test pass chưa chứng minh là không lộ.
- Không đọc, ghi `storage/orders.json` trực tiếp; luôn đi qua `OrderRepository`.
- Code production chỉ truy cập `localStorage` trong `cart-store.ts` và `wishlist-store.ts`. Test và E2E được seed `localStorage` trực tiếp.
- Không bật lại `agentRules` trong `next.config.ts` (đang `false` để `next dev` không sửa `AGENTS.md`).
- Không commit `.env*`, `storage/`, `coverage/`, `playwright-report/`, `test-results/`.

<!-- /bmad:context -->
