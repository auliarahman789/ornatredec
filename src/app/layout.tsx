// src/app/layout.tsx

import RootLayoutClient from "@/components/layout2";
import { KeranjangProvider } from "./Produk/keranjang/keranjangContext";
import "./globals.css";
import type { Metadata } from "next";
import { Josefin_Sans as JosefinSans } from "next/font/google";

const josefinSans = JosefinSans({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "T-Trana",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en ">
      <body>
        <RootLayoutClient>
          <KeranjangProvider>{children}</KeranjangProvider>
        </RootLayoutClient>
      </body>
    </html>
  );
}
