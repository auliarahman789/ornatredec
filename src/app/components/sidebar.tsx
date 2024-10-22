"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import profile from "../../../../public/icon/profile.svg";
import profile2 from "../../../../public/icon/profile (1).svg";

interface ErrorResponse {
  message: string;
}

const Sidebar = () => {
  const router = useRouter();
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const pathname = usePathname();

  // Fungsi untuk menangani logout
  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Token tidak ditemukan. Silakan login kembali.");
      return;
    }

    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_URL}/api/logout`,
        {
          withCredentials: true,
        }
      );

      console.log("Logout Response:", response.data);

      // Hapus token dari localStorage setelah logout berhasil
      localStorage.removeItem("token");

      // Jangan hapus username, agar bisa digunakan lagi saat login ulang
      localStorage.removeItem("username"); // Komentar atau hapus baris ini
 localStorage.removeItem("avatar");
      // Pastikan untuk menutup popup logout setelah logout berhasil
      setShowLogoutPopup(false);

      // Redirect ke halaman home setelah logout berhasil
      router.push("/");
    } catch (error) {
      const axiosError = error as AxiosError;
console.log(error)
      if (axiosError.response) {
        const errorData = axiosError.response.data as ErrorResponse;
        const errorMessage =
          errorData.message || "Terjadi kesalahan saat logout.";
        if (axiosError.response.status === 401) {
          alert("Token tidak valid, silakan login kembali.");
        } else {
          alert("Logout error: " + errorMessage);
        }
      } else {
        alert("Terjadi kesalahan jaringan.");
      }

      console.error("Logout error:", axiosError.response);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="fixed top-0 left-0">
        <nav className="nav bg-gradient-to-b from-[#167960] to-[#28DFB1] w-64 h-screen flex flex-col">
          <div className="p-4 flex mb-10 justify-center">
            <Image
              src="/icon/logosp.svg"
              className="w-[150px] mx-auto"
              width={300}
              height={100}
              alt="logo"
            />
          </div>
          <ul className="text-[20px] font-bold text-white ms-[15%]">
            <li className="mb-3">
              <Link href="/profile">
                <div className="flex items-center py-2 rounded">
                  <Image
                    src="/icon/profil.svg"
                    width={30}
                    height={30}
                    alt="profil"
                  />
                  <span
                    className={`ml-8 hover:text-[#167960] ${
                      pathname === "/profile"
                        ? 'active'
                        : ""
                    }`}
                  >
                    Profil
                  </span>
                </div>
              </Link>
            </li>
            <li className="mb-2 mt-8">
              <Link href="/profile/riwayat">
                <div className="flex items-center py-2 rounded">
                  <Image
                    src="/icon/logo riwayat.svg"
                    width={30}
                    height={30}
                    alt="riwayat"
                  />
                  <span
                    className={`ml-8 hover:text-[#167960] ${
                      pathname === "/profile/riwayat"
                        ? "active"
                        : ""
                    }`}
                  >
                    Riwayat
                  </span>
                </div>
              </Link>
            </li>
            <li className="mb-2 mt-8">
              <Link href="/profile/edit">
                <div className="block py-2 rounded">
                  <div className="flex flex-row">
                    <Image
                      src="/icon/Rectangle 1.svg"
                      width={30}
                      height={30}
                      alt="edit"
                    />
                    <span
                      className={`ml-8 hover:text-[#167960] ${
                        pathname === "/profile/edit"
                          ? "active"
                          : ""
                      }`}
                    >
                      Edit Profil
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="mb-2 mt-8">
              <button
                onClick={() => setShowLogoutPopup(true)}
                className="block w-full text-left py-2 rounded"
              >
                <div className="flex flex-row">
                  <Image
                    src="/icon/Sign_out_squre.svg"
                    width={30}
                    height={30}
                    alt="logout"
                  />
                  <span
                    className={`ml-8 hover:text-[#167960] ${
                      pathname === "/profile/logout"
                        ? "active"
                        : ""
                    }`}
                  >
                    Logout
                  </span>
                </div>
              </button>
            </li>
            <li className="mb-2 mt-8">
              <Link href="/">
                <div className="block py-2 rounded">
                  <div className="flex flex-row">
                    <Image
                      src="/icon/Sign_out_squre_fill.svg"
                      width={30}
                      height={30}
                      alt="kembali"
                    />
                    <span
                      className={`ml-8 hover:text-[#167960] ${
                        pathname === "/profile/kembali"
                          ? "active"
                          : ""
                      }`}
                    >
                      Kembali
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Popup untuk Logout */}
      {showLogoutPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-[30%] h-[40%] p-4 rounded-lg">
            <h2 className="text-lg text-[#308967] font-semibold text-center mt-[5%]">
              Logout dari akun Anda
            </h2>
            <div className=""></div>
            <div className="flex flex-col justify-center mt-4 space-y-4">
              <button
                onClick={() => handleLogout()}
                className="px-4 py-2 bg-orange-700 text-white rounded hover:bg-red-600"
              >
                Logout
              </button>
              <button
                onClick={() => setShowLogoutPopup(false)}
                className="px-4 py-2 bg-[#3F9272] rounded hover:bg-green-700"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
