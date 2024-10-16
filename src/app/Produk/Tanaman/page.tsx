"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Tanaman = ({}) => {
  const [data, setData] = useState<any[]>([]); // State untuk menampung data produk

  useEffect(() => {
    getTanaman();
  }, []);

  async function getTanaman() {
    const url = `${process.env.NEXT_PUBLIC_URL}/api/getProduk`;
    try {
      const res = await axios.get(url, {
        // Menggunakan params untuk query string
        withCredentials: true,
      });
      setData(res.data.slice(0, 8));
      console.log(res.data); // Simpan data yang diterima ke dalam state
    } catch (error: any) {
      console.log(error);
      alert("Terjadi kesalahan saat mengambil data produk.");
    }
  }
  console.log(data);
  return (
    <div className="bg-white">
      <div className="pt-1" id="tanaman">
        <div
          className="h-[455px] w-[100%] -translate-y-1 bg-cover"
          style={{ backgroundImage: "url('/img/TanamanProduk1.png')" }}
        ></div>
        <div className="text-[#000000] text-[18px] pb-4">
          <input
            type="text"
            className="w-96 p-3 border bg-[#FFFBFB] translate-x-[133%] mt-10 shadow-sm"
          />
        </div>

        <ul className="text-center space-x-10 -translate-y-3 min-h-screen text-[22px] text-white font-semibold flex justify-center mt-5">
          <Link href="/Produk/Tanaman#tanaman">
            <li
              className="mx-2 text-3xl cursor-pointer text-[#308967]"
              onClick={(e) => {}}
            >
              Tanaman
            </li>
            <div className="border-b-2 border-[#51CB9F]"></div>
          </Link>
          <Link href="/Produk/Ikan#ikan">
            <li
              className="mx-2 text-3xl cursor-pointer hover:text-[#308967] text-[#B3E8D5]"
              onClick={(e) => {}}
            >
              Ikan
            </li>
          </Link>
          <Link href="/Produk/Burung#burung">
            <li
              className="mx-2 text-3xl cursor-pointer hover:text-[#308967] text-[#B3E8D5]"
              onClick={(e) => {}}
            >
              Burung
            </li>
          </Link>
        </ul>
        <div className="grid grid-cols-4 mx-auto -translate-y-[90%] bg-[#EBFFF8] justify-between ml-[5%] mr-[5%]">
          {data.map((item: any, i: number) => (
            <div
              className="w-[70%] h-[95%] bg-white shadow-[2px_8px_10px] shadow-[#0000002e] ml-[15%]"
              key={item.id}
            >
              <a href="#">
                <img
                  className="mx-auto mt-5 h-[70%] w-[150%]"
                  alt="Produk Gambar"
                  src={
                    "https://74gslzvj-8000.asse.devtunnels.ms/uploads/" +
                    item.foto_produk
                  }
                />
              </a>
              <div className="px-4 py-2">
                <h5 className="text-lg font-semibold text-black">
                  {item.judul_produk}
                </h5>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-bold text-[#FF0A0A]">
                    Rp {item.harga}
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

export default Tanaman;
