import CustomTable from "components/CustomTable";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "routes/constants";
import { useState } from "react";
import { ButtonBlue } from "components/ButtonBlue";
import { fetchSchools } from "redux/schoolSlice";
import IconAdd from "asset/icon add.svg";
import DropDown from "components/DropDown";
import CustomInput from "components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setSnackbar } from "redux/appSlice";
import { Badge } from "flowbite-react";
import { useMemo } from "react";
import { fetchTransactions } from "redux/transactionSlice";
import {
  dateFormat,
  dateHourFormat,
  transactionTypeFormat,
} from "utils/dataFormat";

const TransactionHistoryPage = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const { token } = useSelector((state) => state.user);

  const { entities, error, loading } = useSelector(
    // @ts-ignore
    (state) => state.transaction
  );

  const columns = useMemo(
    () => [
      {
        name: "Loại giao dịch",
        field: "type",
        formatValue: (value) => (
          <span className=" font-bold text-blue_dark">
            {transactionTypeFormat(value)}
          </span>
        ),
        width: "30%",
      },
      {
        name: "Số lượng",
        field: "pointValue",
        formatValue: (value) => <Badge color="white">{value}</Badge>,
        width: "10%",
      },
      {
        name: "Mã giao dịch",
        field: "transactionCode",
        formatValue: (value) => <Badge color="white">{value}</Badge>,
        width: "30%",
      },
      {
        name: "Ngày thực hiện",
        field: "createdOn",
        formatValue: (value) => (
          <Badge color="white">{dateHourFormat(value)}</Badge>
        ),
        width: "30%",
      },
      // {
      //   name: "Xóa",
      //   // onclick: handleDeleteClass,
      //   type: "button",
      //   formatValue: (value) => (
      //     <img className="h-[30px] w-[30px]" src="/images/delete.png" />
      //   ),
      //   className: " !font-bold text-blue_base !ring-0",
      // },
    ],
    []
  );

  const navigate = useNavigate();
  const handleRowClick = (item) => {
    console.log("ITEM", item);
    navigate(PATH.SCHOOLS + `/${item.schoolId}`, { state: item });
  };
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  // const loadProvinces = () => {
  //   const provincesList = [];
  //   let i = 0;
  //   if (entities) {
  //     entities.forEach((entity) => {
  //       provincesList.push({ id: i, name: entity.province });
  //       i++;
  //     });
  //   }
  //   console.log("cccc", provincesList);
  //   return provincesList;
  // };

  useEffect(() => {
    dispatch(setLoading(loading));
  }, [loading]);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchTransactions({ token }));
    console.log(entities);
  }, []);
  return (
    <div className="w-full h-full overflow-hidden m-auto flex flex-col gap-4 overflow-auto ">
      <div className="flex-1 overflow-auto hide-scrollbar">
        <CustomTable
          tableName={"transaction"}
          columns={columns}
          data={entities}
        />
      </div>
    </div>
  );
};

export default TransactionHistoryPage;
