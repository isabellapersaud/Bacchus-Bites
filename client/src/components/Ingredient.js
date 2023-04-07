import React from "react";
import { Card } from "semantic-ui-react";

function Recipe({ name }) {
    return (
        <Card className="card-container">
            <Card.Content>
                <Card.Header>{name}</Card.Header>
            </Card.Content>
        </Card>
    );
}

export default Recipe;
