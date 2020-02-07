import React, { Fragment, Suspense, lazy, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { createStructuredSelector } from "reselect";

// Authentication redux stuff
import {
  renovateTokenStart,
  setCurrentUser
} from "./redux/users/users.actions";
import {
  selectUserTokenInformation,
  selectCurrentUser
} from "./redux/users/users.selectors";

// Components
import Header from "./components/commons/navbar/navbar.component";
import Spinner from "./components/commons/spinner/spinner.component";
import ErrorBoundary from "./components/commons/error-boundary/error-boundary.component";
import GlobalStyles from "./global.styles";

import { getItemFromLocalStorage } from "./utils/functions";
import moment from "moment";

// Lazy components
const SessionExpired = lazy(() =>
  import("./components/commons/session-expired/session-expired.component")
);

const Homepage = lazy(() =>
  import("./components/pages/homepage/homepage.component")
);
const Auth = lazy(() => import("./components/pages/auth/auth.component"));
const Bootcamps = lazy(() =>
  import("./components/pages/bootcamps/bootcamps.component")
);

const AddBootcamp = lazy(() =>
  import("./components/screens/add-bootcamp/add-bootcamp.component")
);

const EditBootcamp = lazy(() =>
  import("./components/screens/edit-bootcamp/edit-bootcamp.component")
);

const Account = lazy(() =>
  import("./components/pages/account/account.component")
);

const Reviews = lazy(() =>
  import("./components/screens/reviews/reviews-overview.component")
);

const AddReview = lazy(() =>
  import("./components/screens/add-review/add-review.component")
);

const App = ({ currentUser, setCurrentUser, renovateToken }) => {
  useEffect(() => {
    if (Object.keys(currentUser).length <= 0) {
      const user = getItemFromLocalStorage("userSession");
      if (user) setCurrentUser(user);
    } else {
      // const {
      //   tokenInfo: { exp, iat }
      // } = currentUser;
      // const currentTime = Date.now();
      // const hasExpired = exp * 1000 < currentTime;
      // if (hasExpired) {
      // }
    }
  }, [currentUser, setCurrentUser]);

  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <ToastContainer />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <SessionExpired />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/auth" component={Auth} />
            <Route path="/bootcamps" component={Bootcamps} />
            <Route exact path="/add-review/:bootcampId" component={AddReview} />
            <Route exact path="/reviews/:bootcampId" component={Reviews} />
            <Route exact path="/add-bootcamp" component={AddBootcamp} />
            <Route exact path="/edit-bootcamp/:id" component={EditBootcamp} />
            <Route path="/account" component={Account} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  renovateToken: () => dispatch(renovateTokenStart()),
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  tokenInfo: selectUserTokenInformation
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
