import React from "react";
import { Card, Image } from "semantic-ui-react";

function Recipe({ title, image, description, instructions, category }) {
    return (
        <Card className="card-container">
            <Card.Header>{title}</Card.Header>
            <Image  src={image} alt={title}/>
            <Card.Content>
                {/* <Card.Header>{title}</Card.Header> */}
                <Card.Description>
                    {/* <p>Description: {description}</p>
                    <p>Instructions: {instructions}</p>
                    <p>Category : {category} </p> */}
                </Card.Description>
            </Card.Content>
        </Card>
    );
}

export default Recipe;

//This will show what the recipe card will have in it


