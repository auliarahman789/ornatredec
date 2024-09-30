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
  chartArea: {
    left: 0, // Hilangkan padding kiri
    top: 0, // Hilangkan padding atas
    right: 0, // Hilangkan padding kanan
    bottom: 0, // Hilangkan padding bawah
    width: "100%", // Atur lebar chart
    height: "100%", // Atur tinggi chart
  },
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
    <div className="w-[20%] ms-[35%] -translate-y-[130%]">
      <div className="">
        <p className="text-center text-white">Penjualan</p>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={200}
          height={100}
          className="-ms-[3.5%]"
        />
        <div className="flex text-sm space-x-9">
          <p className="ms-4 text-white flex items-center">
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
