import React from 'react'
import { useThemeContextValue } from '../../../Utils/context/ThemeContext';

function CheckoutAddress() {

  const { setmodelAddress, addresssMode } = useThemeContextValue();


  return (
    <>
      {
        addresssMode && (
          <div onClick={()=> setmodelAddress(false) } className='w-full flex justify-center'>
            <form className='bg-gray-300 w-[600px]  h-[500px]'>
              form
            </form>
          </div>
        )
      } 
    </>
  )
}

export default CheckoutAddress