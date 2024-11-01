"use client";
import React from "react";
import Image from "next/image";
import Footer from "../components/homepage/footer";
import Link from "next/link";

const page = ({
  isAnimated,
  setIsAnimated,
}: {
  isAnimated: any;
  setIsAnimated: any;
}) => {
  return (
    <>
      <div className="overflow-hidden bg-[#E4FFF2] pb-40">
        <div className="bg-white">
          <h1 className="text-[#3F9272] text-[45px] text-center py-[4%]">
            SELAMAT DATANG
          </h1>
          <div className="bg-[#3F9272] w-[80%] mx-auto pb-8 relative z-20">
            <h1 className="text-white text-[32px] text-center pt-6 pb-6">
              Di Edukasi dasar merawat keindahan
            </h1>
            <div className="text-center pr-[15%] pl-[15%] text-white text-[22px]">
              <span className="text-white ">
                Melalui platform web ini, Anda dapat mempelajari berbagai jenis
                ikan, tumbuhan, dan burung hias, kebutuhan khusus, serta cara
                merawat mereka dengan baik. Informasi yang diberikan mencakup
                panduan tentang cara merawat ikan, cara menanam dan merawat
                tumbuhan hias, hingga tips menjaga kesehatan burung hias agar
                tetap aktif dan sehat.
              </span>
            </div>
          </div>
        </div>
        <div className="bg-[#E4FFF2] mx-auto min-h-screen -translate-y-[18%]">
          <div className="translate-y-[24%]">
            <div className="bg-white w-[80%] h-[338px] mx-auto shadow-[3px_5px_4px] shadow-[#0000002e]">
              <div className="flex">
                <Image
                  src="/img/Daun hias.png"
                  width={400}
                  height={434}
                  alt="bunga"
                />
                <h1 className="text-[40px] text-[#3F9272] font-bold text-end pl-[7.5%] pt-6">
                  Edukasi Tanaman Hias
                </h1>
              </div>
              <div className="pl-[48%] -translate-y-56 text-[#3F9272] pr-10 text-[22px]">
                <p>
                  Dapatkan informasi terbaru dan praktis tentang cara merawat
                  tanaman hias di sini, dan tingkatkan pengalaman Anda dalam
                  menjaga keindahan dan kesehatan koleksi Anda.
                </p>
                <Link
                  href="/Edukasi/Tumbuhan#tumbuhan"
                  onClick={(e) => {
                    setIsAnimated(false);
                  }}
                >
                  <p className="translate-x-[63%] mt-14">Lihat selengkapnya</p>
                </Link>
              </div>
            </div>
            <div className="bg-white w-[80%] h-[338px] mx-auto mt-9 shadow-[3px_5px_4px] shadow-[#0000002e]">
              <div className="flex">
                <Image
                  src="/img/ikan hias 1.png"
                  width={400}
                  height={434}
                  alt="bunga"
                />
                <h1 className="text-[40px] text-[#3F9272] font-bold text-end pl-[7.5%] pt-6">
                  Edukasi Ikan Hias
                </h1>
              </div>
              <div className="pl-[48%] -translate-y-56 text-[#3F9272] pr-10 text-[22px]">
                <p>
                  Dapatkan informasi terbaru dan praktis tentang cara merawat
                  Ikan hias di sini, dan tingkatkan pengalaman Anda dalam
                  menjaga keindahan dan kesehatan koleksi Anda.
                </p>
                <Link
                  href="/Edukasi/Ikan#ikan"
                  onClick={(e) => {
                    setIsAnimated(false);
                  }}
                >
                  <p className="translate-x-[63%] mt-14">Lihat selengkapnya</p>
                </Link>
              </div>
            </div>
            <div className="bg-white w-[80%] h-[338px] mx-auto mt-9  shadow-[3px_5px_4px] shadow-[#0000002e]">
              <div className="flex">
                <Image
                  src="/img/burung hias.png"
                  width={400}
                  height={434}
                  alt="bunga"
                  className="w-[40%] h-[338px]"
                />
                <h1 className="text-[40px] text-[#3F9272] font-bold text-end pl-[7.5%] pt-6">
                  Edukasi Burung Hias
                </h1>
              </div>
              <div className="pl-[48%] -translate-y-56 text-[#3F9272] pr-10 text-[22px]">
                <p>
                  Dapatkan informasi terbaru dan praktis tentang cara merawat
                  Burung Hias di sini, dan tingkatkan pengalaman Anda dalam
                  menjaga keindahan dan kesehatan koleksi Anda.
                </p>
                <Link
                  href="/Edukasi/Burung#burung"
                  onClick={(e) => {
                    setIsAnimated(false);
                  }}
                >
                  <p className="translate-x-[63%] mt-14">Lihat selengkapnya</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
