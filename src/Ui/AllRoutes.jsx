import React, { useState, lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';

// const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));

// import Home from '../Pages/Home/Home';
const Home = lazy(() => import('../Pages/Home/Home'));

// import Product from '../Pages/ProductPage/Product';
const Product = lazy(() => import('../Pages/ProductPage/Product'));

// import AppLayout from './AppLayout';
const AppLayout = lazy(() => import('./AppLayout'));

// import Footer from '../Components/Footer/Footer';
const Footer = lazy(() => import('../Components/Footer/Footer'));

// import Cart from '../Pages/Cart/Cart';
const Cart = lazy(() => import('../Pages/Cart/Cart'));

// import Fav from '../Pages/Favarate/Fav';
const Fav = lazy(() => import('../Pages/Favarate/Fav'));

// import SignUp from '../Pages/Login/SignUp';
const SignUp = lazy(() => import('../Pages/Login/SignUp'));

// import Login from '../Pages/Login/UserLogin/Login';
const Login = lazy(() => import('../Pages/Login/UserLogin/Login'));

// import Admin from '../Pages/Admin/Admin';
const Admin = lazy(() => import('../Pages/Admin/Admin'));

// import ProductReview from '../Pages/ProductReview/ProductReview';
const ProductReview = lazy(() => import('../Pages/ProductReview/ProductReview'));

// import Mobile from '../Pages/Mobile/Mobile';
const Mobile = lazy(() => import('../Pages/Mobile/Mobile'));

// import Private from '../Utils/ProtectedRoute/Private';
const Private = lazy(() => import('../Utils/ProtectedRoute/Private'));

// import DropDown from '../Components/ChildComponents/DropDown';
const DropDown = lazy(() => import('../Components/ChildComponents/DropDown'));

// import CheckoutAddress from '../Pages/Cart/Checkout/CheckoutAddress';
const CheckoutAddress = lazy(() => import('../Pages/Cart/Checkout/CheckoutAddress'));

// import Order from '../Pages/Order/Order';
const Order = lazy(() => import('../Pages/Order/Order'));

// import SingleOrderData from '../Pages/Order/SingleOrderData.jsx';
const SingleOrderData = lazy(() => import('../Pages/Order/SingleOrderData.jsx'));

// import MyAccount from '../Pages/Admin/MyAccount.jsx';
const MyAccount = lazy(() => import('../Pages/Admin/MyAccount.jsx'));

// import Payment from '../Pages/Order/Payment.jsx';
const Payment = lazy(() => import('../Pages/Order/Payment.jsx'));

// import OrderPlace from '../Pages/Order/OrderPlace';
const OrderPlace = lazy(() => import('../Pages/Order/OrderPlace'));

function AllRoutes() {
    // const [auth , setAuth] = useState(false);
    const {id} = useParams();
    const { orderId } = useParams();

    return (

        <BrowserRouter>
            <Suspense fallback={<h2>Loading...</h2>}>
                <AppLayout />
                <Routes>
                    <Route path='/offer' element={<h1>Offer page</h1>} />
                    <Route path='/fanbook' element={<h1>Fanbook</h1>} />
                    <Route path='/downloadapp' element={<h1>Download App</h1>} />
                    <Route path='/membership' element={<h1>Membership</h1>} />
                    <Route path='/contact' element={<h1>Contact Us</h1>} />
                    <Route element={<Private />}>
                        <Route path='/trackOrder' element={<h1>Track Orders</h1>} />
                    </Route>

                    <Route path="/" element={<Home />} />
                    <Route path="/men" element={<Product />} />
                    <Route path="/women" element={<Product />} />
                    <Route path='/mobilecover' element={<Mobile />} />

                    <Route path='/review/:id' element={<ProductReview />} />

                    <Route element={<Private />} >
                        {/* <Route path="/admin" element={<Admin />} /> */}
                        <Route path='/fav' element={<Fav />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path="/checkoutpage" element={<CheckoutAddress />} />
                        <Route path="/order" element={<Order />} />
                        <Route path="/paymentsuccess" element={<OrderPlace />} />
                        <Route path="/order/:orderId" element={<SingleOrderData />} />

                        <Route path="/myaccount" element={<MyAccount />} />
                        <Route path='/payment' element={<Payment />} />
                    </Route>

                    <Route path="/login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />



                </Routes>
            </Suspense>
        </BrowserRouter>
        
    )
}

export default AllRoutes;