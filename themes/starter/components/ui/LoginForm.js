import React from "react";
import { withRouter } from "next/router";
import { reduxForm, Field } from "redux-form";
import { compose } from "recompose";

export class LoginForm extends React.Component {
  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field label="Email" name="username" component="input" type={"text"} />
        <Field
          label="Mot de passe"
          name="password"
          component="input"
          type="password"
        />
        <button type="submit">Se connecter</button>
      </form>
    );
  }
}

export default compose(
  reduxForm({
    form: "login",
    initialValues: {
      email: "",
      password: ""
    }
  })
)(LoginForm);
