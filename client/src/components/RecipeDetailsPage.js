import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Recipe from "./Recipe"


function RecipeDetailsPage({ recipes }) {
    const { id } = useParams();
    const recipe = recipes.find(recipe => recipe.id === parseInt(id));

    const [isFavorite, setIsFavorite] = useState(false);
    const [recipeLikes, setRecipeLikes] = useState(recipe.likes);

    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const handleAddLike = () => {
        const updatedLikes = recipeLikes + 1;
        setRecipeLikes(updatedLikes);
        fetch(`/recipes/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ likes: updatedLikes }),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            // Update the recipe with the new likes count in the local state
            const updatedRecipes = recipes.map((recipe) => {
                if (recipe.id === data.id) {
                    return data;
                } else {
                    return recipe;
                }
            });
            // Call a function to update the recipes in your parent component
            updateRecipes(updatedRecipes);
        })
        .catch((error) => {
            console.error("There was a problem with the fetch operation:", error);
        });
    };

    const updateRecipes = (updatedRecipes) => {
        console.log(updatedRecipes);
    };

    return (
        <div>
            <h1>{recipe.title}</h1>
            <h1>{recipe.name}</h1>
            <button onClick={handleFavorite}>
                {isFavorite ? (
                    <FontAwesomeIcon icon={faHeart} color="red" />
                ) : (
                    <FontAwesomeIcon icon={faHeart} />
                )}
            </button>
            <button onClick={handleAddLike}>Likes: {recipeLikes}</button>
            <h3>{recipe.description} </h3>
            <p>{recipe.category}</p>
            <p>{recipe.ingredients}</p>
            <img src={recipe.image} alt={recipe.title} />
            <h2>Instructions:{recipe.instructions}</h2>
        </div>
    );
};

export default RecipeDetailsPage;