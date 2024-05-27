import React, { useEffect, useState } from "react";
import TestSample from "./TestSample";
import CustomInput from "components/CustomInput";
import IconAdd from "asset/icon add.svg";
import TestSampleForm from "./TestSampleForm";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setSnackbar } from "redux/appSlice";
import { DocumentService } from "services/DocumentService";

const TestSamplePage = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  // @ts-ignore
  const { token } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    try {
      dispatch(setLoading(true));
      const res = await DocumentService.getAllTests(token);
      if (res) {
        setData(res);
      }
    } catch (error) {
      dispatch(setSnackbar({ color: "red", message: error.message }));
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-full overflow-hidden m-auto flex flex-col gap-4 ">
      <div className="relative  flex flex-row justify-between items-center w-full h-[10%] px-4 gap-7  ">
        <div className="w-1/3">
          <CustomInput
            label={null}
            name={"email"}
            placeholder="Nhập email người dùng bạn muốn tìm kiếm"
          />
        </div>

        <div className="flex gap-4">
          <button
            className="relative px-8 py-1 bg-white text-blue_dark rounded-[25px] shadow-2xl font-semibold font-baloo2"
            onClick={handleOpen}
          >
            <div className="absolute top-1/2 -translate-y-1/2 pr-2 left-2 ">
              <img className="h-4 w-4 " src={IconAdd} />
            </div>
            Thêm mẫu bài kiểm tra
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[10%] w-[80%] m-auto">
        {data &&
          data.map((item, index) => {
            return (
              <TestSample
                key={index}
                data={{
                  ...item,
                  image: "/images/testSample (1).jpg",
                }}
              />
            );
          })}
      </div>
      <TestSampleForm onClose={handleClose} open={open} />
    </div>
  );
};

export default TestSamplePage;
