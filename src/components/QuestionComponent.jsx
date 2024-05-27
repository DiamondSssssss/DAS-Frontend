import React, { useEffect } from "react";
import { AnswerCard } from "./AnswerCard";
import { ButtonBlue } from "./ButtonBlue";
import Flag from "../asset/Flag.svg";
import { difficultFormat } from "utils/FieldFormat";
import DropDown from "./DropDown";
import { difficultChoices } from "constant/selectOptions";
import { DropDownForSection } from "./DropDownForSection";
import { useState } from "react";

export const QuestionComponent = (props) => {
  const difficult = difficultChoices.map((item) => {
    return {
      name: difficultFormat(item),
      value: item,
    };
  });
  const answerProps = {
    A: `A. ${props?.data.answer1}`,
    B: `B. ${props?.data.answer2}`,
    C: `C. ${props?.data.answer3}`,
    D: `D. ${props?.data.answer4}`,
  };

  const [params, setParams] = React.useState({
    year: "",
    subject: "",
    grade: "",
  });

  const handleFind = (value) => {
    props?.handleChange(props?.index, value.value);
    // console.log("value", value);
  };

  const [selectedSectionName, setSelectedSectionName] = useState("");

  const handleFindSectionName = (value) => {
    props?.handleChangeSectionName(props?.index, value.name);
    // setSelectedSectionName(value.name);
    console.log("selectedSectionName: ", selectedSectionName);
    console.log("value", value.name);
    console.log("dataâ", props);
  };

  // const handleFindSection = (value) => {
  //   // props?.handleChangeSection(props?.index, value.name);
  //   // console.log("dataaaaa,", props);
  //   // console.log("ddddddđ", value.name);s
  //   // console.log("wwwwwwwwwwww", index);
  //   console.log(props);
  //   // props?.data?.sectionName;
  //   props?.handleChangeSectionName(props?.index, value.name);
  //   console.log("SectionName: ", value.name);
  //   // setSectionName(value.name);
  //   props?.data.handleChangeSection(props?.index, value.sectionId);
  //   // console.log("dataaaaa,", props.data.sectionName);
  //   // console.log("Name", value.name);
  // };
  const handleUpdateCorrectAnswer = (value) => {
    try {
      props?.handleChangeCorrectAnswer(props?.index, value);
    } catch (error) {
      console.log("Error", error);
    }
  };

  function splitTextWithImg(text) {
    // Use regular expression to capture the entire content of the <img> tag
    const regex = /<img[^>]*>(.*?)<\/img>/;
    const match = regex.exec(text);

    // If there's no <img> tag, capture the entire text
    if (!match) {
      return { fullContent: text.trim() };
    }

    // The result will be an object with three properties
    const result = {
      beforeImg: text.substring(0, match.index).trim(), // Content before <img> tag
      imgContent: match[1].trim(), // Content inside the <img> tag
      afterImg: text.substring(match.index + match[0].length).trim(), // Content after </img> tag
    };

    return result;
  }

  const { beforeImg, imgContent, afterImg } = splitTextWithImg(
    props?.data.questionPart
  );
  const { fullContent } = splitTextWithImg(props?.data.questionPart);
  const difficulty = difficultFormat(props?.data.difficulty);
  const subjectSection = props?.data.subjectSection;
  const subjectSectionList = () => {
    const subjectSectionList = [];
    props?.data?.subjectSection.forEach((element) => {
      subjectSectionList.push(element.name);
      console.log("CCCCCCVVVVV", element.name);
    });
    return subjectSectionList;
  };
  const sectionName = props?.data.sectionName;

  useEffect(() => {
    // console.log("dataaaaa,", props);
    // console.log("đasadấd", props);
    console.log("subjectSectionList", subjectSectionList);
  }, []);

  return (
    <div className="mt-4 flex flex-col h-fit w-[100%] mb-10">
      <div className="flex flex-row gap-5 items-center">
        <span className="text-black font-inter font-bold">
          {` Câu ${props?.index + 1}`}:
        </span>
        <div className="flex flex-row gap-3">
          {props?.handleChangeSectionName ? (
            <DropDownForSection
              data={subjectSection}
              name="Chọn chương cho câu hỏi"
              onSelected={(value) => handleFindSectionName(value)}
            ></DropDownForSection>
          ) : (
            <div className="border-blue_base border-[2px] rounded-[20px] text-blue_base font-inter font-bold px-4 ">
              {sectionName}
            </div>
          )}

          {props?.reportState === true && (
            <ButtonBlue
              className={
                " items-center border-red_state border-[2px] rounded-[20px] text-red_state font-inter font-bold px-4"
              }
              onClick={props?.handle}
            >
              Huỷ
            </ButtonBlue>
          )}
          {props?.reportState === false && (
            <ButtonBlue
              className={
                "gap-2 flex flex-row items-center border-gray_report border-[2px] rounded-[20px] text-gray_report font-inter font-bold px-4 "
              }
              onClick={props?.handle}
            >
              Báo lỗi
              <img className="w-5 h-5" src={Flag}></img>
            </ButtonBlue>
          )}
        </div>

        <div className="flex flex-row gap-3">
          {props?.handleChange ? (
            <DropDown
              data={difficult}
              defaultDifficult={props?.data.difficulty}
              onSelected={(value) => handleFind(value)}
            ></DropDown>
          ) : (
            <div className="border-blue_base border-[2px] rounded-[20px] text-blue_base font-inter font-bold px-4 ">
              {difficulty}
            </div>
          )}

          {props?.reportState === true && (
            <ButtonBlue
              className={
                " items-center border-red_state border-[2px] rounded-[20px] text-red_state font-inter font-bold px-4"
              }
              onClick={props?.handle}
            >
              Huỷ
            </ButtonBlue>
          )}
          {props?.reportState === false && (
            <ButtonBlue
              className={
                "gap-2 flex flex-row items-center border-gray_report border-[2px] rounded-[20px] text-gray_report font-inter font-bold px-4 "
              }
              onClick={props?.handle}
            >
              Báo lỗi
              <img className="w-5 h-5" src={Flag}></img>
            </ButtonBlue>
          )}
        </div>
      </div>
      {fullContent ? (
        <p
          className="mt-2 text-black font-inter font-medium text-[20px] block overflow-hidden"
          style={{
            maxWidth: "100%",
          }}
        >
          {fullContent}
        </p>
      ) : (
        <p
          className="mt-2 text-black font-inter font-medium text-[20px] block overflow-hidden"
          style={{
            maxWidth: "100%",
          }}
        >
          {beforeImg + afterImg}
        </p>
      )}
      {imgContent && <img src={`data:image/jpeg;base64,${imgContent}`} />}

      <div className="mt-2 flex flex-wrap gap-4 w-full justify-between">
        {Object.entries(answerProps).map(([option, answerText]) => (
          <React.Fragment key={option}>
            <AnswerCard
              correctAnswer={props?.data.correctAnswer}
              selectedOption={option}
              onClick={() => handleUpdateCorrectAnswer(option)}
            >
              {answerText}
            </AnswerCard>
          </React.Fragment>
        ))}
      </div>
      {props.reportState && (
        <div className="mt-4 flex flex-row w-[90%] items-center justify-start ">
          <span className="text-red-500 text-xs">*</span>
          <span className="font-baloo2 font-thin">Lý do:</span>
          <div className="ml-3 w-[35%]">
            <input
              className=" p-0 px-3 font-inter appearance-none block w-full h-fit  text-text_form border-green_form_reason font-light border-green_state border_[1px] rounded-[30px] bg-white"
              id="grid-name"
              type="text"
              placeholder="Nhập lý do"
              required
            />
          </div>
        </div>
      )}
    </div>
  );
};

QuestionComponent.defaultProps = {
  index: 1,
  questionPart: "Nhựa cây hoá đá sẽ tạo nên gì ?",
  difficulty: "Thông hiểu",
  answer: "A. Đá thạch anh hồng",
};
