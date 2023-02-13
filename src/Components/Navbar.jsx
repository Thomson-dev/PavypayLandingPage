import React, { useEffect, useState } from "react";
import Logo from "../images/logo-white.svg";
import Logo2 from "../images/logo.svg";
import { FaAngleDown } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScoll = () => {
      if (window.scrollY > 90) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScoll);
  }, []);

  return (
    <nav
      className={`flex justify-around items-center py-5 sticky z-10 top-0
       ${ scroll ? "bg-white bg-opacity-90 shadow-md" : "bg-LightBlue"
     }  `}

    >
      <div>
        {scroll ? (
          <img src={Logo2} alt="logo" className="h-17  cursor-pointer" />
        ) : (
          <img src={Logo} alt="logo" className="h-17  cursor-pointer" />
        )}
      </div>

      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-4 top-6 cursor-pointer md:hidden"
      >
        {open ? (
          <HiX className={scroll ? "text-black " : "text-white" } />
        ) : (
          <HiMenuAlt3 className={scroll ? "text-black" : "text-white"} />
        )}
      </div>
      <div>
        <ul
          className={` hidden   md:p-0 space-y-10 md:space-y-0 
       font-bold  right-0  first-line:top-[85px] md:top-0
       ${scroll ? "text-black" : "text-white"}   md:space-x-8 
          text-bg md:flex  
        md:static ${open ? "left-0" : "left-[-100%]"}
          }
        `}
        >
          <li>
            <a className="" href="#">
              Developers
            </a>
          </li>
          <li>
            <a href="#">Princing</a>
          </li>
          <div className="flex items-center sm:justify-between space-x-1">
            <li>
              <a href="#">Learn</a>
            </li>
            <FaAngleDown />
          </div>
        </ul>

        {/* Mobile */}

        <ul className=  {`md:hidden absolute top-20 text-xl
        left-0 mx-5 w-[90%] transition-all ease-in ${scroll ? 'bg-slate-100' : ' bg-slate-100'}  ${open ? 'left-0 duration-300' : ' left-[-100%]'} space-y-8  bg-white rounded-xl p-12`}  >
        <li>
            <a className="" href="#">
              Developers
            </a>
          </li>
          <li>
            <a href="#">Princing</a>
          </li>
          <div className="flex items-center sm:justify-between space-x-1">
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
