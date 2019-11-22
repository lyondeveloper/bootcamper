import React from 'react';

// Components
import Sidebar from './sidebar/sidebar.component';
import Filter from './filter/filter.component';
import BootcampsOverviewContainer from './bootcamps-overview/bootcamps-overview.container';

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
          <BootcampsOverviewContainer />
        </Col>
      </Row>
    </Container>
  </section>
);

export default Bootcamps;
