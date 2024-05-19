import React, { useState , useEffect} from 'react'

function Review() {
//    console.log("review page ",review);

    

    // const productReview = () => {
    //     alert("product review")
    // }

    const brandReview = () => {
        alert("brand review")
    }

    return (
        <>
            <div className='flex w-full h-[fit] justify-evenly text-sm font-bold gap-5 my-5 border-b-2 border-yellow-200'>
                <button  className='hover:border-b-4 border-yellow-500 py-5 '>PRODUCT REVIEWS </button>
                <button onClick={brandReview} className='hover:border-b-4 border-yellow-500 py-5'>BRAND REVIEW</button>
            </div>
        </>
    )
}

export default Review