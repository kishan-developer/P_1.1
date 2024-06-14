import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import SecondFooter from './SecondFooter';
import ThirdFooter from './ThirdFooter';
import BottomFooter from './BottomFooter';
import '../Footer/footer.css';

function Footer() {
  return (
    <div className='responsive bg-black text-white px-40 sm:px-5 py-16'>
      <h1 className='text-3xl  font-bold'>Bewakoof </h1>
      <div className="w-full lg:grid lg:grid-cols-4 lg:gap-5 text-sm md:grid md:grid-cols-3 grid grid-cols-1 ">
        <div>
          <h2 className='text-yellow-500 py-2'>CUSTOMER SERVICE</h2>
          <ul className='text-white text-sm pt-3'>
            <li>Contact Us</li>
            <li>Track Order</li>
            <li>Return Order</li>
            <li>Cancel Order</li>
          </ul>
        </div>

        <div>
          <h2 className='text-yellow-500 py-2'>COMPANY</h2>
          <ul className='text-white text-sm pt-3'>
            <li>About Us</li>
            <li>We're Hiring</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Blog</li>
          </ul>
        </div>


        <div>
          <h2 className='text-yellow-500 py-2'>CUSTOMER SERVICE</h2>
          <ul className='text-white text-sm pt-3'>
            <li className='flex gap-1 py-2' > <FaFacebook size={20} />3.5M People Like this</li>

            <li className='flex gap-1 py-2'> <RiInstagramFill size={20} />229K Followers</li>
            <li className='flex gap-4 py-2'>
              <FaTwitter size={20} /> <FaPinterest size={20} /> <FaSnapchatGhost size={20} /> <FaApple size={20} />
            </li>

          </ul>
        </div>


        <div>
          <h2 className='flex  text-yellow-500 py-2 w-auto'>KEEP UP TO DATE</h2>
          <input className=' outline-none  border-b-2 border-yellow-300  bg-transparent ' type="email" placeholder='Enter Email Id' />
          <button className='bg-yellow-300 text-black border-b-2 border-yellow-300 outline-none px-3'>SUBSCRIBE</button>
        </div>

      </div>
      <SecondFooter/>
      <br />
      <hr className='text-white h-2' />
      <ThirdFooter/>
      <br />
      <br />
      <BottomFooter/>
    </div>
  )
}

export default Footer