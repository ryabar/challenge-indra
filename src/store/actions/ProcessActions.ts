// import axios from "axios";
import { Dispatch } from "redux";
import {
  CHANGE_DATA,
  ProcessDispatchTypes,
  DataType,
} from "../types/ProcessActionTypes";

export const ChangeData = (data: DataType) => async (
  dispatch: Dispatch<ProcessDispatchTypes>
) => {
  dispatch({
    type: CHANGE_DATA,
    payload: data,
  });
};
