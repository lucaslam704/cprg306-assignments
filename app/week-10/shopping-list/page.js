"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";
import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import MealIdeas from "./meal-ideas.js";
import { addItem, getItems } from "../_service/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState("");

  // Function to load items from Firestore
  const loadItems = async () => {
    try {
      if (user) {
        const shoppingListItems = await getItems(user.uid);
        setItems(shoppingListItems);
      }
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };

  // Load items when component mounts or user changes
  useEffect(() => {
    loadItems();
  }, [user]);

  // Handle adding a new item
  const handleAddItem = async (newItem) => {
    try {
      if (user) {
        // Add the item to Firestore
        const docId = await addItem(user.uid, newItem);
        
        // Update the local state with the new item including its id
        setItems([...items, { id: docId, ...newItem }]);
      }
    } catch (error) {
      console.error("Error adding new item:", error);
    }
  };

  function handleSelect(ingredient) {
    setSelected(ingredient);
  }

  // Display a message if user is not logged in
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6 rounded shadow-md max-w-md">
          <p className="font-bold">Access Restricted</p>
          <p className="mt-2">Sorry, you have to login first to access the shopping list.</p>
        </div>
        <Link 
          href="/week-9" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Click here to go back to Week 9 login page
        </Link>
      </div>
    );
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