import React, { useState } from "react";
import Logo from "../assets/image/logo.webp";
import { Link, useLocation } from "react-router-dom";
const FurnitureNav = () => {
  const location = useLocation();

  const [first, setfirst] = useState(false);
  function setopen() {
    setfirst(!first);
    if (first === false) {
      document.body.classList.add("overflow");
    } else {
      document.body.classList.remove("overflow");
    }
  }

  const [data, setdata] = useState(true);
  function InputImg() {
    const newColor = data === "xyz" ? "otherColor" : "xyz";
    setdata(newColor);
  }
  return (
    <>
      <div className="max-w-[1320px] px-3 mx-auto h-[77px]">
        <nav className="flex justify-between items-center pt-[15px]">
          <Link to="/" className="flex items-center gap-[7px] cursor-pointer">
            <img className="w-[61px] h-[61px]" src={Logo} alt="icon" />
            <p className=" font-Roboto font-bold text-[#fff] text-[24px] sm:text-[28px] md:text-[33.023px] leading-normal ">
              FURNITURE
            </p>
          </Link>
          <div className="flex items-center max-[375px]:gap-[10px] gap-[25px]">
            <div
              className={`${
                first ? "right-0" : "right-100"
              } flex  gap-[40px]  w-full h-full fixed bg-slate-500 right-[-100%] bg-[#0000] top-0 items-center justify-center sm:w-unset lg:h-unset lg:static lg:right-0 lg:bg-transparent lg:justify-end flex-col lg:flex-row z-40 transition-all ease-linear duration-300 `}
            >
              <div className="flex items-center gap-[30px] sm:gap-[40px] md:gap-[55px] flex-col lg:flex-row">
                <Link
                  to={"/"}
                  onClick={setopen}
                  className={`${
                    location.pathname === "/"
                      ? " font-bold webKit  relative before:absolute before:bg-[#BD7D41] before:w-full before:h-[3px] before:bottom-[-10px] before:left-0  before:transition-all duration-300"
                      : ""
                  }font-Roboto font-normal text-[#fff] text-[18px] leading-normal   `}
                >
                  HOME
                </Link>
                <Link
                  to="/About"
                  onClick={setopen}
                  className={`${
                    location.pathname === "/About"
                      ? " font-bold webKit relative before:absolute before:bg-[#BD7D41] before:w-full before:h-[3px] before:bottom-[-10px] before:left-0  before:transition-all duration-300"
                      : ""
                  }font-Roboto font-normal text-[#fff] text-[18px] leading-normal   `}
                >
                  ABOUT US
                </Link>
                <Link
                  to="/Shop"
                  onClick={setopen}
                  className={`${
                    location.pathname === "/Shop"
                      ? " font-bold webKit relative before:absolute before:bg-[#BD7D41] before:w-full before:h-[3px] before:bottom-[-10px] before:left-0  before:transition-all duration-300"
                      : ""
                  }font-Roboto font-normal text-[#fff] text-[18px] leading-normal   `}
                >
                  SHOP
                </Link>
                <Link
                  to="/Contact"
                  onClick={setopen}
                  className={`${
                    location.pathname === "/Contact"
                      ? " font-bold  webKit relative before:absolute before:bg-[#BD7D41] before:w-full before:h-[3px] before:bottom-[-10px] before:left-0  before:transition-all duration-300"
                      : ""
                  }font-Roboto font-normal text-[#fff] text-[18px] leading-normal   `}
                >
                  CONTACT US
                </Link>
              </div>
            </div>
            <div className="flex items-center max-[375px]:gap-2 gap-[28.29px]">
              <div
                className={`${
                  data === "xyz"
                    ? " right-100 px-3 border border-gray-300  bg-slate-500  "
                    : "px-1 right-0  "
                }  rounded-[10px] max-[640px]:max-w-[350px]  py-1 flex items-center max-[380px]:max-w-[280px] left-7 justify-between absolute  w-full md:right-[-100%] sm:static top-[8%] md:top-0 lg:h-unset lg:static lg:right-0 lg:bg-transparent z-10 transition-all ease-linear duration-300`}
              >
                <input
                  type="search"
                  placeholder="Search Bar"
                  id="hi"
                  className={`${
                    data === "xyz"
                      ? "px-2 w-full duration-600"
                      : "w-0  duration-600 absolute"
                  } outline-none text-white font-medium  transition-all duration-600 bg-transparent`}
                />
              </div>
              <span
                onClick={InputImg}
                className="
                  
                   group cursor-pointer "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <path
                    className="group-hover:fill-[#BD7D41] duration-300 transition-all ease-linear"
                    d="M8 16C9.77498 15.9996 11.4988 15.4054 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.405 11.4997 15.9996 9.77544 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z"
                    fill="white"
                  />
                </svg>
              </span>

              <span className="group cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="23"
                  viewBox="0 0 26 23"
                  fill="none"
                >
                  <path
                    className="group-hover:fill-[#BD7D41] duration-300 transition-all ease-linear"
                    d="M24.974 16.3056H7.71508L8.58165 14.5692L22.98 14.5436C23.4669 14.5436 23.8843 14.2014 23.9712 13.7282L25.9652 2.74848C26.0174 2.46052 25.9391 2.164 25.7479 1.93876C25.6533 1.82791 25.5354 1.73862 25.4023 1.67708C25.2691 1.61554 25.124 1.58322 24.9769 1.58237L6.66013 1.5225L6.50362 0.798314C6.40508 0.336432 5.98194 0 5.50084 0H1.02307C0.751738 0 0.491515 0.106036 0.299652 0.294781C0.107788 0.483526 0 0.73952 0 1.00645C0 1.27337 0.107788 1.52937 0.299652 1.71811C0.491515 1.90686 0.751738 2.01289 1.02307 2.01289H4.67194L5.35592 5.21185L7.03979 13.2321L4.87192 16.7133C4.75934 16.8628 4.69153 17.0402 4.67616 17.2257C4.6608 17.4111 4.69849 17.597 4.78497 17.7625C4.95887 18.1018 5.30955 18.3156 5.69792 18.3156H7.518C7.12998 18.8226 6.9204 19.4401 6.92097 20.0747C6.92097 21.6885 8.25415 23 9.89455 23C11.5349 23 12.8681 21.6885 12.8681 20.0747C12.8681 19.4389 12.6537 18.8203 12.2711 18.3156H16.9401C16.5521 18.8226 16.3425 19.4401 16.3431 20.0747C16.3431 21.6885 17.6763 23 19.3167 23C20.9571 23 22.2903 21.6885 22.2903 20.0747C22.2903 19.4389 22.0758 18.8203 21.6932 18.3156H24.9769C25.5392 18.3156 26 17.8651 26 17.3092C25.9983 17.0425 25.8895 16.7873 25.6973 16.5993C25.5051 16.4113 25.2451 16.3057 24.974 16.3056ZM7.08617 3.50688L23.7742 3.56105L22.1396 12.5649L9.03088 12.5877L7.08617 3.50688ZM9.89455 20.9757C9.39026 20.9757 8.97871 20.5708 8.97871 20.0747C8.97871 19.5787 9.39026 19.1738 9.89455 19.1738C10.3988 19.1738 10.8104 19.5787 10.8104 20.0747C10.8104 20.3137 10.7139 20.5429 10.5421 20.7118C10.3704 20.8808 10.1374 20.9757 9.89455 20.9757ZM19.3167 20.9757C18.8124 20.9757 18.4008 20.5708 18.4008 20.0747C18.4008 19.5787 18.8124 19.1738 19.3167 19.1738C19.821 19.1738 20.2325 19.5787 20.2325 20.0747C20.2325 20.3137 20.136 20.5429 19.9643 20.7118C19.7925 20.8808 19.5596 20.9757 19.3167 20.9757Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <input type="checkbox" id="mobileview" hidden />
            <div onClick={setopen}>
              {first ? (
                <div className="flex lg:hidden flex-col relative z-50 justify-between w-[24px] h-[24px] cursor-pointer  ">
                  {" "}
                  <span className="bg-[#fff] w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300 rotate-[53deg] -bottom-[11px]"></span>
                  <span className="bg-[#fff] w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300 -rotate-45 bottom-2"></span>
                </div>
              ) : (
                <div className=" flex lg:hidden flex-col relative z-50 justify-between w-[24px] h-[24px] cursor-pointer ">
                  {" "}
                  <span className="bg-[#fff] w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                  <span className="bg-[#fff]  w-2/3 h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                  <span className="bg-[#fff] w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default FurnitureNav;
