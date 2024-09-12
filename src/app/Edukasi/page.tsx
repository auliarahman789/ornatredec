import React from "react";
import Image from "next/image";

function page() {
  return (
    <div className="overflow-x-hidden">
      <div>
        <h1 className="text-[#3F9272] text-[45px] text-center my-[4%]">
          SELAMAT DATANG
        </h1>
      </div>
      <div className="bg-[#3F9272] w-[80%] h-[85%] mx-auto pb-8 relative z-20">
        <h1 className="text-white text-[32px] text-center pt-6 pb-6">
          Di Edukasi dasar merawat keindahan
        </h1>
        <div className="text-center pr-[15%] pl-[15%] text-white text-[22px]">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim ve
          </span>
        </div>
      </div>
      <div className="bg-[#E4FFF2] mx-auto -translate-y-[18%]">
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
                menjaga keindahan dan kesehatan koleksi Anda.
              </p>
              <p className="translate-x-[63%] mt-5">Lihat selengkapnya</p>
            </div>
          </div>
          <div className="bg-white w-[80%] h-[338px] mx-auto mt-9  shadow-[3px_5px_4px] shadow-[#0000002e]">
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
                Dapatkan informasi terbaru dan praktis tentang cara merawat Ikan
                hias di sini, dan tingkatkan pengalaman Anda dalam menjaga
                keindahan dan kesehatan koleksi Anda.
              </p>
              <p className="translate-x-[63%] mt-14">Lihat selengkapnya</p>
            </div>
          </div>
          <div className="bg-white w-[80%] h-[338px] mx-auto mt-9 shadow-[3px_5px_4px] shadow-[#0000002e]">
            <div className="flex">
              <Image
                src="/img/burung hias.png"
                width={400}
                height={434}
                alt="burung"
              />
              <h1 className="text-[40px] text-[#3F9272] font-bold text-end pl-[7.5%] pt-6">
                Edukasi Burung Hias
              </h1>
            </div>
            <div className="pl-[48%] -translate-y-56 text-[#3F9272] pr-10 text-[22px]">
              <p>
                Dapatkan informasi terbaru dan praktis tentang cara merawat
                Burung Hias di sini, dan tingkatkan pengalaman Anda dalam
                menjaga keindahan dan kesehatan koleksi Anda.
              </p>
              <p className="translate-x-[63%] mt-5">Lihat selengkapnya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
