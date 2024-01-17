import React from "react";
import HeroSection from "../components/HeroSection";
import WelcomeOur from "../components/WelcomeOur";
import OurProduct from "../components/OurProduct";
import ShoppingStore from "../components/ShoppingStore";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
const AboutPage = () => {
  return (
    <>
      <HeroSection />
      <WelcomeOur />
      <ShoppingStore />
      <OurProduct />
      <Footer /> <BackToTop />
    </>
  );
};

export default AboutPage;
