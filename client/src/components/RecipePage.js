import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./RecipePage.css";

function RecipePage({ recipes }) {


    return (
        <div className="card-wrapper">
        {recipes.map((recipe) => (
            <Link to={`/recipes/${recipe.id}`} key={recipe.id} className="link">
            <Card className="recipe-card" id={`recipe-card-${recipe.id}`}> 
                <Image src={recipe.image} alt={recipe.title} className="image" />
                <Card.Content className="content">
                <Card.Header
                className="header"
                style={{ fontFamily: 'Playfair Display', fontSize: "16px" }}
                >
                    {recipe.title}
                </Card.Header>
                </Card.Content>
            </Card>
            </Link>
        ))}
        </div>
    );
}

export default RecipePage;