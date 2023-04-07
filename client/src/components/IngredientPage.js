import React, { useEffect, useState } from "react";
import Ingredient from "./Ingredient";
import { Card } from "semantic-ui-react"; 

function IngredientPage({ingredients}){
console.log(ingredients);
    const ingredientCards = ingredients.map((ingredient)=> {
        return (
            <Ingredient
                name = {ingredient.name}
            />
        );
    });

    return (
        <Card itemsPerRow={4}>
            {ingredientCards}
        </Card>
    )
}

export default IngredientPage;
