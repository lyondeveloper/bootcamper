import React, { Fragment, Suspense, lazy } from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";

import Spinner from '../../commons/spinner/spinner.component'

const ManageBootcamps = lazy(() => import('../../screens/manage-bootcamp/manage-bootcamp.component'));
const ManageReviews = lazy(() => import('../../screens/manage-reviews/manage-reviews.component'));
const ManageAccount = lazy(() => import('../../screens/manage-account/manage-account.component'));
const ManageCourses = lazy(() => import('../../screens/manage-courses/manage-courses.component'));

const Account = ( { match } ) => (
  <Fragment>
    <Suspense fallback={<Spinner />}>
      <Route exact path = {`${match.path}/manage-bootcamp`} component={ManageBootcamps} />
      <Route exact path = {`${match.path}/manage-reviews`} component={ManageReviews} />
      <Route exact path = {`${match.path}/manage-account`} component={ManageAccount} />
      <Route exact path = {`${match.path}/manage-courses`} component={ManageCourses} />
    </Suspense>
  </Fragment>
);

export default Account;
