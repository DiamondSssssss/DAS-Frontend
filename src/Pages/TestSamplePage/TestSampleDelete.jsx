import Button from "components/Button";
import CustomModal from "components/CustomModal";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSnackbar } from "redux/appSlice";
import { DocumentService } from "services/DocumentService";

const TestSampleDelete = ({ data, onClose, open }) => {
  const dispatch = useDispatch();
  // @ts-ignore
  const { token } = useSelector((state) => state.user);
  const handleDelete = async () => {
    const { documentId } = data;
    try {
      const res = await DocumentService.delete(documentId, token);
      if (res) {
        dispatch(setSnackbar({ color: "green", message: "Xóa thành công" }));
      }
    } catch (error) {
      dispatch(setSnackbar({ color: "red", message: error.message }));
    }
  };
  return (
    <CustomModal
      header="Bạn có chắc muốn xóa bài kiểm tra này ?"
      open={open}
      onClose={onClose}
    >
      <p>Bạn có chắc chắn rằng mình muốn xóa bài này ?</p>
      <div className="w-full flex flex-row-reverse">
        <Button
          className="!ring-0 font-medium uppercase text-blue_base"
          onClick={handleDelete}
        >
          Xóa
        </Button>
      </div>
    </CustomModal>
  );
};

export default TestSampleDelete;
