import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(function middleware(req: NextRequest) {}, {
  callbacks: {
    authorized: ({ req, token }) => {
      if (req.nextUrl.pathname.startsWith("/") && token === null) {
        return false;
      }
      return true;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export const config = {
  matcher: ["/", "/((?!.*login).*)/"], // /auth/signin 等を指定しないようにした
};
