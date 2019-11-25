import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

const Bootcamp = ({ bootcamp, getSingleBootcamp, match }) => {
  useEffect(() => {
    getSingleBootcamp(match.params.slug);
  }, [getSingleBootcamp, match.params.slug]);
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
                {bootcamp.averageCost ? bootcamp.averageCost : 0}{' '}
              </span>{' '}
            </p>
            {/* courses section: TODO */}

            {/* <div class='card mb-3'>
              <h5 class='card-header bg-primary text-white'>
                Front End Web Development
              </h5>
              <div class='card-body'>
                <h5 class='card-title'>Duration: 8 Weeks</h5>
                <p class='card-text'>
                  This course will provide you with all of the essentials to
                  become a successful frontend web developer. You will learn to
                  master HTML, CSS and front end JavaScript, along with tools
                  like Git, VSCode and front end frameworks like Vue
                </p>
                <ul class='list-group mb-3'>
                  <li class='list-group-item'>Cost: $8,000 USD</li>
                  <li class='list-group-item'>Skill Required: Beginner</li>
                  <li class='list-group-item'>
                    Scholarship Available:{' '}
                    <i class='fas fa-check text-success' />{' '}
                  </li>
                </ul>
              </div>
            </div>

            <div class='card mb-3'>
              <h5 class='card-header bg-primary text-white'>
                Full Stack Web Development
              </h5>
              <div class='card-body'>
                <h5 class='card-title'>Duration: 12 Weeks</h5>
                <p class='card-text'>
                  In this course you will learn full stack web development,
                  first learning all about the frontend with HTML/CSS/JS/Vue and
                  then the backend with Node.js/Express/MongoDB
                </p>
                <ul class='list-group mb-3'>
                  <li class='list-group-item'>Cost: $10,000 USD</li>
                  <li class='list-group-item'>Skill Required: Intermediate</li>
                  <li class='list-group-item'>
                    Scholarship Available:{' '}
                    <i class='fas fa-times text-danger' />{' '}
                  </li>
                </ul>
              </div>
            </div> */}
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
