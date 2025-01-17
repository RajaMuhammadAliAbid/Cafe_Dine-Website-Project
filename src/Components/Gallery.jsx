// React Router Dom
import { Link } from 'react-router-dom'
// Heros Section Images
import heroImage2 from './Images/bg-2.jpg';
import logo from './Images/logo.png'
import { useState } from 'react';

// Our Gallery Import Image
import ourGallery1 from './Images/ourGallery-1.jpg'
import ourGallery2 from './Images/ourGallery-2.jpg'
import ourGallery3 from './Images/ourGallery-3.jpg'
import ourGallery4 from './Images/ourGallery-4.jpg'
import ourGallery5 from './Images/ourGallery-5.jpg'
import ourGallery6 from './Images/ourGallery-6.jpg'
import ourGallery7 from './Images/ourGallery-7.jpg'
import ourGallery8 from './Images/ourGallery-8.jpg'
import ourGallery9 from './Images/ourGallery-9.jpg'
import ourGallery12 from './Images/ourGallery-12.jpg'
import ourGallery10 from './Images/ourGallery-10.jpg'

// Footer Icon Import
import { FaMobileScreen } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { LiaAddressCardSolid } from "react-icons/lia";


function Gallery() {
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
        <h1 className='text-5xl font-bold font-serif text-white'>Our Gallery</h1>
     </div>

    </div>
    { /* Heros section end here */}

                                   {/* Our Gallery */}
    <div className='w-full h-auto flex flex-wrap flex-col items-center text-center'>
        {/* Main Heading */}
        <div className='h-auto w-100 flex flex-wrap flex-col items-center mt-28'>
            <span className='text-4xl font-serif text-red-600'>Our Gallery</span>
            <h2 className="mt-3 mb-8 font-serif font-semibold text-black text-3xl capitalize leading-snug">
            Awesome palce good decoration to <br/>
             spend quality time </h2>     
        </div>
        <div className='flex flex-wrap flex-row justify-center items-center'>
            <img className='w-96 h-64 mx-4 mb-8' src={ourGallery1} alt="" />
            <img className='w-96 h-64 mx-4 mb-8' src={ourGallery2} alt="" />
            <img className='w-96 h-64 mx-4 mb-8' src={ourGallery3} alt="" />
        </div>
        <div className='w-full h-1 mt-12 border-b-2 border-gray-500'></div>
    </div>

                            {/* Our Gallery Some More */}
    <div className='flex flex-wrap flex-row justify-center mt-20 mb-14'>
        <div className='text-4xl font-serif font-semibold text-center px-10'>
        <h2>Lets check out <br/>
            some more</h2>
        </div>
        <div className='text-gray-500'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae veritatis in facere a cupiditate <br/>
             quibusdam sapiente rerum architecto facilis ab tempore accusantium laboriosam at porro, aut <br/>
              suscipit rem voluptate neque.</p>
        </div>
    </div>

      {/* Our Gallery First Row More Image */}
    <div className='w-full h-auto flex flex-wrap flex-col items-center text-center'>
        <div className='flex flex-wrap flex-row justify-center items-center'>
            <img className='w-96 h-64 mx-4 mb-8' src={ourGallery3} alt="" />
            <img className='w-96 h-64 mx-4 mb-8' src={ourGallery4} alt="" />
            <img className='w-96 h-64 mx-4 mb-8' src={ourGallery5} alt="" />
        </div>
    </div>
     {/* Our Gallery Second Row More Image */}
     <div className='w-full h-auto flex flex-wrap flex-col items-center text-center'>
        <div className='flex flex-wrap flex-row justify-center items-center'>
            <img className='w-96 h-64 mx-4 mb-8' src={ourGallery6} alt="" />
            <img className='w-96 h-64 mx-4 mb-8' src={ourGallery7} alt="" />
            <img className='w-96 h-64 mx-4 mb-8' src={ourGallery8} alt="" />
        </div>
    </div>
     {/* Our Gallery Third Row More Image */}
     <div className='w-full h-auto flex flex-wrap flex-col items-center text-center'>
        <div className='flex flex-wrap flex-row justify-center items-center'>
            <img className='w-96 h-64 mx-4 mb-8' src={ourGallery9} alt="" />
            <img className='w-96 h-64 mx-4 mb-8' src={ourGallery12} alt="" />
            <img className='w-96 h-64 mx-4 mb-8' src={ourGallery10} alt="" />
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

export default Gallery