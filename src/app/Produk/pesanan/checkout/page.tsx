"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CheckoutPage = () => {
  // Mengambil parameter produkId dari URL
  const searchParams = useSearchParams();
  const produkId = searchParams.get("produkId");
  const [produkDetail, setProdukDetail] = useState<any | null>(null);

  const produkData: Record<
    number,
    { nama: string; harga: number; deskripsi: string }
  > = {
    1: { nama: "Produk A", harga: 50000, deskripsi: "Deskripsi Produk A" },
    2: { nama: "Produk B", harga: 70000, deskripsi: "Deskripsi Produk B" },
    // Tambahkan produk lainnya jika perlu
  };

  useEffect(() => {
    // Pastikan produkId ada dan valid
    if (produkId) {
      const produkIdNumber = Number(produkId); // Convert ke number
      if (!isNaN(produkIdNumber)) {
        // Ambil produk detail berdasarkan produkId
        setProdukDetail(produkData[produkIdNumber]);
      }
    }
  }, [produkId]);

  if (!produkId) {
    return <div>Produk tidak ditemukan. Silakan kembali ke keranjang.</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      {produkDetail ? (
        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-2xl font-semibold">{produkDetail.nama}</h2>
          <p>Harga: Rp. {produkDetail.harga}</p>
          <p>Deskripsi: {produkDetail.deskripsi}</p>
        </div>
      ) : (
        <div>Loading produk...</div>
      )}
    </div>
  );
};

export default CheckoutPage;
