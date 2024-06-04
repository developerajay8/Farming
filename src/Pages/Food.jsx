import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { IoMdCall } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Img1 from "../images/2b9aea0b-e690-40d6-a6a9-4ba2da66e55a.jpeg";
import Img2 from "../images/ede6ae14-445a-43b1-b5d2-50df551bb952.jpeg";
import Img3 from "../images/d2d1ccbc-15f7-4dff-8d95-5d0816b4b109.jpeg";
import Img4 from "../images/fa9e0dc6-e552-443a-88a4-d57cad5bb737.jpeg";
import Img5 from "../images/73e68ced-df81-490f-9372-8315c7cdc3f4.jpeg";
import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Img6 from "../images/farming-4.jpg"
import Img7 from '../images/Fotolia_72510345_M_oats.jpg'

const Food = () => {
  return (
    <>

      <TopNavbar />
      <Navbar />


      <div className='container mx-auto'>
        <div className='relative'>
          <div className=''>
            <img src={Img7} alt="" className='lg:h-[350px] md:h-[280px] h-[200px] w-full' />
            <div className='absolute inset-0 bg-black bg-opacity-20 flex items-center'>
              <h1 className='text-white lg:pl-16 md:pl-8 pl-4 text-[40px] font-semibold'>Food Grains<br /></h1>
              <div className='text-white hover:text-[#d57315] hidden md:block  text-[20px] font-semibold pt-[120px]'>
                <Link to={"/"}>
                  Home
                </Link>
              </div>
              <BsArrowRight className='text-white hidden md:block mt-[125px] md:ml-4 text-[20px]' />
              <div className=' hover:text-white hidden md:block text-[#d57315] text-[20px] md:ml-5 font-semibold pt-[120px]'>
                <Link to={"/food-grains"}>
                  Food Grains
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="2xl:container mx-auto border">
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
                    <FaArrowRight className="text-black" />
                  </div>
                </div>
              </Link>

              <Link to={"/food-grains"}>
                <div className=" duration-500  bg-orange-400  mb-2 cursor-pointer  p-1">
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
            <div>
              <img src={Img5} alt="" />

              <div className="mt-4">
                <h3 className="text-2xl font-semibold">Food Grains</h3>
              </div>
            </div>

            <div className="">
              <div className="grid grid-cols-1 gap-7 mt-[60px]      md:grid-cols-2 ">
                <div className="grid grid-cols-1 ">
                  <img src={Img1} alt="" className=" " />
                </div>

                <div className="grid grid-cols-1">
                  <h1 className="text-2xl font-semibold">Rice</h1>

                  <p className="text-gray-500 font-medium pt-3">
                    Rice Rice is the most broadly devoured staple nourishment
                    for a huge region of the planet human populace. It is the
                    main food grain for human sustenance and caloric admission.
                    Rice gives more than one fifth of the absolute calories
                    consumed by individual all through the world.
                  </p>

                  <div className="py-6">
                    <h3 className="text-2xl font-semibold">
                      Our range of rice:
                    </h3>

                    <div className="mt-4 flex gap-3 items-center">
                      <FaRegCheckCircle className="text-[orange] " />
                      <h2 className="font-medium">
                        Raw Rice -- 5% or 20% or 25% broken or 100% broken.
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
                        Ir64 Raw or Parboiled Rice
                      </h2>
                    </div>

                    <div className="mt-2 flex gap-3 items-center">
                      <FaRegCheckCircle className="text-[orange] " />
                      <h2 className="font-medium">Swarna Masuri Rice</h2>
                    </div>

                    <div className="mt-2 flex gap-3 items-center">
                      <FaRegCheckCircle className="text-[orange] " />
                      <h2 className="font-medium">
                        Basmati Rice & Non Basmati Rice
                      </h2>
                    </div>

                    <div className="mt-2 flex gap-3 items-center">
                      <FaRegCheckCircle className="text-[orange] " />
                      <h2 className="font-medium">
                        We can arrange supplies of 100% clean rice by sortex
                        machine.
                      </h2>
                    </div>
                  </div>
                </div>

                <div></div>
              </div>
              <div className="border border-b"></div>

              <div className="grid grid-cols-1 gap-7 mt-[60px] md:grid-cols-2 ">
                <div className="">
                  <h1 className="text-2xl font-semibold">Wheat</h1>

                  <p className="text-gray-500 font-medium pt-3">
                    Wheat is one more most significant staple food devoured across the world. Around the world, wheat is the main wellspring of protein and starches in human food. Wheat protein is effectively processed and with a limited quantity of creature or vegetable protein added, a wheat based dinner is profoundly nutritious. Wheat gives more sustenance to people than some other food source. It is changed over into flour for making consumable, acceptable, intriguing and fulfilling food varieties. Wheat flour is created into bread, and is an important element for making cakes and treats. Our scope of wheat incorporates all assortments of Indian wheat and wheat flour (Aata and Maida).
                  </p>
                </div>

                <div className="">
                  <img src={Img2} alt="" className="" />
                </div>

                <div></div>
              </div>
              <div className="border border-b"></div>

              <div className="grid grid-cols-1 gap-5 mt-[60px] md:grid-cols-2 ">
                <div className="grid grid-cols-1 ">
                  <img src={Img3} alt="" className="h-full " />
                </div>

                <div className="grid grid-cols-1">
                  <h1 className="text-2xl font-semibold">Corn</h1>

                  <p className="text-gray-500 font-medium pt-3">
                    Corn or maize comprise a staple human food in numerous districts of the world. It is a significant wellspring of starch. Corn starch (Maize Flour) is a significant fixing in home cooking and in many industrialized food items. Popcorn, a well known nibble, is produced using specific assortments of corn. Corn is additionally utilized for cooking oil (Corn Oil). It is likewise a significant wellspring of grain (Creature Feed) in numerous nations of the world. Our scope of corn incorporates all assortments of Indian Corn.
                  </p>
                </div>

                <div></div>
              </div>
              <div className="border border-b"></div>

              <div className="grid grid-cols-1 mb-9 gap-5 mt-[60px] md:grid-cols-2 ">
                <div className="grid grid-cols-1">
                  <h1 className="text-2xl font-semibold">Sorghum</h1>

                  <p className="text-gray-500 font-medium pt-3">
                    Sorghum presented by us is a significant harvest filled in India. Sorghum is requested for their different taste and strength in it. Individuals devour sorghum by adding them in flour for getting ready food. Sorghum appreciates high satisfied of starch in it and is exceptionally utilized in numerous modern applications. We offer rich quality Millets to our clients, which are generally valued by our global clients for its splendid taste and astonishing smell. Aside from this, we try to offer the administrations to our clients inside the hypothesized time period at clients' premises. Moreover, we offer these grains in very much fixed bundling to hold the freshness. Moreover, client can profit these items at savvy costs.
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

      <Footer />
    </>
  );
};

export default Food;
