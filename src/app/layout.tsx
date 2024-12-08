import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import NavBar from "@/components/common/NavBar";
import MobileNavBar from "@/components/common/MobileNavBar";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "N2 Lettings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <MobileNavBar />
        <main className="flex flex-col gap-8 row-start-2 items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
