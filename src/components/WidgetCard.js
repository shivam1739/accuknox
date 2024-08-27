import React from 'react'
import DonutChart from './DonutChart'
import BarLineChart from './BarChart'
import CustomBarChart from './BarChart'
import NoGraphDataPlaceholder from './NoGraphDataPlaceholder'
import { WIDGET_TYPE } from '@/constants'

const Widget = ({ cardInfo }) => {

    switch (cardInfo?.type) {
        case WIDGET_TYPE.BAR_CHART:
            return <CustomBarChart data={cardInfo.data} />

        case WIDGET_TYPE.PIE_CHART:

            return <DonutChart data={cardInfo.data} />

        default:
            return <NoGraphDataPlaceholder />
    }
}

const WidgetCard = ({ cardInfo }) => {

    return (
        <div className='p-3 w-1/3 h-[14.5rem] rounded-md shadow-md bg-white'>
            <span>{cardInfo.name}</span>

            {cardInfo.data.length <= 0 ? <NoGraphDataPlaceholder /> : <Widget cardInfo={cardInfo} />}

        </div>
    )
}

export default WidgetCard