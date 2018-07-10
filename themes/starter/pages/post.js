import React from "react";
import { withRouter } from "next/router";
import Post from "../components/ui/Post";
import Loader from "../components/ui/Loader";
import { graphql, compose } from "react-apollo";
import withNextApollo from "../../../decorators/withNextApollo";
import gql from "graphql-tag";

const postPage = ({ data }) => {
  if (data.loading) return <Loader />;
  return <Post post={data.post} />;
};

const query = gql`
  query postBySlug($slug: String!) {
    post: postBy(slug: $slug) {
      date
      title
      content
      author {
        name
        id
      }
      categories {
        edges {
          node {
            categoryId
            name
            slug
          }
        }
      }
      tags {
        edges {
          node {
            tagId
            name
            slug
          }
        }
      }
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
)(postPage);
