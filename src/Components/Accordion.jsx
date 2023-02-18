/** @format */

import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      setOpen(null);
    }
    setOpen(index);
  };
  const data = [
    {
      title: "How secured is my money?",
      desc: "All funds are 100% secured in-line with standard financial security protocol.",
    },
    {
      title: "Who can Signup on Pavypay?",
      desc: "Pavypay is made for everyone - businesses, sole trader, individual and others.",
    },
    {
      title: "Who pays the Escrow Fees?",
      desc: "This is a mutual agreement between the buyer and seller, either of them can decide who pays the transaction charges.",
    },
    {
      title: " Do I get my money back if the seller refuse to deliver?",
      desc: "YES! your money will be credited back to your wallet if the seller did not fulfill delivery within the escrow duration.",
    },
  ];

  return (
    <section className="bg-Darkbg">
      <div className=" pt-[10rem] px-5 pb-7 flex flex-col md:flex-row container md:mx-7">
        <div className=" md:w-1/2 flex flex-col  space-y-7">
          <h1 className="text-white font-bold max-w-lg text-4xl">
            Some of the things you may want to know
          </h1>

          <h3 className="text-white text-2xl ">
            Here are some frequently asked questions
          </h3>

          <div className="py-3">
            <a
              href=""
              className="text-white text-lg font-bold p-3 py-3 border border-white px-14 rounded-full"
            >
              View All
            </a>
          </div>
        </div>

        <div className="md:w-1/2  mt-10">
          {data.map((item, index) => {
            return (
              <AccordionItem
                key={index}
                open={index === open}
                title={item.title}
                desc={item.desc}
                toggle={() => toggle(index)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
