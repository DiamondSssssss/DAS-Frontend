import React from "react";
import PropTypes from "prop-types";

const Button = ( {
  children,
  className = "",
  leftIcon = undefined,
  rightIcon = undefined,
  ...restProps
} ) => {
  return (
    <button
      className={ `transform motion-safe:hover:scale-110 flex flex-row gap-2 items-center ring-1 ring-gray-300 text-sm rounded-md px-3 py-2 transition-all  ${ className }` }
      { ...restProps }
    >
      { !!leftIcon && leftIcon }
      { children }
      { !!rightIcon && rightIcon }
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
