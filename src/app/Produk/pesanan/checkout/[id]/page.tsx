"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import "./global.d.ts";

type Produk = {
  judul_produk: string;
  deskripsi_produk: string;
  harga: number;
  foto_produk: string;
  variasis: {
    nama_variasi: string;
    subvariasis: {
      nama_sub_variasi: string;
      stok: number;
      harga: number;
      usia: string;
    }[];
  };
};

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
  const { id } = useParams();
  const [data, setData] = useState<any>(null);
  const [metodeTransaksi, setMetodeTransaksi] = useState("online");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [transactionToken, setTransactionToken] = useState<string | null>(null);

  const handleGoBack = () => {
    router.push(`/Produk/pesanan/${id}`);
  };

  const handleCheckoutClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleConfirmCheckout = async () => {
    setIsPopupOpen(false);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}api/transaksiCookie`,
        { withCredentials: true }
      );
      setData(response.data);
      console.log(response.data);
    } catch (error: any) {
      console.error("Checkout gagal:", error);
      if (error.response) {
        alert(`Kesalahan: ${error.response.data.message || "Gagal checkout"}`);
      } else {
        alert("Terjadi kesalahan saat checkout. Silakan coba lagi.");
      }
    }
  };

  const [transactionToken, setTransactionToken] = useState(null);

  async function postTransaksi() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/paymentgateway`;
    try {
      const res = await axios.post(
        url,
        {
          id_transaksi: id,
          payment_method: "gopay",
        },
        { withCredentials: true }
      );
      setTransactionToken(res.data.token);

      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    // You might want to fetch the initial data when the page loads
    handleConfirmCheckout();
  }, []);

  const formatHarga = (itung: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(itung);
  };

  return (
    <div className="bg-[#E5FFF9] min-h-screen">
      <button
        onClick={handleGoBack}
        className="ml-[7%] cursor-pointer translate-y-10 h-[50px] w-[50px]"
      >
        <img src="/icon/backk.svg" alt="Back Icon" width={390} height={390} />
      </button>
      <img
        src="/icon/ornatredecc.svg"
        alt="Ornament Icon"
        width={390}
        height={390}
        className="ml-[7%] translate-y-20 h-[150%] w-[80%]"
      />
      <div className="flex flex-col gap-2">
        <div className="mt-[7%] ml-[7%] mr-[7%] py-2 grid grid-cols-[48%_13%_13%_13%_13%] bg-[#28DF99] font-semibold text-white pl-4">
          <div className="whitespace-nowrap">Produk</div>
          <div className="whitespace-nowrap">Harga Satuan</div>
          <div className="whitespace-nowrap">Warna</div>
          <div className="whitespace-nowrap">Usia</div>
          <div className="whitespace-nowrap">Jumlah</div>
        </div>
        {data && data.TransaksiProduks?.length > 0 ? (
          <div className="grid grid-cols-[48%_13%_13%_13%_13%] justify-center items-center mt-[2%] ml-[7%] mr-[7%] py-[2rem] bg-[#F3FFFB] font-semibold text-white">
            <div className="flex justify-center gap-2 w-full ">
              <div className="relative size-[100px]">
                <img
                  className="object-cover object-center rounded-md"
                  src={`https://74gslzvj-8000.asse.devtunnels.ms${data.TransaksiProduks[0]?.produk.foto_produk}`}
                  alt="Produk"
                  fill
                />
              </div>
              <div className="self-start text-black text-2xl">
                <p>{data.TransaksiProduks[0]?.produk.judul_produk}</p>
                <p className="text-xs">RATING DISINI</p>
              </div>
            </div>
            <p className="text-[#828382]">
              {formatHarga(data.TransaksiProduks[0]?.produk.harga)}
            </p>
            <p className="text-[#828382]">
              {data.TransaksiProduks[0]?.subvariasi?.nama_sub_variasi}
            </p>
            <p className="text-[#828382]">
              {data.TransaksiProduks[0]?.subvariasi?.usia}
            </p>
            <p className="text-[#828382]">{data.TransaksiProduks[0]?.jumlah}</p>
          </div>
        ) : (
          <p>Loading produk...</p>
        )}
        <Image
          src="/icon/lokasi.svg"
          alt="Lokasi Icon"
          width={30}
          height={30}
          className="translate-y-[350%] ml-[11%]"
        />
      </div>
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
      <div className="mt-[2%] ml-[7%] mr-[7%] py-6 bg-[#F3FFFB] font-semibold text-[#00663F]">
        <p className="text-2xl mb-4">Pilih Metode Transaksi:</p>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="online"
              checked={metodeTransaksi === "online"}
              onChange={(e) => setMetodeTransaksi(e.target.value)}
            />
            <span>Online</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="offline"
              checked={metodeTransaksi === "offline"}
              onChange={(e) => setMetodeTransaksi(e.target.value)}
            />
            <span>Offline</span>
          </label>
        </div>
      </div>
      <div className="mt-[2%] ml-[7%] mr-[7%] py-6 bg-[#F3FFFB] font-semibold text-[#00663F]">
        <div className="ml-[3%] bg-white rounded mr-[3%] text-[#00663F] h-80 border-2 p-10 border-[#00663F]">
          <div className="justify-between flex">
            <p className="ml-1 text-2xl">Subtotal</p>
            <p className="ml-1 text-2xl">{formatHarga(data?.sub_total)}</p>
          </div>
          <div className="justify-between flex">
            <p className="ml-1 text-2xl">Biaya Layanan</p>
            <p className="ml-1 text-2xl">{formatHarga(2500)}</p>
          </div>
        </div>
        <div className="-translate-y-48 justify-between flex text-2xl pl-[4%] border-2 border-[#00663F] mr-[3%] ml-[3%]">
          <p className="ml-1 text-2xl">Total Pembayaran</p>
          <p className="ml-1 text-2xl -translate-x-[50px]">
            {formatHarga(data?.total_pembayaran)}
          </p>
        </div>
        {transactionToken ? (
          <div>
            {/* Render Midtrans Snap JavaScript */}
            <script
              src={`https://app.sandbox.midtrans.com/snap/snap.js`}
              async
            ></script>

            {/* Trigger Snap payment */}
            <button
              className="text-white bg-[#FF0A0A] rounded px-6 py-2 ml-[80%] -translate-y-40"
              onClick={() => window.snap.pay(transactionToken)}
            >
              Bayar
            </button>
          </div>
        ) : (
          <button
            className="text-white bg-[#FF0A0A] rounded px-6 py-2 ml-[80%] -translate-y-40"
            onClick={postTransaksi}
          >
            Checkout
          </button>
        )}
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
