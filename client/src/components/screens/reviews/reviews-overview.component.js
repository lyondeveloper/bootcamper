import React, { useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  Col,
  Row,
  Container,
  CardTitle,
  CardText,
  CardBody,
  CardHeader,
  Card,
  Button
} from 'reactstrap';

import Spinner from '../../commons/spinner/spinner.component';
import ReviewPreview from './review-preview/review-preview.component';
import Sidebar from './sidebar/sidebar.component';

import { getReviewsByBootcampStart } from '../../../redux/reviews/reviews.actions';
import {
  selectError,
  selectLoading,
  selectReviews
} from '../../../redux/reviews/reviews.selectors';
import { selectSingleBootcamp } from '../../../redux/bootcamps/bootcamp.selectors';

const ReviewsOverview = ({
  match,
  getReviewsByBootcamp,
  loading,
  error,
  reviews,
  bootcamp
}) => {
  useEffect(() => {
    getReviewsByBootcamp({ bootcampId: bootcamp.id });
  }, [bootcamp.id]);

  if (loading) return <Spinner />;

  return (
    <div className='section'>
      <Container>
        {/* TODO: create empty dynamic component */}
        {reviews.length <= 0 ? (
          <h2> No reviews </h2>
        ) : (
          <Row>
            <Col md={8}>
              <Link to={`/bootcamps/${bootcamp.id}`}>
                <Button color='primary' className='btn my-3 p-2'>
                  <i className='fas fa-chevron-left' />
                  <span className='ml-2'>Bootcamp Info</span>
                </Button>
              </Link>
              <h1 className='mb-4'> {bootcamp.name} </h1>

              {reviews.map(review => (
                <ReviewPreview review={review} />
              ))}
            </Col>
            <Sidebar bootcamp={bootcamp} />
          </Row>
        )}
      </Container>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  bootcamp: selectSingleBootcamp,
  reviews: selectReviews,
  error: selectError,
  loading: selectLoading
});

const mapDispatchToProps = dispatch => ({
  getReviewsByBootcamp: filter => dispatch(getReviewsByBootcampStart(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsOverview);
