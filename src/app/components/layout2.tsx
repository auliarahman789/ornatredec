'use client';
import { usePathname } from "next/navigation";
import Navbar from "./homepage/navbar";
const disableNavbar = "/auths";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  return (
    <>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
      {/* <Footer /> */}
    </>
  );
}
