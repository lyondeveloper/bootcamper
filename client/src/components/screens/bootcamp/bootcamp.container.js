import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {
  selectSingleBootcamp,
  selectIsLoadedBootcamp
} from '../../../redux/bootcamps/bootcamp.selectors';
import { getSingleBootcampStart } from '../../../redux/bootcamps/bootcamp.actions';
import withSpinner from '../../commons/with-spinner/with-spinner.component';
import Bootcamp from './bootcamp.component';

const mapStateToProps = createStructuredSelector({
  bootcamp: selectSingleBootcamp,
  isLoaded: selectIsLoadedBootcamp
});

const mapDispatchToProps = dispatch => ({
  getSingleBootcamp: id => dispatch(getSingleBootcampStart(id))
});

const BootcampContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withSpinner
)(Bootcamp);

export default BootcampContainer;
