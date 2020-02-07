import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Row, Container, Form, Button } from "reactstrap";

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
  addBootcamp,
  validationRules,
  onGlobalChange,
  history
}) => {
  const isValidStep1 = () => {
    const { next } = dynamicFormValidation(
      formPayload.step1,
      validationRules.step1Rules
    );

    return next;
  };

  const isValidStep2 = () => {
    const { next } = dynamicFormValidation(
      formPayload.step2,
      validationRules.step2Rules
    );

    return next;
  };

  const handleSubmit = () => {
    // if (isValidStep1() && isValidStep2()) {
    // do API stuff

    addBootcamp(formPayload, history);
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

  onGlobalChange: (module, submodule, property, payload) =>
    dispatch(onGlobalChange(module, submodule, property, payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBootcamp);
