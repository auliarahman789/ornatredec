"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const Ikan = () => {
  const [data, setData] = useState<any[]>([]); // State for storing product data
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const productRef = useRef<HTMLDivElement | null>(null); // Ref for the product section

  useEffect(() => {
    getIkan();

    // Check if the URL contains the #ikan hash
    if (window.location.hash === "#ikan") {
      scrollToProducts();
    }
  }, []);

  async function getIkan() {
    const url = `${process.env.NEXT_PUBLIC_URL}/api/getProduk`;
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
    <div className="pt-1" id="ikan">
      <div
        className="h-[500px] w-[100%] -translate-y-1 bg-cover"
        style={{ backgroundImage: "url('/img/IkanProduk.png')", height: '85vh' }}
      ></div>
      <div className="text-[#8EAEA6] text-[18px] pb-4">
        <input
          type="text"
          placeholder="Cari produk..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
          className="w-96 p-3 border bg-[#FFFBFB] translate-x-[115%] mt-10 shadow-sm"
        />
      </div>
      <ul className="text-center space-x-10 -translate-y-3 min-h-screen text-[22px] text-white font-semibold flex justify-center mt-5">
        <Link href="/Produk/#produk">
          <li className="mx-2 text-3xl cursor-pointer hover:text-[#308967] text-[#B3E8D5]">
            Tanaman
          </li>
        </Link>
        <Link href="/Produk/Ikan#ikan">
          <li className="mx-2 text-3xl cursor-pointer text-[#308967]">Ikan</li>
          <div className="border-b-2 border-[#51CB9F]"></div>
        </Link>
        <Link href="/Produk/Burung#burung">
          <li className="mx-2 text-3xl cursor-pointer hover:text-[#308967] text-[#B3E8D5]">
            Burung
          </li>
        </Link>
      </ul>
      <div
        className="grid grid-cols-4 mx-auto -translate-y-[65%] bg-[#EBFFF8] justify-between ml-[5%] mr-[5%]"
        ref={productRef} // Attach ref here
      >
        {filteredData.map((item: any) => (
          <div
            className="w-[90%] h-[95%] bg-white shadow-[2px_8px_10px] shadow-[#0000002e] ml-[15%] mb-4"
            key={item.id}
          >
            <a href="#">
              <Image
                className="mx-auto mt-5 h-auto w-auto"
                alt="Produk Gambar"
                src={
                  "https://74gslzvj-8000.asse.devtunnels.ms/uploads/" +
                  item.foto_produk
                }
              />
            </a>
            <div className="px-4 py-2">
              <h5 className="text-lg font-semibold translate-x-10 text-black">
                {item.judul_produk}
              </h5>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xl font-bold translate-x-10 text-[#FF0A0A]">
                  Rp {item.harga}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ikan;
