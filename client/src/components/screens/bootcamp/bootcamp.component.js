import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

const Bootcamp = ({ bootcamp, getSingleBootcamp, match }) => {
  useEffect(() => {
    getSingleBootcamp(match.params.slug);
  }, [getSingleBootcamp]);
  // debugger;
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bootcamp;
