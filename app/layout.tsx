import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppHeader from "@/components/header";
import AppFooter from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News App",
  description: "Stay informed with the latest trending news at your fingertips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <div className="min-h-screen flex flex-col">
        <AppHeader/>
        <div className="flex-grow">
        {children}
        </div>
        <AppFooter/>
        </div>
      </body>
    </html>
  );
}
