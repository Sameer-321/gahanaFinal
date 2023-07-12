import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurPrices from "./components/OurPrices";

const App = () => {
  return (
    <div className="bg-[#F3EDE1]">
      <Navbar />
      <Hero />
      <OurPrices />

      <div className="h-[100vh]" />
    </div>
  );
};

export default App;
