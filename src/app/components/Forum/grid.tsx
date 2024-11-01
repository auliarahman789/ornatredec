import React from "react";
import Image from "next/image";
import mata from "../../../../public/icon/mata.svg";
import chat2 from "../../../../public/icon/chat2.svg";
import profil from "../../../../public/icon/profil.svg";
import noted from "../../../../public/icon/noted.svg";

function Grid() {
  return (
    <div className="w-[779px] h-[995px] bg-white ms-[7%]">
      <div className="w-full h-[155px]">
        <div className="flex mt-[5%]">
          <div className="flex items-start">
            <Image
              src={profil}
              width={38}
              height={38}
              alt="foto profil"
              className="rounded-full ml-6 mt-4"
            />
            <div className="ml-4 h-[157px] w-[206px] bg-slate-600" />
          </div>

          <div className="ms-[3%] flex-col space-y-1">
            <div className="flex space-x-2 mb-[3%]">
              <p className="text-[#21B892] mt-1 text-[20px]">
                Tanaman Kaktus jadi obat?
              </p>
            </div>

            <p className="font-light text-[12px]">
              {`Ulasan dari `}
              <span className="text-[#005DE8]">Kevin</span>
              {` pada `} 12-12-2024
            </p>
            <button className="bg-[#C2FFE8] p-[2px] rounded w-[15%] text-[#06612B] font-light text-[12px]">
              Tanaman
            </button>

            <div className="flex pt-[8.5%] -translate-x-10">
              <Image
                src={mata}
                width={20}
                height={20}
                alt="mata"
                className="ms-10"
              />
              <p className="ms-1 font-light mt-1 text-[12px] text-[#323735]">
                43
              </p>
              <Image
                src={chat2}
                width={20}
                height={20}
                alt="chat2"
                className="ms-10"
              />
              <p className="font-light ms-1 mt-1 text-[12px] text-[#323735]">
                32
              </p>
            </div>
            <div className="border-b w-[408px] border-black"></div>
          </div>
        </div>
      </div>

      <div className="h-[23%] mt-[2%]">
        <p className="text-black leading-tight ml-[6%] w-[60%] text-[15px]">
          asdas
        </p>
      </div>

      <div className="flex">
        <p className="text-[24px] text-[#21B892] ms-[6%] mt-[3%] mb-[2%]">
          asdasdas
        </p>
        <p className="text-[#FF0404] text-[20px] mt-[3%] ms-[40%] h-[5%]">
          asdas
        </p>
      </div>

      <div className="space-y-3 mb-[2%]">
        <div className="h-[125px] w-[751px] ms-[10%] rounded-2xl border shadow-[6px_6px_5px] shadow-[#0000002e]">
          <div className="flex pt-4 mb-[2%]">
            <Image
              src={profil}
              width={50}
              height={50}
              alt="foto profil"
              className="rounded-full ms-5"
            />
            <p className="text-[15px] text-[#21B892] mt-1 ms-3">dskfjkdsf</p>
            <p className="text-[15px] text-[#7D7D7D] mt-1 ml-9">78</p>
          </div>
          <p className="text-black text-[15px] leading-tight ml-[12.5%] -translate-y-7 w-[70%]">
            23
          </p>
        </div>

        <div className="text-center">
          <Image src={noted} alt="noted" width={100} height={100} />
          <p className="font-semibold text-[23px] mt-[8%] text-gray-400 ms-[35%]">
            tidak ada report
          </p>
        </div>
      </div>
    </div>
  );
}

export default Grid;
