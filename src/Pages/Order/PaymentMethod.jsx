import React from 'react'
import GooglePay from './GooglePay'
import axios from 'axios';

function PaymentMethod({ amount, handleOrgerPayment }) {

  return (
    <>
      <div className="flex justify-between items-center font-bold border-2 border-black">
        <span className="px-2">Cash On Dilivery</span>
        <button onClick={handleOrgerPayment} className="font-semibold text-lg px-[2rem] py-3 bg-[#42A2A2] cursor-pointer">
          PAY
        </button>
      </div>

      <div className="flex justify-between items-center pt-2 font-bold border-2 border-black mt-6">
        <span className="px-2">Google Pay</span>
        <GooglePay />
      </div>
    </>
  )
}

export default PaymentMethod;