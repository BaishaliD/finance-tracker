import * as actionType from "../const/actionsTypes";

const getInitialState = () => {
  const localExpenseList = localStorage.getItem("expense_list")
    ? JSON.parse(localStorage.getItem("expense_list"))
    : [];
  return { expenseList: localExpenseList };
};
const initialState = getInitialState();

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_EXPENSE:
      const updatedList = [...state.expenseList, action.data];
      localStorage.setItem("expense_list", JSON.stringify(updatedList));
      return {
        ...state,
        expenseList: updatedList,
      };
    case actionType.DELETE_EXPENSE:
      const filteredList = state.expenseList.filter(
        (item) => item.id !== action.data
      );
      localStorage.setItem("expense_list", JSON.stringify(filteredList));
      return {
        ...state,
        expenseList: filteredList,
      };
    default:
      return state;
  }
};

export default expenseReducer;
