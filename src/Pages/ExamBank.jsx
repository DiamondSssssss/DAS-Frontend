// @ts-nocheck
import React, { useState, useEffect } from "react";
import DropDown from "components/DropDown";
import { ButtonBlue } from "components/ButtonBlue";
import IconAdd from "../asset/icon add.svg";
import { Card } from "components/Card";
import AddTopic from "components/BackDropAddTopic";
import { AlertComponent } from "components/AlertComponent";
import eye from "../asset/eye.svg";
import trash from "../asset/trash.svg";
import iconAdd from "../asset/icon add.svg";
import { useNavigate } from "react-router-dom";
import { PATH } from "../routes/constants";
import { useSelector } from "react-redux";
import { subjectChoices } from "constant/selectOptions";
import { gradeChoices } from "constant/selectOptions";
import { useDispatch } from "react-redux";
import { gradeFormat } from "utils/FieldFormat";
import { subjectFormat } from "utils/FieldFormat";
import { setLoading, setSnackbar } from "redux/appSlice";

import { ManageService } from "services/ManageService";
import { fetchExamBank } from "redux/ExamBankSlice";
import { fetchManage } from "redux/manageSlice";
import TestForm from "./TestPage/TestForm";
import OptionsForm from "./ManageExam/OptionsForm";

// const data2 = [{ name: "2024" }, { name: "2023" }, { name: "2022" }];

// const data3 = [
//   { name: "Có phí", value: 0 },
//   { name: "Cá nhân", value: 1 },
//   { name: "Cộng đồng", value: 2 },
// ];
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

