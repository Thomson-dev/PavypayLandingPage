/** @format */

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-LightGray mt-24">
      <div className=" container px-4 grid gap-x-20  grid-cols-2 gap-y-8 md:mx-auto pt-24 pb-20 text-gray-500 md:flex md:flex-row md:justify-between">

        
        <ul className="text-lg  max-w-1/2 md:max-w-full flex flex-col  space-y-5">
          <h5 className="font-semibold text-black text-xl">Quick Link</h5>
          <li className="hover:text-slate-900">
            <a href="">About us</a>
          </li>
          <li className="hover:text-slate-900">
            <a href="">Developer</a>
          </li>

          <li className="hover:text-slate-900">
            <a href="">Pricing</a>
          </li>
        </ul>

        <ul className="text-lg max-w-1/2 md:max-w-full flex  flex-col space-y-5">
          <h5 className="font-semibold text-black text-xl">Others</h5>
          <li className="hover:text-slate-900">
            <a href="">Blog</a>
          </li>
          <li className="hover:text-slate-900">
            <a href="">What is Escrow</a>
          </li>
          <li className="hover:text-slate-900">
            <a href="">FAQ'S</a>
          </li>
        </ul>

        <ul className="text-lg flex flex-col space-y-5">
          <h5 className="font-semibold text-black text-xl">Legal</h5>
          <li className="hover:text-slate-900">
            <a href="">Terms of services</a>
          </li>
          <li className="hover:text-slate-900">
            <a href="">Private Policy</a>
          </li>
          <li className="hover:text-slate-900">
            <a href="">Return Policy</a>
          </li>
        </ul>

        <ul className="text-lg flex flex-col space-y-5">
          <h5 className="font-semibold text-black text-xl">Follow</h5>
          <li className="hover:text-slate-900">
            <a href="">Twitter</a>
          </li>
          <li className="hover:text-slate-900">
            <a href="">Linkedin</a>
          </li>
          <li className="hover:text-slate-900">
            <a href="">Instagram</a>
          </li>
          <li className="hover:text-slate-900">
            <a href="">Facebook</a>
          </li>
        </ul>

        <ul className="text-lg flex flex-col space-y-5">
          <h5 className="font-semibold text-black text-xl">Contacts</h5>
          <li className="hover:text-slate-600">
            <a href="">+234 702 334 1122</a>
          </li>
          <li className="hover:text-slate-600">
            <a href="">info@pavypay.com</a>
          </li>
          <li className="hover:text-slate-600">
            <a href="">support@pavypay.com</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
