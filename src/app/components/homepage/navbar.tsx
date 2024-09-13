import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../../public/icon/logo.svg";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(""); // State untuk menyimpan nama pengguna

  useEffect(() => {
    // Cek apakah pengguna sudah login (misal dengan memeriksa localStorage)
    const token = localStorage.getItem("token");
    const savedUsername = localStorage.getItem("username"); // Ambil username dari localStorage
    if (token && savedUsername) {
      setIsLoggedIn(true);
      setUsername(savedUsername); // Set nama pengguna di state
    }
  }, []);

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
            <Link href="/Edukasi">
              <li>Edukasi</li>
            </Link>
            <Link href="/About">
              <li>About</li>
            </Link>
          </ul>
        </div>

        {/* Bagian kanan: login, daftar, atau profil */}
        <div className="flex items-center space-x-3">
          {isLoggedIn ? (
            // Jika sudah login, tampilkan avatar dan nama pengguna
            <Link href="/profile" className="flex items-center">
              <Image
                src="/about1.png" // Gambar avatar default
                alt="Profile Avatar"
                width={40} // Ukuran gambar
                height={40}
                className="rounded-full" // Membuat gambar bulat
              />
              <span className="text-[#308967] ml-2">{username}</span>{" "}
              {/* Nama pengguna */}
            </Link>
          ) : (
            // Jika belum login, tampilkan tombol login dan daftar
            <>
              <Link href="/auths">
                <button className="text-[#308967]">login</button>
              </Link>
              <Link href="/auths">
                <button className="text-white bg-green-500 rounded-lg py-1 px-4 ml-2">
                  Daftar
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
