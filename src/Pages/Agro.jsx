import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { IoMdCall } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Img3 from "../images/6593b0fe-c239-48d8-b30a-363a7f851ff5.jpeg";
import Img4 from "../images/15ff5876-a6f8-4e43-8479-d54fa5d1f58b.jpeg";
import Img5 from "../images/0eea4cdf-b436-47ab-9dd3-6f67ad00455b.jpeg";
import TopNavbar from './TopNavbar';
import Navbar from './Navbar';
import Footer from './Footer';
import  Img6 from '../images/farming-4.jpg'
import { BsArrowRight } from "react-icons/bs";
import Img7 from "../images/OIP (2).jpeg"


const Agro = () => {
  return (
    <>

      <TopNavbar/>
      <Navbar/>

      <div className='container mx-auto'>
        <div className='relative'>
        <div className=''>
           <img src={Img7} alt="" className='lg:h-[350px] md:h-[280px] h-[200px] w-full'/>
           <div className='absolute inset-0 bg-black bg-opacity-20 flex items-center'>
               <h1 className='text-white lg:pl-16 md:pl-8 pl-4 text-[40px] font-semibold'> Agro Feeds<br /></h1>
                <div className='text-white hover:text-[#d57315] hidden md:block  text-[20px] font-semibold pt-[120px]'>
                    <Link to={"/"}>
                         Home
                    </Link>
                </div>
                <BsArrowRight className='text-white hidden md:block mt-[125px] md:ml-4 text-[20px]' />
                  <div className=' hover:text-white hidden md:block text-[#d57315] text-[20px] md:ml-5 font-semibold pt-[120px]'>
                <Link to={"/agro-feed"}>
                    Agro Feeds
                </Link>
                </div>
           </div>
        </div>
        </div>
       </div>

      <div className="2xl:container mx-auto mb-6">
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
                <div className=" duration-500 bg-slate-100 hover:bg-orange-400 hover:text-white  mb-2 cursor-pointer  p-1">
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
            <div className="bg-orange-400 hover:text-white duration-500  text-black mb-2 cursor-pointer  p-1">
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

              <div className="mt-10">
                <h3 className="text-2xl font-semibold">Agro Feeds</h3>
              </div>
            </div>

            <div className="">
        

              <div className="grid grid-cols-1 gap-5 mt-[60px] md:grid-cols-2 ">
                <div className="grid grid-cols-1 ">
                  <img src={Img3} alt="" className=" " />
                </div>

                <div className="grid grid-cols-1">
                  <h1 className="text-2xl font-semibold">Soyabean Meal</h1>

                  <p className="text-gray-500 font-medium pt-3">
                  Our organization is noted as perhaps of the most notable broker, merchants and exporters of Soyabean Feast. Obtained from dependable merchants, our proposition range is generally certify attributable to its high healthful substance, taste and virtue. It has demonstrated to be a superb wellspring of protein consequently is broadly utilized as protein supplement. Soyabean Feast space is worldwide utilized as creature feed supplement. Our organization is generally valued for offering great soyabean items which is liberated from any sort of pollutants.
                  </p>

                  <p className="text-gray-500 font-medium pt-7">
                  With exhaustive industry information, we are participated in sending out and providing quality scope of soyabean Feast. The scope of soyabeans we offered is secured from the valid merchants of the market. This large number of items are exceptionally valued and requested by the clients across the locale.
                  </p>
                </div>

                <div></div>
              </div>
              <div className="border border-b"></div>

              <div className="grid grid-cols-1 mb-9 gap-5 mt-[60px] md:grid-cols-2 ">
                <div className="grid grid-cols-1">
                  <h1 className="text-2xl font-semibold">Rice Bran Doc</h1>

                  <p className="text-gray-500 font-medium pt-3">
                  We deliver De-Oiled Rice Wheat (De-Oiled Cake), which is separated from premium grade Rice Grain. Gaining by the rich business experience and sound framework, at Uma Commodities, we can offer quality scope of De-Oiled Rice Wheat. Ready from the internal husk of rice, these are likewise tried rigidly by our quality experts prior to providing to the clients.
                  </p>

                  <p className="text-gray-500 font-medium pt-6">
                  The De Oiled Rice Bran is widely used as feeding materials for animals as it is high in nutritional content. Moreover, the rice bran is available in different grades and are properly packed.
                  </p>
                </div>
                <div className="grid grid-cols-1 ">
                  <img src={Img4} alt="" className=" " />
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

export default Agro
