import React, { useState } from "react";
import WelcomeOurStory from "../assets/image/WelcomeOurStory.webp";
import Button from "./common/Button";

const WelcomeOur = () => {
  const [modal, setmodal] = useState(false);
  function Mymodal() {
    setmodal(!modal);
  }

  return (
    <>
      <div>
        {" "}
        <div
          className={` ${
            modal ? "block" : "hidden"
          } w-full h-full fixed bg-[#000000a3]  z-40 `}
        ></div>
        <div className="flex justify-center">
          <div
            className={` ${
              modal ? "top-0 m-10" : "top-[-100%] m-0"
            } fixed top-0 w-full sm:w-[600px]  h-[500px] rounded-[20px] duration-300 bg-gray-200 z-[60] px-3 mx-auto flex-col flex justify-center items-center`}
          >
            <iframe
              className=" w-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/gffSYMAAXJ4?si=Gc68D7nSzDwOihvh"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <button
              onClick={Mymodal}
              className="text-base text-white hover:text-[#000] font-AzoSans font-normal duration-300 mt-5 hover:bg-white bg-[#000] border border-black px-3 py-2  rounded-[8px] "
            >
              Back
            </button>
          </div>
        </div>
        <div className="max-w-[1320px] mx-auto px-3 pt-[40px] sm:pt-[70px] pb-[40px] md:pb-[70px] lg:pb-[260px]">
          <div className="flex flex-row flex-wrap justify-center -mx-3">
            <div
              data-aos="fade-up"
              className="md:w-5/12 w-full px-3  max-[400px]:h-[390px] max-[500px]:h-[500px] h-[598px] md:h-full  relative "
            >
              <div className="bg-layerStaite max-w-[416px] h-[300px]  md:h-[336px]  ">
                <div className="shadow-[3px_8px_26px_0px_#C4C4C4] absolute top-[10%] xl:top-[15%] left-[12%]">
                  <img
                    className=" w-full max-w-[456px] h-full"
                    src={WelcomeOurStory}
                    alt="WelcomeOurStroy"
                  />
                  <div className=" absolute bottom-0 right-0 bg-[#fff] px-[9px] sm:px-[15px] pt-[16px] pb-[17px] flex items-center">
                    <p className=" font-Poppins font-normal text-[#000] text-[14px] leading-normal pe-3 ">
                      Explore Video
                    </p>
                    <div className=" w-[50px] sm:w-[66px]  h-[1px] bg-[#000] mb-1 "></div>
                    <div
                      onClick={Mymodal}
                      className="bg-[#BD7D41] w-[30px] sm:w-[45px] h-[30px] sm:h-[45px] rounded-[45px] flex justify-center items-center  ms-[7px] cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                      >
                        <path
                          d="M33 22.5L17.25 31.5933L17.25 13.4067L33 22.5Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="md:w-7/12 w-full px-3 pt-[30px] sm:pt-[40px] xl:pt-[60px] lg:ps-[30px] xl:px-3 "
            >
              <div className="lg:ms-auto lg:max-w-[596px]">
                <p className=" font-Poppins font-normal text-[#BD7D41] text-[18px] sm:text-[20px] leading-normal relative ps-[100px] sm:ps-[130px] ">
                  Welcome Our Story
                  <span className=" before:h-[1px] before:bg-[#000] before:w-[70px] sm:before:w-[95px] before:left-[3%] before:top-[15px] before:absolute"></span>
                </p>
                <h2 className=" font-Poppins font-bold text-[#243040] text-[30px] lg:text-[32px] xl:text-[35px] leading-normal max-w-[436px] pt-[18px] ">
                  We create the product you tell us you wish existed.
                </h2>
                <p className=" font-Poppins font-nromal text-[#4D4D4D] sm:text-[16px] md:text-[18px] leading-normal max-w-[596px]  pt-[19px] pb-[34px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  faucibus, urna at pulvinar porta, augue lorem ullamcorper
                  orci, non rhoncus nisi neque sit amet nibh. Phasellus
                  consectetur semper ante et mattis
                </p>
                <Button
                  className=" font-semibold py-2 sm:py-3 md:py-[19px] px-[28px] sm:px-[36px] md:px-[48px] "
                  btn="READ MORE"
                />
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default WelcomeOur;
