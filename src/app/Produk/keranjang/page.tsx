"use client";

import React, { useState, useEffect } from "react";
import { useKeranjang } from "./keranjangContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

const KeranjangPage = () => {
  const { keranjang, hapusDariKeranjang } = useKeranjang();
  const [showModal, setShowModal] = useState(false);
  const [produkIdTroli, setProdukIdTroli] = useState<number | null>(null);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [keranjangFromAPI, setKeranjangFromAPI] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchKeranjang = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/getTroli`
        );
        if (!response.ok) {
          throw new Error("Gagal memuat keranjang");
        }
        const data = await response.json();
        setKeranjangFromAPI(data);
      } catch (error) {
        console.error("Error:", error);
        alert("Terjadi kesalahan saat memuat keranjang.");
      }
    };

    fetchKeranjang();
  }, []);

  const totalItem = keranjangFromAPI.reduce(
    (acc, item) => acc + (item.jumlah ?? 0),
    0
  );

  const handlePesanProduk = async () => {
    if (selectedItems.length > 0) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/transaksi`,
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ produkId: selectedItems }), // Kirim data produkId
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error response:", errorData);
          throw new Error(errorData.message || "Gagal memproses pesanan");
        }

        const produkDetails = await response.json();
        console.log("Produk Details:", produkDetails);
      } catch (error) {
        console.error("Error:", error);
        alert("Terjadi kesalahan saat memproses pesanan. Silakan coba lagi.");
      }
    } else {
      alert("Pilih setidaknya satu produk untuk dipesan.");
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  const handleBukaModal = (id: number) => {
    setProdukIdTroli(id);
    setShowModal(true);
  };

  const handleKonfirmasiHapus = async () => {
    if (produkIdTroli !== null) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/hapusTroli/${produkIdTroli}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error("Gagal menghapus item dari troli");
        }

        // Hapus dari konteks keranjang setelah API berhasil
        hapusDariKeranjang(produkIdTroli);
        setProdukIdTroli(null);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Terjadi kesalahan:", error.message);
        } else {
          console.error("Kesalahan yang tidak diketahui:", error);
        }
      }
    }
    setShowModal(false);
  };

  const handleTutupModal = () => {
    setShowModal(false);
    setProdukIdTroli(null);
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(keranjangFromAPI.map((item) => item.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectItem = (id: number) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter((itemId) => itemId !== id)
        : [...prevSelectedItems, id]
    );
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
            <div className="flex flex-row">
              <span className="text-[#308967] text-2xl">Pesan Semua</span>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
                className="ml-2 mt-2"
              />
            </div>
          </div>
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
              {keranjangFromAPI.map((item: any) => (
                <div
                  key={`${item.id}-${item.variasiDipilih}`}
                  className="flex items-center p-4 bg-white rounded mt-8 space-y-6 shadow-[3px_5px_4px] shadow-[#0000002e]"
                >
                  <div className="flex flex-col">
                    <div className="text-xl font-semibold">
                      {item.judul_produk}
                    </div>
                    <div className="text-sm text-gray-600">
                      Variasi: {item.variasiDipilih}
                    </div>
                    <div className="translate-x-[670%] -translate-y-[100%]">
                      <div className="text-[#308967] text-lg font-semibold">
                        Rp. {item.harga}
                      </div>
                    </div>
                    <button
                      onClick={() => handleBukaModal(item.id)}
                      className="bg-[#FF0000] text-white px-4 py-2 rounded-lg mt-2"
                    >
                      Hapus
                    </button>
                    <div className="-translate-y-[100%] translate-x-[650%]">
                      <button className="bg-[#51CB9F] text-white font-medium px-2 py-1 h-10 w-[50%] rounded-md">
                        Pesan
                      </button>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleSelectItem(item.id)}
                    className="translate-x-[870px]"
                  />
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
