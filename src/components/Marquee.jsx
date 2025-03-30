import React from "react";
import { motion } from "motion/react";

const Marquee = ({ val, direction }) => {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ease: "linear", duration: 30, repeat:Infinity}}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {val.map((url, index) => (
          <img className="w-[9rem]" key={index} src={url} />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ease: "linear", duration: 30, repeat:Infinity}}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {val.map((url, index) => (
          <img className="w-[9rem]" key={index} src={url} />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
