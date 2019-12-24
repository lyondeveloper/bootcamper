import React from "react";
import { CardTitle, CardText, CardBody, CardHeader, Card } from "reactstrap";

import moment from "moment";

const ReviewPreview = ({ review }) => {
  const date = moment(review.createdAt).format("MMMM Do YYYY");

  return (
    <Card id={review.id} className="mb-3">
      <CardHeader className="bg-dark text-white"> {review.title} </CardHeader>
      <CardBody>
        <CardTitle className="d-flex justify-content-between">
          <span>
            {" "}
            Rating: <span className="text-success"> {review.rating} </span>{" "}
          </span>
          <span>
            Created: <span className="font-weight-bold">{date}</span>{" "}
          </span>
        </CardTitle>
        <CardText className="text-justify">{review.text}</CardText>
        <p className="text-muted"> Writtern By: {review.user.name} </p>
      </CardBody>
    </Card>
  );
};

export default ReviewPreview;
