import Layout from "../components/layouts/Layout";
import PostList from "../components/ui/PostList";
import { withRouter } from "next/router";
import wpapi from "../services/wpapi";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

const PostListPage = ({ data: { posts } }) => {
  return <Layout>{<PostList posts={posts} />}</Layout>;
};

const query = gql`
  query posts {
    posts {
      edges {
        node {
          id
          excerpt(format: RENDERED)
          title
          slug
        }
      }
    }
  }
`;

export default compose(graphql(query))(PostListPage);
