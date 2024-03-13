import React from 'react'
import { useThemeContextValue } from '../../Utils/context/ThemeContext';
import { IoMdClose } from "react-icons/io";
import { BsBagPlusFill } from "react-icons/bs";

function FavProductCart({ item, index, key }) {
  const { state, dispatch } = useThemeContextValue();

  // console.log('FavProductCart items');


  function removeFromFavorite() {
    console.log("remove from fav");

    dispatch({
      type: 'REMOVE_FROM_FAV',
      payload: {
        _id: item._id,
      }
    });
  }

  function addToCart() {
    alert("add to cart");

    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        _id: item._id,
        brand: item.brand,
        displayImage: item.displayImage,
        name: item.name,
        price: item.price,
        size: item.size
      }
    })

    removeFromFavorite();
  }


  return (
    <>

      <div key={index} className='cards  w-[276.5px] px-[0.8px]  m-2  text-sm'>
        <div>
          <img className='w-[274.9px] h-[330px]' src={item.displayImage} />
          <button onClick={removeFromFavorite} className=' border-2 border-gray-700 bg-gray-300 rounded-full p-1 relative bottom-[330px] left-[240px] text-sm text-gray-700'>
            <IoMdClose />
          </button>
        </div>
        <div >
          <h5>{item.brand}</h5>
          <h5>{item.name}</h5>
          <p className='py-2'>₹<strong className='text-[20px]'>{item.price} </strong>
            <del>1299</del>
            <span className='text-green-400 ml-2 text-sm font-bold '>20% OFF</span>
          </p>
        </div>
        <button
          onClick={addToCart}
          className='text-blue-500 w-full text-center flex justify-center py-2 border-2 border-gray-300 text-[12px]'>
          <span className='mr-2 pt-1'>
            <BsBagPlusFill />
          </span>
          <span>ADD TO BAG</span>
        </button>
      </div>


      {/* <div key={index} className='cards w-[25%]'>
        <img src={item.displayImage} />
        <h5>{item.brand}</h5>
        <h5>Men's Grey Bright Spark Graphic Printed..</h5>
        <p>₹649 <del>1299</del> <span className='text-green-400'>50% OFF</span></p>
        <button className='text-blue-500 w-full text-center flex m-auto'>ADD TO BAG</button>
      </div> */}
    </>
  )
}

export default FavProductCart;