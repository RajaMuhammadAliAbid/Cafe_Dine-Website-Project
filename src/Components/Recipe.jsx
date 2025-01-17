// React Router Dom
import { Link } from 'react-router-dom'
// Heros Section Images
import heroImage2 from './Images/bg-2.jpg';
import logo from './Images/logo.png'
import { useState } from 'react';

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

// Main Dishes Images Import
import m1 from './Images/m-3.jpg'
import m2 from './Images/m-4.jpg'
import m3 from './Images/m-5.jpg'

// Footer Icon Import
import { FaMobileScreen } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { LiaAddressCardSolid } from "react-icons/lia";

function Recipe() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
                              {/* Heros Section */}
     <div className='relative w-full h-auto'>
        <img className='w-full h-[550px] ' src={heroImage2} alt="" />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

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
                 to="About">About</Link>
            </li>
            <li className='mx-4 my-6 lg:my-0'>
                <Link className='cursor-pointer hover:bg-red-600 rounded-md transition-all p-1'
                 to="Recipe">Recipes</Link>
            </li>
            <li className='mx-4 my-6 lg:my-0'>
                <Link className='cursor-pointer hover:bg-red-600 rounded-md transition-all p-1'
                 to="Gallery">Gallery</Link>
            </li>
            <li className='mx-4 my-6 lg:my-0'>
                <Link className='cursor-pointer hover:bg-red-600 rounded-md transition-all p-1'
                 to="Reservation">Reservation</Link>
            </li>
            <li className='mx-4 my-6 lg:my-0'>
                <Link className='cursor-pointer hover:bg-red-600 rounded-md transition-all p-1'
                 to="Blog">Blog</Link>
            </li>
            <li className='mx-4 my-6 lg:my-0'>
                <Link className='cursor-pointer hover:bg-red-600 rounded-md transition-all p-1'
                 to="Contact">Contact</Link>
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
                     transition-all cursor-pointer p-4'><Link to="About">About</Link></li>

                    <li className='w-full text-center text-white list-none hover:bg-red-600
                     transition-all cursor-pointer p-4'><Link to="Recipe">Recipes</Link></li>

                    <li className='w-full text-center text-white list-none hover:bg-red-600
                     transition-all cursor-pointer p-4'><Link to="Gallery">Gallery</Link></li>

                    <li className='w-full text-center text-white list-none hover:bg-red-600
                     transition-all cursor-pointer p-4'><Link to="Gallery">Reservation</Link></li>

                    <li className='w-full text-center text-white list-none  hover:bg-red-600
                     transition-all cursor-pointer p-4'><Link to="Blog">Blog</Link></li>

                    <li className='w-full text-center text-white list-none hover:bg-red-600
                     transition-all cursor-pointer p-4'><Link to="Contact">Contact</Link></li>
                </div>
     </nav>    
     
     {/* Heros Text Part */}
     <div className='absolute z-1 top-20 flex flex-wrap px-4 lg:px-12 py-48'>
        <h1 className='text-5xl font-bold font-serif text-white'>Food Menu</h1>
     </div>

    </div>
    { /* Heros section end here */}


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
      {/* Cafe Dine Dishes End Here */}

                                
                                 {/* About Cafe Dine */}
      <div className='w-full flex flex-wrap flex-col items-center
       text-center bg-red-50'>
        {/* Main Heading */}
        <div className='h-auto w-100 flex flex-wrap flex-col items-center mt-28'>
            <span className='text-4xl font-serif text-red-600'>Main Dishes</span>
            <h2 className="mt-3 mb-8 font-serif text-black
             text-4xl capitalize leading-snug">We provide quality food. We care <br/>
             about your health </h2>
        </div> 
       </div>
       {/* Cafe Album First Part */}
       <div className="h-auto w-100 flex flex-wrap flex-col items-center
       text-center p-10 bg-red-50">
        <div className='w-full flex flex-wrap justify-evenly'>
            {/* First Card */}
            <div className='w-46 flex flex-col items-center mb-12'>
                <img className='w-96 h-64' src={m1} alt="" />
                <h3 className='text-xl pt-4 font-bold font-serif'>Tuna Roast Source - <span className='text-red-600'>23$</span></h3>
                <p className='text-gray-500 pt-4 text-xs sm:text-lg'>Mushrooms, Ruccola, Pomodoro, <br/>
                Mozzarella, Olives</p>
                <button className='relative w-44 h-14 mt-4 p-4 uppercase bg-red-600 text-white
              hover:bg-black' >Add to cart</button>
            </div>
            {/* Second Card */}
            <div className='w-46 flex flex-col items-center mb-12'>
                <img className='w-96 h-64' src={m2} alt="" />
                <h3 className='text-xl pt-4 font-bold font-serif'>Tuna Roast Source - <span className='text-red-600'>23$</span></h3>
                <p className='text-gray-500 pt-4 text-xs sm:text-lg'>Mushrooms, Ruccola, Pomodoro, <br/>
                Mozzarella, Olives</p>
                <button className='relative w-44 h-14 mt-4 p-4 uppercase bg-red-600 text-white
              hover:bg-black' >Add to cart</button>
            </div>
            {/* Third Card */}
            <div className='w-46 flex flex-col items-center mb-12'>
                <img className='w-96 h-64' src={m3} alt="" />
                <h3 className='text-xl pt-4 font-bold font-serif'>Tuna Roast Source - <span className='text-red-600'>23$</span></h3>
                <p className='text-gray-500 pt-4 text-xs sm:text-lg'>Mushrooms, Ruccola, Pomodoro, <br/>
                Mozzarella, Olives</p>
                <button className='relative w-44 h-14 mt-4 p-4 uppercase bg-red-600 text-white
              hover:bg-black' >Add to cart</button>
            </div>

          </div>
        </div>
         {/* Cafe Album Second Part */}
        <div className="h-auto w-100 flex flex-wrap flex-col items-center
       text-center p-10 bg-red-50">
        <div className='w-full flex flex-wrap justify-evenly'>
            {/* First Card */}
            <div className='w-46 flex flex-col items-center mb-12'>
                <img className='w-96 h-64' src={m3} alt="" />
                <h3 className='text-xl pt-4 font-bold font-serif'>Tuna Roast Source - <span className='text-red-600'>23$</span></h3>
                <p className='text-gray-500 pt-4 text-xs sm:text-lg'>Mushrooms, Ruccola, Pomodoro, <br/>
                Mozzarella, Olives</p>
                <button className='relative w-44 h-14 mt-4 p-4 uppercase bg-red-600 text-white
              hover:bg-black' >Add to cart</button>
            </div>
            {/* Second Card */}
            <div className='w-46 flex flex-col items-center mb-12'>
                <img className='w-96 h-64' src={m2} alt="" />
                <h3 className='text-xl pt-4 font-bold font-serif'>Tuna Roast Source - <span className='text-red-600'>23$</span></h3>
                <p className='text-gray-500 pt-4 text-xs sm:text-lg'>Mushrooms, Ruccola, Pomodoro, <br/>
                Mozzarella, Olives</p>
                <button className='relative w-44 h-14 mt-4 p-4 uppercase bg-red-600 text-white
              hover:bg-black' >Add to cart</button>
            </div>
            {/* Third Card */}
            <div className='w-46 flex flex-col items-center mb-12'>
                <img className='w-96 h-64' src={m1} alt="" />
                <h3 className='text-xl pt-4 font-bold font-serif'>Tuna Roast Source - <span className='text-red-600'>23$</span></h3>
                <p className='text-gray-500 pt-4 text-xs sm:text-lg'>Mushrooms, Ruccola, Pomodoro, <br/>
                Mozzarella, Olives</p>
                <button className='relative w-44 h-14 mt-4 p-4 uppercase bg-red-600 text-white
              hover:bg-black' >Add to cart</button>
            </div>

        </div>
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

export default Recipe