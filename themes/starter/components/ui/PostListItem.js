import React from "react";
import LinkButton from "./LinkButton";
import striptags from "striptags";

const PostListItem = ({ post }) => (
  <div style={{ marginBottom: "2rem" }}>
    <style>
      {/* hack to hide default more-link button from wordpress*/}
      {".more-link{display:none}"}
    </style>
    <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
    <div>{striptags(post.content).substr(0, 300)} ...</div>
    <p>
      <LinkButton href={`/post?slug=${post.slug}`} as={"/post/" + post.slug}>
        Read more
      </LinkButton>
    </p>
  </div>
);

export default PostListItem;
