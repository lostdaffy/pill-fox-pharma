import React from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import ManufacturingPower from "../components/home/ManufacturingPower";
import OurProducts from "../components/home/OurProducts";
import Vision from "../components/home/Vision";
import GetInTouch from "../components/common/GetInTouch";
import ProductSlider from "../components/home/ProductSlider";

const Home = () => {
  return (
    <>
      <Hero />
      <Vision />
      <About />
      <ManufacturingPower />
      <ProductSlider/>
      <OurProducts />
      <GetInTouch />
    </>
  );
};

export default Home;
