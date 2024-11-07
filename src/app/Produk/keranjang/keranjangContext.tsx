"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Produk } from "../pesanan/types";

// Definisikan tipe untuk konteks keranjang
export type KeranjangContextType = {
  keranjang: Produk[];
  tambahProdukKeKeranjang: (produk: Produk) => void;
  hapusDariKeranjang: (produkId: number) => void;
};

const KeranjangContext = createContext<KeranjangContextType | undefined>(
  undefined
);

export const KeranjangProvider = ({ children }: { children: ReactNode }) => {
  const [keranjang, setKeranjang] = useState<Produk[]>([]);

  // Fungsi untuk menambah produk ke keranjang
  const tambahProdukKeKeranjang = (produk: Produk) => {
    setKeranjang((prevKeranjang) => {
      const produkIndex = prevKeranjang.findIndex(
        (item) =>
          item.id === produk.id &&
          item.variasis?.[0]?.id === produk.variasis?.[0]?.id && // Periksa ID variasi pertama
          item.variasis?.[0]?.subvariasis?.[0]?.id ===
            produk.variasis?.[0]?.subvariasis?.[0]?.id // Periksa ID subvariasi pertama
      );

      if (produkIndex > -1) {
        // Jika produk dengan variasi yang sama sudah ada, update jumlah atau lakukan aksi lain jika diperlukan
        const updatedKeranjang = [...prevKeranjang];
        updatedKeranjang[produkIndex] = {
          ...updatedKeranjang[produkIndex],
          jumlah: (updatedKeranjang[produkIndex].jumlah || 1) + 1, // Update jumlah produk
        };
        return updatedKeranjang;
      }

      // Jika produk belum ada di keranjang, tambahkan sebagai item baru
      return [...prevKeranjang, { ...produk, jumlah: 1 }];
    });
  };

  // Fungsi untuk menghapus produk dari keranjang berdasarkan ID produk
  const hapusDariKeranjang = (produkId: number) => {
    setKeranjang((prevKeranjang) =>
      prevKeranjang.filter((item) => item.id !== produkId)
    );
  };

  return (
    <KeranjangContext.Provider
      value={{
        keranjang,
        tambahProdukKeKeranjang,
        hapusDariKeranjang,
      }}
    >
      {children}
    </KeranjangContext.Provider>
  );
};

export const useKeranjang = () => {
  const context = useContext(KeranjangContext);
  if (!context) {
    throw new Error("useKeranjang harus digunakan di dalam KeranjangProvider");
  }
  return context;
};
