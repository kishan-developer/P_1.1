import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useThemeContextValue } from '../../Utils/context/ThemeContext';
import { IoMdClose } from "react-icons/io";
import { BsBagPlusFill } from "react-icons/bs";
// import useDeleteProduct from '../../Utils/API/useDeleteProduct';
import { Warning } from 'postcss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FavProductCart({ item, index }) {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('S');
  // add to bag data testing
  const [resultStatus, setResultStatus]= useState(false);
  const { state, dispatch, productID, setproductID, favData, setFavData, getAllProductFav, setCartData, removeWishlistProduct, getCartItem } = useThemeContextValue();
  // const [currenId , setCurr]

  // console.log('FavProductCart items', item.products._i);

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // remove Product in Favorites (Protected Route):
  
 
//////////////////////////////////////////////////////////////////////
  function removeFromFavorite() {
    // console.log("productID ", productID)
    removeWishlistProduct();
    // console.log("+++++")
    getAllProductFav(); 
    // console.log("-------")
  }

  
////////////////////////////////////////////////////////////////////////
  const handleClick = () => {
    setproductID(item.products._id);
    removeFromFavorite(productID);
  }


  

////////////////////////////////////////////////////////////////////////
  // add to cart wishlist data one by one
  const handleAddtoCart = (productID) => {
    setproductID(productID);
    // console.log("fn is calling haldeaddtocart")
    addToCart(productID);
    
  }


  ////////////////////////////////////////////////////////////////////////////////////////////
  const addToCart = async (productID) => {
    // console.log(`addToCart function is colling,${productID}, ${quantity}, ${size}` )
    const token = localStorage.getItem("token");
    let myHeaders = new Headers();
    myHeaders.append("projectId", "rcetbaqftf5m");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = JSON.stringify({
      "quantity": quantity,
      "size": size
    });

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    try {
      // console.log("11")
      const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${productID}`,requestOptions);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      // console.log(result.data);
      if(result.status === "success"){
        setResultStatus(true);
        getCartItem();
        // toast(result.message);

      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
      throw error; // Rethrow the error for handling at a higher level if needed
    }
  };
  // affter adding inside the cart remove current produt inside the wishlist 
  // useEffect(() => {
  //   // removeWishlistProduct(productID);
  // }, [addToCart])

  
  return (
    <>

      {item?.products ? (
        <div key={index + item._id} className='cards  w-[276.5px] px-[0.8px]  m-2  text-sm'>
          <div className='w-auto relative'>
            <img className='w-[274.9px] h-[fit]  ' src={item.products.displayImage} />
            <button onClick={handleClick} className=' border-2 border-gray-700 bg-gray-300 rounded-full p-1 absolute  top-[10px] left-[240px] text-sm text-gray-700'>
              <IoMdClose />
            </button>
          </div>
          <div >
            <h5>{item.products.brand}</h5>
            <h5>{item.products.name}</h5>
            <p className='py-2'>₹<strong className='text-[20px]'>{item.products.price} </strong>
              <del>1299</del>
              <span className='text-green-400 ml-2 text-sm font-bold '>20% OFF</span>
            </p>
          </div>
          <button

            className='text-white bg-blue-900 font-bold w-full text-center flex justify-center py-2 border-2 border-gray-300 text-[12px]'>
            <span className='mr-2 pt-1'>
              <BsBagPlusFill />
            </span>

            {resultStatus ? (
              <span onClick={handleClick}><Link to='/cart'>Go to Bag</Link></span>
            ) : (
              <span onClick={() => handleAddtoCart(item.products._id)}>ADD TO BAG</span>
            )

            }

          </button>
        </div>
    )
    : 
    (<p>Add product in wishlist</p>)}
     

      <ToastContainer />
    </>
  )
}

export default FavProductCart;