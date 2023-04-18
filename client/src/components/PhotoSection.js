import React from 'react';


function PhotoSection(props) {
    
    const { photoUrl, text } = props;

    return (
        <div className="photo-section">
        <div className="photo-section__image-container">
            <img className="photo-section__image" src={photoUrl} alt="Photo" />
        </div>
        <div className="photo-section__text-container">
            <p className="photo-section__text">{text}</p>
        </div>
        </div>
    );
}

export default PhotoSection;