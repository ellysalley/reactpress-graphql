import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { compose } from "recompose";
import Loader from "../components/ui/Loader";
import withNextApollo from "../../../lib/withNextApollo";

const AccountPage = ({ data }) => {
  if (data.loading) return <Loader />;
  if (!data.user) return <div>Forbidden</div>;
  return (
    <div>
      <h1>{data.user.name}</h1>
      <h2>{data.user.email}</h2>
    </div>
  );
};

const query = gql`
  query viewer {
    user: viewer {
      email
      name
    }
  }
`;

const queryOptions = {
  options: props => ({
    variables: {}
  })
};

export default compose(
  withNextApollo,
  graphql(query, queryOptions)
)(AccountPage);
