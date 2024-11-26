"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Komentar from "../../komentar/page";
import { useKeranjang } from "../../keranjang/keranjangContext";
import { Produk, Subvariasi } from "../types";

const DetailPesanan = () => {
  const { id } = useParams();
  const router = useRouter();
  // const { tambahProdukKeKeranjang } = useKeranjang();
  const [produk, setProduk] = useState<Produk | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hargaTerpilih, setHargaTerpilih] = useState<number | null>(null);
  const [subvariasiDipilih, setSubvariasiDipilih] = useState<Subvariasi | null>(
    null
  );

  useEffect(() => {
    if (typeof id === "string") {
      fetchDetailProduct(id);
    }
  }, [id]);

  const fetchDetailProduct = async (produkId: string) => {
    const url = `${process.env.NEXT_PUBLIC_URL}/api/getProdukId/${produkId}`;
    try {
      const response = await axios.get(url, { withCredentials: true });
      setProduk(response.data);
      setHargaTerpilih(response.data.harga); // Set harga awal sesuai dengan produk utama
    } catch (error) {
      console.error("Error fetching product details:", error);
      setError("Terjadi kesalahan saat mengambil detail produk.");
    } finally {
      setLoading(false);
    }
  };

  const tambahKeKeranjang = async () => {
    if (produk) {
      const produkDenganVariasi = {
        ...produk,
        variasiDipilih: subvariasiDipilih?.nama_sub_variasi || "",
        subvariasiDipilih: subvariasiDipilih?.nama_sub_variasi || "",
        harga: hargaTerpilih || produk.harga,
        jumlah,
      };

      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          alert("Anda harus login terlebih dahulu!");
          return;
        }

        console.log(
          "Produk yang akan ditambahkan ke keranjang:",
          produkDenganVariasi
        );

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/troli`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(produkDenganVariasi),
          }
        );

        if (!response.ok) {
          const errorMessage = await response.text();
          console.error("Error response:", errorMessage);
          throw new Error("Gagal menambahkan produk ke keranjang.");
        }

        alert("Produk berhasil ditambahkan ke keranjang!");
      } catch (error) {
        if (error instanceof Error) {
          console.error("Kesalahan:", error.message);
        } else {
          console.error("Kesalahan yang tidak diketahui:", error);
        }
        alert("Terjadi kesalahan saat menambahkan ke keranjang.");
      }
    }
  };

  const [jumlah, setJumlah] = useState(1);
  const tambahJumlah = () => setJumlah((prev) => prev + 1);
  const kurangiJumlah = () => setJumlah((prev) => (prev > 1 ? prev - 1 : 1));

  const handleVariasiClick = (subvariasi: Subvariasi) => {
    setHargaTerpilih(subvariasi.harga); // Update harga berdasarkan subvariasi yang dipilih
    setSubvariasiDipilih(subvariasi); // Simpan subvariasi yang dipilih
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!produk) return <div>Produk tidak ditemukan.</div>;

  return (
    <div className="bg-[#DBFFF6] h-auto">
      <div className="bg-white w-[80%] mx-auto pb-[20%]">
        <div className="grid grid-cols-2">
          <div>
            <img
              className="mx-auto mt-5 h-[125%] w-[65%] rounded cursor-pointer"
              src={`${process.env.NEXT_PUBLIC_URL}${produk.foto_produk}`}
              alt={produk.judul_produk}
            />
          </div>
          <div>
            <div className="mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold mb-4">{produk.judul_produk}</h1>
              <p className="text-2xl font-bold text-[#FF0A0A] pt-6">
                Rp. {hargaTerpilih ?? produk.harga}
              </p>
              {produk.variasis.map((variasi) => (
                <div key={variasi.id} className="pt-4">
                  <p className="text-xl font-medium">
                    Variasi: {variasi.nama_variasi}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {variasi.subvariasis.map((subvariasi) => (
                      <button
                        key={subvariasi.id}
                        onClick={() => handleVariasiClick(subvariasi)}
                        className={`px-3 py-1 rounded hover:bg-gray-300 transition-colors duration-200 ${
                          subvariasiDipilih?.id === subvariasi.id
                            ? "bg-green-400 text-white"
                            : "bg-gray-200"
                        }`}
                      >
                        {subvariasi.nama_sub_variasi} - Rp. {subvariasi.harga}
                      </button>
                    ))}
                  </div>
                  <div className="items-center translate-y-8 border-black">
                    <button
                      onClick={kurangiJumlah}
                      className="px-3 py-2 bg-green-600 text-white rounded"
                    >
                      -
                    </button>
                    <span className="px-4">{jumlah}</span>
                    <button
                      onClick={tambahJumlah}
                      className="px-3 py-2 bg-green-600 text-white rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-row translate-y-[500%]">
              <Link href="../pesanan/checkout">
                <button className="text-white bg-green-500 rounded-lg py-2 px-[150%] ml-2 h-[100%]">
                  <span className="text-white flex flex-row">
                    Beli<span className="pl-1">sekarang</span>
                  </span>
                </button>
              </Link>
              <button
                onClick={tambahKeKeranjang}
                className="text-white bg-green-500 rounded-lg py-2 px-[5%] ml-2 translate-x-[350%]"
              >
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
          Deskripsi Produk
        </div>
        <div className="bg-white min-h-screen pl-4 pt-4">
          {produk.deskripsi_produk}
        </div>
      </div>
      <div className="mt-[10%]">
        <Komentar />
      </div>
    </div>
  );
};

export default DetailPesanan;
