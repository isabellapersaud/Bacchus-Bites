import React from 'react';

function Filter({ handleCategory }) {
    const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert'];

    return (
        <div
            style={{
                margin: '10px 0 10px auto',
                padding: '10px',
                borderRadius: '5px',
            }}
        >
            <h2>
                <select
                    style={{
                        padding: '5px',
                        border: 'none',
                        backgroundColor: '#fff',
                        fontSize: '16px',
                        color: 'black',
                        cursor: 'pointer',
                        fontFamily: 'Playfair Display'
                    }}
                    onChange={(e) => handleCategory(e.target.value)}
                >   
                    <option>Filter By Category</option>
                    {categories.map((category, index) => {
                        return <option key={index}>{category}</option>;
                    })}
                </select>
            </h2>
        </div>
    );
}

export default Filter;