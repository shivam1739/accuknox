import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const renderCustomLegend = (data) => {
    const COLORS = ["#FF4C4C", "#FF8C4C", "#C4C4C4", "#4CAF50"];

    return (
        <div className="flex justify-center mt-9 flex-wrap">
            {data.map((entry, index) => (
                <div key={`legend-item-${index}`} className="flex items-center mr-4 w-1/2">
                    <div
                        className="w-3 h-3 rounded-sm mr-2"
                        style={{ background: COLORS[index % COLORS.length] || '#000' }}  // Handle dynamic color assignment
                    />
                    <span className="text-black text-sm font-medium">
                        {entry.name} ({entry.value})
                    </span>
                </div>
            ))}
        </div>
    );
};

const CustomBarChart = ({ data }) => {

    const transformedData = [
        data.reduce((acc, curr) => {
            acc[curr.name.toLowerCase().replace(/\s+/g, '')] = curr.value;
            return acc;
        }, { name: 'Scan Results' })
    ];

    return (
        <ResponsiveContainer width="100%" height={50} className='relative'>
            <BarChart
                data={transformedData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 30 }}
            >
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="name" hide />
                <Tooltip />


                {data.map((entry, index) => (
                    <Bar
                        key={`bar-${index}`}
                        dataKey={entry.name.toLowerCase().replace(/\s+/g, '')}
                        stackId="a"
                        fill={["#FF4C4C", "#FF8C4C", "#C4C4C4", "#4CAF50"][index % 4]}  // Dynamic color assignment
                    />
                ))}

            </BarChart>
            <Legend content={() => renderCustomLegend(data)} verticalAlign="bottom" align="center" />
        </ResponsiveContainer>
    );
};

export default CustomBarChart;
