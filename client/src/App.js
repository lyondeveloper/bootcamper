import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Header from './components/commons/navbar/navbar.component';
import Homepage from './components/pages/homepage/homepage.component';

import GlobalStyles from './global.styles';

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <GlobalStyles />
        <Switch>
          <Route exact path='/' component={Homepage} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
