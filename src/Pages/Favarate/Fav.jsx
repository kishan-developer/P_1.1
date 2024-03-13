import React from 'react'
import { useLocation } from 'react-router-dom'
import { useThemeContextValue } from '../../Utils/context/ThemeContext';
import FavProductCart from './FavProductCard';

function Fav() {
  const {state , dispatch} = useThemeContextValue();
  const location = useLocation();
  // navigate Fav page
  const NavigateFavPage = () => {
    navigate("/fav", { state: { id: id} })
  }
  return (
    <div className='mt-10 w-full flex flex-col items-center justify-center px-[15px] '>
      <nav className='h-15 w-[1170px] px-10 py-2 bg-gray-300 flex items-start text-center gap-5 font-bold mb-5'>
        <button className='cursor-pointer border-2 border-black py-1 px-6 rounded-xl hover:bg-red-400 hover:text-yellow-500'>All</button>
        <button className='cursor-pointer border-2 border-black py-1 px-6 rounded-xl hover:bg-red-400 hover:text-yellow-500'>T-Shirt</button>
        <button className='cursor-pointer border-2 border-black py-1 px-6 rounded-xl hover:bg-red-400 hover:text-yellow-500'>Shirt</button>
      </nav>
      <div className=' w-[1170px] flex items-center flex-wrap '>
        { state.fav.map((item , index) => (
          <FavProductCart item={item} index={index} key={item._id}/>
          // console.log(item)
        ))}
      </div>
    </div>
  )
}

export default Fav;