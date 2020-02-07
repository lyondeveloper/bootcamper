import React from "react";
import { Link, withRouter } from "react-router-dom";

import { Col, Row, Card, CardBody, CardTitle, CardText } from "reactstrap";

import Image from "../../../../static/img/image_1.jpg";

const BootcampPreview = ({ id, bootcamp, match }) => (
  <Card id={id} className="mb-3">
    <Row noGutters>
      <Col md={4}>
        <img src={Image} className="card-img" alt="..." />
      </Col>
      <Col md={8}>
        <Card>
          <CardBody>
            <CardTitle>
              <Link to={`${match.path}/${bootcamp.id}`}>{bootcamp.name}</Link>
              <span className="float-right badge badge-success">
                {" "}
                Rating: {bootcamp.rating ? bootcamp.rating : 0}{" "}
              </span>
            </CardTitle>
            <span className="badge badge-dark mb-5">
              {` ${bootcamp.location.street}, ${bootcamp.location.state}`}
            </span>
            <CardText>{bootcamp.careers.join(", ")}</CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Card>
);

export default withRouter(BootcampPreview);
