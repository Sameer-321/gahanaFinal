import React from "react";

import Navbar from "./components/Navbar";
import SliderHeroImage from "./components/SliderHeroImage";
import Hero from "./components/Hero";
import OurPrices from "./components/OurPrices";
import TopSeller from "./components/TopSeller";
import BestProducts from "./components/BestProducts";
import ShopByCategory from "./components/ShopByCategory";

import Footer from "./components/Footer";
import HeroHeader from "./components/HeroHeader";
import Example from "./components/Example";

const App = () => {
  return (
    <div className=" bg-[#F3EDE1] w-[full] ">
      <Navbar />
      {/* <SliderHeroImage /> */}
      {/* <Hero /> */}
      <HeroHeader />
      {/* /asdff */}
      <div className="px-9">
        <OurPrices />
        <TopSeller />
        <BestProducts />
        <ShopByCategory />

        <Footer />
      </div>
      {/* <Example /> */}
    </div>
  );
};

export default App;
