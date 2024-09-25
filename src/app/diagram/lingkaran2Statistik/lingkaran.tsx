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
    <div className="text-white max-w-[20%] ms-[40%] -translate-y-[100%]">
      <p className="text-center text-white -mb-10">Penjualan</p>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"200px"}
        className=""
      />
    </div>
  );
}
