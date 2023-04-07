import React from 'react';

function Filters({handleCategory}) {
    const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert'];

    return (
        <div>
            <h2>
                <select onChange={handleCategory}>
                <option>Filter By Category </option>
                {categories.map((category, index) => {
                    return <option key={index} >{category}</option>
                })}
                </select>
            </h2>
        </div>
    )
}


export default Filters;