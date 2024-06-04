import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { IoMdCall } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";
import Img6 from '../images/farming-4.jpg'
import { BsArrowRight } from "react-icons/bs";
import Footer from "./Footer";
import Img7 from '../images/R.sugar.jpeg'


const Sugar = () => {
  return (
    <>

      <TopNavbar/>
      <Navbar/>

      <div className='container mx-auto'>
        <div className='relative'>
        <div className=''>
           <img src={Img7} alt="" className='lg:h-[350px] md:h-[280px] h-[200px] w-full'/>
           <div className='absolute inset-0 bg-black bg-opacity-20 flex items-center'>
               <h1 className='text-white lg:pl-16 md:pl-8 pl-4 text-[40px] font-semibold'>Sugar<br /></h1>
                <div className='text-white hover:text-[#d57315] hidden md:block  text-[20px] font-semibold pt-[120px]'>
                    <Link to={"/"}>
                         Home
                    </Link>
                </div>
                <BsArrowRight className='text-white hidden md:block mt-[125px] md:ml-4 text-[20px]' />
                  <div className=' hover:text-white hidden md:block text-[#d57315] text-[20px] md:ml-5 font-semibold pt-[120px]'>
                <Link to={"/sugar"}>
                      Sugar
                </Link>
                </div>
           </div>
        </div>
        </div>
       </div>


      <div className="2xl:container mx-auto mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 p-2 md:p-4 gap-5">
          <div className="grid grid-cols-1 lg:order-1 order-2">
            <div className="">

             <Link to={"/sugar"}>
             <div className="bg-orange-400 mb-2 cursor-pointer  p-1">
                <div className="border border-dashed flex  items-center justify-between p-2">
                  <h1 className="text-white text-[17px] ">Sugar</h1>
                  <FaArrowRight className="text-white" />
                </div>
              </div>
             </Link>

             <Link to={"/spices"}>
             <div className="hover:bg-orange-400 hover:text-white duration-500 bg-slate-100 text-black mb-2 cursor-pointer  p-1">
                <div className="border border-dashed flex  items-center justify-between p-2">
                  <h1 className=" text-[17px] ">Spices</h1>
                  <FaArrowRight className="" />
                </div>
              </div>
             </Link>

             <Link to={"/food-grains"}>
             <div className="hover:bg-orange-400 hover:text-white duration-500 bg-slate-100 text-black mb-2 cursor-pointer  p-1">
                <div className="border border-dashed flex  items-center justify-between p-2">
                  <h1 className=" text-[17px] ">Food Grains</h1>
                  <FaArrowRight className="" />
                </div>
              </div>
             </Link>

             <Link to={"/tea"}>
             <div className="hover:bg-orange-400 hover:text-white duration-500 bg-slate-100 text-black mb-2 cursor-pointer  p-1">
                <div className="border border-dashed flex  items-center justify-between p-2">
                  <h1 className=" text-[17px] ">Tea</h1>
                  <FaArrowRight className="" />
                </div>
              </div>
             </Link>

             <Link to={"/pulses"}>
             <div className="hover:bg-orange-400 hover:text-white duration-500 bg-slate-100 text-black mb-2 cursor-pointer  p-1">
                <div className="border border-dashed flex  items-center justify-between p-2">
                  <h1 className=" text-[17px] ">Pulses</h1>
                  <FaArrowRight className="" />
                </div>
              </div>
             </Link>

           <Link to={"/agro-feed"}>
           <div className="hover:bg-orange-400 hover:text-white duration-500 bg-slate-100 text-black mb-2 cursor-pointer  p-1">
                <div className="border border-dashed flex  items-center justify-between p-2">
                  <h1 className=" text-[17px] ">Agro Feed</h1>
                  <FaArrowRight className="" />
                </div>
              </div>
           </Link>

              <div className="mt-9 border flex gap-5 items-center border-gray-200 bg-slate-100 hover:bg-black hover:text-white duration-500 ">
                <FaFilePdf className="bg-black h-[50px] w-[50px] p-2 text-2xl     text-white " />

                <h2 className="cursor-pointer font-semibold">
                  Download Brochure
                </h2>
              </div>

              <div className="relative mt-6">
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
          </div>

          <div className="grid col-span-2 order-1 lg:order-2  ">
            <div className="">
              <img
                src="https://thehaulagenews.com/wp-content/uploads/2021/05/Indias-sugar-exports-on-good-course.jpg"
                alt=""
              />
            </div>

            <div className="lg:mt-[30px]">
              <h3 className="text-2xl font-semibold">About Sugar</h3>
              <p className="text-gray-500 font-medium pt-3">
                Sugar is the main sugar all through the world. Sugarcane juice
                is handled into granulated precious stones of Sugar. We bargain
                in indian white precious stone sugar.
              </p>

              <div className="py-6">
                <h3 className="text-2xl font-semibold">Our Range Of Sugar</h3>

                <div className="mt-4 flex gap-3 items-center">
                  <FaRegCheckCircle className="text-[orange] " />
                  <h2 className="font-medium">S-30 variety</h2>
                </div>

                <div className="mt-2 flex gap-3 items-center">
                  <FaRegCheckCircle className="text-[orange] " />
                  <h2 className="font-medium">M-20 variety</h2>
                </div>

                <div className="mt-2 flex gap-3 items-center">
                  <FaRegCheckCircle className="text-[orange] " />
                  <h2 className="font-medium">ICUMSA 45</h2>
                </div>

                <div className="mt-2 flex gap-3 items-center">
                  <FaRegCheckCircle className="text-[orange] " />
                  <h2 className="font-medium">L-grade sugar</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Sugar;