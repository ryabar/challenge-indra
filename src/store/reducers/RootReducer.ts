import { combineReducers } from "redux";
import loginReducer from "./LoginReducer";
import processReducer from "./ProcessReducer";

const RootReducer = combineReducers({
  login: loginReducer,
  process: processReducer,
});

export default RootReducer;
