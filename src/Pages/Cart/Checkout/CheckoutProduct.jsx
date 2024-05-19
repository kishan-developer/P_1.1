import React, { useEffect, useRef, useState, memo, useCallback } from 'react'
import { useThemeContextValue } from '../../../Utils/context/ThemeContext';
// import useDeleteProduct from '../../../Utils/API/useDeleteProduct';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CheckoutProduct({ item, index, handleSizeChange, cartDatas, setProductTotal, productTotal, passingTheQtyAndValue }) {

    const ref = useRef(null);
    // const [allItemData, setallItemData] = useState(item);
    const [item_products, setItemsProducts] = useState(item.product);

    const { cartData, quantity, setQuantity, size, setSize, setproductID, productID, getCartItem, removeWishlistProduct, OrderCartItem, setOrderCartItem, total, setTotal, cartproductQuantity, setCartproductQuantity, state, dispatch, setCartData, cartLength, setCartLength, newCartLength, setNewCartLength, setCartItems, cartItems, } = useThemeContextValue();

    // const [newQuantity,setNewQuantity] = useState('');

    const [prodId, setProdId] = useState('');
    const [newQuantity, setNewQuantity] = useState(item.quantity);
    const [message, setMessage] = useState('');
    // get the addtocart function themecontest provider file 
    // this function are halp to add a new product using the current product id and product quantity
    const { addToCart, totalPrice, setTotalPrice, staicTotalPrice, setStaticTotalPrice } = useThemeContextValue();

    const [newObj, setNewObj] = useState([]);

    console.log("checkoutProduct component render");
    // console.log("cartItems", cartItems);

    const [copyCartItems , setCopyCartItems] = useState(cartItems);



    
    console.log("copyCartItems",copyCartItems);
    console.log("copyCartItems_Total Price", copyCartItems.totalPrice);


    
    // useEffect(()=> {
    //   setCartLength();
    // },[newQuantity])


    // console.log("cartItems", cartItems)


    const navigate = useNavigate();

    // set the Total cart price using useEffect item_product.price
    useEffect(() => {
        // setTotal(item_products.price)
        setCartproductQuantity(item.quantity)
    }, [])

    const _id = item_products.name;
    const idString = (_id) => {
        return String(_id).toLowerCase().split(" ").join("");
    };
    const rootId = idString(_id);
    // console.log(rootId);
    // here set the current product id in setproduct id 
    // using navigate fun to navigate the review page usign rootId 
    function handleReviewPage(id) {
        setproductID(id); // pass the current image product id 
        navigate(`/review/${rootId}`, {
            state: {
                // item is the key and product in hole vlaue of current product 
                item: item_products
            }
        });
    }



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // localStorage.setItem('Cart_All_Products :', JSON.stringify(item));
    localStorage.setItem('Cart_Product_All_Details : ', JSON.stringify(item));
    localStorage.setItem('Cart_Product_Main_Details : ', JSON.stringify(item_products))

    
    // this method is use to delete the product 
    const removeCartData = useCallback(async (id) => {
        console.log(id);
        const url = `https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`;
        const headers = {
            'Content-Type': 'application/json',
            // Add any other headers as needed
        };
        const authToken = localStorage.getItem("token");
        const raw = "";
        const options = {
            method: 'DELETE', // or 'GET', 'PUT', 'DELETE', etc.
            headers: {
                ...headers,
                "Authorization": `Bearer ${authToken}`,
                "projectId": "rcetbaqftf5m"
            },
            body: raw,
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log("remoceCArtData",result.data);
            setCartItems(result.data.items); // this is the solution of remove cart data not updated
            getCartItem();
            // console.log("remove data from cart.....", result);
        } catch (error) {
            console.log(error);
        }

    }, [])


    const handleClickDelete = async (id) => {
        try {
            setproductID(id);
            await removeCartData(id);
            getCartItem(); // Assuming getCartItem is a function to update cart items
            // window.location.reload(); // page referesh auto
        } catch (error) {
            console.error('Error occurred while deleting:', error);
        }
    };


    // // const name = item.name.slice(0, 18);
    const savePrice = 1000 - item_products.price;



    function addToFav() {
        setTimeout(() => {
            const button = ref.current; // corresponding DOM node
            button.className = "active";
        }, [])
        // dispatch add to cart action
        // console.log("call the add to fav");
        MoveTwoWishlist();

        // here call this function because i want to removedata from cart after adding to fav bag

    }

    const MoveTwoWishlist = async () => {
        console.log("move to wishlist");
        const url = `https://academics.newtonschool.co/api/v1/ecommerce/wishlist`;
        const headers = {
            'Content-Type': 'application/json',
            // Add any other headers as needed
        };
        const authToken = localStorage.getItem("token");
        const raw = JSON.stringify({
            "productId": productID
        });
        const options = {
            method: "PATCH",
            headers: {
                ...headers,
                "Authorization": `Bearer ${authToken}`,
                "projectId": "rcetbaqftf5m"
            },
            body: raw,
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();


            if (result.status === "success" || result.status === "fail") {
                // toast(result.message);
                // removeWishlistProduct();
                removeCartData();
                getCartItem();
                // console.log("1355");
            }
            alert(result.message);

            // console.log("movetowishlist from cart.....", result);
        } catch (error) {
            console.log(error);
        }
    }

    ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
    // add to cart wishlist data one by one
    const handleAddtoCart = (productID) => {
        setproductID(productID);
        // console.log("fn is calling haldeaddtocart")
    }

    // Retrieve the object from localStorage
    const storedData = JSON.parse(localStorage.getItem('cart Data'));

    // Now, storedData contains your object
    // console.log("data in cart",storedData);



    // update the cart length using the new array state
    // this method is use to update product cart length and product quantity and product total price 
    // thsi method is working fine 

    useEffect(() => {
        // here updae the all product quantity and total price usign cart quantity and total cart length globle value
        const updatedCart = [...newCartLength];
        // console.log("test mode");
        updatedCart[index] = Number(newQuantity);
        setNewCartLength(updatedCart);
        // console.log("test mode", newCartLength);
        localStorage.setItem("cart_Length_", [updatedCart])
        let sum = 0;
        for (let i = 0; i < newCartLength.length; i++) {
            sum += updatedCart[i];
        }
        setCartLength(sum);


        // this method use to update the total card price usign every product index value 
        const dummyTotalPrice = [...totalPrice];
        const dymmyStaticTotalPrice = [...staicTotalPrice];
        dummyTotalPrice[index] = dymmyStaticTotalPrice[index]*newQuantity;
        setTotalPrice(dummyTotalPrice);
        localStorage.setItem("dummyTotalPrice", [dummyTotalPrice]);
        let totalProductPrice = 0;
        const staticArray = localStorage.getItem("dummyTotalPrice");
        for(let j=0; j<dummyTotalPrice.length; j++) {
            totalProductPrice += dummyTotalPrice[j];
        }
        setTotal(totalProductPrice);
        
        console.log("total price",total)
        

    }, [newQuantity])

   



    return (
        <div className='h-[fit] lg:max-w-[665px]  lg:min-w-[435px] px-[15px] border-2 border-gray-300 rounded-lg mb-5'>
            <div className=' px-[5px] py-[20px] flex gap-2 items-center justify-between text-[10px] lg:text-[14px] md:text-[13px]'>
                <div className=' '>
                    <h2 className='pb-[8px]'>{item_products.name}</h2> 
                    <h2 className='pb-[8px] '>
                        <span className='font-bold text-black text-lg'>₹{item_products.price * newQuantity} </span>
                        <del>₹{item_products.price + 500}</del>
                    </h2>
                    <h2 className='text-[16px]  h-[27px] pb-[10px] text-[#1D8802] font-bold'>{`You Save ₹${savePrice}!`}</h2>
                    <div className='w-full flex gap-3 mt-2 '>



                        <p className="font-bold">{newQuantity}</p>
                        <select className="cursor-pointer" name="quantity" onChange={(e) => setNewQuantity(e.target.value) }>
                        {/* <select name="quantity" onChange={(e) => handeProductCardTotal(e.target.value, item_products.price, item_products._id)}> */}
                            <option value="1">Qty : 1</option>
                            <option value="2">Qty : 2</option>
                            <option value="3">Qty : 3</option>
                            <option value="4">Qty : 4</option>
                            <option value="5">Qty : 5</option>
                            <option value="6">Qty : 6</option>
                            <option value="7">Qty : 7</option>
                            <option value="8">Qty : 8</option>
                            <option value="9">Qty : 9</option>
                            <option value="10">Qty : 10</option>
                        </select>

                        {/* <label>
                            New Quantity:
                            <input
                                type="number"
                                value={cartLength}
                                onChange={(e) => handleQty_value(item_products._id, e.target.value )}
                            />
                        </label> */}


                        <label>Size:</label>
                        <input
                            type="text"
                            value={item.size}
                            onChange={(e) => handleSizeChange(item_products._id, e.target.value)}
                        />
                    </div>
                </div>

                <div className='w-[104px] h-[130px] rounded-lg'>
                    <img className='w-full rounded-lg' onClick={() => handleReviewPage(item_products._id)} src={item_products.displayImage} alt="" />
                </div>
            </div>
            <div className=' lg:max-h-[50px] lg:min-h-[50px] flex items-center text-gray-600  border-t-2 border-gray-300 sm:m-0'>
                <button
                    onClick={() => handleClickDelete(item_products._id)}
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
            <ToastContainer />
        </div>
    )
}

export default memo(CheckoutProduct);