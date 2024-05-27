// @ts-nocheck
import {
  gradeChoices,
  subjectChoices,
  subjectChoicesC1,
} from "constant/selectOptions";
import React, { useEffect, useState } from "react";
import { gradeFormat, subjectFormat } from "utils/FieldFormat";
import UpLoad from "../asset/UpLoad.svg";
import DropDown from "./DropDown";

const subjects = subjectChoices.map( ( item ) => {
  return {
    name: subjectFormat( item ),
    value: item,
  };
} );

const subjectsC1 = subjectChoicesC1.map( ( item ) => {
  return {
    name: subjectFormat( item ),
    value: item,
  };
} );
const grades = gradeChoices.map( ( item ) => {
  return {
    name: gradeFormat( item ),
    value: item,
  };
} );

export const AddNewTopic = ( props ) => {
  const [ formData, setFormData ] = useState( {
    Grade: 1,
    Subject: "",
    Name: "",
    Description: "",
    File: null, // Updated to include a file property
  } );

  const [ fileLabel, setFileLabel ] = useState( "Chọn tập tin để tải lên" );

  const handleInputChange = ( field, value ) => {
    setFormData( {
      ...formData,
      [ field ]: value,
    } );
  };

  // Function to handle file input change
  const handleFileChange = ( e ) => {
    const file = e.target.files[ 0 ];
    setFormData( {
      ...formData,
      File: file,
    } );

    // Update the file label with the selected file name
    setFileLabel( file ? file.name : "Chọn tập tin để tải lên" );
  };
  const handleConfirm = () => {
    // Access the form data here, you can use formData variable
    props?.HandleAdd( formData );
    props?.HandleFalse();
    console.log( "DATTAÂ111111:", formData );
  };

  useEffect( () => {
    console.log( "DATTAÂ:", subjectChoices );
  } );

  return (
    <div className="relative p-4 pr-10 rounded-[10px]  h-fit w-full bg-white flex flex-col items-start justify-center gap-y-3">
      <div className="w-full flex items-center justify-center">
        <p className="mt-4 text-3xl font-baloo2 font-bold mb-5">
          Tạo bộ câu hỏi mới
        </p>
      </div>
      <div className=" w-full z-20 flex flex-row items-center gap-4">
        <span className="text-red-500 text-xs">*</span>

        <div className="flex w-full justify-between">
          <span className="font-baloo2 font-thin">Khối:</span>
          <DropDown
            className="py-0"
            data={ grades }
            onSelected={ ( value ) =>
              setTimeout( () => handleInputChange( "Grade", value?.value ), 100 )
            }
          />
        </div>
      </div>
      {/* Môn học (Subject) */ }
      <div className="z-10 flex flex-row w-full items-center justify-center gap-4">
        <span className="text-red-500 text-xs">*</span>

        <div className="flex w-full justify-between">
          <span className="font-baloo2 font-thin">Môn học:</span>
          <DropDown
            className="py-0"
            data={ formData.Grade > 5 ? subjects : subjectsC1 }
            onSelected={ ( value ) => {
              handleInputChange( "Subject", value?.value );
            } }
          />
        </div>
      </div>
      {/* Chọn đề (Choose Exam) */ }
      <div className="flex w-full flex-row items-center justify-center gap-4">
        <span className="text-red-500 text-xs">*</span>
        <div className="flex w-full justify-between">
          <span className="font-baloo2 font-thin">Chọn bộ câu hỏi:</span>
          <div className="ml-4 w-fit flex flex-col items-center">
            <input
              type="file"
              accept=".pdf, .doc, .docx" // Define accepted file types
              className="hidden"
              id="file-input"
              onChange={ handleFileChange }
            />
            <label
              htmlFor="file-input"
              className="flex flex-row text-text_form items-center font-inter font-thin gap-4 cursor-pointer w-full"
            >
              <img src={ UpLoad } className="w-7 h-7" alt="Upload Icon" />
              { fileLabel }
            </label>
            <div className="border-[0.5px] border-text_form w-full"></div>
          </div>
        </div>
      </div>
      {/* Tên bộ đề (Topic Name) */ }
      <div className="z-0 flex flex-row w-full items-center gap-4">
        <span className="text-red-500 text-xs">*</span>
        <div className="w-full flex flex-row justify-between">
          <span className="font-baloo2 font-thin">Tên bộ câu hỏi:</span>
          <div className=" w-[70%]">
            <input
              className="BalooBhai2Semibold appearance-none block w-full  text-text_form border border-gray-200  rounded-[30px] py-2 px-3  bg-white"
              id="grid-name"
              type="text"
              placeholder="Nhập tên bộ câu hỏi..."
              required
              onChange={ ( e ) => handleInputChange( "Name", e.target.value ) }
            />
          </div>
        </div>
      </div>
      {/* Mô tả (Additional Description) */ }
      <div className="z-0 flex flex-row w-full items-center justify-center gap-4">
        <span className="text-white text-xs">*</span>
        <div className="flex w-full flex-row justify-between">
          <span className="font-baloo2 font-thin">Thêm mô tả:</span>
          <div className=" w-[70%] h-[30%]">
            <textarea
              className="BalooBhai2Semibold appearance-none block w-full text-text_form border border-gray-200 rounded-[20px] py-2 px-3 bg-white"
              id="additional-description"
              placeholder="Nhập mô tả thêm..."
              required
              onChange={ ( e ) => handleInputChange( "Description", e.target.value ) }
            />
          </div>
        </div>
      </div>
      <div>
        <span className="font-baloo2 font-thin text-red-500">Lưu ý: </span>
        <a
          href="https://onedrive.live.com/edit?id=FB17707CE61689EB!100611&resid=FB17707CE61689EB!100611&ithint=file%2cdocx&authkey=!AHuz-SP3LKmmtEQ&wdo=2&cid=fb17707ce61689eb"
          target="_blank"
          rel="noopener noreferrer"
          className=" "
        >
          <span className="font-baloo2 font-thin text-blue_base underline">
            Format tải bộ câu hỏi lên EXAGEN.docx
          </span>
        </a>
      </div>
      {/* Confirm and Cancel Buttons */ }
      <div className="mt-10 flex flex-row gap-4 w-full items-end justify-end ">
        <div
          className="text-blue_base font-baloo2 font-thin text-[28px] cursor-pointer"
          onClick={ handleConfirm }
        >
          XÁC NHẬN
        </div>
        <div
          className="text-blue_base font-baloo2 font-thin text-[28px] cursor-pointer "
          onClick={ props?.HandleFalse }
        >
          HUỶ
        </div>
      </div>
    </div>
  );
};
