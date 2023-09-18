import { AUTH, AUTH_FAILED } from "../const/actionsTypes";
import * as api from "../../api/index";

export const loadUser = () => async (dispatch) => {
  const localUser = JSON.parse(localStorage.getItem("user_info"));

  if (localUser) {
    dispatch({ type: AUTH, data: localUser });
  }
};

export const signIn = (formData, navigate, setLoading) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });
    setLoading(false);
    navigate("/insights");
  } catch (err) {
    setLoading(false);
    dispatch({
      type: AUTH_FAILED,
      data: err?.response?.data?.message
        ? err.response.data.message
        : "Something is not right. Please retry!",
    });
  }
};

export const signUp = (formData, navigate, setLoading) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });
    setLoading(false);
    navigate("/");
  } catch (err) {
    setLoading(false);
    dispatch({
      type: AUTH_FAILED,
      data: err?.response?.data?.message
        ? err.response.data.message
        : "Something is not right. Please retry!",
    });
  }
};
