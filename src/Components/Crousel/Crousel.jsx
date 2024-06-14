import React, { useState } from 'react';
import ImageCard from '../ImageCard/ImageCard'; // Create a separate component for your image card

const Crousel = () => {
    const totalItems = 5; // Number of child divs
    const itemsPerPage = 3; // Number of items to show per page
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const nextSlide = () => {
        setCurrentPage((prevPage) => (prevPage === totalPages ? 1 : prevPage + 1));
    };

    const prevSlide = () => {
        setCurrentPage((prevPage) => (prevPage === 1 ? totalPages : prevPage - 1));
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return (
        <div className="flex items-center justify-center space-x-4 bg-black h-50">
            {/* Show only 3 cards based on current page */}
            {Array.from({ length: totalItems }, (_, index) => (
                <div
                    key={index}
                    className={`transition-transform transform ${index >= startIndex && index < endIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                        }`}
                >
                    <ImageCard />
                </div>
            ))}

            {/* Previous Button */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full focus:outline-none"
            >
                Previous
            </button>

            {/* Next Button */}
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full focus:outline-none"
            >
                Next
            </button>
        </div>
    );
};

export default Crousel;