import React from "react";
import HeroSection from "../components/HeroSection";
import WelcomeOur from "../components/WelcomeOur";
import ShoppingStore from "../components/ShoppingStore";
import OurProduct from "../components/OurProduct";
import WoodenSofa from "../components/WoodenSofa";
import LatestDeal from "../components/LatestDeal";
import FestivalSection from "../components/FestivalSection";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WelcomeOur />
      <ShoppingStore />
      <OurProduct />
      <WoodenSofa />
      <LatestDeal />
      <FestivalSection />
      <Testimonial />
      <Footer />
      <BackToTop />
    </>
  );
};

export default HomePage;
