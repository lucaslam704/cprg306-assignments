"use client";

import { useState } from "react";
import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import itemsData from "./items.json";

// const itemsData = require('./items.json'); 

export default function Page() {
    const [items, setItems] = useState(itemsData);
  
    const handleAddItem = (newItem) => {
      setItems([...items, newItem]);
    };
  
    return (
      <div>
        <title>Week 7</title>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    );
  }
  