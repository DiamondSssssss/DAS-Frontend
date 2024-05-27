import React, { useEffect, useState } from "react";
// @ts-ignore
import { InputMatrix, ToolTipInputMatrix } from "./InputMatrix";
import { MATRIX_CASE } from "constant/selectOptions";

const initDifficults = [
  { difficulty: 0, chcn: 0, nhd: 0, use: 0 },
  { difficulty: 1, chcn: 0, nhd: 0, use: 0 },
  { difficulty: 2, chcn: 0, nhd: 0, use: 0 },
  { difficulty: 3, chcn: 0, nhd: 0, use: 0 },
];

// @ts-ignore
const SubjectRow = ({ matrixCase, data, index, update, deleteRow }) => {
  const [difficults, setDifficults] = useState(initDifficults);
  const [sum, setSum] = useState(0);
  const [sumCHCN, setSumCHCN] = useState(0);
  const [sumNHD, setSumNHD] = useState(0);

  const updateDifficulty = (difficulty, type, value) => {
    const newDifficults = [...difficults];
    newDifficults[difficulty][type] = value;
    setDifficults(newDifficults);
    // console.log("Update index", index);
    update(index, newDifficults);
    console.log("newDifficults", newDifficults);
  };

  useEffect(() => {
    const init = initDifficults.map((item, i) => {
      return {
        sectionId: data.sectionId,
        ...item,
        chcn: data.numOfEachDifficulties[i].chcn,
      };
    });
    setDifficults(init);
  }, []);

  useEffect(() => {
    console.log("difficults", difficults);
    const result = difficults.reduce((acc, item) => {
      // console.log("Total result item: ", item);s
      // @ts-ignore
      return parseInt(item?.use) + acc;
    }, 0);
    const resultCHCN = difficults.reduce((acc, item) => {
      // @ts-ignore
      return parseInt(item.chcn) + acc;
    }, 0);
    const resultNHD = difficults.reduce((acc, item) => {
      // @ts-ignore
      return parseInt(item.nhd) + acc;
    }, 0);
    setSumCHCN(resultCHCN);
    setSumNHD(resultNHD);
    setSum(result);
  }, [difficults]);

  return (
    <tr>
      <td className="bg-[#d9d9d9] text-[14px] border-black border-collapse border-[1px]">
        {index + 1}
      </td>
      <td className="bg-[#d9d9d9] text-[14px] border-black border-collapse border-[1px]">
        {data.name}
      </td>
      <td className="bg-[#d9d9d9] text-[14px] border-black border-collapse border-[1px]">
        <button onClick={() => deleteRow(data)} className="text-[14px]">
          xóa
        </button>
      </td>
      {difficults.map((item, i) => (
        <React.Fragment key={i}>
          <td className="text-[14px] border-black border-collapse border-[1px]">
            <ToolTipInputMatrix
              min="0"
              number={data.numOfEachDifficulties[i].chcn}
              max={data.numOfEachDifficulties[i].chcn}
              value={item.chcn}
              className={
                item.chcn > data.numOfEachDifficulties[i].chcn
                  ? "text-red-500"
                  : ""
              }
              disabled={data.numOfEachDifficulties[i].chcn == 0 ? true : false}
              onChange={(e) => {
                console.log(data.numOfEachDifficulties[i].chcn);
                console.log(e.target.value);
                if (e.target.value >= data.numOfEachDifficulties[i].chcn) {
                  console.log(data.numOfEachDifficulties[i].chcn);

                  updateDifficulty(
                    i,
                    "chcn",
                    parseInt(data.numOfEachDifficulties[i].chcn)
                  );
                } else {
                  updateDifficulty(i, "chcn", parseInt(e.target.value));
                }
              }}
            />
          </td>
          <td className="text-[14px] border-black border-collapse border-[1px]">
            <ToolTipInputMatrix
              min="0"
              number={data.numOfEachDifficulties[i].nhd}
              max={data.numOfEachDifficulties[i].nhd}
              disabled={matrixCase === MATRIX_CASE.CHCN}
              value={item.nhd}
              className={
                item.nhd > data.numOfEachDifficulties[i].nhd
                  ? "text-red-500"
                  : ""
              }
              disabled={data.numOfEachDifficulties[i].nhd == 0 ? true : false}
              onChange={(e) => {
                console.log(data.numOfEachDifficulties[i].nhd);
                console.log(e.target.value);
                if (e.target.value >= data.numOfEachDifficulties[i].nhd) {
                  console.log(data.numOfEachDifficulties[i].nhd);
                  updateDifficulty(
                    i,
                    "nhd",
                    parseInt(data.numOfEachDifficulties[i].nhd)
                  );
                } else {
                  updateDifficulty(i, "nhd", parseInt(e.target.value));
                }
              }}
            />
          </td>
          <td className="text-[14px] border-black border-collapse border-[1px]">
            <ToolTipInputMatrix
              min="0"
              number={null}
              max={item.chcn + item.nhd}
              disabled={
                data.numOfEachDifficulties[i].chcn == 0 &&
                data.numOfEachDifficulties[i].nhd == 0
                  ? true
                  : false
              }
              className={item.use > item.chcn + item.nhd ? "text-red-500" : ""}
              value={item.use}
              type="number"
              onChange={(e) =>
                updateDifficulty(i, "use", parseInt(e.target.value))
              }
            />
          </td>
        </React.Fragment>
      ))}

      <td className="bg-[#d9d9d9] text-[14px] border-black border-collapse border-[1px]">
        {sumCHCN}
      </td>
      <td className="bg-[#d9d9d9] text-[14px] border-black border-collapse border-[1px]">
        {sumNHD}
      </td>
      <td className="bg-[#d9d9d9] text-[14px] border-black border-collapse border-[1px]">
        {sum}
      </td>
    </tr>
  );
};

export default SubjectRow;
