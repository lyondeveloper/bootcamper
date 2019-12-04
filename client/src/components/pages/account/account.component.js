import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardTitle,
  Col,
  Row,
  Jumbotron,
  Button
} from "reactstrap";

const Account = () => (
  <Fragment>
    <div className="section">
      <Row>
        <Col md={6}>
          <Jumbotron>
            <h1 className="display-4 text-truncate">
              {" "}
              <i className="fas fa-user" /> Manage Account
            </h1>

            <p> If you forgot your password, here you can recover it. </p>
            <Link to="/account/manage-account">
              <Button className="btn btn-block" color="primary">
                {" "}
                Visit{" "}
              </Button>{" "}
            </Link>
          </Jumbotron>
        </Col>

        <Col md={6}>
          <Jumbotron>
            <h1 className="display-4 text-truncate">
              {" "}
              <i className="fas fa-search" /> Manage Reviews
            </h1>

            <p> If you forgot your password, here you can recover it. </p>
            <Link to="/account/manage-account">
              <Button className="btn btn-block" color="primary">
                {" "}
                Visit{" "}
              </Button>{" "}
            </Link>
          </Jumbotron>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Jumbotron>
            <h1 className="display-4 text-truncate">
              {" "}
              <i className="fas fa-search" /> Manage Reviews
            </h1>

            <p> If you forgot your password, here you can recover it. </p>
            <Link to="/account/manage-account">
              <Button className="btn btn-block" color="primary">
                {" "}
                Visit{" "}
              </Button>{" "}
            </Link>
          </Jumbotron>
        </Col>

        <Col md={6}>
          <Jumbotron>
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">
              This is a simple hero unit, a simple Jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-2" />
            <p>
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
          </Jumbotron>
        </Col>
      </Row>
    </div>
  </Fragment>
);

export default Account;
