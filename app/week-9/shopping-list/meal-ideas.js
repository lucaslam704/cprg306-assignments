"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);

    const loadMealIdeas = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        setMeals(data.meals || []);
    };

    const loadMealDetails = async (mealId) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const data = await response.json();
        setSelectedMeal(data.meals[0]);
    };

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
            setSelectedMeal(null);
        }
    }, [ingredient]);

    return (
        <div>
            {ingredient && <h2 className="text-xl font-bold mb-4">Meal Ideas for {ingredient}</h2>}
            <div className="grid gap-4">
                {meals.map((meal) => (
                    <div key={meal.idMeal} 
                         className="flex flex-col p-2 border rounded cursor-pointer hover:bg-gray-100"
                         onClick={() => loadMealDetails(meal.idMeal)}>
                        <div className="flex items-center space-x-4">
                            <img 
                                src={meal.strMealThumb} 
                                alt={meal.strMeal} 
                                className="w-20 h-20 object-cover rounded"
                            />
                            <h3 className="text-md">{meal.strMeal}</h3>
                        </div>
                        {selectedMeal && selectedMeal.idMeal === meal.idMeal && (
                            <div className="mt-2 ml-24">
                                <h4 className="font-semibold">Ingredients:</h4>
                                <ul className="list-disc pl-4">
                                    {Array.from({ length: 20 }, (_, i) => i + 1)
                                        .map(index => {
                                            const ingredient = selectedMeal[`strIngredient${index}`];
                                            const measure = selectedMeal[`strMeasure${index}`];
                                            if (ingredient && ingredient.trim()) {
                                                return <li key={index}>{measure} {ingredient}</li>;
                                            }
                                            return null;
                                        })
                                        .filter(Boolean)}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
