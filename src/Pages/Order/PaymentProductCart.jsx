import React from 'react';
import { useThemeContextValue } from '../../Utils/context/ThemeContext';

const PaymentProductCart = ({ item, OrderCartItem }) => {
    const { setproductID, productID, quantity, setQuantity, size, setSize } = useThemeContextValue();
    console.log("payet cart ", item._id)

    // localStorage.setItem("payment_page_product_id",item.product._id)
    localStorage.setItem("PaymentPage_Product_quantity", item.quantity);
    // setproductID(item._id);
    setQuantity(item._quantity);
    setSize(item.size)

    const creatidDate = OrderCartItem.updatedAt;

    // Create a Date object for April 4th, 2024
    const currentDate = new Date(creatidDate);

    // Add 7 days to the current date
    const sevenDaysLater = new Date(currentDate);
    sevenDaysLater.setDate(currentDate.getDate() + 7);

    // Format the date as YYYY-MM-DD
    const formattedDate = `${sevenDaysLater.getFullYear()}-${String(sevenDaysLater.getMonth() + 1).padStart(2, '0')}-${String(sevenDaysLater.getDate()).padStart(2, '0')}`;

    // console.log("Date after 7 days:", formattedDate);
    localStorage.setItem("payment_page_product_id",item.product._id)
    console.log("item.product._id",item.product._id)

    return (
        <>
            <div key={item.product._id} className=' border-b-[0.8px] border-black '>
                <p>#{item.product._id}</p>
                <div className='ml-0 w-full gap-4 flex flex-row-reverse text-[12px] py-2 '>
                    <div className='w-full mt-1'>
                        <span >{item.product.name}</span>
                        <p className='font-semibold'>
                            <span>Estimated delivery on  </span>
                            {/* {item.updatedAt} */}
                            <span className='text-[#00B852] '>{formattedDate}</span>
                        </p>
                    </div>
                    <div className='h-20'>
                        <img className=' w-20 h-20 ml-0 rounded-md' src={item.product.displayImage} alt={item.product.name} />
                        <p className='relative bottom-6 left-10 bg-black w-5 h-5 rounded-full pl-2 text-white'>{item.quantity}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PaymentProductCart;
