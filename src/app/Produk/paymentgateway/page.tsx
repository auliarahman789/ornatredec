'use client'
import React, { useRef } from 'react'
import Image from 'next/image';
import { useRouter } from "next/navigation";
import Link from 'next/link';
function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

    const handleGoBack = () => {
      router?.push("/Produk/pesanan/[id]");
    };
  return (
    <div className="bg-[#E5FFF9] min-h-screen">
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
      <Image
        src="/icon/ornatredecc.svg"
        alt="icon background"
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
      <div className="mt-[2%] ml-[7%] mr-[7%] py-20 bg-[#F3FFFB] font-semibold text-white ">
        tes
      </div>
      <Image
        src="/icon/lokasi.svg"
        alt="icon background"
        width={30}
        height={30}
        className="translate-y-[350%] ml-[11%] "
      />
      <div className="mt-[2%] ml-[7%] mr-[7%] py-10 bg-[#F3FFFB]">
        <div className="bg-white py-10 rounded ml-[3%] mr-[3%] text-[#00663F] text-2xl border-2 p-5 border-[#00663F]">
          Jl.Melong Tengah No 12 RW.05 RT.03
        </div>
        <Link href ="/Produk/editprofile">
          <button className="text-white bg-[#139663] rounded px-3 ml-[90%] -translate-y-24">
            Edit
          </button>
        </Link>
      </div>
      <div className="mt-[4%] ml-[7%] mr-[7%] py-2 bg-[#28DF99] text-2xl font-semibold text-white pl-4">
        Metode Pembayaran
      </div>
      <div className=" ml-[7%] mr-[7%] py-3 bg-[#F3FFFB]">
        <div className="bg-white my-[10px] mx-[10px] h-[300px]  shadow-[3px_3px_3px] shadow-[#0000002e]">
          <div className="flex flex-row">
            <Image
              src="/img/bca.png"
              alt="icon background"
              width={170}
              height={170}
              className="ml-[3%] mt-[3%]"
            />
            <Image
              src="/img/bni.png"
              alt="icon background"
              width={170}
              height={170}
              className="ml-[3%] mt-[3%]"
            />
            <Image
              src="/img/mandiri.png"
              alt="icon background"
              width={170}
              height={170}
              className="ml-[3%] mt-[3%]"
            />
            <Image
              src="/img/bri.png"
              alt="icon background"
              width={170}
              height={170}
              className="ml-[3%] mt-[3%]"
            />
          </div>
        </div>
      </div>
      <div className="mt-[2%] ml-[7%] mr-[7%] py-6 bg-[#F3FFFB] font-semibold text-[#00663F] ">
        <div className="ml-[3%] bg-white rounded mr-[3%] text-[#00663F] h-80 border-2 p-10 border-[#00663F]">
          <p className="ml-1 text-2xl">Subtotal </p>
        </div>
        <p className="-translate-y-60 pl-[7%] text-2xl">
          Total Biaya Pengiriman
        </p>
        <p className="text-2xl pl-[7%] -translate-y-60">Biaya Layanan</p>
        <div className="-translate-y-48 text-2xl pl-[4%] border-2 border-[#00663F] mr-[3%] ml-[3%]">
          Total Pembayaran
        </div>
        <button className="text-white bg-[#FF0A0A] rounded px-6 py-2 ml-[80%] -translate-y-40">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default page
