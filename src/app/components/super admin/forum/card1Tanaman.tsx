import React from "react";
import foto from "../../../../../public/icon/foto profile.svg";
import mata from "../../../../../public/icon/mata.svg";
import chat2 from "../../../../../public/icon/chat2.svg";
import Image from "next/image";

function Card1tanaman() {
  return (
    <div className="space-y-10">
      <div className="w-[83%] h-[190px] bg-white ml-[4%] shadow-[3px_4px_4px,-3px_6px_4px] shadow-[#0000002d]">
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
              Ulasan dari <span className="text-[#005DE8]">Kevin</span> pada
              23-03-2023
            </p>
            <button className="bg-[#C2FFE8] p-[2px] rounded w-[35%] text-[#06612B] font-light text-[12px]">
              Tanaman
            </button>

            <div className="flex pt-[7%] translate-x-[50%]">
              <Image src={mata} width={20} height={20} alt="foto profil" />
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

      <div className="w-[83%] h-[190px] bg-white ml-[4%] shadow-[3px_4px_4px,-3px_6px_4px] shadow-[#0000002d]">
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
              Ulasan dari <span className="text-[#005DE8]">Kevin</span> pada
              23-03-2023
            </p>
            <button className="bg-[#C2FFE8] p-[2px] rounded w-[35%] text-[#06612B] font-light text-[12px]">
              Tanaman
            </button>

            <div className="flex pt-[7%] translate-x-[50%]">
              <Image src={mata} width={20} height={20} alt="foto profil" />
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

      <div className="w-[83%] h-[190px] bg-white ml-[4%] shadow-[3px_4px_4px,-3px_6px_4px] shadow-[#0000002d]">
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
              Ulasan dari <span className="text-[#005DE8]">Kevin</span> pada
              23-03-2023
            </p>
            <button className="bg-[#C2FFE8] p-[2px] rounded w-[35%] text-[#06612B] font-light text-[12px]">
              Tanaman
            </button>

            <div className="flex pt-[7%] translate-x-[50%]">
              <Image src={mata} width={20} height={20} alt="foto profil" />
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

      <div className="w-[83%] h-[190px] bg-white ml-[4%] shadow-[3px_4px_4px,-3px_6px_4px] shadow-[#0000002d]">
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
              Ulasan dari <span className="text-[#005DE8]">Kevin</span> pada
              23-03-2023
            </p>
            <button className="bg-[#C2FFE8] p-[2px] rounded w-[35%] text-[#06612B] font-light text-[12px]">
              Tanaman
            </button>

            <div className="flex pt-[7%] translate-x-[50%]">
              <Image src={mata} width={20} height={20} alt="foto profil" />
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

      <div className="w-[83%] h-[190px] bg-white ml-[4%] shadow-[3px_4px_4px,-3px_6px_4px] shadow-[#0000002d]">
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
              Ulasan dari <span className="text-[#005DE8]">Kevin</span> pada
              23-03-2023
            </p>
            <button className="bg-[#C2FFE8] p-[2px] rounded w-[35%] text-[#06612B] font-light text-[12px]">
              Tanaman
            </button>

            <div className="flex pt-[7%] translate-x-[50%]">
              <Image src={mata} width={20} height={20} alt="foto profil" />
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

      <div className="w-[83%] h-[190px] bg-white ml-[4%] shadow-[3px_4px_4px,-3px_6px_4px] shadow-[#0000002d]">
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
              Ulasan dari <span className="text-[#005DE8]">Kevin</span> pada
              23-03-2023
            </p>
            <button className="bg-[#C2FFE8] p-[2px] rounded w-[35%] text-[#06612B] font-light text-[12px]">
              Tanaman
            </button>

            <div className="flex pt-[7%] translate-x-[50%]">
              <Image src={mata} width={20} height={20} alt="foto profil" />
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

      <div className="w-[83%] h-[190px] bg-white ml-[4%] shadow-[3px_4px_4px,-3px_6px_4px] shadow-[#0000002d]">
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
              Ulasan dari <span className="text-[#005DE8]">Kevin</span> pada
              23-03-2023
            </p>
            <button className="bg-[#C2FFE8] p-[2px] rounded w-[35%] text-[#06612B] font-light text-[12px]">
              Tanaman
            </button>

            <div className="flex pt-[7%] translate-x-[50%]">
              <Image src={mata} width={20} height={20} alt="foto profil" />
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
    </div>
  );
}

export default Card1tanaman;
