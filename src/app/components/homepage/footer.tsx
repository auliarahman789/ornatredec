import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-[#D9FFF0] text-white py-6 mt-[60px] h-[346px]">
        <div className="my-[90px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 translate-y-10">
            <div className="flex flex-col items-center md:items-start ms-[141px]">
              <span className="text-gray-400 leading-tight max-w-[360px]">
                Ornatredec adalah web yang meyediakan fitur seperti forum untuk
                penggemar, edukasi tentang tanaman hias,burung hias dan ikan
                hias juga menyediakan laman untuk jual beli
              </span>
            </div>
            <div className="bg-orange-500 space-x-[77px] flex justify-center -mt-32 mr-10">
              <span className="bg-slate-500 px-4 py-2 mb-auto">About</span>
              <span className="bg-slate-600 px-4 py-2 mb-auto">Kontak</span>
              <span className="bg-slate-800 px-4 py-2 mb-auto">
                Sosial Media
              </span>
            </div>
          </div>
        </div>
        <div className="bg-black w-[1084px] h-[1px] mx-auto mb-[30px] rounded-lg"></div>
      </footer>
    </div>
  );
}

export default Footer;
