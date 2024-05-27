import React from "react";

export const DivContent = ({ children }) => {
  return (
    <div className="bg-white font-inter font-bold mt-[9%] h-fit w-[80%] text-center py-2 px-9 rounded-[10px] border-[1px] border-blue_base">
      {children}
    </div>
  );
};
