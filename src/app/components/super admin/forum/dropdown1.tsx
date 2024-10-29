"use client";
import Image from "next/image";
import Search from "../../../../../public/icon/search.svg";
import React, { useState } from "react";
import Card1tanaman from "./card1Tanaman";
import Card1ikan from "./card1Ikan";
import Card1burung from "./card1burung";

const TanamanComponent = () => {
  return (
    <div className="mt-4 p-4 ">
      <Card1tanaman />
    </div>
  );
};

const IkanComponent = () => {
  return (
    <div className="mt-4 p-4 ">
      <Card1ikan />
    </div>
  );
};

const BurungComponent = () => {
  return (
    <div className="mt-4 p-4 ">
      <Card1burung />
    </div>
  );
};

const Dropdown1 = ({ onSelect }: { onSelect: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Tanaman"); // Set default ke "Tanaman"

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option); // Memanggil fungsi onSelect ketika opsi dipilih
  };

  return (
    <div className="relative inline-block text-left mr-4">
      <div className="mt-3">
        <button
          type="button"
          className="inline-flex justify-center text-[18px] px-3 py-1 font-semibold text-[#21B892]"
          onClick={toggleDropdown}
        >
          {selectedOption}
          <svg
            className={`ml-2 mt-[1%] h-6 w-6 text-[#21B892] transform transition-transform duration-200 ${
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
        <div className="absolute left-5 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg">
          <div className="py-1">
            {selectedOption !== "Tanaman" && (
              <p
                onClick={() => handleOptionClick("Tanaman")}
                className="block px-4 py-2 text-sm text-black cursor-pointer"
              >
                Tanaman
              </p>
            )}
            {selectedOption !== "Ikan" && (
              <p
                onClick={() => handleOptionClick("Ikan")}
                className="block px-4 py-2 text-sm text-black cursor-pointer"
              >
                Ikan
              </p>
            )}
            {selectedOption !== "Burung" && (
              <p
                onClick={() => handleOptionClick("Burung")}
                className="block px-4 py-2 text-sm text-black cursor-pointer"
              >
                Burung
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const CombinedDropdowns = () => {
  const [selectedOption, setSelectedOption] = useState("Tanaman"); // Set default ke "Tanaman"

  return (
    <div className="flex flex-col">
      <div className="flex">
        <Dropdown1 onSelect={setSelectedOption} />
      </div>
      <div className="flex text-[#8EAEA6] text-[18px] pb-4">
        <input
          type="text"
          placeholder="Cari..."
          className="w-[30%] h-[31px] pl-[3%] bg-[#FFFBFB] rounded-full ml-[2%] mt-[1%] shadow-xl border border-black"
        />
        <Image
          src={Search}
          alt={"search"}
          width={50}
          height={50}
          className="bg-[#FFFBFB] shadow-xl rounded-full w-[32px] h-[32px] py-[1%] mt-[1%] ml-[2%] border border-black"
        />
      </div>
      {selectedOption === "Tanaman" && <TanamanComponent />}
      {selectedOption === "Ikan" && <IkanComponent />}
      {selectedOption === "Burung" && <BurungComponent />}
    </div>
  );
};

export default CombinedDropdowns;
