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
  options,
  rows,
  valueClassname,
  step
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

    case 'textArea':
      inputContent = (
        <textarea
          name={name}
          id={id}
          rows={rows}
          className={className}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      );

      break;

    case 'range':
      inputContent = (
        <Fragment>
          <Label for={name}>
            {labelText}: {' '}
            <span className={valueClassname}>
              {value}
            </span>
          </Label>
          <Input
            name={name}
            type='range'
            className={className}
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        </Fragment>
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
                <option key={option.id}> {option.text || option.value} </option>
              ))}
          </Input>
        </Fragment>
      );

      break;

    case 'file':
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
          />
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
  rows: PropTypes.string,
  valueClassname: PropTypes.string,
  step: PropTypes.string,
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
  rows: '',
  step: '',
  valueClassname: '',
  options: [],
  onBlur: () => { }
};

export default memo(FormInput);
