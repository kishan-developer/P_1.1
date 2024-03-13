import React, { useRef } from 'react'
import { useThemeContextValue } from '../../../Utils/context/ThemeContext';

function CheckoutProduct({ item, key }) {
    const ref = useRef(null);
    const { state, dispatch } = useThemeContextValue();

    // console.log("checkout item size ", item.size)

    // const name = item.name.slice(0, 18);
    const savePrice = 1000 - item.price;

    function removeFromCart() {

        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: {
                _id: item._id,
            }
        });
    }

    function addToFav() {
        setTimeout(() => {
            const button = ref.current; // corresponding DOM node
            button.className = "active";
        }, [])
        // dispatch add to cart action
        // console.log("call the add to fav");
        dispatch({
            type: 'ADD_TO_FAV',
            payload: {
                _id: item._id,
                brand: item.brand,
                displayImage: item.displayImage,
                name: item.name,
                price: item.price,

            }
        });

        // here call this function because i want to removedata from cart after adding to fav bag
        removeFromCart();
    }



    return (
        <div className='h-[fit] lg:max-w-[665px]  lg:min-w-[435px] px-[15px] border-2 border-gray-300 rounded-lg mb-5'>
            <div className=' px-[5px] py-[20px] flex gap-2 items-center justify-between text-[10px] lg:text-[14px] md:text-[13px]'>
                <div className=' '>
                    <h2 className='pb-[8px]'>{item.name}</h2>
                    <h2 className='pb-[8px] '>
                        <span className='font-bold text-black text-lg'>₹{item.price} </span>
                        <del>₹899</del>
                    </h2>
                    <h2 className='text-[16px]  h-[27px] pb-[10px] text-[#1D8802] font-bold'>{`You Save ₹${savePrice}!`}</h2>
                    <div className='w-full flex gap-3     mt-2 '>
                        <button className='w-[full] h-[40px] border-2 border-gray-300  '>
                            size : <select className=''>
                                {
                                    item.size.map((v, i) => (
                                        <option className='w-[20px]' key={i} >{v}</option>
                                    ))
                                }

                            </select>
                        </button>
                        <button className='w-[auto] h-[40px] border-2 border-gray-300 '>
                            Qty : <select>
                                <option className='w-[29px]' >1</option>
                                <option className='w-[29px]' >2</option>
                                <option className='w-[29px]' >3</option>
                                <option className='w-[29px]' >4</option>
                                <option className='w-[29px]' >5</option>
                            </select>
                        </button>
                    </div>
                </div>
                {/* <div className='w-[320px]'>

                </div> */}
                <div className='w-[104px] h-[130px] rounded-lg'>
                    <img className='w-full rounded-lg' src={item.displayImage} alt="" />
                </div>
            </div>
            <div className=' lg:max-h-[50px] lg:min-h-[50px] flex items-center text-gray-600  border-t-2 border-gray-300 sm:m-0'>
                <button
                    onClick={removeFromCart}
                    className='h-50px w-[225px] mt-0 py-[5px] border-r-2 border-gray-400 cursor-pointer'
                >
                    Remove
                </button>

                <button
                    onClick={addToFav}
                    className='h-50px w-[425px] py-[2px] cursor-pointer '
                >
                    Move to Wishlist
                </button>
            </div>
        </div>
    )
}

export default CheckoutProduct;