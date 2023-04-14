import React, { useState } from "react";
import Ingredient from "./Ingredient";
import { Card, Form, Button } from "semantic-ui-react";

function IngredientPage({ ingredients }) {
    const [groceryList, setGroceryList] = useState([]);
    const [newIngredient, setNewIngredient] = useState({ name: "" });

    const addToGroceryList = (ingredient) => {
        setGroceryList([...groceryList, ingredient]);
    };

    const handleInputChange = (e) => {
        setNewIngredient({ ...newIngredient, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        fetch(`/ingredients/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newIngredient),
        })
            .then((response) => response.json())
            .then((ingredient) => {
                addToGroceryList(ingredient);
                setNewIngredient({ name: "" });
            })
            .catch((error) => console.error("Error creating ingredient:", error));
    };

    const handleDelete = (ingredient) => {
        // Make DELETE request to backend API to delete ingredient
        fetch(`/ingredients/`, {
            method: "DELETE",
        })
            .then(() => {
                // Remove the deleted ingredient from the grocery list
                const updatedGroceryList = groceryList.filter((item) => item.id !== ingredient.id);
                setGroceryList(updatedGroceryList);
            })
            .catch((error) => console.error("Error deleting ingredient:", error));
    };

    const ingredientCards =
        ingredients &&
        Array.isArray(ingredients) &&
        ingredients.map((ingredient) => {
            return (
                <Ingredient
                    key={ingredient.id}
                    ingredientKey={ingredient.id}
                    name={ingredient.name}
                    addToGroceryList={addToGroceryList}
                    onDelete={() => handleDelete(ingredient)} // Pass onDelete function as a prop to Ingredient component
                />
            );
        });

    return (
        <div>
            <Card itemsperrow={4}>{ingredientCards}</Card>

            <h2>Grocery List</h2>
            <ul>
                {groceryList.map((ingredient, index) => (
                    <li key={index}>{ingredient.name}</li>
                ))}
            </ul>

            <h2>Create New Ingredient</h2>
            <Form>
                <Form.Input
                    label="Name"
                    type="text"
                    name="name"
                    value={newIngredient.name}
                    onChange={handleInputChange}
                />
                <Button onClick={handleSubmit}>Submit</Button>
            </Form>
        </div>
    );
}

export default IngredientPage;