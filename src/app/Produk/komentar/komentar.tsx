import React, { useState } from "react";

function Page() {
  // State untuk jumlah produk
  const [jumlah, setJumlah] = useState(1);

  // Fungsi untuk menambah jumlah
  const tambahJumlah = () => setJumlah((prev) => prev + 1);

  // Fungsi untuk mengurangi jumlah
  const kurangiJumlah = () => setJumlah((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="h-auto ml-[10%] mr-[10%] bg-white flex items-center">
      <div className="border-b-2 border-black"></div>
      <div className="ml-10 flex flex-row space-x-8">
        <div>foto profile</div>
      </div>
      <div className="flex flex-col mt-[6%] ml-5">
        <div>username</div>
        <span>Aroma : </span>
        <span>Estetika :</span>
        <span>Warna :</span>
      </div>
      <div className="flex items-center mt-4">
        <button
          onClick={kurangiJumlah}
          className="p-4 bg-green-600 text-white rounded"
        >
          -
        </button>
        <span className="px-4">{jumlah}</span>
        <button
          onClick={tambahJumlah}
          className="p-4 bg-green-600 text-white rounded"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Page;
