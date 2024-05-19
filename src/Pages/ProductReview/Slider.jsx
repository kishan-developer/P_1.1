import React, { useState } from 'react';

const Slider = ({ images, setMainImg }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    if (!images || images.length === 0) {
        return <div>No images to display.</div>;
    }

    return (
        <div className="relative">
            <div className="xl:flex xl:flex-col lg:flex lg:flex-col flex flex-row xl:h-auto lg:h-auto xl:w-auto lg:w-auto w-fit h-[250px]  justify-center items-center ">
                <button onClick={goToPrev} className="absolute left-5 top-10 transform -translate-y-1/2 font-bold">
                    Prev
                </button>
                <div className="overflow-hidden h-[560px] max-w-full flex xl:flex-col lg:flex-col justify-center items-center gap-2">
                    {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
                        <img
                            onMouseOver={()=> setMainImg(image)}
                            key={index}
                            src={image} 
                            alt={`image-${index}`}
                            className="w-[70px] h-[86px]  cursor-pointer hover:border-2 hover:border-blue-500"
                        />
                    ))}
                </div>
                <button onClick={goToNext} className="absolute right-5 bottom-10 transform -translate-y-1/2 font-bold">
                    Next
                </button>
            </div>
        </div>
    );
};

export default Slider;
