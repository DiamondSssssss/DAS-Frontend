import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import { emptyDataFormat } from "utils/dataFormat";

const CustomTable = ({
  tableName,
  columns,
  data,
  onClickRow = (item) => {},
}) => {
  return (
    <table className="flex flex-col w-full h-full p-2 table-auto custom-table">
      <thead className="flex-1 w-full shadow-card">
        <tr className="flex w-full">
          {columns.map((col, index) => (
            <th
              key={index}
              className={`${
                col.width ? `w-[${col.width}]` : "flex-1"
              }  bg-[#4ca7d7] text-white font-bold overflow-x-auto`}
            >
              {col.type !== "button" && col.name}
              {col.type === "button" && ""}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="mt-4 h-[90%] w-full  flex flex-col gap-4 p-2 overflow-auto hide-scrollbar">
        {data && data.length > 0 ? (
          data.map((item, index) => {
            return (
              <tr
                key={index}
                className="flex w-full rounded-md shadow-card"
                onClick={() => onClickRow(item)}
              >
                {columns.map((col, index) => (
                  <td
                    key={index}
                    className={`flex items-center justify-center ${
                      col.width ? `w-[${col.width}]` : "flex-1"
                    }`}
                  >
                    {col.type !== "button" &&
                      (col.formatValue ? (
                        col.formatValue(item[col.field])
                      ) : (
                        <span className="font-bold text-[#707070]">
                          {item[col.field]}
                        </span>
                      ))}

                    {col.type === "button" && (
                      <Button
                        className={col.className || "flex-1"}
                        onClick={(e) => {
                          e.stopPropagation(); // Stop the propagation of the click event
                          col.onclick(item); // Execute the button's click handler
                        }}
                      >
                        {col.formatValue ? col.formatValue(col.name) : col.name}
                      </Button>
                    )}
                  </td>
                ))}
              </tr>
            );
          })
        ) : (
          <div className="bg-white min-h-[200px] flex items-center justify-center text-[30px] text-blue_dark col-span-3 rounded-lg">
            {emptyDataFormat(tableName)}
          </div>
        )}
      </tbody>
    </table>
  );
};
CustomTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  onClickRow: PropTypes.func,
};

export default CustomTable;
