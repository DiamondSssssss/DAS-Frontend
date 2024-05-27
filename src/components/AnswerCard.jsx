import React from "react";

export const AnswerCard = ( props ) => {
  return (
    <div
      className={ `${ props?.selectedOption == props?.correctAnswer ? "shadow-5xl" : ""
        } px-2  h-fit w-[45%] rounded-[10px] pl-6 py-1 border-[1px] border-[#B7B7B7] text-inter font-medium` }
      onClick={ props.onClick }
    >
      { props?.children }
    </div>
  );
};
