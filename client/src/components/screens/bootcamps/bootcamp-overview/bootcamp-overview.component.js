import React, { useEffect, Fragment } from 'react';
import Image from '../../../../static/img/image_1.jpg';

import { Col, Row, Card, CardBody, CardTitle, CardText } from 'reactstrap';

import Spinner from '../../../commons/spinner/spinner.component';

const BootcampOverview = ({ getBootcamps, bootcamps, isLoaded }) => {
  useEffect(() => {
    getBootcamps();
  }, [getBootcamps]);
  let bootcampsContent;

  if (!isLoaded) {
    bootcampsContent = <Spinner />;
  } else {
    bootcampsContent = bootcamps.map(bootcamp => (
      <Card className='mb-3'>
        <Row noGutters>
          <Col md={4}>
            <img src={Image} className='card-img' alt='...' />
          </Col>
          <Col md={8}>
            <Card>
              <CardBody>
                <CardTitle>
                  {bootcamp.name}
                  <span className='float-right badge badge-success'>
                    {' '}
                    Rating: {bootcamp.rating ? bootcamp.rating : 0}{' '}
                  </span>
                </CardTitle>
                <span className='badge badge-dark mb-5'>
                  {` ${bootcamp.location.street}, ${bootcamp.location.state}`}
                </span>
                <CardText>{bootcamp.careers.join(', ')}</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Card>
    ));
  }

  return <Fragment>{bootcampsContent}</Fragment>;
};

export default BootcampOverview;
