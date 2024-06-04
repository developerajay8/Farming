import React from 'react'
import TopNavbar from './TopNavbar'
import Navbar from './Navbar'
import Img6 from '../images/farming-4.jpg'
import { Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { IoMdCall } from "react-icons/io";
import Img7 from '../images/farming-6.png'
import Footer from './Footer'
import Img8 from '../images/ship-6560671_1280.jpg'


function Exports() {
  return (
    <>
       <TopNavbar/>
        <Navbar/>

        <div className='container mx-auto'>
        <div className='relative'>
        <div className=''>
           <img src={Img8} alt="" className='lg:h-[350px] md:h-[280px] h-[200px] w-full'/>
           <div className='absolute inset-0 bg-black bg-opacity-20 flex items-center'>
               <h1 className='text-white lg:pl-16 md:pl-8 pl-4 text-[40px] font-semibold'>Exports<br /></h1>
                <div className='text-white hover:text-[#d57315] hidden md:block  text-[20px] font-semibold pt-[120px]'>
                    <Link to={"/"}>
                         Home
                    </Link>
                </div>
                <BsArrowRight className='text-white hidden md:block mt-[125px] md:ml-4 text-[20px]' />
                  <div className=' hover:text-white hidden md:block text-[#d57315] text-[20px] md:ml-5 font-semibold pt-[120px]'>
                <Link to={"/exports"}>
                     Exports
                </Link>
                </div>
           </div>
        </div>
        </div>
       </div>

       <div className='grid lg:grid-cols-3 lg:p-8 gap-6 container mx-auto'>
        <div className=' grid cols-1'>
       <div className="mt-9 border flex gap-5 ml-[20px] lg:ml-0 items-center border-gray-200 bg-slate-100 hover:bg-black hover:text-white duration-500 ">
                <FaFilePdf className="bg-black h-[50px] w-[50px] p-2 text-2xl text-white " />

                <h2 className="cursor-pointer font-semibold">
                  Download Brochure
                </h2>
              </div>

              <div className="relative mt-6 ml-[20px] lg:ml-0">
                <div className="">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/038/949/293/small_2x/sugar-cane-field-with-blue-sky-and-white-clouds-background-photo.jpg"
                    alt=""
                    className="h-[400px] mx-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center ">
                    <div className="border border-dashed p-[20px] md:p-[50px] text-justify">
                      <span>
                        <LuPhoneCall className="text-[50px] text-[orange] " />
                      </span>

                      <p className="text-white pt-2 text-xl">
                        How Can We <br /> Help?
                      </p>

                      <p className="text-white font-medium pt-2">
                        If you need any help, please <br /> feel free to contact
                        us
                      </p>

                      <div className="pt-2 flex gap-3">
                        <IoMdCall className="text-[orange] text-xl " />
                        <p className="text-white font-medium">
                          +91-01334267000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>

              <div className='grid col-span-2 mt-8'>
                <div>
                  <img src={Img7} alt="" />
                 </div>
              </div>
        </div>   
      
        <div className='container mx-auto'>
            <div className='grid lg:grid-cols-3 gap-5'>
                <div className='grid col-span-1'>
                </div>

                <div className='grid col-span-2 m-3 lg:m-0'>
                <h1 className='text-[25px] font-semibold'>Exports</h1>
                    <h1 className='mt-[15px] text-gray-400'>Regulatory Adherence: Comply with all export regulations, documentation, and standards required by the importing countries in Africa, the Gulf region, and Europe.
                                                              Customs Documentation: Ensure accurate and timely preparation of all customs documentation to avoid delays and ensure smooth delivery.</h1>
                    <h1 className='mt-[20px] text-gray-400 mb-10'>Trade Laws: Stay updated with changes in international trade laws and adjust policies accordingly.</h1>
                    {/* <h1 className='text-[25px] font-semibold mt-[30px]'>Imports</h1>
                    <h1 className='text-gray-400 mt-[20px] mb-10'>Zexmon India Venture in Imports of a wide range of Heartbeats from Canada, Australia, Myanmar. Imported Heartbeats are locally showcased and sold in Container India</h1> */}
                </div>
            </div>
        </div>
          
          <Footer/>
    </>
  )
}

export default Exports