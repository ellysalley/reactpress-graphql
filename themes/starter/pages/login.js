import React from "react";
import { withRouter } from "next/router";
import LoginForm from "../components/ui/LoginForm";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { compose } from "recompose";
import withData from "../../../lib/withNextApollo";
import { setToken } from "../../../lib/auth";

/**
 * Logs user to Wordpress from the LoginForm user and password
 * @param {React.Component} LoginForm
 */
class LoginFormContainer extends React.Component {
  state = {
    graphQLErrors: null
  };
  handleSubmit = async ({ password, username }) => {
    const { login, history } = this.props;
    try {
      const result = await login({ variables: { password, username } });
      setToken(result.data.login.authToken);
      this.props.router.push("/account");
      //await apolloClient.resetStore();
    } catch (error) {
      this.setState({
        errors: error.graphQLErrors
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.errors && JSON.stringify(this.state.errors)}
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const query = gql`
  mutation logToWordpress($username: String!, $password: String!) {
    login(
      input: {
        username: $username
        password: $password
        clientMutationId: "42"
      }
    ) {
      authToken
      refreshToken
    }
  }
`;

export default compose(
  withRouter,
  withData,
  graphql(query, { name: "login" })
)(LoginFormContainer);
