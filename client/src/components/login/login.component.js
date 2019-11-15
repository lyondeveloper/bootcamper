import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Form, Container, Row, Col, Card, CardBody, Button } from 'reactstrap';

import FormInput from '../commons/form/input.component';

import { initialState } from './login.model';

const Login = () => {
  const [state, setState] = useState({ ...initialState });

  const { formPayload, validationRules } = state;

  const { email, password } = formPayload;

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
                  Log in to list your bootcamp or rate, review and favorite
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

                  <Button
                    color='primary'
                    className='btn-block'
                    onClick={handleSubmit}
                  >
                    Login
                  </Button>
                </Form>
                <p>
                  Forgot Password?{' '}
                  <Link to='/auth/reset-password'> Reset Password </Link>{' '}
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
