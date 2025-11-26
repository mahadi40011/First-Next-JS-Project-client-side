// import { NextResponse } from "next/server";
// import useAuth from "./hooks/useAuth";

// // This function can be marked `async` if using `await` inside
// export function proxy(request) {
//   const { user } = useAuth()
//   if(!user) return NextResponse.redirect(new URL("/login", request.url));
// }

// // Alternatively, you can use a default export:
// // export default function proxy(request) { ... }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: ["/add-product", "/manage-products"]
// };


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
