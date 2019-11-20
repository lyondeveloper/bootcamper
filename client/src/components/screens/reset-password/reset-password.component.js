import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../../commons/form/input.component';

import { Container, Row, Col, Card, CardBody, Form, Button } from 'reactstrap';

import { initialState } from './reset-password.model';

import { dynamicFormValidation } from '../../../utils/functions/is-valid';

import { toast } from 'react-toastify';

const ResetPassword = ({ match }) => {
  const [state, setState] = useState({ ...initialState });

  const { formPayload, validationRules } = state;
  const { email } = formPayload;

  const handleChange = ({ target: { name, value } }) =>
    setState({ ...state, formPayload: { ...formPayload, [name]: value } });

  const isValid = () => {
    const { next, rules } = dynamicFormValidation(formPayload, validationRules);

    setState({ ...state, validationRules: rules });

    return next;
  };

  const handleSubmit = () => {
    if (isValid()) {
      // do stuff with API
      toast.success('Your password have been restored');
    }
  };

  return (
    <Container className='mt-5'>
      <Row>
        <Col md={8} className='m-auto'>
          <Card className='bg-white py-2 px-4'>
            <CardBody>
              <Link to='/auth/login'>Back to login</Link>
              <h1 className='mb-2'>Reset Password</h1>
              <p>
                Use this form to reset your password using the registered email
                address.
              </p>
              <Form>
                <FormInput
                  inputType='labelText'
                  labelText='Enter Email'
                  onChange={handleChange}
                  value={email}
                  name='email'
                  placeholder='Enter Email'
                  required
                  isValid={validationRules.email}
                />
                <Button
                  color='dark'
                  type='submit'
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
  );
};

export default ResetPassword;
