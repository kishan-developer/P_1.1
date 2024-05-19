import React, { useState } from 'react';
import { useThemeContextValue } from '../../Utils/context/ThemeContext';

const OrderForm = ({ setOrderStatus, model, setModel }) => {
    const { cartItems, productID, formData, setFormData } = useThemeContextValue();

    // thsi state value is passing inside the useThemeContextvalue file to use any where thsi state value like payment pay to check state vlaue is true than use will be able order the product and inside the cart page this state value is true than inside the cart page "add address " button text is change to "procced to ckeckout page"
    // it help to user will be add one tiem address than order any time any product in the same address 
    // thats the reason i am use the this state inside the "useThemeContextValue()"

    // const [formData, setFormData] = useState({
    //     productIds: productID,
    //     addressType: 'HOME',
    //     street: '',
    //     city: '',
    //     state: '',
    //     country: 'USA',
    //     zipCode: ''
    // });


    // console.log("product Id in order form ", productID);
    
    // console.log("cartItems. order form page", cartItems);

    // const handleProductIdChange = (index, value) => {
    //     const newProductIds = [...formData.productIds];
    //     newProductIds[index] = value;
    //     setFormData({
    //         ...formData,
    //         productIds: newProductIds
    //     });
    // }

    


    const handleFormSubmit =() => {
        localStorage.setItem("formD", JSON.stringify(formData));
        // alert("form subit orderForm page")
        console.log("22222",formData);
    }

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    return (
        <form onSubmit={handleFormSubmit} className='rounded-lg py-5 flex flex-col xl:w-[500px] lg:w-[450px] md:w-[400px] sm:w-[200px] w-[100px]'>
           <h2 className='font-semibold text-lg py-3 bg-gray-400 rounded-lg px-3 mb-3'>Add User Details</h2>
            <label className=' w-[full] mb-2 py-2 px-3 border-2 border-gray-400 '>
                Street:
                <input className='outline-none pl-2' type="text" name="street" value={formData?.street} onChange={handleChange} placeholder='Enter you address' />
            </label>
            <label className='w-[full] mb-2 py-2 px-3 border-2 border-gray-400 '>
                City:
                <input placeholder='Enter city name' className='outline-none pl-2' type="text" name="city" value={formData?.city} onChange={handleChange} />
            </label>
            <label className=' w-[full] mb-2 py-2 px-3 border-2 border-gray-400 '>
                State:
                <input className='outline-none pl-2' placeholder='Enter State name' type="text" name="state" value={formData?.state} onChange={handleChange} />
            </label >
            <label className=' w-[full] mb-2 py-2 px-3 border-2 border-gray-400 '>
                Zip Code:
                <input className='outline-none pl-2' placeholder='Enter zipCode/pincode' type="text" name="zipCode" value={formData?.zipCode} onChange={handleChange} />
            </label>
            <button className='bg-red-300 mb-2 p-2 font-semibold' type="submit">Submit</button>
        </form>
    );
}

export default OrderForm;
