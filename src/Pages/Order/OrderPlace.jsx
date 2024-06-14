import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import { useThemeContextValue } from '../../Utils/context/ThemeContext';

const OrderPlace = () => {
    const navigate = useNavigate()

    const searchQuery = useSearchParams()[0];
    const referenceNum = searchQuery.get("reference");
    const { productID, orderData, setOrderData, getOrderItem, userName, OrderCartItem, setOrderCartItem, cartItems, clearCartPage, getCartItem, formData, setFormData, quantity, setQuantity, size, setSize, handleOrgerPayment } = useThemeContextValue();

    useEffect(() => {
        // console.log("fun is callinng handleOrgerPayment order place page")
        handleOrgerPayment()
    }, [])

    const handleO = () => {
        handleOrgerPayment();
        navigate('/order')
    }




    return (
        <div className="flex items-center justify-center">
            <div className="w-fit flex flex-col items-center gap-6 mt-6">
                <img className="w-[350px]" src="https://images.bewakoof.com/web/ic-order-success-bag-anime.gif" alt="" />

                <h2 className="font-bold ">Thank you for shopping</h2>

                <p>reference nubmber : {referenceNum}</p>
                <p
                    onClick={() => handleO()} className="cursor-pointer bg-[#42A2A2]  px-3 rounded-lg py-3 transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-500 ...">Your Order has been placed</p>

                
            </div>

        </div>
    );
}

export default OrderPlace;
