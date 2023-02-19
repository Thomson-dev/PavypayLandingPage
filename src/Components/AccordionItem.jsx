/** @format */

import React from "react";
import { Collapse } from "react-collapse";
import { HiChevronDown } from "react-icons/hi";

import { HiChevronUp } from "react-icons/hi";

const AccordionItem = ({ open, toggle, title, desc }) => {
  return (
    <div className="flex flex-col space-y-11">
      <div
        className="flex flex-row justify-between  items-center text-white "
        onClick={toggle}
      >
        <h1 className="md:text-2xl text-xl font-semibold">{title}</h1>

        <div className="md:text-xl text-lg  ">
          {open ? <HiChevronDown /> : <HiChevronUp />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <p className="text-xl  text-textColor pb-5">{desc}</p>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
