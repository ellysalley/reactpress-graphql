import { withRouter } from "next/router";
import PostList from "../components/ui/PostList";
import wpapi from "../lib/wpapi";

class TagPage extends React.Component {
  static async getInitialProps({ query }) {
    const tags = await wpapi.tags().slug(query.slug);
    const tag = tags[0];
    const posts = await wpapi
      .posts()
      .tags(tag.id)
      .embed();
    return { tag, posts };
  }
  render() {
    return (
      <div>
        <h1>{this.props.tag.name}</h1>
        {<PostList posts={this.props.posts} />}
      </div>
    );
  }
}

export default withRouter(TagPage);
