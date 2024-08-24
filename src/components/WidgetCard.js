import React from 'react'
import DonutChart from './DonutChart'
import BarLineChart from './BarChart'
import CustomBarChart from './BarChart'
import NoGraphDataPlaceholder from './NoGraphDataPlaceholder'

const WidgetCard = ({ cardInfo }) => {
    return (
        <div className='p-3 min-w-1/3 h-[14.5rem] rounded-md shadow-md bg-white'>
            <span>{cardInfo.name}</span>

            {cardInfo.data.length <= 0 ? <NoGraphDataPlaceholder /> : cardInfo.type === 'piechart' ? <DonutChart data={cardInfo.data} /> : <CustomBarChart />}

        </div>
    )
}

export default WidgetCard