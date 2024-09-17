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
  "/Superadmin",
  "/superadmin/Dashboard",
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
