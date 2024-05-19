import React, { useState, useEffect } from 'react'
import Review from './Review';
import StorePage from './StorePage';

import Rating from './Rating';

function StoreR({ item,key }) {
  const [count , setCount] = useState(0);
  
  const [userReview, setUserReview] = useState([]);
  // const [allReview, setAllReview] = useState([review]);

  // const [userReview, setUserReview] = useState([]);
  // const { product, ratings, text, user, _id } = item;
  // console.log("userReview storeRPAge", userReview);
  // console.log("item",item)

  // console.log("all review storeR component ", item._id);


  // console.log("store page  ", userReview.data.brand);






  return (
    <div className='bg-gray-300 py-3 my-3 px-5'>

      
      
      
      {/* <p className='my-2 text-sm font-semibold'>{item.product}</p> */}
      <div className='flex gap-2 '>
        <Rating text={item.text}  ratings={item.ratings} productIds={item.product} />
      </div>
    </div>
  )
}

export default StoreR;