import React, { useEffect, useState } from "react";
import mata from "../../../../../public/icon/mata.svg";
import chat2 from "../../../../../public/icon/chat2.svg";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

type Forumtanaman = {
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

function Card1tanaman() {
  const [data, setData] = useState<Forumtanaman[]>([]);
  useEffect(() => {
    getForumtanaman();
  }, []);

  async function getForumtanaman() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/filterForum?kategori=tanaman&page=1&limit=20`;
    try {
      const res = await axios.get<Forumtanaman[]>(url, {
        withCredentials: true,
      });
      setData(res.data);
      console.log("data yang diterima: ", res.data);
    } catch (error: any) {
      console.log(error);
      alert("Terjadi kesalahan saat mengambil data forum");
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
  return (
    <div className="space-y-10">
      {data.length > 0 ? (
        data.map((item, i) => (
          <div
            key={i}
            className="w-[450px] h-[190px] bg-white ml-[4%] shadow-[3px_4px_4px,-3px_6px_4px] shadow-[#0000002d]"
          >
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
                  alt="kaktus"
                  className="w-[180px] h-[150px]"
                />
                <Link href={`/Superadmin/Forum/detailreportUlasan/ReportUlasan2/${item.id}`}>
                            <button className="bg-[#3F9272] w-[50%] rounded ms-[25%] mt-[6%] text-white font-semibold text-[12px]">
                              Atur
                            </button>
                            </Link>
              </div>
              <div className="ms-[5%] flex-col space-y-1">
                <div className="flex space-x-2 pt-6 mb-[2%]">
                  <img
                    src={
                      item.User.photoProfile
                        ? "https://74gslzvj-8000.asse.devtunnels.ms" +
                          item.User.photoProfile
                        : "/img/default-avatar.png"
                    }
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
                  <span className="text-[#005DE8]">{item.User.username}</span>{" "}
                  pada {formatTanggal(item.createdAt)}
                </p>
                <button className="bg-[#C2FFE8] p-[2px] rounded w-[35%] text-[#06612B] font-light text-[12px]">
                  {item.kategori_forum}
                </button>

                <div className="flex pt-[18%] translate-x-[80%]">
                  <Image src={mata} width={20} height={20} alt="foto profil" />
                  <p className="ms-1 font-light mt-1 text-[12px] text-[#323735]">
                    {item.jumlahView}
                  </p>
                  <Image
                    src={chat2}
                    className="ms-5"
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
        ))
      ) : (
        <p>Data tidak ditemukan.</p>
      )}
    </div>
  );
}

export default Card1tanaman;
