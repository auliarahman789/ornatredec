import axios from "axios";
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

type Kategoritipe = {
  name: string; // Nama kategori
  pv: number;   // Total transaksi
};

const BarBesarForumStatistik: React.FC = () => {
  const [data, setData] = useState<Kategoritipe[]>([]);

  useEffect(() => {
    getBarProdukDash();
  }, []);

  async function getBarProdukDash() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/statistik/2024`;
    try {
      const res = await axios.get(url, {
        withCredentials: true,
      });

      // Data default untuk semua bulan tanpa mengubah pv
      const defaultData: Kategoritipe[] = [
        { name: "Jan", pv: res.data.data[0]?.totalPosts || 0 },
        { name: "Feb", pv: res.data.data[1]?.totalPosts || 0 },
        { name: "Mar", pv: res.data.data[2]?.totalPosts || 0 },
        { name: "Apr", pv: res.data.data[3]?.totalPosts || 0 },
        { name: "Mei", pv: res.data.data[4]?.totalPosts || 0 },
        { name: "Juni", pv: res.data.data[5]?.totalPosts || 0 },
        { name: "Juli", pv: res.data.data[6]?.totalPosts || 0 },
        { name: "Agst", pv: res.data.data[7]?.totalPosts || 0 },
        { name: "Sept", pv: res.data.data[8]?.totalPosts || 0 },
        { name: "Okt", pv: res.data.data?.totalPosts || 0 },
        { name: "Nov", pv: res.data.data[10]?.totalPosts || 0 },
        { name: "Des", pv: res.data.data[11]?.totalPosts || 0 },
      ];

      setData(defaultData);
      console.log(res.data);
    } catch (error: any) {
      console.log(error);
      alert("Terjadi kesalahan saat mengambil data total forum tanaman burung dan ikan");
    }
  }

  return (
    <ResponsiveContainer width="100%" height="100%" className="-ms-[5%]">
      <BarChart
        width={500}
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 25,
          left: 0,
          bottom: 5,
        }}
        barSize={35}
      >
        <XAxis
          dataKey="name"
          padding={{ left: 10, right: 10 }}
          tick={{
            fill: "#FFFFFF",
            fontSize: "11px",
          }}
          interval={0} // tampilkan semua label tanpa interval
        />

        <YAxis
          stroke="#FFFFFF"
          tick={{
            fill: "#FFFFFF",
            fontSize: "12px",
          }}
        />
        <Tooltip />
        <CartesianGrid stroke="#399898" vertical={false} />
        <Bar
          dataKey="pv"
          fill="#44FFC7"
          style={{
            filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.3))",
          }}
          radius={[5, 5, 0, 0]}
          label={{
            position: "top",
            fill: "#FFFFFF",
            fontSize: "12px",
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarBesarForumStatistik;
