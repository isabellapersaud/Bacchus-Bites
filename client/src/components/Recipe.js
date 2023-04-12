import React, {useState} from "react";
import { Card, Image, Button, Icon, Label} from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import RecipeDetailsPage from "./RecipeDetailsPage";


function Recipe({ id, title, image, description, instructions, category, ingredients }) {
    const history = useHistory();


    const handleClick = () => {
        history.push(`/recipes/${id}`);
    };


    return (
        <Card className="card-container" onClick={handleClick}>
            <Card.Header>{title}</Card.Header>
            <Image src={image} alt={title} />
            </Card>
        );
    }

export default Recipe;