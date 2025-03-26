"use client";
import { useState } from 'react';

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const increment = () => {
        if (quantity < 99) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            id: Math.random().toString(36).substring(2,9),
            name,
            quantity,
            category
        };

        onAddItem(item);
        
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <div className="flex justify-center pt-6">
            <form onSubmit={handleSubmit} className="p-8 bg-blue-100 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Quantity:</label>
                    <div className="relative flex items-center">
                    <input
                        type="number"
                        min="1"
                        max="99"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        required
                        className="w-full border rounded px-3 py-2"
                    />
                     <div className="absolute right-0 h-full flex items-center mr-2 gap-2">
                            <button 
                                type="button"
                                onClick={decrement}
                                className="text-lg px-3 bg-blue-400 rounded-none text-gray-600 hover:text-gray-800"
                            >
                                -
                            </button>
                            <button 
                                type="button"
                                onClick={increment}
                                className="text-lg px-2.5 bg-blue-400 rounded-none text-gray-600 hover:text-gray-800"
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Category:</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full border rounded px-3 py-2"
                    >
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen">Frozen Foods</option>
                        <option value="canned">Canned Goods</option>
                        <option value="dry">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Add Item
                </button>
            </form>
        </div>
    );
}