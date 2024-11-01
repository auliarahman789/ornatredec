import React, { useEffect, useState } from "react";
import foto from "../../../../../public/icon/foto profile.svg";
import mata from "../../../../../public/icon/mata.svg";
import chat2 from "../../../../../public/icon/chat2.svg";
import Image from "next/image";
import axios from "axios";

type Trending = {
  judul: string,
  fotoKonten: string,
  jumlahTanggapan: number,
  jumlahView: number,
  User: {
      username: string,
  }
}
function Trending() {
  const [data, setData] = useState<Trending[]>([])
  useEffect(() => {
    getTrending();
  }, []);
  async function getTrending() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/populer`;
    try {
      const res = await axios.get<Trending[]>(url, {
        withCredentials: true,
      });
      setData(res.data.slice(0,4));
      console.log(res.data);
    } catch (error: any) {
      console.log(error);
      alert("Terjadi kesalahan saat mengambil data konten yang sedang populer.");
    }
  }
    return (
      <div className="flex">
          <div className="flex ml-[4%]">
            {/* Card Putih */}
            <div className="flex-col space-y-3 w-[100%]">
              {data.length > 0 ? (
                data.map((item: any, id: number) => (
                  <div key={id} className=" h-[90px] w-[260px]  rounded-lg pe-5 bg-white shadow-[3px_4px_4px,-3px_6px_4px] shadow-[#0000002d]">
                    <div className="flex">
                      <div className="flex-col ms-[4%] mt-[2%]">
                        <Image
                          src={item.fotoKonten ? "https://74gslzvj-8000.asse.devtunnels.ms" + item.fotoKonten : ""}
                          width={60}
                          height={60}
                          alt="foto konten"
                          className="rounded-full"
                        />
                        <button className="bg-[#3F9272] w-[70%] h-[15%] rounded ms-[20%] mt-[7%] text-white font-semibold text-[8px]">
                          Lihat
                        </button>
                      </div>
                      <div className="ms-[5%] flex-col space-y-1">
                        <div className="flex space-x-2 mt-[3%] mb-[2%]">
                          <p className="text-[11px] text-[#21B892] mt-1">{item.User.username}</p>
                        </div>
                        <p className="font-medium text-[15px] leading-none text-[#323735]">
                          {item.judul}
                        </p>
                        <div className="flex pt-[3%] translate-y-[90%] translate-x-[100%]">
                          <Image src={mata} width={15} height={15} alt="foto profil" />
                          <p className="ms-1 font-light mt-1 text-[9px] text-[#323735]">
                            {item.jumlahView}
                          </p>
                          <Image
                            src={chat2}
                            className="ms-3"
                            width={15}
                            height={15}
                            alt="foto profil"
                          />
                          <p className="font-light ms-1 mt-1 text-[9px] text-[#323735]">
                            {item.jumlahTanggapan}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))) : (
                <p>Tidak ada data populer</p>
              )}
            </div>

            {/* Elemen di luar card putih */}
            <div className="mt-[4.5%] flex-col space-y-11 ms-[23%]">
              <p className="text-[#E1FF6A] text-[40px] font-semibold text-center">
                1
              </p>
              <p className="text-[#F2FFBF] text-[40px] font-semibold text-center">
                2
              </p>
              <div className="text-[#FFFEDC] text-[40px] font-semibold text-center">
                3
              </div>
              <p className="text-white text-[40px] font-semibold text-center">
                4
              </p>
            </div>
          </div>
        </div>
    );
  }


export default Trending;
