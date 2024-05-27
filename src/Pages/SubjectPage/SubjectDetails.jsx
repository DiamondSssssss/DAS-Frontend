import React, { useEffect, useState } from "react";
import SectionInfo from "./SectionInfo";
import IconAdd from "asset/icon add.svg";
import CustomInput from "components/CustomInput";
import { useLocation } from "react-router-dom";
import { SubjectSectionService } from "services/SubjectSectionService";
import { useDispatch, useSelector } from "react-redux";
import { setSnackbar } from "redux/appSlice";
import Button from "components/Button";
import { findAllByAltText } from "@testing-library/react";

const SubjectDetails = () => {
  const location = useLocation();

  // @ts-ignore
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [input, setInput] = useState({
    description: "",
    name: "",
  });
  const updateInput = (field, value) => {
    let prev = { ...input };
    prev[field] = value;
    setInput(prev);
  };
  const [search, setSearch] = useState("");
  const [edit, setEdit] = useState(false);
  const [sectionInfo, setSectionInfo] = useState(null);

  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  const handleClickRow = (item) => {
    fetchSectionInfo(item.sectionId);
    handleOpenModal();
  };
  const handleAdd = async () => {
    const { subjectId } = location.state;
    const reqBody = { ...input, subjectId: subjectId };
    try {
      const res = await SubjectSectionService.add(reqBody, token);
      if (res) {
        dispatch(setSnackbar({ color: "green", message: res }));
      }
    } catch (error) {
      dispatch(setSnackbar({ color: "red", message: error.message }));
    } finally {
      setInput({ description: "", name: "" });
      fetchData();
    }
  };
  const fetchData = async () => {
    try {
      const { subjectId } = location.state;
      const res = await SubjectSectionService.getAllBySubjectId(
        subjectId,
        token
      );

      if (res) {
        setData(res);
      }
    } catch (error) {
      dispatch(setSnackbar({ color: "red", message: error.message }));
    }
  };
  const fetchSectionInfo = async (id) => {
    try {
      const res = await SubjectSectionService.getById(id, token);
      if (res) {
        setSectionInfo(res);
      }
    } catch (error) {
      dispatch(setSnackbar({ color: "red", message: error.message }));
    }
  };
  useEffect(() => {
    if (location.state) {
      fetchData();
    }
  }, [location]);

  return (
    <div className="text-blue_dark w-full h-full overflow-hidden m-auto flex flex-col ">
      <div className="relative  flex flex-row-reverse items-center w-full h-[10%] p-2 gap-7">
        <button
          className="relative h-fit w-fit px-4 py-1 pl-7 bg-white text-blue_dark rounded-[25px] shadow-2xl font-semibold font-baloo2"
          onClick={handleOpenModal}
        >
          <div className="absolute top-1/2 -translate-y-1/2 left-2">
            <img className="h-4 w-4 " src={IconAdd} />
          </div>
          Chỉnh sửa
        </button>
        <button
          className="relative h-fit w-fit px-4 py-1 pl-7 bg-white text-blue_dark rounded-[25px] shadow-2xl font-semibold font-baloo2"
          onClick={() => setEdit((prev) => !prev)}
        >
          <div className="absolute top-1/2 -translate-y-1/2 left-2">
            <img className="h-4 w-4 " src={IconAdd} />
          </div>
          Thêm Chương mới
        </button>
      </div>
      <div className="flex-1 overflow-auto hide-scrollbar p-2">
        <p className=" font-bold text-[1.8rem] my-6">{location.state?.name}</p>
        <div className="flex flex-col gap-4  ">
          {data.map((item) => (
            <div
              className="py-4 px-8 rounded-lg shadow-card uppercase text-[1.2rem] font-medium hover:bg-blue_light cursor-pointer"
              key={item.name}
              onClick={() => handleClickRow(item)}
            >
              {item.name}
            </div>
          ))}
          <CustomInput
            className="py-4 px-8 rounded-lg shadow-card uppercase text-[1.2rem] font-medium hover:bg-blue_light cursor-pointer"
            name={"name"}
            placeholder="Nhập chương bạn muốn tìm kiếm"
            value={search}
            labelClass="font-bold text-blue_dark text-[1.2rem]"
            onChange={(e) => setSearch(e.target.value)}
          />
          {edit && (
            <>
              <CustomInput
                className="text-blue_base font-bold"
                name={"name"}
                placeholder="Tên chương mới"
                value={input.name}
                labelClass="font-bold text-blue_dark text-[1.2rem]"
                onChange={(e) => updateInput("name", e.target.value)}
              />
              <textarea
                className="p-4 rounded-lg shadow-card"
                name={"description"}
                placeholder="Mô tả"
                value={input.description}
                onChange={(e) => updateInput("description", e.target.value)}
              />
              <button onClick={handleAdd}>Xác nhận</button>
            </>
          )}
        </div>
      </div>
      <SectionInfo open={open} info={sectionInfo} onClose={handleCloseModal} />
    </div>
  );
};

export default SubjectDetails;
