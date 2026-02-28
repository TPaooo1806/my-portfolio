import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ThaiBao | Software Engineer",
  description: "Software engineer focused on building scalable backend systems, modern web applications, and mobile apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex min-h-screen flex-col bg-black text-white antialiased`}>
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}