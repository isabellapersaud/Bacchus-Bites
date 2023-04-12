// import React from "react";
// import { Card } from "semantic-ui-react";
// import IngredientPage from "./IngredientPage";

// function Recipe({ name, ingredients }) {
//     return (
//         <Card className="card-container">
//         <Card.Content>
//             <Card.Header>{name}</Card.Header>
//             {/* Render IngredientPage component and pass the ingredients data */}
//             <IngredientPage ingredients={ingredients} />
//         </Card.Content>
//         </Card>
//     );
// }

// export default Recipe;

import React from "react";

function Ingredient({ ingredientKey, name, addToGroceryList }) {
  // Handle click event on ingredient
    const handleIngredientClick = () => {
        addToGroceryList({ id: ingredientKey, name }); // Call addToGroceryList function with ingredient data
    };

    return (
        <div
        className="ingredient-container"
        onClick={handleIngredientClick} // Add click event handler
        >
        <p>{name}</p>
        </div>
    );
}

export default Ingredient;