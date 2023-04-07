import Ingredient from "./Ingredient";

import { Link } from "react-router-dom";

function IngredientList( {ingredients} ) {
    return (
        <ul className="ingredients-container">
            {/* render a list of <Ingredient> components in here */}
            {ingredients?.map(ingredient => 
                <Link className="nav-link" to={'/ingredients/' + ingredient.id}>
                    <Ingredient key={ingredient.id} ingredient={ingredient}/>
                </Link>
            )}
        </ul>
    )
    
}

export default IngredientList;