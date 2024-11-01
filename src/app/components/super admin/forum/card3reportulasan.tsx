"use client";
import React, { useEffect, useState } from "react";
import foto from "../../../../../public/icon/foto profile.svg";
import mata from "../../../../../public/icon/mata.svg";
import chat2 from "../../../../../public/icon/chat2.svg";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

type ForumReport = {
  id: number;
  judul: string;
  desc: string;
  fotoKonten: string;
  kategori_forum: string;
  jumlahTanggapan: number;
  jumlahView: number;
  jumlahReport: number;
  createdAt: string;
  User: {
    username: string;
    photoProfile: string;
  };
};

type Total = {
  jumlahReport: number;
};

function Card3() {
  const [data, setData] = useState<ForumReport[]>([]);

  useEffect(() => {
    getForumReport();
  }, []);

  async function getForumReport() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/getReport`;
    try {
      const res = await axios.get<ForumReport[]>(url, {
        withCredentials: true,
      });
      setData(res.data);
      console.log("data yang diterima: ", res.data);
    } catch (error: any) {
      console.log(error);
      alert("Terjadi kesalahan saat mengambil data report");
    }
  }

  const formatTanggal = (tanggal: string) => {
    const opsiTanggal: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return new Date(tanggal).toLocaleDateString("id-ID", opsiTanggal);
  };
  const [data2, setData2] = useState<Total | null>();

  useEffect(() => {
    getTotal();
  }, []);
  async function getTotal() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/totalKeseluruhan`;
    try {
      const res = await axios.get<Total>(url, {
        withCredentials: true,
      });
      setData2(res.data);
      console.log(res.data);
    } catch (error: any) {
      console.log(error);
      alert("Terjadi kesalahan saat mengambil data total.");
    }
  }
  return (
    <div className="flex">
      <div className="flex-col">
        <div className=" bg-[#EBFFF7] w-[650px] h-[1105px] rounded-lg ms-[3%] mt-[0.5%]">
          <div className="space-y-7 pt-[2%]">
            {data.length > 0 ? (
              data.map((item, i) => (
                <div className="flex items-start mt-[10px] ml-[4%]" key={i}>
                  {/* Card Putih */}
                  <div className="w-[70%] h-[190px] bg-white shadow-[3px_4px_4px,-3px_6px_4px] shadow-[#0000002d]">
                    <div className="flex">
                      <div className="flex-col">
                        <img
                          src={
                            item.fotoKonten
                              ? "https://74gslzvj-8000.asse.devtunnels.ms" +
                                item.fotoKonten
                              : ""
                          }
                          width={100}
                          height={100}
                          alt="foto konten"
                          className="w-[180px] h-[150px]"
                        />
                        <Link
                          href={`/Superadmin/Forum/detailreportUlasan/ReportUlasan2/${item.id}`}
                        >
                          <button className="bg-[#3F9272] w-[50%] rounded ms-[25%] mt-[6%] text-white font-semibold text-[12px]">
                            Atur
                          </button>
                        </Link>
                      </div>
                      <div className="ms-[5%] flex-col space-y-1">
                        <div className="flex space-x-2 mt-[6%] mb-[2%]">
                          <Image
                            src={foto}
                            width={30}
                            height={30}
                            alt="foto profil"
                            className="rounded-full"
                          />
                          <p className="text-[15px] text-[#21B892] mt-1">
                            {item.User.username}
                          </p>
                        </div>
                        <p className="font-medium text-[20px] leading-none text-[#323735]">
                          {item.judul}
                        </p>
                        <p className="font-light text-[12px]">
                          Ulasan dari{" "}
                          <span className="text-[#005DE8]">
                            {item.User.username}
                          </span>{" "}
                          pada {formatTanggal(item.createdAt)}
                        </p>
                        <button className="bg-[#C2FFE8] p-[2px] rounded w-[35%] text-[#06612B] font-light text-[12px]">
                          {item.kategori_forum}
                        </button>

                        <div className="flex pt-[22%] translate-x-[80%]">
                          <Image
                            src={mata}
                            width={20}
                            height={20}
                            alt="foto profil"
                          />
                          <p className="ms-1 font-light mt-1 text-[12px] text-[#323735]">
                            {item.jumlahView}
                          </p>
                          <Image
                            src={chat2}
                            className="ms-3"
                            width={20}
                            height={20}
                            alt="foto profil"
                          />
                          <p className="font-light ms-1 mt-1 text-[12px] text-[#323735]">
                            {item.jumlahTanggapan}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Elemen di luar card putih */}
                  <div className=" ms-[4%] flex flex-col mt-[5%] justify-center">
                    <div className="text-sm text-center">
                      {item.jumlahReport}
                    </div>
                    <div className="flex items-center justify-center bg-red-600 h-[8%] w-5 rounded-full text-sm text-white">
                      i
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Tidak ada data ditemukan.</p>
            )}
          </div>
        </div>
      </div>
      {data2 && (
        <div className="flex flex-col h-[207px] ml-[4%] mt-[5%] w-[216px] bg-[#1AE5CC] items-center">
          <div className="text-[#FF4949] flex items-center justify-center my-auto font-semibold text-[50px]">
            {data2.jumlahReport}
          </div>
          <p className="text-white mb-1">Laporan</p>
        </div>
      )}
    </div>
  );
}

export default Card3;
