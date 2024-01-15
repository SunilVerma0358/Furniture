import React from "react";
import FurnitureNav from "./FurnitureNav";
import Button from "./common/Button";

const HeroSection = () => {
  return (
    <div className="bg-[url(../src/assets/image/HeroSectionBg.png)] bg-cover bg-center h-[80vh]  md:h-screen flex flex-col ">
      <div>
        <FurnitureNav />
      </div>

      <div className="container  max-w-[1320px] px-3 mx-auto pt-[48px] sm:pt-[60px] md:pt-[90px] lg:pt-[130px]">
        <h1
          data-aos="fade-up"
          className=" font-Poppins font-bold text-[#fff] text-[32px] sm:text-[36px] md:text-[48px] leading-normal max-w-[968px] text-center mx-auto  "
        >
          Awesome Design Best Furniture For Your Interior
        </h1>
        <p
          data-aos="fade-up"
          className="font-Poppins font-normal text-[#fff] text-base sm:text-[18px] md:text-[20px]  leading-normal  text-center pt-2 sm:pt-[15px] pb-[30px] sm:py-[40px] md:pb-[51px] "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus{" "}
        </p>
        <div className="text-center">
          <Button
            className=" font-semibold py-2 sm:py-3 md:py-[19px] px-[28px] sm:px-[36px] md:px-[48px]"
            btn="SHOP NOW"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
