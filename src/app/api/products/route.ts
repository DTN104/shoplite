import { NextResponse, type NextRequest } from "next/server";
import { getCatalogProducts, getCategories } from "@/features/catalog/catalog-data";
import { parseCatalogQuery, queryProducts } from "@/features/catalog/catalog-rules";

/** GET /api/products?q=&category=&minPrice=&maxPrice=&inStock=1&sort=&page= */
export function GET(request: NextRequest) {
  const query = parseCatalogQuery(Object.fromEntries(request.nextUrl.searchParams));
  return NextResponse.json(queryProducts(getCatalogProducts(), getCategories(), query));
}
