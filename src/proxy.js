import { NextResponse } from "next/server";

export function proxy(request) {
  const auth = request.cookies.get("authUser")?.value;

  if (!auth) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/add-product", "/manage-products"],
};
