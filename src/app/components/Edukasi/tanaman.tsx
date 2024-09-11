import React from "react";
import Image from "next/image";
import Footer from "../homepage/footer";

function Tanaman() {
  return (
    <div id="Tanaman">
      <div className="pt-1 ">
        <div
          className="relative mt-[40px] mx-[100px] w-[84%] h-[415px] bg-cover"
          style={{ backgroundImage: "url('/img/judul.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] to-[#d9d9d970] ps-8 pt-[10%]">
            <h1 className="text-5xl font-bold text-white">Edukasi</h1>
            <p className="w-[56%] text-[27px] text-white mt-2">
              Dapatkan informasi terbaru dan praktis tentang cara merawat ikan,
              burung, dan tanaman hias di sini, dan tingkatkan pengalaman Anda
              dalam menjaga keindahan dan kesehatan koleksi Anda.
            </p>
          </div>
        </div>
        <ul className="text-center space-x-10 -translate-y-14 text-[22px] text-white font-semibold flex justify-center mt-5">
          <li className="mx-2 cursor-pointer" id="Tanaman">
            Tanaman
          </li>
          <li className="mx-2 cursor-pointer">
            <div id="Ikan">Ikan</div>
          </li>
          <li className="mx-2 cursor-pointer" id="Burung">
            Burung
          </li>
        </ul>
      </div>
      <div id="Tanaman">
        <div className="grid grid-cols-2 bg-[#E4FFF2] min-h-screen">
          <div className="flex justify-start pl-[17%]">
            <div className="flex flex-col">
              <h1 className="text-[40px] font-bold text-[#3F9272]">
                Tujuan Merawat Tanaman
              </h1>
              <p className="text-[#54A082] text-[24px] text-justify pr-6">
                Tanaman hias adalah jenis tanaman yang ditanam dan dipelihara
                untuk tujuan dekoratif, baik di dalam maupun di luar ruangan.
                Tanaman hias dipilih karena keindahan daun, bunga, atau
                bentuknya yang unik dan menarik. Selain sebagai elemen estetika,
                tanaman hias juga dapat memberikan manfaat lain seperti
                meningkatkan kualitas udara, menciptakan suasana yang lebih
                sejuk, dan menambah kesegaran di sekitar lingkungan.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/img/Daun hias.png"
              width={555}
              height={80}
              alt="bunga"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 min-h-screen bg-[#E4FFF2] -translate-y-[28%]">
          <div className="pl-[17%]">
            <Image src="/img/tan2.png" width={555} height={80} alt="bunga" />
          </div>
          <div>
            <h1 className="text-[40px] text-center pr-[12%] pt-[2%] font-bold text-[#3F9272]">
              Cara Merawat Tanaman
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 bg-[#E4FFF2] min-h-screen -translate-y-[56%]">
          <div className="flex justify-start pt-[2%] pl-[17%]">
            <h1 className="text-[40px] font-bold text-[#3F9272] text-center">
              Waktu yang tepat menyiram tanaman
            </h1>
          </div>
          <div>
            <Image src="/img/tan3.png" width={555} height={80} alt="bunga" />
          </div>
        </div>
        <div className="grid grid-cols-2 min-h-screen bg-[#E4FFF2] -translate-y-[85%]">
          <div className="pl-[17%]">
            <Image src="/img/tan4.png" width={555} height={80} alt="bunga" />
          </div>
          <div>
            <h1 className="text-[40px] text-center pr-[12%] pt-[2%] font-bold text-[#3F9272]">
              Cara Tanaman sehat
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tanaman;
