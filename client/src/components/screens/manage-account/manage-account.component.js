import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

import Spinner from '../../commons/spinner/spinner.component'

const UpdateDetails = lazy(() => import('./update-details/update-details.component'));
const UpdatePassword = lazy(() => import('./update-password/update-password.component'));

const ManageAccount = ({ match }) => (
  <Suspense fallback={<Spinner/>}>
    <Route exact path={`${match.path}/`} component={UpdateDetails} />
    <Route exact path={`${match.path}/update-password`} component={UpdatePassword} />
  </Suspense>
);

export default ManageAccount;
