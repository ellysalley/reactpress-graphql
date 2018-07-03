import { withRouter } from "next/router";
import DefaultLayout from "../components/layouts/Layout";
import Post from "../components/ui/Post";
import wpapi from "../services/wpapi";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

const postPage = ({ data }) => {
  if (!data.post) return null;
  return <DefaultLayout>{<Post post={data.post} />}</DefaultLayout>;
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
    }
  }
`;

const queryOptions = {
  options: props => {
    console.log("post", props);
    return {
      variables: {
        slug: props.router.query.slug
      }
    };
  }
};

export default compose(
  withRouter,
  graphql(query, queryOptions)
)(postPage);
