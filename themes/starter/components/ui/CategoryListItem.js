import Link from "next/link";
const CategoryListItem = ({ term }) => (
  <span style={styles.span}>
    <Link
      href={`/category?slug=${term.node.slug}`}
      as={`/category/${term.node.slug}`}
      prefetch
    >
      <a>{term.node.name}</a>
    </Link>
  </span>
);

const styles = {
  span: {
    paddingRight: "5px"
  }
};

export default CategoryListItem;
