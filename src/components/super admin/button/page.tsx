"use client";

import React, { useState } from "react";
import BarForumDash from "@/app/diagram/batang/ForumDash";
import BarProdukDash from "@/app/diagram/batang/page";

// Komponen untuk menampilkan diagram produk
const ProdukComponent = () => {
  return (
    <div className="mt-4 p-4">
      <BarProdukDash />
    </div>
  );
};

// Komponen untuk menampilkan diagram forum
const ForumComponent = () => {
  return (
    <div className="mt-4 p-4">
      <BarForumDash />
    </div>
  );
};

// Komponen dropdown yang mengelola pilihan
const Dropdown1 = ({ onSelect }: { onSelect: (option: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Produk");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option); // Memanggil fungsi onSelect ketika opsi dipilih
  };

  return (
    <div className="relative inline-block text-left mr-4">
      <div className="mt-3">
        <button
          type="button"
          className="inline-flex justify-center text-[18px] px-3 py-1 font-semibold text-black bg-white border border-gray-300 rounded-md"
          onClick={toggleDropdown}
        >
          {selectedOption}
          <svg
            className={`ml-2 h-6 w-6 text-[#21B892] transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg">
          <div className="py-1">
            {["Produk", "Forum"].map(
              (option) =>
                selectedOption !== option && (
                  <p
                    key={option}
                    onClick={() => handleOptionClick(option)}
                    className="block px-4 py-2 text-sm text-black cursor-pointer hover:bg-gray-100"
                  >
                    {option}
                  </p>
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Komponen utama yang menggabungkan dropdown dan konten terkait
const CombinedDropdowns = () => {
  const [selectedOption, setSelectedOption] = useState("Produk");

  return (
    <div className="flex flex-col h-full bg-red-500">
      <div className="flex">
        <Dropdown1 onSelect={setSelectedOption} />
      </div>

      {selectedOption === "Produk" && <ProdukComponent />}
      {selectedOption === "Forum" && <ForumComponent />}
    </div>
  );
};

export default CombinedDropdowns;
