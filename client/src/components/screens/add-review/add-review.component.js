import React, { useState } from 'react';
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
  Button,
  Form
} from 'reactstrap';

import Spinner from '../../commons/spinner/spinner.component';

import {
  selectError,
  selectLoading
} from '../../../redux/reviews/reviews.selectors';
import { addReviewStart } from '../../../redux/reviews/reviews.actions';

import { selectSingleBootcamp } from '../../../redux/bootcamps/bootcamp.selectors';

import { dynamicFormValidation } from '../../../utils/functions';

const AddReview = ({ match, loading, error, bootcamp }) => {
  return (
    <div className='section'>
      <Container className='mt-5'>
        <Row>
          <Col md={8} className='m-auto'>
            <Card className='bg-white py-2 px-4'>
              <CardBody>
                <Link to='/bootcamp'>
                  <Button className='btn-link bg-white text-secondary my-3'>
                    <i className='fas fa-chevron-left' />
                    <span className='ml-2'>Bootcamp Info</span>
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  bootcamp: selectSingleBootcamp,
  error: selectError,
  loading: selectLoading
});

const mapDispatchToProps = dispatch => ({
  addReview: data => dispatch(addReviewStart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
