import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurPrices from "./components/OurPrices";
import TopSeller from "./components/TopSeller";
import BestProducts from "./components/BestProducts";
import ShopByCategory from "./components/ShopByCategory";
import ImageSlider from "./components/ImageSlider";

const App = () => {
  return (
    <div className=" bg-[#F3EDE1] w-[full] ">
      <Navbar />
      <Hero />
      <div className="px-9">
        <OurPrices />
        <TopSeller />
        <BestProducts />
        <ShopByCategory />
        <ImageSlider />
        
      </div>
    </div>
  );
};

export default App;
