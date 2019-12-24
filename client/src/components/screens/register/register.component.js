import React, { useState } from "react";
import { Row, Col, Button, CardBody, Container, Form, Card } from "reactstrap";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { registerUserStart } from "../../../redux/users/users.actions";

import { initialState, layout } from "./register.model";
import FormInput from "../../commons/form/input.component";
import Spinner from "../../commons/spinner/spinner.component";
import { dynamicFormValidation } from "../../../utils/functions";
import { selectLoading } from "../../../redux/users/users.selectors";

const Register = ({ registerUser, history, loading }) => {
  const [state, setState] = useState({ ...initialState });

  const { formPayload, validationRules } = state;

  const { name, confirmPassword, email, password } = formPayload;

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, formPayload: { ...formPayload, [name]: value } });
  };

  const isValid = () => {
    const { next, rules } = dynamicFormValidation(formPayload, validationRules);

    setState({ ...state, validationRules: rules });

    return next;
  };

  const handleSubmit = () => {
    if (isValid()) {
      const roleIndex = layout.selectOption.values.findIndex(
        r => r.text === formPayload.role
      );

      const data = {
        name,
        email,
        password,
        role: layout.selectOption.values[roleIndex].value
      };

      registerUser(data, history);
    }
  };

  if (loading) return <Spinner />;

  return (
    <section className="form mt-5">
      <Container>
        <Row>
          <Col md={6} className="m-auto">
            <Card color="white" className="p-4 mb-4">
              <CardBody>
                <h1>
                  {" "}
                  <i class="fas fa-sign-in-alt"></i> Register
                </h1>
                <p>
                  Register to list your bootcamp or rate, review and favorite
                  bootcamps
                </p>
                <Form>
                  <FormInput
                    name="name"
                    value={name}
                    labelText="Name"
                    required
                    placeholder="Enter full name"
                    onChange={handleChange}
                    inputType="labelText"
                    isValid={validationRules.name}
                  />
                  <FormInput
                    name="email"
                    value={email}
                    labelText="Email"
                    required
                    inputType="labelText"
                    placeholder="Enter Email"
                    onChange={handleChange}
                    isValid={validationRules.email}
                  />
                  <FormInput
                    name="password"
                    value={password}
                    inputType="labelText"
                    labelText="Password"
                    type="password"
                    required
                    placeholder="Enter Password"
                    onChange={handleChange}
                    isValid={validationRules.password}
                  />

                  <FormInput
                    name="confirmPassword"
                    value={confirmPassword}
                    labelText="Confirm Password"
                    type="password"
                    required
                    placeholder="Confirm Password"
                    inputType="labelText"
                    onChange={handleChange}
                    isValid={validationRules.confirmPassword}
                  />
                  <FormInput
                    name="role"
                    id="role"
                    inputType="select"
                    onChange={handleChange}
                    options={layout.selectOption.values}
                    type="select"
                    labelText="User Role"
                    errorText="* You must be affiliated with the bootcamp in some way in
                    order to add it to DevCamper."
                  />
                  <Button
                    color="primary"
                    className="btn-block"
                    onClick={handleSubmit}
                  >
                    Login
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading
});

const mapDispatchToProps = dispatch => ({
  registerUser: (data, history) => dispatch(registerUserStart(data, history))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Register));
