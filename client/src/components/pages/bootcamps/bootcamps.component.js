import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

// Components
import Spinner from '../../commons/spinner/spinner.component';

const Bootcamps = lazy(() =>
  import('../../screens/bootcamps/bootcamps.component')
);

const Bootcamp = lazy(() =>
  import('../../screens/bootcamp/bootcamp.component')
);

const BootcampsPage = ({ match, getBootcamps }) => (
  <Suspense fallback={<Spinner />}>
    <Route exact path={`${match.path}`} component={Bootcamps} />
    <Route exact path={`${match.path}/:id`} component={Bootcamp} />
  </Suspense>
);

export default BootcampsPage;
