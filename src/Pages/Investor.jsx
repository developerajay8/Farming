import React from 'react'
import TopNavbar from './TopNavbar'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";
import Img7 from "../images/ship-6560671_1280.jpg"
import Footer from './Footer';

function Investor() {
  return (
    <>
          <TopNavbar/>
          <Navbar/>

          <div className='container mx-auto'>
        <div className='relative'>
        <div className=''>
           <img src={Img7} alt="" className='lg:h-[350px] md:h-[280px] h-[200px] w-full'/>
           <div className='absolute inset-0 bg-black bg-opacity-20 flex items-center'>
               <h1 className='text-white lg:pl-16 md:pl-8 pl-4 text-[40px] font-semibold'>Investor<br /></h1>
                <div className='text-white hover:text-[#d57315] hidden md:block  text-[20px] font-semibold pt-[120px]'>
                    <Link to={"/"}>
                         Home
                    </Link>
                </div>
                <BsArrowRight className='text-white hidden md:block mt-[125px] md:ml-4 text-[20px]' />
                  <div className=' hover:text-white hidden md:block text-[#d57315] text-[20px] md:ml-5 font-semibold pt-[120px]'>
                <Link to={"/investors"}>
                    Investor  
                </Link>
                </div>
           </div>
        </div>
        </div>
       </div>  

    <Footer/>
    </>

  )
}

export default Investor