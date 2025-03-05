"use client"

import { useState } from 'react'
import items from "./items.json"; 

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

        const sortedItems = [...items].sort((a, b) => {
            if (sortBy === "name") {
                return a.name.localeCompare(b.name)
            }
            if (sortBy === "category") {
                return a.category.localeCompare(b.category)
            }
            return 0
        })

        const groupedByCategory = sortBy === "grouped" 
            ? [...items].reduce((groups, item) => {
                const category = item.category
                if (!groups[category]) {
                    groups[category] = []
                }
                groups[category].push(item)
                return groups
            }, {})
            : null

        if (groupedByCategory) {
            Object.keys(groupedByCategory).sort().forEach(category => {
                groupedByCategory[category].sort((a, b) => a.name.localeCompare(b.name))
            })
        }

        return (
            <div className="min-h-screen bg-gray-200 py-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-8">Shopping List</h1>
                
                    <div className="flex gap-4 mb-8 justify-center">
                        <button
                            onClick={() => setSortBy("name")}
                            className={`px-4 py-2 rounded ${
                                sortBy === "name" 
                                ? "bg-blue-500 text-white" 
                                : "bg-blue-100"
                            }`}
                        >
                            Sort by Name
                        </button>
                        <button
                            onClick={() => setSortBy("category")}
                            className={`px-4 py-2 rounded ${
                                sortBy === "category" 
                                ? "bg-blue-500 text-white" 
                                : "bg-blue-100"
                            }`}
                        >
                            Sort by Category
                        </button>
                        <button
                            onClick={() => setSortBy("grouped")}
                            className={`px-4 py-2 rounded ${
                                sortBy === "grouped" 
                                ? "bg-blue-500 text-white" 
                                : "bg-blue-100"
                            }`}
                        >
                            Group by Category
                        </button>
                    </div>

                    {sortBy !== "grouped" ? (
    <div className="grid grid-cols-1 gap-4 max-w-lg mx-auto">
        {sortedItems.map((item, index) => (
            <div key={index} className="bg-blue-100 p-4 rounded-lg shadow">
                <p className="font-bold">{item.name}</p>
                <p>Buy {item.quantity} in {item.category}</p>
            </div>
        ))}
    </div>
) : (
    <div className="space-y-8 max-w-lg mx-auto">
        {Object.entries(groupedByCategory).sort().map(([category, items]) => (
            <div key={category}>
                <h2 className="text-xl font-bold capitalize mb-4 text-center">{category}</h2>
                <div className="grid grid-cols-1 gap-4">
                    {items.map((item, index) => (
                        <div key={index} className="bg-blue-100 p-4 rounded-lg shadow">
                            <p className="font-bold">{item.name}</p>
                            <p>Buy {item.quantity}</p>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
)}
                </div>
            </div>
        )
}
