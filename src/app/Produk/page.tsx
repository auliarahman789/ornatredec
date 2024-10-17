"use client";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
const Produk = () => {
  const [data, setData] = useState<any[]>([]); // State for storing product data
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const productRef = useRef<HTMLDivElement | null>(null); // Ref for the product section
  
  useEffect(() => {
    fetchProducts();
    // Check if the URL contains the #tanaman hash
    if (window.location.hash === "#produk") {
      scrollToProducts();
    }
  }, []);
  const fetchProducts = async () => {
    const url = `${process.env.NEXT_PUBLIC_URL}/api/filterdanGet`;
    try {
      const response = await axios.get(url, { withCredentials: true });
      setData(response.data.slice(0, 12)); // Save received data to state
      console.log(response.data);
    } catch (error: any) {
      console.error("Error fetching products:", error);
      alert("Terjadi kesalahan saat mengambil data produk.");
    }
  };
  // Filter products based on search term
  const filteredData = data.filter((item) =>
    item.judul_produk.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const scrollToProducts = () => {
    if (productRef.current) {
      productRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
 return (
   <div className="bg-white">
     <div className="pt-1" id="tanaman">
       <div
         className="h-[500px] w-[100%] -translate-y-1 bg-cover"
         style={{ backgroundImage: "url('/img/TanamanProduk1.png')" }}
       ></div>

       <ul className="text-center space-x-10 -translate-y-3 min-h-screen text-[22px] text-white font-semibold flex justify-center mt-5">
         <Link href="/Produk/#produk">
           <li className="mx-2 text-3xl cursor-pointer text-[#308967]">
             Tanaman
           </li>
           <div className="border-b-2 border-[#51CB9F]"></div>
         </Link>
         <Link href="/Produk/Ikan#ikan">
           <li className="mx-2 text-3xl cursor-pointer hover:text-[#308967] text-[#B3E8D5]">
             Ikan
           </li>
         </Link>
         <Link href="/Produk/Burung#burung">
           <li className="mx-2 text-3xl cursor-pointer hover:text-[#308967] text-[#B3E8D5]">
             Burung
           </li>
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
         className="px-10 py-10 grid grid-cols-4 gap-6 ml-[5%] mr-[5%] -translate-y-[50%] bg-[#EBFFF8]"
         ref={productRef} // Attach ref here
       >
         {filteredData.map((item: any) => (
           <div
             className="w-[239px] h-[319px] rounded-3xl bg-white shadow-[2px_8px_10px] shadow-[#0000002e]"
             key={item.id}
           >
             <a href="#">
               <img
                 className="mx-auto mt-5 h-[65%] w-[85%]"
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
         ))}
       </div>
     </div>
   </div>
 );
};
export default Produk;