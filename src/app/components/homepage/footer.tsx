import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-[#D9FFF0] text-white py-6 mt-[60px] h-[346px]">
        <div className="my-[90px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 translate-y-10">
            <div className="flex flex-col items-center md:items-start ms-[141px]">
              <span className="text-gray-400 leading-tight max-w-[360px]">
                Ornatredec adalah web yang menyediakan fitur seperti forum untuk
                penggemar, edukasi tentang tanaman hias, burung hias, dan ikan
                hias juga menyediakan laman untuk jual beli.
              </span>
            </div>
            <div className="grid grid-cols-3 justify-center -mt-32 mr-10">
              {/* About */}
              <div className="flex flex-col items-center leading-tight">
                <span className="bg-slate-500 px-4 py-2">About</span>
                <p className="text-gray-600 mt-4 bg-slate-500">company</p>
                <p className="text-gray-600 bg-slate-800">company</p>
                <p className="text-gray-600 bg-slate-400">company</p>
              </div>

              {/* Kontak */}
              <div className="flex flex-col items-center">
                <span className="bg-slate-600 px-4 py-2">Kontak</span>
                <p className="text-gray-600 mt-4">
                  Hubungi kami di email atau nomor telepon.
                </p>
              </div>

              {/* Sosial Media */}
              <div className="flex flex-col items-center">
                <span className="bg-slate-800 px-4 py-2">Sosial Media</span>
                <p className="text-gray-600 mt-4">
                  Ikuti kami di Instagram, Twitter, dan Facebook.
                </p>
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
