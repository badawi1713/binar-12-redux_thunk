import axios from "axios";
import { ERROR_DATA, LOADING_DATA, SUCCESS_DATA } from "../../types";

export const getData = () => {
  return async (dispatch) => {
    dispatch({ type: LOADING_DATA });
    try {
      const response = await axios.get("https://reqres.in/api/users");
      const data = (await response.data?.data) || [];
      setTimeout(() => {
        dispatch({ type: SUCCESS_DATA, payload: data });
      }, 1000);
    } catch (error) {
      dispatch({
        type: ERROR_DATA,
        payload: error?.message || "Something was wrong!",
      });
    }
  };
};
