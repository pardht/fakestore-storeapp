import type { Metadata } from "next";
import "./globals.css";
import TopNavbar from "@/components/TopNavbar";

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
      <body className="bg-[#f0ff8f] flex flex-col items-center">
        <TopNavbar />
        <div className="w-full max-w-[1400px] flex gap-3">
        {children}
        </div>
      </body>
    </html>
  );
}
