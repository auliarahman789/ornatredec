import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between px-14 flex-row pt-4">
        <div>
          <Image
            src="/logo ornatredec.svg"
            width="500"
            height="500"
            alt="logo"
          />
          <span className="text-black text-center ml-4"></span>
        </div>
        <div className="flex items-center text-center space-x-4">
          <button>Home</button>
          <button>Forum</button>
          <button>Produk</button>
          <button>Edukasi</button>
          <button>About</button>
        </div>
        <div>
          <button>login</button>
          <button className="bg-green-500 rounded-lg py-1 px-4 ml-2">
            Daftar
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
