import React from 'react';
import { Row, Col, Card, CardBody, Form, Button } from 'reactstrap';

import FormInput from '../../../commons/form/input.component';

const Sidebar = () => {
  return (
    <Card className='mb-4'>
      <CardBody>
        <h3 className='mb-3'>By Location</h3>
        <Form>
          <Row>
            <Col md={6}>
              <FormInput
                onChange={() => {}}
                value=''
                name='miles'
                inputType='text'
                placeholder='Miles From'
                required
              />
            </Col>

            <Col md={6}>
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
          <Button color='danger' className='btn-primary btn-block'>
            Find Bootcamps
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default Sidebar;
