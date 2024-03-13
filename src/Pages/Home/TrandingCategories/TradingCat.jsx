import React from 'react'

const data = [
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-printed-tees-m-1685445850.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-oversized-tees-m-1685086219.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-shorts-1686063035.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-joggers-m-1684997505.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-vests-1686063036.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-fullsleeve-1686063034.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-printed-tees-w-1685445851.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-Oversized-tshirts-Women-1682055634.png",
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-fashion-tops-1686305660.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-Joggers-Women-1682055633.png",
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-WOMEN-Dresses-1681725004.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-WOMEN-BoyfriendTeess-1681730084.jpg"
]

function TradingCat() {
  return (
    
   < >
    {
        data.map((image , index)=> (
            
            <img className='lg:max-w-[255.19px] md:mx-w-[176px] lg:max-h-[372.14px] md:min-h-[257px]'  key={index} src={image} alt="img" />
           
        ))
    }
   </>
  )
}

export default TradingCat;