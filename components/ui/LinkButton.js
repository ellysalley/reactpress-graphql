import Link from "next/link";

const LinkButton = ({ children, ...rest }) => {
  return (
    <Link {...rest} prefetch>
      <a> {children}</a>
    </Link>
  );
};

export default LinkButton;
