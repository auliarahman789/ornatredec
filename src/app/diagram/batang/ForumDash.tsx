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
  Legend,
  ResponsiveContainer,
} from "recharts";

type Kategoritipe = {
  name: string; // Nama kategori
  pv: number; // Total transaksi
};

const BarForumDash: React.FC = () => {
  const [data, setData] = useState<Kategoritipe[]>([]);
  useEffect(() => {
    getBarForumDash();
  }, []);
  async function getBarForumDash() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/statistik/2024`;
    try {
      const res = await axios.get(url, {
        withCredentials: true,
      });
      const formattedData = [
        { name: "Jan", pv: res.data.data[0].totalPosts },
        { name: "Feb", pv: res.data.data[1].totalPosts },
        { name: "Mar", pv: res.data.data[2].totalPosts },
        { name: "Apr", pv: res.data.data[3].totalPosts },
        { name: "Mei", pv: res.data.data[4].totalPosts },
        { name: "Juni", pv: res.data.data[5].totalPosts },
        { name: "Juli", pv: res.data.data[6].totalPosts },
        { name: "Agst", pv: res.data.data[7].totalPosts },
        { name: "Sept", pv: res.data.data[8].totalPosts },
        { name: "Okt", pv: res.data.data[9].totalPosts },
        { name: "Nov", pv: res.data.data[10].totalPosts },
        { name: "Des", pv: res.data.data[11].totalPosts },
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
    <div>
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
          <Legend />
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
      <div>Ini Forum</div>
    </div>
  );
};

export default BarForumDash;
