import React from "react";
import Image from "next/image";

function page() {
  return (
    <div>
      <div className="bg-[#E4FFF2] min-h-screen">
        <div className="pl-[10%] pt-[3%]">
          <Image src="/icon/back.png" width={40} height={40} alt="kembali" />
        </div>
        <div className="pt-[2%] pl-[10%]">
          <h1 className="text-2xl font-bold text-[#308967]">NOTIFIKASI</h1>
        </div>
        <div className="bg-white px-[15%] py-auto ml-[10%] mr-[10%] mt-[1%] mb-[3%] ">
          <div className="-translate-x-[25%]">
            <Image
              src="/icon/Bell.png"
              width={30}
              height={30}
              alt="Bell"
              className="border border-red-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
