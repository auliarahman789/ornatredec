"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import { useRouter } from "next/navigation"; // Gunakan import ini untuk app router
import Image from "next/image";

interface UserData {
  username: string;
  email: string;
  birthday: string;
  Notelepon: string;
  alamat: string;
  avatar: string; // Tambahkan properti avatar
}

const Profile = () => {
  const [userData, setUserData] = useState<UserData>({
    username: "",
    email: "",
    birthday: "",
    Notelepon: "",
    alamat: "",
    avatar: "/img/default-avatar.png", // Gambar default
  });

  const router = useRouter();

  useEffect(() => {
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

  const handleDeleteAccount = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    router.push("/"); //akan pindah setelah hapus akun
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div
        className="flex-1 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/bg.jpg')" }}
      >
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="bg-white p-16 rounded-lg shadow-lg w-[65%] h-[90%] translate-x-[15%] z-20 relative pointer-events-auto">
            <div className="-translate-y-[6%]">
              <div className="flex justify-end mb-4 translate-y-[50%]">
                <Image
                  src={userData.avatar} // Menampilkan gambar dari localStorage
                  width={200}
                  height={200}
                  alt="Profile Avatar"
                  className="rounded-full"
                />
              </div>
              <div className="-translate-y-[38%]">
                <div className="text-[#A9A7A7] text-[18px] pb-4 ">
                  <span className="pl-4">Nama Pengguna :</span>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      value={userData.username}
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
                      value={userData.email}
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
                      value={userData.birthday}
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
                      value={userData.Notelepon}
                      className="w-[60%] p-4 border bg-[#CCFFEB] rounded-md shadow-sm"
                      readOnly
                    />
                  </div>
                </div>
                <div className="text-[#A9A7A7] text-[18px] pb-4">
                  <span className="pl-4">Alamat :</span>
                  <div className="flex flex-col">
                    <textarea
                      value={userData.alamat}
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