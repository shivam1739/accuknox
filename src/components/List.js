'use client'
import { useState } from "react";

export default function List({ selectedWidgets, handleCheckboxChange }) {


    return (
        <div className="px-4 flex flex-col gap-2 mt-4    ">
            {selectedWidgets.map((widget) => (
                <div
                    key={widget.id}
                    className="flex items-center border border-gray-300 rounded-md p-2"
                >
                    <input
                        type="checkbox"
                        checked={widget.checked}
                        onChange={() => handleCheckboxChange(widget.id)}
                        className="w-4 h-4 text-black border-black rounded focus:ring-black"
                    />
                    <label className="ml-2 text-gray-900 font-medium text-sm">
                        {widget.name}
                    </label>
                </div>
            ))}
        </div>
    );
}
