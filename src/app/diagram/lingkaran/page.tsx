"use client";
import React from "react";
import { Pie, PieChart, Tooltip, Cell } from "recharts";

const Page = () => {
  const data = [
    { name: "Tanaman", stock: 40 },
    { name: "Burung", stock: 20 },
    { name: "Ikan", stock: 40 },
  ];
  type ColorKey = "Tanaman" | "Burung" | "Ikan" ;

  const COLORS: Record<ColorKey, string> = {
    "Tanaman": "#308967", 
    "Ikan": "#51CB9F",
    "Burung": "#83F6CA",
  };

  return (
    <div className="mt-2">
      <PieChart width={230} height={200} className="ms-[5%]">
        <Pie
          dataKey="stock"
          isAnimationActive={true}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={70}
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[entry.name as ColorKey]} // Use type assertion
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Page;
