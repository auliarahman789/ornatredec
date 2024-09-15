"use client"
import React from 'react'
import { Pie, PieChart, Tooltip, Cell } from 'recharts'

const Page = () => {
    const data = [
        { name: "Ice Cream", stock: 100 },
        { name: "Chocolate", stock: 150 },
        { name: "Bread", stock: 44 },
        { name: "Soes", stock: 84 },
    ]
    const COLORS = ['#F0A8D0', '#FFEBD4', '#D1E9F6', '#E8C5E5'];

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
                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    )
}

export default Page
