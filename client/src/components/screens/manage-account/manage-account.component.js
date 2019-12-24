import React, { Suspense, lazy, useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import Spinner from "../../commons/spinner/spinner.component";

import { userInitialState } from "../../../redux/users/users.model";
import { cleanModule } from "../../../redux/app/app.actions";

const UpdateDetails = lazy(() =>
  import("./update-details/update-details.component")
);
const UpdatePassword = lazy(() =>
  import("./update-password/update-password.component")
);

const ManageAccount = ({ match, cleanModule }) => {
  useEffect(() => {
    return () => {
      cleanModule("users", userInitialState);
    };
  }, []);
  return (
    <Suspense fallback={<Spinner />}>
      <Route exact path={`${match.path}/`} component={UpdateDetails} />
      <Route
        exact
        path={`${match.path}/update-password`}
        component={UpdatePassword}
      />
    </Suspense>
  );
};

const mapDispatchToProps = dispatch => ({
  cleanModule: (module, initialState) =>
    dispatch(cleanModule(module, initialState))
});

export default connect(null, mapDispatchToProps)(ManageAccount);
