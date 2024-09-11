"use client";
import Image from "next/image";
import React, { useState } from "react";
import Tanaman2 from "./tanaman2";
import Footer from "../../homepage/footer";

function Tanaman() {
  const [isAnimated, setIsAnimated] = useState(false);
  return (
    <div className="bg-[#DBFFF6]">
      <Tanaman2 isAnimated={isAnimated} setIsAnimated={setIsAnimated} />
      <div
        id="tumbuhan"
        className="grid gap-0 grid-cols-2 mx-[98px] me-[100px] pb-[8%] "
      >
        <div
          className={`${
            isAnimated
              ? "transition-transform duration-1000 ease-in-out translate-x-3 opacity-100"
              : "-translate-x-[100%] opacity-0"
          }`}
        >
          <h1 className="text-[#3F9272] font-bold text-[40px]">
            Tujuan Merawat Tanaman
          </h1>
          <p className="text-[20px] me-[4%] mt-[4%] text-[#54A082] text-justify">
            Merawat tanaman hias memiliki tujuan yang penting, seperti
            memperindah ruangan dan menghadirkan nuansa alami yang menenangkan.
            Selain itu, tanaman hias berperan dalam meningkatkan kualitas udara
            dengan menyaring polutan, sehingga udara di sekitar menjadi lebih
            bersih dan segar. Kegiatan ini juga memberikan efek relaksasi,
            membantu mengurangi stres, dan menciptakan lingkungan yang lebih
            nyaman. Tak hanya itu, merawat tanaman juga berdampak positif pada
            kesehatan mental dan emosional. Oleh karena itu, tanaman hias tidak
            hanya mempercantik lingkungan, tetapi juga berkontribusi terhadap
            kualitas hidup
          </p>
        </div>
        <div
          className={`transition-transform duration-1000 ease-in-out overflow-x-hidden ${
            isAnimated
              ? "translate-x-2 opacity-100"
              : "translate-x-[100%] opacity-0"
          }`}
        >
          <Image
            src="/img/Daun hias.png"
            className="w-full h-auto -translate-x-[10px]"
            alt={"daun"}
            width={400}
            height={434}
          />
        </div>
        <div
          className={`${
            isAnimated
              ? "transition-transform duration-1000 ease-in-out translate-x-0 pe-1 opacity-100"
              : "-translate-x-[100%] opacity-0"
          }`}
        >
          <Image
            src="/img/tan2.png"
            className="w-full h-auto translate-x-[13px]"
            alt={"burung"}
            width={550}
            height={434}
          />
        </div>
        <div
          className={`transition-transform duration-1000 ease-in-out overflow-x-hidden ${
            isAnimated
              ? "translate-x-3 pe-7 ps-5 pt-5 opacity-100"
              : "translate-x-[100%] opacity-0"
          }`}
        >
          <h1 className="text-[#3F9272] font-bold text-[40px] leading-none">
            Cara Merawat Tanaman Hias
          </h1>
          <p className="text-[20px] me-[5%] mt-[2%] text-[#54A082]">
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore mag
          </p>
        </div>
        <div
          className={`${
            isAnimated
              ? "transition-transform duration-1000 ease-in-out translate-x-3 opacity-100 pt-5"
              : "-translate-x-[100%] opacity-0"
          }`}
        >
          <h1 className="text-[#3F9272] font-bold text-[40px] leading-none">
            Waktu Yang Baik Untuk Merawat Tanaman
          </h1>
          <p className="text-[20px] me-[5%] mt-[2%] text-[#54A082]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim ve
          </p>
        </div>
        <div
          className={`transition-transform duration-1000 ease-in-out overflow-x-hidden ${
            isAnimated
              ? "translate-x-2 opacity-100"
              : "translate-x-[100%] opacity-0"
          }`}
        >
          <Image
            src="/img/tan3.png"
            className="w-full h-auto -translate-x-[13px]"
            alt={"burung"}
            width={550}
            height={434}
          />
        </div>
        <div
          className={`${
            isAnimated
              ? "transition-transform duration-1000 ease-in-out translate-x-0 pe-1 opacity-100"
              : "-translate-x-[100%] opacity-0"
          }`}
        >
          <Image
            src="/img/tan4.png"
            className="w-full h-auto translate-x-[13px]"
            alt={"burung"}
            width={550}
            height={434}
          />
        </div>
        <div
          className={`transition-transform duration-1000 ease-in-out overflow-x-hidden ${
            isAnimated
              ? "translate-x-3 pe-7 ps-5 pt-5 opacity-100"
              : "translate-x-[100%] opacity-0"
          }`}
        >
          <h1 className="text-[#3F9272] font-bold text-[40px] leading-none">
            Penyebab Tanaman Sakit
          </h1>
          <p className="text-[20px] me-[5%] mt-[2%] text-[#54A082]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim ve
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Tanaman;
