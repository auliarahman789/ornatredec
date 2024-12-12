"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import Image from "next/image";
import profile from "../../public/img/profile bruno.png";
import tanaman from "../../public/img/kaktus.png";
import mata from "../../public/icon/mata.svg";
import chat2 from "../../public/icon/chat2.svg";
import Trash from "../../public/icon/Trash.svg";
import axios from "axios";
import router from "next/router";
import Swal from "sweetalert2";

type PostinganForum = {
  id: string; // Tambahkan id jika belum ada
  judul: string;
  kategori_forum: string;
  jumlahView: number;
  jumlahTanggapan: number;
  createdAt: string;
  fotoKonten: string;
  User: {
    username: string;
    photoProfile: string;
  };
};

const Riwayat = () => {
  const [data, setData] = useState<PostinganForum[]>([]); // State untuk menyimpan data

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
      alert("Terjadi kesalahan saat mengambil data postingan.");
    }
  }

  const deleteForumKonten = async (postId: string) => {
    const url = `${process.env.NEXT_PUBLIC_URL}api/deletePost/${postId}`;
    const confirmDelete = await Swal.fire({
      title: "Apakah kamu yakin?",
      text: "Forum yang dihapus tidak bisa dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    });

    if (confirmDelete.isConfirmed) {
      try {
        await axios.delete(url, { withCredentials: true });
        Swal.fire("Berhasil!", "Konten telah dihapus.", "success");

        // Update state agar data yang terhapus tidak ditampilkan
        setData((prev) => prev.filter((item) => item.id !== postId));
      } catch (error) {
        console.error(error);
        Swal.fire("Gagal!", "Gagal menghapus konten.", "error");
      }
    } else {
      Swal.fire("Dibatalkan", "Penghapusan dibatalkan.", "info");
    }
  };

  const formatTanggal = (tanggal: string) => {
    const opsiTanggal: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return new Date(tanggal).toLocaleDateString("id-ID", opsiTanggal);
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

                <div className="bg-[#5CD5A6]  rounded-lg shadow-lg w-[90%] h-[350%] pt-3">
                  <div className="space-y-3">
                    {data.length > 0 ? (
                      data.map((item, index) => (
                        <div
                          key={index}
                          className="bg-white h-[76px] w-[240px] ml-[3%] flex"
                        >
                          <div className="flex">
                            <img
                              src={`https://74gslzvj-8000.asse.devtunnels.ms${item.fotoKonten}`}
                              alt="foto"
                              width={100}
                              height={100}
                              className="h-[76px] w-[76px]"
                            />
                            <div className="ml-2 text-black">
                              {/* Judul */}
                              <p className="text-[14px] font-semibold">
                                {item.judul}
                              </p>
                              {/* Teks di bawah judul */}

                              <div className="flex">
                                <p className="text-[10px] font-light">
                                  {`Diposting Pada Tanggal  `}
                                </p>
                                <p className="text-[8px] text-blue-600">
                                  {formatTanggal(item.createdAt)}
                                </p>
                              </div>
                              <div className="flex space-x-3 items-center mt-[8%]">
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
                          {data && (
                            <Image
                              src={Trash}
                              alt="hapus"
                              onClick={() => deleteForumKonten(item.id)}
                              width={100}
                              height={100}
                              className="absolute ml-[31%] mt-[2%] w-[30px] h-[30px] cursor-pointer"
                            />
                          )}
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
