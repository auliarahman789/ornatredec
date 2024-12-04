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
    pv: number;   // Total transaksi
  };
  
  const BarKecil: React.FC = () => {
    const [data, setData] = useState<Kategoritipe[]>([]);
    useEffect(() => {
        getBarKecil();
      }, []);
      async function getBarKecil() {
        const url = `${process.env.NEXT_PUBLIC_URL}api/statistics/yearly/2024`;
        try {
          const res = await axios.get(url, {
            withCredentials: true,
          });
          const formattedData = [
            { name: "Tanaman", pv: res.data.monthlyStatistics[11].ProdukTanaman },
            { name: "Ikan", pv: res.data.monthlyStatistics[11].ProdukIkan },
            { name: "Burung", pv:res.data.monthlyStatistics[11].ProdukBurung},
          ];
          setData(formattedData);
          console.log(
            res.data);
        } catch (error: any) {
          console.log(error);
          alert("Terjadi kesalahan saat mengambil data total produk tanaman burung dan ikan");
        }
      }
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch('URL_API_ANDA'); // Ganti dengan URL API Anda
    //       const result = await response.json();
          
    //       // Mengatur data ke dalam format yang sesuai
    //       const formattedData = [
    //         { name: "Tanaman", pv: result.currentMonth.totalTransaksi },
    //         { name: "Ikan", pv: result.previousMonth.totalTransaksi },
    //         { name: "Burung", pv: result.comparison.totalTransactionsDifference },
    //       ];
          
    //       setData(formattedData);
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //     }
    //   };
  
    //   fetchData();
    // }, []);
    return (
      <ResponsiveContainer width="25%" height="40%">
        <BarChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 0,
          }}
          barSize={25}
        >
          <XAxis
            dataKey="name"
            scale="point"
            stroke="#FFFFFF"
            padding={{ left: 25, right: 10 }}
            tick={false} // Sembunyikan teks di sumbu X
            strokeWidth={3}
          />
          <YAxis
            stroke="#FFFFFF" // Ubah warna sumbu Y menjadi putih
            tick={false} // Sembunyikan angka pada sumbu Y
            strokeWidth={3}
          />
          <Tooltip />
          <CartesianGrid stroke="#399898" vertical={false} horizontal={false} />
          <Bar
            dataKey="pv"
            fill="#44FFC7" // Warna batang menjadi hijau
            style={{
              // Hapus bayangan di bagian bawah batang
              filter: "drop-shadow(0 3px 5px rgba(0, 0, 0, 0.3))",
            }}
            radius={[10, 10, 0, 0]}
            // Menampilkan nama bulan di dalam batang dengan rotasi vertikal
            label={({ x, y, width, height, index }) => (
              <>
                {/* Nama bulan di tengah batang dengan rotasi vertikal */}
                <text
                  x={x + width / 2} // Posisi horizontal di tengah batang
                  y={y + height / 2} // Posisi vertikal di tengah batang
                  fill="#FFFFFF"
                  fontSize="12px" // Ukuran teks di dalam batang
                  textAnchor="middle"
                  transform={`rotate(-90, ${x + width / 1.5}, ${
                    y + height / 2
                  })`} // Rotasi vertikal 90 derajat
                >
                  {data[index].name}
                </text>

                {/* Nilai angka di atas batang */}
                <text
                  x={x + width / 2} // Posisi horizontal di tengah batang
                  y={y - 10} // Posisi sedikit di atas batang
                  fill="#FFFFFF"
                  fontSize="12px" // Ukuran teks angka
                  textAnchor="middle"
                >
                  {data[index].pv}
                </text>
              </>
            )}
          />
        </BarChart>
      </ResponsiveContainer>
    );
}
  
export default BarKecil;
