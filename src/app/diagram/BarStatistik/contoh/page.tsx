"use client";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

// Tipe data untuk setiap objek bulan
type MonthlyData = {
  name: string;  // Nama bulan dan tahun
  pv: number;    // Total transaksi
};

const DiagramBarStatistik = () => {
  const [data, setData] = useState<MonthlyData[]>([]); // Tipe state didefinisikan

  useEffect(() => {
    const fetchMonthlyData = async () => {
      try {
        // Ganti URL_API dengan endpoint yang sesuai
        const response = await axios.get("URL_API");
        const { currentMonth, previousMonth } = response.data;

        // Membentuk data untuk grafik
        const formattedData: MonthlyData[] = [
          {
            name: `Bulan ${currentMonth.month} Tahun ${currentMonth.year}`,
            pv: currentMonth.totalTransaksi,
          },
          {
            name: `Bulan ${previousMonth.month} Tahun ${previousMonth.year}`,
            pv: previousMonth.totalTransaksi,
          },
        ];

        setData(formattedData); // Set data ke state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMonthlyData();
  }, []);

  return (
    <ResponsiveContainer width="60%" height="63%">
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
        barSize={30}
      >
        <XAxis
          dataKey="name"
          scale="point"
          padding={{ left: 50, right: 10 }}
          tick={{
            fill: "#FFFFFF", // Ubah warna teks label di sumbu X menjadi putih
            fontSize: "12px", // Ukuran font teks label di sumbu X
          }}
        />
        <YAxis
          stroke="#FFFFFF" // Ubah warna sumbu Y menjadi putih
          tick={{
            fill: "#FFFFFF", // Ubah warna teks label di sumbu Y menjadi putih
            fontSize: "12px", // Ukuran font teks label di sumbu Y
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
};

export default DiagramBarStatistik;
