import React, { useState } from 'react';

import { Container, Row, Col } from 'reactstrap';

import { initialState } from './showcase.model';

import { FormInput } from '../commons/form/input.component';

import {
  ShowcaseContainer,
  DarkOverlay,
  ShowcaseInner
} from './showcase.styles';

const ShowCase = () => {
  const [state, setState] = useState({ ...initialState });

  const { formPayload, validationRules } = state;

  const handleChange = ({ target: { name, value } }) =>
    setState({ ...state, [name]: value });

  const isValid = () => {
    const keys = Object.keys(formPayload);

    keys.forEach(key => {
      if (formPayload[key] === '') {
        validationRules[key] = false;
      } else {
        validationRules[key] = true;
      }
    });
    debugger;
  };

  isValid();

  return (
    <ShowcaseContainer imageUrl='../../static/img/showcase.jpg'>
      <DarkOverlay>
        <Container>
          <ShowcaseInner>
            <h1 className='display-4'>Find a Code Bootcamp</h1>
            <p className='lead'>
              Find, rate and read reviews on coding bootcamps
            </p>
          </ShowcaseInner>
        </Container>
      </DarkOverlay>
    </ShowcaseContainer>
  );
};

export default ShowCase;
