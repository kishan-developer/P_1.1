import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useThemeContextValue } from '../../Utils/context/ThemeContext';

function Dp({ title, data }) {
    const [isActive, setIsActive] = useState(false);
    const { Data, setData } = useThemeContextValue();
    const [value1 , setValue1] = useState("");
    const [sub, setCategory] = useState('subCategory');



    // console.log("data ff",data);

    const handleClick = (item , ) => {
        if (item === "shirt" || item === "shorts" || item ==="jeans"){
            setCategory("subCategory");
        }
         if (item === "S" || item === "M" || item === "L" || item === "XL" || item === "XXL"){
            setCategory("size")
        }
        if (item === "Bewakoof®" || item === "OFFICIAL GARFIELD MERCHANDISE" || item === "OFFICIAL DISNEY MERCHANDISE" || item === "Urban Scottish" || item === "Rigo" || item === "Bushirt" || item === "Tistabene" || item ==="Old Grey" ){
            setCategory("brand")
        }
        // setValue1(item);
        // setCategory(subCategory);
        // console.log("item 1", item);
        // const items = item.toLowerCase();
        filterFunction(item);
    }


    const filterFunction = (item) => {
        // console.log("item  2", item)

        const FetchDropDown = async () => {
            // console.log("item  3", item)
            try {
                const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"${sub}":"${item}"}`, {
                    method: 'GET',
                    headers: {
                        "projectId": "rcetbaqftf5m",
                    },
                    body: JSON.stringify()
                }
                );
                const filter = await response.json();
                // setData(filter);
                // console.log("item  4", item)
                // console.log("category data", categoryData.data)
                // console.log('sidebar filter data', filter)
                if (filter.length !== 0) {
                    // setData(filter);
                }
            } catch (error) {
                console.log(error);
            }
        }
        // useEffect(() => {
        FetchDropDown();
        // }, [item])
    }


    return (
        <div>
            <div onClick={() => setIsActive(!isActive)} className='  parent flex items-center border-b-2 border-gray-300 justify-between py-4'>
                <div>{title}</div>
                <div>{isActive ? (<FaChevronUp />) : (<FaChevronDown />)} </div>
            </div>
            {isActive &&
                <div>
                    <ul>
                        {data.map((item, i) => 
                            <li key={i}
                                onClick={() => handleClick(item)}
                                className='px-2 py-2 ml-3 cursor-pointer hover:bg-gray-400'
                            >
                                {item}
                            </li>
                        
                        )}
                    </ul>
                </div>
            }
        </div>
    )
}

export default Dp;