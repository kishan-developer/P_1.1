import React, { useEffect, useRef, useState } from 'react'
import { useThemeContextValue } from '../../Utils/context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { append } from 'dom/lib/mutation';
import './ProductCard.css';
import { GrFavorite } from "react-icons/gr";

function ProductCart({ product,  index }) {
    const { _, dispatch, productID, setproductID } = useThemeContextValue();
    const [currentValue, setCurrentValue] = useState(productID);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const [favStyle, setFavStyle] = useState('');
    const ref = useRef(null);
    // console.log('dispatch',dispatch);

    const _id = product.name;
    const idString = (_id) => {
        return String(_id).toLowerCase().split(" ").join("");
    };
    const rootId = idString(_id);
    // console.log(rootId);
    

    function handleReviewPage(id) {
        // setProducts(id);
        navigate(`/review/${rootId}`, {
            state: {
                item : product
            }
        });  
        // console.log("details");
    }
    // const NavigateFavPage = () => {
    //     navigate("/fav", { state: { id: id } })
    // }
    


    function addToFav() {
        const token = localStorage.getItem('token');
        if(token){
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
        else{
            navigate('/login');
        }
        
    }





    return (

        <div key={product._id + index} className="cards mb-5  " >
            <img onClick={() => handleReviewPage(product._id)} src={product.displayImage} alt="image" className='product_img w-full ' />
            <div id="product_info" className='px-3 cursor-pointer' >
                <div id="brandName_favoriteIcon" className='flex items-center justify-between pt-3'>
                    <p className='font-medium md:text-[12px] text-sm mr-1'>{product.brand}</p>
                    <button ref={ref}  className=''>
                        <GrFavorite className='w-6 h-6' onClick={addToFav} />  
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
        </div>
    )
}

export default ProductCart;