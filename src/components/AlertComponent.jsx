import React from "react";
import { Modal } from "./Modal";

export const AlertComponent = ( props ) => {
  return (
    <Modal
      // @ts-ignore
      HandleFalse={ props?.HandleFalse }
    >
      <div className="shadow-xl relative p-4 pr-10 rounded-[10px]  h-fit w-full bg-white flex flex-col items-start justify-center gap-y-3">
        <p className="font-baloo2 font-bold text-[28px] text-black">
          { props?.title }
        </p>
        <span className="mt-3 font-medium font-baloo2 text-[24px]">
          { props?.messages }
        </span>
        { props?.children }
        <div className="mt-10 flex flex-row gap-4 w-full items-end justify-end ">
          <div
            className="text-blue_base font-baloo2 font-thin text-[28px] cursor-pointer"
            onClick={ props?.HandleEvent }
          >
            XÁC NHẬN
          </div>
          <div
            className="text-blue_base font-baloo2 font-thin text-[28px] cursor-pointer "
            onClick={ props?.HandleFalse }
          >
            HUỶ
          </div>
        </div>
      </div>
    </Modal>
  );
};
