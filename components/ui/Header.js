import React from "react";

const Header = class extends React.PureComponent {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return <header style={styles.header}>{children}</header>;
  }
};

const styles = {
  header: {
    textAlign: "center",
    padding: "2rem 0 0 0"
  }
};

export default Header;
