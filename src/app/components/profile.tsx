"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import { useRouter } from "next/navigation"; // Gunakan import ini untuk app router
import Image from "next/image";
import axios from "axios";

interface UserData {
  username: string;
  email: string;
  birthday: string;
  no_hp: string;
  alamat: string;
  photoProfile: string; // Tambahkan properti photoProfile
}

const Profile = () => {
  const [userData, setUserData] = useState<any>(null);

  const router = useRouter();

  useEffect(() => {
    getUser();
    // const updateUserData = () => {
    //   const storedUserData = localStorage.getItem("userData");
    //   if (storedUserData) {
    //     const parsedUserData: UserData = JSON.parse(storedUserData);
    //     setUserData(parsedUserData);
    //   }
    // };

    // // Panggil updateUserData saat komponen di-mount
    // updateUserData();

    // // Tambahkan event listener untuk update data jika ada perubahan
    // window.addEventListener("storage", updateUserData);

    // return () => {
    //   // Hapus event listener saat komponen di-unmount
    //   window.removeEventListener("storage", updateUserData);
    // };
  }, []);
  async function getUser() {
    const url = `https://74gslzvj-8000.asse.devtunnels.ms/api/getMe`;
    try {
      const res = await axios.get(url, {
        // Menggunakan params untuk query string
        withCredentials: true,
      });

      console.log(res.data);
      setUserData(res.data.user); // Simpan data yang diterima ke dalam state
    } catch (error: any) {
      console.log(error);
    }
  }

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
        style={{ backgroundImage: "url('/img/bg.jpg')", height: "130vh" }}
      >
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="bg-white p-16 rounded-lg shadow-lg w-[65%] h-[90%] translate-x-[15%] z-20 relative pointer-events-auto">
            <div className="-translate-y-[6%]">
              <div className="flex justify-end mb-4 translate-y-[50%]">
                <img
                  src={`https://74gslzvj-8000.asse.devtunnels.ms${userData?.photoProfile}`} // Menampilkan gambar dari localStorage
                  width={200}
                  height={200}
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div className="-translate-y-[38%]">
                <div className="text-[#A9A7A7] text-[18px] pb-4 ">
                  <span className="pl-4">Nama Pengguna :</span>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      value={userData?.username}
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
                      value={userData?.email}
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
                      value={userData?.birthday}
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
                      value={userData?.no_hp}
                      className="w-[60%] p-4 border bg-[#CCFFEB] rounded-md shadow-sm"
                      readOnly
                    />
                  </div>
                </div>
                <div className="text-[#A9A7A7] text-[18px] pb-4">
                  <span className="pl-4">Alamat :</span>
                  <div className="flex flex-col">
                    <textarea
                      value={userData?.alamat}
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
function getUser() {
  throw new Error("Function not implemented.");
}
