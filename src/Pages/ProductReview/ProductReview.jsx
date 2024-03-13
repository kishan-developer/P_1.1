import React, { useState, useEffect } from 'react'
import { useThemeContextValue } from '../../Utils/context/ThemeContext';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";
import { BsBagPlusFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import './ProductR.css';

function ProductReview() {
    const [details, setDetails] = useState({});

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setDetails(location.state.item);
    })
    // console.log("details", details);

    const { productID, state, dispatch } = useThemeContextValue();

    console.log("state",state);

    function addToCart() {
        console.log("Add to cart");
        
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                _id: details._id,
                brand: details.brand,
                displayImage: details.displayImage,
                name: details.name,
                price: details.price,
                size: details.size
            }
        })
        
    }

    // add to fav
    function addToFav() {
        console.log("Add to fav")
        const token = localStorage.getItem('token');
        if (token) {
           
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


    // console.log(state);
    // setReviewData(productID)
    // console.log("productID ", productID.displayImage);

    // const { brand, category, color, description, displayImage, gender, name, price, ratings, sellerTag, size } = productID;
    // console.log("product i",productID.size);
    // setId(productID);

    // const handleContinue = async () => {
    //     const options = {
    //         method: 'GET',
    //         headers: new Headers({ projectID: 'rcetbaqftf5m' }),
    //         // body: JSON.stringify(loginData)
    //     }
    //     const res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/product/:${id}`, options);
    //     const resJson = await res.json();
    //     console.log("review data ", resJson)
    //     // setReviewData(resJson);
    // }

    // useEffect(() => {
    //    handleContinue();
    // }, [id])

    

    return (
        <div className=' flex flex-col w-full items-center justify-center'>
            <nav className='flex items-start py-3 w-[75%] h-12 text-lg '>All Routers </nav>
            <div className=' w-[75%] h-screen flex'>
                <div className='w-[50%] flex' >
                    <div className='w-[100px] flex flex-col gap-2'>
                        <button><IoIosArrowUp className='w-20 text-3xl text-gray-600' /></button>
                        <img className="box w-[70px] h-[86px] cursor-pointer hover:border-2 hover:border-blue-500"
                            src='https://images.bewakoof.com/t1080/men-printed-oversized-t-shirt-26-582773-1696326939-4.jpg'
                        />
                        <img className="box w-[70px] h-[86px] cursor-pointer hover:border-2 hover:border-blue-500"
                            src='https://images.bewakoof.com/t1080/men-printed-oversized-t-shirt-26-582773-1696326944-5.jpg'
                        />
                        <img className="box w-[70px] h-[86px] cursor-pointer hover:border-2 hover:border-blue-500"
                            src='https://images.bewakoof.com/t1080/men-printed-oversized-t-shirt-26-582773-1696326950-6.jpg'
                        />
                        <img className="box w-[70px] h-[86px] cursor-pointer hover:border-2 hover:border-blue-500"
                            src='https://images.bewakoof.com/t1080/men-s-black-rocky-graphic-printed-oversized-t-shirt-582773-1704089407-10.jpeg'
                        />
                        <img className="box w-[70px] h-[86px] cursor-pointer hover:border-2 hover:border-blue-500"
                            src='https://images.bewakoof.com/t96/men-printed-oversized-t-shirt-26-582773-1696326933-3.jpg'
                        />
                        <button><IoIosArrowDown className='w-20 text-3xl text-gray-600' /></button>
                    </div>
                    <img
                        className='w-[450px] h-[562px]'
                        src={details.displayImage}
                    // src="https://images.bewakoof.com/t1080/men-printed-oversized-t-shirt-26-582773-1696326922-1.jpg" alt="img" 
                    />
                </div>
                <div className='w-[460px] text-lg font-thik '>
                    <h1 style={{ color: "#4F5362", lineHeight: "21px" }} className='text-[18px] font-bold '>{details.brand}</h1>

                    <div
                        className='h-[28px] pt-[8px] mb-[2px]'
                        style={{ color: "#737373", fontSize: "16px", lineHeight: "20px" }}
                    >
                        {details.name}
                    </div>

                    <div className='starrating w-[54px] h-[36px] mt-3  '>
                        <div className='flex bg-[#F7F7F7] h-[25px] w-[54px] border-[0.8px] border-gray-500 mr-4 px-2 pb-2 '>
                            <IoIosStar className='text-yellow-600 h-5 w-5 mt-1' /><span className='pl-1 font-semibold'>{Math.floor(details.ratings)}</span>
                        </div>
                    </div>

                    <div className='h-[96px]  '>
                        <div className='h-[46px] pt-[8px] '>
                            <span className='prices flex gap-2 h-[28px] '>
                                <span className='price font-semibold pr-[3px] ' >
                                    <span className='text-[16px]'>₹</span>
                                    <span className='text-[24px] '>{details.price}</span>
                                </span>
                                <del className='text-[14px] text-[#949494]'>₹1199</del>
                                <p className='text-[#00B852] text-[16px] font-semibold'>50% OFF</p>
                            </span>

                            <p className='text-[#949494]  text-[12px] mt-1'> inclusive of all taxes</p>
                        </div>

                        <div className='flex gap-3 text-sm h-[37px]  mt-5'>
                            <button
                                className='bg-[#525252CC] text-[12px] text-[#FFFFFF] h-[21px] my-[8px]   px-[8px]'
                            >
                                OVERSIZED FIT
                            </button>
                            {/* <button className='bg-green-500 px-2'>BUY 2 FOR 999</button>
                        <button className='border-2 border-black px-2'>100% COTTON</button> */}
                        </div>
                    </div>

                    <div className=" h-[80px] my-[4px] py-[7px] text-[12px]">
                        <div className='h-[2px] w-full bg-[#EEEEEE]'></div>
                        <p className='text-[12px] pr-5 '>TriBe members get an extra discount of ₹60 and FREE shipping. <span className='text-[#42A2A2]'>Learn more</span> </p>
                        <div className='h-[2px] w-full bg-[#EEEEEE]'></div>
                    </div>

                    <div className='w-[385px] h-[84px] '>
                        <h1 className='mb-2 font-bold h-[19px] text-[14px] text-[#333333]'>COLOR CAPTION : {details.color}</h1>
                        <div className='grid grid-cols-7 w-[385px] h-[50px]  '>
                            <div className='w-[40.4px] h-[40.4px] rounded-full cursor-pointer bg-[#171E2E]  hover:border-4 hover:border-blue-400'></div>
                            <div className='w-[40.4px] h-[40.4px] rounded-full cursor-pointer bg-[#074D4A] hover:border-4 hover:border-blue-400'></div>
                            <div className='w-[40.4px] h-[40.4px] rounded-full cursor-pointer bg-[#5E5386] hover:border-4 hover:border-blue-400'></div>
                            <div className='w-[40.4px] h-[40.4px] rounded-full cursor-pointer bg-[#E4D5C4] hover:border-4 hover:border-blue-400'></div>
                            <div className='w-[40.4px] h-[40.4px] rounded-full cursor-pointer bg-[#050408] hover:border-4 hover:border-blue-400'></div>
                            <div className='w-[40.4px] h-[40.4px] rounded-full cursor-pointer bg-[#4E5E71] hover:border-4 hover:border-blue-400'></div>
                            <div className='w-[40.4px] h-[40.4px] rounded-full cursor-pointer bg-[#513330] hover:border-4 hover:border-blue-400'></div>

                        </div>
                    </div>

                    <div className='w-[385px] h-[81px] '>
                        <h1 className='mb-2 font-bold h-[19px] text-[14px] text-[#333333]'>SELECT SIZE</h1>
                        <div className='grid grid-cols-5 w-[300px] h-[50px]  '>
                            <div
                                className='w-[48.4px] h-[48.4px] border-[0.8px] border-gray-900 rounded-md cursor-pointer flex items-center justify-center
                                    hover:bg-[#333333] hover:text-[#FFFFFF]
                                '
                            >
                                28
                            </div>
                            <div
                                className='w-[48.4px] h-[48.4px] border-[0.8px] border-gray-900 rounded-md cursor-pointer flex items-center justify-center
                                    hover:bg-[#333333] hover:text-[#FFFFFF]
                                '
                            >
                                30
                            </div>
                            <div
                                className='w-[48.4px] h-[48.4px] border-[0.8px] border-gray-900 rounded-md cursor-pointer flex items-center justify-center
                                    hover:bg-[#333333] hover:text-[#FFFFFF]
                                '
                            >
                                32
                            </div>
                            <div
                                className='w-[48.4px] h-[48.4px] border-[0.8px] border-gray-900 rounded-md cursor-pointer flex items-center justify-center
                                    hover:bg-[#333333] hover:text-[#FFFFFF]
                                '
                            >
                                34
                            </div>
                            <div
                                className='w-[48.4px] h-[48.4px] border-[0.8px] border-gray-900 rounded-md cursor-pointer flex items-center justify-center
                                    hover:bg-[#333333] hover:text-[#FFFFFF]
                                '
                            >
                                36
                            </div>

                        </div>
                    </div>

                    <div className='mt-2  text-sm'>
                        <span className='text-sm font-semibold mr-2'>Garment</span>
                        {`Waist (in Inch) : 32 | Outseam Length (in Inch): 38.5`}
                    </div>

                    <div className='w-[460px] h-[44px] flex gap-4 mt-8'>
                        <button 
                            onClick={addToCart}
                            className='w-[245px] h-[44px] bg-yellow-600 text-center flex justify-center py-2  text-[14px]'
                        >
                            <span className='mr-2 pt-2'>
                                <BsBagPlusFill />
                            </span>
                            <span>ADD TO BAG</span>
                        </button>
                        <button 
                            onClick={addToFav}
                            className='w-[195px] h-[44px] bg-[#FFFFFF] border-[0.7px] border-gray-700 text-center flex justify-center py-2 text-[14px]'
                        >
                            <span className='mr-2 pt-2'>
                               
                                    <FaHeart  className='text-red-400' />
                                
                            </span>
                            <span className='font-semibold'>WISHLISTED</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductReview;


