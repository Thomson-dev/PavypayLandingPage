import React from "react";
import eliminate from "../images/we-eliminate-risk_f355mn.avif";
import { BsCheckCircleFill } from "react-icons/bs";

const Services = () => (
  <section className=" mt-24 bg-DarkBlue">
    <div className="container mx-auto  flex-col flex md:flex-row ">
      {/* left */}
      <div className=" md:w-1/2 flex flex-col space-y-8 space-x-0 p-4 md:p-12 justify-center ">
        <h4 className="text-xl text-blue-800 font-bold">SECURED PAYMENT</h4>

        <h1 className="text-3xl font-bold max-w-sm">
          We eliminate risk for both buyers and sellers
        </h1>

        <p className="text-lg max-w-lg  text-textColor">
          With our end-to-end fully automated and digitally encripted escrow
          solution, you can be rest assured that your payment for goods and
          services as a business is fully secured and your orders as a buyer are
          delivered as requested.
        </p>
        <div className="flex flex-col space-y-7  mt md:space-y-0 md:flex-row  ">
          {/* Row1*/}
          <div className=" flex flex-col  space-y-5 md:space-y-5 md:w-1/2">
            <div className="items-center flex ">
              <div className="w-[2px] h-4 bg-blue-700"></div>
              <h5 className="px-4 text-lg font-bold">Buyer</h5>
            </div>
            <div className="flex items-center">
              <BsCheckCircleFill className="text-3xl text-blue-700" />
              <p className="px-3 max-w-xs  text-textColor">
                Pavypay mediate between you and seller to ensure zero fraud
              </p>
            </div>

            <div className="flex items-center">
              <BsCheckCircleFill className="text-3xl text-blue-700" />
              <p className="px-3 max-w-xs text-textColor">
              You pay only for what you ordered and not what seller’s intention
              </p>
            </div>

            <div className="flex items-center">
              <BsCheckCircleFill className="text-3xl text-blue-700" />
              <p className="px-3 max-w-xs  text-textColor">
              You get 100% money back when not satisfied with your order
              </p>
            </div>
          </div>
          {/* Row2 */}
          <div className=" flex flex-col space-y-5 md:space-y-5 md:w-1/2">
            <div className="items-center flex ">
              <div className="w-[2px] h-4 bg-blue-700"></div>
              <h5 className="px-4 text-lg font-bold">Seller</h5>
            </div>
            <div className="flex items-center">
              <BsCheckCircleFill className="text-3xl text-blue-700" />
              <p className="px-3 max-w-xs text-textColor">
              You get 100% money back when not satisfied with your order
              </p>
            </div>

            <div className="flex items-center">
              <BsCheckCircleFill className="text-3xl text-blue-700" />
              <p className="px-3 max-w-xs text-textColor">
              Receive payment for goods and services without hassle
              </p>
            </div>

            <div className="flex items-center">
              <BsCheckCircleFill className="text-3xl text-blue-700" />
              <p className="px-3 max-w-xs  text-textColor">
              Build your business reputation receiving payment with Pavypay
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className=" md:w-1/2 flex md:justify-center pb-5 md:pt-20">
        <img src={eliminate} alt="" />
      </div>
    </div>
  </section>
);

export default Services;
