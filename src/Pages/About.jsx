import React from 'react'
import TopNavbar from './TopNavbar'
import Navbar from './Navbar'
import Img6 from '../images/farming-4.jpg'
import { Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";
import Img7 from '../images/farming-5.png'
import Footer from './Footer'

function About() {
  return (
    <>
       <TopNavbar/>
       <Navbar/>

       <div className='container mx-auto'>
        <div className='relative'>
        <div className=''>
           <img src={Img6} alt="" className='lg:h-[350px] md:h-[280px] h-[200px] w-full'/>
           <div className='absolute inset-0 bg-black bg-opacity-20 flex items-center'>
               <h1 className='text-white lg:pl-16 md:pl-8 pl-4 text-[40px] font-semibold'>About us <br /></h1>
                <div className='text-white hover:text-[#d57315] hidden md:block  text-[20px] font-semibold pt-[120px]'>
                    <Link to={"/"}>
                         Home
                    </Link>
                </div>
                <BsArrowRight className='text-white hidden md:block mt-[125px] md:ml-4 text-[20px]' />
                  <div className=' hover:text-white hidden md:block text-[#d57315] text-[20px] md:ml-5 font-semibold pt-[120px]'>
                <Link to={"/about"}>
                      About Us
                </Link>
                </div>
           </div>
        </div>
        </div>
       </div>

       <div className='container mx-auto mt-[60px]'>
            <div className='grid lg:grid-cols-2'>
                <div className='lg:ml-[70px] md:ml-[100px] p-[30px]'>
                   <img src={Img7} alt="" />
                </div>

                <div className='pt-[10px] p-[30px] lg:p-[20px]'>
                  <p className='text-[20px] font-bold text-[#fd7e14]'>About</p>
                  <h1 className='text-3xl font-bold pt-[10px]'>Our Journey:</h1>
                  <p className='text-gray-400 pt-5 lg:mr-[50px] '>Since our inception in 2011, Zexmon India Projects has been driven by a passion for excellence and a commitment to quality. Based in the SIDCUL Industrial Area of Haridwar, Uttarakhand, India, our strategic location allows us to efficiently manage our operations and serve our global clientele effectively.</p>
                  <p className='text-gray-400 pt-5 lg:mr-[50px] '>Explore our diverse product offerings and discover how we can meet your agricultural and food product needs. Contact us today to learn more about our services and to discuss how we can partner for mutual success.</p>
                  <p className='text-gray-400 pt-5 lg:mr-[50px] '>Our Organization is locked in into exchanging and promoting of rural produce and products, for example, sugar, flavors like dry red chillies, turmeric, coriander, cumin seeds, food grains like rice, wheat, corn, sorghum and tea, beats and agrarian feed like soyabean dinner and rice wheat de-oiled cake. We import lentils, faba beans, dark Matpe, and toor (Pigean Peas) in India in mass amounts. Our significant imports are from Canada, Australia and Burma. We are B2Btraders, profoundly accomplished in sugar, corn and dal. We keep up with stocks and disseminate them to various institutional gatherings like producers, exporters, and so forth. We give them in mass amounts. We observe guideline pressing interaction to guarantee that quality and valid taste of wares stays in one piece.</p>
              </div>
            </div>

            <div className='pl-[30px] pr-5 text-gray-400 mt-5'>
               <p>Our Company has developed business strategy to switch over exports/imports from one commodity to another with change in demandor inconsistency in pricing for any commodity during any season. This policy adopted by the management ensures that theCompany does not pass through a lean period during the year.</p>
               <p className='mt-[25px]'>We are a Two Star Product House perceived by Directorate General of Unfamiliar Exchange. We likewise got a testament of enlistment as an Exporter from the Flavors Leading body of India. We are enlisted with APEDA and League of Indian Commodity Associations.</p>
               <p className='mt-[25px]'>Quality Assurance: We adhere to the highest standards of quality control to ensure our products meet international benchmarks.Global Reach: Serving clients in Africa, the Gulf countries, and Europe, we have a robust distribution network that guarantees timely delivery.</p>
            </div>
       </div>

      <div className='container mx-auto lg:mt-[90px] mt-[60px]'>
       <div className="relative">
      <img src="https://cdn.pixabay.com/photo/2023/01/09/20/18/sunset-7708222_1280.jpg" alt="Image" className="w-full h-full " />
      <div className="absolute inset-0 bg-orange-500 bg-opacity-70 flex items-center justify-center">
        <div className="text-2xl mx-4 md:mx-7 mt-[100px]  md:mt-[400px] lg:mt-[200px] h-full bg-white  text-black ">
          <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
            <div className='grid grid-cols-1 p-1 lg:pl-[90px] '>
              <div className=' ml-[80px] md:ml-[90px] mt-9'>
                <img src="https://www.trinity.edu.np/assets/backend/uploads/About-us/vision.jpg" className='border p-3 border-dashed' alt=""  width={200}/>
              </div>

              <div className='mt-3 md:mt-0'>
              <h1 className='text-3xl pl-4  font-semibold'>Vision</h1> 
              <p className='text-gray-500 text-[14px] mt-5 font-medium '>Being a worldwide substance in the field of Global Exchange , our vision is to give a dependable market and fair costs for items to our clients. To convey top notch items in time, reliably through a client driven approach. With a dream to develop, obligation to perform and greatness to conveying the absolute best and to universally be the most grounded connect among providers and buyers. We plan to grow our capacity ceaselessly in the worth chain and to be most favored player with obligation to quality, security, climate, cost financial matters and conveying.</p> 
              </div>
            
            </div>

              <div className='grid grid-cols-1  lg:pl-[90px] lg:pr-9 '>
              <div className=' ml-[80px] md:ml-[90px] mt-9'>
                <img src="https://www.ztechms.com/wp-content/uploads/2019/05/missn.png" className='border p-3 border-dashed' alt=""  width={200}/>
              </div>
         <div className='mt-[60px] '>
         <h1 className='text-3xl  font-semibold'>Mission</h1> 
              <p className='text-gray-500 text-[14px] mt-5 font-medium '>While holding a profound regard for all people inside and outside the organization and the local area at large, the organization sets out its statement of purpose :</p> 

      <div className='border-l-orange-500 border-l-2 mt-5 pl-2'>
        <p className='text-gray-500 text-[14px] font-medium '>To make, circulate and sell the best nature of items and advance strategic approaches that regard the Earth and the Climate.</p>

        <p className='text-gray-500 mt-3 text-[14px] font-medium '>
        Regularly evaluate and improve our capabilities by investing in training and thereby responding to changing client needs.
        </p>

        <p className='text-gray-500 mt-3 text-[14px] font-medium '>
        To guzzle, practice and keep up with the nature of items at the summit of its immaculateness, inventiveness, defilement free guidelines at all logical boundaries of its best quality
        </p>
      </div>
         </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div className='container mx-auto lg:pl-[80px] md:pl-[60px] pl-[30px] lg:mt-[300px] md:mt-[620px] mt-[1280px]'>
        <p className='text-[#d57315]'>TEAM MEMBER</p>
        <h1 className='text-[40px] mt-4 font-semibold'>Management Team</h1>
        <p className='mt-[10px] text-gray-500'>The management of “Zexmon” group of companies represent the wisdom, experience and tact of the old along with the energetic efficiency of the young.</p>
    </div>

    <div className='container mx-auto lg:p-16 md:p-12 p-5'>
           <div className='grid md:grid-cols-3 gap-4 mx-4'>
              <div className=''>
                <img src="https://demo.htmlcodex.com/2500/home-repair-website-template/img/team-1.jpg" alt="" />
              </div>

              <div>
                <img src="https://demo.htmlcodex.com/2500/home-repair-website-template/img/team-2.jpg" alt="" />
              </div>

              <div>
                <img src="https://demo.htmlcodex.com/2500/home-repair-website-template/img/team-3.jpg" alt="" />
              </div>
           </div>
     </div>

     <Footer/>
    </>
  )
}

export default About