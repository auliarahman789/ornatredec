import React from "react";
import foto from "../../../../../public/icon/foto profile.svg";
import mata from "../../../../../public/icon/mata.svg";
import chat2 from "../../../../../public/icon/chat2.svg";
import Image from "next/image";

function Trending() {
  return (
    <div className="flex">
      <div className="space-y-3">
        <div className="flex items-start  ml-[4%]">
          {/* Card Putih */}
          <div className="w-[74%] h-[90px] pe-5 bg-white shadow-[3px_4px_4px,-3px_6px_4px] shadow-[#0000002d]">
            <div className="flex">
              <div className="flex-col ms-[4%] mt-[2%]">
                <Image
                  src={foto}
                  width={75}
                  height={75}
                  alt="foto profil"
                  className="rounded-full"
                />
                <button className="bg-[#3F9272] w-[70%] h-[15%] rounded ms-[20%] mt-[7%] text-white font-semibold text-[8px]">
                  Lihat
                </button>
              </div>
              <div className="ms-[5%] flex-col space-y-1">
                <div className="flex space-x-2 mt-[3%] mb-[2%]">
                  <p className="text-[11px] text-[#21B892] mt-1">Padimas_223</p>
                </div>
                <p className="font-medium text-[15px] leading-none text-[#323735]">
                  Tanaman Kaktus Tidak Perlu di siram?
                </p>

                <div className="flex pt-[3%] translate-x-[50%]">
                  <Image src={mata} width={15} height={15} alt="foto profil" />
                  <p className="ms-1 font-light mt-1 text-[9px] text-[#323735]">
                    500
                  </p>
                  <Image
                    src={chat2}
                    className="ms-3"
                    width={15}
                    height={15}
                    alt="foto profil"
                  />
                  <p className="font-light ms-1 mt-1 text-[9px] text-[#323735]">
                    500
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Elemen di luar card putih */}
          <div className="mt-[4.5%] ms-[20%]">
            <div className="text-[#E1FF6A] text-[40px] font-semibold text-center">
              1
            </div>
          </div>
        </div>

        <div className="flex items-start mt-[10px] ml-[4%]">
          {/* Card Putih */}
          <div className="w-[80%] h-[90px] pe-5 bg-white shadow-[3px_4px_4px,-3px_6px_4px] shadow-[#0000002d]">
            <div className="flex">
              <div className="flex-col ms-[4%] mt-[2%]">
                <Image
                  src={foto}
                  width={75}
                  height={75}
                  alt="foto profil"
                  className="rounded-full"
                />
                <button className="bg-[#3F9272] w-[70%] h-[15%] rounded ms-[20%] mt-[7%] text-white font-semibold text-[8px]">
                  Lihat
                </button>
              </div>
              <div className="ms-[5%] flex-col space-y-1">
                <div className="flex space-x-2 mt-[3%] mb-[2%]">
                  <p className="text-[11px] text-[#21B892] mt-1">Padimas_223</p>
                </div>
                <p className="font-medium text-[15px] leading-none text-[#323735]">
                  Tanaman Kaktus Tidak Perlu di siram?
                </p>

                <div className="flex pt-[3%] translate-x-[50%]">
                  <Image src={mata} width={15} height={15} alt="foto profil" />
                  <p className="ms-1 font-light mt-1 text-[9px] text-[#323735]">
                    500
                  </p>
                  <Image
                    src={chat2}
                    className="ms-3"
                    width={15}
                    height={15}
                    alt="foto profil"
                  />
                  <p className="font-light ms-1 mt-1 text-[9px] text-[#323735]">
                    500
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Elemen di luar card putih */}
          <div className="mt-[4.5%] ms-[20%]">
            <div className="text-white text-[40px] font-semibold text-center">
              2
            </div>
          </div>
        </div>

        <div className="flex items-start mt-[10px] ml-[4%]">
          {/* Card Putih */}
          <div className="w-[80%] h-[90px] pe-5 bg-white shadow-[3px_4px_4px,-3px_6px_4px] shadow-[#0000002d]">
            <div className="flex">
              <div className="flex-col ms-[4%] mt-[2%]">
                <Image
                  src={foto}
                  width={75}
                  height={75}
                  alt="foto profil"
                  className="rounded-full"
                />
                <button className="bg-[#3F9272] w-[70%] h-[15%] rounded ms-[20%] mt-[7%] text-white font-semibold text-[8px]">
                  Lihat
                </button>
              </div>
              <div className="ms-[5%] flex-col space-y-1">
                <div className="flex space-x-2 mt-[3%] mb-[2%]">
                  <p className="text-[11px] text-[#21B892] mt-1">Padimas_223</p>
                </div>
                <p className="font-medium text-[15px] leading-none text-[#323735]">
                  Tanaman Kaktus Tidak Perlu di siram?
                </p>

                <div className="flex pt-[3%] translate-x-[50%]">
                  <Image src={mata} width={15} height={15} alt="foto profil" />
                  <p className="ms-1 font-light mt-1 text-[9px] text-[#323735]">
                    500
                  </p>
                  <Image
                    src={chat2}
                    className="ms-3"
                    width={15}
                    height={15}
                    alt="foto profil"
                  />
                  <p className="font-light ms-1 mt-1 text-[9px] text-[#323735]">
                    500
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Elemen di luar card putih */}
          <div className="mt-[4.5%] ms-[20%]">
            <div className="text-white text-[40px] font-semibold text-center">
              3
            </div>
          </div>
        </div>

        <div className="flex items-start mt-[10px] ml-[4%]">
          {/* Card Putih */}
          <div className="w-[80%] h-[90px] pe-5 bg-white shadow-[3px_4px_4px,-3px_6px_4px] shadow-[#0000002d]">
            <div className="flex">
              <div className="flex-col ms-[4%] mt-[2%]">
                <Image
                  src={foto}
                  width={75}
                  height={75}
                  alt="foto profil"
                  className="rounded-full"
                />
                <button className="bg-[#3F9272] w-[70%] h-[15%] rounded ms-[20%] mt-[7%] text-white font-semibold text-[8px]">
                  Lihat
                </button>
              </div>
              <div className="ms-[5%] flex-col space-y-1">
                <div className="flex space-x-2 mt-[3%] mb-[2%]">
                  <p className="text-[11px] text-[#21B892] mt-1">Padimas_223</p>
                </div>
                <p className="font-medium text-[15px] leading-none text-[#323735]">
                  Tanaman Kaktus Tidak Perlu di siram?
                </p>

                <div className="flex pt-[3%] translate-x-[50%]">
                  <Image src={mata} width={15} height={15} alt="foto profil" />
                  <p className="ms-1 font-light mt-1 text-[9px] text-[#323735]">
                    500
                  </p>
                  <Image
                    src={chat2}
                    className="ms-3"
                    width={15}
                    height={15}
                    alt="foto profil"
                  />
                  <p className="font-light ms-1 mt-1 text-[9px] text-[#323735]">
                    500
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Elemen di luar card putih */}
          <div className="mt-[4.5%] ms-[20%]">
            <div className="text-white text-[40px] font-semibold text-center">
              4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
