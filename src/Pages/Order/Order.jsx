import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";

import OrderCard from './OrderCard';
import { useThemeContextValue } from '../../Utils/context/ThemeContext';


const Order = () => {
    
    const [items, setItems] = useState([]);
    
    const navigate = useNavigate();
    const { orderData, setOrderData, getOrderItem, OrderCartItem, setOrderCartItem, clearCartPage } = useThemeContextValue();

    const { orderId } = useParams();

    


    
    useEffect(() => {
        console.log("Order page")
        // clearCartPage()
        getOrderItem()  
        // clearCartPage() 
    }, []); // Empty dependency array to ensure it runs only once when the component mounts

    orderData.map(p=> {
        // console.log("..............",p.order.shipmentDetails.address);
        localStorage.setItem("Order User Address", JSON.stringify(p.order.shipmentDetails.address));
    })
    const address = localStorage.getItem("Order User Address")
    // console.log("gggggggggg", address);
   
   
    return (
        <div className='w-full  px-[10px] sm:px-[50px] lg:px-[100px] md:px-[80px] h-screen'>
            <nav className='h-[50px] w-[full] flex items-center'>
                <button onClick={() => navigate("/cart")} className='text-blue-300 font-bold flex gap-2'>
                    <HiOutlineChevronDoubleLeft size={25} />
                    <span className='text-sm lg:text-lg md:text-md'>BACK TO MY ACCOUNT</span>
                </button>
            </nav>
            <div>
                <h2 className='border-b-2 border-orange-700 py-5'>MY ORDERS</h2>
                {
                    orderData?.map((order,i )=> (
                        <div key={i}>
                            <OrderCard order={order} />
                        </div>
                       
                    ))
                }

                {/* {
                    OrderCartItem?.map(order => (
                        <OrderCard order={order}/>
                    ))
                } */}


            </div>
        </div>
    );
}

export default Order;
