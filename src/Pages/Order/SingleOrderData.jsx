import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";

const SingleOrderData = () => {

    const [signleOrderData , setsignleOrderData] = useState([])
    const [product, setproduct ]= useState([]);
    const [total , setTotal] = useState(0);
    const navigate = useNavigate();

    const { orderId } = useParams();
    
    // console.log("getone order ", orderId)
    const getSingleOrder = async () => {
        // console.log("functionis calling ........")
        const token = localStorage.getItem("token")
        const myHeaders = new Headers();
        myHeaders.append("projectId", "rcetbaqftf5m");
        myHeaders.append("Authorization", `Bearer ${token}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };
        
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/order/${orderId}`, requestOptions);
            const result = await response.json();
            setsignleOrderData(result.data);
            setproduct(result.data.items)
            setTotal(result.data.totalPrice);
            
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        getSingleOrder()
    }, []); // Empty dependency array to ensure it runs only once when the component mounts

    return (
        <div className='p-5' >
            <nav className='h-[50px] w-[full] flex items-center'>
                <button onClick={() => navigate("/order")} className='text-blue-300 font-bold flex gap-2'>
                    <HiOutlineChevronDoubleLeft size={25} />
                    <span className='text-sm lg:text-lg md:text-md'>BACK TO Order Page</span>
                </button>
            </nav>
           <h2 className='bg-gray-400 w-fit mb-3 px-3 rounded-lg cursor-pointer text-md py-2'>Order No : {signleOrderData._id}</h2>
           <h2 className=' w-fit bg-green-300 px-3 rounded-lg cursor-pointer text-md py-2'>Status : {signleOrderData.status}</h2>
            <div className='flex lg:flex-row md:flex-row flex-col p-10 gap-2'>
                <div className=' xl:w-1/2 lg:w-1/2 md:w-1/2 w-full border-2 border-gray-500 rounded-lg'>
                    {
                        product?.map(p => (
                            <div key={p.product._id} className='flex flex-col '>
                                <div className='w-full flex items-center justify-center py-5'>
                                    <img className='w-[150px] rounded-lg' src={p.product.displayImage} alt="" />
                                </div>
                                <div className='flex flex-col px-4  gap-1'>
                                    <p className='font-semibold'>{p.product.name}</p>
                                    <p className='gap-2 '> <span className='font-bold '>Price : </span>
                                        <span className='text-green-500 font-semibold'>₹{p.product.price}</span>
                                    </p>
                                    <p className='gap-2'> <span className='font-bold '>Size : </span>{p.size}</p>
                                    <p className='gap-2'> <span className='font-bold '>Quantity : </span>{p.quantity}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='flex flex-col gap-2 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full'>
                   <div className='w-full h-1/2  border-2 border-gray-500 p-5 rounded-lg'>
                        <h2 className='font-bold my-2 bg-gray-400 pl-3 rounded-md py-2 cursor-pointer'>SHIPING DETAILS</h2>
                        <p>Address : {signleOrderData.shipmentDetails?.address?.street}</p>
                        <p>state : {signleOrderData.shipmentDetails?.address?.state}</p>
                        <p>Country : {signleOrderData.shipmentDetails?.address?.country}</p>
                        
                    </div>
                    <div className='border-2 border-gray-500 p-5 rounded-lg'>
                        <h2 className='font-bold my-2 bg-gray-400 pl-3 rounded-md py-2 cursor-pointer'>PAYMENT SUMMARY</h2>
                        <p className='flex items-center justify-between'>
                            <span className='font-semibold'>Cart Total : </span> 
                            <span className='text-green-600'>₹{signleOrderData.totalPrice}</span>
                        </p>
                        <p className='flex items-center justify-between'>
                            <span className='font-semibold'>Delivery Fee : </span> 
                            <span className='text-green-600'>₹0</span>
                        </p>
                        <p className='flex items-center justify-between'>
                            <span className='font-semibold'>Order Total :</span>  
                            <span className='text-green-600'>₹{signleOrderData.totalPrice}</span>
                        </p>
                        <p className='w-full h-1 bg-gray-800 my-3'></p>
                        <p className='flex items-center justify-between'>
                            <span className='font-semobold'>Amount To Be Paid</span> 
                            <span className='text-green-600'>₹{signleOrderData.totalPrice}</span>
                        </p>
                   </div>
                </div>
                
            </div>

           
        </div>
    );
}

export default SingleOrderData;
