import Image from "next/image";
import React from "react";

function Burung() {
  return (
    <div className="grid gap-0 grid-cols-2 mx-[100px] pb-[8%]" id="burung">
      <div className="translate-x-[13px]">
        <h1 className="text-[#3F9272] font-bold text-[40px]">Apa Itu Burung Hias?</h1>
        <p className="text-[20px] me-[4%] mt-[2%] text-[#54A082]">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve</p>
      </div>
      <div className="ms-[5%]">
        <Image src='/img/burung1.png' className="w-full h-auto -translate-x-[13px]" alt={"burung"} width={550} height={434}/>
      </div>
      <div className="">
        <Image src='/img/burung2.png' className="w-full h-auto translate-x-[13px]" alt={"burung"} width={550} height={434}/>
      </div>
      <div className="mx-[8%] mt-[5%]">
        <h1 className="text-[#3F9272] font-bold text-[40px] leading-none">Cara Merawat Burung Hias</h1>
        <p className="text-[20px] me-[5%] mt-[2%] text-[#54A082]">incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore mag</p>
      </div>
      <div className="translate-x-[13px] mt-[5%]">
        <h1 className="text-[#3F9272] font-bold text-[40px] leading-none">Makanan Yang Cocok Untuk Burung Hias</h1>
        <p className="text-[20px] me-[5%] mt-[2%] text-[#54A082]">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve</p>
      </div>
      <div className="ms-[5%]">
        <Image src='/img/pakanburung.png' className="w-full h-auto -translate-x-[13px]" alt={"burung"} width={550} height={434}/>
      </div>
      <div className="">
        <Image src='/img/burungmati.png' className="w-full h-auto translate-x-[13px]" alt={"burung"} width={550} height={434}/>
      </div>
      <div className="ms-[10%] mt-[5%]">
        <h1 className="text-[#3F9272] font-bold text-[40px] leading-none">Tips Menghindari
        Burung Cepat Mati</h1>
        <p className="text-[20px] me-[5%] mt-[2%] text-[#54A082]">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve</p>
      </div>
  </div>
  )
}

export default Burung;
