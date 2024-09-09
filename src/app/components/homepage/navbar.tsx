import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../../../public/icon/logo.svg";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center bg-[#DBFFF6] px-14 p-6">
        {/* Bagian kiri: logo */}
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={95} height={95} />
        </div>

        {/* Bagian tengah: menu navigasi */}
        <div className="flex-1 flex justify-center text-[#308967]">
          <ul className="flex space-x-10">
            <Link href="/">
              <li className="pt-2">Home</li>
            </Link>
            <Link href="">
              <li>Forum</li>
            </Link>
            <Link href="">
              <li>Produk</li>
            </Link>
            <Link href="">
              <li>Edukasi</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
          </ul>
        </div>

        {/* Bagian kanan: tombol login dan daftar */}
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
