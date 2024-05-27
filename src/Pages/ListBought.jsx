// @ts-nocheck
import DropDown from "components/DropDown";

import { AlertComponent } from "components/AlertComponent";
import cart from "../asset/cart.svg";
import Flag from "../asset/Flag.svg";
import { PATH } from "../routes/constants";
import React, { useState, useEffect } from "react";
import { ButtonBlue } from "components/ButtonBlue";
import IconAdd from "../asset/icon add.svg";
import { Card } from "components/Card";
import AddTopic from "components/BackDropAddTopic";

import eye from "../asset/eye.svg";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { subjectChoices } from "constant/selectOptions";
import { gradeChoices } from "constant/selectOptions";
import { useDispatch } from "react-redux";
import { gradeFormat } from "utils/FieldFormat";
import { subjectFormat } from "utils/FieldFormat";
import { setLoading, setSnackbar } from "redux/appSlice";
import { fetchListBought } from "redux/listBoughtSlice";

const data3 = [ { name: "Có phí" }, { name: "Không phí" } ];
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

export const ListBought = () => {
  const { token } = useSelector( ( state ) => state.user );
  const { entities, error, loading } = useSelector( ( state ) => state.listBought );
  const dispatch = useDispatch();
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  const defaultYearRef = React.useRef( currentYear );
  const data2 = [
    {
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
    },
  ];
  const [ params, setParams ] = useState( {
    studyYear: `${ currentMonth < 7
      ? `${ defaultYearRef.current - 1 }-${ defaultYearRef.current }`
      : `${ defaultYearRef.current }-${ defaultYearRef.current + 1 }`
      }`,
    subject: "",
    grade: "",
    type: "",
  } );
  const navigate = useNavigate();

  const dataButton = ( questionSetId, name ) => [
    {
      name: "Xem bộ câu hỏi",
      url: eye,
      event: () => {
        navigate( PATH.LISTBOUGHT + `${ "/" + questionSetId }`, {
          state: { name: name, questionSetId: questionSetId },
        } );
      },
    },
  ];

  useEffect( () => {
    dispatch( setLoading( loading ) );
  }, [ loading ] );
  //fetch data
  useEffect( () => {
    dispatch( fetchListBought( { token, params } ) );
  }, [] );

  const handleFind = ( field, value ) => {
    setParams( {
      ...params,
      [ field ]: value,
    } );
  };

  return (
    <>
      <div className="flex flex-col h-full w-full items-center overflow-hidden">
        <div className="relative ml-[5%] flex flex-row items-center w-full h-[10%] p-2 gap-7 ">
          <DropDown
            data={ grades }
            name="Khối"
            onSelected={ ( value ) => handleFind( "grade", value?.value ) }
          ></DropDown>
          <DropDown
            data={ subjects }
            name="Môn học"
            onSelected={ ( value ) => handleFind( "subject", value?.value ) }
          ></DropDown>
          <DropDown
            data={ data2 }
            ref={ defaultYearRef }
            name={
              currentMonth < 7
                ? `${ defaultYearRef.current - 1 }-${ defaultYearRef.current }`
                : `${ defaultYearRef.current }-${ defaultYearRef.current + 1 }`
            }
            onSelected={ ( value ) => handleFind( "studyYear", value?.name ) }
          ></DropDown>

          <ButtonBlue
            className="mt-1 rounded-[20px] h-fit w-fit py-1 px-5 border-[2px] bg-blue_base text-white font-bold font-inter"
            onClick={ () => {
              dispatch( fetchListBought( { token, params } ) );
            } }
          >
            Tìm kiếm
          </ButtonBlue>
        </div>
        <div className="h-[100%] w-full grid grid-cols-3 gap-x-12 gap-y-[43px] overflow-y-auto no-scrollbar px-4">
          {/* {new Array(8).fill({}).map((value, index) => (
            <React.Fragment key={index}>
              <Card
                price={1000}
                questionSetId={value.questionSetId}
                dataButton={dataButton(value.questionSetId, value.name)}
              />
            </React.Fragment>
          ))} */}
          { entities.map( ( value, index ) => (
            <React.Fragment key={ index }>
              <Card
                name={ value.nameOfQuestionSet }
                dataButton={ dataButton( value.questionSetId, value.name ) }
                questionSetId={ value.questionSetId }
                sellPrice={ value.price }
              />
            </React.Fragment>
          ) ) }
        </div>
      </div>
    </>
  );
};
