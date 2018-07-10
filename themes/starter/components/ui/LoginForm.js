import React from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "recompose";
import withLoginToServer from "./withLoginToServer";
import ButtonSubmitWithLoader from "../ui/bulma/ButtonSubmitWithLoader";

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
        <ButtonSubmitWithLoader
          className="button is-large is-info"
          type="submit"
          isLoading={submitting}
        >
          Se connecter
        </ButtonSubmitWithLoader>
      </form>
    );
  }
}

export default compose(
  // withLoginServer decorator must be called BEFORE reduxForm
  withLoginToServer,
  reduxForm({
    form: "login",
    initialValues: {
      email: "",
      password: ""
    }
  })
)(LoginForm);
