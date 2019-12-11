import React, { Fragment, Suspense, lazy, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { createStructuredSelector } from 'reselect';

// Authentication redux stuff
import { renovateTokenStart } from './redux/users/users.actions';
import {
  selectUserTokenInformation,
  selectCurrentUser
} from './redux/users/users.selectors';

// Components
import Header from './components/commons/navbar/navbar.component';
import Spinner from './components/commons/spinner/spinner.component';
import ErrorBoundary from './components/commons/error-boundary/error-boundary.component';
import GlobalStyles from './global.styles';

import { getItemFromLocalStorage } from './utils/functions';
import moment from 'moment';

// Lazy components
const Homepage = lazy(() =>
  import('./components/pages/homepage/homepage.component')
);
const Auth = lazy(() => import('./components/pages/auth/auth.component'));
const Bootcamps = lazy(() =>
  import('./components/pages/bootcamps/bootcamps.component')
);

const Account = lazy(() =>
  import('./components/pages/account/account.component')
);

const App = ({ currentUser }) => {
  // useEffect(() => {
  //   if (Object.keys(currentUser).length > 0) {
  //     const {
  //       tokenInfo: { exp, iat }
  //     } = currentUser;

  //     const tokenSubstracted = exp - 1577672273;

  //     const currentTime = Date.now() / 1000;

  //     const hasExpired = exp < currentTime;

  //     const user = getItemFromLocalStorage("userSession");
  //   }
  // }, ["currentUser"]);

  // let hasChanged = false;
  // const obvervationArray = [];

  // setInterval(() => {}, 1000);

  // const mutationObserver = new MutationObserver(mutations => {
  //   mutations.forEach(mutation => obvervationArray.push(mutation));
  // });

  // mutationObserver.observe(document.documentElement, {
  //   attributes: true,
  //   characterData: true,
  //   childList: true,
  //   subtree: true,
  //   attributeOldValue: true,
  //   characterDataOldValue: true
  // });

  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <ToastContainer />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/auth' component={Auth} />
            <Route path='/bootcamps' component={Bootcamps} />
            <Route path='/account' component={Account} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  tokenInfo: selectUserTokenInformation
});

const mapDispatchToProps = dispatch => ({
  renovateToken: () => dispatch(renovateTokenStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
