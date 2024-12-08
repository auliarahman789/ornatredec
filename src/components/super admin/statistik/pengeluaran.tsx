import React, { useState } from "react";
import Dropdown1 from "./dropdownPengeluaran";
import PengeluaranOkt from "./pengeluaran-pemasuk/oktober/pengteluaran";
import PengeluaranJan from "./pengeluaran-pemasuk/januari/pengteluaran";
import PengeluaranFeb from "./pengeluaran-pemasuk/februari/pengteluaran";
import PengeluaranMaret from "./pengeluaran-pemasuk/maret/pengteluaran";
import PengeluaranApril from "./pengeluaran-pemasuk/april/pengteluaran";
import PengeluaranMei from "./pengeluaran-pemasuk/mei/pengteluaran";
import PengeluaranJuni from "./pengeluaran-pemasuk/juni/pengteluaran";
import PengeluaranJuli from "./pengeluaran-pemasuk/juli/pengteluaran";
import PengeluaranAgt from "./pengeluaran-pemasuk/agustus/pengteluaran";
import PengeluaranSep from "./pengeluaran-pemasuk/september/pengteluaran";
import PengeluaranNov from "./pengeluaran-pemasuk/november/pengteluaran";
import PengeluaranDes from "./pengeluaran-pemasuk/desember/pengteluaran";

function Pengeluaran() {
  const [activeMonth, setActiveMonth] = useState('Januari');
  return (
    <div className="bg-[#E4FFF2] w-full min-h-screen rounded-xl px-5 pt-5 pb-8">
      <div className="flex">
        <ul className="ms-1 rounded-xl space-x-[22px] bg-white flex px-3 py-4">
          <li onClick={() => setActiveMonth('Januari')} className={`cursor-pointer ${activeMonth === 'Januari' ? 'border-b-4 border-[#308967]' : ''}`}>Januari</li>
          <li onClick={() => setActiveMonth('Februari')} className={`cursor-pointer ${activeMonth === 'Februari' ? 'border-b-4 border-[#308967]' : ''}`}>Febuari</li>
          <li onClick={() => setActiveMonth('Maret')} className={`cursor-pointer ${activeMonth === 'Maret' ? 'border-b-4 border-[#308967]' : ''}`}>Maret</li>
          <li onClick={() => setActiveMonth('April')} className={`cursor-pointer ${activeMonth === 'April' ? 'border-b-4 border-[#308967]' : ''}`}>April</li>
          <li onClick={() => setActiveMonth('Mei')} className={`cursor-pointer ${activeMonth === 'Mei' ? 'border-b-4 border-[#308967]' : ''}`}>Mei</li>
          <li onClick={() => setActiveMonth('Juni')} className={`cursor-pointer ${activeMonth === 'Juni' ? 'border-b-4 border-[#308967]' : ''}`}>Juni</li>
          <li onClick={() => setActiveMonth('Juli')} className={`cursor-pointer ${activeMonth === 'Juli' ? 'border-b-4 border-[#308967]' : ''}`}>Juli</li>
          <li onClick={() => setActiveMonth('Agustus')} className={`cursor-pointer ${activeMonth === 'Agustus' ? 'border-b-4 border-[#308967]' : ''}`}>Agustus</li>
          <li onClick={() => setActiveMonth('September')} className={`cursor-pointer ${activeMonth === 'September' ? 'border-b-4 border-[#308967]' : ''}`}>September</li>
          <li onClick={() => setActiveMonth('Oktober')} className={`cursor-pointer ${activeMonth === 'Oktober' ? 'border-b-4 border-[#308967]' : ''}`}>Oktober</li>
          <li onClick={() => setActiveMonth('November')} className={`cursor-pointer ${activeMonth === 'November' ? 'border-b-4 border-[#308967]' : ''}`}>November</li>
          <li onClick={() => setActiveMonth('Desember')} className={`cursor-pointer ${activeMonth === 'Desember' ? 'border-b-4 border-[#308967]' : ''}`}>Desember</li>
        </ul>
      </div>
      {/* <div className="relative">
        <div className="ms-[85%]">
          <Dropdown1 />
        </div>
      </div> */}
      {/* { activeMonth === "Oktober" ? (
        <PengeluaranOkt />) : (
          activeMonth === "Januari" ? (
            <p>januari</p>
          )
      )} */}
      {activeMonth === "Januari" && <PengeluaranJan />}
      {activeMonth === "Februari" && <PengeluaranFeb />}
      {activeMonth === "Maret" && <PengeluaranMaret />}
      {activeMonth === "April" && <PengeluaranApril />}
      {activeMonth === "Mei" && <PengeluaranMei />}
      {activeMonth === "Juni" && <PengeluaranJuni />}
      {activeMonth === "Juli" && <PengeluaranJuli />}
      {activeMonth === "Agustus" && <PengeluaranAgt />}
      {activeMonth === "September" && <PengeluaranSep />}
      {activeMonth === "Oktober" && <PengeluaranOkt />}
      {activeMonth === "November" && <PengeluaranNov />}
      {activeMonth === "Desember" && <PengeluaranDes/>}
    </div>
  );
}

export default Pengeluaran;
