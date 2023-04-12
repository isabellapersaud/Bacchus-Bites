import React, { useState } from "react";

function SearchBar({ handleSearch, search, setSearch }) {
    // const [search, setSearch] = useState("");

    function handleInputChange(e) {
        const value = e.target.value;
        setSearch(value);
        console.log(value);
        handleSearch(value);
    }

    return (
        <div className="search">
        <input
            type="text"
            value={search}
            className="searchTerm"
            placeholder="Search recipe..."
            onChange={handleInputChange}
        />
        </div>
    );
}

export default SearchBar;
















// import Recipe from "./Recipe"

//     const RecipeSearchBar = ({ recipes, onSearch }) => {
//     const [query, setQuery] = useState("");

//     const handleInputChange = (event) => {
//         setQuery(event.target.value);
//     };

//     const handleSearch = () => {
//         onSearch(query);
//     };

//     return (
//         <div>
//         <input
//             type="text"
//             placeholder="Search for recipes"
//             value={query}
//             onChange={handleInputChange}
//         />
//         <button onClick={handleSearch}>Search</button>
//         </div>
//     );
// };

// export default RecipeSearchBar;













// import React, { useState } from "react";
// import { Input, Icon } from 'semantic-ui-react';
// import './Search.css';

// function Search({ handleSearch, recipes }) {
//     const [searchText, setSearchText] = useState("");



//     const filterRecipes = () => {
//         if (typeof searchText !== 'string') {
//             return []; // Return empty array when searchText is not a string
//         }

//         return recipes.filter(recipe => {
//             if (recipe && recipe.name) {
//                 return recipe.name.toLowerCase().includes(searchText.toLowerCase());
//             }
//             return false;
//         });
//     }

//     return (
//         <div className="search">
//             <Input
//                 type="text"
//                 value={searchText}
//                 className="searchTerm transparent"
//                 icon={<Icon name="search" className="grey" />}
//                 placeholder="Search..."
//                 onChange={(e) => {
//                     setSearchText(e.target.value);
//                     handleSearch(e.target.value);
//                 }}
//             />
//             {filterRecipes().map(recipe => (
//                 <div key={recipe.id}>
//                     <h3>{recipe.title}</h3>
//                     {/* Render other recipe details */}
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Search;