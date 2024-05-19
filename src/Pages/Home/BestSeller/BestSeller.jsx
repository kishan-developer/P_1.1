import React, { useState, useEffect, useRef } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { GrFavorite } from "react-icons/gr";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useThemeContextValue } from '../../../Utils/context/ThemeContext';
import { useNavigate } from 'react-router-dom';

function BestSeller() {
    const { _, dispatch, productID, setproductID,setLodding } = useThemeContextValue();
    const [imgData, setImageData] = useState([]);
    const navigate = useNavigate();
    const ref = useRef(null);
    // fetch data
    // console.log('imgData', imgData);

    const FetchData = async () => {
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=50 `, {
                method: 'GET',
                headers: {
                    "projectId": "rcetbaqftf5m",
                },
                body: JSON.stringify()
            }
            );
            const result = await response.json();
            // console.log("result data",result.data);
            setImageData(result.data);
            setLodding(true)
            // setData((prevProducts) => [...prevProducts, ...result.data]); // Concatenate new data
            setLodding(false)
        } catch (error) {
            // setLodding(false)
            console.log(error);
        }
    }

    useEffect(() => {
        FetchData();
    }, [])

    function addToFav() {
        const token = localStorage.getItem('token');
        if (token) {
            setTimeout(() => {
                const button = ref.current; // corresponding DOM node
                button.className = "active";
            }, [])
            // dispatch add to cart action
            // console.log("call the add to fav");
            dispatch({
                type: 'ADD_TO_FAV',
                payload: {
                    _id: product._id,
                    brand: product.brand,
                    displayImage: product.displayImage,
                    name: product.name,
                    price: product.price,
                    size: product.size,

                }
            });
        }
        else {
            navigate('/login');
        }

    }

    return (
        <>
            <div className='w-full lg:h-[457px]  hidden lg:block pb-[15px]'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar]}
                    spaceBetween={20}
                    slidesPerView={5}
                    navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                >
                    {
                        imgData.map(user => (
                            <SwiperSlide key={user._id} className=' '>
                                <div className='lg:h-[457px]  '>
                                    <img className='h-[75%] ' src={user.displayImage} alt="" />
                                    <div id="product_info" className='px-3 cursor-pointer sm:text-[8px] text-[5px]'>
                                        <div id="brandName_favoriteIcon" className='flex items-center justify-between'>
                                            <p className=' lg:text-[12px] md:text-[10px] sm:text-[8px]  text-[4px] mr-1'>{user.brand}</p>
                                            <button ref={ref} className=''>
                                                <GrFavorite className='lg:w-6 md:w-4 w-3 lg:h-6 md:h-4 h-3' onClick={addToFav} />
                                            </button>
                                        </div>
                                        <p className='text-[5px] lg:text-[12px] md:text-[10px] sm:text-[8px] font-semibold text-gray-500'>
                                            {user.name.slice(0, 20)}
                                        </p>
                                        <p className='py-1'>
                                            <span className='font-semibold text-black lg:text-[16px] md:text-[12px] sm:text-[9px] text-[5px]'> ₹ {user.price}</span>
                                            <span className='lg:text-[12px] md:text-[10px] sm:text-[8px]  text-[4px] text-[#949494] font-400 line-through pl-1 '>₹{user.price + 2000} </span>
                                            <span className='text-[#00B852] lg:text-[12px] md:text-[10px] sm:text-[8px]  text-[4px] pl-1'>63% OFF</span>
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                    
                </Swiper>
            </div>

            {/* second width  */}
            <div className='w-full h-fit block lg:hidden xl:hidden lg:pb-[12px] p-0'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar]}
                    spaceBetween={20}
                    slidesPerView={2}
                    navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                >
                    {
                        imgData.map(user => (
                            <SwiperSlide key={user._id} className=''>
                                <div className='md:h-fit'>
                                    <img className='h-[70%] ' src={user.displayImage} alt="" />
                                    <div id="product_info" className='px-3 cursor-pointer text-[8px] h-fit'>
                                        <div id="brandName_favoriteIcon" className='flex items-center justify-between'>
                                            <p className='text-[12px] mr-1'>{user.brand.slice(0,15)}</p>
                                            <button ref={ref} className=''>
                                                <GrFavorite className='lg:w-6 md:w-4 w-3 lg:h-6 md:h-4 h-3' onClick={addToFav} />
                                            </button>
                                        </div>
                                        <p className=' text-[12px] font-semibold text-gray-500'>
                                            {user.name.slice(0, 20)}
                                        </p>
                                        <p className='py-1'>
                                            <span className='font-semibold text-black text-[16px] '> ₹ {user.price}</span>
                                            <span className='text-[12px]  text-[#949494] font-400 line-through pl-1 '>₹{user.price + 2000} </span>
                                            <span className='text-[#00B852] text-[12px] pl-1'>63% OFF</span>
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                    
                </Swiper>
            </div>
        </>
        
    )
}

export default BestSeller;