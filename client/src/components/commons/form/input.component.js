import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import { Input, FormGroup, FormFeedback, Label } from 'reactstrap';

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
  isValid,
  inputType,
  id,
  min,
  max,
  options
}) => {
  let inputContent;

  switch (inputType) {
    case 'text':
      inputContent = (
        <Input
          name={name}
          type={type}
          className={className}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          invalid={required && !isValid && value.length < 1}
        />
      );

      break;

    case 'labelText':
      inputContent = (
        <Fragment>
          <Label for={name}>{labelText}</Label>
          <Input
            name={name}
            type={type}
            className={className}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            invalid={required && !isValid && value.length < 1}
          />
        </Fragment>
      );

      break;

    case 'number':
      inputContent = (
        <Input
          name={name}
          type='number'
          min={min}
          max={max ? max : 99}
          className={className}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          invalid={required && !isValid && value.length < 1}
        />
      );

      break;

    case 'select':
      inputContent = (
        <Fragment>
          <Label for={name}> {labelText} </Label>
          <Input
            type={type}
            name={name}
            id={id}
            onChange={onChange}
            onBlur={onBlur}
            invalid={required && !isValid}
          >
            {options.length > 0 &&
              options.map(option => (
                <option key={option.id}> {option.value} </option>
              ))}
          </Input>
        </Fragment>
      );

      break;

    default:
      break;
  }

  return (
    <FormGroup>
      {inputContent}
      <FormFeedback> {errorText} </FormFeedback>
    </FormGroup>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  labelText: PropTypes.string,
  required: PropTypes.bool,
  errorText: PropTypes.string,
  isValid: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any))
};

FormInput.defaultProps = {
  className: '',
  type: 'text',
  inputType: '',
  placeholder: '',
  labelText: '',
  required: false,
  isValid: true,
  errorText: 'This field is required',
  options: [],
  onBlur: () => {}
};

export default memo(FormInput);
