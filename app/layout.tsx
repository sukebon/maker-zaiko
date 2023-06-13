import { Header } from "@/components/Header";
import "./globals.css";

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
      <body className="relative min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
