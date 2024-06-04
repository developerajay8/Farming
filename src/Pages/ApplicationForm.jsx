import React from 'react'
import TopNavbar from './TopNavbar'
import Navbar from './Navbar'
import Img6 from '../images/farming-4.jpg'
import { BsArrowRight } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { FaFilePdf } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from 'react-router-dom';
import Footer from './Footer';


function ApplicationForm() {
  return (
    <>
        <TopNavbar/>
        <Navbar/>

        <div className='container mx-auto'>
        <div className='relative'>
        <div className=''>
           <img src={Img6} alt="" className='lg:h-[350px] md:h-[280px] h-[200px] w-full'/>
           <div className='absolute inset-0 bg-black bg-opacity-20 flex items-center'>
               <h1 className='text-white lg:pl-16 md:pl-8 pl-4 text-[40px] font-semibold'>Online Application Form<br /></h1>
                <div className='text-white hover:text-[#d57315] hidden md:block  text-[20px] font-semibold pt-[120px]'>
                    <Link to={"/"}>
                         Home
                    </Link>
                </div>
                <BsArrowRight className='text-white hidden md:block mt-[125px] md:ml-4 text-[20px]' />
                  <div className=' hover:text-white hidden md:block text-[#d57315] text-[20px] md:ml-5 font-semibold pt-[120px]'>
                <Link to={"/application-form"}>
                    Online  Application
                </Link>
                </div>
           </div>
        </div>
        </div>
       </div>   

       <div className="2xl:container mx-auto mt-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 p-2 md:p-4 gap-5">
          <div className="grid grid-cols-1 lg:order-1 order-2 mt-10">
            <div className="">

             <Link to={"/philosophy"}>
             <div className="hover:bg-orange-400 hover:text-white duration-500 mb-2 text-black cursor-pointer bg-slate-100 p-1">
                <div className="border border-dashed flex items-center justify-between p-2">
                  <h1 className="text-[17px] ">Philosophy</h1>
                  <FaArrowRight className="" />
                </div>
              </div>
             </Link>

             <Link to={"/application-form"}>
             <div className="bg-orange-400 hover:text-white duration-500 text-black mb-2 cursor-pointer  p-1">
                <div className="border border-dashed flex  items-center justify-between p-2">
                  <h1 className=" text-[17px] ">Online Application Form</h1>
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
          <div className='p-5'>
                  <div className='text-black text-[25px] lg:text-[32px] pt-3'>
                    Online Application Form
                  </div>

                  <div className='mt-8 bg-[#f7f7f6] col-span-2 p-5'>
                       <div className='grid grid-cols-1 lg:grid-cols-2 text-center gap-6'>
                           <div className='grid grid-cols-1'><input type="text" placeholder='First Name*' className='p-2 pl-[20px] mb-[8px]' /></div>
                           <div className='grid grid-cols-1'><input type="text" placeholder='Last Name*' className='p-2 pl-[20px] mb-[8px] ' /></div>
                       </div>

                       <div className='grid grid-cols-1 lg:grid-cols-2 text-center gap-6 mt-4'>
                           <div className='grid grid-cols-1'><input type="text" placeholder='Position applied for*' className='p-2 pl-[20px] mb-[8px]' /></div>
                           <div className='grid grid-cols-1'><input type="text" placeholder='Gender*' className='p-2 pl-[20px] mb-[8px]' /></div>
                       </div>

                       <div className='grid grid-cols-1 lg:grid-cols-2 text-center gap-6 mt-4'>
                           <div className='grid grid-cols-1'><input type="text" placeholder='Qualification*' className='p-2 pl-[20px] mb-[8px]' /></div>
                           <div className='grid grid-cols-1'><input type="text" placeholder='Experience' className='p-2 pl-[20px] mb-[8px]' /></div>
                       </div>

                       <div className='grid grid-cols-1 lg:grid-cols-2 text-center gap-6 mt-4'>
                           <div className='grid grid-cols-1'><input type="text" placeholder='Current Salary*' className='p-2 pl-[20px] mb-[8px]' /></div>
                           <div className='grid grid-cols-1'><input type="text" placeholder='Expected Salary' className='p-2 pl-[20px] mb-[8px]' /></div>
                       </div>

                       <div className='grid grid-cols-1 lg:grid-cols-2 text-center gap-6 mt-4'>
                           <div className='grid grid-cols-1'><input type="text" placeholder='Current Organization*' className='p-2 pl-[20px] mb-[8px]' /></div>
                           <div className='grid grid-cols-1'><input type="text" placeholder='Pin Code' className='p-2 pl-[20px] mb-[8px]' /></div>
                       </div>

                       <div className='grid grid-cols-1 lg:grid-cols-2 text-center gap-6 mt-4'>
                           <div className='grid grid-cols-1'><input type="text" placeholder='PTelephone/Mobile*' className='p-2 pl-[20px] mb-[8px]' /></div>
                           <div className='grid grid-cols-1'><input type="email" placeholder='Email Address*' className='p-2 pl-[20px] mb-[8px]' /></div>
                       </div>

                       <div className='mt-5 grid grid-cols-1'>
                            <input type="text" placeholder='Attach Your Resume*' className='p-2 pl-[20px] mb-[8px]' />
                       </div>

                       <div className='mt-[20px] text-center grid grid-cols-1 px-2 lg:grid-cols-2 gap-6'>
                           <button className='bg-black text-white py-3'>Submit</button>
                           <button className='bg-black text-white py-3'>Reset</button>
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

export default ApplicationForm