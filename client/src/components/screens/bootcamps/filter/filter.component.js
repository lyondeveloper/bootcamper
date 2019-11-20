import React, { useState } from 'react';

import { Card, CardBody, Form, Button } from 'reactstrap';

import FormInput from '../../../commons/form/input.component';

import { layout, initialState } from './filter.model';

const Filter = () => {
  const [state, setState] = useState({ ...initialState });

  const {
    formPayload,
    formPayload: { rating, budget, career }
  } = state;

  const handleChange = ({ target: { name, value } }) =>
    setState({ ...state, formPayload: { ...formPayload, [name]: value } });

  return (
    <Card>
      <CardBody>
        <h4>Filter</h4>
        <Form>
          <FormInput
            value={rating}
            required
            id='rating'
            onChange={handleChange}
            name='rating'
            options={layout.selectOption.rating}
            inputType='select'
            labelText='Rating'
            type='select'
          />

          <FormInput
            value={career}
            required
            id='career'
            onChange={handleChange}
            name='career'
            options={layout.selectOption.career}
            inputType='select'
            labelText='Career'
            type='select'
          />

          <FormInput
            value={budget}
            required
            id='budget'
            onChange={handleChange}
            name='budget'
            options={layout.selectOption.budget}
            inputType='select'
            labelText='Budget'
            type='select'
          />

          <Button color='danger' className='btn-primary btn-block'>
            Find Bootcamps
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default Filter;
