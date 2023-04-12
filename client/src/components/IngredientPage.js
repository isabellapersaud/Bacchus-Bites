
import React, { useState } from "react";
import Ingredient from "./Ingredient";
import { Card } from "semantic-ui-react"; 

function IngredientPage({ ingredients }) {
  // Define grocery list state variable
    const [groceryList, setGroceryList] = useState([]);

    // Define addToGroceryList function that adds ingredient to the grocery list
    const addToGroceryList = (ingredient) => {
        setGroceryList([...groceryList, ingredient]);
    };

    // Add conditional check to ensure ingredients is defined and an array
    const ingredientCards = ingredients && Array.isArray(ingredients) && ingredients.map((ingredient) => {
        return (
        <Ingredient
            key={ingredient.id}
            ingredientKey={ingredient.id}
            name={ingredient.name}
            addToGroceryList={addToGroceryList}
        />
        );
    });

    return (
        <div>
        <Card itemsperrow={4}>{ingredientCards}</Card>

        {/* Render grocery list */}
        <h2>Grocery List</h2>
        <ul>
            {groceryList.map((ingredient, index) => (
            <li key={index}>{ingredient.name}</li>
            ))}
        </ul>
        </div>
    );
}

export default IngredientPage;

// import React, { useState, useEffect } from 'react';

// const IngredientsPage = () => {
//   // State to hold the list of ingredients
//     const [ingredients, setIngredients] = useState([]);

//     // State to hold the grocery list
//     const [groceryList, setGroceryList] = useState([]);

//     // Function to handle adding an ingredient to the grocery list
//     const handleAddToGroceryList = (ingredient) => {
//         setGroceryList([...groceryList, ingredient]);
//     };

//     // Effect to load ingredients from local storage when component mounts
//     useEffect(() => {
//         const storedIngredients = localStorage.getItem('ingredients');
//         if (storedIngredients) {
//         setIngredients(JSON.parse(storedIngredients));
//         }
//     }, []);

//     // Effect to save ingredients to local storage when it changes
//     useEffect(() => {
//         localStorage.setItem('ingredients', JSON.stringify(ingredients));
//     }, [ingredients]);

//     // Effect to save grocery list to local storage when it changes
//     useEffect(() => {
//         localStorage.setItem('groceryList', JSON.stringify(groceryList));
//     }, [groceryList]);

//     // Function to handle adding an ingredient to the ingredients list
//     const handleAddIngredient = (ingredient) => {
//         setIngredients([...ingredients, ingredient]);
//     };

//     return (
//         <div>
//         <h1>Ingredients</h1>
//         <ul>
//             {/* Loop through the ingredients and render each ingredient */}
//             {ingredients.map((ingredient, index) => (
//             <li key={index}>
//                 {ingredient}{' '}
//                 <button onClick={() => handleAddToGroceryList(ingredient)}>
//                 Add to Grocery List
//                 </button>
//             </li>
//             ))}
//         </ul>
//         <h1>Grocery List</h1>
//         <ul>
//             {/* Loop through the grocery list and render each item */}
//             {groceryList.map((item, index) => (
//             <li key={index}>{item}</li>
//             ))}
//         </ul>
//         <form
//             onSubmit={(e) => {
//             e.preventDefault();
//             const newIngredient = e.target.ingredient.value;
//             if (newIngredient !== '') {
//                 handleAddIngredient(newIngredient);
//                 e.target.ingredient.value = '';
//             }
//             }}
//         >
//             <input type="text" name="ingredient" />
//             <button type="submit">Add Ingredient</button>
//         </form>
//         </div>
//     );
// };

// export default IngredientsPage;

