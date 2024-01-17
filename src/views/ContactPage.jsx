import React from "react";
import HeroSection from "../components/HeroSection";
import WelcomeOur from "../components/WelcomeOur";
import ShoppingStore from "../components/ShoppingStore";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const ContactPage = () => {
  return (
    <>
      <HeroSection />
      <WelcomeOur />
      <ShoppingStore />
      <Footer /> <BackToTop />
    </>
  );
};

export default ContactPage;
