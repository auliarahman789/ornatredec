"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

type MonthlyStatistic = {
  month: string;
  totalTransaksiOffline: number;
  totalTransaksiOnline: number;
};

export const options = {
  sliceVisibilityThreshold: 0.2,
  legend: "none",
  backgroundColor: "transparent",
  colors: ["#FFFFFF", "#6BF8C2"],
  pieSliceText: "percentage",
  chartArea: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
  slices: {
    0: {
      textStyle: {
        color: "#6BF8C2",
        fontSize: 12,
      },
    },
    1: {
      textStyle: {
        color: "#FFFFFF",
        fontSize: 12,
      },
    },
  },
};

export function PieChartStatistik() {
  const [data, setData] = useState([["Type", "Total"], ["Online", 0], ["Offline", 0]]);

  async function getTotal() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/statistics/yearly/2024`;
    try {
      const res = await axios.get(url, { withCredentials: true });
      const bulan: MonthlyStatistic = res.data.monthlyStatistics[11]; // November (index 10)
      setData([
        ["Type", "Total"],
        ["Online", bulan.totalTransaksiOnline],
        ["Offline", bulan.totalTransaksiOffline],
      ]);
    } catch (error) {
      console.log(error);
      alert("Terjadi kesalahan saat mengambil data penjualan online offline.");
    }
  }

  useEffect(() => {
    getTotal();
  }, []);

  return (
    <div className="w-[20%] ms-[38%] -translate-y-[130%]">
      <div>
        <p className="text-center text-white">Penjualan</p>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={200}
          height={100}
          className="-ms-[3.5%]"
        />
        <div className="flex text-sm space-x-9 translate-y-[16px]">
          <p className="ms-4 text-white flex items-center">
            <span className="w-3 h-3 bg-[#6BF8C2] rounded-full mr-1"></span>
            Online
          </p>
          <p className="text-white flex items-center">
            <span className="w-3 h-3 bg-white rounded-full mr-1"></span>
            Offline
          </p>
        </div>
      </div>
    </div>
  );
}
