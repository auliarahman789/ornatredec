import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-white text-white py-6 z-50 ">
        <div className="">
          <div className="flex flex-col w-full md:grid-cols-2 gap-8 translate-y-10 ">
            <div className="flex flex-col w-[50%] items-center md:items-start ">
              <span className="text-[#308967] leading-tight max-w-[360px]">
                T-trana adalah web yang meyediakan fitur seperti forum untuk
                penggemar, edukasi tentang tanaman hias,burung hias dan ikan
                hias juga, menyediakan laman untuk jual beli.
              </span>
            </div>
            <div className="flex  w-full items-center justify-end ">
              {/* About */}
              <div className="flex flex-col items-center leading-tight">
                <span className="text-[#3F9272] text-[29px]">About</span>
                <p className="text-[#3F9272] mt-4 text-[16px]">company</p>
                <p className="text-[#3F9272] text-[16px]">company</p>
                <p className="text-[#3F9272] text-[16px]">company</p>
              </div>

              {/* Kontak */}
              <div className="flex flex-col items-center leading-tight">
                <span className="text-[#3F9272] text-[29px]">Kontak</span>
                <p className="text-[#3F9272] text-[16px] mt-4">company</p>
                <p className="text-[#3F9272] text-[16px]">company</p>
                <p className="text-[#3F9272] text-[16px]">company</p>
              </div>

              {/* Sosial Media */}
              <div className="flex flex-col items-center leading-tight">
                <span className="text-[#3F9272] text-[29px]">Sosial Media</span>
                <p className="text-[#308967] mt-4 text-[16px]">Company</p>
                <p className="text-[#308967] text-[16px]">Comunity</p>
                <p className="text-[#308967] text-[16px]">Careers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black w-[1084px] h-[1px] mx-auto mb-[30px] rounded-lg"></div>
      </footer>
    </div>
  );
}

export default Footer;
