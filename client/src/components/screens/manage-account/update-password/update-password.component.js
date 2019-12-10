import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toast } from 'react-toastify';
import { Card, CardBody, Form, Col, Row, Container, FormGroup, Button } from 'reactstrap';

import FormInput from '../../../commons/form/input.component';
import Spinner from '../../../commons/spinner/spinner.component';

import { initialState } from './update-password.model';
import { dynamicFormValidation } from '../../../../utils/functions';

import { updatePasswordStart, cleanUser } from '../../../../redux/users/users.actions'
import { selectError, selectLoading } from '../../../../redux/users/users.selectors';

const UpdatePassword = ({ updatePassword, error, loading, match, cleanUser, history }) => {
  const [state, setState] = useState({ ...initialState });
  const {formPayload, validationRules} = state;
  const {currentPassword, newPassword, confirmNewPassword} = formPayload;

  useEffect(() => {
    if (error) {
      toast.error(`${error}, please try again`);
    }

    return () => {
      cleanUser('error', '');
    }
  }, [error, cleanUser])

  const handleChange = ({ target: { name, value } }) => setState({...state, formPayload: { ...formPayload, [name]: value }});

  const isValid = () => {
    const { next, rules } = dynamicFormValidation(formPayload, validationRules);

    setState({ ...state, validationRules: rules });

    return next;
  }

  const handleSubmit = () => {
    if (isValid()) {
      const data = {
        currentPassword,
        newPassword,
        confirmNewPassword
      };

      updatePassword(data, history);
    }
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='section'>
      <Container>
        <Row>
          <Col md={8} className='m-auto'>
            <Card className='bg-white py-2 px-4'>
              <CardBody>
                <h1 className="mb-2"> Update Password</h1>
              </CardBody>
              <Form>
                <FormInput
                  type='password'
                  inputType='labelText'
                  value={currentPassword}
                  name='currentPassword'
                  labelText='Current Password'
                  onChange={handleChange}
                  className='form-control'
                  id='currentPassword'
                  isValid={validationRules.currentPassword}
                  required
                  placeholder='Current Password'
                />
                <FormInput
                  type='password'
                  inputType='labelText'
                  value={newPassword}
                  name='newPassword'
                  labelText='New Password'
                  onChange={handleChange}
                  className='form-control'
                  id='newPassword'
                  placeholder='New Password'
                  isValid={validationRules.newPassword}
                  required
                />
                <FormInput
                  type='password'
                  inputType='labelText'
                  value={confirmNewPassword}
                  name='confirmNewPassword'
                  labelText='Confirm New Password'
                  onChange={handleChange}
                  className='form-control'
                  id='confirmNewPassword'
                  placeholder='Confirm New Password'
                  isValid={validationRules.confirmNewPassword}
                  required
                />
                <Button type='button' color='success' className='btn-block' onClick={handleSubmit}>Save</Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  updatePassword: (data, history) => dispatch(updatePasswordStart(data, history)),
  cleanUser: (property, value) => dispatch(cleanUser(property, value))
});

const mapStateToProps = createStructuredSelector({
  error: selectError,
  loading: selectLoading
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UpdatePassword));

