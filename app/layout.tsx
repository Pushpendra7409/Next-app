import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
// import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],  // Load the required subsets
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="winter">
      <body className={inter.className}>
        <NavBar />
        <main className="p-5">
          {children}
          {/* <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>  one way to loading in pages when we naviagate to pages*/}
          </main>
        </body>
    </html>
  );
}
