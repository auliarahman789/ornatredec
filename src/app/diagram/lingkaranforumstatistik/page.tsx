"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

type TotalData = {
  totalIkan: number;
  totalBurung: number;
  totalTanaman: number;
};

const options = {
  title: "",
  legend: "none",
  chartArea: {
    left: 13,
    top: 8,
    right: 13,
    bottom: 8,
    width: "50%",
    height: "50%",
  },
  backgroundColor: "transparent",
  colors: ["#309494", "#4CC2AD", "#6BF8C2"],
};

function ForumStatistik() {
  const [data, setData] = useState([
    ["Type", "Total"],
    ["Total Ikan", 0],
    ["Total Burung", 0],
    ["Total Tanaman", 0],
  ]);

  async function getTotal() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/statistik/2024`;
    try {
      const res = await axios.get(url, { withCredentials: true });
      const bulan: TotalData = res.data.data[11]; // November (indeks 10)
      setData([
        ["Type", "Total"],
        ["Total Ikan", bulan.totalIkan],
        ["Total Burung", bulan.totalBurung],
        ["Total Tanaman", bulan.totalTanaman],
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Terjadi kesalahan saat mengambil data konten forum perbulan");
    }
  }

  useEffect(() => {
    getTotal();
  }, []);

  return (
    <div className="w-[70%] h-[90%] mx-auto">
      <Chart chartType="PieChart" data={data} options={options} />
    </div>
  );
}

export default ForumStatistik;
