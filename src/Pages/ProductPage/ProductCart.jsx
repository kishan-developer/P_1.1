import React, { useEffect, useRef, useState } from 'react'
import { useThemeContextValue } from '../../Utils/context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { append } from 'dom/lib/mutation';
import './ProductCard.css';
import { GrFavorite } from "react-icons/gr";
import { MdOutlineStar } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
// import useDeleteProduct from '../../Utils/API/useDeleteProduct';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductCart({ product, index }) {
    const { _, dispatch, productID, setproductID, cartData, getCartItem, favlength, setFavlength } = useThemeContextValue();
    const [currentValue, setCurrentValue] = useState(productID);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const [favStyle, setFavStyle] = useState('');
    const ref = useRef(null);

    // set the current product id in localStorage
    // localStorage.setItem("cart_product_id", product._id)


    // Add Product in Favorites (Protected Route):
   

    const Addwishlist = async()=> {
        console.log("add wislist ",productID)
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
            const response = await fetch(url, options);
            const result = await response.json();
            setFavlength(result.results);

            if(result.status==="success"){
                const button = ref.current; // corresponding DOM node
                button.className = "aa";
                
                // prompt(result.message)
            }
            // alert(result.message);
            // toast(result.message);
            console.log("add to wishlist",result);
        } catch (error) {
            console.log(error);
        }
    }

    // console.log("fav length : ", favlength);

    // calling the the useDeleteProduct inside the fun pass the tree arguments url,options,authToken
    // useDeleteProduct function is return thre data, loading, error, fetchData
    // const { data, loading, error, fetchData } = useDeleteProduct(url, options, authToken);
    // console.log("wishlist data adding  ", data);

    // addToFav fun is calling usig your current product id 
    const addToFav = async () => {
        console.log("add to fa is calling............")
        setproductID(product._id) // set the product id 
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

    // console.log("Add to fav data : ", data);
    const _id = product.name;
    const idString = (_id) => {
        return String(_id).toLowerCase().split(" ").join("");
    };
    const rootId = idString(_id);
    // console.log(rootId);


    // here set the current product id in setproduct id 
    // using navigate fun to navigate the review page usign rootId 
    function handleReviewPage(id) {
        setproductID(id); // pass the current image product id 
        navigate(`/review/${rootId}`, {
            state: {
                // item is the key and product in hole vlaue of current product 
                item: product
            }
        });
    }


    return (
        <>
        
            <div key={product._id} className="cards mb-5  " >
                <img onClick={() => handleReviewPage(product._id)} src={product.displayImage} alt="image" className='product_img w-full ' />

                <div id="product_info" className='px-3 cursor-pointer' >
                    <div id="brandName_favoriteIcon" className='flex items-center justify-between pt-3'>
                        <p className='font-medium md:text-[12px] text-sm mr-1'>{product.brand}</p>
                        <button ref={ref} className=''>
                            <FaHeart className='w-6 h-6' onClick={addToFav} />
                        </button>
                    </div>

                    <p className='md:text-[10px] text-sm font-semibold text-gray-500'>{product.name}</p>
                    <p className='py-1'>
                        <span className='font-bold text-black text-md'> ₹ {product.price}  </span>
                        <span className='text-sm text-gray-600 font-400 line-through pl-2 '>₹{product.price + 2000} </span>
                    </p>
                    <p className=' px-2  w-fit md:text-[10px] text-sm font-bold bg-gray-100 text-gray-800'>₹{product.price} Fro {product.brand}</p>
                    <p className='w-fit md:text-[12px] text-sm  text-black border border-1 border-black mt-3 px-3 font-bold'>100% COTTON</p>
                </div>
                <ToastContainer />
            </div>
           
        </>
        
    )
}

export default ProductCart;