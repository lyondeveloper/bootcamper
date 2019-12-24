import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Col, Row, Container, CardBody, Card, Button, Form } from "reactstrap";

import Spinner from "../../commons/spinner/spinner.component";
import FormInput from "../../commons/form/input.component";

import {
  selectError,
  selectLoading
} from "../../../redux/reviews/reviews.selectors";
import {
  addReviewStart,
  changeReviewState
} from "../../../redux/reviews/reviews.actions";

import { selectSingleBootcamp } from "../../../redux/bootcamps/bootcamp.selectors";

import { dynamicFormValidation } from "../../../utils/functions";

import { initialState } from "./add-review.model";
import { toast } from "react-toastify";

const AddReview = ({
  loading,
  error,
  bootcamp,
  addReview,
  history,
  changeReviewState
}) => {
  const [state, setState] = useState({ ...initialState });

  const { formPayload, validationRules } = state;

  const { rating, title, text } = formPayload;

  useEffect(() => {
    if (error) {
      toast.error(`${error}, please try again...`);
    }

    return () => changeReviewState("error", "");
  }, [error, changeReviewState]);

  const handleChange = ({ target: { name, value } }) =>
    setState({
      ...state,
      formPayload: {
        ...formPayload,
        [name]: value
      }
    });

  const isValid = () => {
    const { next, rules } = dynamicFormValidation(formPayload, validationRules);

    setState({ ...state, validationRules: rules });

    return next;
  };

  const handleSubmit = () => {
    if (isValid()) {
      //do API stuff

      const payload = {
        bootcampId: bootcamp.id,
        data: {
          title: formPayload.title,
          text: formPayload.text,
          rating: formPayload.rating
        }
      };

      addReview(payload, history);
    }
  };

  if (loading) return <Spinner />;

  return (
    <div className="section">
      <Container className="mt-5">
        <Row>
          <Col md={8} className="m-auto">
            <Card className="bg-white py-2 px-4">
              <CardBody>
                <Link to={`/bootcamps/${bootcamp.id}/reviews`}>
                  <Button className="btn-link bg-white text-secondary my-3">
                    <i className="fas fa-chevron-left" />
                    <span className="ml-2">Bootcamp Info</span>
                  </Button>
                </Link>
                <h1 className="mb-2"> {bootcamp.name} </h1>
                <h3 className="text-primary mb-4"> Write a Review </h3>
                <p>
                  You must have attented and graduated this bootcamp to review
                </p>
                <Form>
                  <FormInput
                    name="rating"
                    type="range"
                    inputType="range"
                    labelText="Rating"
                    valueClassname="text-primary"
                    id="range"
                    min="1"
                    max="10"
                    step="1"
                    value={rating}
                    className="custom-range"
                    onChange={handleChange}
                  />

                  <FormInput
                    name="title"
                    labelText="Rating"
                    inputType="text"
                    onChange={handleChange}
                    isValid={validationRules.title}
                    required
                    value={title}
                    id="title"
                    placeholder="Review Title"
                    className="form-control"
                  />

                  <FormInput
                    name="text"
                    inputType="textArea"
                    labelText="Your Review"
                    rows="10"
                    onChange={handleChange}
                    isValid={validationRules.text}
                    required
                    value={text}
                    id="text"
                    placeholder="Your Review"
                    className="form-control"
                  />

                  <Button
                    type="button"
                    color="primary"
                    className="btn-block"
                    onClick={handleSubmit}
                  >
                    Submit Review
                  </Button>
                </Form>
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
  addReview: (payload, history) => dispatch(addReviewStart(payload, history)),

  changeReviewState: (property, value) =>
    dispatch(changeReviewState(property, value))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AddReview)
);
