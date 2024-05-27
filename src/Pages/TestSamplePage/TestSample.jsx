import React, { useState } from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useDismiss,
  useRole,
  useClick,
  useInteractions,
  FloatingFocusManager,
} from "@floating-ui/react";
import Button from "components/Button";
import { useNavigate } from "react-router-dom";
import { PATH } from "routes/constants";
import TestSampleDelete from "./TestSampleDelete";
const TestSample = ({ data }) => {

	const [isOpen, setIsOpen] = useState(false);
	const [isOpenDelete, setIsOpenDelete] = useState(false);

  const handleOpenDelete=()=>{
    setIsOpenDelete(true)
  }
  const handleCloseDelete=()=>{
    setIsOpenDelete(false)
  }

	const navigate = useNavigate();

  const { refs, floatingStyles, context } = useFloating({
    placement: "top",
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  const handleClick=()=>{
	  navigate(PATH.ANSWER_SAMPLE+`/${data.documentId}`,{state:data})
  }

  return (
    <div className="flex flex-col gap-2 relative">
      <img
        className="object-contain w-full shadow-card rounded-2xl overflow-hidden"
        src={data.image}
        alt="sample"
      />
      <p onClick={handleClick} className="font-baloo2 font-medium text-[1.4rem] text-center cursor-pointer hover:underline">
       {data.name}
      </p>

      <div className="h-[30px] w-[30px] rounded-full absolute top-[10px] right-[10px] overflow-hidden ">
        <img
          ref={refs.setReference}
          {...getReferenceProps()}
          className="w-full object-contain cursor-pointer opacity-40 hover:opacity-100 transition-all"
          src="icons/moreIcon.svg"
          alt="icon"
        />
      </div>
      {isOpen && (
        <FloatingFocusManager context={context} modal={true}>
          <div
            className="Popover"
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            <Button
              className="bg-white font-baloo2 font-medium shadow-card"
              style={{ float: "right" }}
              onClick={handleOpenDelete}
            >
              Xóa mẫu phiếu trả lời
            </Button>
          </div>
        </FloatingFocusManager>
      )}
      <TestSampleDelete open={isOpenDelete} onClose={handleCloseDelete} data={data}/>
    </div>
  );
};

export default TestSample;
