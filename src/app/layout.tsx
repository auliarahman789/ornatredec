import type { Metadata } from "next";
import { Inter, Josefin_Sans as JosefinSans } from "next/font/google";
import "./globals.css";

const josefinSans = JosefinSans({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={josefinSans.className}>{children}</body>
    </html>
  );
}
