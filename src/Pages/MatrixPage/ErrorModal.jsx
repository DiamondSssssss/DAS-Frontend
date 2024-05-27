import Button from "components/Button";
import CustomModal from "components/CustomModal";
import React from "react";
import { PATH } from "routes/constants";
import { useNavigate } from "react-router-dom";

const ErrorModal = ({ onClose, open, err }) => {
  const navigate = useNavigate();

  return (
    <CustomModal
      header="Giá trị nhập vào không hợp lệ"
      open={open}
      onClose={onClose}
    >
      <p>{err}</p>
      <div className="w-full flex flex-row-reverse">
        <Button
          className="!ring-0 font-medium uppercase text-blue_base"
          onClick={onClose}
        >
          Hủy
        </Button>
      </div>
    </CustomModal>
  );
};

export default ErrorModal;
