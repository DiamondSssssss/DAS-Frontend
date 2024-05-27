import React from "react";

import ReactDOM from "react-dom";

const Backdrop = ( props ) => {
  return (
    <div
      className="backdropTeacher bg-[#DEE5F3] bg-opacity-[35%]"
      onClick={ props.HandleFalse }
    />
  );
};

export const Modal = ( props ) => {
  return (
    <React.Fragment>
      { ReactDOM.createPortal(
        <Backdrop HandleFalse={ props?.HandleFalse } />,
        document.getElementById( "root_1" )
      ) }
      { ReactDOM.createPortal(
        <>
          <div className="absolute z-50 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 hover:shadow-bs1 h-fit w-[35%] ">
            { props?.children }
          </div>
        </>,
        document.getElementById( "root_2" )
      ) }
    </React.Fragment>
  );
};
