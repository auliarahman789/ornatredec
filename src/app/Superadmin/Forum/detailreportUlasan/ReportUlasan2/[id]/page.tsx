"use client";
import React, { useEffect, useState } from "react";
import mata from "../../../../../../../public/icon/mata.svg";
import chat2 from "../../../../../../../public/icon/chat2.svg";
import profil from "../../../../../../../public/icon/profil.svg";
import noted from "../../../../../../../public/icon/noted.svg";
import Image from "next/image";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

type ForumReport = {
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
  reports: {
    desc_report: string;
    User: {
      username: string;
      photoprofile: string;
    };
  }[];
};

function DetailReportUlasan() {
  const [data, setData] = useState<ForumReport | null>(null);
  const router = useRouter(); // Untuk redirect setelah delete

  useEffect(() => {
    getForumReport();
  }, []);

  const { id } = useParams();

  async function getForumReport() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/forumReport/${id}`;
    try {
      const res = await axios.get<ForumReport>(url, {
        withCredentials: true,
      });
      setData(res.data);
      console.log("data yang diterima: ", res.data);
    } catch (error: any) {
      console.log(error);
      alert("Terjadi kesalahan saat mengambil data report");
    }
  }

  async function deleteForumReport() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/deletePost/${id}`;
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
        const res = await axios.delete(url, {
          withCredentials: true,
        });
        console.log(res.data);
        Swal.fire("Berhasil!", "Konten telah dihapus.", "success"); // Pesan sukses
        router?.push("/Superadmin/Forum");
      } catch (error) {
        Swal.fire("Gagal!", "Gagal menghapus konten.", "error"); // Pesan gagal
      }
    } else {
      Swal.fire("Dibatalkan", "Penghapusan dibatalkan.", "info"); // Pesan batal
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

  const handleClose = () => {
    router?.push("/Superadmin/Forum");
  };

  return (
    <div className="overflow-x-hidden min-h-screen">
      <div className="translate-x-64 pt-[2%] ">
        <div className="text-[23px] font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] ms-[2%] mt-2 inline-block text-transparent bg-clip-text">
          Kelola Forum
        </div>
        {data && data?.jumlahReport > 0 ? (
          <div className="ms-[65%] mt-[3%]">
            <button
              className="bg-green-400 rounded-xl text-white px-4"
              onClick={deleteForumReport}
            >
              Hapus
            </button>
          </div>
        ) : (
          <div className="ms-[65%] mt-[3%]">
            <button
              className="bg-green-400 rounded-xl text-white px-4"
              onClick={handleClose}
            >
              Tutup
            </button>
          </div>
        )}

        <div className="">
          {data && (
            <>
              <div className="w-full h-[155px]">
                <div className="flex">
                  <div className="flex items-start">
                    <img
                      src={
                        data.User.photoProfile
                          ? "https://74gslzvj-8000.asse.devtunnels.ms" +
                            data.User.photoProfile
                          : profil
                      }
                      width={38}
                      height={38}
                      alt="foto profil"
                      className="rounded-full ml-6 mt-4"
                    />
                    <img
                      src={
                        "https://74gslzvj-8000.asse.devtunnels.ms" +
                        data.fotoKonten
                      }
                      width={100}
                      height={100}
                      alt="foto konten"
                      className="ml-4 h-[157px] w-[206px] bg-slate-600"
                    />
                  </div>

                  <div className="ms-[3%] flex-col space-y-1">
                    <div className="flex">
                      <div className="flex space-x-2 mb-[3%]">
                        <p className=" text-[#21B892] mt-1 text-[20px]">
                          {data.judul}
                        </p>
                      </div>
                      {data.jumlahReport > 0 ? (
                        <div className="ms-[60%]">
                          <div className="text-sm text-center">
                            {data.jumlahReport}
                          </div>
                          <div className="text-center bg-red-600 h-[38%] w-5 rounded-full text-sm text-white">
                            i
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <p className="font-light text-[12px]">
                      {`Ulasan dari `}
                      <span className="text-[#005DE8]">
                        {data.User.username}
                      </span>
                      {` pada `} {formatTanggal(data.createdAt)}
                    </p>
                    <button className="bg-[#C2FFE8] p-[2px] rounded w-[15%] text-[#06612B] font-light text-[12px]">
                      {data.kategori_forum}
                    </button>

                    <div className="flex pt-[3.5%] -translate-x-10">
                      <Image
                        src={mata}
                        className="ms-10"
                        width={20}
                        height={20}
                        alt="foto profil"
                      />
                      <p className="ms-1 font-light mt-1 text-[12px] text-[#323735]">
                        {data.jumlahView}
                      </p>
                      <Image
                        src={chat2}
                        className="ms-10"
                        width={20}
                        height={20}
                        alt="foto profil"
                      />
                      <p className="font-light ms-1 mt-1 text-[12px] text-[#323735]">
                        {data.jumlahTanggapan}
                      </p>
                    </div>
                    <div className="border-b w-[650px] border-black"></div>
                  </div>
                </div>
              </div>
              <div className="h-[23%] mt-[2%]">
                <p className="text-black leading-tight ml-[6%] w-[60%] text-[15px]">
                  {data.desc}
                </p>
              </div>
              <div className="flex">
                <div className="text-[24px] text-[#21B892] ms-[6%] mt-[3%] mb-[2%]">
                  Catatan Laporan User
                </div>
                <div className="text-[#FF0404] text-[20px] mt-[3%] ms-[40%] h-[5%]">
                  {data.jumlahReport}
                </div>
              </div>
              {data.jumlahReport > 0 ? (
                <>
                  <div className="space-y-3 mb-[2%]">
                    {data.reports.length > 0 ? (
                      data.reports.map((item: any, i: number) => {
                        return (
                          <div
                            key={i}
                            className="h-[125px] w-[751px] ms-[10%] rounded-2xl border shadow-[6px_6px_5px] shadow-[#0000002e]"
                          >
                            <div className="flex pt-4 mb-[2%]">
                              <img
                                src={
                                  "https://74gslzvj-8000.asse.devtunnels.ms" +
                                  item.User.photoprofile
                                }
                                width={50}
                                height={50}
                                alt="foto profil"
                                className="rounded-full ms-5"
                              />
                              <p className="text-[15px] text-[#21B892] mt-1 ms-3">
                                {item.User.username}
                              </p>
                              <p className="text-[15px] text-[#7D7D7D] mt-1 ml-9">
                                {formatTanggal(data.createdAt)}
                              </p>
                            </div>
                            <div className="text-black text-[15px] leading-tight ml-[12.5%] -translate-y-7 w-[70%]">
                              {item.desc_report}
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <>
                        <Image
                          src={noted}
                          alt="noted"
                          width={100}
                          height={100}
                        />
                        <p className="font-semibold text-[23px] mt-[8%] text-gray-400 ms-[35%]">
                          tidak ada report
                        </p>
                      </>
                    )}
                  </div>
                </>
              ) : (
                ""
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailReportUlasan;
