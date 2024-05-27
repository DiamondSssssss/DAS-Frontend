import Button from "components/Button";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "routes/constants";
import TestForm from "./TestForm";
import CustomInput from "components/CustomInput";
import IconAdd from "asset/icon add.svg";
import { ButtonBlue } from "components/ButtonBlue";
import DropDown from "components/DropDown";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "redux/appSlice";
import { fetchExams } from "redux/examSlice";
import { dateFormat } from "utils/dataFormat";
import { gradeChoices, subjectChoices } from "constant/selectOptions";
import { gradeFormat, subjectFormat, examStatusFormat } from "utils/FieldFormat";
import { set } from "react-hook-form";

const grades = gradeChoices.map((item) => {
  return {
    id: item,
    name: gradeFormat(item),
  };
});

const TestPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  // @ts-ignore
  const { token } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);

  // @ts-ignore
  const { entities, error, loading } = useSelector((state) => state.exam);
  console.log("entity", entities);
  const [grade, setGrade] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    dispatch(setLoading(loading));
  }, [loading]);

  const handleFilter = () => {
    // @ts-ignore
    dispatch(
      // @ts-ignore
      fetchExams({ params: { grade: grade?.id || "", studyYear: year }, token })
    );
    console.log("grade", grade);
    console.log("dddd", year);
  };
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  const defaultYearRef = React.useRef(currentYear);
  const data2 = [
    {
      name: `${currentMonth < 7
          ? `${defaultYearRef.current - 1}-${defaultYearRef.current}`
          : `${defaultYearRef.current}-${defaultYearRef.current + 1}`
        }`,
    },
    {
      name: `${currentMonth < 7
          ? `${defaultYearRef.current - 2}-${defaultYearRef.current - 1}`
          : `${defaultYearRef.current - 1}-${defaultYearRef.current}`
        }`,
    },
    {
      name: `${currentMonth < 7
          ? `${defaultYearRef.current - 3}-${defaultYearRef.current - 2}`
          : `${defaultYearRef.current - 2}-${defaultYearRef.current - 1}`
        }`,
    },
  ];

  useEffect(() => {
    console.log("dddd", data2[0]);
    // @ts-ignore
    dispatch(
      // @ts-ignore
      fetchExams({ params: { studyYear: data2[0].name }, token })
    );
    console.log(year);
  }, []);

  const handleRowClick = (item) => {
    navigate(PATH.TEST + `/${item.examId}`, { state: item });
  };

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <TestForm open={open} onClose={handleCloseModal} />
      <div className="flex flex-col w-full h-full gap-4 m-auto overflow-hidden ">
        <div className="relative flex flex-row justify-between items-center w-full h-[10%] pr-4 gap-7">
          <div className="flex items-center gap-4">
            <DropDown
              data={grades}
              name="Khối"
              onSelected={(value) => {
                setGrade(value);
              }}
            />
            <DropDown
              data={data2}
              ref={defaultYearRef}
              name={data2[0].name}
              onSelected={(value) => setYear(value.name)}
            ></DropDown>
            <ButtonBlue onClick={handleFilter} className="blueButton">
              Tìm kiếm
            </ButtonBlue>
          </div>

          <div className="flex gap-4">
            <button
              className="relative px-8 py-1 bg-white text-blue_dark rounded-[25px] shadow-2xl font-semibold font-baloo2 flex items-center justify-center"
              onClick={handleOpenModal}
            >
              <div className="absolute pr-2 -translate-y-1/2 top-1/2 left-2 ">
                <img className="w-4 h-4 " src={IconAdd} />
              </div>
              <p>Thêm cuộc thi mới</p>
            </button>
          </div>
        </div>
        <div className="flex-1 p-2 overflow-auto hide-scrollbar">
          <div className="grid grid-cols-3 gap-8">
            {entities &&
              entities.length > 0 &&
              entities.map((item, index) => (
                <div
                  onClick={() => handleRowClick(item)}
                  key={index}
                  className="flex flex-row w-full gap-4 p-4 bg-white rounded-lg cursor-default hover:shadow-xl"
                >
                  <div className="w-[40%] p-4 border-r-2 border-slate-300 ">
                    <img
                      className="object-contain w-full"
                      src="/images/exam.jpg"
                      alt="exam"
                    />
                  </div>
                  <div className="flex-1 text-[#707070]">
                    <p>
                      <span className="font-baloo2 font-bold text-[#00C886]">
                        {item.name}
                      </span>
                    </p>
                    <p>
                      <span>Mã cuộc thi: {item.testCode}</span>
                    </p>
                    <p>
                      <span>Lớp: {item.className}</span>
                    </p>

                    <p>
                      <span>Môn: {item.subjectName}</span>
                    </p>

                    <p>
                      <span>Đã nộp bài: {item.submitted}</span>
                    </p>

                    <p>
                      <span>Trạng thái: {examStatusFormat(item.status)}</span>
                    </p>

                    <p>
                      <span className="text-sm">
                        Ngày tạo: {dateFormat(item.createdOn)}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestPage;
