"use client";
import { Josefin_Sans as JosefinSans } from "next/font/google";
import { usePathname } from "next/navigation";
import Navbar from "./homepage/navbar";
import SidebarSp from "./super admin/sidebar1";
import path from "node:path/win32";

const josefinSans = JosefinSans({ subsets: ["latin"] });

const disableNavbar = [
  "/auths",
  "/profile",
  "/profile/post",
  "/profile/edit",
  "/profile/riwayat",
  "/Produk/paymentgateway",
  "/Superadmin",
  "/Superadmin/Dashboard",
  "/Superadmin/Produk",
  "/Superadmin/Akun",
  "/Superadmin/Statistik",
  "/Superadmin/Forum",
  "/Superadmin/Produk/tambah",
  // "/Superadmin/Produk/edit",
  // "/Superadmin/Produk/edit/${id}",
  "/Superadmin/Produk/pesanan/detail",
  "/Superadmin/Produk/pesanan",
  "/Superadmin/Produk/pesanan/daftar",
  "/Superadmin/Produk/pesanan/detail",
         "/Superadmin/Produk/pesanan/daftar/detail"
];
const superNavbar = [
  "/Superadmin",
  "/Superadmin/Produk",
  "/Superadmin/Akun",
  "/Superadmin/Statistik",
  "/Superadmin/Forum",
  "/Superadmin/Produk/tambah",
  "/Superadmin/Produk/pesanan",
    "/Superadmin/Produk/pesanan/daftar"
]

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isNavbarDisabled = 
  disableNavbar.includes(pathname) || 
  pathname.startsWith("/Superadmin/Produk/edit/") || 
  pathname.startsWith("/Superadmin/Akun/Detail/");
  const isSuperNavbar = superNavbar.includes(pathname) || pathname.startsWith("/Superadmin/Akun/Detail/");
  return (
    <div className={josefinSans.className}>
      {!isNavbarDisabled && <Navbar />}
      {isSuperNavbar && <SidebarSp />}
      {children}
    </div>
  );
}
