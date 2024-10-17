import React from "react";
import foto from "../../../../../public/icon/foto profile.svg";
import mata from "../../../../../public/icon/mata.svg";
import chat2 from "../../../../../public/icon/chat2.svg";
import Image from "next/image";

function Card3() {
  return (
    <div className="flex">
      <div className=" bg-[#EBFFF7] w-[650px] h-[1105px] rounded-lg ms-[3%] mt-[0.5%]">
        <div className="space-y-7 pt-[2%]">
          <div className="flex items-start mt-[10px] ml-[4%]">
            {/* Card Putih */}
            <div className="w-[81%] h-[190px] bg-white shadow-[3px_4px_4px,-3px_6px_4px] shadow-[#0000002d]">
              <div className="flex">
                <div className="flex-col">
                  <Image
                    src="/img/kaktus.png"
                    width={100}
                    height={100}
                    alt="kaktus"
                    className="w-[150%] h-[150px]"
                  />
                  <button className="bg-[#3F9272] w-[50%] rounded ms-[25%] mt-[7%] text-white font-semibold text-[12px]">
                    Atur
                  </button>
                </div>
                <div className="ms-[5%] flex-col space-y-1">
                  <div className="flex space-x-2 mt-[3%] mb-[2%]">
                    <Image
                      src={foto}
                      width={30}
                      height={30}
                      alt="foto profil"
                      className="rounded-full"
                    />
                    <p className="text-[15px] text-[#21B892] mt-1">Kevin</p>
                  </div>
                  <p className="font-medium text-[20px] leading-none text-[#323735]">
                    Tanaman Kaktus Tidak Perlu di siram?
                  </p>
                  <p className="font-light text-[12px]">
                    Ulasan dari <span className="text-[#005DE8]">Kevin</span>{" "}
                    pada 23-03-2023
                  </p>
                  <button className="bg-[#C2FFE8] p-[2px] rounded w-[35%] text-[#06612B] font-light text-[12px]">
                    Tanaman
                  </button>

                  <div className="flex pt-[7%] translate-x-[50%]">
                    <Image
                      src={mata}
                      width={20}
                      height={20}
                      alt="foto profil"
                    />
                    <p className="ms-1 font-light mt-1 text-[12px] text-[#323735]">
                      500
                    </p>
                    <Image
                      src={chat2}
                      className="ms-3"
                      width={20}
                      height={20}
                      alt="foto profil"
                    />
                    <p className="font-light ms-1 mt-1 text-[12px] text-[#323735]">
                      500
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Elemen di luar card putih */}
            <div className="mx-auto flex flex-col items-center justify-center">
              <div className="text-white text-sm text-center">100</div>
              <div className="flex items-center justify-center bg-red-600 h-[8%] w-[85%] rounded-full text-sm text-white">
                i
              </div>
            </div>
          </div>

          <div className="flex items-start mt-[10px] ml-[4%]">
            {/* Card Putih */}
            <div className="w-[81%] h-[190px] bg-white shadow-[3px_4px_4px,-3px_6px_4px] shadow-[#0000002d]">
              <div className="flex">
                <div className="flex-col">
                  <Image
                    src="/img/kaktus.png"
                    width={100}
                    height={100}
                    alt="kaktus"
                    className="w-[150%] h-[150px]"
                  />
                  <button className="bg-[#3F9272] w-[50%] rounded ms-[25%] mt-[7%] text-white font-semibold text-[12px]">
                    Atur
                  </button>
                </div>
                <div className="ms-[5%] flex-col space-y-1">
                  <div className="flex space-x-2 mt-[3%] mb-[2%]">
                    <Image
                      src={foto}
                      width={30}
                      height={30}
                      alt="foto profil"
                      className="rounded-full"
                    />
                    <p className="text-[15px] text-[#21B892] mt-1">Kevin</p>
                  </div>
                  <p className="font-medium text-[20px] leading-none text-[#323735]">
                    Tanaman Kaktus Tidak Perlu di siram?
                  </p>
                  <p className="font-light text-[12px]">
                    Ulasan dari <span className="text-[#005DE8]">Kevin</span>{" "}
                    pada 23-03-2023
                  </p>
                  <button className="bg-[#C2FFE8] p-[2px] rounded w-[35%] text-[#06612B] font-light text-[12px]">
                    Tanaman
                  </button>

                  <div className="flex pt-[7%] translate-x-[50%]">
                    <Image
                      src={mata}
                      width={20}
                      height={20}
                      alt="foto profil"
                    />
                    <p className="ms-1 font-light mt-1 text-[12px] text-[#323735]">
                      500
                    </p>
                    <Image
                      src={chat2}
                      className="ms-3"
                      width={20}
                      height={20}
                      alt="foto profil"
                    />
                    <p className="font-light ms-1 mt-1 text-[12px] text-[#323735]">
                      500
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Elemen di luar card putih */}
            <div className="mx-auto flex flex-col items-center justify-center">
              <div className="text-white text-sm text-center">100</div>
              <div className="flex items-center justify-center bg-red-600 h-[8%] w-[85%] rounded-full text-sm text-white">
                i
              </div>
            </div>
          </div>

          <div className="flex items-start mt-[10px] ml-[4%]">
            {/* Card Putih */}
            <div className="w-[81%] h-[190px] bg-white shadow-[3px_4px_4px,-3px_6px_4px] shadow-[#0000002d]">
              <div className="flex">
                <div className="flex-col">
                  <Image
                    src="/img/kaktus.png"
                    width={100}
                    height={100}
                    alt="kaktus"
                    className="w-[150%] h-[150px]"
                  />
                  <button className="bg-[#3F9272] w-[50%] rounded ms-[25%] mt-[7%] text-white font-semibold text-[12px]">
                    Atur
                  </button>
                </div>
                <div className="ms-[5%] flex-col space-y-1">
                  <div className="flex space-x-2 mt-[3%] mb-[2%]">
                    <Image
                      src={foto}
                      width={30}
                      height={30}
                      alt="foto profil"
                      className="rounded-full"
                    />
                    <p className="text-[15px] text-[#21B892] mt-1">Kevin</p>
                  </div>
                  <p className="font-medium text-[20px] leading-none text-[#323735]">
                    Tanaman Kaktus Tidak Perlu di siram?
                  </p>
                  <p className="font-light text-[12px]">
                    Ulasan dari <span className="text-[#005DE8]">Kevin</span>{" "}
                    pada 23-03-2023
                  </p>
                  <button className="bg-[#C2FFE8] p-[2px] rounded w-[35%] text-[#06612B] font-light text-[12px]">
                    Tanaman
                  </button>

                  <div className="flex pt-[7%] translate-x-[50%]">
                    <Image
                      src={mata}
                      width={20}
                      height={20}
                      alt="foto profil"
                    />
                    <p className="ms-1 font-light mt-1 text-[12px] text-[#323735]">
                      500
                    </p>
                    <Image
                      src={chat2}
                      className="ms-3"
                      width={20}
                      height={20}
                      alt="foto profil"
                    />
                    <p className="font-light ms-1 mt-1 text-[12px] text-[#323735]">
                      500
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Elemen di luar card putih */}
            <div className="mx-auto flex flex-col items-center justify-center">
              <div className="text-white text-sm text-center">100</div>
              <div className="flex items-center justify-center bg-red-600 h-[8%] w-[85%] rounded-full text-sm text-white">
                i
              </div>
            </div>
          </div>

          <div className="flex items-start mt-[10px] ml-[4%]">
            {/* Card Putih */}
            <div className="w-[81%] h-[190px] bg-white shadow-[3px_4px_4px,-3px_6px_4px] shadow-[#0000002d]">
              <div className="flex">
                <div className="flex-col">
                  <Image
                    src="/img/kaktus.png"
                    width={100}
                    height={100}
                    alt="kaktus"
                    className="w-[150%] h-[150px]"
                  />
                  <button className="bg-[#3F9272] w-[50%] rounded ms-[25%] mt-[7%] text-white font-semibold text-[12px]">
                    Atur
                  </button>
                </div>
                <div className="ms-[5%] flex-col space-y-1">
                  <div className="flex space-x-2 mt-[3%] mb-[2%]">
                    <Image
                      src={foto}
                      width={30}
                      height={30}
                      alt="foto profil"
                      className="rounded-full"
                    />
                    <p className="text-[15px] text-[#21B892] mt-1">Kevin</p>
                  </div>
                  <p className="font-medium text-[20px] leading-none text-[#323735]">
                    Tanaman Kaktus Tidak Perlu di siram?
                  </p>
                  <p className="font-light text-[12px]">
                    Ulasan dari <span className="text-[#005DE8]">Kevin</span>{" "}
                    pada 23-03-2023
                  </p>
                  <button className="bg-[#C2FFE8] p-[2px] rounded w-[35%] text-[#06612B] font-light text-[12px]">
                    Tanaman
                  </button>

                  <div className="flex pt-[7%] translate-x-[50%]">
                    <Image
                      src={mata}
                      width={20}
                      height={20}
                      alt="foto profil"
                    />
                    <p className="ms-1 font-light mt-1 text-[12px] text-[#323735]">
                      500
                    </p>
                    <Image
                      src={chat2}
                      className="ms-3"
                      width={20}
                      height={20}
                      alt="foto profil"
                    />
                    <p className="font-light ms-1 mt-1 text-[12px] text-[#323735]">
                      500
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Elemen di luar card putih */}
            <div className="mx-auto flex flex-col items-center justify-center">
              <div className="text-white text-sm text-center">100</div>
              <div className="flex items-center justify-center bg-red-600 h-[8%] w-[85%] rounded-full text-sm text-white">
                i
              </div>
            </div>
          </div>

          <div className="flex items-start mt-[10px] ml-[4%]">
            {/* Card Putih */}
            <div className="w-[81%] h-[190px] bg-white shadow-[3px_4px_4px,-3px_6px_4px] shadow-[#0000002d]">
              <div className="flex">
                <div className="flex-col">
                  <Image
                    src="/img/kaktus.png"
                    width={100}
                    height={100}
                    alt="kaktus"
                    className="w-[150%] h-[150px]"
                  />
                  <button className="bg-[#3F9272] w-[50%] rounded ms-[25%] mt-[7%] text-white font-semibold text-[12px]">
                    Atur
                  </button>
                </div>
                <div className="ms-[5%] flex-col space-y-1">
                  <div className="flex space-x-2 mt-[3%] mb-[2%]">
                    <Image
                      src={foto}
                      width={30}
                      height={30}
                      alt="foto profil"
                      className="rounded-full"
                    />
                    <p className="text-[15px] text-[#21B892] mt-1">Kevin</p>
                  </div>
                  <p className="font-medium text-[20px] leading-none text-[#323735]">
                    Tanaman Kaktus Tidak Perlu di siram?
                  </p>
                  <p className="font-light text-[12px]">
                    Ulasan dari <span className="text-[#005DE8]">Kevin</span>{" "}
                    pada 23-03-2023
                  </p>
                  <button className="bg-[#C2FFE8] p-[2px] rounded w-[35%] text-[#06612B] font-light text-[12px]">
                    Tanaman
                  </button>

                  <div className="flex pt-[7%] translate-x-[50%]">
                    <Image
                      src={mata}
                      width={20}
                      height={20}
                      alt="foto profil"
                    />
                    <p className="ms-1 font-light mt-1 text-[12px] text-[#323735]">
                      500
                    </p>
                    <Image
                      src={chat2}
                      className="ms-3"
                      width={20}
                      height={20}
                      alt="foto profil"
                    />
                    <p className="font-light ms-1 mt-1 text-[12px] text-[#323735]">
                      500
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Elemen di luar card putih */}
            <div className="mx-auto flex flex-col items-center justify-center">
              <div className="text-white text-sm text-center">100</div>
              <div className="flex items-center justify-center bg-red-600 h-[8%] w-[85%] rounded-full text-sm text-white">
                i
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-[207px] ml-[4%] mt-[5%] w-[216px] bg-[#1AE5CC] items-center">
        <div className="text-[#FF4949] flex items-center justify-center my-auto font-semibold text-[50px]">
          50
        </div>
        <div className="text-white mb-1">Laporan</div>
      </div>
    </div>
  );
}

export default Card3;
