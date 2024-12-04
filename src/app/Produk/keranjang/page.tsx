"use client";

import React, { useState, useEffect } from "react";
import { useKeranjang } from "./keranjangContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";

const KeranjangPage = () => {
  const { hapusDariKeranjang } = useKeranjang();
  const [keranjangFromAPI, setKeranjangFromAPI] = useState<any[]>([]);
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getKeranjang = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL}/api/getTroli`,
          { withCredentials: true }
        );
        setKeranjangFromAPI(response.data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    getKeranjang();
  }, []);

  const handleGoBack = () => {
    router.back();
  };

  const handlePesanProduk = (id: any) => {
    router.push(`/Produk/pesanan/checkout?produkId=${id}`);
  };

  return (
    <div className="bg-[#E4FFF2] min-h-screen pl-[5%] pt-10 pr-[15%]">
      <div className="bg-white w-[1200px] h-auto shadow-[3px_5px_4px] shadow-[#0000002e]">
        <div className="ml-10 mr-10">
          <h1 className="text-3xl font-bold mb-6 text-[#308967] pt-10">
            Keranjang Anda
          </h1>
          <div className="border-b-2 border-[#308967]"></div>
          <div className="flex justify-between text-2xl text-[#308967] pt-5 pb-5">
            <span>Produk</span>
            <span className="mr-8">Harga</span>
          </div>
          <div className="border-b-2 border-[#308967]"></div>
          {keranjangFromAPI.length === 0 ? (
            <div className="items-center text-center mt-[10%] flex flex-col">
              <Image src="/" width={45} height={45} alt="trolli" />
              <span className="text-3xl text-[#3F9272]">Masih Kosong nih</span>
              <span className="text-1xl text-[#3F9272]">
                Coba Untuk Simpan Produk yang nanti kamu mau beli
              </span>
            </div>
          ) : (
            <div className="grid gap-4 pt-6">
              {keranjangFromAPI.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center p-4 bg-white rounded mt-8 space-y-6 shadow-[3px_5px_4px] shadow-[#0000002e]"
                >
                  <div className="flex flex-col">
                    <div className="text-xl font-semibold">
                      {item.produk.judul_produk}
                    </div>
                    <div className="text-sm text-gray-600">
                      Variasi: {item.variasi.nama_variasi}
                    </div>
                    <div className="text-sm text-gray-600">
                      Subvariasi: {item.subvariasi.nama_sub_variasi}
                    </div>
                    <div className="flex justify-end translate-x-[580%] -translate-y-[100%]">
                      <div className="text-[#308967] text-lg font-semibold">
                        Rp. {item.subvariasi.harga}
                      </div>
                    </div>
                    <div className="-translate-y-[100%] translate-x-[620%]">
                      <button
                        onClick={() => handlePesanProduk(item.id)} // Mengirim ID produk saat tombol diklik
                        className="bg-[#51CB9F] text-white font-medium px-2 py-1 h-10 w-[50%] rounded-md"
                      >
                        Pesan
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="flex justify-end space-x-4 mt-8 pb-8">
            <button
              onClick={handleGoBack}
              className="bg-gray-300 px-4 py-2 rounded-lg"
            >
              Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeranjangPage;
