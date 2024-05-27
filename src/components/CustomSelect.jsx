import { Select } from "flowbite-react";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";

const BasicSelect = ( {
  label,
  name,
  labelClass = "",
  className = "",
  choices,
  format,
  value = null,
  ...restProps
} ) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  useEffect( () => {
    try {
      if ( value ) {
        setValue( name, value );
      } else setValue( name, choices[ 0 ].id ? choices[ 0 ]?.id : choices[ 0 ] );
    } catch ( error ) {
      console.log( "Bug at basic select: ", error );
    }
  }, [] );

  return (
    <>
      <Controller
        name={ name }
        control={ control }
        render={ ( { field } ) => (
          <>
            <div className="flex flex-row items-center gap-2">
              <label
                htmlFor={ name }
                className={ `mr-4 flex-1 font-baloo2 text-base font-bold ${ labelClass }` }
              >
                { label }
              </label>

              <Select
                className="custom-select min-w-[240px]"
                value={ field.value || "" }
                onChange={ field.onChange }
                defaultValue={ "eweqeqư" }
                ref={ field.ref }
              >
                { choices &&
                  choices.map( ( item ) => {
                    return (
                      <option
                        key={ item.id ? item.id : item }
                        value={ item.id ? item.id : item }
                      >
                        { format( item ) }
                      </option>
                    );
                  } ) }
              </Select>
            </div>
            { errors[ name ] && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                { `${ errors[ name ].message }` }
              </p>
            ) }
          </>
        ) }
      />
    </>
  );
};
BasicSelect.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  choices: PropTypes.array.isRequired,
  format: PropTypes.func,
};
BasicSelect.defaultProps = {
  label: "Label",
  name: "",
  choices: [],
  format: ( value ) => value,
};
export default BasicSelect;
