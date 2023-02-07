import React from "react";
import jiji from "../images/jiji_d7skir.avif";
import flutter from "../images/flutterwave_dlqdvv.avif";
import konga from "../images/konga_uvnuy8.avif";
import jumia from "../images/jumia_tmtvcv.avif";
import zenith from "../images/zenith-bank_dsh2qz.avif";

const Logo = () => {
  return (
    <section className="container mx-auto mt-2 flex items-center  md:space-x-40 flex-col my-1 md:flex-row">
      <div>
        <div>
          <h5 className="trusted max-w-sm">Trusted by over 100 business</h5>
        </div>
      </div>

      <div className="flex items-center flex-wrap  space-y-0 space-x-10 md:space-x-7 ">
        <img src={jiji} alt="" className=" p-5   grayscale hover:grayscale-0" />
        <img
          src={flutter}
          alt=""
          className="py-5 grayscale hover:grayscale-0"
        />
        <img src={jumia} alt="" className=" py-5 grayscale hover:grayscale-0" />
        <img src={konga} alt="" className="py-5 grayscale hover:grayscale-0" />
        <img src={zenith} alt="" className="py-5 grayscale hover:grayscale-0" />
      </div>
    </section>
  );
};

export default Logo;
