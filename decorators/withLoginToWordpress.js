import React from "react";
import { withRouter } from "next/router";
import withNextApollo from "../../../../decorators/withNextApollo";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { compose } from "recompose";
import { setToken } from "../../../../lib/auth";
//import apolloClient from "../../lib/apolloClient";

/**
 * Logs user to Wordpress from the LoginForm user and password
 * @param {React.Component} LoginForm
 */
export default function withLoginToWordpress(LoginForm) {
  class LoginFormContainer extends React.Component {
    state = {
      graphQLErrors: null
    };
    handleSubmit = async ({ password, username }) => {
      const { login, history } = this.props;
      /*
      try {
        const result = await login({ variables: { password, email } });
        setToken(result.data.login.jwt);
        await apolloClient.resetStore();
        history.push("/admin");
      } catch (error) {
        this.setState({
          errors: error.graphQLErrors
        });
      }
      */
    };

    componentDidMount() {
      //this.timeout = setInterval(this.props.data.refetch, 1000);
    }

    componentWillUnmount() {
      //clearInterval(this.timeout);
    }

    render() {
      return null;
      return (
        <div>
          {/*
          {this.state.errors && <LoginErrors errors={this.state.errors} />}
          <LoginForm onSubmit={this.handleSubmit} />
          */}
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

  return compose(
    withNextApollo,
    withRouter,
    graphql(query, { name: "login" })
  )(LoginFormContainer);
}

const LoginErrors = ({ errors }) => {
  return (
    <div className="message is-danger">
      <div className="message-body">
        {errors.map(error => {
          return <p key={error.message}>{error.message}</p>;
        })}
      </div>
    </div>
  );
};
