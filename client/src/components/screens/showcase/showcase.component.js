import React, { useState } from 'react';

import { Container, Row, Col, Form, Button } from 'reactstrap';

import { initialState } from './showcase.model';

import FormInput from '../../commons/form/input.component';

import { dynamicFormValidation } from '../../../utils/functions/is-valid';

import {
  ShowcaseContainer,
  DarkOverlay,
  ShowcaseInner
} from './showcase.styles';

const ShowCase = () => {
  const [state, setState] = useState({ ...initialState });

  const { formPayload, validationRules } = state;

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, formPayload: { ...formPayload, [name]: value } });
  };

  const isValid = () => {
    const { next, rules } = dynamicFormValidation(formPayload, validationRules);

    setState({ ...state, validationRules: rules });

    return next;
  };

  const handleSubmit = () => {
    if (isValid()) {
      // Do stuff with API
    }
  };

  return (
    <ShowcaseContainer
      imageUrl={`${process.env.PUBLIC_URL}/static/img/showcase.jpg`}
    >
      <Container>
        <DarkOverlay>
          <ShowcaseInner>
            <h1 className='display-4'>Find a Code Bootcamp</h1>
            <p className='lead'>
              Find, rate and read reviews on coding bootcamps
            </p>
            <Form>
              <Row>
                <Col md={6}>
                  <FormInput
                    name='milesFrom'
                    placeholder='Miles From'
                    value={formPayload.milesFrom}
                    className='form-control'
                    onChange={handleChange}
                    isValid={validationRules.milesFrom}
                    required
                    inputType='text'
                  />
                </Col>
                <Col md={6}>
                  <FormInput
                    name='zipcode'
                    value={formPayload.zipcode}
                    className='form-control'
                    placeholder='Enter Zipcode'
                    onChange={handleChange}
                    isValid={validationRules.zipcode}
                    required
                    inputType='text'
                  />
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <Button
                    className='btn-block'
                    color='danger'
                    onClick={handleSubmit}
                  >
                    {' '}
                    Find Bootcamps{' '}
                  </Button>
                </Col>
              </Row>
            </Form>
          </ShowcaseInner>
        </DarkOverlay>
      </Container>
    </ShowcaseContainer>
  );
};

export default ShowCase;
