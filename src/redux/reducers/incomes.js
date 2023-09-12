import * as actionType from "../const/actionsTypes";

const getInitialState = () => {
  const localIncomeList = localStorage.getItem("income_list")
    ? JSON.parse(localStorage.getItem("income_list"))
    : [];
  return { incomeList: localIncomeList };
};
const initialState = getInitialState();

const incomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_INCOME:
      const updatedList = [...state.incomeList, action.data];
      localStorage.setItem("income_list", JSON.stringify(updatedList));
      return {
        ...state,
        incomeList: updatedList,
      };
    case actionType.DELETE_INCOME:
      const filteredList = state.incomeList.filter(
        (item) => item.id !== action.data
      );
      localStorage.setItem("income_list", JSON.stringify(filteredList));
      return {
        ...state,
        incomeList: filteredList,
      };
    default:
      return state;
  }
};

export default incomeReducer;
