"use client";
import React from 'react';
import { Pie, PieChart, Tooltip, Cell } from 'recharts';

const Page = () => {
    const data = [
        { name: "Ice Cream", stock: 100 },
        { name: "Chocolate", stock: 150 },
        { name: "Bread", stock: 44 },
        { name: "Soes", stock: 84 },
    ];

    // Define a type for the keys of COLORS
    type ColorKey = "Ice Cream" | "Chocolate" | "Bread" | "Soes";

    // Define COLORS with the specific type for the keys
    const COLORS: Record<ColorKey, string> = {
        "Ice Cream": '#F0A8D0',   // Pink
        "Chocolate": '#8E44AD',   // Purple
        "Bread": '#3498DB',       // Blue
        "Soes": '#F1C40F'         // Yellow
    };

    return (
        <div>
            <h1>Stock Produk</h1>
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="stock"
                    isAnimationActive={true}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
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
}

export default Page;
