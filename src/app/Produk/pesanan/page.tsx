"use client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DetailPesanan() {
  const router = useRouter();
  const { id } = router?.query;
  const [produk, setProduk] = useState<any>(null); // State untuk menyimpan detail produk
  const [loading, setLoading] = useState(true); // State untuk indikator loading
  const [error, setError] = useState<string | null>(null); // State untuk menyimpan pesan error

  // Mengambil detail produk saat ID berubah
  useEffect(() => {
    if (typeof id === "string") {
      fetchDetailProduk(id);
    }
  }, [id]);

  // Fungsi untuk mengambil detail produk dari API
  const fetchDetailProduk = async (produkId: string) => {
    const url = `${process.env.NEXT_PUBLIC_URL}api/getProdukId/:id`; // Sesuaikan endpoint sesuai dengan API Anda
    try {
      const response = await axios.get(url, { withCredentials: true });
      setProduk(response.data); // Menyimpan detail produk ke dalam state
    } catch (error) {
      console.error("Error fetching product detail:", error);
      setError("Terjadi kesalahan saat mengambil detail produk."); // Menyimpan pesan error
    } finally {
      setLoading(false); // Mengubah loading menjadi false setelah fetch selesai
    }
  };

  // Menampilkan loading atau error sebelum data produk ditampilkan
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!produk) return <div>Produk tidak ditemukan.</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">{produk.judul_produk}</h1>
      <img
        className="w-full h-64 object-cover mb-4"
        src={`https://74gslzvj-8000.asse.devtunnels.ms${produk.foto_produk}`}
        alt={produk.judul_produk}
      />
      <p className="text-lg font-semibold">Harga: Rp. {produk.harga}</p>
      <p className="mt-4">{produk.deskripsi_produk}</p>
    </div>
  );
}
