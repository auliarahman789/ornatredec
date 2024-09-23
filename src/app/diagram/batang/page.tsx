"use client";
import React, { PureComponent } from "react";
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

const data = [
  {
    name: "Januari",
    uv: 4000,
    pv: 2400,
    amt: 300,
  },
  {
    name: "Februari",
    uv: 3000,
    pv: 1398,
    amt: 250,
  },
  {
    name: "Maret",
    uv: 2000,
    pv: 10000,
    amt: 200,
  },
  {
    name: "April",
    uv: 2780,
    pv: 3908,
    amt: 150,
  },
  {
    name: "Mei",
    uv: 1890,
    pv: 4800,
    amt: 100,
  },
  {
    name: "Juni",
    uv: 2390,
    pv: 3800,
    amt: 50,
  },
  {
    name: "Juli",
    uv: 3490,
    pv: 4300,
    amt: 0,
  },
];

export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/bar-chart-has-no-padding-2hlnt8";

  render() {
    return (
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 50,
            right: 40,
            left: 10,
            bottom: 5,
          }}
          barSize={40}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 50, right: 10 }}
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
    );
  }
}
