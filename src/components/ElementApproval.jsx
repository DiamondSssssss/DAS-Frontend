import React from "react";
import defaultImg1 from "../asset/defaultImg1.png";

export const ElementApproval = (props) => {
  return (
    <div
      className={`shadow-md flex flex-row w-full h-fit px-4 py-2 bg-white rounded-[10px] items-center gap-4`}
      onClick={props?.event}
    >
      <img src={props?.defaultImg1} className="w-11 h-11 rounded-[10px]"></img>
      <div className="w-[25%]">
        <span
          className={`${props?.approve ? "text-blue_dark" : "text-text_form"
            } font-inter font-semibold block truncate`}
        >
          {props?.name}
        </span>
      </div>
      <div className="ml-10 w-[10%]">
        <span
          className={`
             text-text_form
          font-inter font-medium `}
        >
          {props?.nameOfSubject}
        </span>
      </div>
      <div className="w-[10%]">
        <span
          className={`${props?.status ? "text-blue_dark" : "text-text_form"
            } font-inter font-semibold block truncate`}
        >
          {props?.price} Xu
        </span>
      </div>
      <div className="w-[20%]">
        <span
          className={`${props.status ? "text-blue_dark" : "text-text_form"
            } font-inter font-semibold `}
        >
          {props?.NameRequireApprove}
        </span>
      </div>
      <div
        className={`w-[13%] font-semibold font-inter rounded-[20px] text-center ${props?.status == 1
            ? "bg-green_state_background text-green_state"
            : "bg-yellow_state_background text-yellow_base"
          }`}
      >
        {props?.status === 0 && "Chờ phê duyệt"}
        {props?.status === 1 && "Đã phê duyệt"}
        {props?.status === 2 && "Chờ phê duyệt"}
      </div>
    </div>
  );
};

ElementApproval.defaultProps = {
  defaultImg1: defaultImg1,
  title: "Bộ câu hỏi 20 câu hỏi Hoá học hay nhât",
  status: false,
  subject: "Hoá Học",
  Price: "2000",
  NameRequireApprove: "Nguyễn Văn Bân",
  State: "Đã duyệt",
};
