import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useThemeContextValue } from '../../Utils/context/ThemeContext';

const NestedChild = ({ pp, orderNo }) => {
    const [cardD, setCardD] = useState([pp.product])
    const navigate = useNavigate();

    const { paymentData, setPaymentData } = useThemeContextValue();
    // console.log("cardD", cardD);
    useEffect(() => {
        setPaymentData(pp.product);
    }, [])

    // localStorage.setItem("pp", JSON.stringify(pp));

    const handleOrderId = (orderNo) => {
        navigate(`/order/${orderNo}`)
    }




    return (
        <>
            {
                cardD.map(d => (
                    <div key={d._id} className=' h-[fit] border-2 border-gay-400 rounded-lg mt-5 cursor-pointer'>
                        <h2 className='my-2 ml-3'><span className='font-bold my-2'>ORDER NO : #</span>{orderNo}</h2>
                        <div onClick={() => handleOrderId(orderNo)} key={d._id} className='flex'>
                            <div className='w-[200px] p-3'>
                                <img className='rounded-lg' src={d.displayImage} alt="" />
                            </div>
                            <div className='w-full pt-3  '>
                                <p className='mb-2 text-md'>{d.name}</p>

                                <p className='w-fit px-5  text-black text-md bg-green-300 rounded-md'>
                                    <span className='text-md'>₹ {d.price}</span>
                                    <span className='ml-3 text-[12px]'>₹<del>1499</del></span>
                                </p>
                                <p className='flex gap-2 mt-2'>
                                    {Array.from({ length: Math.floor(d.ratings) }).map((_, i) => (
                                        <FaStar key={i} size={25} className='text-yellow-500 cursor-pointer' />
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default NestedChild;
