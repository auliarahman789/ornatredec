import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../../public/icon/logo.svg";
import defaultAvatar from "../../../../public/img/default-avatar.png";
import Link from "next/link";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState<string>(defaultAvatar.src); // Ubah tipe state menjadi string

  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUsername = localStorage.getItem("username");
    const savedAvatar = localStorage.getItem("avatar");

    if (token && savedUsername) {
      setIsLoggedIn(true);
      setUsername(savedUsername);
      setAvatar(savedAvatar || defaultAvatar.src); // Gunakan src dari defaultAvatar
    }

    const handleStorageChange = () => {
      const updatedUsername = localStorage.getItem("username");
      const updatedAvatar = localStorage.getItem("avatar");
      if (updatedUsername) {
        setUsername(updatedUsername);
      }
      if (updatedAvatar) {
        setAvatar(updatedAvatar); // Tetap sebagai string
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div>
      <nav className="flex justify-between items-center bg-[#DBFFF6] px-14 p-6">
        <div className="flex">
          <Image src={logo} alt="Logo" width={95} height={95} />
        </div>

        <div className="flex-1 flex justify-center text-[#308967]">
          <ul className="flex space-x-10 text-[18px]">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="">
              <li>Forum</li>
            </Link>
            <Link href="/Produk">
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

        <div className="flex items-center space-x-3">
          {isLoggedIn ? (
            <Link href="/profile" className="flex items-center">
              <Image
                src={avatar} // Tetap gunakan avatar sebagai string
                alt="Profile Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-[#308967] ml-2">{username}</span>
            </Link>
          ) : (
            <div>
              <Link href="/auths">
                <button className="text-[#308967]">Login</button>
              </Link>
              <Link href="/auths">
                <button className="text-white bg-green-500 rounded-lg py-1 px-4 ml-2">
                  Daftar
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
