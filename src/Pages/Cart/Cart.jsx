import React, { useEffect, useState, lazy, Suspense, useCallback } from 'react';
import './Cart.css';
import { useThemeContextValue } from '../../Utils/context/ThemeContext';
import { FaCarSide } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
// import CheckoutProduct from './Checkout/CheckoutProduct';
// import MyWishlist from './MyWishlist/MyWishlist';
import { Link, useNavigate } from 'react-router-dom';
// import AddressForm from './AddressForm';
import { IoCloseCircle } from "react-icons/io5";
// import AdForm from '../../Pages/Cart/AdForm';
// import useDeleteProduct from '../../Utils/API/useDeleteProduct';
import OrderForm from './OrderForm';

// const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));
const CheckoutProduct = lazy(() => import('./Checkout/CheckoutProduct'));


const Cart = () => {
    const { state: { cart }, dispatch, addresssMode, setmodelAddress, getCartItem, cartItems, cartLength, formData, setFormData, OrderCartItem, setOrderCartItem, clearCartPage, total, setTotal, cartproductQuantity, setCartproductQuantity, addtocart, productID, setproductID, quantity, setQuantity } = useThemeContextValue();
    const navigate = useNavigate();
    const [model, setModel] = useState(false);
    // const [cart, setCart] = React.useState(getCartFromLocalStorage());

    // const [Subtotal, setSubTotal] = useState(0);


    const [cartDatas, setCartData] = useState([]);
    const [cartUserData, setCartUserData] = useState([])
    //checing the product order status
    const [orderStatus, setOrderStatus] = useState(false);
    // cart orderitem 
    const [orderitem, setOrder] = useState();


    // product total price

    const [productTotal, setProductTotal] = useState([]);
    const [p_total , setP_total] = useState([]);

    // cartlength by array changes

    console.log("Cart component is Render");



    useEffect(() => {
        const userAddress = JSON.parse(localStorage.getItem("formD"))
        setFormData(userAddress);

        const userForm = localStorage.getItem("login User Address")
        // console.log("...",userForm);
        setFormData(userForm)
        // console.log("form data in cartpage", formData);
        setTotal(cartItems?.totalPrice)
    }, [])




    


    // Function to handle size change
    const handleSizeChange = (itemId, newSize) => {
        // console.log("itemId", itemId)
        // console.log("newSize", newSize)
        addtocart();

        const updatedCart = cartItems?.items?.map(item => {
            // console.log("size change ",item);
            // if (item.id === itemId) {
            //     return { ...item, size: newSize };
            // }
            // return item;
        });
        // setCartData(updatedCart);
    };


    /////////////////////////////////////////////////////////////////
// this functio is calling on clearcart button is cleck is callback furnciton 
// button is click than this function is calling
    const ClearCart = async () => {
        try {
            handlecheckoutItem();
            getCartItem(); // Assuming getCartItem is a function to update cart items
            navigate('/payment')

        } catch (error) {
            console.error('Error occurred while deleting:', error);
        }
    };

    // after clear cart set the all cart item inside the state value 
    const handlecheckoutItem = useCallback((item) => {
        // console.log(item);
        setOrder(item)
        // console.log("222222222222222", orderitem)
        clearCartPage();
        // setOrderCartItem([...OrderCartItem, item]);
    },[]);




    const handleAdd = () => {
        setmodelAddress(!addresssMode);
        // navigate('/checkoutpage'); 
    }

    const toggleModal = () => {
        setModel(!model)
    }



    ////////////////////////////////////////////////////////////////////////////////////////
    // handle the card total price usign cartlentgh and current  prouct total price
    const HandleProductTotal = 0;
    let totalValueCard;

    // this method is the callback fnction is access the 3 data from checkoutproduct component 
    // this mehtod use to store all the data in array format
    function passingTheQtyAndValue(Qty, id, productTotaPrice){
        // totalMap[id] = value;
        console.log("function is calling");
        const totalmap = [];
        totalmap[id] = productTotaPrice;
        console.log(totalmap);

        

         totalValueCard = totalmap.map((id ,value) => {
            return value + value;
        })

       

    }


    return (
        <div className='h-fit mt-10 w-full px-[15px] xl:flex xl:flex-col xl:items-center xl:justify-center lg:flex lg:flex-col lg:items-center lg:justify-center 
            md:flex md:flex-col md:items-center md:justify-center 
        '>
            <div className='xl:w-[1170px] lg:w-full md:w-full sm:w-full w-full flex gap-5
            pt-[39px] px-[15px] pb-0 lg:mx-[160px] xl:mx-[160px] sm:m-0 m-0 text-[16px] '>
                <div >
                    <span className='font-bold text-[16px]'>My Bag</span>
                    <span className='font-bold'> <span className="text-red-500 mx-2">{cartLength}</span>items</span>
                </div>
                <div
                    className='font-bold cursor-pointer bg-gray-500 px-3 py-1 rounded-lg '
                    onClick={ClearCart}
                >
                    Clear Cart
                </div>
            </div>

            <div className='h-[fit] pb-10 xl:w-[1170px] md:w-full  md:justify-center   lg:pb-[100px] px-[15px] md:text-[12px]  gap-5 lg:flex xl:flex md:flex sm:w-[700px]:block  sm:w-full text-sm'>
                <div className=' xl:w-[665px] lg:w-[540px] md:w-[430px]   flex flex-col '>
                    <div className='bg-green-50 rounded-lg xl:w-full lg:full w-full flex mb-5 mt-3 text-sm '>
                        <div className='w-full flex py-4 px-2 '>
                            <span className='text-red-500 mx-3'>
                                <FaCarSide />
                            </span>
                            <span className='text-sm mr-2'>
                                Yay! You get FREE delivery on this order
                            </span>
                        </div>

                    </div>
                    <div>
                        {
                            cartItems?.items?.map((item, index) => (
                                <Suspense fallback={<h1>Please Wait</h1>}>
                                    <CheckoutProduct
                                        item={item}
                                        index={index}
                                        setProductTotal={setProductTotal}
                                        passingTheQtyAndValue={passingTheQtyAndValue}
                                        onChange={() => passingTheQtyAndValue}
                                        handleSizeChange={handleSizeChange}
                                        cartDatas={cartDatas}
                                    />
                                </Suspense>


                            ))
                        }
                    </div>
                    {/* <div className='h-[418px] bg-red-500 flex flex-col '>
                        <h2 className='w-full font-bold text-sm '>My WishList</h2>
                        <MyWishlist/>
                    </div> */}
                </div>

                <div className='xl:w-[430px] lg:w-[380px] md:w-[240px] md:text-[12px]  lg:pr-[15px] md:pr-0  '>
                    <div className='bg-yellow-600 h-[50px] px-5 pt-1 rounded-lg mb-5 flex items-center justify-between md:text-[12px]'>
                        <h2>Save extra <strong> ₹180</strong> with <strong>TriBe</strong></h2>
                        <h2 className='cursor-pointer'>
                            <FaAnglesRight />
                        </h2>
                    </div>
                    <div className='border-[1px] border-gray-300 md:text-[10px]  text-[10px] h-[50px] pl-5 pt-1 rounded-lg mb-5'>
                        <h2>Whistles! Get extra 15% cashback on prepaid orders above Rs.699. Coupon code - EOSS15</h2>
                    </div>
                    <div className='border-[1px] border-gray-300 md:text-[10px] text-[10px]  h-[50px] pl-5 pt-1 rounded-lg mb-5'>
                        <h2>Whistles! Get extra Rs.100 Discount on all prepaid orders above Rs.1499. Use Code - EXTRA100.</h2>
                    </div>
                    <div className='border-[1px] border-gray-300 md:text-[10px] text-[10px] h-[50px] pl-5 pt-1 rounded-lg mb-5'>
                        <h2>Get Rs.200 instant discount on your First Purchase above Rs.999. Coupon code -NEW200</h2>
                    </div>

                    <div className='border-[1px] border-gray-300 h-[440px] cursor-pointer md:text-[12px]'>
                        <div className='p-[6px] h-[45px]'>
                            <div className='bg-[#42A2A11A] text-[11px] px-3 rounded-md h-[32px] text-[#42A2A2] flex items-center justify-between font-semibold '>
                                <div>Apply Coupon / Gift Card / Referral</div>
                                <div className='flex items-center justify-center gap-2 cursor-pointer'>Redeem <span><FaAnglesRight /></span></div>
                            </div>
                        </div>
                        <div className='bg-[#0000000A] h-[37px] px-[20px] py-[10px] text-[11px] text-black font-semibold'>
                            PRICE SUMMARY
                        </div>
                        <div className=' p-[16px] '>
                            <div className='flex items-center justify-between h-[38px] pb-[10px] text-[12px]'>
                                <h2>Total</h2>
                                <h2>{total}</h2>
                            </div>
                            <div className='flex items-center justify-between h-[38px] pb-[10px] text-[12px]'>
                                <h2>Delivery Fee</h2>
                                <h2 className='text-[#1D8802]'>FREE</h2>
                            </div>
                            <div className='flex items-center justify-between h-[38px] pb-[10px] text-[12px]'>
                                <h2>Bag Discount</h2>
                                <h2 className=''>0</h2>
                            </div>
                            <div className='flex items-center justify-between h-[38px] pb-[10px] text-[12px] font-bold'>
                                <h2>Subtotal</h2>
                                <h2 className=''>₹{total}</h2>
                            </div>
                        </div>

                        <div className='flex items-center  h-[70px] p-[10px] border-t-[1px] border-gray-300'>
                            <div className='h-[40px] w-1/2 flex flex-col pl-2'>
                                <h2 className='text-[12px] w-[50px] pb-[1px] font-semibold'>Total</h2>
                                <div className='text-[16px] w-[50.14px] font-semibold'>
                                    <span className='text-[12px]'>₹</span>
                                    {total}
                                </div>
                            </div>
                            <button

                                className='btn-modal bg-[#42A2A2] hover:bg-green-[#00B852] hover:text-gray-800 cursor-pointer rounded-md w-[280px] h-[40px] p-[8px] font-bold mt-2 text-[16px] text-[#FFFFFF]'
                            >
                                {formData.steet === "" ? (
                                    <span onClick={toggleModal}>Add Address</span>
                                ) : (
                                    <span><Link to='/payment'>PROCEED TO CHECKOUT</Link></span>

                                )}

                            </button>
                        </div>

                        <div className='h-[120px] p-[15px] '>
                            <div className=' h-[58px] flex items-center justify-between '>
                                <div className='w-[104px] h-[58px]  flex items-center justify-center flex-col text-[8px]'>
                                    <img className='w-[40px]' src="https://images.bewakoof.com/web/cart-badge-trust.svg" alt="logoo" />
                                    <p className='text-gray-500'>100% SECURE PAYMENT</p>
                                </div>
                                <div className='w-[143px] h-[58px]   flex items-center justify-center flex-col text-[8px]'>
                                    <img className='w-[40px]' src="https://images.bewakoof.com/web/cart-easy-return.svg" alt="logoo" />
                                    <p className=' w-full text-gray-500'>EASY RETURNS & QUICK REFUNDS</p>
                                </div>
                                <div className='w-[93px] h-[58px]   flex items-center justify-center flex-col text-[8px]'>
                                    <img className='' src="https://images.bewakoof.com/web/quality-check.svg" alt="logoo" />
                                    <p className='text-gray-500'>QUALITY ASSURANCE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {
                model && (
                    <div className="modal">
                        <div
                            onClick={toggleModal}
                            className="overlay"
                        ></div>
                        <div className="modal-content">
                            <div className='w-full'>
                                {/* <AddressForm /> */}
                                {/* <AdForm /> */}
                                <OrderForm setOrderStatus={setOrderStatus} model={model} setModel={setModel} />
                            </div>

                            <button className='close-modal'
                                onClick={toggleModal}
                            ><IoCloseCircle size={40} /></button>
                        </div>
                    </div>
                )
            }
        </div>

    );
};

export default Cart;


