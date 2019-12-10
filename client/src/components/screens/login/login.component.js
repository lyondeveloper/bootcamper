import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
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
import Spinner from '../../commons/spinner/spinner.component'

import { selectError, selectLoading } from '../../../redux/users/users.selectors'
import { initialState } from './login.model';
import { dynamicFormValidation } from '../../../utils/functions';
import { loginUserStart, cleanUser } from '../../../redux/users/users.actions';

const Login = ({ match, loginUser, history, error, cleanUser, loading }) => {
  const [state, setState] = useState({ ...initialState });

  const { formPayload, validationRules } = state;

  const { email, password } = formPayload;

  useEffect(() => {
    if (error) {
      toast.error(`${error}, please try again`);
    }

    return () => {
      cleanUser('error', '');
    };
  }, [error, cleanUser]);

  const handleChange = ({ target: { name, value } }) =>
    setState({ ...state, formPayload: { ...formPayload, [name]: value } });

  const isValid = () => {
    const { next, rules } = dynamicFormValidation(formPayload, validationRules);

    setState({ ...state, validationRules: rules });

    return next;
  };

  const handleSubmit = () => {
    if (isValid()) {

      const data = {
        email,
        password
      };

      loginUser(data, history);
    }
  };

  let loginContent;

  if (loading) {
    loginContent = <Spinner />
  } else {
    loginContent = (
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
                    color='success'
                    className='btn-block'
                    onClick={handleSubmit}
                  >
                    Login
                  </Button>
                </FormGroup>
              </Form>
              <p className='pt-4'>
                Forgot Password?{' '}
                <Link to='/auth/reset-password' className='btn btn-secondary'> Reset Password </Link>{' '}
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    )
  }

  return loginContent;
};

const mapStateToProps = createStructuredSelector({
  error: selectError,
  loading: selectLoading
});

const mapDispatchToProps = dispatch => ({
  loginUser: (data, history) => dispatch(loginUserStart(data, history)),
  cleanUser: (property, value) => dispatch(cleanUser(property, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