export const ExamBank = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ value, setValue ] = useState();
  const [ questionSetId, setquestionSetId ] = useState( "" );

  const [ openTest, setOpenTest ] = useState( false );
  const [ openOptions, setOpenOptions ] = useState( false );

  const handleOpenTest = () => {
    setOpenTest( true );
  };
  const handleCloseTest = () => {
    setOpenTest( false );
  };
  const handleOpenOptions = () => {
    setOpenOptions( true );
  };
  const handleCloseOptions = () => {
    setOpenOptions( false );
  };

  // @ts-ignore
  const { token } = useSelector( ( state ) => state.user );
  // @ts-ignore
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
    type: 2,
  } );

  // @ts-ignore
  const { entities, error, loading } = useSelector( ( state ) => state.examBank );
  const [ state, setState ] = useState( false );
  const [ testFormData, setTestFormData ] = useState( {} );

  const HandleFalse = () => {
    // navigate(PATH.MANAGEEXAM);
    setState( false );
  };

  const [ stateDelete, setStateDelete ] = useState( false );
  const HandleTrueDelete = () => {
    setStateDelete( true );
  };
  const HandleFalseDelete = () => {
    setStateDelete( false );
  };

  const dataButton = ( questionSetId, name ) => [
    {
      name: "Xem bộ câu hỏi",
      url: eye,
      event: () => {
        navigate( PATH.EXAMBANK + `${ "/" + questionSetId }`, {
          state: { name: name, questionSetId: questionSetId },
        } );
      },
    },

    {
      name: "Xoá Bộ câu hỏi",
      url: trash,
      event: () => {
        HandleTrueDelete();
        setValue( value );
      },
    },
  ];

  const handleAddExam = async ( data ) => {
    console.log( "Add ExamBank: ", data );
    try {
      const dataResponse = await ManageService.create( data, token );
      // @ts-ignore
      dispatch( fetchManage( { token } ) );
      // dispatch(fetchExamBank({ token, params }));
      dispatch( setSnackbar( { color: "green", message: "Thêm thành công" } ) );
      navigate( PATH.EXAMBANK + `${ "/" + "temp" }`, {
        state: { dataResponse: { ...dataResponse, Subject: data.Subject } },
      } );
    } catch ( error ) {
      console.log( "error: ", error )
      dispatch( setSnackbar( { color: "red", message: "Thêm bộ câu hỏi thất bại" } ) );
    }
  };

  const handleDeleteExam = async ( questionSetId ) => {
    try {
      await ManageService.delete( questionSetId, token );

      // @ts-ignore
      dispatch( fetchManage( { token } ) );
      dispatch(
        setSnackbar( { color: "green", message: "Xóa thành công" } )
      );
    } catch ( error ) {
      dispatch( setSnackbar( { color: "red", message: error.message } ) );
    }
    HandleFalseDelete();
  };

  useEffect( () => {
    dispatch( setLoading( loading ) );
  }, [ loading ] );
  const handleFind = ( field, value ) => {
    setParams( {
      ...params,
      [ field ]: value,
    } );
  };

  useEffect( () => {
    // @ts-ignore
    dispatch( fetchExamBank( { token, params } ) );
    console.log( "entitiesentitiesentitiesentities: ", entities );
  }, [] );

  return (
    <>
      { state == true && (
        <AddTopic HandleFalse={ HandleFalse } HandleAdd={ handleAddExam } />
      ) }
      { stateDelete && (
        <AlertComponent
          HandleFalse={ HandleFalseDelete }
          HandleEvent={ () => {
            handleDeleteExam( questionSetId );
          } }
          title="Bạn có chắc muốn xoá?"
          messages="Bạn có chắc rằng mình muốn xoá toàn bộ câu hỏi này"
        ></AlertComponent>
      ) }

      <div className="flex flex-col h-full w-full items-center overflow-hidden">
        <div className="relative ml-[5%] flex flex-row items-center w-full h-[10%] p-2 gap-7 ">
          <DropDown
            data={ grades }
            name="Khối"
            onSelected={ ( value ) => handleFind( "grade", value.value ) }
          ></DropDown>
          <DropDown
            data={ subjects }
            name="Môn học"
            onSelected={ ( value ) => handleFind( "subject", value.value ) }
          ></DropDown>
          <DropDown
            data={ data2 }
            ref={ defaultYearRef }
            name={
              currentMonth < 7
                ? `${ defaultYearRef.current - 1 }-${ defaultYearRef.current }`
                : `${ defaultYearRef.current }-${ defaultYearRef.current + 1 }`
            }
            onSelected={ ( value ) => handleFind( "studyYear", value.name ) }
          ></DropDown>
          {/* <DropDown data={data3} name="Loại"></DropDown> */ }

          <ButtonBlue
            className="mt-1 rounded-[20px] h-fit w-fit py-1 px-5 border-[2px] bg-blue_base text-white font-bold font-inter"
            onClick={ () => {
              dispatch( fetchExamBank( { token, params } ) );
            } }
          >
            Tìm kiếm
          </ButtonBlue>
          <button
            className="right-[9%] absolute h-fit w-fit px-4 py-1 pl-7 bg-white text-blue_dark rounded-[25px] shadow-2xl font-semibold font-baloo2"
            onClick={ () => {
              setState( true );
            } }
          >
            <div className="absolute top-1/2 -translate-y-1/2 pr-2 left-2 ">
              <img className="h-4 w-4 " src={ IconAdd } />
            </div>
            Tạo bộ câu hỏi mới
          </button>
        </div>
        <div className="h-[100%] w-[85%] grid grid-cols-3 gap-x-12 gap-y-[43px]  overflow-y-auto no-scrollbar px-4">
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
                name={ value.name }
                dataButton={ dataButton( value.questionSetId, value.name ) }
                questionSetId={ value.questionSetId }
              />
            </React.Fragment>
          ) ) }
        </div>
        <TestForm
          onClose={ handleCloseTest }
          open={ openTest }
          data={ testFormData }
        />
        <OptionsForm
          onClose={ handleCloseOptions }
          open={ openOptions }
          data={ value }
          setTestFormData={ setTestFormData }
          openTestForm={ handleOpenTest }
        />
      </div>
    </>
  );
};
