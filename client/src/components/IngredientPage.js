import React, { useState } from "react";
import Ingredient from "./Ingredient";
import { Card, Form, Button, Grid } from "semantic-ui-react";

function IngredientPage({ ingredients }) {
    const [groceryList, setGroceryList] = useState([]);
    const [newIngredient, setNewIngredient] = useState({ name: "" });


    const addToGroceryList = (ingredient) => {
        setGroceryList([...groceryList, ingredient]);
    };

    const handleInputChange = (e) => {
        setNewIngredient({ ...newIngredient, [e.target.name]: e.target.value });
    };
    



    const handleDelete = (ingredient) => {
        fetch(`/ingredients/${ingredient.id}`, {
            method: "DELETE",
        })
            .then(() => {
                // Remove the deleted ingredient from the grocery list
                const updatedGroceryList = groceryList.filter((item) => item.id !== ingredient.id);
                setGroceryList(updatedGroceryList);
            })
            .catch((error) => console.error("Error deleting ingredient:", error));
    };

    const handleSubmit = () => {
        fetch(`/ingredients`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newIngredient),
        })
            .then((response) => response.json())
            .then((ingredient) => {
                addToGroceryList(ingredient);
                setNewIngredient({ name: "" });
            })
            .catch((error) => console.error("Error creating ingredient:", error));
    };




    const ingredientCards =
        ingredients &&
        Array.isArray(ingredients) &&
        ingredients.map((ingredient) => {
            return (
                <Grid.Column key={ingredient.id} computer={4}>
                <Ingredient
                    key={ingredient.id}
                    ingredientKey={ingredient.id}
                    image = {ingredient.image}
                    name={ingredient.name}
                    addToGroceryList={addToGroceryList}
                    onDelete={handleDelete} // Pass the handleDelete function as onDelete prop
                />
                </Grid.Column>
            );
        });

    return (
        <div>
            <h2>Grocery List</h2>
            <ul>
                {groceryList.map((ingredient, index) => (
                    <li key={index}>{ingredient.name}</li>
                ))}
            </ul>
            <h2 style={{ textAlign: "left" }}> Create New Ingredient</h2>
            <Form>
                <Form.Input
                    label="Name"
                    type="text"
                    name="name"
                    value={newIngredient.name}
                    onChange={handleInputChange}
                    style={{ width: "200px" }} // Set the width using inline styles
            />
                {/* <Form.Input
                    label="Image URL"
                    type="url" // Set the type to "url"
                    name="image"
                    value={newIngredient.image} // Use the appropriate value and onChange function
                    onChange={handleInputChange}
                /> */}
            <Button onClick={handleSubmit}>Submit</Button>
            </Form>
            <Grid columns={4} >
                <Grid.Row>{ingredientCards}</Grid.Row>
            </Grid>
        </div>
    );
}

export default IngredientPage;




// import React, { useState } from "react";
// import Ingredient from "./Ingredient";
// import { Card, Form, Button } from "semantic-ui-react";

// function IngredientPage({ ingredients }) {
//     const [groceryList, setGroceryList] = useState([]);
//     const [newIngredient, setNewIngredient] = useState({ name: "" });

//     const addToGroceryList = (ingredient) => {
//         setGroceryList([...groceryList, ingredient]);
//     };

//     const handleInputChange = (e) => {
//         setNewIngredient({ ...newIngredient, [e.target.name]: e.target.value });
//     };

//     const handleDelete = (ingredient) => {
//         console.log(ingredient.id);
//         // Make DELETE request to backend API to delete ingredient
//         fetch(`/ingredients/${ingredient.id}`, {
//             method: "DELETE",
//         })
//             .then(() => {
//                 // Remove the deleted ingredient from the grocery list
//                 const updatedGroceryList = groceryList.filter((item) => item.id !== ingredient.id);
//                 setGroceryList(updatedGroceryList);
//             })
//             .catch((error) => console.error("Error deleting ingredient:", error));
//     };

//     const handleSubmit = () => {
//         fetch(`/ingredients`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newIngredient),
//         })
//             .then((response) => response.json())
//             .then((ingredient) => {
//                 addToGroceryList(ingredient);
//                 setNewIngredient({ name: "" });
//             })
//             .catch((error) => console.error("Error creating ingredient:", error));
//     };

//     const ingredientCards =
//         ingredients &&
//         Array.isArray(ingredients) &&
//         ingredients.map((ingredient) => {
//             return (
//                 <Ingredient
//                     key={ingredient.id}
//                     ingredientKey={ingredient.id}
//                     name={ingredient.name}
//                     addToGroceryList={addToGroceryList}
//                     onDelete={handleDelete}
//                 />
//             );
//         });

//     return (
//         <div>
//             {ingredientCards}

//             <h2>Grocery List</h2>
//             <ul>
//                 {groceryList.map((ingredient, index) => (
//                     <li key={index}>{ingredient.name}</li>
//                 ))}
//             </ul>

//             <h2>Create New Ingredient</h2>
//             <Form>
//                 <Form.Input
//                     label="Name"
//                     type="text"
//                     name="name"
//                     value={newIngredient.name}
//                     onChange={handleInputChange}
//                 />
//                 <Button onClick={handleSubmit}>Submit</Button>
//             </Form>
//         </div>
//     );
// }

// export default IngredientPage;