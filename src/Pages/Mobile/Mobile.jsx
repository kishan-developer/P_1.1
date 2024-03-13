import React from "react";
import { useLocation } from "react-router-dom";
// import Footer from './Component/Footer/Footer';

function Mobile() {
    const location = useLocation();
    const routeName = location.pathname.toUpperCase();

    return (
        <>
            <div className=" lg:w-full md:w-full w-full h-fit xl:flex lg:flex md:flex items-center flex-col">
                <nav className="xl:w-[1170px] lg:w-full  w-full h-[51px] py-5 font-[16px] lg:flex xl:flex items-center cursor-pointer hidden">Home {routeName}</nav>

                <div className="xl:w-[1170px] lg:w-full md:w-full w-full h-fit lg:px-[50px] px-2 pt-[50px] pb-[100px] lg:mx-[15px] mx-0 mt-0 bg-gray-200">
                    <h2 className="w-full h-[36px] pb-[3px] lg:text-[24px] text-[16px] font-bold cursor-pointer lg:block xl:block hidden ">Mobile Covers And Cases</h2>
                    <div className="h-[3px] bg-yellow-600 w-[130px] mb-[42px] lg:block xl:block hidden "></div>

                    <div className="lg:w-full w-full h-fit  flex justify-center gap-14 mt-0">
                        <div
                            className="xl:w-[707px] w-full h-fit sm:pl-2  bg-[#ffffff]  pt-[35px] pb-[15px] lg:pl-[30px] lg:pr-[20px]   text-[14px] ">

                            <div
                                className=" lg:w-[657.33px]  w-full lg:h-[81px] pb-[17px] gap-5 lg:flex block  h-fit p-3 "
                            >
                                <h2 className="lg:hidden xl:hidden block font-bold text-[12px] mb-2">My Brand</h2>
                                <select
                                    className="lg:w-[232.66px] w-full h-[40px] mb-[14px] px-[11px] border-[1px] border-gray-500 outline-none rounded-md"
                                    name="Brand"
                                >
                                    <option >Select Brand</option>
                                    <option >B-2</option>
                                    <option >B-3</option>
                                </select>

                                <h2 className="lg:hidden xl:hidden block font-bold text-[12px] mb-2 mt-2">My Model</h2>
                                <select
                                    className="lg:w-[232.66px] w-full h-[40px] mb-[14px] px-[11px] border-[1px] border-gray-500 outline-none rounded-md"
                                    name="Model"
                                >
                                    <option >Select Model</option>
                                    <option >M-2</option>
                                    <option >M-3</option>
                                </select>
                                <div className="lg:w-[160px] w-full h-[64px] flex flex-col mt-2 lg:m-0">
                                    <button className="h-[56px] bg-gray-400 rounded-md">SEARCH</button>
                                    <p className="text-[10px] text-[#f3fefe] mt-[5px] font-semibold  ">Model not listed here? Tell us</p>
                                </div>
                            </div>

                            <div className="lg:w-[650.33px]  p-2  h-fit mb-5 pt-[5px]">
                                <span className="h-[15px] text-[12px] text-[#333333] cursor-pointer">POPULAR</span>
                                <div className="h-fit flex-wrap flex gap-2 lg:grid lg:grid-cols-3 px-2  pt-[1px] mb-3">
                                    <div className=" md:w-full w-full h-[54px] ">
                                        <p
                                            className="text-[#5D5D5D] py-5 lg:text-[14px] text-[18px] font-semibold lg:h-[14px] h-[58px] cursor-pointer border-b-[1px] border-gray-500 ">Nothing</p>
                                    </div>

                                    <div className=" md:w-full w-full  h-[54px] ">
                                        <p className="text-[#5D5D5D] py-5 lg:text-[14px] text-[18px] font-semibold lg:h-[14px] h-[58px] cursor-pointer border-b-[1px] border-gray-500 ">Xiaomi</p>
                                    </div>
                                    <div className=" md:w-full w-full  h-[54px] ">
                                        <p className="text-[#5D5D5D] py-5 lg:text-[14px] text-[18px] font-semibold lg:h-[14px] h-[58px] cursor-pointer border-b-[1px] border-gray-500 ">OnePlush</p>
                                    </div>
                                    <div className=" md:w-full w-full h-[54px]">
                                        <p className="text-[#5D5D5D] py-5 lg:text-[14px] text-[18px] font-semibold lg:h-[14px] h-[58px] cursor-pointer border-b-[1px] border-gray-500 ">Realme</p>
                                    </div>
                                    <div className=" md:w-full w-full  h-[54px] ">
                                        <p className="text-[#5D5D5D] py-5 lg:text-[14px] text-[18px] font-semibold lg:h-[14px] h-[58px] cursor-pointer border-b-[1px] border-gray-500 ">Sumsung</p>
                                    </div>
                                    <div className=" md:w-full w-full  h-[54px] ">
                                        <p className="text-[#5D5D5D] py-5 lg:text-[14px] text-[18px] font-semibold lg:h-[14px] h-[58px] cursor-pointer border-b-[1px] border-gray-500 ">Apple</p>
                                    </div>
                                    <div className="md:w-full w-full  h-[54px] ">
                                        <p className="text-[#5D5D5D] py-5 lg:text-[14px] text-[18px] font-semibold lg:h-[14px] h-[58px] cursor-pointer border-b-[1px] border-gray-500 ">Vivo</p>
                                    </div>

                                </div>
                            </div>

                            <div className=" lg:w-[657.33px]  h-fit p-2  pt-[20px] ">
                                <span className="h-[15px] text-[12px] text-[#333333] cursor-pointer">OTHER BRANDS</span>
                                <div className="h-fit flex flex-wrap gap-2 pt-[1px]  lg:grid lg:grid-cols-3">
                                    <div className=" md:w-full w-full h-[54px] ">
                                        <p className="text-[#5D5D5D] py-5 lg:text-[14px] text-[18px] font-semibold lg:h-[14px] h-[58px] cursor-pointer border-b-[1px] border-gray-500 ">Oppo</p>
                                    </div>
                                    <div className=" md:w-full w-full h-[54px] ">
                                        <p className="text-[#5D5D5D] py-5 lg:text-[14px] text-[18px] font-semibold lg:h-[14px] h-[58px] cursor-pointer border-b-[1px] border-gray-500 ">Huawei</p>
                                    </div>
                                    <div className=" md:w-full w-full h-[54px] ">
                                        <p className="text-[#5D5D5D] py-5 lg:text-[14px] text-[18px] font-semibold lg:h-[14px] h-[58px] cursor-pointer border-b-[1px] border-gray-500 ">Moto</p>
                                    </div>


                                </div>
                            </div>

                        </div>
                        <div className="lg:w-full md:w-full  w-full lg:block hidden h-[302px] cursor-pointer">
                            <img className="lg:w-200px md:w-[200px] h-[300px] " src="https://images.bewakoof.com/nav_menu/landing-page-mobile-box-1558174497.jpg" alt="img" />
                        </div>
                    </div>

                </div>

                <div className="xl:w-[1170px] lg:w-full md:w-full w-full h-[708px]  py-[40px] px-[15px]">
                    <div className=" " >
                        <h1 lassName="font-bold text-[#2D2D2D]">Mobile case nad back cover</h1>
                        <div className="text-[12px] mt-5">
                            <h1 className="font-bold text-[#2D2D2D]">MOBILE COVERS & CASES BY BEWAKOOF®</h1>
                            <p className=" text-[#2D2D2D] mt-5">
                                Bewakoof® offers an exclusive range of stylish and trendy phone covers and cases. Bewakoof® has a wide variety of designs to choose from, so you can find the perfect cover or case to show off your personality. All of our covers and cases are made of high-quality materials that offer protection to your phone. So whether you're looking for a funky cover to show off your personality or a case to protect your phone from scratches and bumps, Bewakoof® has you covered!
                            </p>
                        </div>
                        <div className="text-[12px] mt-5">
                            <h1 className="font-bold text-[#2D2D2D]">MOBILE COVERS FOR WOMEN</h1>
                            <p className=" text-[#2D2D2D] mt-5">
                                Shop Stylish mobile covers for women from Bewakoof® and make a statement! Our collection of Mobile Covers for Women is designed with function and fashion in mind. These lightweight back covers come in a variety of colors and designs to match any outfit, from neutral tones to bright, vibrant colors. Protect your phone while looking great with our Mobile Covers for Women – they provide protection against dirt, dust and scratches, as well as protection from drops and bumps. So don’t settle for anything less – shop now for Mobile Covers for Women from Bewakoof® and stay stylish all day!
                            </p>
                            <p className=" text-[#2D2D2D] mt-5">
                                Get the perfect Mobile Cover that reflects your personality and style! Shop Now at Bewakoof®! With our wide range of stylish and rugged Mobile Covers for Women, you can find the perfect mobile cover that reflects your personality and style. Choose from a variety of colors and designs to match any outfit or mood. Whether you’re looking to make a statement or just want to protect your phone, our Mobile Covers for Women are a perfect choice.
                            </p>
                        </div>

                        <div className="text-[12px] mt-5">
                            <h1 className="font-bold text-[#2D2D2D]">MOBILE COVERS FOR MEN</h1>
                            <p className=" text-[#2D2D2D] mt-5">
                                Tired of using the same boring mobile cover? Then why not update your style with one of our trendy mobile covers for men from Bewakoof®! All our back covers are designed to protect your phone and feature vibrant, stylish designs that will make you stand out in the crowd. Whether you're looking for something subtle or eye-catching, you're sure to find something that fits your style in our collection of mobile covers for men.
                            </p>
                        </div>

                        <div className="text-[12px] mt-5">
                            <h1 className="font-bold text-[#2D2D2D]">MOBILE COVERS ON BEWAKOOF®</h1>
                            <p className=" text-[#2D2D2D] mt-5">
                                Bewakoof® is an online store that offers a wide range of phone cases. Bewakoof® was founded in 2012 with the aim of providing high-quality and stylish mobile accessories at an affordable price. Bewakoof® has since grown to become one of the leading online retailers for mobile covers and cases in India.
                            </p>
                            <p className=" text-[#2D2D2D] mt-5">
                                Bewakoof® offers a wide variety of designs and colours to choose from, so you can find the perfect cover or case for your phone.
                            </p>
                        </div>

                        <div className="text-[12px] mt-5">
                            <h1 className="font-bold text-[#2D2D2D]">WHY CHOOSE BEWAKOOF® FOR YOUR PHONE COVERS OR CASES?</h1>
                            <p className=" text-[#2D2D2D] mt-5">
                                There are several reasons why you should choose Bewakoof® for your phone case needs. Firstly, the company offers a wide range of designs and colours to choose from. Secondly, Bewakoof® covers and cases are made from high-quality materials, so you can be sure your phone is well protected. And finally, Bewakoof® offers great value for money – you won’t find better quality back covers and cases at a better price anywhere else.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* <Footer/> */}
        </>
    )
}

export default Mobile;