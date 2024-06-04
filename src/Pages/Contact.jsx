import React from 'react'
import TopNavbar from './TopNavbar'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";
import Img6 from '../images/farming-4.jpg'
import { FiPhoneCall } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { GiRotaryPhone } from "react-icons/gi";
import Footer from './Footer';
import Img7 from '../images/phone-612061_1280.jpg'

function Contact() {
  return (
    <>
       <TopNavbar/>
       <Navbar/>

       <div className='container mx-auto'>
        <div className='relative'>
        <div className=''>
           <img src={Img7} alt="" className='lg:h-[350px] md:h-[280px] h-[200px] w-full'/>
           <div className='absolute inset-0 bg-black bg-opacity-20 flex items-center'>
               <h1 className='text-white lg:pl-16 md:pl-8 pl-4 text-[40px] font-semibold'>Contact Us<br /></h1>
                <div className='text-white hover:text-[#d57315] hidden md:block  text-[20px] font-semibold pt-[120px]'>
                    <Link to={"/"}>
                         Home
                    </Link>
                </div>
                <BsArrowRight className='text-white hidden md:block mt-[125px] md:ml-4 text-[20px]' />
                  <div className=' hover:text-white hidden md:block text-[#d57315] text-[20px] md:ml-5 font-semibold pt-[120px]'>
                <Link to={"/contact"}>
                      Contact Us
                </Link>
                </div>
           </div>
        </div>
        </div>
       </div>

       <div className='container mx-auto mt-[30px] mb-12'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 ml-12 mr-10 gap-4'>
          
                <div className='shadow-lg mt-[20px] pb-6'>
                      <div className='grid grid-cols-4 gap-3'>
                          <div className='pl-[10px] flex justify-center items-center col-span-1 pt-8'>
                            {/* <img src="https://www.umaexports.net/images/icon/2.png" alt="" /> */}
                            <FiPhoneCall className='h-[50px] w-[130px] bg-[#d57315] p-3 text-white'/>
                          </div>
                           <div className='pt-[35px] col-span-3'>
                             <h1 className='text-[20px] font-semibold'>Phone</h1>
                             <p className='pt-[4px] text-[17px] text-gray-400'>+01334267777</p>
                           </div>
                      </div>
                </div>

                <div>
                <div className='shadow-lg mt-[20px] pb-6'>
                <div className='grid grid-cols-4 gap-3'>
                          <div className='pl-[10px] flex justify-center items-center col-span-1 pt-8'>
                            {/* <img src="https://www.umaexports.net/images/icon/2.png" alt="" /> */}
                            <CgMail  className='h-[50px] w-[130px] bg-[#d57315] p-3 text-white'/>
                          </div>
                           <div className='pt-[35px] col-span-3'>
                             <h1 className='text-[20px] font-semibold'>Email Us</h1>
                             <p className='pt-[4px] text-[17px] text-gray-400'>zexmonindprojects@gmail.com</p>
                           </div>
                      </div>
                </div>
                </div>

                <div>
                <div className='shadow-lg mt-[20px] pb-6'>
                <div className='grid grid-cols-4 gap-3'>
                          <div className='pl-[10px] flex justify-center items-center col-span-1 pt-8'>
                            {/* <img src="https://www.umaexports.net/images/icon/2.png" alt="" /> */}
                            <GiRotaryPhone className='h-[50px] w-[130px] bg-[#d57315] p-3 text-white'/>
                          </div>
                           <div className='pt-[35px] col-span-3'>
                             <h1 className='text-[20px] font-semibold'>Fax</h1>
                             <p className='pt-[4px] text-[17px] text-gray-400'>+013342670000</p>
                           </div>
                      </div>
                  </div>
              </div>

            </div>
            </div>

            <div className='container mx-auto md:mt-11 mb-10'>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>

           <div className='lg:mt-8 mt-8 order-2 md:order-1 md:mt-[80px] pl-[8px]  flex justify-center items-center col-span-1'>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.3411276471843!2d78.05765477415623!3d29.96962492211427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39094953ffd3f327%3A0xcfbdcb75ebab6e4e!2sDeep%20Ganga%20apartments!5e0!3m2!1sen!2sin!4v1716010827889!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>

           <div className='col-span-1 order-1 md:order-2'>
             <div className=' mx-auto p-5 '>
                  <div className='text-black text-[25px] lg:text-[32px] '>
                     Contact Us
                  </div>

                  <div className='bg-[#f7f7f6] mt-[30px] p-5'>
                       <div className='grid grid-cols-1 lg:grid-cols-2 text-center gap-4'>
                           <div className='grid grid-cols-1'><input type="text" placeholder='Full Name*' className='p-2 pl-[20px]' /></div>
                           <div className='grid grid-cols-1'><input type="email" placeholder='Phone Number*' className='p-2 pl-[20px] ' /></div>
                       </div>

                       <div className='grid grid-cols-1 lg:grid-cols-2 text-center gap-4 mt-4'>
                           <div className='grid grid-cols-1'><input type="text" placeholder='Your E-Mail*' className='p-2 pl-[20px]' /></div>
                           <div className='grid grid-cols-1'><input type="email" placeholder='Subjet' className='p-2 pl-[20px] ' /></div>
                       </div>

                       <div className='mt-5 grid grid-cols-1'>
                            <input type="text" placeholder='Service' className='p-2 pl-[20px] ' />
                       </div>

                       <div className='mt-5 grid grid-cols-1'>
                            <textarea name="" id="" cols="30" rows="4" placeholder='Message' className='p-2 '></textarea>
                       </div>

                       <div className='mt-[20px] text-center text-[18px] font-semibold grid grid-cols-1'>
                          <button className='bg-black text-white p-2 hover:bg-[#d57315] duration-500'>Submit Quote</button>
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

export default Contact