import React, { useState, useEffect } from 'react';

const PhotoSlide = () => {
    const [photos, setPhotos] = useState([
        {
            imageUrl: 'https://i.pinimg.com/564x/26/08/cd/2608cdcc36f83c27818c81f6d094a35b.jpg',
            id : 1,
        },
        {
            imageUrl: 'https://i.pinimg.com/564x/ce/8d/43/ce8d43b3aa98a4ed38b6e9ba946e0980.jpg',
            id : 2,
        },
        {
            imageUrl: 'https://i.pinimg.com/564x/11/2e/9d/112e9d3512c81093aa3ad3fef438b9f6.jpg',
            id : 3,
        },
        {
            imageUrl: 'https://i.pinimg.com/564x/13/55/2e/13552e0bfcd020f6d74212f494ccec83.jpg',
            id : 4,
        },
        {
            imageUrl: 'https://i.pinimg.com/564x/9c/30/8e/9c308ef1e1b703d75aa38b3da656e845.jpg',
            id : 5
        },
        {
            imageUrl: 'https://i.pinimg.com/564x/ea/d3/1d/ead31d8c22e189a285c66d919c26f56a.jpg',
            id : 6,
        },
        {
            imageUrl: 'https://i.pinimg.com/564x/cc/17/f5/cc17f5e7e64ee7ee149aa8694f478388.jpg',
            id : 7,
        },
        {
            imageUrl: 'https://i.pinimg.com/564x/26/08/cd/2608cdcc36f83c27818c81f6d094a35b.jpg',
            id : 8,
        },
        {
            imageUrl: 'https://i.pinimg.com/564x/ce/8d/43/ce8d43b3aa98a4ed38b6e9ba946e0980.jpg',
            id : 9,
        },
        {
            imageUrl: 'https://i.pinimg.com/564x/11/2e/9d/112e9d3512c81093aa3ad3fef438b9f6.jpg',
            id : 10,
        },
        {
            imageUrl: 'https://i.pinimg.com/564x/13/55/2e/13552e0bfcd020f6d74212f494ccec83.jpg',
            id : 11,
        },
        {
            imageUrl: 'https://i.pinimg.com/564x/9c/30/8e/9c308ef1e1b703d75aa38b3da656e845.jpg',
            id : 12,
        },
        {
            imageUrl: 'https://i.pinimg.com/564x/ea/d3/1d/ead31d8c22e189a285c66d919c26f56a.jpg',
            id : 13,
        },
        {
            imageUrl: 'https://i.pinimg.com/564x/cc/17/f5/cc17f5e7e64ee7ee149aa8694f478388.jpg',
            id : 14,
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

export default PhotoSlide;
