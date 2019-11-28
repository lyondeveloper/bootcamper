import React from 'react';

// Components
import Sidebar from './sidebar/sidebar.component';
import Filter from './filter/filter.component';
import BootcampsOverview from './bootcamps-overview/bootcamps-overview.component';

import { Container, Row, Col } from 'reactstrap';

const Bootcamps = () => (
  <section className='section'>
    <Container>
      <Row>
        <Col md={4}>
          <Sidebar />
          <Filter />
        </Col>
        <Col md={8}>
          <BootcampsOverview />
        </Col>
      </Row>
    </Container>
  </section>
);

export default Bootcamps;
