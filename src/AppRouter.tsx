import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ROUTES from "@Routes/index";

import Login from "@Pages/Login";
import Steps from "@Pages/Steps";
import Thanks from "@Pages/Thanks";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.LOGIN} component={Login} />
        <Route exact path={ROUTES.VERIFY} component={Login} />
        <Route exact path={ROUTES.STEPS} component={Steps} />
        <Route exact path={ROUTES.THANKS} component={Thanks} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
