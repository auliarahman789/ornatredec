'use client';
import { Josefin_Sans as JosefinSans } from "next/font/google";

import { usePathname } from "next/navigation";
import Navbar from "./homepage/navbar";

const josefinSans = JosefinSans({ subsets: ["latin"] });

const disableNavbar = ["/auths"];  // Array of paths where Navbar should be disabled

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Check if pathname matches any of the paths in disableNavbar
  const isNavbarDisabled = disableNavbar.includes(pathname);

  return (
    <div className={josefinSans.className}>
      {!isNavbarDisabled && <Navbar />}
      {children}
      {/* <Footer /> */}
    </div>
  );
}
