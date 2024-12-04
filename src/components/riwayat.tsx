"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import Image from "next/image";
import profile from "../../public/img/profile bruno.png";
import tanaman from "../../public/img/kaktus.png";
import mata from "../../public/icon/mata.svg";
import chat2 from "../../public/icon/chat2.svg";
import axios from "axios";

type PostinganForum = {
  judul: string;
  kategori_forum: string;
  jumlahView: number;
  jumlahTanggapan: number;
  createdAT: number;
  fotoKonten: string;
  User: {
    username: string;
    photoProfile: string;
  };
};

const Riwayat = () => {
  const [data, setData] = useState<PostinganForum[]>([]); // State untuk menyimpan data
  const [profile, setProfile] = useState<PostinganForum | null>(null);

  async function getpostinganUser() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/postinganUser`;
    try {
      const res = await axios.get<PostinganForum[]>(url, {
        withCredentials: true,
      });
      setData(res.data);
      console.log(res.data);
    } catch (error: any) {
      console.log(error);
      alert("Terjadi kesalahan saat mengambil data pesanan.");
    }
  }

  const getUsername = async () => {
    try {
      const token = localStorage.getItem("authToken"); // Ambil token dari localStorage atau mekanisme penyimpanan lainnya
      if (!token) {
        return "Guest"; // Jika token tidak ditemukan, kembalikan username default
      }

      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}api/getMe`, {
        headers: {
          Authorization: `Bearer ${token}`, // Kirim token sebagai header
        },
      });

      const username = res.data.username; // Ambil username dari respons API
      return username || "Guest"; // Pastikan ada fallback username
    } catch (error: any) {
      console.error("Gagal mengambil data pengguna:", error.message);
      return "Guest"; // Default jika gagal
    }
  };

  useEffect(() => {
    getpostinganUser();
  }, []);

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div
      // className="flex-1 bg-cover bg-center"
      // style={{ backgroundImage: "url('/img/bg.jpg')", height: "110vh" }}
      >
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="bg-white p-16 rounded-lg shadow-lg w-[65%] h-[105%] translate-x-[15%] z-20 relative pointer-events-auto">
            <div className="grid grid-cols-2 text-start">
              <div className="">
                <h1 className="text-[#5CD5A6] text-[20px]">Postingan Saya</h1>

                <div className="bg-[#5CD5A6]  rounded-lg shadow-lg w-[90%] h-[350%] mt-2">
                  {profile && (
                    <div>
                      <Image
                        src={
                          profile.User.photoProfile
                            ? "https://74gslzvj-8000.asse.devtunnels.ms" +
                              profile.User.photoProfile
                            : "/default-profile.png"
                        }
                        alt={"foto profil"}
                        className="rounded-full h-[10%] w-[10%] pt-3 pl-1"
                      ></Image>
                    </div>
                  )}
                  <div className="space-y-3">
                    {data.length > 0 ? (
                      data.map((item, index) => (
                        <div
                          key={index}
                          className="bg-white h-[76px] w-[272px] ml-[11%] -translate-y-3"
                        >
                          <div className="flex">
                            <img
                              src={`https://74gslzvj-8000.asse.devtunnels.ms${item.fotoKonten}`}
                              alt="foto"
                              width={100}
                              height={100}
                              className="h-[76px] w-[78px]"
                            />
                            <div className="ml-2 text-black">
                              {/* Judul */}
                              <p className="text-[14px] font-semibold">
                                {item.judul}
                              </p>
                              {/* Teks di bawah judul */}

                              <div className="flex">
                                <p className="text-[10px] font-light">
                                  {`Diposting Pada Tanggal `}
                                </p>
                                <p className="text-[10px] text-blue-600">
                                  {item.createdAT}
                                </p>
                              </div>
                              <div className="flex space-x-3 items-center mt-[9%]">
                                {/* Tag Tanaman */}
                                <p className="w-[66px] h-[17px] bg-[#83F6CA] text-[12px] text-[#06612B] font-light rounded-sm text-center">
                                  {item.kategori_forum}
                                </p>

                                {/* Ikon Mata dan Angka */}
                                <div className="flex flex-col items-center">
                                  <Image
                                    src={mata}
                                    alt="mata"
                                    width={100}
                                    height={100}
                                    className="w-[13px] h-[8px]"
                                  />
                                  <p className="text-[7px] font-light text-black">
                                    {item.jumlahView}
                                  </p>
                                </div>

                                {/* Ikon Chat dan Angka */}
                                <div className="flex flex-col items-center">
                                  <Image
                                    src={chat2}
                                    alt="chat"
                                    width={100}
                                    height={100}
                                    className="w-[13px] h-[8px]"
                                  />
                                  <p className="text-[7px] font-light text-black">
                                    {item.jumlahTanggapan}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>Tidak ada data</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="">
                <h1 className="text-[#5CD5A6] text-[20px]">
                  Ulasan Yang Terakhir Dikunjungi
                </h1>
                <div className="bg-[#5CD5A6] rounded-lg shadow-lg w-[90%] h-[350%] mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Riwayat;
