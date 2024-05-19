import React, { useState, useEffect } from 'react'

function StorePage({userR}) {

    
   
    // console.log("userReview 1", userReview);
  return (
    <div className='bg-yellow-500 my-5'>
          <h2>StorePage</h2>
          {/* <p>{userReview.brand}</p>
          {/* <p>{userReview.createdAt}</p>
          <p>{userReview.gender}</p> */}
          {/* <img src={userReview.displayImage} alt="" />  */}
          <p>{userR.price}</p>
          <p>{userR.name}</p>
    </div>
  )
}

export default StorePage;