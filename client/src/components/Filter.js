// import React from 'react';

// function Filters({ handleCategory }) {
//     const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert'];

//     return (
//         <div
//         style={{
//             margin: '10px',
//             padding: '10px',
//             borderRadius: '5px',
//         }}
//         >
//       {/* Apply inline styles */}
//         <h2>
//             <select
//                 style={{
//                 padding: '5px',
//                 border: 'none',
//                 backgroundColor: '#fff',
//                 fontSize: '14px',
//                 color: '#000',
//                 cursor: 'pointer',
//                 font: "Times New Roman",
//             }}
//             onChange={handleCategory}
//             >   
//           { /* Apply inline styles */}
//             <option>Filter By Category</option>
//             {categories.map((category, index) => {
//                 return <option key={index}>{category}</option>;
//             })}
//             </select>
//         </h2>
//         </div>
//     );
// }

// export default Filters;


import React from 'react';

function Filter({ handleCategory }) {
    const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert'];

    return (
        <div
        style={{
            margin: '10px',
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
                        fontSize: '14px',
                        color: '#000',
                        cursor: 'pointer',
                        font: "Times New Roman",
                    }}
                    onChange={(e) => handleCategory(e.target.value)} // Call handleCategory with selected category value
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