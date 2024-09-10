import React from "react";
import Image from "next/image";

function Ikan() {
  return (
    <div id="Ikan">
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
          <li className="mx-2 cursor-pointer" id="Ikan">
            Ikan hias
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
            <h1 className="text-[40px] font-bold text-[#3F9272]">
              Apa itu ikan hias?
              <p className="text-[20px] me-[4%] mt-[2%] text-[#54A082]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
                molestias totam iste ad! Est deleniti aperiam aliquam suscipit
                consequuntur consectetur at hic quasi, aspernatur tempora.
                Quaerat soluta alias corporis ipsum!
              </p>
            </h1>
          </div>
          <div>
            <Image
              src="/img/ikan hias 1.png"
              width={555}
              height={80}
              alt="bunga"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 min-h-screen bg-[#E4FFF2] -translate-y-[28%]">
          <div className="pl-[17%]">
            <Image
              src="/img/beri makan ikan.png"
              width={555}
              height={80}
              alt="bunga"
            />
          </div>
          <div>
            <h1 className="text-[40px] text-center pr-[12%] pt-[2%] font-bold text-[#3F9272]">
              Cara merawat merawat ikan hias
              <p className="text-[20px] me-[4%] mt-[2%] text-[#54A082]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam autem excepturi minus numquam, cum id fugiat possimus voluptatibus sequi amet voluptatem nisi fugit doloremque exercitationem eos sapiente architecto libero pariatur!</p>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ikan;
