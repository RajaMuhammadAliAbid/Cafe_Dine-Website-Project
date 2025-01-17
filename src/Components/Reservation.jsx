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


function Reservation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
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
        <h1 className='text-5xl font-bold font-serif text-white'>Reservation</h1>
     </div>

    </div>
    { /* Heros section end here */}

                                  
                                   {/* Reservation Section */}
    <div className='w-full h-auto flex flex-row justify-evenly flex-wrap mt-28 mb-28'>
        <div className='flex flex-col'>
        <div className='text-center'>
            <span className='text-4xl font-serif text-red-600'>Reservation</span>
            <h2 className="mt-3 mb-8 font-serif font-semibold text-black text-3xl capitalize leading-snug">
            Reserve your seat for betterment </h2>    
        </div>

        {/* Reservation Form First Row */}
        <div className='flex flex-wrap items-center justify-center gap-6 mt-4'>
            {/* Name */}
            <div>
                <label className='block text-lg mb-2 text-gray-500' htmlFor="name">Name</label>
                <input className='border border-gray-400 w-52 px-4 py-2' type="text"
                name="name" placeholder='Full Name'/>
            </div>
            {/* Email */}
             <div>
                <label className='block text-lg mb-2 text-gray-500' htmlFor="name">Email</label>
                <input className='border border-gray-400 w-52 px-4 py-2' type="text"
                name="name" placeholder='Email Address'/>
            </div>
            {/* Phone */}
             <div>
                <label className='block text-lg mb-2 text-gray-500' htmlFor="name">Phone</label>
                <input className='border border-gray-400 w-52 px-4 py-2' type="text"
                name="name" placeholder='Phone Number'/>
            </div>              
        </div>

        {/* Reservation Form First Row */}
        <div className='flex flex-wrap items-center justify-center gap-6 mt-8'>
            {/* Name */}
            <div>
                <label className='block text-lg mb-2 text-gray-500' htmlFor="name">Number of Persons</label>
                <input className='border border-gray-400 w-52 px-4 py-2' type="text"
                name="name" placeholder='1 Person'/>
            </div>
            {/* Email */}
             <div>
                <label className='block text-lg mb-2 text-gray-500' htmlFor="name">Date</label>
                <input className='border border-gray-400 w-52 px-4 py-2' type="text"
                name="name" placeholder='Select your Date'/>
            </div>
            {/* Phone */}
             <div>
                <label className='block text-lg mb-2 text-gray-500' htmlFor="name">Time</label>
                <input className='border border-gray-400 w-52 px-4 py-2' type="text"
                name="name" placeholder='Select your Time'/>
            </div>              
        </div>

        {/* Reserve Button */}
        <button className='w-36 h-12 mt-12 mb-12 uppercase bg-red-600 text-white
        hover:bg-black' >Reserve Now</button>

      </div>

      {/* Check Availabilty */}
     <div className='flex flex-wrap flex-col justify-center text-center'>
        <div className='w-80 h-[500px] border-2 border-dotted border-black bg-red-50 pt-16'>
            <span className='text-2xl font-serif text-red-600'>Check availabilty</span>
            <h2 className="font-serif font-semibold text-black text-3xl">Opening Times</h2>

            <h4 className='pt-12 font-serif text-lg'>Monday - Thursday </h4>
            <span className='text-gray-500'>9.00-12.00</span>

            <h4 className='pt-8 font-serif text-lg'>Friday - Sunday </h4>
            <span className='text-gray-500'>2.00-8.00</span>

            <p className='pt-12 text-2xl font-serif text-red-600 capitalize'>Call Us For</p>
            <h2 className='text-3xl font-semibold font-serif'>02 34597879</h2>
                
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

export default Reservation