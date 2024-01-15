import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LatestDealaray } from "../components/common/LatestDealArray";
import Button from "./common/Button";

const LatestDeal = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
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
    <div className="bg-[#fff] relative">
      <div className="max-w-[1320px] mx-auto px-3  container relative  pt-[90px] lg:pt-[110px]">
        <p className=" font-Poppins font-normal text-[#BD7D41] text-[18px] sm:text-[20px] leading-normal relative ps-[100px] sm:ps-[130px] ">
          Shopping Store
          <span className=" before:h-[1px] before:bg-[#000] before:w-[70px] sm:before:w-[95px] before:left-[1%] before:top-[15px] before:absolute"></span>
        </p>
        <div className="flex items-center justify-between pt-4 lg:pt-0">
          <h2 className=" font-Poppins font-bold text-[#243040] text-[30px] lg:text-[32px] xl:text-[35px] leading-normal   lg:pt-[19px] ">
            Latest Deal
          </h2>{" "}
          <div className="flex items-center gap-4 2xl:hidden">
            <button
              onClick={goToPrev}
              className="bg-[#fff] rounded-[100px] w-[45px] sm:w-[70px] 2xl:w-[99px] h-[45px] sm:h-[70px] 2xl:h-[99px] group shadow-[2px_7px_16px_#ecebeb] 2xl:hidden flex justify-center items-center py-[17px] px-[10px] hover:bg-[#BD7D41] transition-all duration-300 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="16"
                viewBox="0 0 42 16"
                fill="none"
              >
                <path
                  className="group-hover:fill-white transition-all duration-300"
                  d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM42 9H1V7H42V9Z"
                  fill="black"
                />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="bg-[#fff] rounded-[100px] 2xl:hidden group shadow-[2px_7px_16px_#ecebeb] w-[45px] sm:w-[70px] 2xl:w-[99px] h-[45px] sm:h-[70px] 2xl:h-[99px] flex justify-center items-center py-[17px] px-[10px] hover:bg-[#BD7D41] transition-all duration-300 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="16"
                viewBox="0 0 42 16"
                fill="none"
              >
                <path
                  className="group-hover:fill-white transition-all duration-300"
                  d="M41.7071 8.70711C42.0976 8.31658 42.0976 7.68342 41.7071 7.29289L35.3431 0.928932C34.9526 0.538408 34.3195 0.538408 33.9289 0.928932C33.5384 1.31946 33.5384 1.95262 33.9289 2.34315L39.5858 8L33.9289 13.6569C33.5384 14.0474 33.5384 14.6805 33.9289 15.0711C34.3195 15.4616 34.9526 15.4616 35.3431 15.0711L41.7071 8.70711ZM0 9H41V7H0V9Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className=" pt-[33px] sm:pt-[45px] md:pt-[66px]  ">
          <Slider ref={sliderRef} {...settings}>
            {LatestDealaray.map((props, index) => (
              <div
                key={index}
                className="pt-[18px] pb-[26px] sm:pb-[53px] mb-4 px-4 sm:px-[23px] lg:px-[15px] xl:px-[23px] bg-[#fff]  hover:shadow-[6px_13px_38px_0px_#C4C4C4] transition-all duration-300 group"
              >
                <div className="overflow-hidden">
                  <img
                    className=" w-full shadow-[0px_4px_4px_0px_#C4C4C4] group-hover:scale-[104%] transition-all duration-300 ease-linear"
                    src={props.LatestDealImgTwo}
                    alt="imgOne"
                  />
                </div>
                <div className="flex items-center justify-between pt-[13px]">
                  <p className=" font-Poppins font-medium text-[#000] text-[20px] leading-normal ">
                    Single Sofa
                  </p>
                  <img className="w-1/4" src={props.stargroupTwo} alt="group" />
                </div>
                <p className=" font-Poppins font-normal text-[#4D4D4D] text-base sm:text-[18px] leading-normal pt-3 sm:pt-4 ">
                  Lorem ipsum dolor
                </p>
                <div className="flex items-center justify-between gap-2 pt-3 sm:pt-4">
                  <p className="flex items-center gap-[3px] font-Poppins font-semibold text-[#000] text-[24px]  md:text-[28.667px] leading-normal  ">
                    ₹ <span>1200.00</span>
                  </p>
                  <Button
                    className=" py-[10px] ps-2 sm:ps-[12px] pe-2 sm:pe-[13px] font-medium"
                    btn="ADD TO CART"
                  />
                </div>
              </div>
            ))}
          </Slider>

          <button
            onClick={goToPrev}
            className="bg-[#fff] rounded-[100px] w-[70px] 2xl:w-[99px] h-[70px] 2xl:h-[99px] group shadow-[2px_7px_16px_#ecebeb] absolute top-[10%] 2xl:top-[60%] left-[-3%] 2xl:left-[-6%] hidden 2xl:flex justify-center items-center py-[17px] px-[10px] hover:bg-[#BD7D41] transition-all duration-300 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="16"
              viewBox="0 0 42 16"
              fill="none"
            >
              <path
                className="group-hover:fill-white transition-all duration-300"
                d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM42 9H1V7H42V9Z"
                fill="black"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="bg-[#fff] rounded-[100px] absolute  top-[10%] 2xl:top-[60%] right-[-3%] 2xl:right-[-6%] group shadow-[2px_7px_16px_#ecebeb] w-[70px] 2xl:w-[99px] h-[70px] 2xl:h-[99px]  hidden 2xl:flex justify-center items-center py-[17px] px-[10px] hover:bg-[#BD7D41] transition-all duration-300 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="16"
              viewBox="0 0 42 16"
              fill="none"
            >
              <path
                className="group-hover:fill-white transition-all duration-300"
                d="M41.7071 8.70711C42.0976 8.31658 42.0976 7.68342 41.7071 7.29289L35.3431 0.928932C34.9526 0.538408 34.3195 0.538408 33.9289 0.928932C33.5384 1.31946 33.5384 1.95262 33.9289 2.34315L39.5858 8L33.9289 13.6569C33.5384 14.0474 33.5384 14.6805 33.9289 15.0711C34.3195 15.4616 34.9526 15.4616 35.3431 15.0711L41.7071 8.70711ZM0 9H41V7H0V9Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestDeal;
