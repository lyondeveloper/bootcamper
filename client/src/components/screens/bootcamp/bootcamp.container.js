import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectSingleBootcamp } from '../../../redux/bootcamps/bootcamp.selectors';
import { getSingleBootcampStart } from '../../../redux/bootcamps/bootcamp.actions';
import withSpinner from '../../commons/with-spinner/with-spinner.component';
import Bootcamp from './bootcamp.component';

const mapStateToProps = createStructuredSelector({
  bootcamp: selectSingleBootcamp
});

const mapDispatchToProps = dispatch => ({
  getSingleBootcamp: slug => dispatch(getSingleBootcampStart(slug))
});

const BootcampContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withSpinner
)(Bootcamp);

export default BootcampContainer;
