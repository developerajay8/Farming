import React from 'react'
import { CgMail } from "react-icons/cg";
import { GiWorld } from "react-icons/gi";
import Img1 from '../images/zexmon png.png'

function TopNavbar() {
  return (
    <>
        <div className='container mx-auto hidden lg:block'>
            <div className='grid grid-cols-4'>
                 <div className='p-[20px]'>
                        <img src={Img1} alt="" width={200} />
                 </div>

                 <div className='flex'>
                     <div className=''>
                         <img src="https://6641d2868036318d6fd7195a--snazzy-sawine-eaabcc.netlify.app/call.png" width={35} className='pt-[20px]' alt="" />
                     </div>
                     <div className='pt-[15px] pl-2'>
                        +01334267000 <br />
                         <span className='text-gray-400 pl-2'>Make a call</span>
                     </div>
                 </div>

                 <div className='flex'>
                     <div className=''>
                     <CgMail className='w-[45px] h-[80px]'/>
                     </div>
                     <div className='pt-[18px] text-[14px] pl-2'>
                         zexmonindproject@gmail.com<br />
                         <span className='text-gray-400 pl-2'>Get An Estimate</span>
                     </div>
                 </div>

                 <div className='flex'>
                     <div className=''>
                     <GiWorld className='w-[35px] h-[80px]'/>
                     </div>
                     <div className='pt-[15px] pl-2'>
                          Haridwar ( Uttarakhanda )<br />
                         <span className='text-gray-400 pl-2'>Location</span>
                     </div>
                 </div>
            </div>
        </div>
    </>
  )
}

export default TopNavbar