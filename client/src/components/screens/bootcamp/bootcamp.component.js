import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
} from "reactstrap";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
  selectSingleBootcamp,
  selectLoading
} from "../../../redux/bootcamps/bootcamp.selectors";
import { getSingleBootcampStart } from "../../../redux/bootcamps/bootcamp.actions";
import Spinner from "../../commons/spinner/spinner.component";

const Bootcamp = ({ bootcamp, getSingleBootcamp, match, loading }) => {
  useEffect(() => {
    getSingleBootcamp(match.params.id);
  }, [match.params.id]);

  let content;

  if (loading) {
    content = <Spinner />;
  } else {
    content = (
      <div className="section">
        <Container>
          <Row>
            <Col md={8}>
              <h1> {bootcamp.name} </h1>
              <p>{bootcamp.description}</p>
              <p className="lead mb-4">
                {" "}
                Average Course Cost:{" "}
                <span className="text-primary">
                  {" "}
                  {bootcamp.averageCost}{" "}
                </span>{" "}
              </p>
              {/* Courses: TODO => Separate into new single component */}
              {Object.keys(bootcamp).length > 0 &&
              bootcamp.courses.length > 0 ? (
                bootcamp.courses.map(course => (
                  <Card className="mb-3">
                    <CardHeader className="bg-primary text-white">
                      {course.title}
                    </CardHeader>
                    <CardBody>
                      <CardTitle> Duration: {course.weeks} </CardTitle>
                      <CardText> {course.description} </CardText>
                      <ListGroup className="mb-3">
                        <ListGroupItem>Cost: {course.tuition}</ListGroupItem>
                        <ListGroupItem>
                          Skill Required: {course.minimumSkill}
                        </ListGroupItem>
                        <ListGroupItem>
                          Scholarship Available:{" "}
                          {course.scholarshipAvailable ? (
                            <i className="fas fa-check text-success" />
                          ) : (
                            <i className="fas fa-times text-danger" />
                          )}
                        </ListGroupItem>
                      </ListGroup>
                    </CardBody>
                  </Card>
                ))
              ) : (
                <h3 className="text-primary"> </h3>
              )}
            </Col>

            <Col md={4}>
              {/* <img src="" alt=""/> */}
              {/* RATING TO DO: I need to create the query to bring the respective ratings, in the meantime lets hardcode it */}
              <h1 className="text-center-my-4">
                {" "}
                <div className="badge badge-secondary badge-success rounded-circle p-3">
                  8.8
                </div>{" "}
                Rating{" "}
              </h1>

              <Link to={`/reviews/${bootcamp.id}`}>
                <Button className="btn-dark btn-block my-3">
                  <i className="fas fa-comments" /> Read Reviews
                </Button>
              </Link>

              <Link to={`/add-review/${bootcamp.id}`}>
                <Button className="btn-light btn-block my-3">
                  <i className="fas fa-pencil-alt" /> Write a Review
                </Button>
              </Link>

              <Link to={bootcamp.website} target="_blank">
                <Button className="btn-secondary btn-block my-3">
                  <i className="fas fa-globe" /> Visit Website
                </Button>
              </Link>

              {/* housing, TODO: create new component for list group item with icon */}
              <ListGroup className="list-group-flush mt-4">
                <ListGroupItem>
                  <i
                    className={`${
                      bootcamp.housing
                        ? "fas fa-check text-success"
                        : " fas fa-times text-danger"
                    }`}
                  />
                  <span className="ml-2">Housing</span>
                </ListGroupItem>

                <ListGroupItem>
                  <i
                    className={`${
                      bootcamp.jobAssistance
                        ? "fas fa-check text-success"
                        : "fas fa-times text-danger"
                    }`}
                  />
                  <span className="ml-2"> Job Assistance </span>
                </ListGroupItem>

                <ListGroupItem>
                  <i
                    className={`${
                      bootcamp.jobGuarantee
                        ? "fas fa-check text-success"
                        : " fas fa-times text-danger"
                    }`}
                  />
                  <span className="ml-2"> Job Guarantee </span>
                </ListGroupItem>

                <ListGroupItem>
                  <i
                    className={`${
                      bootcamp.acceptGi
                        ? "fas fa-check text-success"
                        : " fas fa-times text-danger"
                    }`}
                  />
                  <span className="ml-2"> Accepts GI Bill </span>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return content;
};

const mapStateToProps = createStructuredSelector({
  bootcamp: selectSingleBootcamp,
  loading: selectLoading
});

const mapDispatchToProps = dispatch => ({
  getSingleBootcamp: id => dispatch(getSingleBootcampStart(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Bootcamp));
