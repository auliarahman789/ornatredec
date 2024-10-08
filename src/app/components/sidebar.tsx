"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import logo from "../../../public/icon/logosp.svg";
import axios, { AxiosError } from "axios";

// Define the expected structure of the error response
interface ErrorResponse {
  message: string;
}

const Sidebar = () => {
  const router = useRouter();
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const pathname = usePathname();
  // const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Token tidak ditemukan. Silakan login kembali.");
      return;
    }

    try {
      const response = await axios.delete(
        `https://74gslzvj-8000.asse.devtunnels.ms/api/logout`,
        {
          withCredentials: true,
        }
      );

      console.log("Logout Response:", response.data);

      // Hapus data pengguna dari localStorage
      // localStorage.removeItem("userData");
      // localStorage.removeItem("token");
      router.push("/");
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error("Logout error:", axiosError.response);
      // if (axiosError.response) {
      //   const errorData = axiosError.response.data as ErrorResponse;
      //   const errorMessage =
      //     errorData.message || "Terjadi kesalahan saat logout.";
      //   if (axiosError.response.status === 401) {
      //     alert("Token tidak valid, silakan login kembali.");
      //     //router.push("/login");
      //   } else {
      //     alert("Logout error: " + errorMessage);
      //   }
      // } else {
      //   alert("Terjadi kesalahan jaringan.");
      // }
    }
  };

  // const handleDeleteAccount = async () => {
  //   const token = localStorage.getItem("token");
  //   const userId = localStorage.getItem("userId");

  //   if (!token) {
  //     alert("Token tidak ditemukan. Silakan login kembali.");
  //     return;
  //   }
  //   if (!userId) {
  //     alert("User ID tidak ditemukan.");
  //     return;
  //   }

  //   try {
  //     const response = await axios.delete(
  //       `https://74gslzvj-8000.asse.devtunnels.ms/api/delete/${userId}`,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     console.log("Delete Response:", response.data);

  //     // Hapus data pengguna dari localStorage
  //     localStorage.removeItem("userData");
  //     localStorage.removeItem("token");
  //     alert("Akun Anda telah dihapus secara permanen.");
  //     router.push("/login"); // Redirect ke halaman login
  //   } catch (error) {
  //     const axiosError = error as AxiosError; // Type assertion
  //     console.error("Delete account error:", axiosError.response);
  //     if (axiosError.response) {
  //       const errorData = axiosError.response.data as ErrorResponse; // Type assertion
  //       const errorMessage =
  //         errorData.message || "Terjadi kesalahan saat menghapus akun.";
  //       if (axiosError.response.status === 401) {
  //         alert("Token tidak valid, silakan login kembali.");
  //         router.push("/login");
  //       } else {
  //         alert("Delete account error: " + errorMessage);
  //       }
  //     } else {
  //       alert("Terjadi kesalahan jaringan.");
  //     }
  //   }
  // };

  return (
    <div className="flex min-h-screen">
      <div className="fixed top-0 left-0">
        <nav className="nav bg-gradient-to-b from-[#167960] to-[#28DFB1] w-64 h-screen flex flex-col">
          <div className="p-4 flex mb-10 justify-center">
            <Image
              src={logo}
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
                        ? "text-[#167960]"
                        : "text-[#ffff]"
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
                        ? "text-[#167960]"
                        : "text-[#ffff]"
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
                          ? "text-[#167960]"
                          : "text-[#ffff]"
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
                        ? "text-[#167960]"
                        : "text-[#ffff]"
                    }`}
                  >
                    Logout
                  </span>
                </div>
              </button>
            </li>
            {/* <li className="mb-2">
              <button
                onClick={() => setShowDeletePopup(true)}
                className="block w-full text-left py-2 px-4 rounded hover:bg-[#CCFFEB]"
              >
                <div className="flex flex-row">
                  <Image
                    src="/icon/Trash.svg"
                    width={30}
                    height={30}
                    alt="hapus"
                  />
                  <span className="ml-3 text-[#3F9272] ">Hapus Akun</span>
                </div>
              </button>
            </li> */}
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
                          ? "text-[#167960]"
                          : "text-[#ffff]"
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

      {/* Popup untuk Hapus Akun */}
      {/* {showDeletePopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-[30%] h-[50%] p-4 rounded-lg">
            <h2 className="text-lg text-[#308967] font-semibold text-center mt-[5%]">
              Hapus Akun
            </h2>
            <p className="text-[16px] text-[#308967] text-center">
              Akun Anda akan terhapus selamanya jika Anda menghapusnya.
            </p>
            <div className="border-b-2 border-[#80FCCD] mt-[10%]"></div>
            <div className="flex flex-col justify-center mt-4 space-y-4">
              <button
                onClick={() => setShowDeletePopup(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Batal
              </button>
              <button
                onClick={handleDeleteAccount}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Hapus Akun
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Sidebar;
