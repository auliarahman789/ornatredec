import BarKecilStatistik from "@/app/diagram/BarKecilStatistik/page";
import DiagramBarStatistik from "@/app/diagram/BarStatistik/page";
import { PieChartStatistik } from "@/app/diagram/lingkaran2Statistik/lingkaran";
import React from "react";

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

          <div className="absolute right-[27%] top-[53%] bg-blue-700 text-white text-[10px]">
            Total terjual : <span>145</span>
          </div>

          <div className="text-white grid grid-cols-2 bg-white absolute right-[5%] top-[62%] h-[35%] w-[30%]">
            <div className="col-span-1 bg-blue-300 text-[15px] space-y-3">
              Tanaman : <span>43</span>
              <div>
                Ikan : <span>70</span>
              </div>
              <div>
                Burung : <span>30</span>
              </div>
            </div>
            <div className="col span-2 bg-orange-500">njfsdjnf</div>
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
    </div>
  );
}

export default Page;
