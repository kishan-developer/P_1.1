import React, { useState, useEffect } from 'react'
import { useThemeContextValue } from '../../Utils/context/ThemeContext';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";
import { BsBagPlusFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import './ProductR.css';
import Slider from './Slider';
import Review from './Review';
import StoreR from './StoreR';

function ProductReview() {
    const [details, setDetails] = useState({});
    const [productColor, setProductcolor] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mainImg, setMainImg] = useState('');
    const [reviewData, setReviewData] = useState([]);
    const [productIdSerReview, setproductIdSerReview] = useState('');
    const { setReview, review } = useThemeContextValue();
    

    
    const navigate = useNavigate();
    const location = useLocation();
    // console.log("userID", userId);

    

    const { productID, setproductID, state, dispatch, quantity, setQuantity, size, setSize, addToCart, handleSize, cartItems, favlength, setFavlength } = useThemeContextValue();
    
    useEffect(() => {
        setDetails(location.state.item);
    })
    



    const productId = productID;
    
    // console.log("review page cartItems", getCartItem);
    // Check if cartItems is an array before calling .some()
    
    
    const CallingCartfunc = () => {
        addToCart(productID, quantity);
        console.log("add to cart function is calling ")
    }

    // get product review page data using product id and fetch data 
    useEffect(() => {
        // const productId = "652675ccdaf00355a78380f8";
        getReviewData(productID);
        productReview(productID);
        setproductID(productID)
    }, [productID]);

    // data fetching initial setup
    const myHeaders = new Headers();
    myHeaders.append("projectId", "rcetbaqftf5m");

    // request option usign GET method
    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    // getReviewData using api using product id
    const getReviewData = async (productID) => {
        // console.log("productID", productID);
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/product/${productID}`, requestOptions);
            if (!response.ok) {
                throw new Error('Failed to fetch review data');
            }
            const result = await response.json();
            console.log("product review data",result.data);
            setReviewData(result.data);
        } catch (error) {
            console.error("error", error);
        }
    }

    // get the product reviews using product id
    const productReview = async (productID) => {
        // console.log("productID", productID);
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/review/${productID}`, requestOptions);
            if (!response.ok) {
                throw new Error('Failed to fetch review data');
            }
            const result = await response.json();
            console.log(" all review ", result.data);

            setReview(result.data);
        } catch (error) {
            console.error("error", error);
        }
    }
    
    // Assuming reviewData contains color information
    const color = reviewData.color ? reviewData.color.toLowerCase() : '';

    // Function to get Tailwind CSS class based on lowercase color name
    const getColorClassName = (color) => {
        switch (color) {
            case 'black':
                return 'bg-black';
            case 'white':
                return 'bg-white';
            case 'red':
                return 'bg-red-500';
            case 'blue':
                return 'bg-blue-600';
            case 'olive':
                return 'bg-[#808000]';
            case 'maroon':
                return 'bg-[#800000]';
            case 'yellow':
                return 'bg-yellow-600';
            case 'orange':
                return 'bg-[#FFA500]';
            case 'lavender':
                return 'bg-pink-100';
            case 'pink':
                return 'bg-pink-600';
            case 'green':
                return 'bg-green-400';
            case 'brown':
                return 'bg-brown-500';
            // Add more cases for other colors as needed
            default:
                return 'bg-gray-500'; // Default color if not found
        }
    };

    // function addToCart() {
    //     console.log("Add to cart");

    //     dispatch({
    //         type: 'ADD_TO_CART',
    //         payload: {
    //             _id: details._id,
    //             brand: details.brand,
    //             displayImage: details.displayImage,
    //             name: details.name,
    //             price: details.price,
    //             size: details.size
    //         }
    //     })

    // }

    // add to fav
    const addToFav = async () => {
        console.log("add to fa is calling............")
        // setproductID(productID) // set the product id 
        const token = localStorage.getItem('token'); // get the token for the localstorage
        // here the check the token is true not if the token is true than calling the setTimeout function 
        // and in this function get the button class name using ref element set the className is aa and change the fav icon color in pink
        if (token) {
            try {
                await Addwishlist();
                // await getAllProductFav();  // Assuming getCartItem is a function to update cart items
            } catch (error) {
                console.error('Error occurred while deleting:', error);
            }
        } else {
            navigate('/login');
        }
    }

    const Addwishlist = async () => {
        const url = `https://academics.newtonschool.co/api/v1/ecommerce/wishlist`;
        const headers = {
            'Content-Type': 'application/json',
            // Add any other headers as needed
        };
        const authToken = localStorage.getItem("token"); // get the token fron local storage 
        const raw = JSON.stringify({
            "productId": productID // passing the product id
        });
        const options = {
            method: 'PATCH', // or 'GET', 'PUT', 'DELETE', etc.
            headers: {
                ...headers, // usingb spread operator pass the all data in side the headers
                "Authorization": `Bearer ${authToken}`, // this is your authorization
                "projectId": "rcetbaqftf5m" // this is your project id
            },
            body: raw, // passing the raw data inside the body in empty
        };

        try {
            const response = await fetch(url,options);
            const result = await response.json();
            alert(result.message);
            setFavlength(result.results);

            if (result.status === "success") {
                const button = ref.current; // corresponding DOM node
                button.className = "aa";
                // toast(result.message);
                // prompt(result.message)
            }


            console.log("add to wishlist", result);
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className=' flex flex-col w-full items-center justify-center'>
            <nav className='flex items-start py-3 w-[75%] h-12 text-lg '>All Routers </nav>
            <div className='w-[75%] h-fit lg:flex lg:flex-row flex flex-col justify-center'>
                <div className='lg:w-[50%] w-full lg:flex lg:flex-row flex flex-col items-center justify-center h-fit ' >
                    <div className='w-[100px]  lg:flex lg:flex-col flex flex-row items-center justify-center gap-2'>

                        <Slider setMainImg={setMainImg} images={reviewData.images} />
                       
                    </div>
                    <img
                        className='xl:w-[450px] xl:h-[562px] lg:w-[300px] lg:h-[400px] md:w-[250px] md:h-[300px] md:my-5'
                        src={mainImg === '' ? (`${reviewData.displayImage}`) :(`${mainImg}`)}
                    />
                </div>
                <div className='xl:w-[460px]  lg:w-[380px] w-full text-lg font-thik lg:p-0 lg:m-0 xl:m-0 xl:p-0 px-5 my-5'>
                    <h1 style={{ color: "#4F5362", lineHeight: "21px" }} className='xl:text-[18px] lg:text-[15px] text-[12px] font-bold '>{details?.brand}</h1>

                    <div
                        className='h-[fit] pt-[8px] lg:text-[15px] text-[10px]'
                        style={{ color: "#737373", lineHeight: "20px" }}
                    >
                        {reviewData.name}
                    </div>

                    <div className='starrating w-[54px] h-[36px] mt-5 '>
                        <div className='flex bg-[#F7F7F7] h-[25px] w-[54px] border-[0.8px] border-gray-500 mr-4 px-2 pb-2 '>
                            <IoIosStar className='text-yellow-600 h-5 w-5 mt-1' /><span className='pl-1 font-semibold'>{Math.floor(reviewData.ratings)}</span>
                        </div>
                    </div>

                    <div className='h-[96px]  '>
                        <div className='h-[46px] pt-[8px] '>
                            <span className='prices flex gap-2 h-[28px] '>
                                <span className='price font-semibold pr-[3px] ' >
                                    <span className='text-[16px]'>₹</span>
                                    <span className='text-[24px] '>{reviewData.price}</span>
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

                    <div className='w-[fit] h-[84px]'>
                        <h1 className='mb-2 font-bold h-[19px] text-[14px] text-[#333333]'>COLOR CAPTION : {reviewData.color}</h1>
                        <div className='grid grid-cols-7 w-[fit] h-[50px]'>
                            <div onClick={()=> setProductcolor(reviewData.color)} className={`xl:w-[40.4px] xl:h-[40.4px] lg:w-[40.4px] lg:h-[40.4px] md:w-[40.4px] md:h-[40.4px] sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] rounded-full cursor-pointer ${getColorClassName(color)}  border-4 border-blue-900`}></div>



                        </div>
                    </div>

                    <div className='w-[fit] h-[81px] '>
                        <h1 className='mb-2 font-bold h-[19px] text-[14px] text-[#333333]'>SELECT SIZE</h1>
                        <div className='grid grid-cols-5 xl:w-[300px] lg:w-[300px] md:w-[250px] sm:w-[200px] w-[fit] h-[50px] '>
                            {
                                reviewData.size && Array.isArray(reviewData.size) && reviewData.size.map((item, i) => (
                                    <div key={i}   className='w-[48.4px] h-[48.4px] border-[0.8px] border-gray-900 rounded-md cursor-pointer flex items-center justify-center hover:bg-[#333333] hover:text-[#FFFFFF]'>
                                        {item}
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className='mt-2  text-sm '>
                        <span className='text-sm font-semibold mr-2'>{reviewData.subCategory}</span>
                        {`Waist (in Inch) : 32 | Outseam Length (in Inch): 38.5`}
                    </div>

                    <div className='w-[fit] h-[44px] flex gap-4 mt-8 '>
                        <button
                            onClick={()=>CallingCartfunc()}
                            className='w-[200px] h-[44px] bg-yellow-600 text-center flex justify-center py-2  text-[14px]'
                        >
                            <span className='mr-2 pt-2'>
                                <BsBagPlusFill />
                            </span>
                            <span>
                                Add To Cart
                            </span>
                        </button>
                        <button
                            onClick={addToFav}
                            className='w-[195px] h-[44px] bg-[#FFFFFF] border-[0.7px] border-gray-700 text-center flex justify-center py-2 text-[14px]'
                        >
                            <span className='mr-2 pt-2'>

                                <FaHeart className='text-red-400' />

                            </span>
                            <span className='font-semibold'>WISHLISTED</span>
                        </button>
                    </div>

                    <div className="dexcription w-full h-fit">
                        {/* {reviewData.description} */}
                    </div>
                    
                    <div className='h-[120px] p-[15px] my-10 border-b-2 border-gray-300 '>
                        <div className=' h-[58px] flex items-center justify-between '>
                            <div className='w-[104px] h-[58px]  flex items-center justify-center flex-col text-[8px]'>
                                <img className='w-[40px]' src="https://images.bewakoof.com/web/cart-badge-trust.svg" alt="logoo" />
                                <p className='text-gray-500'>100% SECURE PAYMENT</p>
                            </div>
                            <div className='w-[143px] h-[58px]   flex items-center justify-center flex-col text-[8px]'>
                                <img className='w-[40px]' src="https://images.bewakoof.com/web/cart-easy-return.svg" alt="logoo" />
                                <p className=' w-full text-gray-500'>EASY RETURNS & QUICK REFUNDS</p>
                            </div>
                            <div className='w-[93px] h-[58px]   flex items-center justify-center flex-col text-[8px]'>
                                <img className='' src="https://images.bewakoof.com/web/quality-check.svg" alt="logoo" />
                                <p className='text-gray-500'>QUALITY ASSURANCE</p>
                            </div>
                        </div>
                    </div>

                    <Review />

                    <div className="UserReview">
                        {review.map((item)=> (
                            
                                <StoreR key={item._id} item={item}  />
                            
                            
                        ))}
                        

                        {/* <StoreR  review={review} userReview={userReview} /> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductReview;


