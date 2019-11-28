import React, { Fragment, useEffect } from 'react';
import BootcampPreview from '../../bootcamp/bootcamp-preview/bootcamp-preview.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import {
  selectBootcamps,
  selectLoading
} from '../../../../redux/bootcamps/bootcamp.selectors';
import withSpinner from '../../../commons/with-spinner/with-spinner.component';
import { getBootcampsStart } from '../../../../redux/bootcamps/bootcamp.actions';
import Spinner from '../../../commons/spinner/spinner.component';

const BootcampsOverview = ({ bootcamps, match, getBootcamps, loading }) => {
  useEffect(() => {
    getBootcamps();
  }, []);

  let content;

  if (loading) {
    content = <Spinner />;
  } else {
    content = (
      <Fragment>
        {' '}
        {bootcamps.map(bootcamp => (
          <BootcampPreview bootcamp={bootcamp} match={match} />
        ))}{' '}
      </Fragment>
    );
  }

  return content;
};

const mapDispatchToProps = dispatch => ({
  getBootcamps: () => dispatch(getBootcampsStart())
});

const mapStateToProps = createStructuredSelector({
  bootcamps: selectBootcamps,
  loading: selectLoading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BootcampsOverview));
