import React from "react";
import phoneBanner from "../images/phoneBanner.avif";
import { AiFillPlayCircle } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <section>
      <div className="container  flex flex-col items-center px-6 mx-auto mt-2 md:flex-row ">
        {/*  LEFT ITEMS */}
        <div className="flex  flex-col space-y-8  md:w-1/2">
          <h1 className="text-4xl  text-white max-w-sm font-bold  md:text-left md:text-5xl">
            Protect your payment with a digital escrow
          </h1>

          <p className="text-white trusted  max-w-sm md:text-left">
            Buy and sell anything safely without the risk of chargebacks or
            fraud.
          </p>

          <div>
            <div className="flex items-center space-x-2  ">
              <div className="flex py-3 px-4  rounded-full bg-btnBlue  items-center text-white">
                <a href="#" className="text-sm md:text-lg">
                  
                  Create account
                </a>
                <MdKeyboardArrowRight className="text-2xl" />
              </div>

              <div className="flex px-2 items-center space-x-2">
                <AiFillPlayCircle className=" text-xl text-blue-200" />
                <h4 className="text-white trusted  md:text-lg">Watch Video</h4>
              </div>
            </div>
          </div>
        </div>
        {/* IMAGE */}
        <div className="md:w-1/2 ">
          <img src={phoneBanner} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
