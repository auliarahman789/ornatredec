import React from "react";
import Image from "next/image";
function Ikan() {
  return (
    <div className="grid gap-0 grid-cols-2 mx-[100px] pb-[8%]" id="ikan">
      <div className="translate-x-[13px]">
        <h1 className="text-[#3F9272] font-bold text-[40px]">
          Apa Itu Ikan Hias?
        </h1>
        <p className="text-[20px] me-[4%] mt-[2%] text-[#54A082]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim ve
        </p>
      </div>
      <div className="ms-[5%]">
        <Image
          src="/img/ikan hias 1.png"
          className="w-full h-auto -translate-x-[13px]"
          alt={"burung"}
          width={550}
          height={434}
        />
      </div>
      <div className="ms-[5%]">
        <Image
          src="/img/beri makan ikan.png"
          className="w-full h-auto -translate-x-[13px]"
          alt={"burung"}
          width={550}
          height={434}
        />
      </div>
       <p className="text-[20px] me-[4%] mt-[2%] text-[#54A082]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim ve
        </p>
    </div>
  );
}

export default Ikan;
