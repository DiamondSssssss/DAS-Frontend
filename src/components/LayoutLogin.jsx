import React from "react";
import Logo from "../asset/logo.png";
import Layout1 from "../asset/layout1.jpeg";
import Layout2 from "../asset/layout2.jpeg";
import Layout3 from "../asset/layout3.jpeg";

export const LayoutLogin = ({ children }) => {
  return (
    <>
      <div className="relative bg-white  w-screen h-screen">
        <div className="p-2 top-0 absolute w-screen flex flex-row  h-[8%] border-b-[1.5px] border-solid ">
          <div className="ml-2 flex justify-center">
            <img src={Logo}></img>
          </div>
        </div>
        <div className="absolute top-[8%] w-full h-[92%] ">
          <div className="absolute left-1">
            <img src={Layout1}></img>
          </div>
          <div className="absolute right-2 bottom-2">
            <img src={Layout2}></img>
          </div>
          <div className="absolute right-1 h-[310px] w-[404px]">
            <img src={Layout3}></img>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};
