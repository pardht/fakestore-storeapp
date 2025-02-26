import type { Metadata } from "next";
import "./globals.css";
import TopNavbar from "@/components/TopNavbar";
import SideBar from "@/components/SideBar";



export const metadata: Metadata = {
  title: "fekstor",
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
        <div className="w-full max-w-[1200px] flex gap-3">
        <SideBar/>
        {children}
        </div>
      </body>
    </html>
  );
}
