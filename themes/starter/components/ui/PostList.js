import PostListItem from "./PostListItem";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.edges.map(post => (
        <PostListItem key={post.node.postId} post={post.node} />
      ))}
    </div>
  );
};

export default PostList;
