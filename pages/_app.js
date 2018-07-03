/**
 * Next.js uses the App component to initialize all the pages.
 * You can override it and control the page initialization.
 */
import App, { Container } from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import "../css/typography.css";
import "../css/globals.css";
import "../css/nprogress.css";
import React from "react";
import withApolloClient from "../services/withApolloClient";
import { ApolloProvider } from "react-apollo";

// display a loader a the top of our page
Router.onRouteChangeStart = url => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class ReactpressApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <title>REACTPRESS DEMO</title>
        </Head>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(ReactpressApp);
