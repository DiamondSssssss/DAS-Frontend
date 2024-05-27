import Badge from "components/Badge";
import { userTypeFormat } from "./FieldFormat";
import React from "react";

export const userTypeFormatUI = (type) => {
  let color;
  switch (type) {
    case 0:
      color = "yellow";
      break;
    case 1:
      color = "green";
      break;
    case 2:
      color = "yellow";
      break;
    case 3:
      color = "red";
      break;
    default:
      color = "red";
      break;
  }
  return <Badge color={color}>{userTypeFormat(type)}</Badge>;
};
