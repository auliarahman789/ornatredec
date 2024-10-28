"use client";
import React, { useState } from "react";

const Dropdown1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Tanaman");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div className="mt-3">
        <button
          type="button"
          className="inline-flex justify-center text-[18px] px-3 py-1 font-semibold text-[#21B892]"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          {selectedOption}
          <svg
            className={`ml-2 mt-[1%] h-6 w-6 text-[#21B892] transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
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
        <div
          className="absolute left-5 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
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

export default Dropdown1;
