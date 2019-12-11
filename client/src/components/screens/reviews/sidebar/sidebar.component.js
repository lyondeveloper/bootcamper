import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Button } from 'reactstrap';

const Sidebar = ({ bootcamp }) => {
  return (
    <Col md={4}>
      <h1 className='text-center my-4 mb-2'>
        <span className='bagde badge-secondary badge-success rounded-circle p-3 text-center'>
          8.8
        </span>
        <span className='ml-2'>Rating</span>
      </h1>

      <Link to={`/bootcamps/${bootcamp.id}/add-review`}>
        <Button color='danger' className='btn-block my-3'>
          <i className='fas fa-pencil-alt' /> Review this bootcamp
        </Button>
      </Link>
    </Col>
  );
};

export default Sidebar;
