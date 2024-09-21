"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleLogout = async () => {
    try {
      await fetch(`https://74gslzvj-8000.asse.devtunnels.ms/api/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Hapus data pengguna dari localStorage
      localStorage.removeItem("userData");
      localStorage.removeItem("token");
      router.push("/"); // Redirect ke halaman beranda setelah logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      // untuk menghapus akun
      const response = await fetch(
        `https://74gslzvj-8000.asse.devtunnels.ms/api/delete/:id`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Gagal menghapus akun");
      }

      // Hapus data pengguna dari localStorage
      localStorage.removeItem("userData");
      localStorage.removeItem("token");
      alert("Akun Anda telah dihapus secara permanen."); // Pesan konfirmasi
      router.push("/login"); // Redirect ke halaman login
    } catch (error) {
      console.error("Delete account error:", error);
      alert("Terjadi kesalahan saat menghapus akun.");
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
        <div className="p-4 flex justify-center bg-[#CCFFEB]">
          <Image src="/icon/logo.svg" width={85} height={70} alt="logo" />
        </div>
        <nav className="flex-1 p-4 bg-gray-800">
          <ul>
            <li className="mb-2">
              <Link href="/profile">
                <div className="flex items-center py-2 px-4 rounded hover:bg-gray-700">
                  <Image
                    src="/icon/profil.svg"
                    width={30}
                    height={30}
                    alt="profil"
                  />
                  <span className="ml-3">Profil</span>
                </div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/profile/riwayat">
                <div className="flex items-center py-2 px-4 rounded hover:bg-gray-700">
                  <Image
                    src="/icon/post.svg"
                    width={30}
                    height={30}
                    alt="riwayat"
                  />
                  <span className="ml-3">Riwayat</span>
                </div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/profile/edit">
                <div className="block py-2 px-4 rounded hover:bg-gray-700">
                  <div className="flex flex-row">
                    <Image
                      src="/icon/Rectangle 1.svg"
                      width={30}
                      height={30}
                      alt="edit"
                    />
                    <span className="ml-3">Edit Profil</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="mb-2">
              <button
                onClick={() => setShowLogoutPopup(true)}
                className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700"
              >
                <div className="flex flex-row">
                  <Image
                    src="/icon/Sign_out_squre.svg"
                    width={30}
                    height={30}
                    alt="logout"
                  />
                  <span className="ml-3">Logout</span>
                </div>
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => setShowDeletePopup(true)}
                className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700"
              >
                <div className="flex flex-row">
                  <Image
                    src="/icon/Trash.svg"
                    width={30}
                    height={30}
                    alt="hapus"
                  />
                  <span className="ml-3">Hapus Akun</span>
                </div>
              </button>
            </li>
            <li className="mb-2">
              <Link href="/">
                <div className="block py-2 px-4 rounded hover:bg-gray-700">
                  <div className="flex flex-row">
                    <Image
                      src="/icon/Sign_out_squre_fill.svg"
                      width={30}
                      height={30}
                      alt="kembali"
                    />
                    <span className="ml-3">Kembali</span>
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
            <div className="border-b-2 border-[#80FCCD] mt-[10%]"></div>
            <div className="flex flex-col justify-center mt-4 space-y-4">
              <button
                onClick={handleLogout}
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
      {showDeletePopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-[30%] h-[50%] p-4 rounded-lg">
            <h2 className="text-lg text-[#308967] font-semibold text-center mt-[5%]">
              Hapus Akun
            </h2>
            <p className="text-[16px] text-[#308967] text-center">
              Akun anda akan terhapus selamanya jika anda menghapusnya
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
      )}
    </div>
  );
};

export default Sidebar;
