import React from "react";
import { IoIosReturnRight } from "react-icons/io";
const Button = ({title = "Get Started"}) => {
  return (
    <div className="w-40 px-4 py-2 bg-white text-black rounded-full flex items-center gap-5">
      <span className="text-sm cursor-pointer">{title}</span>
      <IoIosReturnRight />
    </div>
  );
};

export default Button;
