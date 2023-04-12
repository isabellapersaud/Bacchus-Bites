import React, { useState } from "react";
import Recipe from "./Recipe";
import { Card, Image, Button, Header, Icon, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";

    const linkStyle = {
    textDecoration: "none"
    };


function RecipePage({ recipes }) {


    
return (
    <div className="card" style={{ display: "flex", flexWrap: "wrap" }}>
        {recipes.map(recipe => (
            <Link to={`/recipes/${recipe.id}`} key={recipe.id} style={linkStyle}>
                <Card style={{ flex: "0 0 25%", margin: "8px" }}>
                    <img src={recipe.image} alt={recipe.title} className="recipe-image" />
                    <Card.Content>
                        <Card.Header>{recipe.title}</Card.Header>
                    </Card.Content>
                </Card>
            </Link>
        ))}
    </div>
);
}
export default RecipePage;