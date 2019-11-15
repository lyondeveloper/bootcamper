import React from 'react';
import PropTypes from 'prop-types';

import { FormGroup, Label, Input, Col } from 'reactstrap';

const FormOption = ({
  optionData,
  name,
  id,
  type,
  labelText,
  onChange,
  colSize
}) => (
  <FormGroup row>
    <Col md={colSize}>
      <Label for={name}> {labelText} </Label>
      <Input type={type} name={name} id={id} onChange={onChange}>
        {optionData.map(option => (
          <option key={option.id}> {option.value} </option>
        ))}
      </Input>
    </Col>
  </FormGroup>
);

FormOption.propTypes = {
  optionData: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FormOption;
