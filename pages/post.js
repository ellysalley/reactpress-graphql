import { withRouter } from "next/router";
import DefaultLayout from "../components/layouts/Layout";
import Post from "../components/ui/Post";
import { graphql, compose } from "react-apollo";
import withData from "../lib/apollo";
import gql from "graphql-tag";

const postPage = ({ data }) => {
  if (data.loading) return <div>Chargement</div>;
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
    return {
      variables: {
        slug: props.router.query.slug
      }
    };
  }
};

export default compose(
  withData,
  withRouter,
  graphql(query, queryOptions)
)(postPage);
