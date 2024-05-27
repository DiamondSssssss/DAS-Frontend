// @ts-nocheck
import CustomModal from "components/CustomModal";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "components/FormInput";
import { requiredError } from "constant";
import Button from "components/Button";
import BasicSelect from "components/CustomSelect";
import { useNavigate } from "react-router-dom";
import { PATH } from "./../../routes/constants";
import {
  MATRIX_CASE,
  gradeChoices,
  subjectChoices,
  subjectChoicesC1,
} from "constant/selectOptions";
import { gradeFormat, subjectFormat } from "utils/FieldFormat";
import { isEmptyObject } from "utils";
import { useSelector } from "react-redux";
import { ClassService } from "services/ClassService";

const TestForm = ( { onClose, open, data = {} } ) => {
  const navigate = useNavigate();
  const [ matrixCase, setMatrixCase ] = useState( MATRIX_CASE.BOTH );
  const [ questionSetId, setQuestionSetId ] = useState( null );
  const [ numberQuestion, setNumberQuestion ] = useState( 0 );
  const [ classChoices, setClassChoices ] = useState( [] );
  const [ grade, setGrade ] = useState( 0 );
  const [ className, setClassName ] = useState( "" );

  const [ defaultSubject, setDefaultSubject ] = useState( 0 );
  const [ defaultClassName, setDefaultClassName ] = useState( "" );

  // @ts-ignore
  const { entities, error, loading } = useSelector( ( state ) => state.class );

  const schema = yup.object().shape( {
    classId: yup.string().required( requiredError ),
    time: yup.number()
      .positive( "Thời gian làm bài phải lớn hơn 0" )
      .max( 180, "Thời gian làm bài phải nhỏ hơn 180 phút" )
      .required( requiredError ),
    name: yup.string().required( requiredError ),
    subject: yup.number().required( requiredError ),
  } );

  const method = useForm( {
    mode: "onSubmit",
    resolver: yupResolver( schema ),
  } );

  // @ts-ignore
  const { handleSubmit, setValue, reset, watch } = method;

  // @ts-ignore
  const classId = watch( "classId" );

  const onSubmit = async ( data ) => {
    const grade = classChoices.filter( ( item ) => item.id === data.classId )[ 0 ]
      .grade;

    console.log( "Submit data", data );

    const formData = {
      ...data,
      matrixCase: matrixCase,
      grade: grade,
      questionSetId: questionSetId,
      numberQuestion: numberQuestion,
    };
    navigate( PATH.MATRIX, {
      state: formData,
    } );
  };
  // @ts-ignore
  const classState = useSelector( ( state ) => state.class.entities );

  useEffect( () => {
    setClassChoices(
      entities.map( ( item ) => {
        return {
          id: item.classId,
          name: item.name,
          grade: item.grade,
        };
      } )
    );
    if ( classState.length > 0 ) {
      console.log( "Co" );
    } else {
      console.log( "Deo co" );
    }
    console.log( "Entities", entities );
  }, [] );

  useEffect( () => {
    console.log( "Data", data );
    if ( data ) {
      if ( data.name ) {
        setValue( "className", data.name );
        setDefaultClassName( data.name );
      }
      // @ts-ignore
      if ( data.subject ) {
        // @ts-ignore
        setValue( "subject", data.subject );
        setDefaultSubject( data.subject );
        console.log( subjectFormat( data.subject ) );
      }

      // @ts-ignore
      if ( data.classId ) {
        // @ts-ignore
        setValue( "classId", data.classId );

        const tempClassChoices = entities.map( ( item ) => {
          console.log( "name", item.name );
          return {
            id: item.classId,
            name: item.name,
            grade: item.grade,
          };
        } );

        const updatedGrade = tempClassChoices.filter(
          ( item ) => item.id === data.classId
        )[ 0 ].grade;
        // const updatedClassName = tempClassChoices.filter(
        //   (item) => item.id === data.classId
        // )[0].name;

        // setClassName(updatedClassName);
        setGrade( updatedGrade );
      }
      // @ts-ignore
      if ( data.questionSetId ) {
        // @ts-ignore
        setQuestionSetId( ( prev ) => data.questionSetId );
      }
      // @ts-ignore
      if ( data.numberQuestion ) {
        // @ts-ignore
        setNumberQuestion( ( prev ) => data.numberQuestion );
      }
      // @ts-ignore
      if ( data.both === true ) {
        setMatrixCase( ( prev ) => MATRIX_CASE.BOTH );
      }
      // @ts-ignore
      if ( data.both === false ) {
        setMatrixCase( ( prev ) => MATRIX_CASE.CHCN );
      }
      // @ts-ignore
      if ( data.matrixCase ) {
        // @ts-ignore
        setMatrixCase( ( prev ) => data.matrixCase );
      }
    }
  }, [ data ] );

  useEffect( () => {
    if ( classChoices.length > 0 && classId ) {
      const updatedGrade = classChoices.filter( ( item ) => item.id === classId )[ 0 ]
        .grade;
      setGrade( updatedGrade );
    }
  }, [ classId ] );

  return (
    //
    <>
      { classState.length > 0 ? (
        <CustomModal header="Tạo cuộc thi mới" open={ open } onClose={ onClose }>
          <FormProvider { ...method }>
            <form
              className="flex flex-col gap-2"
              onSubmit={ handleSubmit( onSubmit ) }
            >
              <BasicSelect
                label={ "Chọn lớp" }
                name={ "classId" }
                choices={ classChoices }
                value={ data.classId }
                format={ ( value ) => value.name }
              />
              <BasicSelect
                label={ "Môn học" }
                name={ "subject" }
                choices={ grade > 5 ? subjectChoices : subjectChoicesC1 }
                value={ defaultSubject }
                format={ ( value ) => subjectFormat( value ) }
              />
              <FormInput
                type="number"
                label={ "Thời gian làm bài" }
                name={ "time" }
                control={ "time" }
              />
              <FormInput label={ "Tên bài thi" } name={ "name" } />

              <div className="flex flex-row-reverse w-full mt-2">
                <Button
                  className="hover:ring-blue_base	 !font-baloo2 !font-bold"
                  type="submit"
                >
                  Xác nhận
                </Button>
              </div>
            </form>
          </FormProvider>
        </CustomModal>
      ) : (
        <CustomModal
          open={ open }
          onClose={ onClose }
          header="Xin hãy tạo lớp học trước khi tạo đề"
        />
      ) }
    </>
  );
};

export default TestForm;
