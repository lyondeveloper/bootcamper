import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { connect } from 'react-redux'
import { Container, Row, Col, Card, CardBody, Form, Button } from 'reactstrap';
import { createStructuredSelector } from 'reselect';

import FormInput from '../../commons/form/input.component';
import Spinner from '../../commons/spinner/spinner.component'
import ResetPasswordSent from './reset-password-sent.component'

import { initialState } from './reset-password.model';
import { dynamicFormValidation } from '../../../utils/functions';

import { forgotPasswordStart, cleanUser } from '../../../redux/users/users.actions';
import { selectLoading, selectError } from '../../../redux/users/users.selectors';

const ResetPassword = ({ match, forgotPassword, loading, error, cleanUser, history }) => {
  const [state, setState] = useState({ ...initialState });

  useEffect(() => {
    if (error) {
      toast.error(`${error}, please try again`);
    }

    return () => {
      cleanUser('error', '');
    };
  }, [error]);

  const { formPayload, validationRules, emailSent } = state;
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
      forgotPassword({ email }, history);
      setState({ ...state, emailSent: true });
    }
  };

  if (loading) return <Spinner />;


  if (emailSent) return <ResetPasswordSent />;


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
                  type='button'
                  className='btn-block'
                  onClick={handleSubmit}
                >
                  Reset
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  forgotPassword: (payload, history) => dispatch(forgotPasswordStart(payload, history)),
  cleanUser: (property, value) => dispatch(cleanUser(property, value)),
});

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  error: selectError
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ResetPassword));
