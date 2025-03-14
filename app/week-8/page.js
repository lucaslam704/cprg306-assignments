"use client";

import { useState } from "react";
import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas.js";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selected, setSelected] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  function handleSelect(ingredient) {
    setSelected(ingredient);
  }

  return (
    <main className="flex p-4">
      <div className="flex-1 max-w-md">
        <h2 className="text-3xl font-bold">Add New Item</h2>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleSelect} />
      </div>
      
      <div className="flex-1 max-w-md ml-8">
        <h2 className="text-3xl font-bold">Meal Ideas</h2>
        <MealIdeas ingredient={selected} />
      </div>
    </main>
  );
}
