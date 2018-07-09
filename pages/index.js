import Layout from "../components/layouts/Layout";
import PostList from "../components/ui/PostList";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import withData from "../lib/apollo";
import { compose } from "recompose";

const PostListPage = ({ data }) => {
  if (data.loading) return <div>Chargement</div>;
  return <Layout>{<PostList posts={data.posts} />}</Layout>;
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

export default compose(
  withData,
  graphql(query)
)(PostListPage);
