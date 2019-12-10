import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toast } from 'react-toastify';
import { Card, CardBody, Form, Col, Row, Container, FormGroup, Button } from 'reactstrap';

import FormInput from '../../../commons/form/input.component';
import Spinner from '../../../commons/spinner/spinner.component';

import { initialState } from './update-details.model';
import { dynamicFormValidation } from '../../../../utils/functions';

import { updateUserStart, cleanUser } from '../../../../redux/users/users.actions'
import { selectError, selectLoading } from '../../../../redux/users/users.selectors';

const UpdateDetails = ({ updateUser, history, error, cleanUser, loading, match }) => {
  const [state, setState] = useState({ ...initialState });
  const {formPayload, validationRules} = state;
  const {name, email} = formPayload;

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
        email,
        name
      };

      updateUser(data, history);
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
                <h1 className="mb-2"> Update Details</h1>
              </CardBody>
              <Form>
                <FormInput
                  inputType='labelText'
                  value={name}
                  name='name'
                  labelText='* Name'
                  onChange={handleChange}
                  className='form-control'
                  id='name'
                  isValid={validationRules.name}
                  required
                  placeholder='Enter Your Name'
                />
                <FormInput
                  type='email'
                  inputType='labelText'
                  value={email}
                  name='email'
                  labelText='* Email'
                  onChange={handleChange}
                  className='form-control'
                  id='email'
                  placeholder='Enter Your Email'
                  isValid={validationRules.email}
                  required
                />
                <FormGroup>
                  <Row>
                    <Col md={6}>
                      <Button color='success' className='btn-block' onClick={handleSubmit}>Save</Button>
                    </Col>
                    <Col md={6}>
                      <Button color='primary' className='btn-block'>
                        <Link to={`${match.url}/update-password`}>Update Password</Link>
                      </Button>
                    </Col>
                  </Row>
                </FormGroup>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  updateUser: (data, history) => dispatch(updateUserStart(data, history)),
  cleanUser: (property, value) => dispatch(cleanUser(property, value))
});

const mapStateToProps = createStructuredSelector({
  error: selectError,
  loading: selectLoading
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UpdateDetails));
