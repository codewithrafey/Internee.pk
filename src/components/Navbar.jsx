import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  let loaction = useLocation();
  let pathName = loaction.pathname;

  return (
    <div className="flex justify-between items-center sticky top-0 z-50 py-4 bg-white/90 backdrop-blur-md drop-shadow-sm px-5 sm:px-10 xl:px-20">
      <h1 className="text-3xl font-bold cursor-pointer">Internee<span className="text-blue-500">.pk</span></h1>

      {/* Menu List */}
      <ul
        className={`flex gap-10 cursor-pointer text-[14px] font-semibold transition-all duration-300 ease-in-out
        max-lg:overflow-hidden max-lg:flex-col max-lg:w-full max-lg:absolute left-0 max-lg:bg-gray-200/95 max-lg:backdrop-blur-lg lg:static lg:flex lg:flex-row 
        ${
          openMenu
            ? "max-lg:max-h-96 max-lg:top-19 max-lg:py-5 px-5 sm:px-10 max-lg:opacity-100"
            : "max-lg:max-h-0 max-lg:top-10 max-lg:opacity-0"
        }
        `}
      >
        <li onClick={() => setOpenMenu(false)} className={`hover:border-b ${pathName === '/' ? 'text-blue-500' : ''}`}>
          <Link to={'/'}>Home</Link>
        </li>
        <li onClick={() => setOpenMenu(false)} className={`hover:border-b ${pathName === '/internship' ? 'text-blue-500' : ''}`}>
          <Link to={'/internship'}>Internships</Link> 
        </li>
        <li onClick={() => setOpenMenu(false)} className={`hover:border-b ${pathName === '/about' ? 'text-blue-500' : ''}`}>
          <Link to={'/about'}>About Us</Link> 
        </li>
        <li onClick={() => setOpenMenu(false)} className={`hover:border-b ${pathName === '/contact' ? 'text-blue-500' : ''}`}>
          <Link to={'/contact'}>Contact</Link> 
        </li>

        {/* Mobile-only buttons */}
        <div className="flex flex-col gap-3 lg:hidden mt-3">
          <button onClick={() => setOpenMenu(false)} className="px-6 py-2 bg-blue-500 text-white rounded text-[14px] font-semibold border border-blue-500 hover:bg-white hover:text-black transition duration-300">
            <Link>Job Portal</Link> 
          </button>
          <button onClick={() => setOpenMenu(false)} className="px-6 py-2 bg-blue-500 text-white rounded text-[14px] font-semibold border border-blue-500 hover:bg-blue-600">
            <Link>Sign In</Link> 
          </button>
        </div>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex gap-5">
        <button className="px-6 py-2 bg-blue-500 text-white rounded text-[14px] font-semibold border border-blue-500 hover:bg-white hover:text-black transition duration-300 cursor-pointer">
          <Link>Job Portal</Link> 
        </button>
        <button className="px-6 py-2 bg-blue-500 text-white rounded text-[14px] font-semibold border border-blue-500 hover:bg-blue-600 cursor-pointer">
          <Link>Sign In</Link> 
        </button>
      </div>

      {/* Menu Icon */}
      <div className="lg:hidden px-2 py-2 rounded-md bg-blue-500/30">
        {openMenu ? (
          <MdClose
            aria-label="Close menu"
            role="button"
            className="text-3xl cursor-pointer"
            onClick={() => setOpenMenu(false)}
          />
        ) : (
          <HiMenuAlt3
            aria-label="Open menu"
            role="button"
            className="text-3xl cursor-pointer"
            onClick={() => setOpenMenu(true)}
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
