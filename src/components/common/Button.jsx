import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.fun}
        className={`${props.className} font-Poppins text-[#fff] text-base md:text-[18px] xl:text-[20px] leading-normal bg-[#BD7D41]     after:opacity-0 hover:after:opacity-100 after:left-0 after:top-0 after:duration-300 after:z-[-1] z-[1] after:bg-brownRang relative after:absolute after:w-full after:h-full  duration-300 transition-all ease-linear  hover:shadow-[0_0_0_0.7em_transparent]
 `}
      >
        {props.btn}
      </button>
    </div>
  );
};

export default Button;
