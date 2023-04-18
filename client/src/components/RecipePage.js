// import React, { useState } from "react";
// import Recipe from "./Recipe";
// import { Card, Image, Button, Header, Icon, Label } from "semantic-ui-react";
// import { Link } from "react-router-dom";

// const linkStyle = {
//     textDecoration: "none"
//     };


//     function RecipePage({ recipes }) {


//     return (
//         <div className="card" style={{ display: "flex", flexWrap: "wrap" }}>
//         {recipes.map(recipe => (
//             <Link to={`/recipes/${recipe.id}`} key={recipe.id} style={linkStyle}>
//             <Card
//                 style={{
//                 flex: "0 0 25%",
//                 margin: "8px",
//                 height: "300px",
//                 borderRadius: "0"
//                 }}
//             >
//                 <Image
//                 src={recipe.image}
//                 alt={recipe.title}
//                 style={{  display: "flex", height: "300px", objectFit: "cover", borderRadius: "0" }}
//                 />
//                 <Card.Content>
//                 <Card.Header>{recipe.title}</Card.Header>
//                 </Card.Content>
//             </Card>
//             </Link>
//         ))}
//         </div>
//     );
// }

// export default RecipePage;




import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./RecipePage.css";

function RecipePage({ recipes }) {
    return (
        <div className="card-wrapper">
        {recipes.map((recipe) => (
            <Link to={`/recipes/${recipe.id}`} key={recipe.id} className="link">
            <Card className="card">
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