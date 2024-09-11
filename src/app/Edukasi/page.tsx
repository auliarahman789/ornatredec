import React from "react";
import Image from "next/image";

function page() {
  return (
    <div>
      <div>
        <h1 className="text-[#3F9272] text-[45px] text-center translate-y-20">
          SELAMAT DATANG
        </h1>
      </div>
      <div className="bg-[#3F9272] w-[80%] h-[65%] mx-auto pb-8 translate-y-48">
        <h1 className="text-white text-[32px] text-center pt-6 pb-6">
          Di Edukasi dasar merawat keindahan
        </h1>
        <div className="text-center pr-[15%] pl-[15%] text-white text-[24px]">
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
      <div className="bg-[#E4FFF2] min-h-screen mx-auto">
        <div className="translate-y-72">
          <div className="bg-white w-[80%] mx-auto">
            <div className="flex flex-row">
              <Image
                src="/img/Daun hias.png"
                width={400}
                height={434}
                alt="bunga"
              />
              <h1 className="text-[40px] text-[#3F9272] font-bold text-end pl-[10%] pt-6">
                Edukasi Tanaman Hias djgj
              </h1>
            </div>
            <div className="pl-[48%] -translate-y-56 text-[#3F9272] pr-10 text-[24px]">
              <p>
                Dapatkan informasi terbaru dan praktis tentang cara merawat
                tanaman hias di sini, dan tingkatkan pengalaman Anda dalam
                menjaga keindahan dan kesehatan koleksi Anda.
              </p>
            </div>
          </div>
          <div className="bg-black min-h-screen"></div>
          <div className="bg-green-700 min-h-screen"></div>
        </div>
      </div>
    </div>
  );
}

export default page;
