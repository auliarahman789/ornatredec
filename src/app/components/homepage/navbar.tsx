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
              <li className="cursor-pointer text-[18px]">Home</li>
            </Link>
            <Link href="">
              <li className="cursor-pointer text-[18px]">Forum</li>
            </Link>
            <Link href="">
              <li className="cursor-pointer text-[18px]">Produk</li>
            </Link>
            <Link href="">
              <li className="cursor-pointer text-[18px]">Edukasi</li>
            </Link>
            <Link href="/about">
              <li className="cursor-pointer text-[18px]">About</li>
            </Link>
          </ul>
        </div>

        {/* Bagian kanan: tombol login dan daftar */}
        <div>
          <button className="mr-2 text-[#308967]">Login</button>
          <button className="bg-green-500 text-white rounded-lg py-1 px-4">
            Daftar
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
