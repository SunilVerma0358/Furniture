import React from "react";
import logo from "../assets/image/logo.webp";
import twitter from "../assets/iconsSvg/twitter.svg";
import facebook from "../assets/iconsSvg/facebook.svg";
import insta from "../assets/iconsSvg/instagram.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <div className="bg-[#243040]">
      <div className=" max-w-[1320px] px-3 mx-auto container pt-[45px] sm:pt-[60px] md:pt-[87px] pb-[50px] sm:pb-[65px] md:pb-[81px] ">
        <div className="flex flex-row flex-wrap -mx-3">
          <div className="w-full md:w-6/12 lg:w-7/12 px-3 sm:pt-4">
            <div className="flex items-center gap-[7px]">
              <img
                className=" w-[50px] sm:w-[61px] h-[50px] sm:h-[61px]"
                src={logo}
                alt="logo"
              />
              <h3 className=" font-Roboto font-bold text-[#fff] text-[28px] sm:text-[33.023px] leading-normal ">
                FURNITURE
              </h3>
            </div>
            <p className=" font-Roboto font-normal text-[#fff] text-[12px] sm:text-[14px] leading-normal  max-w-[338px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse feugiat nunc in leo vestibulum, at congue erat
              accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
              sapien.
            </p>
            <div className="flex items-center gap-[11.07px] pt-[23px]">
              <Link
                to="https://www.instagram.com/radialcode/?hl=en"
                target="blank"
                className="group  transition-all ease-linear duration-300 border-[0.5px] border-[#fff] rounded-[50%] flex justify-center items-center w-[23px] h-[23px] hover:border-transparent"
              >
                <img
                  className=" group-hover:scale-125 transition-all ease-linear duration-300 w-[12px] h-[12px]"
                  src={insta}
                  alt="insta"
                />
              </Link>
              <Link
                to="https://twitter.com/i/flow/login?redirect_after_login=%2Fradialcode"
                target="blank"
                className=" group transition-all ease-linear duration-300 border-[0.5px] border-[#fff] rounded-[50%] flex justify-center items-center w-[23px] h-[23px] hover:border-transparent"
              >
                {" "}
                <img
                  className=" group-hover:scale-125 transition-all ease-linear duration-300"
                  src={twitter}
                  alt="twitter"
                />
              </Link>
              <Link
                to="https://www.facebook.com/radialcode/"
                target="blank"
                className="group  transition-all ease-linear duration-300 border-[0.5px] border-[#fff] rounded-[50%] flex justify-center items-center w-[23px] h-[23px] hover:border-transparent"
              >
                {" "}
                <img
                  className=" group-hover:scale-125 transition-all ease-linear duration-300"
                  src={facebook}
                  alt="facebook"
                />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-5/12 px-3 pt-8 md:pt-0 ">
            <div className="flex flex-row flex-wrap -mx-3">
              <div className="w-4/12 px-3">
                <p className=" font-Roboto font-medium text-[#fff] text-[12px] sm:text-[14px] leading-normal relative  before:absolute before:-bottom-1 before:left-0 before:bg-[#BD7D41] before:w-full before:max-w-[130px]  before:h-[1px] ">
                  ABOUT STORE
                </p>
                <ul className="pt-4 sm:pt-[19px] ">
                  <li>
                    <Link
                      className="
                      
                       font-Roboto font-normal text-[#fff] text-[12px] sm:text-[14px] leading-normal Footer_webkit"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="pt-[9px] sm:pt-[13px]">
                    <Link className=" font-Roboto font-normal text-[#fff] text-[12px] sm:text-[14px] leading-normal  Footer_webkit">
                      Shop
                    </Link>
                  </li>
                  <li className="pt-[9px] sm:pt-[13px]">
                    <Link className=" font-Roboto font-normal text-[#fff] text-[12px] sm:text-[14px] leading-normal  Footer_webkit">
                      Product
                    </Link>
                  </li>
                  <li className="pt-[9px] sm:pt-[13px]">
                    <Link className=" font-Roboto font-normal text-[#fff] text-[12px] sm:text-[14px] leading-normal  Footer_webkit">
                      Festival Offer
                    </Link>
                  </li>
                  <li className="pt-[9px] sm:pt-[13px]">
                    <Link className=" font-Roboto font-normal text-[#fff] text-[12px] sm:text-[14px] leading-normal Footer_webkit">
                      Log In
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-4/12 px-3">
                <p className=" font-Roboto font-medium text-[#fff] text-[12px] sm:text-[14px] leading-normal relative  before:absolute before:-bottom-1 before:left-0 before:bg-[#BD7D41] before:w-full before:max-w-[130px]  before:h-[1px]  ">
                  BRANDS
                </p>
                <ul className="pt-4 sm:pt-[19px] ">
                  <li>
                    <Link className=" font-Roboto font-normal text-[#fff] text-[12px] sm:text-[14px] leading-normal Footer_webkit ">
                      Album
                    </Link>
                  </li>
                  <li className="pt-[9px] sm:pt-[13px]">
                    <Link className=" font-Roboto font-normal text-[#fff] text-[12px] sm:text-[14px] leading-normal Footer_webkit ">
                      Shop
                    </Link>
                  </li>
                  <li className="pt-[9px] sm:pt-[13px]">
                    <Link className=" font-Roboto font-normal text-[#fff] text-[12px] sm:text-[14px] leading-normal Footer_webkit ">
                      Product
                    </Link>
                  </li>
                  <li className="pt-[9px] sm:pt-[13px]">
                    <Link className=" font-Roboto font-normal text-[#fff] text-[12px] sm:text-[14px] leading-normal  Footer_webkit">
                      Festival Offer
                    </Link>
                  </li>
                  <li className="pt-[9px] sm:pt-[13px]">
                    <Link className=" font-Roboto font-normal text-[#fff] text-[12px] sm:text-[14px] leading-normal Footer_webkit">
                      Log In
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-4/12 px-3">
                <p className=" font-Roboto font-medium text-[#fff] text-[12px] sm:text-[14px] leading-normal relative  before:absolute before:-bottom-1 before:left-0 before:bg-[#BD7D41] before:w-full before:max-w-[130px]  before:h-[1px]  ">
                  CATEGORIES
                </p>
                <ul className="pt-4 sm:pt-[19px] ">
                  <li>
                    <Link className=" font-Roboto font-normal text-[#fff] text-[12px] sm:text-[14px] leading-normal Footer_webkit ">
                      Single
                    </Link>
                  </li>
                  <li className="pt-[9px] sm:pt-[13px]">
                    <Link className=" font-Roboto font-normal text-[#fff] text-[12px] sm:text-[14px] leading-normal  Footer_webkit">
                      Aleeper Sofas
                    </Link>
                  </li>
                  <li className="pt-[9px] sm:pt-[13px]">
                    <Link className=" font-Roboto font-normal text-[#fff] text-[12px] sm:text-[14px] leading-normal Footer_webkit ">
                      Accent Chairs
                    </Link>
                  </li>
                  <li className="pt-[9px] sm:pt-[13px]">
                    <Link className=" font-Roboto font-normal text-[#fff] text-[12px] sm:text-[14px] leading-normal Footer_webkit ">
                      Festival Offer
                    </Link>
                  </li>
                  <li className="pt-[9px] sm:pt-[13px]">
                    <Link className=" font-Roboto font-normal text-[#fff] text-[12px] sm:text-[14px] leading-normal Footer_webkit">
                      Log In
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className=" font-Roboto font-normal text-[#fff] text-[12px] sm:text-[14px] leading-normal text-center  pt-[22px] sm:pt-[29px] pb-[20px] sm:pb-[27px] border-t border-t-[#91979F] ">
        @copyright{year}
      </p>
    </div>
  );
};

export default Footer;
