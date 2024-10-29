import React from "react";
import Dropdown1 from "./dropdownPengeluaran";

function Pengeluaran() {
  return (
    <div className="bg-[#E4FFF2] w-full min-h-screen rounded-xl px-5 pt-5 pb-8">
      <div className="flex">
        <ul className="ms-1 rounded-xl space-x-[22px] bg-white flex px-3 py-4">
          <li>Januari</li>
          <li>Febuari</li>
          <li>Maret</li>
          <li>April</li>
          <li>Mei</li>
          <li>Juni</li>
          <li>Juli</li>
          <li>Agustus</li>
          <li>September</li>
          <li>Oktober</li>
          <li>November</li>
          <li>Desember</li>
        </ul>
      </div>
      <div className="relative">
        <div className="ms-[85%]">
          <Dropdown1 />
        </div>
      </div>
      <div className="bg-white mt-[2%] py-2 rounded-xl ms-[4%] w-[40%] h-[180px]">
        <p className="text-[10px] ms-[3%]">
          pengeluaran di bulan{" "}
          <span className="text-[#28AFF8]">April 2024</span>
        </p>
        <div className="flex my-[12%] justify-center">
          <p className="text-[36px]">Rp 2.700.000</p>
        </div>
      </div>
      <p className="text-[20px] translate-x-[80%]">Agung Setiawan</p>
      <hr className="border-t-2 border-[#00000069] mx-8 mt-3" />
      <div className="flex space-x-[40%] mx-8 mt-[4%]">
        <div className="flex-col">
          <p className="font-bold text-[20px]">Barang</p>
          <ul className="flex-col mt-[8%]">
            <li className="text-[20px]">Pot Bunga 20</li>
            <li className="text-[20px]">Pot Bunga 20</li>
            <li className="text-[20px]">Pot Bunga 20</li>
            <li className="text-[20px]">Pot Bunga 20</li>
            <li className="text-[20px]">Pot Bunga 20</li>
            <li className="text-[20px]">Pot Bunga 20</li>
            <li className="text-[20px]">Pot Bunga 20</li>
          </ul>
          <p className="font-bold text-[20px] mt-[15%]">Total</p>
        </div>
        <div className="flex-col">
          <p className="font-bold text-[20px]">Harga</p>
          <ul className="flex-col mt-[13%]">
            <li className="text-[20px]">300000</li>
            <li className="text-[20px]">300000</li>
            <li className="text-[20px]">300000</li>
            <li className="text-[20px]">300000</li>
            <li className="text-[20px]">300000</li>
            <li className="text-[20px]">300000</li>
            <li className="text-[20px]">300000</li>
          </ul>
          <p className="font-bold text-[20px] mt-[18%]">2100000</p>
        </div>
      </div>
    </div>
  );
}

export default Pengeluaran;
