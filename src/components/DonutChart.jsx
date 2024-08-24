'use client'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';

const DonutChart = ({ data }) => {

    const total = data.reduce((acc, item) => acc + item.value, 0);


    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', "#FF0000", "#FFFF00", "#D3D3D3", "#008000"];

    const renderCustomLegend = ({ payload }) => {

        return (
            <div className="flex flex-col items-start p-4">
                {data.map((entry, index) => (
                    <div key={`legend-item-${index}`} className="flex items-center mb-2">
                        <div
                            className="w-3 h-3 rounded-sm mr-2"
                            style={{ background: payload[index].color }}
                        />
                        <span className="text-black text-sm font-medium">
                            {entry.name} ({entry.value})
                        </span>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <PieChart width={380} height={180}>
            <Pie
                data={data}
                cx={70}
                cy={85}
                innerRadius={45}
                outerRadius={70}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
                strokeWidth={1}

            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}

            </Pie>
            <Legend content={renderCustomLegend} layout="vertical" verticalAlign="middle" align="right" />
            <text x={74} y={83} textAnchor="middle" dominantBaseline="middle" className='font-bold'>
                {total}
            </text>
            <text x={74} y={100} textAnchor="middle" dominantBaseline="middle">
                Total
            </text>
        </PieChart>
    );
}


export default DonutChart;