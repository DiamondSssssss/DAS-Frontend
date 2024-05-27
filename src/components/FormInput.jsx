import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import PropTypes from "prop-types";
const FormInput = ({
  label,
  name,
  direction = "row",
  labelClass = "",
  className = "",
  ...restProps
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-2">
            <label
              htmlFor={name}
              className={`flex-1 font-baloo2 mr-4 text-base font-bold ${labelClass}`}
            >
              {label}
            </label>
            <input
              className={`flex-1 rounded-3xl ring-2  py-2 px-3 text-base  focus:text-blue_dark ring-blue_base ${className}`}
              value={field.value || ""}
              onChange={field.onChange}
              ref={field.ref}
              {...restProps}
            />
          </div>
          <div>
            {errors[name] && (
              <p className="text-sm text-red-600 dark:text-red-500">
                {`${errors[name].message}`}
              </p>
            )}
          </div>
        </div>
      )}
    />
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormInput;
