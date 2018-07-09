import { withRouter } from "next/router";
import PostList from "../components/ui/PostList";
import { compose } from "recompose";
import gql from "graphql-tag";
import Loader from "../components/ui/Loader";
import { graphql } from "react-apollo";
import { withNextApollo } from "../lib/apollo";

class TagPage extends React.Component {
  render() {
    const { data } = this.props;
    if (data.loading) return <Loader />;
    console.log(data);
    return (
      <div>
        <h1>{data.tags.edges[0].node.name}</h1>
        {<PostList posts={data.posts} />}
      </div>
    );
  }
}

const query = gql`
  query postsByTagSlug($tag: String!) {
    tags(where: { slug: "platon" }) {
      edges {
        node {
          name
          description
        }
      }
    }
    posts(where: { tag: $tag }) {
      edges {
        node {
          id
          postId
          title
          content
          slug
        }
      }
    }
  }
`;

const queryOptions = {
  options: props => {
    return {
      variables: {
        tag: props.router.query.slug
      }
    };
  }
};

export default compose(
  withNextApollo,
  withRouter,
  graphql(query, queryOptions)
)(TagPage);
