import React from "react";
import HeroSection from "../components/HeroSection";
import WelcomeOur from "../components/WelcomeOur";
import ShoppingStore from "../components/ShoppingStore";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const ShopPage = () => {
  return (
    <>
      <HeroSection />
      <WelcomeOur />
      <ShoppingStore />
      <Testimonial />
      <Footer />
    </>
  );
};

export default ShopPage;
