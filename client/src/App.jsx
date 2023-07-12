import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurPrices from "./components/OurPrices";
import TopSeller from "./components/TopSeller";

const App = () => {
  return (
    <div className="bg-[#F3EDE1] w-full">
      <Navbar />
      <Hero />
      {/* <OurPrices /> */}
      <TopSeller />
    </div>
  );
};

export default App;
