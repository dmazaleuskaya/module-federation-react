import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router, Redirect, Switch, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { createBrowserHistory } from "history";
import { Header } from "./components/header";
import { Progress } from "./components/Progress";

const MarketingLazy = lazy(() => import("./components/marketing-app"));
const AuthLazy = lazy(() => import("./components/auth-app"));
const DashboardLazy = lazy(() => import("./components/dashboard-app"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

export const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            isSignedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/dashboard">
                {!isSignedIn && <Redirect to="/" />}
                <DashboardLazy />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};
