import Recipe from "./Recipe";

import { Link } from "react-router-dom";

function RecipeList( {recipes} ) {
    return (
        <ul className="recipes-container">
            {/* render a list of <Recipe> components in here */}
            {recipes?.map(recipe => 
                <Link className="nav-link" to={'/recipes/' + recipe.id}>
                    <Recipe key={recipe.id} recipe={recipe}/>
                </Link>
            )}
        </ul>
    )

}

export default RecipeList;

//how they will actually be able to show up 