import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ShopStoreMap } from "./common/ShopStoreMap";
const ShoppingStore = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3.4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <>
      <div className="bg-[#F7F7F8] overflow-x-clip relative mt-[30px] shadow-[0px_4px_4px_0px_#C4C4C4] ">
        <div className="bg-Shopping lg:w-[550px] xl:w-[741px] h-[471px] absolute top-[-35%] right-0"></div>
        <div className="flex flex-row flex-wrap lg:justify-end  pt-[40px] pb-[44px] sm:pb-[65px] md:pb-[98px] -mx-3">
          <div
            data-aos="fade-up"
            className=" w-full lg:w-5/12 px-5 lg:px-3 flex  flex-col  lg:justify-end lg:max-w-[500px] "
          >
            <p className=" font-Poppins font-normal text-[#BD7D41] text-[20px] leading-normal relative ps-[130px] ">
              Shopping Store
              <span className=" before:h-[1px] before:bg-[#000] before:w-[95px] before:left-[3%] before:top-[15px] before:absolute"></span>
            </p>
            <h2 className=" font-Poppins font-bold text-[#243040] text-[30px] lg:text-[32px] xl:text-[35px] leading-normal max-w-[436px] pt-[18px] ">
              Buy trending furniture Products.
            </h2>
            <p className=" font-Poppins font-nromal text-[#4D4D4D] sm:text-[16px] md:text-[18px] leading-normal max-w-[422px]  pt-[19px] pb-[34px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              faucibus, urna at pulvinar porta
            </p>
            <div className="flex items-center gap-[14px] ">
              <button
                onClick={goToPrev}
                className="bg-[#fff] rounded-[10px] group flex justify-center items-center py-[17px] px-[10px] hover:bg-[#BD7D41] transition-all duration-300 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="8"
                  viewBox="0 0 21 8"
                  fill="none"
                >
                  <path
                    className="group-hover:fill-white transition-all duration-300"
                    d="M0.646447 4.35355C0.451184 4.15829 0.451184 3.84171 0.646447 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53553 0.464466C4.7308 0.659728 4.7308 0.976311 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646447 4.35355ZM21 4.5H1V3.5H21V4.5Z"
                    fill="black"
                  />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="bg-[#fff] rounded-[10px] group flex justify-center items-center py-[17px] px-[10px] hover:bg-[#BD7D41] transition-all duration-300 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="8"
                  viewBox="0 0 21 8"
                  fill="none"
                >
                  <path
                    className="group-hover:fill-white transition-all duration-300"
                    d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className=" w-full lg:w-7/12 px-3 pt-7 lg:pt-0 ">
            <Slider ref={sliderRef} {...settings}>
              {ShopStoreMap.map((props, index) => (
                <div
                  key={index}
                  className="pt-[15px] ps-[17px] pe-[12px] pb-[27px] max-w-[295px] bg-[#FFF] group transition-all duration-300 hover:shadow-[2px_7px_28px_0px_#2D39490A] "
                >
                  <div className="max-w-[266px] max-h-[202px] overflow-hidden ">
                    {" "}
                    <img
                      className="group-hover:scale-105 transition-all duration-300 ease-linear"
                      src={props.src}
                      alt="img store"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-[13px]">
                    <p className=" font-Poppins font-medium text-[#000] text-[20px] leading-normal ">
                      Single Sofa
                    </p>
                    <img className="w-1/4" src={props.star} alt="group" />
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <p className="flex items-center gap-[3px] font-Poppins font-semibold text-[#000] text-[28.667px] leading-normal  ">
                      ₹ <span>1200.00</span>
                    </p>
                    <p className="flex items-center gap-[3px] font-Poppins font-normal text-[#C4C4C4] text-[11.368px] leading-normal  ">
                      ₹ <span>1200.00</span>
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingStore;
