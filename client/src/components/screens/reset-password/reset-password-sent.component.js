import React from 'react';
import { Col, Row, Container, Card, CardBody } from 'reactstrap'

const ResetPasswordSent = () => (
  <Container className='mt-5'>
    <Row>
      <Col md={8} className='m-auto'>
        <Card className="bg-white">
          <CardBody>
            <h2 className="d-3">
              You will receive an email for the reset of your password, stay in touch!
            </h2>
            <div className="text-center">
              <i class="fas fa-check-circle fa-6x text-success" />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default ResetPasswordSent;
