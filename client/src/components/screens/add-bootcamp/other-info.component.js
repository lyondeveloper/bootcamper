import React, { useState } from 'react';

import { Col, Row, Container, Card, CardBody, Form, Button } from 'reactstrap';
import FormInput from '../../commons/form/input.component';

import { initialState } from './add-bootcamp.model';

const OtherInfo = () => {
  const [state, setState] = useState({ ...initialState });

  const { formPayload, validationRules } = state;

  const {
    step2: {
      description,
      careers,
      jobAssistance,
      jobGuarantee,
      acceptGi,
      housing
    },
    step2
  } = formPayload;

  const { step2Rules } = validationRules;

  const handleChange = ({ target: { name, value } }) =>
    setState({
      ...state,
      formPayload: {
        ...formPayload,
        step2: {
          ...step2,
          [name]: value
        }
      }
    });

  const handleCareers = ({ target: { name, value } }) => {};

  const handleCheck = ({ target: { name, value } }) => {};

  return (
    <Col md={6}>
      <Card className='bg-white py-2 px-4'>
        <CardBody>
          <h3>Other Info</h3>
          {/* TODO SMALL INPUT TYPE */}
          <FormInput
            name='description'
            labelText='Description'
            inputType='textArea'
            onChange={handleChange}
            isValid={validationRules.description}
            required
            rows='5'
            value={description}
            maxlength='500'
            id='description'
            placeholder='Description (What you offer, etc)'
            className='form-control'
          />
          <h1>select1</h1>

          <FormInput
            name='housing'
            labelText='Housing'
            inputType='check'
            onChange={handleCheck}
            isValid={validationRules.housing}
            value={housing}
            id='housing'
            className='form-control'
          />

          <FormInput
            name='jobAssistance'
            labelText='Job Assistance'
            inputType='check'
            onChange={handleCheck}
            isValid={validationRules.jobAssistance}
            value={jobAssistance}
            id='jobAssistance'
            className='form-control'
          />

          <FormInput
            name='jobGuarantee'
            labelText='Job Guarantee'
            inputType='check'
            onChange={handleCheck}
            isValid={validationRules.jobGuarantee}
            value={jobGuarantee}
            id='jobGuarantee'
            className='form-control'
          />

          <FormInput
            name='acceptGi'
            labelText='Accept GI Bill'
            inputType='check'
            onChange={handleCheck}
            isValid={validationRules.acceptGi}
            value={acceptGi}
            id='acceptGi'
            className='form-control'
          />
          <p className='text-muted my-4'>
            {' '}
            *After you add the bootcamp, you can add the specific courses
            offered
          </p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OtherInfo;
