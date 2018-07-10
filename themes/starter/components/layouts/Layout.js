import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import Container from "../ui/Container";
import config from "../../../../lib/publicConfig";

const Layout = class extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header>
          <Container>
            <h1>{config.siteInformations.name}</h1>
            <h2>{config.siteInformations.slogan}</h2>
          </Container>
        </Header>
        <div style={{ paddingBottom: "4rem" }}>
          <Container>
            <Navigation links={config.mainMenuLinks} />
            <div>{children}</div>
          </Container>
        </div>
      </div>
    );
  }
};

export default Layout;
