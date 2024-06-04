import React from 'react'
import TopNavbar from './TopNavbar'
import Navbar from './Navbar'
import Img2 from '../images/farming-1.jpg';
import Img4 from '../images/farming-2.jpg'
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaSearch } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import Img5 from '../images/farming-3.jpg'
import Footer from './Footer';
import Img6 from '../images/farming-5.png'
import { FaAngleRight } from "react-icons/fa";


function Home() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
        <TopNavbar/>

        <Navbar/>

        <div className='container mx-auto'>
       <Slider {...settings}>
       <div className='relative '>
           <img src={Img2} alt="" className='object-cover'/>
            <div className='absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
                <div className='text-white pt-2'>
                    <div className='text-center'>
                    <button className='md:text-2xl md:px-8 px-4  p-2 bg-orange-400'>Welcome To</button>
                    </div>
                    <div className='flex items-center '>
                      <span className='text-[50px] hidden lg:block mr-5'><IoIosArrowRoundForward /></span>
                         <div className='md:text-[50px]  text-[30px] font-bold'>ZEXMON INDIA PROJECTS</div>
                      <span className='text-[50px] ml-5 hidden lg:block'><IoIosArrowRoundBack /></span>
                    </div>

                    <div className='text-center hidden lg:block w-[700px] mx-auto mt-3 '>
                    <h3>Zexmon India Projects is a premier export company dedicated to delivering top-quality agricultural and food products to markets across Africa, the Gulf countries, and Europe. With over a decade of experience, our commitment to excellence has positioned us as a leader in the export industry.</h3>
                    </div>

                    <div className='text-center'>
                   <Link to={"/about"}>
                   <button className='md:text-2xl hover:bg-black duration-500 mt-6 md:px-8 px-4  p-2 bg-orange-400'>More About</button>
                   </Link>
                    </div>
                </div>
            </div>
           </div>

           <div className='relative '>
           <img src={Img4} alt="" className='object-cover lg:h-[630px] md:h-[383px] h-[213px]'/>
            <div className='absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
                <div className='text-white pt-2'>
                    <div className='text-center'>
                    <button className='md:text-2xl md:px-8 px-4  p-2 bg-orange-400'>The Best</button>
                    </div>
                    <div className='flex items-center pt-2'>
                      <span className='text-[50px] hidden lg:block mr-5'><IoIosArrowRoundForward /></span>
                         <div className='md:text-[50px]  text-[30px] font-bold'>Agriculture Products</div>
                      <span className='text-[50px] ml-5 hidden lg:block'><IoIosArrowRoundBack /></span>
                    </div>

                    <div className='text-center hidden lg:block w-[700px] mx-auto mt-3 '>
                    <h3 className='text-xl'>Spices, Sugar, Food Grains, Tea, Pluses, Agro Feeds.</h3>
                    </div>

                    <div className='text-center'>
                   <Link to={"/all-product"}>
                   <button className='md:text-2xl hover:bg-black duration-500 mt-6 md:px-8 px-4  p-2 bg-orange-400'>Our Products</button>
                   </Link>
                    </div>
                </div>
            </div>
           </div>
       </Slider>
        </div> 

        <div className='container mx-auto'>
           <div className='grid lg:grid-cols-2'>
              <div className='mt-[50px] p-8'>
                  <img src={Img6} alt=""  className='border-2 p-2'/>
              </div>
                  
              <div className='lg:pt-[70px] md:p-[10px] p-[20px]'>
                  <p className='text-[20px] font-bold text-[#fd7e14]'>About</p>
                  <h1 className='text-3xl font-bold pt-[10px]'>Why Choose Zexmon India Projects?</h1>
                  <p className='text-gray-400 pt-5 lg:mr-[90px] '>Quality Assurance: We adhere to the highest standards of quality control to ensure our products meet international benchmarks.Global Reach: Serving clients in Africa, the Gulf countries, and Europe, we have a robust distribution network that guarantees timely delivery.</p>
                  <p className='text-gray-400 pt-5 lg:mr-[90px]'>Sustainable Practices: We are committed to ethical sourcing and sustainable farming practices, ensuring minimal environmental impact.</p>
                  <p className='text-gray-400 pt-5 lg:mr-[90px]'>Customer Satisfaction: Our customer-centric approach ensures we meet and exceed our clients’ expectations through tailored solutions and exceptional service.</p>
                 <Link to={"/about"}>
                     <button className='bg-[#fd7e14] text-white px-5 py-3 mt-7'>Read More</button>
                 </Link>

                 <h2 className='mt-[20px] text-gray-400'>Call to ask any question</h2>
                 <h1 className='mt-[10px] font-bold'>+91-01334267000</h1>
              </div>
           </div>
        </div>

        <div className='container mx-auto mt-[10px]'>
          <div className='bg-[#d57315] m-12'>
              <div className='grid md:grid-cols-3 p-[50px] gap-7'>
                   <div className='bg-white h-[100px] flex'>
                    <div className=''>
                       <FaSearch className='text-[50px] mt-[20px] text-[#d57315] ml-[10px]'/>
                     </div>
                     <div className='mt-[15px] ml-3'>
                        <h1 className='text-[20px] font-semibold'>Quality</h1>
                        <h2>Read more</h2>
                     </div>
                   </div>

                   <div className='bg-white h-[100px] flex'>
                   <div className=''>
                       <FaRecycle  className='text-[50px] mt-[20px] text-[#d57315] ml-[10px]'/>
                     </div>
                     <div className='mt-[15px] ml-3'>
                        <h1 className='text-[20px] font-semibold'>CRS</h1>
                        <h2>Read more</h2>
                     </div>
                   </div>

                   <div className='bg-white h-[100px] flex'>
                   <div className=''>
                       <FaUser   className='text-[50px] mt-[20px] text-[#d57315] ml-[10px]'/>
                     </div>
                     <div className='mt-[15px] ml-3'>
                        <h1 className='text-[20px] font-semibold'>Careers</h1>
                        <h2>Read more</h2>
                     </div>
                   </div>
              </div>
          </div>
        </div>

        <div className='container mx-auto mt-[80px]'>
             <div className='grid md:grid-cols-2 gap-1'>
             <div className='relative '>
           <img src="https://img.freepik.com/premium-photo/ai-generated-portrait-farmer-front-his-tractor-sunny-day-crop-field_746009-336.jpg" alt="" className='object-cover h-[500px]'/>
            <div className='absolute inset-0 bg-black bg-opacity-80 flex text-white'>
                 <div className='lg:ml-[70px] ml-[20px] mt-[50px]'>
                       <h1 className='text-[#d57315] text-[20px]'>Why Choose us ?</h1>
                       <div className='text-white mt-2 text-[30px]'>
                          Exports / Imports
                       </div>
                       <p className='text-white mt-[20px]'>Our organization is spread all around the world including India. The nations where we bargain are comprehensive of .................................</p>

                       <div className='grid grid-cols-2'>
                          <div className='mt-[20px]'>
                               <h1 className='text-[30px]'>Exports</h1>
                                <div className='flex gap-3 mt-2'>
                                    <span className='mt-[7px]'><FaCheck /></span>
                                    <h1>Srilanka</h1>
                                </div>

                                <div className='flex gap-3 mt-2'>
                                    <span className='mt-[7px]'><FaCheck /></span>
                                    <h1>Malaysia</h1>
                                </div>

                                <div className='flex gap-3 mt-2'>
                                    <span className='mt-[7px]'><FaCheck /></span>
                                    <h1>Bangladesh</h1>
                                </div>

                                <div className='flex gap-3 mt-2'>
                                    <span className='mt-[7px]'><FaCheck /></span>
                                    <h1>UAE</h1>
                                </div>

                                <div className='flex gap-3 mt-2'>
                                    <span className='mt-[7px]'><FaCheck /></span>
                                    <h1>Singapore</h1>
                                </div>

                                <div className='flex gap-3 mt-2'>
                                    <span className='mt-[7px]'><FaCheck /></span>
                                    <h1>Russia</h1>
                                </div>

                          </div>

                          <div className='mt-[20px]'>
                             <h1 className='text-[30px]'>Imports</h1>
                             <div className='flex gap-3 mt-2'>
                                    <span className='mt-[7px]'><FaCheck /></span>
                                    <h1>Canada</h1>
                                </div>

                                <div className='flex gap-3 mt-2'>
                                    <span className='mt-[7px]'><FaCheck /></span>
                                    <h1>Australia</h1>
                                </div>

                                <div className='flex gap-3 mt-2'>
                                    <span className='mt-[7px]'><FaCheck /></span>
                                    <h1>Myanmar</h1>
                                </div>

                                <div className='flex gap-3 mt-2'>
                                    <span className='mt-[7px]'><FaCheck /></span>
                                    <h1>Tanzania</h1>
                                </div>
                          </div>
                       </div>
                 </div>
            </div>

              </div>

              <div className='relative'>
                 <img src={Img5} alt="" className='h-[500px]' />
                 <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center'></div>
             </div>

             </div>
        </div>

        <div className='container mx-auto mt-[70px]'>
            <div className='md:ml-[60px] ml-[20px]'>
               <h1 className='text-[#d57315] text-[19px] font-semibold'>WHAT WE OFFER</h1>

               <h1 className='text-[35px] font-semibold'>Our Products</h1>
            </div>
        </div>

        <div className='container mx-auto mt-[10px] mb-12'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 ml-12 mr-10 gap-4'>
          
                <div className='shadow-lg mt-[20px]'>
                      <div className='grid grid-cols-4 gap-3'>
                          <div className='pl-[10px] flex justify-center items-center col-span-1'>
                            <img src="https://www.umaexports.net/images/icon/2.png" alt="" />
                          </div>
                           <div className='pt-[35px] col-span-3'>
                             <h1 className='text-[20px] font-semibold'>Sugar</h1>
                             <p className='pt-[8px]'>Sugar is the main sugar all through the world</p>
                              
                              <Link to={"/sugar"}>
                                <h1 className='text-[#d57315] flex pt-6 font-bold mb-3'>Learn more <FaAngleRight className='mt-[7px] ml-2' /></h1> 
                              </Link>
                           </div>
                      </div>
                </div>

                <div>
                <div className='shadow-lg mt-[20px]'>
                      <div className='grid grid-cols-4 gap-3'>
                          <div className='pl-[10px] flex justify-center items-center col-span-1'>
                            <img src="https://www.umaexports.net/images/icon/1.png" alt="" />
                          </div>
                           <div className='pt-[35px] col-span-3'>
                             <h1 className='text-[20px] font-semibold'>Spice</h1>
                             <p className='pt-[8px]'>We offer an enormous cluster of indian cooking flavors that holds the most particular smell and taste flavor.</p>
                            <Link to={"/spices"}>
                             <h1 className='text-[#d57315] pt-6 font-bold mb-3 flex'>Learn more <FaAngleRight className='mt-[7px] ml-2' /></h1>
                            </Link>
                           </div>
                      </div>
                </div>
                </div>

                <div>
                <div className='shadow-lg mt-[20px]'>
                      <div className='grid grid-cols-4 gap-3'>
                          <div className='pl-[15px] flex justify-center items-center col-span-1'>
                            <img src="https://www.umaexports.net/images/icon/3.png" alt="" />
                          </div>
                           <div className='pt-[35px] col-span-3'>
                             <h1 className='text-[20px] font-semibold'>Food Grains</h1>
                             <p className='pt-[8px]'>Rice is the most broadly eaten staple nourishment for a huge region of the planet human populace.</p>
                             <Link to={"/food-grains"}>
                             <h1 className='text-[#d57315] font-bold pt-6 mb-3 flex'>Learn more <FaAngleRight className='mt-[7px] ml-2' /></h1>
                             </Link>
                           </div>
                      </div>
                  </div>
              </div>


                <div className='shadow-lg mt-[20px]'>
                      <div className='grid grid-cols-4 gap-3'>
                          <div className='pl-[10px] flex justify-center items-center col-span-1'>
                            <img src="https://www.umaexports.net/images/icon/4.png" alt="" />
                          </div>
                           <div className='pt-[35px] col-span-3'>
                             <h1 className='text-[20px] font-semibold'>Tea</h1>
                             <p className='pt-[8px]'>Zexmon Exports provides you with a total tea solution bringing in for you a special blend of strength, values and expertise.</p>
                           <Link to={"/tea"}>
                           <h1 className='text-[#d57315] pt-6 font-bold mb-3 flex'>Learn more <FaAngleRight className='mt-[7px] ml-2' /></h1>
                           </Link>
                           </div>
                      </div>
                </div>

                <div>
                <div className='shadow-lg mt-[20px]'>
                      <div className='grid grid-cols-4 gap-3'>
                          <div className='pl-[10px] flex justify-center items-center col-span-1'>
                            <img src="https://www.umaexports.net/images/icon/5.png" alt="" />
                          </div>
                           <div className='pt-[35px] col-span-3'>
                             <h1 className='text-[20px] font-semibold'>Pulses</h1>
                             <p className='pt-[8px]'>"Zexmon" gathering of organizations, market top caliber, unique Heartbeats (dals) in the public and worldwide business sectors.</p>
                            <Link to={"/pulses"}>
                            <h1 className='text-[#d57315] pt-6 font-bold mb-3 flex'>Learn more <FaAngleRight className='mt-[7px] ml-2' /> </h1>
                            </Link>
                           </div>
                      </div>
                </div>
                </div>

                <div>
                <div className='shadow-lg mt-[20px]'>
                      <div className='grid grid-cols-4 gap-3'>
                          <div className='pl-[15px] flex justify-center items-center col-span-1'>
                            <img src="https://www.umaexports.net/images/icon/6.png" alt="" />
                          </div>
                           <div className='pt-[35px] col-span-3'>
                             <h1 className='text-[20px] font-semibold'>Agro Feed</h1>
                             <p className='pt-[8px]'>Our organization is noted as perhaps of the most notable broker, merchants and exporters of Soyabean Dinner.</p>
                               <Link to={"/agro-feed"}>
                                  <h1 className='text-[#d57315] font-bold pt-6 mb-3 flex'>Learn more <FaAngleRight className='mt-[7px] ml-2' /></h1>
                               </Link>
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

export default Home