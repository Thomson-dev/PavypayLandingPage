import React from "react";
import About from "./Components/About";

import Hero from "./Components/Hero";
import Logo from "./Components/Logo";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <div className="bg-LightBlue ">
        <Navbar />
        <Hero />
      </div>
      <Logo />
      <About />
    </>
  );
};

export default App;
