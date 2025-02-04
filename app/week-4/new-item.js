"use client";
import { useState } from 'react';

export default function Button() {
    const [count, setCount] = useState(1);

    const increment = () => {
        if (count >= 20) {
        }
        else 
        setCount(count + 1);
    }

    const decrement = () => {
        if (count <= 1) {
        }
        else 
        setCount(count - 1);
    }
    
    return (
        <div className='flex justify-center items-center flex-col gap-4 px-8'> 
            <h1 className="text-xl">{count}</h1>

            <div className='flex flex-row gap-4'> 
                <button onClick={increment} className="bg-blue-400 rounded-full p-4 hover:bg-blue-500">
                    Increase it!
                </button>

                <button onClick={decrement} className="bg-blue-400 rounded-full p-4 hover:bg-blue-500">
                    Decrease it!
                </button>
            </div>
        </div>
        )
}