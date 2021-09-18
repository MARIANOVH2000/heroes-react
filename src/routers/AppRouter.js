import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AutContext } from "../auth/AuthContext";
import { LoginScreen } from "../login/LoginScreen";

import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
  const {user}= useContext(AutContext)
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoutes exact path="/login" component={LoginScreen}
          isAuthenticated={user.logged} />
          <PrivateRoutes path="/" component={DashboardRoutes}
          isAuthenticated={user.logged}
          
          />
        </Switch>
      </div>
    </Router>
  );
};
