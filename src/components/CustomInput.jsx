import React from "react";

const CustomInput = ( {
  label = null,
  name,
  labelClass = "",
  className = "",
  iconEnum,
  type,
  regex,
  ...restProps
} ) => {
  return (
    <div className="flex flex-col w-full gap-2 font-baloo2 ">
      { label && (
        <label
          className={ ` text-lg font-bold ${ labelClass } flex gap-3 items-center` }
        >
          { iconEnum == 1 ? (
            <img
              src="/images/green-file.png"
              className="w-5 h-6"
              alt="green-file"
            />
          ) : (
            ""
          ) }
          { iconEnum == 2 ? (
            <img
              src="/images/red-file.png"
              className="w-5 h-6"
              alt="red-file"
            />
          ) : (
            ""
          ) }
          { iconEnum == 3 ? (
            <img
              src="/images/yellow-file.png"
              className="w-5 h-6"
              alt="yellow-file"
            />
          ) : (
            ""
          ) }
          { label }
        </label>
      ) }
      <input
        className={ `rounded-2xl ring-2 ring-slate-200 py-2 px-3 text-base text-[#7b7b7b] focus:text-blue_dark focus:ring-blue_base ${ className }` }
        type={ type }
        { ...restProps }
      />
    </div>
  );
};

export default CustomInput;
