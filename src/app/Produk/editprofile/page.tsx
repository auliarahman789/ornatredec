"use client";

import React, { ChangeEvent, useRef, useState } from 'react'
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from "next/navigation";

interface UserData {
  provinsi: string;
  kota: string;
  kecamatan: string;
  kelurahan: string;
  jalan: string;
  RtRw: string;
  patokanRumah: any;
  namaPenerima: string;
  no_hp: string;
}
function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formData, setFormData] = useState<UserData>({
    provinsi: "",
    kota: "",
    kecamatan: "",
    kelurahan: "",
    jalan: "",
    RtRw: "",
    patokanRumah: "",
    namaPenerima: "",
    no_hp: "",
  });

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

  const handleSave = async () => {
    try {
      var formData2 = new FormData();
      formData2.append("provinsi", formData.provinsi);
      formData2.append("kota", formData.kota);
      formData2.append("kecamatan", formData.kecamatan);
      formData2.append("kelurahan", formData.kelurahan);
      formData2.append("jalan", formData.jalan);
      formData2.append("RtRw", formData.RtRw);
      formData2.append("patoakanRumah", formData.patokanRumah);
      formData2.append("namaPenerima", formData.namaPenerima);
      formData2.append("no_hp", formData.no_hp);

      const userId = JSON.parse(localStorage.getItem("userData") || "{}").id;

      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_URL}api/update/${userId}`, // Ganti :id dengan userId
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
        localStorage.setItem("provinsi", formData.provinsi);
        localStorage.setItem("kota", formData.kota);
        localStorage.setItem("kecamatan", formData.kecamatan);
        localStorage.setItem("kelurahan", formData.kelurahan);
        localStorage.setItem("jalan", formData.jalan);
        localStorage.setItem("RtRw", formData.RtRw);
        localStorage.setItem("patokanRumah", formData.patokanRumah);
        localStorage.setItem("namaPenerima", formData.namaPenerima);
        localStorage.setItem("no_hp", formData.no_hp);

        //router?.push("/profile");
      } else {
        alert("Gagal memperbarui data pengguna.");
      }
      console.log(formData);
    } catch (error) {
      console.error("Kesalahan saat memperbarui data pengguna:", error);
      alert("Terjadi kesalahan saat memperbarui data Anda.");
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const handleGoBack = () => {
    router?.push("/Produk/paymentgateway");
  };

  return (
    <div className="min-h-screen bg-[#E5FFF9]">
      <button
        onClick={handleGoBack}
        className="ml-[7%] cursor-pointer translate-y-10 h-[50px] w-[50px]"
      >
        <Image
          src="/icon/backk.svg"
          alt="icon background"
          width={390}
          height={390}
          className=""
        />
      </button>
      <div className="mt-[7%] ml-[7%] mr-[7%] py-2 flex flex-row bg-[#28DF99] font-semibold text-white pl-8">
        Edit Alamat
      </div>
      <div className="text-black bg-white h-auto mr-[7%] ml-[7%] text-[18px] pb-4">
        <span className="pl-8">Provinsi/Kota/Kecamatan/Kelurahan</span>
        <input
          type="text"
          name="provinsi"
          defaultValue={formData.provinsi}
          onChange={handleInputChange}
          className="w-[95%] translate-x-7 p-4 border border-black bg-white rounded mb-1 "
        />
        <input
          type="text"
          name="kota"
          defaultValue={formData.kota}
          onChange={handleInputChange}
          className="w-[95%] translate-x-7 p-4 border border-black bg-white rounded shadow-sm mb-1"
        />
        <input
          type="text"
          name="kecamatan"
          defaultValue={formData.kecamatan}
          onChange={handleInputChange}
          className="w-[95%] translate-x-7 p-4 border border-black bg-white rounded shadow-sm mb-1"
        />
        <input
          type="text"
          name="kelurahan"
          defaultValue={formData.kelurahan}
          onChange={handleInputChange}
          className="w-[95%] translate-x-7 p-4 border border-black bg-white rounded shadow-sm mb-1"
        />
        <span className="pl-8">Jalan/Nama Gedung</span>
        <input
          type="text"
          name="jalan"
          defaultValue={formData.jalan}
          onChange={handleInputChange}
          className="w-[95%] translate-x-7 p-4 border border-black bg-white rounded mb-1 "
        />
        <span className="pl-8">RT/RW</span>
        <input
          type="text"
          name="RtRw"
          defaultValue={formData.RtRw}
          onChange={handleInputChange}
          className="w-[95%] translate-x-7 p-4 border border-black bg-white rounded mb-1 "
        />
        <span className="pl-8">Patokan Rumah </span>
        <input
          type="text"
          name="patokanRumah"
          defaultValue={formData.patokanRumah}
          onChange={handleInputChange}
          className="w-[95%] translate-x-7 p-4 border border-black bg-white rounded mb-1 "
        />
        <span className="pl-8">Nama Penerima </span>
        <input
          type="text"
          name="namaPenerima"
          defaultValue={formData.namaPenerima}
          onChange={handleInputChange}
          className="w-[95%] translate-x-7 p-4 border border-black bg-white rounded mb-1 "
        />
        <span className="pl-8">No HP </span>
        <input
          type="text"
          name="no_hp"
          defaultValue={formData.no_hp}
          onChange={handleInputChange}
          className="w-[95%] translate-x-7 p-4 border border-black bg-white rounded mb-1 "
        />
        <p className="mt-9 pl-8">Kategori Alamat</p>
        <p className="mt-4 pl-8">Alamat Pengiriman Utama</p>
        <div className="border text-[#838282] bg-[#F7F7F7] text-center mt-8 p-3 rounded mr-[2%] ml-[2%]">
          Hapus Alamat
        </div>
        <div className="border bg-[#28DF99] text-white text-center mt-8 p-3 rounded mr-[2%] ml-[2%]">
          Simpan
        </div>
      </div>
    </div>
  );
}

export default page
