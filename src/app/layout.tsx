import type { Metadata } from "next";
import "./globals.css";
import TopNavbar from "@/components/TopNavbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "freakystore",
  description: "ss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full max-w-[1400px] flex flex-col mx-auto px-4 bg-white">
        <div className="pb-4 bg-white">
          <TopNavbar />
        </div>
        <div className="w-full max-w-[1400px] flex gap-3 bg-white">
          {children}
        </div>
        <div className="pt-20 pb-4 bg-white">
          <Footer />
        </div>
      </body>
    </html>
  );
}
