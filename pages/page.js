import { withRouter } from "next/router";
import Page from "../components/ui/Page";
import wpapi from "../lib/wpapi";

class PagePage extends React.Component {
  static async getInitialProps({ query }) {
    const pages = await wpapi
      .pages()
      .slug(query.slug)
      .embed();
    return { page: pages[0] };
  }

  render() {
    return <div>{<Page page={this.props.page} />}</div>;
  }
}

export default withRouter(PagePage);
