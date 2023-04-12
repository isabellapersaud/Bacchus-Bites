import React, {useState} from "react";
import { Card, Image } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import RecipeDetailsPage from "./RecipeDetailsPage";

function Recipe({ id, title, image, description, instructions, category, ingredients }) {
    // const [rating, setRating]= useState(0);
    const history = useHistory();

    // function handleRatingChange(newRating) {
    //     setRating(newRating);
    // }

    const handleClick = () => {
        // Navigate to the recipe details page for the specific recipe
        history.push(`/recipes/${id}`);
    };

    return (
        <Card className="card-container" onClick={handleClick}>
            <Card.Header>{title}</Card.Header>
            <Image src={image} alt={title} />
            <Card.Content>
            {/* <input
                type="range"
                min={0}
                max={5}
                value={rating}
                onChange={(e) => handleRatingChange(e.target.value)}
            />
            <p>Rating: {rating}/5</p> */}
            </Card.Content>
        </Card>
    );
}

export default Recipe;