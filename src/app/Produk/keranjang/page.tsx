"use client";
import React, { useEffect } from "react";
import { useKeranjang } from "./keranjangContext";
import Image from "next/image";

const KeranjangPage = () => {
  const { keranjang } = useKeranjang();

  useEffect(() => {
    if (keranjang.length > 0) {
      const kirimDataKeTrolli = async () => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_URL}/api/troli`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                produkIds: keranjang.map((produk) => produk.id),
              }),
            }
          );

          if (!response.ok) {
            throw new Error("Gagal mengirim data ke API Trolli");
          }

          const data = await response.json();
          console.log("Data berhasil dikirim:", data);
        } catch (error) {
          console.error("Terjadi kesalahan:", error);
        }
      };

      kirimDataKeTrolli();
    }
  }, [keranjang]);

  return (
    <div className="bg-[#E4FFF2] min-h-screen pl-6 pt-10 pr-10">
      <h1 className="text-3xl font-bold mb-6 text-[#308967]">Keranjang Anda</h1>
      <div className="border-b-2 border-[#308967]"></div>
      <div className="flex justify-between text-2xl text-[#308967] pt-5 pb-5">
        <span>Produk</span>
        <span className="mr-8">Harga</span>
      </div>
      <div className="border-b-2 border-[#308967]"></div>
      {keranjang.length === 0 ? (
        <p>Keranjang Anda kosong.</p>
      ) : (
        <div className="space-y-4">
          {keranjang.map((produk) => (
            <div
              key={produk.id}
              className="flex items-center p-4 bg-white rounded shadow"
            >
              <Image
                src={produk.foto_produk}
                alt={produk.judul_produk}
                width={80}
                height={80}
                className="rounded mr-4"
              />
              <div className="flex">
                <div>
                  <div className="text-xl font-semibold -translate-y-5">
                    {produk.judul_produk}
                  </div>
                  <div className="text-red-500 flex justify-end -translate-y-11 translate-x-[1020px]">
                    Rp. {produk.harga}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default KeranjangPage;
