"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pie, PieChart, Tooltip, Cell } from "recharts";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type Total = {
  totalProdukTanaman: number;
  totalProdukBurung: number;
  totalProdukIkan: number;
};

const Page = () => {
  const [data, setData] = useState<Total | null>(null); // State untuk menyimpan data
  const [loading, setLoading] = useState(true); // State untuk mengatur loading

  // Fungsi untuk mendapatkan data dari API
  async function getTotal() {
    const url = `${process.env.NEXT_PUBLIC_URL}/api/totalKeseluruhan`;
    try {
      const res = await axios.get(url, {
        withCredentials: true,
      });
      setData(res.data); // Simpan data yang diterima ke state
    } catch (error) {
      console.log(error);
      alert("Terjadi kesalahan saat mengambil data produk.");
    } finally {
      setLoading(false); // Matikan loading setelah data diambil
    }
  }

  useEffect(() => {
    getTotal();
  }, []);

  // Jika data belum tersedia, tampilkan skeleton loading
  if (loading) {
    return (
      <div>
        <Skeleton
          height={208}
          width={245}
          className="-translate-y-1 rounded-xl"
        />
      </div>
    );
  }

  // Format data untuk grafik pie
  const pieData = [
    { name: "Tanaman", stock: data?.totalProdukTanaman ?? 0 }, // Menambahkan fallback
    { name: "Burung", stock: data?.totalProdukBurung ?? 0 }, // Menambahkan fallback
    { name: "Ikan", stock: data?.totalProdukIkan ?? 0 }, // Menambahkan fallback
  ];

  type ColorKey = "Tanaman" | "Burung" | "Ikan";

  const COLORS: Record<ColorKey, string> = {
    Tanaman: "#308967",
    Ikan: "#51CB9F",
    Burung: "#83F6CA",
  };

  return (
    <div>
      <PieChart width={230} height={210} className="ms-[5%] mt-1">
        <Pie
          dataKey="stock"
          isAnimationActive={true}
          data={pieData}
          cx="50%"
          cy="50%"
          outerRadius={70}
          label
        >
          {pieData.map((entry, index) => (
            <Cell key={index} fill={COLORS[entry.name as ColorKey]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Page;
