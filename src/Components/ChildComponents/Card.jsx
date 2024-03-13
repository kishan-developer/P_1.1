import React from 'react';

function Card() {

  
  return (
    <div className="data py-5">
        {/* <button onClick={handleSubmit}>pass data from productcard to navbar and other files</button> */}
        <div className='flex flex-wrap px-5 '>
          {Data.map((item, index) => {

            const { gender, category, subCategory, price, name, displayImage, _id, brand } = item;

            return (
              <div key={_id} className='w-[30%] h-auto flex flex-col text-gray-700 bg-white shadow-md   m-2' >

                <img className='h-[70%]' src={displayImage} alt="img" />
                <span className='flex items-center justify-between px-3 pt-3'>
                  <h1 className='font-extrabold'>{brand}</h1>
                  <h1 className='cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </h1>
                </span>
                <h2>{gender}</h2>
                <div className='px-2 text-gray-500 text-sm'>
                  <p>{name}</p>
                  <h4>{brand}</h4>
                  <h2 className='text-lg font-extrabold text-black'>₹{price}</h2>
                  <p>{category}</p>
                  <p>{subCategory}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
  )
}

export default Card