// @ts-nocheck
// @ts-nocheck
import React, { useState, useEffect } from "react";
import DropDown from "components/DropDown";
import { ButtonBlue } from "components/ButtonBlue";

import { useNavigate } from "react-router-dom";
import { PATH } from "../routes/constants";
import { useSelector } from "react-redux";
import { subjectChoices } from "constant/selectOptions";
import { gradeChoices } from "constant/selectOptions";
import { useDispatch } from "react-redux";
import { gradeFormat } from "utils/FieldFormat";
import { subjectFormat } from "utils/FieldFormat";
import { setLoading, setSnackbar } from "redux/appSlice";
import { fetchManage } from "redux/manageSlice";
import { ManageService } from "services/ManageService";
import { ElementApproval } from "components/ElementApproval";
import { fetchExamBank } from "redux/ExamBankSlice";
import { fetchrequest } from "redux/requestSlice";



const data3 = [
  { name: "Có phí", value: 0 },
  { name: "Cá nhân", value: 1 },
  { name: "Cộng đồng", value: 2 },
];
const data4 = [
  { name: "Đã duyệt", value: 1 },
  { name: "Chưa duyệt", value: 0 },
  { name: "Tất cả", value: null },
];
const subjects = subjectChoices.map( ( item ) => {
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

export const RequireApprove = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ questionSetId, setquestionSetId ] = useState( "" );
  // @ts-ignore
  const { token } = useSelector( ( state ) => state.user );
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  const defaultYearRef = React.useRef( currentYear );
  const data2 = [ {
    name: `${ currentMonth < 7
      ? `${ defaultYearRef.current - 1 }-${ defaultYearRef.current }`
      : `${ defaultYearRef.current }-${ defaultYearRef.current + 1 }`
      }`,
  },
  {
    name: `${ currentMonth < 7
      ? `${ defaultYearRef.current - 2 }-${ defaultYearRef.current - 1 }`
      : `${ defaultYearRef.current - 1 }-${ defaultYearRef.current }`
      }`,
  },
  {
    name: `${ currentMonth < 7
      ? `${ defaultYearRef.current - 3 }-${ defaultYearRef.current - 2 }`
      : `${ defaultYearRef.current - 2 }-${ defaultYearRef.current - 1 }`
      }`,
  }, ];
  const [ params, setParams ] = useState( {
    studyYear: currentMonth < 7
      ? `${ defaultYearRef.current - 1 }-${ defaultYearRef.current }`
      : `${ defaultYearRef.current }-${ defaultYearRef.current + 1 }`,
    subjectEnum: "",
    grade: "",
    type: "",
    status: "",
  } );

  // @ts-ignore
  const { entities, error, loading } = useSelector( ( state ) => state.request );

  useEffect( () => {
    dispatch( setLoading( loading ) );
  }, [ loading ] );

  useEffect( () => {
    dispatch( fetchrequest( { token, params } ) );
  }, [] )
  const handleFind = ( field, value ) => {
    console.log( field, value )
    setParams( {
      ...params,
      [ field ]: value,
    } );
  };

  const event = ( name, questionSetId, shareId ) => {
    navigate( PATH.REQUIREAPPROVE + `${ "/" + questionSetId }`, {
      state: { name: name, questionSetId: questionSetId, shareId: shareId },
    } );
  };
  console.log( entities )

  return (
    <div className="flex flex-col h-full w-full items-center overflow-hidden">
      <div className="relative flex flex-row items-center w-full h-[10%] p-2 gap-5 ">
        <DropDown
          data={ grades }
          name="Khối"
          onSelected={ ( value ) => handleFind( "grade", value.value ) }
        ></DropDown>
        <DropDown
          data={ subjects }
          name="Môn học"
          onSelected={ ( value ) => handleFind( "subjectEnum", value.value ) }
        ></DropDown>
        <DropDown
          data={ data3 }
          name="Loại"
          onSelected={ ( value ) => handleFind( "type", value.value ) }
        ></DropDown>
        <DropDown
          data={ data4 }
          name="Tất cả"
          onSelected={ ( value ) => handleFind( "status", value.value ) }
        ></DropDown>

        <DropDown
          data={ data2 }
          name={
            currentMonth < 7
              ? `${ defaultYearRef.current - 1 }-${ defaultYearRef.current }`
              : `${ defaultYearRef.current }-${ defaultYearRef.current + 1 }`
          }
          onSelected={ ( value ) => handleFind( "studyYear", value.name ) }
        ></DropDown>
        <ButtonBlue
          onClick={ () => {
            dispatch( fetchrequest( { token, params } ) );
          } }
          className="mt-1 rounded-[20px] h-fit w-fit py-1 px-5 border-[2px] bg-blue_base text-white font-bold font-inter"
        >
          Tìm kiếm
        </ButtonBlue>
      </div>
      <div className="mb-3 shadow-md px-8 bg-blue_base w-full h-fit flex flex-row bg-opacity-[75%] rounded-[10px] py-2 gap-5 ">
        <div className="ml-11 w-[25%] text-white font-semibold font-inter">
          Danh sách phê duyệt
        </div>
        <div className="ml-10 w-[10%] text-white font-semibold font-inter">
          Môn học
        </div>
        <div className=" w-[10%] text-white font-semibold font-inter">
          Giá bán
        </div>
        <div className=" w-[30%] text-white font-semibold font-inter">
          Người yêu cầu xét duyệt
        </div>
      </div>
      <div className="h-[100%] w-full gap-y-4 flex flex-col overflow-y-auto ">
        {/* {new Array(20).fill({}).map((prop, index) => (
          <React.Fragment key={index}>
            <ElementApproval event={event}></ElementApproval>
          </React.Fragment>
        ))} */}

        { entities.map( ( value, index ) => (
          <React.Fragment key={ index }>
            <ElementApproval
              event={ () => {
                event(
                  value.nameOfQuestionSet,
                  value.questionSetId,
                  value.shareId
                );
              } }
              NameRequireApprove={ value.nameOfRequester }
              name={ value.nameOfQuestionSet }
              questionSetId={ value.questionSetId }
              nameOfSubject={ value.nameOfSubject }
              status={ value.status }
              price={ value.price }
            ></ElementApproval>
          </React.Fragment>
        ) ) }
      </div>
    </div>
  );
};
