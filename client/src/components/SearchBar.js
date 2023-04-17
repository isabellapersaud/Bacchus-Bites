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



// import React, { useState } from "react";

// function SearchBar({ handleSearch, search, setSearch }) {
//     const [searchType, setSearchType] = useState("recipe"); // Add state to track search type

//     function handleInputChange(e) {
//         const { value } = e.target;
//         setSearch(value);
//         handleSearch(value, searchType); // Pass search type to handleSearch
//     }

//     function handleSearchTypeChange(e) {
//         const { value } = e.target;
//         setSearchType(value);
//         handleSearch(search, value); // Pass updated search type to handleSearch
//     }

//     return (
//         <div className="search">
//             <input
//                 type="text"
//                 value={search}
//                 className="searchTerm"
//                 placeholder="Search..."
//                 onChange={handleInputChange}
//             />
//             <select
//                 value={searchType}
//                 className="searchType"
//                 onChange={handleSearchTypeChange}
//             >
//                 <option value="recipe">Recipe</option>
//                 <option value="ingredient">Ingredient</option>
//             </select>
//         </div>
//     );
// }

// export default SearchBar;
