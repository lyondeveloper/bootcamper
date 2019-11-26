import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  ListGroupItem,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardText
} from 'reactstrap';

const Bootcamp = ({ bootcamp, getSingleBootcamp, match, isLoaded }) => {
  useEffect(() => {
    getSingleBootcamp(match.params.id);
  }, [getSingleBootcamp, match.params.id]);

  debugger;

  let coursesContent;

  if (Object.keys(bootcamp).length > 0) {
    if (bootcamp.courses.length > 0) {
      coursesContent = bootcamp.courses.map(course => (
        <Card className='mb-3'>
          <CardHeader className='bg-primary text-white'>
            {course.title}
          </CardHeader>
          <CardBody>
            <CardTitle> Duration: {course.weeks} </CardTitle>
            <CardText> {course.description} </CardText>
            <ListGroup className='mb-3'>
              <ListGroupItem>Cost: {course.tuition}</ListGroupItem>
              <ListGroupItem>
                Skill Required: {course.minimumSkill}
              </ListGroupItem>
              <ListGroupItem>
                Scholarship Available:{' '}
                {course.scholarshipAvailable ? (
                  <i className='fas fa-check text-success' />
                ) : (
                  <i className='fas fa-times text-danger' />
                )}
              </ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
      ));
    } else {
      coursesContent = (
        <h3 className='text-primary'>No courses have been added yet;</h3>
      );
    }
  }

  return (
    <div className='section'>
      <Container>
        <Row>
          <Col md={8}>
            <h1> {bootcamp.name} </h1>
            <p>{bootcamp.description}</p>
            <p className='lead mb-4'>
              {' '}
              Average Course Cost:{' '}
              <span className='text-primary'>
                {' '}
                {bootcamp.averageCost}{' '}
              </span>{' '}
            </p>
            {/* Courses: TODO => Separate into new single component */}
            {coursesContent}
          </Col>

          <Col md={4}>
            {/* <img src="" alt=""/> */}
            {/* RATING TO DO: I need to create the query to bring the respective ratings */}
            <h1 className='text-center-my-4'>
              {' '}
              <div className='badge badge-secondary badge-success rounded-circle p-3'>
                8.8
              </div>{' '}
              Rating{' '}
            </h1>

            <Link to='/reviews'>
              <Button className='btn-dark btn-block my-3'>
                <i className='fas fa-comments' /> Read Reviews
              </Button>
            </Link>

            <Link to='/add-review'>
              <Button className='btn-light btn-block my-3'>
                <i className='fas fa-pencil-alt' /> Write a Review
              </Button>
            </Link>

            <Link to={bootcamp.website} target='_blank'>
              <Button className='btn-secondary btn-block my-3'>
                <i className='fas fa-globe' /> Visit Website
              </Button>
            </Link>

            {/* housing, TODO: create new component for list group item with icon */}
            <ListGroup className='list-group-flush mt-4'>
              <ListGroupItem>
                <i
                  className={`${
                    bootcamp.housing
                      ? 'fas fa-check text-success'
                      : ' fas fa-times text-danger'
                  }`}
                />
                <span className='ml-2'>Housing</span>
              </ListGroupItem>

              <ListGroupItem>
                <i
                  className={`${
                    bootcamp.jobAssistance
                      ? 'fas fa-check text-success'
                      : 'fas fa-times text-danger'
                  }`}
                />
                <span className='ml-2'> Job Assistance </span>
              </ListGroupItem>

              <ListGroupItem>
                <i
                  className={`${
                    bootcamp.jobGuarantee
                      ? 'fas fa-check text-success'
                      : ' fas fa-times text-danger'
                  }`}
                />
                <span className='ml-2'> Job Guarantee </span>
              </ListGroupItem>

              <ListGroupItem>
                <i
                  className={`${
                    bootcamp.acceptGi
                      ? 'fas fa-check text-success'
                      : ' fas fa-times text-danger'
                  }`}
                />
                <span className='ml-2'> Accepts GI Bill </span>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bootcamp;
