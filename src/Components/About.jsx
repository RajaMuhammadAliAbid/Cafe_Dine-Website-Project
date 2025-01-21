// React Router Dom
import { Link } from 'react-router-dom'
// Heros Section Images
import heroImage2 from './Images/bg-2.jpg';
import logo from './Images/logo.png'
import { useState } from 'react';

// About Images
import about1 from './Images/about-img.jpg'
import about2 from './Images/about-2.jpg'

// Chefs Images
import chef1 from './Images/chef_1.jpg'
import chef2 from './Images/chef_2.jpg'
import chef3 from './Images/chef_3.jpg'

// Experience Image Import
import ctaBg from './Images/cta-bg.jpg'

// Good Service Facilities Import Icons
import { IoFastFoodSharp } from "react-icons/io5";
import { MdNoFood } from "react-icons/md";
import { BsCakeFill } from "react-icons/bs";

import { TbSaladFilled } from "react-icons/tb";
import { MdEventSeat } from "react-icons/md";
import { RiReservedFill } from "react-icons/ri";

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


function About() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
    <div className='relative w-full h-auto'>
        <img className='w-full h-screen' src={heroImage2} alt="" />
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
     <div className='absolute z-1 w-full top-1/2 flex flex-wrap flex-col items-center'>
        <h1 className='text-5xl font-bold font-serif text-white'>About Us</h1>
     </div>

    </div>
    { /* Heros section end here */}

                                     {/* About Us Section */}
    <div className='w-full h-auto mt-28 flex flex-wrap flex-row justify-center'>
        <div className='mx-8'>
            <img className='w-52' src={about1} alt="" />
        </div>
        <div className=''>
            <img className='w-72' src={about2} alt="" />
        </div>
        <div className='mx-8'>
        <h2 className="mb-4 text-3xl font-semibold font-serif">About Us</h2>
        <p className='mb-4 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>
            Sapiente necessitatibus id, animi nemo quos eos minus <br/>
            adipisci veritatis quibusdamm.</p> 
        <p className="mb-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>
            repudiandae eius doloribus accusamus fugit .</p>  
        <ul className="list-unstyled font-semibold text-lg">
            <li>
                <h4>- Clean Environment</h4>
            </li>

            <li>
                <h4>- Experience chefs</h4>
            </li>

            <li>
                <h4>- Fresh and creative dishes</h4>
            </li>
        </ul> 
        </div>
        <div className='w-full h-1 mt-12 border-b-2 border-gray-500'></div>
    </div>
    {/* About Us End Here */}

                                     {/* Meet The Chefs */}
    <div className='w-full h-auto flex flex-col flex-wrap items-center text-center mt-20'>
        <div className='h-auto w-100 flex flex-wrap flex-col items-center'>
            <span className='text-4xl capitalize font-serif text-red-600'>Meet the chefs</span>
            <h2 className="mt-3 mb-8 font-serif text-black
             text-4xl capitalize leading-snug">We have experienced and creative <br/>
             chefs to start </h2>
        </div>
    </div>    

         {/* Cafe Album Part */}
       <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
        <div className='w-full flex flex-wrap justify-evenly'>
            {/* First Card */}
            <div className='w-46 flex flex-col items-center mb-12'>
                <img className='w-96 h-64' src={chef1} alt="" />
                <h3 className='text-xl pt-4 font-bold font-serif'>Daniel Graham</h3>
                <p className='text-gray-500 text-xs sm:text-lg'>Lorem ipsum dolor sit amet, consectetur <br/>
                adipisicing elit.impedit maiores fugit illo <br/>
                deserunt!</p>
            </div>
            {/* Second Card */}
            <div className='w-46 flex flex-col items-center mb-12'>
                <img className='w-96 h-64' src={chef2} alt="" />
                <h3 className='text-xl pt-4 font-bold font-serif'>Nick Browing</h3>
                <p className='text-gray-500 text-xs sm:text-lg'>Lorem ipsum dolor sit amet, consectetur <br/>
                adipisicing elit.impedit maiores fugit illo <br/>
                deserunt!</p>
            </div>
            {/* Third Card */}
            <div className='w-46 flex flex-col items-center mb-12'>
                <img className='w-96 h-64' src={chef3} alt="" />
                <h3 className='text-xl pt-4 font-bold font-serif'>Willium Jack</h3>
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
             leading-snug">Are you looking for a <br/>
              quite place</h2>
            <button className='w-36 h-12 mt-6 uppercase bg-white text-black
            font-bold hover:bg-red-600 hover:text-white' >Book Now</button> 
            </div>
        </div>

                                     { /* Our Services */}
        <div className='w-full h-auto flex flex-col flex-wrap items-center text-center mt-20'>
            <div className='h-auto w-100 flex flex-wrap flex-col items-center'>
                <span className='text-4xl capitalize font-serif text-red-600'>Our services</span>
                <h2 className="mt-3 mb-8 font-serif text-black
                text-4xl capitalize leading-snug">We provide good services with lots <br/>
                of facilities </h2>
            </div>
       </div>

       {/* Good Service Facilities First Row */}
       <div className='w-full h-auto flex flex-wrap flex-row items-center'>
        <div className='w-full flex flex-wrap flex-row justify-center items-center  '>
            {/* Delicious Food */}
            <div className='py-16 px-14'>
            <i className='text-6xl text-gray-500'><IoFastFoodSharp /></i>
                <h3 className='text-xl pt-4 font-bold font-serif'>Fresh Food</h3>
                <p className='text-gray-500 pt-4 sm-text-lg'>Lorem ipsum dolor sit amet, <br/>
                   consectetur adipisicing elit. <br/>
                   Mollitia animi ipsam obcaecati.</p>
            </div>
            {/* Online Order */}
            <div className='py-16 px-14 '>
            <i className='text-6xl text-gray-500'><MdNoFood /></i>
                <h3 className='text-xl pt-4 font-bold font-serif'>Quality Cuisine</h3>
                <p className='text-gray-500 pt-4 sm-text-lg'>Lorem ipsum dolor sit amet, <br/>
                   consectetur adipisicing elit. <br/>
                   Mollitia animi ipsam obcaecati.</p>
            </div>
            {/* Free Delivery */}
            <div className='py-16 px-14'>
            <i className='text-6xl text-gray-500'><BsCakeFill /></i>    
                <h3 className='text-xl pt-4 font-bold font-serif'>Bread & Pancake</h3>
                <p className='text-gray-500 pt-4 sm-text-lg'>Lorem ipsum dolor sit amet, <br/>
                   consectetur adipisicing elit. <br/>
                   Mollitia animi ipsam obcaecati.</p>
            </div>
        </div>
    </div>

     {/* Good Service Facilities Second Row */}
    <div className='w-full h-auto flex flex-wrap flex-row items-center'>
        <div className='w-full flex flex-wrap flex-row justify-center items-center  '>
            {/* Delicious Food */}
            <div className='py-16 px-14'>
            <i className='text-6xl text-gray-500'><TbSaladFilled /></i>
                <h3 className='text-xl pt-4 font-bold font-serif'>Fresh Vegies Salad</h3>
                <p className='text-gray-500 pt-4 sm-text-lg'>Lorem ipsum dolor sit amet, <br/>
                   consectetur adipisicing elit. <br/>
                   Mollitia animi ipsam obcaecati.</p>
            </div>
            {/* Online Order */}
            <div className='py-16 px-14 '>
            <i className='text-6xl text-gray-500'><MdEventSeat /></i>
                <h3 className='text-xl pt-4 font-bold font-serif'>Event Management</h3>
                <p className='text-gray-500 pt-4 sm-text-lg'>Lorem ipsum dolor sit amet, <br/>
                   consectetur adipisicing elit. <br/>
                   Mollitia animi ipsam obcaecati.</p>
            </div>
            {/* Free Delivery */}
            <div className='py-16 px-14'>
            <i className='text-6xl text-gray-500'><RiReservedFill /></i>    
                <h3 className='text-xl pt-4 font-bold font-serif'>Reserve Now</h3>
                <p className='text-gray-500 pt-4 sm-text-lg'>Lorem ipsum dolor sit amet, <br/>
                   consectetur adipisicing elit. <br/>
                   Mollitia animi ipsam obcaecati.</p>
            </div>
        </div>
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

export default About