import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useThemeContextValue } from '../../../Utils/context/ThemeContext';

function Color({ data, title }) {
    const [isActive, setIsActive] = useState(false);
    const { Data, setData } = useThemeContextValue();
    const [value1, setValue1] = useState("");
    const [sibeBarSata, setSidebarData] = useState(data);

    // console.log("data Color.........", data);

    const handleClick = (item, title) => {
        // console.log("title", title);
        filterFunction(item, title);
    }

    const filterFunction = (item, title) => {
        // console.log("item  2", item)

        const FetchDropDown = async () => {
            // console.log("item  3", item)
            try {
                const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"${title}":"${item}"}`, {
                    method: 'GET',
                    headers: {
                        "projectId": "rcetbaqftf5m",
                    },
                    body: JSON.stringify()
                }
                );
                const filter = await response.json();
                // console.log("sidebar filter data : ", filter.data);
                if (filter.length !== 0) {
                    setData(filter.data);
                }
            } catch (error) {
                console.log(error);
            }
        }

        FetchDropDown();

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
                                onClick={() => handleClick(item, title)}
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

export default Color;