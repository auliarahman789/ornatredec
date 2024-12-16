/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
type Notif = {
  id: number;
  message: string;
  createdAt: string;
}
function page() {
  const [data, setData] = useState<Notif[]>([]);
  useEffect(() => {
    getNotif();
  },[])
  async function getNotif() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/notifications`
    try {
      const res = await axios.get<Notif[]>(url, {
        withCredentials: true
      }
      )
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
      alert("gagal")
    }
  }
  const formatTanggalWaktu = (tanggal: string) => {
    const date = new Date(tanggal);
    const waktu = date.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: undefined,
        hour12: false,
    });
    const waktuFormatted = waktu.replace('.', ':');
    const tanggall = date.toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return `jam ${waktuFormatted} tanggal ${tanggall}`;
  };
  const router = useRouter();
  const handleBack = () => {
    if (window.history.length > 0) {
      router.back()
    } else {
      router.replace("/")
    }
  }
  return (
    <div>
      <div className="bg-[#E4FFF2] pb-[5%] h-screen">
        <div className="pl-[10%] pt-[3%]">
          <img onClick={handleBack} className="cursor-pointer" src="/icon/back.png" width={40} height={40} alt="kembali" />
        </div>
        <div className="pt-[2%] pl-[10%]">
          <h1 className="text-2xl font-bold text-[#308967]">NOTIFIKASI</h1>
        </div>
        <div className="overflow-y-auto overflow-x-hidden mx-auto bg-white h-[80%] w-[80%]">
        {data.map((item) => (
        <div key={item.id} className="ps-[15%] py-[2%] ml-[10%] mr-[10%] border-b-[1px] border-[#308967]">
          <div className="flex -translate-x-[25%]">
            <img
              src="/icon/Bell.png"
              width={60}
              height={60}
              alt="Bell"
              className="border border-[#308967]"
              />
               <p className="absolute left-[100%] text-xs text-[#9A9999] whitespace-nowrap">{formatTanggalWaktu(item.createdAt)}</p>
            <p className="text-[#66C09E] flex ms-[2%] items-center">{item.message}</p>
          </div>
        </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default page;
