"use client";
import axios from "axios";
import React, { PureComponent, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Kategoritipe = {
  name: string; // Nama kategori
  pv: number; // Total transaksi
};

const BarProdukDash: React.FC = () => {
  const [data, setData] = useState<Kategoritipe[]>([]);
  useEffect(() => {
    getBarProdukDash();
  }, []);
  async function getBarProdukDash() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/statistics/yearly/2024`;
    try {
      const res = await axios.get(url, {
        withCredentials: true,
      });
      const formattedData = [
        { name: "Jan", pv: res.data.monthlyStatistics[0].totalTransactions },
        { name: "Feb", pv: res.data.monthlyStatistics[1].totalTransactions },
        { name: "Mar", pv: res.data.monthlyStatistics[2].totalTransactions },
        { name: "Apr", pv: res.data.monthlyStatistics[3].totalTransactions },
        { name: "Mei", pv: res.data.monthlyStatistics[4].totalTransactions },
        { name: "Juni", pv: res.data.monthlyStatistics[5].totalTransactions },
        { name: "Juli", pv: res.data.monthlyStatistics[6].totalTransactions },
        { name: "Agst", pv: res.data.monthlyStatistics[7].totalTransactions },
        { name: "Sept", pv: res.data.monthlyStatistics[8].totalTransactions },
        { name: "Okt", pv: res.data.monthlyStatistics[9].totalTransactions },
        { name: "Nov", pv: res.data.monthlyStatistics[10].totalTransactions },
        { name: "Des", pv: res.data.monthlyStatistics[11].totalTransactions },
      ];
      setData(formattedData);
      console.log(res.data);
    } catch (error: any) {
      console.log(error);
      alert(
        "Terjadi kesalahan saat mengambil data total produk tanaman burung dan ikan"
      );
    }
  }
  return (
    <ResponsiveContainer width="100%" height="90%">
      <BarChart
        width={500}
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 40,
          left: 10,
          bottom: 5,
        }}
        barSize={40}
      >
        <XAxis
          dataKey="name"
          scale="point"
          padding={{ left: 50, right: 50 }}
          stroke="#FFFFFF" // Ubah warna sumbu X menjadi putih
          tick={{ fill: "#FFFFFF" }} // Ubah warna teks label di sumbu X menjadi putih
        />
        <YAxis
          stroke="#FFFFFF" // Ubah warna sumbu Y menjadi putih
          tick={{ fill: "#FFFFFF" }} // Ubah warna teks label di sumbu Y menjadi putih
        />
        <Tooltip />
        <CartesianGrid stroke="#399898" vertical={false} />
        <Bar
          dataKey="pv"
          fill="#44FFC7" // Warna batang menjadi hijau
          style={{
            filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.3))",
          }}
          radius={[10, 10, 0, 0]}
          label={{ position: "top", fill: "#FFFFFF" }} // Warna teks label di atas batang menjadi putih
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarProdukDash;
