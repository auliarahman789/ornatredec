"use client";

import React, { ChangeEvent, useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import Sidebar from "./sidebar";

interface UserData {
  username: string;
  email: string;
  tanggalLahir: any;
  no_hp: string;
  // alamat: string;
  photoProfile: any;
  provinsi: string;
  kotakabupaten: string;
  kecamatan: string;
  kelurahanDesa: string;
  jalan: string;
  RtRw: string;
}

const Edit = () => {
  const [formData, setFormData] = useState<UserData>({
    username: "",
    email: "",
    tanggalLahir: "",
    no_hp: "",
    // alamat: "",
    photoProfile: "/img/default-avatar.png", // Gambar default
    provinsi: "",
    kotakabupaten: "",
    kecamatan: "",
    kelurahanDesa: "",
    jalan: "",
    RtRw: "",
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    getUser();
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setFormData({
        ...userData,
        photoProfile: userData.photoProfile || "/img/default-avatar.png", // Gunakan default jika kosong
      });
    }
  }, []);

  async function getUser() {
    const url = `https://74gslzvj-8000.asse.devtunnels.ms/api/getMe`;
    try {
      const res = await axios.get(url, {
        // Menggunakan params untuk query string
        withCredentials: true,
      });

      console.log("AA", res.data);
      setUserData(res.data.user); // Simpan data yang diterima ke dalam state
    } catch (error: any) {
      console.log("AAA", error);
    }
  }

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(value);
  };

  const handleInputImage = (e: any) => {
    const file = e.target.files?.[0]; // Ambil file dari input
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        photoProfile: URL.createObjectURL(file), // Ubah file menjadi URL untuk preview
      }));
    }
    console.log(e.target.files);
  };

  // const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setFormData((prevData) => ({
  //         ...prevData,
  //         photoProfile: reader.result as string, // Simpan gambar sebagai URL
  //       }));
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleavatarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger file input click
    }
  };

  const handleSave = async () => {
    try {
      var formData2 = new FormData();
      formData2.append("username", formData.username);
      formData2.append("email", formData.email);
      formData2.append("tanggalLahir", formData.tanggalLahir);
      formData2.append("no_hp", formData.no_hp);
      // formData2.append("alamat", formData.alamat);
      formData2.append("photoProfile", formData.photoProfile);
      formData2.append("provinsi", formData.provinsi);
      formData2.append("kotakabupaten", formData.kotakabupaten);
      formData2.append("kecamatan", formData.kecamatan);
      formData2.append("kelurahanDesa", formData.kelurahanDesa);
      formData2.append("jalan", formData.jalan);
      formData2.append("RtRw", formData.RtRw);

      // Ambil ID pengguna dari localStorage
      const userId = JSON.parse(localStorage.getItem("userData") || "{}").id;

      const response = await axios.put(
        `https://74gslzvj-8000.asse.devtunnels.ms/api/update/${userId}`, // Ganti :id dengan userId
        formData2,
        {
          headers: {
            "Content-Type": "multipart/form-Data",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Sertakan token jika diperlukan
          },
        }
      );

      if (response.status === 200) {
        // Jika berhasil, simpan data di localStorage
        localStorage.setItem("userData", JSON.stringify(formData));
        localStorage.setItem("username", formData.username);
        localStorage.setItem("tanggalLahir", formData.tanggalLahir);
        localStorage.setItem("photoProfile", formData.photoProfile);
        localStorage.setItem("no_hp", formData.no_hp);
        localStorage.setItem("provinsi", formData.provinsi);
        localStorage.setItem("kotakabupaten", formData.kotakabupaten);
        localStorage.setItem("kecamatan", formData.kecamatan);
        localStorage.setItem("kelurahanDesa", formData.kelurahanDesa);
        localStorage.setItem("jalan", formData.jalan);
        localStorage.setItem("RtRw", formData.RtRw);

        router.push("/profile");
      } else {
        alert("Gagal memperbarui data pengguna.");
      }
      console.log(formData);
    } catch (error) {
      console.error("Kesalahan saat memperbarui data pengguna:", error);
      alert("Terjadi kesalahan saat memperbarui data Anda.");
    }
  };

  const handleGoBack = () => {
    router.push("/profile");
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div
      // className="flex-1 bg-cover bg-center"
      // style={{ backgroundImage: "url('/img/bg.jpg')", height: "160vh" }}
      >
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="bg-white p-16 rounded-lg w-[65%] h-[150%] translate-x-[15%] z-20 relative pointer-events-auto mt-[30%]">
            <div className="flex justify-center -translate-y-[10%]">
              <Image
                src={formData.photoProfile || "/img/default-avatar.png"} // Jika tidak ada gambar, gunakan default avatar
                width={200}
                height={200}
                alt="Profile Picture"
                className="rounded-full cursor-pointer"
                onClick={handleavatarClick}
                unoptimized // Menghindari optimisasi yang mungkin menyebabkan masalah pada data URL
              />

              <input
                type="file"
                name="photoProfile"
                accept="image/*"
                onChange={handleInputImage}
                ref={fileInputRef}
                className="hidden"
              />
            </div>

            {/* Input fields for user data */}
            <div className="text-[#A9A7A7] text-[18px] pb-4">
              <span className="pl-4">Nama Pengguna:</span>
              <input
                type="text"
                name="username"
                defaultValue={formData.username}
                onChange={handleInputChange}
                className="w-full p-4 border bg-[#CCFFEB] rounded-md shadow-sm"
              />
            </div>
            <div className="text-[#A9A7A7] text-[18px] pb-4">
              <span className="pl-4">Email:</span>
              <input
                type="email"
                name="email"
                defaultValue={formData.email}
                onChange={handleInputChange}
                className="w-full p-4 border bg-[#CCFFEB] rounded-md shadow-sm"
              />
            </div>
            <div className="text-[#A9A7A7] text-[18px] pb-4">
              <span className="pl-4">Tanggal Lahir:</span>
              <input
                type="date"
                name="tanggalLahir"
                defaultValue={formData.tanggalLahir}
                onChange={handleInputChange}
                className="w-full p-4 border bg-[#CCFFEB] rounded-md shadow-sm"
              />
            </div>
            <div className="pb-5">
              <span className="pl-4 text-[#A9A7A7]">No Telepon:</span>
              <input
                type="text"
                name="no_hp"
                defaultValue={formData.no_hp}
                onChange={handleInputChange}
                className="w-full p-4 border bg-[#CCFFEB] rounded-md shadow-sm"
              />
            </div>
            {/* <div className="text-[#A9A7A7] text-[18px] pb-4">
              <span className="pl-4">Alamat:</span>
              <textarea
                name="alamat"
                defaultValue={formData.alamat}
                onChange={handleInputChange}
                className="w-full p-4 border bg-[#CCFFEB] rounded-md shadow-sm"
              />
            </div>

            <div className="grid grid-cols-3">
              <div className="flex justify-end mt-[20%]">
                <button
                  onClick={handleGoBack}
                  className="px-4 py-2 bg-[#3F9272] text-white rounded-lg"
                >
                  Kembali
                </button>
              </div>
              <div></div>
              <div className="flex justify-start mt-[20%]">
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-[#CCFFEB] text-[#3F9272] rounded-lg"
                >
                  Perbarui
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
function setUserData(user: any) {
  throw new Error("Function not implemented.");
}
