"use client";

import { useState } from "react";
import Item from "./item.js";

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        }
        if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
        if (sortBy === "grouped") {
            return a.category.localeCompare(b.category);
        }
    });

    const groupedItems = sortedItems.reduce((acc, item) => {
        const category = item.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(item);
        return acc;
    }, {});

    return (
        <div>
            <div className="flex gap-4 mb-4 mt-5">
                <button
                    onClick={() => setSortBy("name")}
                    className={`px-4 py-2 rounded ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                >
                    Sort by Name
                </button>
                <button
                    onClick={() => setSortBy("category")}
                    className={`px-4 py-2 rounded ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                >
                    Sort by Category
                </button>
                <button
                    onClick={() => setSortBy("grouped")}
                    className={`px-4 py-2 rounded ${sortBy === "grouped" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                >
                    Group by Category
                </button>
            </div>

            {sortBy === "grouped" ? (
                Object.entries(groupedItems).map(([category, items]) => (
                    <div key={category}>
                        <h2 className="capitalize font-bold text-xl mb-2">{category}</h2>
                        {items.map(item => (
                            <Item
                                key={item.id}
                                name={item.name}
                                quantity={item.quantity}
                                category={item.category}
                                onSelect={onItemSelect}
                            />
                        ))}
                    </div>
                ))
            ) : (
                sortedItems.map(item => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        onSelect={onItemSelect}
                    />
                ))
            )}
        </div>
    );
}
