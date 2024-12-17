/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import up from "../../../public/img/upkonten.png";
import Image from "next/image";
import Konten from "@/components/super admin/forum/konten";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import LoadingProduk from "@/components/super admin/loadingProduk";
import LoadingForum from "@/components/Forum/loading";

interface Konten {
  judul: string;
  desc: string;
  fotoKonten: File | null; // Tentukan tipe data File
  kategori_forum: string;
}
type PopupPost = {
  isVisible: boolean;
  onClose: (isClose: boolean) => void;
};
const BuatKonten: React.FC<PopupPost> = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [formData, setFormData] = useState<Konten>({
    judul: "",
    desc: "",
    fotoKonten: null,
    kategori_forum: "",
  });
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleInputImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        fotoKonten: file,
      }));
      setFilePreview(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const router = useRouter();
  async function buatPostingan() {
    const formData2 = new FormData();
    formData2.append("judul", formData.judul);
    formData2.append("desc", formData.desc);
    if (formData.fotoKonten) {
      formData2.append("fotoKonten", formData.fotoKonten);
    }
    formData2.append("kategori_forum", formData.kategori_forum);

    const url = `${process.env.NEXT_PUBLIC_URL}api/post`;
    try {
      setIsLoading(true);
      const res = await axios.post(url, formData2, {
        withCredentials: true,
      });
      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Anda Berhasil Membuat Konten, Selamat 🎉.",
      });
        console.log(res.data);
        onClose(true)
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      console.error(error);
      alert("Gagal membuat postingan");
    }
  }

  const handleCancel = () => {
    onClose(true)
  };

    return (
      <div className="flex bg-black/30 backdrop-blur-sm fixed justify-center items-center inset-0 z-20">          
        <div className="flex bg-white h-[80%] b-[4%] pe-[2%] pt-[2%]">
        <div className="w-[38%] flex-col pt-[3.5%]">
            <Image
            onClick={handleImageClick}
            className="w-[80%] h-[45%] justify-self-center"
            src={filePreview || up}
            alt="up"
            width={400}
            height={400}
            />
            <input
            type="file"
            name="fotoKonten"
            ref={inputRef}
            accept="image/x-png,image/gif,image/jpeg"
            onChange={handleInputImage}
            className="mt-3"
            style={{ display: "none" }}
            />
            {/* && <Image src={filePreview} alt="Preview" width={100} height={100} />}
            
            Input Kategori */}
            <div className="flex flex-col space-y-6 mt-[15%] justify-self-center">
            {/* Tanaman */}
            <div className="flex space-x-3">
                <input
                type="radio"
                name="kategori_forum"
                className="w-[20px]"
                value="tanaman"
                id="tanaman"
                onChange={handleInputChange}
                />
                <label
                htmlFor="tanaman"
                className="text-[#308967] text-[20px] font-light"
                >
                Tanaman
                </label>
            </div>

            {/* Burung */}
            <div className="flex space-x-3">
                <input
                type="radio"
                name="kategori_forum"
                className="w-[20px]"
                value="burung"
                id="burung"
                onChange={handleInputChange}
                />
                <label
                htmlFor="burung"
                className="text-[#308967] text-[20px] font-light"
                >
                Burung
                </label>
            </div>
            <div className="flex space-x-3">
                <input
                type="radio"
                name="kategori_forum"
                className="w-[20px] border-2 border-[#308967]"
                value="ikan"
                id="ikan"
                onChange={handleInputChange}
                />
                <label
                htmlFor="ikan"
                className="text-[#308967] text-[20px] font-light"
                >
                Ikan
                </label>
            </div>
            </div>
        </div>

        {/* Form Input */}
        <div className="w-[62%] p-[2.5%] pb-[2.5%]">
            <div  onClick={handleCancel} className="relative">
            <button
               
                className="absolute right-0 bg-[#367B60] -translate-y-[80%] translate-x-[80%] pt-1 px-3 text-[20px] rounded-md text-white"
            >
                X
            </button>
            </div>
            <div className="bg-[#E2FFF8] rounded-[5px] w-[100%] px-[2.2%] pt-[2.2%] pb-[0.5%] h-[80%]">
            <div className="flex-col space-y-[2%] h-[100%] w-[100%]">
                <input
                type="text"
                placeholder="Masukan Judul"
                name="judul"
                onChange={handleInputChange}
                className="bg-white text-lg rounded-[5px] pt-[1%] placeholder:font-light ps-[8%] placeholder:text-[#51CB9F] placeholder:text-[24px] w-[100%] h-[11%]"
                />
                <textarea
                placeholder="Deskripsi"
                name="desc"
                onChange={handleInputChange}
                className="bg-white rounded-[5px] text-lg pt-[3%] placeholder:font-light ps-[8%] placeholder:text-[#51CB9F] placeholder:text-[32px] w-[100%] h-[80%]"
                />
            </div>
            </div>
            <div className="relative">
            <button
                disabled={isLoading}
                className="w-[120px] absolute right-0 top-4 h-[40px] bg-[#E2FFF8] rounded-[5px] text-[#51CB9F] text-[24px] pb-2 pt-1"
                onClick={buatPostingan}
            >
                {isLoading ? "" : "Tambah"}
            </button>
            {isLoading && <LoadingForum />}
            </div>
        </div>
        </div>
      </div>
  );
}

export default BuatKonten;