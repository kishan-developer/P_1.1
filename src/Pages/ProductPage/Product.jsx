
import React, { useContext, useEffect, useState } from 'react'
import DropDown from '../../Components/ChildComponents/DropDown';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { useThemeContextValue } from '../../Utils/context/ThemeContext';
import DropBtn from '../../Components/ChildComponents/DropBtn';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Product.css';
import ProductReview from '../ProductReview/ProductReview';
import ProductCart from './productCart';

function Product() {

    const navigate = useNavigate();

    const location = useLocation();

    const { logging, Data, setData, setPage, _, dispatch, setproductID, loadMore, page } = useThemeContextValue();
    // console.log("Data",Data);

    // console.log("Product page state ");


    const SidebarCategory = async () => {
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={${size}:${M},${brand}:${CHIMPAAANZEE} `, {
                method: 'GET',
                headers: {
                    "projectId": "rcetbaqftf5m",
                },
                body: JSON.stringify()
            }
            );
            const result = await response.json();
            // console.log("sidebar filter data ", result);
            setData(result.data);
            setData((prevProducts) => [...prevProducts, ...result.data]); // Concatenate new data
        } catch (error) {
            console.log(error);
        }
    }
    // useEffect(() => {
    //     SidebarCategory();
    // }, [])

    const handleSortChange = (value) => {
        setSortedBy(value);
        // Handle sorting logic here based on the selected value
    };


    const handleFilterChange = (filterKey, value) => {
        setAppliedFilters({ ...appliedFilters, [filterKey]: value });
        // Handle filtering logic here based on the selected filters
    };

    // Apply sorting and filtering to the products list
    const sortedAndFilteredProducts = () => {
        // Implement sorting and filtering logic here based on sortedBy and appliedFilters
        // Example:
        // const sortedProducts = sortProducts(products, sortedBy);
        // const filteredProducts = filterProducts(sortedProducts, appliedFilters);
        // return filteredProducts;
    };

    const displayProducts = sortedAndFilteredProducts();


    // path name logic here
    const path = location.pathname;
    const firstChar = path.slice(1, 2).toUpperCase();
    const allChar = path.slice(2, path.length);
    const name = firstChar + allChar;


    return (
        <>
            <div id="main" className='text-black'>
                <h2 className='w-full flex items-start py-2 px-5 text-gray-900 lg:text-2xl md:text-md text-sm lg:pl-[200px] pt-5'>
                    <button className='w-full text-start text-sm'>
                        {/* <DropBtn /> */}
                        Home /  {name + ' Clothing'}
                    </button>
                    
                    
                </h2>

                <h2 className='w-[70%] block py-2 px-5  text-gray-900 font-bold lg:text-2xl md:text-md text-md lg:pl-[200px] pt-12 '>
                    {name + ' Clothing'}
                    <span> {`( ${Data.length} )`}</span>
                    <div className="h-[3px] bg-yellow-600 w-[130px] mb-[42px]"></div>
                </h2>
                 

                <div id="childs" className=' '>
                    <div className='sidebar_product_type mt-10'>
                        <Sidebar />
                    </div>

                    <div id="product_cards_section" className=''>
                        <div id="sort_by" className='w-full flex items-end justify-end py-3 pr-5 text-sm h-10 leading-9'>
                            <h2 className='text-gray-500 font-600 pr-3'>SORT BY</h2>
                            <DropDown />
                        </div>
                        <div className="product grid lg:grid-cols-3 lg:gap-2  w-full ">
                           
                            { logging ?  (<h1 className='bg-red-500 absolute top-[350px] left-[600px] w-[400px] flex items-center justify-center font-bold text-5xl'> Please Wait Data is Lodding </h1>) : ""}
                         
                            {Data.map((product, index) => (
                                
                                <ProductCart
                                    // index={index}
                                    key={index}
                                    product={product}

                                />
                            ))}
                        </div>
                        <div className='bg-gray-800 font-semibold text-white w-fit py-2  mv-2 px-3 fixed bottom-10 right-[20px]'>
                            <span>{page} </span>
                            <button onClick={loadMore}>
                                Next Page
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product