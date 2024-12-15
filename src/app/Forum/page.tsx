"use client"
import React, { useState } from "react";
import Grid from "@/components/Forum/grid";
import Dropdown1 from "@/components/Forum/dropdown1";
import Image from "next/image";
import pen from "../../../public/icon/pen.svg";
import Link from "next/link";
import BuatKonten from "@/components/Forum/buatulasan";
// import Notif from "@/components/Forum/notif";

function Forum() {
  const [showReport, setShowReport] = useState(false);
  return (
    <div className="bg-[#E4FFF2] pb-[5%] ">
      {/* <Notif/> */}
      <p className="text-[#308967] text-[20px] ml-[22%] inline-block mt-[4%]">
        Ulasan Terbaru
      </p>
      <div className="flex">
        <div className="">
          <Dropdown1 />
        </div>
        <div onClick={()=>setShowReport(true)} className="mt-6 ms-[23%] flex">
          <div className="bg-[#308967] h-[20px] w-[40px] p-[1%] pb-[2%] rounded-md cursor-pointer">
            <Image
              src={pen}
              alt="pensil"
              width={80}
              height={80}
              className="h-[15px] w-[15px] mt-1 ml-1 cursor-pointer"
            />
          </div>
            <p className="text-[#308967] text-[18px] ml-[10%] mb-1 whitespace-nowrap cursor-pointer">
              buat ulasan
            </p>
          <BuatKonten
              isVisible={showReport}
              onClose={() => setShowReport(false)}
            />
        </div>
      </div>
    </div>
  );
}

export default Forum;
