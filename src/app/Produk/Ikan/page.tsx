"use client";
import Link from "next/link";
import React from "react";

const Ikan = ({}) => {
  return (
    <div className="pt-1" id="ikan">
      <div
        className="h-[460px] w-[100%] -translate-y-1 bg-cover"
        style={{ backgroundImage: "url('/img/IkanProduk.png')" }}
      ></div>
      <div className="text-[#000000] text-[18px] pb-4">
        <input
          type="text"
          className="w-96 p-3 border bg-[#FFFBFB] translate-x-[133%] mt-10 shadow-sm"
        />
      </div>
      <ul className="text-center space-x-10 -translate-y-3 min-h-screen text-[22px] text-white font-semibold flex justify-center mt-5">
        <Link href="/Produk/#produk">
          <li
            className="mx-2 text-3xl cursor-pointer hover:text-[#308967] text-[#B3E8D5]"
            onClick={(e) => {}}
          >
            Tanaman
          </li>
        </Link>
        <Link href="/Produk/Ikan#ikan">
          <li
            className="mx-2 text-3xl cursor-pointer text-[#308967]"
            onClick={(e) => {}}
          >
            Ikan
          </li>
          <div className="border-b-2 border-[#51CB9F]"></div>
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
    </div>
  );
};

export default Ikan;
