import PostList from "../components/ui/PostList";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Loader from "../components/ui/Loader";
import withNextApollo from "../../../lib/withNextApollo";
import React from "react";
import { compose } from "recompose";

const PostListPage = ({ data }) => {
  if (data.loading) return <Loader />;
  return <PostList posts={data.posts} />;
};

const query = gql`
  query posts {
    posts {
      edges {
        node {
          postId
          id
          content
          title
          slug
        }
      }
    }
  }
`;

export default compose(
  withNextApollo,
  graphql(query)
)(PostListPage);
