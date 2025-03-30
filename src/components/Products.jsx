import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";
import arqitel from "../assets/arqitel.mp4";
import yir from "../assets/yir.mp4";
import yahoo from "../assets/yahoo.mp4";
import rainfall from "../assets/rainfall.mp4";

const Products = () => {
  var products = [
    {
      title: "arqutile",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ex facere deleniti, provident architecto velit quas in.",
      live: true,
      case: false
    },
    {
      title: "YIR 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ex facere deleniti, provident architecto velit quas in.",
      live: true,
      case: true
    },
    {
      title: "Yahoo!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ex facere deleniti, provident architecto velit quas in.",
      live: true,
      case: false,
    },
    {
      title: "Rainfall",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ex facere deleniti, provident architecto velit quas in.",
      live: true,
      case: false,
    },
  ];

  const [pos, setPose] = useState(0);
  const mover = (val) => {
    setPose(val * 23);
  };
  return (
    <div className="mt-32 relative mb-45">
      {products.map((value, index) => {
        return <Product key={index} val={value} mover={mover} count={index}/>;
      })}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window  absolute w-[28rem] h-[23rem] left-[30%] top-[6.5%] rounded-xl overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full rounded-xl"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src={arqitel}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full rounded-xl"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src={yir}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5}}
            className="w-full h-full rounded-xl"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src={yahoo}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full rounded-xl"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src={rainfall}
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
