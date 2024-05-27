// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

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
import { SuperMarketService } from "services/SuperMarketService";
import { AlertComponent } from "components/AlertComponent";

export const RequireApproveDetails = () => {
  const handle = () => { };
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.user);
  const [data, setData] = useState([]);
  const [id, setShareId] = useState("");
  const [stateAccept, setStateAccept] = useState(false);
  const HandleTrueAccept = (price) => {
    setStateAccept(true);
  };
  const HandleFalseAccept = () => {
    setStateAccept(false);
  };

  // @ts-ignore
  const { entities, error, loading } = useSelector(
    (state) => state.manageDetails
  );
  const [stateReport, setStateReport] = useState(false);
  const [note, setNote] = useState("");
  const HandleTrueReport = () => {
    setStateReport(true);
  };
  const HandleFalseReport = () => {
    setStateReport(false);
  };
  useEffect(() => {
    if (location.state?.questionSetId) {
      let root = "/" + location.pathname.split("/")[1];
      dispatch(updateBreadCrumb([root, location.state.name]));
      const questionSetId = location.state.questionSetId;
      setShareId(location.state.shareId);
      dispatch(fetchManageDetails({ token, questionSetId }));
    }
  }, [location]);

  useEffect(() => {
    setTimeout(() => {
      setData(entities);
    }, 500);
  }, [entities]);

  const handleResponse = async (accept, note) => {
    try {
      // Assuming updatedQuestions is an array of questions and sectionId is the new sectionId
      const data = {
        isAccept: accept,
        note: note,
      };

      await SuperMarketService.response(id, data, token);
      // @ts-ignore

      dispatch(setSnackbar({ color: "green", message: "Lưu thành công" }));

      navigate(PATH.REQUIREAPPROVE);
    } catch (error) {
      dispatch(setSnackbar({ color: "red", message: error.message }));
    }
  };

  const handleChange = (index, difficulty) => {
    const updatedQuestions = [...data.questions];
    updatedQuestions[index] = {
      ...updatedQuestions[index],
      difficulty: difficulty,
    };
    setData({ ...data, questions: updatedQuestions });
  };

  useEffect(() => {
    dispatch(setLoading(loading));
  }, [loading]);

  return (
    <>
      {stateAccept && (
        <AlertComponent
          HandleEvent={() => {
            handleResponse(true, "ok");
            HandleFalseAccept();
          }}
          HandleFalse={HandleFalseAccept}
          title="Bạn có chắc muốn duyệt bộ câu hỏi này?"
          messages={`Bạn có chắc chắn mình muốn chấp nhận bộ câu hỏi này được bán ra hay không`}
        ></AlertComponent>
      )}
      {stateReport && (
        <AlertComponent
          HandleFalse={HandleFalseReport}
          HandleEvent={() => {
            handleResponse(false, note);
            HandleFalseReport();
          }}
          title="Bạn có chắc muốn từ chối bộ câu hỏi này?"
          messages="Bạn có chắc lý do mình muốn từ chối bộ câu hỏi này"
        >
          <input
            type="text"
            className="w-full h-fit border-[0px] border-b-[1px] rounded-md border-blue_base"
            value={note} // Bind the value of the input to the state
            onChange={(e) => setNote(e.target.value)} // Update the note state on change
          />
        </AlertComponent>
      )}
      <div className="h-[90%] w-full flex flex-row">
        <div className="px-[50px] rounded-ss-[10px] rounded-bl-[10px] mt-4 h-full w-[70%] flex flex-col bg-white overflow-y-auto ">
          {data?.questions?.map((entity, index) => (
            <React.Fragment key={index}>
              <QuestionComponent
                data={entity}
                index={index}
                handleChange={handleChange}
              ></QuestionComponent>
            </React.Fragment>
          ))}
        </div>
        <div className="relative h-full w-[30%] flex flex-col ">
          <InfoDetail
            description={entities?.description}
            price={entities?.price}
            grade={entities?.grade}
          />

          <div
            className="absolute bottom-4 flex flex-col items-center w-full justify-center gap-5
"
          >
            <ButtonBlue
              onClick={() => {
                HandleTrueAccept();
              }}
              className={`cursor-pointer rounded-[20px] py-2   border-[1px] font-inter font-bold  right-3 h-fit w-[80%]   text-center ${"border-green_state text-green_state bg-green_accept_background"} `}
            >
              Phê duyệt bộ câu hỏi này
            </ButtonBlue>
            <ButtonBlue
              onClick={() => {
                HandleTrueReport();
              }}
              className=" cursor-pointer rounded-[20px] py-2  border-red_state border-[1px] text-red_state font-inter font-bold  right-3 h-fit w-[80%] bg-red_reject_background text-center "
            >
              Từ chối bộ câu hỏi này
            </ButtonBlue>
          </div>
        </div>
      </div>
    </>
  );
};
