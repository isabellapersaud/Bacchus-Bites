import React, { useState} from "react";
import Recipe from "./Recipe";
import { Card } from "semantic-ui-react"; 
import { Link } from "react-router-dom";
// import {UserContext } from "./Context";



const linkStyle= { 
    textDecoration: "none"
}

function RecipePage({recipes}){
    

    // const [searchQuery, setSearchQuery] = useState(""); // State to hold search query

  // Filter recipes based on search query
    // const filteredRecipes = recipes.filter((recipe) => {
    //     return recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
    // });

    console.log(recipes)

    return (
        <div className="card" style={{display: 'flex', flexWrap: 'wrap'}}>
            {recipes.map((recipe) => (
                <Link key={recipe.id} to={`/recipes/${recipe.id}`} style={linkStyle}>
                    <Card style={{flex: '0 0 25%', margin: '8px'}}>
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="recipe-image"
                        />
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



