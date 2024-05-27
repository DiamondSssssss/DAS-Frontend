import Button from "components/Button";
import CustomModal from "components/CustomModal";
import React from "react";
import { PATH } from "routes/constants";
import { useNavigate } from "react-router-dom";

const MatrixDeleteConfirm = ({ onClose, open }) => {
  const navigate = useNavigate();

  return (
    <CustomModal
      header="Bạn có chắc muốn hủy ma trận này ?"
      open={open}
      onClose={onClose}
    >
      <p>
        Bạn có chắc chắn rằng mình muốn ma trận này cùng với những thông tin đã
        tạo ?
      </p>
      <div className="w-full flex flex-row-reverse">
        <Button
          className="!ring-0 font-medium uppercase text-blue_base"
          // Hủy, redirect lại trang Quản lí cuộc thi
          onClick={() => {
            navigate(PATH.TEST);
          }}
        >
          Xóa ma trận
        </Button>
      </div>
    </CustomModal>
  );
};

export default MatrixDeleteConfirm;
