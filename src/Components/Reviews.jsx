/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";

import img2 from "../images/payment_submission_gifk69.avif";
import img4 from "../images/CONFIRM_DELIVERY_wvnzjg.avif";

import img5 from "../images/PAYMENT_RELEASE_zczwmg.avif";
import img3 from "../images/PROFF_OF_DELIVERY_i8bogy.avif";
const Reviews = () => {
  return (
    <section className="bg-LightGray">
      <div className="container  mx-auto py-20 border border-red-400">
        <div  className="flex justify-center flex-col  items-center">
          <h1 className="text-5xl  max-w-sm font-bold">Made for today’s smart businesses</h1>
          <p className="text-xl text-center text-textColor pt-5 max-w-lg">
            Let's see what a few of our users are already saying about our
            payment solution.
          </p>


          {/* Left */}
              <div className="">
              
              </div>

              {/* Slider */}

              <div className="">
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
                  <img src={img4} alt="" className="w-50" />
                 
                </div>
              </SwiperSlide>
          
            
            </Swiper>
              </div>

        </div>
      </div>
    </section>
  );
};

export default Reviews;
