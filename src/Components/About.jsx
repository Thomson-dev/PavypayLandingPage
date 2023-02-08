import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import feature from "../images/feature-icon_lnjlfd.avif";

const About = () => {
  return (
    <section className="">
      <div className="container mt-20 flex-col max-w-sm space-y-10 flex  text-center pt-5  justify-center mx-auto">
        <h1 className="text-3xl font-bold  ">
          Pay safely from anywhere, anytime.
        </h1>
      </div>
      <p className="text-center mt-5 text-lg text-textColor p-5 trusted mx-auto max-w-xl">
        We help busineses of all types work better, save time and money with a
        simple and secured payment system.
      </p>

      <div className="flex mx-2 md:mx-24 mt-10">
        <div className="  flex  md:flex-row flex-col space-y-10 items-center  px-15  space-x-0 md:space-x-20  ">
          {/* card1 */}
          <div className="flex flex-col space-y-3 ">
            <img src={feature} alt="" className="w-[20%] h-[50%]" />
            <div className="flex items-center">
              <div className="w-[2px] h-4 bg-blue-700"></div>
              <h1 className="text-xl px-2 font-bold">Built For Marketplaces</h1>
            </div>
            <p className="max-w-xs text-lg text-textColor">
              Scale your business, secure your customers and collect payment
              with Pavypay
            </p>
            <div className="flex items-center">
              <a href="" className="text-blue-500">
                Learn More
              </a>
              <MdKeyboardArrowRight className="text-xl text-blue-400" />
            </div>
          </div>
          {/* card2 */}
          <div className="flex flex-col space-y-3 pb-8">
            <img src={feature} alt="" className="w-[20%] h-[50%]" />
            <div className="flex items-center"> 
              <div className="w-[2px] h-4 bg-blue-700"></div>
              <h1 className="text-xl px-2 font-bold">Built For Service Providers</h1>
            </div>
            <p className="max-w-xs text-lg text-textColor">
              Protect your brand, build brand trust and secure your customer
              with Pavypay
            </p>
            <div className="flex items-center">
              <a href="" className="text-blue-500">
                Learn More
              </a>
              <MdKeyboardArrowRight className="text-xl text-blue-400" />
            </div>
          </div>

          {/* Card3 */}
          <div className="flex flex-col space-y-3 pb-8">
            <img src={feature} alt="" className="w-[20%] h-[50%]" />
            <div className="flex items-center">
              <div className="w-[2px] h-4 bg-blue-700"></div>
              <h1 className="text-xl px-2 font-bold">Built For Busineses</h1>
            </div>
            <p className="max-w-xs text-lg text-left text-textColor">
              Build client trust and secure your service by collecting payment
              with Pavypay
            </p>
            <div className="flex items-center">
              <a href="" className="text-blue-500">
                Learn More
              </a>
              <MdKeyboardArrowRight className="text-xl text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
