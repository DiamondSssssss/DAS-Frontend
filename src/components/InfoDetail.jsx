import React from "react";
import { DivContent } from "./DivContent";
import { gradeFormat } from "utils/FieldFormat";

export const InfoDetail = (props) => {
  return (
    <div className="relative flex flex-row h-full w-full">
      <div className="mt-4 h-full bg-blue_dark border-[3px] border-blue_dark"></div>
      <div className="absolute mt-4 h-full w-full z-0"></div>
      <div className="z-20 rounded-r-[10px] mt-4 h-fit w-full flex flex-col  items-center ">
        {props?.name && <DivContent>{props?.name}</DivContent>}
        {props?.price && <DivContent>Giá: {props?.price} XU</DivContent>}
        {props?.description && <DivContent>Tên bộ câu hỏi: {props?.description}</DivContent>}
        {props?.grade && <DivContent>Phạm vi kiến thức: {gradeFormat(props?.grade)}</DivContent>}
        {props?.subjectName && <DivContent>Môn: {props?.subjectName}</DivContent>}
        {props?.numOfQuestion && <DivContent>Số câu hỏi: {props?.numOfQuestion} câu</DivContent>}
        {props?.children}
      </div>
    </div>
  );
};

InfoDetail.defaultProps = {};
