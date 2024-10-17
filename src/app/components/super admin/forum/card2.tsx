import React from "react";
import Image from "next/image";
import foto from "../../../../../public/icon/foto profile.svg";
import mata from "../../../../../public/icon/mata.svg";
import chat2 from "../../../../../public/icon/chat2.svg";
import Link from "next/link";

function Card2() {
  return (
    <div className="space-y-5">
      <div className="flex items-center">
        <div className="w-[82%] h-[90px] bg-white ml-[4%] shadow-[3px_4px_4px,-3px_6px_4px] shadow-[#0000002d] rounded-md">
          {/* Konten card */}
          <div className="flex">
            <div className="flex-col ms-[6%] mt-[4%]">
              <Image
                src={foto}
                width={65}
                height={65}
                alt="foto profil"
                className="rounded-full"
              />
              <button className="bg-[#3F9272] mt-[2%] w-[100%] rounded ms-[5%] text-white font-semibold text-[12px]">
                Atur
              </button>
            </div>
            <div className="ms-[5%] flex-col">
              <div className="flex space-x-2 mb-[2%]">
                <p className="text-[15px] text-[#21B892] mt-2">Kevin</p>
              </div>
              <p className="font-medium text-[15px] leading-none text-[#323735]">
                Tanaman apa yg cocok buat orang hitam
              </p>

              <div className="flex w-[50%] ms-[40%] mt-[4%]">
                <Image src={mata} width={15} height={15} alt="foto profil" />
                <p className="ms-1 font-light mt-1 text-[10px] text-[#323735]">
                  500
                </p>
                <Image
                  src={chat2}
                  className="ms-3"
                  width={15}
                  height={15}
                  alt="foto profil"
                />
                <p className="font-light ms-1 mt-1 text-[10px] text-[#323735]">
                  500
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mb-[12%]">
          <div className="flex items-center justify-center bg-red-600 h-[8%] w-[85%] rounded-full text-sm text-white">
            i
          </div>
          <div className="text-white text-sm text-center">100</div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="w-[82%] h-[90px] bg-white ml-[4%] shadow-[3px_4px_4px,-3px_6px_4px] shadow-[#0000002d] rounded-md">
          {/* Konten card */}
          <div className="flex">
            <div className="flex-col ms-[6%] mt-[4%]">
              <Image
                src={foto}
                width={65}
                height={65}
                alt="foto profil"
                className="rounded-full"
              />
              <button className="bg-[#3F9272] mt-[2%] w-[100%] rounded ms-[5%] text-white font-semibold text-[12px]">
                Atur
              </button>
            </div>
            <div className="ms-[5%] flex-col">
              <div className="flex space-x-2 mb-[2%]">
                <p className="text-[15px] text-[#21B892] mt-2">Kevin</p>
              </div>
              <p className="font-medium text-[15px] leading-none text-[#323735]">
                Tanaman apa yg cocok buat orang hitam
              </p>

              <div className="flex w-[50%] ms-[40%] mt-[4%]">
                <Image src={mata} width={15} height={15} alt="foto profil" />
                <p className="ms-1 font-light mt-1 text-[10px] text-[#323735]">
                  500
                </p>
                <Image
                  src={chat2}
                  className="ms-3"
                  width={15}
                  height={15}
                  alt="foto profil"
                />
                <p className="font-light ms-1 mt-1 text-[10px] text-[#323735]">
                  500
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mb-[12%]">
          <div className="flex items-center justify-center bg-red-600 h-[8%] w-[85%] rounded-full text-sm text-white">
            i
          </div>
          <div className="text-white text-sm text-center">100</div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="w-[82%] h-[90px] bg-white ml-[4%] shadow-[3px_4px_4px,-3px_6px_4px] shadow-[#0000002d] rounded-md">
          {/* Konten card */}
          <div className="flex">
            <div className="flex-col ms-[6%] mt-[4%]">
              <Image
                src={foto}
                width={65}
                height={65}
                alt="foto profil"
                className="rounded-full"
              />
              <button className="bg-[#3F9272] mt-[2%] w-[100%] rounded ms-[5%] text-white font-semibold text-[12px]">
                Atur
              </button>
            </div>
            <div className="ms-[5%] flex-col">
              <div className="flex space-x-2 mb-[2%]">
                <p className="text-[15px] text-[#21B892] mt-2">Kevin</p>
              </div>
              <p className="font-medium text-[15px] leading-none text-[#323735]">
                Tanaman apa yg cocok buat orang hitam
              </p>

              <div className="flex w-[50%] ms-[40%] mt-[4%]">
                <Image src={mata} width={15} height={15} alt="foto profil" />
                <p className="ms-1 font-light mt-1 text-[10px] text-[#323735]">
                  500
                </p>
                <Image
                  src={chat2}
                  className="ms-3"
                  width={15}
                  height={15}
                  alt="foto profil"
                />
                <p className="font-light ms-1 mt-1 text-[10px] text-[#323735]">
                  500
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mb-[12%]">
          <div className="flex items-center justify-center bg-red-600 h-[8%] w-[85%] rounded-full text-sm text-white">
            i
          </div>
          <div className="text-white text-sm text-center">100</div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="w-[82%] h-[90px] bg-white ml-[4%] shadow-[3px_4px_4px,-3px_6px_4px] shadow-[#0000002d] rounded-md">
          {/* Konten card */}
          <div className="flex">
            <div className="flex-col ms-[6%] mt-[4%]">
              <Image
                src={foto}
                width={65}
                height={65}
                alt="foto profil"
                className="rounded-full"
              />
              <button className="bg-[#3F9272] mt-[2%] w-[100%] rounded ms-[5%] text-white font-semibold text-[12px]">
                Atur
              </button>
            </div>
            <div className="ms-[5%] flex-col">
              <div className="flex space-x-2 mb-[2%]">
                <p className="text-[15px] text-[#21B892] mt-2">Kevin</p>
              </div>
              <p className="font-medium text-[15px] leading-none text-[#323735]">
                Tanaman apa yg cocok buat orang hitam
              </p>

              <div className="flex w-[50%] ms-[40%] mt-[4%]">
                <Image src={mata} width={15} height={15} alt="foto profil" />
                <p className="ms-1 font-light mt-1 text-[10px] text-[#323735]">
                  500
                </p>
                <Image
                  src={chat2}
                  className="ms-3"
                  width={15}
                  height={15}
                  alt="foto profil"
                />
                <p className="font-light ms-1 mt-1 text-[10px] text-[#323735]">
                  500
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mb-[12%]">
          <div className="flex items-center justify-center bg-red-600 h-[8%] w-[85%] rounded-full text-sm text-white">
            i
          </div>
          <div className="text-white text-sm text-center">100</div>
        </div>
      </div>
      <Link href="/Superadmin/Forum/detailreportUlasan">
        <div className="text-white text-[15px] ms-[70%] mt-[5%] cursor-pointer">
          Lihat Semua
        </div>
      </Link>
    </div>
  );
}

export default Card2;
