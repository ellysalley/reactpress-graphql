import AuthorList from "../ui/AuthorList";
import moment from "moment";

const Page = ({ page }) => (
  <div>
    <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
    <div dangerouslySetInnerHTML={{ __html: page.content }} />
  </div>
);

export default Page;
