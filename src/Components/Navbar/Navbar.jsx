import React, { createContext, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";
import SearchComponent from '../SearchComponents/SearchComponent';
import DropDownMenu from '../ChildComponents/DropDownMenu';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import './NavbarStyle.css'
import { useThemeContextValue } from '../../Utils/context/ThemeContext';



function Navbar() {
  const [category, setCategorys] = useState([]);
  // State to manage the visibility of the dropdown
  const [dropdownVisible, setDropdownVisible] = useState(false);
  // State to manage the selected option
  const [selectedOption, setSelectedOption] = useState('');
  // fav icon change state
  const [icon, setIcon] = useState(false);

  // responsive menu icon 
  const [isOpen, setOpen] = useState(false);
  // const { state } = useThemeContextValue();

  // get the stats and function using context api hook 
  const { setData, Data, GenderType, auth, state,setModel,model } = useThemeContextValue();
  const token = localStorage.getItem('token');


  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  // Event handler for option selection
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setDropdownVisible(false);
  };

  const FetchDropDown = async () => {
    try {
      const response = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/clothes/categories", {
        method: 'GET',
        headers: {
          "projectId": "rcetbaqftf5m",
        },
        body: JSON.stringify()
      }
      );
      const categoryData = await response.json();
      // console.log("category data", categoryData.data)
      setCategorys(categoryData.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    FetchDropDown();
  }, [])





  const toggleNavbar = () => {
    setOpen(!isOpen);
    // console.log("navtoggle"); 
  }

  const removesidebar = () => {
    setOpen(!isOpen);
  }

  // console.log(state.fav.lenght != 0);
  // if(state.fav.lenght !=0 ) {
  //   setIcon(true);
  // }

  return (
    <>
      <div className='nav_row lg:w-full md:w-full' onClick={removesidebar}>

        <div className='menubutton text-3xl flex absolute left-6 top-3 cursor-pointer'>
          <ion-icon onClick={toggleNavbar} size='large' name='menu'></ion-icon>
          <Link to='/' className='p-1 ml-3'>
            <img src="https://images.bewakoof.com/web/ic-web-head-bwk-primary-logo-eyes.svg" alt="mini_logo" />
          </Link>
        </div>

        <div className='main_nav_row flex '>
          <div className="logo lg:flex  ">
            <Link to='/'>
              <img className='logo_img h-5 lg:flex '
                src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
                alt="" />

            </Link>
          </div>

          <div className='left_ul col-xs-5 lg:flex '>
            <div className='nav_items lg:flex'>
              <span
                className="px-4  block hover:border-b-4 border-yellow-500  "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  onClick={(e) => GenderType("Men")}
                  to="men"
                >
                  <span className="list h-10 leading-10">Men</span>
                </Link>
                {/* Display the dropdown only when dropdownVisible is true */}
                {dropdownVisible ? (
                  <div className='w-[300px] h-[auto] absolute mt-[5px] mx-[-100px] bg-gray-100 flex flex-wrap' >
                    {category.map((item, index) => (
                      <p
                        onMouseEnter={handleMouseEnter}
                        className='py-1 px-6 hover:border-b-3 border-yellow-500 '
                        key={index}
                      >
                        {item}
                      </p>
                    ))}

                  </div>
                ) : (
                  " "
                )}

              </span>

              <span className='px-4 hover:border-b-4 border-yellow-500 '><Link onClick={(e) => GenderType("Women")} to="women">Woman</Link>
              </span>

              <span className='px-4 hover:border-b-4 border-yellow-500 '><Link onClick={(e) => GenderType("MobileCover")} to="/mobilecover"><span>Mobile Cover</span></Link>
              </span>

            </div>

          </div>

          <div className='right_ul'>
            <div className='nav_item_right'>
              <div className='search_span hidden lg:flex '>
                <SearchComponent />
              </div>

              <div className='h-15 lg:flex line'>|</div>

              <div className='span-right flex   '>

                <span className=''>
                  {
                    token ? (<Link to="/admin" onClick={()=> setModel(!model)} className='font-semibold text-[25px]  hover:block'>
                      <IoPersonOutline />
                    </Link>
                    )
                      :
                      (<Link to="/login" className='font-semibold text-md'>Login</Link>)
                  }

                </span>

                <span className='pt-2 h-full text-[27px]'>
                  <Link to="/fav" className=' '>
                    {
                      state.fav != 0 ? (
                        <FaHeart
                          className='text-yellow-500'
                        />
                      )
                        :
                        (<FaRegHeart />)
                    }

                  </Link>
                </span>

                <span className='pt-2 h-full '>
                  <Link to="/cart" className=''>
                    <LiaShoppingBagSolid className='text-[27px]' />
                    <span className='relative top-[-48px] left-2 bg-yellow-700 text-black p-1 px-2 text-sm rounded-full'>{state.cart.length}</span>
                  </Link>
                </span>

              </div>

            </div>


          </div>
        </div>




        {/* second navbar responsive  */}
        <div className={`navbar-links ${isOpen ? 'active' : 'hidden'}`}>
          <div className="user_Name w-[270px]">
            <h2 className='text-black w-[230px] font-bold '>Hello Kishan Kumar</h2>
          </div>

          <div className="shop_In bg-white">
            <p className='text-gray-400 h-[37px] w-full px-5 font-semibold'>SHOP IN</p>
            <ul className="Parent_Menu h-[192px] w-full">
              <li className="MenuListOption">
                <Link to='/men' className='w-full font-bold'>Men <span className='bg-gray-300 h-[35px] w-[33px] mt-2 rounded-2xl  float-end'><ion-icon size="large" name="person"></ion-icon></span></Link>
              </li>
              <li className="MenuListOption">
                <Link to='/women' className='w-full font-bold'>Women <span className='bg-gray-300 h-[35px] w-[33px] mt-2 rounded-2xl  float-end'><ion-icon size="large" name="person"></ion-icon></span></Link>
              </li>
              <li className="MenuListOption">
                <Link to='/men' className='w-full font-bold'>Designs of the Week <span className='bg-gray-300 h-[35px] w-[33px] mt-2 rounded-2xl  float-end'><ion-icon size="large" name="person"></ion-icon></span></Link>
              </li>
              <li className="MenuListOption">
                <Link to='/men' className='w-full font-bold'>Mobile Covers <span className='bg-gray-300 h-[35px] w-[33px] mt-2 rounded-2xl  float-end'><ion-icon size="large" name="person"></ion-icon></span></Link>
              </li>
            </ul>


          </div>

          <div className="shop_In bg-gray-200">
            <p className='text-gray-400 h-[37px] w-full px-5 font-semibold'>MY PROFILE</p>
            <ul className="Parent_Menu h-[192px] w-full">
              <li className="MenuListOption">
                <Link to='/men' className='w-full font-bold'>My Account </Link>
              </li>
              <li className="MenuListOption">
                <Link to='/women' className='w-full font-bold'>My Orders </Link>
              </li>
              <li className="MenuListOption">
                <Link to='/men' className='w-full font-bold'>My Wallet </Link>
              </li>
              <li className="MenuListOption">
                <Link to='/men' className='w-full font-bold'>My Wishlist </Link>
              </li>

            </ul>
          </div>

          <div className="shop_In bg-gray-200">
            <p className='text-gray-400 h-[37px]  w-full px-5 font-semibold'>CONTACT US</p>
            <ul className="Parent_Menu w-full">
              <li className="MenuListOption">
                <Link to='/men' className='w-full font-bold'>Help & Support </Link>
              </li>
              <li className="MenuListOption">
                <Link to='/women' className='w-full font-bold'>Feedback & Suggestions </Link>
              </li>
              <li className="MenuListOption">
                <Link to='/men' className='w-full font-bold'>Become a Seller</Link>
              </li>
            </ul>
          </div>

          <div className="shop_In bg-gray-200">
            <p className='text-gray-400 h-[37px] w-full px-5 font-semibold'>ABOUT US</p>
            <ul className="Parent_Menu h-[192px] w-full">
              <li className="MenuListOption">
                <Link to='/men' className='w-full font-bold'>Our Story </Link>
              </li>
              <li className="MenuListOption">
                <Link to='/women' className='w-full font-bold'>Fanbook </Link>
              </li>
              <li className="MenuListOption">
                <Link to='/men' className='w-full font-bold'>Blog </Link>
              </li>
              <li className="MenuListOption w-full">
                <Link to='/men' className='w-full bg-white font-bold'>Logout </Link>
              </li>

            </ul>

          </div>


        </div>
      </div>
    </>
  )
}

export default Navbar;