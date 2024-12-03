"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

// Interface untuk produk
interface SubVariasi {
  nama_sub_variasi: string;
  stok: number;
  harga: number;
  usia: string;
}

interface Variasi {
  nama_variasi: string;
  subvariasis: SubVariasi[];
}

interface Produk {
  judul_produk: string;
  deskripsi_produk: string;
  harga: number;
  foto_produk: string;
  variasis: Variasi[];
}

// Komponen popup untuk checkout
interface CheckoutPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const CheckoutPopup: React.FC<CheckoutPopupProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Apakah Anda Yakin?
        </h2>
        <p className="mb-6">Selesaikan pembayaran ini dengan klik Konfirmasi</p>
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-[#6F6D6D] rounded"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-[#3F9272] rounded"
          >
            Konfirmasi
          </button>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<Produk>({
    judul_produk: "",
    deskripsi_produk: "",
    harga: 0,
    foto_produk: "",
    variasis: [],
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Fungsi untuk pergi kembali ke halaman sebelumnya
  const handleGoBack = () => {
    router.push("/Produk/pesanan/[id]");
  };

  // Fungsi untuk membuka popup
  const handleCheckoutClick = () => {
    setIsPopupOpen(true);
  };

  // Fungsi untuk menutup popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // Fungsi untuk mengonfirmasi checkout
  const handleConfirmCheckout = () => {
    setIsPopupOpen(false);
    alert("Checkout berhasil!");
    // Anda bisa menambahkan logika checkout API di sini
  };

  // Mengambil data produk dari API
  const getProduk = async () => {
    const url = `${process.env.NEXT_PUBLIC_URL}api/getProduk`;
    try {
      const res = await axios.get(url, { withCredentials: true });
      setFormData({
        judul_produk: res.data.judul_produk || "",
        deskripsi_produk: res.data.deskripsi_produk || "",
        harga: res.data.harga || 0,
        foto_produk: res.data.foto_produk || "",
        variasis: res.data.variasis || [],
      });
    } catch (error) {
      console.error("Failed to fetch produk data", error);
    }
  };

  useEffect(() => {
    getProduk();
  }, []);

  return (
    <div className="bg-[#E5FFF9] min-h-screen">
      <button
        onClick={handleGoBack}
        className="ml-[7%] cursor-pointer translate-y-10 h-[50px] w-[50px]"
      >
        <Image
          src="/icon/backk.svg"
          alt="Back Icon"
          width={390}
          height={390}
          className=""
        />
      </button>
      <Image
        src="/icon/ornatredecc.svg"
        alt="Ornament Icon"
        width={390}
        height={390}
        className="ml-[7%] translate-y-20 h-[150%] w-[80%]"
      />
      <div className="mt-[7%] ml-[7%] mr-[7%] py-2 flex flex-row bg-[#28DF99] font-semibold text-white pl-4">
        Produk
        <div className="ml-[50%]">Harga Satuan</div>
        <div className="ml-[5%]">Warna</div>
        <div className="ml-[5%]">Usia</div>
        <div className="ml-[5%]">Jumlah</div>
      </div>
      <div className="mt-[2%] ml-[7%] mr-[7%] py-20 bg-[#F3FFFB] font-semibold text-white">
        {/* Display Produk */}
        {formData.judul_produk ? (
          <div>
            <p>Judul Produk: {formData.judul_produk}</p>
            <p>Deskripsi: {formData.deskripsi_produk}</p>
            <p>Harga: {formData.harga}</p>
            {formData.foto_produk && (
              <p>
                Foto Produk:{" "}
                <Image
                  src={formData.foto_produk}
                  alt="Produk"
                  width={100}
                  height={100}
                />
              </p>
            )}
          </div>
        ) : (
          <p>Loading produk...</p>
        )}
      </div>
      <Image
        src="/icon/lokasi.svg"
        alt="Lokasi Icon"
        width={30}
        height={30}
        className="translate-y-[350%] ml-[11%]"
      />
      <div className="mt-[2%] ml-[7%] mr-[7%] py-10 bg-[#F3FFFB]">
        <div className="bg-white py-10 rounded ml-[3%] mr-[3%] text-[#00663F] text-2xl border-2 p-5 border-[#00663F]">
          Jl.Melong Tengah No 12 RW.05 RT.03
        </div>
        <Link href="/Produk/editalamat">
          <button className="text-white bg-[#139663] rounded px-3 ml-[90%] -translate-y-24">
            Edit
          </button>
        </Link>
      </div>
      <div className="mt-[4%] ml-[7%] mr-[7%] py-2 bg-[#28DF99] text-2xl font-semibold text-white pl-4">
        Metode Pembayaran
      </div>
      <div className="ml-[7%] mr-[7%] py-3 bg-[#F3FFFB]">
        <div className="bg-white my-[10px] mx-[10px] h-[300px] shadow-[3px_3px_3px] shadow-[#0000002e]">
          <div className="flex flex-row">
            <Image
              src="/img/bca.png"
              alt="BCA"
              width={170}
              height={170}
              className="ml-[3%] mt-[3%]"
            />
            <Image
              src="/img/bni.png"
              alt="BNI"
              width={170}
              height={170}
              className="ml-[3%] mt-[3%]"
            />
            <Image
              src="/img/mandiri.png"
              alt="Mandiri"
              width={170}
              height={170}
              className="ml-[3%] mt-[3%]"
            />
            <Image
              src="/img/bri.png"
              alt="BRI"
              width={170}
              height={170}
              className="ml-[3%] mt-[3%]"
            />
          </div>
        </div>
      </div>
      {/* Komponen lainnya */}
      <div className="mt-[2%] ml-[7%] mr-[7%] py-6 bg-[#F3FFFB] font-semibold text-[#00663F]">
        <div className="ml-[3%] bg-white rounded mr-[3%] text-[#00663F] h-80 border-2 p-10 border-[#00663F]">
          <p className="ml-1 text-2xl">Subtotal</p>
        </div>
        <p className="-translate-y-60 pl-[7%] text-2xl">
          Total Biaya Pengiriman
        </p>
        <p className="text-2xl pl-[7%] -translate-y-60">Biaya Layanan</p>
        <div className="-translate-y-48 text-2xl pl-[4%] border-2 border-[#00663F] mr-[3%] ml-[3%]">
          Total Pembayaran
        </div>
        <button
          className="text-white bg-[#FF0A0A] rounded px-6 py-2 ml-[80%] -translate-y-40"
          onClick={handleCheckoutClick}
        >
          Checkout
        </button>
      </div>
      <CheckoutPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onConfirm={handleConfirmCheckout}
      />
    </div>
  );
};

export default Page;
