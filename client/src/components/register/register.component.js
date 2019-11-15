import React, { useState } from 'react';

import { initialState, layout } from './register.model';

import FormInput from '../commons/form/input.component';
import FormOption from '../commons/form/option.component';

import { Row, Col, Button, CardBody, Container, Form, Card } from 'reactstrap';

const Register = () => {
  const [state, setState] = useState({ ...initialState });

  const { formPayload, validationRules } = state;

  const { name, confirmPassword, email, password } = formPayload;

  const handleChange = ({ target: { name, value } }) =>
    setState({ ...state, formPayload: { ...formPayload, [name]: value } });

  const isValid = () => {
    const keys = Object.keys(formPayload);
    let next;

    // Checking the input to valid or invalid with the
    // validation rules, then returning true or false depending
    // on the result
    keys.forEach(key => {
      if (formPayload[key] === '' || formPayload[key] === 0) {
        validationRules[key] = false;
        next = false;
      } else {
        validationRules[key] = true;
        next = true;
      }
    });

    setState({ ...state, validationRules });

    return next;
  };

  const handleSubmit = () => {
    if (isValid()) {
      //do stuff with API
    }
  };

  return (
    <section className='form mt-5'>
      <Container>
        <Row>
          <Col md={6} className='m-auto'>
            <Card color='white' className='p-4 mb-4'>
              <CardBody>
                <h1>
                  {' '}
                  <i class='fas fa-sign-in-alt'></i> Login
                </h1>
                <p>
                  Register to list your bootcamp or rate, review and favorite
                  bootcamps
                </p>
                <Form>
                  <FormInput
                    name='email'
                    value={email}
                    labelText='Email'
                    required
                    placeholder='Enter Email'
                    onChange={handleChange}
                    isValid={validationRules.email}
                  />
                  <FormInput
                    name='password'
                    value={password}
                    labelText='password'
                    required
                    placeholder='Enter Password'
                    onChange={handleChange}
                    isValid={validationRules.password}
                  />
                  <FormOption
                    optionData={layout.selectOption.values}
                    name='role'
                    id='role'
                    onChange={handleChange}
                    type='select'
                    labelText='User Role'
                  />

                  <Button
                    color='primary'
                    className='btn-block'
                    onClick={handleSubmit}
                  >
                    Login
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
