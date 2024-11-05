import React from "react";
import Grid from "@/components/Forum/grid";
import Dropdown1 from "@/components/Forum/dropdown1";
import Image from "next/image";
import CombinedDropdowns from "@/components/Forum/dropdown2";
import pen from "../../../public/icon/pen.svg";

function Forum() {
  return (
    <div className="bg-[#E4FFF2] h-[2000px]">
      <p className="text-[#308967] text-[20px] ml-[22%] inline-block mt-[4%]">
        8 ulasan terbaru
      </p>
      <div className="flex">
        <div className="">
          <Dropdown1 />
          <CombinedDropdowns />
          <div className="flex text-black text-[18px] pb-4">
            <input
              type="text"
              placeholder="  Cari..."
              className="w-[80%] h-[31px] mt-[8%] bg-[#FFFBFB] rounded-lg ms-[35%] shadow-xl"
            />
          </div>
        </div>
        <Grid />
        <>
          <div className="bg-[#308967] h-[18px] w-[18px] ms-[3%] rounded-xl">
            <Image
              src={pen}
              alt=""
              width={100}
              height={100}
              className="h-10 w-10 bg-slate-400"
            ></Image>
          </div>
          <p className="text-[#308967] text-[18px] ml-[1%] mb-1">buat ulasan</p>
        </>
      </div>
    </div>
  );
}

export default Forum;
