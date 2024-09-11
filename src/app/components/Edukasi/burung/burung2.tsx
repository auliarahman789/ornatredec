import Link from "next/link";
import React from "react";

const Burung2 = ({
  isAnimated,
  setIsAnimated,
}: {
  isAnimated: any;
  setIsAnimated: any;
}) => {
  return (
    <div className="pt-1 ">
      <div
        className="relative mt-[40px] mx-[100px] w-[84%] h-[415px] bg-cover"
        style={{ backgroundImage: "url('/img/bgburung.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] to-[#d9d9d970] ps-8 pt-[10%]">
          <h1 className="text-5xl font-bold text-white">Edukasi</h1>
          <p className="w-[56%] text-[27px] text-white mt-2">
            Dapatkan informasi terbaru dan praktis tentang cara merawat Burung
            Hias di sini, dan tingkatkan pengalaman Anda dalam menjaga keindahan
            dan kesehatan koleksi Anda.
          </p>
        </div>
      </div>
      <ul className="text-center space-x-10 -translate-y-14 text-[22px] text-white font-semibold flex justify-center mt-5">
        <Link href='/Edukasi/Tanaman'>
        <li className="mx-2 cursor-pointer">Tanaman</li>
        </Link>
        <Link href='/Edukasi/Ikan'>
        <li className="mx-2 cursor-pointer">Ikan</li>
        </Link>
        <Link href='#burung'>
        <li className="mx-2 cursor-pointer text-[#89FFD2]"  onClick={(e) => {setIsAnimated(true);}}>Burung</li>
        </Link>
      </ul>
    </div>
  );
};

export default Burung2;
