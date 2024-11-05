"use client";
import BarForumDash from "@/app/diagram/batang/ForumDash";
import BarProdukDash from "@/app/diagram/batang/page";
import Image from "next/image";
import React, { useState } from "react";

const DropdownButton = ({ onSelect }: { onSelect: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Produk");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative inline-block text-left ms-[85%]">
      <div className="mt-3">
        <button
          type="button"
          className="inline-flex justify-center text-[18px] bg-white rounded-[5px] px-3 py-1 font-semibold text-[#21B892]"
          onClick={toggleDropdown}
        >
          {selectedOption}
          <svg
            className={`ml-2 mt-[1%] h-6 w-6 text-[#21B892] transform transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
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
        <div className="absolute left-5 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg">
          <div className="py-1">
            {selectedOption !== "Produk" && (
              <p
                onClick={() => handleOptionClick("Produk")}
                className="block px-4 py-2 text-sm text-black cursor-pointer"
              >
                Produk
              </p>
            )}
            {selectedOption !== "Forum" && (
              <p
                onClick={() => handleOptionClick("Forum")}
                className="block px-4 py-2 text-sm text-black cursor-pointer"
              >
                Forum
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const KombinasiDropdown = () => {
  const [selectedOption, setSelectedOption] = useState("Produk");

  return (
    <div className="flex flex-col">
      <div className="flex">
        <DropdownButton onSelect={setSelectedOption} />
      </div>
      {selectedOption === "Produk" && <BarProdukDash />}
      {selectedOption === "Forum" && <BarForumDash />}
    </div>
  );
};

export default KombinasiDropdown;
