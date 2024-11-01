"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useParams } from "next/navigation";

function DetailProduk() {
  const router = useRouter();
  const { id } = useParams();
  const [produk, setProduk] = useState<any>(null);

  // Mengambil data produk berdasarkan ID
  useEffect(() => {
    if (id) {
      fetchDetailProduct();
    }
  }, [id]);

  const fetchDetailProduct = async () => {
    const url = `${process.env.NEXT_PUBLIC_URL}api/getProduct/${id}`;
    try {
      const response = await axios.get(url, { withCredentials: true });
      setProduk(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
      alert("Terjadi kesalahan saat mengambil detail produk.");
    }
  };

  if (!produk) return <div>Loading...</div>;

  return (
    <div>
      <h1>{produk.judul_produk}</h1>
      <img
        src={`https://74gslzvj-8000.asse.devtunnels.ms${produk.foto_produk}`}
        alt={produk.judul_produk}
      />
      <p>Harga: Rp. {produk.harga}</p>
      <p>{produk.deskripsi}</p>
    </div>
  );
}

export default DetailProduk;
