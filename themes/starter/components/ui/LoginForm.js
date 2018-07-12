import React from "react";
import { withRouter } from "next/router";
import { reduxForm, Field } from "redux-form";
import { compose } from "recompose";

export class LoginForm extends React.Component {
  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <form style={styles.form} onSubmit={handleSubmit}>
      <div>Login with demo / demo</div>
        <div style={styles.fieldWrapper}>
          <Field
            label="Email"
            name="username"
            component="input"
            type={"text"}
          />
        </div>
        <div style={styles.fieldWrapper}>
          <Field
            label="Mot de passe"
            name="password"
            component="input"
            type="password"
          />
        </div>
        <div style={styles.fieldWrapper}>
        <button type="submit">Se connecter</button>
        </div>
      </form>
    );
  }
}

const styles = {
  form: {
    textAlign: "center"
  },
  fieldWrapper: {
    padding: "1rem"
  }
};

export default compose(
  reduxForm({
    form: "login",
    initialValues: {
      email: "",
      password: ""
    }
  })
)(LoginForm);
