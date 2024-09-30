import BarKecilStatistik from "@/app/diagram/BarKecilStatistik/page";
import DiagramBarStatistik from "@/app/diagram/BarStatistik/page";
import { PieChartStatistik } from "@/app/diagram/lingkaran2Statistik/lingkaran";
import React from "react";

function Page() {
  return (
    <div className="overflow-x-hidden min-h-screen ">
      <div className="translate-x-64 pt-[2%]">
        <div className="text-[23px] font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] ms-[2%] mt-4 inline-block text-transparent bg-clip-text">
          Statistik
        </div>
        <div className="ms-[5%] mt-[1%] text-[20px] font-semibold  bg-gradient-to-b from-[#00663F] to-[#5CD5A6] text-transparent bg-clip-text">
          Produk
        </div>
        <div className="w-[73%] h-[490px] ms-[4%] rounded-xl bg-gradient-to-b from-[#15E6CD] to-[#4EDBB9]">
          <DiagramBarStatistik />
          <div className="relative text-white">
            <p className="absolute left-[25%] top-28 font-semibold text-xs">
              Total Terjual:
            </p>
            <p className="absolute left-[25%] top-36 font-bold text-xl">Juli</p>
          </div>
          <BarKecilStatistik />
        </div>
        <PieChartStatistik />
      </div>
    </div>
  );
}

export default Page;
