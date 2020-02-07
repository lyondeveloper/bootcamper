import React, { useState } from "react";

import { Col, Card, CardBody, ListGroup, FormGroup, Label } from "reactstrap";
import FormInput from "../../commons/form/input.component";

import { step2Payload, layout } from "../../../redux/bootcamps/bootcamp.model";

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

  const handleChange = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value
    });
  };

  const handleBlur = ({ target: { name, value } }) => {
    const payload = { ...state };

    onGlobalChange("addBootcamp", "formPayload", "step2", payload);
  };

  // Functions that handles onBlur and checked change in checked input types
  const handleCheck = ({ target: { name } }) => {
    setState(
      produce(draftState => {
        draftState[name] = !draftState[name];
      })
    );
  };

  // function that handles careers change, IT'S NOT WORKING IDK WHY, SHIT.
  const handleCareers = career => {
    // functionality, in click, depending if the career
    // is in the array, remove it or add it

    // checking if the career is already in the array
    // if true, remove it
    const { id, value } = career;

    const careerCopied = Object.assign({}, career);

    const index = careers.findIndex(item => item.id !== careerCopied.id);

    if (index >= 0) {
      careers.filter(item => item.value !== careerCopied.value);
    } else {
      careers.unshift(careerCopied.value);
    }
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

          {/* <FormGroup>
            <Label>Careers</Label>
            <ListGroup>
              {layout.careers
                .filter(career => career.id !== 0 && career.id !== 6)
                .map(career => (
                  <button
                    type="button"
                    className="list-group-item list-group-item-action"
                    id={career.id}
                    onClick={() => handleCareers(career)}
                  >
                    {career.value}
                  </button>
                ))}
            </ListGroup>
          </FormGroup> */}

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
            checked={housing}
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
            checked={jobAssistance}
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
            checked={jobGuarantee}
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
            checked={acceptGi}
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
