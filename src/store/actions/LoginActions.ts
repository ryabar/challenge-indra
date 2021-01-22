import axios from "axios";
import { Dispatch } from "redux";
import {
  USER_FAIL,
  USER_LOADING,
  USER_SUCCESS,
  LoginDispatchTypes,
  DataType,
  CHANGE_DATA,
} from "../types/LoginActionTypes";

export const VerifyUser = (document: number) => async (
  dispatch: Dispatch<LoginDispatchTypes>
) => {
  try {
    dispatch({
      type: USER_LOADING,
    });

    const res = await axios.get(`https://randomuser.me/api`);

    dispatch({
      type: USER_SUCCESS,
      payload: res.data.results[0],
    });
  } catch (e) {
    dispatch({
      type: USER_FAIL,
    });
  }
};

export const ChangeData = (data: DataType) => async (
  dispatch: Dispatch<LoginDispatchTypes>
) => {
  dispatch({
    type: CHANGE_DATA,
    payload: data,
  });
};
