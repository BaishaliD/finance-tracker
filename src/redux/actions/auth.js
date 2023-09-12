import { AUTH } from "../const/actionsTypes";
import * as api from "../../api/index";

export const loadUser = () => async (dispatch) => {
  const localUser = JSON.parse(localStorage.getItem("user_info"));

  if (localUser) {
    dispatch({ type: AUTH, data: localUser });
  }
};

export const signIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });
    navigate("/dashboard");
  } catch (err) {
    console.log("Signin error ", err);
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (err) {
    console.log("Signin error ", err);
  }
};
