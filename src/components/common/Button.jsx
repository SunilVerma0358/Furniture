import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.fun}
        className={`${props.className} font-Poppins text-[#fff] text-base md:text-[18px] xl:text-[20px] leading-normal bg-[#BD7D41] border border-transparent hover:bg-white   hover:text-[#BD7D41] hover:border hover:border-[#BD7D41] transition-all duration-400
 `}
      >
        {props.btn}
      </button>
    </div>
  );
};

export default Button;
