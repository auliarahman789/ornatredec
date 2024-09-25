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
      <ul className="text-center space-x-10 -translate-y-3 min-h-screen text-[22px] text-white font-semibold flex justify-center mt-5">
        <Link href="/Produk/Tanaman#tanaman">
          <li
            className="mx-2 cursor-pointer text-[#308967]"
            onClick={(e) => {}}
          >
            Tanaman
          </li>
        </Link>
        <Link href="/Produk/Ikan#ikan">
          <li
            className="mx-2 cursor-pointer text-[#B3E8D5]"
            onClick={(e) => {}}
          >
            Ikan
          </li>
        </Link>
        <Link href="/Produk/Burung#burung">
          <li
            className="mx-2 cursor-pointer text-[#B3E8D5]"
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
