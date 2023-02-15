import React from "react";
import Payment from "../images/payment-solution_olhpav.avif";
const Payments = () => {
  return (
    <section>
      <div className="container mt-10 md:p-10 px-5 flex md:flex-row flex-col  mx-auto">
        {/* Image */}

        <div className="md:w-1/2">
          <img src={Payment} alt="" />
        </div>

        <div className="flex-col space-y-7 md:mt-28 md:w-1/2">
          <h3 className="text-lg text-blue-700 font-semibold">
            BUSINESSES, MARKETPLACE & EVERYONE
          </h3>

          <h1 className="md:text-5xl text-3xl font-bold">
            Payment solution designed for everyone
          </h1>

          <p className="md:text-xl text-lg max-w-xl text-textColor">
            {" "}
            Irrespective of the nature of your business or services, our product
            provides safe, secure and easy solution for all your online payments
          </p>

          <div className="flex flex-col  space-y-4">
            <div className="flex flex-col space-y-3 md:flex-row items-center">
              <div className="flex flex-col space-y-2">
                <div className="flex flex-row items-center">
                  <div className="w-[2px] h-4 bg-blue-700"></div>
                  <h3 className="text-lg px-3 font-semibold">Security</h3>
                </div>
                <p className="text-lg  text-textColor">
                  Your funds are well secured with our regulated financial
                  partners
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex  md:flex-row items-center">
                  <div className="w-[2px] h-4 bg-blue-700"></div>
                  <h3 className="text-lg px-3 font-semibold">Low Cost</h3>
                </div>
                <p className="text-lg text-textColor">
                  Secure your payments with the bearest minimum fees
                </p>
              </div>
            </div>

            {/* Row 2 */}

            <div className="flex flex-col space-y-3 md:flex-row items-center">
              <div className="flex flex-col space-y-2">
                <div className="flex flex-row items-center">
                  <div className="w-[2px] h-4 bg-blue-700"></div>
                  <h3 className="text-lg px-3 font-semibold">Fast and Convenient</h3>
                </div>
                <p className="text-lg md:text-left  text-textColor">
                Easy to use, pay for anything safely from anywhere and anytime
                </p>
              </div>

              <div className="flex md:px-10 flex-col space-y-2 ">
                <div className="flex flex-row items-center">
                  <div className="w-[2px] h-4 bg-blue-700"></div>
                  <h3 className="text-lg px-3 font-semibold">Transparency</h3>
                </div>
                <p className="text-lg text-textColor">
                Full visibility of funds, you know where your money is at all times
                </p>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payments;
