import * as React from "react";
import * as ReactDOM from "react-dom";
import AppRouter from "./AppRouter";
import { Provider } from "react-redux";
import store from "./store";
import "./styles/main.sass";
// import "./styles/main.css";
import "../node_modules/react-datepicker/dist/react-datepicker.css";
import "./styles/components/common/datepicker.scss";

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
