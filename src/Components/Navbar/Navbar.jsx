import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";
import SearchComponent from '../SearchComponents/SearchComponent';
import DropDownMenu from '../ChildComponents/DropDownMenu';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import './NavbarStyle.css'
// import Admin from '';
import { useThemeContextValue } from '../../Utils/context/ThemeContext';
import Admin from '../../Pages/Admin/Admin';
import { IoMdCloseCircle } from "react-icons/io";
import { CgGirl } from "react-icons/cg";
import { FaMobileScreenButton } from "react-icons/fa6";



function Navbar() {
  const [category, setCategorys] = useState([]);
  // State to manage the visibility of the dropdown
  const [dropdownVisible, setDropdownVisible] = useState(false);
  // State to manage the selected option
  const [selectedOption, setSelectedOption] = useState('');
  // fav icon change state
  const [icon, setIcon] = useState(false);
  const navigate = useNavigate();
  // responsive menu icon 

  // const { state } = useThemeContextValue();

  // get the stats and function using context api hook 
  const { setData, Data, GenderType, auth, state, setModel, model, cartLength, addToCart, favData, setFavData, favlength, setFavlength, isOpen, setOpen, adminData, userName } = useThemeContextValue();

  // console.log("admin data in  navbar", adminData.email);

  const token = localStorage.getItem('token');





  // const menuRef = useRef();
  // const imgRef = useRef();

  // window.addEventListener("click", (e)=> {
  //     setOpen(false)
  //   }
  // )



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

  function logout() {
    localStorage.clear();
    setModel(false)
    console.log('remove token in local storage');
    navigate('/');
  }



  return (
    <>
      <div className='nav_row bg-white lg:w-full md:w-full' >

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
            <div className='nav_items lg:flex static' >
              <span
                className="px-4  w-[80px] block hover:border-b-4 border-yellow-500  "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  onClick={(e) => GenderType("Men")}
                  to="/men"
                >
                  <span className="list h-10 leading-10">Men</span>
                </Link>
                {/* Display the dropdown only when dropdownVisible is true */}
                {/* {dropdownVisible ? (
                  <div className='dropIndex w-[fit] h-[auto]  relative top-0 left-0 mt-[10px] mx-[-100px] bg-gray-100 grid grid-cols-3' >
                    {category.map((item, index) => (
                      <p
                        onMouseEnter={handleMouseEnter}
                        className='py-1 px-6 hover:border-b-3 border-yellow-500 cursor-pointer'
                        key={index}
                      >
                        {item}
                      </p>
                    ))}

                  </div>
                ) : (
                  " "
                )} */}

              </span>

              <span className='px-4 hover:border-b-4 border-yellow-500 '><Link onClick={(e) => GenderType("Women")} to="/women">Woman</Link>
              </span>

              <span className='px-4 hover:border-b-4 border-yellow-500 '><Link to="/mobilecover"><span>Mobile Cover</span></Link>
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
                    token ? (<Link onClick={() => setModel(!model)} className='font-semibold text-[25px]  hover:block'>
                      <IoPersonOutline />
                    </Link>
                    )
                      :
                      (<Link to="/login" className='font-semibold text-md'>Login</Link>)
                  }
                </span>





                {model &&
                  <div className='absolute top-14 right-[10%] w-[180px] h-[fit] bg-gray-400 pb-2 rounded-md'>

                    <h2 className='hover:bg-gray-200 bg-blue-300 text-semibold text-[10px] italic text-black cursor-pointer py-1 px-2'>
                      <span className='font-bold'>Hii</span> <span className='font-semibold'>{userName}</span></h2>
                    <h2
                      onClick={() => setModel(false)}
                      className='hover:bg-gray-200 text-sm font-semibold text-black cursor-pointer py-2 px-2'
                    > <Link to='/myaccount' className='w-full '>My Account</Link></h2>
                    <h2
                      onClick={() => setModel(false)}
                      className='hover:bg-gray-200 text-sm font-semibold text-black cursor-pointer py-2 px-2'
                    ><Link to='/fav' className='w-full '>My WishList</Link></h2 >

                    <h2
                      onClick={() => setModel(false)}
                      className='hover:bg-gray-200 text-sm font-semibold text-black cursor-pointer py-2 px-2'
                    >
                      <Link to='/order' className='w-full '>My Orders </Link>
                    </h2 >
                    <h2
                      onClick={() => setModel(false)}
                      className='hover:bg-gray-200 text-sm font-semibold text-black cursor-pointer py-2 px-2'
                    >
                      <Link to='/payment' className='w-full '>My Payment</Link>
                    </h2 >

                    <button
                      className='hover:bg-gray-200 flex items-center justify-center text-sm bg-blue-300 text-white font-bold  hover:text-black cursor-pointer py-2 px-2 w-full text-left'
                      onClick={logout}>Logout</button>
                  </div >

                }

                <span className='pt-2 h-full text-[27px]'>
                  <Link to="/fav" className=' '>
                    {
                      favlength == 0 ? (
                        <FaRegHeart />
                      )
                        :
                        (<FaHeart
                          className='text-[#fb3bf1]'
                        />)
                    }

                  </Link>
                </span>

                <span className='pt-2 h-full '>
                  <Link to="/cart" className=''>
                    <LiaShoppingBagSolid className='text-[27px]' />
                    <span className='relative top-[-48px] left-2 bg-yellow-700 text-black p-1 px-2 text-sm rounded-full'>{cartLength}</span>
                  </Link>
                </span>

              </div>

            </div>


          </div>
        </div>




        {/* second navbar responsive  */}
        <div className={`navbar-links ${isOpen ? 'active ' : 'hidden'} h-fit `}
        // style={{ backgroundColor: isOpen ? 'yourColorWhenOpen' : 'yourColorWhenClosed' }}
        >

          <div className="user_Name w-[full] flex justify-between bg-blue-300">
            <h2 className='text-black w-[200px] font-bold'>Hello {adminData.email}</h2>
            <button onClick={removesidebar}><IoMdCloseCircle size={30} className='text-red-600' /></button>
          </div>

          <div className="shop_In bg-gray-300  h-fit">
            <p onClick={removesidebar} className='text-gray-400 h-[37px] w-full px-5 font-semibold'>SHOP IN</p>
            <ul className="Parent_Menu h-fit w-full">
              <li onClick={(e) => GenderType("Men")} className="MenuListOption hover:bg-gray-400">
                <Link to='/men' onClick={removesidebar} className='w-full font-bold'>Men <span className='text-blue-300 h-[35px] w-[33px] mt-2 rounded-2xl  float-end'><ion-icon className='' size="large" name="person"></ion-icon></span></Link>
              </li>
              <li onClick={(e) => GenderType("Women")} className="MenuListOption hover:bg-gray-400">
                <Link to='/women' onClick={removesidebar} className='w-full font-bold'>Women <span className=' h-[35px] w-[33px] mt-2 rounded-2xl  float-end'><CgGirl className='text-blue-300' size={34} /></span></Link>
              </li>
              <li onClick={removesidebar} className="MenuListOption hover:bg-gray-400">
                <Link to='/mobilecover' className='w-full font-bold'>Mobile Covers <span className=' h-[35px] w-[33px] mt-2 rounded-2xl  float-end'><FaMobileScreenButton className='text-blue-300' size={34} /></span></Link>
              </li>
            </ul>
          </div>

          <div className="shop_In bg-gray-300 h-fit cursor-pointer">
            <p onClick={removesidebar} className='text-gray-400 h-[37px] w-full px-5 font-semibold'>MY PROFILE</p>
            <ul className="Parent_Menu h-[fit] w-full cursor-pointer">
              <li onClick={removesidebar} className="MenuListOption hover:bg-gray-400 cursor-pointer">
                <Link to='/myaccount' className='w-full font-bold'>My Account </Link>
              </li>
              <li onClick={removesidebar} className="MenuListOption hover:bg-gray-400 cursor-pointer">
                <Link to='/order' className='w-full font-bold'>My Orders </Link>
              </li>

              <li onClick={removesidebar} className="MenuListOption hover:bg-gray-400 cursor-pointer">
                <Link to='/fav' className='w-full font-bold'>My Wishlist </Link>
              </li>
              <li onClick={removesidebar} className="MenuListOption w-full hover:bg-gray-400 bg-blue-300 text-white text-lg hover:text-black flex justify-center font-bold py-2 items-center cursor-pointer">
                {token ? (<Link to='/myaccount' className=' '>Account </Link>)
                  :
                  (<Link to='/login' className=' '>Login</Link>)
                }

              </li>
            </ul>
          </div>

          {/* <div className="shop_In bg-gray-200">
            <p className='text-gray-400 h-[37px]  w-full px-5 font-semibold'>CONTACT US</p>
            <ul className="Parent_Menu w-full">
              <li className="MenuListOption hover:bg-gray-400">
                <Link to='/men' className='w-full font-bold'>Help & Support </Link>
              </li>
              <li className="MenuListOption hover:bg-gray-400">
                <Link to='/women' className='w-full font-bold'>Feedback & Suggestions </Link>
              </li>
              <li className="MenuListOption hover:bg-gray-400">
                <Link to='/men' className='w-full font-bold'>Become a Seller</Link>
              </li>
            </ul>
          </div> */}





        </div>
      </div>
    </>
  )
}

export default Navbar;