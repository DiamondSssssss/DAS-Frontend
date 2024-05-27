import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Alert } from "flowbite-react";
import { colorStyle } from "./Badge";

const CustomSnackBar = ( {
  color = "green",
  message = "",
  id,
  className = "",
  ...restProps
} ) => {
  const [ open, setOpen ] = useState( false );

  useEffect( () => {
    console.log( "Snackbar here" );
    console.log( "message here: ", message );
    // message = "";
    if ( message != "Request failed with status code 400" ) {
      if ( message ) {
        setOpen( true );
        // Close the SlideMessage after 3 seconds
        const timeoutId = setTimeout( () => {
          setOpen( false );
        }, 2000 );

        return () => clearTimeout( timeoutId );
      }
    }
  }, [ color, message, id ] );

  return (
    open && (
      <Alert
        className={ `snack-bar absolute bottom-[5%] right-[10px] z-10 ${ colorStyle(
          color
        ) } ${ className }` }
      >
        { message }
      </Alert>
    )
  );
};

export default CustomSnackBar;
