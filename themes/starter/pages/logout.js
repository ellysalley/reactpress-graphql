import React from "react";
import { withRouter } from "next/router";
import { compose } from "recompose";
import { setToken } from "../../../lib/auth";

class LogoutPage extends React.Component {
  componentDidMount() {
    setToken(null);
    this.props.router.push("/");
  }

  render() {
    return null;
  }
}

export default compose(withRouter)(LogoutPage);
