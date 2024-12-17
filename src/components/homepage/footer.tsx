import React from "react";
import Image from "next/image";
import logo from "../../../public/icon/logo.svg";

function Footer() {
  return (
    <div>
      <footer>
        <div className="grid grid-cols-2 h-60 w-full bg-[#D9FFF0] ">
          <div className="pl-24 pt-16 pr-[10%]">
            <Image src={logo} width={150} height={150} alt="logo" />
            <span className="text-[16px] text-[#308967]">
              T-trana adalah web yang meyediakan fitur seperti forum untuk
              penggemar, edukasi tentang tanaman hias,burung hias dan ikan hias
              juga menyediakan laman untuk jual beli
            </span>
          </div>
          <div className="space-x-24 text-[#3F9272] pt-20 text-[29px]">
            <span>About</span>
            <span>Kontak</span>
            <span>Social Media</span>
            <div className="flex flex-row">
              <span className="text-[20px] -translate-x-24 pt-4">
                kata kata
              </span>
              <p className="text-xl text-[#3F9272] -translate-x-10 pt-4">
                +6283890485363
              </p>
              <div className="pl-[3%] flex flex-row pt-2 space-x-2">
                <img src="/img/ig.png" width={50} height={25} alt="ig" />
                <img
                  src="/img/whats app.png"
                  width={65}
                  height={25}
                  alt="wa"
                />
                <img src="/img/twitter.png" width={60} height={25} alt="tw" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-1">
          <div className="bg-[#D9FFF0] h-8 pl-24 pr-24">
            <div className="border-b-2 border-[#51CB9F]"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
