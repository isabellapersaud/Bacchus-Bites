import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function RecipeDetailsPage({ recipes }) {
    const { id } = useParams();
    const recipe = recipes.find(recipe => recipe.id === parseInt(id));
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
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
            <h3>{recipe.description} </h3>
            <p>{recipe.category}</p>
            <p>{recipe.ingredients}</p>
            <img src={recipe.image} alt={recipe.title} />
            <h2>Instructions:{recipe.instructions}</h2>
            {/* Render favorite button with heart icon */}
        </div>
    );
};

export default RecipeDetailsPage;