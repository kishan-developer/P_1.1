import React from 'react'
import { useThemeContextValue } from '../../Utils/context/ThemeContext'
import { Link, useNavigate } from 'react-router-dom';

function Admin() {
  const navigate = useNavigate();

  const { setAuth, setModel, model, state, adminData, setAdminData } = useThemeContextValue();
  console.log("Model : ", model)
  console.log("state : ", state);

  function logout() {
    console.log('remove token in local storage');
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <>
      {model && (
        <div className='w-[200px] h-[fit]  absolute top-[80px] right-[200px] bg-white border-2 border-gray-400
          py-3
        '>
          <h2 className='bg-gray-200 text-semibold italic text-black cursor-pointer py-2 px-2'>
            <span className='font-bold'>Hii</span> <span className='font-semibold'>{adminData.email}</span></h2>
          <h2
            // onClick={()=> navigate(/admin)}
            className='hover:bg-gray-200 text-sm font-semibold text-black cursor-pointer py-2 px-2'
          > <Link to='/myaccount' className='w-full font-bold'>My Account</Link></h2>
          <h2 
            // onClick={()=> navigate(/fav)}
            className='hover:bg-gray-200 text-sm font-semibold text-black cursor-pointer py-2 px-2'
          ><Link to='/fav' className='w-full font-bold'>My WishList</Link></h2 >
        <h2
          // onClick={() => navigate(/cart)}
          className = 'hover:bg-gray-200 text-sm font-semibold text-black cursor-pointer py-2 px-2'
          > <Link to='/order' className='w-full font-bold'>My Orders </Link></h2 >
        <h2
          // onClick={() => navigate(/admin)}
          className = 'hover:bg-gray-200 text-sm font-semibold text-black cursor-pointer py-2 px-2'
        > My Wallet</h2 >

        <button
          className='hover:bg-gray-200 text-sm font-semibold text-black cursor-pointer py-2 px-2 w-full text-left'
          onClick={logout}>Logout</button>
        </div >
      )

        }
    </>

        )
}

        export default Admin;