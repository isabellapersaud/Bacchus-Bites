import React from "react";
import { Card, Button } from "semantic-ui-react";

function Ingredient({ ingredientKey, name, image, addToGroceryList, onDelete }) {
    const handleIngredientClick = () => {
        addToGroceryList({ id: ingredientKey, name , image});
    };


    const handleDeleteClick = (event) => {
        event.stopPropagation();
        onDelete({ id: ingredientKey, name, image});
    };

    return (
        <Card>
            <Card.Content onClick={handleIngredientClick}>
                <Card.Header>{name}</Card.Header>
                <Card.Description>
                <img src={image} alt={name} style={{ display: 'block', margin: 'auto', maxWidth: '50%', height: '50%' }} />
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button onClick={() => addToGroceryList({ id: ingredientKey, name, image })}>
                    Add to Grocery List
                </Button>
                <Button color="black" onClick={handleDeleteClick}>
                    Delete
                </Button>
            </Card.Content>
        </Card>
    );
}

export default Ingredient;
