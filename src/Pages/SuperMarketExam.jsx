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
import { fetchSupermarket } from "redux/supermarketSlice";
import { SuperMarketService } from "services/SuperMarketService";
import { fetchProfile } from "redux/meSlice";

const data3 = [
  { name: "Có phí", value: 0 },
  { name: "Cá nhân", value: 1 },
  { name: "Cộng đồng", value: 2 },
];
const subjects = subjectChoices.map((item) => {
  return {
    name: subjectFormat(item),
    value: item,
  };
});
const grades = gradeChoices.map((item) => {
  return {
    name: gradeFormat(item),
    value: item,
  };
});

export const SuperMarketExam = () => {
  const { token } = useSelector((state) => state.user);
  const { entities, error, loading } = useSelector(
    (state) => state.superMarket
  );
  console.log(entities);
  const dispatch = useDispatch();
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  const defaultYearRef = React.useRef(currentYear);
  const data2 = [
    {
      name: `${currentMonth < 7
        ? `${defaultYearRef.current - 1}-${defaultYearRef.current}`
        : `${defaultYearRef.current}-${defaultYearRef.current + 1}`
        }`,
    },
    {
      name: `${currentMonth < 7
        ? `${defaultYearRef.current - 2}-${defaultYearRef.current - 1}`
        : `${defaultYearRef.current - 1}-${defaultYearRef.current}`
        }`,
    },
    {
      name: `${currentMonth < 7
        ? `${defaultYearRef.current - 3}-${defaultYearRef.current - 2}`
        : `${defaultYearRef.current - 2}-${defaultYearRef.current - 1}`
        }`,
    },
  ];
  const [params, setParams] = useState({
    studyYear: `${currentMonth < 7
      ? `${defaultYearRef.current - 1}-${defaultYearRef.current}`
      : `${defaultYearRef.current}-${defaultYearRef.current + 1}`
      }`,
    subjectEnum: "",
    grade: "",
  });
  console.log(params);
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  const [price, setPrice] = useState(0);
  const [shareId, setShareId] = useState("");
  const [note, setNote] = useState("");
  const HandleFalse = () => {
    setState(false);
  };

  const [stateBuy, setStateBuy] = useState(false);
  const HandleTrueBuy = (price) => {
    setStateBuy(true);
    setPrice(price);
  };
  const HandleFalseBuy = () => {
    setStateBuy(false);
  };

  const [stateReport, setStateReport] = useState(false);
  const HandleTrueReport = () => {
    setStateReport(true);
  };
  const HandleFalseReport = () => {
    setStateReport(false);
  };

  const dataButton = (questionSetId, name, price, shareId) => [
    {
      name: "Xem bộ câu hỏi",
      url: eye,
      event: () => {
        navigate(PATH.SUPERMARKETEXAMALL + `${"/" + questionSetId}`, {
          state: { name: name, questionSetId: questionSetId, price: price, shareId: shareId },
        });
      },
    },
    {
      name: "Mua bộ câu hỏi",
      url: cart,
      event: () => {
        HandleTrueBuy(price);
        setShareId(shareId);
      },
    },

    {
      name: "Báo cáo",
      url: Flag,
      event: HandleTrueReport,
    },
  ];

  useEffect(() => {
    dispatch(setLoading(loading));
  }, [loading]);
  useEffect(() => {
    dispatch(fetchSupermarket({ token, params }));
  }, []);
  const handleFind = (field, value) => {
    setParams({
      ...params,
      [field]: value,
    });
  };

  const HandleAcceptBuy = async () => {
    try {
      const data = {
        shareId: shareId,
      };

      const dataResponse = await SuperMarketService.buy(data, token);
      console.log(dataResponse);
      dispatch(fetchSupermarket({ token, params }));
      dispatch(fetchProfile({ token }));
      dispatch(setSnackbar({ color: "green", message: "Mua thành công" }));
    } catch (error) {
      console.log(error);
      dispatch(setSnackbar({ color: "red", message: error.message }));
    }
    HandleFalseBuy();
  };

  const HandleAcceptReport = async () => {
    try {
      const data = {
        note: note,
      };

      const dataResponse = SuperMarketService.report(shareId, data, token);
      dispatch(setSnackbar({ color: "green", message: "Thêm thành công" }));
    } catch (error) {
      dispatch(setSnackbar({ color: "red", message: error.message }));
    }
    HandleFalseReport();
  };

  return (
    <>
      {stateBuy && (
        <AlertComponent
          HandleEvent={HandleAcceptBuy}
          HandleFalse={HandleFalseBuy}
          title="Bạn có chắc muốn mua bộ câu hỏi?"
          messages={`Bạn có chắc rằng mình muốn trả ${price} xu này để mua bộ câu hỏi`}
        ></AlertComponent>
      )}
      {stateReport && (
        <AlertComponent
          HandleFalse={HandleFalseReport}
          HandleEvent={HandleAcceptReport}
          title="Bạn có chắc muốn báo cáo bộ câu hỏi này?"
          messages="Bạn có chắc lý do mình báo cáo bộ câu hỏi này"
        >
          <input
            type="text"
            className="w-full h-fit border-[0px] border-b-[1px] rounded-md border-blue_base"
            value={note} // Bind the value of the input to the state
            onChange={(e) => setNote(e.target.value)} // Update the note state on change
          />
        </AlertComponent>
      )}
      <div className="flex flex-col h-full w-full items-center overflow-hidden">
        <div className="relative ml-[5%] flex flex-row items-center w-full h-[10%] p-2 gap-7 ">
          <DropDown
            data={grades}
            name="Khối"
            onSelected={(value) => handleFind("grade", value.value)}
          ></DropDown>
          <DropDown
            data={subjects}
            name="Môn học"
            onSelected={(value) => handleFind("subjectEnum", value.value)}
          ></DropDown>
          <DropDown
            data={data3}
            name="Loại"
            onSelected={(value) => handleFind("type", value.value)}
          ></DropDown>
          <DropDown
            data={data2}
            ref={defaultYearRef}
            name={
              currentMonth < 7
                ? `${defaultYearRef.current - 1}-${defaultYearRef.current}`
                : `${defaultYearRef.current}-${defaultYearRef.current + 1}`
            }
            onSelected={(value) => handleFind("studyYear", value.name)}
          ></DropDown>

          <ButtonBlue
            className="mt-1 rounded-[20px] h-fit w-fit py-1 px-5 border-[2px] bg-blue_base text-white font-bold font-inter"
            onClick={() => {
              dispatch(fetchSupermarket({ token, params }));
            }}
          >
            Tìm kiếm
          </ButtonBlue>
        </div>
        <div className="h-full w-full grid grid-cols-3 gap-x-12 gap-y-[43px] overflow-y-auto no-scrollbar px-4">
          {/* {new Array(8).fill({}).map((value, index) => (
            <React.Fragment key={index}>
              <Card
                price={1000}
                questionSetId={value.questionSetId}
                dataButton={dataButton(value.questionSetId, value.name)}
              />
            </React.Fragment>
          ))} */}
          {entities.map((value, index) => (
            <React.Fragment key={index}>
              <Card
                name={value.nameOfQuestionSet}
                dataButton={dataButton(
                  value.questionSetId,
                  value.name,
                  value.price,
                  value.shareId
                )}
                questionSetId={value.questionSetId}
                price={value.price}
                seller={value.nameOfSeller}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
