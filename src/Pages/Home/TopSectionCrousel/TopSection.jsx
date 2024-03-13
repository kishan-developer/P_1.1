import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { GrFavorite } from "react-icons/gr";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function TopSection() {
    return (
        <div className='w-full lg:h-[550px] h-fit flex gap-3 overflow-hidden '>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
            >

                <SwiperSlide  >
                    <img
                        src="https://images.bewakoof.com/uploads/grid/app/OOFSale-1X1-RM-Common-1701957479.gif"
                        alt="image 1"
                        className="h-full "
                    />
                </SwiperSlide>
                <SwiperSlide >
                    <img
                        src="https://images.bewakoof.com/uploads/grid/app/Cargo-Joggers-Common-1x1-Banner-1709215562.jpg"
                        alt="image 1"
                        className="h-full  "
                    />
                </SwiperSlide>
                <SwiperSlide >
                    <img
                        src="https://images.bewakoof.com/uploads/grid/app/SummerPalooza-1x1-SPACE-men-1708928166.jpg"
                        alt="image 1"
                        className="h-full "
                    />
                </SwiperSlide>
                <SwiperSlide >
                    <img
                        src="https://images.bewakoof.com/uploads/grid/app/YEFD-CO-ords-common-1x1-banner--2--1709271271.jpg"
                        alt="image 1"
                        className="h-full  "
                    />
                </SwiperSlide>
                <SwiperSlide  >
                    <img
                        src="https://images.bewakoof.com/uploads/grid/app/OOFSale-1X1-RM-Common-1701957479.gif"
                        alt="image 1"
                        className="h-full "
                    />
                </SwiperSlide>
                <SwiperSlide >
                    <img
                        src="https://images.bewakoof.com/uploads/grid/app/Cargo-Joggers-Common-1x1-Banner-1709215562.jpg"
                        alt="image 1"
                        className="h-full  "
                    />
                </SwiperSlide>
                <SwiperSlide >
                    <img
                        src="https://images.bewakoof.com/uploads/grid/app/SummerPalooza-1x1-SPACE-men-1708928166.jpg"
                        alt="image 1"
                        className="h-full "
                    />
                </SwiperSlide>
                <SwiperSlide >
                    <img
                        src="https://images.bewakoof.com/uploads/grid/app/YEFD-CO-ords-common-1x1-banner--2--1709271271.jpg"
                        alt="image 1"
                        className="h-full  "
                    />
                </SwiperSlide>
                <SwiperSlide >
                    <img
                        src="https://images.bewakoof.com/uploads/grid/app/OOFSale-1X1-RM-Common-1701957479.gif"
                        alt="image 1"
                        className="h-full "
                    />
                </SwiperSlide>
                <SwiperSlide >
                    <img
                        src="https://images.bewakoof.com/uploads/grid/app/Classic-Fit-Tshirt-Common-1x1-banner-1709289795.jpg"
                        alt="image 1"
                        className="h-full "
                    />
                </SwiperSlide>
            </Swiper>
        </div>

    )
}

export default TopSection;
