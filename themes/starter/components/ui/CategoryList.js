import CategoryListItem from "./CategoryListItem";

const CategoryList = ({ categories }) => (
  <span>
    {categories.edges.map(edge => (
      <CategoryListItem key={edge.node.categoryId} term={edge} />
    ))}
  </span>
);

export default CategoryList;
