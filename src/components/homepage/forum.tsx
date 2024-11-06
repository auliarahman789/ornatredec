import React from "react";
import Image from "next/image";
import ForumCarousel from "./carouselForum";

function Forum() {
  return (
    <div>
      <div>
        <h1 className="text-[48px] text-[rgb(48,137,103)] text-center z-50 relative font-bold"></h1>
        <div className="relative h-auto overflow-hidden bg-white">
          <div className="relative z-20">
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
            <div className="bg-[#51CB9F] ml-[8%] mr-[8%] h-[740px] translate-y-20 relative z-20">
              <h1 className="text-[#367B60] translate-y-10 text-[24px] text-center">
                Pembahasan <span className="text-white">Popular</span>
              </h1>
              <ForumCarousel/>
              <div className="mt-[7%]">
                <h1 className="text-[#367B60] text-[24px] pl-4">
                  Kategori <span className="text-white">Pembahasan</span>
                </h1>
                <div className="grid grid-cols-3 gap-8 pl-4 pr-4">
                  <div className="bg-white h-[130%] flex flex-col justify-center">
                    <Image
                      src="/img/tanaman.png"
                      width={100}
                      height={50}
                      alt="bunga"
                      className="cursor-pointer mx-auto pb-4"
                    />
                    <div className="flex justify-center text-center ">
                      <span>pembahasan tentang tanaman hias</span>
                    </div>
                  </div>

                  <div className="bg-white h-[130%] flex flex-col justify-center">
                    <Image
                      src="/img/burung.png"
                      width={100}
                      height={50}
                      alt="burung"
                      className="cursor-pointer mx-auto pb-4"
                    />
                    <div className="flex justify-center">
                      <span className="">pembahasan tentang ikan hias</span>
                    </div>
                  </div>
                  <div className="bg-white h-[130%] flex flex-col justify-center">
                    <Image
                      src="/img/ikan.png"
                      width={100}
                      height={50}
                      alt="ikan"
                      className="cursor-pointer mx-auto pb-4"
                    />
                    <div className="flex justify-center">
                      <span className="flex">
                        pembahasan tentang burung hias
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forum;
