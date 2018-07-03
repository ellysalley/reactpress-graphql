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
      {/*
      {post._embedded["wp:term"][0].length > 0 && (
        <div>
          Catégories: <CategoryList terms={post._embedded["wp:term"][0]} />
        </div>
      )}
      {post._embedded["wp:term"][1].length > 0 && (
        <div>
          Tags: <TagList tags={post._embedded["wp:term"][1]} />
        </div>
      )}
      */}
    </div>
  );
};

export default Post;
