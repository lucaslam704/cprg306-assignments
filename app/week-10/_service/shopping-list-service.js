import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc } from "firebase/firestore";

/**
 * Retrieves all shopping list items for a specific user
 * @param {string} userId - The ID of the user whose items to retrieve
 * @returns {Promise<Array>} - Array of items with their IDs
 */
export const getItems = async (userId) => {
  try {
    // Create a reference to the items subcollection within the user document
    const itemsCollectionRef = collection(db, "users", userId, "items");
    
    // Create a query against the collection
    const q = query(itemsCollectionRef);
    
    // Get the query snapshot
    const querySnapshot = await getDocs(q);
    
    // Initialize items array
    const items = [];
    
    // Iterate through the documents
    querySnapshot.forEach((doc) => {
      // Add an object with the document ID and data to the items array
      items.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return items;
  } catch (error) {
    console.error("Error getting items:", error);
    throw error;
  }
};

/**
 * Adds a new shopping list item for a specific user
 * @param {string} userId - The ID of the user to add the item for
 * @param {Object} item - The item to add to the user's shopping list
 * @returns {Promise<string>} - The ID of the newly created document
 */
export const addItem = async (userId, item) => {
  try {
    // Create a reference to the items subcollection within the user document
    const itemsCollectionRef = collection(db, "users", userId, "items");
    
    // Add the new document to the subcollection
    const docRef = await addDoc(itemsCollectionRef, item);
    
    // Return the ID of the newly created document
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
};