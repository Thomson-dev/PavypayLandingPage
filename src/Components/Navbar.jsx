import React, { useEffect, useState } from "react";
import Logo from "../images/logo-white.svg";
import { FaAngleDown } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScoll = () => {
      setScroll(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScoll);
  }, []);

  return ( 
    <nav className= {`flex justify-around items-center py-7 sticky top-0  bg-LightBlue shadow-md`}>
      <div>
        <img src={Logo} alt="logo" className="h-17  cursor-pointer" />
      </div>



      <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-4 top-6 cursor-pointer md:hidden"
        >
          {open ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
        </div>
      <div>


        <ul className={`absolute   w-full p-12 md:p-0 space-y-10 md:space-y-0 
        bg-LightBlue font-bold  right-0 top-24 md:top-0 
        text-white md:space-x-8 transition-all ease-in  text-bg md:flex  md:static ${open ? 'left-0': 'left-[-100%]'}`}  >
          <li>
            <a href="#">Developers</a>
          </li>
          <li>
            <a href="#">Princing</a>
          </li>
          <div className="flex items-center space-x-1">
            <li>
              <a href="#">Learn</a>
            </li>
            <FaAngleDown />
          </div>
        </ul>
      </div>

      <div>
        <a
          href="#"
          className="inline-block hidden px-8 p-3 font-bold tracking-wider bg-LightBlue border border-white  py-2 text-sm text-white rounded-full md:flex"
        >
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
 