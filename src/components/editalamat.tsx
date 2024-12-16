"use client";

import React, { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface UserData {
  provinsi: string;
  kota: string;
  kecamatan: string;
  kelurahan: string;
  jalan: string;
  RtRw: string;
  patokanRumah: string;
  namaPenerima: string;
  no_hp: string;
}

function Page() {
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

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      // if (
      //   !formData.provinsi ||
      //   !formData.kota ||
      //   !formData.kecamatan ||
      //   !formData.kelurahan ||
      //   !formData.jalan ||
      //   !formData.RtRw ||
      //   !formData.namaPenerima ||
      //   !formData.no_hp
      // ) {
      //   alert("Semua field harus diisi.");
      //   return;
      // }

      // if (!/^\d+$/.test(formData.no_hp)) {
      //   alert("Nomor HP harus berupa angka.");
      //   return;
      // }

      // const userId = JSON.parse(localStorage.getItem("userData") || "{}").id;
      // const token = localStorage.getItem("token");

      // if (!userId || !token) {
      //   alert("User ID atau token tidak ditemukan. Silakan login ulang.");
      //   return;
      // }

      // const formData2 = new FormData();
      // Object.keys(formData).forEach((key) => {
      //   formData2.append(key, (formData as any)[key]);
      // });

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}api/alamat`,
        {
          provinsi: "Jawa Barat",
          kota_kabupaten: "Bandung Barat",
          kecamatan: "Cisarua",
          kelurahan_desa: "Padaasih",
          jalan_namagedung: "Jl. Kamarung Girang",
          rtrw: "RT 02/RW 14",
          patokan: "SDN Budimulya",
          nama_penerima: "Irfan",
          kategori_alamat: "Rumah",
          alamat_pengiriman_utama: "Aktif",
        },
        {
          withCredentials: true,
        }
      );

      // if (response.status === 200) {
      //   localStorage.setItem("userData", JSON.stringify(formData));
      //   alert("Data berhasil diperbarui.");
      //   router.push("/profile");
      // } else {
      //   alert("Gagal memperbarui data. Periksa data Anda.");
      // }
    } catch (error) {
      console.error("Kesalahan saat memperbarui data pengguna:", error);
      alert(
        "Terjadi kesalahan saat memperbarui data. Silakan coba lagi nanti."
      );
    }
  };

  const handleGoBack = () => {
    router.push("/Produk/paymentgateway");
  };

  const handleDelete = () => {
    if (confirm("Apakah Anda yakin ingin menghapus alamat ini?")) {
      setFormData({
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
      alert("Alamat berhasil dihapus.");
    }
  };

  return (
    <div className="min-h-screen bg-[#E5FFF9]">
      <button
        onClick={handleGoBack}
        className="ml-[7%] cursor-pointer translate-y-10 h-[50px] w-[50px]"
      >
        <img
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
          value={formData.provinsi}
          onChange={handleInputChange}
          className="w-[95%] translate-x-7 p-4 border border-black bg-white rounded mb-1"
        />
        <input
          type="text"
          name="kota"
          value={formData.kota}
          onChange={handleInputChange}
          className="w-[95%] translate-x-7 p-4 border border-black bg-white rounded mb-1"
        />
        <input
          type="text"
          name="kecamatan"
          value={formData.kecamatan}
          onChange={handleInputChange}
          className="w-[95%] translate-x-7 p-4 border border-black bg-white rounded mb-1"
        />
        <input
          type="text"
          name="kelurahan"
          value={formData.kelurahan}
          onChange={handleInputChange}
          className="w-[95%] translate-x-7 p-4 border border-black bg-white rounded mb-1"
        />
        <span className="pl-8">Jalan/Nama Gedung</span>
        <input
          type="text"
          name="jalan"
          value={formData.jalan}
          onChange={handleInputChange}
          className="w-[95%] translate-x-7 p-4 border border-black bg-white rounded mb-1"
        />
        <span className="pl-8">RT/RW</span>
        <input
          type="text"
          name="RtRw"
          value={formData.RtRw}
          onChange={handleInputChange}
          className="w-[95%] translate-x-7 p-4 border border-black bg-white rounded mb-1"
        />
        <span className="pl-8">Patokan Rumah</span>
        <input
          type="text"
          name="patokanRumah"
          value={formData.patokanRumah}
          onChange={handleInputChange}
          className="w-[95%] translate-x-7 p-4 border border-black bg-white rounded mb-1"
        />
        <span className="pl-8">Nama Penerima</span>
        <input
          type="text"
          name="namaPenerima"
          value={formData.namaPenerima}
          onChange={handleInputChange}
          className="w-[95%] translate-x-7 p-4 border border-black bg-white rounded mb-1"
        />
        <span className="pl-8">No HP</span>
        <input
          type="text"
          name="no_hp"
          value={formData.no_hp}
          onChange={handleInputChange}
          className="w-[95%] translate-x-7 p-4 border border-black bg-white rounded mb-1"
        />
        <p className="mt-9 pl-8">Kategori Alamat</p>
        <p className="mt-4 pl-8">Alamat Pengiriman Utama</p>
        <div
          onClick={handleDelete}
          className="border text-[#838282] cursor-pointer bg-[#F7F7F7] text-center mt-8 p-3 rounded mr-[2%] ml-[2%]"
        >
          Hapus Alamat
        </div>
        <div
          onClick={handleSave}
          className="border bg-[#28DF99] text-white cursor-pointer text-center mt-8 p-3 rounded mr-[2%] ml-[2%]"
        >
          Simpan
        </div>
      </div>
    </div>
  );
}

export default Page;
