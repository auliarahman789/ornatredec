"use client";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    totalProdukTanaman: 10,
    totalProdukBurung: 5,
    totalProdukIkan: 15,
  });

  // Simulasi pengambilan data
  useEffect(() => {
    const fetchData = () => {
      // Simulasi loading
      setTimeout(() => {
        setLoading(false);
      }, 2000); // misalnya 2 detik untuk loading
    };

    fetchData();
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Jika loading masih true, tampilkan skeleton loading
  if (loading) {
    return (
      <div className="relative ms-[85%] inline-block text-left">
        <Skeleton
          height={25}
          width={100}
          borderRadius={10}
          className="rounded-xl mt-3 z-20"
        />
      </div>
    );
  }

  return (
    <div className="relative ms-[85%] inline-block text-left">
      <div className="mt-3">
        <button
          type="button"
          className="inline-flex justify-center gap-x-1.5 rounded-xl bg-white px-3 py-1 text-sm font-semibold text-[#1AE5CB] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          Options
          <svg
            className={`-mr-1 h-5 w-5 text-gray-400 transform transition-transform duration-200 ${
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
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <p className="block px-4 py-2 text-sm text-gray-700">
              Produk Tanaman: {data.totalProdukTanaman}
            </p>
          </div>
          <div className="py-1" role="none">
            <p className="block px-4 py-2 text-sm text-gray-700">
              Produk Burung: {data.totalProdukBurung}
            </p>
          </div>
          <div className="py-1" role="none">
            <p className="block px-4 py-2 text-sm text-gray-700">
              Produk Ikan: {data.totalProdukIkan}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
