import React from 'react';
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import { useThemeContextValue } from '../../Utils/context/ThemeContext';

const MyAccount = () => {
    const { adminData, userName, userEmail } = useThemeContextValue();

    // const userId = localStorage.getItem("account");
    // console.log("my adminData ", adminData.email);
    return (
        <div className='w-full  px-[10px] sm:px-[50px] lg:px-[100px] md:px-[80px] h-screen'>
            <nav className='h-[50px] w-[full] flex items-center'>
                <button onClick={() => navigate("/admin")} className='text-blue-300 font-bold flex gap-2'>
                    <HiOutlineChevronDoubleLeft size={25} />
                    <span className='text-sm lg:text-lg md:text-md'>BACK TO  ADMIN</span>
                </button>
            </nav>
            <div className='text-sm'>
                <h2 className='border-b-2 border-orange-700 py-5 font-bold text-sm'>My Account</h2>
                <h2 className='mt-10  font-semibold text-blue-300'>
                    <span className='font-bold mr-3'>User Name  : </span>
                    <span>{userName}</span>
                </h2>
                <h2 className='mt-2 font-semibold text-blue-300'>
                    <span className='font-bold mr-3'>User Email : </span>
                    <span>{userEmail}</span>
                </h2>
            </div>
        </div>
    );
}

export default MyAccount;
