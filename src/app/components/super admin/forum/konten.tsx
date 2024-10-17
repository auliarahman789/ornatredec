import React from "react";
import Image from "next/image";
import Search from "../../../../../public/icon/search.svg";
import Dropdown1 from "./dropdown1";
import Dropdown2 from "./dropdown2";
import Card1 from "./card1Tanaman";
import Card2 from "./card2";
import Card1tanaman from "./card1Tanaman";

function Konten() {
  return (
    <div className="bg-white translate-x-64 h-[1150px] text-black overflow-y-hidden">
      <div className="relative">
        <p className="absolute right-[32%] text-[#21B892] text-[20px] mt-6">
          Ulasan yang di laporkan
        </p>
      </div>
      <div className="grid grid-cols-2 mt-[2%] h-[1100px] overflow-y-auto">
        <div className="bg-[#EBFFF7] mx-auto w-[574px] h-[1102px] rounded-lg overflow-y-auto">
          <div className="flex">
            <Dropdown1 />
            <Dropdown2 />
          </div>
          <div className="flex text-[#8EAEA6] text-[18px] pb-4">
            <input
              type="text"
              placeholder="Cari..."
              className="w-[30%] h-[31px] pl-[3%] bg-[#FFFBFB] rounded-full ml-[2%] mt-[1%] shadow-xl border border-black"
            />
            <Image
              src={Search}
              alt={"search"}
              width={50}
              height={50}
              className="bg-[#FFFBFB] shadow-xl rounded-full w-[32px] h-[32px] py-[1%] mt-[1%] ml-[2%] border border-black"
            />
          </div>

          <div className="overflow-y-auto h-[85%] overflow-x-hidden">
            <Card1tanaman />
          </div>
        </div>
        <div className="w-[55%] min-h-screen mt-[5%] overflow-y-auto">
          <div className="bg-[#1AE5CC] rounded-lg h-[45%] mb-4">
            <div className="pt-4">
              <Card2 />
            </div>
          </div>
          {/* <div className="bg-[#1AE5CC] rounded-lg h-[45%]"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Konten;
