import React, { useState, useEffect } from 'react';

const PhotoSlide2 = () => {
    const [photos, setPhotos] = useState([
        {
            imageUrl: 'https://i.pinimg.com/564x/db/3d/45/db3d454b4301893b017b576bc0144dcf.jpg',
            id : 1,
        },
        {
            imageUrl: 'https://i.pinimg.com/564x/18/f2/bc/18f2bc33e7220eab1faf71a78c09e45b.jpg'
        },
        {
            imageUrl: 'https://i.pinimg.com/564x/fc/f2/2a/fcf22a5d4249c0fa4508d3d09fbddf19.jpg',
            id : 3,
        },
        {
            imageUrl: 'https://i.pinimg.com/564x/a2/08/bd/a208bd6466e2d05dc2e3a159bb984cb0.jpg',
            id : 4,
        },
        {
            imageUrl: 'https://i.pinimg.com/564x/e8/32/91/e83291cb5d93ad1fb2e2363478336c47.jpg',
            id : 5
        },
        {
            imageUrl: 'https://i.pinimg.com/564x/94/b7/f9/94b7f98893b74c757b16344994ffa546.jpg',
            id : 6,
        },
        {
            imageUrl: 'https://i.pinimg.com/564x/d3/42/3c/d3423c717c8992ba160d793716eccc02.jpg',
            id : 7,
        },

    ]);
    const [currentPhoto, setCurrentPhoto] = useState(0);

    useEffect(() => {
        const fetchPhotos = () => {
            fetch("/")
                .then(response => response.json())
                .then(data => setPhotos(data))
                .catch(error => console.error(error));
        };

        fetchPhotos();
    }, []);

    // rest of the component code

    const handleNext = () => {
        setCurrentPhoto((prev) =>
        prev === photos.length - 1 ? 0 : prev + 1
        );
    };

    const handlePrevious = () => {
        setCurrentPhoto((prev) =>
        prev === 0 ? photos.length - 1 : prev - 1
        );
    };
    
    return (
        <div
            style={{
            display: 'flex',
            overflowX: 'scroll',
            whiteSpace: 'nowrap',
            }}
        >
            {photos.map((photo) => (
            <div
                key={photo.id}
                style={{
                flex: '0 0 auto',
                marginRight: '10px',
                minWidth: '200px', 
                }}
            >
                <img
                src={photo.imageUrl}
                // alt={photo.title}
                style={{ width: '457px', height: '609px' }}
                />
            </div>
            ))}
        </div>
    );
};

export default PhotoSlide2;
