import React from "react";
import { withRouter } from "next/router";
import Page from "../components/ui/Page";
import Loader from "../components/ui/Loader";
import { graphql, compose } from "react-apollo";
import { withNextApollo } from "../lib/apollo";
import gql from "graphql-tag";

const PagePage = ({ data }) => {
  if (data.loading) return <Loader />;
  return <div>{<Page page={data.page} />}</div>;
};

const query = gql`
  query pageBySlug($slug: String!) {
    page: pageBy(uri: $slug) {
      title
      content
    }
  }
`;

const queryOptions = {
  options: props => {
    return {
      variables: {
        slug: props.router.query.slug
      }
    };
  }
};

export default compose(
  withNextApollo,
  withRouter,
  graphql(query, queryOptions)
)(PagePage);
