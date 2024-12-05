"use client";

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import router from "next/router";
import StarRatings from "react-star-ratings";

function Page() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [rating, setRating] = React.useState(4); // Nilai awal rating

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // State untuk menangani perubahan pada input deskripsi
  const [formData, setFormData] = useState({
    deskripsi: "",
  });
  const maxLength = 200; // Batas maksimum karakter
  // Fungsi untuk menangani perubahan input
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGoBack = () => {
    router.push("/Produk/paymentgateway");
  };

  return (
    <div className="min-h-screen bg-[#E5FFF9]">
      <button
        onClick={handleGoBack}
        className="ml-[7%] cursor-pointer translate-y-10 h-[50px] w-[50px]"
      ></button>
      <Image
        src="/icon/backk.svg"
        alt="icon background"
        width={70}
        height={70}
        className="ml-[6%] -translate-y-5"
      />
      <Image
        src="/icon/ornatredecc.svg"
        alt="Ornament Icon"
        width={390}
        height={390}
        className="ml-[7%] translate-y-3 h-[150%] w-[80%]"
      />
      <div className="ml-[7%] mr-[7%] py-2 bg-[#28DF99] text-2xl font-semibold text-white pl-4">
        Nilai Produk
      </div>
      <div className="bg-white ml-[7%] mr-[7%] h-[600px]">
        <p className="text-black ml-[20%] translate-y-10 text-2xl">
          Bunga mawar merah
        </p>
        <p className="text-black ml-[50%] translate-y-4">Alamat</p>
        <p className="text-black ml-[20%] translate-y-20">Warna</p>
        <p className="text-black ml-[20%] translate-y-20">Usia</p>

        <div className="p-4 translate-y-24 ml-[40%]">
          <StarRatings
            rating={rating}
            starRatedColor="gold"
            starHoverColor="goldenrod"
            starEmptyColor="gray"
            numberOfStars={5}
            changeRating={(newRating) => setRating(newRating)}
            name="rating"
            starDimension="30px"
            starSpacing="5px"
          />
        </div>

        <div className="ml-[7%] mr-[7%] mt-[5%] translate-y-36">
          <textarea
            name="deskripsi"
            value={formData.deskripsi}
            onChange={handleInputChange}
            placeholder="Berikan Ulasan Di Produk Ini"
            className="w-[100%] h-[200px] p-4 border bg-[#F2F2F2] rounded-md text-lg shadow-[5px_5px_5px] shadow-[#0000002e] "
          />
        </div>
        <button
          onClick={handleOpenPopup}
          className="text-[#FF0606] ml-[48%] font-bold text-xl w-28 h-8 rounded-sm translate-y-40 px-4 py-2"
        >
          Kirim
        </button>
        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-96 h-48 shadow-lg relative">
              <p className="mt-2 text-[#999696]">
                Terimakasih sudah belanja di T-Trana, nampak nya anda cukup puas
                dengan nilai yang diberikan kepada kami.
              </p>
              <div className="mt-4 space-x-40">
                <button
                  onClick={handleClosePopup}
                  className="px-4 py-2 text-[#6F6D6D] text-lg mt-5 rounded-md"
                >
                  Kembali
                </button>
                <span
                  className="text-lg text-[#3F9272] cursor-pointer"
                  onClick={handleClosePopup}
                >
                  Beranda
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
