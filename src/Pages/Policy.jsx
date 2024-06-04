import React from 'react'
import TopNavbar from './TopNavbar'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import Img6 from '../images/farming-4.jpg'
import { IoMdCall } from "react-icons/io";
import { FaFilePdf } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import Footer from './Footer';
import Img7 from '../images/security-3759179_1280.jpg'

function Policy() {
  return (
    <>
       <TopNavbar/>
       <Navbar/>

        <div className='container mx-auto'>
        <div className='relative'>
        <div className=''>
           <img src={Img7} alt="" className='lg:h-[350px] md:h-[280px] h-[200px] w-full'/>
           <div className='absolute inset-0 bg-black bg-opacity-20 flex items-center'>
               <h1 className='text-white lg:pl-16 md:pl-8 pl-4 text-[40px] font-semibold'>POLICIES</h1>
                <div className='text-white hover:text-[#d57315] hidden md:block  text-[20px] font-semibold pt-[120px]'>
                    <Link to={"/"}>
                         Home
                    </Link>
                </div>
                <BsArrowRight className='text-white hidden md:block mt-[125px] md:ml-4 text-[20px]' />
                  <div className=' hover:text-white hidden md:block text-[#d57315] text-[20px] md:ml-5 font-semibold pt-[120px]'>
                <Link to={"/policy"}>
                     Policies
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

             <Link to={"/policy"}>
             <div className="bg-orange-400 mb-2 cursor-pointer  p-1">
                <div className="border border-dashed flex  items-center justify-between p-2">
                  <h1 className="text-white text-[17px] ">POLICIES</h1>
                  <FaArrowRight className="text-white" />
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
            <div className="lg:mt-[30px] mb-14">
              <h3 className="text-3xl font-semibold">Policies for Zexmon India Projects</h3>
                
                <h1 className='mt-[40px] text-[25px]'>1. Quality Assurance Policy:</h1>
              <p className="text-gray-400 font-medium pt-5">
              Strict Quality Control: Implement rigorous quality control processes at every stage of production and packaging to ensure products meet international standards.
              Certifications: Obtain and maintain necessary certifications for all products to guarantee compliance with health and safety regulations of importing countries.
              </p>

              <p className="text-gray-400 font-medium pt-3">
              Supplier Vetting: Source raw materials from reputable suppliers who adhere to our stringent quality criteria.
              </p>


              <h1 className='mt-[35px] text-[25px]'>2. Export Compliance Policy:</h1>
              <p className="text-gray-400 font-medium pt-5">
              Regulatory Adherence: Comply with all export regulations, documentation, and standards required by the importing countries in Africa, the Gulf region, and Europe.
              Customs Documentation: Ensure accurate and timely preparation of all customs documentation to avoid delays and ensure smooth delivery.
              </p>

              <p className="text-gray-400 font-medium pt-3">
              Trade Laws: Stay updated with changes in international trade laws and adjust policies accordingly.
              </p>


              <h1 className='mt-[35px] text-[25px]'>3. Sustainable Sourcing Policy</h1>
              <p className="text-gray-400 font-medium pt-5">
              Ethical Sourcing: Engage in fair trade practices by sourcing products from suppliers who maintain ethical labor practices.
              Environmental Responsibility: Implement sustainable farming and production methods to minimize environmental impact.
              </p>

              <div>
              <h1 className='mt-[35px] text-[25px]'>4. Customer Satisfaction Policy</h1>
              <p className="text-gray-400 font-medium pt-5">
              Customer Feedback: Regularly collect and review customer feedback to improve products and services. <br />
              Responsive Service: Provide prompt and efficient customer service to address inquiries and issues. <br />
              Customization: Offer product customization options to meet specific customer requirements and preferences.
              </p>

              <h1 className='mt-[35px] text-[25px]'>5. Supply Chain Management Policy:</h1>
              <p className="text-gray-400 font-medium pt-5">
              Efficient Logistics: Optimize supply chain operations to ensure timely and cost-effective delivery of products.
              Inventory Management: Maintain optimal inventory levels to meet demand without overstocking.
              Supplier Relationships: Build strong relationships with suppliers to ensure reliability and quality of raw materials.
              </p>

              <h1 className='mt-[35px] text-[25px]'>6. Pricing and Payment Policy:</h1>
              <p className="text-gray-400 font-medium pt-5">
              Competitive Pricing: Set competitive prices while ensuring fair margins to sustain business growth and customer satisfaction.
              Payment Terms: Establish clear payment terms and conditions to facilitate smooth financial transactions with clients.
              Risk Management: Implement measures to mitigate financial risks, including credit checks and insurance for exports.

              </p>

              <h1 className='mt-[35px] text-[25px]'>7. Health and Safety Policy:</h1>
              <p className="text-gray-400 font-medium pt-5">
              Workplace Safety: Maintain a safe and healthy work environment for all employees, adhering to local and international safety standards.
              Product Safety: Ensure all products are safe for consumption and meet health regulations of importing countries.
              </p>

              <h1 className='mt-[35px] text-[25px]'>8. Ethical Conduct Policy:</h1>
              <p className="text-gray-400 font-medium pt-5">
              Integrity: Conduct all business activities with the highest level of integrity and transparency.
              Anti-Corruption: Implement strict anti-corruption measures and ensure compliance with anti-bribery laws.
              </p>

              <h1 className='mt-[35px] text-[25px]'>9. Innovation and Development Policy:</h1>
              <p className="text-gray-400 font-medium pt-5">
              Continuous Improvement: Encourage innovation and continuous improvement in product offerings and processes.
              Research and Development: Invest in research and development to stay ahead of market trends and customer demands.
              </p>

              <h1 className='mt-[35px] text-[25px]'>10. Social Responsibility Policy:</h1>
              <p className="text-gray-400 font-medium pt-5">
              Community Engagement: Engage in community development activities and support local communities in Haridwar and other regions where we operate.
              Employee Welfare: Provide fair wages, benefits, and opportunities for professional growth to all employees.
              </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default Policy