import React from "react";
import Button from "./common/Button";
import WoodenSofaImg from "../assets/image/WoodenSofaImg.webp";

const WoodenSofa = () => {
  return (
    <>
      <div className="bg-[#2D39490A] relative z-20 ">
        <div className="container max-w-[1320px] px-3 mx-auto pt-6 pb-7 sm:pt-[40px] md:pt-[64px]">
          <div className="flex flex-row flex-wrap -mx-3">
            <div className="w-full md:w-4/12 px-3">
              <p className=" font-Poppins font-normal text-[#BD7D41] text-[18px] lg:text-[20px] leading-normal relative ps-[100px] lg:ps-[130px] ">
                Shopping Store
                <span className=" before:h-[1px] before:bg-[#000] before:w-[75px] md:before:w-[95px] before:left-[1%] before:top-[15px] before:absolute"></span>
              </p>
              <h2 className=" font-Poppins font-bold text-[#243040] text-[30px] lg:text-[32px] xl:text-[35px] leading-normal  lg:max-w-[436px] pt-[24px] pb-[27px] sm:pb-[40px] lg:pb-[53px]">
                Wooden Sofa Starts From{" "}
                <span className="text-[31px] lg:text-[33.053px]">
                  ₹ 1200.00
                </span>
              </h2>
              <Button
                className=" font-semibold py-2 sm:py-3 md:py-[19px] px-[28px] sm:px-[36px] md:px-[48px] "
                btn="SHOP NOW"
              />
            </div>
            <div className="w-full md:w-8/12 px-3  pt-6 md:pt-0">
              <div className="  ">
                <img className="w-full" src={WoodenSofaImg} alt="sofa" />
              </div>
              <div className="bg-[#243040] w-[450px] lg:w-[600px] xl:w-[741px] h-[220px] lg:h-[270px]  max-[741px] -z-10 absolute right-0 bottom-[-5%] lg:bottom-[-10%]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WoodenSofa;
