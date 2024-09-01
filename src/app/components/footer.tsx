import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center">
                <Image
                  src="/logo ornatredec.svg"
                  alt="Logo"
                  width={1200}
                  height={500}
                  className=""
                />
              </div>
              <span className="text-gray-400">
                Ornatredec adalah web yang meyediakan fitur seperti forum untuk
                penggemar, edukasi tentang tanaman hias,burung hias dan ikan
                hias juga menyediakan laman untuk jual beli
              </span>
            </div>
            <div className="bg-orange-500"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
