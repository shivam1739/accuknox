'use client'
const { createContext, useState } = require("react");

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
    const categoryList = [{
        key: 'CSPM',
        name: 'CSPM Executive Dashboard',
        widgetList: [
            {
                id: 'cloud-account', name: 'Cloud Accounts', data: [{ name: 'Connected', value: 1 },
                { name: 'not connected', value: 1 }], type: 'piechart'
            }, {
                id: 'cloud-account-risk-assessment', name: 'Cloud Accounts Risk Assessment', data: [
                    { name: "Failed", value: 1689 },
                    { name: "Warning", value: 681 },
                    { name: "Not available", value: 36 },
                    { name: "Passed", value: 7253 }
                ], type: 'piechart'
            }
        ]

    }, {
        key: 'CWPP',
        name: 'CWPP Dashboard',
        widgetList: [
            { id: 'top-5-namespace', name: 'Top 5 Namespace Specific Alerts', data: [], type: 'graphchart' }, { id: 'workload-alert', name: 'WorkLoad Alert', data: [], type: 'graphchart' }
        ]
        ,

    },
    {
        key: 'Image',
        name: 'Registry Scan',
        widgetList: [
            {
                id: 'image-risk-assessment', name: 'Image Risk Assessment', data: [
                    { name: "Failed", value: 1689 },
                    { name: "Warning", value: 681 },
                    { name: "Not available", value: 36 },
                    { name: "Passed", value: 7253 }
                ]
                , type: 'barchart'
            }, {
                id: 'image-security-issues', name: 'Image Security Issues', data: [
                    { name: "Critical", value: 19 },
                    { name: "High", value: 781 },
                    { name: "Low", value: 306 },
                    { name: "Abnormal", value: 53 }
                ]
                , type: 'barchart'
            }
        ],

    }
    ]

    const renderSelectedCategoryWidgets = [{
        key: 'CSPM',
        name: 'CSPM Executive Dashboard',
        widgetList: [

        ]

    }, {
        key: 'CWPP',
        name: 'CWPP Dashboard',
        widgetList: [

        ]
    },
    {
        key: 'Image',
        name: 'Registry Scan',
        widgetList: [

        ]
    }
    ]

    const [categorySection, setCategorySection] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    const [categoryWidgetList, setCategoryWidgetList] = useState({})
    const [categoryActiveWidget, setCategoryActiveWidget] = useState(renderSelectedCategoryWidgets)
    const [selectedWidgets, setSelectedWidgets] = useState({})





    return (
        <DashboardContext.Provider value={{ categorySection, setCategorySection, categoryList, selectedCategory, setSelectedCategory, categoryActiveWidget, setCategoryActiveWidget, renderSelectedCategoryWidgets, selectedWidgets, setSelectedWidgets }}>
            {children}
        </DashboardContext.Provider>
    );
};