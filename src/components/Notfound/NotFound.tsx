import React from "react";
import Image from "next/image";

function Page() {
  return (
    <div className="flex items-center w-[1000px] -translate-y-[40%] ml-[10%] justify-center min-h-screen bg-[#EBFFF8] relative">
      <img
        src="/icon/Chat_search.svg"
        alt="icon"
        width={100}
        height={100}
        className="absolute  -translate-y-[120%] z-10"
      />
      <div className="text-center">
        <p className="text-[#3F9272] text-6xl ">Maaf</p>
        <p className="text-[#3F9272] ">Apa yang kamu cari tidak ada</p>
        <p className="text-[#3F9272] text-4xl">404</p>
      </div>
    </div>
  );
}

export default Page;
