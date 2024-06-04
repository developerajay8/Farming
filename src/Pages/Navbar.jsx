import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import Img1 from '../images/zexmon png.png'

export const NavbarLinks = [
  {
    name: "HOME",
    link: "/",
  },
  {
    name: "ABOUT US",
    link: "/about",
  },
  {
    name: "OUR PRODUCTS",
    link: "/sugar",
  },
  {
    name: "POLICY",
    link: "/policy",
  },
  {
    name: "INVESTORS",
    link: "/investors",
  }, {
    name: "PUBLIC ISSUE",
    link: "/public-issue",
  }, 
  {
    name: "CAREERS",
    link: "/careers",
  },
  {
    name: "EXPORTS",
    link: "/exports",
  },
  {
    name: "CONTACT US",
    link: "/contact",
  },
];

const DropdownLinks = [
  {
    name: "Sugar",
    link: "/sugar",
  },
  {
    name: "Spices",
    link: "/spices",
  },
  {
    name: "Food Grains",
    link: "/food-grains",
  },
  {
    name: "Tea",
    link: "/tea",
  },{
    name: "Pulses",
    link: "/pulses",
  },{
    name: "Agro Feeds",
    link: "/agro-feed",
  },
];

const DropdownCareers = [
  {
    name: "HR Philosophy",
    link: "/philosophy",
  },
  {
    name: "Online Form",
    link: "/application-form",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="sticky top-0 right-0 w-full z-50 lg:bg-black bg-white backdrop-blur-sm text-black lg:text-white shadow-md ">
       
        <div className="container mx-auto py-3 sm:py-0">
          <div className="flex justify-between lg:justify-evenly items-center ">
            <div className="flex items-center gap-4 md:pt-[10px] lg:hidden sm:block md:pb-4 font-bold text-2xl lg:pl-10 pl-5">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <img src={Img1} alt="" className="h-16" />
              </Link>
            </div>
            <div className="hidden lg:block mr-10">
              <ul className="flex items-center gap-10">
                <li className="py-4 hover:text-[#fd7e14] duration-500 text-[16px]">
                  <NavLink to="/" activeClassName="active">
                     HOME
                  </NavLink>
                </li>
                <li className="py-4 hover:text-[#fd7e14] duration-300 text-[16px]">
                  <NavLink to="/about" activeClassName="active">
                     ABOUT US
                  </NavLink>
                </li>
                { <li className="group relative cursor-pointer duration-300 hover:text-[#fd7e14] text-[19px]">
                  <a
                    href="/"
                    className="flex h-[72px] duration-300 items-center gap-[2px]"
                  >
                    Our Products{" "}
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[170px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full hover:text-[#fd7e14] duration-300 rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>}
                
                <li className="py-4 duration-300 hover:text-[#fd7e14] text-[16px]">
                  <NavLink to="/policy" activeClassName="active">
                     POLICIES
                  </NavLink>
                </li>
                <li className="py-4 duration-300 hover:text-[#fd7e14] text-[16px]">
                  <NavLink to="/investors" activeClassName="active">
                    INVESTORS
                  </NavLink>
                </li>
                {/* <li className="py-4 hover:text-[#5f9f9d] text-[16px]">
                  <NavLink to="/public-issue" activeClassName="active">
                    PUBLIC ISSUE
                  </NavLink>
                </li> */}

               { <li className="group relative cursor-pointer duration-300 hover:text-[#fd7e14] text-[19px]">
                  <a
                    href="/"
                    className="flex h-[72px] duration-300 items-center gap-[2px]"
                  >
                     careers{" "}
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[170px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                    <ul className="space-y-3">
                      {DropdownCareers.map((data) => (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full hover:text-[#fd7e14] duration-300 rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>}
                
                <li className="py-4 duration-300 hover:text-[#fd7e14] text-[16px]">
                  <NavLink to="/exports" activeClassName="active">
                      EXPORTS
                  </NavLink>
                </li> <li className="py-4 duration-300 hover:text-[#fd7e14] text-[16px]">
                  <NavLink to="/contact" activeClassName="active">
                    CONTACT US
                  </NavLink>
                </li>
                
              </ul>
            </div>
            <div className="lg:hidden">
              <div className="lg:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;