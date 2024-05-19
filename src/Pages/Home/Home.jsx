import React from 'react';
import './Home.css'
import Carousel from '../../Components/ChildComponents/Crousel';
import Footer from '../../Components/Footer/Footer';
import TradingCat from './TrandingCategories/TradingCat';
import Bag_Category from './Category_To_Bag/Bag_Category';
import Second from './Second_section/Second';
import BestSeller from './BestSeller/BestSeller';
import { Link } from 'react-router-dom';
import TopSection from './TopSectionCrousel/TopSection';

function Home() {

  

  return (
    <div className='home w-full h-fit block overflow-hidden '>
      
      <div className=" w-full lg:h-[550px] h-fit  gap-3 flex justify-center  mb-5">
        <TopSection/>
        {/* <Carousel/> */}
      </div>

      <div className="flex gap-3 w-full h-[260px] text-center text-black text-sm lg:px-[200px]">
       <Second/>
      </div>

      <div className="w-full h-54">
        <img className='w-full h-54' src="https://images.bewakoof.com/uploads/grid/app/Blockbuster-deal-thin-strip-Desktop-Hoodies-under-999-1701969138.jpg" alt="" />
      </div>

      <div className="block w-full h-74 py-2">
        <h2 className='w-full h-8 text-center lg:text-2xl md:text-lg text-[0.8rem] font-800'> Designs of the Week</h2>
        <div className="images flex w-full h-74">
          <img className='w-1/2' src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Slice-1-1701769393.jpg" alt="" />
          <img className='w-1/2' src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Slice-2-1701769392.jpg" alt="" />
        </div>
      </div>

      <div className="block w-full h-78 py-2">
        <h2 className='w-full h-8 text-center lg:text-2xl md:text-lg text-[0.8rem] font-800'> TRENDING CATEGORIES</h2>
        <div className='w-full grid  grid-cols-6 '>
          <TradingCat />
        </div>
      </div>

      {/* best seller category  */}
      <div className='w-full  h-full '>
        <h1 className='w-full lg:pb-5 pb-0 font-semibold text-center text-[16px]'>BESTSELLERS</h1>
        <div className='h-full w-full px-5'>
          <BestSeller />
        </div>
        <button className='text-[#42A2A2] font-bold underline w-fit'>
          <Link to='/Men'>
            <p className=''>Explore All</p>
          </Link>
        </button>
      </div>

      <div className="block w-full  py-2">
        <h2 className='w-full h-8 text-center lg:text-2xl md:text-lg text-[0.8rem] font-800'> Bewakoof Originals</h2>
        <div className="images flex w-full justify-between items-center gap-4 py-3 overflow-hidden">
          <img className='w-1/4' src="https://images.bewakoof.com/uploads/grid/app/windcheater-pc-1701237705.jpg" alt="" />
          <img className='w-1/4' src="https://images.bewakoof.com/uploads/grid/app/Banner-PC-Size-480x457.jpg" alt="" />
          <img className='w-1/4' src="https://images.bewakoof.com/uploads/grid/app/pima-pc-1701237703.jpg" alt="" />
          <img className='w-1/4' src="https://images.bewakoof.com/uploads/grid/app/windcheater-pc-1701237705.jpg" alt="" />
        </div>
      </div>

      <div className="block w-full  py-2">
        <h2 className='w-full h-8 text-center lg:text-2xl md:text-lg text-[0.8rem] font-800'>TOO HOT TO BE MISSED</h2>
        <div className="images h-76  w-full block  items-center py-3 overflow-hidden">
          <div className='w-full flex gap-4 lg:h-[443px] md:h-fit lg:p-4 p-1'>
            <img className='w-1/2 h-auto' src="https://images.bewakoof.com/uploads/grid/app/desktop-mid-size-pj-common--1--1702010986.jpg" alt="" />
            <img className='w-1/2  h-auto' src="https://images.bewakoof.com/uploads/grid/app/Buy3at1199-OOF-Midsize-desktop-Banner-1701958256.jpg" alt="" />
          </div>
          <div className='w-full flex gap-4 lg:h-[443px] md:h-fit lg:p-4 p-1'>
            <img className='w-1/2 h-auto' src="https://images.bewakoof.com/uploads/grid/app/Midsize-desktop-banner-IK-1700638447.jpg" alt="" />
            <img className='w-1/2 h-auto' src="https://images.bewakoof.com/uploads/grid/app/Buy3at999-OOF-Midsize-desktop-Banner--2--1702019832.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="block w-full h-78 py-2">
        <h2 className='w-full h-8 text-center lg:text-2xl md:text-lg text-[0.8rem]  font-800'> Category To Bag</h2>
        <div className='w-full grid  grid-cols-6'>
          <Bag_Category />
        </div>
      </div>

      <div className="crousel w-full lg:h-[550px] h-fit flex gap-3 overflow-hidden">
        <TopSection />
      </div>

      <Footer />

    </div>

  )
}

export default Home;