import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import withSpinner from '../../../commons/with-spinner/with-spinner.component';
import BootcampOverview from './bootcamp-overview.component';

import { getBootcampsStart } from '../../../../redux/bootcamps/bootcamp.actions';
import {
  selectBootcamps,
  selectIsLoaded
} from '../../../../redux/bootcamps/bootcamp.selectors';

const mapDispatchToProps = dispatch => ({
  getBootcamps: () => dispatch(getBootcampsStart())
});

const mapStateToProps = createStructuredSelector({
  bootcamps: selectBootcamps,
  isLoaded: selectIsLoaded
});

const BootcampOverviewContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withSpinner
)(BootcampOverview);

export default BootcampOverviewContainer;
