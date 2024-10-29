"use client";
import BarBesarForumStatistik from "@/app/diagram/BarBesarForumStatistik/page";
import BarKecilStatistik from "@/app/diagram/BarKecilStatistik/page";
import DiagramBarStatistik from "@/app/diagram/BarStatistik/page";
import { PieChartStatistik } from "@/app/diagram/lingkaran2Statistik/lingkaran";
import ForumStatistik from "@/app/diagram/lingkaranforumstatistik/page";
import Tranding from "../../../../public/icon/arrowTranding.svg";
import Image from "next/image";
import React from "react";
import Trending from "@/app/components/super admin/statistik/card";
import Report from "@/app/components/super admin/statistik/report";

function Page() {
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

          {/* Tambahkan garis vertikal */}
          <div className="absolute right-[40%] top-6 h-[90%] w-[1px] bg-white"></div>

          {/* Div baru di sebelah kanan garis */}
          <div className="bg-white absolute right-[10%] top-[18%] h-[30%] w-[20%] rounded-3xl justify-center items-center">
            <div className="mt-2 text-red-500 text-[64px] text-center">-25</div>
            <div className="text-[#3FDEBE] text-[12px] text-center leading-tight">
              Dari bulan <br />
              sebelumnya
            </div>
          </div>

          <div className="absolute right-[23%] top-[53%] text-white text-[12px]">
            Total terjual : <span>145</span>
          </div>

          <div className="text-white grid grid-cols-2  absolute right-[3%] top-[62%] h-[20%] w-[30%]">
            <div className="col-span-1  text-[15px] space-y-3">
              Tanaman : <span>43</span>
              <div>
                Ikan : <span>70</span>
              </div>
              <div>
                Burung : <span>30</span>
              </div>
            </div>
            <div className="col span-2 text-[15px] space-y-3">
              <div>Rp.20.500.000</div>
              <div>Rp.55.700.000</div>
              <div>Rp.13.100.000</div>
            </div>
          </div>

          <div className="flex text-white text-[15px] absolute right-[3%] top-[85%] h-[10%] w-[30%] items-center">
            <div>TOTAL :</div>
            <div className="ml-[30%]">Rp.89.300.000</div>
          </div>

          {/* Teks di atas div putih */}
          <div className="absolute right-[17%] top-[5%] text-center text-white text-[36px] font-semibold">
            Juli
          </div>

          <div className="relative text-white">
            <p className="absolute left-[25%] top-28 font-semibold text-xs">
              Total Terjual:
            </p>
            <p className="absolute left-[25%] top-36 font-bold text-xl">Juli</p>
          </div>
          <BarKecilStatistik />
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
                  <div className="text-[#4CC2AD] ml-4">156</div>{" "}
                  {/* Tambahkan ml-2 untuk jarak */}
                </div>

                {/* Lingkaran 2 dan Teks */}
                <div className=" flex items-center gap-x-6">
                  {/* Ganti gap-x-12 menjadi gap-x-2 */}
                  <div className="w-3 h-3 bg-[#4CC2AD] rounded-full"></div>
                  <div className="text-black">Ikan</div>
                  <div className="text-[#4CC2AD] ml-12">78</div>
                  {/* Tambahkan ml-2 untuk jarak */}
                </div>

                {/* Lingkaran 3 dan Teks */}
                <div className=" flex items-center gap-x-6">
                  {/* Ganti gap-x-12 menjadi gap-x-2 */}
                  <div className="w-3 h-3 bg-[#6BF8C2] rounded-full"></div>
                  <div className="text-black">Burung</div>
                  <div className="text-[#4CC2AD] ml-[16.5%]">26</div>
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
