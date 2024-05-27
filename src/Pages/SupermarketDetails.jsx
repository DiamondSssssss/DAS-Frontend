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
import { SuperMarketService } from "services/SuperMarketService";
import { fetchSupermarket } from "redux/supermarketSlice";
import { fetchProfile } from "redux/meSlice";
import { AlertComponent } from "components/AlertComponent";

export const SupermarketDetails = () => {
  const handle = () => { };
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.user);
  const [data, setData] = useState([]);
  const [stateBuy, setStateBuy] = useState(false);
  // @ts-ignore
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  const defaultYearRef = React.useRef(currentYear);
  const [params, setParams] = useState({
    studyYear: `${currentMonth < 7
      ? `${defaultYearRef.current - 1}-${defaultYearRef.current}`
      : `${defaultYearRef.current}-${defaultYearRef.current + 1}`
      }`,
    subjectEnum: "",
    grade: "",
  });
  const { entities, error, loading } = useSelector(
    (state) => state.manageDetails
  );
  console.log(entities);

  const HandleAcceptBuy = async () => {
    try {
      const data = {
        shareId: location.state.shareId,
      };

      const dataResponse = await SuperMarketService.buy(data, token);
      console.log(dataResponse);
      dispatch(fetchSupermarket({ token, params }));
      dispatch(fetchProfile({ token }));
      dispatch(setSnackbar({ color: "green", message: "Mua thành công" }));
      navigate(PATH.SUPERMARKETEXAM, { replace: true });
    } catch (error) {
      console.log(error);
      dispatch(setSnackbar({ color: "red", message: error.message }));
    }
    HandleFalseBuy();
  };
  const HandleFalseBuy = () => {
    setStateBuy(false);
  };

  useEffect(() => {
    if (location.state?.questionSetId) {
      let root = "/" + location.pathname.split("/")[1];
      const testName = entities.name;
      dispatch(updateBreadCrumb([root, testName]));
      console.log(root, location.state.name)
      const questionSetId = location.state.questionSetId;
      dispatch(fetchManageDetails({ token, questionSetId }));
    }

    if (location.state?.dataResponse) {
      setData(location.state.dataResponse);
      const subjectId = location.state.dataResponse.subjectId;
      dispatch(fetchSubjects({ subjectId, token }));
    }
  }, [location]);

  useEffect(() => {
    dispatch(setLoading(loading));
  }, [loading]);

  return (
    <div className="h-[90%] w-full flex flex-row">
      <div className="px-[50px] rounded-ss-[10px] rounded-bl-[10px] mt-4 h-full w-[70%] flex flex-col bg-white overflow-y-auto ">
        {entities?.questions?.map((entity, index) => (
          <React.Fragment key={index}>
            <QuestionComponent data={entity} index={index} />
          </React.Fragment>
        ))}
      </div>
      {stateBuy && (
        <AlertComponent
          HandleEvent={HandleAcceptBuy}
          HandleFalse={HandleFalseBuy}
          title="Bạn có chắc muốn mua bộ câu hỏi?"
          messages={`Bạn có chắc rằng mình muốn trả ${location.state.price} xu này để mua bộ câu hỏi`}
        ></AlertComponent>
      )}
      <div className="h-full w-[30%] flex flex-col">
        <InfoDetail
          description={entities?.description}
          price={entities?.price}
          grade={entities?.grade}
          subjectName={entities?.subjectName}
          numOfQuestion={entities?.numOfQuestion}
        />
        <div className=" flex flex-col items-center gap-3">
          <ButtonBlue
            className={"h-fit w-[80%] py-1 gap-2 flex flex-row items-center border-gray_report border-[2px] rounded-[10px] text-black font-inter font-bold px-4 "}
            onClick={() => { setStateBuy(true) }}
          >
            Mua bộ câu hỏi
          </ButtonBlue>

          <ButtonBlue
            className={
              " bottom-2 w-[80%] right-3 h-fit py-1 gap-2 flex flex-row items-center border-gray_report border-[2px] rounded-[10px] text-gray_report font-inter font-bold px-4 "
            }
          >
            Báo lỗi
            <img className="w-5 h-5" src={Flag}></img>
          </ButtonBlue>
        </div>
      </div>
    </div>
  );
};
