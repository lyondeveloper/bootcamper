import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectHasExpired } from "../../../redux/users/users.selectors";

const SessionExpired = ({ hasExpired }) => {
  if (hasExpired) return <h1>has expired true</h1>;

  return <h1>has expired false</h1>;
};

const mapStateToProps = createStructuredSelector({
  hasExpired: selectHasExpired
});

export default connect(mapStateToProps)(SessionExpired);
