import { combineReducers } from "redux";
import auth from "./auth";
import income from "./incomes";
export const reducers = combineReducers({ auth, income });
