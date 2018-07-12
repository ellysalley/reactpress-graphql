import React from "react";
import TagListItem from "./TagListItem";

const TagList = ({ tags }) => (
  <span>
    {tags.edges.map(edge => <TagListItem key={edge.node.tagId} tag={edge} />)}
  </span>
);

export default TagList;
