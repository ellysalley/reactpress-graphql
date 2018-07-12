import React from "react";
import { withRouter } from "next/router";
import LoginForm from "../components/ui/LoginForm";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { compose } from "recompose";
import withNextApollo from "../../../decorators/withNextApollo";
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
      // await apolloClient.resetStore();
      //history.push("/");
    } catch (error) {
      this.setState({
        errors: error.graphQLErrors
      });
    }
  };

  componentDidMount() {
    //this.timeout = setInterval(this.props.data.refetch, 1000);
  }

  componentWillUnmount() {
    //clearInterval(this.timeout);
  }

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
  withNextApollo,
  graphql(query, { name: "login" })
)(LoginFormContainer);
