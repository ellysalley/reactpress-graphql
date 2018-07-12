import React from "react";
import Link from "next/link";
const TagListItem = ({ tag }) => (
  <span style={styles.span}>
    <Link
      href={`/tag?slug=${tag.node.slug}`}
      as={`/tag/${tag.node.slug}`}
      prefetch
    >
      <a> {tag.node.name}</a>
    </Link>
  </span>
);

const styles = {
  span: {
    paddingRight: "5px"
  }
};

export default TagListItem;
