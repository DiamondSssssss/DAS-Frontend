// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import DropDown from "components/DropDown";

import { useDispatch } from "react-redux";
import { updateBreadCrumb } from "redux/appSlice";
import { QuestionComponent } from "components/QuestionComponent";
import { InfoDetail } from "components/InfoDetail";
import { ButtonBlue } from "components/ButtonBlue";

import { useNavigate } from "react-router-dom";
import { PATH } from "routes/constants";
import { setSnackbar } from "redux/appSlice";
import { setLoading } from "redux/appSlice";
import { ManageService } from "services/ManageService";
import { fetchManageDetails } from "redux/manageDetailSlice";
import { fetchSubjects } from "redux/subjectSlice";
import { DropDownForSection } from "components/DropDownForSection";
import { subjectFormat } from "utils/FieldFormat";

export const ExamBankDetail = () => {
  const handle = () => { };
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.user);
  const [data, setData] = useState([]);
  const [sectionIdSubject, setSection] = useState("");
  const [sectionName, setSectionName] = useState("");
  const [subjectName, setSubjectName] = useState("");

  // @ts-ignore
  const { entities, error, loading } = useSelector(
    (state) => state.manageDetails
  );

  const {
    entities: subjectSection,
    error: subjectError,
    loading: subjectLoading,
  } = useSelector((state) => state.subject);

  useEffect(() => {
    if (location.state?.questionSetId) {
      let root = "/" + location.pathname.split("/")[1];
      dispatch(updateBreadCrumb([root, location.state.name]));
      const questionSetId = location.state.questionSetId;
      dispatch(fetchManageDetails({ token, questionSetId }));
    }

    if (location.state?.dataResponse) {
      setData(location?.state?.dataResponse);
      console.log(location);
      const subjectEnum = location.state.dataResponse.Subject;
      const grade = location.state.dataResponse.grade;
      setSubjectName(subjectFormat(subjectEnum));
      console.log("subjectName", subjectEnum);
      console.log("Data response", location?.state?.dataResponse);
      dispatch(
        fetchSubjects({ grade: grade, subjectEnum: subjectEnum, token })
      );
    }
  }, [location]);
  const handleSaveExam = async () => {
    try {
      // Assuming updatedQuestions is an array of questions and sectionId is the new sectionId

      const updatedQuestions = [...data.questions];

      updatedQuestions.forEach((question, index) => {
        updatedQuestions[index] = {
          ...question,
          sectionId: sectionIdSubject,
        };
      });
      // setData({ ...data, questions: updatedQuestions });

      await ManageService.save({ ...data, questions: updatedQuestions }, token);
      console.log("Manage save", data);
      // @ts-ignore

      dispatch(setSnackbar({ color: "green", message: "Lưu thành công" }));

      navigate(PATH.EXAMBANK);
    } catch (error) {
      dispatch(setSnackbar({ color: "red", message: error.message }));
    }
  };

  const handleChange = (index, difficulty) => {
    const updatedQuestions = [...data.questions];
    updatedQuestions[index].difficulty = difficulty;
    setData({ ...data, questions: updatedQuestions });
    // console.log("ChangeĐÂ", data);
  };

  const handleChangeSectionName = (index, sectionName) => {
    const updatedQuestions = data.questions.map((question, i) => {
      if (i === index) {
        return { ...question, sectionName: sectionName };
      }
      return question;
    });
    setData({ ...data, questions: updatedQuestions });
  };

  const handleChangeCorrectAnswer = (index, answer) => {
    console.log("Answer", answer);
    const updatedQuestions = [...data.questions];
    updatedQuestions[index].correctAnswer = answer;
    setData({ ...data, questions: updatedQuestions });
  };

  const handleChangeSection = (section) => {
    setSection(section.sectionId);
    setSectionName(section.name);
    const updatedQuestions = [];
    [...data.questions].forEach((element) => {
      element = { ...element, sectionName: sectionName };
      updatedQuestions.push(element);
      // console.log("eeê", element);
    });
    // console.log("dđdddd", updatedQuestions);
    setData({ ...data, questions: updatedQuestions });
    // console.log("dđ", data);
    // updatedQuestions[index].correctAnswer = answer;
    // console.log("ChangeĐÂ", data);
    // console.log("logloglog", section.name);
  };

  const handleCancle = () => {
    navigate(PATH.MANAGEEXAM);
  };

  useEffect(() => {
    dispatch(setLoading(loading));
    dispatch(setLoading(subjectLoading));
    console.log("Data", data);
    console.log("Entities", entities);
  }, [loading, subjectLoading]);

  return (
    <div className="h-[90%] w-full flex flex-row">
      <div className="px-[50px] rounded-ss-[10px] rounded-bl-[10px] mt-4 h-full w-[70%] flex flex-col bg-white overflow-y-auto ">
        {data?.questions
          ? data?.questions?.map((entity, index) => (
            <React.Fragment key={index}>
              <QuestionComponent
                data={{
                  ...entity,
                  subjectSection: subjectSection,
                  handleChangeSection: handleChangeSection,
                }}
                index={index}
                handleChange={handleChange}
                handleChangeSectionName={handleChangeSectionName}
                handleChangeCorrectAnswer={handleChangeCorrectAnswer}
              ></QuestionComponent>
            </React.Fragment>
          ))
          : entities?.questions?.map((entity, index) => (
            <React.Fragment key={index}>
              <QuestionComponent
                data={entity}
                index={index}
              ></QuestionComponent>
            </React.Fragment>
          ))}
      </div>

      <div className="relative h-full w-[30%] flex flex-col ">
        {data?.questions ? (
          <InfoDetail
            description={data?.description}
            subject={data?.subject}
            grade={data?.grade}
            name={data?.name}
          >
            <span className="bg-white font-inter font-bold mt-[9%] h-fit w-[80%] text-center py-2 px-9 rounded-[10px] border-[1px] border-blue_base">
              {`Môn ${subjectName}`}
            </span>
            <DropDownForSection
              data={subjectSection}
              name="Chọn chương cho toàn bộ câu hỏi"
              className="mt-4 block overflow-hidden max-w-[250px] py-2 text-sm "
              // defaultDifficult={props?.data.difficulty}
              onSelected={(value) => handleChangeSection(value)}
            />
          </InfoDetail>
        ) : (
          <InfoDetail
            description={entities?.description}
            price={entities?.price}
            grade={entities?.grade}
          />
        )}

        {data?.questions ? (
          <div
            className="absolute bottom-4 flex flex-col items-center w-full justify-center gap-5
"
          >
            <ButtonBlue
              onClick={() => {
                handleSaveExam();
              }}
              className={`cursor-pointer rounded-[20px] py-2   border-[1px] font-inter font-bold  right-3 h-fit w-[80%]   text-center ${"border-green_state text-green_state bg-green_accept_background"} `}
            >
              Lưu bộ câu hỏi vào kho
            </ButtonBlue>
            <ButtonBlue
              className=" cursor-pointer rounded-[20px] py-2  border-gray_word border-[1px] text-gray_word font-inter font-bold  right-3 h-fit w-[80%] bg-gray_background text-center "
              onClick={handleCancle}
            >
              Huỷ bỏ
            </ButtonBlue>
          </div>
        ) : (
          <ButtonBlue
            className={
              "absolute bottom-2 right-3 h-fit w-fit py-1 gap-2 flex flex-row items-center border-gray_report border-[2px] rounded-[10px] text-gray_report font-inter font-bold px-4 "
            }
            onClick={handle}
          >
            Vô hiệu hoá bộ câu hỏi
          </ButtonBlue>
        )}
      </div>
    </div>
  );
};
