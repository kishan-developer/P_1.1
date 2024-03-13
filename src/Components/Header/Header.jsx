import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {



  return (
    <div className='header lg:w-full h-6  text-xs  pl-10 bg-gray-100 
   '>
        <ul className='w-6/12 flex items-center justify-center py-5 '> 
           
            <li className='px-2'><Link to="/offer">Offers</Link></li>
            <li className='px-2'><Link to="/fanbook">Fanbook</Link></li>
            <li className='px-2'><Link to="/downloadapp">Download App</Link></li>
            <li className='px-2'><Link to="/membership">Membership</Link></li>
            
        </ul>
        <ul className='w-4/12 flex items-center justify-center py-5'>
            {/*  */}
            <li className='px-2'><Link to="/contact">Contact Us</Link></li>
            <li className='px-2'><Link to="/trackOrder">Track Order</Link></li>  
        </ul>
    </div>
  )
}

export default Header