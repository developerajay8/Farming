import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { IoMdCall } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Img5 from "../images/97cf6edf-7741-4358-b40c-1d2390059afd.jpeg";
import Footer from './Footer';
import TopNavbar from './TopNavbar';
import Navbar from './Navbar';
import Img6 from '../images/farming-4.jpg'
import { BsArrowRight } from "react-icons/bs";
import Img7 from "../images/proteina-vegetal.jpg"

const Pulses = () => {
  return (
    <>
      <TopNavbar/>
      <Navbar/>

      <div className='container mx-auto'>
        <div className='relative'>
        <div className=''>
           <img src={Img7} alt="" className='lg:h-[350px] md:h-[280px] h-[200px] w-full'/>
           <div className='absolute inset-0 bg-black bg-opacity-20 flex items-center'>
               <h1 className='text-white lg:pl-16 md:pl-8 pl-4 text-[40px] font-semibold'> Pulses<br /></h1>
                <div className='text-white hover:text-[#d57315] hidden md:block  text-[20px] font-semibold pt-[120px]'>
                    <Link to={"/"}>
                         Home
                    </Link>
                </div>
                <BsArrowRight className='text-white hidden md:block mt-[125px] md:ml-4 text-[20px]' />
                  <div className=' hover:text-white hidden md:block text-[#d57315] text-[20px] md:ml-5 font-semibold pt-[120px]'>
                <Link to={"/pulses"}>
                      Pulses
                </Link>
                </div>
           </div>
        </div>
        </div>
       </div>

       <div className="2xl:container mx-auto mt-[20px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 p-2 md:p-4 gap-5">
          <div className="grid grid-cols-1 lg:order-1 order-2">
            <div className="">
              <Link to={"/sugar"}>
                <div className=" mb-2 hover:bg-orange-400 hover:text-white bg-slate-100 cursor-pointer duration-500 text-black p-1">
                  <div className="border border-dashed flex  items-center justify-between p-2">
                    <h1 className=" text-[17px] ">Sugar</h1>
                    <FaArrowRight className="" />
                  </div>
                </div>
              </Link>

              <Link to={"/spices"}>
                <div className=" hover:bg-orange-400 hover:text-white duration-500   mb-2 cursor-pointer bg-slate-100 text-black  p-1">
                  <div className="border border-dashed flex  items-center justify-between p-2">
                    <h1 className=" text-[17px] ">Spices</h1>
                    <FaArrowRight className="" />
                  </div>
                </div>
              </Link>

              <Link to={"/food-grains"}>
                <div className=" duration-500 hover:bg-orange-400 hover:text-white  bg-slate-100 text-black  mb-2 cursor-pointer  p-1">
                  <div className="border border-dashed flex  items-center justify-between p-2">
                    <h1 className=" text-[17px] ">Food Grains</h1>
                    <FaArrowRight className="" />
                  </div>
                </div>
              </Link>

              <Link to={"/tea"}>
                <div className=" duration-500 hover:bg-orange-400 hover:text-white bg-slate-100 text-black   mb-2 cursor-pointer  p-1">
                  <div className="border border-dashed flex  items-center justify-between p-2">
                    <h1 className=" text-[17px] ">Tea</h1>
                    <FaArrowRight className="" />
                  </div>
                </div>
              </Link>

              <Link to={"/pulses"}>
                <div className=" duration-500 bg-orange-400  mb-2 cursor-pointer  p-1">
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
            <div>
              <img src={Img5} alt="" />
              <div className="mt-4">
                <h3 className="text-2xl font-semibold">About Tea</h3>
                <p className="text-gray-500 font-medium pt-3">
                "Zexmon" gathering of organizations, market superior grade, unique Heartbeats (dals) in the public and global business sectors. Our Heartbeats meet the necessary food and wellbeing security guidelines and proposition total dietary benefit and unrivaled taste. Beats are exceptionally low in fat and simultaneously plentiful in fiber, complex, sugars, nutrients and minerals. Our heartbeats stick to the best guidelines of value. These heartbeats taste really fragile and don't lose their variety, surface and aroma. Indian heartbeats - great in taste; higher caliber; best for human wellbeing. "Zexmon" gathering of organizations, tries to address the issues of beats of abroad clients.
                </p>
              </div>

              <div className="py-6">
                    <h3 className="text-2xl font-semibold">
                    Our Range Of Pulses
                    </h3>

                    <div className="mt-9 flex gap-3 items-center">
                      <FaRegCheckCircle className="text-[orange] " />
                      <h2 className="font-medium">
                      Red Whole Lentils / Red Split Lentils (Masoor Gota / Masoor Dal)
                      </h2>
                    </div>

                    <div className="mt-2 flex gap-3 items-center">
                      <FaRegCheckCircle className="text-[orange] " />
                      <h2 className="font-medium">
                      Black Matpe / Urad Bean / Black Gram (Urad Whole and its Dal)
                      </h2>
                    </div>

                    <div className="mt-2 flex gap-3 items-center">
                      <FaRegCheckCircle className="text-[orange] " />
                      <h2 className="font-medium">
                      Green Gram (Moong Whole and its Dal)
                      </h2>
                    </div>

                    <div className="mt-2 flex gap-3 items-center">
                      <FaRegCheckCircle className="text-[orange] " />
                      <h2 className="font-medium">Chick Peas / Bengal Gram (Gram Whole and its Dal)</h2>
                    </div>

                    <div className="mt-2 flex gap-3 items-center">
                      <FaRegCheckCircle className="text-[orange] " />
                      <h2 className="font-medium">
                      Green Peas / Yellow Peas / Dun Peas (Matar Whole and its Dal)
                      </h2>
                    </div>

                    <div className="mt-2 flex gap-3 items-center">
                      <FaRegCheckCircle className="text-[orange] " />
                      <h2 className="font-medium">
                      Tyson Chick Peas (Arhar / Toor Whole and its Dal)
                      </h2>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>

       <Footer/>
    </>
  )
}

export default Pulses
