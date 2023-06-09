import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Recipe from "./Recipe";
import "./RecipeDetailsPage.css"
import styled from "styled-components";



function RecipeDetailsPage({ recipes }) {
    const { id } = useParams();
    const recipe = recipes.find(recipe => recipe.id === parseInt(id));
    console.log('recipe:', recipe);

    const [isFavorite, setIsFavorite] = useState(false);

    const [recipeLikes, setRecipeLikes] = useState(0);

    useEffect(() => {
        if (recipe) {
            setRecipeLikes(recipe.likes);
        }
    }, [recipe]);

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
        
            const updatedRecipes = recipes.map((recipe) => {
                if (recipe.id === data.id) {
                    return data;
                } else {
                    return recipe;
                }
            });
            updateRecipes(updatedRecipes);
        })
        .catch((error) => {
            console.error("There was a problem with the fetch operation:", error);
        });
    };

    const updateRecipes = (updatedRecipes) => {
    };
    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <div>
            <h2 style={{
                    fontFamily: "'Birthstone', cursive",
                    letterSpacing: "0.5em",
                    textAlign: "center",
                    fontWeight: "normal",
                    fontSize:"90px"

                }}>
                {recipe.title}
            </h2>
            <p style = {{fontFamily:'Tangerine', fontSize: "40px"}}>{recipe.description} </p>
            <img src={recipe.image} alt={recipe.title} className="recipe-image"style={{width: "100%", height: "422px",objectFit: "cover",objectPosition: "100%", }} />
            <h1 style = {{fontFamily: "'Birthstone', cursive",}}>{recipe.category}</h1>
            <button onClick={handleFavorite} style={{  display: "block", margin: "auto", textAlign: "center", }}>
                {isFavorite ? (
                    <FontAwesomeIcon icon={faHeart} color="red" />
                ) : (
                    <FontAwesomeIcon icon={faHeart} />
                )}
            </button>
            <button onClick={handleAddLike}  style={{ display: "block", margin: "auto", textAlign: "center", fontSize: "20px", fontFamily: 'Playfair Display'}}>
                Likes: {recipeLikes}</button>
            <h3>{recipe.name}</h3>
            <h1 style= {{fontWeight: 'bold',fontFamily:'Tangerine', fontSize:'50px',  textAlign: "center", letterSpacing: '0.5em'}}>Ingredients:</h1>
            <ul style= {{fontFamily: 'Playfair Display ',fontSize: '20px',  textAlign: "center"}}>{recipe.ingredients}</ul>
            <h1 style= {{fontWeight: 'bold',fontFamily:'Tangerine,fontSize',fontSize: '50px',  textAlign: "center", letterSpacing: '0.5em'}}>Instructions:</h1>
            <h4 style = {{fontSize: '20px', fontFamily: 'Playfair Display', }}>{recipe.instructions}</h4>
        </div>
    );
};

export default RecipeDetailsPage;


