import React from "react";
import FestivalOne from "../assets/image/FestivalOfferOne.webp";
import FestivalTwo from "../assets/image/FestivalOfferTwo.webp";
import Button from "./common/Button";
const FestivalSection = () => {
  const ArrayImg = [
    { src: FestivalOne, aos: "fade-up" },
    { src: FestivalTwo, aos: "fade-down" },
  ];
  return (
    <div>
      <div className="max-w-[1320px] container mx-auto px-3 py-[35px] sm:py-[50px] md:py-[70px]">
        <div className="flex flex-row flex-wrap -mx-3">
          {ArrayImg.map((props, index) => (
            <div
              data-aos={props.aos}
              className="w-full lg:w-6/12 px-[18px] pt-7 group   "
              key={index}
            >
              <div className="overflow-hidden">
                <div
                  style={{
                    backgroundImage: `url(${props.src})`,
                  }}
                  className="h-full size bg-no-repeat group-hover:scale-[104%] transition-all ease-linear duration-300 "
                >
                  <div className="ps-[24px] sm:ps-[105px]   pt-3 sm:pt-[32px] pb-[81px]">
                    <p className=" font-Poppins font-normal text-[#000] text-[16px] sm:text-[18px] md:text-[20px] leading-normal relative  ">
                      Festival Offer
                      <span className=" before:h-[1px] before:bg-[#000] before:w-[70px] sm:before-w-[75px] xl:before:w-[90px] hidden sm:block sm:before:left-[-17%] md:before:left-[-14%] lg:before:left-[-20%] before:top-[15px] before:absolute"></span>
                    </p>
                    <h2 className=" font-Poppins font-bold text-[#BD7D41] text-[24px] sm:text-[30px] lg:text-[32px] xl:text-[35px] leading-normal pt-3 sm:pt-5 ">
                      Upto 40% Off
                    </h2>
                    <p className=" font-Poppins font-normal text-[#000000B2] text-[16px] sm:text-[18px] leading-normal max-w-[262px] pt-[15px] pb-[24px] sm:pb-[30px] md:pb-[48px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                    <Button
                      className=" py-[10px] ps-[12px] pe-[13px] font-medium"
                      btn="ADD TO CART"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FestivalSection;
