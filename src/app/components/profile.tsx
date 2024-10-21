"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import { useRouter } from "next/navigation";
import axios from "axios";

import Image from "next/image";

interface UserData {
  username: string;
  email: string;
  tanggalLahir: string; // Pastikan ini adalah string
  no_hp: string;
  alamat: string;
  photoProfile: string | null; // Pastikan ini sesuai
}

const Profile = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const router = useRouter();

  useEffect(() => {
    getUser();

    const updateUserData = () => {
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        const parsedUserData: UserData = JSON.parse(storedUserData);
        setUserData(parsedUserData);
      }
    };

    // Panggil updateUserData saat komponen di-mount
    updateUserData();

    // Tambahkan event listener untuk update data jika ada perubahan
    window.addEventListener("storage", updateUserData);

    return () => {
      // Hapus event listener saat komponen di-unmount
      window.removeEventListener("storage", updateUserData);
    };
  }, []);

  async function getUser() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/getMe`;
    try {
      const res = await axios.get(url, { withCredentials: true });
      console.log("Data pengguna:", res.data); // Log data pengguna

      if (res.data && res.data.user) {
        const user = res.data.user;
        console.log("User Photo Profile:", user.photoProfile); // Log nilai photoProfile

        setUserData(user); // Simpan data user ke state
      } else {
        console.error("User data is null or undefined");
      }
    } catch (error: any) {
      console.log("Error fetching user data:", error);
    }
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="bg-white p-16 rounded-lg shadow-lg w-[65%] h-[90%] translate-x-[15%] z-20 relative pointer-events-auto">
            <div className="-translate-y-[6%]">
              <div className="flex justify-end mb-4 translate-y-[50%]">
                <Image
                  src={
                    userData?.photoProfile
                      ? `https://74gslzvj-8000.asse.devtunnels.ms${userData.photoProfile}`
                      : "/img/default-avatar.png"
                  }
                  width={200}
                  height={200}
                  alt="Profile"
                  className="rounded-full"
                  onError={(e) => {
                    e.currentTarget.src = "/img/default-avatar.png"; // Ganti dengan foto default jika gagal
                  }}
                />
              </div>
              <div className="-translate-y-[38%]">
                <div className="text-[#A9A7A7] text-[18px] pb-4 ">
                  <span className="pl-4">Nama Pengguna :</span>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      value={userData?.username || ""}
                      className="w-[60%] p-4 border bg-[#CCFFEB] rounded-md shadow-sm"
                      readOnly
                    />
                  </div>
                </div>
                <div className="text-[#A9A7A7] text-[18px] pb-4">
                  <span className="pl-4">Email :</span>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      value={userData?.email || ""}
                      className="w-[60%] p-4 border bg-[#CCFFEB] rounded-md shadow-sm"
                      readOnly
                    />
                  </div>
                </div>
                <div className="text-[#A9A7A7] text-[18px] pb-4">
                  <span className="pl-4">Tanggal Lahir:</span>
                  <div className="flex flex-col">
                    <input
                      type="date"
                      value={userData?.tanggalLahir || ""}
                      className="w-[60%] p-4 border bg-[#CCFFEB] rounded-md shadow-sm"
                      readOnly
                    />
                  </div>
                </div>
                <div className="text-[#A9A7A7] text-[18px] pb-4">
                  <span className="pl-4">No Telepon :</span>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      value={userData?.no_hp || ""}
                      className="w-[60%] p-4 border bg-[#CCFFEB] rounded-md shadow-sm"
                      readOnly
                    />
                  </div>
                </div>
                <div className="text-[#A9A7A7] text-[18px] pb-4">
                  <span className="pl-4">Alamat :</span>
                  <div className="flex flex-col">
                    <textarea
                      value={userData?.alamat || ""}
                      className="w-[60%] p-4 border bg-[#CCFFEB] rounded-md shadow-sm"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
