import React, { useState } from "react";

const Crousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    };

    const goToNextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    return (
        <div className="image-slider">
            <button className="arrow" onClick={goToPreviousImage} disabled={currentImageIndex === 0}>
                ❮
            </button>
            <div className="card-container">
                {images.map((image, index) => (
                    <div
                        key={image}
                        className={`card ${currentImageIndex === index ? "active" : ""}`}
                        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                    >
                        <img src={image} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
            <button className="arrow" onClick={goToNextImage} disabled={currentImageIndex === images.length - 1}>
                ❯
            </button>
        </div>
    );
};

const images = [
    "https://images.bewakoof.com/uploads/grid/app/NEW-1x1-BOJ-RMIK-GIF-1701613600.gif",
    "https://images.bewakoof.com/uploads/grid/app/rm-1x1-tee-1701846056.jpg",
    "https://images.bewakoof.com/uploads/grid/app/OOFSale-1X1-RM-Common-1701957479.gif",
    "https://images.bewakoof.com/uploads/grid/app/NEW-1x1-BOJ-RMIK-GIF-1701613600.gif",
    "https://images.bewakoof.com/uploads/grid/app/OOFSale-1X1-RM-Common-1701957479.gif",
    "https://images.bewakoof.com/uploads/grid/app/rm-1x1-tee-1701846056.jpg"
];

const Apps = () => {
    return (
        <div className="app">
            <h1>Three-Card Image Slider</h1>
            <Crousel images={images.slice(0, 3)} /> {/* Pass the first three images for the initial render */}
        </div>
    );
};

export default Apps;