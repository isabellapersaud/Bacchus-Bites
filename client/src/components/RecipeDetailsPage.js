import React from "react";
import { useParams, Link } from "react-router-dom";
// import RecipePage from "./RecipePage";
// import Recipe from "./Recipe";

function RecipeDetailsPage({ recipes }) {
    const { id } = useParams(); 
    const recipe = recipes.find(recipe => recipe.id === parseInt(id));


    return (
        <div>
            <h1>{recipe.name}</h1>
            <h3>{recipe.description} </h3>
            <p>{recipe.category}</p>
            <p>{recipe.ingredients}</p>
            <img src={recipe.image} alt={recipe.title} />
            <h2>Instructions:{recipe.instructions}</h2>      
        </div>
    );
};

export default RecipeDetailsPage;
