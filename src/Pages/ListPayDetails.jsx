// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { updateBreadCrumb } from "redux/appSlice";
import { QuestionComponent } from "components/QuestionComponent";
import { InfoDetail } from "components/InfoDetail";
import { ButtonBlue } from "components/ButtonBlue";
import Flag from "../asset/Flag.svg";

import { useNavigate } from "react-router-dom";
import { PATH } from "routes/constants";
import { setSnackbar } from "redux/appSlice";
import { setLoading } from "redux/appSlice";
import { ManageService } from "services/ManageService";
import { fetchManageDetails } from "redux/manageDetailSlice";
import { fetchSubjects } from "redux/subjectSlice";

export const ListPayDetails = () => {
  const handle = () => { };
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector( ( state ) => state.user );
  const [ data, setData ] = useState( [] );

  // @ts-ignore
  const { entities, error, loading } = useSelector(
    ( state ) => state.manageDetails
  );

  console.log( entities )

  useEffect( () => {
    if ( location.state?.questionSetId ) {
      let root = "/" + location.pathname.split( "/" )[ 1 ];
      const testName = entities.name;
      dispatch( updateBreadCrumb( [ root, testName ] ) );
      const questionSetId = location.state.questionSetId;
      dispatch( fetchManageDetails( { token, questionSetId } ) );
    }

    if ( location.state?.dataResponse ) {
      setData( location.state.dataResponse );
      const subjectId = location.state.dataResponse.subjectId;
      dispatch( fetchSubjects( { subjectId, token } ) );
    }
  }, [ location ] );

  useEffect( () => {
    dispatch( setLoading( loading ) );
  }, [ loading ] );

  return (
    <div className="h-[90%] w-full flex flex-row">
      <div className="px-[50px] rounded-ss-[10px] rounded-bl-[10px] mt-4 h-full w-[70%] flex flex-col bg-white overflow-y-auto ">
        { entities?.questions?.map( ( entity, index ) => (
          <React.Fragment key={ index }>
            <QuestionComponent data={ entity } index={ index }></QuestionComponent>
          </React.Fragment>
        ) ) }
      </div>
      <div className="relative h-full w-[30%] flex flex-col ">
        <InfoDetail
          description={ entities?.description }
          price={ entities?.price }
          grade={ entities?.grade }
          subjectName={ entities?.subjectName }
          numOfQuestion={ entities?.numOfQuestion }
        />

        <ButtonBlue
          className={
            "absolute bottom-2 right-3 h-fit w-fit py-1 gap-2 flex flex-row items-center border-gray_report border-[2px] rounded-[10px] text-gray_report font-inter font-bold px-4 "
          }
          onClick={ handle }
        >
          Vô hiệu hoá bộ câu hỏi
        </ButtonBlue>
      </div>
    </div>
  );
};
