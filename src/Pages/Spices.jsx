import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { IoMdCall } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Img1 from "../images/1b0f9148-4d8c-436d-a74f-bbf405a13bc5.jpeg";
import Img2 from "../images/29fce5cc-14eb-441e-8ee6-70fdc8851c2a.jpeg";
import Img3 from "../images/729c0b1e-d3cc-45a9-bde5-9da5c024a6bc.jpeg";
import Img4 from "../images/d3dac7db-7a8e-48fc-bb58-3255183b33f1.jpeg";
import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";
import { BsArrowRight } from "react-icons/bs";
import Img6 from '../images/farming-4.jpg'
import Footer from "./Footer";
import Img7 from "../images/spices-and-herbs-are-shown-in-bowls-ai-generated-free-photo.jpg"

const Spices = () => {
  return (
    <>

     <TopNavbar/>
     <Navbar/>

     <div className='container mx-auto'>
        <div className='relative'>
        <div className=''>
           <img src={Img7} alt="" className='lg:h-[350px] md:h-[280px] h-[200px] w-full'/>
           <div className='absolute inset-0 bg-black bg-opacity-20 flex items-center'>
               <h1 className='text-white lg:pl-16 md:pl-8 pl-4 text-[40px] font-semibold'>Spices<br /></h1>
                <div className='text-white hover:text-[#d57315] hidden md:block  text-[20px] font-semibold pt-[120px]'>
                    <Link to={"/"}>
                         Home
                    </Link>
                </div>
                <BsArrowRight className='text-white hidden md:block mt-[125px] md:ml-4 text-[20px]' />
                  <div className=' hover:text-white hidden md:block text-[#d57315] text-[20px] md:ml-5 font-semibold pt-[120px]'>
                <Link to={"/spices"}>
                      Spices
                </Link>
                </div>
           </div>
        </div>
        </div>
       </div>

      <div className="2xl:container mx-auto mt-7">
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
                <div className=" bg-orange-400 duration-500   mb-2 cursor-pointer  p-1">
                  <div className="border border-dashed flex  items-center justify-between p-2">
                    <h1 className=" text-[17px] ">Spices</h1>
                    <FaArrowRight className="text-black" />
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

             <Link to={"/pulese"}>
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
            <div>
              <img
                src="https://th.bing.com/th/id/R.073bfee96f5483591bdbd9d57165ff5f?rik=v6dt1k4mqXM0JA&riu=http%3a%2f%2fumaexports.net%2fimages%2fspices.jpg&ehk=%2f4CATbUP2ExWS64oXRFsitZCcotnTuIaNCl2GLNeukI%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />

              <div className="mt-4">
                <h3 className="text-2xl font-semibold lg:mt-14">About Spices</h3>
                <p className="text-gray-500 font-medium pt-3">
                  We offer an enormous cluster of indian cooking flavors that
                  holds the most particular fragrance and taste flavor. We are
                  worldwide all around figured as the most transcendent indian
                  flavors exporter and one of the extraordinary providers in
                  india.
                </p>

                <p className="text-gray-500 font-medium pt-3">
                  Being a client-driven association, we are participated in
                  offering a large number of Flavors. Here, we offer Red Bean
                  stew, Turmeric, Coriander and Cumin Seed. These quality items
                  are generally appropriate to be utilized in both Vegan and non
                  veggie lover dishes. Indian Flavors are very notable from one
                  side of the planet to the other. Our Flavors can be
                  illustrative of the particular kind of Indian Flavors.
                </p>
              </div>
            </div>

            <div className="mt-9">
            <div className="grid grid-cols-1 gap-7 mt-[60px]      md:grid-cols-2 ">
                <div className="grid grid-cols-1 ">
                  <img src={Img1} alt="" className="h-full "/>
                </div>

                <div className="grid grid-cols-1">
                  <h1 className="text-2xl font-semibold">Dry red chillies</h1>

                  <p className="text-gray-500 font-medium pt-3">
                    Dry red chillies are utilized in numerous nations of the
                    world as flavors. Its powder is utilized as a fixing in
                    curry powder. Numerous assortments of chillies are less
                    impactful yet of high tone and broadly utilized for variety
                    extraction. Since dry red chillies tone is a characteristic
                    plant tone, it is exceptionally well known among food and
                    refreshment processors for its utilization as a colorant.
                    Dry red chillies are additionally utilized in certain drugs.
                    The catalyst confined from stew is utilized in therapy of
                    particular sorts of tumors. Since Haridwar (Utrakhand) is
                    the greatest maker of chillies in india, We have our Branch
                    Office in Haridwar which is only dealing with Dry red
                    chillies. Haridwar being Asia's one of the greatest yard for
                    flavors particularly chillies.
                  </p>

                  <div className="py-6">
                    <h3 className="text-2xl font-semibold">
                      Our range of dry red chillies:
                    </h3>

                    <div className="mt-4 flex gap-3 items-center">
                      <FaRegCheckCircle className="text-[orange] " />
                      <h2 className="font-medium">
                        Dry red chillies teja with stem/stem less
                      </h2>
                    </div>

                    <div className="mt-2 flex gap-3 items-center">
                      <FaRegCheckCircle className="text-[orange] " />
                      <h2 className="font-medium">
                        Parboiled Rice -- 5% or 20% or 25% broken.
                      </h2>
                    </div>

                    <div className="mt-2 flex gap-3 items-center">
                      <FaRegCheckCircle className="text-[orange] " />
                      <h2 className="font-medium">
                        Dry red chillies wonder hot
                      </h2>
                    </div>

                    <div className="mt-2 flex gap-3 items-center">
                      <FaRegCheckCircle className="text-[orange] " />
                      <h2 className="font-medium">Dry red chillies sannam</h2>
                    </div>

                    <div className="mt-2 flex gap-3 items-center">
                      <FaRegCheckCircle className="text-[orange] " />
                      <h2 className="font-medium">Dry red chillies powder</h2>
                    </div>
                  </div>
                </div>

                <div></div>
              </div>
              <div className="border border-b"></div>

              <div className="grid grid-cols-1 gap-7 mt-[60px] md:grid-cols-2 ">

              <div className="">
                  <h1 className="text-2xl font-semibold">Turmeric</h1>

                  <p className="text-gray-500 font-medium pt-3">
                  Turmeric is perhaps of the main flavor involved by people in a large portion of the nations on the planet. Turmeric Glue/powder is utilized to variety and flavor staples. Turmeric is a key fixing in curry powder. It is likewise utilized as a color in the material business. Turmeric is utilized for Arrangement of therapeutic oils, balms and beauty care products. It is a Blood Purifier and furthermore a decent germicide. Ongoing examination has uncovered that turmeric is a characteristic marvel demonstrating valuable in the therapy of various recuperating conditions from malignant growth to alzheimer's illnesses.
                  </p>

                  <div className="py-6">
                    <h3 className="text-2xl font-semibold">
                      Our range of turmeric:
                    </h3>

                    <div className="mt-4 flex gap-3 items-center">
                      <FaRegCheckCircle className="text-[orange] " />
                      <h2 className="font-medium">
                      Single polished erode finger turmeric
                      </h2>
                    </div>

                    <div className="mt-2 flex gap-3 items-center">
                      <FaRegCheckCircle className="text-[orange] " />
                      <h2 className="font-medium">
                      Double polished erode finger turmeric
                      </h2>
                    </div>

                    <div className="mt-2 flex gap-3 items-center">
                      <FaRegCheckCircle className="text-[orange] " />
                      <h2 className="font-medium">
                      Unpolished finger/gattha (round) turmeric
                      </h2>
                    </div>

                    <div className="mt-2 flex gap-3 items-center">
                      <FaRegCheckCircle className="text-[orange] " />
                      <h2 className="font-medium">Duggirala gattha (round) turmeric Golden yellow turmeric powder</h2>
                    </div>

                    
                  </div>
                </div>

                <div className="">
                  <img src={Img2} alt="" className=""/>
                </div>

                <div></div>
              </div>
              <div className="border border-b"></div>


              <div className="grid grid-cols-1 gap-5 mt-[60px] md:grid-cols-2 ">
                <div className="grid grid-cols-1 ">
                  <img src={Img3} alt="" className="h-full "/>
                </div>

                <div className="grid grid-cols-1">
                  <h1 className="text-2xl font-semibold">Coriander</h1>

                  <p className="text-gray-500 font-medium pt-3">
                  Coriander is a flourishing yield in the Indian subcontinent in view of the accessibility of the necessary climate and climatic circumstances. We offer different grades as well as altered grades as indicated by client necessities. Supported with mastery and information in this space, we are counted among the first exporters of Coriander. We have with us encountered acquisition group, who obtains this item from different merchants and producers.
                  </p>

                
                </div>

                <div></div>
              </div>
              <div className="border border-b"></div>

              <div className="grid grid-cols-1 lg:mb-16  md:8 gap-5 mt-[60px] md:grid-cols-2">
              
                <div className="grid grid-cols-1">
                  <h1 className="text-2xl font-semibold">Cumin Seed</h1>

                  <p className="text-gray-500 font-medium pt-3">
                  Cumin seed is otherwise called Jeera. We have some expertise in providing and trading best/greatest Cumin Seeds. The Cumin Seeds, we offer, are famous because of their fragrant flavor and long time span of usability, attributable to which these are broadly utilized in cooking. We offer cumin seeds inside the specified time period and that too at entirely reasonable costs. It is a rich wellspring of iron and subsequently exceptionally helpful for anaemics as well as lactating moms and pregnant ladies, who will generally require iron more than others.
                  </p>
                </div>
                <div className="grid grid-cols-1 ">
                  <img src={Img4} alt="" className="h-full "/>
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

export default Spices;
