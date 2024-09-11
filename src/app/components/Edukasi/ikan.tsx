import React from "react";
import Image from "next/image";

function Ikan() {
  return (
    <div id="Ikan">
      <div className="pt-1 ">
        <div
          className="relative mt-[40px] mx-[100px] w-[84%] h-[415px] bg-cover"
          style={{ backgroundImage: "url('/img/koi.png')" }}
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
              width={530}
              height={80}
              alt="bunga"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 min-h-screen bg-[#E4FFF2] -translate-y-[28%]">
          <div className="pl-[14%]">
            <Image
              src="/img/beri makan ikan.png"
              width={555}
              height={80}
              alt="bunga"
            />
          </div>
          <div>
            <h1 className="text-[40px] text-center pr-[12%] pt-[2%] font-bold text-[#3F9272]">
              Cara merawat ikan
              <p className="text-[20px] me-[4%] mt-[2%] text-[#54A082]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                autem excepturi minus numquam, cum id fugiat possimus
                voluptatibus sequi amet voluptatem nisi fugit doloremque
                exercitationem eos sapiente architecto libero pariatur!
              </p>
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 bg-[#E4FFF2] min-h-screen">
          <div className="flex justify-start pl-[17%]">
            <h1 className="text-[40px] font-bold text-[#3F9272] -translate-y-64">
              Makanan Yang Cocok Untuk Ikan Hias
              <p className="text-[20px] me-[4%] mt-[2%] text-[#54A082]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
                molestias totam iste ad! Est deleniti aperiam aliquam suscipit
                consequuntur consectetur at hic quasi, aspernatur tempora.
                Quaerat soluta alias corporis ipsum!
              </p>
            </h1>
          </div>
          <div className="-translate-y-72">
            <Image
              src="/img/makananikan.png"
              width={555}
              height={80}
              alt="bunga"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 min-h-screen bg-[#E4FFF2] -translate-y-[28%]">
          <div className="pl-[17%] -translate-y-60">
            <Image
              src="/img/ikandiadu.png"
              width={555}
              height={80}
              alt="bunga"
            />
          </div>
          <h1 className="text-[40px] font-bold text-[#3F9272] -translate-y-56">
            Makanan Yang Cocok Untuk Ikan Hias
            <p className="text-[20px] me-[4%] mt-[2%] text-[#54A082]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
              molestias totam iste ad! Est deleniti aperiam aliquam suscipit
              consequuntur consectetur at hic quasi, aspernatur tempora. Quaerat
              soluta alias corporis ipsum!
            </p>
          </h1>
        </div>
        <div className="-translate-y-96">
          <footer>
            <div className="grid grid-cols-2 h-60 w-full bg-[#D9FFF0] ">
              <div className=" pl-24 pt-16 pr-[10%]">
                <Image
                  src="icon/logo.svg"
                  width={150}
                  height={150}
                  alt="logo"
                />
                <span className="text-[16px] text-[#308967]">
                  T-trana adalah web yang meyediakan fitur seperti forum untuk
                  penggemar, edukasi tentang tanaman hias,burung hias dan ikan
                  hias juga menyediakan laman untuk jual beli
                </span>
              </div>
              <div className="space-x-24 text-[#3F9272] pt-20 text-[29px]">
                <span>About</span>
                <span>Kontak</span>
                <span>Social Media</span>
                <div className="flex flex-row">
                  <span className="text-[20px] -translate-x-24 pt-4">
                    kata kata
                  </span>
                  <p className="text-xl text-[#3F9272] -translate-x-10 pt-4">
                    +6283890485363
                  </p>
                  <div className="pl-[3%] flex flex-row pt-2 space-x-2">
                    <Image src="/img/ig.png" width={50} height={25} alt="ig" />
                    <Image
                      src="/img/whats app.png"
                      width={65}
                      height={25}
                      alt="wa"
                    />
                    <Image
                      src="/img/twitter.png"
                      width={60}
                      height={25}
                      alt="tw"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-1">
              <div className="bg-[#D9FFF0] h-8 pl-24 pr-24">
                <div className="border-b-2 border-[#51CB9F]"></div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Ikan;
