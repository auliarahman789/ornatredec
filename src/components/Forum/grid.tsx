import React from "react";
import Image from "next/image";
import mata from "../../../public/icon/mata.svg";
import chat2 from "../../../public/icon/chat2.svg";
import profil from "../../../public/icon/profil.svg";
import panah from "../../../public/icon/for.svg";
import noted from "../../../public/icon/noted.svg";

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
              className="rounded-full ml-6 -translate-y-5"
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

      <div className="mt-[4%]">
        <p className="text-black leading-tight ml-[10%] w-[60%] text-[15px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          aspernatur officiis magnam voluptate veniam. Consequatur tenetur,
          eligendi voluptas autem voluptate reiciendis recusandae vitae suscipit
          iste neque, sunt eum unde quidem.
        </p>
      </div>
      <div>
        <p className="text-black text-[15px] ml-[15%] mt-[4%]">102 Komentar</p>
        <div className="w-[595px] h-[547px] bg-[#E2FFF8] mx-auto rounded-xl">
          <div className="pt-[4%] ml-[3%]">
            <Image
              src={profil}
              alt="foto profil"
              width={100}
              height={100}
              className="w-[35px] h-[35px]"
            ></Image>
            <div className="space-y-3">
              <div className="ml-[3.5%] -translate-y-7">
                <div className="ml-[6%] h-[130px] w-[477px] bg-white relative ">
                  <div className="flex space-x-4 pt-[2%]">
                    <p className="text-[#3F9272] text-[13px] ml-[3%]">Kevin</p>
                    <p className="text-[#7D7D7D] text-[10px] mt-[2px]">
                      2 jam yang lalu
                    </p>
                  </div>
                  <p className="ms-[3%] leading-tight text-[15px] mt-[3%]">
                    ***** tanaman kayak gitu sih enak rawatnya tapi gw kemaren
                    ke cucuk durinya kena ****** sakit banget ,gatel si , btw
                    durinya beracun kagak? kalau beracun hilang dah masa depan
                    gw
                  </p>
                  <div className="flex space-x-3 justify-end mt-[2%] mr-[2%]">
                    <p className="text-[#8A8A8A] text-[12px]">90 balasan</p>
                    <p className="text-[#3F9272] text-[12px]">balasan</p>
                  </div>
                  <div className="absolute top-3 -left-1 w-0 h-0 border-l-[15px] border-l-transparent border-b-[15px] border-b-white transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>

              <div className="ml-[5%] -translate-y-7">
                <Image
                  src={profil}
                  alt="foto profil"
                  width={100}
                  height={100}
                  className="w-[35px] h-[35px]"
                ></Image>
                <div className="ml-[9%] h-[83px] w-[453px] -translate-y-7 bg-white relative ">
                  <div className="flex space-x-2 pt-[2%]">
                    <p className="text-[#3F9272] text-[13px] ml-[3%]">Kevin</p>
                    <Image
                      src={panah}
                      alt="panah"
                      width={90}
                      height={90}
                      className="w-3 h-3 mt-[0.5%]"
                    ></Image>

                    <p className="text-[#3F9272] text-[13px]">Danen</p>

                    <p className="text-[#7D7D7D] text-[10px] mt-[2px]">
                      2 jam yang lalu
                    </p>
                  </div>
                  <p className="ms-[3%] leading-tight text-[15px] mt-[2%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="flex justify-end mt-[1%] mr-[2%]">
                    <p className="text-[#3F9272] text-[12px]">balas</p>
                  </div>
                  <div className="absolute top-3 -left-1 w-0 h-0 border-l-[15px] border-l-transparent border-b-[15px] border-b-white transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
