import React, { useState } from 'react';
import { useThemeContextValue } from '../../Utils/context/ThemeContext';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


// import Drop from './Drop';
// import db from '../Sidebar/db.json'
// import subCategory from '../Sidebar/Child/SubCategory';
import Size from '../Sidebar/Child/Size'
import Brand from '../Sidebar/Child/Brand';
import Color from '../Sidebar/Child/Color';
import Gender from '../Sidebar/Child/Gender';
import SubCategory from '../Sidebar/Child/SubCategory';

const filterOptions = {
    subCategory: ["shirt", "shorts", "jeans"],
    size: ["S", "M", "L", "XL", "XXL"],
    brand: [
        "Bewakoof®",
        "OFFICIAL GARFIELD MERCHANDISE",
        "OFFICIAL DISNEY MERCHANDISE",
        "Urban Scottish",
        "Rigo",
        "Bushirt",
        "Old Grey"
    ],
    color: ["BLACK", "BLUE", "GREEN", "WHITE", "GREY", "BROWN", "RED", "YELLOW"],
    gender: ["Men", "Women"]
};


function Sidebar() {
    const [isActive, setIsActive] = useState(false);
    const [sizes , setSizes] = useState(false);
    const { setCategory, Data, setData } = useThemeContextValue();

    return (
        <>
            <div className='text-black mt-5 sticky top-5 '>
                <div id="product_category" className=''>
                    <h1 className='text-sm text-gray-500 font-bold py-3 text-left '>FILTERS </h1>
                    <SubCategory title="subCategory" data={filterOptions.subCategory}/>
                    <Size title="size" data={filterOptions.size} />
                    <Brand title="brand" data={filterOptions.brand} />
                    <Color title="color" data={filterOptions.color} />
                    <Gender title="gender" data={filterOptions.gender} />
                </div>
            </div>
        </>
    )
}

export default Sidebar;