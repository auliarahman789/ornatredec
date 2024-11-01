import React from "react";
import Image from "next/image";
import molekul from "../../../public/icon/molekul.svg";
import Carausel1 from "./carausel";

function Home() {
  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="grid grid-cols-2 gap-4">
        <div className="m-10 h-[250%]">
          <div className="mt-[20%] inline-block font-bold text-[64px]">
            <span className="text-[#308967]">Selamat </span>
            <span className="bg-[#308967] text-white pt-3">Datang</span>
          </div>
          <div className="text-[#308967] me-9">
            <p className="text-[20px] mt-[15px] leading-tight font-normal">
              T-trana adalah web yang meyediakan fitur seperti forum untuk
              penggemar, edukasi tentang tanaman hias,burung hias dan ikan hias
              juga, menyediakan laman untuk jual beli.
            </p>
          </div>
        </div>
        <div className="h-[250%] m-10 p-4 relative">
          <div className="absolute top-0 left-0 right-0">
            <Carausel1 />
          </div>
          <div className="inline-block">
            <Image src={molekul} alt="molekul"></Image>
          </div>
          <div className="relative">
            <Image
              className="absolute top-[330px] right-0"
              src={molekul}
              alt="molekul"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
