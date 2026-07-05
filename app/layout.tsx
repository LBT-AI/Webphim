import type { Metadata } from "next";
import "../app/globals.css";
import Header from "@/components/Header";
import MobileBottomNav from "@/components/MobileBottomNav";

export const metadata: Metadata = {
  title: "PRISMX — Nền tảng giải trí trực tuyến",
  description: "Trang web giải trí",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="overflow-x-hidden">
      <body className="antialiased overflow-x-hidden min-h-screen bg-[var(--color-premium-dark)] font-sans text-gray-200 selection:bg-[var(--color-accent)] selection:text-white pb-20 lg:pb-0">
        <Header />
        <main className="max-w-7xl mx-auto w-full">
          {children}
        </main>
        <MobileBottomNav />
      </body>
    </html>
  );
}
