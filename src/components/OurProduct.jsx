import React, { useState } from "react";
import Button from "./common/Button";
import { MapCard } from "../components/common/MapCard";
const OurProduct = () => {
  const [show, setShow] = useState(3);
  function viewShow() {
    if (show === 3) {
      setShow(0);
    } else {
      setShow(3);
    }
  }
  const [data, setdata] = useState(false);
  const [cart, setcart] = useState([]);
  function AddCart(props) {
    setdata(true);
    setcart([...cart, props]);
  }
  function Remove(index) {
    const NewCart = [...cart];
    NewCart.splice(index, 1);
    setcart(NewCart);
    if (NewCart.length === 0) {
      setdata(false);
    }
  }

  function Close() {
    setdata(false);
  }
  return (
    <>
      <div
        className={`${
          data ? "left-0" : "left-[-100%]"
        }  w-[75%] sm:w-[50%] lg:w-[35%] xl:w-[33%] 2xl:w-[27%] h-full fixed overflow-y-scroll bg-gray-500 px-5  top-0 z-30 transition-all ease-linear duration-400`}
      >
        <div className="relative">
          <button
            onClick={Close}
            className={`${
              data === false
                ? ""
                : "text-white text-[30px] text-end font-semibold  absolute right-3 top-1"
            }`}
          >
            X
          </button>
          {cart.map((props, index) => (
            <div key={index} className=" pt-[48px]">
              <div className="pt-3  sm:pt-[18px] pb-[26px] sm:pb-[53px] px-3 sm:px-[23px] lg:px-[15px] xl:px-[23px] bg-[#fff]  group hover:shadow-[6px_13px_38px_0px_#C4C4C4] transition-all duration-300 ease-linear">
                <div className="overflow-hidden">
                  <img
                    className="rounded-[5px] shadow-[0px_4px_4px_0px_#C4C4C4] group-hover:scale-[106%] transition-all duration-300 ease-linear"
                    src={props.OurProductImgOne}
                    alt="img"
                  />
                </div>
                <div className="flex items-center justify-between pt-[13px]">
                  <p className=" font-Poppins font-medium text-[#000] text-[20px] leading-normal ">
                    Single Sofa
                  </p>
                  <img className="w-1/4" src={props.stargroupOne} alt="group" />
                </div>
                <p className=" font-Poppins font-normal text-[#4D4D4D] text-base sm:text-[18px] leading-normal pt-3 sm:pt-4 ">
                  Lorem ipsum dolor{" "}
                </p>
                <div className="flex items-center justify-between flex-wrap gap-2 pt-3 sm:pt-4">
                  <p className="flex items-center gap-[3px] font-Poppins font-semibold text-[#000] text-[20px] sm:text-[24px] md:text-[28.667px] leading-normal  ">
                    ₹ <span>1200.00</span>
                  </p>
                  <Button
                    className=" py-[10px] ps-2 sm:ps-[12px] pe-2 sm:pe-[13px] font-medium uppercase"
                    btn="Remove To Cart"
                    fun={() => Remove(index)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[1320px] container mx-auto px-3 py-[60px] sm:py-[80px] md:py-[100px] lg:py-[135px]">
        <p className=" font-Poppins font-normal text-[#BD7D41] text-[20px] leading-normal relative ps-[130px] ">
          Shopping Store
          <span className=" before:h-[1px] before:bg-[#000] before:w-[95px] before:left-[1%] before:top-[15px] before:absolute"></span>
        </p>
        <div className="flex items-center  justify-between pt-[11px] flex-wrap ">
          <h2 className=" font-Poppins font-bold text-[#243040] text-[30px] lg:text-[32px] xl:text-[35px] leading-normal max-w-[436px]  ">
            Our Products
          </h2>
          <Button
            fun={viewShow}
            className=" font-semibold py-2 sm:py-3 md:py-[19px] px-[24px] sm:px-[36px] md:px-[48px] max-[425px]:mt-4 "
            btn={show === 3 ? "VIEW ALL PRODUCT" : "VIEW LESS PRODUCT"}
          />
        </div>
        <div className="flex flex-row flex-wrap -mx-3 sm:pt-[50px]">
          {MapCard.slice(show).map((props, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="w-full sm:w-6/12 lg:w-4/12 px-3 xl:px-[13.50px] pt-[42px]"
            >
              <div className="pt-[18px] pb-[26px] sm:pb-[53px] px-4 sm:px-[23px] lg:px-[15px] xl:px-[23px] bg-[#fff]  group hover:shadow-[6px_13px_38px_0px_#C4C4C4] transition-all duration-300 ease-linear">
                <div className="overflow-hidden">
                  <img
                    className="rounded-[5px] shadow-[0px_4px_4px_0px_#C4C4C4] group-hover:scale-[106%] transition-all duration-300 ease-linear"
                    src={props.OurProductImgOne}
                    alt="img"
                  />
                </div>
                <div className="flex items-center justify-between pt-[13px]">
                  <p className=" font-Poppins font-medium text-[#000] text-[20px] leading-normal ">
                    Single Sofa
                  </p>
                  <img className="w-1/4" src={props.stargroupOne} alt="group" />
                </div>
                <p className=" font-Poppins font-normal text-[#4D4D4D] text-base sm:text-[18px] leading-normal pt-4 ">
                  Lorem ipsum dolor{" "}
                </p>
                <div className="flex items-center justify-between gap-2 pt-4">
                  <p className="flex items-center gap-[3px] font-Poppins font-semibold text-[#000] text-[24px] md:text-[28.667px] leading-normal  ">
                    ₹ <span>1200.00</span>
                  </p>
                  <Button
                    className=" py-[10px] ps-2 sm:ps-[12px] pe-2 sm:pe-[13px] font-medium"
                    btn="ADD TO CART"
                    fun={() => AddCart(props)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurProduct;
