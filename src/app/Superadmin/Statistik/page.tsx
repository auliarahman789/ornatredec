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
        <div className="flex ms-[34%] space-x-10 -translate-y-7 text-sm">
          <p className="flex text-white items-center space-x-2 gap-x-2">
            <span className="w-3 h-3 bg-[#6BF8C2] rounded-full inline-block"></span>
            {/* Lingkaran kecil putih */}
            Online
          </p>
          <p className="flex text-white items-center space-x-2 gap-x-2">
            <span className="w-3 h-3 bg-white rounded-full inline-block"></span>
            {/* Lingkaran kecil putih */}
            Offline
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
