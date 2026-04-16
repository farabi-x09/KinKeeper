"use client"
import React, { useContext } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { SendContext } from '@/context/send.context';

const StatsPage = () => {
    const { send } = useContext(SendContext);

    // 1. Process data: Count how many of each type (Call, Text, Video)
    const dataCount = send.reduce((acc, curr) => {
        const type = curr.type.charAt(0).toUpperCase() + curr.type.slice(1); // Capitalize
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {});

    // 2. Format for Recharts
    const chartData = Object.keys(dataCount).map(key => ({
        name: key,
        value: dataCount[key]
    }));

    // Colors matching your KeenKeeper theme
    const COLORS = ['#244D3F', '#4ADE80', '#6366F1']; 

    return (
        <div className="bg-[#F8FAFC] min-h-screen py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-[#244D3F] mb-8 text-center md:text-left">
                    Friendship Analytics
                </h1>

                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm max-w-4xl mx-auto">
                    <h2 className="text-lg font-semibold text-gray-700 mb-6">By Interaction Type</h2>
                    
                    <div className="h-[400px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80} 
                                    outerRadius={120}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip 
                                    contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                />
                                <Legend verticalAlign="bottom" height={36}/>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {send.length === 0 && (
                        <p className="text-center text-gray-400 mt-4">No data to display yet. Start interacting!</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StatsPage;