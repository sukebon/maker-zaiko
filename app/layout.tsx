import { Header } from "@/components/Header";
import "./globals.css";
import { Footer } from "@/components/Footer";
import SessionProvider from "@/providers/SessionProvider";
import QueryProvider from "@/providers/queryProvider";
import SideBar from "@/components/side-bar";

export const metadata = {
  title: "大丸白衣　メーカー在庫",
  description: "大丸白衣　メーカー在庫",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <html lang="ja">
        {/* <metadata /> */}
        <title>大丸白衣　メーカー在庫</title>
        <body className="relative w-full min-h-screen flex">
          <SideBar />
          <div className="w-full flex flex-col justify-between">
            <div>
              <Header />
              <QueryProvider>{children}</QueryProvider>
            </div>
            <Footer />
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}
