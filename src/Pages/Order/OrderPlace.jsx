import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import { useThemeContextValue } from '../../Utils/context/ThemeContext';

const OrderPlace = () => {
    const navigate = useNavigate()

    const searchQuery = useSearchParams()[0];
    const referenceNum = searchQuery.get("reference");
    const { productID, orderData, setOrderData, getOrderItem, userName, OrderCartItem, setOrderCartItem, cartItems, clearCartPage, getCartItem, formData, setFormData, quantity, setQuantity, size, setSize, handleOrgerPayment } = useThemeContextValue();

    //handleOrgerPayment 
    // const handleOrgerPayment = () => {
    //     // console.log("handlepauymet : formData.street ", formData.street)

    //         handleSubmit();
    //         clearCartPage()
    //         getCartItem()
    //         alert(`User paid successfully: ${totalValue}`);
    //         navigate('/paymentsuccess')
    // }

    // const handleSubmit = async () => {
    //     // console.log("buy api calling")
    //     // event.preventDefault();
    //     const pID = localStorage.getItem("payment_page_product_id")
    //     const qut = localStorage.getItem("PaymentPage_Product_quantity");
    //     const token = localStorage.getItem("token"); // Replace with your JWT token

    //     const url = "https://academics.newtonschool.co/api/v1/ecommerce/order";

    //     const myHeaders = new Headers();
    //     myHeaders.append("projectId", "rcetbaqftf5m");
    //     myHeaders.append("Content-Type", "application/json");
    //     myHeaders.append("Authorization", `Bearer ${token}`);

    //     const raw = JSON.stringify({
    //         "productId": pID,
    //         "quantity": qut,
    //         "addressType": "HOME",
    //         "address": {
    //             "street": useDetails.street,
    //             "city": useDetails.city,
    //             "state": useDetails.state,
    //             "country": useDetails.country,
    //             "zipCode": useDetails.zipCode
    //         }
    //     });

    //     const requestOptions = {
    //         method: "POST",
    //         headers: myHeaders,
    //         body: raw,
    //         redirect: "follow"
    //     };
    //     try {
    //         const response = await fetch(url, requestOptions);
    //         const result = await response.json();
    //         console.log("buy now api", result); // Handle response data as neede
    //     } catch (error) {
    //         console.error('Error:', error.message);
    //     }
    // }

    useEffect(() => {
        console.log("fun is callinng handleOrgerPayment order place page")
        // handleOrgerPayment()
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

                <button
                    className="bg-gray-500 px-6 py-2"
                   
                >
                    Order
                </button>
            </div>

        </div>
    );
}

export default OrderPlace;
