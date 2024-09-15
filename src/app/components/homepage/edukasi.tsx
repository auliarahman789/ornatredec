import React from "react";
import Image from "next/image";
import Link from "next/link";

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
          <h1 className="text-6xl text-[#FFFFFF] font-bold pb-[13px]">
            Edukasi
          </h1>
          <div className="flex">
            <Image
              src="/img/Bulat.png"
              width={56}
              height={56}
              alt="lingkaran"
              className="pb-8 pt-6"
            />
            <div className="flex flex-col">
              <span className="pl-4 pt-[13px] text-[32px] text-white font-bold cursor-pointer">
                Tanaman Hias
              </span>
              <span className="pl-5 text-[#CCFFEB] text-[20px] ">
                tips and trick merawat.....
                <span className="text-white text-2xl">Baca selengkapnya</span>
              </span>
            </div>
          </div>
          <div className="flex flex-row">
            <Image
              src="/img/Bulat.png"
              width={56}
              height={56}
              alt="lingkaran"
              className="pt-6 pb-8"
            />
            <div className="flex flex-col">
              <span className="pl-4 pt-4 text-[32px] text-white font-bold cursor-pointer">
                Ikan Hias
              </span>
              <span className="pl-5 text-[#CCFFEB] text-[20px] ">
                tips and trick merawat.....
                <span className="text-white text-2xl">Baca selengkapnya</span>
              </span>
            </div>
          </div>
          <div className="flex flex-row">
            <Image
              src="/img/Bulat.png"
              width={56}
              height={56}
              alt="lingkaran"
              className="pt-6 pb-8"
            />
            <div className="flex flex-col">
              <span className="pl-4 text-[32px] text-white font-bold cursor-pointer pt-6">
                Burung Hias
              </span>
              <span className="pl-5 text-[#CCFFEB] text-[20px] ">
                tips and trick merawat.....
                <Link href="/Edukasi">
                  <span className="text-white text-2xl">Baca selengkapnya</span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Edukasi;
