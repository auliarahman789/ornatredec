import React from "react";
import Image from "next/image";

function Forum() {
  return (
    <div className="relative h-[1075px] overflow-hidden bg-[#D9FFF0]">
      <div className="relative mt-52 z-20">
        <h1 className="text-[48px] text-[#308967] text-center font-bold">
          Forum <span className="text-[#66C09E] font-bold">Diskusi</span>
        </h1>
        <div className="relative flex justify-center translate-y-12 z-20">
          <Image
            src="/img/message.png"
            width={160}
            height={160}
            alt="apa"
            className="relative"
          />
        </div>
        <div className="bg-[#51CB9F] ml-[98px] mr-[98px] h-96 translate-y-20 relative z-20">
          <h1 className="text-[#367B60] text-[24px] text-center">
            Pembahasan <span className="text-white">Popular</span>
          </h1>
          <div className="mt-8">
            <h1 className="text-[#367B60] text-[24px] pl-4">
              Kategori <span className="text-white">Pembahasan</span>
            </h1>
            <div className="grid grid-cols-3 gap-8 pl-4 pr-4">
              <div className="bg-white h-40 relative">
                <Image
                  src="/img/tanaman.png"
                  width={100}
                  height={50}
                  alt="bunga"
                  className="mx-auto absolute top-4 left-32 cursor-pointer"
                />
                <div className="relative">
                  <span className="mx-auto absolute top-32 left-11">
                    pembahasan tentang tanaman hias
                  </span>
                </div>
              </div>

              <div className="bg-white relative">
                <Image
                  src="/img/burung.png"
                  width={100}
                  height={50}
                  alt="burung"
                  className="absolute top-4 left-32 cursor-pointer"
                />
                <div className="relative">
                  <span className="mx-auto absolute top-32 left-16">
                    pembahasan tentang ikan hias
                  </span>
                </div>
              </div>
              <div className="bg-white relative">
                <Image
                  src="/img/ikan.png"
                  width={100}
                  height={50}
                  alt="ikan"
                  className="mx-auto absolute top-4 left-32 cursor-pointer"
                />
                <div className="relative">
                  <span className="mx-auto absolute top-32 left-11">
                    pembahasan tentang burung hias
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/img/lengkung putih.png"
        width={1000}
        height={1200} // Increase height as needed
        alt="lengkungan putih"
        className="absolute bottom-0 translate-y-24 left-0 w-full h-[1250px]"
      />
    </div>
  );
}

export default Forum;
