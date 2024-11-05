"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface Produk {
  kategori: string;
  id: string;
  judul_produk: string;
  harga: number;
  foto_produk: string;
}

interface KeranjangContextType {
  keranjang: Produk[];
  tambahProdukKeKeranjang: (produk: Produk) => void;
}

const KeranjangContext = createContext<KeranjangContextType | undefined>(
  undefined
);

export const KeranjangProvider = ({ children }: { children: ReactNode }) => {
  const [keranjang, setKeranjang] = useState<Produk[]>([]);

  const tambahProdukKeKeranjang = (produk: Produk) => {
    setKeranjang((prevKeranjang) => [...prevKeranjang, produk]);
  };

  return (
    <KeranjangContext.Provider value={{ keranjang, tambahProdukKeKeranjang }}>
      {children}
    </KeranjangContext.Provider>
  );
};

// Hook untuk menggunakan context keranjang
export const useKeranjang = () => {
  const context = useContext(KeranjangContext);
  if (!context) {
    throw new Error("useKeranjang harus digunakan di dalam KeranjangProvider");
  }
  return context;
};
