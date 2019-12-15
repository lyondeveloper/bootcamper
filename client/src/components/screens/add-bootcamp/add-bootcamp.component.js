import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Col, Row, Container, Card, CardBody, Form, Button } from "reactstrap";

import LocationAndContact from "./location-contact.component";
import OtherInfo from "./other-info.component";
import Spinner from "../../commons/spinner/spinner.component";

import { dynamicFormValidation } from "../../../utils/functions";

import {
  selectAddBootcampFormPayload,
  selectLoading,
  selectAddBootcampValidationRules,
  selectAddBootcampCurrentStep
} from "../../../redux/bootcamps/bootcamp.selectors";

import {
  addBootcampStart,
  onGlobalChange
} from "../../../redux/bootcamps/bootcamp.actions";

const AddBootcamp = ({
  loading,
  formPayload,
  submitBootcamp,
  validationRules,
  onGlobalChange
}) => {
  const isValid = () => {
    const { next, rules } = dynamicFormValidation(formPayload, validationRules);

    return next;
  };

  const handleSubmit = () => {
    // if (isValid()) {
    //   do API stuff
    //   const payload = {
    //     bootcampId: bootcamp.id,
    //     data: {
    //       title: formPayload.title,
    //       text: formPayload.text,
    //       rating: formPayload.rating
    //     }
    //   };
    //   addReview(payload, history);
    // }
  };

  const { step1, step2 } = formPayload;

  const { step1Rules, step2Rules } = validationRules;

  if (loading) return <Spinner />;

  return (
    <div className="section">
      <Container>
        <h1 className="mb-2">Add Bootcamp</h1>
        <p className="text-bold">
          Important: You must be affiliated with a bootcamp to add to DevCamper
        </p>
        <Form>
          <Row>
            <LocationAndContact
              onGlobalChange={onGlobalChange}
              step1={step1}
              step1Rules={step1Rules}
            />
            <OtherInfo
              onGlobalChange={onGlobalChange}
              step2={step2}
              step2Rules={step2Rules}
            />
          </Row>
          <Button
            onClick={handleSubmit}
            color="success"
            className="btn-block my-4"
          >
            Submit Bootcamp
          </Button>
        </Form>
      </Container>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  formPayload: selectAddBootcampFormPayload,
  validationRules: selectAddBootcampValidationRules,
  loading: selectLoading,
  currentStep: selectAddBootcampCurrentStep
});

const mapDispatchToProps = dispatch => ({
  addBootcamp: (payload, history) =>
    dispatch(addBootcampStart(payload, history)),

  onGlobalChange: (module, submodule, payload) =>
    dispatch(onGlobalChange(module, submodule, payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBootcamp);
