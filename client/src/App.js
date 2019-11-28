import React, { Fragment, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Components
import Header from "./components/commons/navbar/navbar.component";
import Spinner from "./components/commons/spinner/spinner.component";
import ErrorBoundary from "./components/commons/error-boundary/error-boundary.component";
import GlobalStyles from "./global.styles";

// Lazy components
const Homepage = lazy(() =>
  import("./components/pages/homepage/homepage.component")
);
const Auth = lazy(() => import("./components/pages/auth/auth.component"));
const Bootcamps = lazy(() =>
  import("./components/pages/bootcamps/bootcamps.component")
);
const Account = lazy(() =>
  import("./components/pages/account/account.component")
);

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <ToastContainer />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/auth" component={Auth} />
            <Route path="/bootcamps" component={Bootcamps} />
            <Route path="/account" component={Account} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Fragment>
  );
};

export default App;
