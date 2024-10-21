import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../../public/icon/logo.svg";
import defaultAvatar from "../../../../public/img/default-avatar.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import axios from "axios"; // Import axios untuk request API

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState<string>(defaultAvatar.src); // Ubah tipe state menjadi string
  const pathname = usePathname();

  // Fungsi untuk mengambil data pengguna terbaru dari server
  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token"); // Ambil token dari localStorage
      if (!token) {
        setIsLoggedIn(false);
        return;
      }

      // Panggil API untuk mengambil data pengguna
      const response = await axios.get("/api/user/me", {
        headers: {
          Authorization: `Bearer ${token}`, // Kirim token dalam header
        },
      });

      const user = response.data;

      if (user) {
        setIsLoggedIn(true); // Update status login
        setUsername(user.username); // Update username dengan data terbaru
        setAvatar(user.avatar || defaultAvatar.src); // Update avatar jika ada, jika tidak gunakan default
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setIsLoggedIn(false); // Jika ada error, anggap belum login
    }
  };

  useEffect(() => {
    fetchUserData(); // Panggil API saat komponen di-mount untuk mendapatkan data terbaru

    // Event listener untuk perubahan localStorage, jika misalnya user login/logout
    const handleStorageChange = () => {
      fetchUserData(); // Panggil ulang data user jika ada perubahan
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange); // Bersihkan listener saat komponen di-unmount
    };
  }, []); // Hanya panggil sekali saat komponen pertama kali dimuat

  // Fungsi untuk logout, membersihkan token dan data pengguna
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("avatar");
    setIsLoggedIn(false); // Update state menjadi belum login
    window.location.reload(); // Reload halaman untuk memastikan state navbar ter-reset
  };

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
            <>
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
              <button
                className="text-red-500 bg-white border border-red-500 rounded-lg py-1 px-4 ml-4"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
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
