import React from "react";
import Profile from "../../public/icon/profile.svg";
import Order from "../../../public/icon/order.svg";
import Chat from "../../../public/icon/chat.svg";
import Image from "next/image";

function Page() {
  return (
    <div className="overflow-x-hidden">
      <div className="z-10">
        <SidebarSp />
      </div>
      <div className="text-black  translate-x-64 h-screen pt-[2%]">
        <div className="text-[23px] font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] ms-[2%] mt-4 inline-block text-transparent bg-clip-text">
          Dashboard
        </div>
        <div className="flex space-x-[2%]">
          <div className="bg-[#198C6F] mt-[4%] ms-[4%] h-[92px] w-[21%] rounded-xl flex">
            <Image
              src={Profile}
              alt={"profile"}
              className="w-[45%] h-[45%] mt-[10%]"
            />
            <div className="border-r-2 bg-slate-100 h-[46px] mt-6"></div>
            <div className="flex flex-col ms-8 mt-6">
              <div className="text-white text-[12px]">Total Pengguna</div>
              <div className="text-[20px] text-white">4554</div>
            </div>
          </div>

          <div className="bg-[#D7FFF0] mt-[4%] ms-[4%] h-[92px] w-[21%] rounded-xl flex">
            <Image
              src={Order}
              alt={"profile"}
              className="w-[45%] h-[45%] mt-[9%]"
            />
            <div className="border-r-2 bg-[#308967] h-[46px] mt-6"></div>
            <div className="flex flex-col ms-8 mt-6">
              <div className="text-[#308967] text-[12px]">Total Pesanan</div>
              <div className="text-[20px] text-[#308967]">3664</div>
            </div>
          </div>

          <div className="bg-[#D7FFF0] mt-[4%] ms-[4%] h-[92px] w-[21%] rounded-xl flex">
            <Image
              src={Chat}
              alt={"profile"}
              className="w-[40%] h-[30%] mt-[11%]"
            />
            <div className="border-r-2 bg-[#308967] h-[46px] mt-6"></div>
            <div className="flex flex-col ms-8 mt-6">
              <div className="text-[#308967] text-[12px]">
                Total Konten Forum
              </div>
              <div className="text-[20px] text-[#308967]">3664</div>
            </div>
          </div>

          <div className="bg-[#D7FFF0] mt-[4%] ms-[4%] h-[45px] w-[4%] rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

export default Page;
