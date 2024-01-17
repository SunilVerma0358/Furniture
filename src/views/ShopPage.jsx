import React from "react";
import HeroSection from "../components/HeroSection";
import WelcomeOur from "../components/WelcomeOur";
import ShoppingStore from "../components/ShoppingStore";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
const ShopPage = () => {
  return (
    <>
      <HeroSection />
      <WelcomeOur />
      <ShoppingStore />
      <Testimonial />
      <Footer /> <BackToTop />
    </>
  );
};

export default ShopPage;
