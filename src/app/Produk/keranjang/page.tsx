"use client";

import React, { useState, useEffect } from "react";
import { useKeranjang } from "./keranjangContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

const KeranjangPage = () => {
  const { hapusDariKeranjang } = useKeranjang();
  const [showModal, setShowModal] = useState(false);
  const [produkIdTroli, setProdukIdTroli] = useState<number | null>(null);
  const [keranjangFromAPI, setKeranjangFromAPI] = useState<any[]>([]);
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  useEffect(() => {
    const getKeranjang = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL}api/getTroli`,
          { withCredentials: true }
        );
        setKeranjangFromAPI(response.data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    getKeranjang();
  }, []);

  const totalItem = keranjangFromAPI.reduce(
    (acc, item) => acc + (item.jumlahStok ?? 0),
    0
  );

  // // const handlePesanProduk = async () => {
  // //   if (selectedItems.length > 0) {
  // //     try {
  // //       const response = await axios.post(
  // //        `${process.env.NEXT_PUBLIC_URL}/api/transaksi`,
  // //         { produkId: selectedItems },
  // //         { withCredentials: true }
  // //       );

  //       console.log("Produk Details:", response.data);
  //     } catch (err) {
  //       console.error("Error:", err);
  //       alert("Gagal memproses pesanan. Silakan coba lagi.");
  //     }
  //   }
  // };

  const simpanKeLocalStorage = (data: any) => {
    try {
      localStorage.setItem("keranjangPesan", JSON.stringify(data));
      alert("Produk berhasil disimpan ke localStorage!");
    } catch (error) {
      console.error("Gagal menyimpan ke localStorage:", error);
      alert("Gagal menyimpan data. Silakan coba lagi.");
    }
  };

  const handlePesanSemua = () => {
    const dataYangDipilih = keranjangFromAPI.filter((item) =>
      selectedItems.includes(item.id)
    );

    simpanKeLocalStorage(dataYangDipilih);
  };
  const handleKonfirmasiHapus = async () => {
    if (produkIdTroli !== null) {
      try {
        const response = await axios.delete(
          `${process.env.NEXT_PUBLIC_URL}api/hapusTroli/${produkIdTroli}`,
          { withCredentials: true }
        );
        console.log(response.data);

        setKeranjangFromAPI((prevKeranjang) =>
          prevKeranjang.filter((item) => item.id !== produkIdTroli)
        );
        alert("Produk berhasil dihapus dari keranjang.");
      } catch (err) {
        alert("Gagal menghapus produk. Silakan coba lagi.");
      } finally {
        setShowModal(false);
      }
    }
  };

  const handleTutupModal = () => {
    setShowModal(false);
    setProdukIdTroli(null);
  };

  return (
    <div className="bg-[#E4FFF2] min-h-screen pl-[5%] pt-10 pr-[15%]">
      <div className="absolute top-5 right-10 -translate-x-[60%] translate-y-8 bg-[#308967] text-white px-4 py-2 rounded-full">
        Total Item: {totalItem}
      </div>

      <div className="bg-white w-[1200px] h-auto shadow-[3px_5px_4px] shadow-[#0000002e]">
        <div className="ml-10 mr-10">
          <div className="flex items-center justify-between pt-10">
            <h1 className="text-3xl font-bold mb-6 text-[#308967]">
              Keranjang Anda
            </h1>
          </div>
          <div className="border-b-2 border-[#308967]"></div>
          <div className="flex justify-between text-2xl text-[#308967] pt-5 pb-5">
            <span>Produk</span>
            <span className="mr-8">Harga</span>
          </div>
          <div className="border-b-2 border-[#308967]"></div>
          {keranjangFromAPI.length === 0 ? (
            <div className="items-center text-center mt-[10%] flex flex-col">
              <img src="/" width={45} height={45} alt="trolli" />
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
                  <div className="w-28 h-28 mr-4 -translate-y-8">
                    <img
                      className="mx-auto mt-5 h-[125%] w-[65%] rounded cursor-pointer"
                      src={`https://74gslzvj-8000.asse.devtunnels.ms${item.produk.foto_produk}`}
                      alt={item.produk.judul_produk}
                    />
                  </div>
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
                    <div className="flex justify-end translate-x-[300%] translate-y-[120%]">
                      <div className="text-[#308967] text-2xl font-semibold">
                        Rp. {item.subvariasi.harga}
                      </div>
                    </div>
                    <div className="flex justify-between space-x-4">
                      <button
                        onClick={() => {
                          setProdukIdTroli(item.id);
                          setShowModal(true);
                        }}
                        className="bg-[#FF0000] text-white px-4 py-2 rounded-lg mt-2"
                      >
                        Hapus
                      </button>
                      <Link href="/Produk/pesanan/checkout">
                        <button
                          onClick={handlePesanSemua}
                          className="bg-green-500 text-white px-4 py-2 rounded-lg translate-y-2"
                        >
                          Pesan Sekarang
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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
