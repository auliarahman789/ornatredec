"use client";
import { Josefin_Sans as JosefinSans } from "next/font/google";
import { usePathname } from "next/navigation";
import Navbar from "./homepage/navbar";
import SidebarSp from "./super admin/sidebar1";

const josefinSans = JosefinSans({ subsets: ["latin"] });

const disableNavbar = [
  "/auths",
  "/profile",
  "/profile/post",
  "/profile/edit",
  "/Superadmin",
  "/Superadmin/Dashboard",
  "/Superadmin/Produk",
  "/Superadmin/Akun",
  "/Superadmin/Statistik",
  "/Superadmin/Forum",
];
const superNavbar = [
  "/Superadmin",
  "/Superadmin/Dashboard",
  "/Superadmin/Produk",
  "/Superadmin/Akun",
  "/Superadmin/Statistik",
  "/Superadmin/Forum",
]

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isNavbarDisabled = disableNavbar.includes(pathname);
  const isSuperNavbar = superNavbar.includes(pathname);
  return (
    <div className={josefinSans.className}>
      {!isNavbarDisabled && <Navbar />}
      {isSuperNavbar && <SidebarSp />}
      {children}
    </div>
  );
}
