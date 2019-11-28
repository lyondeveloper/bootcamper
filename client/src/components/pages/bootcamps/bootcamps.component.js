import React, { Suspense, lazy, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBootcampsStart } from '../../../redux/bootcamps/bootcamp.actions';

// Components
import Spinner from '../../commons/spinner/spinner.component';

const Bootcamps = lazy(() =>
  import('../../screens/bootcam1ps/bootcamps.component')
);

const BootcampContainer = lazy(() =>
  import('../../screens/bootcamp/bootcamp.container')
);

const BootcampsPage = ({ match, getBootcamps }) => {
  useEffect(() => {
    getBootcamps();
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <Route exact path={`${match.path}`} component={Bootcamps} />
      <Route exact path={`${match.path}/:id`} component={BootcampContainer} />
    </Suspense>
  );
};

const mapDispatchToProps = dispatch => ({
  getBootcamps: () => dispatch(getBootcampsStart())
});

export default connect(null, mapDispatchToProps)(BootcampsPage);
