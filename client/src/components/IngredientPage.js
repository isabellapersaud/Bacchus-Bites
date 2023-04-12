import React, { useEffect, useState } from "react";
import Ingredient from "./Ingredient";
import { Card } from "semantic-ui-react"; 

function IngredientPage({ingredients}){
console.log(ingredients);
console.log("reachedthispage")
    const ingredientCards = ingredients.map((ingredient)=> {
        return (
            <Ingredient
                ingredientKey = {ingredient.id}
                name = {ingredient.name}

            />
        );
    });

    return (
        <Card itemsperrow={4}>
            {ingredientCards}
        </Card>
    )
}

export default IngredientPage;




