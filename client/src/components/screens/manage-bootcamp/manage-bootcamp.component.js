import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardImg,
  Form,
  FormGroup
} from "reactstrap";
import FormInput from "../../commons/form/input.component";

const ManageBootcamp = () => {
  const [file, setFile] = useState("");

  return (
    <Container className="section">
      <Row>
        <Col md={8} className="m-auto">
          <Card className="bg-white py-2 px-4">
            <CardBody>
              <h1 className="mb-4"> Manage Bootcamp </h1>
              <Card className="mb-3">
                <Row noGutters>
                  <Col m={4}>
                    <CardImg src="../../../static/img/image_1.jpg" />
                  </Col>
                  <Col md={8}>
                    <CardBody>
                      <CardTitle>
                        <Link to="#!">
                          DevWorks Bootcamp
                          <span className="float-right badge badge-success">
                            8.8
                          </span>
                        </Link>
                      </CardTitle>
                      <span className="badge badge-dark mb-2">
                        {" "}
                        Boston, MA{" "}
                      </span>
                      <CardText>
                        Web Development, UI/UX, Mobile Development
                      </CardText>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </CardBody>
            <Form>
              <FormGroup>
                <div className="custom-file">
                  <input
                    type="file"
                    name="photo"
                    className="custom-file-input"
                    id="photo"
                  />
                  <label class="custom-file-label" htmlFor="photo">
                    Add Bootcamp Image
                  </label>
                </div>
              </FormGroup>
              <Button type="button" className="btn-light btn-block mb-2">
                {" "}
                Upload Image{" "}
              </Button>
            </Form>
            <div className="mb-2">
              <Link to={`/edit-bootcamp/${bootcamp.id}`}>
                <Button color="primary" className="btn-block">
                  {" "}
                  Edit Bootcamp Details{" "}
                </Button>
              </Link>
            </div>

            <div className="mb-2">
              <Link to="/account/manage-courses">
                <Button color="secondary" className="btn-block">
                  {" "}
                  Manage Courses{" "}
                </Button>
              </Link>
            </div>

            <div className="mb-2">
              <Button className="btn btn-danger btn-block">
                {" "}
                Remove Bootcamp{" "}
              </Button>
            </div>

            <p className="text-muted mt-4">
              {" "}
              * You can only add one bootcamp per account.{" "}
            </p>
            <p class="text-muted">
              * You must be affiliated with the bootcamp in some way in order to
              add it to DevCamper.
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageBootcamp;
