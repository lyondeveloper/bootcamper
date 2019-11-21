import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

import Spinner from '../../commons/spinner/spinner.component';

const Login = lazy(() => import('../../screens/login/login.component'));
const Register = lazy(() =>
  import('../../screens/register/register.component')
);
const ResetPassword = lazy(() =>
  import('../../screens/reset-password/reset-password.component')
);

const Auth = ({ match }) => (
  <div className='section'>
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

export default Auth;
