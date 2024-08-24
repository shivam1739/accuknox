import React from 'react'

const AddWidgetPlaceholder = ({ handleClick }) => {
    return (
        <div className='h-[14.5rem] w-1/3 flex justify-center items-center bg-white rounded-lg'>
            <button className='rounded border-gray-300 border-2 px-2 text-gray-500' onClick={handleClick}>+  Add Widget</button>
        </div>
    )
}

export default AddWidgetPlaceholder