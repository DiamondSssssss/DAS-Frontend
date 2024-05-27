import React, { useState } from "react";
import { useEffect } from "react";
import Button from "components/Button";
import { PATH } from "routes/constants";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateBreadCrumb } from "redux/appSlice";
import CustomInput from "components/CustomInput";
import IconAdd from "asset/icon add.svg";

const AnswerSample = () => {
  const location = useLocation();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleDownload = () => {
    console.log("download");
  };

  useEffect(() => {
    if (location.state) {
      let root = "/" + location.pathname.split("/")[1];
      setData(location.state);
      dispatch(updateBreadCrumb([root, location.state.name]));
    }
  }, [location]);

  return (
    <div className="relative overflow-auto hide-scrollbar h-full w-full flex flex-col">
      <div className="my-[12px] w-[25%] m-auto flex flex-col gap-2 ">
        {data && (
          <React.Fragment>
            <img
              className="object-contain w-full shadow-card rounded-2xl overflow-hidden"
              src={data.image}
              alt="sample"
            />
            <p className="font-baloo2 font-medium text-[1.4rem] text-center cursor-pointer hover:underline">
              {data.name}
            </p>
            <div className=" absolute top-[10%] right-[10px] text-blue_dark font-medium">
              <Button className="hover:shadow-lg" onClick={handleDownload}>
                <img
                  className="object-contain h-[40px]"
                  src="/icons/downloadIcon.svg"
                  alt="icon"
                />
                Tải mẫu bài kiểm tra
              </Button>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default AnswerSample;
