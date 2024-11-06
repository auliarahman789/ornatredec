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
  "/Produk/detail",
  "/Superadmin",
  "/Superadmin/Dashboard",
  "/Superadmin/Produk",
  "/Superadmin/Akun",
  "/Produk/paymentgateway",
  "/Superadmin/Statistik",
  "/Superadmin/Forum",
  "/Superadmin/Produk/tambah",
  "/Produk/keranjang",
  // "/Superadmin/Produk/edit",
  // "/Superadmin/Produk/edit/${id}",
  "/Superadmin/Produk/pesanan/detail",
  "/Superadmin/Produk/pesanan",
  "/Superadmin/Produk/pesanan/daftar",
  "/Superadmin/Produk/pesanan/detail",
  "/Superadmin/Produk/pesanan/daftar/detail",
  "/Superadmin/Forum/detailreportUlasan",
  "/Superadmin/Forum/detailreportUlasan/ReportUlasan2",
];
const superSidebar = [
  "/Superadmin",
  "/Superadmin/Produk",
  "/Superadmin/Akun",
  "/Superadmin/Statistik",
  "/Superadmin/Forum",
  "/Superadmin/Forum/detailreportUlasan",
  "/Superadmin/Forum/ReportUlasan2",
  "/Superadmin/Produk/tambah",
  "/Superadmin/Produk/pesanan",
  "/Superadmin/Produk/pesanan/daftar",
];

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isNavbarDisabled =
    disableNavbar.includes(pathname) ||
    pathname.startsWith("/Superadmin/Produk/edit/") ||
    pathname.startsWith("/Superadmin/Akun/Detail/") ||
    pathname.startsWith("/Superadmin/Produk/pesanan/detail/") ||
    pathname.startsWith("/Superadmin/Produk/pesanan/daftar/detail/") ||
    pathname.startsWith("/Superadmin/Forum/detailreportUlasan/ReportUlasan2/");
  const isSuperSidebar =
    superSidebar.includes(pathname) ||
    pathname.startsWith("/Superadmin/Akun/Detail/") ||
    pathname.startsWith("/Superadmin/Forum/detailreportUlasan/ReportUlasan2/");
  
  return (
    <div className={josefinSans.className}>
      {!isNavbarDisabled && <Navbar />}
      {isSuperSidebar && <SidebarSp />}
      {children}
    </div>
  );
}
