import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import { Card, RecipeGroup } from "semantic-ui-react"; 

function RecipePage({recipes}){
console.log(recipes)
    const recipeCards = recipes.map((recipe)=> {
        return (
            <Recipe
                title={recipe.title}
                image = {recipe.image}
                category = {recipe.category}
            />
        );
    });

    return (
        <Card itemsPerRow={4}>
            {recipeCards}
        </Card>
    )
}

export default RecipePage;


             // description = {recipe.description}
                // instructions = {recipe.instructions}
