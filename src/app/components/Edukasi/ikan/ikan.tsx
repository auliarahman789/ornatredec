"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Ikan2 from "./ikan2";

function Ikan() {
  const [isAnimated, setIsAnimated] = useState(false);
  useEffect(() => {
    setIsAnimated(true);
  }, []);
  return (
    <>
      <Ikan2 isAnimated={isAnimated} setIsAnimated={setIsAnimated} />
      <div
        id="ikan"
        className="overflow-x-hidden grid gap-0 grid-cols-2 mx-[98px] me-[100px] pb-[8%]"
      >
        <div
          className={`${
            isAnimated
              ? "transition-transform duration-1000 ease-in-out translate-x-3 opacity-100"
              : "-translate-x-[100%] opacity-0"
          }`}
        >
          <h1 className="text-[#3F9272] font-bold text-[40px]">
            Apa Itu Ikan Hias?
          </h1>
          <p className="text-[20px] me-[4%] mt-[2%] text-[#54A082]">
            Ikan hias adalah jenis ikan yang dipelihara oleh pecinta akuarium
            atau penghobi sebagai dekorasi hidup karena keindahan yang
            dimilikinya, baik dari segi warna, bentuk tubuh, maupun pola unik
            yang terdapat pada sisik atau siripnya. Biasanya, ikan hias
            dipelihara di akuarium dalam ruangan, kolam hias di taman, atau
            bahkan tangki khusus dengan sistem yang dirancang untuk menciptakan
            ekosistem air yang nyaman bagi mereka.
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
            src="/img/ikan hias 1.png"
            className="w-full h-auto relative -translate-x-[10px]"
            alt={"ikan"}
            width={400}
            height={434}
          />
          <h1 className="cursor-pointer content text-5xl text-white w-[530px] h-[450px]">
            Selengkapnya
          </h1>
        </div>
        <div
          className={`${
            isAnimated
              ? "transition-transform duration-1000 ease-in-out translate-x-0 pe-1 opacity-100"
              : "-translate-x-[100%] opacity-0"
          }`}
        >
          <Image
            src="/img/beri makan ikan.png"
            className="w-full h-auto translate-x-[13px]"
            alt={"ikan"}
            width={550}
            height={434}
          />
          <h1 className="cursor-pointer content text-5xl text-white translate-x-3 w-[527px] h-[448px]">
            Selengkapnya
          </h1>
        </div>
        <div
          className={`transition-transform duration-1000 ease-in-out overflow-x-hidden ${
            isAnimated
              ? "translate-x-3 pe-7 ps-5 pt-5 opacity-100"
              : "translate-x-[100%] opacity-0"
          }`}
        >
          <h1 className="text-[#3F9272] font-bold text-[40px] leading-none">
            Cara Merawat Merawat Ikan Hias
          </h1>
          <p className="text-[20px] me-[5%] mt-[2%] text-[#54A082]">
            Merawat ikan hias bukan hanya soal memberi makan setiap hari, tetapi
            juga menciptakan lingkungan yang sehat dan nyaman bagi mereka. Di
            T-trana, kami menyediakan panduan praktis untuk membantu Anda
            merawat ikan hias agar tetap sehat dan memperindah akuarium Anda.
            Berikut adalah beberapa cara efektif untuk merawat ikan hias dengan
            baik
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
            Makanan Yang Cocok Untuk Ikan Hias
          </h1>
          <p className="text-[20px] me-[5%] mt-[2%] text-[#54A082]">
            Pelet atau Flakes Makanan komersial yang mudah didapat dan seimbang
            nutrisi. Cacing Sutera Sumber protein tinggi untuk pertumbuhan ikan.
            Artemia Makanan hidup yang kaya nutrisi untuk ikan kecil. Sayuran
            Seperti bayam atau selada, cocok untuk ikan herbivora. Daphnia Pakan
            hidup yang baik untuk menjaga kesehatan ikan.
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
            src="/img/makananikan.png"
            className="w-full h-auto -translate-x-[13px]"
            alt={"ikan"}
            width={550}
            height={434}
          />
          <h1 className="cursor-pointer content text-5xl text-white w-[520px] h-[450px]">
            Selengkapnya
          </h1>
        </div>
        <div
          className={`${
            isAnimated
              ? "transition-transform duration-1000 ease-in-out translate-x-0 pe-1 opacity-100"
              : "-translate-x-[100%] opacity-0"
          }`}
        >
          <Image
            src="/img/ikandiadu.png"
            className="w-full h-auto translate-x-[13px]"
            alt={"ikan"}
            width={550}
            height={434}
          />
          <h1 className="cursor-pointer content text-5xl text-white translate-x-3 w-[530px] h-[446px]">
            Selengkapnya
          </h1>
        </div>
        <div
          className={`transition-transform duration-1000 ease-in-out overflow-x-hidden ${
            isAnimated
              ? "translate-x-3 pe-7 ps-5 pt-5 opacity-100"
              : "translate-x-[100%] opacity-0"
          }`}
        >
          <h1 className="text-[#3F9272] font-bold text-[40px] leading-none">
            Tips Menghindari Ikan Tidak Cepat Mati
          </h1>
          <p className="text-[20px] me-[5%] mt-[2%] text-[#54A082]">
            agar ikan hias tidak cepat mati, pastikan untuk menjaga kualitas air
            dengan rutin menggantinya, mengatur suhu yang sesuai, memberikan
            makanan yang seimbang, tidak menaruh terlalu banyak ikan dalam satu
            akuarium, memilih ikan yang sehat saat membeli, serta memantau pH
            air agar sesuai dengan kebutuhan ikan.
          </p>
        </div>
      </div>
    </>
  );
}

export default Ikan;