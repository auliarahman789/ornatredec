import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-[#D9FFF0] text-white py-6 mt-[60px] h-[346px]">
        <div className="my-[90px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 translate-y-10">
            <div className="flex flex-col items-center md:items-start ms-[141px]">
              <span className="text-gray-400 bg-green-400 leading-tight max-w-[390px]">
                Ornatredec adalah web yang meyediakan fitur seperti forum untuk
                penggemar, edukasi tentang tanaman hias,burung hias dan ikan
                hias juga menyediakan laman untuk jual beli
              </span>
            </div>
            <div className="bg-orange-500 space-x-12 flex justify-center">
              <span>About</span>
              <span>Kontak</span>
              <span>Sosial Media</span>
            </div>
          </div>
        </div>
        <div className="bg-black w-[1084px] h-[1px] mx-auto mb-[30px] rounded-lg"></div>
      </footer>
    </div>
  );
}

export default Footer;
