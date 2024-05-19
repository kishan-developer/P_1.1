import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useThemeContextValue } from '../../Utils/context/ThemeContext';
import FavProductCart from './FavProductCard';
// import useDeleteProduct from '../../Utils/API/useDeleteProduct';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Fav() {
  const { favData, setFavData, getAllProductFav, favlength, setFavlength } = useThemeContextValue();
  const location = useLocation();
  const [Favproduct, setFavProduct] = useState([]);

  const navigate = useNavigate();

  useEffect(()=> {
    // console.log("fn is calling 444444444")
    getAllProductFav()
  },[]);
  // console.log("favdata",favData);

  function clear(){
    // console.log("func is calling")
    clearWishlist();
    getAllProductFav(); 
  }

  const clearWishlist = async() => {
    const token = localStorage.getItem("token");
    const myHeaders = new Headers();
    myHeaders.append("projectId", "rcetbaqftf5m");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = "";

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    try {
      const response = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/wishlist",requestOptions);
      const result = await response.json();

      setFavlength(result.results);
      if(result.status ==="success"){
        toast(result.message);
        getAllProductFav();
      }
      
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  




  return (
    <div className='mt-10 w-full flex flex-col items-center justify-center px-[15px] '>
      <nav className='h-15 xl:w-[1170px] lg:w-[fit] md:w-[fit] sm:w-[fit] px-10 py-2 bg-gray-300 flex items-start text-center gap-5 font-bold mb-5'>
        <button onClick={clear} className='cursor-pointer border-2 border-black py-1 px-6 rounded-xl hover:bg-red-400 hover:text-yellow-500'>Clear Wishlist</button>
        
      </nav>
      <div className='xl:w-[1170px] w-fit flex items-center flex-wrap '>
        {favData?.data?.items?.map((item, index) => (
          <div key={item._id}>
            <FavProductCart item={item} index={index} />
          </div>
          
          // console.log(item)
        ))}
      </div>
      <ToastContainer />
    </div>
  )
}

export default Fav;