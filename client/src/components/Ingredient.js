import React from "react";
import { Card, Button } from "semantic-ui-react";

function Ingredient({ ingredientKey, name, addToGroceryList, onDelete }) {

    const handleIngredientClick = () => {
        addToGroceryList({ id: ingredientKey, name }); // Call addToGroceryList function with ingredient data
    };

    const handleDeleteClick = (event) => {
        event.stopPropagation(); // Prevent click event propagation to the parent container
        onDelete(ingredientKey); // Call onDelete function with ingredientKey to delete the ingredient
    };
    return (
        <div className="ingredient-container" onClick={handleIngredientClick}>
            <p>{name}</p>
            <Card>
            <Card.Content extra>
                <Button onClick={addToGroceryList}>Add to Grocery List</Button>
                <Button color="red" onClick={handleDeleteClick}>Delete</Button> {/* Use the onDelete function on button click */}
            </Card.Content>
        </Card>
    </div>
    );
}

export default Ingredient;
