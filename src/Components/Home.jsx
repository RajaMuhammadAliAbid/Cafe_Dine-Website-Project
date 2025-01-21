import { Link } from 'react-router-dom'

import heroImage from './Images/slide-1.jpg';
import logo from './Images/logo.png'
import { useState } from 'react';

// React Icon Import Part
import { LuSoup } from "react-icons/lu";
import { MdOutlineBookOnline } from "react-icons/md";
import { GiDeliveryDrone } from "react-icons/gi";

// About Cafe Dine Images Import
import cafeDine1 from './Images/1_cafe_dine.jpg'
import cafeDine2 from './Images/2_cafe_dine.jpg'
import cafeDine3 from './Images/3_cafe_dine.jpg'

// Experience Image Import
import ctaBg from './Images/cta-bg.jpg'

// Menu Image Import
import menu1 from './Images/menu-1.jpg'
import menu2 from './Images/menu-2.jpg'
import menu3 from './Images/menu-3.jpg'
import menu4 from './Images/menu-4.jpg'
import menu5 from './Images/menu-5.jpg'
import menu6 from './Images/menu-6.jpg'
import menu7 from './Images/menu-7.jpg'
import menu8 from './Images/menu-8.jpg'

import food from './Images/food.png'

// Import Marquee Part
import Marquee from 'react-fast-marquee'
// Gallery Image Import
import gallery1 from './Images/gallery-1.jpg'
import gallery2 from './Images/gallery-2.jpg'
import gallery3 from './Images/gallery-3.jpg'
import gallery4 from './Images/gallery-4.jpg'
import gallery5 from './Images/gallery-5.jpg'
import gallery6 from './Images/gallery-6.jpg'

// Footer Icon Import
import { FaMobileScreen } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { LiaAddressCardSolid } from "react-icons/lia";


