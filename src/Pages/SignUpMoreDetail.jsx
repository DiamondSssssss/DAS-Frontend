import React from "react";
import { LayoutLogin } from "components/LayoutLogin";
import Logo from "../asset/logo.png";
export const SignUpMoreDetail = () => {
  return (
    <LayoutLogin>
      <div className="rounded-[20px]  absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[55%] w-[35%]">
        <div className="border-[2px] border-gray-400 shadow-2xl rounded-[20px] absolute bg-bg_form2 h-full w-full flex flex-col items-center justify-start ">
          <img
            className=" mt-[10%] h-[30%] object-contain"
            src={Logo}
            alt="Logo"
          ></img>
          <p className="mt-2 font-bungee-inline text-blue_dark">
            THÊM THÔNG TIN
          </p>
          <form className=" rounded-[20px] flex flex-col relative w-full h-full bg-white p-5 overflow-y-auto no-scrollbar">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="w-[80%] ">
                <label
                  className=" tracking-wide text-blue_dark BalooBhai2Semibold mb-1"
                  htmlFor="grid-name"
                >
                  Họ và tên:
                </label>
                <input
                  className="BalooBhai2Semibold appearance-none block w-full  text-text_form border border-gray-200  rounded-[30px] py-2 px-3  bg-white"
                  id="grid-name"
                  type="text"
                  placeholder="Nhập họ tên của bạn..."
                  required
                />
              </div>

              <div className="mt-3 w-[80%] ">
                <label
                  className=" tracking-wide text-blue_dark BalooBhai2Semibold mb-1"
                  htmlFor="phone"
                >
                  Số điện thoại:
                </label>
                <input
                  className=" BalooBhai2Semibold appearance-none block w-full  text-text_form border border-gray-200  rounded-[30px] py-2 px-3  bg-white"
                  id="phone"
                  type="number"
                  placeholder="Nhập số điện thoại của bạn..."
                  required
                />
              </div>
            </div>
          </form>
          <hr
            className={`absolute bottom-6 mt-5 w-[35%] bg-color_hr border-color_hr `}
          ></hr>
        </div>
      </div>
    </LayoutLogin>
  );
};
