"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Komentar from "../../komentar/komentar";

const DetailPesanan = () => {
  const { id } = useParams();
  const [produk, setProduk] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mengambil detail produk saat ID berubah
  useEffect(() => {
    if (typeof id === "string") {
      // Memastikan id adalah string
      fetchDetailProduct(id);
    }
  }, [id]);

  // Fungsi untuk mengambil detail produk dari API
  const fetchDetailProduct = async (produkId: any) => {
    const url = `${process.env.NEXT_PUBLIC_URL}/api/getProdukId/${produkId}`;
    try {
      const response = await axios.get(url, { withCredentials: true });
      setProduk(response.data); // Menyimpan detail produk ke dalam state
    } catch (error) {
      console.error("Error fetching product details:", error);
      setError("Terjadi kesalahan saat mengambil detail produk."); // Menyimpan pesan error
    } finally {
      setLoading(false); // Mengubah loading menjadi false setelah fetch selesai
    }
  };

  // Menampilkan loading, error, atau produk tidak ditemukan
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!produk) return <div>Produk tidak ditemukan.</div>;

  return (
    <div className="bg-[#DBFFF6] min-h-screen">
      <div className="bg-white w-[80%] mx-auto pb-[20%]">
        <div className="grid grid-cols-2">
          <div>
            <img
              className="mx-auto mt-5 h-[125%] w-[65%] rounded cursor-pointers"
              src={`https://74gslzvj-8000.asse.devtunnels.ms${produk.foto_produk}`}
              alt={produk.judul_produk}
            />
          </div>
          <div>
            <div className=" mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold mb-4">{produk.judul_produk}</h1>
              <p className="text-2xl font-bold text-[#FF0A0A] pt-6">
                Rp. {produk.harga}
              </p>
            </div>
            <div className="flex flex-row translate-y-[500%]">
              <Link href="../pesanan/checkout">
                <button className="text-white bg-green-500 rounded-lg py-2 px-[150%] ml-2 h-[100%] ">
                  <span className="text-white flex flex-row">
                    Beli
                    <span className="pl-1">sekarang</span>
                  </span>
                </button>
              </Link>
              <button className="text-white bg-green-500 rounded-lg py-2 px-[5%] ml-2 translate-x-[350%]">
                <Image
                  src="/icon/troli.svg"
                  width={35}
                  height={35}
                  alt="logo"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-[80%]">
        <div className="mt-[10%] py-2 bg-[#28DF99] text-[30px] font-semibold text-white pl-4">
          deskripsi produk
        </div>
        <div className="bg-white min-h-screen pl-4 pt-4">
          {produk.deskripsi_produk}
        </div>
      </div>
      <Komentar />
    </div>
  );
};

export default DetailPesanan;
