"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const Burung = () => {
  const [data, setData] = useState<any[]>([]); // State for storing product data
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const productRef = useRef<HTMLDivElement | null>(null); // Ref for the product section

  useEffect(() => {
    getBurung();

    // Check if the URL contains the #burung hash
    if (window.location.hash === "#burung") {
      scrollToProducts();
    }
  }, []);

  async function getBurung() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/filterdanGet`;
    try {
      const res = await axios.get(url, {
        withCredentials: true,
      });
      setData(res.data.slice(0, 12)); // Save received data to state
      console.log(res.data);
    } catch (error: any) {
      console.log(error);
      alert("Terjadi kesalahan saat mengambil data produk.");
    }
  }

  // Filter products based on search term
  const filteredData = data.filter((item) =>
    item.judul_produk.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to scroll to the products section
  const scrollToProducts = () => {
    if (productRef.current) {
      productRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pt-1" id="burung">
      <div
        className="h-[500px] w-[100%] -translate-y-1 bg-cover"
        style={{
          backgroundImage: "url('/img/BurungProduk.png')",
          height: "85vh",
        }}
      ></div>
      <ul className="text-center space-x-10 translate-y-1 min-h-screen text-[22px] text-white font-semibold flex justify-center mt-5">
        <Link href="/Produk/#produk">
          <li className="mx-2 text-3xl cursor-pointer hover:text-[#308967] text-[#B3E8D5]">
            Tanaman
          </li>
        </Link>
        <Link href="/Produk/Ikan#ikan">
          <li className="mx-2 text-3xl cursor-pointer hover:text-[#308967] text-[#B3E8D5]">
            Ikan
          </li>
        </Link>
        <Link href="/Produk/Burung#burung">
          <li className="mx-2 text-3xl cursor-pointer text-[#308967]">
            Burung
          </li>
          <div className="border-b-2 border-[#51CB9F]"></div>
        </Link>
      </ul>
      <div className="text-[#8EAEA6] text-[18px] pb-4 -translate-y-[500%]">
        <input
          type="text"
          placeholder="Cari produk..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
          className="w-96 p-3 border bg-[#FFFBFB] translate-x-[115%] mt-10 shadow-sm"
        />
      </div>
      <div
        className={`px-10 py-10 grid grid-cols-4 gap-6 ml-[5%] mr-[5%] -translate-y-[50%] ${
          filteredData.length === 0 ? "bg-transparent" : "bg-[#EBFFF8]"
        }`}
        ref={productRef} // Attach ref here
      >
        {filteredData.length > 0 ? (
          filteredData.map((item: any) => (
            <div
              className="w-[239px] h-[319px] rounded-3xl bg-white shadow-[2px_8px_10px] shadow-[#0000002e]"
              key={item.id}
            >
              <a href="#">
                <img
                  className="mx-auto mt-5 h-[70%] w-[150%]"
                  alt="Produk Gambar"
                  src={`https://74gslzvj-8000.asse.devtunnels.ms${item.foto_produk}`}
                />
              </a>
              <div className="px-4 py-2">
                <h5 className="text-lg font-semibold text-black">
                  {item.judul_produk}
                </h5>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-bold text-[#FF0A0A]">
                    Rp. {item.harga}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-4 text-center text-3xl -translate-y-[1200%] text-[#308967]">
            Maaf, produk ini tidak tersedia.
          </div>
        )}
      </div>
    </div>
  );
};

export default Burung;
