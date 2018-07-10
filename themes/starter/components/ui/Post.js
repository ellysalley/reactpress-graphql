import AuthorList from "../ui/AuthorList";
import CategoryList from "../ui/CategoryList";
import TagList from "../ui/TagList";
import moment from "moment";

const Post = ({ post }) => {
  return (
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
      <p>
        <em>
          by {post.author.name} -
          {moment(post.date).format("LLL")}
        </em>
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <div>
        Catégories: <CategoryList categories={post.categories} />
      </div>
      <div>
        Tags: <TagList tags={post.tags} />
      </div>
    </div>
  );
};

export default Post;
