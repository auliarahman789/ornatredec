import React from "react";
import Image from "next/image";

function Edukasi() {
  return (
    <main
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/img/edukasi hal.png')" }}
    >
      <div className="grid grid-cols-2 pl-28 pt-40">
        <Image
          src="/img/edukasi buku gambar.png"
          width={468}
          height={375}
          alt="gambar"
        />
        <div className="">
          <h1 className="text-6xl text-[#FFFFFF] font-bold">Edukasi</h1>
          <div className="flex">
            <Image
              src="/Bulat.png"
              width={56}
              height={56}
              alt="lingkaran"
              className="pb-8 pt-4"
            />
            <div className="flex flex-col">
              <span className="pl-4 pt-4 text-2xl text-white font-bold flex flex-col cursor-pointer">
                Cara Merawat Tanaman dengan Benar agar . .
              </span>
              <span className="pl-4 text-[#CCFFEB]">
                berikut adalah beberapa cara untuk memelihara tanaman
              </span>
            </div>
          </div>
          <div className="flex flex-row">
            <Image
              src="/Bulat.png"
              width={56}
              height={56}
              alt="lingkaran"
              className="pt-8"
            />
            <div className="flex flex-col">
              <span className="pl-4 pt-8 text-2xl text-white font-bold cursor-pointer">
                Tips and Trick merawat burung hias
              </span>
              <span className="pl-4 text-[#CCFFEB]">
                berikut adalah beberapa cara untuk memelihara burung hias
              </span>
            </div>
          </div>
          <div className="flex flex-row">
            <Image
              src="/Bulat.png"
              width={56}
              height={56}
              alt="lingkaran"
              className="pt-16"
            />
            <div className="flex flex-col">
              <span className="pl-4 text-2xl text-white font-bold cursor-pointer pt-16">
                Tips and Trick merawat ikan hias
              </span>
              <span className="pl-4 text-[#CCFFEB]">
                berikut adalah beberapa cara untuk memelihara ikan hias
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Edukasi;
