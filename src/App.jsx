
import React from "react";
import About from "./Components/About";
import Accordion from "./Components/Accordion";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";

import Hero from "./Components/Hero";
import Logo from "./Components/Logo";
import Navbar from "./Components/Navbar";
import Payments from "./Components/Payments";
import Reviews from "./Components/Reviews";

import Services from "./Components/Services";
import Steps from "./Components/Steps";


const App = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <Logo />
        <About />
        <Services />
        <Steps />
        <Payments/>
        {/* <Reviews/> */}
        <Accordion/>  
        <CTA/>
        <Footer/>
    
      </div>
    </>
  );
};

export default App;
