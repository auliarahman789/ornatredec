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
        <div className="w-[73%] h-[455px] ms-[4%] mt-[4%] bg-gradient-to-b from-[#15E6CD] to-[#4EDBB9] rounded-xl">
          <DiagramBarStatistik />
          <BarKecilStatistik />
          <PieChartStatistik />
        </div>
        <div className="flex ms-[35%]">
          <p className="bg-slate-400">Online</p>
          <p className="bg-red-500">Offline</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
