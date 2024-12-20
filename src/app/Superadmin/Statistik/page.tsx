"use client";
import BarBesarForumStatistik from "@/app/diagram/BarBesarForumStatistik/page";
import BarKecilStatistik from "@/app/diagram/BarKecilStatistik/page";
import DiagramBarStatistik from "@/app/diagram/BarStatistik/page";
import { PieChartStatistik } from "@/app/diagram/lingkaran2Statistik/lingkaran";
import ForumStatistik from "@/app/diagram/lingkaranforumstatistik/page";
import Tranding from "../../../../public/icon/arrowTranding.svg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Trending from "@/components/super admin/statistik/card";
import Report from "@/components/super admin/statistik/report";
import axios from "axios";
import Perbandingan from "@/components/super admin/statistik/oktober/perbandingan";
import DiagramBarStatistik2 from "@/app/diagram/BarStatistik/contoh/page";
import BarKecilOkt from "@/components/super admin/statistik/oktober/barkecilokt";
type Diagram = {
  currentMonth: {
    month: 10;
    year: 2024;
    totalTransaksi: number;
    totalSubTotal: number;
    totalBiayaLayanan: number;
    totalPembayaran: number;
  },
  previousMonth: {
    month: 9;
    year: 2024;
    totalTransaksi: number;
  },
  comparison: {
    totalTransactionsDifference: number;
  };
}
const Page = () => {
  const [data, setData] = useState<Diagram | null>();

  useEffect(() => {
    getOktober();
  }, []);

  async function getOktober() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/sales/10/2024`;
    try {
      const res = await axios.get<Diagram>(url, {
        withCredentials: true,
      });
      setData(res.data);
      console.log(
        res.data);
    } catch (error: any) {
      console.log(error);
      alert("Terjadi kesalahan saat mengambil data penjualan oktober");
    }
  }
  return (
    <div className="overflow-x-hidden min-h-screen">
      <div className="translate-x-64 pt-[2%]">
        <div className="text-[23px] font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] ms-[2%] mt-4 inline-block text-transparent bg-clip-text">
          Statistik
        </div>
        <div className="ms-[5%] mt-[1%] text-[20px] font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] text-transparent bg-clip-text">
          Produk
        </div>
        <div className="w-[73%] h-[490px] ms-[4%] rounded-xl bg-gradient-to-b from-[#15E6CD] to-[#4EDBB9] relative">
          <DiagramBarStatistik />
          <Perbandingan/>
          <div className="relative text-white">
            <p className="absolute left-[25%] top-28 font-semibold text-xs">
              Total Terjual:
            </p>
            <p className="absolute left-[25%] top-36 font-bold text-xl">Juli</p>
          </div>
          <BarKecilOkt />
          <PieChartStatistik />
        </div>
      </div>

      <div className="ms-[25.5%] mt-[4%] text-[20px] font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] text-transparent bg-clip-text">
        Forum
      </div>

      <div className="w-[73%] ms-[24.5%] grid grid-cols-2 gap-6 ">
        <div className="col-span-1 bg-gradient-to-b from-[#15E6CD] to-[#4EDBB9] rounded-xl h-[491px] mb-[5%]">
          <div className="grid grid-cols-2">
            <div className="">
              <ForumStatistik />
            </div>

            <div className="bg-white mt-[8%] w-[90%] h-[145px] rounded-xl items-center">
              {/* Lingkaran 1 dan Teks */}
              <div className="text-[13px] ml-[10%]">
                <div className=" mt-3 flex items-center gap-x-6">
                  {/* Ganti gap-x-12 menjadi gap-x-2 */}
                  <div className="w-3 h-3 bg-[#309494] rounded-full"></div>
                  <div className="text-black">Tanaman</div>
                  <div className="text-[#4CC2AD] ml-4">2</div>{" "}
                  {/* Tambahkan ml-2 untuk jarak */}
                </div>
                <div className=" flex items-center gap-x-6">
                    {/* Ganti gap-x-12 menjadi gap-x-2 */}
                    <div className="w-3 h-3 bg-[#4CC2AD] rounded-full"></div>
                    <div className="text-black">Ikan</div>
                    <div className="text-[#4CC2AD] ml-12">9</div>
                    {/* Tambahkan ml-2 untuk jarak */}
                </div>
                  <div className=" flex items-center gap-x-6">
                      {/* Ganti gap-x-12 menjadi gap-x-2 */}
                      <div className="w-3 h-3 bg-[#6BF8C2] rounded-full"></div>
                      <div className="text-black">Burung</div>
                      <div className="text-[#4CC2AD] ml-[16.5%]">8</div>
                      {/* Tambahkan ml-2 untuk jarak */}
                  </div>
      
              </div>
              <div className="grid grid-cols-2 text-center">
                <div className="flex justify-center items-center mt-3 ml-2 text-[#4CC2AD] text-[15px]">
                  260 konten
                </div>

                <div className="mt-2 ml-3 bg-white  w-[81%] h-[95%] shadow-top shadow-bottom">
                  <div className="mt-2 text-[#3DAFEF] text-[16px]  inline-block">
                    120
                  </div>
                  <div className="text-[7px] text-[#4CC2AD] leading-none inline-block">
                    upload konten <br /> dari bulan sebelumnya
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[60%]">
            <BarBesarForumStatistik />
          </div>
        </div>

        <div className=" bg-gradient-to-b from-[#15E6CD] to-[#4EDBB9] rounded-xl h-[491px]">
          <div className="flex space-x-14">
            <div className="text-white mt-[6%] ms-[8%] text-[22px]">
              Ulasan terpopular
            </div>
            <div className="border-r-2 bg-[#308967] h-[47px] mt-5"></div>
            <>
              <Image
                src={Tranding}
                alt={"profile"}
                className="w-[12%] h-[12%] mt-[3.5%]"
              />
            </>
          </div>
          <div className="mt-2 w-[100%] text-white">
            <Trending />
          </div>
        </div>
        </div>
        <div className="translate-x-64 w-[75%]">
         <Report/>
      </div>
    </div>
  );
}

export default Page;
