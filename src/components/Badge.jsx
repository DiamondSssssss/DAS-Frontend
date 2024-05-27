import React from "react";

export const colorStyle = ( color ) => {
  switch ( color ) {
    case "red":
      return "text-red_base bg-red_fog";
    case "green":
      return "text-green_base bg-green_fog";
    case "yellow":
      return "text-yellow_base bg-yellow_fog";

    default:
      return "";
  }
};

const Badge = ( { children, color = "red", className = "", ...restProps } ) => {
  return (
    <span
      className={ `px-4 py-2 rounded-2xl font-bold text-[1.2rem] 
	  ${ colorStyle( color ) } 
	  ${ className }`
      }
      { ...restProps }
    >
      { children }
    </span>
  );
};

export default Badge;
