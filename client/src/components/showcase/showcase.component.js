import React from 'react';

import {
  Container,
  CardGroup,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Form,
  FormFeedback,
  Row,
  Col,
  FormGroup
} from 'reactstrap';

import {
  ShowcaseContainer,
  DarkOverlay,
  ShowcaseInner
} from './showcase.styles';

const ShowCase = () => {
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
