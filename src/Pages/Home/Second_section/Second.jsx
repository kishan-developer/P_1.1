import React from 'react'

const data = [
    {
        "images": "https://images.bewakoof.com/uploads/grid/app/category-icon-for-Desktop--1--1697613232.jpg",
        "name": "New Arrivals",
    },
    {
        "images": "https://images.bewakoof.com/uploads/grid/app/category-icon-for-msite-Desktop-1697613234.jpg",
        "name" : "Bestsellers",
    },
    {
        "images": "https://images.bewakoof.com/uploads/grid/app/category-icon-for-Desktop-Winterwear-1698217139.jpg",
        "name" : "Winterwear",
    },
    {
        "images": "https://images.bewakoof.com/uploads/grid/app/category-icon-for-Desktop---1--1697613231.jpg",
        "name" : "Official Collaborations",
    },
    {
        "images": "https://images.bewakoof.com/uploads/grid/app/Thumbnails-Msite-Plus-size--2--1697714054.jpg",
        "name" : "Plus Size",
    },
    {
        "images": "https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Customization--1--1693212866.jpg",
        "name" : "Customization",
    },
    {
        "images": "https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Combos-1693212865.gif",
        "name" : "Combos",
    },
    {
        "images": "https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Vote-1693212866.jpg",
        "name" : "Vote for Designs",
    },

]


function Second() {

    return (
        <>
            {
                data.map((item, index) => (
                    <div key={index} className='w-32 h-[280px] m-auto  '>
                        <img className='h-[180px]' src={item.images} alt="img" />
                        <h2 className='h-[50px]'>{item.name}</h2>
                    </div>
                ))
            }
        </>
    )
}

export default Second;