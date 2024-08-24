
export default function TabList({ tabs, activeTab, setActiveTab }) {


    return (

        <div className="flex gap-6 space-x-4 border-b border-gray-200 px-5">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-2 text-sm font-medium ${activeTab === tab
                        ? "border-b-2 border-blue-600 text-blue-800"
                        : "text-gray-500 hover:text-blue-600"
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>

    );
}
