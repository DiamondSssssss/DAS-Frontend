import React, { useState } from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
} from "@floating-ui/react";
export const InputMatrix = ({ value, onChange, className, ...restProps }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      {...restProps}
      className={`h-[60%] text-center w-full max-w-[60px] p-0 ${
        className ? className : ""
      }`}
      type="number"
    />
  );
};
export const ToolTipInputMatrix = ({
  value,
  onChange,
  number,
  className,
  ...restProps
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    placement: "top",
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, {
    role: "tooltip",
  });

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);
  return (
    <div className="relative">
      <InputMatrix
        value={value <= number ? value : number}
        onChange={onChange}
        {...restProps}
        className={className}
        ref={refs.setReference}
        {...getReferenceProps()}
      />
      {number !== null && isOpen && (
        <div
          ref={refs.setFloating}
          style={{
            position: "absolute",
            bottom: 0,
            transform: "translate(0%, -110%)",
            fontSize: "10px",
            background: "#fff6de",
            color: "#ea9008",
            padding: "4px",
          }}
          {...getFloatingProps()}
        >
          Hiện có: {number}
        </div>
      )}
    </div>
  );
};
