import React from "react";

export const ButtonBlue = ( { children, className, ...buttonProps } ) => {
  return (
    <button
      className={ `transform motion-safe:hover:scale-105 cursor-pointer ${ className }` }
      { ...buttonProps }
    >
      { children }
    </button>
  );
};
