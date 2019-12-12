import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Col, Row, Container, Card, CardBody, Form } from 'reactstrap';

import Spinner from '../../commons/spinner/spinner.component';
import FormInput from '../../commons/form/input.component';

import { dynamicFormValidation } from '../../../utils/functions';

import {
  selectBootcamps,
  selectLoading
} from '../../../redux/bootcamps/bootcamp.selectors';

import { initialState } from './add-bootcamp.model';

const AddBootcamp = ({ loading }) => {
  const [state, setState] = useState({ ...initialState });

  const { formPayload, validationRules } = state;

  const {
    name,
    description,
    website,
    phone,
    email,
    careers,
    housing,
    jobAssistance,
    jobGuarantee,
    acceptGi,
    address
  } = formPayload;

  const handleChange = ({ target: { name, value } }) =>
    setState({
      ...state,
      formPayload: {
        ...formPayload,
        [name]: value
      }
    });

  const handleCareers = ({ target: { name, value } }) => {};

  const isValid = () => {
    const { next, rules } = dynamicFormValidation(formPayload, validationRules);

    setState({ ...state, validationRules: rules });

    return next;
  };

  const handleSubmit = () => {
    if (isValid()) {
      //do API stuff
      // const payload = {
      //   bootcampId: bootcamp.id,
      //   data: {
      //     title: formPayload.title,
      //     text: formPayload.text,
      //     rating: formPayload.rating
      //   }
      // };
      // addReview(payload, history);
    }
  };

  if (loading) return <Spinner />;

  return (
    <div className='section'>
      <Container>
        <h1 className='mb-2'>Add Bootcamp</h1>
        <p className='text-bold'>
          Important: You must be affiliated with a bootcamp to add to DevCamper
        </p>
        <Row>
          <Col md={6}>
            <Card className='bg-white py-2 px-6'>
              <CardBody>
                <h3>Location & Contact</h3>
                <p className='text-muted'>
                  If multiple locations, use the main or largest
                </p>
                <Form>
                  <FormInput
                    name='name'
                    labelText='Name'
                    inputType='labelText'
                    onChange={handleChange}
                    isValid={validationRules.name}
                    required
                    value={name}
                    id='name'
                    placeholder='Bootcamp Name'
                    className='form-control'
                  />

                  {/* TODO: ADD INPUT WITH SMALL TYPE */}
                  <FormInput
                    name='address'
                    labelText='Address'
                    inputType='labelText'
                    onChange={handleChange}
                    isValid={validationRules.address}
                    required
                    value={address}
                    id='address'
                    placeholder='Full Address'
                    className='form-control'
                  />

                  <FormInput
                    name='phone'
                    labelText='Phone Number'
                    inputType='labelText'
                    onChange={handleChange}
                    isValid={validationRules.phone}
                    required
                    value={phone}
                    id='phone'
                    placeholder='Phone'
                    className='form-control'
                  />

                  <FormInput
                    name='email'
                    labelText='email'
                    inputType='labelText'
                    onChange={handleChange}
                    isValid={validationRules.email}
                    required
                    value={email}
                    id='email'
                    placeholder='Contact Email'
                    className='form-control'
                  />

                  <FormInput
                    name='website'
                    labelText='Website URL'
                    inputType='labelText'
                    onChange={handleChange}
                    isValid={validationRules.website}
                    required
                    value={website}
                    id='website'
                    placeholder='Contact website'
                    className='form-control'
                  />
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading
});

export default connect(mapStateToProps)(AddBootcamp);
