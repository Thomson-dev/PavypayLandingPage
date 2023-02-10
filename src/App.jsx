import React from "react";
import About from "./Components/About";

import Hero from "./Components/Hero";
import Logo from "./Components/Logo";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";

const App = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <Logo />
      <About />
      <Services/>

      </div>
      
    </>
  );
};

export default App;
