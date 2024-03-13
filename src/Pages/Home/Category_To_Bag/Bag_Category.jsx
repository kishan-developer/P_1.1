
import React from "react";

const data = [
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-sshirts-1686063036.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-boxers-1685086219.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box--m-pyjama-1685086220.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-women-cords-1686063032.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-women-pjs-1686063033.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-women-shorts-1686063034.jpg",
];

const Bag_Category = () => {

    return (
        < >
            {
                data.map((image, index) => (

                    <img className='lg:max-w-[255.19px] md:mx-w-[176px] lg:max-h-[372.14px] md:min-h-[257px]' key={index} src={image} alt="img" />

                ))
            }
        </>
    )
}

export default Bag_Category;