import React, { useState } from "react";
import img2 from "../images/payment_submission_gifk69.avif";
import img4 from "../images/CONFIRM_DELIVERY_wvnzjg.avif";

import img5 from "../images/PAYMENT_RELEASE_zczwmg.avif";
import img3 from "../images/PROFF_OF_DELIVERY_i8bogy.avif";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import { Bounce, Hinge, Slide } from "react-awesome-reveal";

const Steps = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="bg-Darkbg">
      <div className="container    mx-auto">
        <div className="flex justify-center flex-col space-y-5 items-center">
          <h1 className="text-4xl pt-20 font-bold text-white">How It Works</h1>

          <p className=" text-xl max-w-md text-center text-textColor">
            Simple steps to secure your payments while using our fully automated
            escrow solution.
          </p>
        </div>

        <div className="">
          {/* Left */}
          <div className=" hidden mt-8 md:flex flex-row  ">
            <div className="flex flex-col justify-center p-10 space-y-10  w-1/2 ">
              <button
                className={
                  toggleState === 1
                    ? "text-white outline-none"
                    : "text-slate-500"
                }
                onClick={() => toggleTab(1)}
              >
                <div>
                  <h1 className="text-left text-xl font-bold">
                    Aggrement on Terms
                  </h1>
                  <p className=" pt-3   max-w-lg text-left text-lg font-bold">
                    Buyer and seller discuss and mutually agree on terms of
                    trade.
                  </p>
                </div>
              </button>

              <button
                className={
                  toggleState === 2
                    ? "text-white border border-none outline-none "
                    : "text-slate-500"
                }
                onClick={() => toggleTab(2)}
              >
                <div>
                  <h1 className="text-left text-xl font-bold">
                    Payment Submission
                  </h1>
                  <p className=" pt-3 text-left  max-w-lg text-lg font-bold">
                    Buyer sends agreed amount/payment to Pavypay
                  </p>
                </div>
              </button>

              <button
                className={
                  toggleState === 3
                    ? "text-white text-sm border border-none outline-none"
                    : "text-slate-500"
                }
                onClick={() => toggleTab(3)}
              >
                <div>
                  <h1 className="text-left text-xl font-bold">
                    Goods/Service Delivery
                  </h1>
                  <p className=" pt-3 text-left max-w-lg text-lg font-bold">
                    Seller delivers order and upload proof of delivery upon
                    agreed time frame
                  </p>
                </div>
              </button>

              <button
                className={
                  toggleState === 4
                    ? "text-white  border border-none outline-none"
                    : "text-slate-500"
                }
                onClick={() => toggleTab(4)}
              >
                <div>
                  <h1 className="text-left text-xl font-bold">
                    Delivery Confirmation
                  </h1>
                  <p className=" pt-3 text-left  max-w-md text-lg font-bold">
                    Upon satisfactory confirmation of goods/service delivered,
                    buyer confirms order
                  </p>
                </div>
              </button>

              <button
                className={
                  toggleState === 5
                    ? "text-white border border-none outline-none"
                    : "text-slate-500"
                }
                onClick={() => toggleTab(5)}
              >
                <div>
                  <h1 className="text-left text-xl font-bold">
                    Payment Release
                  </h1>
                  <p className=" pt-3 text-left max-w-md text-lg font-bold">
                    Payment is released to seller upon buyer’s confirmation
                  </p>
                </div>
              </button>
            </div>

            <div className="w-1/2 duration-500  rounded-2xl  rel">
              <img
                src={img3}
                alt=""
                className={toggleState === 1 ? "fix  " : "abs"}
              />

              <img
                src={img2}
                alt=""
                className={toggleState === 2 ? "fix" : "abs"}
              />
              <img
                src={img3}
                alt=""
                className={toggleState === 3 ? "fix " : "abs"}
              />
              <img
                src={img4}
                alt=""
                className={toggleState === 4 ? "fix " : "abs"}
              />
              <img
                src={img5}
                alt=""
                className={toggleState === 5 ? "fix " : "abs"}
              />
            </div>
          </div>

          {/* Mobile */}

          <div className="md:hidden w-full h-full ">
            <Swiper
              className="w-full "
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide className="max-w-[100%]">
                <div className="flex flex-col mx-5 text-white ">
                  <img src={img4} alt="" className="w-full" />
                  <h1 className="text-xl text-center">Aggrement on Terms</h1>
                  <p className=" max-w-sm pt-5 pb-10 mx-auto text-center">
                    Buyer and seller discuss and mutually agree on terms of
                    trade.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="max-w-[100%]">
                <div className="flex flex-col mx-5 text-white ">
                  <img src={img5} alt="" className="w-full" />
                  <h1 className="text-xl text-center">Payment Submission</h1>
                  <p className=" max-w-sm pt-5 pb-10 mx-auto text-center">
                    Buyer and seller discuss and mutually agree on terms of
                    trade.
                  </p>
                </div>

               
              </SwiperSlide>
              <SwiperSlide className="max-w-[100%]">
                <img src={img3} alt="" className="w-full" />
                <div className="flex flex-col mx-5 text-white ">
                  <h1 className="text-xl text-center">
                    Goods/Service Delivery
                  </h1>
                  <p className=" max-w-sm pt-5 pb-10 mx-auto text-center">
                    
                    Seller delivers order and upload proof of delivery upon
                    agreed time frame
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
