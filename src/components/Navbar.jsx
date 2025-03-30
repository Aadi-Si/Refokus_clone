import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[2px] border-zinc-700">
      <div className="nleft flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="links flex gap-15 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className=" w-[2px] h-7 bg-zinc-700 font-Satoshi"></span>
            ) : (
              <a
                key={index}
                className="text-[15px] flex items-center gap-1 "
                href="#"
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.75em #00FF19" }}
                    className="inline-block bg-green-500 w-2 h-2 rounded"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
