import React, { useState } from 'react';
import { useThemeContextValue } from '../../Utils/context/ThemeContext';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// import Drop from './Drop';
import db from '../Sidebar/db.json'
import Dp from './Dp';

function Sidebar() {
    const [isActive, setIsActive] = useState(false);
    const [sizes , setSizes] = useState(false);
    const { setCategory, Data, setData } = useThemeContextValue();
    const handleClick = () => {
        // console.log("Dropdown event", event.target.value);
    }
    // console.log("db sidebar page render category data", db[0].category);

    return (
        <>
            <div className='text-black mt-5 sticky top-5 '>
                <div id="product_category" className=''>
                    <h1 className='text-sm text-gray-500 font-bold py-3 text-left '>FILTERS </h1>
                    <Dp title="Category" data ={db[0].subcategory}/>
                    <Dp title="Sizes" data={db[1].sizes} />
                    <Dp title="Brands" data={db[2].Brand} />
                    <Dp title="Color" data={db[3].color} />
                    <Dp title="Gender" data={db[4].gender} />
                </div>
            </div>
        </>
    )
}

export default Sidebar;