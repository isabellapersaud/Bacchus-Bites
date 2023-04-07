
import React from "react";
import { Input, Icon } from 'semantic-ui-react';


function Search( {searchText, handleSearch} ) {
    return (
        <div className = "search">
            <Input 
                type="text" 
                value={searchText}
                className="searchTerm transparent"
                icon={<Icon name="search" className="grey" />}
                placeholder="Search..."     
                onChange={(e) => handleSearch(e.target.value)} />
        </div>
    );
}

export default Search;
