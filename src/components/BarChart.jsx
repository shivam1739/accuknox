import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
    { name: 'Critical', count: 2, color: '#8B0000' },  // Dark Red
    { name: 'High', count: 2, color: '#FF4500' },      // Red-Orange
    { name: 'Medium', count: 1, color: '#FFA500' },    // Orange
    { name: 'Low', count: 1, color: '#FFD700' },       // Gold
];

const CustomBarChart = () => {
    return (
        <ResponsiveContainer width="100%" height={150}>
            <BarChart
                data={data}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                barSize={20}
            >
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="name" width={80} />
                <Bar dataKey="count" isAnimationActive={false}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default CustomBarChart;
