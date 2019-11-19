import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Components
import Sidebar from '../../screens/bootcamps/sidebar/sidebar.component';
import Filter from '../../screens/bootcamps/filter/filter.component';
import BootcampOverview from '../../screens/bootcamps/bootcamp-overview/bootcamp-overview.component';

import { Container, Row, Col, Card, CardBody, Form, Button } from 'reactstrap';

const Bootcamps = () => {
  return (
    <section className='browse mt-5 '>
      <Container>
        <Row>
          <Col md={4}>
            <Sidebar />
            <Filter />
            <BootcampOverview />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Bootcamps;
