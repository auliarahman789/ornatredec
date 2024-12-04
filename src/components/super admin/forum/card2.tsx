import React, { useEffect, useState } from "react";
import Image from "next/image";
import mata from "../../../../public/icon/mata.svg";
import chat2 from "../../../../public/icon/chat2.svg";
import Link from "next/link";
import axios from "axios";

type ForumReport = {
  id: any;
  judul: string;
  jumlahTanggapan: number;
  jumlahView: number;
  jumlahReport: number;
  User: {
    username: string;
    photoProfile: string;
  };
};
function Card2() {
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
  return (
    <div className="space-y-5">
      {data.length > 0 ? (
        data.map((item, i) => (
          <div className="flex items-center" key={i}>
            <div className="w-[82%] bg-white pb-[7%] px-[1%] ml-[4%] shadow-[3px_4px_4px,-3px_6px_4px] shadow-[#0000002d] rounded-md">
              <div className="flex">
                <div className="flex-col ms-[6%] mt-[4%]">
                  <img
                    src={
                      item.User.photoProfile
                        ? "https://74gslzvj-8000.asse.devtunnels.ms" +
                          item.User.photoProfile
                        : "/img/default-avatar.png"
                    }
                    width={65}
                    height={65}
                    alt="foto profil"
                    className="rounded-full"
                  />
                  <Link
                    href={`/Superadmin/Forum/detailreportUlasan/ReportUlasan2/${item.id}`}
                  >
                    <button className="bg-[#3F9272] w-[50%] rounded ms-[25%] mt-[6%] text-white font-semibold text-[12px]">
                      Atur
                    </button>
                  </Link>
                </div>
                <div className="ms-[5%] flex-col">
                  <div className="flex space-x-2 mb-[2%]">
                    <p className="text-[15px] text-[#21B892] mt-2">
                      {item.User.username}
                    </p>
                  </div>
                  <p className="font-medium text-[15px] leading-none text-[#323735]">
                    {item.judul}
                  </p>
                  <div className="relative">
                  <div className="flex w-[50%] absolute right-1 mt-[10%]">
                    <Image
                      src={mata}
                      width={15}
                      height={15}
                      alt="foto profil"
                    />
                    <p className="ms-1 font-light mt-1 text-[10px] text-[#323735]">
                      {item.jumlahView}
                    </p>
                    <Image
                      src={chat2}
                      className="ms-3"
                      width={15}
                      height={15}
                      alt="foto profil"
                    />
                    <p className="font-light ms-1 mt-1 text-[10px] text-[#323735]">
                      {item.jumlahTanggapan}
                    </p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto mb-[12%]">
              <div className="flex items-center justify-center bg-red-600 h-[18%] w-5 rounded-full text-sm text-white">
                i
              </div>
              <div className="text-white text-sm text-center">
                {item.jumlahReport}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>TIdak ada data yang di report</p>
      )}
      <Link href="/Superadmin/Forum/detailreportUlasan">
        <div className="text-white text-[15px] ms-[70%] mt-[5%] cursor-pointer">
          Lihat Semua
        </div>
      </Link>
    </div>
  );
}

export default Card2;
