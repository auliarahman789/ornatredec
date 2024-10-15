"use client";
import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Tanaman", 156],
  ["Ikan", 78],
  ["Burung", 26],
];

// Optional
const options = {
  title: "", // Tetap kosong jika tidak perlu judul
  legend: "none", // Menghilangkan legend di sebelah kanan
  chartArea: {
    left: 13, // Hilangkan padding kiri
    top: 8, // Hilangkan padding atas
    right: 13, // Hilangkan padding kanan
    bottom: 8, // Hilangkan padding bawah
    width: "50%", // Mengatur lebar chart menjadi 50% dari container
    height: "50%", // Mengatur tinggi chart menjadi 50% dari container
  },
  backgroundColor: "transparent", // Menghilangkan background putih
  colors: ["#309494", "#4CC2AD", "#6BF8C2"], // Ganti dengan warna yang diinginkan
};

function ForumStatistik() {
  return (
    <div className="w-[70%] h-[90%] mx-auto">
      <Chart chartType="PieChart" data={data} options={options} />
    </div>
  );
}

export default ForumStatistik;
