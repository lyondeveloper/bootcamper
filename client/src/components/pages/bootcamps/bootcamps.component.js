import React from 'react';

// Components
import Sidebar from '../../screens/bootcamps/sidebar/sidebar.component';
import Filter from '../../screens/bootcamps/filter/filter.component';
import BootcampOverviewContainer from '../../screens/bootcamps/bootcamp-overview/bootcamp-overview.container';

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
          <BootcampOverviewContainer />
        </Col>
      </Row>
    </Container>
  </section>
);

export default Bootcamps;
