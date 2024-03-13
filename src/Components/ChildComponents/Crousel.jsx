// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            <div className="p-4 flex gap-3">
                {/* Your card content for the first card */}
                <div className="bg-gray-200 p-4">
                    <img
                        src="https://images.bewakoof.com/uploads/grid/app/NEW-1x1-BOJ-RMIK-GIF-1701613600.gif"
                        alt="image 2"

                    />
                </div>
            </div>
            <div className="p-4">
                {/* Your card content for the second card */}
                <div className="bg-gray-200 p-4">
                    <img
                        src="https://images.bewakoof.com/uploads/grid/app/rm-1x1-tee-1701846056.jpg"
                        alt="image 3"
                    />
                </div>
            </div>
            <div className="p-4">
                {/* Your card content for the third card */}
                <div className="bg-gray-200 p-4">
                    <img
                        src="https://images.bewakoof.com/uploads/grid/app/OOFSale-1X1-RM-Common-1701957479.gif"
                        alt="image 1"
                    />
                </div>
            </div>
            <div className="p-4">
                {/* Your card content for the second card */}
                <div className="bg-gray-200 p-4">
                    <img
                        src="https://images.bewakoof.com/uploads/grid/app/rm-1x1-tee-1701846056.jpg"
                        alt="image 3"
                    />
                </div>
            </div>
            <div className="p-4">
                {/* Your card content for the third card */}
                <div className="bg-gray-200 p-4">
                    <img
                        src="https://images.bewakoof.com/uploads/grid/app/OOFSale-1X1-RM-Common-1701957479.gif"
                        alt="image 1"
                    />
                </div>
            </div>
            {/* Add more slides as needed */}
        </Slider>
    );
};

export default Carousel;


//  <img
//           src="https://images.bewakoof.com/uploads/grid/app/OOFSale-1X1-RM-Common-1701957479.gif"
//           alt="image 1"
//           className="h-full  w-1/3"
//         />
//         <img
//           src="https://images.bewakoof.com/uploads/grid/app/NEW-1x1-BOJ-RMIK-GIF-1701613600.gif"
//           alt="image 2"
//           className="h-full w-1/3"
//         />
//         <img
//           src="https://images.bewakoof.com/uploads/grid/app/rm-1x1-tee-1701846056.jpg"
//           alt="image 3"
//           className="h-full  w-1/3"
//         />
