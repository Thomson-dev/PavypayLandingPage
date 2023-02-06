import React, { useEffect, useState } from "react";
import Logo from "../images/logo-white.svg";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  
    
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScoll = () => {
      setScroll(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScoll);
  }, []);

  return ( 
    <nav className= {`flex justify-around items-center py-7  bg-LightBlue `}>
      <div>
        <img src={Logo} alt="logo" className="h-17  cursor-pointer" />
      </div>

      <div>
        <ul className=" hidden font-bold text-white md:space-x-8  text-bg md:flex">
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
          className="inline-block px-8 p-3 font-bold tracking-wider bg-LightBlue border border-white  py-2 text-sm text-white rounded-full "
        >
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
 