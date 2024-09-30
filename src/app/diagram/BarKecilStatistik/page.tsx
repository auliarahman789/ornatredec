"use client";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Tanaman",
    uv: 4000,
    pv: 7500,
    amt: 300,
  },
  {
    name: "Ikan",
    uv: 3000,
    pv: 5000,
    amt: 250,
  },
  {
    name: "Burung",
    uv: 2000,
    pv: 10000,
    amt: 200,
  },
];

export default class BarKecilStatistik extends PureComponent {
  render() {
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
}
