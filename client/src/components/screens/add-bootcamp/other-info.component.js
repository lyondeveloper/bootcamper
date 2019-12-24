import React, { useState } from "react";

import { Col, Row, Container, Card, CardBody, Form, Button } from "reactstrap";
import FormInput from "../../commons/form/input.component";

import { step2Payload } from "../../../redux/bootcamps/bootcamp.model";

import produce from "immer";

const OtherInfo = ({ step2, step2Rules, onGlobalChange }) => {
  const [state, setState] = useState({ ...step2Payload });

  const {
    description,
    careers,
    jobAssistance,
    jobGuarantee,
    acceptGi,
    housing
  } = state;

  const handleChange = ({ target: { name, value } }) =>
    setState({
      ...state,
      [name]: value
    });

  const handleCareers = ({ target: { name, value } }) => {};

  const handleCheck = ({ target: { name, value } }) => {};

  const handleBlur = ({ target: { name, value } }) => {
    const step2Draffted = produce(step2, draftState => {
      draftState[name] = value;
    });

    debugger;

    onGlobalChange("addBootcamp", "formPayload", "step2", step2Draffted);
  };

  return (
    <Col md={6}>
      <Card className="bg-white py-2 px-4">
        <CardBody>
          <h3>Other Info</h3>
          {/* TODO SMALL INPUT TYPE */}
          <FormInput
            name="description"
            labelText="Description"
            inputType="textArea"
            onChange={handleChange}
            isValid={step2Rules.description}
            required
            rows="5"
            value={description}
            onBlur={handleBlur}
            maxlength="500"
            id="description"
            placeholder="Description (What you offer, etc)"
            className="form-control"
          />
          <h1>select1</h1>

          <FormInput
            name="housing"
            labelText="Housing"
            inputType="check"
            onChange={handleCheck}
            isValid={step2Rules.housing}
            value={housing}
            id="housing"
            className="form-control"
            onBlur={handleBlur}
          />

          <FormInput
            name="jobAssistance"
            labelText="Job Assistance"
            inputType="check"
            onChange={handleCheck}
            isValid={step2Rules.jobAssistance}
            value={jobAssistance}
            id="jobAssistance"
            onBlur={handleBlur}
            className="form-control"
          />

          <FormInput
            name="jobGuarantee"
            labelText="Job Guarantee"
            inputType="check"
            onChange={handleCheck}
            isValid={step2Rules.jobGuarantee}
            onBlur={handleBlur}
            value={jobGuarantee}
            id="jobGuarantee"
            className="form-control"
          />

          <FormInput
            name="acceptGi"
            labelText="Accept GI Bill"
            inputType="check"
            onChange={handleCheck}
            onBlur={handleBlur}
            isValid={step2Rules.acceptGi}
            value={acceptGi}
            id="acceptGi"
            className="form-control"
          />
          <p className="text-muted my-4">
            {" "}
            *After you add the bootcamp, you can add the specific courses
            offered
          </p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OtherInfo;
