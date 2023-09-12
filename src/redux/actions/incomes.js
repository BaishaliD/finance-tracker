import { ADD_INCOME, DELETE_INCOME } from "../const/actionsTypes";

export const addIncome = (data) => {
  console.log("Add income action");
  return {
    type: ADD_INCOME,
    data,
  };
};

export const deleteIncome = (data) => {
  return {
    type: DELETE_INCOME,
    data,
  };
};
