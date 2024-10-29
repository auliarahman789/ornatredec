"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pie, PieChart, Tooltip, Cell } from "recharts";

type Total = {
  totalForumBurung: number;
  totalForumIkan: number;
  totalForumTanaman: number;
};

const Page = () => {
  const [data, setData] = useState<Total | null>(null); // State untuk menyimpan data

  // Fungsi untuk mendapatkan data dari API
  async function getTotal() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/totalKeseluruhan`;
    try {
      const res = await axios.get(url, {
        withCredentials: true,
      });
      setData(res.data); // Simpan data yang diterima ke state
      console.log(res.data);
    } catch (error) {
      console.log(error);
      alert("Terjadi kesalahan saat mengambil data produk.");
    }
  }

  useEffect(() => {
    getTotal();
  }, []);

  // Jika data belum tersedia, tampilkan loading
  if (!data) {
    return <div>Loading...</div>;
  }

  // Format data untuk grafik pie
  const pieData = [
    { name: "Tanaman", stock: data.totalForumTanaman ?? 0 }, // Menambahkan fallback
    { name: "Burung", stock: data.totalForumBurung ?? 0 }, // Menambahkan fallback
    { name: "Ikan", stock: data.totalForumIkan ?? 0 }, // Menambahkan fallback
  ];

  type ColorKey = "Tanaman" | "Burung" | "Ikan";

  const COLORS: Record<ColorKey, string> = {
    Tanaman: "#308967",
    Ikan: "#51CB9F",
    Burung: "#83F6CA",
  };

  return (
    <div className="mt-2">
      <PieChart width={230} height={200} className="ms-[5%]">
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
            <Cell
              key={index}
              fill={COLORS[entry.name as ColorKey]} // Use type assertion
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Page;
