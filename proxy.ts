import Middleware from "next-intl/middleware";

export default Middleware({
  locales: ["en", "ja"],
  defaultLocale: "en"
});

export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"], 
};