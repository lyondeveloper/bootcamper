import React from 'react';
import PropTypes from 'prop-types';
import { Input, FormGroup, FormFeedback, InputGroup, Label } from 'reactstrap';

const FormInput = ({
  name,
  className,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  labelText,
  required,
  errorText,
  isValid
}) => {
  return (
    <FormGroup>
      <Label for={name}>{labelText}</Label>
      <Input
        name={name}
        type={type}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        invalid={required && !isValid}
      />
      <FormFeedback> </FormFeedback>
    </FormGroup>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  labelText: PropTypes.string,
  required: PropTypes.bool,
  errorText: PropTypes.string,
  isValid: PropTypes.bool
};

FormInput.defaultProps = {
  inputClassName: '',
  type: 'text',
  placeholder: '',
  labelText: '',
  required: false,
  isValid: true,
  errorText: 'This field is required',
  onBlur: () => {}
};

export default FormInput;
