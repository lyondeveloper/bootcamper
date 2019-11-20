import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Components
import Header from './components/commons/navbar/navbar.component';
import Homepage from './components/pages/homepage/homepage.component';
import Auth from './components/pages/auth/auth.component';
import Bootcamps from './components/pages/bootcamps/bootcamps.component';

import GlobalStyles from './global.styles';

const App = () => {
  return (
    <Fragment>
      <Header />
      <GlobalStyles />
      <ToastContainer />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/auth' component={Auth} />
        <Route path='/bootcamps' component={Bootcamps} />
      </Switch>
    </Fragment>
  );
};

export default App;
