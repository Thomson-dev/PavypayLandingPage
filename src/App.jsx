import React from "react";
import About from "./Components/About";

import Hero from "./Components/Hero";
import Logo from "./Components/Logo";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";

const App = () => {
  return (
    <>
      <div className="bg-LightBlue ">
        <Navbar />
        <Hero />
      </div>
      <Logo />
      <About />
      <Services/>
    </>
  );
};

export default App;
