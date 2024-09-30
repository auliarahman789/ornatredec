"use client";
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Pizza", "Popularity"],
  ["Offline", 30],
  ["Online", 70],
];

export const options = {
  sliceVisibilityThreshold: 0.2, // 20%
  legend: "none",
  backgroundColor: "transparent", // Membuat background chart transparan
  colors: ["#FFFFFF", "#6BF8C2"], // Hijau untuk Offline, Biru untuk Online
  pieSliceText: "percentage", // Menampilkan teks persentase di dalam slice
  slices: {
    0: {
      textStyle: {
        color: "#6BF8C2", // Warna hijau untuk teks persentase pada 30%
        fontSize: 12, // Mengatur ukuran font
      },
    },
    1: {
      textStyle: {
        color: "#FFFFFF", // Warna putih untuk teks persentase pada 70%
        fontSize: 12, // Mengatur ukuran font
      },
    },
  },
};

export function PieChartStatistik() {
  return (
    <div className="-translate-y-[90%] -translate-x-[15%]">
      <div className="text-white items-center mx-auto">
        <p className="ms-[47%] text-white bg-slate-400 inline-block translate-y-8">
          Penjualan
        </p>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"200px"}
          className=""
        />
        <div className="text-sm bg-slate-600 flex space-x-5 w-[12%] mt-2 -translate-y-10">
          <p className="text-white flex items-center">
            <span className="w-3 h-3 bg-[#6BF8C2]  rounded-full mr-1"></span>
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
