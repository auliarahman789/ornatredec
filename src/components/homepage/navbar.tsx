import { useEffect, useState } from "react";
import axios from "axios"; // Import axios
import Image from "next/image";
import logo from "../../../public/icon/logo.svg";
import defaultAvatar from "../../../public/img/default-avatar.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState<string>(defaultAvatar.src);
  const pathname = usePathname();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return; // Jika tidak ada token, keluar dari fungsi

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL}api/getMe`,
          {
            withCredentials: true,
            // headers: {
            //   Authorization: `Bearer ${token}`,
            // },
          }
        );

        console.log(token);

        if (response.data) {
          setIsLoggedIn(true);
          setUsername(response.data.username);
          setAvatar("https://74gslzvj-8000.asse.devtunnels.ms"  + response.data.photoProfile || defaultAvatar.src); // Gunakan avatar dari response
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <nav className="flex justify-between items-center bg-[#DBFFF6] px-14 p-6">
        <div className="flex">
          <Image src={logo} alt="Logo" width={95} height={95} />
        </div>

        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-10 text-[18px]">
            <Link href="/">
              <li
                className={`${
                  pathname === "/" ? "text-[#27BFB6]" : "text-[#308967]"
                }`}
              >
                Home
              </li>
            </Link>
            <Link href="/Forum">
              <li
                className={`${
                  pathname === "/Forum" ? "text-[#27BFB6]" : "text-[#308967]"
                }`}
              >
                Forum
              </li>
            </Link>
            <Link href="/Produk">
              <li
                className={`${
                  pathname === "/Produk" ? "text-[#27BFB6]" : "text-[#308967]"
                }`}
              >
                Produk
              </li>
            </Link>
            <Link href="/Edukasi">
              <li
                className={`${
                  pathname === "/Edukasi" ? "text-[#27BFB6]" : "text-[#308967]"
                }`}
              >
                Edukasi
              </li>
            </Link>
            <Link href="/About">
              <li
                className={`${
                  pathname === "/About" ? "text-[#27BFB6]" : "text-[#308967]"
                }`}
              >
                About
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex items-center space-x-3">
          {isLoggedIn ? (
            <Link href="/profile" className="flex items-center">
              <img
                src={avatar} // Gunakan avatar dari API atau default
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
