import React from "react";
import { KeranjangProvider } from "../Produk/keranjang/keranjangContext"; // Sesuaikan path

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <KeranjangProvider>{children}</KeranjangProvider>;
};

export default Layout;
