import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../../../public/icon/logo.svg";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center bg-[#DBFFF6] px-14 p-6">
        {/* Bagian kiri: logo */}
        <div className="flex">
          <Image src={logo} alt="Logo" width={95} height={95} />
        </div>

        {/* Bagian tengah: menu navigasi */}
        <div className="flex-1 flex justify-center text-[#308967]">
          <ul className="flex space-x-10 text-[18px]">
            <Link href="/">
              <li>Home</li>
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
            <Link href="/About">
              <li>About</li>
            </Link>
          </ul>
        </div>

        {/* Bagian kanan: tombol login dan daftar */}
        <div>
          <Link href="/auths">
            <button className="text-[#308967]">login</button>
          </Link>
          <Link href="/auths">
            <button className="text-white bg-green-500 rounded-lg py-1 px-4 ml-2">
              Daftar
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
