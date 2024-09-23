"use client";
import { Josefin_Sans as JosefinSans } from "next/font/google";
import { usePathname } from "next/navigation";
import Navbar from "./homepage/navbar";

const josefinSans = JosefinSans({ subsets: ["latin"] });

const disableNavbar = [
  "/auths",
  "/profile",
  "/profile/post",
  "/profile/edit",
  "/profile/riwayat",
<<<<<<< HEAD
=======
  "/Superadmin",
  "/Superadmin/Dashboard",
  "/Superadmin/Produk",
  "/Superadmin/Akun",
  "/Superadmin/Statistik",
  "/Superadmin/Forum",
>>>>>>> a31ae0d1fb9484a9403db79e9a8c8b88d9b3246f
];

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isNavbarDisabled = disableNavbar.includes(pathname);

  return (
    <div className={josefinSans.className}>
      {!isNavbarDisabled && <Navbar />}

      {children}
    </div>
  );
}
