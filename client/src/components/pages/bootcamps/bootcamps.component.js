import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Spinner from '../../commons/spinner/spinner.component';

const Bootcamps = lazy(() =>
  import('../../screens/bootcamps/bootcamps.component')
);

const Bootcamp = lazy(() =>
  import('../../screens/bootcamp/bootcamp.component')
);

// Reviews that depends on bootcamps
const Reviews = lazy(() =>
  import('../../screens/reviews/reviews-overview.component')
);

const AddReview = lazy(() =>
  import('../../screens/add-review/add-review.component')
);

const BootcampsPage = ({ match, getBootcamps }) => {
  return (
    <Suspense fallback={<Spinner />}>
      <Route exact path={`${match.path}/:id/reviews`} component={Reviews} />
      <Route
        exact
        path={`${match.path}/:id/add-review`}
        component={AddReview}
      />
      <Route path={`${match.path}/:id`} component={Bootcamp} />
      <Route exact path={`${match.path}`} component={Bootcamps} />
    </Suspense>
  );
};

export default BootcampsPage;
