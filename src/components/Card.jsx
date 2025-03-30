import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "motion/react";

const Card = ({ width, start, para, one , two , hover="false"}) => {
  return (
    <motion.div
      whileHover={{backgroundColor:hover === "true" && "#7443ff" , padding:"27px"}}
      className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h3>{one}</h3>
          <HiOutlineArrowNarrowRight />
        </div>
        <h1 className="text-3xl font-medium mt-5">{two}</h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-8xl font-medium  leading-none">
              Start a Project
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border-[1px] cursor-pointer border-zinc-50">
              Contact us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium ">
            Explore what drives our team.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
