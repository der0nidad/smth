import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { mainUrl } from "../constants/urls";
import MainPage from "./MainPage";

type Props = {};
export const RouterComponent: React.FC<Props> = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path={mainUrl} component={MainPage} />
        </Switch>
      </div>
    </Router>
  );
};
