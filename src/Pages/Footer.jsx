import React from "react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="2xl:container mx-auto rounded-sm bg-gray-900 mt-[50px]">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 p-4 ">
          <div className="grid grid-cols-1">
            <div className="flex gap-3">
              <span className="pr-2 ml-2 h-[30px] w-1 text-orange-500 bg-orange-500">
                I
              </span>
              <h1 className="text-white font-bold text-xl mb-5">Useful Links</h1>
            </div>

            <div className="flex gap-3">
              <MdAdd className="text-orange-500 text-2xl mb-3" />
              <Link to={"/about"}>
                <span className="text-white font-medium hover:text-orange-500 duration-200 cursor-pointer">
                  {" "}
                  About Us
                </span>
              </Link>
            </div>
            <div className="flex   gap-3">
              <MdAdd className="text-orange-500 text-2xl mb-3" />
              <Link to={"/sugar"}>
                <span className="text-white font-medium hover:text-orange-500 duration-200 cursor-pointer">
                  {" "}
                  Our Products
                </span>
              </Link>
            </div>
            <div className="flex   gap-3">
              <MdAdd className="text-orange-500 text-2xl mb-3" />
              <Link to={"/policy"}>
                <span className="text-white font-medium hover:text-orange-500 duration-200 cursor-pointer">
                  {" "}
                  Policy
                </span>
              </Link>
            </div>
            <div className="flex   gap-3">
              <MdAdd className="text-orange-500 text-2xl mb-3" />
              <Link to={"/financial"}>
                <span className="text-white font-medium hover:text-orange-500 duration-200 cursor-pointer">
                  Financials
                </span>
              </Link>
            </div>
            <div className="flex   gap-3">
              <MdAdd className="text-orange-500 text-2xl mb-3" />
              <Link to={"/careers"}>
                <span className="text-white font-medium hover:text-orange-500 duration-200 cursor-pointer">
                  {" "}
                  Careers
                </span>
              </Link>
            </div>
            <div className="flex   gap-3">
              <MdAdd className="text-orange-500 text-2xl mb-3" />
              <Link to={"/exports"}>
                <span className="text-white font-medium hover:text-orange-500 duration-200 cursor-pointer">
                  {" "}
                  Exports
                </span>
              </Link>
            </div>
            <div className="flex   gap-3">
              <MdAdd className="text-orange-500 text-2xl mb-3" />
              <Link to={"/contact-us"}>
                <span className="text-white font-medium hover:text-orange-500 duration-200 cursor-pointer">
                  {" "}
                  Contact Us
                </span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1">
            <div className="flex gap-3 h-[0px] mb-3">
              <span className="pr-2 ml-2 h-[30px] w-1 text-orange-500 bg-orange-500">
              </span>
              <h1 className="text-white font-bold text-xl">Our Products</h1>
            </div>

            <div className="mt-4">
              <div className="flex  gap-3">
                <MdAdd className="text-orange-500 text-2xl" />
                <Link to={"/sugar"}>
                  <span className="text-white font-medium hover:text-orange-500 duration-200 cursor-pointer">
                    {" "}
                    Sugar
                  </span>
                </Link>
              </div>
              <div className="flex  mt-3 gap-3">
                <MdAdd className="text-orange-500 text-2xl" />
                <Link to={"/spices"}>
                  <span className="text-white font-medium hover:text-orange-500 duration-200 cursor-pointer">
                    {" "}
                    Spice
                  </span>
                </Link>
              </div>
              <div className="flex  mt-3 gap-3">
                <MdAdd className="text-orange-500 text-2xl" />
                <Link to={"/food-grains"}>
                  <span className="text-white font-medium hover:text-orange-500 duration-200 cursor-pointer">
                    Food Grains
                  </span>
                </Link>
              </div>
              <div className="flex  mt-3 gap-3">
                <MdAdd className="text-orange-500 text-2xl" />
                <Link to={"/tea"}>
                  <span className="text-white font-medium hover:text-orange-500 duration-200 cursor-pointer">
                    Tea
                  </span>
                </Link>
              </div>
              <div className="flex  mt-3 gap-3">
                <MdAdd className="text-orange-500 text-2xl" />
                <Link to={"/pulses"}>
                  <span className="text-white font-medium hover:text-orange-500 duration-200 cursor-pointer">
                    {" "}
                    Pulses
                  </span>
                </Link>
              </div>
              <div className="flex  mt-3 gap-3">
                <MdAdd className="text-orange-500 text-2xl" />
                <Link to={"/agro-feed"}>
                  <span className="text-white font-medium hover:text-orange-500 duration-200 cursor-pointer">
                    {" "}
                    Agro Feeds
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-1 mt-9 lg:mt-0 ">
            <div className="flex gap-3 h-[20px] pb-6 ">
              <span className="pr-2 ml-2 h-[30px] w-1 text-orange-500 bg-orange-500">
                I
              </span>
              <h1 className="text-white font-bold text-xl">Get In Touch</h1>
            </div>

            <div className="mt-6">
              <div className="flex gap-3">
                <span className="text-gray-600 text-2xl">
                  <CiLocationOn />
                </span>
                <h1 className="text-gray-400 lg:w-[60%] text-[17px] mb-3">
                   Head Office: Flat No. 113/114, P3B, Deep Ganga Apartment SIDCUL Industrial Area, Haridwar, Uttarakhand, India
                </h1>
              </div>

              <div className="flex gap-3 my-2">
                <span className="text-gray-600 text-2xl">
                  <IoMdCall />
                </span>
                <h1 className="text-gray-400 w-[60%] text-[17px] mb-2">
                  01334267000, 01334267888
                </h1>
              </div>

              <div className="flex gap-3">
                <span className="text-gray-600 text-2xl">
                  <IoMailUnreadOutline />
                </span>
                <a
                  className="text-[17px] text-gray-400"
                  href="mailto: info@zexmonindiaprojects.com"
                  target="_blank"
                >
                  info@zexmonindiaprojects.com
                </a>
              </div>

              <div className="mt-4 flex items-center gap-3 ">
                <a href="https://www.facebook.com/zexmonindiaprojects/">
                  <FaFacebook className="text-2xl text-gray-400" />
                </a>

                <a href="">
                  <FaTwitter className="text-2xl text-gray-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b mb-5 mt-1"></div>

        <div className="flex justify-center px-3 items-center text-gray-400 font-semibold pb-5">
          Copyright © 2024 Zexmon India Projects. All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;