function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    


  return (
    <>
                                {/* Heros Section */}
      {/* Header */}
      <div className='relative w-full h-auto'>
        <img className='w-full h-auto bg-cover ' src={heroImage} alt="" />

       {/* NavBar */}
      <nav className='absolute z-10 w-full top-0 left-0 flex justify-between px-4 lg:px-12 py-2
       bg-black drop-shadow-md'>
        <div className=''>
            <img src={logo} alt="" />
        </div>    

        <ul className='hidden lg:flex items-center text-white text-base font-semibold'>
            <li className='mx-4 my-6 lg:my-0'>
                <Link className='cursor-pointer hover:bg-red-600 rounded-md transition-all p-1'
                 to="/">Home</Link>
            </li>
            <li className='mx-4 my-6 lg:my-0'>
                <Link className='cursor-pointer hover:bg-red-600 rounded-md transition-all p-1'
                 to="/about">About</Link>
            </li>
            <li className='mx-4 my-6 lg:my-0'>
                <Link className='cursor-pointer hover:bg-red-600 rounded-md transition-all p-1'
                 to="/recipe">Recipes</Link>
            </li>
            <li className='mx-4 my-6 lg:my-0'>
                <Link className='cursor-pointer hover:bg-red-600 rounded-md transition-all p-1'
                 to="/gallery">Gallery</Link>
            </li>
            <li className='mx-4 my-6 lg:my-0'>
                <Link className='cursor-pointer hover:bg-red-600 rounded-md transition-all p-1'
                 to="/reservation">Reservation</Link>
            </li>
            <li className='mx-4 my-6 lg:my-0'>
                <Link className='cursor-pointer hover:bg-red-600 rounded-md transition-all p-1'
                 to="/blog">Blog</Link>
            </li>
            <li className='mx-4 my-6 lg:my-0'>
                <Link className='cursor-pointer hover:bg-red-600 rounded-md transition-all p-1'
                 to="/contact">Contact</Link>
            </li>
        </ul>

        {/* NavBar Icon */}
        <i className='bx bx-menu text-white lg:hidden flex items-center
        text-4xl cursor-pointer'
        onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
        {/* NavBar Clickable Part */}
        <div className={`absolute lg-hidden top-20 left-0
            w-full bg-black flex flex-col items-center ${isMenuOpen ? 
                "opacity-100" : "opacity-0"}`}>
                    <li className='w-full text-center text-white list-none hover:bg-red-600
                     transition-all cursor-pointer p-4'><Link to="/">Home</Link></li>

                    <li className='w-full text-center text-white list-none hover:bg-red-600
                     transition-all cursor-pointer p-4'><Link to="/about">About</Link></li>

                    <li className='w-full text-center text-white list-none hover:bg-red-600
                     transition-all cursor-pointer p-4'><Link to="/recipe">Recipes</Link></li>

                    <li className='w-full text-center text-white list-none hover:bg-red-600
                     transition-all cursor-pointer p-4'><Link to="/gallery">Gallery</Link></li>

                    <li className='w-full text-center text-white list-none hover:bg-red-600
                     transition-all cursor-pointer p-4'><Link to="/reservation">Reservation</Link></li>

                    <li className='w-full text-center text-white list-none  hover:bg-red-600
                     transition-all cursor-pointer p-4'><Link to="/blog">Blog</Link></li>

                    <li className='w-full text-center text-white list-none hover:bg-red-600
                     transition-all cursor-pointer p-4'><Link to="/contact">Contact</Link></li>
                </div>
     </nav>    
     
     {/* Heros Text Part */}
     <div className='absolute z-1 top-20 left-0 flex flex-col flex-wrap py-2 px-6 xl:py-24 lg:px-12'>
        <span className='sm:text-3xl text-red-600 '>Welcome to restuarent</span>
        <h1 className='text-sm sm:text-3xl md:text-5xl sm:mt-6 text-white'>Good food starts with good <br/>
            ingridients.Have a great <br/>
             time with us</h1>
        <button className='w-24 h-7 sm:w-36 sm:h-12 mt-1 sm:mt-6 text-xs sm:text-lg uppercase bg-red-600 text-white
        hover:bg-black' >View Menu</button>     
     </div>

    </div>
    { /* Heros section end here */}

                                 {/* Order Section */}
    <div className='w-full h-auto flex flex-wrap flex-col
      items-center'>
        <div className='absolute  flex flex-wrap mt-2 sm:mt-[-80px]'>
            {/* Delicious Food */}
            <div className='py-16 px-14 bg-white border-b-2 border-x-2'>
            <i className='text-6xl text-gray-500'><LuSoup /></i>
                <h3 className='text-xl pt-4 font-bold font-serif'>Delicious Food</h3>
                <p className='text-gray-500 pt-4 sm-text-lg'>Lorem ipsum dolor sit amet, <br/>
                   consectetur adipisicing elit. <br/>
                   Mollitia animi ipsam obcaecati.</p>
            </div>
            {/* Online Order */}
            <div className='py-16 px-14 bg-gray-100 border-b-2 border-x-2 '>
            <i className='text-6xl text-gray-500'><MdOutlineBookOnline /></i>
                <h3 className='text-xl pt-4 font-bold font-serif'>Online Order</h3>
                <p className='text-gray-500 pt-4 sm-text-lg'>Lorem ipsum dolor sit amet, <br/>
                   consectetur adipisicing elit. <br/>
                   Mollitia animi ipsam obcaecati.</p>
            </div>
            {/* Free Delivery */}
            <div className='py-16 px-14 bg-white border-b-2 border-x-2'>
            <i className='text-6xl text-gray-500'><GiDeliveryDrone /></i>    
                <h3 className='text-xl pt-4 font-bold font-serif'>Free Delivery</h3>
                <p className='text-gray-500 pt-4 sm-text-lg'>Lorem ipsum dolor sit amet, <br/>
                   consectetur adipisicing elit. <br/>
                   Mollitia animi ipsam obcaecati.</p>
            </div>
        </div>
    </div>
    {/* Order section end here */}


                                  {/* About Cafe Dine */}
       <div className='w-full flex flex-wrap flex-col items-center
       text-center lg:mt-80 sm:mt-[650px] mt-[1050px]'>
        {/* Main Heading */}
        <div className='h-auto w-100 flex flex-wrap flex-col items-center'>
            <span className='text-4xl font-serif text-red-600'>About Cafe Dine</span>
            <h2 className="mt-3 mb-8 font-serif text-black
             text-4xl capitalize leading-snug">We are a modern restaurant in the <br/>
             center of the city </h2>
        </div> 
       </div>

       {/* Cafe Album Part */}
       <div className="h-auto w-100 flex flex-wrap flex-col items-center
       text-center p-10">
        <div className='w-full flex flex-wrap justify-evenly'>
            {/* First Card */}
            <div className='w-46 flex flex-col items-center mb-12'>
                <img className='w-96 h-64' src={cafeDine1} alt="" />
                <h3 className='text-xl pt-4 font-bold font-serif'>Quality Food</h3>
                <p className='text-gray-500 text-xs sm:text-lg'>Lorem ipsum dolor sit amet, consectetur <br/>
                adipisicing elit.impedit maiores fugit illo <br/>
                deserunt!</p>
            </div>
            {/* Second Card */}
            <div className='w-46 flex flex-col items-center mb-12'>
                <img className='w-96 h-64' src={cafeDine2} alt="" />
                <h3 className='text-xl pt-4 font-bold font-serif'>Friendly Place</h3>
                <p className='text-gray-500 text-xs sm:text-lg'>Lorem ipsum dolor sit amet, consectetur <br/>
                adipisicing elit.impedit maiores fugit illo <br/>
                deserunt!</p>
            </div>
            {/* Third Card */}
            <div className='w-46 flex flex-col items-center mb-12'>
                <img className='w-96 h-64' src={cafeDine3} alt="" />
                <h3 className='text-xl pt-4 font-bold font-serif'>Affordable Price</h3>
                <p className='text-gray-500 text-xs sm:text-lg'>Lorem ipsum dolor sit amet, consectetur <br/>
                adipisicing elit.impedit maiores fugit illo <br/>
                deserunt!</p>
            </div>

          </div>
        </div>

                           
                           {/* Experience Image Part */}
        <div className='relative  w-full h-auto flex flex-wrap flex-col
             items-center justify-center text-center '>
            {/* Background Image */}    
            <img className=' w-full h-[450px] ' src={ctaBg} alt="" />
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            {/* Text Part */}
            <div className='absolute flex flex-wrap flex-col
             items-center text-center'>
            <span className="font-extra text-md-2 text-gray-400 font-serif
             text-2xl">Prepare The Best Dishes</span>
            <h2 className="mt-3 mb-4 text-4xl break-normal md:text-5xl text-wrap font-serif text-white
             leading-snug">Come &amp; Experience Our Best of <br/>
            World Class Cousine</h2>
            <button className='w-36 h-12 mt-6 uppercase bg-white text-black
            font-bold hover:bg-red-600 hover:text-white' >Book Now</button> 
            </div>
        </div>

         
                            {/* Cafe Dine Dishes */}
        <div className='w-full h-auto flex flex-wrap flex-col
            items-center text-center mt-28'>

         <div className='h-auto w-100 flex flex-wrap flex-col items-center'>
            <span className='text-4xl font-serif text-red-600'>Cafe Dine Dishes</span>
            <h2 className="mt-3 mb-8 font-serif text-black text-5xl capitalize
             leading-snug break-normal">We provide quality food. We care <br/>
             about your health </h2>
         </div>

         {/* Menu Text Part */}
          <div className='w-full flex flex-wrap flex-row justify-center
           text-center'>
            <p className='px-10 py-10 uppercase text-gray-500 font-bold
            cursor-pointer'>All</p>
            <p className='px-10 py-10 uppercase text-gray-500 font-bold
            cursor-pointer'>Starter</p>
            <p className='px-10 py-10 uppercase text-gray-500 font-bold
            cursor-pointer'>Launch</p>
            <p className='px-10 py-10 uppercase text-gray-500 font-bold
            cursor-pointer'>Dinner</p>
         </div>

          {/* Menu Part */}
         <div className='w-full h-auto flex flex-wrap justify-between px-12 md:px-40'>

            {/* Menu Card First Row */}
            <div className=' h-72 sm:h-60 md:w-[500px] md:h-36 md:flex p-4 mt-8 border-2 border-dotted border-gray-500'>
                <img className='w-36 h-24' src={menu1} alt="" />
                <div className=' flex flex-col py-4 md:p-4'>
                <h4 className='text-xl font-serif font-semibold'>Vitello Tonato
                   - <span className='text-red-600'>23$</span></h4>
                <p className='text-gray-500 font-serif text-base'>Chinese mustard/Chipotle aiol</p>
                </div>
            </div>

            <div className=' h-72 sm:h-60 md:w-[500px] md:h-36 md:flex p-4 mt-8 border-2 border-dotted border-gray-500'>
                <img className='w-36 h-24' src={menu2} alt="" />
                <div className=' flex flex-col py-4 md:p-4'>
                <h4 className='text-xl font-serif font-semibold'>Crema di
                   - <span className='text-red-600'>34$</span></h4>
                <p className='text-gray-500 font-serif text-base'>Chinese mustard/Chipotle aiol</p>
                </div>
            </div>

            {/* Menu Card Second Row */}
             <div className=' h-72 sm:h-60 md:w-[500px] md:h-36 md:flex p-4 mt-8 border-2 border-dotted border-gray-500'>
                <img className='w-36 h-24' src={menu3} alt="" />
                <div className=' flex flex-col py-4 md:p-4'>
                <h4 className='text-xl font-serif font-semibold'>Oatmeal Cookie
                   - <span className='text-red-600'>13$</span></h4>
                <p className='text-gray-500 font-serif text-base'>Chinese mustard/Chipotle aiol</p>
                </div>
            </div>

            <div className=' h-72 sm:h-60 md:w-[500px] md:h-36 md:flex p-4 mt-8 border-2 border-dotted border-gray-500'>
                <img className='w-36 h-24' src={menu4} alt="" />
                <div className=' flex flex-col py-4 md:p-4'>
                <h4 className='text-xl font-serif font-semibold'>Seasonal Soup
                   - <span className='text-red-600'>10$</span></h4>
                <p className='text-gray-500 font-serif text-base'>Chinese mustard/Chipotle aiol</p>
                </div>
            </div>

             {/* Menu Card Third Row */}
             <div className=' h-72 sm:h-60 md:w-[500px] md:h-36 md:flex p-4 mt-8 border-2 border-dotted border-gray-500'>
                <img className='w-36 h-24' src={menu5} alt="" />
                <div className=' flex flex-col py-4 md:p-4'>
                <h4 className='text-xl font-serif font-semibold'>Pizza Pane
                   - <span className='text-red-600'>28$</span></h4>
                <p className='text-gray-500 font-serif text-base'>Chinese mustard/Chipotle aiol</p>
                </div>
            </div>

            <div className=' h-72 sm:h-60 md:w-[500px] md:h-36 md:flex p-4 mt-8 border-2 border-dotted border-gray-500'>
                <img className='w-36 h-24' src={menu6} alt="" />
                <div className=' flex flex-col py-4 md:p-4'>
                <h4 className='text-xl font-serif font-semibold'>Carpacio
                   - <span className='text-red-600'>20$</span></h4>
                <p className='text-gray-500 font-serif text-base'>Chinese mustard/Chipotle aiol</p>
                </div>
            </div>

             {/* Menu Card Fourth Row */}
             <div className=' h-72 sm:h-60 md:w-[500px] md:h-36 md:flex p-4 mt-8 border-2 border-dotted border-gray-500'>
                <img className='w-36 h-24' src={menu7} alt="" />
                <div className=' flex flex-col py-4 md:p-4'>
                <h4 className='text-xl font-serif font-semibold'>Insalata Rucola
                   - <span className='text-red-600'>15$</span></h4>
                <p className='text-gray-500 font-serif text-base'>Chinese mustard/Chipotle aiol</p>
                </div>
            </div>

            <div className=' h-72 sm:h-60 md:w-[500px] md:h-36 md:flex p-4 mt-8 border-2 border-dotted border-gray-500'>
                <img className='w-36 h-24' src={menu8} alt="" />
                <div className=' flex flex-col py-4 md:p-4'>
                <h4 className='text-xl font-serif font-semibold'>Carpacio
                   - <span className='text-red-600'>13$</span></h4>
                <p className='text-gray-500 font-serif text-base'>Chinese mustard/Chipotle aiol</p>
                </div>
            </div>

         </div>
         {/* Button Part */}
         <button className='relative w-44 h-14 mt-12 p-4 uppercase bg-black text-white
        hover:bg-red-600' >View Full menu</button>

      </div> 
      {/* Side Image */}
        <div className='flex flex-row justify-end mt-[-120px]'>
        <img className='' src={food} alt="" />
        </div>

                                
                                {/* Gallery Section */}  
        <div className='overflow-hidden relative w-full h-auto mt-32'>
       <Marquee>
        <img className='w-60 px-1 rounded-lg shadow-md' src={gallery1} alt="" />
        <img className='w-60 px-1 rounded-lg shadow-md' src={gallery2} alt="" />
        <img className='w-60 px-1 rounded-lg shadow-md' src={gallery3} alt="" />
        <img className='w-60 px-1 rounded-lg shadow-md' src={gallery4} alt="" />
        <img className='w-60 px-1 rounded-lg shadow-md' src={gallery5} alt="" />
        <img className='w-60 px-1 rounded-lg shadow-md' src={gallery6} alt="" />
       </Marquee>
       </div>

                            {/* Our Footer Section */}
     <footer className="w-full h-auto bg-black px-4 text-white pt-20
      flex flex-col md:flex-row flex-wrap justify-between md:px-12">
      <div>
        <h2 className="font-bold text-xl mt-4">About</h2>
        <div className="w-32 h-1 border-b-2 border-red-600
        rounded-2xl my-2"></div>
        <div>
            <p className='mt-8 text-gray-500'>Lorem ipsum dolor sit amet consectetur <br/>
             adipisicing elit. Similique, fugit.</p>
        </div>
      </div>

      <div>
        <h2 className="font-bold text-xl mt-4">Contact Info</h2>
        <div className="w-32 h-1 border-b-2 border-red-600
        rounded-2xl my-2"></div>
        <div>
            <p className='flex mt-8 text-gray-500' ><span className='py-1
             px-2'><FaMobileScreen /></span>+1 987 654 3210</p>
            <p className='flex pt-3 text-gray-500' ><span className='py-1
             px-2'><TfiEmail /></span>mail@support.com</p>
            <p className='flex pt-3 text-gray-500' ><span className='py-1
             px-2'><LiaAddressCardSolid /></span>1234 Altschul, New York</p>
           
        </div>
      </div>

      <div>
        <h2 className="font-bold text-xl mt-4">Opening Hours</h2>
        <div className="w-32 h-1 border-b-2 border-red-600
        rounded-2xl my-2"></div>
        <div>
            <p className='text-gray-500 mt-8'>Monday - Thursday</p>
            <p>10:00 AM - 11:00 PM</p>

            <p className='text-gray-500 mt-8'>Friday - Sunday</p>
            <p>12:00 AM - 03:00 Am</p>
        </div>
      </div>

    </footer>
        
    </>
  )
}



export default Home
