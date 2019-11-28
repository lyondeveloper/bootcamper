import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import {
  Form,
  FormGroup,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button
} from 'reactstrap';

import FormInput from '../../commons/form/input.component';
import { initialState } from './login.model';
import { dynamicFormValidation } from '../../../utils/functions';

import { loginUserStart } from '../../../redux/users/users.actions';

const Login = ({ match, loginUser, history }) => {
  const [state, setState] = useState({ ...initialState });

  const { formPayload, validationRules } = state;

  const { email, password } = formPayload;

  const handleChange = ({ target: { name, value } }) =>
    setState({ ...state, formPayload: { ...formPayload, [name]: value } });

  const isValid = () => {
    const { next, rules } = dynamicFormValidation(formPayload, validationRules);

    setState({ ...state, validationRules: rules });

    return next;
  };

  const handleSubmit = () => {
    if (isValid()) {
      //do stuff with API

      const data = {
        email,
        password
      };

      loginUser(data, history);
    }
  };

  return (
    <Container className='mt-5'>
      <Row>
        <Col md={6} className='m-auto'>
          <Card color='white' className='p-4 mb-4'>
            <CardBody>
              <h1>
                {' '}
                <i className='fas fa-sign-in-alt'></i> Login
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
                  inputType='labelText'
                  onChange={handleChange}
                  isValid={validationRules.email}
                />
                <FormInput
                  name='password'
                  value={password}
                  labelText='Password'
                  required
                  inputType='labelText'
                  type='password'
                  placeholder='Enter Password'
                  onChange={handleChange}
                  isValid={validationRules.password}
                />
                <FormGroup>
                  <Button
                    color='primary'
                    className='btn-block'
                    onClick={handleSubmit}
                  >
                    Login
                  </Button>
                </FormGroup>
              </Form>
              <p className='pt-4'>
                Forgot Password?{' '}
                <Link to='/auth/reset-password'> Reset Password </Link>{' '}
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  loginUser: (data, history) => dispatch(loginUserStart(data, history))
});

export default connect(null, mapDispatchToProps)(withRouter(Login));
