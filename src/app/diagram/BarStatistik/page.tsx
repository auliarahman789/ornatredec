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
  Legend,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 300,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 250,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 10000,
    amt: 200,
  },
  {
    name: "Apr",
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
  {
    name: "Agst",
    uv: 4000,
    pv: 2400,
    amt: 300,
  },
  {
    name: "Sept",
    uv: 3000,
    pv: 1398,
    amt: 250,
  },
  {
    name: "Okt",
    uv: 2000,
    pv: 10000,
    amt: 200,
  },
  {
    name: "Nov",
    uv: 2780,
    pv: 3908,
    amt: 150,
  },
  {
    name: "Des",
    uv: 1890,
    pv: 4800,
    amt: 100,
  },
];

export default class DiagramBarStatistik extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/bar-chart-has-no-padding-2hlnt8";

  render() {
    return (
      <ResponsiveContainer width="65%" height="63%">
        <BarChart
          width={700}
          height={500}
          data={data}
          margin={{
            top: 20,
            right: 40,
            left: 10,
            bottom: 5,
          }}
          barSize={30}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 30, right: 30 }}
            tick={{
              fill: "#FFFFFF", // Ubah warna teks label di sumbu X menjadi putih
              fontSize: "12px", // Ukuran font teks label di sumbu X
            }}
          />
          <YAxis
            stroke="#FFFFFF" // Ubah warna sumbu Y menjadi putih
            tick={{
              fill: "#FFFFFF", // Ubah warna teks label di sumbu X menjadi putih
              fontSize: "12px", // Ukuran font teks label di sumbu X
            }}
          />
          <Tooltip />
          <CartesianGrid stroke="#399898" vertical={false} />
          <Bar
            dataKey="pv"
            fill="#44FFC7" // Warna batang menjadi hijau
            style={{
              filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.3))",
            }}
            radius={[5, 5, 0, 0]}
            label={{
              position: "top",
              fill: "#FFFFFF",
              fontSize: "12px", // Ukuran font teks label di atas batang
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
