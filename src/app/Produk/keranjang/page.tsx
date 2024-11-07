"use client";

import React, { useState } from "react";
import { useKeranjang } from "./keranjangContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { KeranjangItem } from "../pesanan/types";

const KeranjangPage = () => {
  const { keranjang, hapusDariKeranjang } = useKeranjang();
  const [showModal, setShowModal] = useState(false);
  const [produkIdTerpilih, setProdukIdTerpilih] = useState<number | null>(null);
  const router = useRouter();

  const handlePesanProduk = () => {
    if (keranjang.length > 0) {
      const produkIds = keranjang.map((item) => item.id).join(",");
      router.push(`../../Produk/pesanan/checkout?idProduk=${produkIds}`);
    } else {
      alert("Pilih setidaknya satu produk untuk dipesan.");
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  const handleBukaModal = (id: number) => {
    setProdukIdTerpilih(id);
    setShowModal(true);
  };

  const handleKonfirmasiHapus = () => {
    if (produkIdTerpilih !== null) {
      hapusDariKeranjang(produkIdTerpilih);
      setProdukIdTerpilih(null);
    }
    setShowModal(false);
  };

  const handleTutupModal = () => {
    setShowModal(false);
    setProdukIdTerpilih(null);
  };

  return (
    <div className="bg-[#E4FFF2] min-h-screen pl-[5%] pt-10 pr-14">
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
          {keranjang.length === 0 ? (
            <p>Keranjang Anda kosong.</p>
          ) : (
            <div className="grid gap-4 pt-6">
              {keranjang.map((item: any) => (
                <div
                  key={`${item.id}-${item.variasiDipilih}`}
                  className="flex items-center p-4 bg-white rounded mt-8 space-y-6 shadow-[3px_5px_4px] shadow-[#0000002e]"
                >
                  <Image
                    src={item.foto_produk}
                    alt={item.judul_produk}
                    width={80}
                    height={80}
                    className="rounded mr-4"
                  />
                  <div className="flex flex-col">
                    <div className="text-xl font-semibold">
                      {item.judul_produk}
                    </div>
                    <div className="text-sm text-gray-600">
                      Variasi: {item.variasiDipilih}
                    </div>
                    <div className="text-red-500">Rp. {item.harga}</div>
                    <button
                      onClick={() => handleBukaModal(item.id)}
                      className="bg-[#FF0000] text-white px-4 py-2 rounded-lg mt-2"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="flex justify-end space-x-4 mt-8">
            <button
              onClick={handleGoBack}
              className="bg-gray-300 px-4 py-2 rounded-lg"
            >
              Kembali
            </button>
            <button
              onClick={handlePesanProduk}
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-lg font-bold mb-4">Konfirmasi Hapus Produk</h2>
            <p>Apakah Anda yakin ingin menghapus produk ini dari keranjang?</p>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={handleTutupModal}
                className="bg-gray-300 px-4 py-2 rounded-lg"
              >
                Batal
              </button>
              <button
                onClick={handleKonfirmasiHapus}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KeranjangPage;
