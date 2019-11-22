import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import withSpinner from '../../../commons/with-spinner/with-spinner.component';
import BootcampsOverview from './bootcamps-overview.component';

import {
  selectBootcamps,
  selectLoading
} from '../../../../redux/bootcamps/bootcamp.selectors';

const mapStateToProps = createStructuredSelector({
  bootcamps: selectBootcamps,
  isLoading: selectLoading
});

const BootcampOverviewContainer = compose(
  connect(mapStateToProps),
  withRouter,
  withSpinner
)(BootcampsOverview);

export default BootcampOverviewContainer;
