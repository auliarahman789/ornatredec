import React from "react";
import Grid from "@/components/Forum/grid";
import Dropdown1 from "@/components/Forum/dropdown1";
import Image from "next/image";
import pen from "../../../public/icon/pen.svg";
import Link from "next/link";

function Forum() {
  return (
    <div className="bg-[#E4FFF2] pb-[5%] ">
      <p className="text-[#308967] text-[20px] ml-[22%] inline-block mt-[4%]">
        8 ulasan terbaru
      </p>
      <div className="flex">
        <div className="">
          <Dropdown1 />
        </div>
        <div className="mt-6 ms-[12%] flex">
          <div className="bg-[#308967] h-[18px] w-[18px]  rounded-md cursor-pointer">
            <Image
              src={pen}
              alt="pensil"
              width={80}
              height={80}
              className="h-[50%] w-[50%] mt-1 ml-1 cursor-pointer"
            ></Image>
          </div>
          <Link href="/Forum/BuatPostingan">
            <p className="text-[#308967] text-[18px] ml-[10%] mb-1 whitespace-nowrap cursor-pointer">
              buat ulasan
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Forum;
