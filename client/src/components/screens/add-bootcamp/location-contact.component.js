import React, { useState } from "react";
import { Col, Card, CardBody } from "reactstrap";

import FormInput from "../../commons/form/input.component";

import { step1Payload } from "../../../redux/bootcamps/bootcamp.model";

import produce from "immer";

const LocationAndContact = ({ step1, step1Rules, onGlobalChange }) => {
  const [state, setState] = useState({ ...step1Payload });

  const { name, email, website, phone, address } = state;

  const handleChange = ({ target: { name, value } }) =>
    setState({
      ...state,
      [name]: value
    });

  const handleBlur = ({ target: { name, value } }) => {
    const step1Draffted = produce(step1, draftState => {
      draftState[name] = value;
    });
    onGlobalChange("addBootcamp", "formPayload", "step1", step1Draffted);
  };

  return (
    <Col md={6}>
      <Card className="bg-white py-2 px-6">
        <CardBody>
          <h3>Location & Contact</h3>
          <p className="text-muted">
            If multiple locations, use the main or largest
          </p>
          <FormInput
            name="name"
            labelText="Name"
            inputType="labelText"
            onChange={handleChange}
            onBlur={handleBlur}
            isValid={step1Rules.name}
            required
            value={name}
            id="name"
            placeholder="Bootcamp Name"
            className="form-control"
          />

          {/* TODO: ADD INPUT WITH SMALL TYPE */}
          <FormInput
            name="address"
            labelText="Address"
            inputType="labelText"
            onChange={handleChange}
            onBlur={handleBlur}
            isValid={step1Rules.address}
            required
            value={address}
            id="address"
            placeholder="Full Address"
            className="form-control"
          />

          <FormInput
            name="phone"
            labelText="Phone Number"
            inputType="labelText"
            onChange={handleChange}
            onBlur={handleBlur}
            isValid={step1Rules.phone}
            required
            value={phone}
            id="phone"
            placeholder="Phone"
            className="form-control"
          />

          <FormInput
            name="email"
            labelText="Email"
            inputType="labelText"
            onChange={handleChange}
            onBlur={handleBlur}
            isValid={step1Rules.email}
            required
            value={email}
            id="email"
            placeholder="Contact Email"
            className="form-control"
          />

          <FormInput
            name="website"
            labelText="Website URL"
            inputType="labelText"
            onChange={handleChange}
            onBlur={handleBlur}
            isValid={step1Rules.website}
            required
            value={website}
            id="website"
            placeholder="Contact Website"
            className="form-control"
          />
        </CardBody>
      </Card>
    </Col>
  );
};

export default LocationAndContact;
