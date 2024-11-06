import React from "react";
import Grid from "@/components/Forum/grid";
import Dropdown1 from "@/components/Forum/dropdown1";
import Image from "next/image";
import CombinedDropdowns from "@/components/Forum/dropdown2";
import pen from "../../../public/icon/pen.svg";
import Link from "next/link";

function Forum() {
  return (
    <div className="bg-[#E4FFF2] ">
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
          <div className="bg-[#308967] h-[18px] w-[18px] ms-[3%] rounded-md cursor-pointer">
            <Image
              src={pen}
              alt="pensil"
              width={80}
              height={80}
              className="h-[50%] w-[50%] mt-1 ml-1 cursor-pointer"
            ></Image>
          </div>
          <Link href="/Forum/BuatPostingan">
            <p className="text-[#308967] text-[18px] ml-[1%] mb-1 whitespace-nowrap cursor-pointer">
              buat ulasan
            </p>
          </Link>
        </>
      </div>
    </div>
  );
}

export default Forum;
