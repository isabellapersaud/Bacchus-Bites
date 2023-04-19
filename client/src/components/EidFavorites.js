import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PhotoSection from './PhotoSection';
import './EidFavorites.css';

const EidFavorites = () => {
    return (
        <div>
            <h2 style={{ textAlign: 'center', fontFamily:'Tangerine', fontSize: '50px', fontWeight: 'bold', letterSpacing: "0.5em"}}>
                Eid Favorites!
            </h2>
            <div className="photo-grid">
                <Link to="/recipes/18">
                    <PhotoSection
                        photoUrl="https://i.pinimg.com/564x/23/5b/da/235bda2b6f04e5fa7f308c8d81b16d96.jpg"
                        className="photo-section_img"
                    />
                </Link>
                <Link to="/recipes/19">
                    <PhotoSection
                        photoUrl="https://i.pinimg.com/564x/6d/5f/e2/6d5fe2cede1be6f079e3444099de9eb5.jpg"
                        className="photo-section_img"
                    />
                </Link>
                <Link to="/recipes/13">
                    <PhotoSection
                        photoUrl= "https://i.ytimg.com/vi/PUaeqOWSJew/maxresdefault.jpg"
                        className="photo-section_img"
                    />
                </Link>
            </div>
        </div>
    );
};

export default EidFavorites;