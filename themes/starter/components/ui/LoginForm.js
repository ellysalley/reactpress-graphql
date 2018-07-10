import React from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "recompose";
// import withLoginToWordpress from "../../../../decorators/withLoginToWordpress";

class LoginForm extends React.Component {
  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field className="is-large" label="Email" name="email" type="text" />
        <Field
          className="is-large"
          label="Mot de passe"
          name="password"
          component={Text}
          type="password"
        />
        <input type="submit">Se connecter</input>
      </form>
    );
  }
}

export default compose(
  // withLoginServer decorator must be called BEFORE reduxForm
  // withLoginToWordpress,
  reduxForm({
    form: "login",
    initialValues: {
      email: "",
      password: ""
    }
  })
)(LoginForm);
