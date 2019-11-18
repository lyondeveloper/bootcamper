import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import FormInput from '../../commons/form/input.component';

import { Container, Row, Col, Card, CardBody } from 'reactstrap';

const Bootcamps = () => {
  return (
    <section className='browse my-5'>
      <Container>
        <Row>
          <Col md={4}>
            <FormInput
              onChange={() => {}}
              value=''
              name='miles'
              inputType='text'
              placeholder='Miles From'
              required
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Bootcamps;
