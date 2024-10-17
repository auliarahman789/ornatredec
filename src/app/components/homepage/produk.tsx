"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Produk = () => {
  const [data, setData] = useState<any[]>([]); // State untuk menampung data produk

  const formatHarga = (itung: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(itung);
  };

  useEffect(() => {
    getProduk();
  }, []);

  async function getProduk() {
    const url = `${process.env.NEXT_PUBLIC_URL}/api/filterdanGet`;
    try {
      const res = await axios.get(url, {
        // Menggunakan params untuk query string
        withCredentials: true,
      });
      setData(res.data.slice(0, 8));
      console.log(res.data); // Simpan data yang diterima ke dalam state
    } catch (error: any) {
      console.log(error);
      // alert("Terjadi kesalahan saat mengambil data produk.");
    }
  }
  console.log(data);
  return (
    // bg-[#D9FFF0]
    <div className="flex flex-col min-h-[80%] bg-[#DBFFF6]">
      <div className="bg-white my-[69px] mx-[98px] h-[800px] shadow-[12px_12px_15px] shadow-[#0000002e]">
        <div className="font-bold inline-block p-1 mt-[43px] ms-[50px]">
          <span className="text-[#308967] text-[40px]">Produk </span>
          <span className="text-[#51CB9F] text-[40px]">Kami</span>
        </div>
        <div className="px-4 grid grid-cols-4 gap-6">
          {data.map((item: any, i: number) => (
            <div
              className="w-[239px] h-[319px] bg-white shadow-[2px_8px_10px] shadow-[#0000002e]"
              key={item.id}
            >
              <a href="#">
                <Image
                  className="mx-auto mt-5 h-[65%] w-[85%]"
                  alt="Produk Gambar"
                  src={"${process.env.NEXT_PUBLIC_URL}" + item.foto_produk}
                />
              </a>
              <div className="px-4 py-2">
                <h5 className="text-lg font-semibold text-black">
                  {item.judul_produk}
                </h5>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-bold text-[#FF0A0A]">
                    Rp {formatHarga(item.harga)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Produk;
