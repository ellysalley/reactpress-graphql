/**
 * Next.js uses the App component to initialize all the pages.
 * You can override it and control the page initialization.
 */
import App, { Container } from "next/app";
import Router from "next/router";
import React from "react";
import withApolloClient from "../services/withApolloClient";
import { ApolloProvider } from "react-apollo";
import NProgress from "nprogress";
import "../css/typography.css";
import "../css/globals.css";
import "../css/nprogress.css";

// display a loader a the top of our page
Router.onRouteChangeStart = url => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
