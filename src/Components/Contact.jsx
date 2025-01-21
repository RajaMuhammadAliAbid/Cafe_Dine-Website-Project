// React Router Dom
import { Link } from 'react-router-dom'
// Heros Section Images
import heroImage2 from './Images/bg-2.jpg';
import logo from './Images/logo.png'
import { useState } from 'react';

// Footer Icon Import
import { FaMobileScreen } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { LiaAddressCardSolid } from "react-icons/lia";


function Contact() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
  return (
    <>
                                 {/* Heros Section */}
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
        <h1 className='text-4xl sm:text-5xl font-bold font-serif text-white'>Get In Touch</h1>
     </div>

    </div>
    { /* Heros section end here */}

                                {/* Get In Touch Section */}
    <div className='w-full h-auto flex flex-col justify-evenly flex-wrap mt-28 mb-28'>
        <div className='flex flex-col'>
        <div className='text-center'>
            <span className='text-2xl font-serif text-red-600'>Contact us</span>
            <h2 className="mt-3 mb-8 font-serif text-black text-5xl capitalize leading-snug">
              Get In Touch</h2>    
        </div>

        {/* Form First Row */}
        <div className='flex flex-wrap items-center justify-center gap-6 mt-4'>
             {/* Name */}
             <div>
                <input className='border border-red-50 w-64 sm:w-96 h-14 px-4 py-2 bg-red-50' type="text"
                   name="name" placeholder='Your Name'/>
            </div>
            {/* Email */}
             <div>
                <input className='border border-red-50 w-64 sm:w-96 h-14 px-4 py-2 bg-red-50' type="text"
                name="name" placeholder='Email Address'/>
            </div>
        </div>

         {/* Form Second Row */}
         <div className='flex flex-wrap items-center justify-center gap-6 mt-4'>
             {/* Phone Number */}
             <div>
                <input className='border border-red-50 w-64 sm:w-96 h-14 px-4 py-2 bg-red-50' type="text"
                   name="name" placeholder='Phone Number'/>
            </div>
            {/* Subject */}
             <div>
                <input className='border border-red-50 w-64 sm:w-96 h-14 px-4 py-2 bg-red-50' type="text"
                name="name" placeholder='Subject'/>
            </div>
        </div>

        {/* Form Third Row */}
        <div className='flex flex-wrap items-center justify-center gap-6 mt-4'>
            <textarea className='border border-red-50 w-64 sm:w-96 h-48 bg-red-50 px-4 py-2 text-gray-400'
              name='Comments' placeholder='Your Message'></textarea>
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

export default Contact