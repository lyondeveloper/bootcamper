import React from 'react';
import {
  Col,
  Row,
  Container,
  CardTitle,
  CardText,
  CardBody,
  CardHeader,
  Card,
  Button
} from 'reactstrap';

const ReviewPreview = ({ review }) => {
  return (
    <Card id={review.id} className='mb-3'>
      <CardHeader className='bg-dark text-white'> {review.title} </CardHeader>
      <CardBody>
        <CardTitle>
          {' '}
          Rating: <span className='text-success'> {review.rating} </span>{' '}
        </CardTitle>
        <CardText>{review.text}</CardText>
        <p className='text-muted'> Writtern By: {review.user.name} </p>
      </CardBody>
    </Card>
  );
};

export default ReviewPreview;
