import React, { Suspense, lazy, useEffect } from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { cleanModule } from "../../../redux/app/app.actions";

import { userInitialState } from "../../../redux/users/users.model";

import Spinner from "../../commons/spinner/spinner.component";

const Login = lazy(() => import("../../screens/login/login.component"));

const Register = lazy(() =>
  import("../../screens/register/register.component")
);
const ResetPassword = lazy(() =>
  import("../../screens/reset-password/reset-password.component")
);

const Auth = ({ match }) => {
  useEffect(() => {
    return () => {
      cleanModule("users", userInitialState);
    };
  }, []);

  return (
    <div className="section">
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}/login`} component={Login} />
        <Route exact path={`${match.path}/register`} component={Register} />
        <Route
          exact
          path={`${match.path}/reset-password`}
          component={ResetPassword}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  cleanModule: (module, initialState) =>
    dispatch(cleanModule(module, initialState))
});

export default connect(null, mapDispatchToProps)(Auth);
