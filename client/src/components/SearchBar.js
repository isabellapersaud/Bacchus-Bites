import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import the magnifying glass icon from a library like react-icons

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
                placeholder="Search..."
                onChange={handleInputChange}
                style={{
                    border: "none",
                    borderBottom: "1px solid #000",
                    outline: "none",
                    marginRight: "8px", // Add some spacing between the input and the icon
                }}
            />
            <FaSearch // Render the magnifying glass icon
                style={{
                    cursor: "pointer",
                    fontSize: "15px",
                }}
            />
        </div>
    );
}

export default SearchBar;
