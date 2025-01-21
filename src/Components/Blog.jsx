// React Router Dom
import { Link } from 'react-router-dom'
// Heros Section Images
import heroImage2 from './Images/bg-2.jpg';
import logo from './Images/logo.png'
import { useState } from 'react';

// BLog Posts Images
import blog_1 from './Images/blog_1.jpg'
import blog_2 from './Images/blog_2.jpg'
import blog_3 from './Images/blog_3.jpg'
import blog_4 from './Images/blog_4.jpg'

// Footer Icon Import
import { FaMobileScreen } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { LiaAddressCardSolid } from "react-icons/lia";


function Blog() {
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
        <h1 className='text-5xl font-bold font-serif text-white'>Blog Posts</h1>
     </div>

    </div>
    { /* Heros section end here */}

                                {/* Blog Posts Section */}
    <div className='w-full h-auto flex flex-wrap flex-col items-center mt-28'>

        {/* First Blog */}
        <div className='flex flex-col'>
            <div className='mx-4'>
            <img src={blog_1} alt="" />
            <div className='mt-4'>
                <span className='border-2 border-gray-200 bg-gray-200 p-2 text-lg'>
                    <a href='#'>Cooking</a></span>
                <span className='px-4 text-gray-500 text-lg'>Oct 16, 2019</span>
                <span className=' text-gray-500 text-lg'> | 06 Comment (s) </span>
                <h2 className='text-4xl font-serif pt-8 text-black cursor-pointer
                  hover:text-red-600'>The Festive Season is Approaching</h2>
                <p className='pt-4 text-gray-500 text-lg'>The little rotter spiffing good time lemon squeezy smashing excuse my French old, cheesed <br/>
                     off give us a bell happy days brown bread, blow off Harry barney bobby. Cup of char <br/>
                      gormless hors.! </p> 
                <button className='w-36 h-12 mt-6 mb-12 uppercase bg-red-600 text-white
                  hover:bg-black font-semibold' >Read More</button>       
            </div>
        </div>

         {/* Second Blog */}
         <div className='mx-4'>
            <img src={blog_2} alt="" />
            <div className='mt-4'>
                <span className='border-2 border-gray-200 bg-gray-200 p-2 text-lg'>
                    <a href='#'>Cooking</a></span>
                <span className='px-4 text-gray-500 text-lg'>Oct 16, 2019</span>
                <span className=' text-gray-500 text-lg'> | 06 Comment (s) </span>
                <h2 className='text-4xl font-serif pt-8 text-black cursor-pointer
                  hover:text-red-600'>Join Us For A Delicious Event</h2>
                <p className='pt-4 text-gray-500 text-lg'>The little rotter spiffing good time lemon squeezy smashing excuse my French old, cheesed <br/>
                     off give us a bell happy days brown bread, blow off Harry barney bobby. Cup of char <br/>
                      gormless hors.! </p> 
                <button className='w-36 h-12 mt-6 mb-12 uppercase bg-red-600 text-white
                  hover:bg-black font-semibold' >Read More</button>       
            </div>
        </div>

         {/* Third Blog */}
         <div className='mx-4'>
            <img src={blog_3} alt="" />
            <div className='mt-4'>
                <span className='border-2 border-gray-200 bg-gray-200 p-2 text-lg'>
                    <a href='#'>Cooking</a></span>
                <span className='px-4 text-gray-500 text-lg'>Oct 16, 2019</span>
                <span className=' text-gray-500 text-lg'> | 06 Comment (s) </span>
                <h2 className='text-4xl font-serif pt-8 text-black cursor-pointer
                  hover:text-red-600'>Salted Chicken Fried Rice</h2>
                <p className='pt-4 text-gray-500 text-lg'>The little rotter spiffing good time lemon squeezy smashing excuse my French old, cheesed <br/>
                     off give us a bell happy days brown bread, blow off Harry barney bobby. Cup of char <br/>
                      gormless hors.! </p> 
                <button className='w-36 h-12 mt-6 mb-12 uppercase bg-red-600 text-white
                  hover:bg-black font-semibold' >Read More</button>       
            </div>
        </div>

         {/* Fourth Blog */}
         <div className='mx-4'>
            <img src={blog_4} alt="" />
            <div className='mt-4'>
                <span className='border-2 border-gray-200 bg-gray-200 p-2 text-lg'>
                    <a href='#'>Cooking</a></span>
                <span className='px-4 text-gray-500 text-lg'>Oct 16, 2019</span>
                <span className=' text-gray-500 text-lg'> | 06 Comment (s) </span>
                <h2 className='text-4xl font-serif pt-8 text-black cursor-pointer
                  hover:text-red-600'>Rastaurex Crab With Curry</h2>
                <p className='pt-4 text-gray-500 text-lg'>The little rotter spiffing good time lemon squeezy smashing excuse my French old, cheesed <br/>
                     off give us a bell happy days brown bread, blow off Harry barney bobby. Cup of char <br/>
                      gormless hors.! </p> 
                <button className='w-36 h-12 mt-6 mb-12 uppercase bg-red-600 text-white
                  hover:bg-black font-semibold' >Read More</button>       
            </div>
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

export default Blog