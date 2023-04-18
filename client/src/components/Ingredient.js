import React from "react";
import { Card, Button } from "semantic-ui-react";

function Ingredient({ ingredientKey, name, addToGroceryList, onDelete }) {
    const handleIngredientClick = () => {
        addToGroceryList({ id: ingredientKey, name });
    };

    const handleDeleteClick = (event) => {
        event.stopPropagation();
        onDelete({ id: ingredientKey, name });
    };

    return (
        <Card>
            <Card.Content onClick={handleIngredientClick}>
                <Card.Header>{name}</Card.Header>
            </Card.Content>
            <Card.Content extra>
                <Button onClick={() => addToGroceryList({ id: ingredientKey, name })}>
                    Add to Grocery List
                </Button>
                <Button color="red" onClick={handleDeleteClick}>
                    Delete
                </Button>
            </Card.Content>
        </Card>
    );
}

export default Ingredient;