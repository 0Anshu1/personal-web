import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Growth Portfolio | Full Stack Developer",
  description: "A unique glassmorphic portfolio showcasing professional growth and creative projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-emerald-500/30 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
