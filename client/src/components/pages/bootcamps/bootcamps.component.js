import React, { Suspense, lazy, useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { cleanModule } from "../../../redux/app/app.actions";

import { bootcampInitialState } from "../../../redux/bootcamps/bootcamp.reducer";

// Components
import Spinner from "../../commons/spinner/spinner.component";

const Bootcamps = lazy(() =>
  import("../../screens/bootcamps/bootcamps.component")
);

const Bootcamp = lazy(() =>
  import("../../screens/bootcamp/bootcamp.component")
);

const BootcampsPage = ({ match, cleanModule }) => {
  useEffect(() => {
    // return () => {
    //   cleanModule("bootcamps", bootcampInitialState);
    // };
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <Route path={`${match.path}/:id`} component={Bootcamp} />
      <Route exact path={`${match.path}`} component={Bootcamps} />
    </Suspense>
  );
};

const mapDispatchtoProps = dispatch => ({
  cleanModule: (module, initialState) =>
    dispatch(cleanModule(module, initialState))
});

export default connect(null, mapDispatchtoProps)(BootcampsPage);
