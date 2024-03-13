import React from 'react'
import { RiRefund2Fill } from "react-icons/ri";
import { HiCurrencyRupee } from "react-icons/hi2";

function SecondFooter() {
    return (
        <>
            <div className="w-full mt-5 lg:grid lg:grid-cols-4 lg:gap-5 text-sm md:grid md:grid-cols-3 grid grid-cols-1">
                <div>

                    <ul className='text-white text-sm pt-3'>
                        <li className='flex mb-4'>
                            <RiRefund2Fill />
                            <span className='ml-3'>15 Days return policy</span>
                        </li>

                        <li className='flex mb-4'>
                            <HiCurrencyRupee />
                            <span className='ml-3'>Cash on delivery</span>
                        </li>

                    </ul>
                </div>

                <div>
                    <h2 className='text-yellow-500 py-2'>Download The App</h2>
                    <ul className='text-white text-sm pt-3'>
                        <li className='flex w-fit'>
                            <img className='w-[110px] ' src="https://images.bewakoof.com/web/app_android_v1.png" alt="" />
                            <img className='w-[110px] ' src="https://images.bewakoof.com/web/app_ios_v1.png" alt="" />
                        </li>

                    </ul>
                </div>


                <div>
                    <h2 className='text-yellow-500 py-2'>100% SECURE PAYMENT</h2>
                    <ul className='text-white text-sm pt-3'>
                        <li className='flex w-fit'>
                            <img className='' src="https://images.bewakoof.com/web/secure-payments-image.png" alt="" />

                        </li>

                    </ul>
                </div>




            </div>
        </>
    )
}

export default SecondFooter