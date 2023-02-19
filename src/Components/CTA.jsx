/** @format */

import React from "react";

const CTA = () => {
  return (
    <section>
      <div className="container  md:mx-auto pt-24 pb-10 space-y-12 flex flex-col justify-center items-center">
        <h3 className="text-xl font-semibold text-blue-800">TRY PAVYPAY NOW</h3>
        <h1 className="md:text-4xl text-3xl font-bold max-w-xl text-slate-900 text-center">
          Join thousands of users making secured payment online
        </h1>
        <a href="/" className="text-white text-xl font-semibold bg-blue-600  md:py-3 py-2 px-5 md:px-8 rounded-full">Get Started Now </a>
      </div>
    </section>
  );
};

export default CTA;
