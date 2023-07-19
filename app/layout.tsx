import { Header } from "@/components/Header";
import "./globals.css";
import { Footer } from "@/components/Footer";

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
    <html lang="ja">
      {/* <metadata /> */}
      <title>大丸白衣　メーカー在庫</title>
      <body className="relative min-h-screen flex flex-col justify-between">
        <div className="flex-1">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
