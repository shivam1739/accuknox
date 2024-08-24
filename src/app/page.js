'use client'

import AddWidgetPlaceholder from "@/components/AddWidgetPlaceholder";
import DonutChart from "@/components/DonutChart";
import SideBar from "@/components/SideBar";
import WidgetCard from "@/components/WidgetCard";
import { DashboardContext } from "@/context/dashboardContext";
import { useContext, useState } from "react";

export default function Home() {
  const [showSideBar, setShowSideBar] = useState(false)
  const { categoryActiveWidget, setSelectedCategory } = useContext(DashboardContext)
  const handleClick = (cat) => {
    setShowSideBar(true)
    setSelectedCategory(cat)
  }

  const handleCloseSideBar = () => {
    setShowSideBar(false)
  }
  console.log(categoryActiveWidget)
  return (
    <div className="relative h-[100vh] bg-[#f0f5fa] flex flex-col gap-3 p-5">
      <SideBar isOpen={showSideBar} handleClose={handleCloseSideBar} />
      {categoryActiveWidget.map((category) =>
        <div className="w-full " key={category.key}>
          <span>{category.name}</span>
          <div className="flex flex-row gap-4 w-full">
            {category.widgetList.map((widget) => <WidgetCard key={widget.id} cardInfo={widget} />)}
            {<AddWidgetPlaceholder handleClick={() => handleClick(category.key)} />}
          </div>
        </div>
      )}
    </div>
  );
}
