import type { Metadata } from "next";
import "./globals.css";
import TopNavbar from "@/components/TopNavbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "rilstore",
  description: "this is a real store.. i thought so",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full flex flex-col mx-auto bg-white">
        <div className="pb-4 bg-white">
          <TopNavbar />
        </div>
        <div className="w-full max-w-[1400px] flex gap-3 mx-auto px-4 bg-white">
          {children}
        </div>
        <div className="pt-10 md:pt-20 bg-white">
          <Footer />
        </div>
      </body>
    </html>
  );
}
