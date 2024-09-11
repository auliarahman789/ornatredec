"use client";
import Image from "next/image";
import React, { useState } from "react";
import Burung2 from "../components/Edukasi/burung2";

function Burung() {
  const [isAnimated, setIsAnimated] = useState(false);
  return (
    <>
      <Burung2 isAnimated={isAnimated} setIsAnimated={setIsAnimated} />
      <div
        className="grid gap-0 grid-cols-2 mx-[98px] me-[100px] pb-[8%]"
        id="burung"
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
          <p className="text-[20px] me-[4%] mt-[2%] text-[#54A082]">
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
            src="/img/Daun hias.png"
            className="w-full h-auto -translate-x-[10px]"
            alt={"burung"}
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
            src="/img/burung2.png"
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
            Cara Merawat Burung Hias
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
            Makanan Yang Cocok Untuk Burung Hias
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
            src="/img/pakanburung.png"
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
            src="/img/burungmati.png"
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
            Tips Menghindari Burung Cepat Mati
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
    </>
  );
}

export default Burung;
