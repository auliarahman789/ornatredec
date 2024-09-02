import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div>
      <footer className="bg-[#D9FFF0] text-white py-6 mt-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-gray-400">
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
      </footer>
    </div>
  );
}

export default Footer;
