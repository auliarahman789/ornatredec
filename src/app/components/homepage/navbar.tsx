import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between bg-[#DBFFF6] px-14 p-6">
        <div className="flex flex-row  text-[#308967]">
          <ul className="flex space-x-4 space-y-2">
            <Link href="#">
            <li className="pt-2">
             Home
            </li>
            </Link>
            <Link href="">
            <li>
             Forum
            </li>
            </Link>
            <Link href="">
            <li>
             Produk
            </li>
            </Link>
            <Link href="">
            <li>
             Edukasi
            </li>
            </Link>
            <Link href="/about">
            <li>
             About
            </li>
            </Link>
          </ul>
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
