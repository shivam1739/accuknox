'use client'
import { DashboardContext } from '@/context/dashboardContext'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import TabList from './TabList'
import List from './List'

const SideBar = ({ isOpen, handleClose }) => {
    const { categoryList, categoryActiveWidget, setCategoryActiveWidget, selectedCategory } = useContext(DashboardContext)
    const tabs = categoryList.map((item) => item.key);
    const [activeTab, setActiveTab] = useState('');
    const [selectedWidgets, setSelectedWidgets] = useState([])

    useEffect(() => {
        setActiveTab(selectedCategory)
    }, [selectedCategory])

    useEffect(() => {
        const selectedCategory = categoryList.filter((item) => item.key === activeTab)[0]
        if (selectedCategory) {
            setSelectedWidgets(selectedCategory?.widgetList)
        }
    }, [activeTab])

    const handleCheckboxChange = (id) => {
        setSelectedWidgets((prevWidgets) =>
            prevWidgets.map((widget) =>
                widget.id === id ? { ...widget, checked: !widget.checked } : widget
            )
        );
    };

    const handleConfirm = () => {
        const selectedWidget = selectedWidgets.filter((item) => item.checked)
        const updatedCategory = categoryActiveWidget.map((item) => {
            if (item.key === activeTab) {
                return ({ ...item, widgetList: selectedWidget })
            }
            return item

        })
        setCategoryActiveWidget(updatedCategory)
    }

    return (
        <div className={`fixed flex justify-between flex-col top-0 z-30 right-0 h-[100vh] w-[40%] bg-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out`} >
            <div>
                <div className='flex justify-between px-3 items-center h-8 text-white bg-blue-800 '><span>Add Widget</span><span onClick={handleClose}><Image width={20} height={20} src="/cross.svg" /></span></div>
                <div className='p-4'>Personalise your dashboard by adding the following widget </div>
                <div>
                    <TabList tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
                <List selectedWidgets={selectedWidgets} setSelectedWidgets={selectedWidgets} handleCheckboxChange={handleCheckboxChange} />
            </div>
            <div className="flex justify-end space-x-4 mt-4 p-4">
                <button onClick={handleClose} className="border border-gray-400 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100">
                    Cancel
                </button>
                <button onClick={() => handleConfirm()} className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800">
                    Confirm
                </button>
            </div>
        </div >
    )
}

export default SideBar