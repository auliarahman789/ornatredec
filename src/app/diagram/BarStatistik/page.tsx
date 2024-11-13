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
  Legend,
} from "recharts";

type Kategoritipe = {
  name: string; // Nama kategori
  pv: number;   // Total transaksi
};

const BarStatistik: React.FC = () => {
  const [data, setData] = useState<Kategoritipe[]>([]);
  useEffect(() => {
      getBarStatistik();
    }, []);
    async function getBarStatistik() {
      const url = `${process.env.NEXT_PUBLIC_URL}/api/statistics/yearly/2024`;
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
          { name: "Des", pv:res.data.monthlyStatistics[11].totalTransactions},
        ];
        setData(formattedData);
        console.log(
          res.data);
      } catch (error: any) {
        console.log(error);
        alert("Terjadi kesalahan saat mengambil data total produk tanaman burung dan ikan");
      }
    }
    return (
      <ResponsiveContainer width="65%" height="63%">
        <BarChart
          width={700}
          height={500}
          data={data}
          margin={{
            top: 20,
            right: 40,
            left: 10,
            bottom: 5,
          }}
          barSize={30}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 30, right: 30 }}
            tick={{
              fill: "#FFFFFF", // Ubah warna teks label di sumbu X menjadi putih
              fontSize: "12px", // Ukuran font teks label di sumbu X
            }}
          />
          <YAxis
            stroke="#FFFFFF" // Ubah warna sumbu Y menjadi putih
            tick={{
              fill: "#FFFFFF", // Ubah warna teks label di sumbu X menjadi putih
              fontSize: "12px", // Ukuran font teks label di sumbu X
            }}
          />
          <Tooltip />
          <CartesianGrid stroke="#399898" vertical={false} />
          <Bar
            dataKey="pv"
            fill="#44FFC7" // Warna batang menjadi hijau
            style={{
              filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.3))",
            }}
            radius={[5, 5, 0, 0]}
            label={{
              position: "top",
              fill: "#FFFFFF",
              fontSize: "12px", // Ukuran font teks label di atas batang
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }

export default BarStatistik;
