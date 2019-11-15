import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";

const Login = lazy(() => import("../../login/login.component"));
const Register = lazy(() => import("../../register/register.component"));

const Auth = ({ match }) => (
  <Suspense fallback={<h1>Loading</h1>}>
    <Route exact path={`${match.path}/login`} component={Login} />
    <Route exact path={`${match.path}/register`} component={Register} />
  </Suspense>
);

export default Auth;
